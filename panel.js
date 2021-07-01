chrome.devtools.network.onRequestFinished.addListener(request => {
    request.getContent((body) => {
      if (request.request && request.request.url) {
        if (request.request.url.includes('https://twitter.com/i/api/graphql/*')) {
          chrome.runtime.sendMessage({
              response: body
          });
        }
      }
    });
  });