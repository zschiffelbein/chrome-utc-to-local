chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "convertUTC",
    title: "Convert From UTC: %s",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId !== "convertUTC") return;
  const localTime = new Date(`${info.selectionText} UTC`).toLocaleString();
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: (message) => alert(message),
    args: [localTime],
  });
});
