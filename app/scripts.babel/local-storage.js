(function() {
  'use strict';
  /*global alert: true*/

  let panel = document.body;

  let displayLocalStorageContent = (content, panel) => {

    try {
      let list = document.createElement('ul');
      let keys = Object.keys(content);


      let log = '';

      keys.forEach(function(key) {
        let value = content[key];
        let item = document.createElement('li');
        item.innerText = key + ' => ' + value;

        log += key + ' => ' + value + '\n';

        list.appendChild(item);
      });

      alert(list);

      panel.appendChild(list);
    } catch (err) {
      alert(err);
    }
  };

  try {

    let h1 = document.createElement('h1');
    h1.innerText = 'dupa';
    document.body.appendChild(h1);

  } catch (err) {
    alert(err);
  }

  chrome.runtime.onMessage.addListener((request) => displayLocalStorageContent(request, panel));


})();