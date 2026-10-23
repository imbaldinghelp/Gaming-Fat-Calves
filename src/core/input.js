(() => {
  'use strict';

  window.HazeHeroesCoreModules = window.HazeHeroesCoreModules || {};
  window.HazeHeroesCoreModules.createInput = runtime => ({
    onKey: runtime.onKey,
    toGame: runtime.toGame,
    enableTouch: runtime.enableTouch,
    togglePause: runtime.togglePause,
    stickMove: runtime.stickMove,
    stickEnd: runtime.stickEnd,
    press: runtime.press
  });
})();
