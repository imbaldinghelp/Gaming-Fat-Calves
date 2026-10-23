(() => {
  'use strict';

  window.HazeHeroesRoomModules = window.HazeHeroesRoomModules || {};
  window.HazeHeroesRoomModules.create = runtime => ({
    makeRoom: runtime.makeRoom,
    order: runtime.roomOrder,
    startRun: runtime.startRun,
    enterGate: runtime.enterGate,
    nextRoom: runtime.nextRoom,
    spawnPoint: runtime.spawnPoint,
    spawnWave: runtime.spawnWave,
    updateWaves: runtime.updateWaves,
    minorReward: runtime.minorReward,
    placeReward: runtime.placeRoomReward,
    openPrata: runtime.openPrata,
    pairVanish: runtime.pairVanish
  });
})();
