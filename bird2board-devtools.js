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

function handleRequestFinished(request) {
    console.log("Server IP: ", request.serverIPAddress);
  }
  
chrome.devtools.network.onRequestFinished.addListener(handleRequestFinished);

// chrome.devtools.network.onRequestFinished.addListener(request => {
//     console.log("Network traffic devtools")
//     // request.getContent((body) => {
//     //   if (request.request && request.request.url) {
//     //     if (request.request.url.includes('https://twitter.com/i/api/graphql/*')) {
//     //       backgroundPageConnection.postMessage({
//     //         type: "bookmark-data",  
//     //         response: body
//     //       });
//     //     }
//     //   }
//     // });
//   });
