(() => {
  'use strict';

  window.HazeHeroesWeaponModules = window.HazeHeroesWeaponModules || {};
  window.HazeHeroesWeaponModules.createFans = runtime => ({
    update: runtime.updateAttacks,
    hitTargets: runtime.hitTargets,
    inCone: runtime.inCone
  });
})();
