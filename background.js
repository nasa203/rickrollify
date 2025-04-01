chrome.webNavigation.onCompleted.addListener(function(details) {
   chrome.tabs.executeScript(details.tabId, {file: "content.js"});
}, {url: [{urlMatches: '<all_urls>'}]});
