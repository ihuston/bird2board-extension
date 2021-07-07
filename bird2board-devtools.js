"use strict";

chrome.devtools.panels.create("Bird2Board", null, 'panel.html');

let backgroundPageConnection = chrome.runtime.connect({
    name: "devtools-page"
});

backgroundPageConnection.onMessage.addListener(function (message) {
    // Handle responses from the background page, if any
    console.log("Response received: ", message);
});


backgroundPageConnection.postMessage({
    message: "Devtools Connecting"
});

chrome.devtools.network.onRequestFinished.addListener(request => {
    request.getContent((body) => {
      if (request.request && request.request.url) {
        if (request.request.url.includes('https://twitter.com/i/api/graphql/*')) {
          backgroundPageConnection.postMessage({
            type: "bookmark-data",  
            response: body
          });
        }
      }
    });
  });
