(() => {
  'use strict';

  window.HazeHeroesUIModules = window.HazeHeroesUIModules || {};
  window.HazeHeroesUIModules.create = runtime => ({
    dialog: {
      say: runtime.say,
      close: runtime.closeDialog,
      update: runtime.updateDialog,
      draw: runtime.drawDialog
    },
    hub: {
      draw: runtime.drawHub,
      drawPlants: runtime.drawHubPlants,
      drawInBed: runtime.drawInBed
    },
    shop: {
      drawLayer: runtime.drawShopLayer,
      draw: runtime.drawShopUI
    },
    menus: {
      draw: runtime.drawMenu,
      openBoard: runtime.openBoard,
      enterPharm: runtime.enterPharm,
      openMirror: runtime.openMirror,
      openBook: runtime.openBook,
      records: runtime.records
    },
    boon: {
      draw: runtime.drawBoon
    },
    hud: {
      draw: runtime.drawHUD
    }
  });
})();
