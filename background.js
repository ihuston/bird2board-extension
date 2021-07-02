"use strict";

// Background page -- background.js
chrome.runtime.onConnect.addListener(function(devToolsConnection) {
  // assign the listener function to a variable so we can remove it later
  let devToolsListener = function(message, sender, sendResponse) {
      console.log("Message received: ", message);
  }
  // add the listener
  devToolsConnection.onMessage.addListener(devToolsListener);

  devToolsConnection.onDisconnect.addListener(function() {
       devToolsConnection.onMessage.removeListener(devToolsListener);
  });
});

