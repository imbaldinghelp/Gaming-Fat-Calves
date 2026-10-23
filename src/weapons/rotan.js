(() => {
  'use strict';

  window.HazeHeroesWeaponModules = window.HazeHeroesWeaponModules || {};
  window.HazeHeroesWeaponModules.createRotan = runtime => ({
    update: runtime.updateRotan,
    updateSix: runtime.updateSix,
    updateHop: runtime.updateHop,
    strike: runtime.rotStrike,
    line: runtime.rotLine,
    reach: runtime.rotReach
  });
})();
