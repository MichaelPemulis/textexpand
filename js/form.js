function finishForm(e) {
    let n = Object.assign({
            data: e
        }, makeConfig(Object.assign({}, snippetConfig.configDef))),
        t = engine.fillDom(evaluateDom(formConfig.dom, n), n),
        o = makeReplacement(t, snippetConfig.configDef.snippetType);
    o.replacement.forEach(e => stripDom(e)), browser.runtime.sendMessage({
        request: "formSubmit",
        replacement: o,
        config: snippetConfig
    }), window.close()
}

function stripDom(e) {
    e.parent && (e.parent = null), e.info && e.info.attributes && (e.info.attributes = void 0), e.children && e.children.map(stripDom)
}

function getStats() {
    return {
        left: window.screenLeft,
        top: window.screenTop,
        width: window.innerWidth,
        height: window.innerHeight
    }
}
let snippetConfig, formConfig, browser = engine.browser();
browser.runtime.sendMessage({
    request: "nextForm"
}, function(e) {
    snippetConfig = e, document.title = e.shortcut + " – " + e.name, e.configDef.findSnippet = (n => {
        let t = e.shortcuts[n.toLocaleLowerCase()];
        if (t) return {
            delta: new Uint8Array(Object.values(t[0].delta))
        }
    }), (formConfig = Object.assign({
        config: makeConfig(Object.assign({}, e.configDef, {
            noCursor: !0
        })),
        finalConfig: makeConfig(e.configDef),
        onReject: () => window.close(),
        onAccept: finishForm
    }, snippetConfig)).dom = evaluateDom(engine.createDom(e.delta, formConfig.config), formConfig.config), formConfig.targetId = "root", e.delta = void 0, renderForm(formConfig);
    let n = document.querySelector("input, select, textarea");
    n && (n.focus(), n.select())
});
let lastPosition = getStats();
setInterval(() => {
    let e = getStats();
    lastPosition.left === e.left && lastPosition.top === e.top && lastPosition.width === e.width && lastPosition.height === e.height || (lastPosition = e, browser.runtime.sendMessage({
        request: "savePosition",
        position: e
    }))
}, 500);