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
    message: "Devtools Starting up"
});