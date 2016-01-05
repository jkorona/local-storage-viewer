'use strict';

window.addEventListener('load', () => {
  let storage = {};

  for (var key in localStorage) {
    storage[key] = localStorage[key];
  }

  chrome.runtime.sendMessage(storage);
});

