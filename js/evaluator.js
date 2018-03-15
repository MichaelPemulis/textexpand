function makeConfig(e) {
    return {
        cursor: e.noCursor ? void 0 : () => CURSOR,
        clipboard: () => {
            let t = getClipboard(e.snippetType);
            if ("text" === e.snippetType) return new engine.ParseNode("expand", "text", t);
            if ("html" === e.snippetType) return new engine.ParseNode("expand", "html", t)
        },
        url: () => e.url,
        quickentry: e.quickentry,
        findSnippet: e.findSnippet
    }
}

function getClipboard(e = "text") {
    let t;
    if ((t = document.getElementById("clip-text")).select(), document.execCommand("paste", !0) && "text" === e) return t.value;
    if ("html" === e) {
        for (t = document.getElementById("clip-html"); t.firstChild;) t.removeChild(t.firstChild);
        if (t.focus(), document.execCommand("paste", !0)) return t.innerHTML
    }
    return ""
}

function replaceText(e) {
    let t = e.nodeValue;
    if (t)
        if (1 === t.length) {
            if (" " === t) {
                let t = document.createElement("span");
                t.innerText = " ", e.parentNode.replaceChild(t, e)
            }
        } else " " === t[0] && (t = " " + t.slice(1), e.nodeValue = t), " " === t[t.length - 1] && (e.nodeValue = t.slice(0, t.length - 1) + " ")
}

function traverse(e) {
    let t = e.childNodes;
    for (let e = 0; e < t.length; e++) {
        let n = t.item(e);
        3 === n.nodeType ? replaceText(n) : traverse(n)
    }
}

function setClipboard(e, t = "text", n = {}) {
    for (let e in n) document.body.style[e] = n[e];
    if ("html" === t) {
        let t = document.getElementById("clip-html");
        for (; t.firstChild;) t.removeChild(t.firstChild);
        let n = document.createElement("span");
        n.innerHTML = e, traverse(n), t.appendChild(n), t.focus();
        let i = document.createRange();
        i.selectNode(n), getSelection().removeAllRanges(), getSelection().addRange(i)
    } else {
        let t = document.getElementById("clip-text");
        t.value = e, t.select()
    }
    document.execCommand("copy"), document.body.removeAttribute("style")
}

function makeReplacement(e, t) {
    let n = engine.splitDom(engine.postProcessDom(e)),
        i = 0;
    return n = n.map(e => {
        if ("root" === e.type) {
            let n = void 0;
            "html" === t && (n = engine.compressStream(engine.domToStream(e, "html")).join(""));
            let o = engine.compressStream(engine.domToStream(e, "text")).join("");
            return i += o.length, {
                type: "string",
                htmlStr: n,
                textStr: o
            }
        }
        return e.parent = null, e
    }), {
        replacement: n,
        length: i
    }
}
const CURSOR = "/[[TBCURSOR]]/";