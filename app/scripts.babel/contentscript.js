'use strict';

let storage = {};

for (var key in localStorage) {
  storage[key] = localStorage[key];
}

// alert(JSON.stringify(storage));
