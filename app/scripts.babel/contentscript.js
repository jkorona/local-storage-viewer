(function() {
  'use strict';
  let storage = {};

  for (var key in localStorage) {
    storage[key] = localStorage[key];
  }

  return storage;
})();