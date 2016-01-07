import list from 'scripts/list';
import _ from 'lodash';

/* global alert: true */
alert(_.capitalize(list));

let displayLocalStorageContent = (content) => {
  let keysElement = document.body.querySelector('#keys');
  let keys = Object.keys(content);

  keys.forEach(function(key) {
    let itemElement = document.createElement('li');
    let linkElement = document.createElement('a');
    linkElement.innerText = key;

    itemElement.appendChild(linkElement);
    keysElement.appendChild(itemElement);
  });

};

var port = chrome.runtime.connect({name: 'ls'});
port.onMessage.addListener(function(msg) {
  displayLocalStorageContent(msg);
});

port.postMessage({
  tabId: chrome.devtools.inspectedWindow.tabId
});
