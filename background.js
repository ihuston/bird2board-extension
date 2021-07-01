"use strict";

chrome.runtime.onMessage.addListener((message, sender, response) => {
  console.log(message);
  console.log(sender);
  response({'message': "goodbye"})
}  );


chrome.runtime.onInstalled.addListener(() => {
  console.log('Bird2Board loaded');

  
});

