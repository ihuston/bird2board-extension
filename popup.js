"use strict";

let load = document.getElementById("load");


let backgroundPageConnection = chrome.runtime.connect({
  name: "devtools-page"
});

backgroundPageConnection.onMessage.addListener(function (message) {
  // Handle responses from the background page, if any
  console.log("Response received: ", message);
});


load.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    backgroundPageConnection.postMessage({
      tabId: tab.id,
      message: "load button clicked",
    });
});
