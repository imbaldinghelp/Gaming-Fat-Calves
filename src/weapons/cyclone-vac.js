(() => {
  'use strict';

  window.HazeHeroesWeaponModules = window.HazeHeroesWeaponModules || {};
  window.HazeHeroesWeaponModules.createCycloneVac = runtime => ({
    update: runtime.updateAttacks,
    beamLines: runtime.beamLines,
    updateBeam: runtime.updateBeam,
    drawBeam: runtime.drawBeam,
    inCone: runtime.inCone
  });
})();
