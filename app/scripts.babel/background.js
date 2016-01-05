'use strict';

var connections = {};

// Receive message from content script and relay to the devTools page for the
// current tab
chrome.runtime.onMessage.addListener(function(request, sender) {
  alert('incoming message from injected script');


  // Messages from content scripts should have sender.tab set
  if (sender.tab) {
    var tabId = sender.tab.id;
    if (tabId in connections) {
      alert('message been sent');

      connections[tabId].postMessage(request);
    } else {
      console.log('Tab not found in connection list.');
    }
  } else {
    console.log('sender.tab not defined.');
  }
  return true;
});

chrome.runtime.onConnect.addListener(function(port) {

  alert('port');

  // Listen to messages sent from the DevTools page
  port.onMessage.addListener(function(request) {
    alert(JSON.stringify(request));

    // Register initial connection
    if (request.name === 'init') {
      connections[request.tabId] = port;

      port.onDisconnect.addListener(function() {
        delete connections[request.tabId];
      });
    }
  });

});