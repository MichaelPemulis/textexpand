function triggerCreateMenus() {
    createMenusTimer || (createMenusTimer = setTimeout(createMenus, 2e3))
}

function orderedGroups() {
    let e = Object.keys(groups).filter(e => !groups[e].missing && !groups[e].disabled).map(e => Object.assign({
        id: e,
        order: userGroups[e].order
    }, groups[e]));
    return e.sort((e, t) => e.order - t.order), e
}

function createMenus() {
    createMenusTimer = 0, createBaseMenus().then(() => {
        let e = orderedGroups();
        for (let t of e) menuIds[t.id] = browser.contextMenus.create({
            title: t.name,
            parentId: baseMenuId,
            contexts: ["editable"]
        });
        let t = Object.keys(snippets).map(e => snippets[e]);
        t.sort((e, t) => e.order - t.order);
        for (let e of t) menuIds[e.id] = browser.contextMenus.create({
            title: `${e.name} – ${e.shortcut}`,
            parentId: menuIds[e.group_id],
            contexts: ["editable"],
            onclick: (t, n) => {
                engine.log({
                    category: "Extension",
                    action: "Select snippet from context menu",
                    label: {
                        id: e.id
                    }
                });
                browser.tabs.sendMessage(n.id, {
                    type: "complete",
                    snippetId: e.id
                }, {
                    frameId: t.frameId
                })
            }
        })
    })
}

function createBaseMenus() {
    return new Promise((e, t) => {
        browser.contextMenus.removeAll(() => {
            baseMenuId = browser.contextMenus.create({
                title: "Text Blaze",
                contexts: ["all"]
            });
            browser.contextMenus.create({
                title: "Open Text Blaze",
                contexts: ["all"],
                parentId: baseMenuId,
                onclick: () => {
                    engine.log({
                        category: "Extension",
                        action: "Open Blaze App",
                        label: "context menu"
                    });
                    showApp()
                }
            });
            editListId = browser.contextMenus.create({
                title: "Edit Last Used Snippet...",
                contexts: ["all"],
                parentId: baseMenuId,
                onclick: () => {
                    engine.log({
                        category: "Extension",
                        action: "Edit last snippet"
                    });
                    showApp("/snippet/" + lastExpandedId)
                },
                enabled: !1
            });
            createFromSelectionId = browser.contextMenus.create({
                title: "Create Snippet from Selection...",
                contexts: ["selection"],
                parentId: baseMenuId,
                onclick: e => {
                    engine.log({
                        category: "Extension",
                        action: "Create snippet from selection"
                    });
                    browser.tabs.executeScript({
                        code: "window.getSelection().toString();"
                    }, function(e) {
                        e[0] ? showApp("/create/" + encodeURIComponent(e[0])) : alert("Could not detect selection in page. Sorry.")
                    })
                },
                enabled: !0
            });
            browser.contextMenus.create({
                type: "separator",
                parentId: baseMenuId,
                contexts: ["editable"]
            }, () => e())
        })
    })
}

function logExpanded(e) {
    lastExpandedId = e, editListId && (e ? browser.contextMenus.update(editListId, {
        enabled: !0
    }) : browser.contextMenus.update(editListId, {
        enabled: !1
    }))
}

function removeLinks() {
    for (let e of Object.keys(groups)) unlinkGroup(e);
    shortcuts = {}, snippets = {}, groups = {}, userGroups = {}, logExpanded(void 0)
}

function setUpLinks() {
    settingsSubscription && (settingsSubscription(), settingsSubscription = null), lastUID && uid() !== lastUID && removeLinks(), lastUID = uid(), settingsSubscription = firebase.firestore().collection("users_settings").doc(uid()).onSnapshot(e => {
        if (e.exists) {
            let t = e.data();
            if ((!settings || t.typing_timeout && t.typing_timeout !== settings.typing_timeout) && browser.tabs.query({}, function(e) {
                    for (let n of e) browser.tabs.sendMessage(n.id, {
                        request: "updateTypingTimeout",
                        value: t.typing_timeout
                    })
                }), settings = t, JSON.stringify(userGroups) !== JSON.stringify(t.groups)) {
                userGroups = t.groups;
                for (let e in userGroups) userGroups[e].disabled || e in groups || (groups[e] = linkGroup(e));
                for (let e in groups) e in userGroups && !userGroups[e].disabled || unlinkGroup(e);
                triggerCreateMenus()
            }
        }
    })
}

function linkGroup(e, t) {
    let n = null,
        s = null,
        o = {
            missing: !0,
            unsubscribe: () => {
                n && n();
                s && s()
            }
        };
    return retrySnapshot(firebase.firestore().collection("groups").doc(e), t => {
        if (!t.exists) return void(t.metadata.fromCache || (o.missing = !0, engine.log({
            category: "Extension",
            action: "Deleting non-existent group",
            label: {
                group_id: e
            }
        })));
        s || (s = firebase.firestore().collection("snippets").where("group_id", "==", e).orderBy("order").limit(120).onSnapshot(t => {
            o.children = t.docs.map(e => Object.assign({
                id: e.id
            }, e.data()));
            t.docChanges.forEach(function(t) {
                let n = t.doc.id,
                    s = Object.assign({
                        id: n
                    }, t.doc.data());
                s.delta = s.content.delta.toUint8Array(), "added" === t.type ? (snippets[n] = s, pushShortcut(snippets[n])) : "modified" === t.type ? (snippets[n] ? snippets[n].shortcut !== s.shortcut ? (popShortcut(snippets[n]), pushShortcut(s)) : replaceShortcut(s) : (pushShortcut(s), engine.log({
                    category: "DEBUG",
                    action: "Re-adding snippet in ext",
                    label: {
                        id: n
                    }
                })), snippets[n] = s) : "removed" === t.type && (popShortcut(s), snippets[n].group_id === e && delete snippets[n])
            });
            triggerCreateMenus()
        }, e => {
            s = null
        }));
        o.missing = !1;
        o.name = t.data().name;
        o.options = Object.assign({
            trigger: "word"
        }, t.data().options || {});
        o.id = t.id;
        triggerCreateMenus()
    }, (t, n) => {
        if (!loggedIn()) return !0;
        if (!o.missing) {
            o.missing = !0;
            for (let t in snippets) snippets[t].group_id === e && (popShortcut(snippets[t]), delete snippets[t]);
            triggerCreateMenus()
        }
        if (null !== t && "permission-denied" === t.code && n > 10) {
            let t = firebase.firestore().collection("users_settings").doc(uid());
            return firebase.firestore().runTransaction(n => n.get(t).then(s => {
                let o = s.data().groups;
                o[e] && (o[e].disabled = !0, n.update(t, {
                    groups: o
                }))
            })).then(() => {
                engine.log({
                    category: "Extension",
                    action: "Disabled group",
                    label: {
                        group_id: e
                    }
                })
            }).catch(t => {
                engine.log({
                    category: "Extension",
                    action: "Failed disabling group",
                    label: {
                        group_id: e
                    }
                })
            }), !0
        }
        return !userGroups[e]
    }, e => n = e), o
}

function unlinkGroup(e) {
    if (e in groups) {
        groups[e].unsubscribe();
        for (let t in snippets) snippets[t].group_id === e && (popShortcut(snippets[t]), delete snippets[t]);
        delete groups[e]
    }
    triggerCreateMenus()
}

function pushShortcut(e) {
    let t = e.shortcut.toLocaleLowerCase();
    if (shortcuts[t] || (shortcuts[t] = []), !shortcuts[t].includes(e)) {
        let n = shortcuts[t].map(e => e.id).indexOf(e.id);
        n > -1 && shortcuts[t].splice(n, 1), shortcuts[t].push(e)
    }
}

function popShortcut(e) {
    let t = e.shortcut.toLocaleLowerCase(),
        n = shortcuts[t];
    if (n) {
        let s = n.find(t => t.id === e.id);
        s && n.splice(n.indexOf(s), 1), n.length || delete shortcuts[t]
    }
}

function replaceShortcut(e) {
    let t = shortcuts[e.shortcut.toLocaleLowerCase()];
    if (t) {
        let n = t.find(t => t.id === e.id);
        n && t.splice(t.indexOf(n), 1), t.push(e)
    }
}

function retrySnapshot(e, t, n, s) {
    function o() {
        s(e.onSnapshot({
            includeMetadataChanges: !0
        }, (...e) => {
            e[0].metadata.fromCache || (c = 0, u = i);
            t(...e)
        }, e => {
            c++;
            n(e, c) || (console.error("Snapshot error, retrying in: " + u / 1e3 + " seconds. ", e), setTimeout(() => {
                n(null) || o()
            }, u), u = Math.min(r, 2 * u))
        }))
    }
    const i = 1e3,
        r = 3e5;
    let u = i,
        c = 0;
    o()
}
let settings, groups = {},
    shortcuts = {},
    snippets = {},
    userGroups = {},
    menuIds = {},
    lastExpandedId, createMenusTimer = 0,
    baseMenuId, editListId, createFromSelectionId, lastUID = null;