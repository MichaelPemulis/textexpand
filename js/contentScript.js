function getBrowser() {
    return window.chrome ? window.chrome : window.browser ? window.browser : void 0
}

function extensionActive() {
    return browser.runtime && browser.runtime.getManifest()
}

function pollDesignMode() {
    if ("on" === document.designMode.toLowerCase()) addListenersOnElement(document.documentElement);
    else {
        if ((designModePollPeriod *= 2) > 3e5) return;
        setTimeout(pollDesignMode, designModePollPeriod)
    }
}

function keyPressHandler(e) {
    if ((!BANNED_SITES.includes(document.location.host) || e.target.classList.contains("allow-blaze")) && keyPressEvent !== e) {
        keyPressEvent = e;
        let t = e.keyCode || e.which;
        if (t === KEYCODE_RETURN) return clearTypingBuffer("return");
        clearTypingTimer(), typingTimer = setTimeout(() => clearTypingBuffer("timeout"), typingTimeout);
        let n = String.fromCharCode(t);
        typingBuffer.push(n), checkShortcuts(typingBuffer.join(""), n, e.target)
    }
}

function keyUpHandler(e) {
    if (keyUpEvent !== e) {
        keyUpEvent = e;
        let t = e.keyCode || e.which;
        return t === KEYCODE_BACKSPACE && (clearTypingTimer(), typingTimer = setTimeout(clearTypingBuffer, typingTimeout), typingBuffer.pop()), t === KEYCODE_TAB || t === KEYCODE_RETURN ? clearTypingBuffer("tab/return") : void 0
    }
}

function updateBufferTimeout() {
    extensionActive() && browser.runtime.sendMessage({
        request: "getBufferTimeout"
    }, function(e) {
        setTypingTimeout(e)
    })
}

function clearTypingTimer() {
    typingTimer && (clearTimeout(typingTimer), typingTimer = null)
}

function clearTypingBuffer(e) {
    clearTypingTimer(), typingBuffer.length = 0
}

function checkShortcuts(e, t, n) {
    extensionActive() && browser.runtime.sendMessage({
        request: "getReplacement",
        shortcut: e
    }, function(e) {
        e && e.replacement && insertReplacement(e.shortcut, e.replacement, t, n, e.snippetType)
    }), WHITESPACE_REGEX.test(t) && clearTypingBuffer("whitespace")
}

function insertReplacement(e, t, n, o, i) {
    function r() {
        setTimeout(() => {
            o = document.activeElement;
            a()
        }, 50)
    }

    function a() {
        let a = !1;
        if (t.length) {
            let c = t.shift();
            if ("string" === c.type) {
                a = !0;
                let t, d;
                document.activeElement && ["input", "textarea"].includes(document.activeElement.nodeName.toLowerCase()) || "text" === i || void 0 === c.htmlStr ? (t = c.textStr, d = "text") : (t = c.htmlStr, d = "html"), insertSnippet(e, t, n, o, d).then(() => {
                    let t = document.activeElement || document;
                    let o = document.createEvent("HTMLEvents");
                    o.initEvent("input", !0, !1);
                    t.dispatchEvent(o);
                    e = "";
                    n = "";
                    r()
                })
            } else if ("key" === c.tag) {
                if (o && ["input", "select", "textarea"].includes(o.nodeName.toLowerCase()) && c.info.keyCode === KEYCODE_RETURN) {
                    let e = document.createEvent("HTMLEvents");
                    e.initEvent("change", !0, !1), (document.activeElement || document).dispatchEvent(e)
                }
                sendKey(c.info)
            } else "click" === c.tag ? o.click() : "wait" === c.tag ? (a = !0, setTimeout(r, 1e3 * c.info.delay)) : "remote" === c.tag ? browser.runtime.sendMessage({
                request: "pushRemote",
                info: c.info
            }) : console.log("Unknown action type: ", c.type, c.tag);
            a || r()
        } else clearTypingBuffer("submit finished")
    }
    a()
}

function insertSnippet(e, t, n, o, i) {
    return new Promise((r, a) => {
        t && o ? ("text" === i ? (t = t.replace(new RegExp(String.fromCharCode(160), "g"), " "), WHITESPACE_REGEX.test(n) && (t += n)) : " " === n ? t += "&nbsp;" : "\t" === n && (t += "&#9;"), ("TEXTAREA" === o.nodeName || "INPUT" === o.nodeName) && o.value.toLocaleLowerCase().includes(e.toLocaleLowerCase()) ? replaceTextRegular(e, t, o).then(r) : replaceTextContentEditable(e, t, i).then(r), clearTypingBuffer("fires shortcut")) : r()
    })
}

function replaceTextRegular(e, t, n) {
    let o = getCursorPosition(n);
    if (!o && "INPUT" === n.nodeName) {
        let t = n.getAttribute("type");
        t && ("EMAIL" !== (t = t.toUpperCase()) && "NUMBER" !== t || (-1 === (o = n.value.toLocaleLowerCase().lastIndexOf(e.toLocaleLowerCase())) ? o = n.value.length : o += e.length))
    }
    let i = 0,
        r = t.lastIndexOf(CURSOR);
    if (r > -1)
        for (i = t.length - r - CURSOR.length; t.includes(CURSOR);) t = t.replace(CURSOR, "");
    return n.value = replaceText(n.value, e, t, o), setCursorPosition(n, o - e.length + t.length - i), Promise.resolve()
}

function _TBRemapExecCommand() {
    let e = document.execCommand.bind(document);
    document.execCommand = function() {
        return "1" === document.body.dataset.__TB_execCommand ? (setTimeout(() => e(...arguments), 0), !0) : e(...arguments)
    }
}

function __TBSendKey(e, t) {
    function n(t) {
        let n = document.activeElement || document,
            o = new KeyboardEvent(t, {
                keyCode: e.keyCode,
                bubbles: !0,
                cancelable: !0,
                shiftKey: e.shift,
                ctrlKey: e.ctrl,
                altKey: e.alt,
                metaKey: e.cmd
            });
        delete o.keyCode, Object.defineProperty(o, "keyCode", {
            value: e.keyCode
        }), delete o.which, Object.defineProperty(o, "which", {
            value: e.keyCode
        });
        let i = {
                8: "+Backspace",
                9: "+Tab",
                13: "+Enter",
                16: "+Shift",
                17: "+Control",
                18: "+Alt",
                19: "+Pause",
                20: "+CapsLock",
                27: "+Escape",
                32: "Space",
                33: "+PageUp",
                34: "+PageDown",
                35: "+End",
                36: "+Home",
                37: "+ArrowLeft",
                38: "+ArrowUp",
                39: "+ArrowRight",
                40: "+ArrowDown",
                45: "+Insert",
                46: "+Delete",
                "-0": "Digit0",
                "-1": "Digit1",
                "-2": "Digit2",
                "-3": "Digit3",
                "-4": "Digit4",
                "-5": "Digit5",
                "-6": "Digit6",
                "-7": "Digit7",
                "-8": "Digit8",
                "-9": "Digit9",
                "-a": "KeyA",
                "-b": "KeyB",
                "-c": "KeyC",
                "-d": "KeyD",
                "-e": "KeyE",
                "-f": "KeyF",
                "-g": "KeyG",
                "-h": "KeyH",
                "-i": "KeyI",
                "-j": "KeyJ",
                "-k": "KeyK",
                "-l": "KeyL",
                "-m": "KeyM",
                "-n": "KeyN",
                "-o": "KeyO",
                "-p": "KeyP",
                "-q": "KeyQ",
                "-r": "KeyR",
                "-s": "KeyS",
                "-t": "KeyT",
                "-u": "KeyU",
                "-v": "KeyV",
                "-w": "KeyW",
                "-x": "KeyX",
                "-y": "KeyY",
                "-z": "KeyZ",
                91: "+MetaLeft",
                93: "+MetaRight",
                112: "+F1",
                113: "+F2",
                114: "+F3",
                115: "+F4",
                116: "+F5",
                117: "+F6",
                118: "+F7",
                119: "+F8",
                120: "+F9",
                121: "+F10",
                122: "+F11",
                123: "+F12",
                144: "+NumLock",
                145: "+ScrollLock",
                182: "+LaunchApplication1",
                183: "+LaunchApplication2",
                "-;": "Semicolon",
                "-=": "Equal",
                "-,": "Comma",
                "--": "Minus",
                "-.": "Period",
                "-/": "Slash",
                "-`": "Backquote",
                "-[": "BracketLeft",
                "-//": "Backslash",
                "-]": "BracketRight",
                "-'": "Quote"
            },
            r = i[e.keyCode] || i["-" + e.key.toLowerCase()];
        if (r) {
            let t = "+" === r[0],
                n = t ? r.slice(1) : r;
            delete o.code, Object.defineProperty(o, "code", {
                value: n
            }), delete o.key, Object.defineProperty(o, "key", {
                value: t ? n : e.key
            })
        }
        return n.dispatchEvent(o), o.defaultPrevented
    }
    let o;
    n("keydown") && (o = "keydown"), o || n("keypress") && (o = "keypress"), n("keyup"), o && (document.body.dataset[t] = o)
}

function isContentEditable(e) {
    return "string" == typeof e && ["", "true", "plaintext-only"].includes(e.toLowerCase())
}

function sendKey(e) {
    let t = "TBDefaultPrevented" + eventPrefix + "id" + ++eventCounter,
        n = document.createElement("script");
    if (n.textContent = `__TBSendKey(${JSON.stringify(e)}, "${t}");`, (document.head || document.documentElement).appendChild(n), n.remove(), e.keyCode === KEYCODE_TAB && "keydown" !== document.body.dataset[t]) e.shift ? tabPrev() : tabNext(), document.activeElement && "input" === document.activeElement.nodeName.toLowerCase() && document.activeElement.select();
    else if (8 === e.keyCode && "keydown" !== document.body.dataset[t]) {
        let e = document.activeElement;
        e && document.execCommand("delete", !1)
    } else if (37 === e.keyCode && "keydown" !== document.body.dataset[t]) window.getSelection().modify("move", "left", "character");
    else if (39 === e.keyCode && "keydown" !== document.body.dataset[t]) window.getSelection().modify("move", "right", "character");
    else if (e.keyCode === KEYCODE_RETURN && "keydown" !== document.body.dataset[t]) {
        let e = document.activeElement;
        if (e)
            if ("input" === e.nodeName.toLowerCase()) {
                if ("keypress" !== document.body.dataset[t]) {
                    let e = document.activeElement.closest("form");
                    if (e) {
                        let t = e.querySelectorAll("input"),
                            n = e.querySelectorAll("input[type=submit],button");
                        (n.length || 1 === t.length) && (n.length && n[0].click(), sendSubmitEvent())
                    }
                }
            } else {
                let t = e.getAttribute("contenteditable");
                isContentEditable(t) ? document.execCommand("insertParagraph", !1) : replaceTextRegular("", "\n", e)
            }
    }
    return document.body.dataset[t]
}

function __TBSendSubmit() {
    let e = document.createEvent("Events");
    e.initEvent("submit", !0, !0), document.activeElement && document.activeElement.form && document.activeElement.form.dispatchEvent(e) && (e.defaultPrevented || document.activeElement.form.submit())
}

function sendSubmitEvent() {
    let e = document.createElement("script");
    e.textContent = `${__TBSendSubmit.toString()}; __TBSendSubmit();`, (document.head || document.documentElement).appendChild(e), e.remove()
}

function sendBackspace(e = 1) {
    if (e)
        for (let t = 0; t < e; t++) sendKey({
            keyCode: 8
        })
}

function replaceTextContentEditable(e, t, n) {
    return new Promise((o, i) => {
        let r = window.getSelection().anchorNode;
        for (; 1 !== r.nodeType && r.parentElement;) r = r.parentElement;
        let a = {};
        if (1 === r.nodeType) {
            let e = window.getComputedStyle(r);
            for (let t of ["font"]) e[t] && (a[t] = e[t])
        }
        sendBackspace(e.length);
        let c;
        let d = 0;
        if (t.includes(CURSOR))
            for (c = t, d = t.length - t.lastIndexOf(CURSOR) - CURSOR.length; t.includes(CURSOR);) t = t.replace(CURSOR, "");
        if ("html" === n) {
            let e = document.createElement("span");
            if (e.style.opacity = 0, e.innerHTML = t, !e.innerText) return o()
        } else if ("text" === n && "" === t) return o();
        browser.runtime.sendMessage({
            request: "getClipboard",
            type: "html"
        }, function(e) {
            let i = t => browser.runtime.sendMessage({
                request: "setClipboard",
                contents: e,
                type: "html"
            }, function() {
                t ? setTimeout(o, t) : o()
            });
            browser.runtime.sendMessage({
                request: "setClipboard",
                contents: t,
                type: n,
                styles: a
            }, function() {
                function e(e) {
                    setTimeout(() => {
                        let t = window.getSelection();
                        let n = "initialized";
                        for (let o = 0; o < e; o++) {
                            let e = t.anchorNode,
                                o = t.anchorOffset;
                            n && (n = sendKey({
                                keyCode: 37
                            })), t.anchorNode === e && t.anchorOffset === o && t.modify("move", "left", "character")
                        }
                        i()
                    }, 30)
                }
                let t = navigator.appVersion.includes("Mac");
                "keydown" !== sendKey({
                    keyCode: 86,
                    key: "v",
                    cmd: t,
                    ctrl: !t
                }) && (document.body.dataset.__TB_execCommand = "1", document.execCommand("paste"), delete document.body.dataset.__TB_execCommand, c ? "text" === n ? e(d) : browser.runtime.sendMessage({
                    request: "insertionStats",
                    contents: c
                }, function(t) {
                    t ? e(t.count) : i(30)
                }) : i(30))
            })
        })
    })
}

function replaceText(e, t, n, o) {
    return [e.slice(0, o - t.length), n, e.slice(o)].join("")
}

function getCursorPosition(e) {
    let t = 0;
    if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) try {
        t = e.selectionStart
    } catch (e) {
        console.log("getCursorPosition:", e)
    } else {
        let e = window.getSelection();
        e.rangeCount && (t = e.getRangeAt(0).endOffset)
    }
    return t
}

function setCursorPosition(e, t) {
    let n, o;
    if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) try {
        let n = e.getAttribute("type");
        n && (n = n.toUpperCase()), e.setSelectionRange && !["EMAIL", "NUMBER"].includes(n) ? e.setSelectionRange(t, t) : e.createTextRange && ((o = e.createTextRange()).collapse(!0), o.moveEnd("character", t), o.moveStart("character", t), o.select())
    } catch (e) {
        console.log("setCursorPosition", e)
    } else {
        let i = e.childNodes[0];
        window.getSelection && document.createRange ? ((o = document.createRange()).selectNodeContents(e), o.collapse(!0), o.setEnd(i, t), o.setStart(i, t), (n = window.getSelection()).removeAllRanges(), n.addRange(o)) : document.body.createTextRange && ((o = document.body.createTextRange()).moveToElementText(e), o.collapse(!0), o.setEnd(i, t), o.setStart(i, t), o.select())
    }
}

function addListenersOnElement(e) {
    e.forEach ? e.forEach(e => addListenersOnElement(e)) : (e.addEventListener("keypress", keyPressHandler), e.addEventListener("keyup", keyUpHandler), e.addEventListener("blur", clearTypingBuffer), e.addEventListener("click", clearTypingBuffer))
}

function addListeners() {
    observer.observe(document, observerConfig), addListenersOnElement(document.querySelectorAll(SELECTOR_INPUT))
}

function onReady(e) {
    (document.attachEvent ? "complete" === document.readyState : "loading" !== document.readyState) ? e(): document.addEventListener("DOMContentLoaded", e)
}

function setTypingTimeout(e) {
    typingTimeout = Math.max(e || DEFAULT_TYPING_TIMEOUT, 800)
}

function tabPrev() {
    let e = tabbable(document.body);
    if (e.length) {
        let t = e.indexOf(document.activeElement);
        --t < 0 && (t = e.length - 1), e[t].focus()
    }
}

function tabNext() {
    let e = tabbable(document.body);
    if (e.length) {
        let t = e.indexOf(document.activeElement);
        ++t >= e.length && (t = 0), e[t].focus()
    }
}

function tabbable(e, t) {
    t = t || {};
    let n = [],
        o = [],
        i = createIsUnavailable(e.ownerDocument),
        r = ["input", "select", "a[href]", "textarea", "button", "[tabindex]", '[contenteditable]:not([contenteditable="false"])'],
        a = e.querySelectorAll(r);
    if (t.includeContainer) {
        let t = Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
        r.some(function(n) {
            return t.call(e, n)
        }) && (a = Array.prototype.slice.apply(a)).unshift(e)
    }
    let c, d;
    for (let e = 0, t = a.length; e < t; e++) c = a[e], -1 === (d = parseInt(c.getAttribute("tabindex"), 10) || c.tabIndex) && c.getAttribute("contenteditable") && (d = 0), d < 0 || "INPUT" === c.tagName && "hidden" === c.type || c.disabled || i(c) || (0 === d ? n.push(c) : o.push({
        index: e,
        tabIndex: d,
        node: c
    }));
    let s = o.sort(function(e, t) {
        return e.tabIndex === t.tabIndex ? e.index - t.index : e.tabIndex - t.tabIndex
    }).map(function(e) {
        return e.node
    });
    return Array.prototype.push.apply(s, n), s
}

function createIsUnavailable(e) {
    function t(o, i) {
        if (o === e.documentElement) return !1;
        for (let e = 0, t = n.length; e < t; e++)
            if (n[e][0] === o) return n[e][1];
        let r = !1;
        return "none" === (i = i || e.defaultView.getComputedStyle(o)).display ? r = !0 : o.parentNode && (r = t(o.parentNode)), n.push([o, r]), r
    }
    let n = [];
    return function(n) {
        if (n === e.documentElement) return !1;
        let o = e.defaultView.getComputedStyle(n);
        return !!t(n, o) || "hidden" === o.visibility
    }
}
const browser = getBrowser(),
    DEFAULT_TYPING_TIMEOUT = 2e3,
    CURSOR = "/[[TBCURSOR]]/",
    KEYCODE_BACKSPACE = 8,
    KEYCODE_TAB = 9,
    KEYCODE_RETURN = 13,
    WHITESPACE_REGEX = /(\s)/,
    SELECTOR_INPUT = '*[contenteditable=true],[contenteditable=""],[contenteditable=plaintext-only],textarea,input';
let typingBuffer = [],
    typingTimer, typingTimeout = DEFAULT_TYPING_TIMEOUT,
    keyPressEvent, keyUpEvent;
const BANNED_SITES = ["localhost:3000", "dashboard.blaze.today"];
let designModePollPeriod = 200;
setTimeout(pollDesignMode, designModePollPeriod);
let observer = new MutationObserver(function(e) {
        for (let t = 0; t < e.length; t++) {
            let n = e[t];
            if ("childList" === n.type && n.addedNodes.length)
                for (let e = 0; e < n.addedNodes.length; e++) {
                    let t = n.addedNodes[e];
                    1 === t.nodeType && addListenersOnElement(t.matches(SELECTOR_INPUT) ? t : t.querySelectorAll(SELECTOR_INPUT))
                } else "attributes" === n.type && "contenteditable" === n.attributeName.toLowerCase() && addListenersOnElement(n.target)
        }
    }),
    observerConfig = {
        attributes: !0,
        childList: !0,
        subtree: !0,
        attributeFilter: ["contenteditable"]
    };
browser.runtime.onMessage.addListener(function(e, t, n) {
    if ("complete" === e.type) {
        let t = document.activeElement;
        browser.runtime.sendMessage({
            request: "getReplacement",
            snippetId: e.snippetId
        }, function(e) {
            e && e.replacement && insertReplacement("", e.replacement, "", t, e.snippetType)
        })
    }
});
let script = document.createElement("script");
script.textContent = `${_TBRemapExecCommand.toString()}; _TBRemapExecCommand(); ${__TBSendKey.toString()}; `, (document.head || document.documentElement).appendChild(script), script.remove();
let eventPrefix = Math.round(1e9 * Math.random()),
    eventCounter = 0;
onReady(function() {
    updateBufferTimeout(), addListeners()
}), setTypingTimeout(DEFAULT_TYPING_TIMEOUT), browser.runtime.onMessage.addListener(function(e, t, n) {
    switch (e.request) {
        case "updateTypingTimeout":
            e.value && setTypingTimeout(e.value);
            break;
        case "ping":
            n(!0)
    }
});