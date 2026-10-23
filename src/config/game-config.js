'use strict';
const PSI = [
  { name: 'MODERATE', psi: 78, col: '#9cc24a', count: 5, hp: 1, dmg: 1, reform: 4, fog: 0.18, raff: 1 },
  { name: 'UNHEALTHY', psi: 164, col: '#e8a25c', count: 7, hp: 1.25, dmg: 1, reform: 2.5, fog: 0.45, raff: 2 },
  { name: 'VERY UNHEALTHY', psi: 248, col: '#d8322a', count: 9, hp: 1.5, dmg: 2, reform: 1.5, fog: 0.78, raff: 2 },
];
const ETYPES = {
  wisp: { img: 'wisp', hp: 12, spd: 62, r: 5, dmg: 1, air: 0.12, h: 20 },
  brute: { img: 'brute', hp: 55, spd: 22, r: 11, dmg: 2, air: 0.6, h: 38, split: true },
  spitter: { img: 'spitter', hp: 22, spd: 30, r: 7, dmg: 1, air: 0.25, h: 24, ranged: true },
};
const BOONS = {
  // PE Teacher: movement
  skates: { name: 'ROLLER SKATES', icon: 'i_skates', pat: 'pe', rar: 'COMMON', max: 2, desc: 'SIAM 40% FURTHER AND MOVE 10% FASTER.', desc2: 'SIAM 80% FURTHER AND MOVE 20% FASTER.' },
  hula: { name: 'HULA HOOP', icon: 'i_hula', pat: 'pe', rar: 'COMMON', max: 2, desc: 'A SPINNING HOOP HURTS HAZED RIGHT NEXT TO YOU.', desc2: 'A BIGGER HOOP THAT SPINS FASTER AND HITS TWICE AS OFTEN.' },
  bald: { name: 'SHAVE BALD', icon: 'i_bald', pat: 'pe', rar: 'COMMON', max: 1, desc: 'AERODYNAMIC. MOVE 10% FASTER, AND DEAL 20% MORE DAMAGE WHILE MOVING.' },
  hitrun: { name: 'HIT-AND-RUN', icon: 'i_hitrun', pat: 'pe', rar: 'COMMON', max: 2, desc: 'SIAM THROUGH HAZED TO HIT THEM. NOTHING CAN HURT YOU MID-SIAM.', desc2: 'SIAM HITS DEAL DOUBLE DAMAGE AND KNOCK HAZED AWAY.' },
  whistle: { name: 'PE WHISTLE', icon: 'i_whistle', pat: 'pe', rar: 'COMMON', max: 2, desc: 'EVERY 6S, BLOW A WHISTLE THAT STUNS HAZED AROUND YOU FOR 1S.', desc2: 'WHISTLE EVERY 4S, BIGGER RADIUS, STUN LASTS 1.5S.' },
  ckw: { name: 'CHAO KENG WARRIOR', icon: 'i_ckw', pat: 'pe', rar: 'RARE', max: 1, weight: 0.35, desc: 'GOT MC. AN MC SHIELD BLOCKS THE FIRST HIT YOU TAKE IN EVERY ROOM.' },
  // Hawker Auntie: food and healing
  rice: { name: 'CHICKEN RICE', icon: 'i_rice', pat: 'auntie', rar: 'RARE', weight: 0.5, desc: 'HEAL ALL YOUR MASKS. SHIOK.', instant: true, hurt: true },
  curry: { name: 'CURRY PUFF', icon: 'i_curry', pat: 'auntie', rar: 'RARE', weight: 0.4, desc: '+1 MAX MASK FOR THIS RUN, FILLED STRAIGHT AWAY.', instant: true },
  tapao: { name: 'TAPAO', icon: 'i_tapao', pat: 'auntie', rar: 'COMMON', max: 2, desc: 'EACH HAZED YOU DISPERSE HAS A 7% CHANCE TO HEAL HALF A MASK.', desc2: 'EACH HAZED HAS A 12% CHANCE TO HEAL HALF A MASK.' },
  chilli: { name: 'CHILLI PADI', icon: 'i_chilli', pat: 'auntie', rar: 'COMMON', max: 2, desc: 'YOUR HITS SET HAZED ON FIRE: 2 DAMAGE A SECOND FOR 3S.', desc2: '3 DAMAGE A SECOND. WHEN A BURNING HAZED FALLS, THE FIRE JUMPS TO ONE NEARBY HAZED.' },
  tehtarik: { name: 'TEH TARIK', icon: 'i_tehtarik', pat: 'auntie', rar: 'COMMON', max: 2, desc: 'WHEN YOU SIAM, A WAVE OF TEH TARIK SPLASHES OUT AND PUSHES HAZED AWAY.', desc2: 'THREE SPLASHES ALONG YOUR SIAM THAT ALSO DEAL 6 DAMAGE.' },
  gravy: { name: 'EXTRA GRAVY', icon: 'i_gravy', pat: 'auntie', rar: 'RARE', max: 1, desc: 'DEFEATED HAZED HAVE AN 8% CHANCE TO DROP A MEAL. UP TO 1 A ROOM.' },
  gassy: { name: 'GASSY', icon: 'i_gassy', pat: 'auntie', rar: 'COMMON', max: 2, desc: 'WHEN A HAZED HITS YOU, FART ON EVERYTHING NEARBY.', desc2: 'BIGGER FARTS THAT REACH FURTHER AND DEAL DOUBLE DAMAGE.' },
  // Sim Lim Uncle: gadgets
  bot: { name: 'PURIFIER BOT', icon: 'i_bot', pat: 'uncle', rar: 'RARE', max: 2, desc: 'A LITTLE ROBOT FOLLOWS YOU AND SHOOTS THE HAZED.', desc2: 'YOUR BOT SHOOTS TWICE AS FAST.' },
  zap: { name: 'SHORT CIRCUIT', icon: 'i_zap', pat: 'uncle', rar: 'COMMON', max: 2, desc: 'YOUR HITS ARC TO UP TO 2 NEARBY HAZED FOR 3 DAMAGE.', desc2: 'ARCS DEAL 5 DAMAGE.' },
  wallhack: { name: 'WALL HACKS', icon: 'i_wallhack', pat: 'uncle', rar: 'RARE', max: 1, desc: 'YOUR SHOTS GO THROUGH UMBRELLAS, TREES AND CRATES. SPECIAL CODE ONE.' },
  overclock: { name: 'OVERCLOCK', icon: 'i_overclock', pat: 'uncle', rar: 'COMMON', max: 2, desc: 'ALL YOUR ATTACKS DEAL 25% MORE DAMAGE.', desc2: 'ALL YOUR ATTACKS DEAL 50% MORE DAMAGE.' },
  headlamp: { name: 'LED HEADLAMP', icon: 'i_headlamp', pat: 'uncle', rar: 'COMMON', max: 2, desc: 'LIGHTS UP THE HAZE AROUND YOU. HAZED IN THE LIGHT TAKE 10% MORE DAMAGE.', desc2: 'A BIGGER LIGHT, AND HAZED IN IT TAKE 20% MORE DAMAGE.' },
  aircon: { name: 'PORTABLE AIRCON', icon: 'i_aircon', pat: 'uncle', rar: 'COMMON', max: 2, desc: 'SHIOK COLD AIR. HAZED CLOSE TO YOU MOVE 10% SLOWER.', desc2: 'HAZED CLOSE TO YOU MOVE 20% SLOWER.' },
  warranty: { name: 'EXTENDED WARRANTY', icon: 'i_warranty', pat: 'uncle', rar: 'RARE', max: 1, weight: 0.4, desc: 'A RANDOM POWER-UP YOU HAVE AT LEVEL I GETS UPGRADED TO LEVEL II.' },
  // Tai Chi Ah Gong: primary attack
  longarm: { name: 'LONG ARM', icon: 'i_longarm', pat: 'gong', rar: 'COMMON', max: 2, desc: 'YOUR SWING AND SUCTION REACH 10% FURTHER.', desc2: 'YOUR SWING AND SUCTION REACH 20% FURTHER.' },
  widesweep: { name: 'WIDE SWEEP', icon: 'i_widesweep', pat: 'gong', rar: 'COMMON', max: 2, desc: 'A WIDER SWING ARC AND SUCTION CONE.', desc2: 'SWING AND SUCTION COVER ALMOST A HALF CIRCLE.' },
  thirdform: { name: 'THIRD FORM', icon: 'i_thirdform', pat: 'gong', rar: 'COMMON', max: 2, desc: 'EVERY 3RD SWING HITS DOUBLE. SUCTION RAMPS TO 1.5X ON ONE TARGET.', desc2: '3RD SWINGS ALSO SEND A SHOCKWAVE. SUCTION RAMPS TO 2X.' },
  pushhands: { name: 'PUSH HANDS', icon: 'i_pushhands', pat: 'gong', rar: 'COMMON', max: 2, desc: 'SWINGS KNOCK HAZED BACK. SUCTION PULLS THEM IN FASTER.', desc2: 'HARDER, WITH A SHORT STUN. SUCTION ALSO SLOWS THEM.' },
  innerpeace: { name: 'INNER PEACE', icon: 'i_innerpeace', pat: 'gong', rar: 'RARE', max: 1, weight: 0.35, desc: 'STAND STILL FOR 1S TO CHARGE YOUR NEXT ATTACK. IT HITS 3X, EVEN IF YOU MOVE.' },
  likewater: { name: 'LIKE WATER', icon: 'i_likewater', pat: 'gong', rar: 'COMMON', max: 2, desc: '10% CHANCE TO SLIP AWAY FROM A HIT COMPLETELY.', desc2: '20% CHANCE TO SLIP AWAY FROM A HIT COMPLETELY.' },
  // Kampung Kid: special attack
  chapteh: { name: 'CHAPTEH REBOUND', icon: 'i_chapteh', pat: 'kid', rar: 'COMMON', max: 1, desc: 'SPECIALS REBOUND ONCE, OFF WALLS OR TO A CLOSE HAZED, FOR HALF DAMAGE.' },
  rubber: { name: 'STRETCHY RUBBER', icon: 'i_rubber', pat: 'kid', rar: 'COMMON', max: 2, desc: 'SPECIALS GO 10% FURTHER AND FASTER.', desc2: 'SPECIALS GO 20% FURTHER AND FASTER.' },
  fivestones: { name: 'FIVE STONES', icon: 'i_fivestones', pat: 'kid', rar: 'COMMON', max: 1, desc: 'WHERE YOUR SPECIAL ENDS, 5 LITTLE STONES SCATTER AND HIT HAZED.' },
  pocket: { name: 'FULL POCKET', icon: 'i_pocket', pat: 'kid', rar: 'COMMON', max: 2, desc: 'SPECIAL AND CHARGE 10% FASTER. THE BEAM LASTS 10% LONGER.', desc2: 'SPECIAL AND CHARGE 20% FASTER. THE BEAM LASTS 20% LONGER.' },
  triple: { name: 'TRIPLE SHOT', icon: 'i_triple', pat: 'kid', rar: 'RARE', max: 1, weight: 0.35, desc: 'YOUR SPECIAL FIRES THREE AT ONCE, EACH AT HALF DAMAGE.' },
  kutikuti: { name: 'KUTI-KUTI', icon: 'i_kutikuti', pat: 'kid', rar: 'RARE', max: 1, weight: 0.35, desc: 'SPECIAL HITS LEAVE A KUTI-KUTI ON HAZED. IT POPS 1.5S LATER FOR 12.' },
};
const PATRONS = {
  pe: { name: 'PE TEACHER', img: 'pe', line: 'WALK FASTER! ONE MORE ROUND!' },
  auntie: { name: 'HAWKER AUNTIE', img: 'auntie', line: 'EAT FIRST, FIGHT LATER!' },
  uncle: { name: 'SIM LIM UNCLE', img: 'uncle', line: 'WAH THIS ONE GOOD STUFF. CONFIRM PLUS CHOP.' },
  gong: { name: 'TAI CHI AH GONG', img: 'gong', line: 'SLOWLY, SLOWLY. THE HAZE ALSO WILL GO.' },
  kid: { name: 'KAMPUNG KID', img: 'kid', line: 'LAST TIME WE SHOOT MANGOES. NOW SHOOT HAZE LAH.', top: 6 },
};
const UPGRADES = [
  { id: 'n95', name: 'N95 MASK', icon: 'u_n95', costs: [25, 60], desc: r => '+' + r + ' MAX MASK' + (r > 1 ? 'S' : '') + ', START WITH ' + (3 + r) },
  { id: 'wind', name: 'EXTRA MASK', icon: 'mask_gold', costs: [40, 100], desc: r => 'GET UP WITH 1 MASK, ' + r + ' TIME' + (r > 1 ? 'S' : '') + ' PER RUN' },
  { id: 'lung', name: 'LUNG TRAINING', icon: 'u_lung', costs: [15, 30, 50], desc: r => 'SIAM RECHARGES ' + r * 15 + '% FASTER' },
  { id: 'grip', name: 'STRONG GRIP', icon: 'u_grip', costs: [10, 20, 35, 55], desc: r => '+' + r * 5 + '% WEAPON DAMAGE' },
  { id: 'opinion', name: 'SECOND OPINION', icon: 'u_opinion', costs: [30, 70], desc: r => 'REROLL POWER-UP CHOICES ' + r + ' TIME' + (r > 1 ? 'S' : '') + ' PER RUN' },
];
const ROOMDEFS = {"prom": {"name": "RIVERSIDE PROMENADE", "w": 560, "h": 200, "bg": "bg_prom", "walk": [[4, 54, 556, 147]], "block": [[93, 70, 98, 74], [247, 70, 252, 74], [401, 70, 406, 74], [517, 70, 522, 74], [47, 142, 52, 146], [297, 142, 302, 146], [467, 142, 472, 146]], "door": {"x": 544, "y": 84, "w": 16, "h": 31, "side": "right"}, "spawn": [20, 104], "reward": [280, 104], "slots": [[120, 96], [160, 128], [205, 84], [250, 120], [300, 92], [345, 126], [392, 98], [440, 124], [480, 88], [520, 128], [140, 70], [330, 70]], "kinds": ["umb", "umb", "tree", "crates"], "count": [5, 7]}, "square": {"name": "SHOPHOUSE SQUARE", "w": 400, "h": 300, "bg": "bg_square", "walk": [[30, 54, 370, 258], [186, 40, 214, 56]], "block": [[57, 62, 62, 66], [337, 62, 342, 66], [57, 246, 62, 250], [337, 246, 342, 250]], "fixed": [{"x": 200, "y": 158, "rx": 20, "ry": 15}], "door": {"x": 184, "y": 26, "w": 32, "h": 22, "side": "top"}, "spawn": [200, 246], "reward": [200, 200], "slots": [[90, 92], [310, 92], [80, 160], [320, 160], [95, 222], [305, 222], [150, 84], [250, 84], [140, 236], [260, 236], [200, 104]], "kinds": ["umb", "umb", "tree", "crates"], "count": [5, 7]}, "bridge": {"name": "THE BRIDGE", "w": 640, "h": 200, "bg": "bg_bridge", "walk": [[4, 36, 96, 172], [96, 74, 544, 137], [544, 36, 636, 172]], "block": [[37, 46, 42, 50], [597, 46, 602, 50], [37, 166, 42, 170], [597, 166, 602, 170]], "door": {"x": 624, "y": 84, "w": 16, "h": 31, "side": "right"}, "spawn": [20, 104], "reward": [320, 104], "slots": [[190, 92], [240, 118], [300, 90], [360, 120], [410, 92], [470, 118], [50, 70], [590, 140], [50, 140], [590, 70]], "kinds": ["crates"], "count": [4, 6]}, "gate": {"name": "HOSPITAL DRIVEWAY", "w": 320, "h": 180, "bg": "bg_gate", "walk": [[4, 58, 316, 150]], "block": [[231, 76, 239, 82], [248, 68, 278, 78], [-1, 64, 16, 73], [91, 64, 108, 73], [288, 145, 297, 151], [147, 84, 152, 88], [193, 84, 198, 88]], "door": {"x": 304, "y": 92, "w": 16, "h": 31, "side": "right"}, "spawn": [50, 66], "reward": [160, 104], "slots": [], "kinds": ["tree"], "count": [0, 0]}, "empress": {"name": "EMPRESS PLACE", "w": 400, "h": 300, "bg": "bg_empress", "walk": [[30, 54, 370, 258], [298, 40, 326, 56]], "block": [[57, 62, 62, 66], [337, 62, 342, 66], [57, 246, 62, 250], [337, 246, 342, 250], [160, 172, 240, 190], [137, 146, 154, 153], [245, 146, 262, 153]], "door": {"x": 296, "y": 26, "w": 32, "h": 22, "side": "top"}, "spawn": [200, 246], "reward": [200, 210], "slots": [[90, 92], [310, 92], [80, 160], [320, 160], [95, 222], [305, 222], [140, 84], [260, 84], [130, 240], [270, 240]], "kinds": ["tree", "tree", "crates"], "count": [3, 5], "overlays": [{"img": "ov_obelisk", "x": 150, "y": 30, "base": 190}, {"img": "ov_shrubs", "x": 120, "y": 120, "base": 153}]}};
const COIN_DROP = { wisp: [1, 2], spitter: [2, 2], brute: [5, 6] };
const SHOP_ITEMS = [
  { k: 'candy', name: 'MILK CANDY', icon: 'it_candy', price: 20, desc: 'HEAL 1 MASK.' },
  { k: 'tikam', name: 'TIKAM', icon: 'it_tikam', price: 50, desc: 'LUCKY DRAW! GET A RANDOM POWER-UP.' },
  { k: 'oil', name: 'MEDICATED OIL', icon: 'it_oil', price: 90, desc: '+1 REVIVE: GET BACK UP ONCE WITH 1 MASK.' },
  { k: 'kacang', name: 'ICE KACANG', icon: 'it_kacang', price: 45, desc: 'HEAL ALL YOUR MASKS.' },
  { k: 'kopi', name: 'KOPI PENG', icon: 'it_kopi', price: 35, desc: 'ATTACK 25% FASTER FOR THE REST OF THE RUN.' },
];
const FIGHT_ROOMS = 6, SHOP_ROOM = 7, BOSS_ROOM = 8, DOOR_Y = 84, WAVES = 3;
window.HazeHeroesConfig = { PSI, ETYPES, BOONS, PATRONS, UPGRADES, FIGHT_ROOMS, SHOP_ROOM, BOSS_ROOM, DOOR_Y, WAVES, ROOMDEFS, COIN_DROP, SHOP_ITEMS };
