function convertUTC(info, tab) {
  alert(new Date(`${info.selectionText} UTC`).toLocaleString());
}
chrome.contextMenus.create({
  title: "Convert From UTC: %s",
  contexts: ["selection"],
  onclick: convertUTC,
});
