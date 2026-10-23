(() => {
  'use strict';

  window.HazeHeroesCoreModules = window.HazeHeroesCoreModules || {};
  window.HazeHeroesCoreModules.createLoop = runtime => ({
    frame: runtime.frame,
    frameInner: runtime.frameInner,
    boot: runtime.boot
  });
})();
