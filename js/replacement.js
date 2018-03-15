function playSnippetSound() {
    try {
        settings && 0 === settings.snippet_volume || (settings && (completeSnd.volume = settings.snippet_volume || .5), completeSnd.play())
    } catch (e) {
        engine.log({
            category: "Error",
            action: "Snippet sound failed"
        })
    }
}

function logReplacement(e, t, n) {
    isDev() || engine.log({
        category: "Extension",
        action: "Trigger replacement",
        label: {
            id: n,
            group_id: snippets[n] && snippets[n].group_id,
            length: t
        },
        value: t
    })
}

function showFormWindow(e, t, n, o, i, r) {
    return formIDCounter++, responseFunctions[formIDCounter] = {
        sendResponse: i,
        configDef: t,
        id: r,
        shortcut: o
    }, formQueue.push({
        delta: e,
        shortcuts: shortcuts,
        configDef: t,
        name: n,
        shortcut: o,
        isPro: isPro,
        formId: formIDCounter
    }), browser.storage.local.get("position", function(e) {
        let t = e.position,
            n = Math.min(t ? t.width : 550, window.screen.width - 40),
            o = Math.min(t ? t.height : 650, window.screen.height - 40);
        browser.windows.create({
            type: "popup",
            url: "../html/form.html",
            width: n,
            height: o,
            left: Math.min(t ? t.left : 50, window.screen.width - n),
            top: Math.min(t ? t.top : 50, window.screen.height - o),
            focused: !0
        })
    })
}

function getHTMLInsertionStats(e) {
    let t = document.getElementById("insertion-html");
    for (; t.firstChild;) t.removeChild(t.firstChild);
    let n = document.createElement("span");
    n.innerHTML = e, traverse(n), t.appendChild(n), t.focus();
    let o = getSelection();
    o.selectAllChildren(t), o.collapseToEnd();
    let i = "",
        r = 0,
        s = n.textContent.length,
        a = -1;
    for (; !i.startsWith(CURSOR);) {
        o.modify("extend", "left", "character"), r += 1;
        let e = (i = o.toString()).length;
        if (e > s || e === a) return {
            count: 0,
            text: ""
        };
        a = e
    }
    return r -= CURSOR.length, {
        count: r,
        text: o.toString().slice(CURSOR.length)
    }
}

function proWarning(e) {
    const t = engine.limitations(isPro).MAX_PRO_SNIPPETS_PER_DAY;
    if (t <= engine.usageCount("pro_snippets", "day")) return engine.log({
        category: "Purchase",
        action: "Pro Trial Completion Blocked"
    }), browser.notifications.create(void 0, {
        type: "basic",
        iconUrl: "/images/icon_128.png",
        title: "Out of Text Blaze Pro Trials Today",
        message: "You used all of your Pro trial snippets for the day. Get Pro for unlimited snippets.",
        buttons: [{
            title: "Get Pro"
        }]
    }, e => getProNotificationsIds.push(e)), !0;
    engine.useFeature("pro_snippets"), engine.log({
        category: "Purchase",
        action: "Pro Trial Completion Warning"
    }), browser.notifications.create(void 0, {
        type: "basic",
        iconUrl: "/images/icon_128.png",
        title: `${t-engine.usageCount("pro_snippets","day")}/${t} Pro Trial Snippets Left Today`,
        message: e + " Get Text Blaze Pro to unlock these features.",
        buttons: [{
            title: "Get Pro"
        }]
    }, e => getProNotificationsIds.push(e))
}
let formQueue = [],
    responseFunctions = {},
    formIDCounter = 0,
    completeSnd = new Audio(browser.extension.getURL("sounds/click.wav")),
    getProNotificationsIds = [];
browser.notifications.onButtonClicked.addListener((e, t) => {
    getProNotificationsIds.includes(e) && (engine.log({
        category: "Extension",
        action: "Open get pro website",
        label: {
            source: "notification"
        }
    }), browser.tabs.create({
        url: "https://dashboard.blaze.today/pro"
    }))
}), browser.runtime.onMessage.addListener(function(e, t, n) {
    switch (e.request) {
        case "getClipboard":
            return n(getClipboard(e.type));
        case "setClipboard":
            return n(setClipboard(e.contents, e.type, e.styles));
        case "insertionStats":
            return n(getHTMLInsertionStats(e.contents));
        case "savePosition":
            return browser.storage.local.set({
                position: e.position
            });
        case "nextForm":
            return n(formQueue.shift());
        case "getBufferTimeout":
            return n(settings && settings.typing_timeout ? settings.typing_timeout : 2500);
        case "pushRemote":
            return REMOTE_COMMANDS[e.info.type](e.info), !1;
        case "formSubmit":
            playSnippetSound();
            let o = responseFunctions[e.config.formId];
            delete responseFunctions[e.config.formId], isDev() || engine.log({
                category: "Extension",
                action: "Form filled"
            }), logReplacement(e.replacement.replacement, e.replacement.length, o.id), o.sendResponse({
                replacement: e.replacement.replacement,
                shortcut: o.shortcut,
                snippetType: e.config.configDef.snippetType
            });
            break;
        case "getReplacement":
            let i;
            if (e.shortcut) {
                let t = e.shortcut.toLocaleLowerCase(),
                    n = !1;
                for (; t && !i;) {
                    let e = shortcuts[t];
                    if (e)
                        for (let t = 0; t < e.length; t++) {
                            let o = groups[e[t].group_id];
                            if (!n || o && "anywhere" === o.options.trigger) {
                                i = e[t];
                                break
                            }
                        }
                    t = t.slice(1), n = !0
                }
            } else i = snippets[e.snippetId];
            if (i) {
                logExpanded(i.id), playSnippetSound();
                let e = !1;
                if (!isPro) {
                    let t = i.id,
                        n = snippets[t].group_id,
                        o = orderedGroups(),
                        r = o.map(e => e.id).indexOf(n);
                    if (r >= engine.limitations(isPro).MAX_GROUPS) {
                        if (proWarning("This snippet's group uses Pro features.")) return;
                        e = !0
                    }
                    if (!e) {
                        let o = groups[n].children.slice();
                        o.sort((e, t) => e.order - t.order);
                        let i = o.map(e => e.id).indexOf(t);
                        if (i >= engine.limitations(isPro).MAX_SNIPPETS_PER_GROUP) {
                            if (proWarning("This snippet's group uses Pro features.")) return;
                            e = !0
                        }
                    }
                }
                let o = engine.decompressDelta(i.delta),
                    r = {
                        url: t.url,
                        snippetType: "text",
                        quickentry: i.options.quick_entry || !1,
                        findSnippet: e => {
                            let t = shortcuts[e.toLocaleLowerCase()];
                            if (t) return t[0]
                        }
                    },
                    s = makeConfig(r),
                    a = engine.createDom(JSON.parse(JSON.stringify(o)), s),
                    p = engine.proUsage(a),
                    c = p.features.STYLED ? "html" : "text";
                if (r = {
                        url: t.url,
                        snippetType: c,
                        quickentry: i.options.quick_entry || !1,
                        findSnippet: e => {
                            let t = shortcuts[e.toLocaleLowerCase()];
                            if (t) return t[0]
                        }
                    }, s = makeConfig(r), p.features.REMOTE && i.created_by !== uid()) return void browser.notifications.create(void 0, {
                    type: "basic",
                    iconUrl: "/images/icon_128.png",
                    title: "Cannot Use Remote Data",
                    message: "You cannot used shared remote data snippets from people outside your org."
                });
                if (p.features.FORM) return showFormWindow(o, r, i.name, i.shortcut, n, i.id), !0; {
                    if (a = engine.createDom(o, s), !isPro && !e && p.proLabels && proWarning("This snippet uses Pro features.")) return;
                    a = engine.fillDom(engine.evaluateDom(a, s), s);
                    let t = makeReplacement(a, r.snippetType),
                        c = t.replacement,
                        u = t.length;
                    return logReplacement(a, u, i.id), n({
                        replacement: c,
                        shortcut: i.shortcut,
                        snippetType: r.snippetType
                    })
                }
            }
            break;
        default:
            throw Error("Unknown request type: " + e.request)
    }
});