"use strict";

let load = document.getElementById("load");

load.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.runtime.sendMessage({
      tabId: tab.id,
      message: "button clicked",
    });
});
