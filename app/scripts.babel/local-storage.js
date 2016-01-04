(function(document) {
  'use strict';

  var GET_LOCAL_STORAGE_SCRIPT =
      '(function() {' +
        'var result = {};' +
        'for(var key in localStorage) {' +
          'result[key] = localStorage[key];' +
        '}' +
        'return result;' +
      '})();';

  function displayLocalStorageContent(content, isException) {
    if(!isException) {
      var list = document.createElement('ul');

      Object.keys(content).forEach(function(key) {
        var value = content[key];

        var item = document.createElement('li');
        item.innerText = key + ' => ' + value;

        list.appendChild(item);
      });

      document.body.appendChild(list);
    }
  }

  chrome.devtools.inspectedWindow.eval(GET_LOCAL_STORAGE_SCRIPT, displayLocalStorageContent); // jshint ignore:line

})(window.document);