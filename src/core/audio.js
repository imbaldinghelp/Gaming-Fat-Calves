const SFX = (() => {
  let ac = null, master = null, analyser = null, noiseBuf = null;
  const N = { C4: 262, D4: 294, E4: 330, F4: 349, G4: 392, A4: 440, B4: 494, C5: 523, D5: 587, E5: 659, Fs5: 740, F5: 698, G5: 784, A5: 880, B5: 988, C6: 1047, D6: 1175, E6: 1319, G6: 1568, A3: 220, G3: 196, E3: 165, C3: 131 };

  function init() {
    if (!ac) {
      ac = new (window.AudioContext || window.webkitAudioContext)();
      master = ac.createGain(); master.gain.value = 0.6;
      analyser = ac.createAnalyser(); analyser.fftSize = 512;
      master.connect(analyser); analyser.connect(ac.destination);
      const n = ac.sampleRate * 2; noiseBuf = ac.createBuffer(1, n, ac.sampleRate);
      const d = noiseBuf.getChannelData(0); for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1;
    }
    if (ac.state === 'suspended') ac.resume();
    return ac;
  }

  // envelope: quick attack, then exponential fade (or hold flat until the tail when o.hold)
  function env(g, t, o) {
    const dur = o.dur, v = o.vol ?? 0.1, att = o.att ?? 0.004;
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(v, t + att);
    if (o.hold) { g.gain.setValueAtTime(v, t + dur * 0.75); }
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  }
  // frequency path: [f0, f1, f2...] spread evenly over the duration
  function path(param, t, pts, dur, lin) {
    param.setValueAtTime(pts[0], t);
    for (let i = 1; i < pts.length; i++) {
      const tt = t + dur * i / (pts.length - 1);
      lin ? param.linearRampToValueAtTime(pts[i], tt) : param.exponentialRampToValueAtTime(Math.max(20, pts[i]), tt);
    }
  }
  function lfo(target, t, dur, rate, depth, type) {
    const l = ac.createOscillator(), lg = ac.createGain(); l.type = type || 'sine'; l.frequency.value = rate; lg.gain.value = depth;
    l.connect(lg); lg.connect(target); l.start(t); l.stop(t + dur + 0.05);
  }
  let bus = null, verb = null;
  // a big hall: convolution with a decaying noise burst
  function reverb() {
    if (verb && verb.context === ac) return verb;
    const len = ac.sampleRate * 2.6, ir = ac.createBuffer(2, len, ac.sampleRate);
    for (let c = 0; c < 2; c++) { const d = ir.getChannelData(c); for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3.2); }
    verb = ac.createConvolver(); verb.buffer = ir; verb.connect(master); return verb;
  }
  function out(node, o) {
    const dest = o.dest || bus || master; node.connect(dest);
    if (o.rev) { const sg = ac.createGain(); sg.gain.value = o.rev * (bus ? bus.gain.value : 1); node.connect(sg); sg.connect(reverb()); }
  }
  // a synthetic voice: a buzzy source through three formant filters that glide between vowel shapes
  // o.f: pitch path, o.segs: [[time, F1, F2, F3, loudness], ...]
  function voice(o) {
    const t = ac.currentTime + (o.at || 0), dur = o.dur;
    const src = ac.createGain(); const oscs = [];
    for (const [mul, v] of (o.layers || [[1, 1]])) {
      const os = ac.createOscillator(); os.type = o.src || 'sawtooth'; path(os.frequency, t, o.f.map(x => Math.max(20, x * mul)), dur, true);
      if (o.vib) lfo(os.detune, t, dur, o.vib[0], o.vib[1]);
      const g = ac.createGain(); g.gain.value = v; os.connect(g); g.connect(src); oscs.push(os);
    }
    let feed = src;
    if (o.grit) { const ws = ac.createWaveShaper(), c = new Float32Array(1024); for (let i = 0; i < 1024; i++) { const x = i / 511.5 - 1; c[i] = Math.tanh(x * o.grit); } ws.curve = c; src.connect(ws); feed = ws; }
    const amp = ac.createGain(); amp.gain.setValueAtTime(0.0001, t);
    const fs = [0.9, 0.55, 0.3].map(w => { const bp = ac.createBiquadFilter(); bp.type = 'bandpass'; bp.Q.value = o.q || 7; const g = ac.createGain(); g.gain.value = w; feed.connect(bp); bp.connect(g); g.connect(amp); return bp; });
    for (const [st, F1, F2, F3, a] of o.segs) {
      const tt = t + st, v = Math.max(0.0001, a * (o.vol || 0.3));
      [F1, F2, F3].forEach((F, i) => st === 0 ? fs[i].frequency.setValueAtTime(F, tt) : fs[i].frequency.linearRampToValueAtTime(F, tt));
      st === 0 ? amp.gain.setValueAtTime(v, tt) : amp.gain.linearRampToValueAtTime(v, tt);
    }
    out(amp, o); for (const os of oscs) { os.start(t); os.stop(t + dur + 0.05); }
  }

  const curves = {};
  function curve(k) { if (!curves[k]) { const c = new Float32Array(1024); for (let i = 0; i < 1024; i++) { const x = i / 511.5 - 1; c[i] = Math.tanh(x * k) / Math.tanh(k); } curves[k] = c; } return curves[k]; }
  // a pitched voice. o: {type, f:[...], dur, vol, at, att, hold, vib:[rate,cents], trem:[rate,depth], lp}
  function tone(o) {
    const t = ac.currentTime + (o.at || 0), os = ac.createOscillator(), g = ac.createGain();
    os.type = o.type || 'square'; path(os.frequency, t, o.f.length > 1 ? o.f : [o.f[0], o.f[0]], o.dur, o.lin);
    if (o.vib) lfo(os.detune, t, o.dur, o.vib[0], o.vib[1]);
    env(g, t, o); let last = g; os.connect(g);
    if (o.dist) { const ws = ac.createWaveShaper(); ws.curve = curve(o.dist); last.connect(ws); last = ws; }
    if (o.lp) { const f = ac.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = o.lp; last.connect(f); last = f; }
    if (o.trem) { const tg = ac.createGain(); tg.gain.value = 1 - o.trem[1]; lfo(tg.gain, t, o.dur, o.trem[0], o.trem[1], 'square'); last.connect(tg); last = tg; }
    out(last, o); os.start(t); os.stop(t + o.dur + 0.05);
  }
  // filtered noise. o: {ft:'lowpass'|'bandpass'|'highpass', ff:[...], q, dur, vol, at, att, hold, trem, rate}
  function noise(o) {
    const t = ac.currentTime + (o.at || 0), s = ac.createBufferSource(), f = ac.createBiquadFilter(), g = ac.createGain();
    s.buffer = noiseBuf; s.loop = true; s.playbackRate.value = o.rate || 1;
    f.type = o.ft || 'lowpass'; f.Q.value = o.q ?? 1; path(f.frequency, t, o.ff.length > 1 ? o.ff : [o.ff[0], o.ff[0]], o.dur);
    s.connect(f); f.connect(g); env(g, t, o); let last = g;
    if (o.trem) { const tg = ac.createGain(); tg.gain.value = 1 - o.trem[1]; lfo(tg.gain, t, o.dur, o.trem[0], o.trem[1], o.tremType || 'square'); g.connect(tg); last = tg; }
    out(last, o); s.start(t, Math.random()); s.stop(t + o.dur + 0.05);
  }
  // little melodies: notes is an array of [freq, beats] or freq; step = seconds per beat
  function arp(notes, step, o) {
    let at = o.at || 0;
    for (const n of notes) { const [f, b] = Array.isArray(n) ? n : [n, 1]; if (f) tone({ ...o, f: [f], dur: step * b * (o.legato ?? 0.95), at }); at += step * b; }
  }
  const R = (a, b) => a + Math.random() * (b - a);
  const cough = (at, v = 1) => { noise({ ft: 'bandpass', ff: [900, 500], q: 2.5, dur: 0.11, vol: 0.5 * v, at, att: 0.006 }); tone({ type: 'square', f: [190, 120], dur: 0.08, vol: 0.06 * v, at, lp: 900 }); };
  const thud = (at, v = 1, f = 110) => { tone({ type: 'sine', f: [f, 35], dur: 0.35, vol: 0.55 * v, at }); noise({ ft: 'lowpass', ff: [700, 90], dur: 0.35, vol: 0.5 * v, at }); };

  const SOUNDS = {
    /* ---------- Jun Jie ---------- */
    swipe: () => { noise({ ft: 'bandpass', ff: [2600, 800], q: 1.3, dur: 0.13, vol: 0.45, att: 0.01 }); tone({ type: 'triangle', f: [720, 340], dur: 0.07, vol: 0.05 }); },
    fan_throw: () => { noise({ ft: 'bandpass', ff: [700, 2600, 700], q: 2, dur: 0.42, vol: 0.4, att: 0.02, trem: [22, 0.6], tremType: 'sine' }); tone({ type: 'triangle', f: [300, 520], dur: 0.12, vol: 0.06 }); },
    fan_catch: () => {
      // the fan throw played backwards: the whirr swells in as it flies home, then a snap as he catches it
      noise({ ft: 'bandpass', ff: [800, 2600, 900], q: 2, dur: 0.34, vol: 0.4, att: 0.3, trem: [18, 0.6], tremType: 'sine' });
      tone({ type: 'triangle', f: [520, 300], dur: 0.12, vol: 0.06, at: 0.22, att: 0.1 });
      tone({ type: 'square', f: [1250], dur: 0.03, vol: 0.06, at: 0.33 }); noise({ ft: 'highpass', ff: [4000], dur: 0.03, vol: 0.15, at: 0.33 });
    },
    vac_hum: (d = 1.4) => { noise({ ft: 'lowpass', ff: [500, 900], q: 4, dur: d, vol: 0.35, att: 0.12, hold: true, trem: [28, 0.25], tremType: 'sine' }); tone({ type: 'sawtooth', f: [70, 95], dur: d, vol: 0.05, att: 0.12, hold: true, lp: 500, vib: [6, 20] }); },
    vac_blast: () => { noise({ ft: 'lowpass', ff: [3500, 200], dur: 0.25, vol: 0.55 }); tone({ type: 'square', f: [170, 45], dur: 0.2, vol: 0.18, lp: 1200 }); },
    vac_blast_big: () => { noise({ ft: 'lowpass', ff: [5000, 120], dur: 0.5, vol: 0.7 }); tone({ type: 'square', f: [220, 30], dur: 0.4, vol: 0.22, lp: 1400 }); tone({ type: 'sine', f: [90, 30], dur: 0.5, vol: 0.5, at: 0.02 }); },
    vac_charge: () => { arp([N.E5, N.A5], 0.05, { type: 'square', vol: 0.06 }); },
    dash: () => {
      // a gust of wind: soft rushing air that swells and fades, no beep
      noise({ ft: 'bandpass', ff: [380, 1300, 600], q: 0.8, dur: 0.34, vol: 0.45, att: 0.06, trem: [8, 0.25], tremType: 'sine' });
      noise({ ft: 'highpass', ff: [2500, 4500, 2500], dur: 0.28, vol: 0.12, att: 0.05 });
    },
    hurt: () => { noise({ ft: 'lowpass', ff: [1600, 300], dur: 0.1, vol: 0.5 }); tone({ type: 'square', f: [420, 110], dur: 0.15, vol: 0.14, lp: 2000 }); cough(0.13, 0.8); },
    death: () => { cough(0, 0.9); cough(0.28, 1); cough(0.52, 1.1); tone({ type: 'triangle', f: [520, 380, 70], dur: 1.2, vol: 0.13, at: 0.8, vib: [7, 30] }); noise({ ft: 'bandpass', ff: [1400, 300], q: 3, dur: 1.1, vol: 0.18, at: 0.8, att: 0.2 }); thud(2.0, 0.9, 120); },
    revive_mask: () => { noise({ ft: 'highpass', ff: [3000, 8000], dur: 0.5, vol: 0.12, att: 0.1 }); arp([N.C5, N.E5, N.G5, N.C6, N.E6, N.G6], 0.07, { type: 'square', vol: 0.06 }); arp([[N.C5, 6]], 0.12, { type: 'triangle', vol: 0.1, at: 0.42, att: 0.02 }); arp([[N.G5, 6]], 0.12, { type: 'triangle', vol: 0.08, at: 0.42, att: 0.02 }); arp([[N.E6, 6]], 0.12, { type: 'square', vol: 0.03, at: 0.42, att: 0.02 }); },
    revive_oil: () => { tone({ type: 'sine', f: [500, 1600], dur: 0.05, vol: 0.25 }); noise({ ft: 'highpass', ff: [2500], dur: 0.04, vol: 0.3 }); noise({ ft: 'highpass', ff: [4500, 6500], dur: 0.6, vol: 0.12, at: 0.08, att: 0.05, trem: [35, 0.6] }); arp([N.D5, N.Fs5, N.A5, N.D6], 0.08, { type: 'triangle', vol: 0.1, at: 0.25 }); arp([[N.A5, 5]], 0.12, { type: 'square', vol: 0.04, at: 0.57, att: 0.02 }); },
    fart: () => { tone({ type: 'sawtooth', f: [95, 70, 50], dur: 0.38, vol: 0.18, lp: 600, vib: [26, 60] }); noise({ ft: 'lowpass', ff: [500, 200], dur: 0.35, vol: 0.25, trem: [24, 0.5] }); },
    third: () => {
      // Third Form: a heavier, deeper swing with a gong-like ring so the big hit stands out
      noise({ ft: 'bandpass', ff: [1800, 450], q: 1.2, dur: 0.2, vol: 0.5, att: 0.01 });
      tone({ type: 'triangle', f: [420, 160], dur: 0.16, vol: 0.12 });
      for (const [f, v] of [[880, 0.06], [1320, 0.035], [2210, 0.02]]) tone({ type: 'sine', f: [f * 1.02, f], dur: 0.45, vol: v, att: 0.004 });
    },
    slash: () => {
      // a blade "shing": a bright scrape and a short metallic ring with a slight downward slide
      noise({ ft: 'highpass', ff: [3000, 6000], dur: 0.07, vol: 0.35, att: 0.002 });
      noise({ ft: 'bandpass', ff: [5200, 3600], q: 4, dur: 0.12, vol: 0.25 });
      for (const [f, v] of [[2950, 0.05], [4410, 0.035], [6230, 0.02]]) tone({ type: 'sine', f: [f * 1.03, f], dur: 0.32, vol: v, att: 0.003 });
    },
    skate: () => {
      // an ice skate stroke: a soft gliding "shhk" with a little blade scrape
      noise({ ft: 'bandpass', ff: [2600, 5200], q: 2.2, dur: 0.22, vol: 0.25, att: 0.06 });
      noise({ ft: 'highpass', ff: [7000], dur: 0.05, vol: 0.06, at: 0.17 });
    },
    step: () => { noise({ ft: 'bandpass', ff: [1800], q: 3, dur: 0.025, vol: 0.12 }); },

    /* ---------- the Hazed ---------- */
    hit: () => { noise({ ft: 'lowpass', ff: [1800, 300], dur: 0.08, vol: 0.5 }); tone({ type: 'square', f: [240, 90], dur: 0.07, vol: 0.1, lp: 1500 }); },
    puff: () => { noise({ ft: 'bandpass', ff: [1500, 250], q: 1.2, dur: 0.32, vol: 0.45, att: 0.01 }); tone({ type: 'sine', f: [320, 90], dur: 0.2, vol: 0.12 }); },
    disperse: () => { noise({ ft: 'bandpass', ff: [250, 3500], q: 2, dur: 0.25, vol: 0.4 }); tone({ type: 'square', f: [220, 1000], dur: 0.2, vol: 0.05, lp: 2500 }); tone({ type: 'square', f: [1500], dur: 0.04, vol: 0.05, at: 0.2 }); },
    spawn: () => {
      // FWOOOM: a gust of wind rushing past
      noise({ ft: 'bandpass', ff: [260, 1100, 380], q: 0.9, dur: 0.75, vol: 0.45, att: 0.28 });
      noise({ ft: 'lowpass', ff: [180, 520, 140], dur: 0.8, vol: 0.35, att: 0.3 });
      noise({ ft: 'highpass', ff: [2600, 4200, 1800], dur: 0.6, vol: 0.06, att: 0.25 });
    },
    swirl: () => {
      // the Hazed spinning together into Raffles: a rising tornado of wind
      noise({ ft: 'bandpass', ff: [300, 900, 500, 1300, 700, 1700], q: 1.4, dur: 2.2, vol: 0.5, att: 0.5, trem: [5, 0.55], tremType: 'sine' });
      noise({ ft: 'lowpass', ff: [140, 300, 420], dur: 2.3, vol: 0.45, att: 0.6, trem: [3, 0.35], tremType: 'sine' });
      noise({ ft: 'highpass', ff: [2400, 3800], dur: 2.0, vol: 0.06, att: 0.8, trem: [8, 0.5], tremType: 'sine' });
    },
    wisp_lunge: () => { tone({ type: 'triangle', f: [380, 1500], dur: 0.2, vol: 0.09 }); noise({ ft: 'highpass', ff: [1500, 5000], dur: 0.2, vol: 0.18 }); },
    brute_slam: () => { thud(0, 1, 120); tone({ type: 'square', f: [80, 40], dur: 0.25, vol: 0.08, lp: 400 }); },
    spit_charge: () => { noise({ ft: 'bandpass', ff: [350, 2600], q: 5, dur: 0.55, vol: 0.35, att: 0.25 }); tone({ type: 'sine', f: [150, 420], dur: 0.55, vol: 0.05, att: 0.2 }); },
    spit: () => { noise({ ft: 'lowpass', ff: [2400, 300], dur: 0.13, vol: 0.55, att: 0.003 }); tone({ type: 'square', f: [520, 120], dur: 0.09, vol: 0.12, lp: 1800 }); },

    /* ---------- Raffles ---------- */
    transform: () => { noise({ ft: 'bandpass', ff: [150, 3000], q: 2, dur: 1.3, vol: 0.35, att: 0.8 }); tone({ type: 'sawtooth', f: [60, 600], dur: 1.3, vol: 0.06, att: 0.8, lp: 2000, vib: [10, 30] }); thud(1.3, 1.2, 140); noise({ ft: 'highpass', ff: [3000, 1000], dur: 0.6, vol: 0.25, at: 1.3 }); },
    roar: () => {
      // an enraged beast roar: a gritty open-throat bellow that swells, peaks and trails off, with breath and a deep growl underneath
      voice({ f: [70, 128, 140, 118, 66], dur: 1.5, src: 'sawtooth', layers: [[1, 1], [0.5, 1], [1.03, 0.6], [0.97, 0.6]], grit: 6, q: 4, vib: [11, 45], vol: 0.6, rev: 0.35,
        segs: [[0, 600, 1100, 2400, 0], [0.08, 680, 1150, 2450, 0.8], [0.3, 820, 1250, 2500, 1.3], [0.85, 760, 1100, 2400, 1.2], [1.2, 560, 900, 2300, 0.6], [1.5, 480, 850, 2300, 0]] });
      tone({ type: 'sawtooth', f: [42, 64, 70, 38], dur: 1.5, vol: 0.22, att: 0.08, lp: 500, trem: [27, 0.6] });
      noise({ ft: 'bandpass', ff: [700, 1600, 1300, 500], q: 1.4, dur: 1.5, vol: 0.45, att: 0.12, trem: [27, 0.55], tremType: 'sine', rev: 0.3 });
      noise({ ft: 'lowpass', ff: [250, 600, 150], dur: 1.6, vol: 0.35, att: 0.1, trem: [13, 0.4] });
    },
    cane: () => { noise({ ft: 'bandpass', ff: [1600, 350], q: 1.2, dur: 0.22, vol: 0.55, att: 0.02 }); tone({ type: 'square', f: [190, 60], dur: 0.16, vol: 0.1, lp: 800 }); },
    boss_charge: () => {
      // VRRROOOM: an engine revving up and roaring past
      tone({ type: 'sawtooth', f: [55, 170, 120], dur: 0.7, vol: 0.2, att: 0.03, lp: 1300, trem: [34, 0.65] });
      tone({ type: 'sawtooth', f: [28, 86, 61], dur: 0.7, vol: 0.18, att: 0.03, lp: 600, trem: [34, 0.5] });
      tone({ type: 'square', f: [110, 340, 240], dur: 0.7, vol: 0.04, att: 0.05, lp: 1800 });
      noise({ ft: 'bandpass', ff: [250, 1100, 500], q: 1.2, dur: 0.7, vol: 0.3, att: 0.08 });
    },
    jump: () => { noise({ ft: 'bandpass', ff: [300, 1900], q: 1.5, dur: 0.4, vol: 0.4, att: 0.05 }); tone({ type: 'triangle', f: [180, 640], dur: 0.4, vol: 0.08 }); },
    land: () => {
      // the ground shakes: a deep boom, a long rumbling tail and a big echo
      noise({ ft: 'highpass', ff: [1200], dur: 0.06, vol: 0.4, rev: 0.4 });
      tone({ type: 'sine', f: [110, 40], dur: 0.9, vol: 0.7, rev: 0.5 });
      tone({ type: 'sine', f: [58, 32], dur: 1.9, vol: 0.55, att: 0.02, trem: [11, 0.55], rev: 0.3 });
      tone({ type: 'triangle', f: [90, 60], dur: 1.6, vol: 0.2, att: 0.05, trem: [14, 0.6], lp: 400 });
      noise({ ft: 'lowpass', ff: [1400, 60], dur: 0.9, vol: 0.6, rev: 0.6 });
      noise({ ft: 'lowpass', ff: [380, 120], q: 3, dur: 2.0, vol: 0.4, att: 0.1, trem: [9, 0.5], tremType: 'sine', rev: 0.3 });
      for (let i = 0; i < 6; i++) noise({ ft: 'bandpass', ff: [R(1500, 3000)], q: 2, dur: 0.05, vol: 0.12, at: 0.15 + i * R(0.08, 0.16) });
    },
    boss_shot: () => { tone({ type: 'square', f: [950, 320], dur: 0.12, vol: 0.07 }); noise({ ft: 'highpass', ff: [3000], dur: 0.05, vol: 0.15 }); },
    stone: () => { noise({ ft: 'bandpass', ff: [180, 260], q: 3, dur: 0.7, vol: 0.6, att: 0.05, trem: [17, 0.55] }); tone({ type: 'sine', f: [85, 70], dur: 0.6, vol: 0.12 }); },
    immune: () => { tone({ type: 'triangle', f: [2300], dur: 0.14, vol: 0.12 }); tone({ type: 'square', f: [3400], dur: 0.05, vol: 0.025 }); },
    flag_break: () => { noise({ ft: 'highpass', ff: [1600], dur: 0.06, vol: 0.5 }); noise({ ft: 'lowpass', ff: [900, 200], dur: 0.3, vol: 0.4, at: 0.03 }); tone({ type: 'square', f: [320, 80], dur: 0.2, vol: 0.1, lp: 1200, at: 0.02 }); },
    boss_dead: () => { noise({ ft: 'lowpass', ff: [1500, 70], dur: 2.2, vol: 0.55, trem: [9, 0.4] }); tone({ type: 'sine', f: [100, 25], dur: 2, vol: 0.45 }); arp([N.G4, N.E4, N.C4, N.G3, [N.C3, 3]], 0.18, { type: 'square', vol: 0.06, at: 0.3, lp: 1500 }); },

    /* ---------- power-ups ---------- */
    zap: () => { for (let i = 0; i < 7; i++) tone({ type: 'square', f: [R(700, 2600)], dur: 0.022, vol: 0.06, at: i * 0.025 }); noise({ ft: 'highpass', ff: [3500], dur: 0.18, vol: 0.2, trem: [60, 0.8] }); },
    chilli: () => { noise({ ft: 'highpass', ff: [5000, 3500], dur: 0.32, vol: 0.18, trem: [45, 0.7], tremType: 'sine' }); tone({ type: 'sine', f: [900, 1300], dur: 0.06, vol: 0.03 }); },
    whistle: () => {
      // one long PRRRRRRRT
      tone({ type: 'square', f: [2580, 2620, 2560], dur: 0.85, vol: 0.07, att: 0.015, hold: true, vib: [31, 150], lp: 5000 });
      noise({ ft: 'bandpass', ff: [2600], q: 6, dur: 0.85, vol: 0.12, att: 0.015, hold: true, trem: [31, 0.5] });
    },
    drone: () => { tone({ type: 'square', f: [1900, 900], dur: 0.07, vol: 0.05 }); tone({ type: 'sine', f: [3800, 1800], dur: 0.07, vol: 0.03 }); },
    tehtarik: () => { noise({ ft: 'bandpass', ff: [1300, 400], q: 1, dur: 0.32, vol: 0.45, att: 0.01 }); for (let i = 0; i < 5; i++) tone({ type: 'sine', f: [R(350, 500), R(800, 1200)], dur: 0.05, vol: 0.06, at: 0.05 + i * 0.045 }); },

    /* ---------- pickups and the world ---------- */
    coin: () => { tone({ type: 'square', f: [N.B5], dur: 0.05, vol: 0.06 }); tone({ type: 'square', f: [N.E6], dur: 0.16, vol: 0.06, at: 0.05 }); },
    clean_air: () => { noise({ ft: 'bandpass', ff: [800, 2500], q: 1, dur: 0.25, vol: 0.18, att: 0.05 }); arp([N.A5, N.E6], 0.06, { type: 'triangle', vol: 0.09, at: 0.04 }); },
    heal: () => { tone({ type: 'sine', f: [300, 200], dur: 0.08, vol: 0.15 }); tone({ type: 'sine', f: [320, 210], dur: 0.08, vol: 0.15, at: 0.12 }); arp([N.G4, N.B4, N.D5, [N.G5, 2]], 0.06, { type: 'triangle', vol: 0.1, at: 0.25 }); },
    box_break: () => { noise({ ft: 'bandpass', ff: [1000, 500], q: 1, dur: 0.14, vol: 0.6 }); noise({ ft: 'lowpass', ff: [500], dur: 0.12, vol: 0.4, at: 0.03 }); tone({ type: 'square', f: [160, 60], dur: 0.08, vol: 0.08, lp: 700 }); },
    reward_appear: () => {
      // an angel choir "aaah" on a bright major chord, with chimes falling around it
      for (const [f, d] of [[N.C5, 0], [N.E5, 3], [N.G5, -3], [N.C6, 2]]) voice({ f: [f, f], dur: 1.3, src: 'sawtooth', layers: [[1, 1], [1.004, 0.7]], q: 9, vib: [5, 14 + d], vol: 0.18, rev: 0.6,
        segs: [[0, 800, 1150, 2900, 0], [0.05, 800, 1150, 2900, 1], [0.95, 780, 1200, 2900, 0.8], [1.3, 760, 1200, 2900, 0]] });
      arp([N.C6, N.E6, N.G6, N.C6 * 2, N.G6, N.C6 * 2.52], 0.07, { type: 'sine', vol: 0.09, rev: 0.6, at: 0, legato: 3 });
      noise({ ft: 'highpass', ff: [7000], dur: 1.0, vol: 0.05, att: 0.08, rev: 0.4 });
    },
    powerup: () => { arp([N.C5, N.E5, N.G5, [N.C6, 3]], 0.075, { type: 'square', vol: 0.06 }); arp([[0, 3], [N.G5, 3]], 0.075, { type: 'triangle', vol: 0.08 }); },
    room_clear: () => {
      // a short victory fanfare: da-da-da DAAAH with a bright chord underneath
      arp([N.G5, N.G5, N.G5, [N.C6, 5]], 0.075, { type: 'square', vol: 0.05 }); arp([N.E5, N.E5, N.E5, [N.G5, 5]], 0.075, { type: 'square', vol: 0.035 });
      arp([[N.C4, 3], [N.C3, 5]], 0.075, { type: 'triangle', vol: 0.14 });
      arp([[0, 3.6], N.E6, N.G6, [N.C6 * 2, 3]], 0.05, { type: 'triangle', vol: 0.05 });
      noise({ ft: 'highpass', ff: [6000], dur: 0.5, vol: 0.07, at: 0.24, att: 0.05 });
    },
    wave: () => { arp([N.A4, N.E5], 0.1, { type: 'square', vol: 0.05 }); noise({ ft: 'lowpass', ff: [300, 900], dur: 0.3, vol: 0.18, att: 0.1 }); },
    door_open: () => { noise({ ft: 'lowpass', ff: [300, 700], dur: 0.35, vol: 0.3, att: 0.05 }); arp([N.E4, N.A4], 0.1, { type: 'triangle', vol: 0.1, at: 0.1 }); },
    locked: () => { for (let i = 0; i < 3; i++) { noise({ ft: 'bandpass', ff: [700], q: 2, dur: 0.045, vol: 0.4, at: i * 0.07 }); tone({ type: 'square', f: [130], dur: 0.035, vol: 0.06, at: i * 0.07, lp: 600 }); } },

    /* ---------- menus and shops ---------- */
    menu_move: () => tone({ type: 'square', f: [880], dur: 0.03, vol: 0.04 }),
    menu_select: () => arp([N.E5, N.B5], 0.045, { type: 'square', vol: 0.05 }),
    menu_back: () => arp([N.B5, N.E5], 0.045, { type: 'square', vol: 0.05 }),
    pause: () => { arp([N.A5, N.E5], 0.06, { type: 'triangle', vol: 0.1 }); },
    talk: () => tone({ type: 'square', f: [R(900, 1100)], dur: 0.025, vol: 0.03 }),
    buy: () => { noise({ ft: 'highpass', ff: [4000], dur: 0.05, vol: 0.2 }); arp([N.E6, N.G6, [N.E6, 0.6], [N.G6, 2]], 0.05, { type: 'square', vol: 0.05, at: 0.02 }); },
    no_money: () => { tone({ type: 'square', f: [180], dur: 0.1, vol: 0.07 }); tone({ type: 'square', f: [140], dur: 0.16, vol: 0.07, at: 0.12 }); },
    rank_up: () => { arp([N.C5, N.D5, N.E5, N.G5, [N.C6, 2]], 0.06, { type: 'square', vol: 0.05 }); noise({ ft: 'highpass', ff: [5000], dur: 0.4, vol: 0.06, at: 0.24 }); },
    new_run: () => { arp([N.C4, N.G4, N.C5], 0.12, { type: 'triangle', vol: 0.12 }); noise({ ft: 'bandpass', ff: [400, 1600], q: 1, dur: 0.4, vol: 0.2, at: 0.1, att: 0.1 }); },
  };

  // the sounds the game uses today (one oscillator each), kept for A/B comparison
  const OLD = {
    swipe: ['triangle', 520, 260, 0.08, 0.05], hit: ['square', 180, 90, 0.07, 0.06], hurt: ['sawtooth', 220, 70, 0.25, 0.08],
    dash: ['sine', 300, 600, 0.08, 0.04], pick: ['square', 660, 990, 0.12, 0.05], boon: ['triangle', 440, 880, 0.3, 0.06],
    puff: ['sine', 160, 60, 0.12, 0.05], boss: ['sawtooth', 90, 45, 0.6, 0.08], shoot: ['square', 400, 200, 0.06, 0.03],
    menu: ['square', 520, 520, 0.04, 0.03], coin: ['square', 1300, 1800, 0.05, 0.025], fart: ['sawtooth', 70, 40, 0.3, 0.08],
    charge: ['sine', 180, 520, 0.5, 0.025], spit: ['square', 320, 110, 0.1, 0.04],
  };
  function playOld(k) {
    init(); const S = OLD[k]; if (!S) return; const t = ac.currentTime, o = ac.createOscillator(), g = ac.createGain();
    o.type = S[0]; o.frequency.setValueAtTime(S[1], t); o.frequency.exponentialRampToValueAtTime(Math.max(20, S[2]), t + S[3]);
    g.gain.setValueAtTime(S[4] * 2, t); g.gain.exponentialRampToValueAtTime(0.0001, t + S[3]); o.connect(g); g.connect(master); o.start(t); o.stop(t + S[3] + 0.02);
  }

  // a held loop (the vacuum): returns a function that stops it
  function loop(k) {
    init(); const t = ac.currentTime, bus = ac.createGain(), lev = LEVEL.vac_hum || 1; bus.connect(master); bus.gain.value = lev;
    const s = ac.createBufferSource(), f = ac.createBiquadFilter(), g = ac.createGain(); s.buffer = noiseBuf; s.loop = true;
    f.type = 'lowpass'; f.Q.value = 4; f.frequency.setValueAtTime(500, t); f.frequency.linearRampToValueAtTime(900, t + 0.4);
    g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.3, t + 0.12); s.connect(f); f.connect(g); g.connect(bus);
    const o = ac.createOscillator(), og = ac.createGain(), of = ac.createBiquadFilter(); o.type = 'sawtooth'; o.frequency.setValueAtTime(70, t); o.frequency.linearRampToValueAtTime(95, t + 0.4);
    of.type = 'lowpass'; of.frequency.value = 500; og.gain.setValueAtTime(0.0001, t); og.gain.exponentialRampToValueAtTime(0.05, t + 0.12); o.connect(of); of.connect(og); og.connect(bus);
    s.start(t); o.start(t);
    return () => { const e = ac.currentTime; bus.gain.setValueAtTime(lev, e); bus.gain.exponentialRampToValueAtTime(0.0001, e + 0.12); s.stop(e + 0.15); o.stop(e + 0.15); };
  }

  // loudness balance so every effect sits at a similar level (measured offline)
  const LEVEL = {third: 2.4, slash: 1.15, skate: 0.15, swipe: 2.67, fan_throw: 8, fan_catch: 2.5, vac_hum: 1.1, vac_blast: 1.23, vac_blast_big: 0.89, vac_charge: 6.67, dash: 3, hurt: 2.13, death: 1.72, revive_mask: 2.91, revive_oil: 0.94, fart: 2.67, step: 2.5, hit: 2.67, puff: 2.29, disperse: 8, spawn: 4.5, swirl: 2.2, wisp_lunge: 2.0, brute_slam: 1.52, spit_charge: 2.0, spit: 1.28, transform: 0.81, roar: 1.2, cane: 2.46, boss_charge: 2.9, jump: 5.33, land: 0.85, boss_shot: 2.46, stone: 7.14, immune: 4.0, flag_break: 1.43, boss_dead: 1.25, zap: 2.13, chilli: 1.25, whistle: 1.0, drone: 5.0, tehtarik: 2.67, coin: 6.67, clean_air: 5.33, heal: 3.56, box_break: 1.88, reward_appear: 1.5, powerup: 4.0, room_clear: 2.9, wave: 8, door_open: 5.33, locked: 5.33, menu_move: 8, menu_select: 6.67, menu_back: 6.67, pause: 3.33, talk: 6.0, buy: 2.46, no_money: 8, rank_up: 4.57, new_run: 4.57};
  const lastT = {};
  function play(k, ...a) {
    try { init(); const now = ac.currentTime; if (lastT[k] && now - lastT[k] < 0.04) return; lastT[k] = now; const f = SOUNDS[k]; if (!f) return; bus = ac.createGain(); bus.gain.value = LEVEL[k] || 1; bus.connect(master); f(...a); } catch (e) {} finally { bus = null; }
  }
  // test hook: render into an offline context
  function _use(c) { ac = c; master = c.createGain(); master.gain.value = 0.6; master.connect(c.destination); analyser = null; verb = null;
    const n = c.sampleRate * 2; noiseBuf = c.createBuffer(1, n, c.sampleRate); const d = noiseBuf.getChannelData(0); for (let i = 0; i < n; i++) d[i] = Math.random() * 2 - 1; }
  return { tone, noise, N, play, playOld, loop, init, _use, SOUNDS, OLD, get analyser() { return analyser; }, get master() { return master; } };
})();

/* Background music: three looping chiptune tracks sequenced live (16th-note steps, scheduled slightly ahead). */
const Music = (() => {
  let bus = null, timer = null, muted = false, duck = 1;
  const m2f = m => 440 * Math.pow(2, (m - 69) / 12);
  const T = (o) => SFX.tone(o), Nz = (o) => SFX.noise(o);
  // drum kit
  const kick = (at, d, v = 1) => { T({ type: 'sine', f: [150, 42], dur: 0.16, vol: 0.32 * v, at, dest: d }); Nz({ ft: 'lowpass', ff: [900, 200], dur: 0.04, vol: 0.12 * v, at, dest: d }); };
  const snare = (at, d, v = 1) => { Nz({ ft: 'bandpass', ff: [1900, 1400], q: 0.9, dur: 0.13, vol: 0.28 * v, at, dest: d }); T({ type: 'triangle', f: [220, 160], dur: 0.06, vol: 0.08 * v, at, dest: d }); };
  const hat = (at, d, v = 1, open) => Nz({ ft: 'highpass', ff: [7500], dur: open ? 0.16 : 0.035, vol: 0.05 * v, at, dest: d });

  // ---- instruments with a Singapore flavour: Chinese, Malay and Indonesian-gamelan colours ----
  const guzheng = (at, f, sec, d, v = 1) => { T({ type: 'triangle', f: [f * 1.012, f], dur: Math.max(0.5, sec * 2), vol: 0.05 * v, att: 0.003, at, dest: d }); T({ type: 'sawtooth', f: [f * 1.012, f], dur: 0.25, vol: 0.012 * v, lp: 2600, at, dest: d }); };
  const erhu = (at, f, sec, d, v = 1) => { T({ type: 'sawtooth', f: [f * 0.985, f, f], dur: sec, vol: 0.03 * v, att: 0.12, hold: true, vib: [5.5, 28], lp: 1700, at, dest: d }); };
  const suling = (at, f, sec, d, v = 1) => { T({ type: 'sine', f: [f * 0.99, f], dur: sec, vol: 0.06 * v, att: 0.09, hold: true, vib: [5, 18], at, dest: d }); T({ type: 'triangle', f: [f], dur: sec, vol: 0.012 * v, att: 0.09, hold: true, at, dest: d }); Nz({ ft: 'bandpass', ff: [f * 2], q: 4, dur: sec, vol: 0.025 * v, att: 0.05, at, dest: d }); };
  const metal = (at, f, sec, d, v = 1) => { T({ type: 'sine', f: [f], dur: sec, vol: 0.05 * v, att: 0.002, at, dest: d }); T({ type: 'sine', f: [f * 2.76], dur: sec * 0.35, vol: 0.015 * v, att: 0.002, at, dest: d }); T({ type: 'sine', f: [f * 5.4], dur: sec * 0.12, vol: 0.006 * v, att: 0.002, at, dest: d }); };
  const gong = (at, f, d, v = 1) => { T({ type: 'sine', f: [f * 1.02, f], dur: 3.2, vol: 0.2 * v, att: 0.01, at, dest: d }); T({ type: 'sine', f: [f * 1.015], dur: 3.0, vol: 0.12 * v, att: 0.02, at, dest: d }); T({ type: 'sine', f: [f * 2.32], dur: 1.6, vol: 0.04 * v, at, dest: d }); Nz({ ft: 'lowpass', ff: [500, 150], dur: 0.12, vol: 0.06 * v, at, dest: d }); };
  const kendang = (at, d, low) => { T({ type: 'sine', f: low ? [140, 95] : [260, 210], dur: low ? 0.22 : 0.09, vol: low ? 0.16 : 0.07, at, dest: d }); Nz({ ft: 'bandpass', ff: [low ? 500 : 1400], q: 2, dur: 0.04, vol: 0.05, at, dest: d }); };
  const bigDrum = (at, d, v = 1) => { T({ type: 'sine', f: [95, 50], dur: 0.28, vol: 0.32 * v, at, dest: d }); Nz({ ft: 'lowpass', ff: [700, 150], dur: 0.07, vol: 0.14 * v, at, dest: d }); };
  const chha = (at, d, v = 1) => Nz({ ft: 'highpass', ff: [4500, 3500], dur: v > 0.7 ? 0.3 : 0.08, vol: 0.09 * v, att: 0.002, trem: [55, 0.4], at, dest: d });
  const kompang = (at, d, v = 1) => { Nz({ ft: 'bandpass', ff: [1100], q: 1.6, dur: 0.05, vol: 0.14 * v, at, dest: d }); T({ type: 'sine', f: [330, 250], dur: 0.06, vol: 0.05 * v, at, dest: d }); };
  const piano = (at, f, sec, d, v = 1) => {
    // struck string: a bright attack that mellows, upper partials dying faster, a soft hammer knock
    T({ type: 'sine', f: [f], dur: sec, vol: 0.07 * v, att: 0.003, at, dest: d });
    T({ type: 'triangle', f: [f * 1.002], dur: sec * 0.7, vol: 0.025 * v, att: 0.003, at, dest: d });
    T({ type: 'sine', f: [f * 2], dur: sec * 0.45, vol: 0.025 * v, att: 0.003, at, dest: d });
    T({ type: 'sine', f: [f * 3.01], dur: sec * 0.25, vol: 0.01 * v, att: 0.003, at, dest: d });
    Nz({ ft: 'bandpass', ff: [Math.min(4000, f * 4)], q: 1.5, dur: 0.03, vol: 0.02 * v, at, dest: d });
  };
  const suona = (at, f, sec, d) => { T({ type: 'square', f: [f * 0.97, f], dur: sec, vol: 0.03, att: 0.02, hold: true, vib: [6.5, 22], lp: 3200, at, dest: d }); T({ type: 'sawtooth', f: [f * 0.97, f], dur: sec, vol: 0.022, att: 0.02, hold: true, vib: [6.5, 22], lp: 4200, at, dest: d }); };

  const TRACKS = {
    // Boat Quay: brooding rock in A minor carrying Daryl's Theme 1 (A-E, G-F#-E, A, G-B-A), first low, then an octave up
    // sg = true: erhu lead, guzheng plucks, kompang, gong; sg = false: distorted guitar lead, bouzouki plucks, hats and crash
    ...Object.fromEntries(['run'].map(id => [id, { bpm: 120, len: 128, gain: 1.4, sg: false, build() {
      const sg = this.sg, roots = [45, 40, 45, 40, 38, 40, 36, 35], ev = [];
      const ch = { 45: [57, 60, 64, 69], 40: [52, 55, 59, 64], 38: [50, 54, 57, 62], 36: [48, 52, 55, 60], 35: [47, 51, 54, 57] };
      roots.forEach((r, b) => {
        const s0 = b * 16, c = ch[r];
        for (const i of [0, 2, 3, 6, 8, 10, 11, 14]) ev.push([s0 + i, 'chug', r, 1]);
        ev.push([s0, 'power', r, 2], [s0 + 12, 'power', r, 2]);
        [0, 1, 2, 1, 3, 1, 2, 1].forEach((k, i) => ev.push([s0 + i * 2, 'pluck', c[k] + 12, 2]));
        [0, 6, 8].forEach(i => ev.push([s0 + i, 'kick', 0, 1]));
        [4, 12].forEach(i => ev.push([s0 + i, 'snare', 0, 1]));
        if (sg) { for (let i = 2; i < 16; i += 4) ev.push([s0 + i, 'chha', 0, 1]); [7, 15].forEach(i => ev.push([s0 + i, 'kompang', 0, 1])); }
        else for (let i = 0; i < 16; i += 2) ev.push([s0 + i, 'hat', i % 4 === 2 ? 1 : 0, 1]);
        if (b % 4 === 3) [12, 13, 14, 15].forEach((i, k) => ev.push([s0 + i, 'tom', k, 1]));
        if (b % 4 === 0) ev.push([s0, sg ? 'gong' : 'crash', 0, 1]);
        ev.push([s0, 'choir', r + 12, 16]);
      });
      // Theme 1 in 4/4 with triplets: E (half) | G F# E | A (half) | G E B triplet, then A leading back into E
      const q = 4 / 3, motif = [[0, 64, 8], [8, 67, 2 * q], [8 + 2 * q, 66, q], [12, 64, 4], [16, 57, 8], [24, 55, q], [24 + q, 52, q], [24 + 2 * q, 59, q], [28, 57, 4]];   // E | G-F# (triplet swing) E | A | G-E-B triplet, A pickup
      for (const [base, up] of [[0, 0], [32, 0], [64, 12], [96, 12]]) for (const [st, m, l] of motif) ev.push([base + st, 'lead', m + up, l]);
      return ev;
    }, play(kind, at, f, sec, d, raw) {
      const sg = this.sg;
      if (kind === 'chug') { T({ type: 'sawtooth', f: [f], dur: 0.08, vol: 0.011, dist: 7, lp: 1300, at, dest: d }); T({ type: 'sawtooth', f: [f * 1.498], dur: 0.08, vol: 0.007, dist: 7, lp: 1300, at, dest: d }); }
      if (kind === 'power') for (const [m, v] of [[1, 0.01], [1.498, 0.008], [2, 0.005]]) T({ type: 'sawtooth', f: [f * m], dur: sec * 1.4, vol: v, dist: 9, lp: 2300, at, dest: d });
      if (kind === 'pluck') {
        if (sg) { T({ type: 'triangle', f: [f * 1.01, f], dur: 0.45, vol: 0.04, att: 0.003, at, dest: d }); T({ type: 'sawtooth', f: [f * 1.01, f], dur: 0.18, vol: 0.011, lp: 1800, at, dest: d }); }
        else { T({ type: 'sawtooth', f: [f], dur: 0.3, vol: 0.02, att: 0.002, lp: 2400, at, dest: d }); T({ type: 'sawtooth', f: [f * 1.006], dur: 0.3, vol: 0.016, att: 0.002, lp: 2400, at, dest: d }); }
      }
      if (kind === 'kick') T({ type: 'sine', f: [120, 42], dur: 0.16, vol: 0.28, at, dest: d });
      if (kind === 'snare') { Nz({ ft: 'bandpass', ff: [1600, 1100], q: 0.8, dur: 0.18, vol: 0.26, at, dest: d }); T({ type: 'triangle', f: [180, 130], dur: 0.07, vol: 0.09, at, dest: d }); }
      if (kind === 'tom') T({ type: 'sine', f: [[220, 180, 150, 120][raw] * 1.3, [220, 180, 150, 120][raw]], dur: 0.18, vol: 0.18, at, dest: d });
      if (kind === 'chha') chha(at, d, 0.45);
      if (kind === 'hat') Nz({ ft: 'highpass', ff: [7500], dur: raw ? 0.12 : 0.03, vol: 0.05, at, dest: d });
      if (kind === 'crash') Nz({ ft: 'highpass', ff: [4000, 2500], dur: 1.2, vol: 0.08, att: 0.003, at, dest: d });
      if (kind === 'kompang') kompang(at, d, 0.5);
      if (kind === 'gong') gong(at, 55, d, 0.7);
      if (kind === 'choir') for (const m of [1, 1.498]) T({ type: 'sawtooth', f: [f * m], dur: sec, vol: 0.012, att: 0.8, hold: true, vib: [5, 10], lp: 800, at, dest: d });
      if (kind === 'lead') {
        if (sg) erhu(at, f, sec, d, 1.25);
        else { T({ type: 'sawtooth', f: [f * 0.985, f], dur: sec * 0.95, vol: 0.012, att: 0.012, hold: true, vib: [6, 22], dist: 5, lp: 2800, at, dest: d }); T({ type: 'square', f: [f * 2], dur: sec * 0.95, vol: 0.006, att: 0.012, hold: true, vib: [6, 22], lp: 3500, at, dest: d }); }
      }
    } }])),
    // the hospital driveway: a quiet, calm take on the Boat Quay track (same tempo, chords and Theme 1), no drums or distortion,
    // so the full track can take over seamlessly at the door
    run_calm: { bpm: 120, len: 128, gain: 1.6, build() {
      const roots = [45, 40, 45, 40, 38, 40, 36, 35], ev = [];
      const ch = { 45: [57, 60, 64, 69], 40: [52, 55, 59, 64], 38: [50, 54, 57, 62], 36: [48, 52, 55, 60], 35: [47, 51, 54, 57] };
      roots.forEach((r, b) => {
        const s0 = b * 16, c = ch[r];
        ev.push([s0, 'bass', r, 8], [s0 + 8, 'bass', r, 8]);
        [0, 1, 2, 1, 3, 1, 2, 1].forEach((k, i) => ev.push([s0 + i * 2, 'pluck', c[k] + 12, 2]));
        ev.push([s0, 'pad', c[0] + 12, 16], [s0, 'pad', c[2] + 12, 16]);
        for (let i = 4; i < 16; i += 8) ev.push([s0 + i, 'shaker', 0, 1]);
      });
      const q = 4 / 3, motif = [[0, 64, 8], [8, 67, 2 * q], [8 + 2 * q, 66, q], [12, 64, 4], [16, 57, 8], [24, 55, q], [24 + q, 52, q], [24 + 2 * q, 59, q], [28, 57, 4]];
      for (const base of [64, 96]) for (const [st, m, l] of motif) ev.push([base + st, 'lead', m + 12, l]);
      return ev;
    }, play(kind, at, f, sec, d) {
      if (kind === 'bass') T({ type: 'sine', f: [f], dur: sec, vol: 0.09, att: 0.02, at, dest: d });
      if (kind === 'pluck') { T({ type: 'triangle', f: [f], dur: 0.6, vol: 0.035, att: 0.003, at, dest: d }); T({ type: 'sine', f: [f * 2], dur: 0.25, vol: 0.01, att: 0.003, at, dest: d }); }
      if (kind === 'pad') T({ type: 'sawtooth', f: [f], dur: sec, vol: 0.008, att: 0.8, hold: true, vib: [4.5, 8], lp: 900, at, dest: d });
      if (kind === 'shaker') Nz({ ft: 'highpass', ff: [8000], dur: 0.04, vol: 0.02, at, dest: d });
      if (kind === 'lead') T({ type: 'triangle', f: [f], dur: sec * 0.95, vol: 0.04, att: 0.03, hold: true, vib: [5, 12], at, dest: d });
    } },
    // Title screen: a dark, epic piano in 6/8 playing Theme 2 and then Theme 1 in heavy octaves,
    // over pounding low octaves, a brooding arpeggio, low strings, choir and timpani (Am F E Am | Am Em F G)
    title: { bpm: 42.5, len: 48, gain: 1.0, build() {
      // 4/4 with triplets (one step = a triplet eighth); a chord every two beats: Am Dm C F | Am G Am Em
      const ev = [], chords = [[33, [45, 52, 57, 60]], [38, [50, 53, 57, 62]], [36, [48, 52, 55, 60]], [29, [41, 48, 53, 57]], [33, [45, 52, 57, 60]], [31, [43, 50, 55, 59]], [33, [45, 52, 57, 60]], [28, [40, 47, 52, 55]]];
      chords.forEach(([r, c], b) => {
        const s0 = b * 6;
        ev.push([s0, 'low', r, 3], [s0 + 3, 'low', r + 7, 3]);
        [0, 1, 2, 3, 2, 1].forEach((k, i) => ev.push([s0 + i, 'arp', c[k], 1]));
        ev.push([s0, 'strings', c[0], 6], [s0, 'strings', c[1], 6]);
      });
      // Theme 2 (A | E . D-C-D | E A . . .) flows straight into Theme 1 (E . . G-F | E A . G-E-B), whose B leads back to A
      const mel = [[0, 57, 3], [3, 64, 6], [9, 62, 1], [10, 60, 1], [11, 62, 1], [12, 64, 3], [15, 57, 9],
                   [24, 64, 9], [33, 67, 2], [35, 65, 1], [36, 64, 3], [39, 57, 6], [45, 55, 1], [46, 52, 1], [47, 59, 1]];
      for (const [st, m, l] of mel) ev.push([st, 'mel', m, l]);
      ev.push([0, 'timp', 0, 1], [24, 'timp', 0, 1], [21, 'roll', 0, 3], [45, 'roll', 0, 3], [0, 'choir', 57, 24], [24, 'choir', 52, 24]);
      return ev;
    }, play(kind, at, f, sec, d) {
      if (kind === 'mel') { piano(at, f, Math.max(1.5, sec * 1.6), d, 1); piano(at, f * 2, Math.max(1.2, sec * 1.4), d, 0.55); }
      if (kind === 'low') { piano(at, f, 2.6, d, 1.2); piano(at, f * 2, 2.2, d, 0.8); }
      if (kind === 'arp') piano(at, f * 2, 0.9, d, 0.28);
      if (kind === 'strings') T({ type: 'sawtooth', f: [f], dur: sec, vol: 0.012, att: 0.5, hold: true, vib: [5, 9], lp: 700, at, dest: d });
      if (kind === 'choir') for (const m of [1, 1.498]) T({ type: 'sawtooth', f: [f * m], dur: sec, vol: 0.008, att: 1.5, hold: true, vib: [5, 12], lp: 1000, at, dest: d });
      if (kind === 'timp') { T({ type: 'sine', f: [90, 55], dur: 2.0, vol: 0.32, att: 0.005, at, dest: d }); Nz({ ft: 'lowpass', ff: [600, 100], dur: 0.4, vol: 0.12, at, dest: d }); }
      if (kind === 'roll') Nz({ ft: 'lowpass', ff: [200, 500], dur: sec, vol: 0.12, att: sec * 0.9, trem: [18, 0.5], at, dest: d });
    } },
    // Hospital ward: Daryl's Theme 2 in 4/4 with triplets (A | E . D-C-D | E A . . .), one step = a triplet eighth.
    // Am - Fmaj7 - Em - Am, then Am - Fmaj7 - G - Am with the melody an octave up the second time.
    ...Object.fromEntries(['hospital'].map(id => [id, { bpm: 45, len: 48, gain: 0.9, sg: false, build() {
      const sg = this.sg, ev = [];
      const chords = [[45, [57, 64, 69, 72]], [41, [53, 64, 69, 72]], [40, [52, 59, 64, 67]], [45, [57, 64, 69, 72]], [45, [57, 64, 69, 72]], [41, [53, 64, 69, 72]], [43, [55, 62, 67, 71]], [45, [57, 64, 69, 76]]];
      chords.forEach(([r, c], b) => {
        const s0 = b * 6;
        ev.push([s0, 'bass', r, 6]);
        [0, 1, 2, 3, 2, 1].forEach((k, i) => ev.push([s0 + i, 'arp', c[k], 1]));
        ev.push([s0, 'pad', c[0], 6], [s0, 'pad', c[1], 6]);
      });
      const theme = [[0, 57, 3], [3, 64, 6], [9, 62, 1], [10, 60, 1], [11, 62, 1], [12, 64, 3], [15, 57, 9]];
      for (const [st, m, l] of theme) { ev.push([st, 'lead', m + 12, l]); ev.push([24 + st, 'lead', m + 24, l]); }
      ev.push([0, sg ? 'gong' : 'timp', 0, 1], [24, sg ? 'gong' : 'timp', 0, 1]);
      return ev;
    }, play(kind, at, f, sec, d) {
      const sg = this.sg;
      if (kind === 'bass') T({ type: 'sine', f: [f], dur: sec, vol: 0.11, att: 0.05, hold: true, at, dest: d });
      if (kind === 'arp') { if (sg) guzheng(at, f, sec, d, 0.6); else { T({ type: 'triangle', f: [f], dur: 1.2, vol: 0.04, att: 0.003, at, dest: d }); T({ type: 'sine', f: [f * 2], dur: 0.5, vol: 0.012, att: 0.003, at, dest: d }); } }
      if (kind === 'pad') T({ type: 'sawtooth', f: [f], dur: sec, vol: 0.01, att: 0.6, hold: true, vib: [4.5, 8], lp: 900, at, dest: d });
      if (kind === 'lead') {
        if (sg) erhu(at, f, sec, d, 1.1);
        else { T({ type: 'triangle', f: [f], dur: sec, vol: 0.05, att: 0.08, hold: true, vib: [5, 12], at, dest: d }); T({ type: 'sine', f: [f * 2], dur: sec, vol: 0.012, att: 0.08, hold: true, at, dest: d }); }
      }
      if (kind === 'gong') gong(at, 55, d, 0.6);
      if (kind === 'timp') { T({ type: 'sine', f: [115, 105], dur: 1.6, vol: 0.2, att: 0.01, at, dest: d }); Nz({ ft: 'lowpass', ff: [400, 120], dur: 0.3, vol: 0.08, at, dest: d }); }
    } }])),
    // dark and heavy (in the spirit of Hades' boss fights, not a copy): distorted chugging power chords with a Phrygian lean, carrying both of Daryl's themes,
    // double-kick drums, gong and cymbal crashes, and a snarling suona-style lead in the second half
    boss: { bpm: 160, len: 256, gain: 0.9, build() {
      // 16 bars: Theme 1 low, Theme 1 high with double kick, Theme 2 low, Theme 2 high with double kick
      const roots = [40, 45, 40, 45, 40, 45, 38, 43, 45, 36, 45, 43, 45, 36, 45, 43], ev = [];   // chords chosen so every melody note fits
      roots.forEach((r, b) => {
        const s0 = b * 16;
        // straight 4/4: power-chord hits on beats 1 and 3, palm-muted eighth-note chugs in between
        ev.push([s0, 'power', r, 2], [s0 + 8, 'power', r, 2]);
        for (const i of [2, 4, 6, 10, 12, 14]) ev.push([s0 + i, 'chug', r, 1]);
        for (let i = 0; i < 16; i += 2) ev.push([s0 + i, 'bass', r - 12, 2]);
        const dbl = b % 8 >= 4;
        for (let i = 0; i < 16; i += dbl ? 1 : 2) if (i !== 4 && i !== 12) ev.push([s0 + i, 'kick', 0, 1]);
        ev.push([s0 + 4, 'snare', 0, 1], [s0 + 12, 'snare', 0, 1]);
        for (let i = 2; i < 16; i += 4) ev.push([s0 + i, 'chha', 0, 1]);
        if (b % 4 === 0) ev.push([s0, 'crash', 0, 1]); if (b % 8 === 0) ev.push([s0, 'gong', 0, 1]);
        ev.push([s0, 'choir', r + 12, 16]);
      });
      // Theme 1 (E | G F# E | A | G B A) and Theme 2 (A E . . D C D E A . .) re-timed to 4/4, two bars each
      const q = 4 / 3, t1 = [[0, 64, 8], [8, 67, 2 * q], [8 + 2 * q, 66, q], [12, 64, 4], [16, 57, 8], [24, 55, q], [24 + q, 52, q], [24 + 2 * q, 59, q], [28, 57, 4]];
      const t2 = [[0, 57, 4], [4, 64, 8], [12, 62, q], [12 + q, 60, q], [12 + 2 * q, 62, q], [16, 64, 4], [20, 57, 12]];   // A | E (half) D-C-D triplet | E | A (dotted half)
      for (const [base, mot, up] of [[0, t1, 0], [32, t1, 0], [64, t1, 12], [96, t1, 12], [128, t2, 0], [160, t2, 0], [192, t2, 12], [224, t2, 12]])
        for (const [st, m, l] of mot) ev.push([base + st, 'lead', m + up, l]);
      return ev;
    }, play(kind, at, f, sec, d) {
      if (kind === 'chug') { T({ type: 'sawtooth', f: [f], dur: 0.09, vol: 0.014, dist: 8, lp: 1500, at, dest: d }); T({ type: 'sawtooth', f: [f * 1.498], dur: 0.09, vol: 0.009, dist: 8, lp: 1500, at, dest: d }); }
      if (kind === 'power') { for (const [m, v] of [[1, 0.012], [1.498, 0.009], [2, 0.006]]) T({ type: 'sawtooth', f: [f * m], dur: Math.max(0.2, sec), vol: v, dist: 10, lp: 2600, hold: true, at, dest: d }); }
      // a clean picked rock bass (no 808 boom) and a tight, punchy metal kick with a beater click
      if (kind === 'bass') { T({ type: 'triangle', f: [f * 2], dur: sec * 0.85, vol: 0.07, att: 0.004, at, dest: d }); T({ type: 'sawtooth', f: [f * 2], dur: sec * 0.6, vol: 0.02, att: 0.004, lp: 900, at, dest: d }); }
      if (kind === 'kick') { T({ type: 'sine', f: [95, 70], dur: 0.07, vol: 0.22, att: 0.002, at, dest: d }); Nz({ ft: 'bandpass', ff: [3000], q: 1.2, dur: 0.012, vol: 0.12, at, dest: d }); }
      if (kind === 'snare') { Nz({ ft: 'bandpass', ff: [1800, 1300], q: 0.8, dur: 0.16, vol: 0.32, at, dest: d }); T({ type: 'triangle', f: [200, 150], dur: 0.07, vol: 0.1, at, dest: d }); }
      if (kind === 'chha') chha(at, d, 0.5);
      if (kind === 'crash') Nz({ ft: 'highpass', ff: [4000, 2500], dur: 1.2, vol: 0.09, att: 0.003, at, dest: d });
      if (kind === 'gong') gong(at, 55, d, 0.9);
      if (kind === 'lead') { T({ type: 'sawtooth', f: [f * 0.98, f], dur: sec * 0.95, vol: 0.014, att: 0.015, hold: true, vib: [6.5, 25], dist: 4, lp: 3000, at, dest: d }); T({ type: 'square', f: [f * 2], dur: sec * 0.95, vol: 0.01, att: 0.015, hold: true, vib: [6.5, 25], lp: 4000, at, dest: d }); }
      if (kind === 'choir') for (const m of [1, 1.19, 1.498]) T({ type: 'sawtooth', f: [f * m], dur: sec, vol: 0.014, att: 1.2, hold: true, vib: [5, 12], lp: 900, at, dest: d });
    } },
  };
  for (const k in TRACKS) TRACKS[k].ev = TRACKS[k].build();

  // several tracks can play at once (used to cross-fade as you walk from the hospital to Boat Quay)
  const active = {}; let lastGone = null;
  function tick() {
    const ac = SFX.init();
    for (const name in active) {
      const cur = active[name], sd = 60 / cur.tr.bpm / 4;
      if (cur.dead) continue;
      while (cur.next < ac.currentTime + 0.15) {
        const st = cur.step % cur.tr.len;
        if (cur.level > 0.02) for (const [s, kind, m, l] of cur.tr.ev) if (Math.floor(s) === st) { try { cur.tr.play(kind, Math.max(0, cur.next + (s - st) * sd - ac.currentTime), m > 20 ? m2f(m) : 0, l * sd, cur.g, m); } catch (e) {} }
        cur.step++; cur.next += sd;
      }
    }
  }
  function ensureBus() {
    const ac = SFX.init();
    if (!bus || bus.context !== ac) { bus = ac.createGain(); bus.gain.value = muted ? 0 : 0.55 * duck; bus.connect(SFX.master); }
    return ac;
  }
  // mix: { trackName: level 0..1 }; anything not listed fades out
  function mix(m, fade = 0.8) {
    const ac = ensureBus(), now = ac.currentTime;
    for (const name in active) if (!(name in m)) {
      const cur = active[name]; cur.level = 0; cur.dead = true; cur.g.gain.setTargetAtTime(0.0001, now, fade / 3);
      const g = cur.g; setTimeout(() => g.disconnect(), fade * 1000 + 600); delete active[name]; lastGone = cur;
    }
    for (const name in m) {
      if (!TRACKS[name]) continue;
      let cur = active[name];
      if (!cur) {
        const g = ac.createGain(); g.gain.setValueAtTime(0.0001, now); g.connect(bus);
        cur = active[name] = { name, tr: TRACKS[name], step: 0, next: now + 0.05, g, level: -1 };
        // a track with the same tempo and length picks up in step, so the switch is seamless (driveway -> Boat Quay)
        const twin = [...Object.values(active), lastGone].find(o => o && o !== cur && o.tr.bpm === cur.tr.bpm && o.tr.len === cur.tr.len && o.next > now - 0.05);
        if (twin) { cur.step = twin.step; cur.next = twin.next; }
      }
      const lv = Math.max(0, Math.min(1, m[name]));
      if (Math.abs(lv - cur.level) > 0.01) { cur.level = lv; cur.g.gain.setTargetAtTime(Math.max(0.0001, lv * (cur.tr.gain || 1)), now, cur.started ? 0.25 : fade / 3); cur.started = true; }
    }
    if (!timer) timer = setInterval(tick, 25);
    tick();
  }
  let curName = null;
  function play(name) { if (name === curName) return; curName = name; mix(name ? { [name]: 1 } : {}); }
  function blend(a, b, k) { curName = null; mix({ [a]: 1 - k, [b]: k }); }
  function setMuted(m) { muted = m; if (bus) bus.gain.value = muted ? 0 : 0.55 * duck; }
  function setDuck(d) { if (d === duck) return; duck = d; if (bus) bus.gain.setTargetAtTime(muted ? 0 : 0.55 * duck, bus.context.currentTime, 0.1); }
  return { play, blend, mix, setMuted, setDuck, get current() { return Object.keys(active).join('+') || null; }, TRACKS };
})();
window.HazeHeroesAudio = { SFX };
