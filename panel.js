"use strict";

let backgroundPageConnection = chrome.runtime.connect({
    name: "devtools-panel"
});

backgroundPageConnection.onMessage.addListener(function (message) {
    // Handle responses from the background page, if any
    console.log("Response received: ", message);
});


chrome.devtools.network.onRequestFinished.addListener(request => {
    console.log("Network traffic...");
    request.getContent((body) => {
      if (request.request && request.request.url) {
        if (request.request.url.includes('https://twitter.com/i/api/graphql/*')) {
            console.log("Found bookmark data.")
          backgroundPageConnection.postMessage({
            type: "bookmark-data",  
            response: body
          });
        }
      }
    });
  });

backgroundPageConnection.postMessage({
    message: "Panel Connecting"
});


function handleRequestFinished(request) {
    console.log("Server IP: ", request.serverIPAddress);
  }
  
chrome.devtools.network.onRequestFinished.addListener(handleRequestFinished);

