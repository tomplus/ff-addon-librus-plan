function cleanupPlan() {
    browser.tabs.executeScript({
        file: "cleanup-plan.js",
      });
  }
  
  browser.browserAction.onClicked.addListener(cleanupPlan);
  
  browser.contextMenus.create({
        id: "librus-plan",
        title: "Librus - przygotuj do druku",
    },
    () => void browser.runtime.lastError,
);

browser.contextMenus.onClicked.addListener((info, tab) => {
  switch (info.menuItemId) {
    case "librus-plan":
      cleanupPlan()
      break;
  }
});
