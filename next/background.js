chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ function1: false, function2: false });
});

