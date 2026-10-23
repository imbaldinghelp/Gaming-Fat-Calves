(() => {
  'use strict';

  const runtime = window.HazeHeroesMainRuntime;
  if (!runtime || typeof runtime.boot !== 'function') {
    throw new Error('Haze Heroes main runtime is unavailable.');
  }
  runtime.boot();
})();
