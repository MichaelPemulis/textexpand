function masquerade(e) {
    masqueradeId = e, console.log("Disabling Text Blaze..."), disableTextBlaze(), removeLinks(), setTimeout(() => {
        console.log("Enabling Text Blaze...");
        enableTextBlaze()
    }, 5e3)
}

function anon(){
firebase.auth().signInAnonymously().catch(function(error)
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});



function loggedIn() {
    return !!firebase.auth().currentUser
}

function uid() {
    return masqueradeId || firebase.auth().currentUser.uid
}

function enableTextBlaze() {
    function e() {
        readonlySubscription && (readonlySubscription(), readonlySubscription = null), readonlySubscription = firebase.firestore().collection("users_readonly").doc(uid()).onSnapshot(e => {
            isPro = !!e.exists && e.data().is_pro
        }), setUpLinks()
    }
    engine.setLogUID(uid()), browser.browserAction.setTitle({
        title: "Edit your Text Blaze Snippets"
    }), browser.browserAction.setIcon({
        path: {
            32: browser.runtime.getURL("/images/icon_32.png"),
            48: browser.runtime.getURL("/images/icon_48.png"),
            64: browser.runtime.getURL("/images/icon_64.png"),
            96: browser.runtime.getURL("/images/icon_96.png"),
            128: browser.runtime.getURL("/images/icon_128.png")
        }
    }), firebase.firestore().enablePersistence().then(() => {
        e()
    }).catch(t => {
        engine.log({
            category: "Extension",
            action: "Failed persistence",
            label: t.code
        });
        console.log("Persistance failure:", t);
        e()
    })
}

function disableTextBlaze() {
    engine.setLogUID(null), browser.browserAction.setTitle({
        title: "Log-in to Text Blaze"
    }), readonlySubscription && (readonlySubscription(), readonlySubscription = void 0), settingsSubscription && (settingsSubscription(), settingsSubscription = void 0), isPro = void 0, browser.browserAction.setIcon({
        path: {
            32: browser.runtime.getURL("/images/grey_icon_32.png"),
            48: browser.runtime.getURL("/images/grey_icon_48.png"),
            64: browser.runtime.getURL("/images/grey_icon_64.png"),
            96: browser.runtime.getURL("/images/grey_icon_96.png"),
            128: browser.runtime.getURL("/images/grey_icon_128.png")
        }
    })
}

function signOut() {
    firebase.auth().signOut(), localStorage.removeItem(CREDENTIAL_KEY), removeLinks()
}
const CREDENTIAL_KEY = "firebase:authUser:AIzaSyA0_OH1h028rsgkdgJIEjVOSe8W9K3ZstQ:[DEFAULT]";
let readonlySubscription, settingsSubscription, isPro, masqueradeId = null;
firebase.auth().onAuthStateChanged(function(e) {
    e ? enableTextBlaze() : disableTextBlaze()
}), browser.runtime.onMessageExternal.addListener(function(e, t, i) {
    if ("get_version" !== e.type) {
        if ("get_credentials" === e.type) i({
            provider: "localStorage",
            data: localStorage.getItem(CREDENTIAL_KEY)
        });
        else if ("credentials" === e.type) {
            if (null === e.credentials) signOut();
            else if ("localStorage" === e.credentials.provider && localStorage.getItem(CREDENTIAL_KEY) !== e.credentials.data) {
                let t = null;
                try {
                    t = JSON.parse(localStorage.getItem(CREDENTIAL_KEY)).email
                } catch (e) {}
                let i = null;
                try {
                    i = JSON.parse(e.credentials.data).email
                } catch (e) {}
                localStorage.setItem(CREDENTIAL_KEY, e.credentials.data), i && t && i === t || window.location.reload()
            }
        } else "signout" === e.type ? signOut() : "check" === e.type && i("installed");
        i("received")
    } else i(browser.app.getDetails().version)
});
