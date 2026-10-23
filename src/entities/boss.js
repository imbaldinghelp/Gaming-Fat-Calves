(() => {
  'use strict';

  window.HazeHeroesEntityModules = window.HazeHeroesEntityModules || {};
  window.HazeHeroesEntityModules.createBoss = runtime => ({
    update: runtime.updateBoss,
    damage: runtime.damageBoss,
    damageFlag: runtime.damageFlag,
    draw: runtime.drawBoss,
    drawShadow: runtime.drawBossShadow,
    drawBody: runtime.drawBossBody
  });
})();
