chrome.commands.onCommand.addListener(function (command) {
    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        if (tabs[0]) {
            var tab = tabs[0];
            if (tab.url.includes("/web#")) {
                chrome.tabs.update(tab.id, {
                    url: tab.url.replace('/web#', '/web?debug=#')
                });
            } else if (tab.url.includes("/web?debug=#")) {
                chrome.tabs.update(tab.id, {
                    url: tab.url.replace('/web?debug=#', '/web#')
                });
            }
        }
    });
});
