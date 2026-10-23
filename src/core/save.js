(() => {
  'use strict';

  const SAVE_KEY = 'hazeheroes.save.v1';

  function freshSave() {
    return { cleanAir: 0, up: {}, wins: 0, deaths: 0, firstMask: false };
  }

  function load() {
    let save = freshSave();
    try {
      const stored = JSON.parse(localStorage.getItem(SAVE_KEY) || 'null');
      if (stored) save = Object.assign(freshSave(), stored);
    } catch (error) {
      console.warn('Unable to load Haze Heroes save data.', error);
    }
    const hotData = window.claude && window.claude.hot && window.claude.hot.data;
    if (hotData && hotData.save) save = Object.assign(freshSave(), hotData.save);
    return save;
  }

  function persist(save) {
    try {
      localStorage.setItem(SAVE_KEY, JSON.stringify(save));
    } catch (error) {
      console.warn('Unable to persist Haze Heroes save data.', error);
    }
    try {
      if (window.claude && window.claude.hot && window.claude.hot.snapshot) {
        window.claude.hot.snapshot(() => ({ save }));
      }
    } catch (error) {
      console.warn('Unable to snapshot Haze Heroes save data.', error);
    }
  }

  window.HazeHeroesSave = { SAVE_KEY, freshSave, load, persist };
})();
