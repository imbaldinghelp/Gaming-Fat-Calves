(() => {
  'use strict';

  window.HazeHeroesEntityModules = window.HazeHeroesEntityModules || {};
  window.HazeHeroesEntityModules.createPlayer = runtime => ({
    move: runtime.movePlayer,
    dash: runtime.dashTouch,
    draw: runtime.drawPlayer,
    drawAim: runtime.drawAim,
    drawWeapon: runtime.drawWeapon,
    drawRotanHeld: runtime.drawRotanHeld
  });
})();
