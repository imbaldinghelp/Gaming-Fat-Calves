(() => {
  'use strict';

  window.HazeHeroesEntityModules = window.HazeHeroesEntityModules || {};
  window.HazeHeroesEntityModules.createProjectiles = runtime => ({
    update: runtime.updateShots,
    draw: runtime.drawShots,
    updateKuti: runtime.updateKuti,
    drawKuti: runtime.drawKuti
  });
})();
