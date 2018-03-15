function installExtension() {
    browser.tabs.query({}, t => {
        t.forEach(t => {
            !t.url || t.url.trim().toLowerCase().startsWith("chrome://") || t.url.trim().toLowerCase().startsWith("data:") || browser.tabs.sendMessage(t.id, {
                request: "ping"
            }, function(s) {
                s || browser.tabs.executeScript(t.id, {
                    file: "js/contentScript.js",
                    allFrames: !0,
                    matchAboutBlank: !0
                })
            })
        })
    })
}
installExtension();