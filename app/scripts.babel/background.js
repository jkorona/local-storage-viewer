var ports = [];

chrome.runtime.onConnect.addListener(function(port) {

  if(port.name !== 'ls') {
    return;
  }

  ports.push(port);

  port.onMessage.addListener(function(msg) {
    chrome.tabs.executeScript(msg.tabId, {
      file: 'scripts/contentscript.js'
    }, function(resp) {
      port.postMessage(resp);
    });
  });

});