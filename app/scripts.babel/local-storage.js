let displayLocalStorageContent = (content) => {
  let list = document.createElement('ul');
  let keys = Object.keys(content);

  keys.forEach(function(key) {
    let value = content[key];
    let item = document.createElement('li');
    item.innerText = key + ' => ' + value;
    list.appendChild(item);
  });
  document.body.appendChild(list);
};

var port = chrome.runtime.connect({name: 'ls'});
port.onMessage.addListener(function(msg) {
  displayLocalStorageContent(msg);
});

port.postMessage({
  tabId: chrome.devtools.inspectedWindow.tabId
});
