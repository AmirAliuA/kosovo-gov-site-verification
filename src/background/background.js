// Returns the hostname of the active tab when the popup requests it
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.action === "getCurrentHost") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      try {
        const host = new URL(tabs[0].url).hostname;
        sendResponse({ host });
      } catch {
        sendResponse({ host: null });
      }
    });

    return true; // keep the message channel open
  }
});
