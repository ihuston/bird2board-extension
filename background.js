"use strict";

// Background page -- background.js
chrome.runtime.onConnect.addListener(function(connection) {
  // assign the listener function to a variable so we can remove it later
  let listener = function(message, sender, sendResponse) {
      console.log("Message from ", sender, " received: ", message);
  }
  // add the listener
  connection.onMessage.addListener(listener);

  connection.onDisconnect.addListener(function() {
       connection.onMessage.removeListener(listener);
  });
});

