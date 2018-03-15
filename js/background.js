function isDev() {
    return !("update_url" in browser.runtime.getManifest())
}

function showApp(e = "") {
    let o;
    o = isDev() ? "http://localhost:3000" + e : "https://dashboard.blaze.today" + e, browser.tabs.create({
        url: o
    })
}
let browser = engine.browser();
firebase.initializeApp({
    apiKey: "AIzaSyA0_OH1h028rsgkdgJIEjVOSe8W9K3ZstQ",
    authDomain: "blaze-today.firebaseapp.com",
    databaseURL: "https://blaze-today.firebaseio.com",
    storageBucket: "blaze-today.appspot.com",
    messagingSenderId: "435466840917",
    projectId: "blaze-today"
}), isDev() || engine.setupErrorLogging(), browser.runtime.onInstalled.addListener(e => {
    "install" === e.reason && showApp()
}), browser.browserAction.onClicked.addListener(() => {
    engine.log({
        category: "Extension",
        action: "Open Blaze App",
        label: "browser action"
    });
    showApp()
}), browser.runtime.setUninstallURL("https://docs.google.com/forms/d/e/1FAIpQLSd_CUZUzTM_7nMQEUhc-vzgAgP9O9SM2HV4wPBEXSMt32Ip_g/viewform?c=0&w=1");