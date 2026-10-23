(() => {
  'use strict';

  window.HazeHeroesEntityModules = window.HazeHeroesEntityModules || {};
  window.HazeHeroesEntityModules.createEnemies = runtime => ({
    add: runtime.addEnemy,
    update: runtime.updateEnemies,
    damage: runtime.damage,
    disperse: runtime.disperse,
    draw: runtime.drawEnemy
  });
})();
