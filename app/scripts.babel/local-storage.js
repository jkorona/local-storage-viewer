'use strict';


let displayLocalStorageContent = (content) => {
  document.body.textContent += '\n' + content;
  //try {
  //  let list = document.createElement('ul');
  //  let keys = Object.keys(content);
  //
  //
  //  let log = '';
  //
  //  keys.forEach(function(key) {
  //    let value = content[key];
  //    let item = document.createElement('li');
  //    item.innerText = key + ' => ' + value;
  //
  //    log += key + ' => ' + value + '\n';
  //
  //    list.appendChild(item);
  //  });
  //
  //  alert(list);
  //
  //  panel.appendChild(list);
  //} catch (err) {
  //  alert(err);
  //}
};

var port = chrome.runtime.connect({name: 'ls'});
port.onMessage.addListener(function(msg) {
  displayLocalStorageContent(JSON.stringify(msg));
});

port.postMessage({
  tabId: chrome.devtools.inspectedWindow.tabId
});

//alert('ok');
//
//// Create a connection to the background page
//var backgroundPageConnection = chrome.runtime.connect({
//  name: 'panel'
//});
//
//backgroundPageConnection.postMessage({
//  name: 'init',
//  tabId: chrome.devtools.inspectedWindow.tabId
//});
//
//backgroundPageConnection.onMessage.addListener(function(msg) {
//  /*global alert: true*/
//  alert(msg);
//});