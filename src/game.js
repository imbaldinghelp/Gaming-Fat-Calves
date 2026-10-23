(() => {
'use strict';
const { SFX } = window.HazeHeroesAudio;
const { PSI, ETYPES, BOONS, PATRONS, UPGRADES, FIGHT_ROOMS, SHOP_ROOM, BOSS_ROOM, DOOR_Y, WAVES, ROOMDEFS, COIN_DROP, SHOP_ITEMS } = window.HazeHeroesConfig;
const { MAMA_LINES, NURSE_LINES, NURSE_HANDSOME, NURSE_BOXTIP, NURSE_VETERAN, NURSE_PARAMEDICS, NURSE_KO, NURSE_TEASE, NURSE_WINBACK, JJ_FIRST, JJ_SECOND, JJ_THIRD, JJ_LINES, HAZE_BACK } = window.HazeHeroesData;
const ASSETS = {"bg_river":"assets/sprites/bg_river.png","umb_red":"assets/sprites/umb_red.png","umb_teal":"assets/sprites/umb_teal.png","bg_hub":"assets/sprites/bg_hub.png","bg_arena":"assets/sprites/bg_arena.png","bg_title":"assets/sprites/bg_title.png","hero":"assets/sprites/hero.png","hero_nm":"assets/sprites/hero_nm.png","hero_bald":"assets/sprites/hero_bald.png","hero_nm_bald":"assets/sprites/hero_nm_bald.png","nurse":"assets/sprites/nurse.png","physio":"assets/sprites/physio.png","wisp":"assets/sprites/wisp.png","brute":"assets/sprites/brute.png","spitter":"assets/sprites/spitter.png","auntie":"assets/sprites/auntie.png","pe":"assets/sprites/pe.png","uncle":"assets/sprites/uncle.png","gong":"assets/sprites/gong.png","kid":"assets/sprites/kid.png","w_fan":"assets/sprites/w_fan.png","w_vac":"assets/sprites/w_vac.png","i_skates":"assets/sprites/i_skates.png","i_hula":"assets/sprites/i_hula.png","i_bald":"assets/sprites/i_bald.png","i_kaya":"assets/sprites/i_kaya.png","i_rice":"assets/sprites/i_rice.png","i_gassy":"assets/sprites/i_gassy.png","i_bot":"assets/sprites/i_bot.png","i_triple":"assets/sprites/i_triple.png","i_overclock":"assets/sprites/i_overclock.png","masks":"assets/sprites/masks.png","n95":"assets/sprites/n95.png","i_hitrun":"assets/sprites/i_hitrun.png","i_wallhack":"assets/sprites/i_wallhack.png","i_ckw":"assets/sprites/i_ckw.png","i_longarm":"assets/sprites/i_longarm.png","i_widesweep":"assets/sprites/i_widesweep.png","i_thirdform":"assets/sprites/i_thirdform.png","i_pushhands":"assets/sprites/i_pushhands.png","i_innerpeace":"assets/sprites/i_innerpeace.png","i_likewater":"assets/sprites/i_likewater.png","i_chapteh":"assets/sprites/i_chapteh.png","i_rubber":"assets/sprites/i_rubber.png","i_fivestones":"assets/sprites/i_fivestones.png","i_pocket":"assets/sprites/i_pocket.png","i_kutikuti":"assets/sprites/i_kutikuti.png","i_headlamp":"assets/sprites/i_headlamp.png","i_aircon":"assets/sprites/i_aircon.png","i_warranty":"assets/sprites/i_warranty.png","i_curry":"assets/sprites/i_curry.png","i_tapao":"assets/sprites/i_tapao.png","raffles_A":"assets/sprites/raffles_A.png","hero_w1":"assets/sprites/hero_w1.png","hero_w2":"assets/sprites/hero_w2.png","hero_nm_w1":"assets/sprites/hero_nm_w1.png","hero_nm_w2":"assets/sprites/hero_nm_w2.png","hero_bald_w1":"assets/sprites/hero_bald_w1.png","hero_bald_w2":"assets/sprites/hero_bald_w2.png","hero_nm_bald_w1":"assets/sprites/hero_nm_bald_w1.png","hero_nm_bald_w2":"assets/sprites/hero_nm_bald_w2.png","raffles":"assets/sprites/raffles.png","plinth":"assets/sprites/plinth.png","raffles_full":"assets/sprites/raffles_full.png","bg_shop":"assets/sprites/bg_shop.png","mama":"assets/sprites/mama.png","coin":"assets/sprites/coin.png","it_tikam":"assets/sprites/it_tikam.png","it_candy":"assets/sprites/it_candy.png","it_kacang":"assets/sprites/it_kacang.png","it_kopi":"assets/sprites/it_kopi.png","it_mask":"assets/sprites/it_mask.png","it_oil":"assets/sprites/it_oil.png","bg_prom":"assets/sprites/bg_prom.png","bg_square":"assets/sprites/bg_square.png","bg_bridge":"assets/sprites/bg_bridge.png","p_tree":"assets/sprites/p_tree.png","p_crates":"assets/sprites/p_crates.png","p_box":"assets/sprites/p_box.png","bg_gate":"assets/sprites/bg_gate.png","i_chilli":"assets/sprites/i_chilli.png","i_tehtarik":"assets/sprites/i_tehtarik.png","i_gravy":"assets/sprites/i_gravy.png","i_powerbank":"assets/sprites/i_powerbank.png","i_whistle":"assets/sprites/i_whistle.png","i_zap":"assets/sprites/i_zap.png","mask_gold":"assets/sprites/mask_gold.png","p_boxA":"assets/sprites/p_boxA.png","p_boxC":"assets/sprites/p_boxC.png","p_boxAs":"assets/sprites/p_boxAs.png","p_boxCs":"assets/sprites/p_boxCs.png","u_n95":"assets/sprites/u_n95.png","u_wind":"assets/sprites/u_wind.png","u_lung":"assets/sprites/u_lung.png","u_grip":"assets/sprites/u_grip.png","u_opinion":"assets/sprites/u_opinion.png","w_rotan":"assets/sprites/w_rotan.png","bg_pharm":"assets/sprites/bg_pharm.png","rope":"assets/sprites/rope.png","adelle":"assets/sprites/adelle.png","qboard":"assets/sprites/qboard.png","qboard_done":"assets/sprites/qboard_done.png","alert":"assets/sprites/alert.png","adelle_face":"assets/sprites/adelle_face.png","cos_Uni Tee":"assets/sprites/cos_Uni Tee.png","cos_Hall Hoodie":"assets/sprites/cos_Hall Hoodie.png","cos_Polo & Bermudas":"assets/sprites/cos_Polo & Bermudas.png","cos_Patient Gown":"assets/sprites/cos_Patient Gown.png","cos_Admin T":"assets/sprites/cos_Admin T.png","cos_SAF No. 4":"assets/sprites/cos_SAF No. 4.png","cos_SCDF Firefighter":"assets/sprites/cos_SCDF Firefighter.png","cos_SPF Officer":"assets/sprites/cos_SPF Officer.png","cos_School Uniform":"assets/sprites/cos_School Uniform.png","cos_Office Suit":"assets/sprites/cos_Office Suit.png","cos_Prison Stripes":"assets/sprites/cos_Prison Stripes.png","cos_Merlion Suit":"assets/sprites/cos_Merlion Suit.png","cos_Diver Wetsuit":"assets/sprites/cos_Diver Wetsuit.png","cos_Raffles Statue":"assets/sprites/cos_Raffles Statue.png","cos_Basic Tee & Bermudas":"assets/sprites/cos_Basic Tee & Bermudas.png","cos_Hazmat Suit":"assets/sprites/cos_Hazmat Suit.png","cos_SUTD Tee":"assets/sprites/cos_SUTD Tee.png","cos_China Aunty":"assets/sprites/cos_China Aunty.png","cos_All White":"assets/sprites/cos_All White.png","cos_Swimming Trunks":"assets/sprites/cos_Swimming Trunks.png","cos_Samsui Woman":"assets/sprites/cos_Samsui Woman.png","cos_Kopitiam Uncle":"assets/sprites/cos_Kopitiam Uncle.png","cos_Sang Nila Utama":"assets/sprites/cos_Sang Nila Utama.png","cos_Lion Dance":"assets/sprites/cos_Lion Dance.png","cos_Pontianak":"assets/sprites/cos_Pontianak.png","cos_Pocong":"assets/sprites/cos_Pocong.png","cos_Tamil Veshti":"assets/sprites/cos_Tamil Veshti.png","cos_Hazed Brute":"assets/sprites/cos_Hazed Brute.png","cos_Air Force":"assets/sprites/cos_Air Force.png","cos_Navy":"assets/sprites/cos_Navy.png","cos_Surgical Blue":"assets/sprites/cos_Surgical Blue.png","cos_Black N95":"assets/sprites/cos_Black N95.png","cos_Pink Floral":"assets/sprites/cos_Pink Floral.png","cos_Kopitiam Check":"assets/sprites/cos_Kopitiam Check.png","cos_Batik":"assets/sprites/cos_Batik.png","cos_NS Pixel Camo":"assets/sprites/cos_NS Pixel Camo.png","cos_Red & White":"assets/sprites/cos_Red & White.png","cos_Gold N95":"assets/sprites/cos_Gold N95.png","cos_Jungle Hat":"assets/sprites/cos_Jungle Hat.png","cos_Jockey Cap":"assets/sprites/cos_Jockey Cap.png","cos_Beret":"assets/sprites/cos_Beret.png","cos_SCDF Helmet":"assets/sprites/cos_SCDF Helmet.png","cos_SPF Cap":"assets/sprites/cos_SPF Cap.png","cos_Hawker Hat":"assets/sprites/cos_Hawker Hat.png","cos_Aunty Visor":"assets/sprites/cos_Aunty Visor.png","cos_Crab Hat":"assets/sprites/cos_Crab Hat.png","cos_Samsui Headdress":"assets/sprites/cos_Samsui Headdress.png","cos_Royal Crown":"assets/sprites/cos_Royal Crown.png","cos_Red Beret":"assets/sprites/cos_Red Beret.png","cos_Grey Beret":"assets/sprites/cos_Grey Beret.png","cos_Khaki Beret":"assets/sprites/cos_Khaki Beret.png","cos_Blue Beret":"assets/sprites/cos_Blue Beret.png","cos_Green Beret":"assets/sprites/cos_Green Beret.png","cos_Air Force Beret":"assets/sprites/cos_Air Force Beret.png","cos_Navy Beret":"assets/sprites/cos_Navy Beret.png","cos_Swimming Cap":"assets/sprites/cos_Swimming Cap.png","cos_Durian Head":"assets/sprites/cos_Durian Head.png","cos_Scuba Mask":"assets/sprites/cos_Scuba Mask.png","cos_Merlion Head":"assets/sprites/cos_Merlion Head.png","cos_Raffles Head":"assets/sprites/cos_Raffles Head.png","cos_Hazmat Hood":"assets/sprites/cos_Hazmat Hood.png","cos_Lion Dance Head":"assets/sprites/cos_Lion Dance Head.png","cos_Pontianak Hair":"assets/sprites/cos_Pontianak Hair.png","cos_Pocong Wrap":"assets/sprites/cos_Pocong Wrap.png","cos_Brute Head":"assets/sprites/cos_Brute Head.png","cos_Bald":"assets/sprites/cos_Bald.png","cos_Hair":"assets/sprites/cos_Hair.png","cos_Camo Face":"assets/sprites/cos_Camo Face.png","cos_Heart Plaster":"assets/sprites/cos_Heart Plaster.png","cos_Pink Lanyard":"assets/sprites/cos_Pink Lanyard.png","cos_White":"assets/sprites/cos_White.png","cos_Teh Tarik":"assets/sprites/cos_Teh Tarik.png","cos_Pandan":"assets/sprites/cos_Pandan.png","cos_Bandung":"assets/sprites/cos_Bandung.png","cos_Siren":"assets/sprites/cos_Siren.png","cos_Haze Grey":"assets/sprites/cos_Haze Grey.png","lk_h_Hair_none_0":"assets/sprites/lk_h_Hair_none_0.png","lk_h_Hair_Surgical Blue_0":"assets/sprites/lk_h_Hair_Surgical Blue_0.png","lk_h_Hair_Black N95_0":"assets/sprites/lk_h_Hair_Black N95_0.png","lk_h_Hair_Pink Floral_0":"assets/sprites/lk_h_Hair_Pink Floral_0.png","lk_h_Hair_Kopitiam Check_0":"assets/sprites/lk_h_Hair_Kopitiam Check_0.png","lk_h_Hair_Batik_0":"assets/sprites/lk_h_Hair_Batik_0.png","lk_h_Hair_NS Pixel Camo_0":"assets/sprites/lk_h_Hair_NS Pixel Camo_0.png","lk_h_Hair_Red & White_0":"assets/sprites/lk_h_Hair_Red & White_0.png","lk_h_Hair_Gold N95_0":"assets/sprites/lk_h_Hair_Gold N95_0.png","lk_h_Hair_none_1":"assets/sprites/lk_h_Hair_none_1.png","lk_h_Hair_Surgical Blue_1":"assets/sprites/lk_h_Hair_Surgical Blue_1.png","lk_h_Hair_Black N95_1":"assets/sprites/lk_h_Hair_Black N95_1.png","lk_h_Hair_Pink Floral_1":"assets/sprites/lk_h_Hair_Pink Floral_1.png","lk_h_Hair_Kopitiam Check_1":"assets/sprites/lk_h_Hair_Kopitiam Check_1.png","lk_h_Hair_Batik_1":"assets/sprites/lk_h_Hair_Batik_1.png","lk_h_Hair_NS Pixel Camo_1":"assets/sprites/lk_h_Hair_NS Pixel Camo_1.png","lk_h_Hair_Red & White_1":"assets/sprites/lk_h_Hair_Red & White_1.png","lk_h_Hair_Gold N95_1":"assets/sprites/lk_h_Hair_Gold N95_1.png","lk_h_Bald_none_0":"assets/sprites/lk_h_Bald_none_0.png","lk_h_Bald_Surgical Blue_0":"assets/sprites/lk_h_Bald_Surgical Blue_0.png","lk_h_Bald_Black N95_0":"assets/sprites/lk_h_Bald_Black N95_0.png","lk_h_Bald_Pink Floral_0":"assets/sprites/lk_h_Bald_Pink Floral_0.png","lk_h_Bald_Kopitiam Check_0":"assets/sprites/lk_h_Bald_Kopitiam Check_0.png","lk_h_Bald_Batik_0":"assets/sprites/lk_h_Bald_Batik_0.png","lk_h_Bald_NS Pixel Camo_0":"assets/sprites/lk_h_Bald_NS Pixel Camo_0.png","lk_h_Bald_Red & White_0":"assets/sprites/lk_h_Bald_Red & White_0.png","lk_h_Bald_Gold N95_0":"assets/sprites/lk_h_Bald_Gold N95_0.png","lk_h_Bald_none_1":"assets/sprites/lk_h_Bald_none_1.png","lk_h_Bald_Surgical Blue_1":"assets/sprites/lk_h_Bald_Surgical Blue_1.png","lk_h_Bald_Black N95_1":"assets/sprites/lk_h_Bald_Black N95_1.png","lk_h_Bald_Pink Floral_1":"assets/sprites/lk_h_Bald_Pink Floral_1.png","lk_h_Bald_Kopitiam Check_1":"assets/sprites/lk_h_Bald_Kopitiam Check_1.png","lk_h_Bald_Batik_1":"assets/sprites/lk_h_Bald_Batik_1.png","lk_h_Bald_NS Pixel Camo_1":"assets/sprites/lk_h_Bald_NS Pixel Camo_1.png","lk_h_Bald_Red & White_1":"assets/sprites/lk_h_Bald_Red & White_1.png","lk_h_Bald_Gold N95_1":"assets/sprites/lk_h_Bald_Gold N95_1.png","lk_o_Uni Tee":"assets/sprites/lk_o_Uni Tee.png","lk_o_Hall Hoodie":"assets/sprites/lk_o_Hall Hoodie.png","lk_o_Polo & Bermudas":"assets/sprites/lk_o_Polo & Bermudas.png","lk_o_Patient Gown":"assets/sprites/lk_o_Patient Gown.png","lk_o_Admin T":"assets/sprites/lk_o_Admin T.png","lk_o_SAF No. 4":"assets/sprites/lk_o_SAF No. 4.png","lk_o_SCDF Firefighter":"assets/sprites/lk_o_SCDF Firefighter.png","lk_o_SPF Officer":"assets/sprites/lk_o_SPF Officer.png","lk_o_School Uniform":"assets/sprites/lk_o_School Uniform.png","lk_o_Office Suit":"assets/sprites/lk_o_Office Suit.png","lk_o_Prison Stripes":"assets/sprites/lk_o_Prison Stripes.png","lk_o_Merlion Suit":"assets/sprites/lk_o_Merlion Suit.png","lk_o_Diver Wetsuit":"assets/sprites/lk_o_Diver Wetsuit.png","lk_o_Raffles Statue":"assets/sprites/lk_o_Raffles Statue.png","lk_o_Basic Tee & Bermudas":"assets/sprites/lk_o_Basic Tee & Bermudas.png","lk_o_Hazmat Suit":"assets/sprites/lk_o_Hazmat Suit.png","lk_o_SUTD Tee":"assets/sprites/lk_o_SUTD Tee.png","lk_o_China Aunty":"assets/sprites/lk_o_China Aunty.png","lk_o_All White":"assets/sprites/lk_o_All White.png","lk_o_Swimming Trunks":"assets/sprites/lk_o_Swimming Trunks.png","lk_o_Samsui Woman":"assets/sprites/lk_o_Samsui Woman.png","lk_o_Kopitiam Uncle":"assets/sprites/lk_o_Kopitiam Uncle.png","lk_o_Sang Nila Utama":"assets/sprites/lk_o_Sang Nila Utama.png","lk_o_Lion Dance":"assets/sprites/lk_o_Lion Dance.png","lk_o_Pontianak":"assets/sprites/lk_o_Pontianak.png","lk_o_Pocong":"assets/sprites/lk_o_Pocong.png","lk_o_Tamil Veshti":"assets/sprites/lk_o_Tamil Veshti.png","lk_o_Hazed Brute":"assets/sprites/lk_o_Hazed Brute.png","lk_o_Air Force":"assets/sprites/lk_o_Air Force.png","lk_o_Navy":"assets/sprites/lk_o_Navy.png","lk_o_Physio Scrubs":"assets/sprites/lk_o_Physio Scrubs.png","lk_t_Jungle Hat":"assets/sprites/lk_t_Jungle Hat.png","lk_t_Jockey Cap":"assets/sprites/lk_t_Jockey Cap.png","lk_t_Beret":"assets/sprites/lk_t_Beret.png","lk_t_SCDF Helmet":"assets/sprites/lk_t_SCDF Helmet.png","lk_t_SPF Cap":"assets/sprites/lk_t_SPF Cap.png","lk_t_Hawker Hat":"assets/sprites/lk_t_Hawker Hat.png","lk_t_Aunty Visor":"assets/sprites/lk_t_Aunty Visor.png","lk_t_Crab Hat":"assets/sprites/lk_t_Crab Hat.png","lk_t_Samsui Headdress":"assets/sprites/lk_t_Samsui Headdress.png","lk_t_Royal Crown":"assets/sprites/lk_t_Royal Crown.png","lk_t_Red Beret":"assets/sprites/lk_t_Red Beret.png","lk_t_Grey Beret":"assets/sprites/lk_t_Grey Beret.png","lk_t_Khaki Beret":"assets/sprites/lk_t_Khaki Beret.png","lk_t_Blue Beret":"assets/sprites/lk_t_Blue Beret.png","lk_t_Green Beret":"assets/sprites/lk_t_Green Beret.png","lk_t_Air Force Beret":"assets/sprites/lk_t_Air Force Beret.png","lk_t_Navy Beret":"assets/sprites/lk_t_Navy Beret.png","lk_t_Swimming Cap":"assets/sprites/lk_t_Swimming Cap.png","lk_t_Sweatband":"assets/sprites/lk_t_Sweatband.png","lk_f_Scuba Mask":"assets/sprites/lk_f_Scuba Mask.png","lk_f_Merlion Head":"assets/sprites/lk_f_Merlion Head.png","lk_f_Raffles Head":"assets/sprites/lk_f_Raffles Head.png","lk_f_Hazmat Hood":"assets/sprites/lk_f_Hazmat Hood.png","lk_f_Durian Head":"assets/sprites/lk_f_Durian Head.png","lk_f_Lion Dance Head":"assets/sprites/lk_f_Lion Dance Head.png","lk_f_Pontianak Hair":"assets/sprites/lk_f_Pontianak Hair.png","lk_f_Pocong Wrap":"assets/sprites/lk_f_Pocong Wrap.png","lk_f_Brute Head":"assets/sprites/lk_f_Brute Head.png","cos_Physio Scrubs":"assets/sprites/cos_Physio Scrubs.png","cos_Sweatband":"assets/sprites/cos_Sweatband.png","bg_empress":"assets/sprites/bg_empress.png","ov_obelisk":"assets/sprites/ov_obelisk.png","ov_shrubs":"assets/sprites/ov_shrubs.png","rw_prata":"assets/sprites/rw_prata.png","rw_pouch":"assets/sprites/rw_pouch.png","rw_jar":"assets/sprites/rw_jar.png","p_dummy":"assets/sprites/p_dummy.png"};
const FONT = {"A": "111101111101101", "B": "110101110101110", "C": "111100100100111", "D": "110101101101110", "E": "111100110100111", "F": "111100110100100", "G": "111100101101111", "H": "101101111101101", "I": "111010010010111", "J": "001001001101111", "K": "101101110101101", "L": "100100100100111", "M": "101111111101101", "N": "110101101101101", "O": "111101101101111", "P": "111101111100100", "Q": "111101101111001", "R": "111101110101101", "S": "111100111001111", "T": "111010010010010", "U": "101101101101111", "V": "101101101101010", "W": "101101111111101", "X": "101101010101101", "Y": "101101010010010", "Z": "111001010100111", "0": "111101101101111", "1": "010110010010111", "2": "111001111100111", "3": "111001111001111", "4": "101101111001001", "5": "111100111001111", "6": "111100111101111", "7": "111001001001001", "8": "111101111101111", "9": "111101111001111", " ": "000000000000000", ".": "000000000000010", ":": "000010000010000", "/": "001001010100100", "-": "000000111000000", "!": "010010010000010", "'": "010010000000000", ">": "100010001010100", ",": "000000000010100", "?": "111001011000010", "+": "000010111010000", "%": "101001010100101", "\u2665": "101111111010000", "(": "010100100100010", ")": "010001001001010"};
FONT['('] = '010100100100010'; FONT[')'] = '010001001001010'; FONT['*'] = '000101010101000'; FONT['&'] = '010101010101011';
const W = 320, H = 180;
const cv = document.getElementById('c');
const ctx = cv.getContext('2d');
ctx.imageSmoothingEnabled = false;
const focusHint = document.getElementById('focus');

/* ---------------- assets ---------------- */
const IMG = {}; const FLASH = {};
let toLoad = 0;
for (const k in ASSETS) {
  toLoad++;
  const im = new Image();
  im.onload = () => {
    FLASH[k] = whiteOf(im);
    if (k.startsWith('hero') && !k.includes('_nm')) { const n = k + '_n95'; IMG[n] = recolor(im, N95MAP); FLASH[n] = whiteOf(IMG[n]); }
    toLoad--;
  };
  im.src = ASSETS[k];
  IMG[k] = im;
}
function recolor(im, map) {
  const c = document.createElement('canvas'); c.width = im.width; c.height = im.height;
  const x = c.getContext('2d'); x.drawImage(im, 0, 0);
  const d = x.getImageData(0, 0, c.width, c.height);
  for (let i = 0; i < d.data.length; i += 4) {
    const k = ((d.data[i] << 16) | (d.data[i + 1] << 8) | d.data[i + 2]).toString(16).padStart(6, '0');
    if (map[k]) { const v = parseInt(map[k], 16); d.data[i] = v >> 16; d.data[i + 1] = (v >> 8) & 255; d.data[i + 2] = v & 255; }
  }
  x.putImageData(d, 0, 0); return c;
}
const N95MAP = { d6e8f3: 'f6f5ef', a7c4d8: 'c9ccd1', '6f8494': '8f949a' };
const TINTS = {};
function tinted(name, col) {
  const key = name + col; if (TINTS[key]) return TINTS[key];
  const src = IMG[name], c = document.createElement('canvas'); c.width = src.width; c.height = src.height;
  const x = c.getContext('2d'); x.drawImage(src, 0, 0); x.globalCompositeOperation = 'source-in'; x.fillStyle = col; x.fillRect(0, 0, c.width, c.height);
  return TINTS[key] = c;
}
const GOLD = {};
function goldOf(name) {
  // Raid Boss: a solid-gold Jun Jie, shaded by the sprite's own light and dark
  if (GOLD[name]) return GOLD[name];
  const im = IMG[name]; if (!im) return null;
  const c = document.createElement('canvas'); c.width = im.width; c.height = im.height;
  const x = c.getContext('2d'); x.drawImage(im, 0, 0);
  const d = x.getImageData(0, 0, c.width, c.height), p = d.data;
  const ramp = [[58, 34, 6], [138, 86, 14], [214, 150, 30], [246, 200, 70], [255, 240, 170]];
  for (let i = 0; i < p.length; i += 4) {
    if (!p[i + 3]) continue;
    const l0 = (0.3 * p[i] + 0.59 * p[i + 1] + 0.11 * p[i + 2]) / 255, l = l0 < 0.08 ? 0 : 0.32 + 0.68 * l0, k = Math.min(3.999, l * 4), j = k | 0, f = k - j, a = ramp[j], b = ramp[j + 1];   // outlines stay dark, everything else shines
    p[i] = a[0] + (b[0] - a[0]) * f; p[i + 1] = a[1] + (b[1] - a[1]) * f; p[i + 2] = a[2] + (b[2] - a[2]) * f;
  }
  x.putImageData(d, 0, 0); return (GOLD[name] = c);
}
function whiteOf(im) {
  const c = document.createElement('canvas'); c.width = im.width; c.height = im.height;
  const x = c.getContext('2d'); x.drawImage(im, 0, 0);
  x.globalCompositeOperation = 'source-in'; x.fillStyle = '#ffffff'; x.fillRect(0, 0, c.width, c.height);
  return c;
}

/* ---------------- save (per browser) ---------------- */
const SAVE_KEY = window.HazeHeroesSave.SAVE_KEY;
const airTxt = () => cheat('air') ? 'UNLIMITED' : String(save.cleanAir);
const freshSave = window.HazeHeroesSave.freshSave;
let save = window.HazeHeroesSave.load();
for (const k in save.up) if (save.up[k] === true) save.up[k] = 1;      // old saves: owned = rank 1
// saves from before the tutorial existed count as having done it
if (save.tutDone === undefined && (save.runCount || 0) > 0 && !save.tutStarted) save.tutDone = true;
// until the driveway tutorial is done: no achievements, and Mei and Joan stick to their everyday lines
const storyOn = () => !!save.tutDone;
function persist() { window.HazeHeroesSave.persist(save); }
/* ---------------- sound ---------------- */
let muted = false;
/* Haze Heroes sound engine: every effect is synthesised live with WebAudio (no audio files). */
const SFX_ALIAS = { pick: 'menu_select', boon: 'powerup', boss: 'land', shoot: 'boss_shot', menu: 'menu_move', charge: 'spit_charge' };
function sfx(type) { if (muted) return; SFX.play(SFX_ALIAS[type] || type); }
let vacLoop = null, audioReady = false;
// browsers only allow sound after the first tap or key press
['keydown', 'pointerdown', 'touchstart'].forEach(ev => addEventListener(ev, () => { if (!audioReady) { audioReady = true; try { SFX.init(); } catch (e) {} } else { try { SFX.init(); } catch (e) {} } }, { passive: true }));
function musicFor() {
  if (G.scene === 'title') return 'title';
  if (G.scene === 'hub' || G.scene === 'intro' || G.scene === 'pharm') return 'hospital';
  if (G.scene === 'run' && G.gate) return 'run_calm';
  if (G.scene === 'run') { if (G.cut) return G.cut.burst ? 'boss' : null;   // boss music kicks in the moment he transforms
    if (G.boss && G.boss.state !== 'dead') return 'boss'; return 'run'; }
  return null;   // death and win screens fall quiet
}
function vacHum(on) { if (on && !vacLoop && !muted) { try { vacLoop = SFX.loop('vac'); } catch (e) {} } else if (!on && vacLoop) { vacLoop(); vacLoop = null; } }

/* ---------------- input ---------------- */
const keys = {}, pressed = {};
const KEYMAP = { arrowup: 'up', w: 'up', arrowdown: 'down', s: 'down', arrowleft: 'left', a: 'left', arrowright: 'right', d: 'right',
  j: 'attack', k: 'special', ' ': 'dash', shift: 'dash', e: 'act', enter: 'act', t: 'tryon', escape: 'pause', r: 'reroll', m: 'mute', p: 'pause' };
function onKey(e, down) {
  const k = KEYMAP[e.key.toLowerCase()];
  if (!k) return;
  e.preventDefault();
  if (down && (k === 'attack' || k === 'special')) mouse.used = false;
  if (down && !keys[k]) pressed[k] = true;
  keys[k] = down;
}
addEventListener('keydown', e => { focusHint.hidden = true; onKey(e, true); });
addEventListener('keyup', e => onKey(e, false));
const mouse = { x: 160, y: 90, used: false, left: false, right: false };
function toGame(e) {
  const r = cv.getBoundingClientRect();
  return { x: (e.clientX - r.left) / r.width * W, y: (e.clientY - r.top) / r.height * H };
}
cv.addEventListener('mousemove', e => { const p = toGame(e); mouse.x = p.x; mouse.y = p.y; mouse.used = true; });
cv.addEventListener('mousedown', e => {
  cv.focus(); focusHint.hidden = true;
  const p = toGame(e); mouse.x = p.x; mouse.y = p.y;
  if (e.button === 0) { if (!mouse.left) pressed.click = true; mouse.left = true; mouse.used = true; }
  if (e.button === 2) { pressed.special = true; mouse.right = true; mouse.used = true; }
});
addEventListener('mouseup', e => { if (e.button === 0) mouse.left = false; if (e.button === 2) mouse.right = false; });
cv.addEventListener('contextmenu', e => e.preventDefault());
cv.addEventListener('wheel', e => { e.preventDefault(); const p = toGame(e); mouse.x = p.x; mouse.y = p.y; if (e.deltaY < 0) pressed.wheelUp = true; else if (e.deltaY > 0) pressed.wheelDown = true; }, { passive: false });
cv.addEventListener('focus', () => { focusHint.hidden = true; });
addEventListener('blur', () => { if ((G.scene === 'run' || G.scene === 'hub' || G.scene === 'pharm') && !G.boon && !G.menu && !G.pshop && !G.qboard && !G.mirror && !G.book && !G.file) G.paused = true; focusHint.hidden = false; for (const k in keys) keys[k] = false; mouse.left = false; });
addEventListener('focus', () => { focusHint.hidden = true; });
/* ---------------- touch controls ---------------- */
const isTouch = matchMedia('(pointer: coarse)').matches || ('ontouchstart' in window && navigator.maxTouchPoints > 0);
function enableTouch() {
  if (document.body.classList.contains('touch')) return;
  document.body.classList.add('touch'); focusHint.hidden = true; fit();
}
if (isTouch) enableTouch();
addEventListener('touchstart', enableTouch, { once: true, passive: true });
const press = (k, down) => {
  if (down) { if (!keys[k]) pressed[k] = true; keys[k] = true; mouse.used = false; mouse.left = false; }
  else keys[k] = false;
};
// buttons: each finger tracked on its own so you can hold attack while moving
// touch aim: hold Attack or Special and drag your thumb to aim, like the mouse on a computer
const touchAim = { x: 1, y: 0, on: false, clearNext: false, btn: null, sx: 0, sy: 0, id: null };
const buzz = () => { try { navigator.vibrate && navigator.vibrate(8); } catch (_) {} };
let lastPauseTap = 0;
function togglePause() {
  const now = performance.now(); if (now - lastPauseTap < 350) return; lastPauseTap = now;   // ignore the duplicate events some phones send
  if (G.scene === 'run' || G.scene === 'hub' || G.scene === 'pharm') { if (!G.boon && !G.menu && !G.pshop && !G.qboard && !G.mirror && !G.book && !G.file) { G.paused = !G.paused; G.pauseSel = 0; sfx(G.paused ? 'pause' : 'menu_back'); } }
}
document.querySelectorAll('#pad [data-k]').forEach(b => {
  const k = b.dataset.k;
  if (k === 'pause') {
    const go = e => { e.preventDefault(); b.classList.add('on'); togglePause(); setTimeout(() => b.classList.remove('on'), 120); };
    b.addEventListener('touchstart', go, { passive: false }); b.addEventListener('pointerdown', go); b.addEventListener('click', go);
    return;
  }
  const aimable = k === 'attack' || k === 'special';
  b.addEventListener('touchstart', e => {
    e.preventDefault(); b.classList.add('on'); buzz();
    const t = e.changedTouches[0];
    if (aimable) { touchAim.btn = k; touchAim.id = t.identifier; touchAim.sx = t.clientX; touchAim.sy = t.clientY; touchAim.on = false; touchAim.clearNext = false; }
    if (k === 'special') return;            // special fires when you let go, so you can aim it first
    press(k, true);
  }, { passive: false });
  if (aimable) b.addEventListener('touchmove', e => {
    e.preventDefault();
    for (const t of e.changedTouches) if (t.identifier === touchAim.id) {
      const dx = t.clientX - touchAim.sx, dy = t.clientY - touchAim.sy, d = Math.hypot(dx, dy);
      if (d > 14) { touchAim.on = true; touchAim.x = dx / d; touchAim.y = dy / d; }
    }
  }, { passive: false });
  const up = e => {
    e.preventDefault(); b.classList.remove('on');
    if (k === 'special') { pressed.special = true; mouse.used = false; }   // release = fire, at the aimed angle if you dragged
    else press(k, false);
    if (aimable && touchAim.btn === k) { touchAim.clearNext = true; touchAim.btn = null; touchAim.id = null; }
  };
  b.addEventListener('touchend', up, { passive: false }); b.addEventListener('touchcancel', up, { passive: false });
});
document.getElementById('fullBtn').addEventListener('touchstart', e => {
  e.preventDefault();
  try { const d = document.documentElement; if (!document.fullscreenElement) (d.requestFullscreen || d.webkitRequestFullscreen).call(d); else document.exitFullscreen(); } catch (_) {}
}, { passive: false });
// joystick: 8 directions, with a dead zone; crossing into a direction also counts as a "press" for menus
const stick = document.getElementById('stick'), knob = document.getElementById('knob');
let stickId = null;
const stickVec = { x: 0, y: 0, on: false };   // analog direction for movement and aiming (any angle)
function stickMove(t) {
  const r = stick.getBoundingClientRect(), cx = r.left + r.width / 2, cy = r.top + r.height / 2, R = r.width / 2;
  let dx = t.clientX - cx, dy = t.clientY - cy; const d = Math.hypot(dx, dy);
  if (d > R) { dx = dx / d * R; dy = dy / d * R; }
  knob.style.transform = `translate(${dx}px, ${dy}px)`;
  const nx = dx / R, ny = dy / R, on = Math.hypot(nx, ny) > 0.32, a = Math.atan2(ny, nx);
  stickVec.on = on; if (on) { const l = Math.hypot(nx, ny); stickVec.x = nx / l; stickVec.y = ny / l; }
  const want = { right: on && Math.cos(a) > 0.38, left: on && Math.cos(a) < -0.38, down: on && Math.sin(a) > 0.38, up: on && Math.sin(a) < -0.38 };
  for (const k in want) if (want[k] !== !!keys[k]) press(k, want[k]);
}
function stickEnd() { stickId = null; stickVec.on = false; knob.style.transform = ''; for (const k of ['up', 'down', 'left', 'right']) press(k, false); }
stick.addEventListener('touchstart', e => { e.preventDefault(); const t = e.changedTouches[0]; stickId = t.identifier; stickMove(t); }, { passive: false });
stick.addEventListener('touchmove', e => { e.preventDefault(); for (const t of e.changedTouches) if (t.identifier === stickId) stickMove(t); }, { passive: false });
const stickUp = e => { for (const t of e.changedTouches) if (t.identifier === stickId) stickEnd(); };
stick.addEventListener('touchend', stickUp); stick.addEventListener('touchcancel', stickUp);
// tapping the game screen works like a mouse click: menus, boon cards, the pause button
cv.addEventListener('touchstart', e => {
  e.preventDefault(); enableTouch();
  const t = e.changedTouches[0], pt = toGame(t); mouse.x = pt.x; mouse.y = pt.y; pressed.click = true; mouse.used = false;
}, { passive: false });
addEventListener('resize', () => { if (document.body.classList.contains('touch')) fit(); });
const held = k => !!keys[k];
const hit = k => { const v = !!pressed[k]; return v; };

/* ---------------- scaling ---------------- */
function fit() {
  if (document.body.classList.contains('touch')) {
    const portrait = innerHeight > innerWidth;
    document.body.classList.toggle('portrait', portrait); document.body.classList.toggle('landscape', !portrait);
    // landscape: the game fills the screen and the controls float over the bottom corners
    const s = portrait ? innerWidth / W : Math.min(innerWidth / W, innerHeight / H);
    if (portrait) {   // fit stick + button cluster across narrow phones without running off the edge
      const avail = innerWidth * 0.88, stickW = Math.min(160, Math.max(124, avail * 0.38));
      document.body.style.setProperty('--stick', stickW + 'px');
      document.body.style.setProperty('--btns', Math.min(1, (avail - stickW - 8) / 236).toFixed(3));
    }
    cv.style.width = Math.floor(W * s) + 'px'; cv.style.height = Math.floor(H * s) + 'px'; return;
  }
  const fs = !!(document.fullscreenElement || document.webkitFullscreenElement);
  document.body.classList.toggle('fs', fs);
  const avW = fs ? innerWidth : Math.min(document.body.clientWidth - 4, 1280);
  const avH = fs ? innerHeight : Math.max(200, innerHeight - 110);
  let s = Math.min(avW / W, avH / H);
  if (s >= 1 && !fs) s = Math.max(1, Math.floor(s));   // windowed: whole-pixel scaling; full screen: fill the screen
  cv.style.width = Math.round(W * s) + 'px'; cv.style.height = Math.round(H * s) + 'px';
}
addEventListener('resize', fit); fit();
document.addEventListener('fullscreenchange', () => {
  fit(); cv.focus();
  // keep Esc for the pause menu while in full screen (Chrome/Edge: hold Esc to leave full screen; F always toggles)
  try { if (navigator.keyboard && navigator.keyboard.lock) { if (document.fullscreenElement) navigator.keyboard.lock(['Escape']).catch(() => {}); else navigator.keyboard.unlock(); } } catch (_) {}
});
document.addEventListener('webkitfullscreenchange', fit);
function toggleFullscreen() {
  try {
    const d = document.documentElement;
    if (!(document.fullscreenElement || document.webkitFullscreenElement)) { const r = (d.requestFullscreen || d.webkitRequestFullscreen).call(d); if (r && r.catch) r.catch(() => {}); }
    else (document.exitFullscreen || document.webkitExitFullscreen).call(document);
  } catch (_) {}
}
document.getElementById('fsDesk').addEventListener('click', () => { toggleFullscreen(); });
addEventListener('keydown', e => { if (e.key && e.key.toLowerCase() === 'f' && !e.repeat) toggleFullscreen(); });

/* ---------------- drawing helpers ---------------- */
const isPixelText = s => [...String(s)].every(ch => ch.charCodeAt(0) < 128 || FONT[ch]);   // anything non-English (快点, சீக்கிரம்) uses the system font
function text(s, x, y, col = '#efe6d6', scale = 1, shadow = '#0b0a0a') {
  x = Math.round(x); y = Math.round(y);
  if (!isPixelText(s)) {
    // the 3x5 pixel font is A-Z only: draw other scripts (快点, சீக்கிரம்) with the system font at a matching size
    ctx.save(); ctx.font = `bold ${8 * scale}px "Noto Sans", "Nirmala UI", "Tamil Sangam MN", "Noto Sans Tamil", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", system-ui, sans-serif`; ctx.textBaseline = 'top';
    if (shadow) { ctx.fillStyle = shadow; ctx.fillText(s, x + 1, y - 1); }
    ctx.fillStyle = col; ctx.fillText(s, x, y - 2); ctx.restore(); return;
  }
  s = String(s).toUpperCase();
  const pass = (dx, dy, c) => {
    ctx.fillStyle = c; let cx = x;
    for (const ch of s) {
      const g = FONT[ch] || FONT[' '];
      for (let i = 0; i < 15; i++) if (g[i] === '1') ctx.fillRect(cx + (i % 3) * scale + dx, y + ((i / 3) | 0) * scale + dy, scale, scale);
      cx += 4 * scale;
    }
  };
  if (shadow) pass(1, 1, shadow);
  pass(0, 0, col);
}
const textW = (s, scale = 1) => {
  if (isPixelText(s)) return String(s).length * 4 * scale - scale;
  ctx.save(); ctx.font = `bold ${8 * scale}px "Noto Sans", "Nirmala UI", "Tamil Sangam MN", "Noto Sans Tamil", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", system-ui, sans-serif`; const w = Math.ceil(ctx.measureText(s).width); ctx.restore(); return w;
};
function textC(s, cx, y, col, scale = 1, shadow) { text(s, Math.round(cx - textW(s, scale) / 2), y, col, scale, shadow); }
function outlined(s, x, y, col, scale = 1, out = '#0b0a0a') {
  for (const [dx, dy] of [[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[1,1],[1,-1],[-1,1]]) text(s, x + dx, y + dy, out, scale, null);
  text(s, x, y, col, scale, null);
}
function wrap(s, px, scale = 1) {
  const out = []; let cur = '';
  for (const w of s.split(' ')) {
    const t = cur ? cur + ' ' + w : w;
    if (textW(t, scale) <= px) cur = t; else { if (cur) out.push(cur); cur = w; }
  }
  if (cur) out.push(cur);
  return out;
}
function panel(x0, y0, x1, y1, border = '#e8a25c', fill = 'rgba(20,18,16,0.9)') {
  x0 = Math.round(x0); y0 = Math.round(y0); x1 = Math.round(x1); y1 = Math.round(y1);
  ctx.fillStyle = fill; ctx.fillRect(x0, y0, x1 - x0, y1 - y0);
  ctx.strokeStyle = border; ctx.lineWidth = 1; ctx.strokeRect(x0 + 0.5, y0 + 0.5, x1 - x0 - 1, y1 - y0 - 1);
}
function shadowAt(x, y, rx, ry = Math.max(2, rx / 3), a = 0.35) {
  ctx.fillStyle = `rgba(20,18,16,${a})`; ctx.beginPath(); ctx.ellipse(x, y, rx, ry, 0, 0, Math.PI * 2); ctx.fill();
}
function spr(name, x, y, opt = {}) {           // bottom-centre anchored
  const im = opt.flash ? FLASH[name] : opt.gold ? goldOf(name) : IMG[name];
  if (!im) return;
  const w = im.width, h = im.height;
  ctx.save();
  if (opt.alpha != null) ctx.globalAlpha = opt.alpha;
  const dx = Math.round(x - w / 2), dy = Math.round(y - h);
  if (opt.flip) { ctx.translate(dx + w, dy); ctx.scale(-1, 1); ctx.drawImage(im, 0, 0); }
  else ctx.drawImage(im, dx, dy);
  ctx.restore();
}
function iconAt(name, x, y, scale = 1) { const im = IMG[name]; if (im) ctx.drawImage(im, Math.round(x), Math.round(y), im.width * scale, im.height * scale); }
const rand = (a, b) => a + Math.random() * (b - a);
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

/* ---------------- tuning ---------------- */



const lv = k => P.boons[k] | 0;
const warrantyPool = () => Object.keys(P.boons).filter(k => P.boons[k] === 1 && (BOONS[k].max || 1) >= 2);
const boonOpen = k => {
  const b = BOONS[k];
  if (b.instant) return b.hurt ? P.half < P.max : true;          // chicken rice only when you are missing masks
  if (k === 'warranty' && !warrantyPool().length) return false;    // nothing to upgrade
  return lv(k) < (b.max || 1);
};
const shuffle = a => { for (let i = a.length - 1; i > 0; i--) { const j = (Math.random() * (i + 1)) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };


const cheat = k => !!(save.cheats && save.cheats[k]);
const rank = id => (cheat('maxup') || cheat('raid')) ? UPGRADES.find(u => u.id === id).costs.length : save.up[id] | 0;
const maxHalf = () => 6 + 2 * rank('n95');
const runMax = () => maxHalf() + 2 * (G.curryN || 0);
const dashCdBase = () => 0.9 * (1 - 0.15 * rank('lung'));
// six fight rooms, then the Mamak Shop, then Raffles. Room 6 is always Empress Place.





const pick = a => a[(Math.random() * a.length) | 0];







let lastNurse = -1;
// talking to her at the desk: a few lines depend on what just happened

function nurseTalk() {
  if (!storyOn()) {   // a brand-new patient: nothing that assumes he's been here before
    const l = pick(NURSE_LINES.filter(x => /DISPENSER|PHYSIO JOAN SAYS|BIG STATUE|GAHMENT|TIP/.test(x) && x !== lastNurse)); lastNurse = l; return say('nurse', 'NURSE MEI', l);
  }
  const al = meiAnnoyLine();
  if (al) return say('nurse', 'NURSE MEI', UP(al), G.meiTalks >= 15 ? meiKnockout : null);
  const ci = pickComment(0); if (ci) return say('nurse', 'NURSE MEI', UP(CMT[ci][0]));
  if (G.psiTalk) { const l = G.psiTalk === 1 ? 'PSI 164? YOU TRYING TO GIVE ME A HEART ATTACK?' : '248?! VERY UNHEALTHY, THE NEWS SAYS STAY INDOORS. AND YOU WANT TO GO OUT?'; G.psiTalk = 0; return say('nurse', 'NURSE MEI', l); }
  if (save.ph && save.ph.lastRunWon && save.wins > 1 && lastNurse !== NURSE_WINBACK && Math.random() < 1 / 3) { lastNurse = NURSE_WINBACK; return say('nurse', 'NURSE MEI', NURSE_WINBACK); }
  if (save.ph && save.ph.stage >= 4 && Math.random() < 0.25) {
    const l = pick(NURSE_TEASE);
    return say('nurse', 'NURSE MEI', l, l.startsWith('GO AND SEE HER') ? () => say(P.masked ? 'hero' : 'hero_nm', 'JUN JIE', "I'M NOT SMILING!") : null);
  }
  say('nurse', 'NURSE MEI', nurseLine());
}
function nurseLine(wake) { const l = nurseLine0(wake); lastNurse = l; return l; }
function nurseLine0(wake) {
  if (wake && save.deaths === 1 && !save.paraHeard) { save.paraHeard = true; persist(); return NURSE_PARAMEDICS; }
  if (wake && G.weapon === 'rotan' && !save.meiRotanKO) { save.meiRotanKO = true; persist(); return 'YOU HAD A ROTAN AND STILL KENA WHACKED?'; }
  if (wake && G.killedBy && NURSE_KO[G.killedBy] && Math.random() < 1 / 3) return NURSE_KO[G.killedBy];
  const pool = NURSE_LINES.concat(save.paraHeard ? [NURSE_PARAMEDICS] : [], save.deaths > 5 ? [NURSE_VETERAN] : [], save.deaths > 10 ? [NURSE_HANDSOME] : []);
  if (save.deaths >= 3 && !save.boxTipHeard) { save.boxTipHeard = true; persist(); return NURSE_BOXTIP; }   // early-game tip on the third wake-up (the second one opens the pharmacy)
  if (save.deaths === 6 && !save.veteranHeard) { save.veteranHeard = true; persist(); return NURSE_VETERAN; }   // first time it unlocks, she says it
  if (save.deaths === 11 && !save.handsomeHeard) { save.handsomeHeard = true; persist(); return NURSE_HANDSOME; }
  const l = pick(pool.filter(x => x !== lastNurse)); lastNurse = l; return l;   // never the same line twice in a row
}
function physioPing() {
  // after the very first death, the physio texts you so nobody misses the upgrades
  if (save.deaths >= 1 && !save.physioPinged && !Object.keys(save.up).length) {
    save.physioPinged = true; persist();
    say('physio', 'PHYSIO JOAN (MESSAGE)', "YOU HAVEN'T COME FOR YOUR PHYSIO SESSION YET. COME OVER TO TRAIN AND GET BETTER. BRING YOUR CLEAN AIR.", () => { G.hint = { x: 282, y: 92 }; });
  }
}

/* ---------------- world geometry ---------------- */
const R = (x0, y0, x1, y1) => ({ x0, y0, x1, y1 });
const inR = (r, x, y) => x >= r.x0 && x <= r.x1 && y >= r.y0 && y <= r.y1;
const MAPS = {
  hub: {
    bg: 'bg_hub',
    walk: [R(2, 58, 63, 141), R(0, 140, 319, 178), R(71, 60, 115, 121), R(123, 60, 237, 121), R(245, 60, 318, 121),
           R(113, 80, 125, 106), R(129, 117, 151, 142), R(265, 117, 287, 142)],
    block: [R(19, 68, 62, 94), R(4, 66, 16, 115), R(26, 123, 34, 132), R(182, 62, 219, 121), R(220, 98, 238, 116),
            R(171, 106, 178, 116), R(70, 86, 91, 120), R(97, 97, 112, 121), R(253, 56, 271, 93), R(295, 61, 316, 96), R(275, 104, 290, 115),
            R(45, 171, 62, 180), R(133, 171, 150, 180), R(303, 171, 320, 180), R(232, 168, 296, 180)],
  },
  river: { bg: 'bg_river', walk: [R(4, 54, 316, 143)], block: [R(20, 74, 40, 85), R(280, 74, 300, 85), R(90, 70, 93, 75), R(226, 70, 229, 75)],
           props: [{ img: 'umb_red', cx: 116, cy: 112, x: 116, y: 116, rx: 15, ry: 9 }, { img: 'umb_teal', cx: 212, cy: 104, x: 212, y: 108, rx: 15, ry: 9 }] },
  shop: { bg: 'bg_shop', door: { x: W - 16, y: 84, w: 16, h: 31, side: 'right' }, walk: [R(4, 60, 316, 143)], block: [R(94, 64, 116, 82), R(138, 70, 182, 80), R(208, 58, 230, 80),
           R(88, 106, 104, 114), R(120, 106, 136, 114), R(152, 106, 168, 114), R(184, 106, 200, 114), R(216, 106, 232, 114)] },
  arena: { bg: 'bg_arena', walk: [R(10, 54, 310, 174)], block: [R(138, 103, 182, 114)] },
};
const inProp = (map, x, y, pad = 0) => (map.props || []).find(o => o.rx && ((x - o.x) / (o.rx + pad)) ** 2 + ((y - o.y) / (o.ry + pad)) ** 2 < 1);
const mapW = () => G.map.w || W, mapH = () => G.map.h || H;
function makeRoom(type) {
  // a fresh layout each time: same room type, different obstacles
  const D = ROOMDEFS[type], m = { type, name: D.name, bg: D.bg, w: D.w, h: D.h, door: D.door, spawn: D.spawn, reward: D.reward,
    walk: D.walk.map(r => R(...r)), block: D.block.map(r => R(...r)), props: [] };
  for (const f of D.fixed || []) m.props.push({ kind: 'fixed', x: f.x, y: f.y, rx: f.rx, ry: f.ry });
  for (const o of D.overlays || []) m.props.push({ kind: 'over', img: o.img, ox: o.x, oy: o.y, x: 0, y: o.base });
  const keep = (x, y) => Math.hypot(x - D.spawn[0], y - D.spawn[1]) > 40 && Math.hypot(x - D.reward[0], y - D.reward[1]) > 28 &&
    Math.hypot(x - (D.door.x + D.door.w / 2), y - (D.door.y + D.door.h / 2)) > 50;
  const slots = shuffle(D.slots.filter(([x, y]) => keep(x, y)));
  const n = D.count[0] + ((Math.random() * (D.count[1] - D.count[0] + 1)) | 0);
  for (const [x, y] of slots.slice(0, n)) {
    const kind = pick(D.kinds), jx = x + rand(-6, 6), jy = y + rand(-4, 4);
    if (kind === 'umb') m.props.push({ kind, img: Math.random() < 0.5 ? 'umb_red' : 'umb_teal', x: jx, y: jy, rx: 15, ry: 9, stools: [0, 1, 2, 3].filter(() => Math.random() < 0.7) });
    else if (kind === 'tree') m.props.push({ kind, img: 'p_tree', x: jx, y: jy, rx: 11, ry: 6 });
    else m.props.push({ kind, img: 'p_crates', x: jx, y: jy, rx: 10, ry: 6 });
  }
  // 2-4 breakable boxes, like pots in Hades: tucked against the edges of the room so they stay out of the fight.
  // Sometimes a big box comes with a small one beside it.
  const big = m.walk.filter(r => (r.x1 - r.x0) * (r.y1 - r.y0) > 3000);
  const free = (x, y, d) => keep(x, y) && canStand(m, x, y) && !m.props.some(o => Math.hypot(o.x - x, o.y - y) < d);
  const style = () => Math.random() < 0.5 ? 'A' : 'C';
  const nb = type === 'gate' ? 0 : 2 + ((Math.random() * 3) | 0);
  for (let i = 0, tries = 0; i < nb && tries < 80; tries++) {
    const r = pick(big), side = (Math.random() * 4) | 0, inset = rand(9, 16);
    let x, y;
    if (side === 0) { x = rand(r.x0 + 16, r.x1 - 16); y = r.y0 + inset; }          // along the top wall
    else if (side === 1) { x = rand(r.x0 + 16, r.x1 - 16); y = r.y1 - inset + 4; }  // along the bottom edge
    else if (side === 2) { x = r.x0 + inset + 2; y = rand(r.y0 + 12, r.y1 - 6); }   // left edge
    else { x = r.x1 - inset - 2; y = rand(r.y0 + 12, r.y1 - 6); }                   // right edge
    if (!free(x, y, 30)) continue;
    m.props.push({ kind: 'box', img: 'p_box' + style(), x, y, rx: 7, ry: 4 }); i++;
    if (Math.random() < 0.4) {    // a small box tucked in beside it
      const sx = x + (Math.random() < 0.5 ? -13 : 13), sy = y + rand(1, 4);
      if (free(sx, sy, 11)) m.props.push({ kind: 'box', img: 'p_box' + style() + 's', small: true, x: sx, y: sy, rx: 5, ry: 3 });
    }
  }
  return m;
}
function breakBox(b, special, src) {
  if (b.dummy) { b.wob = 0.35; b.hits = (b.hits || 0) + 1; sfx('hit'); if (G.tut) tutHit(src); for (let i = 0; i < 4; i++) G.fx.push({ k: 'spark', x: b.x + rand(-4, 4), y: b.y - rand(8, 18), vx: rand(-40, 40), vy: rand(-50, -10), t: 0.3, c: '#c99a62' }); return; }
  const M = G.map; M.props = M.props.filter(o => o !== b); sfx('box_break');
  if (G.scene === 'run') { RS.boxes++; st().boxes++; qev('box', { special: !!special }); }
  for (let i = 0; i < 8; i++) G.fx.push({ k: 'spark', x: b.x + rand(-5, 5), y: b.y - rand(2, 10), vx: rand(-50, 50), vy: rand(-60, -10), t: 0.4, c: i % 2 ? '#c08a52' : '#e9d3a0' });
  G.fx.push({ k: 'smoke', x: b.x, y: b.y - 6, t: 0.4, vx: 0, vy: -10, r: 4 });
  // contents: usually 1-4 coins, sometimes empty, rarely a meal (heals 1 mask)
  const r = Math.random();
  let n = 0;
  if (r < 0.04) { G.pickups.push({ k: 'meal', x: b.x, y: b.y, t: 0 }); G.fx.push({ k: 'pop', x: b.x, y: b.y - 20, t: 0.8, s: 'MEAL!', c: '#e8a25c' }); }
  else if (r < 0.24) n = 3 + (Math.random() < 0.5 ? 1 : 0);
  else if (r < 0.65) n = 1 + (Math.random() < 0.5 ? 1 : 0);
  else G.fx.push({ k: 'pop', x: b.x, y: b.y - 18, t: 0.6, s: 'EMPTY', c: '#9aa0a9' });
  for (let i = 0; i < n; i++) G.pickups.push({ k: 'coin', x: b.x + rand(-3, 3), y: b.y + rand(-2, 2), n: 1, t: 0, vx: rand(-60, 60), vy: rand(-40, 20) });
}
const boxes = () => (G.map.props || []).filter(o => o.kind === 'box');   // the tutorial's cardboard Hazed count as boxes so attacks hit them, but never break
// does a shot / beam at air height (x, y) overlap the drawn box? (boxes are drawn up from their base at b.y)
const boxAt = (b, x, y, pad = 0) => { const hw = b.small ? 6 : 8, h = b.small ? 10 : 14; return Math.abs(x - b.x) < hw + pad && y > b.y - h - pad && y < b.y + 2 + pad; };
// sweep from (x0,y0) to (x1,y1) in small steps so fast shots cannot skip over a box
function boxOnPath(x0, y0, x1, y1, pad = 0) {
  const bs = boxes(); if (!bs.length) return null;
  const n = Math.max(1, Math.ceil(Math.hypot(x1 - x0, y1 - y0) / 2));
  for (let i = 0; i <= n; i++) { const x = x0 + (x1 - x0) * i / n, y = y0 + (y1 - y0) * i / n; for (const b of bs) if (boxAt(b, x, y, pad)) return b; }
  return null;
}
function roomOrder() {
  // every run: rooms 1-5 from the 3 Boat Quay types, never the same type twice in a row, then Empress Place
  const out = []; let last = null;
  for (let i = 0; i < FIGHT_ROOMS - 1; i++) { const opts = Object.keys(ROOMDEFS).filter(k => k !== last && k !== 'gate' && k !== 'empress'); last = pick(opts); out.push(last); }
  out.push('empress'); return out;
}
function drawPropGround(o) {
  if (o.kind !== 'umb') return;
  shadowAt(o.x + 4, o.y + 2, 15, 6, 0.3);
  const st = [[-14, 4], [12, 6], [-6, 10], [8, -6]];
  for (const i of o.stools) { const [dx, dy] = st[i]; ctx.fillStyle = '#b8402e'; ctx.fillRect(Math.round(o.x + dx), Math.round(o.y + dy), 6, 5); ctx.fillStyle = '#7d1f1a'; ctx.fillRect(Math.round(o.x + dx), Math.round(o.y + dy + 4), 6, 1); }
}
function drawProp(o) {
  if (o.kind === 'over') { ctx.drawImage(IMG[o.img], o.ox, o.oy); return; }
  if (o.dummy) { const w = o.wob > 0 ? Math.sin(o.wob * 40) * o.wob * 0.8 : 0; ctx.save(); ctx.translate(Math.round(o.x), Math.round(o.y)); ctx.rotate(w); ctx.drawImage(IMG.p_dummy, -10, -27); ctx.restore(); return; }
  if (o.kind === 'umb') ctx.drawImage(IMG[o.img], Math.round(o.x - 15), Math.round(o.y - 19));
  else if (o.kind === 'tree') ctx.drawImage(IMG.p_tree, Math.round(o.x - 15), Math.round(o.y - 26));
  else if (o.kind === 'crates') ctx.drawImage(IMG.p_crates, Math.round(o.x - 11), Math.round(o.y - 17));
  else if (o.kind === 'box') { if (o.small) ctx.drawImage(IMG[o.img], Math.round(o.x - 6), Math.round(o.y - 9)); else ctx.drawImage(IMG[o.img], Math.round(o.x - 8), Math.round(o.y - 13)); }
}
// no knockback (revive blast, Teh Tarik, whistle, hits...) may push a Hazed off the playable floor:
// anyone found outside it goes back to the last spot where they were inside, or to the nearest point of the floor
function keepInBounds() {
  const M = G.map; if (!M || !M.walk) return;
  const onFloor = (x, y) => M.walk.some(r => inR(r, x, y));
  for (const e of G.enemies) {
    if (e.state === 'gone') continue;
    if (onFloor(e.x, e.y) && onFloor(e.x, e.y - 2)) { e.sx = e.x; e.sy = e.y; continue; }
    if (e.sx != null) { e.x = e.sx; e.y = e.sy; }
    else {
      let best = null, bd = 1e9;
      for (const r of M.walk) { const x = clamp(e.x, r.x0 + 4, r.x1 - 4), y = clamp(e.y, r.y0 + 4, r.y1 - 2), dd = Math.hypot(x - e.x, y - e.y); if (dd < bd) { bd = dd; best = [x, y]; } }
      if (best) { e.x = best[0]; e.y = best[1]; }
    }
    e.vx = 0; e.vy = 0;
  }
}
function canStand(map, x, y) {
  const pts = [[x - 3, y], [x + 3, y], [x - 3, y - 2], [x + 3, y - 2]];
  for (const [px, py] of pts) {
    if (!map.walk.some(r => inR(r, px, py))) return false;
    if (map.block.some(r => inR(r, px, py))) return false;
    if (inProp(map, px, py)) return false;
  }
  return true;
}

/* ---------------- fog (dithered, per PSI level) ---------------- */
const BAYER = [[0, 8, 2, 10], [12, 4, 14, 6], [3, 11, 1, 9], [15, 7, 13, 5]];
const fogTex = [];
function buildFog(level) {
  const c = document.createElement('canvas'); c.width = W; c.height = H;
  const x = c.getContext('2d'); const d = x.createImageData(W, H);
  let seed = 3 + level; const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  const blobs = []; for (let i = 0; i < 9; i++) blobs.push([rnd() * W, rnd() * H, 30 + rnd() * 40]);
  const dens = PSI[level].fog;
  for (let y = 0; y < H; y++) for (let xx = 0; xx < W; xx++) {
    let n = 0; for (const [bx, by, br] of blobs) { const dd = Math.hypot(xx - bx, y - by) / br; if (dd < 1) n += (1 - dd) * 0.35; }
    const v = Math.min(1, dens * (0.55 + n));
    const i = (y * W + xx) * 4;
    if (v * 16 > BAYER[y % 4][xx % 4] + 0.5) { d.data[i] = 201; d.data[i + 1] = 182; d.data[i + 2] = 143; d.data[i + 3] = 200; }
    else { d.data[i] = 201; d.data[i + 1] = 182; d.data[i + 2] = 143; d.data[i + 3] = Math.round(v * 70); }
  }
  x.putImageData(d, 0, 0); return c;
}
const fogLayer = document.createElement('canvas'); fogLayer.width = W; fogLayer.height = H;
const fctx = fogLayer.getContext('2d');
const lampR = () => [0, 52, 66][lv('headlamp')] || 0;
function drawHazeIn() {
  // after a win, thick haze rolls in from the river: the PSI 248 fog fades in over a few seconds, with a brown wash
  const k = clamp((G.t - G.hazeIn) / 3, 0, 1);
  if (!fogTex[2]) fogTex[2] = buildFog(2);
  ctx.globalAlpha = k * 0.85; ctx.drawImage(fogTex[2], Math.round(Math.sin(G.t * 0.4) * 6) - 6, 0); ctx.globalAlpha = 1;
  ctx.fillStyle = `rgba(150,128,96,${k * 0.3})`; ctx.fillRect(0, 0, W, H);
}
function drawFog(level, px, py) {
  if (!fogTex[level]) fogTex[level] = buildFog(level);
  fctx.globalCompositeOperation = 'source-over'; fctx.clearRect(0, 0, W, H); fctx.drawImage(fogTex[level], 0, 0);
  fctx.globalCompositeOperation = 'destination-out';
  const r = Math.max(level === 2 ? 46 : 62, G.scene === 'run' && P.boons.headlamp ? lampR() + 14 : 0);
  const g = fctx.createRadialGradient(px, py, r * 0.45, px, py, r);
  g.addColorStop(0, 'rgba(0,0,0,1)'); g.addColorStop(1, 'rgba(0,0,0,0)');
  fctx.fillStyle = g; fctx.fillRect(0, 0, W, H);
  fctx.globalCompositeOperation = 'source-over';
  ctx.drawImage(fogLayer, 0, 0);
}

/* ---------------- game state ---------------- */
const G = {
  scene: 'title', titleSel: 0, t: 0, psi: 0, weapon: null, map: MAPS.hub,
  dialog: null, menu: null, boon: null, paused: false, flash: 0, shake: 0, banner: null,
  room: 0, enemies: [], shots: [], fx: [], pickups: [], flags: [], boss: null, cleared: false, rewardTaken: false,
  doorOpen: false, spawnT: 0, stats: { rooms: 0, kills: 0, air: 0 }, rerolled: false, windUsed: false, timeInRoom: 0,
};
const P = { ghosts: [], swingT: 0, swingA: 0, recoil: 0, throwT: 0, moving: false, stepT: 0, gasT: 0, zapT: 0, botX: 160, botY: 90, showOff: 0, x: 176, y: 112, face: { x: 0, y: 1 }, flip: false, masked: false, half: 6, max: 6, inv: 0, dashT: 0, dashCd: 0,
  dashDir: { x: 1, y: 0 }, atkCd: 0, spCd: 0, charge: 0, sucking: false, boons: {}, botA: 0, botCd: 0, hulaCd: 0, hurtFlash: 0, walkT: 0 };

const baldActive = () => P.boons.bald && G.scene === 'run' && (P.moving || P.dashT > 0);
function speedMul() { let m = 1; if (P.boons.skates) m *= 1 + 0.1 * lv('skates'); if (P.boons.bald) m *= 1.10; return m; }
function dmgMul() { let m = 1; if (P.boons.overclock) m *= 1 + 0.25 * lv('overclock'); m *= 1 + 0.05 * rank('grip'); if (baldActive()) m *= 1.2; return m; }

function toHub(wake) {
  G.banner = null;
  G.scene = 'hub'; G.map = MAPS.hub; G.enemies = []; G.shots = []; G.fx = []; G.pickups = []; G.flags = []; G.boss = null;
  P.x = 166; P.y = 100; P.boons = {}; P.inv = 0; P.dashT = 0; G.bubble = null;
  if (!wake && save.wins > 0 && !save.psiSeen) {
    save.psiSeen = true; persist();
    G.banner = { t: 4, s: 'PSI KIOSK UNLOCKED! RAISE THE HAZE FOR BETTER REWARDS.' }; G.hint = { x: 104, y: 92 };
  }
  if (!wake && recordsOpen() && !save.recordsSeen) {
    save.recordsSeen = true; persist();
    G.banner = { t: 3.5, s: 'A NEW ROOM HAS OPENED IN THE CORRIDOR' }; G.hint = { x: 181, y: 150 };
  }
  if (wake) {
    P.masked = false;
    say('nurse', 'NURSE MEI', nurseLine(true), physioPing);
  }
}

/* ---------------- dialog ---------------- */
function say(img, name, line, then) {
  if (img === 'hero' || img === 'hero_nm') img = G.scene === 'run' ? 'hero' : 'hero_nm';   // Jun Jie's portrait: mask off in the hospital, on outside
  const lines = [];
  for (const chunk of [line]) { const w = wrap(chunk, 222); for (let i = 0; i < w.length; i += 3) lines.push(w.slice(i, i + 3)); }
  if (G.dialog) { (G.dlgQ = G.dlgQ || []).push([img, name, line, then]); (window.__ovl = window.__ovl || []).push(G.dialog.name + ' <- ' + name + ': ' + line.slice(0, 50)); return; }
  G.dialog = { img, name, pages: lines, i: 0, then };
}
function closeDialog() {
  const t = G.dialog.then; G.dialog = null; if (t) t();
  if (!G.dialog && G.dlgQ && G.dlgQ.length) say(...G.dlgQ.shift());
}
function updateDialog() {
  if ((G.scene === 'run' || G.scene === 'hub' || G.scene === 'pharm') && (hit('pause') || pauseClicked())) { G.paused = true; G.pauseSel = 0; sfx('pause'); return; }
  if (hit('act') || hit('click') || hit('attack')) {
    sfx('talk'); G.dialog.i++;
    if (G.dialog.i >= G.dialog.pages.length) closeDialog();
  }
}
function drawDialog() {
  const D = G.dialog; if (!D) return;
  panel(6, 128, W - 6, H - 6);
  const im = IMG[D.img], sc = Math.min(2, 32 / im.width, 48 / im.height), iw = Math.round(im.width * sc), ih = Math.round(im.height * sc);
  ctx.fillStyle = '#a8906b'; ctx.fillRect(12, 118, 38, 54);
  ctx.strokeStyle = '#e8a25c'; ctx.strokeRect(12.5, 118.5, 37, 53);
  ctx.drawImage(im, 31 - iw / 2, 169 - ih, iw, ih);
  ctx.fillStyle = '#e8a25c'; ctx.fillRect(52, 122, textW(D.name) + 6, 9);
  text(D.name, 55, 124, '#24211c', 1, null);
  D.pages[D.i].forEach((l, j) => text(l, 54, 138 + j * 9, '#efe6d6'));
  text('ENTER', W - 40, H - 15, (G.t * 2 | 0) % 2 ? '#e8a25c' : '#8a6a3a', 1, null);
}

/* ---------------- waking up: black, blinking, in bed, get up ---------------- */
function drawInBed() {
  const bx = 184, by = 66;
  ctx.save(); ctx.translate(bx + 8 + 16, by + 25 + 24); ctx.rotate(Math.PI); ctx.drawImage(IMG.hero_nm, 0, 0); ctx.restore();
  ctx.fillStyle = '#a7c4d8'; ctx.fillRect(bx + 2, by + 2, 28, 35);
  ctx.fillStyle = '#c9dbe8'; ctx.fillRect(bx + 2, by + 33, 28, 3);
  ctx.fillStyle = '#7f9fb6'; ctx.fillRect(bx + 2, by + 36, 28, 1);
  ctx.fillStyle = '#93b3c9'; ctx.fillRect(bx + 11, by + 6, 1, 25); ctx.fillRect(bx + 20, by + 6, 1, 25);
  ctx.fillStyle = '#b9d0e0'; ctx.fillRect(bx + 9, by + 4, 5, 4); ctx.fillRect(bx + 18, by + 4, 5, 4);
  ctx.fillStyle = 'rgba(224,168,90,0.086)'; ctx.fillRect(bx + 2, by + 2, 28, 46);
}
const BLINK = [[0, 0], [0.35, 0.3], [0.6, 0.02], [1.0, 0.55], [1.25, 0.08], [1.9, 1]];
function lidOpen(t) {
  if (t <= 0) return 0;
  for (let i = 1; i < BLINK.length; i++) {
    const [t0, o0] = BLINK[i - 1], [t1, o1] = BLINK[i];
    if (t <= t1) { const k = (t - t0) / (t1 - t0); return o0 + (o1 - o0) * (k * k * (3 - 2 * k)); }
  }
  return 1;
}
function startIntro(mode) {
  G.scene = 'intro'; G.intro = { t: 0, mode }; G.map = MAPS.hub; G.dialog = null; G.dlgQ = []; G.menu = null;
  G.enemies = []; G.shots = []; G.fx = []; G.pickups = []; G.flags = []; G.boss = null;
  P.x = 166; P.y = 100; P.masked = false; P.boons = {}; P.inv = 0; P.dashT = 0; P.flip = true;
  P.hurtFlash = 0; P.ghosts = []; P.swingT = 0; P.throwT = 0; P.recoil = 0; P.showOff = 0; P.sucking = false; P.charge = 0; P.face = { x: 0, y: 1 };
}
const INTRO = { black: 0.9, blink: 1.9, getup: 4.6, end: 5.0 };
const RETURN_END = 2.4;
function updateIntro(dt) {
  const I = G.intro; I.t += dt;
  if (I.mode === 'return') {
    if (I.t > 0.4 && hit('act')) I.t = RETURN_END;
    if (I.t >= RETURN_END) { G.scene = 'hub'; G.banner = { t: 3, s: 'GRAB A MASK AND A WEAPON, THEN HEAD OUT.' }; }
    return;
  }
  const black = I.mode === 'wake' ? 0.5 : INTRO.black;
  if (I.t > 1 && hit('act')) I.t = Math.max(I.t, INTRO.getup);
  if (I.t >= INTRO.getup && !I.up) {
    I.up = true; sfx('new_run');
    for (let i = 0; i < 6; i++) G.fx.push({ k: 'dust', x: 166 + rand(-6, 6), y: 100, t: 0.4, vx: rand(-20, 20), vy: rand(-10, 0) });
  }
  if (I.t >= INTRO.end) {
    G.scene = 'hub';
    if (I.mode === 'first') {
      say('brute', 'CHANNEL 8 NEWS', 'BREAKING: PSI LEVELS ACROSS SINGAPORE HAVE HIT CRITICAL. SCIENTISTS CONFIRM THE HAZE HAS... GAINED SENTIENCE. AUTHORITIES ARE CALLING THEM THE HAZED. STAY INDOORS. IF YOU MUST GO OUT, WEAR A MASK.',
        () => say('hero_nm', 'JUN JIE', 'MONSTERS MADE OF HAZE? I NEED TO GET BACK TO MY FAMILY! I BETTER FIND SOMETHING TO FIGHT WITH.', () => { G.hint = { x: 7, y: 134 }; }));   // then the arrow points at the way out
      save.firstMask = true; persist();
    } else if (I.mode === 'wake' && G.koWake) {
      G.koWake = false;
      talk([['N', "Oh, you're awake. You slipped and hit your head. Very unfortunate."], ['J', "...I didn't slip."], ['N', 'You slipped.']]);
    } else if (I.mode === 'wake') {
      const seq = hospitalReturn(true);
      if (seq) talk(seq, physioPing); else say('nurse', 'NURSE MEI', nurseLine(true), physioPing);
    } else {
      G.banner = { t: 3, s: 'GRAB A MASK AND A WEAPON, THEN HEAD OUT.' };
    }
  }
}
function drawIntro() {
  const I = G.intro, black = I.mode === 'wake' ? 0.5 : INTRO.black;
  if (I.mode === 'return') {
    // already up and about: fade in on Jun Jie standing in his ward
    drawHub(false);
    const fade = clamp(1 - I.t / 0.7, 0, 1);
    if (fade > 0) { ctx.fillStyle = `rgba(0,0,0,${fade})`; ctx.fillRect(0, 0, W, H); }
    const a = clamp(Math.min((I.t - 0.3) / 0.4, (RETURN_END - I.t) / 0.4), 0, 1);
    if (I.t > 0.5 && !I.said) { I.said = true; say(P.masked ? 'hero' : 'hero_nm', 'JUN JIE', 'BACK AT IT AGAIN.', () => { I.t = RETURN_END; }); }
    return;
  }
  const lying = I.t < INTRO.getup;
  drawHub(lying);
  if (!lying) drawFx();
  if (I.mode === 'first' && I.t > black + 1.2 && I.t < INTRO.getup + 0.2) {          // the TV flickers on
    if (((G.t * 8) | 0) % 3) { ctx.fillStyle = 'rgba(255,255,255,0.25)'; ctx.fillRect(184, 37, 33, 13); }
  }
  const o = lidOpen((I.t - black) / (INTRO.blink / 1.9));
  const lid = Math.round((1 - o) * (H / 2 + 2));
  ctx.fillStyle = '#000'; ctx.fillRect(0, 0, W, lid); ctx.fillRect(0, H - lid, W, lid);
  if (o < 1) { ctx.fillStyle = `rgba(0,0,0,${0.55 * (1 - o)})`; ctx.fillRect(0, 0, W, H); }
  const tx = I.t - (black + 1.3);
  // once the blinking is done and his eyes are open, he speaks from the bed; closing the line gets him up
  if (I.t >= black + BLINK[BLINK.length - 1][0] && I.t < INTRO.getup && !I.said) { I.said = true; say('hero_nm', 'JUN JIE', G.koWake ? 'OUCH...MY HEAD HURTS...' : I.mode === 'wake' ? 'NOT AGAIN...' : 'WHERE AM I?', () => { I.t = Math.max(I.t, INTRO.getup); }); }
}

/* ---------------- hub ---------------- */
// the first time out: until Mei stops him at the exit he can't take anything; after that the arrow walks him through mask, weapon, exit
const preExit = () => !save.exitTalk && !(save.runCount || 0);
const MEI_GO = 'IF YOU MUST GO... TAKE A MASK, AND GRAB SOMETHING YOU CAN USE AS A WEAPON BEFORE LEAVING.';
const NO_WEAPON_LINE = "WAIT! YOU CAN'T GO OUT THERE WITH NOTHING TO FIGHT WITH. TAKE SOMETHING FROM THE RACK ON THE WALL.";
const WPN = {
  fan: { img: 'w_fan', x: 82, y: 50, short: 'FAN', got: 'GOT A PAIR OF CHINESE FANS! SWIPE WITH ONE, THROW THE OTHER.' },
  vac: { img: 'w_vac', x: 104, y: 50, short: 'VAC', got: 'GOT THE CYCLONE VAC! HOLD TO SUCK. AT FULL CHARGE, SPECIAL FIRES A BEAM.' },
  rotan: { img: 'w_rotan', x: 81, y: 102, short: 'ROTAN', got: 'GOT THE ROTAN! A 3-HIT COMBO, AND THE 3RD HIT CRACKS. SPECIAL: SIX OF THE BEST.' },
};
const HUB_SPOTS = [
  { id: 'disp', x: 30, y: 136, r: 14, label: 'TAKE A MASK', show: () => !P.masked && !preExit() },   // nothing to take until Mei has had her say
  { id: 'fan', x: 82, y: 72, r: 11, label: 'TAKE CHINESE FANS', show: () => G.weapon !== 'fan' && !preExit() },
  { id: 'vac', x: 104, y: 72, r: 11, label: 'TAKE CYCLONE VAC', show: () => G.weapon !== 'vac' && !preExit() },
  { id: 'rotan', x: 81, y: 86, r: 12, label: () => save.rotanOpen ? 'TAKE ROTAN' : (save.cores || 0) >= 3 ? 'UNLOCK ROTAN (3 HAZED CORES)' : 'ROTAN (LOCKED)', show: () => G.weapon !== 'rotan' && G.taking !== 'rotan' && !preExit() },
  { id: 'psi', x: 104, y: 104, r: 18, label: () => save.wins ? 'PSI ' + PSI[G.psi].psi + ' (CHANGE)' : 'PSI KIOSK (LOCKED)', show: () => true },
  { id: 'physio', x: 282, y: 118, r: 16, label: 'TALK', show: () => true },
  { id: 'nurse', x: 41, y: 98, r: 14, label: 'TALK', show: () => true },
  { id: 'tv', x: 174, y: 64, r: 14, label: 'WATCH NEWS', show: () => true },
  { id: 'records', x: 181, y: 170, r: 15, label: 'OPEN DOOR', show: () => ph().open },
  { id: 'exit', x: 10, y: 157, r: 16, label: 'HEAD OUT', show: () => true },
  { id: 'board', x: 226, y: 146, r: 15, label: 'READ QUESTS', show: () => ph().open },
];
function nearestSpot() {
  let best = null, bd = 1e9;
  for (const s of HUB_SPOTS) { if (!s.show()) continue; const d = Math.hypot(P.x - s.x, P.y - s.y); if (d < s.r && d < bd) { bd = d; best = s; } }
  return best;
}
function useSpot(s) {
  if (s.id !== 'records' && s.id !== 'exit') sfx('menu_select');
  if (s.id === 'disp' && hoodOn()) { achGet('no_mask_needed'); say('nurse', 'NURSE MEI', 'OI, YOU TAKE MASK FOR WHAT? THAT ONE IS MORE THAN ENOUGH PROTECTION.'); }
  if (s.id === 'disp') {
    G.fx.push({ k: 'fly', img: 'n95', x: 30, y: 108, tx: () => P.x, ty: () => P.y - 14, t: 0.45, T: 0.45, scale: 1, then: () => {
      P.masked = true; sparkle(P.x, P.y - 14, '#d6e8f3'); G.banner = { t: 2, s: (save.up.n95 ? 'N95 MASK ON. ' : 'SURGICAL MASK ON. ') + maxHalf() / 2 + ' MASKS OF HEALTH.' }; } });
    G.hint = null;
  }
  if (s.id === 'rotan' && !save.rotanOpen) {
    const n = save.cores || 0;
    if (n < 3) {
      if (n && save.coreTalk) return say('hero', 'JUN JIE', "MEI SAID THREE CORES. I'VE GOT " + n + '.');
      if (!save.caseLook) { save.caseLook = true; persist(); return say('hero', 'JUN JIE', "A ROTAN? HAVEN'T SEEN ONE SINCE PRIMARY SCHOOL. LOCKED, THOUGH."); }
      sfx('locked'); G.banner = { t: 2.4, s: 'LOCKED. IT NEEDS 3 HAZED CORES. YOU HAVE ' + n + '.' }; return;
    }
    // Mei unlocks it for him: three cores for the doctors, and the rotan is his to borrow
    save.cores -= 3; save.rotanOpen = true; persist();
    talk([['N', 'Three. Good boy. The doctors will be very happy.'], ['N', 'Here. Use it properly. Only for the Hazed, understand?'], ['J', 'Yes, Cikgu Mei.'], ['N', "Don't 'Cikgu Mei' me."]], () => { sfx('rank_up'); sparkle(81, 102, '#ff9a3c'); G.shake = 0.12; useSpot(s); });
    return;
  }
  if (WPN[s.id]) {
    const prev = G.weapon, W0 = WPN[s.id]; G.weapon = null; G.taking = s.id;
    G.fx.push({ k: 'fly', img: W0.img, x: W0.x, y: W0.y, tx: () => P.x + (P.flip ? -6 : 6), ty: () => P.y - 10, t: 0.45, T: 0.45, scale: 0.75,
      then: () => { G.weapon = s.id; G.taking = null; sparkle(P.x, P.y - 12, '#f2c14e'); P.showOff = 1.0;
        G.banner = { t: 3, s: W0.got }; } });
    if (prev) G.banner = { t: 1.5, s: prev === 'rotan' ? 'ROTAN PUT BACK IN THE CASE.' : WPN[prev].short + ' PUT BACK ON THE RACK.' };
    G.hint = null;
  }
  if (s.id === 'psi' && !save.wins) { say(P.masked ? 'hero' : 'hero_nm', 'JUN JIE', 'LOCKED. MAYBE AFTER I CLEAR BOAT QUAY...'); return; }
  if (s.id === 'psi') { G.psi = (G.psi + 1) % 3; G.psiTalk = G.psi; G.banner = { t: 2, s: 'PSI ' + PSI[G.psi].psi + ': ' + PSI[G.psi].name }; }
  if (s.id === 'physio') G.hint = null;
  if (s.id === 'physio' && G.weapon === 'rotan' && !save.joanRotan) { save.joanRotan = true; persist(); say('physio', 'PHYSIO JOAN', "EH EH EH, ROTAN?! PUT THAT THING DOWN FIRST. MY AH MA USED TO CHASE ME AROUND THE HOUSE WITH ONE.", () => say('physio', 'PHYSIO JOAN', "...OKAY. JUST KEEP IT WHERE I CAN SEE IT. WHAT YOU WANT TO TRAIN TODAY?", () => { G.menu = { sel: 0 }; })); }
  else if (s.id === 'physio') say('physio', 'PHYSIO JOAN', UP(joanLine()), () => { G.menu = { sel: 0 }; });
  if (s.id === 'nurse') nurseTalk();
  if (s.id === 'board') { openBoard(); return; }
  if (s.id === 'records' && ph().open) { enterPharm(); return; }
  if (s.id === 'records') { G.rattle = 0.35; G.hint = null; sfx('locked'); say(P.masked ? 'hero' : 'hero_nm', 'JUN JIE', 'HMM, THIS DOOR IS LOCKED...'); }
  if (s.id === 'tv') { G.newsWatched = true; G.newsN = (G.newsN || 0) + 1; if (G.newsN >= 5 && storyOn()) { G.newsN = 0; achGet('stay_indoors'); say('brute', 'CHANNEL 8 NEWS', 'BREAKING: PSI LEVELS ACROSS SINGAPORE HAVE HIT CRITICAL. SCIENTISTS CONFIRM THE HAZE HAS... GAINED SENTIENCE. AUTHORITIES ARE CALLING THEM THE HAZED. STAY INDOORS. IF YOU MUST GO OUT, WEAR A MASK.', () => say('nurse', 'NURSE MEI', 'BOY, STOP WATCHING THE TV AND GO DO SOMETHING USEFUL.')); return; } }
  else G.newsN = 0;
  if (s.id === 'tv') say('brute', 'CHANNEL 8 NEWS', 'BREAKING: PSI LEVELS ACROSS SINGAPORE HAVE HIT CRITICAL. SCIENTISTS CONFIRM THE HAZE HAS... GAINED SENTIENCE. AUTHORITIES ARE CALLING THEM THE HAZED. STAY INDOORS. IF YOU MUST GO OUT, WEAR A MASK.');
}
function sparkle(x, y, c) {
  for (let i = 0; i < 10; i++) { const a = i / 10 * Math.PI * 2; G.fx.push({ k: 'spark', x, y, vx: Math.cos(a) * 40, vy: Math.sin(a) * 40, t: 0.4, c }); }
  G.fx.push({ k: 'ring', x, y, t: 0.5, c });
}
function updateHub(dt) {
  if (G.menu) return updateMenu();
  if (G.meiTalks && Math.hypot(P.x - 41, P.y - 98) > 30) { G.meiTalks = 0; G.meiAnger = 0; }   // walking away resets her patience
  if (recordsWingOpen() && !save.recBanner && !G.dialog) { save.recBanner = true; persist(); G.banner = { t: 3.5, s: 'THE RECORDS WING IS OPEN.' }; }
  if (G.qboard) return updateBoard();
  if (P.masked) G.noMaskRun = 0;
  if (save.exitTalk && !(save.runCount || 0) && !G.dialog) G.hint = !protectedNow() ? { x: 30, y: 98 } : !G.weapon ? { x: 93, y: 34 } : { x: 7, y: 134 };   // first time out: mask, then weapon, then the exit
  if (!G.dialog && (hit('pause') || pauseClicked())) { G.paused = true; sfx('pause'); return; }
  if (P.showOff > 0) P.showOff -= dt;
  P.dashCd -= dt;
  if (G.bubble) { G.bubble.t -= dt; if (G.bubble.t <= 0) G.bubble = null; }
  if (G.rattle > 0) G.rattle -= dt;
  movePlayer(dt, false);
  const s = nearestSpot();
  if (s && hit('act')) useSpot(s);
  if (!ph().open && !G.dialog) {
    const atDoor = P.y > 172 && P.x > 164 && P.x < 198;
    if (atDoor && !G.lockedSaid) { G.lockedSaid = true; G.rattle = 0.35; sfx('locked'); say(P.masked ? 'hero' : 'hero_nm', 'JUN JIE', "IT'S LOCKED. THE SIGN SAYS: PHARMACY - OPENING SOON."); }
    else if (P.y < 164) G.lockedSaid = false;
  }
  if (s && s.id === 'exit' && hit('act') && !G.taking && !G.dialog) {
    if (preExit()) {   // the very first time he heads for the exit, Mei stops him
      save.exitTalk = true; persist(); P.x = 14;
      talk([['N', "Oi, where are you going? It's dangerous outside!"], ['J', 'I need to go back home.'], ['N', 'I never even discharge you yet...'],
        ['N', "Anyway, Singapore is in a mess. The outside isn't what it used to be anymore."], ['J', 'I have to go out. I need to make sure my family is alright.'],
        ['N', MEI_GO]]);
    }
    else if (!(save.runCount || 0) && (!protectedNow() || !G.weapon)) {   // still getting ready for the first time: she repeats what's missing
      P.x = 14; say('nurse', 'NURSE MEI', !protectedNow() && !G.weapon ? MEI_GO : !G.weapon ? 'IF YOU MUST GO... GRAB SOMETHING YOU CAN USE AS A WEAPON BEFORE LEAVING.' : 'IF YOU MUST GO... TAKE A MASK BEFORE LEAVING.');
    }
    else if (!P.masked && !hoodOn()) { noMaskStop(!G.weapon); P.x = 14; G.hint = { x: 30, y: 98 }; }
    else if (!G.weapon) { say('nurse', 'NURSE MEI', NO_WEAPON_LINE); P.x = 14; G.hint = { x: 93, y: 34 }; }
    else startRun();
  }
}
// Raffles is only the first boss: the records room opens once the real final boss is beaten (not in the jam build)
const recordsOpen = () => (save.finalWins || 0) > 0;
function drawRecordsDoor() {
  // just the door mat in the floor art; the door itself is off screen below
}
// the way out: a red runner leading to a dark doorway on the left wall, like the doors in the run rooms
const EXIT_Y0 = 146, EXIT_Y1 = 168;
function drawExitMat() {
  // a plain door mat like the pharmacy's, by a dark doorway in the wall
  const y0 = EXIT_Y0, h = EXIT_Y1 - EXIT_Y0;
  ctx.fillStyle = '#2a2420'; ctx.fillRect(0, y0 - 3, 3, h + 6);
  ctx.fillStyle = '#0b0a0a'; ctx.fillRect(0, y0 - 2, 2, h + 4);
  ctx.fillStyle = '#5a1e1a'; ctx.fillRect(2, y0, 8, h); ctx.fillStyle = '#a8322b'; ctx.fillRect(2, y0 + 1, 7, h - 2);
  ctx.fillStyle = '#d9b44a'; ctx.fillRect(5, y0 + 1, 1, h - 2);
}
// the potted plants along the corridor: Jun Jie can walk behind the leaves, so they're drawn again over him
let HUB_PLANTS = null;
function drawHubPlants() {
  if (!HUB_PLANTS) {
    const c = document.createElement('canvas'); c.width = W; c.height = 24; const x = c.getContext('2d');
    x.drawImage(IMG.bg_hub, 0, 156, W, 24, 0, 0, W, 24);
    const d = x.getImageData(0, 0, W, 24), p = d.data, FL = ['215,216,201', '208,210,195', '187,190,174'];
    for (let i = 0; i < p.length; i += 4) { const px = (i / 4) % W, k = p[i] + ',' + p[i + 1] + ',' + p[i + 2]; if (FL.includes(k) || !((px >= 44 && px <= 62) || (px >= 132 && px <= 150) || px >= 302)) p[i + 3] = 0; }
    x.putImageData(d, 0, 0); HUB_PLANTS = c;
  }
  ctx.drawImage(HUB_PLANTS, 0, 156);
}
// the two weapons hover in the storeroom: a slow bob, a soft glow behind, a shadow on the floor that shrinks as they rise, and the odd glint
function coreIcon(x, y) {   // a Hazed Core: a smoky little shell with an ember in the middle
  ctx.fillStyle = '#0b0a0a'; ctx.fillRect(x + 1, y, 5, 7); ctx.fillRect(x, y + 1, 7, 5);
  ctx.fillStyle = '#5b606b'; ctx.fillRect(x + 1, y + 1, 5, 5); ctx.fillStyle = '#9aa0a9'; ctx.fillRect(x + 1, y + 1, 2, 1); ctx.fillRect(x + 1, y + 2, 1, 1);
  ctx.fillStyle = '#ff9a3c'; ctx.fillRect(x + 2, y + 2, 3, 3); ctx.fillStyle = '#ffd45a'; ctx.fillRect(x + 3, y + 3, 1, 1);
}
function drawRotanCase() {
  // the locked display case next to the PSI kiosk: a rotan on red velvet behind glass
  const x0 = 72, y0 = 89, w = 19, h = 30, open = !!save.rotanOpen, has = G.weapon !== 'rotan' && G.taking !== 'rotan', ready = !open && (save.cores || 0) >= 3;
  if (ready) { ctx.fillStyle = `rgba(255,154,60,${0.18 + 0.12 * Math.sin(G.t * 4)})`; ctx.fillRect(x0 - 3, y0 - 3, w + 6, h + 6); }
  ctx.fillStyle = 'rgba(40,34,28,0.25)'; ctx.fillRect(x0 + 1, y0 + h + 1, w, 2);
  ctx.fillStyle = '#0b0a0a'; ctx.fillRect(x0 - 1, y0 - 1, w + 2, h + 2);
  ctx.fillStyle = '#7a5232'; ctx.fillRect(x0, y0, w, h); ctx.fillStyle = '#9a6a40'; ctx.fillRect(x0, y0, w, 2);
  ctx.fillStyle = '#5a3a22'; ctx.fillRect(x0, y0 + h - 6, w, 6); ctx.fillStyle = '#0b0a0a'; ctx.fillRect(x0, y0 + h - 7, w, 1);
  ctx.fillStyle = '#6e2a2f'; ctx.fillRect(x0 + 2, y0 + 3, w - 4, h - 11);                       // velvet
  ctx.fillStyle = '#86343a'; ctx.fillRect(x0 + 2, y0 + 3, w - 4, 2);
  if (has) drawCane(x0 + 5, y0 + h - 10, -1.2, 17, 0.15);
  ctx.fillStyle = 'rgba(200,230,235,0.18)'; ctx.fillRect(x0 + 2, y0 + 3, w - 4, h - 11);          // glass
  ctx.fillStyle = 'rgba(255,255,255,0.6)'; for (let i = 0; i < 5; i++) { ctx.fillRect(x0 + 3 + i, y0 + 10 - i, 1, 1); ctx.fillRect(x0 + 9 + i, y0 + 16 - i, 1, 1); }
  if (!open) {
    const lx = x0 + 7, ly = y0 + h - 12;                                                            // padlock
    ctx.strokeStyle = '#0b0a0a'; ctx.lineWidth = 1; ctx.strokeRect(lx + 1.5, ly - 3.5, 3, 4);
    ctx.fillStyle = '#0b0a0a'; ctx.fillRect(lx - 1, ly - 1, 8, 7); ctx.fillStyle = '#f2c14e'; ctx.fillRect(lx, ly, 6, 5); ctx.fillStyle = '#c9932e'; ctx.fillRect(lx, ly + 4, 6, 1); ctx.fillStyle = '#0b0a0a'; ctx.fillRect(lx + 2, ly + 1, 2, 2);
    for (let i = 0; i < 3; i++) {                                                                   // three core slots on the plinth
      const sx = x0 + 3 + i * 5, sy = y0 + h - 4;
      ctx.fillStyle = i < (save.cores || 0) ? '#ff9a3c' : '#2a1c12'; ctx.fillRect(sx, sy, 3, 2);
    }
  } else { ctx.fillStyle = '#f2c14e'; ctx.fillRect(x0 + 5, y0 + h - 4, w - 10, 1); }
}
function drawRackWeapons() {
  for (const [id, img, cx, cy, ph] of [['fan', 'w_fan', 82, 50, 0], ['vac', 'w_vac', 104, 50, 1.7]]) {
    if (G.weapon === id || G.taking === id) continue;
    const b = Math.sin(G.t * 2.2 + ph) * 2, y = Math.round(cy + b);
    ctx.fillStyle = `rgba(40,34,28,${0.22 - b * 0.03})`; ctx.beginPath(); ctx.ellipse(cx, 66, 8 - b * 0.6, 2.2, 0, 0, 7); ctx.fill();
    ctx.fillStyle = 'rgba(255,236,170,0.22)'; ctx.beginPath(); ctx.arc(cx, y, 11, 0, 7); ctx.fill();
    ctx.drawImage(IMG[img], Math.round(cx - 13), y - 13);
    const g = (G.t * 0.9 + ph) % 2.4; if (g < 0.5) { const a = 1 - g / 0.5, gx = cx + 7 * Math.cos(ph * 3), gy = y - 8; ctx.fillStyle = `rgba(255,255,255,${a})`; ctx.fillRect(Math.round(gx), Math.round(gy) - 1, 1, 3); ctx.fillRect(Math.round(gx) - 1, Math.round(gy), 3, 1); }
  }
}
function drawHub(lying) {
  ctx.drawImage(IMG.bg_hub, 0, 0);
  ctx.fillStyle = '#e8e8e5'; ctx.fillRect(223, 107, 11, 6);                       // bedside table (mask lives at the dispenser now)
  drawRackWeapons(); drawRotanCase();
  drawExitMat();
  // red mat outside the RECORDS / pharmacy door, matching the mat inside the pharmacy
  ctx.fillStyle = '#5a1e1a'; ctx.fillRect(168, 172, 28, 8); ctx.fillStyle = '#a8322b'; ctx.fillRect(169, 173, 26, 7);
  ctx.fillStyle = '#d9b44a'; ctx.fillRect(169, 175, 26, 1);
  const ents = [{ y: 78, d: () => { spr('nurse', 41, 78); ctx.drawImage(IMG.bg_hub, 20, 71, 43, 22, 20, 71, 43, 22); } }, { y: 112, d: () => { shadowAt(282, 111, 5); spr('physio', 282, 112); } },
    { y: P.y, d: lying ? drawInBed : drawPlayer }];
  if (ph().open) drawRecordsDoor();
  if (ph().open) { ctx.drawImage(IMG[qDoneOnBoard().length ? 'qboard_done' : 'qboard'], 208, 122); if (boardAlert()) ctx.drawImage(IMG.alert, 240, 116 + Math.round(Math.sin(G.t * 6) * 0.6)); }   // ! sits on the board's top-right corner
  if (!save.wins) {   // kiosk dark with a padlock until the first clear
    ctx.fillStyle = 'rgba(20,18,16,0.55)'; ctx.fillRect(98, 98, 13, 20);
    ctx.fillStyle = '#9aa0a9'; ctx.fillRect(102, 103, 5, 1); ctx.fillRect(102, 103, 1, 3); ctx.fillRect(106, 103, 1, 3);
    ctx.fillStyle = '#d9b44a'; ctx.fillRect(101, 106, 7, 5); ctx.fillStyle = '#5a3a1f'; ctx.fillRect(104, 108, 1, 2);
  }
  ents.sort((a, b) => a.y - b.y).forEach(e => e.d());
  drawHubPlants();
  drawAnger();
  if (ph().open && ((recordsWingOpen() && (!save.recordsVisited || achAnyNew() || achUnclaimed().length)) || adScenePending())) ctx.drawImage(IMG.alert, 178, 156 + Math.round(Math.sin(G.t * 6)));
  if (lying) return;
  if (G.bubble && !G.dialog) bubble(G.bubble.s, P.x, P.y - 27);
  if (G.hint) { const by = Math.sin(G.t * 8) * 2; ctx.fillStyle = '#f2c14e'; ctx.beginPath(); ctx.moveTo(G.hint.x - 4, G.hint.y + by); ctx.lineTo(G.hint.x + 4, G.hint.y + by); ctx.lineTo(G.hint.x, G.hint.y + 5 + by); ctx.fill(); }
  drawFx();
  const s = nearestSpot();
  if (s && !G.dialog && !G.menu && !G.bubble && !G.qboard) {
    const lab = 'E: ' + (typeof s.label === 'function' ? s.label() : s.label);
    const x = clamp(P.x - textW(lab) / 2, 2, W - textW(lab) - 4);
    panel(x - 3, P.y - 36, x + textW(lab) + 3, P.y - 27, '#f2c14e');
    text(lab, x, P.y - 34, '#f2c14e', 1, null);
  }
  // little status strip
  const sw = G.weapon ? Math.max(128, 116 + textW(WPN[G.weapon].short)) : 128;
  panel(3, 3, sw, 14, '#6d6862');
  drawMasks(6, 5, protectedNow() ? maxHalf() : 0, maxHalf());
  airIcon(66, 6); text(airTxt(), 74, 6, '#bdefff');
  if (G.weapon) { ctx.drawImage(IMG[WPN[G.weapon].img], 100, 3, 11, 11); text(WPN[G.weapon].short, 112, 6, '#f2c14e'); }
  let sx = sw + 3;
  if (ph().open) { panel(sx, 3, sx + 29, 14, '#6d6862'); chopIcon(sx + 3, 5); text(String(ph().chops), sx + 13, 6, '#f2c14e'); sx += 32; }
  if (save.cores) { const t = String(save.cores); panel(sx, 3, sx + 15 + textW(t), 14, '#6d6862'); coreIcon(sx + 3, 5); text(t, sx + 12, 6, '#ff9a3c'); }
  drawPauseBtn();
}

/* ---------------- physio menu ---------------- */
function updateMenu() {
  const M = G.menu;
  if (hit('up')) { M.sel = (M.sel + UPGRADES.length - 1) % UPGRADES.length; sfx('menu_move'); M.confirm = null; }
  if (hit('down')) { M.sel = (M.sel + 1) % UPGRADES.length; sfx('menu_move'); M.confirm = null; }
  if (hit('click') && G.leaveBtn && inR(G.leaveBtn, mouse.x, mouse.y)) { G.menu = null; return; }
  if (hit('click')) {
    for (let i = 0; i < UPGRADES.length; i++) { const y = 32 + i * 24; if (mouse.y >= y && mouse.y <= y + 21 && mouse.x > 64) { if (M.sel !== i) M.confirm = null; M.sel = i; pressed.act = true; } }
  }
  if (hit('act')) {
    const u = UPGRADES[M.sel], r = rank(u.id), cost = u.costs[r];
    if (r >= u.costs.length) { M.msg = 'ALREADY MAXED. VERY STRONG ALREADY.'; }
    else if (save.cleanAir < cost) { M.msg = 'NOT ENOUGH CLEAN AIR. NEED ' + cost + '.'; sfx('no_money'); }
    else if (M.confirm !== M.sel) { M.confirm = M.sel; M.msg = 'TRAIN ' + u.name + ' TO RANK ' + (r + 1) + ' FOR ' + cost + ' CLEAN AIR? PRESS ENTER AGAIN TO CONFIRM.'; sfx('menu_select'); }
    else { M.confirm = null; if (!cheat('air') && !cheat('maxup') && !cheat('raid')) save.cleanAir -= cost; save.up[u.id] = r + 1; persist(); M.msg = u.name + ' RANK ' + (r + 1) + '! ' + (r + 1 >= u.costs.length ? 'MAXED.' : 'KEEP IT UP.'); const jl = onTrained(u.id, cost); if (jl) M.msg = UP(jl); sfx('rank_up'); }
  }
  if (hit('reroll') || (hit('click') && G.resetBtn && inR(G.resetBtn, mouse.x, mouse.y))) {
    if (!M.resetAsk) { M.resetAsk = true; M.confirm = null; M.msg = 'RESET ALL YOUR TRAINING? YOU GET ALL YOUR CLEAN AIR BACK. PRESS R AGAIN TO CONFIRM.'; sfx('menu_select'); }
    else { M.resetAsk = false; M.msg = UP(resetTraining()); P.max = maxHalf(); sfx('menu_back'); }
  } else if (hit('act') || hit('up') || hit('down')) M.resetAsk = false;
  if (hit('pause') || hit('dash')) { G.menu = null; sfx('menu_back'); }
}
function drawMenu() {
  const M = G.menu; if (!M) return;
  ctx.fillStyle = 'rgba(11,10,10,0.65)'; ctx.fillRect(0, 0, W, H);
  panel(8, 8, W - 8, H - 8);
  const im = IMG.physio;
  ctx.fillStyle = '#a8906b'; ctx.fillRect(16, 18, 38, 54); ctx.strokeStyle = '#e8a25c'; ctx.strokeRect(16.5, 18.5, 37, 53);
  ctx.drawImage(im, 19, 21, 32, 48);
  text('PHYSIO JOAN', 13, 78, '#e8a25c');
  wrap(M.msg || 'NO PAIN NO GAIN.', 44).forEach((l, i) => text(l, 14, 88 + i * 8, '#bfb4a2'));
  outlined('UPGRADES', 66, 16, '#f2c14e', 2);
  const ca = 'CLEAN AIR ' + airTxt(); airIcon(W - 30 - textW(ca), 16); text(ca, W - 20 - textW(ca), 17, '#bdefff');
  UPGRADES.forEach((u, i) => {
    const y = 32 + i * 24, sel = i === M.sel, r = rank(u.id), max = u.costs.length, full = r >= max, cost = u.costs[r];
    ctx.fillStyle = '#302c25'; ctx.fillRect(64, y, W - 80, 22);
    ctx.strokeStyle = sel ? '#f2c14e' : '#4a443a'; ctx.strokeRect(64.5, y + 0.5, W - 81, 21);
    ctx.drawImage(IMG[u.icon], 66, y - 1, 24, 24);
    text(u.name, 94, y + 4, full ? '#9cc24a' : '#efe6d6');
    // rank pips, Mirror of Night style
    for (let k = 0; k < max; k++) { const px = 94 + textW(u.name) + 5 + k * 6; ctx.fillStyle = '#0b0a0a'; ctx.fillRect(px - 1, y + 3, 6, 7); ctx.fillStyle = k < r ? '#f2c14e' : '#3a3630'; ctx.fillRect(px, y + 4, 4, 5); }
    text(full ? u.desc(r) : (r ? 'NEXT: ' : '') + u.desc(r + 1), 94, y + 13, full ? '#6d6862' : '#bfb4a2');
    if (full) text('MAX', W - 22 - textW('MAX'), y + 8, '#9cc24a');
    else { airIcon(W - 40, y + 8); text(cost, W - 30, y + 8, save.cleanAir >= cost ? '#bdefff' : '#8a6a6a'); }
    if (sel) { ctx.fillStyle = '#f2c14e'; ctx.beginPath(); ctx.moveTo(58, y + 8); ctx.lineTo(62, y + 11); ctx.lineTo(58, y + 14); ctx.fill(); }
  });
  keyChip('ENTER', G.menu.confirm != null ? 'CONFIRM' : 'TRAIN', 66, H - 22, G.menu.confirm != null ? '#9cc24a' : '#f2c14e');
  keyChip('ESC', 'LEAVE', 150, H - 22, '#e8a25c', true);
  G.leaveBtn = { x0: 150, y0: H - 24, x1: 150 + textW('ESC') + 10 + textW('LEAVE') + 6, y1: H - 10 };
  keyChip('R', 'RESET', 222, H - 22, G.menu.resetAsk ? '#d23b33' : '#8a8378'); G.resetBtn = { x0: 222, y0: H - 24, x1: 222 + textW('R') + 10 + textW('RESET') + 6, y1: H - 10 };
}
function keyChip(key, label, x, y, col, pulse) {
  const kw = textW(key) + 6;
  ctx.fillStyle = '#0b0a0a'; ctx.fillRect(x, y + 1, kw, 10);
  ctx.fillStyle = col; ctx.fillRect(x, y - 1, kw, 10);
  ctx.fillStyle = '#ffffff'; ctx.fillRect(x + 1, y - 1, kw - 2, 1);
  text(key, x + 3, y + 1, '#24211c', 1, null);
  const lc = pulse && ((G.t * 2) | 0) % 2 ? '#ffffff' : '#efe6d6';
  text(label, x + kw + 4, y + 1, lc);
  (G.chipsNext = G.chipsNext || []).push({ key, x0: x - 2, y0: y - 3, x1: x + kw + 4 + textW(label) + 2, y1: y + 12 });
}
// every key chip on screen is also a button: clicking it presses that key
const CHIP_KEY = { ENTER: 'act', ESC: 'pause', R: 'reroll', T: 'tryon', E: 'act' };
function chipClicks() {
  const C = G.chips || []; G.chips = G.chipsNext || []; G.chipsNext = [];
  if (!hit('click')) return;
  for (const c of C) if (CHIP_KEY[c.key] && mouse.x >= c.x0 && mouse.x <= c.x1 && mouse.y >= c.y0 && mouse.y <= c.y1) { pressed[CHIP_KEY[c.key]] = true; pressed.click = false; return; }
}
function airIcon(x, y) { ctx.fillStyle = '#5fb0f5'; ctx.fillRect(x, y + 1, 7, 5); ctx.fillRect(x + 1, y, 5, 7); ctx.fillStyle = '#bdefff'; ctx.fillRect(x + 1, y + 1, 5, 5); ctx.fillStyle = '#ffffff'; ctx.fillRect(x + 2, y + 2, 2, 1); }
function drawMasks(x, y, half, max) {
  const n = Math.ceil(max / 2);
  for (let i = 0; i < n; i++) {
    const v = clamp(half - i * 2, 0, 2);
    const sx = v === 2 ? 0 : v === 1 ? 30 : 40;
    ctx.drawImage(IMG.masks, sx, 0, 8, 8, x + i * 10, y, 8, 8);
  }
}

/* ---------------- player ---------------- */
function aimVec() {
  if (touchAim.on && G.scene === 'run') return { x: touchAim.x, y: touchAim.y };
  if (mouse.used && G.scene === 'run') {
    const dx = mouse.x + camX() - P.x, dy = mouse.y + camY() - (P.y - 10), l = Math.hypot(dx, dy) || 1;
    return { x: dx / l, y: dy / l };
  }
  return P.face;
}
function movePlayer(dt, combat) {
  let mx = (held('right') ? 1 : 0) - (held('left') ? 1 : 0), my = (held('down') ? 1 : 0) - (held('up') ? 1 : 0);
  if (stickVec.on) { mx = stickVec.x; my = stickVec.y; }   // phone joystick: full 360 degree movement and aim
  const l = Math.hypot(mx, my);
  P.moving = !!l;
  if (l) {
    mx /= l; my /= l; P.face = { x: mx, y: my }; if (mx) P.flip = mx < 0; P.walkT += dt; P.stepT -= dt;
    if (P.stepT <= 0) {
      P.stepT = P.boons.skates && G.scene === 'run' ? 0.08 : 0.25;
      const skate = P.boons.skates && G.scene === 'run';
      if (!skate) sfx('step'); else if ((P.skateN = (P.skateN || 0) + 1) % 4 === 0) sfx('skate');
      G.fx.push({ k: skate ? 'spark' : 'dust', x: P.x + rand(-3, 3), y: P.y - 1, vx: -mx * 15 + rand(-5, 5), vy: rand(-8, 0), t: 0.3, c: '#e7849a', r: 1.5 });
    }
  } else P.walkT = 0;
  if ((combat || G.scene === 'hub' || G.scene === 'pharm') && !G.qboard && !G.pshop && !G.mirror && !G.book && !G.file && hit('dash') && P.dashCd <= 0) {
    if (combat) { qev('siam'); if (G.boss) RS.fightSiam++; RS.siamN = (RS.siamN || 0) + 1; st().siam++; if (RS.siamN >= 300) achGet('hop_hop_hop'); checkCounts(); }
    else joanWarmup();
    if (!l) { mx = P.face.x; my = P.face.y; }
    P.dashT = 0.16; P.dashCd = dashCdBase(); P.dashDir = { x: mx, y: my }; sfx('dash'); P.dashHits = new Set(); P.six = null; P.lunge = null; P.hop = null; P.hopZ = 0;
    P.dashTouched = new Set();
    if (P.boons.tehtarik) {
      // a ring of hot teh tarik splashes out from where you dash (like a Poseidon dash); level II leaves three splashes along the dash
      const two = lv('tehtarik') >= 2, gap = 34;
      G.teaQ = (two ? [0, 1, 2] : [0]).map(i => ({ t: i * 0.06, x: P.x + mx * gap * i, y: P.y + my * gap * i }));
    }
  }
  let sp = 72 * speedMul();
  if (P.sucking) sp *= 0.6;
  if (P.beam) sp *= 0.5;
  let vx = mx * sp, vy = my * sp;
  if (P.six || P.hop) vx = vy = 0;
  if (P.lunge) { const L = P.lunge; vx = L.dx * L.sp; vy = L.dy * L.sp; L.t -= dt; P.ghosts.push({ x: P.x, y: P.y, n: heroName(), flip: P.flip, t: 0.16, c: '#e9d6a0' }); }
  if (P.dashT > 0) {
    const ds = 230 * (1 + 0.4 * lv('skates')); vx = P.dashDir.x * ds; vy = P.dashDir.y * ds; P.dashT -= dt;
    P.ghosts.push({ x: P.x, y: P.y, n: heroName(), flip: P.flip, t: 0.22, c: P.boons.ckw ? '#ffe9a0' : P.boons.hitrun ? '#e8a25c' : P.boons.skates ? '#e7849a' : trailColor() });
    if (combat && P.boons.hitrun) dashStrike();
    if (combat && (P.boons.hula || P.boons.tehtarik)) dashTouch();
  }
  for (const g of P.ghosts) g.t -= dt;
  P.ghosts = P.ghosts.filter(g => g.t > 0);
  P.swingT = Math.max(0, P.swingT - dt); P.recoil = Math.max(0, P.recoil - dt * 6); P.throwT = Math.max(0, P.throwT - dt);
  const nx = P.x + vx * dt, ny = P.y + vy * dt;
  const stuck = !canStand(G.map, P.x, P.y);          // never trap the player inside furniture
  const ghost = P.lunge && P.lunge.wall, inMap = (x, y) => x > 6 && y > 8 && x < mapW() - 6 && y < mapH() - 2;   // Wall Hacks: the lunge goes through anything
  const okX = ghost ? inMap(nx, P.y) : stuck || canStand(G.map, nx, P.y), okY = ghost ? inMap(P.x, ny) : stuck || canStand(G.map, P.x, ny);
  if (okX) P.x = nx;
  if (okY) P.y = ny;
  if (P.lunge && P.lunge.t <= 0) { const L = P.lunge; if (!L.wall || canStand(G.map, P.x, P.y)) P.lunge = null; else if ((L.extra += dt) > 0.3) { P.x = L.ox; P.y = L.oy; P.lunge = null; } }
  if (!okX && !okY && (vx || vy)) {           // nudge round the curve of an umbrella
    const o = inProp(G.map, nx, ny, 4);
    if (o) { const tx = -(P.y - o.y), ty = P.x - o.x, s = Math.sign(tx * vx + ty * vy) || 1, l = Math.hypot(tx, ty) || 1, sp2 = Math.hypot(vx, vy) * dt;
      const ax = P.x + tx / l * s * sp2, ay = P.y + ty / l * s * sp2; if (canStand(G.map, ax, ay)) { P.x = ax; P.y = ay; } }
  }
  if ((mouse.used || touchAim.on) && combat) { const a = aimVec(); if (Math.abs(a.x) > 0.2) P.flip = a.x < 0; }
}
// the clean-air beam: follows your aim, pierces every Hazed in its path, stops at solid things (unless Wall Hacks)
function beamLines(a) {
  const n = P.boons.triple ? 3 : 1, out = [], base = Math.atan2(a.y, a.x);
  for (let i = 0; i < n; i++) {
    const ang = base + (i - (n - 1) / 2) * 0.22, dx = Math.cos(ang), dy = Math.sin(ang);
    const ox = P.x + (P.flip ? -6 : 6) + dx * 12, oy = P.y - 9 + dy * 12;
    let len = 0, onBox = false; const maxL = 200 * (1 + 0.1 * lv('rubber'));
    while (len < maxL) {
      const x = ox + dx * (len + 4), y = oy + dy * (len + 4);
      if (x < 0 || y < 0 || x > mapW() || y > mapH()) break;
      if (boxes().some(b => boxAt(b, x, y, 1))) { len += 4; onBox = true; break; }
      if (!P.boons.wallhack && (inProp(G.map, x, y + 10) || G.map.block.some(r => inR(r, x, y + 10)))) break;
      len += 4;
    }
    out.push({ ox, oy, dx, dy, len });
    // Chapteh Rebound: the beam reflects once off whatever stopped it, at half strength
    const ex = ox + dx * len, ey = oy + dy * len;
    if (P.boons.chapteh && len < maxL - 4 && !P.boons.wallhack && !onBox) {
      let rdx = dx, rdy = dy; const hx = ex + dx * 4, hy = ey + dy * 4;
      if (!solidAt(ex, hy) && solidAt(hx, ey)) rdx = -dx; else if (!solidAt(hx, ey) && solidAt(ex, hy)) rdy = -dy; else { rdx = -dx; rdy = -dy; }
      let l2 = 0; const rest = maxL - len;
      while (l2 < rest) { const x = ex + rdx * (l2 + 4), y = ey + rdy * (l2 + 4); if (x < 0 || y < 0 || x > mapW() || y > mapH() || solidAt(x, y)) break; l2 += 4; }
      if (l2 > 4) out.push({ ox: ex, oy: ey, dx: rdx, dy: rdy, len: l2, half: true });
    }
  }
  return out;
}
function updateBeam(dt, a, M) {
  const B = P.beam; B.t += dt; B.tick -= dt; B.hum -= dt;
  P.charge = Math.max(0, 3 * (1 - B.t / B.dur)); P.recoil = 0.6;
  const lines = beamLines(a); B.lines = lines;
  if (B.hum <= 0) { B.hum = 0.22; sfx('zap'); }
  if (B.tick <= 0) {
    B.tick = 0.1;
    const share = P.boons.triple ? 0.5 : 1, dmg0 = 4.5 * M * share;   // about 45 damage a second
    for (const L of lines) {
      const dmg = dmg0 * (L.half ? 0.5 : 1); let last = null, lastT = -1;
      const near = (x, y, r) => { const t = clamp((x - L.ox) * L.dx + (y - L.oy) * L.dy, 0, L.len); return Math.hypot(L.ox + L.dx * t - x, L.oy + L.dy * t - y) < r; };
      for (const b of boxes()) if (boxOnPath(L.ox, L.oy, L.ox + L.dx * L.len, L.oy + L.dy * L.len, 3) === b || near(b.x, b.y - 6, 9)) breakBox(b, true, 'special');
      hitTargets((e, kind) => {
        const ty = kind === 'b' ? e.y - 22 : kind === 'f' ? e.y - 10 : e.y - e.T.h / 2, rr = kind === 'b' ? 16 : kind === 'f' ? 8 : e.T.r + 4;
        if (!near(e.x, ty, rr)) return;
        if (kind === 'e') { if (P.beam && P.beam.qh && !P.beam.qh.has(e)) { P.beam.qh.add(e); qev('sphit', { n: P.beam.qh.size }); } if (e.state === 'puff') disperse(e); else { damage(e, dmg, { x: L.dx, y: L.dy }, true); addKuti(e, 'e', 10); const tt = (e.x - L.ox) * L.dx + (e.y - L.oy) * L.dy; if (tt > lastT) { lastT = tt; last = e; } } }
        else if (kind === 'f') { damageFlag(e, dmg); addKuti(e, 'f', 10); } else { damageBoss(dmg, true); addKuti(e, 'b', 10); }
      });
      // Chapteh Rebound: the last Hazed in the beam sends a short half-strength zap to one close by
      if (P.boons.chapteh && last && !L.half) {
        let best = null, bd = 40; const nearLine = o => { const t = clamp((o.x - L.ox) * L.dx + (o.y - L.oy) * L.dy, 0, L.len); return Math.hypot(L.ox + L.dx * t - o.x, L.oy + L.dy * t - o.y) < o.T.r + 4; };
        for (const o of G.enemies) if (o !== last && o.state === 'alive' && o.spawn <= 0 && !nearLine(o)) { const d = Math.hypot(o.x - last.x, o.y - last.y); if (d < bd) { bd = d; best = o; } }
        if (best) { damage(best, dmg * 0.5, { x: best.x - last.x, y: best.y - last.y }, true); G.fx.push({ k: 'laser', x: last.x, y: last.y - last.T.h / 2, tx: best.x, ty: best.y - best.T.h / 2, t: 0.1 }); }
      }
      G.fx.push({ k: 'spark', x: L.ox + L.dx * L.len, y: L.oy + L.dy * L.len, vx: rand(-40, 40), vy: rand(-40, 10), t: 0.25, c: '#bdefff' });
    }
  }
  B.stoneT -= dt;
  if (P.boons.fivestones && B.stoneT <= 0 && lines[0]) { B.stoneT = 0.5; const L = lines[0]; stonesAt({ x: L.ox + L.dx * L.len, y: L.oy + L.dy * L.len }); }
  if (B.t >= B.dur) { P.beam = null; P.charge = 0; P.spCd = 0.7; }
}
function drawBeam() {
  const B = P.beam; if (!B || !B.lines) return;
  const w = 1 + Math.sin(G.t * 60) * 0.5, fade = Math.min(1, (B.dur - B.t) / 0.3, B.t / 0.08);
  ctx.save(); ctx.lineCap = 'round';
  for (const L of B.lines) {
    const ex = L.ox + L.dx * L.len, ey = L.oy + L.dy * L.len;
    const hk = L.half ? 0.55 : 1;
    for (const [lw, col] of [[(9 + w * 2) * hk, `rgba(95,211,245,${0.25 * fade})`], [(5 + w) * hk, `rgba(189,239,255,${0.75 * fade})`], [2, `rgba(255,255,255,${fade})`]]) {
      ctx.strokeStyle = col; ctx.lineWidth = lw; ctx.beginPath(); ctx.moveTo(L.ox, L.oy); ctx.lineTo(ex, ey); ctx.stroke();
    }
    ctx.fillStyle = `rgba(255,255,255,${fade})`; ctx.beginPath(); ctx.arc(ex, ey, 3 + w, 0, 7); ctx.fill();
    ctx.fillStyle = `rgba(189,239,255,${0.6 * fade})`; ctx.beginPath(); ctx.arc(L.ox, L.oy, 4 + w, 0, 7); ctx.fill();
  }
  ctx.restore();
}
function teaSplash(x, y) {
  const two = lv('tehtarik') >= 2, R = 46;
  G.fx.push({ k: 'teawave', x, y: y - 4, r: R, t: 0.35 }); sfx('tehtarik');
  for (let i = 0; i < 14; i++) { const a = i / 14 * Math.PI * 2; G.fx.push({ k: 'spark', x, y: y - 6, vx: Math.cos(a) * R * 2.4, vy: Math.sin(a) * R * 1.3, t: 0.3, c: i % 2 ? '#c99a6a' : '#a8723f' }); }
  for (const b of boxes()) if (Math.hypot(b.x - x, b.y - y) < R) breakBox(b);
  for (const e of G.enemies) {
    if (e.state !== 'alive' || e.spawn > 0) continue;
    const ex = e.x - x, ey = e.y - y, dd = Math.hypot(ex, ey) || 1; if (dd > R) continue;
    const f = e.type === 'brute' ? 140 : 300;
    e.vx += ex / dd * f; e.vy += ey / dd * f; if (e.type !== 'spitter') e.atk = '';
    if (two) damage(e, 6, { x: ex, y: ey }, true);
  }
}
function updateTea(dt) {
  if (!G.teaQ || !G.teaQ.length) return;
  for (const q of G.teaQ) { q.t -= dt; if (q.t <= 0) { q.done = true; if (G.map && canStand(G.map, q.x, q.y)) teaSplash(q.x, q.y); } }
  G.teaQ = G.teaQ.filter(q => !q.done);
}
// dashing straight through Hazed: the hula hoop and hot teh tarik both hurt whoever you pass through (once per dash)
function dashTouch() {
  const M = dmgMul();
  for (const e of G.enemies) {
    if ((e.state !== 'alive' && e.state !== 'puff') || e.spawn > 0 || P.dashTouched.has(e)) continue;
    if (Math.hypot(e.x - P.x, e.y - P.y) > e.T.r + 9) continue;
    if (e.state === 'puff') { if (P.boons.hula || P.boons.tehtarik) { P.dashTouched.add(e); G.inSiam = true; disperse(e); G.inSiam = false; } continue; }   // Siam damage clears the cloud too
    P.dashTouched.add(e);
    let dmg = 0;
    if (P.boons.hula) dmg += (lv('hula') >= 2 ? 8 : 5) * M;
    if (P.boons.tehtarik) { dmg += (lv('tehtarik') >= 2 ? 6 : 3) * M; for (let i = 0; i < 4; i++) G.fx.push({ k: 'spark', x: e.x, y: e.y - 8, vx: rand(-40, 40), vy: rand(-40, 0), t: 0.25, c: '#c99a6a' }); }
    if (dmg) damage(e, dmg, { x: P.dashDir.x, y: P.dashDir.y }, true);
  }
}
function dashStrike() {
  for (const b of boxes()) if (Math.hypot(b.x - P.x, b.y - P.y) < 14) breakBox(b);
  const two = lv('hitrun') >= 2, M = dmgMul(), dmg = (two ? 16 : 8) * M, d = P.dashDir;
  G.inSiam = true;
  hitTargets((e, kind) => {
    if (P.dashHits.has(e)) return;
    const ey = kind === 'b' ? e.y - 20 : kind === 'f' ? e.y - 8 : e.y - e.T.h / 2;
    const rr = kind === 'b' ? 18 : kind === 'f' ? 8 : e.T.r + 7;
    if (Math.hypot(e.x - P.x, ey - (P.y - 10)) > rr) return;
    if (kind === 'e' && e.state === 'puff' && e.spawn <= 0) { P.dashHits.add(e); disperse(e); return; }   // Siam through a cloud and it's gone
    if (kind === 'e' && (e.state !== 'alive' || e.spawn > 0)) return;
    P.dashHits.add(e); G.hitstop = 0.05;
    if (kind === 'e') { damage(e, dmg, two ? { x: d.x * 3, y: d.y * 3 } : { x: -d.y, y: d.x }); if (two) { e.vx += d.x * 120; e.vy += d.y * 120; } }
    else if (kind === 'f') damageFlag(e, dmg); else damageBoss(dmg);
    G.fx.push({ k: 'slash', x: e.x, y: ey, a: Math.atan2(d.y, d.x), t: 0.18 });
    if (kind === 'e') { st().siamHits++; }
  });
  G.inSiam = false; checkCounts();
}
function heroName() {
  const bald = P.boons.bald && G.scene === 'run' && !cheat('raid');
  let frame = 0;
  if (P.moving && P.dashT <= 0) { const st = ((P.walkT * 8) | 0) % 4; if (st === 1) frame = 1; else if (st === 3) frame = 2; }
  return lookName({ masked: P.masked, bald, frame, n95: P.masked && save.up.n95 });
}
function weaponAngle() {
  if (G.scene === 'run') { const a = aimVec(); return Math.atan2(a.y, a.x); }
  return P.flip ? Math.PI * 0.7 : Math.PI * 0.3;
}
function hula(x, y, back) {
  const big = lv('hula') >= 2, R = big ? 19 : 14, spin = big ? 15 : 9;
  for (let i = 0; i < 56; i++) {
    const ang = i / 56 * Math.PI * 2, sn = Math.sin(ang);
    if ((sn < 0) !== back) continue;
    const c = ['#e7849a', '#ffd45a', '#5fd3f5'][(((ang + G.t * spin) / (Math.PI / 4)) | 0) % 3];
    ctx.fillStyle = c; ctx.fillRect(Math.round(x + Math.cos(ang) * R), Math.round(y - 9 + sn * (big ? 5 : 4)), 2, big ? 2 : 1);
  }
}
function drawHeadlamp(x, y) {
  // a strap round his head with a little LED in front that glows
  const X = c => P.flip ? Math.round(x) + 7 - c : Math.round(x) - 8 + c, Y = Math.round(y) - 24;
  ctx.fillStyle = '#2c2c30'; for (let c = 3; c <= 13; c++) ctx.fillRect(X(c), Y + 5, 1, 1);
  const lx = X(9), ly = Y + 4, pulse = 0.35 + 0.15 * Math.sin(G.t * 5);
  ctx.fillStyle = `rgba(255,243,196,${pulse})`; ctx.beginPath(); ctx.arc(lx + 0.5, ly + 1, 5, 0, 7); ctx.fill();
  ctx.fillStyle = '#3a3f48'; ctx.fillRect(lx - 1, ly, 3, 3);
  ctx.fillStyle = '#fff3c4'; ctx.fillRect(lx - 1, ly + 1, 3, 1); ctx.fillStyle = '#ffffff'; ctx.fillRect(lx, ly + 1, 1, 1);
}
function drawPacifier(x, y) {
  // baby mode: a dummy plugged over the mask
  const X = c => P.flip ? Math.round(x) + 7 - c : Math.round(x) - 8 + c, Y = Math.round(y) - 24;
  ctx.fillStyle = '#f7a8c4'; for (let c = 7; c <= 10; c++) ctx.fillRect(X(c), Y + 11, 1, 2);
  ctx.fillStyle = '#d8789c'; ctx.fillRect(X(7), Y + 12, 1, 1); ctx.fillRect(X(10), Y + 12, 1, 1);
  ctx.fillStyle = '#7fc8f0'; ctx.fillRect(X(8), Y + 11, 2, 2); ctx.fillRect(X(8), Y + 13, 2, 1);
  ctx.fillStyle = '#ffffff'; ctx.fillRect(X(8), Y + 11, 1, 1);
}
function drawShades(x, y) {
  // green hacker shades from Sim Lim: you can see (and shoot) through anything
  const X = c => P.flip ? Math.round(x) + 7 - c : Math.round(x) - 8 + c, Y = Math.round(y) - 24;
  ctx.fillStyle = '#0b0a0a'; for (let c = 4; c <= 13; c++) ctx.fillRect(X(c), Y + 7, 1, 1);
  ctx.fillStyle = '#1f8a4a'; for (const c of [4, 5, 6, 7, 10, 11, 12, 13]) ctx.fillRect(X(c), Y + 8, 1, 2);
  ctx.fillStyle = ((G.t * 3) | 0) % 3 ? '#5fff8a' : '#b8ffcc'; ctx.fillRect(X(5), Y + 8, 1, 1); ctx.fillRect(X(11), Y + 8, 1, 1);
}
function drawBandage(x, y) {
  // head bandage wrapped round the forehead: got MC, cannot be touched
  const X = c => P.flip ? Math.round(x) + 7 - c : Math.round(x) - 8 + c, Y = Math.round(y) - 24;
  for (let c = 3; c <= 12; c++) { ctx.fillStyle = '#f4f3ee'; ctx.fillRect(X(c), Y + 5, 1, 1); ctx.fillStyle = c % 3 ? '#f4f3ee' : '#c9ccd1'; ctx.fillRect(X(c), Y + 6, 1, 1); }
  ctx.fillStyle = '#d23b33'; ctx.fillRect(X(9), Y + 5, 1, 2); ctx.fillRect(X(8), Y + 5, 1, 1);
  const flap = ((G.t * (P.moving ? 12 : 4)) | 0) % 2;
  ctx.fillStyle = '#f4f3ee'; ctx.fillRect(X(2), Y + 6, 1, 1); ctx.fillStyle = '#c9ccd1'; ctx.fillRect(X(1), Y + 6 + flap, 1, 1); ctx.fillRect(X(0), Y + 7 + flap, 1, 1);
}
function drawSkates(x, y, frame) {
  for (const [fx, lift] of [[x - 4, frame === 1 ? 2 : 0], [x + 4, frame === 3 ? 2 : 0]]) {
    ctx.fillStyle = '#f4f3ee'; ctx.fillRect(Math.round(fx - 3), Math.round(y - 3 - lift), 6, 2);
    ctx.fillStyle = '#e7849a'; ctx.fillRect(Math.round(fx - 3), Math.round(y - 1 - lift), 2, 2); ctx.fillRect(Math.round(fx + 1), Math.round(y - 1 - lift), 2, 2);
    ctx.fillStyle = '#d23b33'; ctx.fillRect(Math.round(fx + 3), Math.round(y - 2 - lift), 1, 1);
  }
}
function drawCane(hx, hy, ang, len, bend) {
  // a real rotan: a long, very thin pale rattan cane with a slight flex, a few knots, and a little loop at the butt
  ctx.save(); ctx.translate(hx, hy); ctx.rotate(ang);
  const pts = []; for (let s = -3; s <= len; s++) { const f = Math.max(0, s / len); pts.push([s, bend * f * f * len * 0.22]); }
  const line = (from, to, w, col) => { ctx.strokeStyle = col; ctx.lineWidth = w; ctx.beginPath(); for (let i = from; i <= to; i++) { const [x, y] = pts[i]; i === from ? ctx.moveTo(x, y) : ctx.lineTo(x, y); } ctx.stroke(); };
  const n = pts.length - 1, thin = Math.round(n * 0.62);
  ctx.lineCap = 'round';
  line(0, thin, 2.6, 'rgba(70,48,24,0.9)'); line(thin, n, 2, 'rgba(70,48,24,0.85)');
  line(0, n, 1, '#e9d6a0');
  ctx.fillStyle = '#b8955a'; for (let s = 10; s < len - 3; s += 12) { const [x, y] = pts[s + 3]; ctx.fillRect(Math.round(x), Math.round(y) - 0.5, 1, 1); }
  ctx.strokeStyle = 'rgba(70,48,24,0.9)'; ctx.lineWidth = 1; ctx.beginPath(); ctx.arc(-4, 0, 1.2, 0, 7); ctx.stroke();
  ctx.lineCap = 'butt'; ctx.restore();
}
function drawRotanHeld(x, y) {
  // held like a sword, in his own fist: this is drawn before the sprite so his hand closes over it
  const hx = x + (P.flip ? -5.5 : 5.5), hy = y - 7.5, len = Math.min(22, Math.round(rotReach() * 0.55));
  let ang, bend = P.flip ? -0.25 : 0.25;
  const S = P.rs;
  if (P.six && P.lunge) { ang = P.six.ang; bend = 0; }                      // the thrust of the lunge
  else if (S) {
    const k = Math.min(1, S.t / S.dur), sweep = S.n === 3 ? 2.2 : 1.6, dirn = S.n === 2 ? -1 : 1, a0 = S.a - dirn * sweep / 2;
    ang = a0 + dirn * sweep * k; bend = -dirn * 0.7 * (1 - k * 0.6);         // the cane whips: the tip trails behind the swing
    ctx.strokeStyle = S.big ? 'rgba(242,193,78,0.6)' : 'rgba(255,248,225,0.5)'; ctx.lineWidth = S.big ? 3 : 2;
    ctx.beginPath(); ctx.arc(hx, hy, rotReach() + (S.n === 3 && !P.six ? 6 : 0), Math.min(a0, ang), Math.max(a0, ang)); ctx.stroke(); ctx.lineWidth = 1;
  } else ang = P.flip ? -Math.PI + 1.05 : -1.05;                               // sword guard: tip up and forward
  drawCane(hx, hy, ang, len, bend);
}
function drawWeapon(x, y) {
  if (!G.weapon) return;
  const hx = x + (P.flip ? -6 : 6), hy = y - 9;
  if (P.showOff > 0) {                                                    // just picked it up: hold it high
    const im = IMG[WPN[G.weapon].img];
    ctx.drawImage(im, Math.round(x - 8), Math.round(y - 42 + Math.sin(G.t * 10)), 16, 16);
    return;
  }
  if (G.weapon === 'rotan') { drawRotanHeld(x, y); return; }
  if (G.weapon === 'fan') {
    if (!G.shots.some(s => s.k === 'boomer') && P.throwT <= 0) {
      // the second fan rests in the other hand
      const ox = x + (P.flip ? 6 : -6);
      ctx.save(); ctx.translate(Math.round(ox), Math.round(hy + 1 + (P.moving ? Math.sin(P.walkT * 16 + 1.5) : 0)));
      ctx.rotate((P.flip ? 0.5 : -0.5) - Math.sin(G.t * 3) * 0.08); ctx.scale(-1, 1);
      ctx.drawImage(IMG.w_fan, -5, -7, 10, 10); ctx.restore();
    }
    ctx.save();
    if (P.swingT > 0) {
      const k = 1 - P.swingT / 0.16, ang = P.swingA - 1.3 + 2.6 * k;
      ctx.translate(Math.round(x + Math.cos(ang) * 10), Math.round(y - 10 + Math.sin(ang) * 8)); ctx.rotate(ang + Math.PI / 2);
      ctx.drawImage(IMG.w_fan, -8, -8, 16, 16);
    } else {
      ctx.translate(Math.round(hx), Math.round(hy + (P.moving ? Math.sin(P.walkT * 16) : 0)));
      ctx.rotate((P.flip ? -0.5 : 0.5) + Math.sin(G.t * 3) * 0.08);
      ctx.drawImage(IMG.w_fan, -5, -7, 10, 10);
    }
    ctx.restore();
  } else {
    const th = weaponAngle();
    const back = P.recoil * 3, jit = P.sucking ? rand(-0.6, 0.6) : 0;
    ctx.save();
    ctx.translate(Math.round(hx - Math.cos(th) * back + jit), Math.round(hy - Math.sin(th) * back + jit));
    ctx.rotate(th - Math.PI * 0.75);
    ctx.drawImage(IMG.w_vac, -14, -2, 18, 16);
    ctx.restore();
    const nx = hx + Math.cos(th) * 15, ny = hy + Math.sin(th) * 15;
    if (P.sucking) { const sw = [0.65, 0.8, 1.0][lv('widesweep')], rr = 40 * (1 + 0.1 * lv('longarm')); ctx.strokeStyle = 'rgba(214,241,245,0.35)'; ctx.beginPath(); ctx.moveTo(nx, ny); ctx.arc(nx, ny, rr, th - sw, th + sw); ctx.closePath(); ctx.stroke(); }
    if (P.charge >= 1) { ctx.fillStyle = `rgba(95,211,245,${0.3 + 0.2 * Math.floor(P.charge) + 0.15 * Math.sin(G.t * 12)})`; ctx.beginPath(); ctx.arc(nx, ny, 2 + Math.floor(P.charge), 0, 7); ctx.fill(); }
  }
}
function drawAim() {
  // small arrow on the ground showing where attacks and throws will go
  const a = aimVec(), cx = P.x, cy = P.y - 6, r = (touchAim.on ? 32 : 20) + Math.sin(G.t * 6);
  const tx = cx + a.x * r, ty = cy + a.y * r * 0.85;
  const px = -a.y, py = a.x;
  const pts = [];
  for (let i = 0; i < (touchAim.on ? 7 : 3); i++) { const d = 9 + i * 3; pts.push([cx + a.x * d, cy + a.y * d * 0.85]); }
  for (let i = 0; i <= 4; i++) {
    const bx = tx - a.x * i, by = ty - a.y * i * 0.85, w = Math.min(i, 3);
    for (let s = -w; s <= w; s++) pts.push([bx + px * s, by + py * s]);
  }
  ctx.globalAlpha = 0.6; ctx.fillStyle = '#2a2420';
  for (const [x, y] of pts) ctx.fillRect(Math.round(x) - 1, Math.round(y) - 1, 3, 3);
  ctx.globalAlpha = 0.95; ctx.fillStyle = '#ffd25e';
  for (const [x, y] of pts) ctx.fillRect(Math.round(x), Math.round(y), 1, 1);
  ctx.globalAlpha = 1;
  if (mouse.used) {
    ctx.fillStyle = '#ffe9a8'; const mx = Math.round(mouse.x) + camX(), my = Math.round(mouse.y) + camY();
    ctx.fillRect(mx - 3, my, 2, 1); ctx.fillRect(mx + 2, my, 2, 1); ctx.fillRect(mx, my - 3, 1, 2); ctx.fillRect(mx, my + 2, 1, 2);
  }
}
function drawPlayer() {
  const inRun = G.scene === 'run';
  for (const g of P.ghosts) {
    ctx.globalAlpha = g.t * 2.2;
    const im = tinted(IMG[g.n] ? g.n : 'hero', g.c || '#ffffff');
    ctx.save(); if (g.flip) { ctx.translate(Math.round(g.x + 8), Math.round(g.y - im.height)); ctx.scale(-1, 1); ctx.drawImage(im, 0, 0); }
    else ctx.drawImage(im, Math.round(g.x - 8), Math.round(g.y - im.height));
    ctx.restore(); ctx.globalAlpha = 1;
  }
  const blink = P.inv > 0 && ((G.t * 20) | 0) % 2 === 0;
  let x = P.x, y = P.y - (P.hopZ || 0);
  if (P.swingT > 0) { x += Math.cos(P.swingA) * 2; y += Math.sin(P.swingA); }
  const bob = P.dashT > 0 ? 0 : P.moving ? (((P.walkT * 8) | 0) % 2 ? -1 : 0) : (Math.sin(G.t * 2.5) > 0.7 ? -1 : 0);
  shadowAt(P.x, P.y - 1, 6);
  if (inRun && G.weapon) drawAim();
  if (P.boons.hula && inRun) hula(x, y + bob, true);
  const th = weaponAngle(), wBehind = G.weapon === 'rotan' || Math.sin(th) < -0.35;
  if (wBehind) drawWeapon(x, y + bob);
  if (!blink) {
    const n = heroName();
    spr(n, x, y + bob, { flip: P.flip, flash: P.hurtFlash > 0, gold: cheat('raid') });
    if (P.boons.skates && inRun && !cheat('raid')) drawSkates(x, y + bob, P.moving ? ((P.walkT * 8) | 0) % 4 : 0);
    const LK = look(), capOn = !!(LK.hat || LK.head);
    if (P.boons.ckw && inRun && !cheat('raid') && !capOn) drawBandage(x, y + bob);
    if (P.boons.innerpeace && inRun && P.peaceReady) { ctx.strokeStyle = `rgba(244,241,234,${0.5 + 0.3 * Math.sin(G.t * 8)})`; ctx.beginPath(); ctx.ellipse(x, y - 1, 10, 4, 0, 0, 7); ctx.stroke(); }
    if (P.mc && inRun) { ctx.strokeStyle = `rgba(95,176,245,${0.35 + 0.15 * Math.sin(G.t * 4)})`; ctx.beginPath(); ctx.ellipse(x, y + bob - 12, 13, 15, 0, 0, 7); ctx.stroke(); }
    if (P.shield > 0 && inRun) { const a = 0.25 + 0.15 * Math.sin(G.t * 10), blinkOut = P.shield < 0.8 && ((G.t * 10) | 0) % 2;
      if (!blinkOut) { ctx.strokeStyle = `rgba(255,233,160,${a + 0.4})`; ctx.fillStyle = `rgba(255,233,160,${a * 0.5})`; ctx.beginPath(); ctx.ellipse(x, y + bob - 12, 14, 16, 0, 0, 7); ctx.fill(); ctx.stroke(); } }
    if (P.boons.wallhack && inRun && !cheat('raid') && !LK.head) drawShades(x, y + bob);
    if (P.boons.headlamp && inRun && !cheat('raid') && !capOn) drawHeadlamp(x, y + bob);
    if (cheat('baby') && !LK.head && !(P.boons.whistle && P.whistleT > 0 && inRun && !LK.lanyard)) drawPacifier(x, y + bob);
    if (P.boons.whistle && inRun && !cheat('raid') && !LK.lanyard) {   // red lanyard and a silver whistle; it pops up to his mouth when blown
      const X = c => P.flip ? Math.round(x) + 7 - c : Math.round(x) - 8 + c, Y = Math.round(y + bob) - 24;
      ctx.fillStyle = '#d23b33'; ctx.fillRect(X(6), Y + 13, 1, 2); ctx.fillRect(X(10), Y + 13, 1, 2); ctx.fillRect(X(7), Y + 15, 3, 1);
      ctx.fillStyle = '#e9eef2'; if (P.whistleT > 0) ctx.fillRect(X(9), Y + 11, 3, 1); else ctx.fillRect(X(8), Y + 16, 2, 2);
    }
    if (false) {  // power bank clipped to his belt, LED blinking
      const X = c => P.flip ? Math.round(x) + 7 - c : Math.round(x) - 8 + c, Y = Math.round(y + bob) - 24;
      ctx.fillStyle = '#2c2c30'; ctx.fillRect(Math.min(X(12), X(14)), Y + 17, 3, 4);
      ctx.fillStyle = ((G.t * 2) | 0) % 2 ? '#9cc24a' : '#3a3f48'; ctx.fillRect(X(13), Y + 18, 1, 1);
    }
    if (P.boons.bald && inRun && !cheat('raid') && !capOn) {
      // the shine: an occasional glint at rest, a bright flashing streak while the damage bonus is on
      const on = baldActive(), hx = Math.round(x + (P.flip ? -2 : 1)), hy = Math.round(y + bob - 22);
      if (on || ((G.t * 2) | 0) % 5 === 0) { ctx.fillStyle = '#ffffff'; ctx.fillRect(hx, hy, 1, 1); ctx.fillRect(hx - 1, hy + 1, 3, 1); }
      if (on && ((G.t * 8) | 0) % 2) { ctx.fillStyle = '#fff3c4'; ctx.fillRect(hx - 2, hy - 1, 1, 1); ctx.fillRect(hx + 2, hy - 2, 1, 1); ctx.fillRect(hx, hy - 3, 1, 1); }
    }
  }
  if (!wBehind) drawWeapon(x, y + bob);
  if (P.boons.hula && inRun) hula(x, y + bob, false);

  if (P.boons.bot && inRun) {
    const bx = P.botX, by = P.botY + Math.sin(G.t * 4) * 2;
    shadowAt(bx, P.botY + 12, 4);
    ctx.drawImage(IMG.i_bot, Math.round(bx - 6), Math.round(by - 6), 12, 12);
    ctx.fillStyle = ((G.t * 4) | 0) % 2 ? '#d23b33' : '#ff7b6b'; ctx.fillRect(Math.round(bx), Math.round(by - 8), 1, 2);
  }
}

/* ---------------- run / rooms ---------------- */
function startRun() {
  if (!save.wins) G.psi = 0;
  G.scene = 'run'; G.room = 0; G.coins = 0; P.kopi = false; G.stats = { rooms: 0, kills: 0, air: 0, coins: 0 }; G.rerolls = rank('opinion'); G.revives = rank('wind'); G.reviveSrc = Array(rank('wind')).fill('wind'); G.revive = null;
  G.hazeIn = 0; G.curryN = 0; P.max = maxHalf(); P.half = P.max; P.boons = {}; P.charge = 0; P.beam = null; P.stillT = 0; P.peaceReady = false; P.swings = 0; P.six = null; P.lunge = null; P.hop = null; P.hopZ = 0; P.rs = null; P.rCombo = 0;
  G.raidBackup = {}; if (cheat('raid')) raidBoons();
  G.roomSeq = roomOrder(); G.minorSeen = {}; G.pairOther = null; G.pairFirst = false;
  if (save.runCount == null) save.runCount = (save.deaths || 0) + (save.wins || 0);
  save.runCount++; persist(); G.sawHazed = false; G.sawBrute = false;
  qRunStart();
  enterGate();
  if (hoodOn() && !P.masked) G.banner = { t: 2.6, s: 'HAZMAT HOOD ON. ' + maxHalf() / 2 + ' MASKS OF HEALTH.' };
}
// the hospital driveway: a quiet in-between area with the first power-up, before the door into Boat Quay
function raidBoons() {
  for (const k in BOONS) if (!BOONS[k].instant) P.boons[k] = BOONS[k].max || 1;
  P.botX = P.x; P.botY = P.y - 16; P.max = runMax(); P.half = P.max;
}
function enterGate() {
  G.gate = true; G.room = 0; G.shop = null; G.enemies = []; G.shots = []; G.fx = []; G.pickups = []; G.flags = []; G.boss = null; G.waves = []; G.cut = null;
  G.cleared = true; G.rewardTaken = false; G.doorOpen = false; G.timeInRoom = 0; G.spawnT = 0; G.wave = 0;
  G.map = makeRoom('gate'); P.x = G.map.spawn[0]; P.y = G.map.spawn[1]; P.inv = 0; P.face = { x: 0, y: 1 }; P.flip = false;   // nothing can hurt him on the driveway, so no invincibility blink
  const [rx, ry] = G.map.reward;
  G.tut = null;
  if (!save.tutDone) tutStart();   // first run: the power-up only appears once the drill is done
  else G.pickups.push({ k: 'reward', r: 'boon', x: rx, y: ry, t: 0, pat: pickPatron() });
  G.banner = null; G.banner = { t: 2.2, s: G.map.name };
  updateCam(0, true);
  say(P.masked ? 'hero' : 'hero_nm', 'JUN JIE', junJieLine(), G.tut ? () => say('nurse', 'NURSE MEI', "OI BOY, CAN HEAR ME? BEFORE YOU RUN OFF, I SET UP SOME CARDBOARD HAZED FOR YOU TO PRACTISE ON. DON'T LAUGH, THEY TOOK ME VERY LONG.") : null);
}
// what Jun Jie says as he steps into Boat Quay




function junJieLine() {
  const n = save.runCount || 1;
  if (G.weapon === 'rotan' && !save.rotanRun) { save.rotanRun = true; persist(); return 'OKAY, HAZED. HANDS OUT.'; }   // the first run with the rotan
  if (n <= 1) return JJ_FIRST;
  if (n === 2) return JJ_SECOND;
  if (n === 3) return JJ_THIRD;
  const pool = [...JJ_LINES, JJ_THIRD].filter(l => l !== save.lastJJ);
  const l = pick(pool); save.lastJJ = l; persist(); return l;
}
function nextRoom() {
  G.banner = null;   // banners from the last place don't follow him through the door
  if (G.map && G.map.props && boxes().some(b => !b.dummy)) RS.boxMiss = true;
  sfx('door_open'); G.gate = false; G.tut = null;
  for (const p of G.pickups || []) {
    if (p.k === 'coin') { G.coins += p.n; G.stats.coins += p.n; }
    if (p.k === 'air') { save.cleanAir += p.n; G.stats.air += p.n; persist(); }
  }
  G.room++; qOnRoomEnter(G.room); P.mc = !!P.boons.ckw; P.shield = 0; P.beam = null; G.teaQ = []; G.shop = null; G.mealDropped = 0; G.enemies = []; G.shots = []; G.fx = []; G.pickups = []; G.flags = []; G.boss = null; G.waves = []; G.cut = null;
  G.cleared = false; G.rewardTaken = false; G.doorOpen = false; G.timeInRoom = 0;
  P.x = 20; P.y = 104; P.inv = 1; P.face = { x: 1, y: 0 }; P.flip = false; G.wave = 0;
  if (G.room <= FIGHT_ROOMS) {
    G.map = makeRoom((G.roomSeq || ['prom'])[G.room - 1]); G.spawnT = 0.9;
    P.x = G.map.spawn[0]; P.y = G.map.spawn[1];
    if (G.map.door.side === 'top') P.face = { x: 0, y: -1 };
    G.banner = { t: 2, s: 'BOAT QUAY ' + G.room + ' / ' + FIGHT_ROOMS + '  -  ' + G.map.name };
    updateCam(0, true);
  } else if (G.room === SHOP_ROOM) {
    G.cam = { x: 0, y: 0 };
    G.map = MAPS.shop; G.spawnT = 0; G.cleared = true; G.doorOpen = true; G.rewardTaken = true; P.y = 128;
    G.shop = { items: SHOP_ITEMS.map((it, i) => ({ ...it, price: Math.round(it.price * [1, 1.3, 1.6][G.psi] / 5) * 5, x: 96 + i * 32, y: 114, sold: false })), talk: { s: G.psi ? 'HAZE SO BAD, PRICE ALSO MUST GO UP. SORRY AH.' : pick(MAMA_LINES.hello.slice(0, 1).concat(MAMA_LINES.hello.slice(2))), t: 3.5 }, tin: 0, near: null };
    G.banner = { t: 1.6, s: 'MAMAK SHOP' };
  } else {
    G.cam = { x: 0, y: 0 };
    G.map = MAPS.arena; P.x = 160; P.y = 168; P.face = { x: 0, y: -1 }; G.spawnT = 0;
    G.boss = { x: 160, y: 112, hp: 0, max: 0, state: 'statue', t: 0, phase: 1, cd: 2, flash: 0, n: 0, dir: { x: 0, y: 1 }, alt: 0, trail: [], jumps: 0 };
  }
}
function spawnPoint(minD, maxD) {
  const M = G.map, rects = M.walk, area = rects.map(r => (r.x1 - r.x0) * (r.y1 - r.y0)), tot = area.reduce((a, b) => a + b, 0);
  for (let tries = 0; tries < 60; tries++) {
    let k = Math.random() * tot, i = 0; while (k > area[i] && i < rects.length - 1) k -= area[i++];
    const r = rects[i], x = rand(r.x0 + 8, r.x1 - 8), y = rand(r.y0 + 6, r.y1 - 4), d = Math.hypot(x - P.x, y - P.y);
    if (canStand(M, x, y) && !inProp(M, x, y, 8) && d > minD && (d < maxD || tries > 40)) return [x, y];
  }
  // fallback: the farthest standable spot we tried
  let best = null, bd = -1;
  for (let t = 0; t < 40; t++) { const r = rects[(Math.random() * rects.length) | 0], x = rand(r.x0 + 8, r.x1 - 8), y = rand(r.y0 + 6, r.y1 - 4), d = Math.hypot(x - P.x, y - P.y); if (canStand(M, x, y) && d > bd) { bd = d; best = [x, y]; } }
  return best || [P.x + 80, P.y];
}
function spawnWave() {
  const L = PSI[G.psi];
  sfx('spawn');
  G.wave++;
  // three waves that build up: small, medium, then the full group
  let n = L.count - (G.room === 1 ? 1 : 0) - (WAVES - G.wave);
  const types = [];
  for (let i = 0; i < n; i++) {
    const r = Math.random();
    // the first room is wisps and spitters only; brutes start from the second room
    types.push(G.room <= 1 ? (r < 0.6 ? 'wisp' : 'spitter') : (r < 0.5 ? 'wisp' : r < 0.8 ? 'spitter' : 'brute'));
  }
  if (G.room >= 3 && G.wave === WAVES && !types.includes('brute')) types[0] = 'brute';
  if (G.room >= 4 && G.wave >= 2) types.push('spitter');
  if (G.psi === 2 && G.room >= 2 && G.wave === WAVES) types.push('brute');
  if (cheat('baby')) types.length = Math.min(types.length, 4);   // Baby Mode: never more than 4 Hazed a wave
  for (const t of types) { const [x, y] = spawnPoint(70, 200); addEnemy(t, x, y, 1); }
  if (G.wave > 1) G.banner = { t: 1.2, s: 'WAVE ' + G.wave + ' / ' + WAVES };
}
function addEnemy(type, x, y, hpFrac) {
  const T = ETYPES[type], L = PSI[G.psi];
  const max = Math.round(T.hp * L.hp);
  // never form right on top of Jun Jie: nudge it out to a safe distance first
  const dp = Math.hypot(x - P.x, y - P.y);
  if (G.scene === 'run' && dp < 34) {
    const ux = dp > 0.5 ? (x - P.x) / dp : (Math.random() < 0.5 ? -1 : 1), uy = dp > 0.5 ? (y - P.y) / dp : 0;
    let moved = false;
    for (const rot of [0, 0.8, -0.8, 1.6, -1.6, 2.4, -2.4, Math.PI]) {
      const c = Math.cos(rot), sn = Math.sin(rot), nx = P.x + (ux * c - uy * sn) * 40, ny = P.y + (ux * sn + uy * c) * 40;
      if (canStand(G.map, nx, ny)) { x = nx; y = ny; moved = true; break; }
    }
    if (!moved) { const sp = spawnPoint(40, 200); x = sp[0]; y = sp[1]; }
  }
  G.enemies.push({ type, T, x, y, vx: 0, vy: 0, hp: Math.max(1, Math.round(max * hpFrac)), max, frac: hpFrac, state: 'alive', t: 0, cd: rand(1, 2.2), flash: 0, spawn: 0.5, wob: rand(0, 6) });
  G.fx.push({ k: 'ring', x, y: y - 6, t: 0.5 });
}
function hurtPlayer(n, src) {
  if (P.inv > 0 || (P.dashT > 0 && P.boons.hitrun) || cheat('inv') || G.scene !== 'run' || G.cut) return;
  if (P.boons.likewater && Math.random() < 0.1 * lv('likewater')) {
    // Like Water: slip aside
    P.inv = 0.5; G.fx.push({ k: 'pop', x: P.x, y: P.y - 34, t: 0.7, s: 'SIAM!', c: '#8fd3f5' }); sfx('dash');
    for (let i = 1; i <= 3; i++) P.ghosts.push({ x: P.x - P.face.x * i * 4, y: P.y - P.face.y * i * 2, n: heroName(), flip: P.flip, t: 0.3, c: '#8fd3f5' });
    return;
  }
  if (P.mc) {
    // Chao Keng Warrior: the MC shield takes this hit
    P.mc = false; P.inv = 0.8; G.shake = 0.15; sfx('immune');
    G.fx.push({ k: 'pop', x: P.x, y: P.y - 36, t: 0.9, s: 'MC!', c: '#5fb0f5' }); G.fx.push({ k: 'ring', x: P.x, y: P.y - 12, t: 0.4, c: '#5fb0f5' });
    return;
  }
  if (cheat('baby')) { G.babyDebt = (G.babyDebt || 0) + n / 2; n = Math.floor(G.babyDebt); G.babyDebt -= n; }
  P.half -= n; P.inv = 1.0; P.hurtFlash = 0.12; G.shake = 0.2; sfx('hurt'); qOnHurt();
  G.fx.push({ k: 'pop', x: P.x, y: P.y - 28, t: 0.7, s: n ? '-' + (n / 2) : 'OOF', c: '#d8322a' });
  if (P.boons.gassy) {
    sfx('fart'); G.fx.push({ k: 'pop', x: P.x, y: P.y - 38, t: 0.7, s: 'PFFT!', c: '#cfc37a' }); G.fx.push({ k: 'ring', x: P.x, y: P.y - 6, t: 0.5, c: '#cfc37a' });
    for (let i = 0; i < 8; i++) G.fx.push({ k: 'gas', x: P.x + rand(-6, 6), y: P.y - rand(0, 8), t: 0.8, vx: rand(-30, 30), vy: rand(-20, 10), r: rand(3, 6) });
    const gr = lv('gassy') >= 2 ? 52 : 36, gd = lv('gassy') >= 2 ? 36 : 18;
    if (lv('gassy') >= 2) G.fx.push({ k: 'ring', x: P.x, y: P.y - 6, t: 0.7, c: '#cfc37a' });
    for (const e of G.enemies) if (Math.hypot(e.x - P.x, e.y - P.y) < gr) damage(e, gd, { x: e.x - P.x, y: e.y - P.y });
    for (const b of boxes()) if (Math.hypot(b.x - P.x, b.y - P.y) < gr) breakBox(b);
    if (bossHittable(G.boss) && Math.hypot(G.boss.x - P.x, G.boss.y - P.y) < gr + 4) damageBoss(gd);
  }
  if (P.half <= 0) {
    if (G.revives > 0) { RS.revived = true; G.revives--; const src = (G.reviveSrc || []).pop() || 'wind'; P.half = 0; P.inv = 99; P.dashT = 0; G.revive = { t: 0, src, done: false }; G.banner = null; G.shake = 0.25; sfx('hurt'); vacHum(false); }
    else die();
  }
}
function die() {
  G.scene = 'dead'; G.deadT = 0; save.deaths++; persist(); qRunEnd(false);
  // where he is on screen when he goes down: the camera drifts from here to the centre while zooming in
  G.deathFrom = { x: P.x - camX(), y: P.y - 12 - camY() }; G.deathDir = P.flip ? -1 : 1; G.deathPuffs = []; sfx('death'); vacHum(false);
  G.shake = 0; G.banner = null; P.ghosts = [];
}
const DEATH = { cough: 0.25, fall: 1.15, down: 1.5, title: 1.75, stats: 3.3 };
const ease = k => 1 - Math.pow(1 - clamp(k, 0, 1), 3);
function deathView() {
  // zoom 1 -> 2.2 and slide him to the middle of the screen
  const k = ease((G.deadT - 0.1) / 1.6), z = 1 + 1.2 * k;
  const sx = G.deathFrom.x + (W / 2 - G.deathFrom.x) * k, sy = G.deathFrom.y + (H / 2 + 6 - G.deathFrom.y) * k;
  return { z, sx, sy };
}
function drawDying() {
  // Jun Jie chokes on the haze, coughs, his mask flies off and he topples onto the floor
  const t = G.deadT, x = P.x, y = P.y, dir = G.deathDir;
  shadowAt(x, y - 1, t > DEATH.down ? 11 : 6, t > DEATH.down ? 3 : 2);
  const masked = t < DEATH.fall, name = lookName({ masked });
  if (t < DEATH.fall) {
    const shake = t > DEATH.cough ? (((t * 22) | 0) % 2 ? 1 : -1) : 0, hunch = t > DEATH.cough ? 1 + (((t * 4) | 0) % 2) : 0;
    spr(name, x + shake, y + hunch, { flip: dir < 0, flash: t < 0.12 });
  } else {
    const k = ease((t - DEATH.fall) / (DEATH.down - DEATH.fall)), a = k * Math.PI / 2 * dir;
    const im = IMG[name];
    ctx.save(); ctx.translate(Math.round(x), Math.round(y)); ctx.rotate(a);
    if (dir < 0) ctx.scale(-1, 1);
    ctx.drawImage(im, -8, -im.height); ctx.restore();
  }
  // the mask pops off and lands beside him
  if (t >= DEATH.fall) {
    const k = clamp((t - DEATH.fall) / 0.5, 0, 1), mx = x - dir * (6 + 16 * k), my = y - 20 + Math.min(1, k * 1.6) * 18 - Math.sin(k * Math.PI) * 10;
    ctx.drawImage(IMG.masks, 0, 0, 8, 8, Math.round(mx - 4), Math.round(my), 8, 8);
  }
  // coughing puffs of haze, then the haze swirls in and settles over him
  if (t > DEATH.cough && t < DEATH.down && Math.random() < 0.25) G.deathPuffs.push({ x: x + dir * 4, y: y - 14, vx: dir * rand(10, 25), vy: rand(-15, -5), t: 0.8, r: rand(1.5, 3) });
  if (t > DEATH.fall && Math.random() < 0.5) { const a = rand(0, 7), r = rand(26, 40); G.deathPuffs.push({ x: x + Math.cos(a) * r, y: y - 4 + Math.sin(a) * r * 0.5, tx: x, ty: y - 4, t: 1.0, r: rand(2, 4) }); }
  for (const p of G.deathPuffs) {
    p.t -= 1 / 60;
    if (p.tx != null) { p.x += (p.tx - p.x) * 0.04; p.y += (p.ty - p.y) * 0.04; } else { p.x += p.vx / 60; p.y += p.vy / 60; }
    ctx.fillStyle = `rgba(150,140,130,${clamp(p.t, 0, 1) * 0.7})`; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 7); ctx.fill();
  }
  G.deathPuffs = G.deathPuffs.filter(p => p.t > 0);
  if (t > DEATH.cough && t < DEATH.fall && ((t * 3) | 0) % 2) text('*COUGH*', Math.round(x + dir * 6 - 12), Math.round(y - 34), '#efe6d6');
}
function drawDeath() {
  ctx.fillStyle = '#0b0a0a'; ctx.fillRect(0, 0, W, H);
  drawRun();
  const t = G.deadT, v = deathView();
  // spotlight: everything but Jun Jie sinks into a dark, smoggy red
  const dark = clamp((t - 0.15) / 1.4, 0, 1);
  const g = ctx.createRadialGradient(W / 2, H / 2 + 2, 18, W / 2, H / 2 + 2, 150);
  g.addColorStop(0, 'rgba(40,8,6,0)'); g.addColorStop(0.35, `rgba(40,8,6,${0.35 * dark})`); g.addColorStop(1, `rgba(12,4,3,${0.95 * dark})`);
  ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
  if (t < 0.12) { ctx.fillStyle = `rgba(216,50,42,${0.5 - t * 4})`; ctx.fillRect(0, 0, W, H); }
  // "YOU CAN'T BREATHE..." slashes in letter by letter, Hades-style, with a red rule underneath
  if (t > DEATH.title) {
    const line = "YOU CAN'T BREATHE...", n = Math.min(line.length, ((t - DEATH.title) / 0.05) | 0), sc = 3, w = textW(line, sc), x0 = Math.round(160 - w / 2);
    const ty = t > DEATH.stats ? 22 : 30;
    const rule = clamp((t - DEATH.title) / 0.4, 0, 1);
    ctx.fillStyle = '#d8322a'; ctx.fillRect(Math.round(160 - (w / 2 + 14) * rule), ty + 18, Math.round((w + 28) * rule), 1);
    ctx.fillStyle = 'rgba(216,50,42,0.4)'; ctx.fillRect(Math.round(160 - (w / 2 + 30) * rule), ty + 20, Math.round((w + 60) * rule), 1);
    outlined(line.slice(0, n), x0, ty, '#d8322a', sc);
  }
  if (t > DEATH.stats) {
    const k = ease((t - DEATH.stats) / 0.5), py = Math.round(H + 4 - 52 * k);
    panel(92, py, 228, py + 40);
    const rows = [['ROOMS CLEARED', G.stats.rooms + ' / ' + FIGHT_ROOMS], ['HAZED DISPERSED', G.stats.kills], ['COINS', (G.stats.coins || 0) + ' (LOST)'], ['CLEAN AIR', '+' + G.stats.air]];
    rows.forEach(([k2, v2], i) => { text(k2, 100, py + 5 + i * 9, '#bfb4a2'); text(v2, 220 - textW(String(v2)), py + 5 + i * 9, k2 === 'CLEAN AIR' ? '#bdefff' : '#efe6d6'); });
    if (t > DEATH.stats + 0.6 && ((G.t * 2) | 0) % 2) textC(document.body.classList.contains('touch') ? 'TAP OR PRESS E TO WAKE UP' : 'PRESS ENTER TO WAKE UP', 160, 50, '#efe6d6');
  }
}
function procOnHit(e) {
  if (P.boons.chilli && e.state === 'alive') { if (!e.burn) sfx('chilli'); e.burned = true; e.burn = { t: 3, dps: lv('chilli') >= 2 ? 3 : 2 }; }
  if (P.boons.zap && (G.weapon === 'rotan' ? !P.zapSwing : (P.zapProcCd || 0) <= 0)) {   // the rotan arcs once per swing
    // arc to up to 2 more Hazed, each jump from the last one hit; small damage so it never takes over
    P.zapProcCd = 0.35; P.zapSwing = true;
    const hitSet = new Set([e]); let from = e, n = 0;
    while (n < 2) {
      let best = null, bd = 80;
      for (const o of G.enemies) if (!hitSet.has(o) && o.state === 'alive' && o.spawn <= 0) { const dd = Math.hypot(o.x - from.x, o.y - from.y); if (dd < bd) { bd = dd; best = o; } }
      if (!best) break;
      G.fx.push({ k: 'bolt', x: from.x, y: from.y - from.T.h / 2, tx: best.x, ty: best.y - best.T.h / 2, t: 0.16 });
      damage(best, lv('zap') >= 2 ? 5 : 3, { x: best.x - from.x, y: best.y - from.y }, true);
      hitSet.add(best); from = best; n++;
    }
    if (n) sfx('zap');
  }
}
function damage(e, amt, dir, chained, kbm = 1) {
  if (e.state === 'gone' || e.spawn > 0) return;
  if (G.scene === 'run') { if (G.inSiam) RS.siamDmg = true; else RS.otherDmg = true; }
  if (e.state === 'puff') { disperse(e); return; }
  if (P.boons.headlamp && Math.hypot(e.x - P.x, e.y - P.y) < lampR()) amt *= 1 + 0.1 * lv('headlamp');
  e.hp -= amt; e.flash = 0.1; sfx(G.weapon !== 'vac' && !chained ? 'slash' : 'hit');
  if (!chained) procOnHit(e);
  G.fx.push({ k: 'star', x: e.x, y: e.y - e.T.h / 2, t: 0.12, c: P.boons.overclock ? '#ffd45a' : '#ffffff' });
  const l = Math.hypot(dir.x, dir.y) || 1;
  const kb = (e.type === 'brute' ? 40 : 120) * kbm;
  e.vx += dir.x / l * kb; e.vy += dir.y / l * kb;
  G.fx.push({ k: 'pop', x: e.x, y: e.y - e.T.h, t: 0.5, s: Math.round(amt), c: '#ffffff' });
  for (let i = 0; i < 3; i++) G.fx.push({ k: 'smoke', x: e.x, y: e.y - e.T.h / 2, t: 0.4, vx: rand(-25, 25), vy: rand(-25, 5), r: 2 });
  if (e.hp <= 0) { spreadFire(e); e.state = 'puff'; e.atk = ''; e.t = PSI[G.psi].reform; e.vx = e.vy = 0; sfx('puff'); }
}
function spreadFire(e) {
  // Chilli Padi II: when a burning Hazed falls, the fire jumps to ONE nearby Hazed (the closest), and that fire doesn't jump again
  if (!e.burn || e.burn.noSpread || lv('chilli') < 2) return;
  let best = null, bd = 34;
  for (const o of G.enemies) if (o !== e && o.state === 'alive' && o.spawn <= 0 && !o.burn) { const d = Math.hypot(o.x - e.x, o.y - e.y); if (d < bd) { bd = d; best = o; } }
  if (!best) return;
  best.burn = { t: 3, dps: 3, noSpread: true }; best.burned = true;
  for (let i = 0; i < 3; i++) G.fx.push({ k: 'flame', x: best.x + rand(-4, 4), y: best.y - rand(4, 12), vx: rand(-5, 5), vy: rand(-30, -15), t: 0.35 });
}
function disperse(e) {
  e.state = 'gone'; G.stats.kills++; sfx('disperse'); qOnKill(e);
  for (let i = 0; i < 10; i++) G.fx.push({ k: 'smoke', x: e.x, y: e.y - 6, t: 0.6, vx: rand(-40, 40), vy: rand(-40, 10), r: rand(2, 4) });
  if (P.boons.tapao && P.half < P.max && Math.random() < [0, 0.07, 0.12][lv('tapao')]) {
    P.half = Math.min(P.max, P.half + 1);
    G.fx.push({ k: 'pop', x: P.x, y: P.y - 34, t: 0.9, s: 'TAPAO! +1/2', c: '#9cc24a' }); G.fx.push({ k: 'boonget', icon: 'i_tapao', x: e.x, y: e.y - 14, t: 0.8 }); sfx('heal');
  }
  if (P.boons.gravy && e.frac >= 1 && (G.mealDropped | 0) < 1 && G.room <= FIGHT_ROOMS && Math.random() < 0.08) {
    G.mealDropped = (G.mealDropped | 0) + 1; G.pickups.push({ k: 'meal', x: e.x, y: e.y, t: 0 });
    G.fx.push({ k: 'pop', x: e.x, y: e.y - 20, t: 0.8, s: 'MEAL!', c: '#e8a25c' });
  }
  if (e.frac >= 1 && Math.random() < e.T.air * 0.57) G.pickups.push({ k: 'air', x: e.x, y: e.y, n: e.type === 'brute' ? 2 : 1, t: 0 });
  if (G.boss == null) {
    const [a, b] = COIN_DROP[e.type]; const ev = rand(a, b) * (e.frac < 1 ? 0.4 : 1) * 0.42; let n = Math.floor(ev) + (Math.random() < ev % 1 ? 1 : 0);
    if (n <= 0) n = 0;
    for (let i = 0; i < Math.min(n, 6); i++) G.pickups.push({ k: 'coin', x: e.x + rand(-4, 4), y: e.y + rand(-3, 3), n: i === 0 ? n - Math.min(n, 6) + 1 : 1, t: rand(0, 1), vx: rand(-50, 50), vy: rand(-40, 10) });
  }
  if (e.T.split) {
    const n0 = G.enemies.length, fam = (G.famN = (G.famN || 0) + 1);
    if (cheat('baby')) addEnemy('wisp', e.x, e.y, 0.6); else { addEnemy('wisp', e.x - 8, e.y, 0.6); addEnemy('wisp', e.x + 8, e.y, 0.6); }
    const kids = G.enemies.slice(n0); kids.forEach(k => k.fam = fam); (G.famLeft = G.famLeft || {})[fam] = kids.length;
  }
}
function updateEnemies(dt) {
  const L = PSI[G.psi];
  for (const e of G.enemies) {
    if (e.state === 'gone') continue;
    e.flash -= dt;
    if (e.spawn > 0) { e.spawn -= dt; if (e.spawn <= 0) e.grace = 0.8; continue; }
    if (e.grace > 0) e.grace -= dt;
    if (e.burn && e.state === 'alive') {
      e.burn.t -= dt; e.hp -= e.burn.dps * dt;
      if (Math.random() < dt * 10) G.fx.push({ k: 'flame', x: e.x + rand(-4, 4), y: e.y - rand(4, e.T.h - 4), vx: rand(-5, 5), vy: rand(-30, -15), t: 0.35 });
      if (e.burn.t <= 0) e.burn = null;
      if (e.hp <= 0) { spreadFire(e); e.burn = null; e.state = 'puff'; e.atk = ''; e.t = PSI[G.psi].reform; e.vx = e.vy = 0; sfx('puff'); continue; }
    }
    if (e.stun > 0 && e.state === 'alive') { e.stun -= dt; e.vx *= Math.pow(0.02, dt); e.vy *= Math.pow(0.02, dt); e.x += e.vx * dt; e.y += e.vy * dt; continue; }
    if (e.state === 'puff') {
      e.burn = null;
      e.t -= dt;
      if (e.t <= 0) { e.state = 'alive'; e.hp = Math.ceil(e.max * 0.5); G.fx.push({ k: 'ring', x: e.x, y: e.y - 6, t: 0.5 }); }
      continue;
    }
    const dx = P.x - e.x, dy = P.y - e.y, d = Math.hypot(dx, dy) || 1;
    let tx = 0, ty = 0;
    if (e.type === 'spitter') {
      if (d < 60) { tx = -dx / d; ty = -dy / d; } else if (d > 95) { tx = dx / d; ty = dy / d; }
      else { tx = -dy / d * 0.6; ty = dx / d * 0.6; }
      e.cd -= dt;
      // wind-up: it rears back, swells and its snout glows while embers are sucked in, then it spits ash from the snout
      const nx = e.x + (e.flipX ? -8 : 8), ny = e.y - 17;
      if (e.cd < 0.55 && !e.tele) { e.tele = true; sfx('charge'); }
      if (e.tele) { tx = 0; ty = 0; if (Math.random() < 0.6) { const a = rand(0, 7), r = rand(8, 14); G.fx.push({ k: 'suck', x: nx + Math.cos(a) * r, y: ny + Math.sin(a) * r, tx: nx, ty: ny, t: 0.2, c: Math.random() < 0.5 ? '#ff9a3c' : '#9aa0a9' }); } }
      if (e.cd <= 0) {
        e.cd = rand(1.8, 2.6) * (cheat('baby') ? 1.7 : 1); e.tele = false; e.recoil = 0.18; sfx('spit');
        const ax = P.x - nx, ay = P.y - 8 - ny, al = Math.hypot(ax, ay) || 1;
        G.shots.push({ k: 'ash', go: 17, x: nx, y: ny, vx: ax / al * (cheat('baby') ? 50 : 85), vy: ay / al * (cheat('baby') ? 50 : 85), t: 3, dmg: L.dmg, enemy: true, r: 3 });
        for (let i = 0; i < 5; i++) G.fx.push({ k: 'smoke', x: nx, y: ny, t: 0.35, vx: ax / al * rand(20, 50) + rand(-15, 15), vy: ay / al * rand(20, 50) + rand(-15, 5), r: rand(1.5, 3) });
        G.fx.push({ k: 'muzzle', x: nx, y: ny, t: 0.08, r: 4 });
      }
      if (e.recoil > 0) e.recoil -= dt;
    } else if (e.type === 'brute') {
      // brutes stomp: wind up (red ring on the floor), slam, then a short recovery
      e.cd -= dt;
      if (e.atk === 'wind') {
        e.at -= dt;
        if (e.at <= 0) {   // jump at where he's standing, but only a short way
          const lx = P.x - e.x, ly = P.y - e.y, ll = Math.hypot(lx, ly) || 1, reach = Math.min(cheat('baby') ? 10 : 26, Math.max(0, ll - 10));
          e.atk = 'leap'; e.at = 0.2; e.leap = { x: lx / ll * reach / 0.2, y: ly / ll * reach / 0.2 }; sfx('dash');
        }
      } else if (e.atk === 'leap') {
        e.at -= dt; const nx = e.x + e.leap.x * dt, ny = e.y + e.leap.y * dt;
        if (canStand(G.map, nx, e.y)) e.x = nx; if (canStand(G.map, e.x, ny)) e.y = ny;
        if (e.at <= 0) {
          e.atk = 'rec'; e.at = 0.6; G.shake = Math.max(G.shake, 0.15); sfx('brute_slam');
          G.fx.push({ k: 'slam', x: e.x, y: e.y - 2, t: 0.3 });
          for (let i = 0; i < 8; i++) G.fx.push({ k: 'dust', x: e.x + rand(-10, 10), y: e.y - 2, t: 0.4, vx: rand(-60, 60), vy: rand(-20, 0), r: 3 });
          if (Math.hypot(P.x - e.x, (P.y - e.y) * 1.3) < 30) hurtPlayer(Math.max(2, L.dmg));
          for (const b of boxes()) if (Math.hypot(b.x - e.x, b.y - e.y) < 30) breakBox(b);
        }
      } else if (e.atk === 'rec') { e.at -= dt; if (e.at <= 0) e.atk = ''; }
      else { tx = dx / d; ty = dy / d; if (d < 50 && e.cd <= 0) { e.atk = 'wind'; e.at = G.psi === 2 ? 0.45 : 0.6; e.cd = rand(1.4, 2.0); } }
    } else {
      // wisps hover about, then shiver and lunge at you
      e.wob += dt * 4; e.cd -= dt;
      if (e.atk === 'tele') { e.at -= dt; if (e.at <= 0) { e.atk = 'lunge'; e.at = 0.34; e.ld = { x: dx / d, y: dy / d }; sfx('wisp_lunge'); } }
      else if (e.atk === 'lunge') { e.at -= dt; tx = e.ld.x * 2.2; ty = e.ld.y * 2.2; if (e.at <= 0) { e.atk = ''; e.cd = rand(2.2, 3.4); } }
      else {
        tx = dx / d + Math.cos(e.wob) * 0.4; ty = dy / d + Math.sin(e.wob) * 0.4;
        if (d < 60 && d > 16 && e.cd <= 0) { e.atk = 'tele'; e.at = 0.4; }
      }
    }
    if (e.flinch > 0) { e.flinch -= dt; tx = -dx / d * 0.3; ty = -dy / d * 0.3; e.atk = ''; e.tele = false; if (e.type === 'spitter') e.cd = Math.max(e.cd, 0.6); }   // the rotan's discipline: it backs off and won't attack for a moment
    for (const o of G.enemies) if (o !== e && o.state !== 'gone') {
      const ox = e.x - o.x, oy = e.y - o.y, od = Math.hypot(ox, oy);
      if (od > 0 && od < e.T.r + o.T.r) { tx += ox / od * 0.8; ty += oy / od * 0.8; }
    }
    const ox = e.x, oy = e.y, okE = (x, y) => e.type === 'wisp' ? G.map.walk.some(r => inR(r, x, y)) : canStand(G.map, x, y);
    const free = !okE(ox, oy);
    let espd = e.T.spd * (cheat('baby') && e.type === 'wisp' ? 0.5 : 1);
    if (P.boons.aircon && Math.hypot(e.x - P.x, e.y - P.y) < 46) espd *= 1 - 0.1 * lv('aircon');
    if (e.slowT > 0) { e.slowT -= dt; espd *= 0.6; }
    e.x += (tx * espd + e.vx) * dt; if (!free && !okE(e.x, oy)) { e.x = ox; e.vx = 0; }
    e.y += (ty * espd + e.vy) * dt; if (!free && !okE(e.x, e.y)) { e.y = oy; e.vy = 0; }
    e.vx *= Math.pow(0.02, dt); e.vy *= Math.pow(0.02, dt);
    const o = inProp(G.map, e.x, e.y, e.T.r * 0.5);
    if (o) { const ax = e.x - o.x, ay = (e.y - o.y) * (o.rx / o.ry), l = Math.hypot(ax, ay) || 1; e.x += ax / l * 60 * dt + (ax / l) * 0.6; e.y += ay / l * 60 * dt * (o.ry / o.rx) + (ay / l) * 0.4; }
    e.flipX = dx < 0;
    if (d < e.T.r + 5 && e.type !== 'brute' && !(e.grace > 0) && !(e.flinch > 0)) hurtPlayer(L.dmg);   // a freshly formed Hazed can't hurt you on the spot
  }
  keepInBounds();
  G.enemies = G.enemies.filter(e => e.state !== 'gone');
}

/* ---------------- attacks ---------------- */
function inCone(e, a, range, cos) {
  const ex = e.x - P.x, ey = (e.y - (e.T ? e.T.h / 2 : 10)) - (P.y - 10), d = Math.hypot(ex, ey);
  return d < range && (ex * a.x + ey * a.y) / (d || 1) > cos;
}
function hitTargets(fn) {
  for (const e of G.enemies) if (e.state !== 'gone') fn(e, 'e');
  for (const f of G.flags) fn(f, 'f');
  if (bossHittable(G.boss)) fn(G.boss, 'b');
}
/* ---------------- the rotan ---------------- */
// a long thin cane that hits along a line: a 3-hit combo where the 3rd hit CRACKS (double, knockback, stun),
// and every hit makes the Hazed flinch and back off. Raffles and his flags are statues: they only ever take the damage.
const ROT_REACH = 46, ROT_SP = 3.2;
const rotReach = () => ROT_REACH * (1 + 0.1 * lv('longarm'));
const rotWidth = big => (big ? 9 : 6) + 3 * lv('widesweep');
function rotLine(ang, reach, width, fn) {
  const dx = Math.cos(ang), dy = Math.sin(ang), ox = P.x + dx * 4, oy = P.y - 10 + dy * 4;
  const inL = (x, y, r) => { const rx = x - ox, ry = y - oy, al = rx * dx + ry * dy, ac = Math.abs(ry * dx - rx * dy); return al > -8 && al < reach + r && ac < width + r; };
  for (const b of boxes()) if (inL(b.x, b.y - 6, 4)) fn(b, 'box');
  hitTargets((e, kind) => {
    const ty = kind === 'b' ? e.y - 22 : kind === 'f' ? e.y - 10 : e.y - e.T.h / 2, r = kind === 'b' ? 14 : kind === 'f' ? 6 : e.T.r;
    if (inL(e.x, ty, r)) fn(e, kind);
  });
}
function rotStrike(e, kind, d, ang, o) {
  if (kind === 'box') { breakBox(e, !!o.sp, o.sp ? 'special' : 'attack'); return; }
  const dir = { x: Math.cos(ang), y: Math.sin(ang) };
  if (kind === 'e') {
    const was = e.state === 'alive' && e.spawn <= 0;
    damage(e, d, dir, false, o.kb);
    if (was && e.state === 'alive') {
      e.flinch = e.type === 'brute' ? 0.35 : 0.6; e.atk = ''; e.tele = false;
      if (o.stun) e.stun = Math.max(e.stun || 0, o.stun);
      if (P.boons.pushhands && (!o.sp || o.kb >= 1)) { const two = lv('pushhands') >= 2, f = (e.type === 'brute' ? 0.5 : 1) * (two ? 200 : 120); e.vx += dir.x * f; e.vy += dir.y * f; if (two) e.stun = Math.max(e.stun || 0, 0.4); }   // not mid-flurry, or the flurry would push them out of its own line
    }
  } else if (kind === 'f') damageFlag(e, d); else damageBoss(d);
  if (o.sp) addKuti(e, kind, 12);
}
function updateRotan(dt, a, M, atkPress, atkHeld) {
  P.sucking = false;
  if (P.rs) { P.rs.t += dt; if (P.rs.t >= P.rs.dur + 0.05) P.rs = null; }
  if (P.rComboT > 0) P.rComboT -= dt;
  if (P.six) { updateSix(dt, M); return; }
  if (P.hop) { updateHop(dt); return; }
  if ((atkPress || atkHeld) && P.atkCd <= 0) {
    RS.atkUsed = true;
    if (!(P.rComboT > 0)) P.rCombo = 0;
    const n = P.rCombo = (P.rCombo || 0) % 3 + 1, crack = n === 3, ang = Math.atan2(a.y, a.x);
    P.rComboT = 0.75; P.swings = (P.swings || 0) + 1; P.zapSwing = false;
    const dur = crack ? 0.2 : 0.13; P.atkCd = crack ? 0.42 : 0.24; P.swingT = dur; P.swingA = ang;
    P.rs = { a: ang, n, t: 0, dur, big: crack };
    // Ah Gong: Third Form makes the CRACK hit double again and stun longer; Inner Peace makes the next swing 3x
    const third = crack && P.boons.thirdform, peace = P.boons.innerpeace && P.peaceReady;
    if (peace) { P.stillT = 0; P.peaceReady = false; G.fx.push({ k: 'pop', x: P.x, y: P.y - 36, t: 0.7, s: 'INNER PEACE!', c: '#f4f1ea' }); }
    const mult = (crack ? 2 : 1) * (third ? 2 : 1) * (peace ? 3 : 1), d = 5 * M * mult, R = rotReach() + (crack ? 6 : 0);
    sfx(crack ? 'third' : 'swipe');
    if (crack) G.fx.push({ k: 'pop', x: P.x + a.x * 26, y: P.y - 30, t: 0.5, s: 'CRACK!', c: '#f2c14e' });
    if (third && lv('thirdform') >= 2) {
      G.fx.push({ k: 'ring', x: P.x, y: P.y - 6, t: 0.4, c: '#f2c14e' });
      for (const e of G.enemies) if (e.state === 'alive' && e.spawn <= 0 && Math.hypot(e.x - P.x, e.y - P.y) < 40) damage(e, 6 * M, { x: e.x - P.x, y: e.y - P.y }, true);
    }
    let any = false;
    rotLine(ang, R, rotWidth(crack), (e, kind) => { if (kind !== 'box') any = true; rotStrike(e, kind, d, ang, { kb: crack ? 1.4 : 0.2, stun: crack ? (third ? 1.5 : 0.9) : 0 }); });
    if (crack) G.fx.push({ k: 'rline', x: P.x, y: P.y - 10, a: ang, R, t: 0.12, c: '#f2c14e', w: 2 });
    if (any) { G.hitstop = mult > 1 ? 0.08 : 0.035; if (crack) G.shake = Math.max(G.shake, 0.08); }
  }
  if (hit('special') && P.spCd <= 0) {
    // SIX OF THE BEST: a lunge, then six quick strikes along the line. The 6th knocks back and stuns.
    const ang = Math.atan2(a.y, a.x), rs = 1 + 0.1 * lv('rubber');
    P.spCd = ROT_SP; sfx('dash'); qOnSpecial(); P.zapSwing = false; P.rCombo = 0; P.rComboT = 0;
    P.six = { ang, n: 0, t: 0, gap: 0.085 / rs, qh: new Set() };
    P.lunge = { t: 0.12 * rs, dx: a.x, dy: a.y, sp: 300, wall: !!P.boons.wallhack, ox: P.x, oy: P.y, extra: 0 };
    if (a.x) P.flip = a.x < 0;
  }
}
function updateSix(dt, M) {
  const S = P.six;
  if (P.lunge) {                             // the strikes start once the lunge lands; it stops short of the first Hazed in the way
    const dx = Math.cos(S.ang), dy = Math.sin(S.ang);
    if (G.enemies.some(e => e.state === 'alive' && e.spawn <= 0 && (e.x - P.x) * dx + (e.y - P.y) * dy > 0 && (e.x - P.x) * dx + (e.y - P.y) * dy < 20 && Math.abs((e.y - P.y) * dx - (e.x - P.x) * dy) < 10)) P.lunge.t = Math.min(P.lunge.t, 0);
    return;
  }
  S.t -= dt; if (S.t > 0) return;
  S.n++; S.t = S.gap;
  const last = S.n === 6, tri = P.boons.triple, d = 4 * M * (tri ? 0.5 : 1), R = rotReach();
  P.rs = { a: S.ang, n: S.n % 2 ? 1 : 2, t: 0, dur: Math.max(0.05, S.gap * 0.85), big: last }; P.swingT = S.gap; P.swingA = S.ang;
  sfx(last ? 'third' : 'swipe');
  let any = false;
  for (const off of tri ? [0, -0.44, 0.44] : [0]) {   // Triple Shot: three lines at once, half damage each
    const ang = S.ang + off;
    rotLine(ang, R, rotWidth(false) + 2, (e, kind) => {
      if (kind !== 'box') { any = true; if (kind === 'e') { S.qh.add(e); qev('sphit', { n: S.qh.size }); } }
      rotStrike(e, kind, d, ang, { kb: last ? 1.3 : 0.12, stun: last ? 0.6 : 0, sp: true });
    });
    G.fx.push({ k: 'rline', x: P.x, y: P.y - 10, a: ang, R, t: 0.1, c: last ? '#f2c14e' : null, w: last ? 2 : 1 });
  }
  G.fx.push({ k: 'pop', x: P.x + Math.cos(S.ang) * 20, y: P.y - 28 - S.n * 2, t: 0.45, s: String(S.n), c: last ? '#f2c14e' : '#efe6d6' });
  if (any) G.hitstop = last ? 0.08 : 0.02;
  if (last) {
    P.six = null; G.shake = Math.max(G.shake, 0.12);
    stonesAt({ x: P.x + Math.cos(S.ang) * R, y: P.y - 10 + Math.sin(S.ang) * R });   // Five Stones scatter from the final strike
    if (P.boons.chapteh) rotHopStart();                                                   // Chapteh Rebound: hop to a close Hazed for one more hit
  }
}
function rotHopStart() {
  let best = null, bd = 72;
  for (const e of G.enemies) if (e.state === 'alive' && e.spawn <= 0) { const dd = Math.hypot(e.x - P.x, e.y - P.y); if (dd < bd) { bd = dd; best = e; } }
  if (!best) return;
  const dx = P.x - best.x, dy = P.y - best.y, l = Math.hypot(dx, dy) || 1;
  P.hop = { e: best, t: 0, T: 0.22, fx: P.x, fy: P.y, tx: best.x + dx / l * 14, ty: best.y + dy / l * 8 };
  P.flip = best.x < P.x; sfx('dash');
}
function updateHop(dt) {
  const H = P.hop; H.t += dt; const k = Math.min(1, H.t / H.T);
  const nx = H.fx + (H.tx - H.fx) * k, ny = H.fy + (H.ty - H.fy) * k;
  if (P.boons.wallhack || canStand(G.map, nx, ny)) { P.x = nx; P.y = ny; }
  P.hopZ = Math.sin(k * Math.PI) * 10;
  if (k < 1) return;
  P.hop = null; P.hopZ = 0;
  for (let i = 0; i < 5; i++) G.fx.push({ k: 'dust', x: P.x + rand(-5, 5), y: P.y - 1, vx: rand(-30, 30), vy: rand(-10, 0), t: 0.3, r: 1.5 });
  const e = H.e; if (e.state === 'gone') return;
  const ang = Math.atan2(e.y - e.T.h / 2 - (P.y - 10), e.x - P.x);
  P.rs = { a: ang, n: 3, t: 0, dur: 0.14, big: true }; P.swingT = 0.14; P.swingA = ang; sfx('third');
  rotStrike(e, 'e', 8 * dmgMul(), ang, { kb: 1.2, stun: 0.5, sp: true });
  G.fx.push({ k: 'pop', x: e.x, y: e.y - e.T.h - 10, t: 0.6, s: 'BOING!', c: '#f2c14e' }); G.hitstop = 0.06;
}
function updateAttacks(dt) {
  updateTea(dt); updateKuti(dt); if (P.shield > 0) P.shield -= dt; if (P.peaceT > 0) P.peaceT -= dt;
  P.stillT = (P.moving || P.dashT > 0 || P.sucking) ? 0 : (P.stillT || 0) + dt;
  if (P.boons.innerpeace && P.stillT >= 1) P.peaceReady = true;   // once charged it stays charged until the next attack
  { const sp = (P.kopi ? 1.25 : 1) * (cheat('flash') || cheat('raid') ? 4 : 1); P.atkCd -= dt * sp; P.spCd -= dt * sp * (1 + 0.1 * lv('pocket')); } if (P.zapProcCd > 0) P.zapProcCd -= dt; P.dashCd -= dt;
  const a = aimVec(); const M = dmgMul();
  const atkHeld = (held('attack') || mouse.left) && !G.atkLock;
  const atkPress = hit('attack') || hit('click');
  if (G.weapon === 'fan') {
    P.sucking = false;
    if ((atkPress || atkHeld) && P.atkCd <= 0) {
      RS.atkUsed = true; P.atkCd = 0.3; P.swingT = 0.16; P.swingA = Math.atan2(a.y, a.x);
      // Ah Gong: Long Arm (reach), Wide Sweep (arc), Third Form (every 3rd swing), Push Hands (knockback), Inner Peace (still = 3x)
      const reach = 1 + 0.1 * lv('longarm'), cone = [0.5, 0.25, -0.05][lv('widesweep')];
      P.swings = (P.swings || 0) + 1;
      const third = P.boons.thirdform && P.swings % 3 === 0, peace = P.boons.innerpeace && P.peaceReady;
      sfx(third ? 'third' : 'swipe');
      const mult = (third ? 2 : 1) * (peace ? 3 : 1); if (peace) { P.stillT = 0; P.peaceReady = false; G.fx.push({ k: 'pop', x: P.x, y: P.y - 36, t: 0.7, s: 'INNER PEACE!', c: '#f4f1ea' }); }
      G.fx.push({ k: 'swipe', x: P.x, y: P.y - 10, a: Math.atan2(a.y, a.x), t: 0.16, R: reach, w: cone < 0.4 ? (cone < 0 ? 1.75 : 1.35) : 1, big: mult > 1 });
      if (third && lv('thirdform') >= 2) {
        G.fx.push({ k: 'ring', x: P.x, y: P.y - 6, t: 0.4, c: '#f2c14e' });
        for (const e of G.enemies) if (e.state === 'alive' && e.spawn <= 0 && Math.hypot(e.x - P.x, e.y - P.y) < 40) damage(e, 6 * M, { x: e.x - P.x, y: e.y - P.y }, true);
      }
      for (const b of boxes()) if (inCone({ x: b.x, y: b.y, T: { h: 8 } }, a, 32 * reach, cone) || Math.hypot(b.x - P.x, b.y - P.y) < 14) breakBox(b, false, 'attack');
      hitTargets((e, kind) => {
        const tgt = kind === 'b' ? { x: e.x, y: e.y, T: { h: 30 } } : kind === 'f' ? { x: e.x, y: e.y, T: { h: 12 } } : e;
        if (inCone(tgt, a, (kind === 'b' ? 44 : 32) * reach, cone) || Math.hypot(tgt.x - P.x, tgt.y - P.y) < (kind === 'b' ? 24 : kind === 'f' ? 14 : e.T.r + 9)) {   // anything you overlap gets hit too
          const d = 10 * M * mult;
          if (kind === 'e') {
            damage(e, d, a);
            if (P.boons.pushhands && e.state === 'alive') { const two = lv('pushhands') >= 2, f = (e.type === 'brute' ? 0.5 : 1) * (two ? 230 : 140); e.vx += a.x * f; e.vy += a.y * f; if (two) e.stun = 0.4; }
          } else if (kind === 'f') damageFlag(e, d); else damageBoss(d);
          G.hitstop = mult > 1 ? 0.08 : 0.045;
        }
      });
    }
    if (hit('special') && P.spCd <= 0 && !G.shots.some(s => s.k === 'boomer')) {   // two fans: throw one, keep swiping with the other
      P.spCd = 1.1; sfx('fan_throw'); qOnSpecial(); P.throwT = 0.12; P.swingT = 0.1; P.swingA = Math.atan2(a.y, a.x);
      const n = P.boons.triple ? 3 : 1, qh = new Set();
      for (let i = 0; i < n; i++) {
        const ang = Math.atan2(a.y, a.x) + (i - (n - 1) / 2) * 0.35;
        const rs = 1 + 0.1 * lv('rubber'); G.shots.push({ k: 'boomer', x: P.x, y: P.y - 10, vx: Math.cos(ang) * 170 * rs, vy: Math.sin(ang) * 170 * rs, dist: 0, out: true, t: 3, hits: new Set(), dmg: 9 * M * (n > 1 ? 0.5 : 1), r: 6, qh });
      }
    }
  } else if (G.weapon === 'rotan') {
    updateRotan(dt, a, M, atkPress, atkHeld);
  } else if (G.weapon === 'vac') {
    P.sucking = atkHeld && !P.beam; vacHum(P.sucking && !G.paused); if (P.sucking) RS.atkUsed = true;
    if (P.sucking) {
      const reach = 56 * (1 + 0.1 * lv('longarm')), cone = [0.8, 0.68, 0.55][lv('widesweep')];
      if (P.boons.innerpeace && P.peaceReady) { P.stillT = 0; P.peaceReady = false; P.peaceT = 0.6; G.fx.push({ k: 'pop', x: P.x, y: P.y - 36, t: 0.7, s: 'INNER PEACE!', c: '#f4f1ea' }); }
      const pm = P.peaceT > 0 ? 3 : 1, pull = 0.9 * (1 + 0.8 * lv('pushhands'));
      for (const b of boxes()) if (inCone({ x: b.x, y: b.y, T: { h: 8 } }, a, reach, cone) && (b.dummy || Math.random() < 0.08)) breakBox(b, false, 'attack');
      let any = false;
      hitTargets((e, kind) => {
        const tgt = kind === 'b' ? { x: e.x, y: e.y, T: { h: 30 } } : kind === 'f' ? { x: e.x, y: e.y, T: { h: 12 } } : e;
        if (inCone(tgt, a, reach, cone)) {
          any = true;
          // Third Form: damage ramps up the longer you hold on one target
          if (G.t - (e.suckLast || -9) > 0.25) e.suckT = 0; e.suckLast = G.t; e.suckT = (e.suckT || 0) + dt;
          const ramp = P.boons.thirdform ? 1 + Math.min(1, e.suckT / 2) * (lv('thirdform') >= 2 ? 1 : 0.5) : 1, dd = 16 * M * dt * ramp * pm;
          if (kind === 'e') {
            if (e.state === 'puff') disperse(e);
            else {
              let hd = dd; if (P.boons.headlamp && Math.hypot(e.x - P.x, e.y - P.y) < lampR()) hd *= 1 + 0.1 * lv('headlamp');
              e.hp -= hd; e.flash = 0.05; if (Math.random() < dt * 3) procOnHit(e); e.x -= (e.x - P.x) * pull * dt; e.y -= (e.y - P.y) * pull * dt;
              if (lv('pushhands') >= 2) e.slowT = 0.3;
              if (e.hp <= 0) { spreadFire(e); e.state = 'puff'; e.t = PSI[G.psi].reform; sfx('puff'); }
            }
          } else if (kind === 'f') { e.hp -= dd; if (e.hp <= 0) damageFlag(e, 0); }
          else damageBoss(dd, true);
        }
      });
      { const was = Math.floor(P.charge); P.charge = Math.min(3, P.charge + dt * (any ? 0.9 : 0.35) * (1 + 0.1 * lv('pocket'))); if (Math.floor(P.charge) > was) sfx('vac_charge'); }
      if (Math.random() < 0.6) {
        const ang = Math.atan2(a.y, a.x) + rand(-0.5, 0.5), r = rand(30, 56);
        G.fx.push({ k: 'suck', x: P.x + Math.cos(ang) * r, y: P.y - 10 + Math.sin(ang) * r, tx: P.x + a.x * 8, ty: P.y - 10 + a.y * 8, t: 0.25 });
      }
    }
    if (hit('special') && P.spCd <= 0 && !P.beam && P.charge >= 3) {
      // fully charged: the special becomes a beam of clean air that burns through every charge
      P.beam = { t: 0, dur: 2.4 * (1 + 0.1 * lv('pocket')), tick: 0, hum: 0, stoneT: 0.5, ends: [], qh: new Set() }; sfx('vac_blast_big'); qOnSpecial(); qev('beam'); st().beams++; checkCounts(); G.shake = Math.max(G.shake, 0.15);
    } else if (P.beam) {
      updateBeam(dt, a, M);
    } else if (hit('special') && P.spCd <= 0) {
      P.spCd = 0.7; sfx(P.charge >= 2 ? 'vac_blast_big' : 'vac_blast'); qOnSpecial(); P.recoil = 1; G.shake = Math.max(G.shake, 0.08 + 0.04 * Math.floor(P.charge));
      G.fx.push({ k: 'muzzle', x: P.x + (P.flip ? -6 : 6) + a.x * 15, y: P.y - 9 + a.y * 15, t: 0.1, r: 4 + Math.floor(P.charge) * 2 });
      const n = P.boons.triple ? 3 : 1, dmg = (9 + 7 * Math.floor(P.charge)) * M * (n > 1 ? 0.5 : 1), qh = new Set();
      for (let i = 0; i < n; i++) {
        const ang = Math.atan2(a.y, a.x) + (i - (n - 1) / 2) * 0.3;
        const rs = 1 + 0.1 * lv('rubber'); G.shots.push({ k: 'blast', x: P.x + a.x * 8, y: P.y - 10 + a.y * 8, vx: Math.cos(ang) * 210 * rs, vy: Math.sin(ang) * 210 * rs, t: 1.2 * rs, dmg, r: 4 + Math.floor(P.charge), qh });
      }
      P.charge = 0;
    }
  }
  // boons that act on their own
  if (P.boons.whistle) {
    const two = lv('whistle') >= 2, R = two ? 64 : 48;
    P.whistleCd = (P.whistleCd || 0) - dt;
    if (P.whistleCd <= 0 && G.enemies.some(e => e.state === 'alive' && e.spawn <= 0 && Math.hypot(e.x - P.x, e.y - P.y) < R)) {
      // PRRRT! a ring of sound: every Hazed it reaches freezes, wind-ups are cancelled
      P.whistleCd = two ? 4 : 6; P.whistleT = 0.3;
      G.fx.push({ k: 'sound', x: P.x, y: P.y - 6, r: R, t: 0.35 }); G.fx.push({ k: 'pop', x: P.x, y: P.y - 36, t: 0.6, s: 'PRRRT!', c: '#f4f3ee' });
      sfx('whistle');
      for (const e of G.enemies) if (e.state === 'alive' && e.spawn <= 0 && Math.hypot(e.x - P.x, e.y - P.y) < R) { e.stun = two ? 1.5 : 1.0; e.atk = ''; e.tele = false; }
    }
    if (P.whistleT > 0) P.whistleT -= dt;
  }
  if (P.boons.overclock) { P.zapT -= dt; if (P.zapT <= 0) { P.zapT = rand(0.25, 0.6); G.fx.push({ k: 'zap', x: P.x + rand(-9, 9), y: P.y - rand(4, 22), t: 0.1 }); } }
  if (P.boons.gassy && P.moving) { P.gasT -= dt; if (P.gasT <= 0) { P.gasT = 1.4; G.fx.push({ k: 'gas', x: P.x - P.face.x * 6, y: P.y - 5, vx: -P.face.x * 10, vy: -6, t: 0.9, r: 2.5 }); } }
  if (P.boons.hula) {
    P.hulaCd -= dt;
    if (P.hulaCd <= 0) { P.hulaCd = lv('hula') >= 2 ? 0.22 : 0.45; for (const e of G.enemies) if (e.state === 'alive' && Math.hypot(e.x - P.x, e.y - P.y) < (lv('hula') >= 2 ? 28 : 22)) { damage(e, 5 * M, { x: e.x - P.x, y: e.y - P.y }); G.fx.push({ k: 'spark', x: e.x, y: e.y - 8, vx: rand(-30, 30), vy: rand(-30, 0), t: 0.3, c: ['#e7849a', '#ffd45a', '#5fd3f5'][(Math.random() * 3) | 0] }); } }
  }
  if (P.boons.bot) {
    P.botA += dt * 2.4; P.botCd -= dt;
    const tx = P.x - (P.flip ? -14 : 14), ty = P.y - 16;
    P.botX += (tx - P.botX) * Math.min(1, dt * 4); P.botY += (ty - P.botY) * Math.min(1, dt * 4);
    if (P.botCd <= 0) {
      let best = null, bd = 130;
      for (const e of G.enemies) if (e.state === 'alive') { const d = Math.hypot(e.x - P.x, e.y - P.y); if (d < bd) { bd = d; best = e; } }
      if (best) {
        P.botCd = lv('bot') >= 2 ? 0.45 : 0.9; const bx = P.botX, by = P.botY;
        G.fx.push({ k: 'laser', x: bx, y: by, tx: best.x, ty: best.y - 8, t: 0.08 }); sfx('drone');
        const dx = best.x - bx, dy = best.y - 8 - by, l = Math.hypot(dx, dy) || 1;
        G.shots.push({ k: 'pellet', x: bx, y: by, vx: dx / l * 180, vy: dy / l * 180, t: 1, dmg: 5 * M, r: 2 });
      }
    }
  }
}
// ---- Kampung Kid helpers ----
const solidAt = (x, y) => !!inProp(G.map, x, y + 10, 1) || G.map.block.some(r => inR(r, x, y + 10));
function rebound(s, dt) {
  const px = s.x - s.vx * dt, py = s.y - s.vy * dt;
  if (!solidAt(px, s.y)) s.vx = -s.vx; else if (!solidAt(s.x, py)) s.vy = -s.vy; else { s.vx = -s.vx; s.vy = -s.vy; }
  s.x = px; s.y = py; s.bounced = true; s.half = true; if (s.k === 'boomer') s.dist = Math.max(0, s.dist - 30);
  for (let i = 0; i < 4; i++) G.fx.push({ k: 'spark', x: s.x, y: s.y, t: 0.25, vx: rand(-40, 40), vy: rand(-40, 0), c: '#ffd45a' }); sfx('immune');
}
function ricochetTo(s, from) {
  let best = null, bd = 40;
  for (const o of G.enemies) if (o !== from && o.state === 'alive' && o.spawn <= 0 && !(s.hits && s.hits.has(o))) { const d = Math.hypot(o.x - from.x, o.y - from.y); if (d < bd) { bd = d; best = o; } }
  if (!best) return false;
  const sp = Math.hypot(s.vx, s.vy), dx = best.x - s.x, dy = best.y - best.T.h / 2 - s.y, l = Math.hypot(dx, dy) || 1;
  s.vx = dx / l * sp; s.vy = dy / l * sp; s.bounced = true; s.half = true;
  G.fx.push({ k: 'spark', x: s.x, y: s.y, t: 0.25, vx: 0, vy: -30, c: '#ffd45a' }); return true;
}
function stonesAt(s) {
  // Five Stones: five little stones scatter where the special ends (once per throw or blast)
  if (!P.boons.fivestones || s.stoned) return; s.stoned = true;
  const cols = ['#d23b33', '#3b6fb6', '#f2c14e', '#7fb04a', '#c9b2e0'], M = dmgMul(), a0 = rand(0, 6.28);
  for (let i = 0; i < 5; i++) { const a = a0 + i / 5 * Math.PI * 2; G.shots.push({ k: 'stone', x: s.x, y: s.y, vx: Math.cos(a) * 120, vy: Math.sin(a) * 120, t: 0.32, dmg: 4 * M, r: 2, c: cols[i] }); }
}
// Kuti-Kuti: a special hit leaves a little figure floating over the target; it pops 1.5s later (one at a time, like Doom)
function addKuti(e, kind, dmg) {
  if (!P.boons.kutikuti || e.kuti) return;
  if (kind === 'e' && (e.state !== 'alive' || e.spawn > 0)) return;
  e.kuti = { t: 1.5, dmg, kind };
}
function kutiTargets() { const out = G.enemies.map(e => [e, 'e']); for (const f of G.flags) out.push([f, 'f']); if (G.boss) out.push([G.boss, 'b']); return out; }
function updateKuti(dt) {
  for (const [e, kind] of kutiTargets()) {
    if (!e.kuti) continue;
    e.kuti.t -= dt;
    if (kind === 'e' && e.state !== 'alive') { e.kuti = null; continue; }
    if (e.kuti.t <= 0) {
      const d = e.kuti.dmg * dmgMul(), hy = kind === 'b' ? 52 : kind === 'f' ? 16 : e.T.h + 6; e.kuti = null;
      G.fx.push({ k: 'pop', x: e.x, y: e.y - hy - 4, t: 0.6, s: 'POP!', c: '#e7849a' });
      for (let i = 0; i < 6; i++) G.fx.push({ k: 'spark', x: e.x, y: e.y - hy, t: 0.3, vx: rand(-50, 50), vy: rand(-50, 10), c: i % 2 ? '#e7849a' : '#ffd45a' });
      if (kind === 'e') damage(e, d, { x: 0, y: -1 }, true); else if (kind === 'f') damageFlag(e, d); else damageBoss(d);
    }
  }
}
function drawKuti() {
  if (!IMG.i_kutikuti) return;
  for (const [e, kind] of kutiTargets()) {
    if (!e.kuti) continue;
    const hy = kind === 'b' ? 52 : kind === 'f' ? 16 : e.T.h + 6, b = Math.round(Math.sin(G.t * 6) * 1.5);
    if (e.kuti.t < 0.4 && ((G.t * 16) | 0) % 2) continue;
    ctx.drawImage(IMG.i_kutikuti, Math.round(e.x - 5), Math.round(e.y - hy - 10 + b), 10, 10);
  }
}
function updateShots(dt) {
  for (const s of G.shots) {
    s.t -= dt;
    if (s.k === 'boomer') {
      const rs = 1 + 0.1 * lv('rubber');
      if (s.out) { s.dist += Math.hypot(s.vx, s.vy) * dt; if (s.dist > 110 * rs) { s.out = false; s.hits = new Set(); stonesAt(s); } }
      else { const dx = P.x - s.x, dy = P.y - 10 - s.y, l = Math.hypot(dx, dy) || 1; s.vx = dx / l * 190 * rs; s.vy = dy / l * 190 * rs; if (l < 8) s.t = 0; }
    }
    const px0 = s.x, py0 = s.y;
    s.x += s.vx * dt; s.y += s.vy * dt;
    if (!s.enemy) { const bx = boxOnPath(px0, py0, s.x, s.y, 2); if (bx) { breakBox(bx, s.k === 'boomer' || s.k === 'blast', 'special'); if (s.k !== 'boomer') { s.t = 0; continue; } } }
    const hitProp = inProp(G.map, s.x, s.y + 10, 1);
    if (hitProp && hitProp.kind === 'box' && !s.enemy) { breakBox(hitProp, s.k === 'boomer' || s.k === 'blast', 'special'); if (s.k !== 'boomer') { s.t = 0; continue; } }
    else if (hitProp) {
      if (!s.enemy && P.boons.wallhack) {
        // Wall Hacks: your shots phase straight through, leaving a green glitch trail
        if (Math.random() < 0.6) G.fx.push({ k: 'glitch', x: s.x + rand(-3, 3), y: s.y + rand(-3, 3), t: 0.25 });
      } else if (!s.enemy && P.boons.chapteh && !s.bounced && (s.k === 'boomer' || s.k === 'blast') && (s.k !== 'boomer' || s.out)) {
        rebound(s, dt); continue;                                   // Chapteh Rebound: bounce off the wall once
      } else if (s.k === 'boomer') {
        if (s.out) { stonesAt(s); s.out = false; s.hits = new Set(); sfx('fan_catch'); for (let i = 0; i < 4; i++) G.fx.push({ k: 'spark', x: s.x, y: s.y, t: 0.25, vx: rand(-40, 40), vy: rand(-40, 0), c: '#f2c14e' }); }
      } else {
        s.t = 0; for (let i = 0; i < 4; i++) G.fx.push({ k: s.enemy ? 'smoke' : 'spark', x: s.x, y: s.y, t: 0.3, vx: rand(-30, 30), vy: rand(-30, 0), r: 2, c: '#d6f1f5' });
        if (s.k === 'blast') stonesAt(s);
        continue;
      }
    }
    if (s.enemy && (G.map.block.some(r => inR(r, s.x, s.y + (s.go || 10))) || !G.map.walk.some(r => inR(r, s.x, s.y + (s.go || 10))))) {
      // walls, posts and the edges of the floor stop ash and scrolls
      s.t = 0; for (let i = 0; i < 3; i++) G.fx.push({ k: 'smoke', x: s.x, y: s.y, t: 0.3, vx: rand(-30, 30), vy: rand(-30, 0), r: 2 }); continue;
    }
    if (s.enemy) {
      if (Math.hypot(s.x - P.x, s.y - (P.y - 8)) < s.r + 5) { hurtPlayer(s.dmg); s.t = 0; }
    } else {
      hitTargets((e, kind) => {
        if (s.t <= 0) return;
        const ty = kind === 'b' ? e.y - 22 : kind === 'f' ? e.y - 10 : e.y - e.T.h / 2;
        const rr = kind === 'b' ? 14 : kind === 'f' ? 6 : e.T.r + 2;
        if (Math.hypot(e.x - s.x, ty - s.y) < rr + s.r) {
          if (s.k === 'boomer' || s.k === 'blast') { s.hits = s.hits || new Set(); if (s.hits.has(e)) return; s.hits.add(e); }
          const dir = { x: s.vx, y: s.vy }, d = s.dmg * (s.half ? 0.5 : 1), special = s.k === 'boomer' || s.k === 'blast';
          if (kind === 'e') damage(e, d, dir); else if (kind === 'f') damageFlag(e, d); else damageBoss(d);
          if (special) addKuti(e, kind, 12);
          if (special && kind === 'e' && s.qh) { s.qh.add(e); qev('sphit', { n: s.qh.size }); if (s.k === 'boomer') qev('fanhit'); }
          // Chapteh Rebound: ricochet to a Hazed standing close by, at half damage
          const bounced = special && kind === 'e' && P.boons.chapteh && !s.bounced && (s.k !== 'boomer' || s.out) && ricochetTo(s, e);
          if (s.k !== 'boomer' && !bounced) { s.t = 0; if (s.k === 'blast') stonesAt(s); }
        }
      });
    }
    if (s.x < -10 || s.x > mapW() + 10 || s.y < -10 || s.y > mapH() + 10) s.t = 0;
    if (s.t <= 0 && s.k === 'blast') stonesAt(s);
  }
  G.shots = G.shots.filter(s => s.t > 0);
}
function drawShots() {
  for (const s of G.shots) {
    if (s.k === 'boomer') {
      ctx.save(); ctx.translate(Math.round(s.x), Math.round(s.y)); ctx.rotate(G.t * 18);
      ctx.drawImage(IMG.w_fan, -7, -7, 14, 14); ctx.restore();
    } else if (s.k === 'blast') {
      ctx.fillStyle = '#d6f1f5'; ctx.beginPath(); ctx.arc(s.x, s.y, s.r, 0, 7); ctx.fill();
      ctx.fillStyle = '#5fd3f5'; ctx.beginPath(); ctx.arc(s.x, s.y, s.r - 2, 0, 7); ctx.fill();
    } else if (s.k === 'pellet') { ctx.fillStyle = '#5fd3f5'; ctx.fillRect(s.x - 1, s.y - 1, 3, 3); }
    else if (s.k === 'stone') { ctx.fillStyle = '#0b0a0a'; ctx.fillRect(Math.round(s.x) - 2, Math.round(s.y) - 2, 4, 4); ctx.fillStyle = s.c; ctx.fillRect(Math.round(s.x) - 1, Math.round(s.y) - 1, 2, 2); }
    else if (s.k === 'ash') { ctx.fillStyle = '#33373e'; ctx.fillRect(s.x - 2, s.y - 2, 5, 5); ctx.fillStyle = '#ff7b2e'; ctx.fillRect(s.x - 1, s.y - 1, 2, 2); }
    else if (s.k === 'scroll') {
      ctx.fillStyle = '#efe6d6'; ctx.fillRect(s.x - 3, s.y - 2, 7, 4); ctx.fillStyle = '#a0612f'; ctx.fillRect(s.x - 4, s.y - 2, 1, 4); ctx.fillRect(s.x + 4, s.y - 2, 1, 4);
    }
  }
}

/* ---------------- boss: Raffles ---------------- */
const BOSS_IDLE = ['statue', 'cut', 'stone', 'dead', 'roar', 'rise', 'air', 'fall', 'leapin'];
const bossHittable = B => B && !BOSS_IDLE.includes(B.state);
function damageBoss(n, quiet) {
  const B = G.boss;
  if (G.inSiam) RS.siamDmg = true; else RS.otherDmg = true;
  // while any flag stands, nothing gets through to him
  const shielded = B && B.flagPhase && G.flags.length > 0;
  if (B && (B.state === 'stone' || shielded) && !quiet && (G.immuneT || 0) <= 0) {
    G.immuneT = 0.6; sfx('immune');
    G.fx.push({ k: 'pop', x: B.x, y: B.y - 54, t: 0.7, s: 'IMMUNE', c: '#9aa0a9' });
    if (B.flagPhase && (!G.banner || G.banner.t < 0.5)) G.banner = { t: 2, s: 'BREAK HIS FLAGS FIRST!' };
  }
  if (!bossHittable(B) || shielded || B.state === 'stone') return;
  if (B.state === 'stunned') n *= 2;
  B.hp -= n; B.flash = 0.08; if (!quiet) { sfx(G.weapon !== 'vac' ? 'slash' : 'hit'); G.fx.push({ k: 'pop', x: B.x, y: B.y - 52, t: 0.5, s: Math.round(n), c: '#ffffff' }); }
  if (B.phase === 1 && !B.flagPhase && B.hp <= B.max * 0.66) {
    // phase 2 opens: he turns to stone and plants three flags, each sends out a wisp half a second later
    B.hp = B.max * 0.66; B.flagPhase = true; B.state = 'stone'; B.t = 0; B.ringT = 0.5; G.banner = { t: 4, s: 'RAFFLES TURNS TO STONE! BREAK HIS FLAGS!' }; sfx('stone');
    G.flags = []; for (let i = 0; i < 3; i++) plantFlag(0.5);
    B.respawns = 0; B.respawnQ = []; B.flagBroken = 0;
  } else if (B.phase === 2 && B.hp <= B.max * 0.33) {
    B.hp = B.max * 0.33; B.phase = 3; B.state = 'roar'; B.t = 1.5; G.shake = 0.8; sfx('roar');
    G.banner = { t: 2.2, s: 'RAFFLES IS ENRAGED!' };
    for (const e of G.enemies) if (e.state === 'alive') { e.state = 'puff'; e.t = 2; }
  }
  if (B.hp <= 0) { B.hp = 0; B.state = 'dead'; B.t = 2.2; sfx('boss_dead'); G.flags = []; G.waves = []; G.shots = G.shots.filter(s => !s.enemy); for (const e of G.enemies) e.state = 'puff', e.t = 99; }
}
// phase 2 flags: 3 to start. Each one broken makes him plant a replacement after a delay, but only this many times in total,
// so you break between 3 (if you're quick) and 3 + this many. Clear the field and he's stunned.
const FLAG_RESPAWNS = () => cheat('baby') ? 2 : [3, 6, 9][G.psi];   // so at most 6 / 9 / 12 flags to break
const FLAG_DELAY = () => cheat('baby') ? 5 : [3, 2.5, 2][G.psi];
const STUN_TIME = () => cheat('baby') ? 3 : [2.5, 2, 1.5][G.psi];
function plantFlag(firstCd) {
  let x, y, tries = 0;
  do { x = rand(70, 250); y = rand(80, 160); tries++; } while ((Math.hypot(x - P.x, y - P.y) < 50 || Math.hypot(x - 160, y - 108) < 30) && tries < 30);
  G.flags.push({ x, y, hp: 15 * PSI[G.psi].hp, max: 15 * PSI[G.psi].hp, cd: firstCd != null ? firstCd : 4.5 + rand(0, 2), flash: 0 });
  G.fx.push({ k: 'ring', x, y: y - 8, t: 0.5 });
}
function damageFlag(f, n) {
  if (G.inSiam) RS.siamDmg = true; else RS.otherDmg = true;
  f.hp -= n; f.flash = 0.1; sfx(G.weapon !== 'vac' ? 'slash' : 'hit');
  if (f.hp <= 0) {
    sfx('flag_break'); RS.flags++; qev('flag');
    f.dead = true; for (let i = 0; i < 8; i++) G.fx.push({ k: 'smoke', x: f.x, y: f.y - 10, t: 0.6, vx: rand(-30, 30), vy: rand(-30, 0), r: 3 });
    G.flags = G.flags.filter(x => !x.dead);
    const B = G.boss;
    if (B && B.flagPhase) {
      B.flagBroken = (B.flagBroken || 0) + 1;
      if (G.flags.length === 0) { B.flagPhase = false; B.respawnQ = []; B.alt = 0; B.state = 'stunned'; B.phase = 2; B.t = STUN_TIME(); G.banner = { t: 2, s: 'STUNNED! HIT HIM NOW!' }; sfx('boon'); }
      else if (B.respawns + B.respawnQ.length < FLAG_RESPAWNS()) B.respawnQ.push(FLAG_DELAY());   // he'll put one back unless you clear the rest first
    }
  }
}
function bossMove(B, tx, ty, sp, dt) {
  const dx = tx - B.x, dy = ty - B.y, d = Math.hypot(dx, dy) || 1;
  const sx = dx / d * sp * dt, sy = dy / d * sp * dt;
  if (canStand(MAPS.arena, B.x + sx, B.y + sy)) { B.x += sx; B.y += sy; return true; }
  if (canStand(MAPS.arena, B.x + Math.sign(sx) * sp * dt, B.y)) { B.x += Math.sign(sx) * sp * dt; return true; }   // slide round the plinth
  if (canStand(MAPS.arena, B.x, B.y + Math.sign(sy || 1) * sp * dt)) { B.y += Math.sign(sy || 1) * sp * dt; return true; }
  return false;
}
function safeLanding(x, y) {
  x = clamp(x, 26, 294); y = clamp(y, 70, 168);
  if (!canStand(MAPS.arena, x, y)) y = y < 108 ? 96 : 122;
  return { x, y };
}
const CUT = { bars: 0.5, q1: 0.5, q1e: 2.3, swirl: 2.3, burst: 4.5, name: 4.5, namee: 6.9, q2: 6.9, q2e: 8.7, end: 8.9 };
const RAFF_Q1 = ['SHOW ME YOUR BADGE!', 'NOT THIS AGAIN...', 'TAKE YOUR TIME, TAKE YOUR TIME...', 'GET A MOVE ON!', 'HOW MANY TIMES DO I HAVE TO SEE THIS?', "DIDN'T I DEFEAT YOU ALREADY?", 'HURRY UP!', '快点!', 'CEPAT-CEPAT!', 'சீக்கிரம்!'];
const RAFF_Q2 = ['FOR THE ORANG LAUT!', 'BRING IT ON, RAFFLES.', 'MY GRANDMA CAN MOVE FASTER THAN YOU!', 'DID YA MISS ME?', 'I LOVE YOUR GLOWING RED EYES.', 'I PREFER YOU AS A STATUE.', "I'M GONNA SMOKE YOU.", 'YOUR VISION IS ABOUT TO GET HAZY.', 'I WONDER... HOW MUCH DO YOU WEIGH?'];
function raffLines() {
  const n = save.raffCount || 0;
  if (n === 0) return ['WHAT ARE THEY DOING?', 'THEY CAN DO THAT?!'];
  if (n === 1) return ['NOT THIS AGAIN...', 'BRING IT ON, RAFFLES.'];
  const q1 = save.wins ? RAFF_Q1 : RAFF_Q1.filter(s => s !== "DIDN'T I DEFEAT YOU ALREADY?");   // only once Raffles has actually been beaten
  return [pick(q1), pick(RAFF_Q2)];
}
function startCut() {
  const B = G.boss, L = PSI[G.psi];
  B.state = 'cut'; B.max = Math.round(600 * L.hp * (cheat('baby') ? 0.6 : 1)); B.hp = B.max;
  G.cut = { t: 0, burst: false, lines: raffLines() }; save.raffCount = (save.raffCount || 0) + 1; persist(); P.face = { x: 0, y: -1 }; P.moving = false; P.dashT = 0;
}
function updateCut(dt) {
  const C = G.cut, B = G.boss; C.t += dt;
  if (save.seenRaffles && C.t > 0.8 && hit('act') && !C.skipped) { C.skipped = true; st().skips++; checkCounts(); C.t = Math.max(C.t, CUT.end - 0.2); C.burst = true; }
  // the Hazed swirl in, feeding the statue
  if (C.t > CUT.swirl && !C.swirlSfx && !C.burst) { C.swirlSfx = true; sfx('swirl'); }
  if (C.t > CUT.swirl && C.t < CUT.burst) {
    const k = (C.t - CUT.swirl) / (CUT.burst - CUT.swirl);
    G.shake = Math.max(G.shake, 0.05 + k * 0.1);
    for (let i = 0; i < 2; i++) { const a = rand(0, 7), r = 46 * (1 - k) + 6; G.fx.push({ k: 'suck', x: 160 + Math.cos(a) * r, y: 92 + Math.sin(a) * r * 0.5, tx: 160, ty: 84, t: 0.4 }); }
    if (Math.random() < 0.5) G.fx.push({ k: 'smoke', x: 160 + rand(-20, 20), y: 100 + rand(-30, 10), t: 0.6, vx: rand(-20, 20), vy: rand(-30, -5), r: rand(2, 4) });
  }
  if (C.t >= CUT.burst - 1.3 && !C.burst && !C.rumble) { C.rumble = true; sfx('transform'); }
  if (C.t >= CUT.burst && !C.burst) {
    C.burst = true; G.shake = 0.6;
    G.fx.push({ k: 'flashw', t: 0.35 }); G.fx.push({ k: 'ring', x: 160, y: 90, t: 0.5 }); G.fx.push({ k: 'ring', x: 160, y: 90, t: 0.4, c: '#ff4a2e' });
    for (let i = 0; i < 26; i++) G.fx.push({ k: 'smoke', x: 160, y: 86, t: 0.9, vx: rand(-90, 90), vy: rand(-70, 30), r: rand(3, 6) });
  }
  if (C.t >= CUT.end) {
    G.cut = null; save.seenRaffles = true; persist(); B.state = 'leapin'; B.t = 0.55; B.x = 160; B.y = 132; B.alt = 30;
  }
}
// the jump's shadow chases Jun Jie at a set speed: a Siam or a sprint still gets you out, standing still doesn't
function bossTrack(B, dt, sp) { const tgt = safeLanding(P.x, P.y), ddx = tgt.x - B.x, ddy = tgt.y - B.y, dd = Math.hypot(ddx, ddy) || 1, st = Math.min(dd, (sp || (G.psi === 2 ? 135 : 120)) * dt); B.x += ddx / dd * st; B.y += ddy / dd * st; }
function updateBoss(dt) {
  const B = G.boss, L = PSI[G.psi];
  B.flash -= dt; B.alt = B.alt || 0; if (G.immuneT > 0) G.immuneT -= dt;
  // enraged eye trails
  if (B.phase === 3 && !['dead'].includes(B.state)) {
    for (const ox of [-4.5, 3.5]) B.trail.push({ x: B.x + ox, y: B.y - B.alt - 38.5 + (B.state === 'crouch' || B.state === 'land' ? 2 : 0), t: 0.55 });
  }
  for (const p of B.trail) p.t -= dt;
  B.trail = B.trail.filter(p => p.t > 0);
  updateWaves(dt);
  if (B.state === 'statue') {
    B.t += dt;
    if (P.y < 156 || B.t > 1.2) startCut();
    return;
  }
  if (B.state === 'cut') return;
  if (B.state === 'leapin') {
    B.t -= dt; B.alt = Math.max(0, Math.sin(B.t / 0.55 * Math.PI) * 26);
    if (B.t <= 0) { B.alt = 0; B.state = 'walk'; B.cd = 0.8; G.shake = 0.3; G.fx.push({ k: 'slam', x: B.x, y: B.y - 4, t: 0.3 }); sfx('boss'); }
    return;
  }
  if (B.state === 'dead') {
    B.t -= dt;
    if (Math.random() < 0.6) G.fx.push({ k: 'smoke', x: B.x + rand(-14, 14), y: B.y - rand(0, 44), t: 0.8, vx: rand(-30, 30), vy: rand(-40, -5), r: rand(2, 5) });
    if (B.t <= 0) { win(); if (G.coreWait && !G.dialog) updateCoreWait(dt); }
    return;
  }
  // replacement flags: each broken flag's timer runs down, then he plants a new one (only while others still stand)
  if (B.flagPhase && B.respawnQ && B.respawnQ.length) {
    for (let i = 0; i < B.respawnQ.length; i++) B.respawnQ[i] -= dt;
    while (B.respawnQ.length && B.respawnQ[0] <= 0) { B.respawnQ.shift(); B.respawns++; plantFlag(); sfx('stone'); const f = G.flags[G.flags.length - 1]; G.fx.push({ k: 'pop', x: f.x, y: f.y - 34, t: 0.8, s: 'FLAG RETURNS!', c: '#d6d1c8' }); }
  }
  // flags keep spawning wisps
  for (const f of G.flags) {
    f.cd -= dt; f.flash -= dt;
    if (f.cd <= 0) { f.cd = cheat('baby') ? 10 : (B.flagPhase ? 7 : 9) + rand(0, 1.5); if (G.enemies.filter(e => e.state === 'alive').length < [4, 5, 5][G.psi]) addEnemy('wisp', f.x + rand(-6, 6), f.y + 4, 1); }
  }
  if (B.state === 'stone') {
    // plants his feet, turns to stone (immune) and fires rings of scrolls, then walks again
    B.t += dt; B.ringT -= dt;
    if (B.ringT <= 0) { B.ringT = 1.0; scrollRing(B, G.psi === 2 ? 10 : 8, 62, B.n++ * 0.4); }
    if (B.t >= (G.psi === 2 ? 2.4 : 2.1)) { B.state = 'flagwalk'; B.t = rand(2.0, 2.8); B.cd = 0.6; G.fx.push({ k: 'ring', x: B.x, y: B.y - 24, t: 0.4 }); }
    return;
  }
  if (B.state === 'flagwalk') {
    // back to flesh and on the move: hittable, chases you, swings the cane if you get close
    const dx = P.x - B.x, dy = P.y - B.y, d = Math.hypot(dx, dy) || 1; B.flipX = dx < 0;
    B.t -= dt; B.cd -= dt;
    if (d > 24) bossMove(B, P.x, P.y, 30, dt);
    if (d < 38 && B.cd <= 0) { B.state = 'cane'; B.t = 0.6; B.after = 'flagwalk'; return; }
    if (B.t <= 0) { B.state = 'stone'; B.t = 0; B.ringT = 0.45; sfx('stone'); G.shake = 0.15; }
    return;
  }
  if (B.state === 'roar') {
    B.t -= dt;
    if (Math.random() < 0.7) G.fx.push({ k: 'spark', x: B.x + rand(-16, 16), y: B.y - rand(10, 50), vx: rand(-40, 40), vy: rand(-60, -10), t: 0.4, c: '#ff4a2e' });
    if (B.t <= 0) { B.state = 'walk'; B.cd = 0.4; }
    return;
  }
  if (B.state === 'stunned') { B.t -= dt; if (B.t <= 0) { B.state = 'walk'; B.cd = 0.6; } return; }
  const dx = P.x - B.x, dy = P.y - B.y, d = Math.hypot(dx, dy) || 1;
  if (!['air', 'fall', 'rise', 'charge'].includes(B.state)) B.flipX = dx < 0;
  const ph = B.phase;
  if (B.state === 'walk') {
    const sp = ph === 3 ? 38 : ph === 2 ? 30 : 24;
    if (d > 26) bossMove(B, P.x, P.y, sp, dt);
    B.cd -= dt;
    if (B.cd <= 0) {
      B.n++;
      const r = Math.random();
      if (ph === 2 && !cheat('baby')) { B.state = 'aim'; B.t = 0.45; B.dir = { x: dx / d, y: dy / d }; }   // phase 2 is all charges, each ending in a burst of scrolls (Baby Mode keeps the old mix)
      else if (ph === 3 && B.n % 2 === 0) { B.state = 'crouch'; B.t = 0.45; B.jumps = G.psi === 2 ? 2 : 1; }
      else if (d < 40) { B.state = 'cane'; B.t = 0.6; }
      else if (ph >= 2 && r < 0.4) { B.state = 'aim'; B.t = ph === 3 ? 0.45 : 0.6; B.dir = { x: dx / d, y: dy / d }; }
      else if (G.psi >= 1 && B.n % 3 === 0) { B.state = 'ring'; B.t = 0.6; }
      else { B.state = 'scroll'; B.t = 0.45; }
    }
    return;
  }
  B.t -= dt;
  if (B.state === 'aim') {
    B.dir = { x: B.dir.x * 0.9 + dx / d * 0.1, y: B.dir.y * 0.9 + dy / d * 0.1 }; const l = Math.hypot(B.dir.x, B.dir.y) || 1; B.dir.x /= l; B.dir.y /= l;
    if (B.t <= 0) { B.state = 'charge'; B.t = 0.45; B.hitP = false; sfx('boss_charge'); B.flipX = B.dir.x < 0; }
    return;
  }
  if (B.state === 'charge') {
    const sp = cheat('baby') ? (ph === 3 ? 280 : 230) * 0.6 : (ph === 3 ? 290 : ph === 2 ? 250 : 200);
    const moved = bossMove(B, B.x + B.dir.x * 50, B.y + B.dir.y * 50, sp, dt);
    if (Math.random() < 0.8) G.fx.push({ k: 'dust', x: B.x + rand(-8, 8), y: B.y - 2, t: 0.4, vx: -B.dir.x * 30, vy: rand(-10, 0), r: 3 });
    if (!B.hitP && Math.hypot(P.x - B.x, P.y - B.y) < 16) { B.hitP = true; hurtPlayer(L.raff); }
    if (B.t <= 0 || !moved) {
      B.state = 'walk'; B.cd = ph === 3 ? rand(0.5, 0.8) : ph === 2 && !cheat('baby') ? rand(0.7, 1.0) : rand(0.8, 1.1); if (!moved) { G.shake = 0.2; G.fx.push({ k: 'slam', x: B.x, y: B.y - 4, t: 0.25 }); }
      if (ph === 2 && !cheat('baby')) { scrollRing(B, [6, 8, 10][G.psi], 70, B.n * 0.5); sfx('boss_shot'); }   // skids to a stop and the scrolls fly out
    }
    return;
  }
  if (B.state === 'crouch') {
    if (B.t <= 0) {
      B.state = 'rise'; B.t = 0.4; sfx('jump'); G.shake = 0.15;
      for (let i = 0; i < 10; i++) G.fx.push({ k: 'dust', x: B.x + rand(-12, 12), y: B.y - 2, t: 0.5, vx: rand(-50, 50), vy: rand(-20, 0), r: 3 });
    }
    return;
  }
  if (B.state === 'rise') {
    B.alt = 240 * (1 - B.t / 0.4) ** 1.6;
    if (B.t <= 0) { B.state = 'air'; B.t = ph === 3 && G.psi === 2 && B.jumps < 2 ? 1.1 : 1.5; B.alt = 240; }
    return;
  }
  if (B.state === 'air') {
    // the shadow hunts you the whole time he's up there, and keeps coming as he drops
    // (Baby Mode keeps the old, gentler jump: it stops following for the last half second)
    if (!cheat('baby') || B.t > 0.5) bossTrack(B, dt, cheat('baby') ? 110 : 0);
    if (B.t <= 0) { B.state = 'fall'; B.t = 0.32; }
    return;
  }
  if (B.state === 'fall') {
    B.alt = 240 * (B.t / 0.32) ** 1.5;
    if (!cheat('baby')) bossTrack(B, dt, 55);   // still drifting toward you as he drops, but slowly: a Siam now gets you clear
    if (B.t <= 0) {
      { const s2 = safeLanding(B.x, B.y); B.x = s2.x; B.y = s2.y; }
      B.alt = 0; G.shake = 0.5; sfx('boss');
      G.fx.push({ k: 'slam', x: B.x, y: B.y - 4, t: 0.35 });
      for (let i = 0; i < 16; i++) G.fx.push({ k: 'smoke', x: B.x + rand(-10, 10), y: B.y - 4, t: 0.7, vx: rand(-80, 80), vy: rand(-40, 0), r: rand(3, 5) });
      if (Math.hypot(P.x - B.x, (P.y - B.y) * 1.4) < 28) hurtPlayer(Math.max(2, L.raff));
      G.waves.push({ x: B.x, y: B.y, r: 12, max: G.psi === 2 ? 110 : 90, spd: 78, gap: rand(0, Math.PI * 2), gw: 0.9, hit: false });
      B.jumps--;
      if (B.jumps > 0) { B.state = 'crouch'; B.t = 0.35; }
      else { B.state = 'land'; B.t = 0.7; }       // short recovery: your window to punish
    }
    return;
  }
  if (B.state === 'land') { if (B.t <= 0) { B.state = 'walk'; B.cd = rand(0.5, 0.8); } return; }
  if (B.t <= 0) {
    if (B.state === 'cane') {
      G.fx.push({ k: 'slam', x: B.x, y: B.y - 4, t: 0.3 }); G.shake = 0.25; sfx('cane'); sfx('brute_slam');
      if (Math.hypot(P.x - B.x, P.y - B.y) < 32) hurtPlayer(L.raff);
    } else if (B.state === 'scroll') {
      const n = (ph === 1 ? 3 : 5) - (cheat('baby') ? (ph === 1 ? 1 : 2) : 0), base = Math.atan2(P.y - 8 - (B.y - 30), P.x - B.x);
      for (let i = 0; i < n; i++) { const a = base + (i - (n - 1) / 2) * 0.28; G.shots.push({ k: 'scroll', go: 30, x: B.x, y: B.y - 30, vx: Math.cos(a) * 95, vy: Math.sin(a) * 95, t: 3, dmg: G.psi === 2 ? 2 : 1, enemy: true, r: 3 }); }
      sfx('shoot');
    } else if (B.state === 'flag') { if (!B.flagPhase) plantFlag(); }
    else if (B.state === 'ring') { scrollRing(B, 10, 80, 0); }
    if (B.flagPhase) { B.state = 'flagwalk'; B.t = rand(1.0, 1.6); B.cd = 1.4; return; }
    B.state = 'walk'; B.cd = ph === 3 ? rand(0.6, 0.9) : ph === 2 ? rand(0.8, 1.2) : rand(1.0, 1.5);
  }
}
function scrollRing(B, n, sp, off) {
  if (cheat('baby')) n = Math.max(4, Math.round(n * 0.6));
  for (let i = 0; i < n; i++) { const a = off + i / n * Math.PI * 2; G.shots.push({ k: 'scroll', go: 24, x: B.x, y: B.y - 24, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, t: 3.5, dmg: 1, enemy: true, r: 3 }); }
  sfx('shoot');
}
function updateWaves(dt) {
  for (const w of G.waves) {
    w.r += w.spd * dt;
    const dx = P.x - w.x, dy = (P.y - w.y) / 0.55, d = Math.hypot(dx, dy);
    let ang = Math.atan2(dy, dx) - w.gap; ang = Math.atan2(Math.sin(ang), Math.cos(ang));
    if (!w.hit && Math.abs(d - w.r) < 6 && Math.abs(ang) > w.gw / 2) {
      const was = P.half; hurtPlayer(1); if (P.half < was) w.hit = true;
    }
    if (Math.random() < 0.9) { const a = rand(0, 7); let rel = Math.atan2(Math.sin(a - w.gap), Math.cos(a - w.gap)); if (Math.abs(rel) > w.gw / 2) G.fx.push({ k: 'smoke', x: w.x + Math.cos(a) * w.r, y: w.y + Math.sin(a) * w.r * 0.55 - 2, t: 0.35, vx: Math.cos(a) * 20, vy: -8, r: 2.5 }); }
  }
  G.waves = G.waves.filter(w => w.r < w.max);
}
function drawWaves() {
  for (const w of G.waves) {
    const fade = clamp((w.max - w.r) / 30, 0, 1), steps = 64;
    for (let i = 0; i < steps; i++) {
      const a = i / steps * Math.PI * 2; let rel = Math.atan2(Math.sin(a - w.gap), Math.cos(a - w.gap));
      if (Math.abs(rel) < w.gw / 2) continue;
      const x = w.x + Math.cos(a) * w.r, y = w.y + Math.sin(a) * w.r * 0.55;
      ctx.fillStyle = `rgba(38,40,45,${0.8 * fade})`; ctx.fillRect(Math.round(x) - 2, Math.round(y) - 3, 5, 4);
      ctx.fillStyle = `rgba(150,156,166,${0.9 * fade})`; ctx.fillRect(Math.round(x) - 1, Math.round(y) - 3, 3, 2);
    }
  }
}
function drawCult(front) {
  // the Hazed bowing around the clean marble statue, then spiralling into it
  const C = G.cut, t = C ? C.t : 0;
  if (C && C.t >= CUT.burst) return;
  const k = C && t > CUT.swirl ? (t - CUT.swirl) / (CUT.burst - CUT.swirl) : 0;
  const spin = G.t * 0.4 + k * k * 14, rx = 46 * (1 - k * 0.92), ry = 18 * (1 - k * 0.92);
  const list = ['wisp', 'spitter', 'wisp', 'brute', 'spitter', 'wisp'];
  const items = list.map((tp, i) => { const a = spin + i / list.length * Math.PI * 2; return { tp, x: 160 + Math.cos(a) * rx, y: 104 + Math.sin(a) * ry, i }; }).sort((a, b) => a.y - b.y);
  for (const c of items) {
    if (front !== undefined && (c.y >= 104) !== front) continue;   // the ones in front of the statue are drawn over him
    const bow = k ? 0 : (Math.sin(G.t * 3 + c.i) > 0 ? 2 : 0);
    const lift = k * 26;
    shadowAt(c.x, c.y - 1, 5, 2, 0.3 * (1 - k));
    spr(c.tp, c.x, c.y + bow - lift, { alpha: 1 - k * 0.85, flip: c.x > 160 });
  }
}
function drawBoss() {
  const B = G.boss;
  if (B.state === 'statue' || B.state === 'cut') {
    const C = G.cut, t = C ? C.t : 0;
    const k = clamp((t - (CUT.swirl + 1)) / (CUT.burst - CUT.swirl - 1), 0, 1);
    const sh = C && t > CUT.swirl && t < CUT.burst ? Math.round(rand(-1, 1)) : 0;
    if (!C || t < CUT.burst) spr('raffles_A', 160 + sh, 113);
    if (k > 0) spr('raffles_full', 160 + sh, 113, { alpha: t >= CUT.burst ? 1 : k });
    if (C && t >= CUT.burst) { spr('raffles_full', 160, 113); if (((G.t * 6) | 0) % 2) { eyeGlow(160 - 4.5, 113 - 59 + 10.5); eyeGlow(160 + 3.5, 113 - 59 + 10.5); } }
    return;
  }
  spr('plinth', 160, 113);
  for (const f of G.flags) {
    shadowAt(f.x + 2, f.y, 4);
    ctx.fillStyle = '#3a3936'; ctx.fillRect(f.x, f.y - 26, 1, 26);
    ctx.fillStyle = f.flash > 0 ? '#ffffff' : '#5d6270';
    ctx.beginPath(); ctx.moveTo(f.x + 1, f.y - 26); ctx.lineTo(f.x + 13, f.y - 23 + Math.sin(G.t * 6) * 1.5); ctx.lineTo(f.x + 9, f.y - 20); ctx.lineTo(f.x + 13, f.y - 17); ctx.lineTo(f.x + 1, f.y - 18); ctx.fill();
    ctx.fillStyle = 'rgba(143,148,154,0.7)'; ctx.fillRect(f.x + 4 + Math.sin(G.t * 3) * 2, f.y - 30 - ((G.t * 10) % 6), 2, 2);
    // health bar under the flag
    ctx.fillStyle = '#0b0a0a'; ctx.fillRect(f.x - 6, f.y + 3, 16, 4); ctx.fillStyle = '#3a3630'; ctx.fillRect(f.x - 5, f.y + 4, 14, 2);
    ctx.fillStyle = '#f2c14e'; ctx.fillRect(f.x - 5, f.y + 4, Math.round(14 * clamp(f.hp / (f.max || 1), 0, 1)), 2);
    if (B.flagPhase) {
      // bouncing arrow + HIT! label so nobody misses them
      const by = f.y - 40 + Math.round(Math.sin(G.t * 7 + f.x) * 2);
      ctx.fillStyle = '#0b0a0a'; ctx.beginPath(); ctx.moveTo(f.x - 4, by - 1); ctx.lineTo(f.x + 8, by - 1); ctx.lineTo(f.x + 2, by + 7); ctx.fill();
      ctx.fillStyle = '#f2c14e'; ctx.beginPath(); ctx.moveTo(f.x - 2, by); ctx.lineTo(f.x + 6, by); ctx.lineTo(f.x + 2, by + 5); ctx.fill();
      if (((G.t * 3) | 0) % 2) outlined('HIT!', f.x - 5, by - 8, '#f2c14e');
    }
  }
  if (B.state === 'dead') {
    // the haze pours out of him and leaves the plain stone statue standing where he fell
    const k = clamp(B.t / 2.2, 0, 1);
    shadowAt(B.x, B.y - 1, 14);
    ctx.drawImage(IMG.raffles_A, 0, 0, 42, 49, Math.round(B.x - 21), Math.round(B.y - 49), 42, 49);
    if (k > 0) spr('raffles', B.x, B.y, { alpha: k, flip: B.flipX });
    return;
  }
  if (B.state === 'cane') { ctx.strokeStyle = `rgba(216,50,42,${0.4 + 0.4 * Math.sin(G.t * 30)})`; ctx.beginPath(); ctx.ellipse(B.x, B.y - 2, 32, 12, 0, 0, 7); ctx.stroke(); }
  if (B.state === 'aim') {
    ctx.fillStyle = `rgba(216,50,42,${0.5 + 0.4 * Math.sin(G.t * 30)})`;
    for (let i = 2; i < 18; i++) if (i % 2) ctx.fillRect(Math.round(B.x + B.dir.x * i * 6), Math.round(B.y - 4 + B.dir.y * i * 6), 2, 2);
  }
  // shadow: small when he is high, swelling as he drops
  const air = ['rise', 'air', 'fall'].includes(B.state);
  if (!air) shadowAt(B.x, B.y - 1, 14);
  drawBossBody(B);
}
function drawBossShadow() {
  const B = G.boss;
  {
    const h = clamp(B.alt / 240, 0, 1), r = 8 + (1 - h) * 14;
    const locked = B.state === 'fall' || (B.state === 'air' && B.t <= (cheat('baby') ? 0.5 : 0.3));   // the red-and-gold ring: he's about to land
    shadowAt(B.x, B.y - 1, r, r * 0.4, 0.45 + (1 - h) * 0.35);
    if (!locked) { ctx.strokeStyle = 'rgba(20,18,16,0.5)'; ctx.beginPath(); ctx.ellipse(B.x, B.y - 1, r + 4 + Math.sin(G.t * 10), (r + 4) * 0.4, 0, 0, 7); ctx.stroke(); }
    if (locked) { ctx.strokeStyle = ((G.t * 16) | 0) % 2 ? '#ff4a2e' : '#ffd45a'; ctx.beginPath(); ctx.ellipse(B.x, B.y - 1, 26, 10, 0, 0, 7); ctx.stroke(); }
  }
}
function drawBossBody(B) {
  // enraged: red trails streaming from his eyes
  for (const p of B.trail) { ctx.fillStyle = `rgba(255,74,46,${p.t * 1.6})`; ctx.fillRect(Math.round(p.x) - 1, Math.round(p.y), 2, 2); ctx.fillStyle = `rgba(255,208,176,${p.t})`; ctx.fillRect(Math.round(p.x), Math.round(p.y), 1, 1); }
  const stone = B.state === 'stone';
  const squash = B.state === 'crouch' || B.state === 'land' ? 2 : 0;
  const by = B.y - B.alt + squash;
  if (by > -10) {
    spr('raffles', B.x, by, { flip: B.flipX, flash: B.flash > 0 || (stone && ((G.t * 4) | 0) % 2 === 0) || (B.state === 'roar' && ((G.t * 12) | 0) % 2 === 0) });
    if (B.phase === 3 || B.state === 'aim' || B.state === 'charge') { eyeGlow(B.x - 4.5, by - 38.5); eyeGlow(B.x + 3.5, by - 38.5); }
  }
  if (B.state === 'stunned') for (let i = 0; i < 3; i++) { const a = G.t * 5 + i * 2.1; ctx.fillStyle = '#ffd45a'; ctx.fillRect(B.x + Math.cos(a) * 10, B.y - 52 + Math.sin(a) * 3, 2, 2); }
}
function eyeGlow(x, y) {
  ctx.fillStyle = 'rgba(255,74,46,0.35)'; ctx.fillRect(Math.round(x) - 2, Math.round(y) - 1, 5, 3);
  ctx.fillStyle = '#ff4a2e'; ctx.fillRect(Math.round(x) - 1, Math.round(y), 2, 1); ctx.fillStyle = '#ffd0b0'; ctx.fillRect(Math.round(x), Math.round(y), 1, 1);
}
function bubble(s, x, y) {
  const lines = wrap(s, 120), w = Math.max(...lines.map(l => textW(l))) + 10, h = lines.length * 8 + 6;
  const x0 = Math.round(clamp(x - w / 2, 4, W - w - 4)), y0 = Math.round(y - h - 6);
  ctx.fillStyle = '#0b0a0a'; ctx.fillRect(x0 - 1, y0 - 1, w + 2, h + 2);
  ctx.fillStyle = '#f4f3ee'; ctx.fillRect(x0, y0, w, h);
  ctx.fillStyle = '#0b0a0a'; ctx.beginPath(); ctx.moveTo(x - 4, y0 + h); ctx.lineTo(x + 4, y0 + h); ctx.lineTo(x, y0 + h + 6); ctx.fill();
  ctx.fillStyle = '#f4f3ee'; ctx.beginPath(); ctx.moveTo(x - 3, y0 + h - 1); ctx.lineTo(x + 3, y0 + h - 1); ctx.lineTo(x, y0 + h + 4); ctx.fill();
  lines.forEach((l, i) => text(l, x0 + 5, y0 + 4 + i * 8, '#24211c', 1, null));
}
function drawCutOverlay() {
  const C = G.cut; if (!C) return;
  const t = C.t, bar = Math.round(18 * clamp(Math.min(t / CUT.bars, (CUT.end - t) / 0.3), 0, 1));
  ctx.fillStyle = '#0b0a0a'; ctx.fillRect(0, 0, W, bar); ctx.fillRect(0, H - bar, W, bar);
  if (t > CUT.q1 && t < CUT.q1e) bubble(C.lines[0], P.x, P.y - 28);
  if (t > CUT.q2 && t < CUT.q2e) bubble(C.lines[1], P.x, P.y - 28);
  if (t > CUT.name && t < CUT.namee) {
    // Hades-style name card: a slash of colour, then the name slams in
    const k = clamp((t - CUT.name) / 0.25, 0, 1), out = clamp((CUT.namee - t) / 0.3, 0, 1);
    const y = 28, w = Math.round(W * k);
    ctx.globalAlpha = out;
    ctx.fillStyle = 'rgba(11,10,10,0.8)'; ctx.fillRect(0, y - 4, w, 34);
    ctx.fillStyle = '#d8322a'; ctx.fillRect(0, y - 4, w, 1); ctx.fillRect(W - w, y + 29, w, 1);
    if (k >= 1) {
      const sl = clamp((t - CUT.name - 0.25) / 0.15, 0, 1), sc = 3, nm = 'SIR STAMFORD RAFFLES';
      outlined(nm, Math.round(160 - textW(nm, 2) / 2 + (1 - sl) * 30), y, '#efe6d6', 2);
      if (t > CUT.name + 0.6) textC('THE FOUNDER, HAZED', 160, y + 19, '#e8a25c');
    }
    ctx.globalAlpha = 1;
  }
  if (save.seenRaffles && t > 0.8 && t < CUT.end - 0.3) text('ENTER: SKIP', W - 4 - textW('ENTER: SKIP'), H - 12, '#6d6862');
}

/* ---------------- revive (like Death Defiance) ---------------- */
const REV = { pop: 0.35, use: 0.95, heal: 1.25, up: 1.6, end: 1.9 };
function updateRevive(dt) {
  // the world holds its breath: nothing moves, the revive item pops up, is used, and he gets back up with 1 mask
  const R = G.revive; R.t += dt; P.ghosts = []; P.moving = false;
  if (R.t >= REV.pop && !R.popped) { R.popped = true; sfx(R.src === 'oil' ? 'revive_oil' : 'revive_mask'); }
  if (R.t >= REV.use && !R.used) { R.used = true; for (let i = 0; i < 12; i++) G.fx.push({ k: 'spark', x: P.x + rand(-4, 4), y: P.y - 34 + rand(-4, 4), vx: rand(-40, 40), vy: rand(-40, 10), t: 0.5, c: R.src === 'oil' ? '#7fc48a' : '#ffd45a' }); }
  if (R.t >= REV.heal && !R.healed) {
    R.healed = true; P.half = 2; sfx('heal'); G.shake = 0.3;
    G.fx.push({ k: 'ring', x: P.x, y: P.y - 8, t: 0.5, c: '#ffd45a' }); G.fx.push({ k: 'ring', x: P.x, y: P.y - 8, t: 0.4, c: '#ffffff' });
    G.fx.push({ k: 'mask', x: P.x, y: P.y - 22, vy: -16, vx: 0, t: 0.9 });
    // a breath of clean air: nearby Hazed are blown back and their shots vanish
    for (const e of G.enemies) { const dx = e.x - P.x, dy = e.y - P.y, d = Math.hypot(dx, dy) || 1; if (d < 70 && e.state === 'alive') { e.vx += dx / d * 260; e.vy += dy / d * 260; e.atk = ''; e.stun = 0.6; } }
    G.shots = G.shots.filter(s => !s.enemy); if (G.waves) G.waves = [];
  }
  if (R.t >= REV.end) {
    G.revive = null; P.inv = 2;
    G.banner = { t: 2.2, s: (R.src === 'oil' ? 'MEDICATED OIL! ' : 'EXTRA MASK! ') + 'BACK ON YOUR FEET' + (G.revives ? ' - ' + G.revives + ' LEFT' : '') };
  }
}
function drawRevivePlayer() {
  // down on one knee and flickering, then rises once the mask is back
  const t = G.revive.t, kneel = t < REV.heal ? 3 : Math.round(3 * (1 - clamp((t - REV.heal) / (REV.up - REV.heal), 0, 1)));
  shadowAt(P.x, P.y - 1, 6);
  const im = IMG[heroName()];
  ctx.save(); ctx.translate(Math.round(P.x), Math.round(P.y)); if (P.flip) ctx.scale(-1, 1);
  if (kneel) ctx.drawImage(im, 0, 0, 16, 24, -8, -24 + kneel, 16, 24 - kneel); else ctx.drawImage(im, -8, -24);
  ctx.restore();
  if (t < REV.heal && ((t * 10) | 0) % 2) { ctx.globalAlpha = 0.5; spr(heroName(), P.x, P.y + kneel, { flip: P.flip, flash: true }); ctx.globalAlpha = 1; }
}
function drawReviveWorld() {
  // drawn in world space over Jun Jie: the item rises, glows and is used up
  const R = G.revive, t = R.t, x = P.x, y = P.y;
  const icon = R.src === 'oil' ? IMG.it_oil : IMG.mask_gold;
  if (t > 0.15 && t < REV.heal + 0.1) {
    const k = clamp((t - 0.15) / 0.25, 0, 1), bounce = Math.sin(k * Math.PI) * 4, used = clamp((t - REV.use) / 0.3, 0, 1);
    const sz = Math.round((16 + 8 * (1 - used)) * (0.4 + 0.6 * k)), iy = y - 40 - bounce + used * 22;
    ctx.globalAlpha = 1 - used * 0.9;
    ctx.fillStyle = R.src === 'oil' ? 'rgba(127,196,138,0.35)' : 'rgba(255,212,90,0.35)'; ctx.beginPath(); ctx.arc(x, iy, sz * 0.75, 0, 7); ctx.fill();
    ctx.drawImage(icon, Math.round(x - sz / 2), Math.round(iy - sz / 2), sz, sz);
    ctx.globalAlpha = 1;
  }
}
function drawReviveOverlay() {
  // everything else dims to grey while time stands still
  const R = G.revive, t = R.t, a = t < REV.up ? clamp(t / 0.25, 0, 1) : clamp(1 - (t - REV.up) / 0.3, 0, 1);
  ctx.fillStyle = `rgba(20,18,16,${0.55 * a})`; ctx.fillRect(0, 0, W, H);
  // Jun Jie and the item stay bright on top of the dimmed world
  ctx.save(); ctx.translate(-camX(), -camY()); drawRevivePlayer(); drawReviveWorld(); ctx.restore();
  if (t > REV.heal && t < REV.heal + 0.12) { ctx.fillStyle = 'rgba(255,240,200,0.5)'; ctx.fillRect(0, 0, W, H); }
  const line = R.src === 'oil' ? 'MEDICATED OIL!' : 'EXTRA MASK!';
  if (t > REV.pop) { ctx.globalAlpha = a; outlined(line, Math.round(160 - textW(line, 2) / 2), 26, R.src === 'oil' ? '#9cc24a' : '#f2c14e', 2); ctx.globalAlpha = 1; }
}

/* ---------------- mamak shop ---------------- */
function updateShop(dt) {
  const Sh = G.shop;
  if (Sh.talk) { Sh.talk.t -= dt; if (Sh.talk.t <= 0) Sh.talk = null; }
  Sh.tin = Math.max(0, Sh.tin - dt);
  Sh.near = null; let bd = 18;
  for (const it of Sh.items) if (!it.sold) { const d = Math.hypot(P.x - it.x, P.y - (it.y + 8)); if (d < bd) { bd = d; Sh.near = it; } }
  if (Sh.near && hit('act')) buyItem(Sh.near);
  if (!Sh.near && Math.hypot(P.x - 168, P.y - 84) < 22 && hit('act')) Sh.talk = { s: pick(MAMA_LINES.hello), t: 3 };
}
function buyItem(it) {
  const Sh = G.shop;
  if (G.coins < it.price) { Sh.talk = { s: pick(MAMA_LINES.poor), t: 2.6 }; sfx('no_money'); G.shake = 0.08; return; }
  G.coins -= it.price; it.sold = true; Sh.tin = 0.8; sfx('buy'); RS.shopBuys++; qev('shopbuy'); if (Sh.items.every(x => x.sold)) achGet('atas');
  Sh.talk = { s: pick(MAMA_LINES.buy), t: 2 };
  // coins fly from Jun Jie up to the uncle's tin can
  for (let i = 0; i < Math.min(8, 2 + it.price / 15); i++) G.fx.push({ k: 'fly', img: 'coin', scale: 0.5, x: P.x, y: P.y - 14, tx: () => 184, ty: () => 64, t: 0.35 + i * 0.05, T: 0.35 + i * 0.05 });
  G.fx.push({ k: 'fly', img: it.icon, scale: 1, x: it.x, y: it.y - 14, tx: () => P.x, ty: () => P.y - 30, t: 0.4, T: 0.4, then: () => applyItem(it) });
}
function applyItem(it) {
  if (it.k === 'candy' || it.k === 'kacang' || it.k === 'kopi') { RS.meals = (RS.meals || 0) + 1; if (RS.meals >= 5) achGet('full_stomach'); }
  if (it.k === 'candy' || it.k === 'kacang') {
    const before = P.half; P.half = it.k === 'kacang' ? P.max : Math.min(P.max, P.half + 2);
    G.fx.push({ k: 'eat', icon: it.icon, t: 1.0 });
    G.fx.push({ k: 'pop', x: P.x, y: P.y - 34, t: 0.9, s: it.k === 'kacang' ? 'FULL HEALTH!' : '+1 MASK', c: '#9cc24a' });
    for (let i = 0; i < Math.max(1, (P.half - before) / 2); i++) G.fx.push({ k: 'mask', x: P.x + rand(-8, 8), y: P.y - 20, vy: -18, vx: 0, t: 0.9 });
  } else if (it.k === 'oil') {
    G.revives++; (G.reviveSrc = G.reviveSrc || []).push('oil'); G.fx.push({ k: 'eat', icon: it.icon, t: 1.0 }); sparkle(P.x, P.y - 12, '#7fc48a');
    G.fx.push({ k: 'pop', x: P.x, y: P.y - 34, t: 0.9, s: '+1 REVIVE', c: '#9cc24a' });
  } else if (it.k === 'kopi') {
    P.kopi = true; G.fx.push({ k: 'eat', icon: it.icon, t: 1.0 }); G.fx.push({ k: 'pop', x: P.x, y: P.y - 34, t: 0.9, s: 'SHIOK! FASTER', c: '#e8a25c' });
  } else if (it.k === 'tikam') {
    const pool = Object.keys(BOONS).filter(k => !BOONS[k].instant && boonOpen(k));
    const k = pool.length ? pick(pool) : 'curry';
    sparkle(P.x, P.y - 12, '#d23b33');
    G.banner = { t: 2.6, s: 'TIKAM! ' + grantBoon(k) };
  }
}
function drawShopLayer(list) {
  const Sh = G.shop;
  // uncle behind his folding table, tin can on a string that drops when you pay
  list.push({ y: 74, d: () => {
    const bob = ((G.t * 1.5) | 0) % 2;
    spr('mama', 168, 74 + (Sh.talk ? -bob : 0), { flip: P.x < 168 });
    const ty = 64 + Math.round(Math.sin(Math.min(1, Sh.tin / 0.8) * Math.PI) * 10);
    ctx.fillStyle = '#c9b68f'; ctx.fillRect(184, 55, 1, ty - 55);
    ctx.fillStyle = '#0b0a0a'; ctx.fillRect(181, ty, 7, 7); ctx.fillStyle = '#9aa0a9'; ctx.fillRect(182, ty + 1, 5, 5); ctx.fillStyle = '#d9dde3'; ctx.fillRect(182, ty + 2, 5, 1);
  } });
  for (const it of Sh.items) list.push({ y: it.y - 1, d: () => {
    if (it.sold) { outlined('SOLD', it.x - 7, it.y - 6, '#f4f3ee'); return; }
    const near = Sh.near === it, im = IMG[it.icon], bob = near ? Math.round(Math.sin(G.t * 6)) : 0;
    if (near) { ctx.fillStyle = 'rgba(255,220,140,0.3)'; ctx.beginPath(); ctx.arc(it.x, it.y - 14, 12, 0, 7); ctx.fill(); }
    ctx.drawImage(im, Math.round(it.x - im.width / 2), it.y - 8 - im.height + bob);
    // price tag: coin, a gap, then the number, on a tag big enough to read
    const ps = String(it.price), pw = textW(ps) + 17, can = G.coins >= it.price, tx = Math.round(it.x - pw / 2);
    ctx.fillStyle = '#0b0a0a'; ctx.fillRect(tx - 1, it.y + 1, pw + 2, 11);
    ctx.fillStyle = can ? '#f4ead2' : '#a89a88'; ctx.fillRect(tx, it.y + 2, pw, 9);
    ctx.drawImage(IMG.coin, 1, 1, 14, 14, tx + 2, it.y + 3, 7, 7);
    text(ps, tx + 13, it.y + 4, can ? '#24211c' : '#6d4a4a', 1, null);
  } });
}
function drawShopUI() {
  const Sh = G.shop;
  if (Sh.talk) bubble(Sh.talk.s, 168, 48);
  const it = Sh.near;
  if (it) {
    // Hades-style item card along the bottom
    const can = G.coins >= it.price;
    const dl = wrap(it.desc, 196).slice(0, 2), y0 = 152 - dl.length * 8;
    panel(36, y0 - 6, 284, 178, can ? '#f2c14e' : '#6d6862');
    ctx.drawImage(IMG[it.icon], 42, y0 + 2);
    text(it.name, 66, y0 - 2, '#f2c14e'); dl.forEach((l, i) => text(l, 66, y0 + 8 + i * 8, '#f4ead2'));
    keyChip('E', can ? 'BUY' : 'NOT ENOUGH COINS', 66, 166, can ? '#f2c14e' : '#6d6862');
    const ps = String(it.price), px = 278 - textW(ps); ctx.drawImage(IMG.coin, 1, 1, 14, 14, px - 11, 166, 8, 8); text(ps, px, 167, can ? '#f2c14e' : '#a89a88');
  }
}

/* ---------------- room flow ---------------- */
function updateRun(dt) {
  G.timeInRoom += dt;
  if (!G.boon && !G.cut) qTick(dt);
  if (G.boon) return updateBoon();
  if (P.hurtFlash > 0) P.hurtFlash -= dt;
  if (G.cut) { updateCut(dt); P.ghosts = []; P.moving = false; return; }
  if (G.revive) { updateRevive(dt); return; }
  if (P.inv > 0) P.inv -= dt;
  movePlayer(dt, true);
  if (G.tut) tutTick(dt);
  updateAttacks(dt);
  if (G.spawnT > 0) { G.spawnT -= dt; if (G.spawnT <= 0) spawnWave(); }
  updateEnemies(dt);
  // first run only: Jun Jie's first look at the Hazed, once the first wave has finished forming
  if (save.runCount === 1 && G.room === 1 && !G.sawHazed && G.wave >= 1 && G.enemies.length && G.enemies.every(e => e.spawn <= 0)) {
    G.sawHazed = true; const img = P.masked ? 'hero' : 'hero_nm';
    say(img, 'JUN JIE', 'WOAH, SO THIS IS WHAT THEY LOOK LIKE...', () => say(img, 'JUN JIE', "IMMA BEAT YOU GUYS UP!"));
  }
  // first run only: Jun Jie's first look at a brute
  if (save.runCount === 1 && !G.sawBrute && !G.dialog && G.enemies.some(e => e.type === 'brute' && e.state === 'alive' && e.spawn <= 0)) {
    G.sawBrute = true; say(P.masked ? 'hero' : 'hero_nm', 'JUN JIE', "WOW, THAT'S ONE BIG BOY...");
  }
  if (G.boss) updateBoss(dt);
  updateShots(dt);
  // pickups
  for (const p of G.pickups) {
    p.t += dt;
    const d = Math.hypot(p.x - P.x, p.y - P.y);
    if (p.vx) { p.x += p.vx * dt; p.y += p.vy * dt; p.vx *= Math.pow(0.02, dt); p.vy *= Math.pow(0.02, dt); if (Math.abs(p.vx) < 2) p.vx = 0; }
    if ((p.k === 'air' || p.k === 'coin') && p.t > 0.35) {
      if (G.cleared && G.room <= FIGHT_ROOMS) { const v = Math.max(200, d * 5) * dt, l = d || 1; p.x += (P.x - p.x) / l * Math.min(v, l); p.y += (P.y - p.y) / l * Math.min(v, l); p.vx = 0; p.vy = 0; }   // room done: everything flies to you
      else if (d < (p.k === 'coin' ? 46 : 40)) { p.x += (P.x - p.x) * 7 * dt; p.y += (P.y - p.y) * 7 * dt; }
    }
    if (p.k === 'meal' && d < 10 && P.half >= P.max) continue;     // saved for later if you are already full
    if (p.locked) continue;
    if (d < 10 && !(p.k === 'coin' && p.t < 0.35)) {
      p.got = true; if (p.k === 'air') sfx('clean_air'); else if (p.k === 'meal') sfx('heal'); else if (p.k !== 'coin' && p.k !== 'reward') sfx('menu_select');
      if (p.k === 'meal') {
        RS.meals = (RS.meals || 0) + 1; if (RS.meals >= 5) achGet('full_stomach');
        P.half = Math.min(P.max, P.half + 2); G.fx.push({ k: 'eat', icon: 'i_rice', t: 0.8 });
        G.fx.push({ k: 'pop', x: P.x, y: P.y - 34, t: 0.8, s: '+1 MASK', c: '#9cc24a' }); G.fx.push({ k: 'mask', x: P.x, y: P.y - 20, vy: -18, vx: 0, t: 0.9 });
      }
      if (p.k === 'coin') { G.coins += p.n; G.stats.coins += p.n; G.coinPop = 0.25; sfx('coin'); qev('coin', { n: p.n }); }
      if (p.k === 'air') { save.cleanAir += p.n; G.stats.air += p.n; persist(); G.fx.push({ k: 'pop', x: P.x, y: P.y - 30, t: 0.6, s: '+' + p.n + ' AIR', c: '#bdefff' }); }
      if (p.k === 'reward') {
        if (p.r === 'boon') { if (p.pair) { G.pairOther = G.pickups.find(o => o !== p && o.pair && !o.got); if (G.pairOther) G.pairOther.locked = true; } openBoon(p.pat); if (G.tut && G.tut.stage === 'orb') tutPowerTalk(); }
        else if (p.r === 'prata') openPrata();
        else if (p.r === 'pouch') { const c = [30, 40, 50][G.psi]; G.coins += c; G.stats.coins += c; G.coinPop = 0.4; qev('coin', { n: c }); sfx('coin'); sfx('buy'); G.banner = { t: 2, s: 'ANG BAO! +' + c + ' COINS' }; for (let i = 0; i < 8; i++) G.fx.push({ k: 'spark', x: P.x, y: P.y - 14, vx: rand(-60, 60), vy: rand(-70, -10), t: 0.5, c: i % 2 ? '#f2c14e' : '#d23b33' }); G.rewardTaken = true; G.doorOpen = true; }
        else { const a = 8 + 2 * G.psi; save.cleanAir += a; G.stats.air += a; persist(); qev('airreward'); G.banner = { t: 2, s: 'CLEAN AIR +' + a }; G.rewardTaken = true; G.doorOpen = true; }
      }
    }
  }
  G.pickups = G.pickups.filter(p => !p.got);
  // clear check
  if (G.room <= FIGHT_ROOMS && !G.cleared && G.spawnT <= 0 && G.enemies.length === 0 && G.wave >= WAVES) {
    G.cleared = true; G.stats.rooms++; qOnRoomClear();
    const [rx, ry] = G.map.reward;
    placeRoomReward(rx, ry);
    G.banner = { t: 1.5, s: 'ROOM CLEARED' }; sfx('room_clear'); sfx('reward_appear');
    for (let i = 0; i < 4; i++) G.pickups.push({ k: 'coin', x: rx + rand(-6, 6), y: ry + 16, n: 1, t: 0, vx: rand(-60, 60), vy: rand(-20, 30) });
  } else if (G.room <= FIGHT_ROOMS && !G.cleared && G.spawnT <= 0 && G.enemies.length === 0 && G.wave < WAVES) {
    G.spawnT = 1.1; sfx('wave');
  }
  if (G.shop) updateShop(dt);
  if (G.doorOpen && atDoor()) nextRoom();
  updateCam(dt);
  if (hit('pause') || pauseClicked()) { G.paused = true; sfx('pause'); }
}
function atDoor() {
  const d = G.map.door; if (!d) return false;
  if (d.side === 'top') return P.y < d.y + d.h + 10 && Math.abs(P.x - (d.x + d.w / 2)) < d.w / 2;
  return P.x > d.x + 2 && P.y > d.y - 2 && P.y < d.y + d.h + 5;
}
function updateCam(dt, snap) {
  if (!G.cam) G.cam = { x: 0, y: 0 };
  const tx = clamp(P.x - W / 2, 0, Math.max(0, mapW() - W)), ty = clamp(P.y - 12 - H / 2, 0, Math.max(0, mapH() - H));
  const k = snap ? 1 : Math.min(1, dt * 7);
  G.cam.x += (tx - G.cam.x) * k; G.cam.y += (ty - G.cam.y) * k;
}
const camX = () => Math.round(G.cam ? G.cam.x : 0), camY = () => Math.round(G.cam ? G.cam.y : 0);
const PAUSE_BTN = { x0: W - 78, y0: 3, x1: W - 67, y1: 14 };
function pauseClicked() { const pad = document.body.classList.contains('touch') ? 8 : 0; return hit('click') && mouse.x >= PAUSE_BTN.x0 - pad && mouse.x <= PAUSE_BTN.x1 + pad && mouse.y >= PAUSE_BTN.y0 - pad && mouse.y <= PAUSE_BTN.y1 + pad; }
function drawPauseBtn() {
  const b = PAUSE_BTN, hov = inR(b, mouse.x, mouse.y);
  ctx.fillStyle = 'rgba(11,10,10,0.6)'; ctx.fillRect(b.x0, b.y0, b.x1 - b.x0, b.y1 - b.y0);
  ctx.strokeStyle = hov ? '#f2c14e' : '#6d6862'; ctx.strokeRect(b.x0 + 0.5, b.y0 + 0.5, b.x1 - b.x0 - 1, b.y1 - b.y0 - 1);
  ctx.fillStyle = hov ? '#f2c14e' : '#efe6d6'; ctx.fillRect(b.x0 + 3, b.y0 + 3, 2, 5); ctx.fillRect(b.x0 + 7, b.y0 + 3, 2, 5);
}
function grantBoon(k) { const r = grantBoon0(k); if (G.scene === 'run') qOnBoon(k); return r; }
function grantBoon0(k) {
  const b = BOONS[k];
  if (k === 'rice' || k === 'curry') { RS.meals = (RS.meals || 0) + 1; if (RS.meals >= 5) achGet('full_stomach'); }
  if (k === 'rice') {
    const before = P.half; P.half = P.max;
    G.fx.push({ k: 'eat', icon: b.icon, t: 1.0 }); G.fx.push({ k: 'pop', x: P.x, y: P.y - 34, t: 0.9, s: 'FULL HEALTH!', c: '#9cc24a' });
    for (let i = 0; i < Math.max(1, (P.half - before) / 2); i++) G.fx.push({ k: 'mask', x: P.x + rand(-8, 8), y: P.y - 20, vy: -18, vx: 0, t: 0.9 });
    return b.name + '!';
  }
  if (k === 'curry') {
    G.curryN = (G.curryN || 0) + 1; P.max += 2; P.half = Math.min(P.max, P.half + 2);
    G.fx.push({ k: 'eat', icon: b.icon, t: 1.0 }); G.fx.push({ k: 'pop', x: P.x, y: P.y - 34, t: 0.9, s: '+1 MAX MASK', c: '#9cc24a' });
    G.fx.push({ k: 'mask', x: P.x, y: P.y - 20, vy: -18, vx: 0, t: 0.9 });
    return b.name + '!';
  }
  P.boons[k] = lv(k) + 1; P.botX = P.x; P.botY = P.y - 16;
  G.fx.push({ k: 'boonget', icon: b.icon, x: P.x, y: P.y - 20, t: 1.0 });
  sparkle(P.x, P.y - 12, b.rar === 'RARE' ? '#5fb0f5' : '#f2c14e');
  if (k === 'ckw') P.mc = true;
  if (k === 'warranty') {
    // like a Hades Pom: one random level I power-up that has a level II gets upgraded
    const pool = warrantyPool().filter(x => x !== 'warranty');
    if (pool.length) {
      const u = pick(pool); P.boons[u] = 2;
      G.fx.push({ k: 'boonget', icon: BOONS[u].icon, x: P.x + 14, y: P.y - 24, t: 1.6 });
      return 'EXTENDED WARRANTY: ' + BOONS[u].name + ' -> II!';
    }
  }
  return b.name + (lv(k) >= 2 ? ' II' : '') + '!';
}
/* ---------------- room rewards (Hades-style): power-ups on the driveway and rooms 1, 3 (pick one of two) and 5;
   rooms 2, 4 and 6 give clean air, an ang bao or a Prata of Power, and room 6 might give a fifth power-up ---------------- */
const canLevel = k => BOONS[k] && !BOONS[k].instant && lv(k) >= 1 && lv(k) < (BOONS[k].max || 1);
const PAIR_FIRST = 'WOAH, TWO POWER-UPS? HMM, WHICH SHOULD I PICK FIRST?', PAIR_LINES = ['HMM, WHICH TO CHOOSE...', 'SO MANY CHOICES. WELL...ACTUALLY JUST ONE.'];
function minorReward(room6) {
  // each reward starts at weight 1, halves after it has come up once and is gone after twice; the fifth power-up is a flat 0.5 in room 6
  const seen = G.minorSeen = G.minorSeen || {}, w = c => [1, 0.5, 0][Math.min(seen[c] || 0, 2)];
  const opts = [['air', cheat('raid') ? 0 : w('air')], ['pouch', w('pouch')], ['prata', Object.keys(P.boons).some(canLevel) ? w('prata') : 0]];
  if (room6) opts.push(['boon', 0.5]);
  let r = Math.random() * opts.reduce((a, o) => a + o[1], 0);
  for (const [k, wt] of opts) { r -= wt; if (r <= 0 && wt > 0) { if (k !== 'boon') seen[k] = (seen[k] || 0) + 1; return k; } }
  return 'pouch';
}
function placeRoomReward(rx, ry) {
  const n = G.room;
  if (n === 3) {   // two patrons side by side: take one and the other is gone
    const a = pickPatron(), b = pick(Object.keys(PATRONS).filter(k => k !== a));
    G.pickups.push({ k: 'reward', r: 'boon', x: rx - 20, y: ry, t: 0, pat: a, pair: true }, { k: 'reward', r: 'boon', x: rx + 20, y: ry, t: 0.4, pat: b, pair: true });
    if (!save.pairSeen) { save.pairSeen = true; persist(); G.pairFirst = true; G.pendingJJ = PAIR_FIRST; }
    else if (Math.random() < 1 / 3) G.pendingJJ = pick(PAIR_LINES);
    return;
  }
  const r = n === 1 || n === 5 ? 'boon' : minorReward(n === FIGHT_ROOMS);
  G.pickups.push({ k: 'reward', r, x: rx, y: ry, t: 0, pat: pickPatron() });
}
function openPrata() {
  const ks = Object.keys(P.boons).filter(canLevel);
  if (!ks.length) { G.banner = { t: 2, s: 'NOTHING LEFT TO LEVEL UP!' }; G.rewardTaken = true; G.doorOpen = true; return; }
  G.boon = { pat: 'auntie', opts: shuffle(ks).slice(0, 3), sel: 0, prata: true }; sfx('reward_appear');
}
function pairVanish() {
  // the power-up you didn't take swells, bursts into a gold ring and goes POOF
  const o = G.pairOther; G.pairOther = null; if (!o) return;
  G.pickups = G.pickups.filter(p => p !== o); sfx('puff');
  G.fx.push({ k: 'orbpop', x: o.x, y: o.y, pat: o.pat, t: 0.8, then: G.pairFirst ? () => { G.pairFirst = false; G.pendingJJ = 'GUESS I COULD ONLY PICK ONE.'; } : null });
}
function drawOrbPop(f) {
  const age = 0.8 - f.t, cy = f.y - 14;
  if (age < 0.25) {
    const s = 1 + age * 1.8; ctx.fillStyle = 'rgba(242,193,78,0.35)'; ctx.beginPath(); ctx.arc(f.x, cy, 12 * s, 0, 7); ctx.fill();
    const pt = PATRONS[f.pat]; ctx.save(); ctx.translate(f.x, cy); ctx.scale(s, s); ctx.drawImage(IMG[pt.img], 0, pt.top || 0, 16, 13, -8, -8, 16, 13); ctx.restore();
  } else if (age < 0.45) {
    const k = (age - 0.25) / 0.2; ctx.strokeStyle = '#f2c14e'; ctx.lineWidth = 2; ctx.globalAlpha = 1 - k * 0.5; ctx.beginPath(); ctx.arc(f.x, cy, 10 + k * 8, 0, 7); ctx.stroke(); ctx.lineWidth = 1;
    ctx.fillStyle = '#f2c14e'; for (let i = 0; i < 8; i++) { const a = i * 0.785; ctx.fillRect(Math.round(f.x + Math.cos(a) * (14 + k * 10)), Math.round(cy + Math.sin(a) * (14 + k * 10)), 2, 2); } ctx.globalAlpha = 1;
  } else {
    const k = (age - 0.45) / 0.35; ctx.globalAlpha = 1 - k;
    ctx.fillStyle = '#fff6c8'; for (let i = 0; i < 8; i++) { const a = i * 0.785; ctx.fillRect(Math.round(f.x + Math.cos(a) * (24 + k * 6)), Math.round(cy + Math.sin(a) * (22 + k * 6)), 1, 1); }
    outlined('POOF', Math.round(f.x - 8), Math.round(cy - 14 - k * 6), '#d6d1c8'); ctx.globalAlpha = 1;
  }
}

/* ---------------- first-run tutorial on the driveway: cardboard Hazed, Nurse Mei calling out from the hospital, a checklist (3 of each move) ---------------- */
const TUT_DUMMIES = [[118, 118], [196, 92], [240, 126]], TUT_REPS = 3;
function tutStart() {
  save.tutStarted = true; persist();
  G.tut = { stage: 'drill', done: { attack: false, special: false, siam: false }, n: { attack: 0, special: 0, siam: 0 }, sw0: P.swings || 0, prevSp: 0, t: 0 };
  for (const [x, y] of TUT_DUMMIES) G.map.props.push({ kind: 'box', dummy: true, img: 'p_dummy', x, y, rx: 6, ry: 3 });
}
function tutTick(dt) {
  const T = G.tut; T.t += dt;
  for (const o of G.map.props) if (o.dummy && o.wob > 0) o.wob -= dt;
  if (T.stage !== 'drill') { if (T.stage === 'bye' && T.t > 6) G.tut = null; return; }
  // attacks and specials count when they land on a cardboard Hazed (once per swing / pull / throw); Siam counts when used
  const D = T.done;
  if (P.sucking && !T.wasSuck) T.suckN = (T.suckN || 0) + 1; T.wasSuck = P.sucking;
  if (P.spCd > T.prevSp + 0.05) T.spN = (T.spN || 0) + 1; T.prevSp = P.spCd;
  if (P.dashT > 0 && !T.wasDash) tutMark('siam'); T.wasDash = P.dashT > 0;
  if (D.attack && D.special && D.siam) {
    // drill done: the cardboard folds away and the first power-up appears
    T.stage = 'orb'; T.t = 0;
    for (const o of G.map.props.filter(o => o.dummy)) for (let i = 0; i < 6; i++) G.fx.push({ k: 'smoke', x: o.x, y: o.y - 10, t: 0.6, vx: rand(-30, 30), vy: rand(-30, 0), r: 3 });
    G.map.props = G.map.props.filter(o => !o.dummy);
    const [rx, ry] = G.map.reward; G.pickups.push({ k: 'reward', r: 'boon', x: rx, y: ry, t: 0, pat: pickPatron() }); sfx('reward_appear');
  }
}
function tutMark(k) {
  const T = G.tut, D = T.done, N = T.n; if (D[k]) return; N[k]++;
  if (N[k] >= TUT_REPS) { D[k] = true; sfx('menu_select'); G.fx.push({ k: 'pop', x: P.x, y: P.y - 34, t: 0.8, s: 'NICE!', c: '#9cc24a' }); }
  else G.fx.push({ k: 'pop', x: P.x, y: P.y - 34, t: 0.5, s: N[k] + ' / ' + TUT_REPS, c: '#efe6d6' });
}
function tutHit(src) {
  const T = G.tut; if (!T || T.stage !== 'drill') return;
  if (src === 'attack') { const id = G.weapon !== 'vac' ? 'f' + (P.swings || 0) : 'v' + (T.suckN || 0); if (T.atkId !== id) { T.atkId = id; tutMark('attack'); } }
  if (src === 'special' && T.spHit !== (T.spN || 0)) { T.spHit = T.spN || 0; tutMark('special'); }
}
function tutPowerTalk() {
  G.tut.stage = 'menu';
  say('nurse', 'NURSE MEI', 'THAT ONE IS A POWER-UP. THE PEOPLE OF SINGAPORE ARE HELPING YOU OUT. PICK ONE. IT LASTS UNTIL THE END OF THE RUN, AND EACH PERSON GIVES A DIFFERENT KIND.');
}
function tutDone() { G.tut.stage = 'bye'; G.tut.t = 0; save.tutDone = true; persist(); }
function tutMsg() {
  const T = G.tut, D = T.done, fan = G.weapon === 'fan';
  if (T.stage === 'orb') return 'OK LAH, GOOD ENOUGH. SEE THAT GLOWING THING? GO AND TAKE IT.';
  if (T.stage === 'bye') return "GOOD. MORE PEOPLE WILL HELP YOU ALONG THE WAY. THE DOOR IS OPEN, GO!";
  if (!D.attack) return 'HIT THE CARDBOARD ONES THREE TIMES WITH YOUR NORMAL ATTACK. ' + (fan ? 'J OR CLICK TO SWING YOUR FANS.' : 'J OR HOLD CLICK TO SUCK.');
  if (!D.special) return 'NOT BAD. NOW HIT THEM THREE TIMES WITH YOUR SPECIAL: K OR RIGHT CLICK ' + (fan ? 'THROWS A FAN.' : 'FIRES A BLAST OF AIR.');
  return "LAST ONE. SPACE TO SIAM, THREE TIMES: YOU DASH OUT OF THE WAY. VERY USEFUL WHEN THEY CHARGE AT YOU.";
}
function tutDraw() {
  const T = G.tut; if (!T || G.dialog || G.boon || G.paused) return;
  panel(4, 132, 212, 176, '#6d6862'); ctx.fillStyle = '#a8906b'; ctx.fillRect(9, 137, 26, 34); ctx.drawImage(IMG.nurse, 0, 0, 16, 18, 10, 138, 24, 27);
  text('NURSE MEI', 40, 137, '#e8a25c'); wrap(tutMsg(), 166).slice(0, 3).forEach((l, i) => text(l, 40, 147 + i * 8, '#efe6d6'));
  if (T.stage === 'bye') return;
  const items = [['ATTACK', T.done.attack, 'attack'], ['SPECIAL', T.done.special, 'special'], ['SIAM', T.done.siam, 'siam']], x = 228, y = 32;
  panel(x, y, x + 86, y + 12 + items.length * 11, '#6d6862'); text('TRAINING', x + 5, y + 3, '#f2c14e');
  items.forEach(([lab, done, key], i) => { const yy = y + 13 + i * 11; ctx.fillStyle = '#0b0a0a'; ctx.fillRect(x + 5, yy, 7, 7); ctx.fillStyle = done ? '#2f8f4a' : '#3a3630'; ctx.fillRect(x + 6, yy + 1, 5, 5);
    if (done) { ctx.fillStyle = '#f4f3ee'; for (const [a, b] of [[0, 2], [1, 3], [2, 2], [3, 1], [4, 0]]) ctx.fillRect(x + 6 + a, yy + 1 + b, 1, 1); } text(lab, x + 16, yy, done ? '#8a8378' : '#efe6d6'); const c = Math.min(T.n[key], TUT_REPS) + '/' + TUT_REPS; text(c, x + 81 - textW(c), yy, done ? '#9cc24a' : '#bfb4a2'); });
}
function pickPatron() { const ks = Object.keys(PATRONS); return ks[(Math.random() * ks.length) | 0]; }
function openBoon(pat) {
  pat = pat || pickPatron();
  // never offer a boon you already maxed; tiered boons come back as level II
  // weighted draw: rare boons like Chao Keng Warrior turn up less often
  const draw = (pool, n) => { const out = []; pool = pool.slice();
    while (out.length < n && pool.length) { const tot = pool.reduce((a, k) => a + (BOONS[k].weight || 1), 0); let r = Math.random() * tot, i = 0;
      for (; i < pool.length - 1; i++) { r -= BOONS[pool[i]].weight || 1; if (r <= 0) break; } out.push(pool.splice(i, 1)[0]); }
    return out; };
  let opts = draw(Object.keys(BOONS).filter(k => BOONS[k].pat === pat && boonOpen(k) && (BOONS[k].weight || 1) >= 1), 3);
  // the rare one may replace a slot instead of crowding the list
  const rare = Object.keys(BOONS).filter(k => BOONS[k].pat === pat && boonOpen(k) && (BOONS[k].weight || 1) < 1);
  for (const k of rare) if (Math.random() < BOONS[k].weight) { if (opts.length >= 3) opts[(Math.random() * 3) | 0] = k; else opts.push(k); }
  const extra = shuffle(Object.keys(BOONS).filter(k => BOONS[k].pat !== pat && boonOpen(k) && !opts.includes(k) && (BOONS[k].weight || 1) >= 1));
  while (opts.length < 3 && extra.length) opts.push(extra.shift());
  if (!opts.length && cheat('raid')) { G.banner = { t: 2.4, s: 'RAID BOSS: NOTHING LEFT TO LEARN!' }; G.boon = null; G.rewardTaken = true; G.doorOpen = true; return; }   // no clean air from a cheat
  if (!opts.length) {
    const a = 10 + 2 * G.psi; save.cleanAir += a; G.stats.air += a; persist();
    G.banner = { t: 2.4, s: 'NOTHING LEFT TO LEARN! +' + a + ' CLEAN AIR' }; sfx('clean_air');
    G.boon = null; G.rewardTaken = true; G.doorOpen = true; return;
  }
  G.boon = { pat, opts, sel: 0 };
  sfx('menu_select');
}
function updateBoon() {
  const Bn = G.boon;
  const nO = Bn.opts.length;
  if (hit('up')) { Bn.sel = (Bn.sel + nO - 1) % nO; sfx('menu'); }
  if (hit('down')) { Bn.sel = (Bn.sel + 1) % nO; sfx('menu'); }
  if (hit('click')) for (let i = 0; i < Bn.opts.length; i++) { const y = 30 + i * 46; if (mouse.y >= y && mouse.y <= y + 40 && mouse.x >= 70) { Bn.sel = i; pressed.act = true; } }
  if (!Bn.prata && (hit('reroll') || (hit('click') && mouse.x < 66 && mouse.y > 160)) && G.rerolls > 0) { G.rerolls--; const others = Object.keys(PATRONS).filter(k => k !== Bn.pat); openBoon(others[(Math.random() * others.length) | 0]); return; }
  if (hit('act')) {
    const k = Bn.opts[Bn.sel], b = BOONS[k];
    G.banner = { t: 2.4, s: (Bn.prata ? 'PRATA OF POWER! ' : '') + grantBoon(k) }; sfx('powerup');
    G.boon = null; G.rewardTaken = true; G.doorOpen = true;
    if (G.pairOther) pairVanish();
    if (G.tut && G.tut.stage === 'menu') tutDone();
  }
}
// power-up text that only talks about the weapon you're holding (the shared text mentions swings, suction and the beam all at once)
const BOON_TEXT = {
  fan: {
    longarm: ['YOUR FAN SWINGS REACH 10% FURTHER.', 'YOUR FAN SWINGS REACH 20% FURTHER.'],
    widesweep: ['A WIDER SWING ARC.', 'YOUR SWINGS COVER ALMOST A HALF CIRCLE.'],
    thirdform: ['EVERY 3RD SWING HITS DOUBLE.', '3RD SWINGS ALSO SEND OUT A SHOCKWAVE.'],
    pushhands: ['SWINGS KNOCK HAZED BACK.', 'HARDER KNOCKBACK, WITH A SHORT STUN.'],
    innerpeace: ['STAND STILL FOR 1S TO CHARGE YOUR NEXT SWING. IT HITS 3X, EVEN IF YOU MOVE.'],
    wallhack: ['YOUR THROWN FAN GOES THROUGH UMBRELLAS, TREES AND CRATES. SPECIAL CODE ONE.'],
    chapteh: ['YOUR THROWN FAN REBOUNDS ONCE, OFF A WALL OR TO A CLOSE HAZED, FOR HALF DAMAGE.'],
    rubber: ['YOUR THROWN FAN FLIES 10% FURTHER AND FASTER.', 'YOUR THROWN FAN FLIES 20% FURTHER AND FASTER.'],
    fivestones: ['WHERE YOUR THROWN FAN TURNS BACK, 5 LITTLE STONES SCATTER AND HIT HAZED.'],
    pocket: ['YOUR FAN THROW RECHARGES 10% FASTER.', 'YOUR FAN THROW RECHARGES 20% FASTER.'],
    triple: ['THROW THREE FANS AT ONCE, EACH AT HALF DAMAGE.'],
    kutikuti: ['THROWN FAN HITS LEAVE A KUTI-KUTI ON HAZED. IT POPS 1.5S LATER FOR 12.'],
  },
  vac: {
    longarm: ['YOUR SUCTION REACHES 10% FURTHER.', 'YOUR SUCTION REACHES 20% FURTHER.'],
    widesweep: ['A WIDER SUCTION CONE.', 'YOUR SUCTION COVERS ALMOST A HALF CIRCLE.'],
    thirdform: ['SUCTION RAMPS UP TO 1.5X ON ONE TARGET.', 'SUCTION RAMPS UP TO 2X ON ONE TARGET.'],
    pushhands: ['SUCTION PULLS HAZED IN FASTER.', 'SUCTION PULLS EVEN FASTER, AND SLOWS THEM.'],
    innerpeace: ['STAND STILL FOR 1S TO CHARGE YOUR SUCTION. IT HITS 3X FOR A MOMENT, EVEN IF YOU MOVE.'],
    wallhack: ['YOUR AIR BLASTS AND BEAM GO THROUGH UMBRELLAS, TREES AND CRATES. SPECIAL CODE ONE.'],
    chapteh: ['YOUR AIR BLAST AND BEAM REBOUND ONCE, OFF A WALL OR TO A CLOSE HAZED, FOR HALF DAMAGE.'],
    rubber: ['YOUR AIR BLASTS AND BEAM GO 10% FURTHER AND FASTER.', 'YOUR AIR BLASTS AND BEAM GO 20% FURTHER AND FASTER.'],
    fivestones: ['WHERE YOUR AIR BLAST OR BEAM ENDS, 5 LITTLE STONES SCATTER AND HIT HAZED.'],
    pocket: ['YOUR AIR BLAST AND CHARGE-UP ARE 10% FASTER. THE BEAM LASTS 10% LONGER.', 'YOUR AIR BLAST AND CHARGE-UP ARE 20% FASTER. THE BEAM LASTS 20% LONGER.'],
    triple: ['YOUR AIR BLAST AND BEAM FIRE THREE AT ONCE, EACH AT HALF DAMAGE.'],
    kutikuti: ['AIR BLAST AND BEAM HITS LEAVE A KUTI-KUTI ON HAZED. IT POPS 1.5S LATER FOR 12.'],
  },
  rotan: {
    longarm: ['YOUR ROTAN REACHES 10% FURTHER.', 'YOUR ROTAN REACHES 20% FURTHER.'],
    widesweep: ['YOUR ROTAN HITS A THICKER LINE.', 'YOUR ROTAN HITS AN EVEN THICKER LINE.'],
    thirdform: ['THE CRACK (3RD HIT) DEALS DOUBLE AGAIN AND STUNS LONGER.', 'THE CRACK ALSO SENDS OUT A SHOCKWAVE.'],
    pushhands: ['EVERY ROTAN HIT KNOCKS HAZED BACK.', 'HARDER KNOCKBACK, WITH A SHORT STUN.'],
    innerpeace: ['STAND STILL FOR 1S TO CHARGE YOUR NEXT SWING. IT HITS 3X, EVEN IF YOU MOVE.'],
    wallhack: ['YOUR SIX OF THE BEST LUNGE GOES THROUGH UMBRELLAS, CRATES AND WALLS. SPECIAL CODE ONE.'],
    chapteh: ['AFTER THE 6TH STRIKE, HOP TO A CLOSE HAZED AND LAND ONE MORE HIT.'],
    rubber: ['SIX OF THE BEST: A 10% LONGER LUNGE AND A 10% FASTER FLURRY.', 'SIX OF THE BEST: A 20% LONGER LUNGE AND A 20% FASTER FLURRY.'],
    fivestones: ['5 LITTLE STONES SCATTER FROM YOUR 6TH STRIKE AND HIT HAZED.'],
    pocket: ['SIX OF THE BEST RECHARGES 10% FASTER.', 'SIX OF THE BEST RECHARGES 20% FASTER.'],
    triple: ['SIX OF THE BEST STRIKES IN THREE DIRECTIONS, EACH AT HALF DAMAGE.'],
    kutikuti: ['SIX OF THE BEST HITS LEAVE A KUTI-KUTI ON HAZED. IT POPS 1.5S LATER FOR 12.'],
    zap: ['YOUR HITS ARC TO UP TO 2 NEARBY HAZED FOR 3 DAMAGE, ONCE PER SWING.', 'ARCS DEAL 5 DAMAGE, ONCE PER SWING.'],
  },
};
function boonText(k, two) {
  const b = BOONS[k], o = (BOON_TEXT[G.weapon] || {})[k];
  if (o) return two ? (o[1] || b.desc2 || o[0]) : o[0];
  return two ? b.desc2 : b.desc;
}
function drawBoon() {
  const Bn = G.boon; if (!Bn) return;
  ctx.fillStyle = 'rgba(11,10,10,0.7)'; ctx.fillRect(0, 0, W, H);
  const title = Bn.prata ? 'PRATA OF POWER' : 'CHOOSE A POWER-UP';
  outlined(title, Math.round(160 - textW(title, 2) / 2), 8, '#f2c14e', 2);
  if (Bn.prata) {   // the prata sits where the patron usually is
    ctx.fillStyle = '#a8906b'; ctx.fillRect(12, 30, 38, 54); ctx.strokeStyle = '#e8a25c'; ctx.strokeRect(12.5, 30.5, 37, 53); ctx.drawImage(IMG.rw_prata, 15, 41, 32, 32);
    ['LEVEL UP', 'ONE OF YOUR', 'POWER-UPS.'].forEach((l, i) => text(l, 10, 90 + i * 8, '#e8a25c'));
    ['EXTRA FLAKY,', 'EXTRA', 'POWERFUL.'].forEach((l, i) => text(l, 10, 118 + i * 8, '#bfb4a2'));
  }
  const pt = PATRONS[Bn.pat], im = IMG[pt.img];
  if (!Bn.prata) {
  ctx.fillStyle = '#a8906b'; ctx.fillRect(12, 30, 38, 54); ctx.strokeStyle = '#e8a25c'; ctx.strokeRect(12.5, 30.5, 37, 53);
  ctx.drawImage(im, 15, 33, 32, 48);
  const nm = pt.name.split(' ');
  nm.forEach((w, i) => text(w, 10, 90 + i * 8, '#e8a25c'));
  wrap(pt.line, 52).forEach((l, i) => text(l, 10, 92 + nm.length * 8 + i * 8, '#bfb4a2'));
  if (G.rerolls > 0) text('R: REROLL (' + G.rerolls + ')', 10, 166, '#9cc24a');
  }
  Bn.opts.forEach((k, i) => {
    const b = BOONS[k], y = 30 + i * 46, sel = i === Bn.sel, up = !b.instant && lv(k) >= 1, rc = up ? '#9cc24a' : b.rar === 'RARE' ? '#5fb0f5' : '#d9dde3';
    panel(70, y, 312, y + 40, sel ? '#f2c14e' : '#6d6862');
    ctx.fillStyle = '#302c25'; ctx.fillRect(76, y + 4, 32, 32); ctx.strokeStyle = rc; ctx.strokeRect(76.5, y + 4.5, 31, 31);
    const ic = IMG[b.icon]; ctx.drawImage(ic, Math.round(92 - ic.width), Math.round(y + 20 - ic.height), ic.width * 2, ic.height * 2);
    text(b.name + (up ? ' II' : ''), 116, y + 6, '#efe6d6', textW(b.name + (up ? ' II' : ''), 2) > 150 ? 1 : 2);
    const tag = up ? 'LEVEL UP' : b.rar;
    const tw = textW(tag); ctx.fillStyle = rc; ctx.fillRect(304 - tw - 4, y + 5, tw + 6, 9); text(tag, 305 - tw - 2, y + 7, '#24211c', 1, null);
    if (up) for (let s = 0; s < 2; s++) { ctx.fillStyle = '#9cc24a'; ctx.fillRect(100 + s * 4, y + 30, 3, 3); }
    wrap(boonText(k, up), 186).forEach((l, j) => text(l, 116, y + 21 + j * 8, '#bfb4a2'));
    if (sel) { ctx.fillStyle = '#f2c14e'; ctx.beginPath(); ctx.moveTo(64, y + 17); ctx.lineTo(68, y + 20); ctx.lineTo(64, y + 23); ctx.fill(); }
  });
}
// after Raffles falls, Jun Jie says why he's heading back instead of pushing on home
// after the first win the haze rolls back in thicker every time, so he has to head back

function win() {
  if (G.winTalk) return; G.winTalk = true;
  const first = save.wins === 0;
  save.wins++; const wa = 20 + 10 * G.psi; save.cleanAir += wa; G.stats.air += wa;
  // Hazed Cores: the first one is certain, after that it's 25% / 40% / 60% by PSI. It drops beside where Raffles fell.
  const firstCore = !save.coreEver;
  G.coreGot = !save.coreEver || Math.random() < [0.25, 0.4, 0.6][G.psi];
  const B = G.boss, at = safeLanding(B ? B.x + 24 : P.x + 20, B ? B.y : P.y);
  const drop = G.coreGot ? { k: 'coredrop', x: at.x, y: at.y, t: 999 } : null;
  if (G.coreGot) { save.cores = (save.cores || 0) + 1; save.coreTotal = (save.coreTotal || 0) + 1; save.coreEver = true; G.fx.push(drop); sfx('reward_appear'); }
  persist();
  qRunEnd(true);
  // what he says before picking up the core, and after (or all of it straight away if nothing dropped)
  const pre = [], post = [];
  if (first) pre.push(['J', "He's... stopped moving."]);
  if (!first && G.psi === 2 && !save.win248Said) { save.win248Said = true; persist(); pre.push(['J', 'Even at its worst, he still fell... and the haze still comes back.'], ['J', "Raffles was never the source of this haze. The real source is still out there somewhere."]); }
  if (firstCore) { pre.push(['J', 'Huh? Something fell out of him when he went down.']); post.push(['J', "It's warm... like a lump of haze squeezed into a stone."], ['J', 'I should take this back to the hospital. Maybe the doctors know what it is.']); }
  else if (G.coreGot) post.push(['J', save.rotanOpen ? 'Another core. The doctors will want this one too.' : save.cores >= 3 ? "Another core. That's three. Time to make Mei keep her promise." : 'Another core. These must be coming from inside the Hazed.']);
  if (!first) { const l = pick(HAZE_BACK.filter(x => x !== save.lastWinLine)); save.lastWinLine = l; persist(); post.push(['J', l]); }
  G.winPost = post;
  if (drop) talk(pre, () => { G.coreWait = { drop, got: false, t: 0 }; });
  else { if (!first) G.hazeIn = G.t; talk(pre.concat(post), winDone); }
}
function winDone() { G.winTalk = false; G.coreWait = null; G.scene = 'won'; G.deadT = 0; }
function updateCoreWait(dt) {
  // after Raffles falls he's free to walk over and pick the core up; then the haze rolls in and he heads back
  const C = G.coreWait;
  if (!C.got) {
    if (Math.hypot(P.x - C.drop.x, P.y - C.drop.y) < 12) {
      C.got = true; C.t = 0; G.fx = G.fx.filter(f => f !== C.drop); sfx('powerup');
      G.fx.push({ k: 'coreget', x: C.drop.x, y: C.drop.y, t: 1.3, T: 1.3 });
    }
    return;
  }
  C.t += dt;
  if (C.t >= 1.3) {
    G.coreWait = null; sparkle(P.x, P.y - 36, '#ff9a3c'); G.fx.push({ k: 'pop', x: P.x, y: P.y - 46, t: 1.2, s: 'HAZED CORE!', c: '#ff9a3c' });
    if (save.wins > 1) G.hazeIn = G.t;
    talk(G.winPost || [], winDone);
  }
}

/* ---------------- drawing the run ---------------- */
function drawDoor(d) {
  const open = G.doorOpen;
  ctx.fillStyle = '#2a2420'; ctx.fillRect(d.x, d.y, d.w, d.h); ctx.strokeStyle = '#0b0a0a'; ctx.strokeRect(d.x + 0.5, d.y + 0.5, d.w - 1, d.h - 1);
  ctx.fillStyle = open ? '#f2c14e' : '#3a302a'; ctx.fillRect(d.x + 2, d.y + 2, d.w - 4, d.h - 4);
  if (d.side === 'top') { ctx.fillStyle = '#3a3030'; ctx.beginPath(); ctx.arc(d.x + d.w / 2, d.y + 2, d.w / 2, Math.PI, 0); ctx.fill(); }
  if (open) {
    ctx.fillStyle = 'rgba(255,220,140,0.25)'; ctx.beginPath(); ctx.arc(d.x + d.w / 2, d.y + d.h / 2, 18, 0, 7); ctx.fill();
    // a bobbing EXIT arrow so the way out is obvious in a big room
    const b = Math.round(Math.sin(G.t * 6) * 2), ax = d.side === 'top' ? d.x + d.w / 2 : d.x - 10, ay = d.side === 'top' ? d.y + d.h + 12 : d.y + d.h / 2;
    ctx.fillStyle = '#f2c14e'; ctx.beginPath();
    if (d.side === 'top') { ctx.moveTo(ax - 4, ay + b); ctx.lineTo(ax + 4, ay + b); ctx.lineTo(ax, ay - 5 + b); }
    else { ctx.moveTo(ax + b, ay - 4); ctx.lineTo(ax + b, ay + 4); ctx.lineTo(ax + 5 + b, ay); }
    ctx.fill();
  }
}
function drawRun() {
  const dying = G.scene === 'dead';
  ctx.save();
  if (dying) { const v = deathView(); ctx.translate(v.sx, v.sy); ctx.scale(v.z, v.z); ctx.translate(-G.deathFrom.x, -G.deathFrom.y); }
  ctx.translate(-camX(), -camY());
  ctx.drawImage(IMG[G.map.bg], 0, 0);
  if (G.map.door) drawDoor(G.map.door);
  for (const o of G.map.props || []) drawPropGround(o);
  for (const p of G.pickups) {
    const bob = Math.sin(p.t * 4) * 2;
    if (p.k === 'air') { airIcon(p.x - 3, p.y - 8 + bob); }
    else if (p.k === 'meal') { shadowAt(p.x, p.y, 6, 2); ctx.fillStyle = 'rgba(232,162,92,0.3)'; ctx.beginPath(); ctx.arc(p.x, p.y - 8 + bob, 8, 0, 7); ctx.fill(); ctx.drawImage(IMG.i_rice, Math.round(p.x - 8), Math.round(p.y - 16 + bob)); }
    else if (p.k === 'coin') { shadowAt(p.x, p.y, 3, 1); const w = Math.abs(Math.cos(p.t * 5)) * 7 + 1; ctx.drawImage(IMG.coin, 1, 1, 14, 14, Math.round(p.x - w / 2), Math.round(p.y - 9 + bob * 0.5), Math.round(w), 7); }
    else {
      shadowAt(p.x, p.y, 8);
      ctx.fillStyle = 'rgba(242,193,78,0.25)'; ctx.beginPath(); ctx.arc(p.x, p.y - 14 + bob, 12, 0, 7); ctx.fill();
      if (p.r === 'boon') { const pt = PATRONS[p.pat], im = IMG[pt.img], ty = pt.top || 0; ctx.drawImage(im, 0, ty, 16, 13, p.x - 8, p.y - 22 + bob, 16, 13); }
      else ctx.drawImage(IMG[p.r === 'prata' ? 'rw_prata' : p.r === 'pouch' ? 'rw_pouch' : 'rw_jar'], Math.round(p.x - 8), Math.round(p.y - 22 + bob));
    }
  }
  // sort sprites by feet y
  const list = [];
  const fadeOut = dying ? clamp(1 - (G.deadT - 0.3) / 0.8, 0, 1) : 1;      // when he goes down, the Hazed melt away and he is all you see
  if (fadeOut > 0) for (const e of G.enemies) list.push({ y: e.y, d: () => { ctx.globalAlpha = fadeOut; drawEnemy(e); ctx.globalAlpha = 1; } });
  if (G.boss && fadeOut > 0) list.push({ y: G.boss.state === 'statue' || G.boss.state === 'cut' ? 113 : G.boss.y, d: () => { ctx.globalAlpha = fadeOut; drawBoss(); ctx.globalAlpha = 1; } });
  if (G.boss && (G.boss.state === 'statue' || G.cut)) { list.push({ y: 112, d: () => drawCult(false) }); list.push({ y: 114, d: () => drawCult(true) }); }
  list.push({ y: P.y, d: dying ? drawDying : G.revive ? drawRevivePlayer : drawPlayer });
  if (G.boss && ['rise', 'air', 'fall'].includes(G.boss.state)) list.push({ y: -999, d: drawBossShadow });
  if (G.shop) drawShopLayer(list);
  for (const o of G.map.props || []) if (o.img) list.push({ y: o.y, d: () => drawProp(o) });
  list.sort((a, b) => a.y - b.y).forEach(o => o.d());
  if (!dying || G.deadT < 0.3) { drawWaves(); drawShots(); drawBeam(); drawKuti(); drawFx(); }
  ctx.restore();
  if (dying) return;
  if (G.map !== MAPS.shop) drawFog(G.psi, P.x - camX(), P.y - 10 - camY());
  if (G.hazeIn && G.boss) drawHazeIn();
  drawOffscreen();
  if (G.revive) { drawReviveOverlay(); }
  if (G.shop) drawShopUI();
  if (!G.cut) { drawHUD(); drawPauseBtn(); tutDraw(); }
  if (G.boss && G.boss.flagPhase && !G.boon) {
    const lab = 'BREAK THE FLAGS  ' + G.flags.length + ' LEFT', w = textW(lab) + 18;
    const pulse = ((G.t * 2) | 0) % 2;
    panel(160 - w / 2, 18, 160 + w / 2, 30, pulse ? '#f2c14e' : '#e8a25c');
    ctx.fillStyle = '#3a3936'; ctx.fillRect(160 - w / 2 + 5, 20, 1, 8); ctx.fillStyle = '#5d6270'; ctx.fillRect(160 - w / 2 + 6, 20, 5, 4);
    text(lab, 160 - w / 2 + 14, 22, '#f2c14e');
  }
  drawCutOverlay();
}
function drawOffscreen() {
  // little red arrows at the screen edge for Hazed you cannot see
  const cx = camX(), cy = camY();
  for (const e of G.enemies) {
    if (e.state !== 'alive') continue;
    const sx = e.x - cx, sy = e.y - 10 - cy;
    if (sx > -4 && sx < W + 4 && sy > -4 && sy < H + 4) continue;
    const ax = clamp(sx, 6, W - 6), ay = clamp(sy, 34, H - 20), a = Math.atan2(sy - ay, sx - ax);
    ctx.save(); ctx.translate(ax, ay); ctx.rotate(a);
    ctx.fillStyle = '#0b0a0a'; ctx.beginPath(); ctx.moveTo(5, 0); ctx.lineTo(-4, -5); ctx.lineTo(-4, 5); ctx.fill();
    ctx.fillStyle = ((G.t * 4) | 0) % 2 ? '#d8322a' : '#ff7b6e'; ctx.beginPath(); ctx.moveTo(3, 0); ctx.lineTo(-3, -3); ctx.lineTo(-3, 3); ctx.fill();
    ctx.restore();
  }
}
function drawEnemy(e) {
  if (e.spawn > 0) { ctx.globalAlpha = 1 - e.spawn * 1.6; }
  if (e.state === 'puff') {
    const k = clamp(e.t / PSI[G.psi].reform, 0, 1), soon = k < 0.3, sz = 3 + (1 - k) * 2.5;
    shadowAt(e.x, e.y - 1, 6, 2, 0.45);
    const blobs = [];
    for (let i = 0; i < 5; i++) { const a = G.t * (soon ? 6 : 3) + i * 1.26; blobs.push([e.x + Math.cos(a) * 5, e.y - 7 + Math.sin(a) * 2.5, sz + (i % 2)]); }
    ctx.fillStyle = '#4e525a';                       // rim so it reads on pale pavers
    for (const [x, y, r] of blobs) { ctx.beginPath(); ctx.arc(x, y, r + 1, 0, 7); ctx.fill(); }
    ctx.fillStyle = soon && ((G.t * 10) | 0) % 2 ? '#b07a74' : '#a3a7ae';
    for (const [x, y, r] of blobs) { ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill(); }
    ctx.fillStyle = '#d3d6db';
    for (const [x, y, r] of blobs) ctx.fillRect(Math.round(x - r / 2), Math.round(y - r / 2), 2, 1);
    // eyes keep glowing so you know it is still there
    ctx.fillStyle = soon ? '#ff4a2e' : '#ff9a3c'; ctx.fillRect(Math.round(e.x - 3), Math.round(e.y - 8), 1, 1); ctx.fillRect(Math.round(e.x + 2), Math.round(e.y - 8), 1, 1);
    // re-form timer: framed bar that drains and turns red near the end
    const bx = Math.round(e.x - 9), by = Math.round(e.y - 21);
    ctx.fillStyle = '#0b0a0a'; ctx.fillRect(bx - 1, by - 1, 20, 5);
    ctx.fillStyle = '#3a3630'; ctx.fillRect(bx, by, 18, 3);
    ctx.fillStyle = soon ? '#d8322a' : k < 0.6 ? '#e8a25c' : '#d9dde3'; ctx.fillRect(bx, by, Math.round(18 * k), 3);
    if (soon && ((G.t * 8) | 0) % 2) text('!', bx + 20, by - 1, '#ff4a2e');
  } else {
    shadowAt(e.x, e.y - 1, e.T.r);
    let bob = e.type === 'wisp' ? Math.sin(G.t * 6 + e.wob) * 2 - 3 : e.type === 'spitter' ? Math.sin(G.t * 3 + e.wob) - 2 : 0;
    let sx = 0, tell = false;
    if (e.type === 'spitter') {
      const dir = e.flipX ? -1 : 1;
      if (e.tele) { const k = clamp(1 - e.cd / 0.55, 0, 1); sx = -dir * Math.round(k * 2); bob -= Math.round(k * 2); tell = k > 0.7 && ((G.t * 16) | 0) % 2 === 0; }   // rears back and up
      if (e.recoil > 0) sx = dir * 2;                                                                                                                  // lurches forward as it spits
    }
    if (e.atk === 'wind') {
      const k = 1 - e.at / 0.6; bob = -2 - Math.round(k * 2); tell = ((G.t * 14) | 0) % 2 === 0;
      ctx.strokeStyle = `rgba(216,50,42,${0.5 + 0.4 * Math.sin(G.t * 30)})`; ctx.beginPath(); ctx.ellipse(e.x, e.y - 1, 30 * Math.min(1, k + 0.3), 23 * Math.min(1, k + 0.3) / 1.3 * 0.5, 0, 0, 7); ctx.stroke();
    }
    if (e.atk === 'leap') bob = -Math.round(Math.sin((1 - e.at / 0.2) * Math.PI) * 8);
    if (e.atk === 'rec') bob = 1;
    if (e.atk === 'tele') { sx = ((G.t * 40) | 0) % 2 ? 1 : -1; tell = ((G.t * 16) | 0) % 2 === 0; }
    if (e.atk === 'lunge') { G.fx.push({ k: 'smoke', x: e.x, y: e.y - 8, t: 0.25, vx: 0, vy: 0, r: 2 }); }
    spr(e.T.img, e.x + sx, e.y + bob, { flip: e.type === 'spitter' && e.flipX, flash: e.flash > 0 || tell });
    if (e.stun > 0) for (let i = 0; i < 3; i++) { const a = G.t * 6 + i * 2.1; ctx.fillStyle = i % 2 ? '#ffd45a' : '#f4f3ee'; ctx.fillRect(Math.round(e.x + Math.cos(a) * 7), Math.round(e.y - e.T.h - 2 + Math.sin(a) * 2), 2, 2); }
    if (e.burn) { ctx.fillStyle = ((G.t * 12) | 0) % 2 ? '#ff7b2e' : '#ffd45a'; ctx.fillRect(Math.round(e.x - 2), Math.round(e.y - e.T.h + 2), 1, 2); ctx.fillRect(Math.round(e.x + 2), Math.round(e.y - e.T.h + 4), 1, 2); }
    if (e.type === 'spitter' && e.tele) {
      // glowing snout: grows brighter as it charges
      const k = clamp(1 - e.cd / 0.55, 0, 1), nx = e.x + sx + (e.flipX ? -8 : 8), ny = e.y + bob - 17;
      ctx.fillStyle = `rgba(255,123,46,${0.25 + 0.35 * k})`; ctx.beginPath(); ctx.arc(nx, ny, 2 + 3 * k, 0, 7); ctx.fill();
      ctx.fillStyle = ((G.t * 20) | 0) % 2 ? '#ffd45a' : '#ff9a3c'; ctx.fillRect(Math.round(nx) - 1, Math.round(ny) - 1, 2 + Math.round(k), 2 + Math.round(k));
    }
    if (e.hp < e.max) { ctx.fillStyle = '#1b1c20'; ctx.fillRect(e.x - 7, e.y + 2, 14, 2); ctx.fillStyle = '#d8322a'; ctx.fillRect(e.x - 7, e.y + 2, 14 * e.hp / e.max, 2); }
  }
  ctx.globalAlpha = 1;
}
function drawFx() {
  for (const f of G.fx) {
    if (f.k === 'orbpop') { if (f.t > 0) drawOrbPop(f); continue; }
    if (f.k === 'coreget') {
      // it lifts off the ground, flies up over his head and hangs there glowing, then he pockets it
      const k = 1 - f.t / f.T, fl = clamp(k / 0.35, 0, 1), hx = P.x, hy = P.y - 34 + Math.round(Math.sin(G.t * 6));
      const x = f.x + (hx - f.x) * fl, y = f.y - 16 + (hy - f.y + 16) * fl - Math.sin(fl * Math.PI) * 14;
      if (fl >= 1) { ctx.strokeStyle = `rgba(255,154,60,${0.8 * (1 - k)})`; ctx.lineWidth = 1; ctx.beginPath(); ctx.arc(x, y, 6 + (k - 0.35) * 30, 0, 7); ctx.stroke(); }
      ctx.fillStyle = `rgba(255,154,60,${0.3 + 0.15 * Math.sin(G.t * 12)})`; ctx.beginPath(); ctx.arc(x, y, 10, 0, 7); ctx.fill();
      ctx.save(); ctx.translate(Math.round(x) - 7, Math.round(y) - 7); ctx.scale(2, 2); coreIcon(0, 0); ctx.restore(); continue;
    }
    if (f.k === 'coredrop') { if (G.coreWait && !G.dialog && ((G.t * 3) | 0) % 2) { const ay = Math.round(f.y - 50 + Math.sin(G.t * 6) * 2); ctx.fillStyle = '#0b0a0a'; ctx.beginPath(); ctx.moveTo(f.x - 5, ay - 1); ctx.lineTo(f.x + 5, ay - 1); ctx.lineTo(f.x, ay + 6); ctx.fill(); ctx.fillStyle = '#ff9a3c'; ctx.beginPath(); ctx.moveTo(f.x - 3, ay); ctx.lineTo(f.x + 3, ay); ctx.lineTo(f.x, ay + 4); ctx.fill(); }
      const b = Math.round(Math.sin(G.t * 3) * 1.5); ctx.fillStyle = `rgba(255,154,60,${0.25 + 0.1 * Math.sin(G.t * 5)})`; ctx.beginPath(); ctx.arc(f.x, f.y - 23 + b, 9, 0, 7); ctx.fill(); ctx.fillStyle = 'rgba(40,34,28,0.3)'; ctx.beginPath(); ctx.ellipse(f.x, f.y, 5, 1.5, 0, 0, 7); ctx.fill(); ctx.save(); ctx.translate(Math.round(f.x) - 7, Math.round(f.y) - 30 + b); ctx.scale(2, 2); coreIcon(0, 0); ctx.restore(); continue; }
    const a = Math.max(0, f.t);
    if (f.k === 'swipe') {
      const k = 1 - f.t / 0.16, sw = 1.05 * (f.w || 1), a0 = f.a - sw, a1 = f.a - sw + 2 * sw * Math.min(1, k * 1.3), Rr = f.R || 1;
      ctx.fillStyle = `rgba(214,241,245,${0.35 * (1 - k)})`; ctx.beginPath(); ctx.moveTo(f.x, f.y); ctx.arc(f.x, f.y, 28 * Rr, a0, a1); ctx.closePath(); ctx.fill();
      ctx.strokeStyle = f.big ? '#f2c14e' : '#ffffff'; ctx.lineWidth = f.big ? 3 : 2; ctx.beginPath(); ctx.arc(f.x, f.y, 24 * Rr, Math.max(a0, a1 - 1.2), a1); ctx.stroke();
      ctx.strokeStyle = '#8fd3f5'; ctx.lineWidth = 1; ctx.beginPath(); ctx.arc(f.x, f.y, 29 * Rr, Math.max(a0, a1 - 0.9), a1); ctx.stroke();
    } else if (f.k === 'rline') {   // the crack of the rotan along its line
      ctx.strokeStyle = f.c || `rgba(255,248,225,${Math.min(1, a * 8)})`; ctx.globalAlpha = Math.min(1, a * 8); ctx.lineWidth = f.w || 1; ctx.beginPath(); ctx.moveTo(f.x + Math.cos(f.a) * 10, f.y + Math.sin(f.a) * 10); ctx.lineTo(f.x + Math.cos(f.a) * f.R, f.y + Math.sin(f.a) * f.R); ctx.stroke(); ctx.lineWidth = 1; ctx.globalAlpha = 1;
    } else if (f.k === 'fly') {
      const k = 1 - f.t / f.T, tx = f.tx(), ty = f.ty();
      const x = f.x + (tx - f.x) * k, y = f.y + (ty - f.y) * k - Math.sin(k * Math.PI) * 14;
      const im = IMG[f.img], w = im.width * f.scale, h = im.height * f.scale;
      ctx.drawImage(im, Math.round(x - w / 2), Math.round(y - h / 2), w, h);
    } else if (f.k === 'spark') { ctx.fillStyle = f.c || '#ffffff'; ctx.globalAlpha = Math.min(1, a * 3); ctx.fillRect(Math.round(f.x), Math.round(f.y), 2, 2); ctx.globalAlpha = 1; }
    else if (f.k === 'star') {
      ctx.fillStyle = f.c; const r = 3 + (0.12 - a) * 30;
      ctx.fillRect(Math.round(f.x - r), Math.round(f.y), Math.round(r * 2), 1); ctx.fillRect(Math.round(f.x), Math.round(f.y - r), 1, Math.round(r * 2));
      ctx.fillRect(Math.round(f.x - 1), Math.round(f.y - 1), 3, 3);
    } else if (f.k === 'muzzle') { ctx.fillStyle = `rgba(214,241,245,${a * 8})`; ctx.beginPath(); ctx.arc(f.x, f.y, f.r * (1.2 - a * 4), 0, 7); ctx.fill(); }
    else if (f.k === 'laser') { ctx.strokeStyle = '#5fd3f5'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(f.x, f.y); ctx.lineTo(f.tx, f.ty); ctx.stroke(); ctx.fillStyle = '#ffffff'; ctx.fillRect(f.x - 1, f.y - 1, 3, 3); }
    else if (f.k === 'zap') {
      ctx.strokeStyle = '#ffd45a'; ctx.beginPath(); ctx.moveTo(f.x, f.y); ctx.lineTo(f.x + 2, f.y + 3); ctx.lineTo(f.x - 1, f.y + 4); ctx.lineTo(f.x + 1, f.y + 7); ctx.stroke();
    } else if (f.k === 'eat') {
      const im = IMG[f.icon], bites = Math.min(3, ((1 - f.t) * 4) | 0), w = Math.max(4, im.width - bites * 4);
      ctx.drawImage(im, 0, 0, w, im.height, Math.round(P.x - 8), Math.round(P.y - 44 + Math.sin(G.t * 20) * (f.t > 0.3 ? 1 : 0)), w, im.height);
      if (((G.t * 8) | 0) % 2 && f.t > 0.3) text('NOM', Math.round(P.x + 9), Math.round(P.y - 40), '#efe6d6');
    } else if (f.k === 'mask') { ctx.globalAlpha = Math.min(1, a * 2); ctx.drawImage(IMG.masks, 0, 0, 8, 8, Math.round(f.x - 4), Math.round(f.y), 8, 8); ctx.globalAlpha = 1; }
    else if (f.k === 'boonget') {
      const k = 1 - f.t, im = IMG[f.icon];
      ctx.globalAlpha = Math.min(1, f.t * 3);
      ctx.drawImage(im, Math.round(f.x - im.width / 2), Math.round(f.y - 14 - k * 16), im.width, im.height);
      ctx.globalAlpha = 1;
    } else if (f.k === 'smoke' || f.k === 'dust' || f.k === 'gas') {
      ctx.fillStyle = f.k === 'gas' ? `rgba(207,195,122,${a})` : `rgba(180,184,191,${a})`;
      ctx.beginPath(); ctx.arc(f.x, f.y, f.r || 2, 0, 7); ctx.fill();
    } else if (f.k === 'pop') { textC(f.s, f.x, f.y - (0.7 - a) * 14, f.c); }
    else if (f.k === 'ring') { ctx.globalAlpha = Math.min(1, a * 2); ctx.strokeStyle = f.c || 'rgb(200,204,210)'; f.T0 = f.T0 || f.t; ctx.beginPath(); ctx.arc(f.x, f.y, Math.max(0, f.T0 - a) * 30, 0, 7); ctx.stroke(); ctx.globalAlpha = 1; }
    else if (f.k === 'suck') { ctx.fillStyle = f.c || '#d6f1f5'; ctx.fillRect(f.x, f.y, 2, 1); }
    else if (f.k === 'bolt') {
      // jagged lightning between two Hazed
      ctx.strokeStyle = ((G.t * 30) | 0) % 2 ? '#ffffff' : '#5fd3f5'; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(f.x, f.y);
      for (let i = 1; i < 5; i++) { const k = i / 5; ctx.lineTo(f.x + (f.tx - f.x) * k + rand(-3, 3), f.y + (f.ty - f.y) * k + rand(-3, 3)); }
      ctx.lineTo(f.tx, f.ty); ctx.stroke(); ctx.fillStyle = '#ffd45a'; ctx.fillRect(Math.round(f.tx) - 1, Math.round(f.ty) - 1, 3, 3);
    }
    else if (f.k === 'flame') { ctx.fillStyle = f.t > 0.2 ? '#ffd45a' : f.t > 0.1 ? '#ff7b2e' : '#d8322a'; ctx.fillRect(Math.round(f.x), Math.round(f.y), 2, 2); }
    else if (f.k === 'teawave') {
      const k = 1 - f.t / 0.35; ctx.globalAlpha = clamp(f.t / 0.35 + 0.3, 0, 1);
      ctx.strokeStyle = '#a8723f'; ctx.lineWidth = 3; ctx.beginPath(); ctx.ellipse(f.x, f.y, f.r * k, f.r * k * 0.55, 0, 0, 7); ctx.stroke();
      ctx.strokeStyle = '#e9d3b0'; ctx.lineWidth = 1; ctx.beginPath(); ctx.ellipse(f.x, f.y - 1, f.r * k, f.r * k * 0.55, 0, 0, 7); ctx.stroke(); ctx.globalAlpha = 1;
    }
    else if (f.k === 'tea') {
      // the long pulled-tea stream, arcing from the Hazed back to Jun Jie
      const k = 1 - f.t / 0.3; ctx.fillStyle = '#a8723f';
      for (let i = 0; i < 10; i++) { const q = i / 10; if (q > k + 0.2) break; const x = f.x + (f.tx - f.x) * q, y = f.y + (f.ty - f.y) * q - Math.sin(q * Math.PI) * 14; ctx.fillRect(Math.round(x), Math.round(y), 2, 2); }
    }
    else if (f.k === 'sound') {
      const k = 1 - f.t / 0.35; ctx.globalAlpha = clamp(f.t / 0.35 + 0.2, 0, 1); ctx.strokeStyle = '#f4f3ee';
      ctx.beginPath(); ctx.ellipse(f.x, f.y, f.r * k, f.r * k * 0.55, 0, 0, 7); ctx.stroke();
      ctx.strokeStyle = '#ffd45a'; ctx.beginPath(); ctx.ellipse(f.x, f.y, f.r * k * 0.8, f.r * k * 0.44, 0, 0, 7); ctx.stroke(); ctx.globalAlpha = 1;
    }
    else if (f.k === 'glitch') { ctx.fillStyle = ((f.x * 7 + G.t * 30) | 0) % 2 ? '#5fff8a' : '#1f8a4a'; ctx.globalAlpha = clamp(f.t * 4, 0, 1); ctx.fillRect(Math.round(f.x), Math.round(f.y), 2, 1); ctx.fillRect(Math.round(f.x) + 2, Math.round(f.y) + 1, 1, 1); ctx.globalAlpha = 1; }
    else if (f.k === 'flashw') { ctx.fillStyle = `rgba(255,255,255,${clamp(f.t / 0.35, 0, 1)})`; ctx.fillRect(camX(), camY(), W, H); }
    else if (f.k === 'slash') {
      const k = f.t / 0.18, L = 10, cx = Math.cos(f.a + 0.8), sy = Math.sin(f.a + 0.8);
      ctx.strokeStyle = `rgba(255,212,90,${k})`; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(f.x - cx * L, f.y - sy * L); ctx.lineTo(f.x + cx * L, f.y + sy * L); ctx.stroke();
      ctx.strokeStyle = `rgba(255,255,255,${k})`; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(f.x - cx * L * 0.6, f.y - sy * L * 0.6); ctx.lineTo(f.x + cx * L * 0.6, f.y + sy * L * 0.6); ctx.stroke();
    }
    else if (f.k === 'slam') { ctx.strokeStyle = `rgba(255,154,60,${a * 3})`; ctx.lineWidth = 2; ctx.beginPath(); ctx.ellipse(f.x, f.y, 34 * (1.3 - a * 2), 12, 0, 0, 7); ctx.stroke(); ctx.lineWidth = 1; }
  }
}
function updateFx(dt) {
  for (const f of G.fx) {
    f.t -= dt;
    if (f.vx != null) { f.x += f.vx * dt; f.y += f.vy * dt; }
    if (f.k === 'suck') { f.x += (f.tx - f.x) * 10 * dt; f.y += (f.ty - f.y) * 10 * dt; }
    if (f.t <= 0 && f.then && !f.done) { f.done = true; f.then(); }
  }
  G.fx = G.fx.filter(f => f.t > 0);
}
function drawHUD() {
  panel(3, 3, 8 + Math.ceil(P.max / 2) * 10, 14, '#6d6862', 'rgba(11,10,10,0.6)');
  drawMasks(6, 5, P.half, P.max);
  if (G.revives > 0) {   // spare lives: gold masks from the physio, oil from the mamak shop
    const src = G.reviveSrc || [], nm = src.filter(x => x === 'wind').length, no = src.filter(x => x === 'oil').length;
    let rx = 12 + Math.ceil(P.max / 2) * 10;
    if (nm) { ctx.drawImage(IMG.mask_gold, 1, 1, 14, 14, rx, 4, 9, 9); text('X' + nm, rx + 10, 6, '#f2c14e'); rx += 22; }
    if (no) { ctx.drawImage(IMG.it_oil, 1, 1, 14, 14, rx, 4, 9, 9); text('X' + no, rx + 10, 6, '#9cc24a'); }
  }
  ctx.fillStyle = 'rgba(11,10,10,0.55)'; ctx.fillRect(3, 16, textW(airTxt()) + 14, 11);
  airIcon(5, 18); text(airTxt(), 14, 18, '#bdefff');
  if (G.scene === 'run') { const pop = G.coinPop > 0 ? 1 : 0; ctx.drawImage(IMG.coin, 4, 27 - pop, 9, 9); text(G.coins, 15, 29 - pop, pop ? '#ffffff' : '#f2c14e'); }
  const L = PSI[G.psi];
  const lab = 'PSI ' + L.psi;
  panel(W - 64, 3, W - 3, 27, '#6d6862', 'rgba(11,10,10,0.6)');
  text(lab, W - 6 - textW(lab, 2), 6, L.col, 2);
  const rl = G.gate ? 'DRIVEWAY' : G.room <= FIGHT_ROOMS ? 'ROOM ' + G.room + '/' + FIGHT_ROOMS + '  W' + Math.max(1, G.wave) : G.room === SHOP_ROOM ? 'MAMAK SHOP' : 'BOSS';
  text(rl, W - 6 - textW(rl), 19, '#efe6d6');
  drawQuestPop();
  // boons
  let bx = 4;
  let by = H - 14;
  for (const k in P.boons) { if (!BOONS[k]) continue; if (bx > W - 80) { bx = 4; by -= 13; } ctx.drawImage(IMG[BOONS[k].icon], bx, by, 12, 12); if (P.boons[k] >= 2) text('2', bx + 9, by + 6, '#9cc24a'); bx += 13; }
  // weapon and special
  const wi = WPN[G.weapon].img;
  ctx.fillStyle = 'rgba(11,10,10,0.6)'; ctx.fillRect(W - 24, H - 24, 21, 21);
  ctx.drawImage(IMG[wi], W - 23, H - 23, 19, 19);
  if (P.spCd > 0) { ctx.fillStyle = 'rgba(11,10,10,0.6)'; ctx.fillRect(W - 24, H - 24, 21, 21 * clamp(P.spCd / (G.weapon === 'rotan' ? ROT_SP : 1.1), 0, 1)); }
  if (G.weapon === 'vac') for (let i = 0; i < 3; i++) { const f = clamp(P.charge - i, 0, 1); ctx.fillStyle = '#3a3f48'; ctx.fillRect(W - 23 + i * 7, H - 28, 6, 3); ctx.fillStyle = f >= 1 ? '#5fd3f5' : '#2f7a96'; ctx.fillRect(W - 23 + i * 7, H - 28, Math.round(6 * f), 3); }
  if (P.boons.triple) text('X3', W - 36, H - 22, '#5fd3f5');
  if (G.weapon === 'vac' && P.charge >= 3 && !P.beam && ((G.t * 4) | 0) % 2) text('BEAM!', W - 46, H - 34, '#bdefff');
  { const rdy = P.dashCd <= 0; text('SIAM', W - 64, H - 12, rdy ? '#efe6d6' : '#6d6862'); ctx.fillStyle = '#2a2420'; ctx.fillRect(W - 64, H - 5, 35, 2); ctx.fillStyle = rdy ? '#9cc24a' : '#e8a25c'; ctx.fillRect(W - 64, H - 5, 35 * (1 - clamp(P.dashCd / dashCdBase(), 0, 1)), 2); }
  if (G.boss && !['statue', 'cut', 'dead'].includes(G.boss.state)) {
    const B = G.boss;
    textC('SIR STAMFORD RAFFLES' + (B.phase === 3 ? ' - ENRAGED' : B.flagPhase ? ' - IMMUNE' : ''), 160, H - 14, B.phase === 3 ? '#ff4a2e' : B.state === 'stone' ? '#d6d1c8' : '#efe6d6');
    ctx.fillStyle = '#1b1c20'; ctx.fillRect(70, H - 7, 180, 4);
    ctx.fillStyle = B.state === 'stone' ? '#9aa0a9' : B.state === 'stunned' ? '#ffd45a' : B.phase === 3 && ((G.t * 4) | 0) % 2 ? '#ff4a2e' : '#d8322a';
    ctx.fillRect(71, H - 6, 178 * clamp(B.hp / B.max, 0, 1), 2);
    ctx.fillStyle = '#efe6d6'; ctx.fillRect(71 + Math.round(178 * 0.66), H - 8, 1, 6); ctx.fillRect(71 + Math.round(178 * 0.33), H - 8, 1, 6);
  }
}

/* ---------------- title / dead / won ---------------- */
const titleOpts = () => save.firstMask ? ['CONTINUE', 'NEW GAME', 'HOW TO PLAY', 'SETTINGS'] : ['NEW GAME', 'HOW TO PLAY', 'SETTINGS'];
function updateTitle() {
  const opts = titleOpts(), n = opts.length;
  if (G.confirmNew) {
    if (hit('act')) { for (const k in save) delete save[k]; Object.assign(save, freshSave()); persist(); G.confirmNew = false; G.titleSel = 0; G.weapon = null; G.psi = 0; sfx('pick'); startIntro('first'); }
    else if (hit('pause') || hit('dash')) { G.confirmNew = false; sfx('menu_back'); }
    return;
  }
  G.titleSel = Math.min(G.titleSel, n - 1);
  if (hit('up')) { G.titleSel = (G.titleSel + n - 1) % n; sfx('menu_move'); }
  if (hit('down')) { G.titleSel = (G.titleSel + 1) % n; sfx('menu_move'); }
  if (hit('click')) for (let i = 0; i < n; i++) if (mouse.y > 122 + i * 10 && mouse.y < 132 + i * 10 && mouse.x < 120) { G.titleSel = i; pressed.act = true; }
  if (hit('act')) {
    sfx('pick');
    const o = opts[G.titleSel];
    if (o === 'HOW TO PLAY') { G.showHelp = !G.showHelp; return; }
    if (o === 'SETTINGS') { G.showHelp = false; openSettings(); return; }
    if (o === 'CONTINUE') { G.showHelp = false; startIntro('return'); return; }
    if (o === 'NEW GAME') { G.showHelp = false; if (save.firstMask) G.confirmNew = true; else startIntro('first'); }
  }
}
function drawTitle() {
  ctx.drawImage(IMG.bg_title, 0, 0);
  const opts = titleOpts();
  opts.forEach((o, i) => text((G.titleSel === i ? '> ' : '  ') + o, 14, 126 + i * 10, G.titleSel === i ? '#f2c14e' : '#bfb4a2'));
  if (save.wins || save.deaths) text('RUNS: ' + (save.wins + save.deaths) + '  WINS: ' + save.wins, 14, 128 + opts.length * 10 + 4, '#6d6862');
  if (G.showHelp) {
    panel(150, 112, 314, 174);
    ['WASD/ARROWS  MOVE', 'J/CLICK  ATTACK', 'K/RIGHT CLICK  SPECIAL', 'SPACE  SIAM (DASH)', 'E/ENTER  INTERACT', 'GET A MASK AND A WEAPON,', 'THEN LEAVE BY THE EXIT.']
      .forEach((l, i) => text(l, 156, 117 + i * 8, i < 5 ? '#efe6d6' : '#bfb4a2'));
  }
  if (G.confirmNew) {
    ctx.fillStyle = 'rgba(11,10,10,0.6)'; ctx.fillRect(0, 0, W, H);
    panel(60, 62, 260, 118, '#d8322a');
    textC('START A NEW GAME?', 160, 70, '#f2c14e');
    textC('THIS ERASES YOUR CLEAN AIR,', 160, 82, '#efe6d6');
    textC('UPGRADES AND WINS.', 160, 90, '#efe6d6');
    keyChip('ENTER', 'YES', 92, 104, '#d8322a'); keyChip('ESC', 'NO', 176, 104, '#9cc24a');
  }
}
function drawEnd(won) {
  drawRun();
  ctx.fillStyle = won ? 'rgba(20,40,50,0.55)' : 'rgba(58,15,10,0.6)'; ctx.fillRect(0, 0, W, H);
  const t1 = won ? 'THE RIVER BREATHES' : "YOU CAN'T BREATHE";
  outlined(t1, Math.round(160 - textW(t1, 3) / 2), 26, won ? '#bdefff' : '#d8322a', 3);
  if (G.deadT > 0.8) textC(won ? 'RAFFLES IS DISPERSED... FOR NOW.' : 'PRESS ENTER TO WAKE UP', 160, 52, '#efe6d6');
  if (won && G.deadT > 1.6) {
    textC(save.wins === 1 ? 'WHAT IS THIS THING HE DROPPED?' : 'THE HAZE IS ROLLING BACK IN, THICKER THAN BEFORE.', 160, 66, '#e8a25c');
    if (save.wins === 1) { panel(86, 80, 234, 104, '#9cc24a'); textC('NEW: PSI KIOSK UNLOCKED', 160, 85, '#9cc24a'); textC('HAZIER RUNS, BIGGER REWARDS', 160, 94, '#bfb4a2'); }
    if (((G.t * 2) | 0) % 2) textC('PRESS ENTER', 160, 112, '#efe6d6');
    if (G.coreGot) { const s = 'GOT A HAZED CORE!' + (save.rotanOpen ? '' : ' ' + Math.min(3, save.cores) + ' / 3'), w = textW(s) + 10, x = Math.round(160 - w / 2); panel(x - 4, 119, x + w + 4, 130, '#ff9a3c'); coreIcon(x, 121); text(s, x + 10, 122, '#ff9a3c'); }
  }
  panel(92, 132, 228, 172);
  const rows = [['ROOMS CLEARED', G.stats.rooms + ' / ' + FIGHT_ROOMS], ['HAZED DISPERSED', G.stats.kills], ['COINS', (G.stats.coins || 0) + (won ? '' : ' (LOST)')], ['CLEAN AIR', '+' + G.stats.air]];
  rows.forEach(([k, v], i) => { text(k, 100, 137 + i * 9, '#bfb4a2'); text(v, 220 - textW(String(v)), 137 + i * 9, k === 'CLEAN AIR' ? '#bdefff' : '#efe6d6'); });
}
const pauseOpts = () => G.scene === 'run' ? ['RESUME', 'SETTINGS', 'GIVE UP RUN', 'RETURN TO TITLE'] : ['RESUME', 'SETTINGS', 'RETURN TO TITLE'];
function updatePause() {
  const o = pauseOpts(), n = o.length; G.pauseSel = Math.min(G.pauseSel || 0, n - 1);
  if (hit('pause') || pauseClicked()) { G.paused = false; return; }
  if (hit('up')) { G.pauseSel = (G.pauseSel + n - 1) % n; sfx('menu_move'); }
  if (hit('down')) { G.pauseSel = (G.pauseSel + 1) % n; sfx('menu_move'); }
  if (hit('click')) for (let i = 0; i < n; i++) if (mouse.y >= 72 + i * 14 && mouse.y < 84 + i * 14 && Math.abs(mouse.x - 160) < 60) { G.pauseSel = i; pressed.act = true; }
  if (hit('act')) {
    const c = o[G.pauseSel]; if (c === 'SETTINGS') { sfx('pick'); openSettings(); return; }
    G.paused = false; G.pauseSel = 0; sfx('pick');
    if (c === 'GIVE UP RUN') die();
    if (c === 'RETURN TO TITLE') toTitle();
  }
}
const CHEATS = [
  ['inv', 'INVULNERABILITY', "YOU CAN'T DIE."],
  ['wallet', 'BOTTOMLESS WALLET', 'UNLIMITED COINS.'],
  ['air', 'UNLIMITED CLEAN AIR', 'ENDLESS CLEAN AIR FOR PHYSIO JOAN.'],
  ['maxup', 'MAX UPGRADES', 'EVERY PHYSIO UPGRADE AT MAX RANK.'],
  ['flash', 'THE FLASH', 'ATTACK AND SHOOT SUPER FAST.'],
  ['raid', 'RAID BOSS', 'EVERY POWER-UP AND UPGRADE. JUN JIE TURNS GOLD.'],
  ['baby', 'BABY MODE', 'AN EASIER GAME: FEWER, SLOWER HAZED THAT HIT SOFTER.'],
  ['allcos', 'ALL COSMETICS', 'EVERY OUTFIT, MASK AND HAT IN THE TOILET MIRROR.'],
];
const CHEAT_CODE = 'HAZED', CHEAT_BACK_Y = 160;
function openSettings() { G.settings = { page: 'main', sel: 0, code: '', cur: 0, msg: '' }; }
const settingsOpts = () => ['SOUND: ' + (muted ? 'OFF' : 'ON'), 'FULL SCREEN', 'CHEATS', 'BACK'];
function setCheat(k, on) {
  save.cheats = save.cheats || {};
  if (k === 'air') { if (on) { save.airBackup = save.cleanAir; save.cleanAir = 99999; } else { save.cleanAir = save.airBackup || 0; } }
  save.cheats[k] = on; persist();
  if (k === 'raid' || k === 'maxup') { P.max = G.scene === 'run' ? runMax() : maxHalf(); if (G.scene === 'run') { if (k === 'raid') { if (on) { G.raidBackup = JSON.parse(JSON.stringify(P.boons)); raidBoons(); } else { P.boons = G.raidBackup || {}; G.raidBackup = null; P.max = runMax(); } } P.half = Math.min(P.half, P.max); } }
}
function updateSettings() {
  const S = G.settings;
  const back = hit('pause') || (S.page !== 'pass' && hit('dash'));
  if (S.page === 'main') {
    const o = settingsOpts(), n = o.length;
    if (back) { G.settings = null; sfx('menu_back'); return; }
    if (hit('up')) { S.sel = (S.sel + n - 1) % n; sfx('menu_move'); }
    if (hit('down')) { S.sel = (S.sel + 1) % n; sfx('menu_move'); }
    if (hit('click')) for (let i = 0; i < n; i++) if (mouse.y >= 60 + i * 14 && mouse.y < 72 + i * 14 && Math.abs(mouse.x - 160) < 70) { S.sel = i; pressed.act = true; }
    if (hit('act')) {
      const c = o[S.sel];
      if (c.startsWith('SOUND')) { muted = !muted; if (muted) vacHum(false); Music.setMuted(muted); sfx('menu_select'); }
      else if (c === 'FULL SCREEN') { toggleFullscreen(); }
      else if (c === 'CHEATS') { sfx('menu_select'); S.page = 'pass'; S.code = ''; S.cur = 0; S.msg = ''; }
      else { G.settings = null; sfx('menu_back'); }
    }
  } else if (S.page === 'pass') {
    // type the letters on a keyboard, or use up/down to pick a letter and E to add it (Chao Keng deletes)
    if (hit('pause')) { S.page = 'main'; sfx('menu_back'); return; }
    if (hit('up')) { S.cur = (S.cur + 25) % 26; sfx('menu_move'); }
    if (hit('down')) { S.cur = (S.cur + 1) % 26; sfx('menu_move'); }
    if (hit('dash') && S.code.length) { S.code = S.code.slice(0, -1); sfx('menu_back'); }
    if (hit('act')) {
      if (S.enter || S.code.length >= 5) checkCode();
      else { S.code += String.fromCharCode(65 + S.cur); sfx('talk'); if (S.code.length >= 5) checkCode(); }
    }
    S.enter = false;
  } else if (S.page === 'cheats') {
    const n = CHEATS.length + 1;
    if (back) { S.page = 'main'; S.sel = 2; sfx('menu_back'); return; }
    if (hit('up')) { S.sel = (S.sel + n - 1) % n; sfx('menu_move'); }
    if (hit('down')) { S.sel = (S.sel + 1) % n; sfx('menu_move'); }
    const VIS = 6; S.cs = S.cs || 0;
    if (hit('wheelUp')) S.cs = Math.max(0, S.cs - 1);
    if (hit('wheelDown')) S.cs = Math.min(CHEATS.length - VIS, S.cs + 1);
    if ((hit('up') || hit('down')) && S.sel < CHEATS.length) S.cs = clamp(S.cs, S.sel - VIS + 1, S.sel);   // keep the picked cheat on screen
    if (hit('click')) {
      for (let i = 0; i < VIS; i++) if (mouse.y >= 27 + i * 20 && mouse.y < 46 + i * 20 && mouse.x > 30 && mouse.x < 290) { S.sel = S.cs + i; pressed.act = true; }
      if (mouse.y >= CHEAT_BACK_Y && mouse.y < CHEAT_BACK_Y + 12 && Math.abs(mouse.x - 160) < 30) { S.sel = CHEATS.length; pressed.act = true; }
    }
    if (hit('act')) {
      if (S.sel === CHEATS.length) { S.page = 'main'; S.sel = 2; sfx('menu_back'); return; }
      const k = CHEATS[S.sel][0]; setCheat(k, !cheat(k)); sfx(cheat(k) ? 'rank_up' : 'menu_back');
    }
  }
}
function checkCode() {
  const S = G.settings;
  if (S.code === CHEAT_CODE) { save.cheatsUnlocked = true; persist(); S.page = 'cheats'; S.sel = 0; sfx('powerup'); }
  else { S.msg = 'WRONG CODE.'; S.code = ''; G.shake = 0.15; sfx('no_money'); }
}
// on a keyboard, the code box takes letters directly
addEventListener('keydown', e => {
  const S = G.settings; if (!S || S.page !== 'pass') return;
  const k = e.key || '';
  if (/^[a-zA-Z]$/.test(k)) {
    for (const a in pressed) pressed[a] = false;
    if (S.code.length < 5) { S.code += k.toUpperCase(); S.msg = ''; sfx('talk'); if (S.code.length >= 5) checkCode(); }
  } else if (k === 'Backspace') { S.code = S.code.slice(0, -1); e.preventDefault(); }
  else if (k === 'Enter') S.enter = true;
});
function drawSettings() {
  const S = G.settings; if (!S) return;
  ctx.fillStyle = 'rgba(11,10,10,0.85)'; ctx.fillRect(0, 0, W, H);
  if (S.page === 'main') {
    outlined('SETTINGS', Math.round(160 - textW('SETTINGS', 3) / 2), 24, '#f2c14e', 3);
    settingsOpts().forEach((o, i) => { const sel = i === S.sel, y = 60 + i * 14; if (sel) panel(90, y - 2, 230, y + 9, '#f2c14e'); textC(o, 160, y + 1, sel ? '#f2c14e' : '#bfb4a2'); });
    textC('W/S TO CHOOSE, ENTER TO PICK, ESC TO GO BACK', 160, H - 20, '#6d6862');
  } else if (S.page === 'pass') {
    outlined('CHEATS', Math.round(160 - textW('CHEATS', 3) / 2), 24, '#f2c14e', 3);
    textC('ENTER THE CODE', 160, 54, '#efe6d6');
    for (let i = 0; i < 5; i++) {
      const x = 106 + i * 22, ch = S.code[i] || (i === S.code.length ? String.fromCharCode(65 + S.cur) : '');
      panel(x, 68, x + 18, 90, i === S.code.length ? '#f2c14e' : '#6d6862');
      if (ch) text(ch, x + 5, 74, i < S.code.length ? '#efe6d6' : ((G.t * 3 | 0) % 2 ? '#f2c14e' : '#6d6862'), 2);
    }
    if (S.msg) textC(S.msg, 160, 100, '#ff7b6e');
    textC('TYPE IT, OR W/S TO PICK A LETTER AND E TO ADD IT', 160, 118, '#bfb4a2');
    textC('SPACE DELETES, ESC TO GO BACK', 160, 128, '#6d6862');
  } else {
    outlined('CHEATS', Math.round(160 - textW('CHEATS', 3) / 2), 5, '#f2c14e', 3);
    const cs = S.cs || 0;
    CHEATS.forEach(([k, name, desc], i) => {
      if (i < cs || i >= cs + 6) return;
      const y = 27 + (i - cs) * 20, sel = i === S.sel, on = cheat(k);
      panel(30, y, 290, y + 19, sel ? '#f2c14e' : '#4a443a');
      text(name, 36, y + 4, sel ? '#f2c14e' : '#efe6d6'); text(desc, 36, y + 12, '#8a7d6e');
      ctx.fillStyle = on ? '#9cc24a' : '#3a302a'; ctx.fillRect(254, y + 5, 28, 10); text(on ? 'ON' : 'OFF', on ? 264 : 262, y + 8, on ? '#14200c' : '#8a7d6e', 1, null);
    });
    { const th = Math.round(119 * 6 / CHEATS.length), ty = 27 + Math.round((119 - th) * cs / Math.max(1, CHEATS.length - 6)); ctx.fillStyle = '#302c25'; ctx.fillRect(293, 27, 3, 119); ctx.fillStyle = '#f2c14e'; ctx.fillRect(293, ty, 3, th); }   // scrollbar
    if (cs + 6 < CHEATS.length) textC('SCROLL FOR MORE', 160, 149, '#8a7d6e');
    const by = CHEAT_BACK_Y, bs = S.sel === CHEATS.length;
    if (bs) panel(130, by, 190, by + 11, '#f2c14e'); textC('BACK', 160, by + 3, bs ? '#f2c14e' : '#bfb4a2');
  }
}
function toTitle() {
  G.scene = 'title'; G.titleSel = 0; G.menu = null; G.dialog = null; G.dlgQ = []; G.boon = null; G.shop = null; G.cut = null; G.boss = null;
  G.enemies = []; G.shots = []; G.fx = []; G.pickups = []; G.flags = []; G.waves = []; G.banner = null; G.weapon = null; G.cam = { x: 0, y: 0 };
  P.boons = {}; P.masked = false; persist();
}
function drawLoadout() {
  // left column: every boon (with level), shop buffs and revives this run
  const rows = Object.keys(P.boons).filter(k => BOONS[k]).map(k => ({ icon: BOONS[k].icon, name: BOONS[k].name, lv: P.boons[k] }));
  if (P.kopi) rows.push({ icon: 'it_kopi', name: 'KOPI PENG', lv: 0 });
  { const src = G.reviveSrc || [], nm = src.filter(x => x === 'wind').length, no = src.filter(x => x === 'oil').length;
    if (nm) rows.push({ icon: 'mask_gold', name: 'EXTRA MASK X' + nm, lv: 0 });
    if (no) rows.push({ icon: 'it_oil', name: 'MED. OIL X' + no, lv: 0 }); }
  panel(4, 4, 92, H - 4, '#6d6862');
  text('POWER-UPS', 9, 8, '#f2c14e');
  if (!rows.length) { wrap('NONE YET. CLEAR A ROOM TO GET ONE.', 78).forEach((l, i) => text(l, 9, 20 + i * 8, '#6d6862')); return; }
  const per = Math.min(13, Math.floor((H - 26) / rows.length));
  rows.forEach((r, i) => {
    const y = 18 + i * per, sz = Math.min(12, per - 1);
    ctx.drawImage(IMG[r.icon], 8, y, sz, sz);
    const nm = r.name.length > 14 ? r.name.slice(0, 13) + '.' : r.name;
    text(nm, 8 + sz + 3, y + Math.round(sz / 2) - 2, '#efe6d6');
    if (r.lv >= 2) text('II', 84, y + Math.round(sz / 2) - 2, '#9cc24a');
  });
}
function drawPause() {
  ctx.fillStyle = 'rgba(11,10,10,0.7)'; ctx.fillRect(0, 0, W, H);
  if (G.scene === 'run') drawLoadout();
  outlined('PAUSED', Math.round(160 - textW('PAUSED', 3) / 2), 36, '#f2c14e', 3);
  pauseOpts().forEach((o, i) => {
    const sel = i === (G.pauseSel || 0), y = 72 + i * 14;
    if (sel) panel(100, y - 2, 220, y + 9, o === 'GIVE UP RUN' ? '#d8322a' : '#f2c14e');
    textC(o, 160, y + 1, sel ? (o === 'GIVE UP RUN' ? '#ff7b6e' : '#f2c14e') : '#bfb4a2');
  });
  ['W/S TO CHOOSE, ENTER TO PICK,', 'P TO RESUME'].forEach((l, i) => textC(l, 160, 72 + pauseOpts().length * 14 + 4 + i * 9, '#6d6862'));
  if (G.scene === 'run') wrap('LEAVING A RUN LOSES IT, BUT YOUR CLEAN AIR IS SAVED.', 128).forEach((l, i) => textC(l, 160, H - 26 + i * 9, '#6d6862'));
  drawPauseQuests();
}

// one banner at a time: a new one waits for the current one, unless it's the same text
{
  let cur = null; const q = [];
  Object.defineProperty(G, 'banner', { configurable: true,
    get: () => cur,
    set: v => { if (!v) { cur = null; q.length = 0; return; } if (cur && cur.t > 0.3 && cur.s !== v.s) { if (!q.some(b => b.s === v.s) && q.length < 3) q.push(v); } else cur = v; } });
  window.nextBanner = () => { cur = q.shift() || null; };
}
/* ---------------- main loop ---------------- */
let last = performance.now();
/* ================= Stage 1: the pharmacy, Pharmacist Adelle, the quest board and chops ================= */
// Everything here hangs off save.ph so old saves keep working. Lines are written in normal case and shown in capitals.
const UP = s => String(s).toUpperCase();
function ph() {
  if (!save.ph) save.ph = { open: false, met: false, visits: 0, stage: 1, chops: 0, chopsEver: 0, owned: {}, bought: 0, react: null, firstClearSaid: false, winStreak: 0, ach: {}, q: null };
  const S = save.ph;
  for (const k of ['Hall Hoodie', 'Surgical Blue', 'Hair', 'White']) S.owned[k] = true;
  if (!S.q) S.q = { board: { easy: null, medium: null, hard: null }, prog: {}, decks: { easy: [], medium: [], hard: [] }, owed: [], swapUsed: false, fresh: true };
  return S;
}
const runsDone = () => (save.deaths || 0) + (save.wins || 0);
const pharmShouldOpen = () => runsDone() >= 2 || (save.wins || 0) > 0;
let achGet = id => { const S = ph(); if (!S.ach[id]) { S.ach[id] = Date.now(); persist(); } };

/* ---------- the shop's stock (prices in chops; null = earned, not sold) ---------- */
const COS = [
  // outfits
  ['Uni Tee', 'outfit', 2], ['Polo & Bermudas', 'outfit', 2], ['School Uniform', 'outfit', 1], ['Patient Gown', 'outfit', 3], ['Basic Tee & Bermudas', 'outfit', 2],
  ['SUTD Tee', 'outfit', 3], ['Admin T', 'outfit', 4], ['Kopitiam Uncle', 'outfit', 4], ['Swimming Trunks', 'outfit', 3], ['China Aunty', 'outfit', 5],
  ['All White', 'outfit', 6], ['Tamil Veshti', 'outfit', 6], ['Diver Wetsuit', 'outfit', 6], ['Air Force', 'outfit', 6], ['Navy', 'outfit', 6],
  ['SCDF Firefighter', 'outfit', 8], ['SPF Officer', 'outfit', 8], ['Office Suit', 'outfit', 8], ['Merlion Suit', 'outfit', 8], ['Lion Dance', 'outfit', 8, ['Lion Dance Head']],
  ['SAF No. 4', 'outfit', null, 0, 'Beat Raffles with both weapons'], ['Samsui Woman', 'outfit', null, ['Samsui Headdress'], 'Clear Boat Quay 50 times'],
  ['Sang Nila Utama', 'outfit', null, ['Royal Crown'], 'Beat Raffles at every PSI'], ['Hazed Brute', 'outfit', null, ['Brute Head'], 'Defeat 500 Brutes'],
  ['Pontianak', 'outfit', null, ['Pontianak Hair'], 'Hidden achievement'], ['Pocong', 'outfit', null, ['Pocong Wrap'], 'Hidden achievement'],
  ['Prison Stripes', 'outfit', null, 0, 'Hidden achievement'], ['Hazmat Suit', 'outfit', null, 0, 'Disperse 1,000 Hazed'], ['Raffles Statue', 'outfit', null, 0, 'Beat Raffles 15 times'],
  // masks
  ['Black N95', 'mask', 3], ['Pink Floral', 'mask', 3], ['Kopitiam Check', 'mask', 4], ['Batik', 'mask', 5],
  ['NS Pixel Camo', 'mask', null, 0, 'Disperse 500 Hazed'], ['Red & White', 'mask', null, 0, 'Beat Raffles at PSI 248'], ['Gold N95', 'mask', null, 0, 'Every other achievement'],
  // full heads
  ['Scuba Mask', 'head', 5], ['Durian Head', 'head', 6], ['Hazmat Hood', 'head', 6], ['Merlion Head', 'head', 8], ['Raffles Head', 'head', null, 0, 'Beat Raffles 10 times'],
  // headwear
  ['Swimming Cap', 'hat', 2], ['Aunty Visor', 'hat', 2], ['Jockey Cap', 'hat', 3], ['Air Force Beret', 'hat', 3], ['Navy Beret', 'hat', 3], ['Jungle Hat', 'hat', 4], ['Crab Hat', 'hat', 4],
  ['Grey Beret', 'hat', 4], ['Khaki Beret', 'hat', 4], ['Blue Beret', 'hat', 4], ['Green Beret', 'hat', 4], ['SPF Cap', 'hat', 6],
  ['Beret', 'hat', null, 0, 'Clear PSI 164'], ['Red Beret', 'hat', null, 0, 'Beat Raffles without taking damage'], ['SCDF Helmet', 'hat', null, 0, 'Put out 50 fires with Chilli Padi'], ['Hawker Hat', 'hat', null, 0, 'Every Hawker Auntie power-up'],
  // hair, extras, trails
  ['Bald', 'hair', 3], ['Camo Face', 'extra', 4], ['Heart Plaster', 'extra', null, 0, 'Hidden achievement'], ['Pink Lanyard', 'extra', null, 0, 'Hidden achievement'],
  ['Teh Tarik', 'trail', 2], ['Pandan', 'trail', 2], ['Bandung', 'trail', 2], ['Siren', 'trail', 4], ['Haze Grey', 'trail', null, 0, 'Hit 200 Hazed with Siam'],
].map(([name, slot, price, bundle, how]) => ({ name, slot, price, bundle: bundle || [], how: how || '' }));
const COS_HEADS = new Set(['Lion Dance Head', 'Brute Head', 'Pontianak Hair', 'Pocong Wrap']);
const COS_TABS = [['outfit', 'OUTFITS'], ['mask', 'MASKS'], ['head', 'HEADS'], ['hat', 'HATS'], ['hair', 'HAIR'], ['extra', 'EXTRAS'], ['trail', 'TRAILS']];
const forSale = () => COS.filter(c => c.price != null);
const ownsAllForSale = () => forSale().every(c => ph().owned[c.name]);     // the ALL COSMETICS cheat is ignored here on purpose
const BUY_LINE = {
  'Durian Head': "Finally! I've been trying to sell that for weeks.", 'China Aunty': 'The aunty who donated it would be so proud.',
  'Swimming Trunks': "There's no pool here, you know. Please wear a shirt over it.", 'Swimming Cap': "Perfect for all the swimming you're going to do. In the haze.",
  'Merlion Suit': 'My best seller. Well. My only fish suit.', 'Merlion Head': "Please don't test if it spouts water in here.", 'Lion Dance': 'Huat ah! Do a little dance for me first.',
  'Kopitiam Uncle': 'Comes with free kopi. Just kidding, we have none.', 'Patient Gown': "You paid for this? You get one free when you're admitted, you know.",
  'School Uniform': "Going back to secondary school? I won't tell anyone.", 'Bald': 'Are you sure? ...Okay. Hold still.', 'Camo Face': "Wash it off before Nurse Mei sees you. She'll scold you.",
  'Office Suit': "Ooh, that one. You'll look so handsome.", 'All White': "Don't spill anything on it. I'm serious.",
};

/* ---------- quests ---------- */
// kind: never two of the same kind on the board. scope 'total' adds up across runs, 'run' takes the best single run.
const RS = { };   // this run's counters
function resetRS() {
  for (const k in RS) delete RS[k];
  Object.assign(RS, { boons: 0, l2: 0, pats: {}, boxes: 0, roomHit: false, roomSp: false, noHitStreak: 0, noSpRooms: 0, killStreak: 0, healed: false, shopBuys: 0, flags: 0,
    revived: false, runT: 0, fightT: 0, fightSiam: 0, lastHalf: null });
}
resetRS();
const Q = (id, d, from, text, kind, scope, n, ev, f, open) => ({ id, d, from, text, kind, scope, n, ev, f, open: open || (() => true) });
const won = () => (save.wins || 0) > 0;
const QDEF = [
  // easy
  Q('e_box5', 'easy', 'Kitchen', 'Break 5 boxes', 'boxes', 'total', 5, 'box', () => 1),
  Q('e_wisp25', 'easy', 'Security', 'Disperse 25 Wisps', 'disperse', 'total', 25, 'kill', x => x.type === 'wisp' ? 1 : 0),
  Q('e_spit10', 'easy', 'Security', 'Disperse 10 Spitters', 'disperse', 'total', 10, 'kill', x => x.type === 'spitter' ? 1 : 0),
  Q('e_brute3', 'easy', 'Lab', 'Disperse 3 Brutes', 'disperse', 'total', 3, 'kill', x => x.type === 'brute' ? 1 : 0),
  Q('e_fam', 'easy', 'Lab', 'Disperse a Brute and all its splits', 'disperse', 'run', 1, 'brutefam', () => 1),
  Q('e_haze40', 'easy', 'Security', 'Disperse 40 Hazed', 'disperse', 'total', 40, 'kill', () => 1),
  Q('e_pe', 'easy', 'Physio Joan', 'Take a power-up from the PE Teacher', 'patron', 'run', 1, 'boon', x => x.pat === 'pe' ? 1 : 0),
  Q('e_auntie', 'easy', 'Kitchen', 'Take a power-up from the Hawker Auntie', 'patron', 'run', 1, 'boon', x => x.pat === 'auntie' ? 1 : 0),
  Q('e_uncle', 'easy', 'IT Department', 'Take a power-up from the Sim Lim Uncle', 'patron', 'run', 1, 'boon', x => x.pat === 'uncle' ? 1 : 0),
  Q('e_gong', 'easy', 'Day Care', 'Take a power-up from Tai Chi Ah Gong', 'patron', 'run', 1, 'boon', x => x.pat === 'gong' ? 1 : 0),
  Q('e_kid', 'easy', "Children's Ward", 'Take a power-up from the Kampung Kid', 'patron', 'run', 1, 'boon', x => x.pat === 'kid' ? 1 : 0),
  Q('e_boons3', 'easy', 'Records', 'Take 3 power-ups in one run', 'boons', 'run', 3, 'boon', () => RS.boons),
  Q('e_l2', 'easy', 'X-Ray', 'Upgrade any power-up to level II', 'boons', 'run', 1, 'boon', () => RS.l2 ? 1 : 0),
  Q('e_room3', 'easy', 'Porters', 'Reach room 3', 'reach', 'run', 1, 'room', x => x.n >= 3 ? 1 : 0),
  Q('e_airrw', 'easy', 'Respiratory Ward', 'Claim the clean air reward in a run', 'air', 'run', 1, 'airreward', () => 1),
  Q('e_air15', 'easy', 'Pharmacy', 'Bring home 15 clean air', 'air', 'total', 15, 'runend', x => x.air),
  Q('e_coin80', 'easy', 'Admin', 'Pick up 80 coins', 'coins', 'total', 80, 'coin', x => x.n),
  Q('e_siam40', 'easy', 'Physio Joan', 'Siam 40 times', 'siam', 'total', 40, 'siam', () => 1),
  Q('e_sp20', 'easy', "Children's Ward", 'Use your special attack 20 times', 'special', 'total', 20, 'special', () => 1),
  Q('e_sphit2', 'easy', "Children's Ward", 'Hit 2 Hazed with one special attack', 'special', 'run', 2, 'sphit', x => x.n),
  Q('e_spbox', 'easy', 'Kitchen', 'Break a box with a special attack', 'boxes', 'run', 1, 'box', x => x.special ? 1 : 0),
  Q('e_r1nohit', 'easy', 'Security', 'Clear the first room without getting hit', 'nohit', 'run', 1, 'clear', x => x.n === 1 && !RS.roomHit ? 1 : 0),
  Q('e_nosp', 'easy', 'Laundry', 'Clear a room without using your special', 'nospecial', 'run', 1, 'clear', () => RS.roomSp ? 0 : 1),
  Q('e_heal', 'easy', 'Emergency', 'Heal a mask during a run', 'heal', 'run', 1, 'heal', () => 1),
  Q('e_news', 'easy', 'Admin', 'Watch the news, then head out', 'news', 'run', 1, 'news', () => 1),
  // medium
  Q('m_haze80', 'medium', 'Security', 'Disperse 80 Hazed', 'disperse', 'total', 80, 'kill', () => 1),
  Q('m_brute15', 'medium', 'Lab', 'Disperse 15 Brutes', 'disperse', 'total', 15, 'kill', x => x.type === 'brute' ? 1 : 0),
  Q('m_spit30', 'medium', 'Lab', 'Disperse 30 Spitters', 'disperse', 'total', 30, 'kill', x => x.type === 'spitter' ? 1 : 0),
  Q('m_raff', 'medium', 'Porters', 'Reach Raffles', 'raffles', 'run', 1, 'room', x => x.n >= BOSS_ROOM ? 1 : 0),
  Q('m_raff3', 'medium', "Children's Ward", 'Reach Raffles with 3 full masks', 'raffles', 'run', 1, 'room', x => x.n >= BOSS_ROOM && P.half >= 6 ? 1 : 0),
  Q('m_buy2', 'medium', 'Kitchen', 'Buy 2 things at the Mamak Shop', 'shop', 'run', 2, 'shopbuy', () => RS.shopBuys),
  Q('m_shop150', 'medium', 'Admin', 'Reach the Mamak Shop with 150 coins', 'shop', 'run', 1, 'room', x => x.n === SHOP_ROOM && G.coins >= 150 ? 1 : 0),
  Q('m_shopnoheal', 'medium', 'Emergency', 'Reach the Mamak Shop without healing', 'shop', 'run', 1, 'room', x => x.n === SHOP_ROOM && !RS.healed ? 1 : 0),
  Q('m_nohit2', 'medium', 'Security', 'Clear 2 rooms in a row without getting hit', 'nohit', 'run', 2, 'clear', () => RS.noHitStreak),
  Q('m_streak10', 'medium', 'Lab', 'Disperse 10 Hazed in a row without a hit', 'nohit', 'run', 10, 'kill', () => RS.killStreak),
  Q('m_sphit4', 'medium', "Children's Ward", 'Hit 4 Hazed with one special attack', 'special', 'run', 4, 'sphit', x => x.n),
  Q('m_fast30', 'medium', 'Physio Joan', 'Clear a room in under 30 seconds', 'speed', 'run', 1, 'clear', () => G.timeInRoom < 30 ? 1 : 0),
  Q('m_box15', 'medium', 'Kitchen', 'Break 15 boxes in one run', 'boxes', 'run', 15, 'box', () => RS.boxes),
  Q('m_l2x2', 'medium', 'X-Ray', 'Have 2 power-ups at level II', 'boons', 'run', 2, 'boon', () => RS.l2),
  Q('m_pats4', 'medium', 'Records', 'Take power-ups from 4 different patrons', 'patron', 'run', 4, 'boon', () => Object.keys(RS.pats).length),
  Q('m_same3', 'medium', 'Physio Joan', 'Take 3 power-ups from the same patron', 'patron', 'run', 3, 'boon', () => Math.max(0, ...Object.values(RS.pats))),
  Q('m_nosp3', 'medium', 'Laundry', 'Clear 3 rooms without using your special', 'nospecial', 'run', 3, 'clear', () => RS.noSpRooms),
  Q('m_air40', 'medium', 'Respiratory Ward', 'Bring home 40 clean air', 'air', 'total', 40, 'runend', x => x.air),
  Q('m_fan60', 'medium', 'Day Care', 'Hit 60 Hazed with thrown fans', 'special', 'total', 60, 'fanhit', () => 1),
  Q('m_beam10', 'medium', 'IT Department', 'Fire the Cyclone Vac beam 10 times', 'special', 'total', 10, 'beam', () => 1),
  Q('m_flags4', 'medium', 'Security', "Knock down 4 of Raffles' flags in one fight", 'raffles', 'run', 4, 'flag', () => RS.flags, () => (save.raffCount || 0) > 0),
  Q('m_beat', 'medium', 'Admin', 'Beat Raffles', 'raffles', 'run', 1, 'win', () => 1, won),
  // hard
  Q('h_164', 'hard', 'Admin', 'Beat Raffles at PSI 164', 'raffles', 'run', 1, 'win', () => G.psi >= 1 ? 1 : 0, won),
  Q('h_248', 'hard', 'Admin', 'Beat Raffles at PSI 248', 'raffles', 'run', 1, 'win', () => G.psi >= 2 ? 1 : 0, won),
  Q('h_fans', 'hard', 'Day Care', 'Beat Raffles with the Chinese Fans', 'raffles', 'run', 1, 'win', () => G.weapon === 'fan' ? 1 : 0, won),
  Q('h_vac', 'hard', 'IT Department', 'Beat Raffles with the Cyclone Vac', 'raffles', 'run', 1, 'win', () => G.weapon === 'vac' ? 1 : 0, won),
  Q('h_noko', 'hard', 'Emergency', 'Beat Raffles without getting knocked out', 'raffles', 'run', 1, 'win', () => RS.revived ? 0 : 1, won),
  Q('h_noheal', 'hard', 'Emergency', 'Beat Raffles without healing', 'raffles', 'run', 1, 'win', () => RS.healed ? 0 : 1, won),
  Q('h_90', 'hard', 'Physio Joan', 'Beat Raffles in under 90 seconds', 'raffles', 'run', 1, 'win', () => RS.fightT < 90 ? 1 : 0, won),
  Q('h_nosiam', 'hard', 'Physio Joan', 'Beat Raffles without Siam-ing in the fight', 'raffles', 'run', 1, 'win', () => RS.fightSiam ? 0 : 1, won),
  Q('h_nobuy', 'hard', 'Kitchen', 'Beat Raffles without buying anything', 'raffles', 'run', 1, 'win', () => RS.shopBuys ? 0 : 1, won),
  Q('h_4boons', 'hard', 'Records', 'Beat Raffles with 4 or fewer power-ups', 'raffles', 'run', 1, 'win', () => RS.boons <= 4 ? 1 : 0, won),
  Q('h_3l2', 'hard', 'X-Ray', 'Beat Raffles with 3 power-ups at level II', 'raffles', 'run', 1, 'win', () => RS.l2 >= 3 ? 1 : 0, won),
  Q('h_2row', 'hard', 'Admin', 'Beat Raffles 2 runs in a row', 'raffles', 'run', 1, 'win', () => ph().winStreak >= 2 ? 1 : 0, won),
  Q('h_nohit4', 'hard', 'Security', 'Clear 4 rooms in a row without getting hit', 'nohit', 'run', 4, 'clear', () => RS.noHitStreak),
  Q('h_rafffull', 'hard', "Children's Ward", 'Reach Raffles on full masks', 'raffles', 'run', 1, 'room', x => x.n >= BOSS_ROOM && P.half >= P.max ? 1 : 0),
  Q('h_shop4', 'hard', 'Porters', 'Reach the Mamak Shop in under 5 minutes', 'shop', 'run', 1, 'room', x => x.n === SHOP_ROOM && RS.runT < 300 ? 1 : 0),
  Q('h_sphit8', 'hard', "Children's Ward", 'Hit 8 Hazed with one special attack', 'special', 'run', 8, 'sphit', x => x.n),
  Q('h_haze300', 'hard', 'Security', 'Disperse 300 Hazed', 'disperse', 'total', 300, 'kill', () => 1),
  Q('h_brute40', 'hard', 'Lab', 'Disperse 40 Brutes', 'disperse', 'total', 40, 'kill', x => x.type === 'brute' ? 1 : 0),
  Q('h_air100', 'hard', 'Respiratory Ward', 'Bring home 100 clean air', 'air', 'total', 100, 'runend', x => x.air),
];
const QBY = Object.fromEntries(QDEF.map(q => [q.id, q]));
const QCHOPS = { easy: 1, medium: 2, hard: 3 };
const DIFFS = ['easy', 'medium', 'hard'];

function qDraw(d) {
  // shuffled deck per difficulty: a quest only comes back after every other open quest of that difficulty has been up
  const S = ph(), B = S.q.board, onBoard = DIFFS.map(x => B[x]).filter(Boolean);
  const kinds = new Set(onBoard.filter(id => QBY[id].d !== d).map(id => QBY[id].kind));
  const ok = id => QBY[id] && QBY[id].open() && !onBoard.includes(id) && !kinds.has(QBY[id].kind);
  for (let pass = 0; pass < 2; pass++) {
    const deck = S.q.decks[d];
    const i = deck.findIndex(ok);
    if (i >= 0) return deck.splice(i, 1)[0];
    // deck used up (or only blocked kinds left): reshuffle everything of this difficulty, but the most recent ones go to the bottom
    const hist = (S.q.hist && S.q.hist[d]) || [], all = QDEF.filter(q => q.d === d).map(q => q.id).filter(id => !onBoard.includes(id));
    const nOpen = all.filter(id => QBY[id].open()).length, recent = hist.filter(id => all.includes(id) && QBY[id].open()).slice(-Math.min(8, Math.max(0, nOpen - 3)));
    S.q.decks[d] = shuffle(all.filter(id => !recent.includes(id))).concat(recent);
  }
  const any = QDEF.filter(q => q.d === d && q.open() && !onBoard.includes(q.id));
  return any.length ? pick(any).id : null;
}
function qPost(d) {
  const S = ph(), id = qDraw(d);
  if (id) { S.q.hist = S.q.hist || {}; (S.q.hist[d] = S.q.hist[d] || []).push(id); if (S.q.hist[d].length > 12) S.q.hist[d].shift(); }
  S.q.board[d] = id; if (id) S.q.prog[id] = { p: 0, best: 0, done: false };
  S.q.fresh = true;
}
function qFill() { const S = ph(); for (const d of DIFFS) if (!S.q.board[d]) qPost(d); persist(); }
const qActive = () => { const S = ph(); return DIFFS.map(d => S.q.board[d]).filter(id => id && !S.q.prog[id].done).map(id => QBY[id]); };
const qDoneOnBoard = () => { const S = ph(); return DIFFS.map(d => S.q.board[d]).filter(id => id && S.q.prog[id].done); };
const qProgress = id => { const p = ph().q.prog[id] || { p: 0, best: 0 }; const q = QBY[id]; return q.scope === 'total' ? p.p : p.best; };
function qev(ev, x = {}) {
  if (!ph().open || cheat('raid')) return;
  for (const q of qActive()) {
    if (q.ev !== ev) continue;
    const pr = ph().q.prog[q.id]; const v = q.f(x) || 0;
    if (q.scope === 'total') pr.p += v; else pr.best = Math.max(pr.best, v);
    if (qProgress(q.id) >= q.n) { pr.done = true; G.qpop = { t0: G.t }; sfx('reward_appear'); }
  }
}
// moving finished quests off the board without claiming them: their chops wait at Adelle
function qBankDone() {
  const S = ph();
  for (const d of DIFFS) { const id = S.q.board[d]; if (id && S.q.prog[id].done) { S.q.owed.push(QCHOPS[d]); S.q.board[d] = null; } }
  qFill();
}

/* ---------- hooks the rest of the game calls ---------- */
function qRunStart() {
  resetRS(); const S = ph(); S.q.swapUsed = false; S.react = null; S.lastPsi = G.psi; G.killedBy = null; G.famLeft = {};
  if (G.newsWatched) { G.newsWatched = false; qev('news'); }
}
function qRunEnd(didWin) {
  const S = ph();
  achRunEnd(didWin);
  if (didWin) { if (G.psi >= 1) S.cleared164 = true; if (G.psi >= 2) S.cleared248 = true; }
  if (didWin) { S.winStreak = (S.winStreak || 0) + 1; qev('win'); S.react = (save.wins === 1 && !S.firstClearSaid) ? 'firstclear' : 'win'; if (save.wins === 1) S.firstClearPending = true; }
  else { S.winStreak = 0; S.react = G.killedBy ? 'ko_' + G.killedBy : 'death'; }
  S.lastRunWon = !!didWin;
  qev('runend', { air: G.stats.air || 0 });
  persist();
}
function qTick(dt) {   // called every run frame
  RS.runT += dt; achTick(dt);
  if (G.boss && !G.cut && !['statue', 'dead'].includes(G.boss.state)) RS.fightT += dt;
  if (RS.lastHalf != null && P.half > RS.lastHalf && !G.revive && P.half > 0 && RS.lastHalf > 0) { RS.healed = true; qev('heal'); }
  RS.lastHalf = P.half;
}
function qOnHurt() {
  RS.anyHit = true; RS.roomHit = true; RS.noHitStreak = 0; RS.killStreak = 0;
  // who did it, for Nurse Mei and Adelle's reactions
  if (G.boss) G.killedBy = 'raffles';
  else { let best = null, bd = 60; for (const e of G.enemies) { if (e.state !== 'alive') continue; const d = Math.hypot(e.x - P.x, e.y - P.y); if (d < bd) { bd = d; best = e; } } G.killedBy = best ? best.type : (G.shots.some(s => s.enemy) ? 'spitter' : null); }
}
function qOnKill(e) {
  RS.killStreak++; const T = st(); T.kills++; if (e.type === 'brute') T.brutes++; if (e.burned) T.fires++; checkCounts();
  qev('kill', { type: e.type });
  if (e.fam != null) { G.famLeft[e.fam]--; if (G.famLeft[e.fam] <= 0) qev('brutefam'); }
}
function qOnRoomClear() {
  if (!RS.roomHit) RS.noHitStreak++; else RS.noHitStreak = 0;
  if (!RS.roomSp) RS.noSpRooms++;
  qev('clear', { n: G.room });
}
function qOnRoomEnter(n) {
  RS.roomHit = false; RS.roomSp = false; qev('room', { n });
  if (n === SHOP_ROOM) { st().quay++; if (!RS.boxMiss) achGet('cardboard_uncle'); checkCounts(); }
  if (n === BOSS_ROOM && G.coins >= 300) achGet('kiasu');
}
function qOnSpecial() { RS.roomSp = true; RS.spUsed = true; qev('special'); }
function qOnBoon(k) {
  const b = BOONS[k]; if (!b) return;
  RS.boons++; RS.pats[b.pat] = (RS.pats[b.pat] || 0) + 1;
  const T = st(); T.boons[k] = (T.boons[k] || 0) + 1; if (b.pat === 'auntie') T.auntie[k] = 1; checkCounts();
  if (k === 'bald' && look().hair === 'Bald' && !ph().ach.nothing_to_shave) { achGet('nothing_to_shave'); G.pendingJJ = 'SMOOTHER THAN A MIRROR!'; }
  RS.l2 = Object.keys(P.boons).filter(x => lv(x) >= 2).length;
  qev('boon', { pat: b.pat, k });
}

/* ---------- Adelle's lines ---------- */
const AD = {
  greet1: ['Welcome to the pharmacy. How can I help?', 'Hello again. Got anything to claim?', "Next in line... oh, it's just you. Hi."],
  greet2: ['Jun Jie! Back already?', 'You again. You know there are other patients in this hospital, right?', '+So which uni are you from? You never told me.',
    '+Nurse Mei says you snore. Very loudly.', '+You drool when you sleep.', "+I always wanted to help people, that's why I'm here.",
    "+I only finished uni last year. This is my first job...It's going great, obviously.", '+Did NS prepare you for this? Fighting smoke monsters, I mean.'],
  jokes: ['Welcome to the pharmacy. We have almost no medicine. We have a very nice durian head.', "If anyone asks, the suit is 'for stress relief'.",
    'Panadol? Very little. Polo tee? Plenty.', '+My degree is in pharmacy. My job is now fashion retail.',
    "+A patient asked me for cough syrup today. I sold him a beret. A fake one. Selling real ones isn't allowed.",
    "Before you ask: all the army stuff are look-alikes. I'm not getting arrested for a beret.", "Technically, a swimming cap is medical equipment if you're drowning.",
    "+The doctors keep asking where the bandages went. ...If you see someone wrapped up like a pocong, it wasn't me.",
    "+Somebody's grandmother donated that China Aunty outfit. I hope she doesn't come back for it.",
    'Is a Merlion suit good for your health? Probably not. Is it good for my sales? Yes.'],
  greet3: ['Ah, my most loyal customer!', "+Most people run away from the haze. You run into it. That's... kind of brave, you know.",
    "+I watched you leave from the window. You didn't even look back.", '+Every time you go out, the air gets a little clearer. I noticed.',
    "+You're the only patient who comes back more cheerful than he left.", 'I saved you the good plasters. The ones with Spider-Man on them.'],
  greet4: ["There's my favourite customer ♥", "I saved you the last kaya bun. Don't tell Nurse Mei.", "Come back in one piece, okay? I'd miss you.",
    '+You look tired. Sit down for a bit. The haze can wait five minutes.', "+I like it when you visit. It's the best part of my shift.", "You're still bleeding a bit. Sit. Now."],
  greet5: ['Hi, kopi buddy ♥', 'I found a nice cafe for us. You just need to beat the haze first.', 'Be careful out there. You owe me a date.'],
  reply3: { 'Ah, my most loyal customer!': [3, 'Your only customer, you mean.'], 'kind of brave': [4, "B-brave? I'm just stubborn."], 'from the window': [4, '...You were watching?'],
    'a little clearer': [3, 'Oh. Uh, thanks. Someone has to do it.'] },
  reply3any: ['Oh. Uh, thanks.', "It's nothing, really.", "I'll try to come back in one piece this time.", 'Thanks, Adelle. That helps.'],
  reply4any: ['Thanks, Adelle.', "I'll be careful. Promise.", 'You brighten my day.', 'Thanks. I do what I do to help people like you.', 'Seeing you is the best part of coming back.',
    "Don't worry. I always come back. You're here, after all.", "Save me a seat at the counter. I'll be back before you know it.",
    "The haze doesn't stand a chance. I've got a reason to win now.", 'You worry too much. ...But I like that you do.', 'Raffles is going down today. For you.'],
  reply5any: ["Keep the kopi warm. I won't be long.", 'Every Hazed I beat is one step closer to that kopi.'],
};
const AD_SCENES = {
  intro: [['A', "Hi! You must be Jun Jie, the one who keeps going out into the haze. I'm Adelle, I run the pharmacy."],
    ['A', "Well. 'Pharmacy.' The medicine trucks stopped coming as much when the haze closed the roads. We have limited supplies."],
    ['A', "So now I also sell clothes from the lost-and-found and the donation boxes. Don't ask."],
    ['A', "Every ward keeps sending me requests for things we can't get anymore. Ordering supplies used to be my job, so it all ends up on my desk."],
    ['A', "You're the only one going outside anyway. Do a few for us? I put them on the board next to your bed."],
    ['A', "The hospital can't pay you, but I can stamp this loyalty card. Every chop is a stamp, and you pay for the clothes with stamps."],
    ['A', "Fill a whole card and I'll throw in a bonus stamp. Deal?"], ['J', '...Deal.']],
  bestfriends: [['PA', 'Jun Jie! Come, come. I wanted to tell you something.'], ['PA', "You've been here so often, I feel like we're actually friends now. Is that weird?"],
    ['J', "Nah it isn't weird. I was thinking the same thing."], ['PA', "Then stop calling me 'Pharmacist Adelle'. It makes me feel so old. I'm your age! Just Adelle, okay?"],
    ['J', 'Okay... Adelle.'], ['A2', 'See? Much better. Now, what can I get you?']],
  worry: [['A', 'Hey, heard the PSI outside was really high just now but you went out anyway?'], ['J', "Yeah, it wasn't too bad."],
    ['A', 'You should take better care of yourself. You worry me.'], ['J', "I will, don't worry. Someone has to help you out with all these requests, right?"],
    ['A', 'Hmm... so you do it for me? How sweet ♥'], ['A', 'How can I help you, my hero?'], ['J', "Don't tease me..."]],
  kopi: [['A', 'Jun Jie... you actually did it. PSI 248.'], ['A', 'When the haze clears for real, do you want to get kopi with me? Not at the hospital. Somewhere with actual air.'],
    ['J', 'I... yes! I mean. Yes. That sounds good.'], ['A', "Good ♥ Now go clear the rest of it. I'm not drinking kopi in this smog."]],
};
const adName = () => ph().stage >= 3 ? 'ADELLE' : 'PHARMACIST ADELLE';
const jjImg = () => P.masked ? 'hero' : 'hero_nm';
function talk(seq, then) {
  // seq: [['A'|'A2'|'J'|'N', line], ...]
  if (!seq.length) { if (then) then(); return; }
  const [who, line] = seq[0], rest = seq.slice(1);
  const img = who === 'J' ? jjImg() : who === 'N' ? 'nurse' : 'adelle', name = who === 'J' ? 'JUN JIE' : who === 'N' ? 'NURSE MEI' : who === 'A2' ? 'ADELLE' : who === 'PA' ? 'PHARMACIST ADELLE' : adName();
  say(img, name, UP(line), () => talk(rest, then));
}

function stageTarget() {
  const S = ph(), v = S.visits;
  let t = v <= 3 ? 1 : 2;
  if (t >= 2 && v >= 9 && won()) t = 3;
  if (t >= 3 && v >= 20 && S.cleared164 && (S.stage >= 4 || S.lastPsi >= 1)) t = 4;   // the stage 4 scene needs his last trip out to be PSI 164 or worse
  if (t >= 4 && S.cleared248) t = 5;
  return t;
}
// the ! over her head: a stage-up with a scene is waiting
const adScenePending = () => { const S = ph(); return S.met && stageTarget() > S.stage && (S.stage + 1 >= 3); };

function adelleVisit() {
  const S = ph(); S.visits++;
  const seq = [];
  let scene = null;
  if (stageTarget() > S.stage) {          // stages only go up one per visit
    S.stage++;
    if (S.stage === 3) { scene = 'bestfriends'; achGet('best_friends'); }
    if (S.stage === 4) scene = 'worry';
    if (S.stage === 5) { scene = 'kopi'; achGet('kopi_date'); }
  }
  const st = S.stage;
  // outfit comment is worked out first: a ghost scream jumps to the very front of the visit
  const cm = scene ? [] : adelleComment(st), scream = cm.length && /^(AHHH|WAAAH)/i.test(cm[0][1]);
  if (scream) seq.push(...cm);
  // 1. opener: a scene, else one reaction, else a greeting (+ his reply, + her follow-up)
  if (scene) {
    seq.push(...AD_SCENES[scene]);
  } else {
    let r = null;
    if (S.firstClearPending) { r = 'You beat Raffles?! The whole hospital is talking about it.'; S.firstClearPending = false; }
    else if (G.weapon === 'rotan' && !S.rotanSeen) { r = 'Is that a rotan? My mum hung one by the door. She never used it. ...Mostly.'; S.rotanSeen = true; }
    else if (S.react === 'win') r = st >= 4 ? "My hero ♥ ...Don't let it go to your head." : "Another win! ...But Mei says the haze came back even thicker. Be careful out there, okay?";
    else if (S.react && S.react.startsWith('ko_') && st >= 2 && Math.random() < 0.5 && S.react !== 'ko_wisp') r = { ko_raffles: "Raffles again? He's a statue. He doesn't even move that much.", ko_spitter: 'You smell like ash. Was it the spitting ones?', ko_brute: 'Nurse Mei says a big one sat on you.' }[S.react];
    if (!r && S.react && S.react !== 'win' && S.react !== 'firstclear') r = st >= 4 ? "Don't scare me like that again." : st === 3 ? 'Nurse Mei said they carried you in again. Be more careful, okay?' : 'You look terrible. Here, take a plaster.';
    if (r) seq.push(['A', r]);
    else {
      const pool = st === 1 ? AD.greet1.concat(AD.jokes) : st === 2 ? AD.greet2.concat(AD.jokes) : AD.greet3.concat(st >= 4 ? AD.greet4 : [], st >= 5 ? AD.greet5 : [], AD.jokes);
      let g = pick(pool.filter(x => x !== S.lastGreet)); S.lastGreet = g;
      const plus = g.startsWith('+'); if (plus) g = g.slice(1);
      const joke = AD.jokes.some(j => j.replace('+', '') === g);
      seq.push(['A', g]);
      if (!joke && st >= 3) {
        let rep = null;
        if (st >= 4 && g.includes('Spider-Man')) rep = 'Thanks, you know I love Spider-Man.';
        else if (st >= 4 && g.includes('kaya bun')) rep = "Kaya bun? You're the best.";
        else if (st === 3) {
          const k = Object.keys(AD.reply3).find(k => g.includes(k));
          if (k) { if (Math.random() < 1 / AD.reply3[k][0]) rep = AD.reply3[k][1]; }
          else if (Math.random() < 0.25) rep = pick(AD.reply3any);
        } else if (Math.random() < 1 / 3) rep = pick(AD.reply4any.concat(st >= 5 ? AD.reply5any : []));
        if (rep) seq.push(['J', rep]);
      }
      if (plus) seq.push(['A', st === 1 ? 'What do you need?' : pick(['What do you need?', 'Looking to buy something?'].concat(S.bought ? ['Buying stuff again?'] : []))]);
    }
  }
  S.react = null;
  if (!scream) seq.push(...cm);
  // 3. claiming (owed chops from banked quests, plus anything finished on the board)
  const done = qDoneOnBoard(); let chops = S.q.owed.reduce((a, b) => a + b, 0), nq = S.q.owed.length;
  for (const id of done) { chops += QCHOPS[QBY[id].d]; nq++; }
  let claimed = false;
  if (chops > 0) {
    claimed = true;
    const C = chops + (chops === 1 ? ' chop' : ' chops');
    let line;
    if (st <= 2) line = chops >= 5 ? `Not bad! ${C} in one go.` : nq >= 2 ? `Two quests done! ${C} for you. Here, let me stamp the card.` : `One quest done, that's ${C}. Stamped!`;
    else line = nq >= 3 ? "All three quests? Okay, now you're just showing off." : pick([`Look at you, getting things done. ${C} ♥`, `The hospital owes you one. Well, ${C}. Same thing.`]);
    seq.push(['A', line]);
    if (ownsAllForSale()) { S.loyalChops = (S.loyalChops || 0) + chops; if (S.loyalChops >= 50) achGet('loyal'); }
    const before = S.chops; S.chops += chops; S.chopsEver += chops; S.q.owed = [];
    for (const d of DIFFS) { const id = S.q.board[d]; if (id && S.q.prog[id].done) S.q.board[d] = null; }
    qFill();
    let cardLine = null;
    if (Math.floor(S.chops / 10) > Math.floor(before / 10)) { S.chops += 1; S.chopsEver += 1; cardLine = st >= 4 ? "Another full card! Bonus stamp for you ♥ Don't tell the other patients." : "Card full! I'll staple on a new one. Plus a bonus stamp, for my most loyal customer."; }
    else if (S.chops % 10 === 8) cardLine = 'Almost a full card! Two more and you get a bonus stamp.';
    else if (S.chops % 10 === 9) cardLine = 'One more chop. ONE. Go go go.';
    if (cardLine) seq.push(['A', cardLine]);
  }
  persist();
  const ownsAll = ownsAllForSale();
  talk(seq, () => {
    if (ownsAll) { talk([['A', claimed ? "Nothing left to buy, but I'll keep stamping. Let's see how high we can go." : "Sorry dear, I've nothing left to sell to you. But still come and visit me alright?"]]); return; }
    openPShop(claimed);
  });
}
function adelleLeave(claimed, boughtAny) {
  const S = ph(), st = S.stage;
  if (boughtAny) return;
  let line;
  if (!claimed) {
    if (st >= 4) { line = "Nothing to claim. You just came to see me, didn't you ♥"; achGet('happy_to_see_you'); }
    else if (st === 3) line = pick(['Nothing to claim? Just came by to say hi then.', "Just looking? That's okay."]);
    else line = pick([st === 1 ? "Nothing to claim yet. The board's next to your bed." : 'No quests done? Did you just come to chit-chat?', "Just looking? That's okay."]);
  } else line = st <= 2 ? 'Come back again!' : st === 3 ? 'Window shopping again? Come back soon.' : 'Come back soon, okay? ♥';
  talk([['A', line]]);
}

/* ---------- the pharmacy shop menu ---------- */
function openPShop(claimed, intro) { G.pshop = { tab: 0, sel: 0, scroll: 0, msg: null, claimed, intro, bought: 0, spent: 0 }; sfx('menu_select'); }
const tabItems = t => COS.filter(c => c.slot === COS_TABS[t][0]);
function updatePShop() {
  const M = G.pshop, list = tabItems(M.tab);
  if (hit('left')) { M.tab = (M.tab + COS_TABS.length - 1) % COS_TABS.length; M.sel = 0; M.scroll = 0; sfx('menu_move'); }
  if (hit('right')) { M.tab = (M.tab + 1) % COS_TABS.length; M.sel = 0; M.scroll = 0; sfx('menu_move'); }
  if (hit('up')) { M.sel = (M.sel + list.length - 1) % list.length; sfx('menu_move'); }
  if (hit('down')) { M.sel = (M.sel + 1) % list.length; sfx('menu_move'); }
  if (hit('click')) {
    for (let t = 0; t < COS_TABS.length; t++) { const r = shopTabRect(t); if (inR(r, mouse.x, mouse.y)) { M.tab = t; M.sel = 0; M.scroll = 0; } }
    for (let i = 0; i < 6; i++) { const y = 38 + i * 20; if (mouse.y >= y && mouse.y < y + 19 && mouse.x > 104) { const j = M.scroll + i; if (j < list.length) { if (M.sel === j) pressed.act = true; M.sel = j; } } }
    if (G.leaveBtn && inR(G.leaveBtn, mouse.x, mouse.y)) pressed.pause = true;
  }
  M.scroll = clamp(M.scroll, M.sel - 5, M.sel);
  const it = tabItems(M.tab)[M.sel], S = ph();
  if ((hit('tryon') || (hit('click') && G.tryBtn && inR(G.tryBtn, mouse.x, mouse.y))) && it && it.slot !== 'trail') {
    // try it on: Jun Jie appears in the box, wearing it over what he has on now
    const L = { ...look() }, sl = it.slot;
    if (sl === 'extra') L[it.name === 'Camo Face' ? 'camo' : it.name === 'Heart Plaster' ? 'heart' : 'lanyard'] = true; else L[sl] = it.name;
    for (const bnd of it.bundle) { if (COS_HEADS.has(bnd)) L.head = bnd; else L.hat = bnd; }
    M.try = composeLook(L, { masked: true }); M.tryName = it.name; M.msg = 'Hmm... turn around. Okay, it works.'; sfx('menu_select');
  }
  if (it && M.tryName && M.tryName !== it.name) { M.try = null; M.tryName = null; }
  if (hit('act') && it) {
    if (S.owned[it.name]) { M.msg = 'You already have that one.'; sfx('menu_move'); }
    else if (it.price == null) { M.msg = 'Not for sale, sorry. You have to earn that one.'; sfx('no_money'); }
    else if (S.chops < it.price) { M.msg = 'Not enough chops for that one. Do a few more quests?'; sfx('no_money'); }
    else {
      S.chops -= it.price; S.owned[it.name] = true; for (const b of it.bundle) S.owned[b] = true; S.bought++; M.bought++; M.spent += it.price; sfx('buy');
      M.msg = BUY_LINE[it.name] || (it.price >= 5 ? 'So many crossed-out stamps... Good choice though.' : pick(['Thank you! Want me to bag it?', 'Good taste.', "Ooh, that one's popular."]));
      persist(); checkOwnership();
    }
  }
  if (hit('pause') || hit('dash')) { const m = G.pshop; G.pshop = null; sfx('menu_back'); if (!m.intro) adelleLeave(m.claimed, m.bought > 0); }
}
const shopTabRect = t => ({ x0: 104 + t * 29, y0: 22, x1: 104 + t * 29 + 28, y1: 33 });
function chopIcon(x, y, s = 1) {
  ctx.fillStyle = '#0b0a0a'; ctx.fillRect(x, y, 7 * s, 7 * s);
  ctx.fillStyle = '#d23b33'; ctx.fillRect(x + s, y + s, 5 * s, 5 * s);
  ctx.fillStyle = '#ffd6d6'; ctx.fillRect(x + 3 * s, y + 2 * s, s, 3 * s); ctx.fillRect(x + 2 * s, y + 3 * s, 3 * s, s);
}
function drawPShop() {
  const M = G.pshop; if (!M) return;
  ctx.fillStyle = 'rgba(11,10,10,0.65)'; ctx.fillRect(0, 0, W, H);
  panel(8, 8, W - 8, H - 8);
  ctx.fillStyle = '#a8906b'; ctx.fillRect(16, 18, 38, 54); ctx.strokeStyle = '#e8a25c'; ctx.strokeRect(16.5, 18.5, 37, 53);
  if (M.try) { ctx.fillStyle = '#e8a25c'; ctx.fillRect(15, 10, 40, 63); ctx.fillStyle = '#c9e2ee'; ctx.fillRect(16, 11, 38, 61); ctx.drawImage(M.try, 19, 8, 32, 64); } else ctx.drawImage(IMG.adelle, 19, 21, 32, 48);
  ph().stage >= 3 ? text('ADELLE', 13, 78, '#e8a25c') : (text('PHARMACIST', 13, 78, '#e8a25c'), text('ADELLE', 13, 86, '#e8a25c'));
  wrap(UP(M.msg || 'Take your time. Everything here is clean, I promise.'), 84).forEach((l, i) => text(l, 14, 96 + i * 8, '#bfb4a2'));
  chopIcon(14, H - 36); text('CHOPS ' + ph().chops, 24, H - 35, '#f2c14e');
  outlined('PHARMACY', 104, 9, '#f2c14e', 1);
  COS_TABS.forEach(([k, lab], t) => {
    const r = shopTabRect(t), on = t === M.tab;
    ctx.fillStyle = on ? '#e8a25c' : '#302c25'; ctx.fillRect(r.x0, r.y0, 28, 11);
    textC(lab.slice(0, 6), r.x0 + 14, r.y0 + 3, on ? '#24211c' : '#bfb4a2', 1, null);
  });
  const list = tabItems(M.tab), S = ph();
  for (let i = 0; i < 6; i++) {
    const j = M.scroll + i, it = list[j]; if (!it) break;
    const y = 38 + i * 20, sel = j === M.sel, own = S.owned[it.name];
    ctx.fillStyle = '#302c25'; ctx.fillRect(104, y, W - 120, 19);
    ctx.strokeStyle = sel ? '#f2c14e' : '#4a443a'; ctx.strokeRect(104.5, y + 0.5, W - 121, 18);
    const pv = IMG['cos_' + it.name]; if (pv) ctx.drawImage(pv, 0, Math.max(0, pv.height - 18), pv.width, Math.min(18, pv.height), 106, y + 1, pv.width, Math.min(18, pv.height));
    text(UP(it.name), 128, y + 3, own ? '#9cc24a' : it.price == null ? '#8a8378' : '#efe6d6');
    text(own ? 'OWNED' : it.price == null ? UP(it.how) : '', 128, y + 11, own ? '#6d8a4a' : '#6d6862');
    if (!own && it.price != null) { chopIcon(W - 34, y + 6); text(String(it.price), W - 25, y + 7, S.chops >= it.price ? '#f2c14e' : '#8a6a6a'); }
    if (!own && it.price == null) { ctx.fillStyle = '#9aa0a9'; ctx.fillRect(W - 28, y + 6, 5, 1); ctx.fillStyle = '#d9b44a'; ctx.fillRect(W - 29, y + 8, 7, 5); }
    if (sel) { ctx.fillStyle = '#f2c14e'; ctx.beginPath(); ctx.moveTo(98, y + 6); ctx.lineTo(102, y + 9); ctx.lineTo(98, y + 12); ctx.fill(); }
  }
  if (list.length > 6) text((M.sel + 1) + '/' + list.length, W - 40, 160, '#6d6862');
  keyChip('ENTER', 'BUY', 104, H - 22, '#f2c14e');
  keyChip('T', 'TRY ON', 156, H - 22, '#9cc24a'); G.tryBtn = { x0: 156, y0: H - 24, x1: 156 + textW('T') + 10 + textW('TRY ON') + 6, y1: H - 10 };
  keyChip('ESC', 'LEAVE', 214, H - 22, '#e8a25c', true);
  G.leaveBtn = { x0: 214, y0: H - 24, x1: 214 + textW('ESC') + 10 + textW('LEAVE') + 6, y1: H - 10 };
}

/* ---------- the quest board in the corridor ---------- */
const boardAlert = () => { const S = ph(); return S.open && (qDoneOnBoard().length > 0 || S.q.fresh); };
function openBoard() {
  const S = ph(); qFill();
  G.qboard = { page: qDoneOnBoard().length ? 1 : 2, sel: 0, msg: null };
  if (G.qboard.page === 2) S.q.fresh = false;
  persist(); sfx('menu_select');
}
function updateBoard() {
  const Bd = G.qboard, S = ph();
  if (Bd.page === 1) {
    if (hit('act') || hit('click')) { qBankDone(); Bd.page = 2; S.q.fresh = false; persist(); sfx('menu_select'); }
    else if (hit('pause') || hit('dash')) { G.qboard = null; sfx('menu_back'); }
    return;
  }
  if (hit('up')) { Bd.sel = (Bd.sel + 2) % 3; sfx('menu_move'); }
  if (hit('down')) { Bd.sel = (Bd.sel + 1) % 3; sfx('menu_move'); }
  if (hit('click')) for (let i = 0; i < 3; i++) { const y = 28 + i * 30; if (mouse.y >= y && mouse.y <= y + 24) Bd.sel = i; }
  if (hit('reroll') || (hit('click') && G.swapBtn && inR(G.swapBtn, mouse.x, mouse.y))) {
    const d = DIFFS[Bd.sel], id = S.q.board[d];
    if (S.q.swapUsed) { Bd.msg = 'FREE SWAP USED. ONE PER RUN.'; sfx('no_money'); }
    else if (id && S.q.prog[id].done) { Bd.msg = 'THAT ONE IS DONE. CLAIM IT AT THE PHARMACY!'; sfx('no_money'); }
    else { S.q.swapUsed = true; S.q.board[d] = null; qPost(d); S.q.decks[d].push(id); S.q.fresh = false; Bd.msg = 'SWAPPED!'; persist(); sfx('menu_select'); }
  }
  if (hit('act') || hit('pause') || hit('dash')) { G.qboard = null; sfx('menu_back'); }
}
// cork texture for the notice board: speckles, a wood frame shadow, old pin holes and a torn paper corner
let CORK = null;
function corkBoard() {
  if (CORK) return CORK;
  const c = document.createElement('canvas'); c.width = 232; c.height = 139; const x = c.getContext('2d');
  x.fillStyle = '#c99a62'; x.fillRect(0, 0, 232, 139);
  let s = 7; const rnd = () => ((s = (s * 16807) % 2147483647) / 2147483647);
  const cols = ['#b5864f', '#d8ad74', '#a87a46', '#e0b985', '#bd8d55'];
  for (let i = 0; i < 1500; i++) { x.fillStyle = cols[(rnd() * cols.length) | 0]; x.fillRect((rnd() * 232) | 0, (rnd() * 139) | 0, rnd() < 0.2 ? 2 : 1, 1); }
  for (let i = 0; i < 26; i++) { x.fillStyle = '#7d5530'; x.fillRect((rnd() * 228 + 2) | 0, (rnd() * 135 + 2) | 0, 1, 1); }   // old pin holes
  x.fillStyle = 'rgba(60,35,15,0.25)'; x.fillRect(0, 0, 232, 2); x.fillRect(0, 0, 2, 139);                 // frame shadow
  x.fillStyle = '#efe6d6'; x.beginPath(); x.moveTo(214, 0); x.lineTo(232, 0); x.lineTo(232, 14); x.lineTo(226, 9); x.lineTo(220, 6); x.fill();   // a torn old notice
  x.fillStyle = '#d23b33'; x.fillRect(226, 2, 2, 2);
  x.fillStyle = '#f2e08a'; x.save(); x.translate(208, 116); x.rotate(0.18); x.fillRect(0, 0, 16, 10); x.restore();   // a stray sticky note
  return (CORK = c);
}
function drawBoardUI() {
  const Bd = G.qboard; if (!Bd) return;
  const S = ph();
  ctx.fillStyle = 'rgba(11,10,10,0.6)'; ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = '#0b0a0a'; ctx.fillRect(40, 14, 240, 147); ctx.fillStyle = '#7a5232'; ctx.fillRect(41, 15, 238, 145); ctx.drawImage(corkBoard(), 44, 18);
  ctx.fillStyle = '#0b0a0a'; ctx.fillRect(128, 10, 64, 13); ctx.fillStyle = '#2f6b4f'; ctx.fillRect(129, 11, 62, 11); textC('QUESTS', 160, 14, '#f4f3ee', 1, null);
  const NOTE = { easy: '#f4f3ee', medium: '#f2e08a', hard: '#f2b8c6' };
  DIFFS.forEach((d, i) => {
    const id = S.q.board[d], q = QBY[id], y = 28 + i * 30;
    if (!q) return;
    const pr = S.q.prog[id], done = pr.done, sel = Bd.page === 2 && i === Bd.sel;
    ctx.fillStyle = sel ? '#f2c14e' : '#0b0a0a'; ctx.fillRect(52, y, 216, 25); ctx.fillStyle = done ? '#bfe3a8' : NOTE[d]; ctx.fillRect(53, y + 1, 214, 23);
    ctx.fillStyle = '#d23b33'; ctx.fillRect(158, y - 2, 3, 3);
    text(UP(d), 58, y + 4, '#6a6a72', 1, null);
    for (let k = 0; k < QCHOPS[d]; k++) chopIcon(58 + textW(UP(d)) + 4 + k * 9, y + 3);
    const fr = 'ASKED BY ' + UP(q.from); text(fr, 262 - textW(fr), y + 4, '#8a8378', 1, null);
    text(UP(q.text), 58, y + 14, '#24211c', 1, null);
    let st = done ? '' : q.n > 1 ? Math.min(qProgress(id), q.n) + '/' + q.n : '';
    if (q.scope === 'run' && !done && q.n > 1 && qProgress(id) > 0) st = 'BEST ' + st;
    if (done) { ctx.fillStyle = '#2f8f4a'; ctx.fillRect(226, y + 11, 37, 11); ctx.fillStyle = '#bfe3a8'; ctx.fillRect(227, y + 12, 35, 9); textC('DONE', 244, y + 14, '#2f8f4a', 1, null); }
    else if (st) text(st, 262 - textW(st), y + 14, '#6a6a72', 1, null);
  });
  if (Bd.page === 1) {
    ctx.fillStyle = '#0b0a0a'; ctx.fillRect(52, 120, 216, 13); ctx.fillStyle = '#2f8f83'; ctx.fillRect(53, 121, 214, 11);
    textC('CLAIM YOUR CHOPS AT THE PHARMACY!', 160, 124, '#f4f3ee', 1, null);
    keyChip('ENTER', 'NEW QUESTS', 112, 140, '#f2c14e');
  } else {
    textC(Bd.msg || (S.q.swapUsed ? 'GOOD LUCK OUT THERE.' : 'NOT FEELING ONE? SWAP IT ONCE PER RUN.'), 160, 124, '#24211c', 1, null);
    const sw = S.q.swapUsed ? 'SWAP USED' : 'FREE SWAP';
    keyChip('R', sw, 64, 140, S.q.swapUsed ? '#8a8378' : '#9cc24a');
    G.swapBtn = { x0: 64, y0: 138, x1: 64 + textW('R') + 10 + textW(sw) + 6, y1: 151 };
    keyChip('ENTER', 'CLOSE', 168, 140, '#e8a25c', true);
  }
}
// pause menu: the three quests on the board, in a column mirroring the power-ups column, ticking over to DONE as you finish them
const PQ_NOTE = { easy: '#f4f3ee', medium: '#f2e08a', hard: '#f2b8c6' }, PQ_TAG = { easy: '#9aa0a9', medium: '#e0b84a', hard: '#e07a98' };
function pqItems() { const S = ph(); return DIFFS.map(d => ({ d, id: S.q.board[d] })).filter(o => o.id && QBY[o.id]).map(o => { const q = QBY[o.id], pr = S.q.prog[o.id]; return { ...o, q, done: pr.done, p: Math.min(qProgress(o.id), q.n) }; }); }
function pqBar(x, y, w, f, col) { ctx.fillStyle = '#0b0a0a'; ctx.fillRect(x, y, w, 4); ctx.fillStyle = '#3a3630'; ctx.fillRect(x + 1, y + 1, w - 2, 2); ctx.fillStyle = col; ctx.fillRect(x + 1, y + 1, Math.round((w - 2) * f), 2); }
function pqTick(x, y, col) { ctx.fillStyle = col; for (const [a, b] of [[0, 2], [1, 3], [2, 4], [3, 3], [4, 2], [5, 1], [6, 0]]) ctx.fillRect(x + a, y + b, 1, 2); }
function drawPauseQuests() {
  const S = ph(); if (!S.open) return;
  const st = G.pqStyle || 'D',   // D (dark cards with a coloured header) was picked; A-C kept for comparison
    x0 = W - 92, x1 = W - 4, y0 = 4, y1 = H - 4, iw = x1 - x0 - 12, items = pqItems();
  if (st === 'B') {   // clipboard checklist on paper
    ctx.fillStyle = '#7a5232'; ctx.fillRect(x0, y0 + 3, x1 - x0, y1 - y0 - 3); ctx.fillStyle = '#0b0a0a'; ctx.strokeRect(x0 + 0.5, y0 + 3.5, x1 - x0 - 1, y1 - y0 - 4);
    ctx.fillStyle = '#fbf6ea'; ctx.fillRect(x0 + 4, y0 + 10, x1 - x0 - 8, y1 - y0 - 14);
    ctx.fillStyle = '#9aa0a9'; ctx.fillRect(x0 + 30, y0, 28, 9); ctx.fillStyle = '#d9dde3'; ctx.fillRect(x0 + 31, y0 + 1, 26, 3);
    text('QUESTS', x0 + 8, y0 + 14, '#c0302a', 1, null); ctx.fillStyle = '#e3b8b0'; ctx.fillRect(x0 + 4, y0 + 23, x1 - x0 - 8, 1);
    let y = y0 + 28;
    for (const it of items) {
      const lines = wrap(UP(it.q.text), iw - 10);
      ctx.fillStyle = '#24211c'; ctx.fillRect(x0 + 8, y, 7, 7); ctx.fillStyle = '#fbf6ea'; ctx.fillRect(x0 + 9, y + 1, 5, 5);
      if (it.done) pqTick(x0 + 9, y - 1, '#2f8f4a');
      text(UP(it.d), x0 + 19, y, PQ_TAG[it.d], 1, null); for (let k = 0; k < QCHOPS[it.d]; k++) chopIcon(x0 + 21 + textW(UP(it.d)) + k * 8, y);
      y += 10;
      lines.forEach((l, i) => { text(l, x0 + 19, y + i * 8, it.done ? '#9a9488' : '#24211c', 1, null); if (it.done) { ctx.fillStyle = '#9a9488'; ctx.fillRect(x0 + 19, y + i * 8 + 3, textW(l), 1); } });
      y += lines.length * 8 + 1;
      if (it.done) text('DONE!', x0 + 19, y, '#2f8f4a', 1, null); else if (it.q.n > 1) { pqBar(x0 + 19, y + 1, iw - 30, it.p / it.q.n, '#e8a25c'); text(it.p + '/' + it.q.n, x1 - 8 - textW(it.p + '/' + it.q.n), y, '#8a8070', 1, null); }
      y += it.done || it.q.n > 1 ? 13 : 4;
      ctx.fillStyle = '#e8ddc8'; ctx.fillRect(x0 + 8, y - 4, x1 - x0 - 16, 1);
    }
    return;
  }
  if (st === 'C') {   // cork board with small pinned notes, like the board by his bed
    ctx.fillStyle = '#0b0a0a'; ctx.fillRect(x0, y0, x1 - x0, y1 - y0); ctx.fillStyle = '#7a5232'; ctx.fillRect(x0 + 1, y0 + 1, x1 - x0 - 2, y1 - y0 - 2);
    ctx.drawImage(corkBoard(), 0, 0, x1 - x0 - 6, y1 - y0 - 6, x0 + 3, y0 + 3, x1 - x0 - 6, y1 - y0 - 6);
    ctx.fillStyle = '#0b0a0a'; ctx.fillRect(x0 + 22, y0 + 4, 44, 11); ctx.fillStyle = '#2f6b4f'; ctx.fillRect(x0 + 23, y0 + 5, 42, 9); textC('QUESTS', x0 + 44, y0 + 7, '#f4f3ee', 1, null);
    let y = y0 + 20;
    for (const it of items) {
      const lines = wrap(UP(it.q.text), iw - 2), h = 11 + lines.length * 8 + (it.q.n > 1 || it.done ? 9 : 2);
      ctx.fillStyle = 'rgba(40,25,10,0.35)'; ctx.fillRect(x0 + 7, y + 2, iw + 2, h);
      ctx.fillStyle = it.done ? '#bfe3a8' : PQ_NOTE[it.d]; ctx.fillRect(x0 + 5, y, iw + 2, h);
      ctx.fillStyle = '#d23b33'; ctx.fillRect(x0 + 5 + iw / 2, y - 2, 3, 3);
      text(UP(it.d), x0 + 8, y + 3, '#6a6a72', 1, null); for (let k = 0; k < QCHOPS[it.d]; k++) chopIcon(x0 + 10 + textW(UP(it.d)) + k * 8, y + 2);
      lines.forEach((l, i) => text(l, x0 + 8, y + 12 + i * 8, '#24211c', 1, null));
      const by = y + 12 + lines.length * 8;
      if (it.done) { ctx.fillStyle = '#2f8f4a'; ctx.fillRect(x0 + 8, by, 30, 8); text('DONE', x0 + 11, by + 1, '#f4f3ee', 1, null); pqTick(x0 + 42, by, '#2f8f4a'); }
      else if (it.q.n > 1) { pqBar(x0 + 8, by + 2, iw - 30, it.p / it.q.n, '#2f8f4a'); text(it.p + '/' + it.q.n, x0 + 5 + iw - textW(it.p + '/' + it.q.n), by, '#6a6a72', 1, null); }
      y += h + 7;
    }
    return;
  }
  // A and D: dark panel matching POWER-UPS
  ctx.fillStyle = '#1d1b18'; ctx.fillRect(x0, y0, x1 - x0, y1 - y0);   // solid, so the PSI box underneath doesn't show through
  panel(x0, y0, x1, y1, '#6d6862'); text('QUESTS', x0 + 5, y0 + 4, '#f2c14e');
  let y = y0 + 16;
  for (const it of items) {
    const lines = wrap(UP(it.q.text), st === 'D' ? iw - 2 : iw - 4), h = 11 + lines.length * 8 + (it.q.n > 1 || it.done ? 8 : 1);
    if (st === 'A') {   // a coloured stripe on the left for the difficulty
      ctx.fillStyle = it.done ? '#2f8f4a' : PQ_TAG[it.d]; ctx.fillRect(x0 + 5, y, 2, h - 2);
      text(UP(it.d), x0 + 10, y, it.done ? '#9cc24a' : PQ_TAG[it.d]); for (let k = 0; k < QCHOPS[it.d]; k++) chopIcon(x0 + 12 + textW(UP(it.d)) + k * 8, y - 1);
      lines.forEach((l, i) => text(l, x0 + 10, y + 10 + i * 8, it.done ? '#8a8378' : '#efe6d6'));
      const by = y + 10 + lines.length * 8;
      if (it.done) { pqTick(x0 + 10, by, '#9cc24a'); text('DONE', x0 + 20, by + 1, '#9cc24a'); }
      else if (it.q.n > 1) { pqBar(x0 + 10, by + 2, iw - 28, it.p / it.q.n, PQ_TAG[it.d]); text(it.p + '/' + it.q.n, x1 - 5 - textW(it.p + '/' + it.q.n), by, '#bfb4a2'); }
    } else {   // D: little cards with a coloured header bar
      ctx.fillStyle = '#0b0a0a'; ctx.fillRect(x0 + 4, y - 1, iw + 4, h + 2); ctx.fillStyle = '#2a2621'; ctx.fillRect(x0 + 5, y, iw + 2, h);
      ctx.fillStyle = it.done ? '#2f8f4a' : PQ_TAG[it.d]; ctx.fillRect(x0 + 5, y, iw + 2, 9);
      text(it.done ? 'DONE' : UP(it.d), x0 + 8, y + 1, '#24211c', 1, null);
      if (it.done) pqTick(x1 - 15, y + 1, '#f4f3ee'); else for (let k = 0; k < QCHOPS[it.d]; k++) chopIcon(x1 - 14 - k * 8, y + 1);
      lines.forEach((l, i) => text(l, x0 + 8, y + 12 + i * 8, it.done ? '#8a8378' : '#efe6d6'));
      const by = y + 12 + lines.length * 8;
      if (!it.done && it.q.n > 1) { pqBar(x0 + 8, by + 1, iw - 28, it.p / it.q.n, '#f2c14e'); text(it.p + '/' + it.q.n, x1 - 7 - textW(it.p + '/' + it.q.n), by, '#bfb4a2'); }
    }
    y += h + 6;
  }
}
function drawQuestPop() {
  if (!G.qpop) return;
  const age = G.t - G.qpop.t0; if (age >= 3) { G.qpop = null; return; }
  // Adelle's face in a circle with a tick bubble (and a heart from stage 4), drawn at 1.75x so it's easy to spot
  const a = clamp(Math.min(age, 3 - age) / 0.25, 0, 1), pop = age < 0.15 ? 0.8 + age / 0.15 * 0.2 : 1;
  ctx.save(); ctx.globalAlpha = a; ctx.translate(W - 23, 62); ctx.scale(1.75 * pop, 1.75 * pop);
  ctx.fillStyle = '#0b0a0a'; ctx.beginPath(); ctx.arc(0, 0, 11, 0, 7); ctx.fill();
  ctx.fillStyle = '#f2b8c6'; ctx.beginPath(); ctx.arc(0, 0, 10, 0, 7); ctx.fill();
  ctx.save(); ctx.beginPath(); ctx.arc(0, 0, 10, 0, 7); ctx.clip(); ctx.drawImage(IMG.adelle_face, -8, -7); ctx.restore();
  const heart = ph().stage >= 4, bw = 12, bx = -14 - bw, by = -14;   // a tick before stage 4, a heart after
  ctx.fillStyle = '#0b0a0a'; ctx.fillRect(bx - 1, by - 1, bw + 2, 11); ctx.fillStyle = '#f4f3ee'; ctx.fillRect(bx, by, bw, 9); ctx.fillRect(bx + bw, by + 6, 2, 2);
  if (!heart) { ctx.fillStyle = '#2f8f4a'; for (const [x, y] of [[3, 4], [4, 5], [5, 6], [6, 5], [7, 4], [8, 3]]) ctx.fillRect(bx + x, by + y - 1, 1, 1); }
  else { ctx.fillStyle = '#e94f7a'; ['.#.#.', '#####', '.###.', '..#..'].forEach((r, y) => [...r].forEach((c, x) => { if (c === '#') ctx.fillRect(bx + 4 + x, by + 2 + y, 1, 1); })); }
  ctx.restore();
}

/* ---------- the pharmacy room ---------- */
MAPS.pharm = {
  bg: 'bg_pharm',
  walk: [R(4, 58, 138, 176), R(150, 60, 316, 108), R(136, 82, 154, 108), R(150, 152, 316, 176), R(136, 152, 154, 170)],
  block: [R(30, 48, 126, 76), R(2, 56, 26, 76), R(6, 86, 54, 96), R(6, 104, 54, 114), R(6, 122, 54, 132), R(24, 164, 42, 180), R(74, 164, 92, 180),
    R(156, 56, 212, 80), R(228, 56, 310, 78), R(192, 138, 248, 156), R(258, 138, 316, 156)],
};
const ROPE_BLOCK = R(134, 78, 156, 112);
let recordsWingOpen = () => false;   // stage 3 opens the Records wing; until then the rope stays up
const PHARM_SPOTS = [
  { id: 'adelle', x: 80, y: 84, r: 18, label: 'TALK', show: () => true },
  { id: 'door', x: 58, y: 170, r: 12, label: 'LEAVE', show: () => true },
  { id: 'mirror', x: 206, y: 160, r: 13, label: 'LOOK IN THE MIRROR', show: () => true },
  { id: 'mirror', x: 234, y: 160, r: 13, label: 'LOOK IN THE MIRROR', show: () => true },
];
function doorSpam() {   // Revolving Door: in and out ten times without stopping
  G.doorSpam = (G.t - (G.doorT || -9) < 2.5) ? (G.doorSpam || 0) + 1 : 1; G.doorT = G.t;
  if (G.doorSpam >= 10) achGet('revolving_door');
}
function enterPharm() {
  G.banner = null;
  doorSpam();
  G.scene = 'pharm'; G.map = MAPS.pharm; P.x = 58; P.y = 166; P.flip = false; P.face = { x: 0, y: -1 };
  if (!recordsWingOpen() && !MAPS.pharm.block.includes(ROPE_BLOCK)) MAPS.pharm.block.push(ROPE_BLOCK);
  records(false);
  sfx('door_open');
  const S = ph();
  if (!S.met) {   // her intro starts as soon as he walks in, before he can wander off
    S.met = true; S.visits = 1; persist();
    talk([['A', 'Oh! Over here!']].concat(AD_SCENES.intro), () => openPShop(false, true));
  }
}
function leavePharm() { doorSpam(); G.scene = 'hub'; G.map = MAPS.hub; P.x = 181; P.y = 160; P.face = { x: 0, y: 1 }; sfx('door_open'); }
function nearestPharmSpot() {
  let best = null, bd = 1e9;
  for (const s of PHARM_SPOTS) { if (!s.show()) continue; const d = Math.hypot(P.x - s.x, P.y - s.y); if (d < s.r && d < bd) { bd = d; best = s; } }
  return best;
}
function updatePharm(dt) {
  if (G.pshop) return updatePShop();
  if (G.mirror) return updateMirror();
  if (G.book) return updateBook();
  if (G.file) return updateFile();
  records(true);
  if (!G.dialog && (hit('pause') || pauseClicked())) { G.paused = true; sfx('pause'); return; }
  P.dashCd -= dt;
  movePlayer(dt, false);
  const s = nearestPharmSpot();
  if (s && hit('act')) { sfx('menu_select'); if (s.id === 'adelle') adelleVisit(); if (s.id === 'mirror') openMirror(); if (s.id === 'trophy') openBook(); if (s.id === 'file') openFile(); if (s.id === 'door') leavePharm(); }
}
function drawPharm() {
  ctx.drawImage(IMG.bg_pharm, 0, 0);
  if (!recordsWingOpen()) ctx.drawImage(IMG.rope, 139, 76);
  // Adelle behind her counter: draw her, then the counter front again over her legs
  ctx.drawImage(IMG.adelle, 72, 38);
  ctx.drawImage(IMG.bg_pharm, 34, 56, 89, 15, 34, 56, 89, 15);
  if (adScenePending()) { const b = Math.round(Math.sin(G.t * 6) * 2); ctx.drawImage(IMG.alert, 77, 26 + b); }
  shadowAt(P.x, P.y, 5); drawPlayer();
  drawFx();
  const s = nearestPharmSpot();
  if ((achUnclaimed().length || achAnyNew()) && recordsWingOpen()) { const b = Math.round(Math.sin(G.t * 6)); ctx.drawImage(IMG.alert, 181, 12 + b); }
  if (s && !G.dialog && !G.pshop && !G.mirror && !G.book && !G.file) {
    const lab = 'E: ' + s.label, x = clamp(P.x - textW(lab) / 2, 2, W - textW(lab) - 4);
    panel(x - 3, P.y - 36, x + textW(lab) + 3, P.y - 27, '#f2c14e'); text(lab, x, P.y - 34, '#f2c14e', 1, null);
  }
  // status strip sits on the toilet floor, bottom right, so the signs and shelves stay visible
  panel(196, 165, 316, 176, '#6d6862');
  drawMasks(199, 167, P.masked ? maxHalf() : 0, maxHalf());
  chopIcon(266, 167); text(String(ph().chops), 276, 168, '#f2c14e');
  drawPauseBtn();
  drawPShop();
  drawMirror();
  drawBook();
  drawFile();
}

/* ---------- Nurse Mei: the pharmacy announcement and the first win ---------- */
const MEI_PHARM = [['N', 'Oh, before you go: the pharmacy behind the RECORDS door is open now. Adelle runs it. Be nice to her.'],
  ['N', "She also put up a quest board next to your bed. Help the hospital out, and she'll pay you in chops."]];
// on getting back to the hospital: returns a list of Nurse Mei lines that should play straight away (or null)
function hospitalReturn(wake) {
  const S = ph(), opening = !S.open && pharmShouldOpen();
  if (opening) { S.open = true; qFill(); persist(); }
  const seq = [];
  if (!wake && save.wins === 1 && !S.meiFirstWin) { S.meiFirstWin = true; seq.push(['N', 'You beat the statue?! Wah. Okay, I take back half of what I said about you.']); if (save.coreEver && !save.coreTalk) seq.push(['N', '...Eh, wait.']); }
  const NOTES = [
    [['N', "I showed one of the doctors your stone thing. He says it's warm because it's still... alive. Like it's connected to something."]],
    [['N', 'The doctors cut one open. Inside is the same haze as outside, but packed super tight. They think every Hazed has one.']],
    [['N', 'They put two cores side by side and both started glowing. The doctor says they are calling out to something.']],
    [['N', 'The doctors think all the cores come from the same place. A source, somewhere out there, pumping out all this haze.'], ['N', 'Raffles was just a body it borrowed.'], ['J', 'So if I find the source...'], ['N', 'Then maybe this haze finally goes away. But you rest first.']],
    [['N', 'The cores glow brighter when the PSI goes up. Whatever the source is, boy, it is getting stronger.']],
  ];
  if (!wake && save.coreTalk && (save.coreTotal || 0) >= 2 && (save.noteN || 0) < NOTES.length && (save.noteAt || 1) < save.coreTotal) { seq.push(...NOTES[save.noteN || 0]); save.noteN = (save.noteN || 0) + 1; save.noteAt = save.coreTotal; }
  if (save.coreEver && !save.coreTalk) { save.coreTotal = save.coreTotal || 1; save.coreTalk = true; seq.push(['N', "What's that smoking thing in your pocket? Don't bring haze into my ward!"], ['J', 'It fell out of Raffles when he went down.'], ['N', 'Hmm. The doctors will definitely want to see that.'], ['N', "Tell you what. Bring me three of those, and I'll let you borrow the rotan in the case. Deal?"], ['J', 'Deal.']); }
  if (opening) seq.push(...MEI_PHARM);
  persist();
  return seq.length ? seq : null;
}

/* ================= Stage 2: cosmetics, the toilet mirror, mask rules and outfit comments ================= */
const COSMETA = {"hats": {"Jungle Hat": -2, "Jockey Cap": 0, "Beret": 0, "SCDF Helmet": -1, "SPF Cap": 0, "Hawker Hat": -2, "Aunty Visor": 3, "Crab Hat": -7, "Samsui Headdress": 1, "Royal Crown": -3, "Red Beret": 0, "Grey Beret": 0, "Khaki Beret": 0, "Blue Beret": 0, "Green Beret": 0, "Air Force Beret": 0, "Navy Beret": 0, "Swimming Cap": 0, "Sweatband": 0}, "heads": {"Scuba Mask": -3, "Merlion Head": -3, "Raffles Head": -3, "Hazmat Hood": -3, "Durian Head": -5, "Lion Dance Head": -5, "Pontianak Hair": -3, "Pocong Wrap": -5, "Brute Head": -5}, "outfits": ["Uni Tee", "Hall Hoodie", "Polo & Bermudas", "Patient Gown", "Admin T", "SAF No. 4", "SCDF Firefighter", "SPF Officer", "School Uniform", "Office Suit", "Prison Stripes", "Merlion Suit", "Diver Wetsuit", "Raffles Statue", "Basic Tee & Bermudas", "Hazmat Suit", "SUTD Tee", "China Aunty", "All White", "Swimming Trunks", "Samsui Woman", "Kopitiam Uncle", "Sang Nila Utama", "Lion Dance", "Pontianak", "Pocong", "Tamil Veshti", "Hazed Brute", "Air Force", "Navy", "Physio Scrubs"], "masks": ["Surgical Blue", "Black N95", "Pink Floral", "Kopitiam Check", "Batik", "NS Pixel Camo", "Red & White", "Gold N95"], "top": -7, "trails": {"White": ["#ffffff"], "Teh Tarik": ["#c99a6a"], "Pandan": ["#7ac25a"], "Bandung": ["#f28ab0"], "Siren": ["#e8452e", "#3a7ae8"], "Haze Grey": ["#8f949a"]}};
const LOY = 8, LH = 32;   // look canvases are 16x32 with the head top at y=8, so hats can rise above it
const LOOK0 = { outfit: 'Hall Hoodie', mask: 'Surgical Blue', head: null, hat: null, hair: 'Hair', heart: false, lanyard: false, camo: false, trail: 'White' };
const FREE_ITEMS = new Set(['Hall Hoodie', 'Surgical Blue', 'Hair', 'White']);
function look() { if (!save.look) save.look = { ...LOOK0 }; return save.look; }
const owns = n => FREE_ITEMS.has(n) || !!ph().owned[n] || cheat('allcos');
const hoodOn = () => look().head === 'Hazmat Hood';
const protectedNow = () => P.masked || hoodOn();
let lookVer = 0; const LOOKC = {};
function lookChanged() { lookVer++; persist(); }

function lookCanvas() { const c = document.createElement('canvas'); c.width = 16; c.height = LH; return c; }
function composeLook(L, o = {}) {
  const c = lookCanvas(), x = c.getContext('2d');
  const body = IMG['lk_o_' + L.outfit] || IMG['lk_o_Hall Hoodie'];
  x.drawImage(body, 0, LOY + 13);
  if (L.head && IMG['lk_f_' + L.head]) {
    x.drawImage(IMG['lk_f_' + L.head], 0, LOY + (COSMETA.heads[L.head] || -3));
  } else {
    const hair = (o.bald || L.hair === 'Bald') ? 'Bald' : 'Hair', mk = o.masked ? L.mask : 'none';
    let h = IMG[`lk_h_${hair}_${mk}_${L.camo ? 1 : 0}`] || IMG[`lk_h_${hair}_none_0`];
    if (o.masked && o.n95 && L.mask === 'Surgical Blue') { const k = `lk_h_${hair}_n95_${L.camo ? 1 : 0}`; if (!IMG[k]) IMG[k] = recolor(h, N95MAP); h = IMG[k]; }
    x.drawImage(h, 0, LOY);
    if (L.hat && IMG['lk_t_' + L.hat]) x.drawImage(IMG['lk_t_' + L.hat], 0, LOY + (COSMETA.hats[L.hat] || 0));
  }
  let d = x.getImageData(0, 0, 16, LH);
  const A = (px, py) => px >= 0 && px < 16 && py >= 0 && py < LH && d.data[(py * 16 + px) * 4 + 3] > 0;
  const put = (px, py, col) => { if (px < 0 || px > 15 || py < 0 || py >= LH) return; const i = (py * 16 + px) * 4, v = parseInt(col.slice(1), 16); d.data[i] = v >> 16; d.data[i + 1] = (v >> 8) & 255; d.data[i + 2] = v & 255; d.data[i + 3] = 255; };
  if (L.heart) {
    // the heart plaster sits on the highest spot where the whole heart and its rim are on solid pixels
    const HEART = [[0, 0], [2, 0], [0, 1], [1, 1], [2, 1], [1, 2]], RIM = [[-1, 0], [1, -1], [3, 0], [-1, 1], [3, 1], [0, 2], [2, 2], [1, 3]];
    const need = HEART.concat(RIM.filter(r => !(r[0] === 1 && r[1] === -1)));
    let best = null;
    for (const ox of [9, 10, 8, 11, 7]) {
      for (let oy = 1; oy < LH - 14; oy++) if (need.every(([a, b]) => A(ox + a, oy + b))) { if (!best || oy < best[1] - 1) best = [ox, oy]; break; }
    }
    if (best) { const [ox, oy] = best; for (const [a, b] of RIM) if (!(a === 1 && b === -1) || A(ox + 1, oy - 1)) put(ox + a, oy + b, '#0b0a0a'); for (const [a, b] of HEART) put(ox + a, oy + b, '#f07aa6'); put(ox + 1, oy + 2, '#b8436f'); put(ox, oy, '#ffc2d8'); }
  }
  if (L.lanyard) {
    const b = LOY, pts = [[5, 13, '#f07aa6'], [10, 13, '#f07aa6'], [6, 14, '#f07aa6'], [9, 14, '#f07aa6'], [7, 14, '#9aa3ad'], [8, 14, '#9aa3ad'],
      [6, 15, '#f4f3ee'], [7, 15, '#f4f3ee'], [8, 15, '#f4f3ee'], [9, 15, '#f4f3ee'], [6, 16, '#f4f3ee'], [9, 16, '#f4f3ee'], [7, 16, '#f07aa6'], [8, 16, '#f07aa6'],
      [5, 15, '#4a4550'], [5, 16, '#4a4550'], [10, 15, '#4a4550'], [10, 16, '#4a4550'], [6, 17, '#4a4550'], [7, 17, '#4a4550'], [8, 17, '#4a4550'], [9, 17, '#4a4550']];
    for (const [px, py, col] of pts) put(px, b + py, col);
  }
  if (o.frame) {
    // walk frames: one leg lifts, the same way the original hero frames do (left half for frame 1, right half for frame 2)
    const src = new Uint8ClampedArray(d.data), x0 = o.frame === 1 ? 0 : 8;
    for (let px = x0; px < x0 + 8; px++) for (let py = LOY + 17; py < LOY + 24; py++) {
      const i = (py * 16 + px) * 4, sy = py + 2, j = (sy * 16 + px) * 4;
      for (let k = 0; k < 4; k++) d.data[i + k] = sy < LOY + 24 ? src[j + k] : 0;
    }
  }
  x.putImageData(d, 0, 0);
  return c;
}
// the name of the image to draw for Jun Jie right now (registered in IMG/FLASH on first use)
function lookName(o) {
  // keyed by what he's actually wearing, so a NEW GAME (which wipes the save) can never show last game's look
  const L = look(), key = 'lk|' + JSON.stringify(L) + '|' + (o.masked ? 1 : 0) + (o.bald ? 1 : 0) + (o.frame || 0) + (o.n95 ? 1 : 0);
  if (!IMG[key]) { IMG[key] = composeLook(L, o); FLASH[key] = whiteOf(IMG[key]); }
  return key;
}
// portraits and the bed keep a plain 16x24 default look (hall hoodie), as agreed
function initLooks() {
  for (const [k, m] of [['hero', true], ['hero_nm', false]]) {
    const c = composeLook(LOOK0, { masked: m }), s = document.createElement('canvas'); s.width = 16; s.height = 24;
    s.getContext('2d').drawImage(c, 0, -LOY); IMG[k] = s; FLASH[k] = whiteOf(s);
  }
}
function trailColor() {
  const cols = COSMETA.trails[look().trail] || ['#ffffff'];
  P.trailN = (P.trailN || 0) + 1; return cols[((P.trailN / 3) | 0) % cols.length];
}

/* ---------- what the characters say about his clothes ---------- */
const CMT = {   // item: [Nurse Mei, Physio Joan, Adelle]
  'Uni Tee': ['Student again? Study or fight, choose one.', 'Good, comfortable clothes for training.', 'Very casual today.'],
  'Polo & Bermudas': ['Going to the hawker centre ah?', 'Bermudas. Good for leg day.', "You look like you're about to go cycling at East Coast."],
  'School Uniform': ['Eh, which school you from? You look fourteen.', 'Shirt tucked in. Very proper.', "Aren't you a uni student?"],
  'SUTD Tee': ['Uni boy. Study hard, then come back.', 'Engineers also need exercise, you know.', 'SUTD? So smart.'],
  'Patient Gown': ['Finally, dressed like a proper patient.', "At least it's easy to stretch in.", 'Matching the hospital, I see.'],
  'Basic Tee & Bermudas': ['Slippers in the hospital? Aiyo.', "Can't train in slippers, you know.", 'Very comfy. Very uncle.'],
  'Admin T': ['Still wearing your NS shirt? Let it go already.', 'NS mode! Okay, give me twenty.', 'Is that your NS admin tee? You still wear that?'],
  'SAF No. 4': ["Wah, recruit. Your sergeant know you're here?", 'Fall in! ...Sorry.', 'Wah, NS flashbacks.'],
  'Air Force': ['Air force? Then fly away from the haze lah.', 'Pilots need strong core. Plank, now.', 'Wah, so smart. Very handsome.'],
  'Navy': ['Sailor boy. The river not that big, you know.', 'Navy? Good, swimming is great cardio.', 'Ahoy, captain.'],
  'SCDF Firefighter': ['Good, you can put out the fire in my kitchen also.', 'All that gear, very heavy. Good for strength.', 'SCDF? Serving the nation twice ah?'],
  'SPF Officer': ["Officer, I didn't do anything! Go change lah.", 'Police also must do physio, you know.', 'Are you here to arrest someone?'],
  'Office Suit': ['Wah, so smart. Got job interview?', 'Cannot train in a suit, take off the blazer.', 'Very handsome. Going for an interview?'],
  'All White': ['Eh, election season already ah?', "All white? Don't get haze on it.", "So clean. Don't touch anything."],
  'Prison Stripes': ['Serves you right.', 'What did you do?!', 'Jun Jie... what did you do?'],
  'Tamil Veshti': ['Wah, so nice. Going temple?', 'Very elegant. Hard to do squats in though.', 'That gold border suits you.'],
  'China Aunty': ['Aunty, wrong ward. Outpatient is downstairs.', 'Aunty, you also want to train?', 'Aunty, the queue is over there.'],
  'Samsui Woman': ['Respect the samsui women. Stand up straight.', 'They carried bricks all day. Strongest workers in Singapore.', 'The samsui women built half of Chinatown, you know.'],
  'Kopitiam Uncle': ['Uncle, one kopi-o kosong please.', 'Uncle, your posture very bad from carrying all the trays.', 'One kopi-o kosong please, uncle.'],
  'Swimming Trunks': ['Where your clothes?! This is a hospital!', 'Physio, not swimming class.', 'Jun Jie. Where is your shirt.'],
  'Diver Wetsuit': ["The river not that deep, you know.", 'Good, swimming is great cardio.', "Going to look for the Merlion's family?"],
  'Hazmat Suit': ['Finally, someone takes the haze seriously.', 'Can you even breathe in that?', 'Safety first. I like it.'],
  'Merlion Suit': ["Don't drip water on my floor.", 'Fish tail. Hard to do lunges.', "Please don't spit water in my pharmacy."],
  'Lion Dance': ["So loud! Where's the drums coming from?", 'Lion dance needs very strong legs. Respect.', "Huat ah! Where's my ang pao?"],
  'Sang Nila Utama': ['Your Highness, please take your medicine.', 'A king also must stretch.', 'Did you see a lion on the way here?'],
  'Raffles Statue': ["Don't bring that statue into my ward.", 'Very stiff. You need more stretching than anyone.', "That's not funny. Take it off. ...Okay, it's a little funny."],
  'Hazed Brute': ["AIYO! Security! ...Oh, it's you. Don't scare me.", 'Wah, so bulky. Is that muscle or smoke?', "Please don't breathe on me."],
  'Pontianak': ["AHHH! Oh... it's just you... My heart, boy.", "WAAAH! ...Oh, it's you. Don't do that during sessions.", "AHHH! ...Oh. It's just you. Please don't do that."],
  'Pocong': ['AHHH! Oh, just you... Can you even walk in that?', 'AHHH! ...Hopping is good exercise, I guess.', "AHHH! Oh... it's just you. How are you even moving?"],
  'Bald': ['You have a very round head...very kickable.', 'You have a very round head.', 'You look better with hair.'],
  'Camo Face': ["Go and wash your face. It's a hospital.", 'Very serious. Like a real commando.', 'Hiding from me? I can still see you.'],
  'Swimming Cap': ['No swimming pool here, boy.', 'Swimming cap and no pool. Hmm.', 'Cute cap.'],
  'Durian Head': ['I hate durian...so smelly.', 'I hate durian...', 'I love durian!'],
  'Scuba Mask': ["You know the haze is outside, not underwater right?", 'Good for breathing practice.', 'Can you even hear me in there?'],
  'Merlion Head': ["If water comes out of your mouth, I'm calling the cleaner.", 'Strong jaw. Must be all the spouting.', "Please don't spit water in my pharmacy."],
  'Lion Dance Head': ["So big the head! Don't knock my IV pole.", 'Neck muscles must be very strong to carry that.', "Huat ah! Where's my ang pao?"],
  'Hazmat Hood': ['Good. Wear it every time.', 'Breathe slowly in that thing.', 'Safety first. I like it.'],
  'Raffles Head': ["Eh, don't bring that face into my ward.", 'Even your face is stiff. Stretch more.', 'Those red eyes are creepy. Take it off.'],
  'Brute Head': ["AIYO! Security! ...Oh, it's you.", 'Ever thought of becoming a bodybuilder?', 'You look like you need a mint.'],
  'Pontianak Hair': ["AHHH! Oh... it's just you... Tie up your hair!", "WAAAH! ...Can you even see where you're going?", "AHHH! ...Oh. It's just you. Please don't do that."],
  'Pocong Wrap': ['AHHH! Oh, just you... Who wrapped you?', 'AHHH! ...Untie yourself before stretching.', "AHHH! Oh... it's just you."],
};
const GHOSTS = new Set(['Pontianak', 'Pocong', 'Pontianak Hair', 'Pocong Wrap']);
const UNIFORMS = new Set(['SPF Officer', 'SCDF Firefighter', 'SAF No. 4', 'Air Force', 'Navy']);
// only what can be seen: a full head hides hair, hat and face; a hat hides the hair
function visibleItems() {
  const L = look(), v = [];
  if (L.outfit !== 'Hall Hoodie') v.push(L.outfit);
  if (L.head) v.push(L.head);
  else { if (L.hat) v.push(L.hat); else if (L.hair === 'Bald') v.push('Bald'); if (L.camo) v.push('Camo Face'); }
  return v.filter(i => CMT[i]);
}
// who: 0 Nurse Mei, 1 Physio Joan, 2 Adelle. Returns the item to comment on, or null.
function pickComment(who) {
  const seen = (save.seen = save.seen || [{}, {}, {}])[who], vis = visibleItems();
  if (!vis.length) return null;
  const fresh = vis.filter(i => !seen[i]);
  const item = fresh.length ? pick(fresh) : Math.random() < 0.25 ? pick(vis) : null;
  if (!item) return null;
  seen[item] = true;
  if (item === 'Durian Head') { const k = (save.durianK = save.durianK || {}); k[who] = true; if (k[0] && k[1] && k[2]) achGet('king_of_fruits'); }
  if (GHOSTS.has(item)) { const k = (save.booK = save.booK || {}); k[who] = true; if (k[0] && k[1] && k[2]) achGet('boo'); }
  persist();
  return item;
}
// Adelle's outfit comment for the visit (step 2): returns a list of lines or []
function adelleComment(stage) {
  const L = look(), S = ph(), vis = visibleItems();
  if (stage >= 5 && L.outfit === 'Office Suit' && !S.ach.steady_pom_pi_pi) { achGet('steady_pom_pi_pi'); return [['A', "Guess you're ready for our date?"], ['J', "...I've been ready."]]; }
  if (stage >= 5 && S.ach.steady_pom_pi_pi && UNIFORMS.has(L.outfit) && !S.ach.man_in_uniform) { achGet('man_in_uniform'); return [['A', 'Looking good... I like my men in uniform ♥']]; }
  if (stage < 2 && !vis.includes('Bald')) return [];
  const item = stage < 2 ? (pickComment(2) === 'Bald' ? 'Bald' : null) : pickComment(2);
  if (!item) return [];
  if (stage >= 5 && Math.random() < 0.3 && item !== 'Bald') return [['A', 'Looking good, cutie.']];
  return [['A', CMT[item][2]]];
}

/* ---------- the toilet mirror ---------- */
const MIRROR_TABS = [['outfit', 'OUTFIT'], ['mask', 'MASK'], ['head', 'HEAD'], ['hat', 'HAT'], ['hair', 'HAIR'], ['extra', 'EXTRA'], ['trail', 'TRAIL']];
const BUNDLED = { head: ['Lion Dance Head', 'Brute Head', 'Pontianak Hair', 'Pocong Wrap'], hat: ['Samsui Headdress', 'Royal Crown'] };
function mirrorItems(tab) {
  const slot = MIRROR_TABS[tab][0];
  const base = { outfit: ['Hall Hoodie'], mask: ['Surgical Blue'], head: [null], hat: [null], hair: ['Hair'], extra: [], trail: ['White'] }[slot];
  const fromShop = COS.filter(c => c.slot === slot).map(c => c.name).concat(BUNDLED[slot] || []);
  return base.concat(fromShop.filter(owns));
}
function mirrorWorn(tab, it) {
  const L = look(), slot = MIRROR_TABS[tab][0];
  if (slot === 'extra') return it === 'Camo Face' ? L.camo : it === 'Heart Plaster' ? L.heart : L.lanyard;
  return L[slot] === it;
}
function openMirror() { G.mirror = { tab: 0, sel: 0, scroll: 0 }; sfx('menu_select'); }
function updateMirror() {
  const M = G.mirror, list = mirrorItems(M.tab), L = look();
  if (hit('left')) { M.tab = (M.tab + MIRROR_TABS.length - 1) % MIRROR_TABS.length; M.sel = 0; M.scroll = 0; sfx('menu_move'); }
  if (hit('right')) { M.tab = (M.tab + 1) % MIRROR_TABS.length; M.sel = 0; M.scroll = 0; sfx('menu_move'); }
  if (list.length) {
    if (hit('up')) { M.sel = (M.sel + list.length - 1) % list.length; sfx('menu_move'); }
    if (hit('down')) { M.sel = (M.sel + 1) % list.length; sfx('menu_move'); }
  }
  if (hit('click')) {
    for (let t = 0; t < MIRROR_TABS.length; t++) { const r = { x0: 104 + t * 29, y0: 22, x1: 104 + t * 29 + 28, y1: 33 }; if (inR(r, mouse.x, mouse.y)) { M.tab = t; M.sel = 0; M.scroll = 0; } }
    for (let i = 0; i < 6; i++) { const y = 38 + i * 20; if (mouse.y >= y && mouse.y < y + 19 && mouse.x > 104) { const j = M.scroll + i; if (j < list.length) { if (M.sel === j) pressed.act = true; M.sel = j; } } }
    if (G.leaveBtn && inR(G.leaveBtn, mouse.x, mouse.y)) pressed.pause = true;
  }
  M.scroll = clamp(M.scroll, M.sel - 5, M.sel);
  if (hit('act') && list.length) {
    const it = list[M.sel], slot = MIRROR_TABS[M.tab][0];
    if (slot === 'extra') { const k = it === 'Camo Face' ? 'camo' : it === 'Heart Plaster' ? 'heart' : 'lanyard'; L[k] = !L[k]; }
    else L[slot] = it;
    lookChanged(); sfx('menu_select');
  }
  if (hit('pause') || hit('dash')) { G.mirror = null; sfx('menu_back'); }
}
function drawMirror() {
  const M = G.mirror; if (!M) return;
  ctx.fillStyle = 'rgba(11,10,10,0.65)'; ctx.fillRect(0, 0, W, H);
  panel(8, 8, W - 8, H - 8);
  // the mirror: Jun Jie as he looks now, three times bigger
  ctx.fillStyle = '#9fc3d6'; ctx.fillRect(16, 16, 76, 112); ctx.fillStyle = '#c9e2ee'; ctx.fillRect(18, 18, 72, 108);
  ctx.fillStyle = 'rgba(255,255,255,0.5)'; ctx.fillRect(22, 22, 3, 30); ctx.fillRect(27, 22, 2, 14);
  ctx.strokeStyle = '#6f8a74'; ctx.lineWidth = 2; ctx.strokeRect(15, 15, 78, 114); ctx.lineWidth = 1;
  const pv = IMG[lookName({ masked: true })];
  ctx.drawImage(pv, 30, 26, 48, 96);
  outlined('MIRROR', 104, 9, '#f2c14e', 1);
  text('PICK WHAT TO WEAR.', 14, 136, '#bfb4a2'); text('A MASK IS STILL', 14, 146, '#6d6862'); text('NEEDED TO GO OUT.', 14, 154, '#6d6862');
  MIRROR_TABS.forEach(([k, lab], t) => {
    const x0 = 104 + t * 29, on = t === M.tab;
    ctx.fillStyle = on ? '#e8a25c' : '#302c25'; ctx.fillRect(x0, 22, 28, 11);
    textC(lab, x0 + 14, 25, on ? '#24211c' : '#bfb4a2', 1, null);
  });
  const list = mirrorItems(M.tab);
  if (!list.length) text('NOTHING HERE YET. TRY THE PHARMACY.', 108, 44, '#6d6862');
  for (let i = 0; i < 6; i++) {
    const j = M.scroll + i, it = list[j]; if (j >= list.length) break;
    const y = 38 + i * 20, sel = j === M.sel, worn = mirrorWorn(M.tab, it);
    ctx.fillStyle = '#302c25'; ctx.fillRect(104, y, W - 120, 19);
    ctx.strokeStyle = sel ? '#f2c14e' : '#4a443a'; ctx.strokeRect(104.5, y + 0.5, W - 121, 18);
    const pvi = it && IMG['cos_' + it]; if (pvi) ctx.drawImage(pvi, 106, y + 1);
    text(it ? UP(it) : 'NONE', 128, y + 6, worn ? '#9cc24a' : '#efe6d6');
    if (worn) text(MIRROR_TABS[M.tab][0] === 'extra' ? 'ON' : 'WEARING', W - 18 - textW(MIRROR_TABS[M.tab][0] === 'extra' ? 'ON' : 'WEARING'), y + 6, '#9cc24a');
    if (sel) { ctx.fillStyle = '#f2c14e'; ctx.beginPath(); ctx.moveTo(98, y + 6); ctx.lineTo(102, y + 9); ctx.lineTo(98, y + 12); ctx.fill(); }
  }
  keyChip('ENTER', MIRROR_TABS[M.tab][0] === 'extra' ? 'ON / OFF' : 'WEAR', 104, H - 22, '#f2c14e');
  keyChip('ESC', 'DONE', 176, H - 22, '#e8a25c', true);
  G.leaveBtn = { x0: 176, y0: H - 24, x1: 176 + textW('ESC') + 10 + textW('DONE') + 6, y1: H - 10 };
}

/* ---------- masks at the exit ---------- */
const NO_MASK_LINES = [[1, "WAIT! YOU CAN'T GO OUT THERE WITHOUT A MASK. TAKE ONE FROM THE DISPENSER NEXT TO THE EXIT."], [3, 'MASK. MASK. GOT EARS OR NOT?'],
  [5, 'YOU WANT TO GO OUT AND BREATHE THAT? YOUR LUNGS WILL CRY.'], [8, "I'M GOING TO STAPLE THE MASK TO YOUR FACE."], [10, "...FINE. I GIVE UP. NO, I DON'T. TAKE THE MASK."]];
// counts tries in a row: putting a mask on starts the count again
const NO_GEAR_LINE = "WAIT! NO MASK AND NO WEAPON? TAKE A MASK FROM THE DISPENSER AND SOMETHING FROM THE RACK FIRST.";
function noMaskStop(noWeapon) {
  const first = noWeapon ? NO_GEAR_LINE : NO_MASK_LINES[0][1];   // three versions: no mask, no weapon (in the hub), or neither
  if (!storyOn()) { say('nurse', 'NURSE MEI', first); return; }   // before the tutorial: just the plain reminder
  const n = (G.noMaskRun = (G.noMaskRun || 0) + 1), had = !!ph().ach.anti_masker;
  if (n >= 10) achGet('anti_masker');
  if (look().head && !(ph().ach.thats_not_a_mask)) {
    achGet('thats_not_a_mask');
    talk([['N', "Eh, you're not wearing a mask underneath that aren't you?"], ['J', "Doesn't this count as a mask?"], ['N', 'No...that is definitely not MOH approved.']]);
    return;
  }
  let line = first;
  if (had) { if (n > 1 && Math.random() < 0.3) line = 'LAST WARNING AH, TAKE A MASK.'; }   // after Anti-Masker she's back to normal, with the odd warning
  else for (const [k, l] of NO_MASK_LINES) if (n >= k) line = k === 1 ? first : l;
  say('nurse', 'NURSE MEI', line);
}

/* ================= Stage 3: achievements, the trophy cabinet, the patient file, the Records wing, Joan and Mei extras ================= */
// [id, name, how (shown), hidden, reward item(s) or null]
const ACH = [
  // normal
  ['first_breath', 'First Breath', 'Beat Raffles for the first time.', 0, null],
  ['two_hands', 'Two Hands', 'Beat Raffles with both weapons.', 0, ['SAF No. 4']],
  ['unhealthy', 'Unhealthy', 'Beat Raffles at PSI 164.', 0, ['Beret']],
  ['very_unhealthy', 'Very Unhealthy', 'Beat Raffles at PSI 248.', 0, ['Red & White']],
  ['lion_city', 'Lion City', 'Beat Raffles at every PSI.', 0, ['Sang Nila Utama', 'Royal Crown']],
  ['rock_head', 'Rock Head', 'Beat Raffles 10 times.', 0, ['Raffles Head']],
  ['stone_cold', 'Stone Cold', 'Beat Raffles 15 times.', 0, ['Raffles Statue']],
  ['steady_hands', 'Steady Hands', 'Beat Raffles without taking damage.', 0, ['Red Beret']],
  ['clean_sweep', 'Clean Sweep', 'Disperse 500 Hazed.', 0, ['NS Pixel Camo']],
  ['decontaminated', 'Decontaminated', 'Disperse 1,000 Hazed.', 0, ['Hazmat Suit']],
  ['big_boy', 'Big Boy', 'Defeat 500 Brutes.', 0, ['Hazed Brute', 'Brute Head']],
  ['samsui_spirit', 'Samsui Spirit', 'Clear Boat Quay 50 times.', 0, ['Samsui Woman', 'Samsui Headdress']],
  ['fire_safety', 'Fire Safety', 'Put out 50 fires with Chilli Padi.', 0, ['SCDF Helmet']],
  ['hawker_favourite', 'Hawker Favourite', 'Take every Hawker Auntie power-up.', 0, ['Hawker Hat']],
  ['siam_master', 'Siam Master', 'Hit 200 Hazed with Siam.', 0, ['Haze Grey']],
  ['full_stomach', 'Full Stomach', 'Eat 5 or more meals in one run.', 0, null],
  ['fast_furious', 'Fast and Furious', 'Siam 500 times.', 0, null],
  ['fashionista', 'Fashionista', 'Own every outfit.', 0, null],
  ['mask_collector', 'Mask Collector', 'Own every mask, face paint included.', 0, null],
  ['hat_trick', 'Hat Trick', 'Own every piece of headwear.', 0, null],
  ['big_head', 'Big Head', 'Own every full-head mask.', 0, null],
  ['trailblazer', 'Trailblazer', 'Own every Siam trail.', 0, null],
  ['loyal', 'Most Loyal Customer', 'Earn 50 chops after owning everything.', 0, null],
  ['first_session', 'First Session', 'Train any upgrade with Physio Joan.', 0, null],
  ['no_pain', 'No Pain No Gain', 'Max every upgrade.', 0, ['Physio Scrubs']],
  ['gym_rat', 'Gym Rat', 'Spend 1,000 clean air on training.', 0, ['Sweatband']],
  ['cardboard_uncle', 'Cardboard Uncle', 'Break every box in a run.', 0, null],
  ['golden_breath', 'Golden Breath', 'Earn every other achievement (hidden ones not needed).', 0, ['Gold N95']],
  // hidden
  ['non_compliant', 'Non-Compliant Patient', 'Annoy Nurse Mei until she snaps.', 1, ['Prison Stripes']],
  ['anti_masker', 'Anti-Masker', 'Try to leave without a mask 10 times.', 1, null],
  ['stay_indoors', 'Stay Indoors', 'Watch the news 5 times in a row.', 1, null],
  ['didnt_reach', "Didn't Even Reach Boat Quay", 'Get knocked out in the driveway.', 1, null],
  ['kiasu', 'Kiasu', 'Reach Raffles with 300+ coins unspent.', 1, null],
  ['atas', 'Atas', 'Buy everything in one Mamak Shop.', 1, null],
  ['lepak', 'Lepak', 'Stay paused for 10 minutes.', 1, null],
  ['tahan', 'Tahan', 'Beat Raffles on half a mask.', 1, null],
  ['kanchiong', 'Kanchiong Spider', "Skip Raffles' intro 10 times.", 1, null],
  ['kopi_date', 'Kopi Date', 'Get asked out for kopi.', 1, null],
  ['steady_pom_pi_pi', 'Steady Pom Pi Pi', 'Show Adelle the Office Suit, after the kopi date.', 1, null],
  ['man_in_uniform', 'Man in Uniform', 'Then show her a uniform.', 1, null],
  ['slowpoke', 'Slowpoke', 'Beat Raffles without using Siam once in the run.', 1, null],
  ['long_sighted', 'Long-sighted', 'Beat Raffles without using your normal attack.', 1, null],
  ['short_sighted', 'Short-sighted', 'Beat Raffles without using your special attack.', 1, null],
  ['superman', 'Superman', 'Fire the clean-air beam 100 times.', 1, null],
  ['impersonation', 'Impersonation', 'Stand completely still in front of Raffles for 10 seconds.', 1, null],
  ['i_am_speed', 'I AM SPEED', 'Beat Raffles dealing damage only with Siam.', 1, null],
  ['total_defence', 'Total Defence', 'Own every military item.', 1, null],
  ['nothing_to_shave', 'Nothing to shave...', 'Pick Shave Bald while already bald.', 1, null],
  ['halloween', 'Halloween Horror Night', 'Own every scary outfit.', 1, null],
  ['boo', 'Boo!', 'Scare Nurse Mei, Physio Joan and Adelle with a ghost outfit.', 1, null],
  ['king_of_fruits', 'King of Fruits', 'Talk to all three in the Durian Head.', 1, null],
  ['best_friends', 'Best Friends', 'Become friends with Adelle.', 1, ['Pink Lanyard']],
  ['thats_not_a_mask', "That's not a mask.", 'Try to leave in a full-head item without a mask.', 1, null],
  ['no_mask_needed', 'No mask needed.', 'Take a mask while wearing the Hazmat Hood.', 1, null],
  ['why_waiting', 'Why are we waiting?', 'Stand around in the Mamak Shop for 5 minutes.', 1, null],
  ['happy_to_see_you', 'Happy to see you.', 'Visit Adelle just to see her.', 1, ['Heart Plaster']],
  ['skip_leg_day', 'Skip Leg Day', 'Beat Raffles with nothing trained.', 1, null],
  ['warm_up', 'Warm-Up', 'Siam 10 times right in front of Joan.', 1, null],
  ['indecisive', 'Indecisive', 'Reset your training.', 1, null],
  ['lurking', 'Lurking', 'Stand still in the PSI 248 haze for a minute.', 1, ['Pontianak', 'Pontianak Hair']],
  ['revolving_door', 'Revolving Door', 'Go in and out of the pharmacy 10 times in a row.', 1, null],
  ['hop_hop_hop', 'Hop Hop Hop', 'Siam 300 times in one run.', 1, ['Pocong', 'Pocong Wrap']],
].map(([id, name, how, hidden, reward]) => ({ id, name, how, hidden: !!hidden, reward }));
const ACHBY = Object.fromEntries(ACH.map(a => [a.id, a]));
COS.push({ name: 'Physio Scrubs', slot: 'outfit', price: null, bundle: [], how: 'Max every upgrade' }, { name: 'Sweatband', slot: 'hat', price: null, bundle: [], how: 'Spend 1,000 clean air on training' });
const st = () => (save.st = save.st || { kills: 0, brutes: 0, boxes: 0, coins: 0, boons: {}, weapons: {}, ko: {}, fast: [0, 0, 0], winsPsi: [0, 0, 0], winWeapons: {}, auntie: {}, siam: 0, siamHits: 0, beams: 0, fires: 0, quay: 0, skips: 0, airSpent: 0 });

// the pop-up queue, top centre, never pauses
achGet = function (id) {
  if (!storyOn()) return;   // nothing unlocks until the tutorial is done
  const S = ph(); if (S.ach[id] || !ACHBY[id]) return;
  S.ach[id] = Date.now(); persist();
  (G.achPops = G.achPops || []).push({ id, t0: null });
  if (id !== 'golden_breath' && ACH.filter(a => !a.hidden && a.id !== 'golden_breath').every(a => S.ach[a.id])) achGet('golden_breath');
};
const achUnclaimed = () => ACH.filter(a => a.reward && ph().ach[a.id] && !(save.claimed || {})[a.id]);
function drawAchPop() {
  const Q = G.achPops; if (!Q || !Q.length) return;
  if (G.book || G.file) return;
  const p = Q[0];
  if (G.scene === 'won' || G.scene === 'dead') { if (p.t0 != null && G.t - p.t0 > 2) Q.shift(); else p.t0 = null; return; }
  if (p.t0 == null) { p.t0 = G.t; sfx('rank_up'); }
  const age = G.t - p.t0; if (age > 4) { Q.shift(); return; }
  const a = ACHBY[p.id], y = Math.round(-26 + 30 * clamp(Math.min(age, 4 - age) / 0.3, 0, 1)), col = a.hidden ? '#9a6ad6' : '#f2c14e';
  const title = a.hidden ? 'HIDDEN ACHIEVEMENT FOUND!' : 'ACHIEVEMENT UNLOCKED!', w = Math.max(textW(title), textW(UP(a.name)), textW(UP(a.how))) + 34;
  const x = Math.round(160 - w / 2);
  ctx.fillStyle = '#0b0a0a'; ctx.fillRect(x - 1, y - 1, w + 2, 30); ctx.fillStyle = col; ctx.fillRect(x, y, w, 28); ctx.fillStyle = 'rgba(20,18,16,0.95)'; ctx.fillRect(x + 1, y + 1, w - 2, 26);
  trophy(x + 6, y + 7, col, a.hidden);
  text(title, x + 26, y + 3, col, 1, null); text(UP(a.name), x + 26, y + 11, '#efe6d6', 1, null); text(UP(a.how), x + 26, y + 19, '#8a8378', 1, null);
}
function trophy(x, y, col, q) {
  ctx.fillStyle = col; ctx.fillRect(x + 1, y, 10, 6); ctx.fillRect(x + 3, y + 6, 6, 2); ctx.fillRect(x + 5, y + 8, 2, 3); ctx.fillRect(x + 2, y + 11, 8, 2);
  ctx.fillRect(x - 1, y + 1, 2, 3); ctx.fillRect(x + 11, y + 1, 2, 3);
  if (q) { ctx.fillStyle = '#0b0a0a'; ctx.fillRect(x + 4, y + 1, 4, 1); ctx.fillRect(x + 7, y + 2, 1, 1); ctx.fillRect(x + 6, y + 3, 1, 1); ctx.fillRect(x + 6, y + 5, 1, 1); }
}

/* ---------- checks ---------- */
const MILITARY = ['Admin T', 'SAF No. 4', 'Air Force', 'Navy', 'Beret', 'Red Beret', 'Grey Beret', 'Khaki Beret', 'Blue Beret', 'Green Beret', 'Air Force Beret', 'Navy Beret', 'Camo Face', 'Bald'];
const ownsReal = n => FREE_ITEMS.has(n) || !!ph().owned[n];   // collection achievements ignore the cheat
function checkOwnership() {
  const all = slot => COS.filter(c => c.slot === slot).map(c => c.name);
  if (all('outfit').every(ownsReal)) achGet('fashionista');
  if (all('mask').concat(['Camo Face']).every(ownsReal)) achGet('mask_collector');
  if (all('hat').concat(['Samsui Headdress', 'Royal Crown']).every(ownsReal)) achGet('hat_trick');
  if (all('head').concat(['Lion Dance Head', 'Brute Head', 'Pontianak Hair', 'Pocong Wrap']).every(ownsReal)) achGet('big_head');
  if (all('trail').every(ownsReal)) achGet('trailblazer');
  if (MILITARY.every(ownsReal)) achGet('total_defence');
  if (['Pontianak', 'Pocong', 'Hazed Brute'].every(ownsReal)) achGet('halloween');
}
function checkCounts() {
  const s = st();
  if (s.kills >= 500) achGet('clean_sweep'); if (s.kills >= 1000) achGet('decontaminated'); if (s.brutes >= 500) achGet('big_boy');
  if (s.fires >= 50) achGet('fire_safety'); if (s.siamHits >= 200) achGet('siam_master'); if (s.siam >= 500) achGet('fast_furious');
  if (s.beams >= 100) achGet('superman'); if (s.quay >= 50) achGet('samsui_spirit'); if (s.skips >= 10) achGet('kanchiong');
  if (['rice', 'curry', 'tapao', 'chilli', 'tehtarik', 'gravy', 'gassy'].every(k => s.auntie[k])) achGet('hawker_favourite');
}
// called when a run is won
function achWin() {
  const s = st(); s.winsPsi[G.psi]++; s.winWeapons[G.weapon] = 1;
  const t = RS.runT; if (!s.fast[G.psi] || t < s.fast[G.psi]) s.fast[G.psi] = t;
  achGet('first_breath');
  if (s.winWeapons.fan && s.winWeapons.vac) achGet('two_hands');
  if (G.psi >= 1) achGet('unhealthy'); if (G.psi >= 2) achGet('very_unhealthy');
  if (s.winsPsi.every(n => n > 0)) achGet('lion_city');
  if (save.wins >= 10) achGet('rock_head'); if (save.wins >= 15) achGet('stone_cold');
  if (!RS.anyHit) achGet('steady_hands');
  if (P.half <= 1) achGet('tahan');
  if (!RS.siamN) achGet('slowpoke'); if (!RS.atkUsed) achGet('long_sighted'); if (!RS.spUsed) achGet('short_sighted');
  if (RS.siamDmg && !RS.otherDmg) achGet('i_am_speed');
  if (UPGRADES.every(u => !(save.up[u.id] | 0))) { achGet('skip_leg_day'); save.joanSkipPending = true; }
  persist();
}
function achRunEnd(didWin) {
  const s = st();
  s.coins += G.stats.coins || 0; s.weapons[G.weapon] = (s.weapons[G.weapon] || 0) + 1;
  if (!didWin) { const k = G.killedBy || 'other'; s.ko[k] = (s.ko[k] || 0) + 1; if (G.gate) achGet('didnt_reach'); save.joanDeathPending = true; }
  else achWin();
  checkCounts(); persist();
}
function achTick(dt) {
  // standing still: in front of Raffles, and in the PSI 248 haze
  if (!P.moving && P.dashT <= 0 && G.scene === 'run') {
    RS.stillT = (RS.stillT || 0) + dt;
    if (G.boss && !G.cut && !['statue', 'dead'].includes(G.boss.state) && Math.hypot(G.boss.x - P.x, G.boss.y - P.y) < 80 && RS.stillT >= 10) achGet('impersonation');
    if (G.psi === 2 && RS.stillT >= 60) achGet('lurking');
  } else RS.stillT = 0;
  if (G.shop && G.timeInRoom >= 300 && !G.shop.waited) { G.shop.waited = true; G.shop.talk = { s: 'FASTER LEH, THAMBI.', t: 3.5 }; achGet('why_waiting'); }
}

/* ---------- Records wing ---------- */
recordsWingOpen = () => (save.wins || 0) > 0;
const REC_SPOTS = [
  { id: 'trophy', x: 184, y: 84, r: 15, label: 'ACHIEVEMENTS', show: () => recordsWingOpen() },
  { id: 'file', x: 270, y: 82, r: 14, label: 'READ MY FILE', show: () => recordsWingOpen() },
];
PHARM_SPOTS.push(...REC_SPOTS);
function records(seenCheck) {
  if (!recordsWingOpen()) return;
  const i = MAPS.pharm.block.indexOf(ROPE_BLOCK); if (i >= 0) MAPS.pharm.block.splice(i, 1);
  if (seenCheck && !save.recordsVisited && P.x > 150 && P.y < 112) {
    save.recordsVisited = true; persist();
    const n = Object.keys(ph().ach).length;
    G.banner = { t: 3.5, s: n ? "YOU'VE ALREADY EARNED " + n + ' ACHIEVEMENT' + (n > 1 ? 'S' : '') + '!' : 'WELCOME TO THE RECORDS ROOM.' };
  }
}

/* ---------- the achievements book (trophy cabinet) ---------- */
function openBook() {
  const C = save.claimed || {}, A = ph().ach;
  let tab = 0, sel = 0;
  find: for (const test of [a => achNew(a), a => a.reward && A[a.id] && !C[a.id]]) for (let t of [0, 2]) { const i = bookList(t).findIndex(test); if (i >= 0) { tab = t; sel = i; break find; } }
  G.book = { tab, sel, scroll: 0 }; sfx('menu_select');
}
function bookList(tab) {
  const A = ph().ach;
  if (tab === 0) return ACH.filter(a => !a.hidden && A[a.id]);
  if (tab === 1) return ACH.filter(a => !a.hidden && !A[a.id]);
  return ACH.filter(a => a.hidden && A[a.id]);
}
function claimReward(a) {
  const S = ph(); (save.claimed = save.claimed || {})[a.id] = true; achSeen()[a.id] = true;
  for (const r of a.reward) S.owned[r] = true;
  persist(); checkOwnership(); sfx('buy');
}
// seen: an earned achievement stays "new" (a ! on its tab and row) until it is highlighted or claimed
const achSeen = () => (save.achSeen = save.achSeen || {});
const achNew = a => ph().ach[a.id] && !achSeen()[a.id];
const tabNew = t => bookList(t).some(achNew);
const achAnyNew = () => ACH.some(achNew);
function setTab(B, t) { if (B.tab !== t) { B.tab = t; B.sel = 0; B.scroll = 0; sfx('menu_move'); } }
function updateBook() {
  const B = G.book; let list = bookList(B.tab);
  if (hit('left')) setTab(B, (B.tab + 2) % 3);
  if (hit('right')) setTab(B, (B.tab + 1) % 3);
  list = bookList(B.tab); const n = list.length;
  if (n) {   // a list with a top and a bottom: no wrapping round
    if (hit('up') && B.sel > 0) { B.sel--; sfx('menu_move'); }
    if (hit('down') && B.sel < n - 1) { B.sel++; sfx('menu_move'); }
    if (hit('wheelUp')) { B.scroll = Math.max(0, B.scroll - 1); B.sel = clamp(B.sel, B.scroll, B.scroll + 3); }
    if (hit('wheelDown')) { B.scroll = Math.min(Math.max(0, n - 4), B.scroll + 1); B.sel = clamp(B.sel, B.scroll, Math.min(n - 1, B.scroll + 3)); }
  }
  B.sel = clamp(B.sel, 0, Math.max(0, n - 1));
  B.scroll = clamp(clamp(B.scroll, B.sel - 3, B.sel), 0, Math.max(0, n - 4));
  if (hit('click')) {
    for (let t = 0; t < 3; t++) if (inR({ x0: 16 + t * 70, y0: 24, x1: 82 + t * 70, y1: 35 }, mouse.x, mouse.y)) setTab(B, t);
    for (let i = 0; i < 4; i++) {
      const a = list[B.scroll + i], y = 40 + i * 28; if (!a || !inR({ x0: 16, y0: y, x1: W - 16, y1: y + 26 }, mouse.x, mouse.y)) continue;
      if (B.sel !== B.scroll + i) { B.sel = B.scroll + i; sfx('menu_move'); }
      if (inR({ x0: W - 94, y0: y + 5, x1: W - 50, y1: y + 20 }, mouse.x, mouse.y)) pressed.act = true;   // the red CLAIM button
    }
  }
  const a = list[B.sel];
  if (a && ph().ach[a.id] && !achSeen()[a.id]) { achSeen()[a.id] = true; persist(); }
  if (hit('act') && a && a.reward && ph().ach[a.id] && !(save.claimed || {})[a.id]) claimReward(a);
  if (hit('pause') || hit('dash')) { G.book = null; sfx('menu_back'); }
}
function alertMark(x, y) { const b = Math.round(Math.sin(G.t * 6)); ctx.fillStyle = '#0b0a0a'; ctx.fillRect(x - 1, y - 1 + b, 5, 10); ctx.fillStyle = '#d23b33'; ctx.fillRect(x, y + b, 3, 8); ctx.fillStyle = '#ffffff'; ctx.fillRect(x + 1, y + 1 + b, 1, 4); ctx.fillRect(x + 1, y + 6 + b, 1, 1); }
function rewardPreview(a) {
  // Jun Jie wearing the reward, built like the mirror does
  const r = a.reward[0], it = COS.find(c => c.name === r) || { slot: COS_HEADS.has(r) ? 'head' : 'hat' };
  const L = { ...LOOK0 }, sl = it.slot;
  if (sl === 'extra') L[r === 'Heart Plaster' ? 'heart' : r === 'Pink Lanyard' ? 'lanyard' : 'camo'] = true; else if (sl === 'trail') return null; else L[sl] = r;
  for (const b of a.reward.slice(1)) { if (COS_HEADS.has(b)) L.head = b; else L.hat = b; }
  const k = 'rw_' + a.id; if (!IMG[k]) IMG[k] = composeLook(L, { masked: true }); return IMG[k];
}
function drawBook() {
  const B = G.book; if (!B) return;
  const A = ph().ach, C = save.claimed || {};
  ctx.fillStyle = 'rgba(11,10,10,0.7)'; ctx.fillRect(0, 0, W, H);
  panel(8, 6, W - 8, H - 6);
  const normal = ACH.filter(a => !a.hidden), got = normal.filter(a => A[a.id]).length, hid = ACH.filter(a => a.hidden), hgot = hid.filter(a => A[a.id]).length;
  text('ACHIEVEMENTS', 16, 12, '#e8a25c'); const ec = got + '/' + normal.length + ' EARNED'; text(ec, W - 16 - textW(ec), 12, '#f2c14e');
  ['EARNED', 'NOT YET', 'HIDDEN ' + hgot + '/' + hid.length].forEach((l, t) => {
    const on = t === B.tab; ctx.fillStyle = on ? (t === 2 ? '#9a6ad6' : '#e8a25c') : '#302c25'; ctx.fillRect(16 + t * 70, 24, 66, 11); textC(l, 49 + t * 70, 27, on ? '#24211c' : '#bfb4a2', 1, null);
    if (tabNew(t)) alertMark(78 + t * 70, 20);
  });
  const list = bookList(B.tab);
  if (!list.length) textC(B.tab === 0 ? 'NOTHING YET. GO OUT THERE!' : B.tab === 1 ? 'YOU GOT EVERYTHING!' : 'NONE FOUND YET.', 160, 70, '#8a8378');
  for (let i = 0; i < 4; i++) {
    const a = list[B.scroll + i]; if (!a) break;
    const y = 40 + i * 28, sel = B.scroll + i === B.sel, has = !!A[a.id];
    ctx.fillStyle = '#302c25'; ctx.fillRect(16, y, W - 32, 26); ctx.strokeStyle = sel ? '#f2c14e' : '#4a443a'; ctx.strokeRect(16.5, y + 0.5, W - 33, 25);
    trophy(22, y + 6, has ? (a.hidden ? '#9a6ad6' : '#f2c14e') : '#5a5550', a.hidden);
    if (achNew(a)) alertMark(33, y + 2);
    text(UP(a.name), 40, y + 4, has ? '#efe6d6' : '#8a8378'); text(UP(a.how), 40, y + 12, '#8a8378');
    if (a.reward) {
      const rl = 'REWARD: ' + UP(a.reward.join(' + ')); text(rl, 40, y + 19, has ? '#7ac25a' : '#6d6862');
      const pv = rewardPreview(a);
      if (pv) { if (!has) ctx.globalAlpha = 0.35; ctx.drawImage(pv, W - 44, y - 6); ctx.globalAlpha = 1; }
      else { const cols = COSMETA.trails[a.reward[0]] || ['#8f949a']; ctx.fillStyle = cols[0]; ctx.fillRect(W - 42, y + 8, 12, 4); }
      if (has && !C[a.id]) { ctx.fillStyle = '#d23b33'; ctx.fillRect(W - 92, y + 7, 40, 11); textC('CLAIM', W - 72, y + 10, '#ffffff', 1, null); }
      else if (has) text('CLAIMED', W - 88, y + 10, '#7ac25a');
      else { ctx.fillStyle = '#9aa0a9'; ctx.fillRect(W - 78, y + 8, 5, 1); ctx.fillStyle = '#d9b44a'; ctx.fillRect(W - 79, y + 10, 7, 5); }
    }
  }
  if (list.length > 4) { const th = Math.max(8, Math.round(110 * 4 / list.length)), ty = 40 + Math.round((110 - th) * B.scroll / (list.length - 4)); ctx.fillStyle = '#302c25'; ctx.fillRect(W - 14, 40, 3, 110); ctx.fillStyle = '#e8a25c'; ctx.fillRect(W - 14, ty, 3, th); }
  if (B.tab === 2) { const left = hid.length - hgot; if (left) textC(left + ' MORE TO FIND. KEEP MESSING AROUND...', 160, 152, '#8a8070'); }
  keyChip('ENTER', 'CLAIM', 16, H - 20, '#f2c14e'); keyChip('ESC', 'CLOSE', 80, H - 20, '#e8a25c', true);
}

/* ---------- MY FILE: stats as a patient file ---------- */
function openFile() { G.file = true; sfx('menu_select'); }
const fmtN = n => n >= 1e7 ? (n / 1e6).toFixed(1) + 'M' : String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
const fmtT = s => s ? Math.floor(s / 60) + ':' + String(Math.floor(s % 60)).padStart(2, '0') : '--';
function drawFile() {
  if (!G.file) return;
  const s = st();
  ctx.fillStyle = 'rgba(11,10,10,0.7)'; ctx.fillRect(0, 0, W, H);
  ctx.fillStyle = '#c99a62'; ctx.fillRect(18, 12, 284, 160); ctx.fillStyle = '#0b0a0a'; ctx.strokeRect(18.5, 12.5, 283, 159);
  ctx.fillStyle = '#fbf6ea'; ctx.fillRect(24, 18, 272, 148);
  ctx.fillStyle = '#d23b33'; ctx.fillRect(24, 18, 272, 3);
  text('PATIENT FILE', 30, 26, '#24211c', 1, null); text('NAME: JUN JIE', 30, 36, '#24211c', 1, null); text('BED 1, WARD 7', 30, 44, '#8a8070', 1, null);
  ctx.fillStyle = '#c0302a'; ctx.fillRect(206, 24, 84, 13); ctx.fillStyle = '#fbf6ea'; ctx.fillRect(207, 25, 82, 11); textC('CONFIDENTIAL', 248, 28, '#c0302a', 1, null);
  // photo
  ctx.fillStyle = '#d9dde3'; ctx.fillRect(250, 42, 36, 46); ctx.strokeStyle = '#8a8070'; ctx.strokeRect(250.5, 42.5, 35, 45); ctx.drawImage(IMG[lookName({ masked: false })], 0, LOY - 2, 16, 20, 252, 46, 32, 40);
  paperClip(274, 32);
  const runs = save.runCount || 0, fav = Object.entries(s.boons).sort((a, b) => b[1] - a[1])[0], wpn = Object.entries(s.weapons).sort((a, b) => b[1] - a[1])[0];
  const rows = [['ADMITTED', fmtN(runs) + (runs === 1 ? ' TIME' : ' TIMES')], ['RAFFLES BEATEN', fmtN(save.wins || 0)], ['FASTEST CLEAR', s.fast.map(fmtT).join(' / ')], ['HAZED DISPERSED', fmtN(s.kills)],
    ['BOXES BROKEN', fmtN(s.boxes)], ['COINS EARNED', fmtN(s.coins)], ['CHOPS EARNED', fmtN(ph().chopsEver)], ['FAV POWER-UP', fav ? BOONS[fav[0]].name : '--'], ['FAV WEAPON', wpn ? ({ fan: 'CHINESE FANS', vac: 'CYCLONE VAC', rotan: 'ROTAN' }[wpn[0]] || '--') : '--']];
  rows.forEach(([k, v], i) => { const y = 56 + i * 9; text(k, 30, y, '#8a8070', 1, null); text(v, 112, y, '#24211c', 1, null); });
  text('KNOCKED OUT BY', 30, 140, '#8a8070', 1, null);
  const ko = [['WISP', s.ko.wisp || 0, '#d6d1c8'], ['SPITTER', s.ko.spitter || 0, '#e8a25c'], ['BRUTE', s.ko.brute || 0, '#8a6a5a'], ['RAFFLES', s.ko.raffles || 0, '#c0302a']], mx = Math.max(1, ...ko.map(k => k[1]));
  ko.forEach(([k, n, c], i) => { const x = 112 + i * 46; text(k, x, 148, '#8a8070', 1, null); ctx.fillStyle = c; ctx.fillRect(x, 156, Math.max(n ? 1 : 0, Math.round(40 * n / mx)), 4); text(fmtN(n), x, 140, '#24211c', 1, null); });
  keyChip('ESC', 'CLOSE', 30, 155, '#e8a25c');
}
// a slightly slanted paper clip holding the photo's top right corner
const CLIP = ['..####..', '.#....#.', '#......#', '#..##..#', '#.#..#.#', '#.#..#.#', '#.#..#.#', '#.#..#.#', '#.#..#.#', '#.#..#.#', '#.#..#.#', '#.#..#.#', '#.#..#.#', '#..##..#', '#......#', '#......#', '.#....#.', '..####..'];
function paperClip(x, y) {
  CLIP.forEach((r, i) => { const dx = x + 4 - Math.floor(i / 5); [...r].forEach((c, j) => { if (c !== '#') return; ctx.fillStyle = 'rgba(0,0,0,0.3)'; ctx.fillRect(dx + j + 1, y + i + 1, 1, 1); }); });
  CLIP.forEach((r, i) => { const dx = x + 4 - Math.floor(i / 5); [...r].forEach((c, j) => { if (c !== '#') return; ctx.fillStyle = j >= 5 ? '#5f6770' : j <= 1 ? '#dfe3e8' : '#9aa3ad'; ctx.fillRect(dx + j, y + i, 1, 1); }); });
}
function updateFile() { if (hit('pause') || hit('dash') || hit('act') || hit('click')) { G.file = null; sfx('menu_back'); } }

/* ---------- Nurse Mei: talking too much, the knockout, Stay Indoors ---------- */
const MEI_ANNOY = { 4: 'Nothing better to do ah?', 5: "I'm very busy, you know. Got other patients.", 6: "Boy. I'm warning you ah.", 7: 'Go and bother Joan instead.', 8: 'Stop talking to me, please.',
  9: 'Get out of my face...', 10: "You're really pissing me off.", 11: 'I swear this counts as assault.', 12: "Aren't you supposed to go save Singapore??", 13: 'Stop...', 14: 'LAST WARNING.', 15: "THAT'S IT!" };
function meiAnnoyLine() {
  const n = (G.meiTalks = (G.meiTalks || 0) + 1);
  G.meiAnger = n >= 14 ? 3 : n >= 10 ? 2 : n >= 8 ? 1 : 0;
  return n >= 4 ? MEI_ANNOY[Math.min(n, 15)] : null;
}
function meiKnockout() {
  G.meiTalks = 0; G.meiAnger = 0; G.flash = 0.3; G.shake = 0.4; sfx('hurt'); achGet('non_compliant');
  G.koWake = true; startIntro('wake');
}
function drawAnger() {
  // the anger mark over Nurse Mei: four little red corners, bigger as she gets angrier, pulsing at the end
  if (!G.meiAnger || G.scene !== 'hub') return;
  const s = G.meiAnger, pulse = s === 3 ? (((G.t * 8) | 0) % 2) : 0, cx = 52, cy = 62, r = 1 + s + pulse;
  ctx.fillStyle = s >= 2 ? '#ff3b2e' : '#d23b33';
  for (const [dx, dy] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
    const x = cx + dx * r, y = cy + dy * r;
    ctx.fillRect(x - (dx < 0 ? 1 : 0), y, 2, 1);          // short arm along x
    ctx.fillRect(x, y - (dy < 0 ? 1 : 0), 1, 2);          // short arm along y
  }
}
/* ---------- Physio Joan extras ---------- */
const JOAN_RANDOM = ['No pain no gain. What you want to train today?', 'Come, warm up first. Ten jumping jacks. ...Okay, okay, just pick something.', 'Your posture very bad, you know. All that running around hunched.',
  "You look stronger already. Or maybe it's the lighting.", 'Physio is like haze. Slowly slowly it clears.', 'Again? Good. Consistency is key.', 'Have you been doing the exercises I showed you?'];
const JOAN_FIRST = { n95: 'Better mask, better lungs. Simple.', wind: 'Now when you fall down, you get back up.', lung: 'Breathe in... breathe out... Now Siam faster.', grip: "Squeeze my hand. ...Ow. Okay, you're stronger.", opinion: 'Not happy with your choices? Now you can ask again.' };
function joanLine() {
  if (!storyOn()) return 'No pain no gain. What you want to train today?';
  const ci = pickComment(1); if (ci) return CMT[ci][1];
  if (save.joanSkipPending) { save.joanSkipPending = false; save.joanFirstWinSaid = true; return "You beat Raffles with zero training? ...I don't know whether to be proud or insulted."; }
  if (save.wins > 0 && !save.joanFirstWinSaid) { save.joanFirstWinSaid = true; if (Object.values(save.up).some(v => v > 0)) return "You beat Raffles?! I trained you well."; }
  if (save.joanDeathPending) { save.joanDeathPending = false; if (Math.random() < 0.5) return 'Again? You need more stamina. And maybe better reflexes.'; }
  if (save.ph && save.ph.stage >= 4 && Math.random() < 0.2) return 'You keep going to the pharmacy after my sessions. Sore muscles, is it? Or something else?';
  return pick(JOAN_RANDOM);
}
// Warm-Up: Siam 10 times right in front of her
function joanWarmup() {
  if (!storyOn()) return;
  if (G.scene !== 'hub' || Math.hypot(P.x - 282, P.y - 118) > 30) return;
  G.warmN = (G.warmN || 0) + 1;
  if (G.warmN === 10 && !ph().ach.warm_up) { achGet('warm_up'); say('physio', 'PHYSIO JOAN', 'NOT BAD, DECENT FORM I GUESS.'); }
}
function resetTraining() {
  let refund = 0; for (const u of UPGRADES) { const r = save.up[u.id] | 0; for (let i = 0; i < r; i++) refund += u.costs[i]; }
  if (!refund) return 'You haven\'t trained anything yet. Nothing to undo.';
  save.up = {}; if (!cheat('air')) save.cleanAir += refund; save.airSpentTrain = Math.max(0, (save.airSpentTrain || 0) - refund);
  const first = !ph().ach.indecisive; achGet('indecisive'); persist();
  return first ? 'Changed your mind ah? Okay, I undo everything. Your muscles very confused now.' : pick(['Again? Make up your mind lah.', 'Bro...Can you make up your mind?']);
}
function onTrained(id, cost) {
  if (!storyOn()) return null;
  const first = !Object.values(save.up).some(v => v > 0) || ((save.up[id] | 0) === 1 && !(save.trainedOnce || {})[id]);
  save.trainedOnce = save.trainedOnce || {};
  let line = null;
  if (!save.trainedOnce[id]) { save.trainedOnce[id] = true; line = JOAN_FIRST[id]; }
  if (!cheat('air') && !cheat('maxup')) save.airSpentTrain = (save.airSpentTrain || 0) + cost;
  if (!ph().ach.first_session) { achGet('first_session'); line = 'First session done! See, not so bad right?'; }
  if (UPGRADES.every(u => (save.up[u.id] | 0) >= u.costs.length) && !ph().ach.no_pain) { achGet('no_pain'); line = "Nothing left to teach you. You're the strongest patient I've ever had. Here, take my spare scrubs."; }
  if ((save.airSpentTrain || 0) >= 1000 && !ph().ach.gym_rat) { achGet('gym_rat'); line = "1,000 clean air?! You're my best customer. Here, take this sweatband."; }
  persist(); return line;
}

function frame(now) {
  try { frameInner(now); } catch (e) { console.error(e); try { ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.globalAlpha = 1; ctx.lineWidth = 1; } catch (_) {} for (const k in pressed) pressed[k] = false; requestAnimationFrame(frame); }
}
function frameInner(now) {
  const dt = Math.min(1 / 30, (now - last) / 1000); last = now;
  G.t += dt;
  if (vacLoop && (G.paused || G.scene !== 'run' || G.weapon !== 'vac' || G.revive || G.cut || !P.sucking)) vacHum(false);
  if (audioReady) { try { const m = musicFor(); if (m && m.blend != null) Music.blend('hospital', 'run', m.blend); else Music.play(m); Music.setDuck(G.paused ? 0.4 : 1); } catch (e) {} }
  if (toLoad > 0) { ctx.fillStyle = '#14100d'; ctx.fillRect(0, 0, W, H); requestAnimationFrame(frame); return; }
  if (!G.looksReady) { G.looksReady = true; initLooks(); }
  chipClicks();
  // a click or J that closes a dialogue or menu must not also swing: hold off attacks until it's let go
  if (G.dialog || G.boon || G.paused || G.settings) { if (mouse.left || keys.attack) G.atkLock = true; } else if (!mouse.left && !keys.attack) G.atkLock = false;
  if (hit('mute')) { muted = !muted; if (muted) vacHum(false); Music.setMuted(muted); }
  if (cheat('wallet') && G.scene === 'run') G.coins = Math.max(G.coins, 9999);
  if (cheat('air')) save.cleanAir = Math.max(save.cleanAir, 99999);
  if (G.banner && !(G.dialog || G.boon || G.menu || G.book || G.file)) { G.banner.t -= dt; if (G.banner.t <= 0) nextBanner(); }
  if (G.paused) { G.pauseT = (G.pauseT || 0) + dt; if (G.pauseT >= 600) achGet('lepak'); } else G.pauseT = 0;
  if (G.pendingJJ && !G.dialog && !G.boon) { const l = G.pendingJJ; G.pendingJJ = null; say(P.masked ? 'hero' : 'hero_nm', 'JUN JIE', l); }
  if (G.coinPop > 0) G.coinPop -= dt;
  updateFx(dt);
  // update
  if (G.settings) updateSettings();
  else if (G.paused) updatePause();
  else if (G.dialog) updateDialog();
  else if (G.scene === 'title') updateTitle();
  else if (G.scene === 'intro') updateIntro(dt);
  else if (G.scene === 'hub') updateHub(dt);
  else if (G.scene === 'pharm') updatePharm(dt);
  else if (G.scene === 'run') { if (G.hitstop > 0) G.hitstop -= dt; else updateRun(dt); }
  else if (G.scene === 'dead' || G.scene === 'won') {
    G.deadT += dt;
    const go = hit('act') || hit('click');
    if (G.scene === 'dead' && G.deadT > 1.0 && G.deadT < DEATH.stats && go) G.deadT = DEATH.stats;   // skip to the stats
    else if (G.deadT > (G.scene === 'dead' ? DEATH.stats + 0.4 : 0.8) && go) { if (G.scene === 'dead') startIntro('wake'); else { toHub(false); P.x = 26; P.y = 152; P.flip = false; P.face = { x: 1, y: 0 }; const seq = hospitalReturn(false); if (seq) talk(seq); } }
  }
  // draw
  ctx.save();
  if (G.shake > 0) { G.shake -= dt; ctx.translate(Math.round(rand(-2, 2)), Math.round(rand(-2, 2))); }
  if (G.scene === 'title') drawTitle();
  else if (G.scene === 'intro') drawIntro();
  else if (G.scene === 'hub') { drawHub(); drawMenu(); drawBoardUI(); }
  else if (G.scene === 'pharm') drawPharm();
  else if (G.scene === 'run') { drawRun(); drawBoon(); }
  else if (G.scene === 'dead') drawDeath();
  else if (G.scene === 'won') drawEnd(true);
  ctx.restore();
  if (G.banner && !G.dialog && !G.boon && !G.menu && !G.book && !G.file) {
    const s = G.banner.s, w = textW(s);
    const by = G.shop && G.scene === 'run' ? 136 : (G.achPops && G.achPops.length ? 42 : 36);
    ctx.fillStyle = 'rgba(11,10,10,0.7)'; ctx.fillRect(160 - w / 2 - 6, by, w + 12, 11);
    textC(s, 160, by + 3, '#f2c14e');
  }
  drawAchPop();
  drawDialog();
  if (G.paused) drawPause();
  drawSettings();
  const keepSpecial = touchAim.clearNext && pressed.special && G.scene === 'run' && G.hitstop > 0;
  for (const k in pressed) pressed[k] = false;
  if (keepSpecial) pressed.special = true;
  if (touchAim.clearNext && !pressed.special) { touchAim.on = false; touchAim.clearNext = false; }
  if (document.body.classList.contains('touch')) {
    const mode = G.scene === 'title' ? 'hidden' : (G.scene === 'dead' || G.scene === 'won' || G.boon || G.menu || G.paused || G.pshop || G.qboard || G.mirror || G.book || G.file) ? 'menu' : 'play';
    if (document.body.dataset.mode !== mode) document.body.dataset.mode = mode;
  }
  requestAnimationFrame(frame);
}

const entityRuntime = {
  movePlayer, dashTouch, drawPlayer, drawAim, drawWeapon, drawRotanHeld,
  addEnemy, updateEnemies, damage, disperse, drawEnemy,
  updateShots, drawShots, updateKuti, drawKuti,
  updateBoss, damageBoss, damageFlag, drawBoss, drawBossShadow, drawBossBody
};
const entities = {
  player: window.HazeHeroesEntityModules.createPlayer(entityRuntime),
  enemies: window.HazeHeroesEntityModules.createEnemies(entityRuntime),
  projectiles: window.HazeHeroesEntityModules.createProjectiles(entityRuntime),
  boss: window.HazeHeroesEntityModules.createBoss(entityRuntime)
};
const weaponRuntime = {
  updateAttacks, hitTargets, inCone, beamLines, updateBeam, drawBeam,
  updateRotan, updateSix, updateHop, rotStrike, rotLine, rotReach
};
const weapons = {
  fans: window.HazeHeroesWeaponModules.createFans(weaponRuntime),
  cycloneVac: window.HazeHeroesWeaponModules.createCycloneVac(weaponRuntime),
  rotan: window.HazeHeroesWeaponModules.createRotan(weaponRuntime)
};
const boonRuntime = {
  lv, canLevel, openBoon, grantBoon, grantBoon0, pickPatron, boonText,
  drawBoon, procOnHit, spreadFire, addKuti
};
const boons = window.HazeHeroesBoonModules.create(boonRuntime);
const roomRuntime = {
  makeRoom, roomOrder, startRun, enterGate, nextRoom, spawnPoint,
  spawnWave, updateWaves, minorReward, placeRoomReward, openPrata, pairVanish
};
const rooms = window.HazeHeroesRoomModules.create(roomRuntime);
const uiRuntime = {
  say, closeDialog, updateDialog, drawDialog, drawHub, drawHubPlants, drawInBed,
  drawShopLayer, drawShopUI, drawMenu, openBoard, enterPharm, openMirror,
  openBook, records, drawBoon, drawHUD
};
const ui = window.HazeHeroesUIModules.create(uiRuntime);
const inputRuntime = {
  onKey, toGame, enableTouch, togglePause, stickMove, stickEnd, press
};
const input = window.HazeHeroesCoreModules.createInput(inputRuntime);
const boot = () => { try { cv.focus({ preventScroll: true }); } catch (e) {} focusHint.hidden = document.hasFocus(); requestAnimationFrame(frame); };
const loopRuntime = { frame, frameInner, boot };
const loop = window.HazeHeroesCoreModules.createLoop(loopRuntime);

window.__haze = { closeDialog, minorReward, useSpot, HUB_SPOTS, nearestSpot, win, WPN, rotReach, dbgDraw: f => f({ ctx, IMG, text, textC, textW, panel, chopIcon, wrap, drawHub, drawQuestPop, W, H, G, P, keyChip, spr, outlined, bubble, drawDialog, say, shadowAt, drawBoon, BOONS, lv }), ACH, achGet, st, openBook, openFile, records, meiAnnoyLine, nurseTalkRef: () => nurseTalk, joanLine, resetTraining, onTrained, look, lookChanged, composeLook, lookName, openMirror, mirrorItems, visibleItems, pickComment, noMaskStop, MAPS, raffLines, ph, qev, QBY, QDEF, RS, adelleVisit, enterPharm, openBoard, hospitalReturn, qFill, qDoneOnBoard, stageTarget, updatePShop, nurseTalk, grantBoon, PATRONS, BOONS, wrap, addEnemy, startIntro, cheat, setCheat, openBoon, hurtPlayer, vacOn: () => !!vacLoop, music: () => Music.current,  G, P, save, startRun, nextRoom, toHub, openBoon, damageBoss, damageFlag, disperse, damage, makeRoom, beamLines, updateBeam, MAPS, canStand };
window.HazeHeroesMainRuntime = { boot };
})();