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


chrome.devtools.network.onRequestFinished.addListener(
function(request) {
    if (request.response.bodySize > 40*102) {
    chrome.devtools.inspectedWindow.eval(
        'console.log("Large image: " + unescape("' +
        escape(request.request.url) + '"))');
    }
}
);