'use strict';

window.addEventListener('load', () => {
  let storage = {};

  for (var key in localStorage) {
    storage[key] = localStorage[key];
  }


  alert('content');

  chrome.runtime.sendMessage(storage);
});

