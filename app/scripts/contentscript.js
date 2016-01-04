'use strict';

var storage = {};

for (var key in localStorage) {
  storage[key] = localStorage[key];
}

alert(JSON.stringify(storage));
//# sourceMappingURL=contentscript.js.map
