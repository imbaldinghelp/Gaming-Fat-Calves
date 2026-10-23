(() => {
  'use strict';

  window.HazeHeroesBoonModules = window.HazeHeroesBoonModules || {};
  window.HazeHeroesBoonModules.create = runtime => ({
    level: runtime.lv,
    canLevel: runtime.canLevel,
    open: runtime.openBoon,
    grant: runtime.grantBoon,
    grantInstant: runtime.grantBoon0,
    pickPatron: runtime.pickPatron,
    text: runtime.boonText,
    draw: runtime.drawBoon,
    procOnHit: runtime.procOnHit,
    spreadFire: runtime.spreadFire,
    addKuti: runtime.addKuti
  });
})();
