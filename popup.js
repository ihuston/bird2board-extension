"use strict";

let load = document.getElementById("load");

// When the button is clicked, inject function into current page
load.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: loadTweets,
    });
});
  
// The body of this function will be executed as a content script inside the
// current page
function loadTweets() {
  // Listen for network events to Twitter Bookmarks API

//    console.log("Started listening.")
}

