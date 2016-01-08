import List from 'scripts/list';

let keysElement = document.body.querySelector('#keys');
let listElement = new List(keysElement);

let displayLocalStorageContent = (content) => {
  listElement
    .setChangeListener(() => {})
    .render(content);
};

var port = chrome.runtime.connect({name: 'ls'});
port.onMessage.addListener((msg) => {
  displayLocalStorageContent(msg);
});

port.postMessage({
  tabId: chrome.devtools.inspectedWindow.tabId
});
