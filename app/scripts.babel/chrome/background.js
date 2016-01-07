chrome.runtime.onConnect.addListener(function(port) {

  const CONTENT_SCRIPT = 'scripts/contentscript.js';

  if (port.name === 'ls') {

    let getStorageFromTab = (tabId, callbackFn) => chrome.tabs.executeScript(tabId, {
      file: CONTENT_SCRIPT
    }, (resp) => callbackFn(resp[0]));

    let devToolsListener = (msg) => getStorageFromTab(msg.tabId, (storage) => port.postMessage(storage));

    port.onMessage.addListener(devToolsListener);
    port.onDisconnect.addListener(() => port.onMessage.removeListener(devToolsListener));

  }

});