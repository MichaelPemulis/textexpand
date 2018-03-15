/*!
 * @license Firebase v4.8.1
 * Build: rev-d8c20f0
 * Terms: https://firebase.google.com/terms/
 */
try {
    webpackJsonpFirebase([1], {
        113: function(t, e, n) {
            n(114)
        },
        114: function(t, e, n) {
            "use strict";

            function r() {
                return Kt
            }

            function o(t) {
                Kt = t
            }

            function i(t, e) {
                for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
                if (Kt <= qt.DEBUG) {
                    var o = (new Date).toISOString(),
                        i = n.map(s);
                    console.log.apply(console, ["Firestore (" + Qt + ") " + o + " [" + t + "]: " + e].concat(i))
                }
            }

            function a(t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                if (Kt <= qt.ERROR) {
                    var r = (new Date).toISOString(),
                        o = e.map(s);
                    console.error.apply(console, ["Firestore (" + Qt + ") " + r + ": " + t].concat(o))
                }
            }

            function s(t) {
                if ("string" == typeof t) return t;
                var e = Wt.getPlatform();
                try {
                    return e.formatJSON(t)
                } catch (e) {
                    return t
                }
            }

            function u(t) {
                var e = "FIRESTORE (" + Qt + ") INTERNAL ASSERTION FAILED: " + t;
                throw a(e), Error(e)
            }

            function c(t, e) {
                t || u(e)
            }

            function h() {
                return Wt.getPlatform().emptyByteString
            }

            function l(t, e) {
                function n() {
                    var t = "This constructor is private.";
                    throw e && (t += " ", t += e), new zt(Ht.INVALID_ARGUMENT, t)
                }
                n.prototype = t.prototype;
                for (var r in t) t.hasOwnProperty(r) && (n[r] = t[r]);
                return n
            }

            function f(t, e) {
                return Object.prototype.hasOwnProperty.call(t, e)
            }

            function d(t, e) {
                return void 0 !== t ? t : e
            }

            function p(t, e) {
                for (var n in t)
                    if (Object.prototype.hasOwnProperty.call(t, n)) {
                        var r = parseInt(n, 10);
                        isNaN(r) || e(r, t[n])
                    }
            }

            function y(t, e) {
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e(n, t[n])
            }

            function m(t) {
                c(null != t && "object" == typeof t, "isEmpty() expects object parameter.");
                for (var e in t)
                    if (Object.prototype.hasOwnProperty.call(t, e)) return !1;
                return !0
            }

            function g(t) {
                c(t && "object" == typeof t, "shallowCopy() expects object parameter.");
                var e = {};
                for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                return e
            }

            function v(t, e, n) {
                if (e.length !== n) throw new zt(Ht.INVALID_ARGUMENT, "Function " + t + "() requires " + P(n, "argument") + ", but was called with " + P(e.length, "argument") + ".")
            }

            function b(t, e, n) {
                if (e.length < n) throw new zt(Ht.INVALID_ARGUMENT, "Function " + t + "() requires at least " + P(n, "argument") + ", but was called with " + P(e.length, "argument") + ".")
            }

            function w(t, e, n, r) {
                if (e.length < n || e.length > r) throw new zt(Ht.INVALID_ARGUMENT, "Function " + t + "() requires between " + n + " and " + r + " arguments, but was called with " + P(e.length, "argument") + ".")
            }

            function I(t, e, n, r) {
                if (!(e instanceof Array) || e.length < r) throw new zt(Ht.INVALID_ARGUMENT, "Function " + t + "() requires its " + n + " argument to be an array with at least " + P(r, "element") + ".")
            }

            function T(t, e, n, r) {
                D(t, e, _(n) + " argument", r)
            }

            function E(t, e, n, r) {
                void 0 !== r && T(t, e, n, r)
            }

            function S(t, e, n, r) {
                D(t, e, n + " option", r)
            }

            function C(t, e, n, r) {
                void 0 !== r && S(t, e, n, r)
            }

            function D(t, e, n, r) {
                if (typeof r !== e || "object" === e && !k(r)) {
                    var o = N(r);
                    throw new zt(Ht.INVALID_ARGUMENT, "Function " + t + "() requires its " + n + " to be of type " + e + ", but it was: " + o)
                }
            }

            function k(t) {
                return "object" == typeof t && null !== t && Object.getPrototypeOf(t) === Object.prototype
            }

            function N(t) {
                if (void 0 === t) return "undefined";
                if (null === t) return "null";
                if ("string" == typeof t) return t.length > 20 && (t = t.substring(0, 20) + "..."), JSON.stringify(t);
                if ("number" == typeof t || "boolean" == typeof t) return "" + t;
                if ("object" == typeof t) {
                    if (t instanceof Array) return "an array";
                    var e = A(t);
                    return e ? "a custom " + e + " object" : "an object"
                }
                return "function" == typeof t ? "a function" : u("Unknown wrong type: " + typeof t)
            }

            function A(t) {
                if (t.constructor) {
                    var e = /function\s+([^\s(]+)\s*\(/,
                        n = e.exec("" + t.constructor);
                    if (n && n.length > 1) return n[1]
                }
                return null
            }

            function R(t, e, n) {
                if (void 0 === n) throw new zt(Ht.INVALID_ARGUMENT, "Function " + t + "() requires a valid " + _(e) + " argument, but it was undefined.")
            }

            function O(t, e, n) {
                y(e, function(e, r) {
                    if (n.indexOf(e) < 0) throw new zt(Ht.INVALID_ARGUMENT, "Unknown option '" + e + "' passed to function " + t + "(). Available options: " + n.join(", "))
                })
            }

            function M(t, e, n, r) {
                var o = N(r);
                return new zt(Ht.INVALID_ARGUMENT, "Function " + t + "() requires its " + _(n) + " argument to be a " + e + ", but it was: " + o)
            }

            function _(t) {
                switch (t) {
                    case 1:
                        return "first";
                    case 2:
                        return "second";
                    case 3:
                        return "third";
                    default:
                        return t + "th"
                }
            }

            function P(t, e) {
                return t + " " + e + (1 === t ? "" : "s")
            }

            function L(t, e) {
                return t < e ? -1 : t > e ? 1 : 0
            }

            function x(t, e) {
                return null !== t && void 0 !== t ? !(!e || !t.equals(e)) : t === e
            }

            function B(t, e) {
                if (t.length !== e.length) return !1;
                for (var n = 0; n < t.length; n++)
                    if (!t[n].equals(e[n])) return !1;
                return !0
            }

            function U(t) {
                var e = t.length - 1;
                return 0 === t.length ? "" : "\0" === t.charAt(e) ? t.substring(0, e) : t.substring(0, e) + String.fromCharCode(t.charCodeAt(e) - 1)
            }

            function F(t) {
                return t + "\0"
            }

            function V() {
                if ("undefined" == typeof Uint8Array) throw new zt(Ht.UNIMPLEMENTED, "Uint8Arrays are not available in this environment.")
            }

            function q() {
                if (!Wt.getPlatform().base64Available) throw new zt(Ht.UNIMPLEMENTED, "Blobs are unavailable in Firestore in this environment.")
            }

            function j(t, e) {
                return t < e ? -1 : t > e ? 1 : t === e ? 0 : isNaN(t) ? isNaN(e) ? 0 : -1 : 1
            }

            function Q(t, e) {
                return t === e ? 0 !== t || 1 / t == 1 / e : t !== t && e !== e
            }

            function K(t) {
                return null === t || void 0 === t
            }

            function W(t) {
                return Pe(t) && t <= _e && t >= Me
            }

            function G(t, e, n) {
                if (n.equals(ve.INSTANCE)) {
                    if (e !== xe.EQUAL) throw new zt(Ht.INVALID_ARGUMENT, "Invalid query. You can only perform equals comparisons on null.");
                    return new Ue(t)
                }
                if (n.equals(Te.NAN)) {
                    if (e !== xe.EQUAL) throw new zt(Ht.INVALID_ARGUMENT, "Invalid query. You can only perform equals comparisons on NaN.");
                    return new Fe(t)
                }
                return new Be(t, e, n)
            }

            function H(t) {
                switch (t) {
                    case Ht.OK:
                        return u("Treated status OK as error");
                    case Ht.CANCELLED:
                    case Ht.UNKNOWN:
                    case Ht.DEADLINE_EXCEEDED:
                    case Ht.RESOURCE_EXHAUSTED:
                    case Ht.INTERNAL:
                    case Ht.UNAVAILABLE:
                    case Ht.UNAUTHENTICATED:
                        return !1;
                    case Ht.INVALID_ARGUMENT:
                    case Ht.NOT_FOUND:
                    case Ht.ALREADY_EXISTS:
                    case Ht.PERMISSION_DENIED:
                    case Ht.FAILED_PRECONDITION:
                    case Ht.ABORTED:
                    case Ht.OUT_OF_RANGE:
                    case Ht.UNIMPLEMENTED:
                    case Ht.DATA_LOSS:
                        return !0;
                    default:
                        return u("Unknown status code: " + t)
                }
            }

            function z(t) {
                var e = en[t];
                if (void 0 !== e) return X(e)
            }

            function X(t) {
                if (void 0 === t) return a("GRPC error has no .code"), Ht.UNKNOWN;
                switch (t) {
                    case en.OK:
                        return Ht.OK;
                    case en.CANCELLED:
                        return Ht.CANCELLED;
                    case en.UNKNOWN:
                        return Ht.UNKNOWN;
                    case en.DEADLINE_EXCEEDED:
                        return Ht.DEADLINE_EXCEEDED;
                    case en.RESOURCE_EXHAUSTED:
                        return Ht.RESOURCE_EXHAUSTED;
                    case en.INTERNAL:
                        return Ht.INTERNAL;
                    case en.UNAVAILABLE:
                        return Ht.UNAVAILABLE;
                    case en.UNAUTHENTICATED:
                        return Ht.UNAUTHENTICATED;
                    case en.INVALID_ARGUMENT:
                        return Ht.INVALID_ARGUMENT;
                    case en.NOT_FOUND:
                        return Ht.NOT_FOUND;
                    case en.ALREADY_EXISTS:
                        return Ht.ALREADY_EXISTS;
                    case en.PERMISSION_DENIED:
                        return Ht.PERMISSION_DENIED;
                    case en.FAILED_PRECONDITION:
                        return Ht.FAILED_PRECONDITION;
                    case en.ABORTED:
                        return Ht.ABORTED;
                    case en.OUT_OF_RANGE:
                        return Ht.OUT_OF_RANGE;
                    case en.UNIMPLEMENTED:
                        return Ht.UNIMPLEMENTED;
                    case en.DATA_LOSS:
                        return Ht.DATA_LOSS;
                    default:
                        return u("Unknown status code: " + t)
                }
            }

            function Y(t) {
                if (void 0 === t) return en.OK;
                switch (t) {
                    case Ht.OK:
                        return en.OK;
                    case Ht.CANCELLED:
                        return en.CANCELLED;
                    case Ht.UNKNOWN:
                        return en.UNKNOWN;
                    case Ht.DEADLINE_EXCEEDED:
                        return en.DEADLINE_EXCEEDED;
                    case Ht.RESOURCE_EXHAUSTED:
                        return en.RESOURCE_EXHAUSTED;
                    case Ht.INTERNAL:
                        return en.INTERNAL;
                    case Ht.UNAVAILABLE:
                        return en.UNAVAILABLE;
                    case Ht.UNAUTHENTICATED:
                        return en.UNAUTHENTICATED;
                    case Ht.INVALID_ARGUMENT:
                        return en.INVALID_ARGUMENT;
                    case Ht.NOT_FOUND:
                        return en.NOT_FOUND;
                    case Ht.ALREADY_EXISTS:
                        return en.ALREADY_EXISTS;
                    case Ht.PERMISSION_DENIED:
                        return en.PERMISSION_DENIED;
                    case Ht.FAILED_PRECONDITION:
                        return en.FAILED_PRECONDITION;
                    case Ht.ABORTED:
                        return en.ABORTED;
                    case Ht.OUT_OF_RANGE:
                        return en.OUT_OF_RANGE;
                    case Ht.UNIMPLEMENTED:
                        return en.UNIMPLEMENTED;
                    case Ht.DATA_LOSS:
                        return en.DATA_LOSS;
                    default:
                        return u("Unknown status code: " + t)
                }
            }

            function J(t) {
                switch (t) {
                    case 200:
                        return Ht.OK;
                    case 400:
                        return Ht.INVALID_ARGUMENT;
                    case 401:
                        return Ht.UNAUTHENTICATED;
                    case 403:
                        return Ht.PERMISSION_DENIED;
                    case 404:
                        return Ht.NOT_FOUND;
                    case 409:
                        return Ht.ABORTED;
                    case 416:
                        return Ht.OUT_OF_RANGE;
                    case 429:
                        return Ht.RESOURCE_EXHAUSTED;
                    case 499:
                        return Ht.CANCELLED;
                    case 500:
                        return Ht.UNKNOWN;
                    case 501:
                        return Ht.UNIMPLEMENTED;
                    case 503:
                        return Ht.UNAVAILABLE;
                    case 504:
                        return Ht.DEADLINE_EXCEEDED;
                    default:
                        return t >= 200 && t < 300 ? Ht.OK : t >= 400 && t < 500 ? Ht.FAILED_PRECONDITION : t >= 500 && t < 600 ? Ht.INTERNAL : Ht.UNKNOWN
                }
            }

            function $() {
                return fn
            }

            function Z() {
                return dn
            }

            function tt() {
                return pn
            }

            function et() {
                return yn
            }

            function nt(t, e) {
                e.length > 0 && (t.resumeToken = e)
            }

            function rt(t, e) {
                c(!K(t), e + " is missing")
            }

            function ot(t) {
                return "number" == typeof t ? t : "string" == typeof t ? parseInt(t, 10) : u("can't parse " + t)
            }

            function it(t, e, n) {
                return e === n || !e && n in t
            }

            function at(t) {
                if (t.search(Bn) >= 0) throw new zt(Ht.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not contain '~', '*', '/', '[', or ']'");
                try {
                    return new(xn.bind.apply(xn, [void 0].concat(t.split("."))))
                } catch (e) {
                    throw new zt(Ht.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'")
                }
            }

            function st(t, e) {
                var n = function(t) {
                    switch (t) {
                        case Un.Added:
                            return 1;
                        case Un.Modified:
                        case Un.Metadata:
                            return 2;
                        case Un.Removed:
                            return 0;
                        default:
                            return u("Unknown ChangeType: " + t)
                    }
                };
                return n(t) - n(e)
            }

            function ut(t) {
                for (var e = "", n = 0; n < t.length; n++) e.length > 0 && (e = ht(e)), e = ct(t.get(n), e);
                return ht(e)
            }

            function ct(t, e) {
                for (var n = e, r = t.length, o = 0; o < r; o++) {
                    var i = t.charAt(o);
                    switch (i) {
                        case "\0":
                            n += cr + lr;
                            break;
                        case cr:
                            n += cr + fr;
                            break;
                        default:
                            n += i
                    }
                }
                return n
            }

            function ht(t) {
                return t + cr + hr
            }

            function lt(t) {
                var e = t.length;
                if (c(e >= 2, "Invalid path " + t), 2 === e) return c(t.charAt(0) === cr && t.charAt(1) === hr, "Non-empty path " + t + " had length 2"), oe.EMPTY_PATH;
                for (var n = e - 2, r = [], o = "", i = 0; i < e;) {
                    var a = t.indexOf(cr, i);
                    switch ((a < 0 || a > n) && u('Invalid encoded resource path: "' + t + '"'), t.charAt(a + 1)) {
                        case hr:
                            var s = t.substring(i, a),
                                h = void 0;
                            0 === o.length ? h = s : (o += s, h = o, o = ""), r.push(h);
                            break;
                        case lr:
                            o += t.substring(i, a), o += "\0";
                            break;
                        case fr:
                            o += t.substring(i, a + 1);
                            break;
                        default:
                            u('Invalid encoded resource path: "' + t + '"')
                    }
                    i = a + 2
                }
                return new oe(r)
            }

            function ft(t, e) {
                c(0 === e, "Unexpected upgrade from version " + e), t.createObjectStore(yr.store, {
                    keyPath: yr.keyPath
                }), t.createObjectStore(mr.store, {
                    keyPath: mr.keyPath
                }), t.createObjectStore(Ir.store, {
                    keyPath: Ir.keyPath
                }).createIndex(Ir.documentTargetsIndex, Ir.documentTargetsKeyPath, {
                    unique: !0
                }), t.createObjectStore(wr.store, {
                    keyPath: wr.keyPath
                }).createIndex(wr.queryTargetsIndexName, wr.queryTargetsKeyPath, {
                    unique: !0
                }), t.createObjectStore(gr.store), t.createObjectStore(br.store), t.createObjectStore(pr.store), t.createObjectStore(Tr.store)
            }

            function dt(t) {
                return new Hn(function(e, n) {
                    t.onsuccess = function(t) {
                        var n = t.target.result;
                        e(n)
                    }, t.onerror = function(t) {
                        n(t.target.error)
                    }
                })
            }

            function pt(t) {
                return c("string" == typeof t, "Persisting non-string stream token not supported."), t
            }

            function yt(t) {
                return vt(t, mr.store)
            }

            function mt(t) {
                return vt(t, gr.store)
            }

            function gt(t) {
                return vt(t, yr.store)
            }

            function vt(t, e) {
                return t instanceof Dr ? t.store(e) : u("Invalid transaction object provided!")
            }

            function bt(t) {
                return Tt(t, wr.store)
            }

            function wt(t) {
                return Tt(t, Tr.store)
            }

            function It(t) {
                return Tt(t, Ir.store)
            }

            function Tt(t, e) {
                return t instanceof Dr ? t.store(e) : u("Invalid transaction object provided!")
            }

            function Et(t) {
                return t instanceof Dr ? t.store(br.store) : u("Invalid transaction object provided!")
            }

            function St(t) {
                return t.path.toArray()
            }

            function Ct(t) {
                return void 0 !== t.documents
            }

            function Dt(t) {
                if (!t) return new so;
                switch (t.type) {
                    case "gapi":
                        return new ho(t.client, t.sessionIndex || "0");
                    case "provider":
                        return t.client;
                    default:
                        throw new zt(Ht.INVALID_ARGUMENT, "makeCredentialsProvider failed due to invalid credential type")
                }
            }

            function kt(t) {
                return Nt(t, ["next", "error", "complete"])
            }

            function Nt(t, e) {
                if ("object" != typeof t || null === t) return !1;
                for (var n = t, r = 0, o = e; r < o.length; r++) {
                    var i = o[r];
                    if (i in n && "function" == typeof n[i]) return !0
                }
                return !1
            }

            function At(t) {
                switch (t) {
                    case Gr.Set:
                    case Gr.MergeSet:
                    case Gr.Update:
                        return !0;
                    case Gr.QueryValue:
                        return !1;
                    default:
                        throw u("Unexpected case for UserDataSource: " + t)
                }
            }

            function Rt(t) {
                return !("object" != typeof t || null === t || t instanceof Array || t instanceof Date || t instanceof $t || t instanceof Yt || t instanceof Io || t instanceof fo)
            }

            function Ot(t, e, n) {
                if (!Rt(n) || !k(n)) {
                    var r = N(n);
                    throw "an object" === r ? e.createError(t + " a custom object") : e.createError(t + " " + r)
                }
            }

            function Mt(t, e) {
                if (e instanceof xn) return e.t;
                if ("string" == typeof e) return _t(t, e);
                throw new zt(Ht.INVALID_ARGUMENT, "Function " + t + "() called with invalid data. Field path arguments must be of type string or FieldPath.")
            }

            function _t(t, e) {
                try {
                    return at(e).t
                } catch (e) {
                    var n = Pt(e);
                    throw new zt(Ht.INVALID_ARGUMENT, "Function " + t + "() called with invalid data. " + n)
                }
            }

            function Pt(t) {
                return t instanceof Error ? t.message : "" + t
            }

            function Lt(t, e) {
                return void 0 === e ? {
                    merge: !1
                } : (O(t, e, ["merge"]), C(t, "boolean", "merge", e.merge), e)
            }

            function xt(t, e, n) {
                if (e instanceof Oo) {
                    if (e.firestore !== n) throw new zt(Ht.INVALID_ARGUMENT, "Provided document reference is from a different Firestore instance.");
                    return e
                }
                throw M(t, "DocumentReference", 1, e)
            }

            function Bt(t, e) {
                if (e.oldDocs.isEmpty()) {
                    var n, r = 0;
                    return e.docChanges.map(function(o) {
                        var i = new Mo(t, o.doc.key, o.doc, e.fromCache);
                        return c(o.type === Un.Added, "Invalid event type for first snapshot"), c(!n || e.query.docComparator(n, o.doc) < 0, "Got added events in wrong order"), n = o.doc, {
                            type: "added",
                            doc: i,
                            oldIndex: -1,
                            newIndex: r++
                        }
                    })
                }
                var o = e.oldDocs;
                return e.docChanges.map(function(n) {
                    var r = new Mo(t, n.doc.key, n.doc, e.fromCache),
                        i = -1,
                        a = -1;
                    return n.type !== Un.Added && (i = o.indexOf(n.doc.key), c(i >= 0, "Index for document not found"), o = o.delete(n.doc.key)), n.type !== Un.Removed && (o = o.add(n.doc), a = o.indexOf(n.doc.key)), {
                        type: Ut(n.type),
                        doc: r,
                        oldIndex: i,
                        newIndex: a
                    }
                })
            }

            function Ut(t) {
                switch (t) {
                    case Un.Added:
                        return "added";
                    case Un.Modified:
                    case Un.Metadata:
                        return "modified";
                    case Un.Removed:
                        return "removed";
                    default:
                        return u("Unknown change type: " + t)
                }
            }

            function Ft(t) {
                t.INTERNAL.registerService("firestore", function(t) {
                    return new No(t)
                }, g(Ko))
            }

            function Vt(t) {
                Ft(t)
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            var qt, jt = n(6),
                Qt = jt.default.SDK_VERSION;
            ! function(t) {
                t[t.DEBUG = 0] = "DEBUG", t[t.ERROR = 1] = "ERROR", t[t.SILENT = 2] = "SILENT"
            }(qt || (qt = {}));
            var Kt = qt.ERROR,
                Wt = function() {
                    function t() {}
                    return t.setPlatform = function(e) {
                        t.platform && u("Platform already defined"), t.platform = e
                    }, t.getPlatform = function() {
                        return t.platform || u("Platform not set"), t.platform
                    }, t
                }(),
                Gt = this && this.__extends || function() {
                    var t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    };
                    return function(e, n) {
                        function r() {
                            this.constructor = e
                        }
                        t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                    }
                }(),
                Ht = {
                    OK: "ok",
                    CANCELLED: "cancelled",
                    UNKNOWN: "unknown",
                    INVALID_ARGUMENT: "invalid-argument",
                    DEADLINE_EXCEEDED: "deadline-exceeded",
                    NOT_FOUND: "not-found",
                    ALREADY_EXISTS: "already-exists",
                    PERMISSION_DENIED: "permission-denied",
                    UNAUTHENTICATED: "unauthenticated",
                    RESOURCE_EXHAUSTED: "resource-exhausted",
                    FAILED_PRECONDITION: "failed-precondition",
                    ABORTED: "aborted",
                    OUT_OF_RANGE: "out-of-range",
                    UNIMPLEMENTED: "unimplemented",
                    INTERNAL: "internal",
                    UNAVAILABLE: "unavailable",
                    DATA_LOSS: "data-loss"
                },
                zt = function(t) {
                    function e(e, n) {
                        var r = t.call(this, n) || this;
                        return r.code = e, r.message = n, r.name = "FirebaseError", r.toString = function() {
                            return r.name + ": [code=" + r.code + "]: " + r.message
                        }, r
                    }
                    return Gt(e, t), e
                }(Error),
                Xt = function() {
                    function t() {}
                    return t.newId = function() {
                        for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", e = "", n = 0; n < 20; n++) e += t.charAt(Math.floor(Math.random() * t.length));
                        return c(20 === e.length, "Invalid auto ID: " + e), e
                    }, t
                }(),
                Yt = function() {
                    function t(t) {
                        q(), this.e = t
                    }
                    return t.fromBase64String = function(e) {
                        v("Blob.fromBase64String", arguments, 1), T("Blob.fromBase64String", "string", 1, e), q();
                        try {
                            return new t(Wt.getPlatform().atob(e))
                        } catch (t) {
                            throw new zt(Ht.INVALID_ARGUMENT, "Failed to construct Blob from Base64 string: " + t)
                        }
                    }, t.fromUint8Array = function(e) {
                        if (v("Blob.fromUint8Array", arguments, 1), V(), !(e instanceof Uint8Array)) throw M("Blob.fromUint8Array", "Uint8Array", 1, e);
                        return new t(Array.prototype.map.call(e, function(t) {
                            return String.fromCharCode(t)
                        }).join(""))
                    }, t.prototype.toBase64 = function() {
                        return v("Blob.toBase64", arguments, 0), q(), Wt.getPlatform().btoa(this.e)
                    }, t.prototype.toUint8Array = function() {
                        v("Blob.toUint8Array", arguments, 0), V();
                        for (var t = new Uint8Array(this.e.length), e = 0; e < this.e.length; e++) t[e] = this.e.charCodeAt(e);
                        return t
                    }, t.prototype.toString = function() {
                        return "Blob(base64: " + this.toBase64() + ")"
                    }, t.prototype.n = function(t) {
                        return this.e === t.e
                    }, t.prototype.r = function(t) {
                        return L(this.e, t.e)
                    }, t
                }(),
                Jt = l(Yt, "Use Blob.fromUint8Array() or Blob.fromBase64String() instead."),
                $t = function() {
                    function t(t, e) {
                        if (v("GeoPoint", arguments, 2), T("GeoPoint", "number", 1, t), T("GeoPoint", "number", 2, e), !isFinite(t) || t < -90 || t > 90) throw new zt(Ht.INVALID_ARGUMENT, "Latitude must be a number between -90 and 90, but was: " + t);
                        if (!isFinite(e) || e < -180 || e > 180) throw new zt(Ht.INVALID_ARGUMENT, "Longitude must be a number between -180 and 180, but was: " + e);
                        this._lat = t, this.d = e
                    }
                    return Object.defineProperty(t.prototype, "latitude", {
                        get: function() {
                            return this._lat
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "longitude", {
                        get: function() {
                            return this.d
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.n = function(t) {
                        return this._lat === t._lat && this.d === t.d
                    }, t.prototype.r = function(t) {
                        return L(this._lat, t._lat) || L(this.d, t.d)
                    }, t
                }(),
                Zt = function() {
                    function t(t, e, n, r) {
                        this.databaseId = t, this.persistenceKey = e, this.host = n, this.ssl = r
                    }
                    return t
                }(),
                te = "(default)",
                ee = function() {
                    function t(t, e) {
                        this.projectId = t, this.database = e || te
                    }
                    return Object.defineProperty(t.prototype, "isDefaultDatabase", {
                        get: function() {
                            return this.database === te
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.equals = function(e) {
                        return e instanceof t && e.projectId === this.projectId && e.database === this.database
                    }, t.prototype.compareTo = function(t) {
                        return L(this.projectId, t.projectId) || L(this.database, t.database)
                    }, t
                }(),
                ne = this && this.__extends || function() {
                    var t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    };
                    return function(e, n) {
                        function r() {
                            this.constructor = e
                        }
                        t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                    }
                }(),
                re = function() {
                    function t(t, e, n) {
                        this.init(t, e, n)
                    }
                    return t.prototype.init = function(t, e, n) {
                        void 0 === e ? e = 0 : e > t.length && u("offset " + e + " out of range " + t.length), void 0 === n ? n = t.length - e : n > t.length - e && u("length " + n + " out of range " + (t.length - e)), this.segments = t, this.offset = e, this.len = n
                    }, t.prototype.construct = function(t, e, n) {
                        var r = Object.create(Object.getPrototypeOf(this));
                        return r.init(t, e, n), r
                    }, Object.defineProperty(t.prototype, "length", {
                        get: function() {
                            return this.len
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.equals = function(e) {
                        return 0 === t.comparator(this, e)
                    }, t.prototype.child = function(e) {
                        var n = this.segments.slice(this.offset, this.limit());
                        return e instanceof t ? e.forEach(function(t) {
                            n.push(t)
                        }) : "string" == typeof e ? n.push(e) : u("Unknown parameter type for Path.child(): " + e), this.construct(n)
                    }, t.prototype.limit = function() {
                        return this.offset + this.length
                    }, t.prototype.popFirst = function(t) {
                        return t = void 0 === t ? 1 : t, c(this.length >= t, "Can't call popFirst() with less segments"), this.construct(this.segments, this.offset + t, this.length - t)
                    }, t.prototype.popLast = function() {
                        return c(!this.isEmpty(), "Can't call popLast() on empty path"), this.construct(this.segments, this.offset, this.length - 1)
                    }, t.prototype.firstSegment = function() {
                        return c(!this.isEmpty(), "Can't call firstSegment() on empty path"), this.segments[this.offset]
                    }, t.prototype.lastSegment = function() {
                        return c(!this.isEmpty(), "Can't call lastSegment() on empty path"), this.segments[this.limit() - 1]
                    }, t.prototype.get = function(t) {
                        return c(t < this.length, "Index out of range"), this.segments[this.offset + t]
                    }, t.prototype.isEmpty = function() {
                        return 0 === this.length
                    }, t.prototype.isPrefixOf = function(t) {
                        if (t.length < this.length) return !1;
                        for (var e = 0; e < this.length; e++)
                            if (this.get(e) !== t.get(e)) return !1;
                        return !0
                    }, t.prototype.forEach = function(t) {
                        for (var e = this.offset, n = this.limit(); e < n; e++) t(this.segments[e])
                    }, t.prototype.toArray = function() {
                        return this.segments.slice(this.offset, this.limit())
                    }, t.comparator = function(t, e) {
                        for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) {
                            var o = t.get(r),
                                i = e.get(r);
                            if (o < i) return -1;
                            if (o > i) return 1
                        }
                        return t.length < e.length ? -1 : t.length > e.length ? 1 : 0
                    }, t
                }(),
                oe = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return ne(e, t), e.prototype.canonicalString = function() {
                        return this.toArray().join("/")
                    }, e.prototype.toString = function() {
                        return this.canonicalString()
                    }, e.fromString = function(t) {
                        if (t.indexOf("//") >= 0) throw new zt(Ht.INVALID_ARGUMENT, "Invalid path (" + t + "). Paths must not contain // in them.");
                        return new e(t.split("/").filter(function(t) {
                            return t.length > 0
                        }))
                    }, e.EMPTY_PATH = new e([]), e
                }(re),
                ie = /^[_a-zA-Z][_a-zA-Z0-9]*$/,
                ae = function(t) {
                    function e() {
                        return null !== t && t.apply(this, arguments) || this
                    }
                    return ne(e, t), e.isValidIdentifier = function(t) {
                        return ie.test(t)
                    }, e.prototype.canonicalString = function() {
                        return this.toArray().map(function(t) {
                            return t = t.replace("\\", "\\\\").replace("`", "\\`"), e.isValidIdentifier(t) || (t = "`" + t + "`"), t
                        }).join(".")
                    }, e.prototype.toString = function() {
                        return this.canonicalString()
                    }, e.prototype.isKeyField = function() {
                        return 1 === this.length && "__name__" === this.get(0)
                    }, e.keyField = function() {
                        return new e(["__name__"])
                    }, e.fromServerFormat = function(t) {
                        for (var n = [], r = "", o = 0, i = function() {
                                if (0 === r.length) throw new zt(Ht.INVALID_ARGUMENT, "Invalid field path (" + t + "). Paths must not be empty, begin with '.', end with '.', or contain '..'");
                                n.push(r), r = ""
                            }, a = !1; o < t.length;) {
                            var s = t[o];
                            if ("\\" === s) {
                                if (o + 1 === t.length) throw new zt(Ht.INVALID_ARGUMENT, "Path has trailing escape character: " + t);
                                var u = t[o + 1];
                                if ("\\" !== u && "." !== u && "`" !== u) throw new zt(Ht.INVALID_ARGUMENT, "Path has invalid escape sequence: " + t);
                                r += u, o += 2
                            } else "`" === s ? (a = !a, o++) : "." !== s || a ? (r += s, o++) : (i(), o++)
                        }
                        if (i(), a) throw new zt(Ht.INVALID_ARGUMENT, "Unterminated ` in path: " + t);
                        return new e(n)
                    }, e.EMPTY_PATH = new e([]), e
                }(re),
                se = function() {
                    function t(e) {
                        this.path = e, c(t.isDocumentKey(e), "Invalid DocumentKey with an odd number of segments: " + e.toArray().join("/"))
                    }
                    return t.prototype.equals = function(t) {
                        return null !== t && 0 === oe.comparator(this.path, t.path)
                    }, t.prototype.toString = function() {
                        return "" + this.path
                    }, t.comparator = function(t, e) {
                        return oe.comparator(t.path, e.path)
                    }, t.isDocumentKey = function(t) {
                        return t.length % 2 == 0
                    }, t.fromSegments = function(e) {
                        return new t(new oe(e.slice()))
                    }, t.fromPathString = function(e) {
                        return new t(oe.fromString(e))
                    }, t.EMPTY = new t(new oe([])), t
                }(),
                ue = function() {
                    function t(t, e, n, r) {
                        this.key = t, this.version = e, this.data = n, this.hasLocalMutations = r.hasLocalMutations
                    }
                    return t.prototype.field = function(t) {
                        return this.data.field(t)
                    }, t.prototype.fieldValue = function(t) {
                        var e = this.field(t);
                        return e ? e.value() : void 0
                    }, t.prototype.value = function() {
                        return this.data.value()
                    }, t.prototype.equals = function(e) {
                        return e instanceof t && this.key.equals(e.key) && this.version.equals(e.version) && this.data.equals(e.data) && this.hasLocalMutations === e.hasLocalMutations
                    }, t.prototype.toString = function() {
                        return "Document(" + this.key + ", " + this.version + ", " + this.data + ", {hasLocalMutations: " + this.hasLocalMutations + "})"
                    }, t.compareByKey = function(t, e) {
                        return se.comparator(t.key, e.key)
                    }, t.compareByField = function(t, e, n) {
                        var r = e.field(t),
                            o = n.field(t);
                        return void 0 !== r && void 0 !== o ? r.compareTo(o) : u("Trying to compare documents on fields that don't exist")
                    }, t
                }(),
                ce = function() {
                    function t(t, e) {
                        this.key = t, this.version = e
                    }
                    return t.prototype.toString = function() {
                        return "NoDocument(" + this.key + ", " + this.version + ")"
                    }, t.prototype.equals = function(t) {
                        return t && t.version.equals(this.version) && t.key.equals(this.key)
                    }, t.compareByKey = function(t, e) {
                        return se.comparator(t.key, e.key)
                    }, t
                }(),
                he = function() {
                    function t(t, e) {
                        this.comparator = t, this.root = e || fe.EMPTY
                    }
                    return t.prototype.insert = function(e, n) {
                        return new t(this.comparator, this.root.insert(e, n, this.comparator).copy(null, null, fe.BLACK, null, null))
                    }, t.prototype.remove = function(e) {
                        return new t(this.comparator, this.root.remove(e, this.comparator).copy(null, null, fe.BLACK, null, null))
                    }, t.prototype.get = function(t) {
                        for (var e = this.root; !e.isEmpty();) {
                            var n = this.comparator(t, e.key);
                            if (0 === n) return e.value;
                            n < 0 ? e = e.left : n > 0 && (e = e.right)
                        }
                        return null
                    }, t.prototype.getPredecessorKey = function(t) {
                        for (var e = this.root, n = null; !e.isEmpty();) {
                            var r = this.comparator(t, e.key);
                            if (0 === r) {
                                if (e.left.isEmpty()) return n ? n.key : null;
                                for (e = e.left; !e.right.isEmpty();) e = e.right;
                                return e.key
                            }
                            r < 0 ? e = e.left : r > 0 && (n = e, e = e.right)
                        }
                        throw u("Attempted to find predecessor key for a nonexistent key.  What gives?")
                    }, t.prototype.indexOf = function(t) {
                        for (var e = 0, n = this.root; !n.isEmpty();) {
                            var r = this.comparator(t, n.key);
                            if (0 === r) return e + n.left.size;
                            r < 0 ? n = n.left : (e += n.left.size + 1, n = n.right)
                        }
                        return -1
                    }, t.prototype.isEmpty = function() {
                        return this.root.isEmpty()
                    }, Object.defineProperty(t.prototype, "size", {
                        get: function() {
                            return this.root.size
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.minKey = function() {
                        return this.root.minKey()
                    }, t.prototype.maxKey = function() {
                        return this.root.maxKey()
                    }, t.prototype.inorderTraversal = function(t) {
                        return this.root.inorderTraversal(t)
                    }, t.prototype.forEach = function(t) {
                        this.inorderTraversal(function(e, n) {
                            return t(e, n), !1
                        })
                    }, t.prototype.reverseTraversal = function(t) {
                        return this.root.reverseTraversal(t)
                    }, t.prototype.getIterator = function(t) {
                        return new le(this.root, null, this.comparator, !1, t)
                    }, t.prototype.getIteratorFrom = function(t, e) {
                        return new le(this.root, t, this.comparator, !1, e)
                    }, t.prototype.getReverseIterator = function(t) {
                        return new le(this.root, null, this.comparator, !0, t)
                    }, t.prototype.getReverseIteratorFrom = function(t, e) {
                        return new le(this.root, t, this.comparator, !0, e)
                    }, t
                }(),
                le = function() {
                    function t(t, e, n, r, o) {
                        this.resultGenerator = o || null, this.isReverse = r, this.nodeStack = [];
                        for (var i = 1; !t.isEmpty();)
                            if (i = e ? n(t.key, e) : 1, r && (i *= -1), i < 0) t = this.isReverse ? t.left : t.right;
                            else {
                                if (0 === i) {
                                    this.nodeStack.push(t);
                                    break
                                }
                                this.nodeStack.push(t), t = this.isReverse ? t.right : t.left
                            }
                    }
                    return t.prototype.getNext = function() {
                        c(this.nodeStack.length > 0, "getNext() called on iterator when hasNext() is false.");
                        var t, e = this.nodeStack.pop();
                        if (t = this.resultGenerator ? this.resultGenerator(e.key, e.value) : {
                                key: e.key,
                                value: e.value
                            }, this.isReverse)
                            for (e = e.left; !e.isEmpty();) this.nodeStack.push(e), e = e.right;
                        else
                            for (e = e.right; !e.isEmpty();) this.nodeStack.push(e), e = e.left;
                        return t
                    }, t.prototype.hasNext = function() {
                        return this.nodeStack.length > 0
                    }, t.prototype.peek = function() {
                        if (0 === this.nodeStack.length) return null;
                        var t = this.nodeStack[this.nodeStack.length - 1];
                        return this.resultGenerator ? this.resultGenerator(t.key, t.value) : {
                            key: t.key,
                            value: t.value
                        }
                    }, t
                }(),
                fe = function() {
                    function t(e, n, r, o, i) {
                        this.key = e, this.value = n, this.color = null != r ? r : t.RED, this.left = null != o ? o : t.EMPTY, this.right = null != i ? i : t.EMPTY, this.size = this.left.size + 1 + this.right.size
                    }
                    return t.prototype.copy = function(e, n, r, o, i) {
                        return new t(null != e ? e : this.key, null != n ? n : this.value, null != r ? r : this.color, null != o ? o : this.left, null != i ? i : this.right)
                    }, t.prototype.isEmpty = function() {
                        return !1
                    }, t.prototype.inorderTraversal = function(t) {
                        return this.left.inorderTraversal(t) || t(this.key, this.value) || this.right.inorderTraversal(t)
                    }, t.prototype.reverseTraversal = function(t) {
                        return this.right.reverseTraversal(t) || t(this.key, this.value) || this.left.reverseTraversal(t)
                    }, t.prototype.min = function() {
                        return this.left.isEmpty() ? this : this.left.min()
                    }, t.prototype.minKey = function() {
                        return this.min().key
                    }, t.prototype.maxKey = function() {
                        return this.right.isEmpty() ? this.key : this.right.maxKey()
                    }, t.prototype.insert = function(t, e, n) {
                        var r = this,
                            o = n(t, r.key);
                        return r = o < 0 ? r.copy(null, null, null, r.left.insert(t, e, n), null) : 0 === o ? r.copy(null, e, null, null, null) : r.copy(null, null, null, null, r.right.insert(t, e, n)), r.fixUp()
                    }, t.prototype.removeMin = function() {
                        if (this.left.isEmpty()) return t.EMPTY;
                        var e = this;
                        return e.left.isRed() || e.left.left.isRed() || (e = e.moveRedLeft()), e = e.copy(null, null, null, e.left.removeMin(), null), e.fixUp()
                    }, t.prototype.remove = function(e, n) {
                        var r, o = this;
                        if (n(e, o.key) < 0) o.left.isEmpty() || o.left.isRed() || o.left.left.isRed() || (o = o.moveRedLeft()), o = o.copy(null, null, null, o.left.remove(e, n), null);
                        else {
                            if (o.left.isRed() && (o = o.rotateRight()), o.right.isEmpty() || o.right.isRed() || o.right.left.isRed() || (o = o.moveRedRight()), 0 === n(e, o.key)) {
                                if (o.right.isEmpty()) return t.EMPTY;
                                r = o.right.min(), o = o.copy(r.key, r.value, null, null, o.right.removeMin())
                            }
                            o = o.copy(null, null, null, null, o.right.remove(e, n))
                        }
                        return o.fixUp()
                    }, t.prototype.isRed = function() {
                        return this.color
                    }, t.prototype.fixUp = function() {
                        var t = this;
                        return t.right.isRed() && !t.left.isRed() && (t = t.rotateLeft()), t.left.isRed() && t.left.left.isRed() && (t = t.rotateRight()), t.left.isRed() && t.right.isRed() && (t = t.colorFlip()), t
                    }, t.prototype.moveRedLeft = function() {
                        var t = this.colorFlip();
                        return t.right.left.isRed() && (t = t.copy(null, null, null, null, t.right.rotateRight()), t = t.rotateLeft(), t = t.colorFlip()), t
                    }, t.prototype.moveRedRight = function() {
                        var t = this.colorFlip();
                        return t.left.left.isRed() && (t = t.rotateRight(), t = t.colorFlip()), t
                    }, t.prototype.rotateLeft = function() {
                        var e = this.copy(null, null, t.RED, null, this.right.left);
                        return this.right.copy(null, null, this.color, e, null)
                    }, t.prototype.rotateRight = function() {
                        var e = this.copy(null, null, t.RED, this.left.right, null);
                        return this.left.copy(null, null, this.color, null, e)
                    }, t.prototype.colorFlip = function() {
                        var t = this.left.copy(null, null, !this.left.color, null, null),
                            e = this.right.copy(null, null, !this.right.color, null, null);
                        return this.copy(null, null, !this.color, t, e)
                    }, t.prototype.checkMaxDepth = function() {
                        var t = this.check();
                        return Math.pow(2, t) <= this.size + 1
                    }, t.prototype.check = function() {
                        if (this.isRed() && this.left.isRed()) throw u("Red node has red child(" + this.key + "," + this.value + ")");
                        if (this.right.isRed()) throw u("Right child of (" + this.key + "," + this.value + ") is red");
                        var t = this.left.check();
                        if (t !== this.right.check()) throw u("Black depths differ");
                        return t + (this.isRed() ? 0 : 1)
                    }, t.EMPTY = null, t.RED = !0, t.BLACK = !1, t
                }(),
                de = function() {
                    function t() {
                        this.size = 0
                    }
                    return t.prototype.copy = function(t, e, n, r, o) {
                        return this
                    }, t.prototype.insert = function(t, e, n) {
                        return new fe(t, e)
                    }, t.prototype.remove = function(t, e) {
                        return this
                    }, t.prototype.isEmpty = function() {
                        return !0
                    }, t.prototype.inorderTraversal = function(t) {
                        return !1
                    }, t.prototype.reverseTraversal = function(t) {
                        return !1
                    }, t.prototype.minKey = function() {
                        return null
                    }, t.prototype.maxKey = function() {
                        return null
                    }, t.prototype.isRed = function() {
                        return !1
                    }, t.prototype.checkMaxDepth = function() {
                        return !0
                    }, t.prototype.check = function() {
                        return 0
                    }, t
                }();
            fe.EMPTY = new de;
            var pe, ye = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                };
                return function(e, n) {
                    function r() {
                        this.constructor = e
                    }
                    t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                }
            }();
            ! function(t) {
                t[t.NullValue = 0] = "NullValue", t[t.BooleanValue = 1] = "BooleanValue", t[t.NumberValue = 2] = "NumberValue", t[t.TimestampValue = 3] = "TimestampValue", t[t.StringValue = 4] = "StringValue", t[t.BlobValue = 5] = "BlobValue", t[t.RefValue = 6] = "RefValue", t[t.GeoPointValue = 7] = "GeoPointValue", t[t.ArrayValue = 8] = "ArrayValue", t[t.ObjectValue = 9] = "ObjectValue"
            }(pe || (pe = {}));
            var me, ge = function() {
                    function t() {}
                    return t.prototype.toString = function() {
                        var t = this.value();
                        return null === t ? "null" : "" + t
                    }, t.prototype.defaultCompareTo = function(t) {
                        return c(this.typeOrder !== t.typeOrder, "Default compareTo should not be used for values of same type."), L(this.typeOrder, t.typeOrder)
                    }, t
                }(),
                ve = function(t) {
                    function e() {
                        var e = t.call(this) || this;
                        return e.typeOrder = pe.NullValue, e.internalValue = null, e
                    }
                    return ye(e, t), e.prototype.value = function() {
                        return null
                    }, e.prototype.equals = function(t) {
                        return t instanceof e
                    }, e.prototype.compareTo = function(t) {
                        return t instanceof e ? 0 : this.defaultCompareTo(t)
                    }, e.INSTANCE = new e, e
                }(ge),
                be = function(t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n.internalValue = e, n.typeOrder = pe.BooleanValue, n
                    }
                    return ye(e, t), e.prototype.value = function() {
                        return this.internalValue
                    }, e.prototype.equals = function(t) {
                        return t instanceof e && this.internalValue === t.internalValue
                    }, e.prototype.compareTo = function(t) {
                        return t instanceof e ? L(this, t) : this.defaultCompareTo(t)
                    }, e.of = function(t) {
                        return t ? e.TRUE : e.FALSE
                    }, e.TRUE = new e(!0), e.FALSE = new e(!1), e
                }(ge),
                we = function(t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n.internalValue = e, n.typeOrder = pe.NumberValue, n
                    }
                    return ye(e, t), e.prototype.value = function() {
                        return this.internalValue
                    }, e.prototype.compareTo = function(t) {
                        return t instanceof e ? j(this.internalValue, t.internalValue) : this.defaultCompareTo(t)
                    }, e
                }(ge),
                Ie = function(t) {
                    function e(e) {
                        return t.call(this, e) || this
                    }
                    return ye(e, t), e.prototype.equals = function(t) {
                        return t instanceof e && Q(this.internalValue, t.internalValue)
                    }, e
                }(we),
                Te = function(t) {
                    function e(e) {
                        var n = t.call(this, e) || this;
                        return n.internalValue = e, n
                    }
                    return ye(e, t), e.prototype.equals = function(t) {
                        return t instanceof e && Q(this.internalValue, t.internalValue)
                    }, e.NAN = new e(NaN), e.POSITIVE_INFINITY = new e(1 / 0), e.NEGATIVE_INFINITY = new e(-1 / 0), e
                }(we),
                Ee = function(t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n.internalValue = e, n.typeOrder = pe.StringValue, n
                    }
                    return ye(e, t), e.prototype.value = function() {
                        return this.internalValue
                    }, e.prototype.equals = function(t) {
                        return t instanceof e && this.internalValue === t.internalValue
                    }, e.prototype.compareTo = function(t) {
                        return t instanceof e ? L(this.internalValue, t.internalValue) : this.defaultCompareTo(t)
                    }, e
                }(ge),
                Se = function(t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n.internalValue = e, n.typeOrder = pe.TimestampValue, n
                    }
                    return ye(e, t), e.prototype.value = function() {
                        return this.internalValue.toDate()
                    }, e.prototype.equals = function(t) {
                        return t instanceof e && this.internalValue.equals(t.internalValue)
                    }, e.prototype.compareTo = function(t) {
                        return t instanceof e ? this.internalValue.compareTo(t.internalValue) : t instanceof Ce ? -1 : this.defaultCompareTo(t)
                    }, e
                }(ge),
                Ce = function(t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n.localWriteTime = e, n.typeOrder = pe.TimestampValue, n
                    }
                    return ye(e, t), e.prototype.value = function() {
                        return null
                    }, e.prototype.equals = function(t) {
                        return t instanceof e && this.localWriteTime.equals(t.localWriteTime)
                    }, e.prototype.compareTo = function(t) {
                        return t instanceof e ? this.localWriteTime.compareTo(t.localWriteTime) : t instanceof Se ? 1 : this.defaultCompareTo(t)
                    }, e.prototype.toString = function() {
                        return "<ServerTimestamp localTime=" + this.localWriteTime + ">"
                    }, e
                }(ge),
                De = function(t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n.internalValue = e, n.typeOrder = pe.BlobValue, n
                    }
                    return ye(e, t), e.prototype.value = function() {
                        return this.internalValue
                    }, e.prototype.equals = function(t) {
                        return t instanceof e && this.internalValue.n(t.internalValue)
                    }, e.prototype.compareTo = function(t) {
                        return t instanceof e ? this.internalValue.r(t.internalValue) : this.defaultCompareTo(t)
                    }, e
                }(ge),
                ke = function(t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r.databaseId = e, r.key = n, r.typeOrder = pe.RefValue, r
                    }
                    return ye(e, t), e.prototype.value = function() {
                        return this.key
                    }, e.prototype.equals = function(t) {
                        return t instanceof e && this.key.equals(t.key) && this.databaseId.equals(t.databaseId)
                    }, e.prototype.compareTo = function(t) {
                        if (t instanceof e) {
                            var n = this.databaseId.compareTo(t.databaseId);
                            return 0 !== n ? n : se.comparator(this.key, t.key)
                        }
                        return this.defaultCompareTo(t)
                    }, e
                }(ge),
                Ne = function(t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n.internalValue = e, n.typeOrder = pe.GeoPointValue, n
                    }
                    return ye(e, t), e.prototype.value = function() {
                        return this.internalValue
                    }, e.prototype.equals = function(t) {
                        return t instanceof e && this.internalValue.n(t.internalValue)
                    }, e.prototype.compareTo = function(t) {
                        return t instanceof e ? this.internalValue.r(t.internalValue) : this.defaultCompareTo(t)
                    }, e
                }(ge),
                Ae = function(t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n.internalValue = e, n.typeOrder = pe.ObjectValue, n
                    }
                    return ye(e, t), e.prototype.value = function() {
                        var t = {};
                        return this.internalValue.inorderTraversal(function(e, n) {
                            t[e] = n.value()
                        }), t
                    }, e.prototype.forEach = function(t) {
                        this.internalValue.inorderTraversal(t)
                    }, e.prototype.equals = function(t) {
                        if (t instanceof e) {
                            for (var n = this.internalValue.getIterator(), r = t.internalValue.getIterator(); n.hasNext() && r.hasNext();) {
                                var o = n.getNext(),
                                    i = r.getNext();
                                if (o.key !== i.key || !o.value.equals(i.value)) return !1
                            }
                            return !n.hasNext() && !r.hasNext()
                        }
                        return !1
                    }, e.prototype.compareTo = function(t) {
                        if (t instanceof e) {
                            for (var n = this.internalValue.getIterator(), r = t.internalValue.getIterator(); n.hasNext() && r.hasNext();) {
                                var o = n.getNext(),
                                    i = r.getNext(),
                                    a = L(o.key, i.key) || o.value.compareTo(i.value);
                                if (a) return a
                            }
                            return L(n.hasNext(), r.hasNext())
                        }
                        return this.defaultCompareTo(t)
                    }, e.prototype.set = function(t, n) {
                        if (c(!t.isEmpty(), "Cannot set field for empty path on ObjectValue"), 1 === t.length) return this.setChild(t.firstSegment(), n);
                        var r = this.child(t.firstSegment());
                        r instanceof e || (r = e.EMPTY);
                        var o = r.set(t.popFirst(), n);
                        return this.setChild(t.firstSegment(), o)
                    }, e.prototype.delete = function(t) {
                        if (c(!t.isEmpty(), "Cannot delete field for empty path on ObjectValue"), 1 === t.length) return new e(this.internalValue.remove(t.firstSegment()));
                        var n = this.child(t.firstSegment());
                        if (n instanceof e) {
                            var r = n.delete(t.popFirst());
                            return new e(this.internalValue.insert(t.firstSegment(), r))
                        }
                        return this
                    }, e.prototype.contains = function(t) {
                        return void 0 !== this.field(t)
                    }, e.prototype.field = function(t) {
                        c(!t.isEmpty(), "Can't get field of empty path");
                        var n = this;
                        return t.forEach(function(t) {
                            n = n instanceof e ? n.internalValue.get(t) || void 0 : void 0
                        }), n
                    }, e.prototype.toString = function() {
                        return JSON.stringify(this.value())
                    }, e.prototype.child = function(t) {
                        return this.internalValue.get(t) || void 0
                    }, e.prototype.setChild = function(t, n) {
                        return new e(this.internalValue.insert(t, n))
                    }, e.EMPTY = new e(new he(L)), e
                }(ge),
                Re = function(t) {
                    function e(e) {
                        var n = t.call(this) || this;
                        return n.internalValue = e, n.typeOrder = pe.ArrayValue, n
                    }
                    return ye(e, t), e.prototype.value = function() {
                        return this.internalValue.map(function(t) {
                            return t.value()
                        })
                    }, e.prototype.forEach = function(t) {
                        this.internalValue.forEach(t)
                    }, e.prototype.equals = function(t) {
                        if (t instanceof e) {
                            if (this.internalValue.length !== t.internalValue.length) return !1;
                            for (var n = 0; n < this.internalValue.length; n++)
                                if (!this.internalValue[n].equals(t.internalValue[n])) return !1;
                            return !0
                        }
                        return !1
                    }, e.prototype.compareTo = function(t) {
                        if (t instanceof e) {
                            for (var n = Math.min(this.internalValue.length, t.internalValue.length), r = 0; r < n; r++) {
                                var o = this.internalValue[r].compareTo(t.internalValue[r]);
                                if (o) return o
                            }
                            return L(this.internalValue.length, t.internalValue.length)
                        }
                        return this.defaultCompareTo(t)
                    }, e.prototype.toString = function() {
                        return JSON.stringify(this.value())
                    }, e
                }(ge),
                Oe = Number,
                Me = Oe.MIN_SAFE_INTEGER || -(Math.pow(2, 53) - 1),
                _e = Oe.MAX_SAFE_INTEGER || Math.pow(2, 53) - 1,
                Pe = Oe.isInteger || function(t) {
                    return "number" == typeof t && isFinite(t) && Math.floor(t) === t
                },
                Le = function() {
                    function t(t, e, n, r, o, i) {
                        void 0 === e && (e = []), void 0 === n && (n = []), void 0 === r && (r = null), void 0 === o && (o = null), void 0 === i && (i = null), this.path = t, this.explicitOrderBy = e, this.filters = n, this.limit = r, this.startAt = o, this.endAt = i, this.memoizedCanonicalId = null, this.memoizedOrderBy = null, this.startAt && this.assertValidBound(this.startAt), this.endAt && this.assertValidBound(this.endAt)
                    }
                    return t.atPath = function(e) {
                        return new t(e)
                    }, Object.defineProperty(t.prototype, "orderBy", {
                        get: function() {
                            if (null === this.memoizedOrderBy) {
                                var t = this.getInequalityFilterField(),
                                    e = this.getFirstOrderByField();
                                if (null !== t && null === e) t.isKeyField() ? this.memoizedOrderBy = [Qe] : this.memoizedOrderBy = [new je(t), Qe];
                                else {
                                    c(null === t || null !== e && t.equals(e), "First orderBy should match inequality field."), this.memoizedOrderBy = [];
                                    for (var n = !1, r = 0, o = this.explicitOrderBy; r < o.length; r++) {
                                        var i = o[r];
                                        this.memoizedOrderBy.push(i), i.field.isKeyField() && (n = !0)
                                    }
                                    if (!n) {
                                        var a = this.explicitOrderBy.length > 0 ? this.explicitOrderBy[this.explicitOrderBy.length - 1].dir : Ve.ASCENDING;
                                        this.memoizedOrderBy.push(a === Ve.ASCENDING ? Qe : Ke)
                                    }
                                }
                            }
                            return this.memoizedOrderBy
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.addFilter = function(e) {
                        c(null == this.getInequalityFilterField() || !(e instanceof Be) || !e.isInequality() || e.field.equals(this.getInequalityFilterField()), "Query must only have one inequality field."), c(!se.isDocumentKey(this.path), "No filtering allowed for document query");
                        var n = this.filters.concat([e]);
                        return new t(this.path, this.explicitOrderBy.slice(), n, this.limit, this.startAt, this.endAt)
                    }, t.prototype.addOrderBy = function(e) {
                        c(!se.isDocumentKey(this.path), "No ordering allowed for document query"), c(!this.startAt && !this.endAt, "Bounds must be set after orderBy");
                        var n = this.explicitOrderBy.concat([e]);
                        return new t(this.path, n, this.filters.slice(), this.limit, this.startAt, this.endAt)
                    }, t.prototype.withLimit = function(e) {
                        return new t(this.path, this.explicitOrderBy.slice(), this.filters.slice(), e, this.startAt, this.endAt)
                    }, t.prototype.withStartAt = function(e) {
                        return new t(this.path, this.explicitOrderBy.slice(), this.filters.slice(), this.limit, e, this.endAt)
                    }, t.prototype.withEndAt = function(e) {
                        return new t(this.path, this.explicitOrderBy.slice(), this.filters.slice(), this.limit, this.startAt, e)
                    }, t.prototype.canonicalId = function() {
                        if (null === this.memoizedCanonicalId) {
                            var t = this.path.canonicalString();
                            t += "|f:";
                            for (var e = 0, n = this.filters; e < n.length; e++) t += n[e].canonicalId(), t += ",";
                            t += "|ob:";
                            for (var r = 0, o = this.orderBy; r < o.length; r++) t += o[r].canonicalId(), t += ",";
                            K(this.limit) || (t += "|l:", t += this.limit), this.startAt && (t += "|lb:", t += this.startAt.canonicalId()), this.endAt && (t += "|ub:", t += this.endAt.canonicalId()), this.memoizedCanonicalId = t
                        }
                        return this.memoizedCanonicalId
                    }, t.prototype.toString = function() {
                        var t = "Query(" + this.path.canonicalString();
                        return this.filters.length > 0 && (t += ", filters: [" + this.filters.join(", ") + "]"), K(this.limit) || (t += ", limit: " + this.limit), this.explicitOrderBy.length > 0 && (t += ", orderBy: [" + this.explicitOrderBy.join(", ") + "]"), this.startAt && (t += ", startAt: " + this.startAt.canonicalId()), this.endAt && (t += ", endAt: " + this.endAt.canonicalId()), t + ")"
                    }, t.prototype.equals = function(t) {
                        if (this.limit !== t.limit) return !1;
                        if (this.orderBy.length !== t.orderBy.length) return !1;
                        for (var e = 0; e < this.orderBy.length; e++)
                            if (!this.orderBy[e].equals(t.orderBy[e])) return !1;
                        if (this.filters.length !== t.filters.length) return !1;
                        for (var e = 0; e < this.filters.length; e++)
                            if (!this.filters[e].equals(t.filters[e])) return !1;
                        return !!this.path.equals(t.path) && !(null !== this.startAt ? !this.startAt.equals(t.startAt) : null !== t.startAt) && (null !== this.endAt ? this.endAt.equals(t.endAt) : null === t.endAt)
                    }, t.prototype.docComparator = function(t, e) {
                        for (var n = !1, r = 0, o = this.orderBy; r < o.length; r++) {
                            var i = o[r],
                                a = i.compare(t, e);
                            if (0 !== a) return a;
                            n = n || i.field.isKeyField()
                        }
                        return c(n, "orderBy used that doesn't compare on key field"), 0
                    }, t.prototype.matches = function(t) {
                        return this.matchesAncestor(t) && this.matchesOrderBy(t) && this.matchesFilters(t) && this.matchesBounds(t)
                    }, t.prototype.hasLimit = function() {
                        return !K(this.limit)
                    }, t.prototype.getFirstOrderByField = function() {
                        return this.explicitOrderBy.length > 0 ? this.explicitOrderBy[0].field : null
                    }, t.prototype.getInequalityFilterField = function() {
                        for (var t = 0, e = this.filters; t < e.length; t++) {
                            var n = e[t];
                            if (n instanceof Be && n.isInequality()) return n.field
                        }
                        return null
                    }, t.prototype.isDocumentQuery = function() {
                        return se.isDocumentKey(this.path) && 0 === this.filters.length
                    }, t.prototype.matchesAncestor = function(t) {
                        var e = t.key.path;
                        return se.isDocumentKey(this.path) ? this.path.equals(e) : this.path.isPrefixOf(e) && this.path.length === e.length - 1
                    }, t.prototype.matchesOrderBy = function(t) {
                        for (var e = 0, n = this.explicitOrderBy; e < n.length; e++) {
                            var r = n[e];
                            if (!r.field.isKeyField() && void 0 === t.field(r.field)) return !1
                        }
                        return !0
                    }, t.prototype.matchesFilters = function(t) {
                        for (var e = 0, n = this.filters; e < n.length; e++)
                            if (!n[e].matches(t)) return !1;
                        return !0
                    }, t.prototype.matchesBounds = function(t) {
                        return !(this.startAt && !this.startAt.sortsBeforeDocument(this.orderBy, t) || this.endAt && this.endAt.sortsBeforeDocument(this.orderBy, t))
                    }, t.prototype.assertValidBound = function(t) {
                        c(t.position.length <= this.orderBy.length, "Bound is longer than orderBy")
                    }, t
                }(),
                xe = function() {
                    function t(t) {
                        this.name = t
                    }
                    return t.fromString = function(e) {
                        switch (e) {
                            case "<":
                                return t.LESS_THAN;
                            case "<=":
                                return t.LESS_THAN_OR_EQUAL;
                            case "==":
                                return t.EQUAL;
                            case ">=":
                                return t.GREATER_THAN_OR_EQUAL;
                            case ">":
                                return t.GREATER_THAN;
                            default:
                                return u("Unknown relation: " + e)
                        }
                    }, t.prototype.toString = function() {
                        return this.name
                    }, t.prototype.equals = function(t) {
                        return this.name === t.name
                    }, t.LESS_THAN = new t("<"), t.LESS_THAN_OR_EQUAL = new t("<="), t.EQUAL = new t("=="), t.GREATER_THAN = new t(">"), t.GREATER_THAN_OR_EQUAL = new t(">="), t
                }(),
                Be = function() {
                    function t(t, e, n) {
                        this.field = t, this.op = e, this.value = n
                    }
                    return t.prototype.matches = function(t) {
                        if (this.field.isKeyField()) {
                            c(this.value instanceof ke, "Comparing on key, but filter value not a RefValue");
                            var e = this.value,
                                n = se.comparator(t.key, e.key);
                            return this.matchesComparison(n)
                        }
                        var r = t.field(this.field);
                        return void 0 !== r && this.matchesValue(r)
                    }, t.prototype.matchesValue = function(t) {
                        return this.value.typeOrder === t.typeOrder && this.matchesComparison(t.compareTo(this.value))
                    }, t.prototype.matchesComparison = function(t) {
                        switch (this.op) {
                            case xe.LESS_THAN:
                                return t < 0;
                            case xe.LESS_THAN_OR_EQUAL:
                                return t <= 0;
                            case xe.EQUAL:
                                return 0 === t;
                            case xe.GREATER_THAN:
                                return t > 0;
                            case xe.GREATER_THAN_OR_EQUAL:
                                return t >= 0;
                            default:
                                return u("Unknown relation op" + this.op)
                        }
                    }, t.prototype.isInequality = function() {
                        return this.op !== xe.EQUAL
                    }, t.prototype.canonicalId = function() {
                        return this.field.canonicalString() + "" + this.op + this.value
                    }, t.prototype.equals = function(e) {
                        return e instanceof t && this.op.equals(e.op) && this.field.equals(e.field) && this.value.equals(e.value)
                    }, t.prototype.toString = function() {
                        return this.field.canonicalString() + " " + this.op + " " + this.value.value()
                    }, t
                }(),
                Ue = function() {
                    function t(t) {
                        this.field = t
                    }
                    return t.prototype.matches = function(t) {
                        var e = t.field(this.field);
                        return void 0 !== e && null === e.value()
                    }, t.prototype.canonicalId = function() {
                        return this.field.canonicalString() + " IS null"
                    }, t.prototype.toString = function() {
                        return this.field.canonicalString() + " IS null"
                    }, t.prototype.equals = function(e) {
                        return e instanceof t && this.field.equals(e.field)
                    }, t
                }(),
                Fe = function() {
                    function t(t) {
                        this.field = t
                    }
                    return t.prototype.matches = function(t) {
                        var e = t.field(this.field).value();
                        return "number" == typeof e && isNaN(e)
                    }, t.prototype.canonicalId = function() {
                        return this.field.canonicalString() + " IS NaN"
                    }, t.prototype.toString = function() {
                        return this.field.canonicalString() + " IS NaN"
                    }, t.prototype.equals = function(e) {
                        return e instanceof t && this.field.equals(e.field)
                    }, t
                }(),
                Ve = function() {
                    function t(t) {
                        this.name = t
                    }
                    return t.prototype.toString = function() {
                        return this.name
                    }, t.ASCENDING = new t("asc"), t.DESCENDING = new t("desc"), t
                }(),
                qe = function() {
                    function t(t, e) {
                        this.position = t, this.before = e
                    }
                    return t.prototype.canonicalId = function() {
                        for (var t = this.before ? "b:" : "a:", e = 0, n = this.position; e < n.length; e++) t += "" + n[e];
                        return t
                    }, t.prototype.sortsBeforeDocument = function(t, e) {
                        c(this.position.length <= t.length, "Bound has more components than query's orderBy");
                        for (var n = 0, r = 0; r < this.position.length; r++) {
                            var o = t[r],
                                i = this.position[r];
                            if (o.field.isKeyField()) c(i instanceof ke, "Bound has a non-key value where the key path is being used."), n = se.comparator(i.key, e.key);
                            else {
                                var a = e.field(o.field);
                                c(void 0 !== a, "Field should exist since document matched the orderBy already."), n = i.compareTo(a)
                            }
                            if (o.dir === Ve.DESCENDING && (n *= -1), 0 !== n) break
                        }
                        return this.before ? n <= 0 : n < 0
                    }, t.prototype.equals = function(t) {
                        if (null === t) return !1;
                        if (this.before !== t.before || this.position.length !== t.position.length) return !1;
                        for (var e = 0; e < this.position.length; e++) {
                            var n = this.position[e],
                                r = t.position[e];
                            return n.equals(r)
                        }
                        return !0
                    }, t
                }(),
                je = function() {
                    function t(t, e) {
                        this.field = t, void 0 === e && (e = Ve.ASCENDING), this.dir = e, this.isKeyOrderBy = t.isKeyField()
                    }
                    return t.prototype.compare = function(t, e) {
                        var n = this.isKeyOrderBy ? ue.compareByKey(t, e) : ue.compareByField(this.field, t, e);
                        switch (this.dir) {
                            case Ve.ASCENDING:
                                return n;
                            case Ve.DESCENDING:
                                return -1 * n;
                            default:
                                return u("Unknown direction: " + this.dir)
                        }
                    }, t.prototype.canonicalId = function() {
                        return this.field.canonicalString() + "" + this.dir
                    }, t.prototype.toString = function() {
                        return this.field.canonicalString() + " (" + this.dir + ")"
                    }, t.prototype.equals = function(t) {
                        return this.dir === t.dir && this.field.equals(t.field)
                    }, t
                }(),
                Qe = new je(ae.keyField(), Ve.ASCENDING),
                Ke = new je(ae.keyField(), Ve.DESCENDING),
                We = RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/),
                Ge = function() {
                    function t(t, e) {
                        this.seconds = t, this.nanos = e, c(e >= 0, "timestamp nanoseconds out of range: " + e), c(e < 1e9, "timestamp nanoseconds out of range" + e), c(t >= -62135596800, "timestamp seconds out of range: " + t), c(t < 253402300800, "timestamp seconds out of range" + t)
                    }
                    return t.now = function() {
                        return t.fromEpochMilliseconds(Date.now())
                    }, t.fromDate = function(e) {
                        return t.fromEpochMilliseconds(e.getTime())
                    }, t.fromEpochMilliseconds = function(e) {
                        var n = Math.floor(e / 1e3);
                        return new t(n, 1e6 * (e - 1e3 * n))
                    }, t.fromISOString = function(e) {
                        var n = 0,
                            r = We.exec(e);
                        if (c(!!r, "invalid timestamp: " + e), r[1]) {
                            var o = r[1];
                            o = (o + "000000000").substr(0, 9), n = parseInt(o, 10)
                        }
                        var i = new Date(e);
                        return new t(Math.floor(i.getTime() / 1e3), n)
                    }, t.prototype.toDate = function() {
                        return new Date(this.toEpochMilliseconds())
                    }, t.prototype.toEpochMilliseconds = function() {
                        return 1e3 * this.seconds + this.nanos / 1e6
                    }, t.prototype.compareTo = function(t) {
                        return this.seconds === t.seconds ? L(this.nanos, t.nanos) : L(this.seconds, t.seconds)
                    }, t.prototype.equals = function(t) {
                        return t.seconds === this.seconds && t.nanos === this.nanos
                    }, t.prototype.toString = function() {
                        return "Timestamp(seconds=" + this.seconds + ", nanos=" + this.nanos + ")"
                    }, t
                }(),
                He = function() {
                    function t(t) {
                        this.timestamp = t
                    }
                    return t.fromMicroseconds = function(e) {
                        var n = Math.floor(e / 1e6);
                        return new t(new Ge(n, e % 1e6 * 1e3))
                    }, t.fromTimestamp = function(e) {
                        return new t(e)
                    }, t.forDeletedDoc = function() {
                        return t.MIN
                    }, t.prototype.compareTo = function(t) {
                        return this.timestamp.compareTo(t.timestamp)
                    }, t.prototype.equals = function(t) {
                        return this.timestamp.equals(t.timestamp)
                    }, t.prototype.toMicroseconds = function() {
                        return 1e6 * this.timestamp.seconds + this.timestamp.nanos / 1e3
                    }, t.prototype.toString = function() {
                        return "SnapshotVersion(" + this.timestamp + ")"
                    }, t.prototype.toTimestamp = function() {
                        return this.timestamp
                    }, t.MIN = new t(new Ge(0, 0)), t
                }();
            ! function(t) {
                t[t.Listen = 0] = "Listen", t[t.ExistenceFilterMismatch = 1] = "ExistenceFilterMismatch", t[t.LimboResolution = 2] = "LimboResolution"
            }(me || (me = {}));
            var ze, Xe = function() {
                    function t(t, e, n, r, o) {
                        void 0 === r && (r = He.MIN), void 0 === o && (o = h()), this.query = t, this.targetId = e, this.purpose = n, this.snapshotVersion = r, this.resumeToken = o
                    }
                    return t.prototype.update = function(e) {
                        return new t(this.query, this.targetId, this.purpose, e.snapshotVersion, e.resumeToken)
                    }, t.prototype.equals = function(t) {
                        return this.targetId === t.targetId && this.purpose === t.purpose && this.snapshotVersion.equals(t.snapshotVersion) && this.resumeToken === t.resumeToken && this.query.equals(t.query)
                    }, t
                }(),
                Ye = this && this.__extends || function() {
                    var t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    };
                    return function(e, n) {
                        function r() {
                            this.constructor = e
                        }
                        t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                    }
                }(),
                Je = function() {
                    function t(t) {
                        this.fields = t
                    }
                    return t.prototype.equals = function(t) {
                        return B(this.fields, t.fields)
                    }, t
                }(),
                $e = function() {
                    function t() {}
                    return t.prototype.equals = function(e) {
                        return e instanceof t
                    }, t.instance = new t, t
                }(),
                Ze = function() {
                    function t(t, e) {
                        this.field = t, this.transform = e
                    }
                    return t.prototype.equals = function(t) {
                        return this.field.equals(t.field) && this.transform.equals(t.transform)
                    }, t
                }(),
                tn = function() {
                    function t(t, e) {
                        this.version = t, this.transformResults = e
                    }
                    return t
                }();
            ! function(t) {
                t[t.Set = 0] = "Set", t[t.Patch = 1] = "Patch", t[t.Transform = 2] = "Transform", t[t.Delete = 3] = "Delete"
            }(ze || (ze = {}));
            var en, nn = function() {
                    function t(t, e) {
                        this.updateTime = t, this.exists = e, c(void 0 === t || void 0 === e, 'Precondition can specify "exists" or "updateTime" but not both')
                    }
                    return t.exists = function(e) {
                        return new t(void 0, e)
                    }, t.updateTime = function(e) {
                        return new t(e)
                    }, Object.defineProperty(t.prototype, "isNone", {
                        get: function() {
                            return void 0 === this.updateTime && void 0 === this.exists
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.isValidFor = function(t) {
                        return void 0 !== this.updateTime ? t instanceof ue && t.version.equals(this.updateTime) : void 0 !== this.exists ? this.exists ? t instanceof ue : null === t || t instanceof ce : (c(this.isNone, "Precondition should be empty"), !0)
                    }, t.prototype.equals = function(t) {
                        return x(this.updateTime, t.updateTime) && this.exists === t.exists
                    }, t.NONE = new t, t
                }(),
                rn = function() {
                    function t() {}
                    return t.prototype.verifyKeyMatches = function(t) {
                        null != t && c(t.key.equals(this.key), "Can only apply a mutation to a document with the same key")
                    }, t.getPostMutationVersion = function(t) {
                        return t instanceof ue ? t.version : He.MIN
                    }, t
                }(),
                on = function(t) {
                    function e(e, n, r) {
                        var o = t.call(this) || this;
                        return o.key = e, o.value = n, o.precondition = r, o.type = ze.Set, o
                    }
                    return Ye(e, t), e.prototype.applyToRemoteDocument = function(t, e) {
                        this.verifyKeyMatches(t), c(null == e.transformResults, "Transform results received by SetMutation.");
                        var n = rn.getPostMutationVersion(t);
                        return new ue(this.key, n, this.value, {
                            hasLocalMutations: !1
                        })
                    }, e.prototype.applyToLocalView = function(t, e) {
                        if (this.verifyKeyMatches(t), !this.precondition.isValidFor(t)) return t;
                        var n = rn.getPostMutationVersion(t);
                        return new ue(this.key, n, this.value, {
                            hasLocalMutations: !0
                        })
                    }, e.prototype.equals = function(t) {
                        return t instanceof e && this.key.equals(t.key) && this.value.equals(t.value) && this.precondition.equals(t.precondition)
                    }, e
                }(rn),
                an = function(t) {
                    function e(e, n, r, o) {
                        var i = t.call(this) || this;
                        return i.key = e, i.data = n, i.fieldMask = r, i.precondition = o, i.type = ze.Patch, i
                    }
                    return Ye(e, t), e.prototype.applyToRemoteDocument = function(t, e) {
                        if (this.verifyKeyMatches(t), c(null == e.transformResults, "Transform results received by PatchMutation."), !this.precondition.isValidFor(t)) return t;
                        var n = rn.getPostMutationVersion(t),
                            r = this.patchDocument(t);
                        return new ue(this.key, n, r, {
                            hasLocalMutations: !1
                        })
                    }, e.prototype.applyToLocalView = function(t, e) {
                        if (this.verifyKeyMatches(t), !this.precondition.isValidFor(t)) return t;
                        var n = rn.getPostMutationVersion(t),
                            r = this.patchDocument(t);
                        return new ue(this.key, n, r, {
                            hasLocalMutations: !0
                        })
                    }, e.prototype.equals = function(t) {
                        return t instanceof e && this.key.equals(t.key) && this.fieldMask.equals(t.fieldMask) && this.precondition.equals(t.precondition)
                    }, e.prototype.patchDocument = function(t) {
                        var e;
                        return e = t instanceof ue ? t.data : Ae.EMPTY, this.patchObject(e)
                    }, e.prototype.patchObject = function(t) {
                        for (var e = 0, n = this.fieldMask.fields; e < n.length; e++) {
                            var r = n[e],
                                o = this.data.field(r);
                            t = void 0 !== o ? t.set(r, o) : t.delete(r)
                        }
                        return t
                    }, e
                }(rn),
                sn = function(t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r.key = e, r.fieldTransforms = n, r.type = ze.Transform, r.precondition = nn.exists(!0), r
                    }
                    return Ye(e, t), e.prototype.applyToRemoteDocument = function(t, e) {
                        this.verifyKeyMatches(t), c(null != e.transformResults, "Transform results missing for TransformMutation.");
                        var n = e.transformResults;
                        if (!this.precondition.isValidFor(t)) return t;
                        var r = this.requireDocument(t),
                            o = this.transformObject(r.data, n);
                        return new ue(this.key, r.version, o, {
                            hasLocalMutations: !1
                        })
                    }, e.prototype.applyToLocalView = function(t, e) {
                        if (this.verifyKeyMatches(t), !this.precondition.isValidFor(t)) return t;
                        var n = this.requireDocument(t),
                            r = this.localTransformResults(e),
                            o = this.transformObject(n.data, r);
                        return new ue(this.key, n.version, o, {
                            hasLocalMutations: !0
                        })
                    }, e.prototype.equals = function(t) {
                        return t instanceof e && this.key.equals(t.key) && B(this.fieldTransforms, t.fieldTransforms) && this.precondition.equals(t.precondition)
                    }, e.prototype.requireDocument = function(t) {
                        c(t instanceof ue, "Unknown MaybeDocument type " + t);
                        var e = t;
                        return c(e.key.equals(this.key), "Can only transform a document with the same key"), e
                    }, e.prototype.localTransformResults = function(t) {
                        for (var e = [], n = 0, r = this.fieldTransforms; n < r.length; n++) {
                            var o = r[n],
                                i = o.transform;
                            if (!(i instanceof $e)) return u("Encountered unknown transform: " + i);
                            e.push(new Ce(t))
                        }
                        return e
                    }, e.prototype.transformObject = function(t, e) {
                        c(e.length === this.fieldTransforms.length, "TransformResults length mismatch.");
                        for (var n = 0; n < this.fieldTransforms.length; n++) {
                            var r = this.fieldTransforms[n],
                                o = r.transform,
                                i = r.field;
                            if (!(o instanceof $e)) return u("Encountered unknown transform: " + o);
                            t = t.set(i, e[n])
                        }
                        return t
                    }, e
                }(rn),
                un = function(t) {
                    function e(e, n) {
                        var r = t.call(this) || this;
                        return r.key = e, r.precondition = n, r.type = ze.Delete, r
                    }
                    return Ye(e, t), e.prototype.applyToRemoteDocument = function(t, e) {
                        return this.verifyKeyMatches(t), c(null == e.transformResults, "Transform results received by DeleteMutation."), new ce(this.key, He.MIN)
                    }, e.prototype.applyToLocalView = function(t, e) {
                        return this.verifyKeyMatches(t), this.precondition.isValidFor(t) ? (t && c(t.key.equals(this.key), "Can only apply mutation to document with same key"), new ce(this.key, He.forDeletedDoc())) : t
                    }, e.prototype.equals = function(t) {
                        return t instanceof e && this.key.equals(t.key) && this.precondition.equals(t.precondition)
                    }, e
                }(rn),
                cn = function() {
                    function t(t) {
                        this.count = t
                    }
                    return t.prototype.equals = function(t) {
                        return t && t.count === this.count
                    }, t
                }();
            ! function(t) {
                t[t.OK = 0] = "OK", t[t.CANCELLED = 1] = "CANCELLED", t[t.UNKNOWN = 2] = "UNKNOWN", t[t.INVALID_ARGUMENT = 3] = "INVALID_ARGUMENT", t[t.DEADLINE_EXCEEDED = 4] = "DEADLINE_EXCEEDED", t[t.NOT_FOUND = 5] = "NOT_FOUND", t[t.ALREADY_EXISTS = 6] = "ALREADY_EXISTS", t[t.PERMISSION_DENIED = 7] = "PERMISSION_DENIED", t[t.UNAUTHENTICATED = 16] = "UNAUTHENTICATED", t[t.RESOURCE_EXHAUSTED = 8] = "RESOURCE_EXHAUSTED", t[t.FAILED_PRECONDITION = 9] = "FAILED_PRECONDITION", t[t.ABORTED = 10] = "ABORTED", t[t.OUT_OF_RANGE = 11] = "OUT_OF_RANGE", t[t.UNIMPLEMENTED = 12] = "UNIMPLEMENTED", t[t.INTERNAL = 13] = "INTERNAL", t[t.UNAVAILABLE = 14] = "UNAVAILABLE", t[t.DATA_LOSS = 15] = "DATA_LOSS"
            }(en || (en = {}));
            var hn, ln = function() {
                    function t(t) {
                        this.comparator = t, this.data = new he(this.comparator)
                    }
                    return t.fromMapKeys = function(e) {
                        var n = new t(e.comparator);
                        return e.forEach(function(t) {
                            n = n.add(t)
                        }), n
                    }, t.prototype.has = function(t) {
                        return null !== this.data.get(t)
                    }, t.prototype.first = function() {
                        return this.data.minKey()
                    }, t.prototype.last = function() {
                        return this.data.maxKey()
                    }, Object.defineProperty(t.prototype, "size", {
                        get: function() {
                            return this.data.size
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.indexOf = function(t) {
                        return this.data.indexOf(t)
                    }, t.prototype.forEach = function(t) {
                        this.data.inorderTraversal(function(e, n) {
                            return t(e), !1
                        })
                    }, t.prototype.forEachInRange = function(t, e) {
                        for (var n = this.data.getIteratorFrom(t[0]); n.hasNext();) {
                            var r = n.getNext();
                            if (this.comparator(r.key, t[1]) >= 0) return;
                            e(r.key)
                        }
                    }, t.prototype.forEachWhile = function(t, e) {
                        var n;
                        for (n = void 0 !== e ? this.data.getIteratorFrom(e) : this.data.getIterator(); n.hasNext();)
                            if (!t(n.getNext().key)) return
                    }, t.prototype.firstAfterOrEqual = function(t) {
                        var e = this.data.getIteratorFrom(t);
                        return e.hasNext() ? e.getNext().key : null
                    }, t.prototype.add = function(t) {
                        return this.copy(this.data.remove(t).insert(t, !0))
                    }, t.prototype.delete = function(t) {
                        return this.has(t) ? this.copy(this.data.remove(t)) : this
                    }, t.prototype.isEmpty = function() {
                        return this.data.isEmpty()
                    }, t.prototype.unionWith = function(t) {
                        var e = this;
                        return t.forEach(function(t) {
                            e = e.add(t)
                        }), e
                    }, t.prototype.equals = function(e) {
                        if (!(e instanceof t)) return !1;
                        if (this.size !== e.size) return !1;
                        for (var n = this.data.getIterator(), r = e.data.getIterator(); n.hasNext();) {
                            var o = n.getNext().key,
                                i = r.getNext().key;
                            if (0 !== this.comparator(o, i)) return !1
                        }
                        return !0
                    }, t.prototype.toString = function() {
                        var t = [];
                        return this.forEach(function(e) {
                            return t.push(e)
                        }), "SortedSet(" + t + ")"
                    }, t.prototype.copy = function(e) {
                        var n = new t(this.comparator);
                        return n.data = e, n
                    }, t
                }(),
                fn = new he(se.comparator),
                dn = new he(se.comparator),
                pn = new he(se.comparator),
                yn = new ln(se.comparator),
                mn = function() {
                    function t(t, e, n) {
                        this.snapshotVersion = t, this.targetChanges = e, this.documentUpdates = n
                    }
                    return t.prototype.addDocumentUpdate = function(t) {
                        this.documentUpdates = this.documentUpdates.insert(t.key, t)
                    }, t.prototype.handleExistenceFilterMismatch = function(t) {
                        this.targetChanges[t] = {
                            mapping: new bn,
                            snapshotVersion: He.MIN,
                            currentStatusUpdate: hn.MarkNotCurrent,
                            resumeToken: h()
                        }
                    }, t
                }();
            ! function(t) {
                t[t.None = 0] = "None", t[t.MarkNotCurrent = 1] = "MarkNotCurrent", t[t.MarkCurrent = 2] = "MarkCurrent"
            }(hn || (hn = {}));
            var gn, vn = et(),
                bn = function() {
                    function t() {
                        this.docs = vn
                    }
                    return Object.defineProperty(t.prototype, "documents", {
                        get: function() {
                            return this.docs
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.add = function(t) {
                        this.docs = this.docs.add(t)
                    }, t.prototype.delete = function(t) {
                        this.docs = this.docs.delete(t)
                    }, t.prototype.equals = function(t) {
                        return null !== t && this.docs.equals(t.docs)
                    }, t
                }(),
                wn = function() {
                    function t() {
                        this.addedDocuments = vn, this.removedDocuments = vn
                    }
                    return t.prototype.applyToKeySet = function(t) {
                        var e = t;
                        return this.addedDocuments.forEach(function(t) {
                            return e = e.add(t)
                        }), this.removedDocuments.forEach(function(t) {
                            return e = e.delete(t)
                        }), e
                    }, t.prototype.add = function(t) {
                        this.addedDocuments = this.addedDocuments.add(t), this.removedDocuments = this.removedDocuments.delete(t)
                    }, t.prototype.delete = function(t) {
                        this.addedDocuments = this.addedDocuments.delete(t), this.removedDocuments = this.removedDocuments.add(t)
                    }, t.prototype.equals = function(t) {
                        return null !== t && this.addedDocuments.equals(t.addedDocuments) && this.removedDocuments.equals(t.removedDocuments)
                    }, t
                }(),
                In = function() {
                    function t(t, e, n, r) {
                        this.updatedTargetIds = t, this.removedTargetIds = e, this.key = n, this.newDoc = r
                    }
                    return t
                }(),
                Tn = function() {
                    function t(t, e) {
                        this.targetId = t, this.existenceFilter = e
                    }
                    return t
                }();
            ! function(t) {
                t[t.NoChange = 0] = "NoChange", t[t.Added = 1] = "Added", t[t.Removed = 2] = "Removed", t[t.Current = 3] = "Current", t[t.Reset = 4] = "Reset"
            }(gn || (gn = {}));
            var En = function() {
                    function t(t, e, n, r) {
                        void 0 === n && (n = h()), void 0 === r && (r = null), this.state = t, this.targetIds = e, this.resumeToken = n, this.cause = r
                    }
                    return t
                }(),
                Sn = function() {
                    function t(t, e, n) {
                        this.snapshotVersion = t, this.listenTargets = e, this.existenceFilters = {}, this.targetChanges = {}, this.documentUpdates = $(), this.frozen = !1, this.pendingTargetResponses = g(n)
                    }
                    return t.prototype.add = function(t) {
                        c(!this.frozen, "Trying to modify frozen WatchChangeAggregator."), t instanceof In ? this.addDocumentChange(t) : t instanceof En ? this.addTargetChange(t) : t instanceof Tn ? this.addExistenceFilterChange(t) : u("Unknown watch change: " + t)
                    }, t.prototype.addChanges = function(t) {
                        var e = this;
                        c(!this.frozen, "Trying to modify frozen WatchChangeAggregator."), t.forEach(function(t) {
                            return e.add(t)
                        })
                    }, t.prototype.createRemoteEvent = function() {
                        var t = this,
                            e = this.targetChanges;
                        return p(this.targetChanges, function(n) {
                            t.isActiveTarget(n) || delete e[n]
                        }), this.frozen = !0, new mn(this.snapshotVersion, e, this.documentUpdates)
                    }, t.prototype.ensureTargetChange = function(t) {
                        var e = this.targetChanges[t];
                        return e || (e = {
                            currentStatusUpdate: hn.None,
                            snapshotVersion: this.snapshotVersion,
                            mapping: new wn,
                            resumeToken: h()
                        }, this.targetChanges[t] = e), e
                    }, t.prototype.isActiveTarget = function(t) {
                        return !f(this.pendingTargetResponses, t) && f(this.listenTargets, t)
                    }, t.prototype.addDocumentChange = function(t) {
                        for (var e = !1, n = 0, r = t.updatedTargetIds; n < r.length; n++) {
                            var o = r[n];
                            if (this.isActiveTarget(o)) {
                                var i = this.ensureTargetChange(o);
                                i.mapping.add(t.key), e = !0
                            }
                        }
                        for (var a = 0, s = t.removedTargetIds; a < s.length; a++) {
                            var o = s[a];
                            if (this.isActiveTarget(o)) {
                                var i = this.ensureTargetChange(o);
                                i.mapping.delete(t.key), e = !0
                            }
                        }
                        t.newDoc && e && (this.documentUpdates = this.documentUpdates.insert(t.key, t.newDoc))
                    }, t.prototype.addTargetChange = function(t) {
                        var e = this;
                        t.targetIds.forEach(function(n) {
                            var r = e.ensureTargetChange(n);
                            switch (t.state) {
                                case gn.NoChange:
                                    e.isActiveTarget(n) && nt(r, t.resumeToken);
                                    break;
                                case gn.Added:
                                    e.recordTargetResponse(n), f(e.pendingTargetResponses, n) || (r.mapping = new wn, r.currentStatusUpdate = hn.None, delete e.existenceFilters[n]), nt(r, t.resumeToken);
                                    break;
                                case gn.Removed:
                                    e.recordTargetResponse(n), c(!t.cause, "WatchChangeAggregator does not handle errored targets");
                                    break;
                                case gn.Current:
                                    e.isActiveTarget(n) && (r.currentStatusUpdate = hn.MarkCurrent, nt(r, t.resumeToken));
                                    break;
                                case gn.Reset:
                                    e.isActiveTarget(n) && (r.mapping = new bn, nt(r, t.resumeToken));
                                    break;
                                default:
                                    u("Unknown target watch change state: " + t.state)
                            }
                        })
                    }, t.prototype.recordTargetResponse = function(t) {
                        var e = (this.pendingTargetResponses[t] || 0) - 1;
                        0 === e ? delete this.pendingTargetResponses[t] : this.pendingTargetResponses[t] = e
                    }, t.prototype.addExistenceFilterChange = function(t) {
                        this.isActiveTarget(t.targetId) && (this.existenceFilters[t.targetId] = t.existenceFilter)
                    }, t
                }(),
                Cn = function() {
                    var t = {};
                    return t[Ve.ASCENDING.name] = "ASCENDING", t[Ve.DESCENDING.name] = "DESCENDING", t
                }(),
                Dn = function() {
                    var t = {};
                    return t[xe.LESS_THAN.name] = "LESS_THAN", t[xe.LESS_THAN_OR_EQUAL.name] = "LESS_THAN_OR_EQUAL", t[xe.GREATER_THAN.name] = "GREATER_THAN", t[xe.GREATER_THAN_OR_EQUAL.name] = "GREATER_THAN_OR_EQUAL", t[xe.EQUAL.name] = "EQUAL", t
                }(),
                kn = function() {
                    function t(t, e) {
                        this.databaseId = t, this.options = e
                    }
                    return t.prototype.emptyByteString = function() {
                        return this.options.useProto3Json ? "" : new Uint8Array(0)
                    }, t.prototype.unsafeCastProtoByteString = function(t) {
                        return t
                    }, t.prototype.fromRpcStatus = function(t) {
                        var e = void 0 === t.code ? Ht.UNKNOWN : X(t.code);
                        return new zt(e, t.message || "")
                    }, t.prototype.toInt32Value = function(t) {
                        return K(t) ? void 0 : {
                            value: t
                        }
                    }, t.prototype.fromInt32Value = function(t) {
                        var e;
                        return e = "object" == typeof t ? t.value : t, K(e) ? null : e
                    }, t.prototype.toTimestamp = function(t) {
                        return {
                            seconds: t.seconds,
                            nanos: t.nanos
                        }
                    }, t.prototype.fromTimestamp = function(t) {
                        if ("string" == typeof t) return Ge.fromISOString(t);
                        c(!!t, "Cannot deserialize null or undefined timestamp.");
                        var e = ot(t.seconds || "0"),
                            n = t.nanos || 0;
                        return new Ge(e, n)
                    }, t.prototype.toBytes = function(t) {
                        return this.options.useProto3Json ? t.toBase64() : this.unsafeCastProtoByteString(t.toUint8Array())
                    }, t.prototype.fromBlob = function(t) {
                        return "string" == typeof t ? (c(this.options.useProto3Json, "Expected bytes to be passed in as Uint8Array, but got a string instead."), Yt.fromBase64String(t)) : (c(!this.options.useProto3Json, "Expected bytes to be passed in as string, but got something else instead."), Yt.fromUint8Array(t))
                    }, t.prototype.toVersion = function(t) {
                        return this.toTimestamp(t.toTimestamp())
                    }, t.prototype.fromVersion = function(t) {
                        return c(!!t, "Trying to deserialize version that isn't set"), He.fromTimestamp(this.fromTimestamp(t))
                    }, t.prototype.toResourceName = function(t, e) {
                        return this.fullyQualifiedPrefixPath(t).child("documents").child(e).canonicalString()
                    }, t.prototype.fromResourceName = function(t) {
                        var e = oe.fromString(t);
                        return c(this.isValidResourceName(e), "Tried to deserialize invalid key " + e), e
                    }, t.prototype.toName = function(t) {
                        return this.toResourceName(this.databaseId, t.path)
                    }, t.prototype.fromName = function(t) {
                        var e = this.fromResourceName(t);
                        return c(e.get(1) === this.databaseId.projectId, "Tried to deserialize key from different project: " + e.get(1) + " vs " + this.databaseId.projectId), c(!e.get(3) && !this.databaseId.database || e.get(3) === this.databaseId.database, "Tried to deserialize key from different database: " + e.get(3) + " vs " + this.databaseId.database), new se(this.extractLocalPathFromResourceName(e))
                    }, t.prototype.toQueryPath = function(t) {
                        return 0 === t.length ? this.encodedDatabaseId : this.toResourceName(this.databaseId, t)
                    }, t.prototype.fromQueryPath = function(t) {
                        var e = this.fromResourceName(t);
                        return 4 === e.length ? oe.EMPTY_PATH : this.extractLocalPathFromResourceName(e)
                    }, Object.defineProperty(t.prototype, "encodedDatabaseId", {
                        get: function() {
                            return new oe(["projects", this.databaseId.projectId, "databases", this.databaseId.database]).canonicalString()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.fullyQualifiedPrefixPath = function(t) {
                        return new oe(["projects", t.projectId, "databases", t.database])
                    }, t.prototype.extractLocalPathFromResourceName = function(t) {
                        return c(t.length > 4 && "documents" === t.get(4), "tried to deserialize invalid key " + t), t.popFirst(5)
                    }, t.prototype.isValidResourceName = function(t) {
                        return t.length >= 4 && "projects" === t.get(0) && "databases" === t.get(2)
                    }, t.prototype.toValue = function(t) {
                        if (t instanceof ve) return {
                            nullValue: "NULL_VALUE"
                        };
                        if (t instanceof be) return {
                            booleanValue: t.value()
                        };
                        if (t instanceof Ie) return {
                            integerValue: "" + t.value()
                        };
                        if (t instanceof Te) {
                            var e = t.value();
                            if (this.options.useProto3Json) {
                                if (isNaN(e)) return {
                                    doubleValue: "NaN"
                                };
                                if (e === 1 / 0) return {
                                    doubleValue: "Infinity"
                                };
                                if (e === -1 / 0) return {
                                    doubleValue: "-Infinity"
                                }
                            }
                            return {
                                doubleValue: t.value()
                            }
                        }
                        return t instanceof Ee ? {
                            stringValue: t.value()
                        } : t instanceof Ae ? {
                            mapValue: this.toMapValue(t)
                        } : t instanceof Re ? {
                            arrayValue: this.toArrayValue(t)
                        } : t instanceof Se ? {
                            timestampValue: this.toTimestamp(t.internalValue)
                        } : t instanceof Ne ? {
                            geoPointValue: {
                                latitude: t.value().latitude,
                                longitude: t.value().longitude
                            }
                        } : t instanceof De ? {
                            bytesValue: this.toBytes(t.value())
                        } : t instanceof ke ? {
                            referenceValue: this.toResourceName(t.databaseId, t.key.path)
                        } : u("Unknown FieldValue " + JSON.stringify(t))
                    }, t.prototype.fromValue = function(t) {
                        var e = this,
                            n = t.value_type;
                        if (it(t, n, "nullValue")) return ve.INSTANCE;
                        if (it(t, n, "booleanValue")) return be.of(t.booleanValue);
                        if (it(t, n, "integerValue")) return new Ie(ot(t.integerValue));
                        if (it(t, n, "doubleValue")) {
                            if (this.options.useProto3Json) {
                                if ("NaN" === t.doubleValue) return Te.NAN;
                                if ("Infinity" === t.doubleValue) return Te.POSITIVE_INFINITY;
                                if ("-Infinity" === t.doubleValue) return Te.NEGATIVE_INFINITY
                            }
                            return new Te(t.doubleValue)
                        }
                        if (it(t, n, "stringValue")) return new Ee(t.stringValue);
                        if (it(t, n, "mapValue")) return this.fromFields(t.mapValue.fields || {});
                        if (it(t, n, "arrayValue")) {
                            rt(t.arrayValue, "arrayValue");
                            var r = t.arrayValue.values || [];
                            return new Re(r.map(function(t) {
                                return e.fromValue(t)
                            }))
                        }
                        if (it(t, n, "timestampValue")) return rt(t.timestampValue, "timestampValue"), new Se(this.fromTimestamp(t.timestampValue));
                        if (it(t, n, "geoPointValue")) {
                            rt(t.geoPointValue, "geoPointValue");
                            var o = t.geoPointValue.latitude || 0,
                                i = t.geoPointValue.longitude || 0;
                            return new Ne(new $t(o, i))
                        }
                        if (it(t, n, "bytesValue")) {
                            rt(t.bytesValue, "bytesValue");
                            var a = this.fromBlob(t.bytesValue);
                            return new De(a)
                        }
                        if (it(t, n, "referenceValue")) {
                            rt(t.referenceValue, "referenceValue");
                            var s = this.fromResourceName(t.referenceValue),
                                c = new ee(s.get(1), s.get(3)),
                                h = new se(this.extractLocalPathFromResourceName(s));
                            return new ke(c, h)
                        }
                        return u("Unknown Value proto " + JSON.stringify(t))
                    }, t.prototype.toMutationDocument = function(t, e) {
                        return {
                            name: this.toName(t),
                            fields: this.toFields(e)
                        }
                    }, t.prototype.toDocument = function(t) {
                        return c(!t.hasLocalMutations, "Can't serialize documents with mutations."), {
                            name: this.toName(t.key),
                            fields: this.toFields(t.data),
                            updateTime: this.toTimestamp(t.version.toTimestamp())
                        }
                    }, t.prototype.fromDocument = function(t) {
                        return new ue(this.fromName(t.name), this.fromVersion(t.updateTime), this.fromFields(t.fields || {}), {
                            hasLocalMutations: !1
                        })
                    }, t.prototype.toFields = function(t) {
                        var e = this,
                            n = {};
                        return t.forEach(function(t, r) {
                            n[t] = e.toValue(r)
                        }), n
                    }, t.prototype.fromFields = function(t) {
                        var e = this,
                            n = t,
                            r = Ae.EMPTY;
                        return y(n, function(t, n) {
                            r = r.set(new ae([t]), e.fromValue(n))
                        }), r
                    }, t.prototype.toMapValue = function(t) {
                        return {
                            fields: this.toFields(t)
                        }
                    }, t.prototype.toArrayValue = function(t) {
                        var e = this,
                            n = [];
                        return t.forEach(function(t) {
                            n.push(e.toValue(t))
                        }), {
                            values: n
                        }
                    }, t.prototype.fromFound = function(t) {
                        c(!!t.found, "Tried to deserialize a found document from a missing document."), rt(t.found.name, "doc.found.name"), rt(t.found.updateTime, "doc.found.updateTime");
                        var e = this.fromName(t.found.name),
                            n = this.fromVersion(t.found.updateTime),
                            r = this.fromFields(t.found.fields || {});
                        return new ue(e, n, r, {
                            hasLocalMutations: !1
                        })
                    }, t.prototype.fromMissing = function(t) {
                        c(!!t.missing, "Tried to deserialize a missing document from a found document."), c(!!t.readTime, "Tried to deserialize a missing document without a read time.");
                        var e = this.fromName(t.missing),
                            n = this.fromVersion(t.readTime);
                        return new ce(e, n)
                    }, t.prototype.fromMaybeDocument = function(t) {
                        var e = t.result;
                        return it(t, e, "found") ? this.fromFound(t) : it(t, e, "missing") ? this.fromMissing(t) : u("invalid batch get response: " + JSON.stringify(t))
                    }, t.prototype.toWatchTargetChangeState = function(t) {
                        switch (t) {
                            case gn.Added:
                                return "ADD";
                            case gn.Current:
                                return "CURRENT";
                            case gn.NoChange:
                                return "NO_CHANGE";
                            case gn.Removed:
                                return "REMOVE";
                            case gn.Reset:
                                return "RESET";
                            default:
                                return u("Unknown WatchTargetChangeState: " + t)
                        }
                    }, t.prototype.toTestWatchChange = function(t) {
                        if (t instanceof Tn) return {
                            filter: {
                                count: t.existenceFilter.count,
                                targetId: t.targetId
                            }
                        };
                        if (t instanceof In) {
                            if (t.newDoc instanceof ue) {
                                var e = t.newDoc;
                                return {
                                    documentChange: {
                                        document: {
                                            name: this.toName(e.key),
                                            fields: this.toFields(e.data),
                                            updateTime: this.toVersion(e.version)
                                        },
                                        targetIds: t.updatedTargetIds,
                                        removedTargetIds: t.removedTargetIds
                                    }
                                }
                            }
                            if (t.newDoc instanceof ce) {
                                var e = t.newDoc;
                                return {
                                    documentDelete: {
                                        document: this.toName(e.key),
                                        readTime: this.toVersion(e.version),
                                        removedTargetIds: t.removedTargetIds
                                    }
                                }
                            }
                            if (null === t.newDoc) return {
                                documentRemove: {
                                    document: this.toName(t.key),
                                    removedTargetIds: t.removedTargetIds
                                }
                            }
                        }
                        if (t instanceof En) {
                            var n = void 0;
                            return t.cause && (n = {
                                code: Y(t.cause.code),
                                message: t.cause.message
                            }), {
                                targetChange: {
                                    targetChangeType: this.toWatchTargetChangeState(t.state),
                                    targetIds: t.targetIds,
                                    resumeToken: this.unsafeCastProtoByteString(t.resumeToken),
                                    cause: n
                                }
                            }
                        }
                        return u("Unrecognized watch change: " + JSON.stringify(t))
                    }, t.prototype.fromWatchChange = function(t) {
                        var e, n = t.response_type;
                        if (it(t, n, "targetChange")) {
                            rt(t.targetChange, "targetChange");
                            var r = this.fromWatchTargetChangeState(t.targetChange.targetChangeType || "NO_CHANGE"),
                                o = t.targetChange.targetIds || [],
                                i = t.targetChange.resumeToken || this.emptyByteString(),
                                a = t.targetChange.cause,
                                s = a && this.fromRpcStatus(a);
                            e = new En(r, o, i, s || null)
                        } else if (it(t, n, "documentChange")) {
                            rt(t.documentChange, "documentChange"), rt(t.documentChange.document, "documentChange.name"), rt(t.documentChange.document.name, "documentChange.document.name"), rt(t.documentChange.document.updateTime, "documentChange.document.updateTime");
                            var c = t.documentChange,
                                h = this.fromName(c.document.name),
                                l = this.fromVersion(c.document.updateTime),
                                f = this.fromFields(c.document.fields || {}),
                                d = new ue(h, l, f, {
                                    hasLocalMutations: !1
                                }),
                                p = c.targetIds || [],
                                y = c.removedTargetIds || [];
                            e = new In(p, y, d.key, d)
                        } else if (it(t, n, "documentDelete")) {
                            rt(t.documentDelete, "documentDelete"), rt(t.documentDelete.document, "documentDelete.document");
                            var m = t.documentDelete,
                                h = this.fromName(m.document),
                                l = m.readTime ? this.fromVersion(m.readTime) : He.forDeletedDoc(),
                                d = new ce(h, l),
                                y = m.removedTargetIds || [];
                            e = new In([], y, d.key, d)
                        } else if (it(t, n, "documentRemove")) {
                            rt(t.documentRemove, "documentRemove"), rt(t.documentRemove.document, "documentRemove");
                            var g = t.documentRemove,
                                h = this.fromName(g.document),
                                y = g.removedTargetIds || [];
                            e = new In([], y, h, null)
                        } else {
                            if (!it(t, n, "filter")) return u("Unknown change type " + JSON.stringify(t));
                            rt(t.filter, "filter"), rt(t.filter.targetId, "filter.targetId");
                            var v = t.filter,
                                b = v.count || 0,
                                w = new cn(b),
                                I = v.targetId;
                            e = new Tn(I, w)
                        }
                        return e
                    }, t.prototype.fromWatchTargetChangeState = function(t) {
                        return "NO_CHANGE" === t ? gn.NoChange : "ADD" === t ? gn.Added : "REMOVE" === t ? gn.Removed : "CURRENT" === t ? gn.Current : "RESET" === t ? gn.Reset : u("Got unexpected TargetChange.state: " + t)
                    }, t.prototype.versionFromListenResponse = function(t) {
                        if (!it(t, t.response_type, "targetChange")) return He.MIN;
                        var e = t.targetChange;
                        return e.targetIds && e.targetIds.length ? He.MIN : e.readTime ? this.fromVersion(e.readTime) : He.MIN
                    }, t.prototype.toMutation = function(t) {
                        var e, n = this;
                        if (t instanceof on) e = {
                            update: this.toMutationDocument(t.key, t.value)
                        };
                        else if (t instanceof un) e = {
                            delete: this.toName(t.key)
                        };
                        else if (t instanceof an) e = {
                            update: this.toMutationDocument(t.key, t.data),
                            updateMask: this.toDocumentMask(t.fieldMask)
                        };
                        else {
                            if (!(t instanceof sn)) return u("Unknown mutation type " + t.type);
                            e = {
                                transform: {
                                    document: this.toName(t.key),
                                    fieldTransforms: t.fieldTransforms.map(function(t) {
                                        return n.toFieldTransform(t)
                                    })
                                }
                            }
                        }
                        return t.precondition.isNone || (e.currentDocument = this.toPrecondition(t.precondition)), e
                    }, t.prototype.fromMutation = function(t) {
                        var e = this,
                            n = t.currentDocument ? this.fromPrecondition(t.currentDocument) : nn.NONE;
                        if (t.update) {
                            rt(t.update.name, "name");
                            var r = this.fromName(t.update.name),
                                o = this.fromFields(t.update.fields || {});
                            if (t.updateMask) {
                                var i = this.fromDocumentMask(t.updateMask);
                                return new an(r, o, i, n)
                            }
                            return new on(r, o, n)
                        }
                        if (t.delete) {
                            var r = this.fromName(t.delete);
                            return new un(r, n)
                        }
                        if (t.transform) {
                            var r = this.fromName(t.transform.document),
                                a = t.transform.fieldTransforms.map(function(t) {
                                    return e.fromFieldTransform(t)
                                });
                            return c(!0 === n.exists, 'Transforms only support precondition "exists == true"'), new sn(r, a)
                        }
                        return u("unknown mutation proto: " + JSON.stringify(t))
                    }, t.prototype.toPrecondition = function(t) {
                        return c(!t.isNone, "Can't serialize an empty precondition"), void 0 !== t.updateTime ? {
                            updateTime: this.toVersion(t.updateTime)
                        } : void 0 !== t.exists ? {
                            exists: t.exists
                        } : u("Unknown precondition")
                    }, t.prototype.fromPrecondition = function(t) {
                        return void 0 !== t.updateTime ? nn.updateTime(this.fromVersion(t.updateTime)) : void 0 !== t.exists ? nn.exists(t.exists) : nn.NONE
                    }, t.prototype.fromWriteResult = function(t) {
                        var e = this,
                            n = t.updateTime ? this.fromVersion(t.updateTime) : null,
                            r = null;
                        return t.transformResults && t.transformResults.length > 0 && (r = t.transformResults.map(function(t) {
                            return e.fromValue(t)
                        })), new tn(n, r)
                    }, t.prototype.fromWriteResults = function(t) {
                        var e = this;
                        return (t || []).map(function(t) {
                            return e.fromWriteResult(t)
                        })
                    }, t.prototype.toFieldTransform = function(t) {
                        return c(t.transform instanceof $e, "Unknown transform: " + t.transform), {
                            fieldPath: t.field.canonicalString(),
                            setToServerValue: "REQUEST_TIME"
                        }
                    }, t.prototype.fromFieldTransform = function(t) {
                        c("REQUEST_TIME" === t.setToServerValue, "Unknown transform proto: " + JSON.stringify(t));
                        var e = ae.fromServerFormat(t.fieldPath);
                        return new Ze(e, $e.instance)
                    }, t.prototype.toDocumentsTarget = function(t) {
                        return {
                            documents: [this.toQueryPath(t.path)]
                        }
                    }, t.prototype.fromDocumentsTarget = function(t) {
                        var e = t.documents.length;
                        c(1 === e, "DocumentsTarget contained other than 1 document: " + e);
                        var n = t.documents[0];
                        return Le.atPath(this.fromQueryPath(n))
                    }, t.prototype.toQueryTarget = function(t) {
                        var e = {
                            structuredQuery: {}
                        };
                        if (t.path.isEmpty()) e.parent = this.toQueryPath(oe.EMPTY_PATH);
                        else {
                            var n = t.path;
                            c(n.length % 2 != 0, "Document queries with filters are not supported."), e.parent = this.toQueryPath(n.popLast()), e.structuredQuery.from = [{
                                collectionId: n.lastSegment()
                            }]
                        }
                        var r = this.toFilter(t.filters);
                        r && (e.structuredQuery.where = r);
                        var o = this.toOrder(t.orderBy);
                        o && (e.structuredQuery.orderBy = o);
                        var i = this.toInt32Value(t.limit);
                        return void 0 !== i && (e.structuredQuery.limit = i), t.startAt && (e.structuredQuery.startAt = this.toCursor(t.startAt)), t.endAt && (e.structuredQuery.endAt = this.toCursor(t.endAt)), e
                    }, t.prototype.fromQueryTarget = function(t) {
                        var e = this.fromQueryPath(t.parent),
                            n = t.structuredQuery,
                            r = n.from ? n.from.length : 0;
                        if (r > 0) {
                            c(1 === r, "StructuredQuery.from with more than one collection is not supported.");
                            var o = n.from[0];
                            e = e.child(o.collectionId)
                        }
                        var i = [];
                        n.where && (i = this.fromFilter(n.where));
                        var a = [];
                        n.orderBy && (a = this.fromOrder(n.orderBy));
                        var s = null;
                        n.limit && (s = this.fromInt32Value(n.limit));
                        var u = null;
                        n.startAt && (u = this.fromCursor(n.startAt));
                        var h = null;
                        return n.endAt && (h = this.fromCursor(n.endAt)), new Le(e, a, i, s, u, h)
                    }, t.prototype.toListenRequestLabels = function(t) {
                        var e = this.toLabel(t.purpose);
                        return null == e ? null : {
                            "goog-listen-tags": e
                        }
                    }, t.prototype.toLabel = function(t) {
                        switch (t) {
                            case me.Listen:
                                return null;
                            case me.ExistenceFilterMismatch:
                                return "existence-filter-mismatch";
                            case me.LimboResolution:
                                return "limbo-document";
                            default:
                                return u("Unrecognized query purpose: " + t)
                        }
                    }, t.prototype.toTarget = function(t) {
                        var e, n = t.query;
                        return e = n.isDocumentQuery() ? {
                            documents: this.toDocumentsTarget(n)
                        } : {
                            query: this.toQueryTarget(n)
                        }, e.targetId = t.targetId, t.resumeToken.length > 0 && (e.resumeToken = this.unsafeCastProtoByteString(t.resumeToken)), e
                    }, t.prototype.toFilter = function(t) {
                        var e = this;
                        if (0 !== t.length) {
                            var n = t.map(function(t) {
                                return t instanceof Be ? e.toRelationFilter(t) : e.toUnaryFilter(t)
                            });
                            return 1 === n.length ? n[0] : {
                                compositeFilter: {
                                    op: "AND",
                                    filters: n
                                }
                            }
                        }
                    }, t.prototype.fromFilter = function(t) {
                        var e = this;
                        return t ? void 0 !== t.unaryFilter ? [this.fromUnaryFilter(t)] : void 0 !== t.fieldFilter ? [this.fromRelationFilter(t)] : void 0 !== t.compositeFilter ? t.compositeFilter.filters.map(function(t) {
                            return e.fromFilter(t)
                        }).reduce(function(t, e) {
                            return t.concat(e)
                        }) : u("Unknown filter: " + JSON.stringify(t)) : []
                    }, t.prototype.toOrder = function(t) {
                        var e = this;
                        if (0 !== t.length) return t.map(function(t) {
                            return e.toPropertyOrder(t)
                        })
                    }, t.prototype.fromOrder = function(t) {
                        var e = this;
                        return t.map(function(t) {
                            return e.fromPropertyOrder(t)
                        })
                    }, t.prototype.toCursor = function(t) {
                        var e = this;
                        return {
                            before: t.before,
                            values: t.position.map(function(t) {
                                return e.toValue(t)
                            })
                        }
                    }, t.prototype.fromCursor = function(t) {
                        var e = this,
                            n = !!t.before,
                            r = t.values.map(function(t) {
                                return e.fromValue(t)
                            });
                        return new qe(r, n)
                    }, t.prototype.toDirection = function(t) {
                        return Cn[t.name]
                    }, t.prototype.fromDirection = function(t) {
                        switch (t) {
                            case "ASCENDING":
                                return Ve.ASCENDING;
                            case "DESCENDING":
                                return Ve.DESCENDING;
                            default:
                                return
                        }
                    }, t.prototype.toOperatorName = function(t) {
                        return Dn[t.name]
                    }, t.prototype.fromOperatorName = function(t) {
                        switch (t) {
                            case "EQUAL":
                                return xe.EQUAL;
                            case "GREATER_THAN":
                                return xe.GREATER_THAN;
                            case "GREATER_THAN_OR_EQUAL":
                                return xe.GREATER_THAN_OR_EQUAL;
                            case "LESS_THAN":
                                return xe.LESS_THAN;
                            case "LESS_THAN_OR_EQUAL":
                                return xe.LESS_THAN_OR_EQUAL;
                            case "OPERATOR_UNSPECIFIED":
                                return u("Unspecified relation");
                            default:
                                return u("Unknown relation")
                        }
                    }, t.prototype.toFieldPathReference = function(t) {
                        return {
                            fieldPath: t.canonicalString()
                        }
                    }, t.prototype.fromFieldPathReference = function(t) {
                        return ae.fromServerFormat(t.fieldPath)
                    }, t.prototype.toPropertyOrder = function(t) {
                        return {
                            field: this.toFieldPathReference(t.field),
                            direction: this.toDirection(t.dir)
                        }
                    }, t.prototype.fromPropertyOrder = function(t) {
                        return new je(this.fromFieldPathReference(t.field), this.fromDirection(t.direction))
                    }, t.prototype.toRelationFilter = function(t) {
                        return t instanceof Be ? {
                            fieldFilter: {
                                field: this.toFieldPathReference(t.field),
                                op: this.toOperatorName(t.op),
                                value: this.toValue(t.value)
                            }
                        } : u("Unrecognized filter: " + JSON.stringify(t))
                    }, t.prototype.fromRelationFilter = function(t) {
                        return new Be(this.fromFieldPathReference(t.fieldFilter.field), this.fromOperatorName(t.fieldFilter.op), this.fromValue(t.fieldFilter.value))
                    }, t.prototype.toUnaryFilter = function(t) {
                        return t instanceof Fe ? {
                            unaryFilter: {
                                field: this.toFieldPathReference(t.field),
                                op: "IS_NAN"
                            }
                        } : t instanceof Ue ? {
                            unaryFilter: {
                                field: this.toFieldPathReference(t.field),
                                op: "IS_NULL"
                            }
                        } : u("Unrecognized filter: " + JSON.stringify(t))
                    }, t.prototype.fromUnaryFilter = function(t) {
                        switch (t.unaryFilter.op) {
                            case "IS_NAN":
                                var e = this.fromFieldPathReference(t.unaryFilter.field);
                                return new Fe(e);
                            case "IS_NULL":
                                var n = this.fromFieldPathReference(t.unaryFilter.field);
                                return new Ue(n);
                            case "OPERATOR_UNSPECIFIED":
                                return u("Unspecified filter");
                            default:
                                return u("Unknown filter")
                        }
                    }, t.prototype.toDocumentMask = function(t) {
                        return {
                            fieldPaths: t.fields.map(function(t) {
                                return t.canonicalString()
                            })
                        }
                    }, t.prototype.fromDocumentMask = function(t) {
                        var e = t.fieldPaths || [],
                            n = e.map(function(t) {
                                return ae.fromServerFormat(t)
                            });
                        return new Je(n)
                    }, t
                }(),
                Nn = n(115),
                An = function() {
                    function t(t) {
                        this.wrappedOnOpen = null, this.wrappedOnClose = null, this.wrappedOnMessage = null, this.sendFn = t.sendFn, this.closeFn = t.closeFn
                    }
                    return t.prototype.onOpen = function(t) {
                        c(!this.wrappedOnOpen, "Called onOpen on stream twice!"), this.wrappedOnOpen = t
                    }, t.prototype.onClose = function(t) {
                        c(!this.wrappedOnClose, "Called onClose on stream twice!"), this.wrappedOnClose = t
                    }, t.prototype.onMessage = function(t) {
                        c(!this.wrappedOnMessage, "Called onMessage on stream twice!"), this.wrappedOnMessage = t
                    }, t.prototype.close = function() {
                        this.closeFn()
                    }, t.prototype.send = function(t) {
                        this.sendFn(t)
                    }, t.prototype.callOnOpen = function() {
                        c(null !== this.wrappedOnOpen, "Cannot call onOpen because no callback was set"), this.wrappedOnOpen()
                    }, t.prototype.callOnClose = function(t) {
                        c(null !== this.wrappedOnClose, "Cannot call onClose because no callback was set"), this.wrappedOnClose(t)
                    }, t.prototype.callOnMessage = function(t) {
                        c(null !== this.wrappedOnMessage, "Cannot call onMessage because no callback was set"), this.wrappedOnMessage(t)
                    }, t
                }(),
                Rn = "Connection",
                On = {
                    BatchGetDocuments: "batchGet",
                    Commit: "commit"
                },
                Mn = "gl-js/ fire/" + Qt,
                _n = function() {
                    function t(t) {
                        this.databaseId = t.databaseId, this.pool = new Nn.XhrIoPool;
                        var e = t.ssl ? "https" : "http";
                        this.baseUrl = e + "://" + t.host
                    }
                    return t.prototype.modifyHeadersForRequest = function(t, e) {
                        if (e)
                            for (var n in e.authHeaders) e.authHeaders.hasOwnProperty(n) && (t[n] = e.authHeaders[n]);
                        t["X-Goog-Api-Client"] = Mn, t["google-cloud-resource-prefix"] = "projects/" + this.databaseId.projectId + "/databases/" + this.databaseId.database
                    }, t.prototype.invokeRPC = function(t, e, n) {
                        var r = this,
                            o = this.makeUrl(t);
                        return new Promise(function(a, s) {
                            r.pool.getObject(function(c) {
                                c.listenOnce(Nn.EventType.COMPLETE, function() {
                                    try {
                                        switch (c.getLastErrorCode()) {
                                            case Nn.ErrorCode.NO_ERROR:
                                                var e = c.getResponseJson();
                                                i(Rn, "XHR received:", JSON.stringify(e)), a(e);
                                                break;
                                            case Nn.ErrorCode.TIMEOUT:
                                                i(Rn, 'RPC "' + t + '" timed out'), s(new zt(Ht.DEADLINE_EXCEEDED, "Request time out"));
                                                break;
                                            case Nn.ErrorCode.HTTP_ERROR:
                                                var n = c.getStatus();
                                                i(Rn, 'RPC "' + t + '" failed with status:', n, "response text:", c.getResponseText()), n > 0 ? s(new zt(J(n), "Server responded with status " + c.getStatusText())) : (i(Rn, 'RPC "' + t + '" failed'), s(new zt(Ht.UNAVAILABLE, "Connection failed.")));
                                                break;
                                            default:
                                                u('RPC "' + t + '" failed with unanticipated webchannel error ' + c.getLastErrorCode() + ": " + c.getLastError() + ", giving up.")
                                        }
                                    } finally {
                                        i(Rn, 'RPC "' + t + '" completed.'), r.pool.releaseObject(c)
                                    }
                                });
                                var h = JSON.stringify(e);
                                i(Rn, "XHR sending: ", o + " " + h);
                                var l = {
                                    "Content-Type": "text/plain"
                                };
                                r.modifyHeadersForRequest(l, n), c.send(o, "POST", h, l, 15)
                            })
                        })
                    }, t.prototype.invokeStreamingRPC = function(t, e, n) {
                        return this.invokeRPC(t, e, n)
                    }, t.prototype.openStream = function(t, e) {
                        var n = [this.baseUrl, "/", "google.firestore.v1beta1.Firestore", "/", t, "/channel"],
                            r = Object(Nn.createWebChannelTransport)(),
                            o = {
                                backgroundChannelTest: !0,
                                httpSessionIdParam: "gsessionid",
                                initMessageHeaders: {},
                                httpHeadersOverwriteParam: "$httpHeaders",
                                sendRawJson: !0,
                                supportsCrossDomainXhr: !0
                            };
                        this.modifyHeadersForRequest(o.initMessageHeaders, e);
                        var a = n.join("");
                        i(Rn, "Creating WebChannel: " + a + " " + o);
                        var s = r.createWebChannel(a, o),
                            u = !1,
                            h = !1,
                            l = new An({
                                sendFn: function(t) {
                                    h ? i(Rn, "Not sending because WebChannel is closed:", t) : (u || (i(Rn, "Opening WebChannel transport."), s.open(), u = !0), i(Rn, "WebChannel sending:", t), s.send(t))
                                },
                                closeFn: function() {
                                    return s.close()
                                }
                            }),
                            f = function(t, e) {
                                s.listen(t, function(t) {
                                    try {
                                        e(t)
                                    } catch (t) {
                                        setTimeout(function() {
                                            throw t
                                        }, 0)
                                    }
                                })
                            };
                        return f(Nn.WebChannel.EventType.OPEN, function() {
                            h || i(Rn, "WebChannel transport opened.")
                        }), f(Nn.WebChannel.EventType.CLOSE, function() {
                            h || (h = !0, i(Rn, "WebChannel transport closed"), l.callOnClose())
                        }), f(Nn.WebChannel.EventType.ERROR, function(t) {
                            h || (h = !0, i(Rn, "WebChannel transport errored:", t), l.callOnClose(new zt(Ht.UNAVAILABLE, "The operation could not be completed")))
                        }), f(Nn.WebChannel.EventType.MESSAGE, function(t) {
                            if (!h) {
                                var e = t.data[0];
                                c(!!e, "Got a webchannel message without data.");
                                var n = e.error || e[0] && e[0].error;
                                if (n) {
                                    i(Rn, "WebChannel received error:", n);
                                    var r = n.status,
                                        o = z(r),
                                        a = n.message;
                                    void 0 === o && (o = Ht.INTERNAL, a = "Unknown error status: " + r + " with message " + n.message), h = !0, l.callOnClose(new zt(o, a)), s.close()
                                } else i(Rn, "WebChannel received:", e), l.callOnMessage(e)
                            }
                        }), setTimeout(function() {
                            l.callOnOpen()
                        }, 0), l
                    }, t.prototype.makeUrl = function(t) {
                        var e = On[t];
                        c(void 0 !== e, "Unknown REST mapping for: " + t);
                        var n = [this.baseUrl, "/", "v1beta1"];
                        return n.push("/projects/"), n.push(this.databaseId.projectId), n.push("/databases/"), n.push(this.databaseId.database), n.push("/documents"), n.push(":"), n.push(e), n.join("")
                    }, t
                }(),
                Pn = function() {
                    function t() {
                        this.emptyByteString = "", this.base64Available = "undefined" != typeof atob
                    }
                    return t.prototype.loadConnection = function(t) {
                        return Promise.resolve(new _n(t))
                    }, t.prototype.newSerializer = function(t) {
                        return new kn(t, {
                            useProto3Json: !0
                        })
                    }, t.prototype.formatJSON = function(t) {
                        return JSON.stringify(t)
                    }, t.prototype.atob = function(t) {
                        return atob(t)
                    }, t.prototype.btoa = function(t) {
                        return btoa(t)
                    }, t
                }();
            Wt.setPlatform(new Pn);
            var Ln, xn = function() {
                    function t() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        I("FieldPath", t, "fieldNames", 1);
                        for (var n = 0; n < t.length; ++n)
                            if (T("FieldPath", "string", n, t[n]), 0 === t[n].length) throw new zt(Ht.INVALID_ARGUMENT, "Invalid field name at argument $(i + 1). Field names must not be empty.");
                        this.t = new ae(t)
                    }
                    return t.documentId = function() {
                        return t.p
                    }, t.p = new t(ae.keyField().canonicalString()), t
                }(),
                Bn = RegExp("[~\\*/\\[\\]]");
            ! function(t) {
                t[t.Unknown = 0] = "Unknown", t[t.Healthy = 1] = "Healthy", t[t.Failed = 2] = "Failed"
            }(Ln || (Ln = {}));
            var Un;
            ! function(t) {
                t[t.Added = 0] = "Added", t[t.Removed = 1] = "Removed", t[t.Modified = 2] = "Modified", t[t.Metadata = 3] = "Metadata"
            }(Un || (Un = {}));
            var Fn;
            ! function(t) {
                t[t.Local = 0] = "Local", t[t.Synced = 1] = "Synced"
            }(Fn || (Fn = {}));
            var Vn, qn = function() {
                    function t() {
                        this.changeMap = new he(se.comparator)
                    }
                    return t.prototype.track = function(t) {
                        var e = t.doc.key,
                            n = this.changeMap.get(e);
                        if (!n) return void(this.changeMap = this.changeMap.insert(e, t));
                        t.type !== Un.Added && n.type === Un.Metadata ? this.changeMap = this.changeMap.insert(e, t) : t.type === Un.Metadata && n.type !== Un.Removed ? this.changeMap = this.changeMap.insert(e, {
                            type: n.type,
                            doc: t.doc
                        }) : t.type === Un.Modified && n.type === Un.Modified ? this.changeMap = this.changeMap.insert(e, {
                            type: Un.Modified,
                            doc: t.doc
                        }) : t.type === Un.Modified && n.type === Un.Added ? this.changeMap = this.changeMap.insert(e, {
                            type: Un.Added,
                            doc: t.doc
                        }) : t.type === Un.Removed && n.type === Un.Added ? this.changeMap = this.changeMap.remove(e) : t.type === Un.Removed && n.type === Un.Modified ? this.changeMap = this.changeMap.insert(e, {
                            type: Un.Removed,
                            doc: n.doc
                        }) : t.type === Un.Added && n.type === Un.Removed ? this.changeMap = this.changeMap.insert(e, {
                            type: Un.Modified,
                            doc: t.doc
                        }) : u("unsupported combination of changes: " + JSON.stringify(t) + " after " + JSON.stringify(n))
                    }, t.prototype.getChanges = function() {
                        var t = [];
                        return this.changeMap.inorderTraversal(function(e, n) {
                            t.push(n)
                        }), t
                    }, t
                }(),
                jn = function() {
                    function t(t) {
                        this.comparator = t ? function(e, n) {
                            return t(e, n) || se.comparator(e.key, n.key)
                        } : function(t, e) {
                            return se.comparator(t.key, e.key)
                        }, this.keyedMap = Z(), this.sortedSet = new he(this.comparator)
                    }
                    return t.emptySet = function(e) {
                        return new t(e.comparator)
                    }, t.prototype.has = function(t) {
                        return null != this.keyedMap.get(t)
                    }, t.prototype.get = function(t) {
                        return this.keyedMap.get(t)
                    }, t.prototype.first = function() {
                        return this.sortedSet.minKey()
                    }, t.prototype.last = function() {
                        return this.sortedSet.maxKey()
                    }, t.prototype.isEmpty = function() {
                        return this.sortedSet.isEmpty()
                    }, t.prototype.prevDoc = function(t) {
                        c(this.has(t), "Trying to get a previous document to non-existing key: " + t);
                        var e = this.keyedMap.get(t);
                        return this.sortedSet.getPredecessorKey(e)
                    }, t.prototype.indexOf = function(t) {
                        var e = this.keyedMap.get(t);
                        return e ? this.sortedSet.indexOf(e) : -1
                    }, Object.defineProperty(t.prototype, "size", {
                        get: function() {
                            return this.sortedSet.size
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.forEach = function(t) {
                        this.sortedSet.inorderTraversal(function(e, n) {
                            return t(e), !1
                        })
                    }, t.prototype.add = function(t) {
                        var e = this.delete(t.key);
                        return e.copy(e.keyedMap.insert(t.key, t), e.sortedSet.insert(t, null))
                    }, t.prototype.delete = function(t) {
                        var e = this.get(t);
                        return e ? this.copy(this.keyedMap.remove(t), this.sortedSet.remove(e)) : this
                    }, t.prototype.equals = function(e) {
                        if (!(e instanceof t)) return !1;
                        if (this.size !== e.size) return !1;
                        for (var n = this.sortedSet.getIterator(), r = e.sortedSet.getIterator(); n.hasNext();) {
                            var o = n.getNext().key,
                                i = r.getNext().key;
                            if (!o.equals(i)) return !1
                        }
                        return !0
                    }, t.prototype.toString = function() {
                        var t = [];
                        return this.forEach(function(e) {
                            t.push("" + e)
                        }), 0 === t.length ? "DocumentSet ()" : "DocumentSet (\n  " + t.join("  \n") + "\n)"
                    }, t.prototype.copy = function(e, n) {
                        var r = new t;
                        return r.comparator = this.comparator, r.keyedMap = e, r.sortedSet = n, r
                    }, t
                }(),
                Qn = function() {
                    function t(t) {
                        this.mapKeyFn = t, this.inner = {}
                    }
                    return t.prototype.get = function(t) {
                        var e = this.mapKeyFn(t),
                            n = this.inner[e];
                        if (void 0 !== n)
                            for (var r = 0, o = n; r < o.length; r++) {
                                var i = o[r],
                                    a = i[0],
                                    s = i[1];
                                if (a.equals(t)) return s
                            }
                    }, t.prototype.has = function(t) {
                        return void 0 !== this.get(t)
                    }, t.prototype.set = function(t, e) {
                        var n = this.mapKeyFn(t),
                            r = this.inner[n];
                        if (void 0 === r) return void(this.inner[n] = [
                            [t, e]
                        ]);
                        for (var o = 0; o < r.length; o++)
                            if (r[o][0].equals(t)) return void(r[o] = [t, e]);
                        r.push([t, e])
                    }, t.prototype.delete = function(t) {
                        var e = this.mapKeyFn(t),
                            n = this.inner[e];
                        if (void 0 === n) return !1;
                        for (var r = 0; r < n.length; r++)
                            if (n[r][0].equals(t)) return 1 === n.length ? delete this.inner[e] : n.splice(r, 1), !0;
                        return !1
                    }, t.prototype.forEach = function(t) {
                        y(this.inner, function(e, n) {
                            for (var r = 0, o = n; r < o.length; r++) {
                                var i = o[r],
                                    a = i[0],
                                    s = i[1];
                                t(a, s)
                            }
                        })
                    }, t.prototype.isEmpty = function() {
                        return m(this.inner)
                    }, t
                }(),
                Kn = function() {
                    function t() {
                        this.listeners = []
                    }
                    return t
                }(),
                Wn = function() {
                    function t(t) {
                        this.syncEngine = t, this.queries = new Qn(function(t) {
                            return t.canonicalId()
                        }), this.onlineState = Ln.Unknown, this.syncEngine.subscribe(this.onChange.bind(this), this.onError.bind(this))
                    }
                    return t.prototype.listen = function(t) {
                        var e = t.query,
                            n = !1,
                            r = this.queries.get(e);
                        return r || (n = !0, r = new Kn, this.queries.set(e, r)), r.listeners.push(t), t.onOnlineStateChanged(this.onlineState), r.viewSnap && t.onViewSnapshot(r.viewSnap), n ? this.syncEngine.listen(e).then(function(t) {
                            return r.targetId = t, t
                        }) : Promise.resolve(r.targetId)
                    }, t.prototype.unlisten = function(t) {
                        var e = t.query,
                            n = !1,
                            r = this.queries.get(e);
                        if (r) {
                            var o = r.listeners.indexOf(t);
                            o >= 0 && (r.listeners.splice(o, 1), n = 0 === r.listeners.length)
                        }
                        return n ? (this.queries.delete(e), this.syncEngine.unlisten(e)) : Promise.resolve()
                    }, t.prototype.onChange = function(t) {
                        for (var e = 0, n = t; e < n.length; e++) {
                            var r = n[e],
                                o = r.query,
                                i = this.queries.get(o);
                            if (i) {
                                for (var a = 0, s = i.listeners; a < s.length; a++) s[a].onViewSnapshot(r);
                                i.viewSnap = r
                            }
                        }
                    }, t.prototype.onError = function(t, e) {
                        var n = this.queries.get(t);
                        if (n)
                            for (var r = 0, o = n.listeners; r < o.length; r++) {
                                var i = o[r];
                                i.onError(e)
                            }
                        this.queries.delete(t)
                    }, t.prototype.onOnlineStateChanged = function(t) {
                        this.onlineState = t, this.queries.forEach(function(e, n) {
                            for (var r = 0, o = n.listeners; r < o.length; r++) o[r].onOnlineStateChanged(t)
                        })
                    }, t
                }(),
                Gn = function() {
                    function t(t, e, n) {
                        this.query = t, this.queryObserver = e, this.raisedInitialEvent = !1, this.onlineState = Ln.Unknown, this.options = n || {}
                    }
                    return t.prototype.onViewSnapshot = function(t) {
                        if (c(t.docChanges.length > 0 || t.syncStateChanged, "We got a new snapshot with no changes?"), !this.options.includeDocumentMetadataChanges) {
                            for (var e = [], n = 0, r = t.docChanges; n < r.length; n++) {
                                var o = r[n];
                                o.type !== Un.Metadata && e.push(o)
                            }
                            t = {
                                query: t.query,
                                docs: t.docs,
                                oldDocs: t.oldDocs,
                                docChanges: e,
                                fromCache: t.fromCache,
                                hasPendingWrites: t.hasPendingWrites,
                                syncStateChanged: t.syncStateChanged
                            }
                        }
                        this.raisedInitialEvent ? this.shouldRaiseEvent(t) && this.queryObserver.next(t) : this.shouldRaiseInitialEvent(t, this.onlineState) && this.raiseInitialEvent(t), this.snap = t
                    }, t.prototype.onError = function(t) {
                        this.queryObserver.error(t)
                    }, t.prototype.onOnlineStateChanged = function(t) {
                        this.onlineState = t, this.snap && !this.raisedInitialEvent && this.shouldRaiseInitialEvent(this.snap, t) && this.raiseInitialEvent(this.snap)
                    }, t.prototype.shouldRaiseInitialEvent = function(t, e) {
                        if (c(!this.raisedInitialEvent, "Determining whether to raise first event but already had first event"), !t.fromCache) return !0;
                        var n = e !== Ln.Failed;
                        return this.options.waitForSyncWhenOnline && n ? (c(t.fromCache, "Waiting for sync, but snapshot is not from cache"), !1) : !t.docs.isEmpty() || e === Ln.Failed
                    }, t.prototype.shouldRaiseEvent = function(t) {
                        if (t.docChanges.length > 0) return !0;
                        var e = this.snap && this.snap.hasPendingWrites !== t.hasPendingWrites;
                        return !(!t.syncStateChanged && !e) && !0 === this.options.includeQueryMetadataChanges
                    }, t.prototype.raiseInitialEvent = function(e) {
                        c(!this.raisedInitialEvent, "Trying to raise initial events for second time"), e = {
                            query: e.query,
                            docs: e.docs,
                            oldDocs: jn.emptySet(e.docs),
                            docChanges: t.getInitialViewChanges(e),
                            fromCache: e.fromCache,
                            hasPendingWrites: e.hasPendingWrites,
                            syncStateChanged: !0
                        }, this.raisedInitialEvent = !0, this.queryObserver.next(e)
                    }, t.getInitialViewChanges = function(t) {
                        var e = [];
                        return t.docs.forEach(function(t) {
                            e.push({
                                type: Un.Added,
                                doc: t
                            })
                        }), e
                    }, t
                }(),
                Hn = function() {
                    function t(t) {
                        var e = this;
                        this.nextCallback = null, this.catchCallback = null, this.result = void 0, this.error = null, this.isDone = !1, this.callbackAttached = !1, t(function(t) {
                            e.isDone = !0, e.result = t, e.nextCallback && e.nextCallback(t)
                        }, function(t) {
                            e.isDone = !0, e.error = t, e.catchCallback && e.catchCallback(t)
                        })
                    }
                    return t.prototype.catch = function(t) {
                        return this.next(void 0, t)
                    }, t.prototype.next = function(e, n) {
                        var r = this;
                        return this.callbackAttached && u("Called next() or catch() twice for PersistencePromise"), this.callbackAttached = !0, this.isDone ? this.error ? this.wrapFailure(n, this.error) : this.wrapSuccess(e, this.result) : new t(function(t, o) {
                            r.nextCallback = function(n) {
                                r.wrapSuccess(e, n).next(t, o)
                            }, r.catchCallback = function(e) {
                                r.wrapFailure(n, e).next(t, o)
                            }
                        })
                    }, t.prototype.toPromise = function() {
                        var t = this;
                        return new Promise(function(e, n) {
                            t.next(e, n)
                        })
                    }, t.prototype.wrapUserFunction = function(e) {
                        try {
                            var n = e();
                            return n instanceof t ? n : t.resolve(n)
                        } catch (e) {
                            return t.reject(e)
                        }
                    }, t.prototype.wrapSuccess = function(e, n) {
                        return e ? this.wrapUserFunction(function() {
                            return e(n)
                        }) : t.resolve(n)
                    }, t.prototype.wrapFailure = function(e, n) {
                        return e ? this.wrapUserFunction(function() {
                            return e(n)
                        }) : t.reject(n)
                    }, t.resolve = function(e) {
                        return new t(function(t, n) {
                            t(e)
                        })
                    }, t.reject = function(e) {
                        return new t(function(t, n) {
                            n(e)
                        })
                    }, t.waitFor = function(e) {
                        return e.reduce(function(t, e, n) {
                            return t.next(function() {
                                return e
                            })
                        }, t.resolve())
                    }, t.map = function(e) {
                        var n = [],
                            r = !0,
                            o = t.resolve(null);
                        return e.reduce(function(t, e) {
                            return t.next(function(t) {
                                return r || n.push(t), r = !1, e
                            })
                        }, o).next(function(t) {
                            return n.push(t), n
                        })
                    }, t
                }(),
                zn = function() {
                    function t() {
                        this.isEager = !0, this.sources = [], this.potentialGarbage = et()
                    }
                    return t.prototype.addGarbageSource = function(t) {
                        this.sources.push(t), t.setGarbageCollector(this)
                    }, t.prototype.removeGarbageSource = function(t) {
                        this.sources.splice(this.sources.indexOf(t), 1), t.setGarbageCollector(null)
                    }, t.prototype.addPotentialGarbageKey = function(t) {
                        this.potentialGarbage = this.potentialGarbage.add(t)
                    }, t.prototype.collectGarbage = function(t) {
                        var e = this,
                            n = [],
                            r = et();
                        return this.potentialGarbage.forEach(function(o) {
                            var i = e.documentHasAnyReferences(t, o);
                            n.push(i.next(function(t) {
                                return t || (r = r.add(o)), Hn.resolve()
                            }))
                        }), this.potentialGarbage = et(), Hn.waitFor(n).next(function() {
                            return r
                        })
                    }, t.prototype.documentHasAnyReferences = function(t, e) {
                        var n = Hn.resolve(!1);
                        return this.sources.map(function(n) {
                            return function() {
                                return n.containsKey(t, e)
                            }
                        }).reduce(function(t, e) {
                            return t.next(function(t) {
                                return t ? Hn.resolve(!0) : e()
                            })
                        }, n)
                    }, t
                }(),
                Xn = function() {
                    function t(t, e, n) {
                        this.query = t, this.addedKeys = e, this.removedKeys = n
                    }
                    return t.fromSnapshot = function(e) {
                        for (var n = et(), r = et(), o = 0, i = e.docChanges; o < i.length; o++) {
                            var a = i[o];
                            switch (a.type) {
                                case Un.Added:
                                    n = n.add(a.doc.key);
                                    break;
                                case Un.Removed:
                                    r = r.add(a.doc.key)
                            }
                        }
                        return new t(e.query, n, r)
                    }, t
                }(),
                Yn = function() {
                    function t() {
                        this.refsByKey = new ln(Jn.compareByKey), this.refsByTarget = new ln(Jn.compareByTargetId), this.garbageCollector = null
                    }
                    return t.prototype.isEmpty = function() {
                        return this.refsByKey.isEmpty()
                    }, t.prototype.addReference = function(t, e) {
                        var n = new Jn(t, e);
                        this.refsByKey = this.refsByKey.add(n), this.refsByTarget = this.refsByTarget.add(n)
                    }, t.prototype.addReferences = function(t, e) {
                        var n = this;
                        t.forEach(function(t) {
                            return n.addReference(t, e)
                        })
                    }, t.prototype.removeReference = function(t, e) {
                        this.removeRef(new Jn(t, e))
                    }, t.prototype.removeReferences = function(t, e) {
                        var n = this;
                        t.forEach(function(t) {
                            return n.removeReference(t, e)
                        })
                    }, t.prototype.removeReferencesForId = function(t) {
                        var e = this,
                            n = se.EMPTY,
                            r = new Jn(n, t),
                            o = new Jn(n, t + 1);
                        this.refsByTarget.forEachInRange([r, o], function(t) {
                            e.removeRef(t)
                        })
                    }, t.prototype.removeAllReferences = function() {
                        var t = this;
                        this.refsByKey.forEach(function(e) {
                            return t.removeRef(e)
                        })
                    }, t.prototype.removeRef = function(t) {
                        this.refsByKey = this.refsByKey.delete(t), this.refsByTarget = this.refsByTarget.delete(t), null !== this.garbageCollector && this.garbageCollector.addPotentialGarbageKey(t.key)
                    }, t.prototype.referencesForId = function(t) {
                        var e = se.EMPTY,
                            n = new Jn(e, t),
                            r = new Jn(e, t + 1),
                            o = et();
                        return this.refsByTarget.forEachInRange([n, r], function(t) {
                            o = o.add(t.key)
                        }), o
                    }, t.prototype.setGarbageCollector = function(t) {
                        this.garbageCollector = t
                    }, t.prototype.containsKey = function(t, e) {
                        var n = new Jn(e, 0),
                            r = this.refsByKey.firstAfterOrEqual(n);
                        return Hn.resolve(null !== r && e.equals(r.key))
                    }, t
                }(),
                Jn = function() {
                    function t(t, e) {
                        this.key = t, this.targetOrBatchId = e
                    }
                    return t.compareByKey = function(t, e) {
                        return se.comparator(t.key, e.key) || L(t.targetOrBatchId, e.targetOrBatchId)
                    }, t.compareByTargetId = function(t, e) {
                        return L(t.targetOrBatchId, e.targetOrBatchId) || se.comparator(t.key, e.key)
                    }, t
                }(),
                $n = 1;
            ! function(t) {
                t[t.LocalStore = 0] = "LocalStore", t[t.SyncEngine = 1] = "SyncEngine"
            }(Vn || (Vn = {}));
            var Zn, tr = function() {
                    function t(t, e) {
                        void 0 === e && (e = 0), this.generatorId = t;
                        var n = e >> $n << $n,
                            r = e - n;
                        this.previousId = r >= t ? n | this.generatorId : (n | this.generatorId) - (1 << $n)
                    }
                    return t.prototype.next = function() {
                        return this.previousId += 1 << $n, this.previousId
                    }, t.forLocalStore = function(e) {
                        return void 0 === e && (e = 0), new t(Vn.LocalStore, e)
                    }, t.forSyncEngine = function() {
                        return new t(Vn.SyncEngine)
                    }, t
                }(),
                er = function() {
                    function t(t) {
                        this.key = t
                    }
                    return t
                }(),
                nr = function() {
                    function t(t) {
                        this.key = t
                    }
                    return t
                }(),
                rr = function() {
                    function t(t, e) {
                        this.query = t, this.syncedDocuments = e, this.syncState = null, this.current = !1, this.limboDocuments = et(), this.mutatedKeys = et(), this.documentSet = new jn(t.docComparator.bind(t))
                    }
                    return t.prototype.computeDocChanges = function(t, e) {
                        var n = this,
                            r = e ? e.changeSet : new qn,
                            o = e ? e.documentSet : this.documentSet,
                            i = e ? e.mutatedKeys : this.mutatedKeys,
                            a = o,
                            s = !1,
                            u = this.query.hasLimit() && o.size === this.query.limit ? o.last() : null;
                        if (t.inorderTraversal(function(t, e) {
                                var h = o.get(t),
                                    l = e instanceof ue ? e : null;
                                if (l && (c(t.equals(l.key), "Mismatching keys found in document changes: " + t + " != " + l.key), l = n.query.matches(l) ? l : null), l ? (a = a.add(l), i = l.hasLocalMutations ? i.add(t) : i.delete(t)) : (a = a.delete(t), i = i.delete(t)), h && l) {
                                    var f = h.data.equals(l.data);
                                    f && h.hasLocalMutations === l.hasLocalMutations || (f ? r.track({
                                        type: Un.Metadata,
                                        doc: l
                                    }) : r.track({
                                        type: Un.Modified,
                                        doc: l
                                    }), u && n.query.docComparator(l, u) > 0 && (s = !0))
                                } else !h && l ? r.track({
                                    type: Un.Added,
                                    doc: l
                                }) : h && !l && (r.track({
                                    type: Un.Removed,
                                    doc: h
                                }), u && (s = !0))
                            }), this.query.hasLimit())
                            for (; a.size > this.query.limit;) {
                                var h = a.last();
                                a = a.delete(h.key), r.track({
                                    type: Un.Removed,
                                    doc: h
                                })
                            }
                        return c(!s || !e, "View was refilled using docs that themselves needed refilling."), {
                            documentSet: a,
                            changeSet: r,
                            needsRefill: s,
                            mutatedKeys: i
                        }
                    }, t.prototype.applyChanges = function(t, e) {
                        var n = this;
                        c(!t.needsRefill, "Cannot apply changes that need a refill");
                        var r = this.documentSet;
                        this.documentSet = t.documentSet, this.mutatedKeys = t.mutatedKeys;
                        var o = t.changeSet.getChanges();
                        o.sort(function(t, e) {
                            return st(t.type, e.type) || n.query.docComparator(t.doc, e.doc)
                        });
                        var i = this.applyTargetChange(e),
                            a = 0 === this.limboDocuments.size && this.current,
                            s = a ? Fn.Synced : Fn.Local,
                            u = s !== this.syncState;
                        return this.syncState = s, 0 !== o.length || u ? {
                            snapshot: {
                                query: this.query,
                                docs: t.documentSet,
                                oldDocs: r,
                                docChanges: o,
                                fromCache: s === Fn.Local,
                                syncStateChanged: u,
                                hasPendingWrites: !t.mutatedKeys.isEmpty()
                            },
                            limboChanges: i
                        } : {
                            limboChanges: i
                        }
                    }, t.prototype.shouldBeInLimbo = function(t) {
                        return !this.syncedDocuments.has(t) && !!this.documentSet.has(t) && !this.documentSet.get(t).hasLocalMutations
                    }, t.prototype.applyTargetChange = function(t) {
                        var e = this;
                        if (t) {
                            var n = t.mapping;
                            switch (n instanceof bn ? this.syncedDocuments = n.documents : n instanceof wn && (this.syncedDocuments = n.applyToKeySet(this.syncedDocuments)), t.currentStatusUpdate) {
                                case hn.MarkCurrent:
                                    this.current = !0;
                                    break;
                                case hn.MarkNotCurrent:
                                    this.current = !1;
                                    break;
                                case hn.None:
                                    break;
                                default:
                                    u("Unknown current status update: " + t.currentStatusUpdate)
                            }
                        }
                        var r = this.limboDocuments;
                        this.limboDocuments = et(), this.current && this.documentSet.forEach(function(t) {
                            e.shouldBeInLimbo(t.key) && (e.limboDocuments = e.limboDocuments.add(t.key))
                        });
                        var o = [];
                        return r.forEach(function(t) {
                            e.limboDocuments.has(t) || o.push(new nr(t))
                        }), this.limboDocuments.forEach(function(t) {
                            r.has(t) || o.push(new er(t))
                        }), o
                    }, t
                }(),
                or = function() {
                    function t(t, e, n, r) {
                        this.query = t, this.targetId = e, this.resumeToken = n, this.view = r
                    }
                    return t
                }(),
                ir = function() {
                    function t(t, e, n) {
                        this.localStore = t, this.remoteStore = e, this.currentUser = n, this.viewHandler = null, this.errorHandler = null, this.queryViewsByQuery = new Qn(function(t) {
                            return t.canonicalId()
                        }), this.queryViewsByTarget = {}, this.limboTargetsByKey = new he(se.comparator), this.limboKeysByTarget = {}, this.limboDocumentRefs = new Yn, this.limboCollector = new zn, this.mutationUserCallbacks = {}, this.targetIdGenerator = tr.forSyncEngine()
                    }
                    return t.prototype.subscribe = function(t, e) {
                        c(null !== t && null !== e, "View and error handlers cannot be null"), c(null === this.viewHandler && null === this.errorHandler, "SyncEngine already has a subscriber."), this.viewHandler = t, this.errorHandler = e, this.limboCollector.addGarbageSource(this.limboDocumentRefs)
                    }, t.prototype.listen = function(t) {
                        var e = this;
                        return this.assertSubscribed("listen()"), c(!this.queryViewsByQuery.has(t), "We already listen to the query: " + t), this.localStore.allocateQuery(t).then(function(n) {
                            return e.localStore.executeQuery(t).then(function(r) {
                                return e.localStore.remoteDocumentKeys(n.targetId).then(function(o) {
                                    var i = new rr(t, o),
                                        a = i.computeDocChanges(r),
                                        s = i.applyChanges(a);
                                    c(0 === s.limboChanges.length, "View returned limbo docs before target ack from the server."), c(!!s.snapshot, "applyChanges for new view should always return a snapshot");
                                    var u = new or(t, n.targetId, n.resumeToken, i);
                                    e.queryViewsByQuery.set(t, u), e.queryViewsByTarget[n.targetId] = u, e.viewHandler([s.snapshot]), e.remoteStore.listen(n)
                                })
                            }).then(function() {
                                return n.targetId
                            })
                        })
                    }, t.prototype.unlisten = function(t) {
                        var e = this;
                        this.assertSubscribed("unlisten()");
                        var n = this.queryViewsByQuery.get(t);
                        return c(!!n, "Trying to unlisten on query not found:" + t), this.localStore.releaseQuery(t).then(function() {
                            return e.remoteStore.unlisten(n.targetId), e.removeAndCleanupQuery(n).then(function() {
                                return e.localStore.collectGarbage()
                            })
                        })
                    }, t.prototype.write = function(t, e) {
                        var n = this;
                        return this.assertSubscribed("write()"), this.localStore.localWrite(t).then(function(t) {
                            return n.addMutationCallback(t.batchId, e), n.emitNewSnapsAndNotifyLocalStore(t.changes)
                        }).then(function() {
                            return n.remoteStore.fillWritePipeline()
                        })
                    }, t.prototype.wrapUpdateFunctionError = function(t) {
                        return t
                    }, t.prototype.runTransaction = function(t, e) {
                        var n = this;
                        void 0 === e && (e = 5), c(e >= 0, "Got negative number of retries for transaction.");
                        var r = this.remoteStore.createTransaction();
                        return function() {
                            try {
                                var e = t(r);
                                return !K(e) && e.catch && e.then ? e.catch(function(t) {
                                    return Promise.reject(n.wrapUpdateFunctionError(t))
                                }) : Promise.reject(Error("Transaction callback must return a Promise"))
                            } catch (t) {
                                return Promise.reject(n.wrapUpdateFunctionError(t))
                            }
                        }().then(function(o) {
                            return r.commit().then(function() {
                                return o
                            }).catch(function(r) {
                                return 0 === e ? Promise.reject(r) : n.runTransaction(t, e - 1)
                            })
                        })
                    }, t.prototype.applyRemoteEvent = function(t) {
                        var e = this;
                        return this.assertSubscribed("applyRemoteEvent()"), p(t.targetChanges, function(n, r) {
                            var o = e.limboKeysByTarget[n];
                            o && r.currentStatusUpdate === hn.MarkCurrent && !t.documentUpdates.get(o) && t.addDocumentUpdate(new ce(o, t.snapshotVersion))
                        }), this.localStore.applyRemoteEvent(t).then(function(n) {
                            return e.emitNewSnapsAndNotifyLocalStore(n, t)
                        })
                    }, t.prototype.rejectListen = function(t, e) {
                        var n = this;
                        this.assertSubscribed("rejectListens()");
                        var r = this.limboKeysByTarget[t];
                        if (r) {
                            this.limboTargetsByKey = this.limboTargetsByKey.remove(r), delete this.limboKeysByTarget[t];
                            var o = new he(se.comparator);
                            o = o.insert(r, new ce(r, He.forDeletedDoc()));
                            var i = new mn(He.MIN, {}, o);
                            return this.applyRemoteEvent(i)
                        }
                        var a = this.queryViewsByTarget[t];
                        return c(!!a, "Unknown targetId: " + t), this.localStore.releaseQuery(a.query).then(function() {
                            return n.removeAndCleanupQuery(a).then(function() {
                                n.errorHandler(a.query, e)
                            })
                        })
                    }, t.prototype.applySuccessfulWrite = function(t) {
                        var e = this;
                        return this.assertSubscribed("applySuccessfulWrite()"), this.processUserCallback(t.batch.batchId, null), this.localStore.acknowledgeBatch(t).then(function(t) {
                            return e.emitNewSnapsAndNotifyLocalStore(t)
                        })
                    }, t.prototype.rejectFailedWrite = function(t, e) {
                        var n = this;
                        return this.assertSubscribed("rejectFailedWrite()"), this.processUserCallback(t, e), this.localStore.rejectBatch(t).then(function(t) {
                            return n.emitNewSnapsAndNotifyLocalStore(t)
                        })
                    }, t.prototype.addMutationCallback = function(t, e) {
                        var n = this.mutationUserCallbacks[this.currentUser.toKey()];
                        n || (n = new he(L)), n = n.insert(t, e), this.mutationUserCallbacks[this.currentUser.toKey()] = n
                    }, t.prototype.processUserCallback = function(t, e) {
                        var n = this.mutationUserCallbacks[this.currentUser.toKey()];
                        if (n) {
                            var r = n.get(t);
                            r && (c(t === n.minKey(), "Mutation callbacks processed out-of-order?"), e ? r.reject(e) : r.resolve(), n = n.remove(t)), this.mutationUserCallbacks[this.currentUser.toKey()] = n
                        }
                    }, t.prototype.removeAndCleanupQuery = function(t) {
                        return this.queryViewsByQuery.delete(t.query), delete this.queryViewsByTarget[t.targetId], this.limboDocumentRefs.removeReferencesForId(t.targetId), this.gcLimboDocuments()
                    }, t.prototype.updateTrackedLimbos = function(t, e) {
                        for (var n = 0, r = e; n < r.length; n++) {
                            var o = r[n];
                            o instanceof er ? (this.limboDocumentRefs.addReference(o.key, t), this.trackLimboChange(o)) : o instanceof nr ? (i("SyncEngine", "Document no longer in limbo: " + o.key), this.limboDocumentRefs.removeReference(o.key, t)) : u("Unknown limbo change: " + JSON.stringify(o))
                        }
                        return this.gcLimboDocuments()
                    }, t.prototype.trackLimboChange = function(t) {
                        var e = t.key;
                        if (!this.limboTargetsByKey.get(e)) {
                            i("SyncEngine", "New document in limbo: " + e);
                            var n = this.targetIdGenerator.next(),
                                r = Le.atPath(e.path);
                            this.limboKeysByTarget[n] = e, this.remoteStore.listen(new Xe(r, n, me.Listen)), this.limboTargetsByKey = this.limboTargetsByKey.insert(e, n)
                        }
                    }, t.prototype.gcLimboDocuments = function() {
                        var t = this;
                        return this.limboCollector.collectGarbage(null).next(function(e) {
                            e.forEach(function(e) {
                                var n = t.limboTargetsByKey.get(e);
                                null !== n && (t.remoteStore.unlisten(n), t.limboTargetsByKey = t.limboTargetsByKey.remove(e), delete t.limboKeysByTarget[n])
                            })
                        }).toPromise()
                    }, t.prototype.currentLimboDocs = function() {
                        return this.limboTargetsByKey
                    }, t.prototype.emitNewSnapsAndNotifyLocalStore = function(t, e) {
                        var n = this,
                            r = [],
                            o = [],
                            i = [];
                        return this.queryViewsByQuery.forEach(function(a, s) {
                            i.push(Promise.resolve().then(function() {
                                var e = s.view.computeDocChanges(t);
                                return e.needsRefill ? n.localStore.executeQuery(s.query).then(function(t) {
                                    return s.view.computeDocChanges(t, e)
                                }) : e
                            }).then(function(t) {
                                var i = e && e.targetChanges[s.targetId],
                                    a = s.view.applyChanges(t, i);
                                return n.updateTrackedLimbos(s.targetId, a.limboChanges).then(function() {
                                    if (a.snapshot) {
                                        r.push(a.snapshot);
                                        var t = Xn.fromSnapshot(a.snapshot);
                                        o.push(t)
                                    }
                                })
                            }))
                        }), Promise.all(i).then(function() {
                            return n.viewHandler(r), n.localStore.notifyLocalViewChanges(o)
                        }).then(function() {
                            return n.localStore.collectGarbage()
                        })
                    }, t.prototype.assertSubscribed = function(t) {
                        c(null !== this.viewHandler && null !== this.errorHandler, "Trying to call " + t + " before calling subscribe().")
                    }, t.prototype.handleUserChange = function(t) {
                        var e = this;
                        return this.currentUser = t, this.localStore.handleUserChange(t).then(function(t) {
                            return e.emitNewSnapsAndNotifyLocalStore(t)
                        }).then(function() {
                            return e.remoteStore.handleUserChange(t)
                        })
                    }, t
                }(),
                ar = -1,
                sr = function() {
                    function t(t, e, n) {
                        this.batchId = t, this.localWriteTime = e, this.mutations = n
                    }
                    return t.prototype.applyToRemoteDocument = function(t, e, n) {
                        e && c(e.key.equals(t), "applyToRemoteDocument: key " + t + " should match maybeDoc key\n        " + e.key);
                        var r = n.mutationResults;
                        c(r.length === this.mutations.length, "Mismatch between mutations length\n      (" + this.mutations.length + ") and mutation results length\n      (" + r.length + ").");
                        for (var o = 0; o < this.mutations.length; o++) {
                            var i = this.mutations[o];
                            if (i.key.equals(t)) {
                                var a = r[o];
                                e = i.applyToRemoteDocument(e, a)
                            }
                        }
                        return e
                    }, t.prototype.applyToLocalView = function(t, e) {
                        e && c(e.key.equals(t), "applyToLocalDocument: key " + t + " should match maybeDoc key\n        " + e.key);
                        for (var n = 0; n < this.mutations.length; n++) {
                            var r = this.mutations[n];
                            r.key.equals(t) && (e = r.applyToLocalView(e, this.localWriteTime))
                        }
                        return e
                    }, t.prototype.keys = function() {
                        for (var t = et(), e = 0, n = this.mutations; e < n.length; e++) {
                            var r = n[e];
                            t = t.add(r.key)
                        }
                        return t
                    }, t.prototype.equals = function(t) {
                        return this.batchId === t.batchId && B(this.mutations, t.mutations)
                    }, t.prototype.isTombstone = function() {
                        return 0 === this.mutations.length
                    }, t.prototype.toTombstone = function() {
                        return new t(this.batchId, this.localWriteTime, [])
                    }, t
                }(),
                ur = function() {
                    function t(t, e, n, r, o) {
                        this.batch = t, this.commitVersion = e, this.mutationResults = n, this.streamToken = r, this.docVersions = o
                    }
                    return t.from = function(e, n, r, o) {
                        c(e.mutations.length === r.length, "Mutations sent " + e.mutations.length + " must equal results received " + r.length);
                        for (var i = tt(), a = e.mutations, s = 0; s < a.length; s++) {
                            var u = r[s].version;
                            null === u && (u = n), i = i.insert(a[s].key, u)
                        }
                        return new t(e, n, r, o, i)
                    }, t
                }(),
                cr = "",
                hr = "",
                lr = "",
                fr = "",
                dr = function() {
                    function t(t, e) {
                        this.seconds = t, this.nanos = e
                    }
                    return t
                }(),
                pr = function() {
                    function t(t, e) {
                        this.ownerId = t, this.leaseTimestampMs = e
                    }
                    return t.store = "owner", t
                }(),
                yr = function() {
                    function t(t, e, n) {
                        this.userId = t, this.lastAcknowledgedBatchId = e, this.lastStreamToken = n
                    }
                    return t.store = "mutationQueues", t.keyPath = "userId", t
                }(),
                mr = function() {
                    function t(t, e, n, r) {
                        this.userId = t, this.batchId = e, this.localWriteTimeMs = n, this.mutations = r
                    }
                    return t.store = "mutations", t.keyPath = ["userId", "batchId"], t
                }(),
                gr = function() {
                    function t() {}
                    return t.prefixForUser = function(t) {
                        return [t]
                    }, t.prefixForPath = function(t, e) {
                        return [t, ut(e)]
                    }, t.key = function(t, e, n) {
                        return [t, ut(e), n]
                    }, t.store = "documentMutations", t.PLACEHOLDER = new t, t
                }(),
                vr = function() {
                    function t(t, e) {
                        this.path = t, this.readTime = e
                    }
                    return t
                }(),
                br = function() {
                    function t(t, e) {
                        this.noDocument = t, this.document = e
                    }
                    return t.store = "remoteDocuments", t
                }(),
                wr = function() {
                    function t(t, e, n, r, o, i) {
                        this.targetId = t, this.canonicalId = e, this.readTime = n, this.resumeToken = r, this.lastListenSequenceNumber = o, this.query = i
                    }
                    return t.store = "targets", t.keyPath = "targetId", t.queryTargetsIndexName = "queryTargetsIndex", t.queryTargetsKeyPath = ["canonicalId", "targetId"], t
                }(),
                Ir = function() {
                    function t(t, e) {
                        this.targetId = t, this.path = e
                    }
                    return t.store = "targetDocuments", t.keyPath = ["targetId", "path"], t.documentTargetsIndex = "documentTargetsIndex", t.documentTargetsKeyPath = ["path", "targetId"], t
                }(),
                Tr = function() {
                    function t(t, e, n) {
                        this.highestTargetId = t, this.highestListenSequenceNumber = e, this.lastRemoteSnapshotVersion = n
                    }
                    return t.key = "targetGlobalKey", t.store = "targetGlobal", t
                }(),
                Er = [yr.store, mr.store, gr.store, br.store, wr.store, pr.store, Tr.store, Ir.store],
                Sr = function() {
                    function t(t) {
                        this.db = t
                    }
                    return t.openOrCreate = function(e, n, r) {
                        return c(t.isAvailable(), "IndexedDB not supported in current environment."), i("SimpleDb", "Opening database:", e), new Hn(function(o, a) {
                            var s = window.indexedDB.open(e, n);
                            s.onsuccess = function(e) {
                                var n = e.target.result;
                                o(new t(n))
                            }, s.onerror = function(t) {
                                a(t.target.error)
                            }, s.onupgradeneeded = function(t) {
                                i("SimpleDb", 'Database "' + e + '" requires upgrade from version:', t.oldVersion);
                                var n = t.target.result;
                                r(n, t.oldVersion)
                            }
                        }).toPromise()
                    }, t.delete = function(t) {
                        return i("SimpleDb", "Removing database:", t), dt(window.indexedDB.deleteDatabase(t)).toPromise()
                    }, t.isAvailable = function() {
                        if ("undefined" == typeof window || null == window.indexedDB) return !1;
                        var t = window.navigator.userAgent;
                        return !(t.indexOf("MSIE ") > 0 || t.indexOf("Trident/") > 0 || t.indexOf("Edge/") > 0)
                    }, t.prototype.runTransaction = function(t, e, n) {
                        var r = new Dr(this.db, t, e),
                            o = n(r).catch(function(t) {
                                return r.abort(), Hn.reject(t)
                            }).toPromise();
                        return r.completionPromise.then(function() {
                            return o
                        })
                    }, t.prototype.close = function() {
                        this.db.close()
                    }, t
                }(),
                Cr = function() {
                    function t(t) {
                        this.dbCursor = t, this.shouldStop = !1, this.nextKey = null
                    }
                    return Object.defineProperty(t.prototype, "isDone", {
                        get: function() {
                            return this.shouldStop
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "skipToKey", {
                        get: function() {
                            return this.nextKey
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "cursor", {
                        set: function(t) {
                            this.dbCursor = t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.done = function() {
                        this.shouldStop = !0
                    }, t.prototype.skip = function(t) {
                        this.nextKey = t
                    }, t.prototype.delete = function() {
                        return dt(this.dbCursor.delete())
                    }, t
                }(),
                Dr = function() {
                    function t(t, e, n) {
                        var r = this;
                        this.aborted = !1, this.transaction = t.transaction(n, e), this.completionPromise = new Promise(function(t, e) {
                            r.transaction.onabort = r.transaction.oncomplete = function(e) {
                                t()
                            }, r.transaction.onerror = function(t) {
                                e(t.target.error)
                            }
                        })
                    }
                    return t.prototype.abort = function() {
                        this.aborted || (i("SimpleDb", "Aborting transaction."), this.aborted = !0, this.transaction.abort())
                    }, t.prototype.store = function(t) {
                        var e = this.transaction.objectStore(t);
                        return c(!!e, "Object store not part of transaction: " + t), new kr(e)
                    }, t
                }(),
                kr = function() {
                    function t(t) {
                        this.store = t
                    }
                    return t.prototype.put = function(t, e) {
                        var n;
                        return void 0 !== e ? (i("SimpleDb", "PUT", this.store.name, t, e), n = this.store.put(e, t)) : (i("SimpleDb", "PUT", this.store.name, "<auto-key>", t), n = this.store.put(t)), dt(n)
                    }, t.prototype.get = function(t) {
                        var e = this;
                        return dt(this.store.get(t)).next(function(n) {
                            return void 0 === n && (n = null), i("SimpleDb", "GET", e.store.name, t, n), n
                        })
                    }, t.prototype.delete = function(t) {
                        return i("SimpleDb", "DELETE", this.store.name, t), dt(this.store.delete(t))
                    }, t.prototype.loadAll = function(t, e) {
                        var n = this.cursor(this.options(t, e)),
                            r = [];
                        return this.iterateCursor(n, function(t, e) {
                            r.push(e)
                        }).next(function() {
                            return r
                        })
                    }, t.prototype.deleteAll = function(t, e) {
                        i("SimpleDb", "DELETE ALL", this.store.name);
                        var n = this.options(t, e);
                        n.keysOnly = !1;
                        var r = this.cursor(n);
                        return this.iterateCursor(r, function(t, e, n) {
                            return n.delete()
                        })
                    }, t.prototype.iterate = function(t, e) {
                        var n;
                        e ? n = t : (n = {}, e = t);
                        var r = this.cursor(n);
                        return this.iterateCursor(r, e)
                    }, t.prototype.iterateCursor = function(t, e) {
                        var n = [];
                        return new Hn(function(r, o) {
                            t.onerror = function(t) {
                                o(t.target.error)
                            }, t.onsuccess = function(t) {
                                var o = t.target.result;
                                if (!o) return void r();
                                var i = new Cr(o),
                                    a = e(o.primaryKey, o.value, i);
                                a instanceof Hn && n.push(a), i.isDone ? r() : null === i.skipToKey ? o.continue() : o.continue(i.skipToKey)
                            }
                        }).next(function() {
                            return Hn.waitFor(n)
                        })
                    }, t.prototype.options = function(t, e) {
                        var n = void 0;
                        return void 0 !== t && ("string" == typeof t ? n = t : (c(void 0 === e, "3rd argument must not be defined if 2nd is a range."), e = t)), {
                            index: n,
                            range: e
                        }
                    }, t.prototype.cursor = function(t) {
                        var e = "next";
                        if (t.reverse && (e = "prev"), t.index) {
                            var n = this.store.index(t.index);
                            return t.keysOnly ? n.openKeyCursor(t.range, e) : n.openCursor(t.range, e)
                        }
                        return this.store.openCursor(t.range, e)
                    }, t
                }(),
                Nr = function() {
                    function t(t, e) {
                        this.userId = t, this.serializer = e, this.garbageCollector = null
                    }
                    return t.forUser = function(e, n) {
                        return c("" !== e.uid, "UserID must not be an empty string."), new t(e.isUnauthenticated() ? "" : e.uid, n)
                    }, t.prototype.start = function(e) {
                        var n = this;
                        return t.loadNextBatchIdFromDb(e).next(function(t) {
                            return n.nextBatchId = t, gt(e).get(n.userId)
                        }).next(function(t) {
                            return t || (t = new yr(n.userId, ar, "")), n.metadata = t, n.metadata.lastAcknowledgedBatchId >= n.nextBatchId ? n.checkEmpty(e).next(function(t) {
                                return c(t, "Reset nextBatchID is only possible when the queue is empty"), n.metadata.lastAcknowledgedBatchId = ar, gt(e).put(n.metadata)
                            }) : Hn.resolve()
                        })
                    }, t.loadNextBatchIdFromDb = function(t) {
                        var e = ar;
                        return yt(t).iterate({
                            reverse: !0
                        }, function(t, n, r) {
                            var o = t[0];
                            if (t[1] > e && (e = n.batchId), "" === o) r.done();
                            else {
                                var i = U(o);
                                r.skip([i])
                            }
                        }).next(function() {
                            return e + 1
                        })
                    }, t.prototype.checkEmpty = function(t) {
                        var e = !0,
                            n = IDBKeyRange.bound(this.keyForBatchId(Number.NEGATIVE_INFINITY), this.keyForBatchId(Number.POSITIVE_INFINITY));
                        return yt(t).iterate({
                            range: n
                        }, function(t, n, r) {
                            e = !1, r.done()
                        }).next(function() {
                            return e
                        })
                    }, t.prototype.getNextBatchId = function(t) {
                        return Hn.resolve(this.nextBatchId)
                    }, t.prototype.getHighestAcknowledgedBatchId = function(t) {
                        return Hn.resolve(this.metadata.lastAcknowledgedBatchId)
                    }, t.prototype.acknowledgeBatch = function(t, e, n) {
                        var r = e.batchId;
                        return c(r > this.metadata.lastAcknowledgedBatchId, "Mutation batchIDs must be acknowledged in order"), this.metadata.lastAcknowledgedBatchId = r, this.metadata.lastStreamToken = pt(n), gt(t).put(this.metadata)
                    }, t.prototype.getLastStreamToken = function(t) {
                        return Hn.resolve(this.metadata.lastStreamToken)
                    }, t.prototype.setLastStreamToken = function(t, e) {
                        return this.metadata.lastStreamToken = pt(e), gt(t).put(this.metadata)
                    }, t.prototype.addMutationBatch = function(t, e, n) {
                        var r = this,
                            o = this.nextBatchId;
                        this.nextBatchId++;
                        var i = new sr(o, e, n),
                            a = this.serializer.toDbMutationBatch(this.userId, i);
                        return yt(t).put(a).next(function() {
                            for (var e = [], i = 0, a = n; i < a.length; i++) {
                                var s = a[i],
                                    u = (ut(s.key.path), gr.key(r.userId, s.key.path, o));
                                mt(t).put(u, gr.PLACEHOLDER)
                            }
                            return Hn.waitFor(e)
                        }).next(function() {
                            return i
                        })
                    }, t.prototype.lookupMutationBatch = function(t, e) {
                        var n = this;
                        return yt(t).get(this.keyForBatchId(e)).next(function(t) {
                            return t ? n.serializer.fromDbMutationBatch(t) : null
                        })
                    }, t.prototype.getNextMutationBatchAfterBatchId = function(t, e) {
                        var n = this,
                            r = IDBKeyRange.lowerBound(this.keyForBatchId(e + 1)),
                            o = null;
                        return yt(t).iterate({
                            range: r
                        }, function(t, r, i) {
                            r.userId === n.userId && (c(r.batchId > e, "Should have found mutation after " + e), o = n.serializer.fromDbMutationBatch(r)), i.done()
                        }).next(function() {
                            return o
                        })
                    }, t.prototype.getAllMutationBatches = function(t) {
                        var e = this,
                            n = IDBKeyRange.bound(this.keyForBatchId(ar), this.keyForBatchId(Number.POSITIVE_INFINITY));
                        return yt(t).loadAll(n).next(function(t) {
                            return t.map(function(t) {
                                return e.serializer.fromDbMutationBatch(t)
                            })
                        })
                    }, t.prototype.getAllMutationBatchesThroughBatchId = function(t, e) {
                        var n = this,
                            r = IDBKeyRange.bound(this.keyForBatchId(ar), this.keyForBatchId(e));
                        return yt(t).loadAll(r).next(function(t) {
                            return t.map(function(t) {
                                return n.serializer.fromDbMutationBatch(t)
                            })
                        })
                    }, t.prototype.getAllMutationBatchesAffectingDocumentKey = function(t, e) {
                        var n = this,
                            r = gr.prefixForPath(this.userId, e.path),
                            o = IDBKeyRange.lowerBound(r),
                            i = [];
                        return mt(t).iterate({
                            range: o
                        }, function(r, o, a) {
                            var s = r[0],
                                c = r[1],
                                h = r[2],
                                l = lt(c);
                            if (s !== n.userId || !e.path.equals(l)) return void a.done();
                            var f = n.keyForBatchId(h);
                            return yt(t).get(f).next(function(t) {
                                null === t && u("Dangling document-mutation reference found: " + r + " which points to " + f), i.push(n.serializer.fromDbMutationBatch(t))
                            })
                        }).next(function() {
                            return i
                        })
                    }, t.prototype.getAllMutationBatchesAffectingQuery = function(t, e) {
                        var n = this;
                        c(!e.isDocumentQuery(), "Document queries shouldn't go down this path");
                        var r = e.path,
                            o = r.length + 1,
                            i = gr.prefixForPath(this.userId, r),
                            a = (i[1], IDBKeyRange.lowerBound(i)),
                            s = new ln(L);
                        return mt(t).iterate({
                            range: a
                        }, function(t, e, i) {
                            var a = t[0],
                                u = t[1],
                                c = t[2],
                                h = lt(u);
                            if (a !== n.userId || !r.isPrefixOf(h)) return void i.done();
                            h.length === o && (s = s.add(c))
                        }).next(function() {
                            var e = [],
                                r = [];
                            return s.forEach(function(o) {
                                var i = n.keyForBatchId(o);
                                r.push(yt(t).get(i).next(function(t) {
                                    null === t && u("Dangling document-mutation reference found, which points to " + i), e.push(n.serializer.fromDbMutationBatch(t))
                                }))
                            }), Hn.waitFor(r).next(function() {
                                return e
                            })
                        })
                    }, t.prototype.removeMutationBatches = function(t, e) {
                        for (var n = yt(t), r = mt(t), o = [], i = this, a = 0, s = e; a < s.length; a++) {
                            var u = s[a];
                            ! function(t) {
                                var e = IDBKeyRange.only(i.keyForBatchId(t.batchId)),
                                    a = 0,
                                    s = n.iterate({
                                        range: e
                                    }, function(t, e, n) {
                                        return a++, n.delete()
                                    });
                                o.push(s.next(function() {
                                    c(1 === a, "Dangling document-mutation reference found: Missing batch " + t.batchId)
                                }));
                                for (var u = 0, h = t.mutations; u < h.length; u++) {
                                    var l = h[u],
                                        f = gr.key(i.userId, l.key.path, t.batchId);
                                    o.push(r.delete(f)), null !== i.garbageCollector && i.garbageCollector.addPotentialGarbageKey(l.key)
                                }
                            }(u)
                        }
                        return Hn.waitFor(o)
                    }, t.prototype.performConsistencyCheck = function(t) {
                        var e = this;
                        return this.checkEmpty(t).next(function(n) {
                            if (!n) return Hn.resolve();
                            var r = IDBKeyRange.lowerBound(gr.prefixForUser(e.userId)),
                                o = [];
                            return mt(t).iterate({
                                range: r
                            }, function(t, n, r) {
                                if (t[0] !== e.userId) return void r.done();
                                var i = lt(t[1]);
                                o.push(i)
                            }).next(function() {
                                c(0 === o.length, "Document leak -- detected dangling mutation references when queue is empty. Dangling keys: " + o.map(function(t) {
                                    return t.canonicalString()
                                }))
                            })
                        })
                    }, t.prototype.setGarbageCollector = function(t) {
                        this.garbageCollector = t
                    }, t.prototype.containsKey = function(t, e) {
                        var n = this,
                            r = gr.prefixForPath(this.userId, e.path),
                            o = r[1],
                            i = IDBKeyRange.lowerBound(r),
                            a = !1;
                        return mt(t).iterate({
                            range: i,
                            keysOnly: !0
                        }, function(t, e, r) {
                            var i = t[0],
                                s = t[1];
                            t[2], i === n.userId && s === o && (a = !0), r.done()
                        }).next(function() {
                            return a
                        })
                    }, t.prototype.keyForBatchId = function(t) {
                        return [this.userId, t]
                    }, t
                }(),
                Ar = function() {
                    function t(t) {
                        this.serializer = t, this.lastRemoteSnapshotVersion = He.MIN, this.metadata = new Tr(0, 0, He.MIN.toTimestamp()), this.garbageCollector = null
                    }
                    return t.prototype.start = function(t) {
                        var e = this;
                        return wt(t).get(Tr.key).next(function(t) {
                            if (null !== t) {
                                e.metadata = t;
                                var n = t.lastRemoteSnapshotVersion;
                                e.lastRemoteSnapshotVersion = He.fromTimestamp(new Ge(n.seconds, n.nanos))
                            }
                            return Hn.resolve()
                        })
                    }, t.prototype.getHighestTargetId = function() {
                        return this.metadata.highestTargetId
                    }, t.prototype.getLastRemoteSnapshotVersion = function() {
                        return this.lastRemoteSnapshotVersion
                    }, t.prototype.setLastRemoteSnapshotVersion = function(t, e) {
                        return this.lastRemoteSnapshotVersion = e, this.metadata.lastRemoteSnapshotVersion = e.toTimestamp(), wt(t).put(Tr.key, this.metadata)
                    }, t.prototype.addQueryData = function(t, e) {
                        var n = this,
                            r = e.targetId,
                            o = bt(t).put(this.serializer.toDbTarget(e));
                        return r > this.metadata.highestTargetId ? (this.metadata.highestTargetId = r, o.next(function() {
                            return wt(t).put(Tr.key, n.metadata)
                        })) : o
                    }, t.prototype.removeQueryData = function(t, e) {
                        return this.removeMatchingKeysForTargetId(t, e.targetId).next(function() {
                            bt(t).delete(e.targetId)
                        })
                    }, t.prototype.getQueryData = function(t, e) {
                        var n = this,
                            r = e.canonicalId(),
                            o = IDBKeyRange.bound([r, Number.NEGATIVE_INFINITY], [r, Number.POSITIVE_INFINITY]),
                            i = null;
                        return bt(t).iterate({
                            range: o,
                            index: wr.queryTargetsIndexName
                        }, function(t, r, o) {
                            var a = n.serializer.fromDbTarget(r);
                            e.equals(a.query) && (i = a, o.done())
                        }).next(function() {
                            return i
                        })
                    }, t.prototype.addMatchingKeys = function(t, e, n) {
                        var r = [],
                            o = It(t);
                        return e.forEach(function(t) {
                            var e = ut(t.path);
                            r.push(o.put(new Ir(n, e)))
                        }), Hn.waitFor(r)
                    }, t.prototype.removeMatchingKeys = function(t, e, n) {
                        var r = this,
                            o = [],
                            i = It(t);
                        return e.forEach(function(t) {
                            var e = ut(t.path);
                            o.push(i.delete([n, e])), null !== r.garbageCollector && r.garbageCollector.addPotentialGarbageKey(t)
                        }), Hn.waitFor(o)
                    }, t.prototype.removeMatchingKeysForTargetId = function(t, e) {
                        var n = It(t),
                            r = IDBKeyRange.bound([e], [e + 1], !1, !0);
                        return this.notifyGCForRemovedKeys(t, r).next(function() {
                            return n.delete(r)
                        })
                    }, t.prototype.notifyGCForRemovedKeys = function(t, e) {
                        var n = this,
                            r = It(t);
                        return null !== this.garbageCollector && this.garbageCollector.isEager ? r.iterate({
                            range: e,
                            keysOnly: !0
                        }, function(t, e, r) {
                            var o = lt(t[1]),
                                i = new se(o);
                            c(null !== n.garbageCollector, "GarbageCollector for query cache set to null during key removal."), n.garbageCollector.addPotentialGarbageKey(i)
                        }) : Hn.resolve()
                    }, t.prototype.getMatchingKeysForTargetId = function(t, e) {
                        var n = IDBKeyRange.bound([e], [e + 1], !1, !0),
                            r = It(t),
                            o = et();
                        return r.iterate({
                            range: n,
                            keysOnly: !0
                        }, function(t, e, n) {
                            var r = lt(t[1]),
                                i = new se(r);
                            o = o.add(i)
                        }).next(function() {
                            return o
                        })
                    }, t.prototype.setGarbageCollector = function(t) {
                        this.garbageCollector = t
                    }, t.prototype.containsKey = function(t, e) {
                        c(null !== t, "Persistence Transaction cannot be null for query cache containsKey");
                        var n = ut(e.path),
                            r = IDBKeyRange.bound([n], [F(n)], !1, !0),
                            o = 0;
                        return It(t).iterate({
                            index: Ir.documentTargetsIndex,
                            keysOnly: !0,
                            range: r
                        }, function(t, e, n) {
                            o++, n.done()
                        }).next(function() {
                            return o > 0
                        })
                    }, t
                }(),
                Rr = function() {
                    function t(t) {
                        this.serializer = t
                    }
                    return t.prototype.addEntry = function(t, e) {
                        return Et(t).put(St(e.key), this.serializer.toDbRemoteDocument(e))
                    }, t.prototype.removeEntry = function(t, e) {
                        return Et(t).delete(St(e))
                    }, t.prototype.getEntry = function(t, e) {
                        var n = this;
                        return Et(t).get(St(e)).next(function(t) {
                            return t ? n.serializer.fromDbRemoteDocument(t) : null
                        })
                    }, t.prototype.getDocumentsMatchingQuery = function(t, e) {
                        var n = this,
                            r = Z(),
                            o = e.path.toArray(),
                            i = IDBKeyRange.lowerBound(o);
                        return Et(t).iterate({
                            range: i
                        }, function(t, o, i) {
                            var a = n.serializer.fromDbRemoteDocument(o);
                            e.path.isPrefixOf(a.key.path) ? a instanceof ue && e.matches(a) && (r = r.insert(a.key, a)) : i.done()
                        }).next(function() {
                            return r
                        })
                    }, t
                }(),
                Or = function() {
                    function t(t) {
                        this.remoteSerializer = t
                    }
                    return t.prototype.fromDbRemoteDocument = function(t) {
                        if (t.document) return this.remoteSerializer.fromDocument(t.document);
                        if (t.noDocument) {
                            var e = se.fromSegments(t.noDocument.path),
                                n = t.noDocument.readTime,
                                r = new Ge(n.seconds, n.nanos);
                            return new ce(e, He.fromTimestamp(r))
                        }
                        return u("Unexpected DbRemoteDocument")
                    }, t.prototype.toDbRemoteDocument = function(t) {
                        if (t instanceof ue) {
                            var e = this.remoteSerializer.toDocument(t);
                            return new br(null, e)
                        }
                        var n = t.key.path.toArray(),
                            r = t.version.toTimestamp(),
                            o = new dr(r.seconds, r.nanos);
                        return new br(new vr(n, o), null)
                    }, t.prototype.toDbMutationBatch = function(t, e) {
                        var n = this,
                            r = e.mutations.map(function(t) {
                                return n.remoteSerializer.toMutation(t)
                            });
                        return new mr(t, e.batchId, e.localWriteTime.toEpochMilliseconds(), r)
                    }, t.prototype.fromDbMutationBatch = function(t) {
                        var e = this,
                            n = t.mutations.map(function(t) {
                                return e.remoteSerializer.fromMutation(t)
                            }),
                            r = Ge.fromEpochMilliseconds(t.localWriteTimeMs);
                        return new sr(t.batchId, r, n)
                    }, t.prototype.fromDbTarget = function(t) {
                        var e, n = new Ge(t.readTime.seconds, t.readTime.nanos),
                            r = He.fromTimestamp(n);
                        return e = Ct(t.query) ? this.remoteSerializer.fromDocumentsTarget(t.query) : this.remoteSerializer.fromQueryTarget(t.query), new Xe(e, t.targetId, me.Listen, r, t.resumeToken)
                    }, t.prototype.toDbTarget = function(t) {
                        c(me.Listen === t.purpose, "Only queries with purpose " + me.Listen + " may be stored, got " + t.purpose);
                        var e, n = t.snapshotVersion.toTimestamp(),
                            r = new dr(n.seconds, n.nanos);
                        e = t.query.isDocumentQuery() ? this.remoteSerializer.toDocumentsTarget(t.query) : this.remoteSerializer.toQueryTarget(t.query), c("string" == typeof t.resumeToken, "Persisting non-string resume token not supported.");
                        var o = t.resumeToken;
                        return new wr(t.targetId, t.query.canonicalId(), r, o, 0, e)
                    }, t
                }(),
                Mr = "There is another tab open with offline persistence enabled. Only one such tab is allowed at a time. The other tab must be closed or persistence must be disabled.",
                _r = function() {
                    function t(e, n) {
                        this.ownerId = this.generateOwnerId(), this.dbName = e + t.MAIN_DATABASE, this.serializer = new Or(n), this.localStoragePrefix = e
                    }
                    return t.prototype.start = function() {
                        var e = this;
                        return t.isAvailable() ? (c(!this.started, "IndexedDbPersistence double-started!"), this.started = !0, Sr.openOrCreate(this.dbName, 1, ft).then(function(t) {
                            e.simpleDb = t
                        }).then(function() {
                            return e.tryAcquireOwnerLease()
                        }).then(function() {
                            e.scheduleOwnerLeaseRefreshes(), e.attachWindowUnloadHook()
                        })) : (this.persistenceError = new zt(Ht.UNIMPLEMENTED, "This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled."), Promise.reject(this.persistenceError))
                    }, t.prototype.shutdown = function() {
                        var t = this;
                        return c(this.started, "IndexedDbPersistence shutdown without start!"), this.started = !1, this.detachWindowUnloadHook(), this.stopOwnerLeaseRefreshes(), this.releaseOwnerLease().then(function() {
                            t.simpleDb.close()
                        })
                    }, t.prototype.getMutationQueue = function(t) {
                        return Nr.forUser(t, this.serializer)
                    }, t.prototype.getQueryCache = function() {
                        return new Ar(this.serializer)
                    }, t.prototype.getRemoteDocumentCache = function() {
                        return new Rr(this.serializer)
                    }, t.prototype.runTransaction = function(t, e) {
                        var n = this;
                        return this.persistenceError ? Promise.reject(this.persistenceError) : (i("IndexedDbPersistence", "Starting transaction:", t), this.simpleDb.runTransaction("readwrite", Er, function(t) {
                            return n.ensureOwnerLease(t).next(function() {
                                return e(t)
                            })
                        }))
                    }, t.isAvailable = function() {
                        return Sr.isAvailable()
                    }, t.buildStoragePrefix = function(t) {
                        var e = t.databaseId.projectId;
                        return t.databaseId.isDefaultDatabase || (e += "." + t.databaseId.database), "firestore/" + t.persistenceKey + "/" + e + "/"
                    }, t.prototype.tryAcquireOwnerLease = function() {
                        var t = this;
                        return this.simpleDb.runTransaction("readwrite", [pr.store], function(e) {
                            var n = e.store(pr.store);
                            return n.get("owner").next(function(e) {
                                if (t.validOwner(e)) return i("IndexedDbPersistence", "Valid owner already. Failing. Current owner:", e), t.persistenceError = new zt(Ht.FAILED_PRECONDITION, Mr), Hn.reject(t.persistenceError);
                                var r = new pr(t.ownerId, Date.now());
                                return i("IndexedDbPersistence", "No valid owner. Acquiring owner lease. Current owner:", e, "New owner:", r), n.put("owner", r)
                            })
                        })
                    }, t.prototype.releaseOwnerLease = function() {
                        var t = this;
                        return this.simpleDb.runTransaction("readwrite", [pr.store], function(e) {
                            var n = e.store(pr.store);
                            return n.get("owner").next(function(e) {
                                return null !== e && e.ownerId === t.ownerId ? (i("IndexedDbPersistence", "Releasing owner lease."), n.delete("owner")) : Hn.resolve()
                            })
                        })
                    }, t.prototype.ensureOwnerLease = function(t) {
                        var e = this;
                        return t.store(pr.store).get("owner").next(function(t) {
                            return null === t || t.ownerId !== e.ownerId ? (e.persistenceError = new zt(Ht.FAILED_PRECONDITION, Mr), Hn.reject(e.persistenceError)) : Hn.resolve()
                        })
                    }, t.prototype.validOwner = function(t) {
                        var e = Date.now(),
                            n = e - 5e3,
                            r = e;
                        return !(null === t || t.leaseTimestampMs < n || (t.leaseTimestampMs > r ? (a("Persistence owner-lease is in the future. Discarding.", t), 1) : t.ownerId === this.getZombiedOwnerId()))
                    }, t.prototype.scheduleOwnerLeaseRefreshes = function() {
                        var t = this;
                        this.ownerLeaseRefreshHandle = setInterval(function() {
                            t.runTransaction("Refresh owner timestamp", function(e) {
                                return e.store(pr.store).put("owner", new pr(t.ownerId, Date.now()))
                            }).catch(function(e) {
                                a(e), t.stopOwnerLeaseRefreshes()
                            })
                        }, 4e3)
                    }, t.prototype.stopOwnerLeaseRefreshes = function() {
                        this.ownerLeaseRefreshHandle && (clearInterval(this.ownerLeaseRefreshHandle), this.ownerLeaseRefreshHandle = null)
                    }, t.prototype.attachWindowUnloadHook = function() {
                        var t = this;
                        this.windowUnloadHandler = function() {
                            t.setZombiedOwnerId(t.ownerId), t.shutdown()
                        }, window.addEventListener("unload", this.windowUnloadHandler)
                    }, t.prototype.detachWindowUnloadHook = function() {
                        this.windowUnloadHandler && (window.removeEventListener("unload", this.windowUnloadHandler), this.windowUnloadHandler = null)
                    }, t.prototype.getZombiedOwnerId = function() {
                        try {
                            var t = window.localStorage.getItem(this.zombiedOwnerLocalStorageKey());
                            return i("IndexedDbPersistence", "Zombied ownerID from LocalStorage:", t), t
                        } catch (t) {
                            return a("Failed to get zombie owner id.", t), null
                        }
                    }, t.prototype.setZombiedOwnerId = function(t) {
                        try {
                            null === t ? window.localStorage.removeItem(this.zombiedOwnerLocalStorageKey()) : window.localStorage.setItem(this.zombiedOwnerLocalStorageKey(), t)
                        } catch (t) {
                            a("Failed to set zombie owner id.", t)
                        }
                    }, t.prototype.zombiedOwnerLocalStorageKey = function() {
                        return this.localStoragePrefix + "zombiedOwnerId"
                    }, t.prototype.generateOwnerId = function() {
                        return Xt.newId()
                    }, t.MAIN_DATABASE = "main", t
                }(),
                Pr = function() {
                    function t(t, e) {
                        this.remoteDocumentCache = t, this.mutationQueue = e
                    }
                    return t.prototype.getDocument = function(t, e) {
                        var n = this;
                        return this.remoteDocumentCache.getEntry(t, e).next(function(r) {
                            return n.computeLocalDocument(t, e, r)
                        })
                    }, t.prototype.getDocuments = function(t, e) {
                        var n = this,
                            r = [],
                            o = $();
                        return e.forEach(function(e) {
                            r.push(n.getDocument(t, e).next(function(t) {
                                t || (t = new ce(e, He.forDeletedDoc())), o = o.insert(e, t)
                            }))
                        }), Hn.waitFor(r).next(function() {
                            return o
                        })
                    }, t.prototype.getDocumentsMatchingQuery = function(t, e) {
                        return se.isDocumentKey(e.path) ? this.getDocumentsMatchingDocumentQuery(t, e.path) : this.getDocumentsMatchingCollectionQuery(t, e)
                    }, t.prototype.getDocumentsMatchingDocumentQuery = function(t, e) {
                        return this.getDocument(t, new se(e)).next(function(t) {
                            var e = Z();
                            return t instanceof ue && (e = e.insert(t.key, t)), e
                        })
                    }, t.prototype.getDocumentsMatchingCollectionQuery = function(t, e) {
                        var n, r = this;
                        return this.remoteDocumentCache.getDocumentsMatchingQuery(t, e).next(function(e) {
                            return r.computeLocalDocuments(t, e)
                        }).next(function(o) {
                            return n = o, r.mutationQueue.getAllMutationBatchesAffectingQuery(t, e)
                        }).next(function(e) {
                            for (var o = et(), i = 0, a = e; i < a.length; i++)
                                for (var s = a[i], u = 0, c = s.mutations; u < c.length; u++) {
                                    var h = c[u];
                                    n.get(h.key) || (o = o.add(h.key))
                                }
                            var l = [];
                            return o.forEach(function(e) {
                                l.push(r.getDocument(t, e).next(function(t) {
                                    t instanceof ue && (n = n.insert(t.key, t))
                                }))
                            }), Hn.waitFor(l)
                        }).next(function() {
                            return n.forEach(function(t, r) {
                                e.matches(r) || (n = n.remove(t))
                            }), n
                        })
                    }, t.prototype.computeLocalDocument = function(t, e, n) {
                        return this.mutationQueue.getAllMutationBatchesAffectingDocumentKey(t, e).next(function(t) {
                            for (var r = 0, o = t; r < o.length; r++) {
                                var i = o[r];
                                n = i.applyToLocalView(e, n)
                            }
                            return n
                        })
                    }, t.prototype.computeLocalDocuments = function(t, e) {
                        var n = this,
                            r = [];
                        return e.forEach(function(o, i) {
                            r.push(n.computeLocalDocument(t, o, i).next(function(t) {
                                t instanceof ue ? e = e.insert(t.key, t) : t instanceof ce ? e = e.remove(t.key) : u("Unknown MaybeDocument: " + t)
                            }))
                        }), Hn.waitFor(r).next(function() {
                            return e
                        })
                    }, t
                }(),
                Lr = function() {
                    function t(t) {
                        this.remoteDocumentCache = t, this.changes = $()
                    }
                    return t.prototype.addEntry = function(t) {
                        var e = this.assertChanges();
                        this.changes = e.insert(t.key, t)
                    }, t.prototype.getEntry = function(t, e) {
                        var n = this.assertChanges(),
                            r = n.get(e);
                        return r ? Hn.resolve(r) : this.remoteDocumentCache.getEntry(t, e)
                    }, t.prototype.apply = function(t) {
                        var e = this,
                            n = this.assertChanges(),
                            r = [];
                        return n.forEach(function(n, o) {
                            r.push(e.remoteDocumentCache.addEntry(t, o))
                        }), this.changes = null, Hn.waitFor(r)
                    }, t.prototype.assertChanges = function() {
                        return c(null !== this.changes, "Changes have already been applied."), this.changes
                    }, t
                }(),
                xr = function() {
                    function t(t, e, n) {
                        this.persistence = t, this.garbageCollector = n, this.localViewReferences = new Yn, this.targetIds = {}, this.targetIdGenerator = tr.forLocalStore(), this.heldBatchResults = [], this.mutationQueue = t.getMutationQueue(e), this.remoteDocuments = t.getRemoteDocumentCache(), this.queryCache = t.getQueryCache(), this.localDocuments = new Pr(this.remoteDocuments, this.mutationQueue), this.garbageCollector.addGarbageSource(this.localViewReferences), this.garbageCollector.addGarbageSource(this.queryCache), this.garbageCollector.addGarbageSource(this.mutationQueue)
                    }
                    return t.prototype.start = function() {
                        var t = this;
                        return this.persistence.runTransaction("Start LocalStore", function(e) {
                            return t.startMutationQueue(e).next(function() {
                                return t.startQueryCache(e)
                            })
                        })
                    }, t.prototype.handleUserChange = function(t) {
                        var e = this;
                        return this.persistence.runTransaction("Handle user change", function(n) {
                            var r;
                            return e.mutationQueue.getAllMutationBatches(n).next(function(o) {
                                return r = o, e.garbageCollector.removeGarbageSource(e.mutationQueue), e.mutationQueue = e.persistence.getMutationQueue(t), e.garbageCollector.addGarbageSource(e.mutationQueue), e.startMutationQueue(n)
                            }).next(function() {
                                return e.localDocuments = new Pr(e.remoteDocuments, e.mutationQueue), e.mutationQueue.getAllMutationBatches(n)
                            }).next(function(t) {
                                for (var o = et(), i = 0, a = [r, t]; i < a.length; i++)
                                    for (var s = a[i], u = 0, c = s; u < c.length; u++)
                                        for (var h = c[u], l = 0, f = h.mutations; l < f.length; l++) {
                                            var d = f[l];
                                            o = o.add(d.key)
                                        }
                                return e.localDocuments.getDocuments(n, o)
                            })
                        })
                    }, t.prototype.startQueryCache = function(t) {
                        var e = this;
                        return this.queryCache.start(t).next(function() {
                            var t = e.queryCache.getHighestTargetId();
                            e.targetIdGenerator = tr.forLocalStore(t)
                        })
                    }, t.prototype.startMutationQueue = function(t) {
                        var e = this;
                        return this.mutationQueue.start(t).next(function() {
                            return e.heldBatchResults = [], e.mutationQueue.getHighestAcknowledgedBatchId(t)
                        }).next(function(n) {
                            return n !== ar ? e.mutationQueue.getAllMutationBatchesThroughBatchId(t, n) : Hn.resolve([])
                        }).next(function(n) {
                            return n.length > 0 ? e.mutationQueue.removeMutationBatches(t, n) : Hn.resolve()
                        })
                    }, t.prototype.localWrite = function(t) {
                        var e = this;
                        return this.persistence.runTransaction("Locally write mutations", function(n) {
                            var r, o = Ge.now();
                            return e.mutationQueue.addMutationBatch(n, o, t).next(function(t) {
                                r = t;
                                var o = r.keys();
                                return e.localDocuments.getDocuments(n, o)
                            }).next(function(t) {
                                return {
                                    batchId: r.batchId,
                                    changes: t
                                }
                            })
                        })
                    }, t.prototype.acknowledgeBatch = function(t) {
                        var e = this;
                        return this.persistence.runTransaction("Acknowledge batch", function(n) {
                            var r;
                            return e.mutationQueue.acknowledgeBatch(n, t.batch, t.streamToken).next(function() {
                                if (e.shouldHoldBatchResult(t.commitVersion)) return e.heldBatchResults.push(t), r = et(), Hn.resolve();
                                var o = new Lr(e.remoteDocuments);
                                return e.releaseBatchResults(n, [t], o).next(function(t) {
                                    return r = t, o.apply(n)
                                })
                            }).next(function() {
                                return e.mutationQueue.performConsistencyCheck(n)
                            }).next(function() {
                                return e.localDocuments.getDocuments(n, r)
                            })
                        })
                    }, t.prototype.rejectBatch = function(t) {
                        var e = this;
                        return this.persistence.runTransaction("Reject batch", function(n) {
                            var r, o;
                            return e.mutationQueue.lookupMutationBatch(n, t).next(function(o) {
                                return c(null != o, "Attempt to reject nonexistent batch!"), r = o, e.mutationQueue.getHighestAcknowledgedBatchId(n).next(function(e) {
                                    return c(t > e, "Acknowledged batches can't be rejected."), r
                                })
                            }).next(function() {
                                return e.removeMutationBatch(n, r)
                            }).next(function(t) {
                                return o = t, e.mutationQueue.performConsistencyCheck(n)
                            }).next(function() {
                                return e.localDocuments.getDocuments(n, o)
                            })
                        })
                    }, t.prototype.getLastStreamToken = function() {
                        var t = this;
                        return this.persistence.runTransaction("Get last stream token", function(e) {
                            return t.mutationQueue.getLastStreamToken(e)
                        })
                    }, t.prototype.setLastStreamToken = function(t) {
                        var e = this;
                        return this.persistence.runTransaction("Set last stream token", function(n) {
                            return e.mutationQueue.setLastStreamToken(n, t)
                        })
                    }, t.prototype.getLastRemoteSnapshotVersion = function() {
                        return this.queryCache.getLastRemoteSnapshotVersion()
                    }, t.prototype.applyRemoteEvent = function(t) {
                        var e = this,
                            n = new Lr(this.remoteDocuments);
                        return this.persistence.runTransaction("Apply remote event", function(r) {
                            var o = [];
                            p(t.targetChanges, function(t, n) {
                                var i = e.targetIds[t];
                                if (i) {
                                    var a = n.mapping;
                                    if (a)
                                        if (a instanceof bn) o.push(e.queryCache.removeMatchingKeysForTargetId(r, t).next(function() {
                                            return e.queryCache.addMatchingKeys(r, a.documents, t)
                                        }));
                                        else {
                                            if (!(a instanceof wn)) return u("Unknown mapping type: " + JSON.stringify(a));
                                            o.push(e.queryCache.removeMatchingKeys(r, a.removedDocuments, t).next(function() {
                                                return e.queryCache.addMatchingKeys(r, a.addedDocuments, t)
                                            }))
                                        }
                                    var s = n.resumeToken;
                                    s.length > 0 && (i = i.update({
                                        resumeToken: s,
                                        snapshotVersion: n.snapshotVersion
                                    }), e.targetIds[t] = i, o.push(e.queryCache.addQueryData(r, i)))
                                }
                            });
                            var a = et();
                            t.documentUpdates.forEach(function(t, s) {
                                a = a.add(t), o.push(n.getEntry(r, t).next(function(r) {
                                    null == r || s.version.equals(He.MIN) || s.version.compareTo(r.version) >= 0 ? n.addEntry(s) : i("LocalStore", "Ignoring outdated watch update for ", t, ". Current version:", r.version, " Watch version:", s.version), e.garbageCollector.addPotentialGarbageKey(t)
                                }))
                            });
                            var s = e.queryCache.getLastRemoteSnapshotVersion(),
                                h = t.snapshotVersion;
                            h.equals(He.MIN) || (c(h.compareTo(s) >= 0, "Watch stream reverted to previous snapshot?? " + h + " < " + s), o.push(e.queryCache.setLastRemoteSnapshotVersion(r, h)));
                            var l;
                            return Hn.waitFor(o).next(function() {
                                return e.releaseHeldBatchResults(r, n)
                            }).next(function(t) {
                                return l = t, n.apply(r)
                            }).next(function() {
                                return e.localDocuments.getDocuments(r, a.unionWith(l))
                            })
                        })
                    }, t.prototype.notifyLocalViewChanges = function(t) {
                        var e = this;
                        return this.persistence.runTransaction("Notify local view changes", function(n) {
                            for (var r = [], o = 0, i = t; o < i.length; o++) {
                                var a = i[o];
                                ! function(t) {
                                    r.push(e.queryCache.getQueryData(n, t.query).next(function(n) {
                                        c(null !== n, "Local view changes contain unallocated query.");
                                        var r = n.targetId;
                                        e.localViewReferences.addReferences(t.addedKeys, r), e.localViewReferences.removeReferences(t.removedKeys, r)
                                    }))
                                }(a)
                            }
                            return Hn.waitFor(r)
                        })
                    }, t.prototype.nextMutationBatch = function(t) {
                        var e = this;
                        return this.persistence.runTransaction("Get next mutation batch", function(n) {
                            return void 0 === t && (t = ar), e.mutationQueue.getNextMutationBatchAfterBatchId(n, t)
                        })
                    }, t.prototype.readDocument = function(t) {
                        var e = this;
                        return this.persistence.runTransaction("read document", function(n) {
                            return e.localDocuments.getDocument(n, t)
                        })
                    }, t.prototype.allocateQuery = function(t) {
                        var e = this;
                        return this.persistence.runTransaction("Allocate query", function(n) {
                            var r;
                            return e.queryCache.getQueryData(n, t).next(function(o) {
                                if (o) return r = o, Hn.resolve();
                                var i = e.targetIdGenerator.next();
                                return r = new Xe(t, i, me.Listen), e.queryCache.addQueryData(n, r)
                            }).next(function() {
                                return c(!e.targetIds[r.targetId], "Tried to allocate an already allocated query: " + t), e.targetIds[r.targetId] = r, r
                            })
                        })
                    }, t.prototype.releaseQuery = function(t) {
                        var e = this;
                        return this.persistence.runTransaction("Release query", function(n) {
                            return e.queryCache.getQueryData(n, t).next(function(r) {
                                return c(null != r, "Tried to release nonexistent query: " + t), e.localViewReferences.removeReferencesForId(r.targetId), delete e.targetIds[r.targetId], e.garbageCollector.isEager ? e.queryCache.removeQueryData(n, r) : Hn.resolve()
                            }).next(function() {
                                if (m(e.targetIds)) {
                                    var t = new Lr(e.remoteDocuments);
                                    return e.releaseHeldBatchResults(n, t).next(function() {
                                        t.apply(n)
                                    })
                                }
                                return Hn.resolve()
                            })
                        })
                    }, t.prototype.executeQuery = function(t) {
                        var e = this;
                        return this.persistence.runTransaction("Execute query", function(n) {
                            return e.localDocuments.getDocumentsMatchingQuery(n, t)
                        })
                    }, t.prototype.remoteDocumentKeys = function(t) {
                        var e = this;
                        return this.persistence.runTransaction("Remote document keys", function(n) {
                            return e.queryCache.getMatchingKeysForTargetId(n, t)
                        })
                    }, t.prototype.collectGarbage = function() {
                        var t = this;
                        return this.persistence.runTransaction("Garbage collection", function(e) {
                            return t.garbageCollector.collectGarbage(e).next(function(n) {
                                var r = [];
                                return n.forEach(function(n) {
                                    r.push(t.remoteDocuments.removeEntry(e, n))
                                }), Hn.waitFor(r)
                            })
                        })
                    }, t.prototype.releaseHeldBatchResults = function(t, e) {
                        for (var n = [], r = 0, o = this.heldBatchResults; r < o.length; r++) {
                            var i = o[r];
                            if (!this.isRemoteUpToVersion(i.commitVersion)) break;
                            n.push(i)
                        }
                        return 0 === n.length ? Hn.resolve(et()) : (this.heldBatchResults.splice(0, n.length), this.releaseBatchResults(t, n, e))
                    }, t.prototype.isRemoteUpToVersion = function(t) {
                        var e = this.queryCache.getLastRemoteSnapshotVersion();
                        return t.compareTo(e) <= 0 || m(this.targetIds)
                    }, t.prototype.shouldHoldBatchResult = function(t) {
                        return !this.isRemoteUpToVersion(t) || this.heldBatchResults.length > 0
                    }, t.prototype.releaseBatchResults = function(t, e, n) {
                        for (var r = this, o = Hn.resolve(), i = 0, a = e; i < a.length; i++) {
                            var s = a[i];
                            ! function(e) {
                                o = o.next(function() {
                                    return r.applyWriteToRemoteDocuments(t, e, n)
                                })
                            }(s)
                        }
                        return o.next(function() {
                            return r.removeMutationBatches(t, e.map(function(t) {
                                return t.batch
                            }))
                        })
                    }, t.prototype.removeMutationBatch = function(t, e) {
                        return this.removeMutationBatches(t, [e])
                    }, t.prototype.removeMutationBatches = function(t, e) {
                        for (var n = et(), r = 0, o = e; r < o.length; r++)
                            for (var i = o[r], a = 0, s = i.mutations; a < s.length; a++) {
                                var u = s[a],
                                    c = u.key;
                                n = n.add(c)
                            }
                        return this.mutationQueue.removeMutationBatches(t, e).next(function() {
                            return n
                        })
                    }, t.prototype.applyWriteToRemoteDocuments = function(t, e, n) {
                        var r = e.batch,
                            o = r.keys(),
                            i = Hn.resolve();
                        return o.forEach(function(o) {
                            i = i.next(function() {
                                return n.getEntry(t, o)
                            }).next(function(t) {
                                var i = t,
                                    a = e.docVersions.get(o);
                                c(null !== a, "ackVersions should contain every doc in the write."), (!i || i.version.compareTo(a) < 0) && (i = r.applyToRemoteDocument(o, i, e), i ? n.addEntry(i) : c(!t, "Mutation batch " + r + " applied to document " + t + " resulted in null"))
                            })
                        }), i
                    }, t
                }(),
                Br = function() {
                    function t() {
                        this.mutationQueue = [], this.nextBatchId = 1, this.highestAcknowledgedBatchId = ar, this.lastStreamToken = h(), this.garbageCollector = null, this.batchesByDocumentKey = new ln(Jn.compareByKey)
                    }
                    return t.prototype.start = function(t) {
                        return 0 === this.mutationQueue.length && (this.nextBatchId = 1, this.highestAcknowledgedBatchId = ar), c(this.highestAcknowledgedBatchId < this.nextBatchId, "highestAcknowledgedBatchId must be less than the nextBatchId"), Hn.resolve()
                    }, t.prototype.checkEmpty = function(t) {
                        return Hn.resolve(0 === this.mutationQueue.length)
                    }, t.prototype.getNextBatchId = function(t) {
                        return Hn.resolve(this.nextBatchId)
                    }, t.prototype.getHighestAcknowledgedBatchId = function(t) {
                        return Hn.resolve(this.highestAcknowledgedBatchId)
                    }, t.prototype.acknowledgeBatch = function(t, e, n) {
                        var r = e.batchId;
                        c(r > this.highestAcknowledgedBatchId, "Mutation batchIDs must be acknowledged in order");
                        var o = this.indexOfExistingBatchId(r, "acknowledged"),
                            i = this.mutationQueue[o];
                        return c(r === i.batchId, "Queue ordering failure: expected batch " + r + ", got batch " + i.batchId), c(!i.isTombstone(), "Can't acknowledge a previously removed batch"), this.highestAcknowledgedBatchId = r, this.lastStreamToken = n, Hn.resolve()
                    }, t.prototype.getLastStreamToken = function(t) {
                        return Hn.resolve(this.lastStreamToken)
                    }, t.prototype.setLastStreamToken = function(t, e) {
                        return this.lastStreamToken = e, Hn.resolve()
                    }, t.prototype.addMutationBatch = function(t, e, n) {
                        c(0 !== n.length, "Mutation batches should not be empty");
                        var r = this.nextBatchId;
                        this.nextBatchId++, this.mutationQueue.length > 0 && c(this.mutationQueue[this.mutationQueue.length - 1].batchId < r, "Mutation batchIDs must be monotonically increasing order");
                        var o = new sr(r, e, n);
                        this.mutationQueue.push(o);
                        for (var i = 0, a = n; i < a.length; i++) {
                            var s = a[i];
                            this.batchesByDocumentKey = this.batchesByDocumentKey.add(new Jn(s.key, r))
                        }
                        return Hn.resolve(o)
                    }, t.prototype.lookupMutationBatch = function(t, e) {
                        return Hn.resolve(this.findMutationBatch(e))
                    }, t.prototype.getNextMutationBatchAfterBatchId = function(t, e) {
                        var n = this.mutationQueue.length;
                        e = Math.max(e + 1, this.highestAcknowledgedBatchId);
                        for (var r = this.indexOfBatchId(e), o = r < 0 ? 0 : r; o < n; o++) {
                            var i = this.mutationQueue[o];
                            if (!i.isTombstone()) return Hn.resolve(i)
                        }
                        return Hn.resolve(null)
                    }, t.prototype.getAllMutationBatches = function(t) {
                        return Hn.resolve(this.getAllLiveMutationBatchesBeforeIndex(this.mutationQueue.length))
                    }, t.prototype.getAllMutationBatchesThroughBatchId = function(t, e) {
                        var n = this.mutationQueue.length,
                            r = this.indexOfBatchId(e);
                        return r < 0 ? r = 0 : r >= n ? r = n : r++, Hn.resolve(this.getAllLiveMutationBatchesBeforeIndex(r))
                    }, t.prototype.getAllMutationBatchesAffectingDocumentKey = function(t, e) {
                        var n = this,
                            r = new Jn(e, 0),
                            o = new Jn(e, Number.POSITIVE_INFINITY),
                            i = [];
                        return this.batchesByDocumentKey.forEachInRange([r, o], function(t) {
                            c(e.equals(t.key), "Should only iterate over a single key's batches");
                            var r = n.findMutationBatch(t.targetOrBatchId);
                            c(null !== r, "Batches in the index must exist in the main table"), i.push(r)
                        }), Hn.resolve(i)
                    }, t.prototype.getAllMutationBatchesAffectingQuery = function(t, e) {
                        var n = this,
                            r = e.path,
                            o = r.length + 1,
                            i = r;
                        se.isDocumentKey(i) || (i = i.child(""));
                        var a = new Jn(new se(i), 0),
                            s = new ln(L);
                        this.batchesByDocumentKey.forEachWhile(function(t) {
                            var e = t.key.path;
                            return !!r.isPrefixOf(e) && (e.length === o && (s = s.add(t.targetOrBatchId)), !0)
                        }, a);
                        var u = [];
                        return s.forEach(function(t) {
                            var e = n.findMutationBatch(t);
                            null !== e && u.push(e)
                        }), Hn.resolve(u)
                    }, t.prototype.removeMutationBatches = function(t, e) {
                        var n = e.length;
                        c(n > 0, "Should not remove mutations when none exist.");
                        var r = e[0].batchId,
                            o = this.mutationQueue.length,
                            i = this.indexOfExistingBatchId(r, "removed");
                        c(this.mutationQueue[i].batchId === r, "Removed batches must exist in the queue");
                        for (var a = 1, s = i + 1; a < n && s < o;) {
                            var u = this.mutationQueue[s];
                            u.isTombstone() ? s++ : (c(u.batchId === e[a].batchId, "Removed batches must be contiguous in the queue"), a++, s++)
                        }
                        if (0 === i) {
                            for (; s < o; s++) {
                                var u = this.mutationQueue[s];
                                if (!u.isTombstone()) break
                            }
                            var h = s - i;
                            this.mutationQueue.splice(i, h)
                        } else
                            for (var l = i; l < s; l++) this.mutationQueue[l] = this.mutationQueue[l].toTombstone();
                        for (var f = this.batchesByDocumentKey, d = 0, p = e; d < p.length; d++)
                            for (var u = p[d], y = u.batchId, m = 0, g = u.mutations; m < g.length; m++) {
                                var v = g[m],
                                    b = v.key;
                                null !== this.garbageCollector && this.garbageCollector.addPotentialGarbageKey(b);
                                var w = new Jn(b, y);
                                f = f.delete(w)
                            }
                        return this.batchesByDocumentKey = f, Hn.resolve()
                    }, t.prototype.setGarbageCollector = function(t) {
                        this.garbageCollector = t
                    }, t.prototype.containsKey = function(t, e) {
                        var n = new Jn(e, 0),
                            r = this.batchesByDocumentKey.firstAfterOrEqual(n);
                        return Hn.resolve(e.equals(r && r.key))
                    }, t.prototype.performConsistencyCheck = function(t) {
                        return 0 === this.mutationQueue.length && c(this.batchesByDocumentKey.isEmpty(), "Document leak -- detected dangling mutation references when queue is empty."), Hn.resolve()
                    }, t.prototype.getAllLiveMutationBatchesBeforeIndex = function(t) {
                        for (var e = [], n = 0; n < t; n++) {
                            var r = this.mutationQueue[n];
                            r.isTombstone() || e.push(r)
                        }
                        return e
                    }, t.prototype.indexOfExistingBatchId = function(t, e) {
                        var n = this.indexOfBatchId(t);
                        return c(n >= 0 && n < this.mutationQueue.length, "Batches must exist to be " + e), n
                    }, t.prototype.indexOfBatchId = function(t) {
                        return 0 === this.mutationQueue.length ? 0 : t - this.mutationQueue[0].batchId
                    }, t.prototype.findMutationBatch = function(t) {
                        var e = this.indexOfBatchId(t);
                        if (e < 0 || e >= this.mutationQueue.length) return null;
                        var n = this.mutationQueue[e];
                        return c(n.batchId === t, "If found batch must match"), n.isTombstone() ? null : n
                    }, t
                }(),
                Ur = function() {
                    function t() {
                        this.queries = new Qn(function(t) {
                            return t.canonicalId()
                        }), this.lastRemoteSnapshotVersion = He.MIN, this.highestTargetId = 0, this.references = new Yn
                    }
                    return t.prototype.start = function(t) {
                        return Hn.resolve()
                    }, t.prototype.getLastRemoteSnapshotVersion = function() {
                        return this.lastRemoteSnapshotVersion
                    }, t.prototype.getHighestTargetId = function() {
                        return this.highestTargetId
                    }, t.prototype.setLastRemoteSnapshotVersion = function(t, e) {
                        return this.lastRemoteSnapshotVersion = e, Hn.resolve()
                    }, t.prototype.addQueryData = function(t, e) {
                        this.queries.set(e.query, e);
                        var n = e.targetId;
                        return n > this.highestTargetId && (this.highestTargetId = n), Hn.resolve()
                    }, t.prototype.removeQueryData = function(t, e) {
                        return this.queries.delete(e.query), this.references.removeReferencesForId(e.targetId), Hn.resolve()
                    }, t.prototype.getQueryData = function(t, e) {
                        var n = this.queries.get(e) || null;
                        return Hn.resolve(n)
                    }, t.prototype.addMatchingKeys = function(t, e, n) {
                        return this.references.addReferences(e, n), Hn.resolve()
                    }, t.prototype.removeMatchingKeys = function(t, e, n) {
                        return this.references.removeReferences(e, n), Hn.resolve()
                    }, t.prototype.removeMatchingKeysForTargetId = function(t, e) {
                        return this.references.removeReferencesForId(e), Hn.resolve()
                    }, t.prototype.getMatchingKeysForTargetId = function(t, e) {
                        var n = this.references.referencesForId(e);
                        return Hn.resolve(n)
                    }, t.prototype.setGarbageCollector = function(t) {
                        this.references.setGarbageCollector(t)
                    }, t.prototype.containsKey = function(t, e) {
                        return this.references.containsKey(t, e)
                    }, t
                }(),
                Fr = function() {
                    function t() {
                        this.docs = $()
                    }
                    return t.prototype.addEntry = function(t, e) {
                        return this.docs = this.docs.insert(e.key, e), Hn.resolve()
                    }, t.prototype.removeEntry = function(t, e) {
                        return this.docs = this.docs.remove(e), Hn.resolve()
                    }, t.prototype.getEntry = function(t, e) {
                        return Hn.resolve(this.docs.get(e))
                    }, t.prototype.getDocumentsMatchingQuery = function(t, e) {
                        for (var n = Z(), r = new se(e.path.child("")), o = this.docs.getIteratorFrom(r); o.hasNext();) {
                            var i = o.getNext(),
                                a = i.key,
                                s = i.value;
                            if (!e.path.isPrefixOf(a.path)) break;
                            s instanceof ue && e.matches(s) && (n = n.insert(s.key, s))
                        }
                        return Hn.resolve(n)
                    }, t
                }(),
                Vr = function() {
                    function t() {
                        this.mutationQueues = {}, this.remoteDocumentCache = new Fr, this.queryCache = new Ur, this.started = !1
                    }
                    return t.prototype.start = function() {
                        return c(!this.started, "MemoryPersistence double-started!"), this.started = !0, Promise.resolve()
                    }, t.prototype.shutdown = function() {
                        return c(this.started, "MemoryPersistence shutdown without start!"), this.started = !1, Promise.resolve()
                    }, t.prototype.getMutationQueue = function(t) {
                        var e = this.mutationQueues[t.toKey()];
                        return e || (e = new Br, this.mutationQueues[t.toKey()] = e), e
                    }, t.prototype.getQueryCache = function() {
                        return this.queryCache
                    }, t.prototype.getRemoteDocumentCache = function() {
                        return this.remoteDocumentCache
                    }, t.prototype.runTransaction = function(t, e) {
                        return i("MemoryPersistence", "Starting transaction:", t), e(new qr).toPromise()
                    }, t
                }(),
                qr = function() {
                    function t() {}
                    return t
                }(),
                jr = function() {
                    function t() {
                        this.isEager = !1
                    }
                    return t.prototype.addGarbageSource = function(t) {}, t.prototype.removeGarbageSource = function(t) {}, t.prototype.addPotentialGarbageKey = function(t) {}, t.prototype.collectGarbage = function(t) {
                        return Hn.resolve(et())
                    }, t
                }(),
                Qr = function() {
                    function t() {
                        var t = this;
                        this.promise = new Promise(function(e, n) {
                            t.resolve = e, t.reject = n
                        })
                    }
                    return t
                }(),
                Kr = function() {
                    function t(t, e, n) {
                        this.initialDelayMs = t, this.backoffFactor = e, this.maxDelayMs = n, this.reset()
                    }
                    return t.prototype.reset = function() {
                        this.currentBaseMs = 0
                    }, t.prototype.resetToMax = function() {
                        this.currentBaseMs = this.maxDelayMs
                    }, t.prototype.backoffAndWait = function() {
                        var t = new Qr,
                            e = this.currentBaseMs + this.jitterDelayMs();
                        return this.currentBaseMs > 0 && i("ExponentialBackoff", "Backing off for " + e + " ms (base delay: " + this.currentBaseMs + " ms)"), setTimeout(function() {
                            t.resolve()
                        }, e), this.currentBaseMs *= this.backoffFactor, this.currentBaseMs < this.initialDelayMs && (this.currentBaseMs = this.initialDelayMs), this.currentBaseMs > this.maxDelayMs && (this.currentBaseMs = this.maxDelayMs), t.promise
                    }, t.prototype.jitterDelayMs = function() {
                        return (Math.random() - .5) * this.currentBaseMs
                    }, t
                }(),
                Wr = this && this.__extends || function() {
                    var t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    };
                    return function(e, n) {
                        function r() {
                            this.constructor = e
                        }
                        t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                    }
                }();
            ! function(t) {
                t[t.Initial = 0] = "Initial", t[t.Auth = 1] = "Auth", t[t.Open = 2] = "Open", t[t.Error = 3] = "Error", t[t.Backoff = 4] = "Backoff", t[t.Stopped = 5] = "Stopped"
            }(Zn || (Zn = {}));
            var Gr, Hr = 1e3,
                zr = 6e4,
                Xr = 1.5,
                Yr = function() {
                    function t(t, e, n, r) {
                        this.queue = t, this.connection = e, this.credentialsProvider = n, this.idle = !1, this.stream = null, this.listener = null, this.backoff = new Kr(r || Hr, Xr, zr), this.state = Zn.Initial
                    }
                    return t.prototype.isStarted = function() {
                        return this.state === Zn.Backoff || this.state === Zn.Auth || this.state === Zn.Open
                    }, t.prototype.isOpen = function() {
                        return this.state === Zn.Open
                    }, t.prototype.start = function(t) {
                        if (this.state === Zn.Error) return void this.performBackoff(t);
                        c(this.state === Zn.Initial, "Already started"), this.listener = t, this.auth()
                    }, t.prototype.stop = function() {
                        this.isStarted() && this.close(Zn.Stopped)
                    }, t.prototype.inhibitBackoff = function() {
                        c(!this.isStarted(), "Can only inhibit backoff in a stopped state"), this.state = Zn.Initial, this.backoff.reset()
                    }, t.prototype.markIdle = function() {
                        var t = this;
                        this.idle = !0, this.queue.schedule(function() {
                            return t.handleIdleCloseTimer()
                        }, 6e4).catch(function(t) {
                            c(t.code === Ht.CANCELLED, "Received unexpected error in idle timeout closure. Expected CANCELLED, but was: " + t)
                        })
                    }, t.prototype.sendRequest = function(t) {
                        this.cancelIdleCheck(), this.stream.send(t)
                    }, t.prototype.handleIdleCloseTimer = function() {
                        return this.isOpen() && this.idle ? this.close(Zn.Initial) : Promise.resolve()
                    }, t.prototype.cancelIdleCheck = function() {
                        this.idle = !1
                    }, t.prototype.close = function(t, e) {
                        c(t == Zn.Error || K(e), "Can't provide an error when not in an error state."), this.cancelIdleCheck(), t != Zn.Error ? this.backoff.reset() : e && e.code === Ht.RESOURCE_EXHAUSTED && (a("" + e), a("Using maximum backoff delay to prevent overloading the backend."), this.backoff.resetToMax()), null !== this.stream && (this.tearDown(), this.stream.close(), this.stream = null), this.state = t;
                        var n = this.listener;
                        return this.listener = null, t != Zn.Stopped ? n.onClose(e) : Promise.resolve()
                    }, t.prototype.tearDown = function() {}, t.prototype.auth = function() {
                        var t = this;
                        c(this.state === Zn.Initial, "Must be in initial state to auth"), this.state = Zn.Auth, this.credentialsProvider.getToken(!1).then(function(e) {
                            t.startStream(e)
                        }, function(e) {
                            t.queue.schedule(function() {
                                if (t.state !== Zn.Stopped) {
                                    var n = new zt(Ht.UNKNOWN, "Fetching auth token failed: " + e.message);
                                    return t.handleStreamClose(n)
                                }
                                return Promise.resolve()
                            })
                        })
                    }, t.prototype.startStream = function(t) {
                        var e = this;
                        if (this.state !== Zn.Stopped) {
                            c(this.state === Zn.Auth, "Trying to start stream in a non-auth state");
                            var n = function(t, n) {
                                e.queue.schedule(function() {
                                    return e.stream === t ? n() : Promise.resolve()
                                })
                            };
                            if (null !== this.listener) {
                                var r = this.startRpc(t);
                                this.stream = r, this.stream.onOpen(function() {
                                    n(r, function() {
                                        return c(e.state === Zn.Auth, "Expected stream to be in state auth, but was " + e.state), e.state = Zn.Open, e.listener.onOpen()
                                    })
                                }), this.stream.onClose(function(t) {
                                    n(r, function() {
                                        return e.handleStreamClose(t)
                                    })
                                }), this.stream.onMessage(function(t) {
                                    n(r, function() {
                                        return e.onMessage(t)
                                    })
                                })
                            }
                        }
                    }, t.prototype.performBackoff = function(t) {
                        var e = this;
                        c(this.state === Zn.Error, "Should only perform backoff in an error case"), this.state = Zn.Backoff, this.backoff.backoffAndWait().then(function() {
                            e.queue.schedule(function() {
                                return e.state === Zn.Stopped ? Promise.resolve() : (e.state = Zn.Initial, e.start(t), c(e.isStarted(), "PersistentStream should have started"), Promise.resolve())
                            })
                        })
                    }, t.prototype.handleStreamClose = function(t) {
                        return c(this.isStarted(), "Can't handle server close on non-started stream"), i("PersistentStream", "close with error: " + t), this.stream = null, this.close(Zn.Error, t)
                    }, t
                }(),
                Jr = function(t) {
                    function e(e, n, r, o, i, a) {
                        var s = t.call(this, n, r, o, a) || this;
                        return s.databaseInfo = e, s.serializer = i, s
                    }
                    return Wr(e, t), e.prototype.startRpc = function(t) {
                        return this.connection.openStream("Listen", t)
                    }, e.prototype.onMessage = function(t) {
                        this.backoff.reset();
                        var e = this.serializer.fromWatchChange(t),
                            n = this.serializer.versionFromListenResponse(t);
                        return this.listener.onWatchChange(e, n)
                    }, e.prototype.watch = function(t) {
                        var e = {};
                        e.database = this.serializer.encodedDatabaseId, e.addTarget = this.serializer.toTarget(t);
                        var n = this.serializer.toListenRequestLabels(t);
                        n && (e.labels = n), this.sendRequest(e)
                    }, e.prototype.unwatch = function(t) {
                        var e = {};
                        e.database = this.serializer.encodedDatabaseId, e.removeTarget = t, this.sendRequest(e)
                    }, e
                }(Yr),
                $r = function(t) {
                    function e(e, n, r, o, i, a) {
                        var s = t.call(this, n, r, o, a) || this;
                        return s.databaseInfo = e, s.serializer = i, s.y = !1, s
                    }
                    return Wr(e, t), Object.defineProperty(e.prototype, "handshakeComplete", {
                        get: function() {
                            return this.y
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.start = function(e) {
                        this.y = !1, t.prototype.start.call(this, e)
                    }, e.prototype.tearDown = function() {
                        this.y && this.writeMutations([])
                    }, e.prototype.startRpc = function(t) {
                        return this.connection.openStream("Write", t)
                    }, e.prototype.onMessage = function(t) {
                        if (c(!!t.streamToken, "Got a write response without a stream token"), this.lastStreamToken = t.streamToken, this.y) {
                            this.backoff.reset();
                            var e = this.serializer.fromWriteResults(t.writeResults),
                                n = this.serializer.fromVersion(t.commitTime);
                            return this.listener.onMutationResult(n, e)
                        }
                        return c(!t.writeResults || 0 === t.writeResults.length, "Got mutation results for handshake"), this.y = !0, this.listener.onHandshakeComplete()
                    }, e.prototype.writeHandshake = function() {
                        c(this.isOpen(), "Writing handshake requires an opened stream"), c(!this.y, "Handshake already completed");
                        var t = {};
                        t.database = this.serializer.encodedDatabaseId, this.sendRequest(t)
                    }, e.prototype.writeMutations = function(t) {
                        var e = this;
                        c(this.isOpen(), "Writing mutations requires an opened stream"), c(this.y, "Handshake must be complete before writing mutations"), c(this.lastStreamToken.length > 0, "Trying to write mutation without a token");
                        var n = {
                            streamToken: this.lastStreamToken,
                            writes: t.map(function(t) {
                                return e.serializer.toMutation(t)
                            })
                        };
                        this.sendRequest(n)
                    }, e
                }(Yr),
                Zr = function() {
                    function t(t, e, n, r, o, i) {
                        this.databaseInfo = t, this.queue = e, this.connection = n, this.credentials = r, this.serializer = o, this.initialBackoffDelay = i
                    }
                    return t.prototype.newPersistentWriteStream = function() {
                        return new $r(this.databaseInfo, this.queue, this.connection, this.credentials, this.serializer, this.initialBackoffDelay)
                    }, t.prototype.newPersistentWatchStream = function() {
                        return new Jr(this.databaseInfo, this.queue, this.connection, this.credentials, this.serializer, this.initialBackoffDelay)
                    }, t.prototype.commit = function(t) {
                        var e = this,
                            n = {
                                database: this.serializer.encodedDatabaseId,
                                writes: t.map(function(t) {
                                    return e.serializer.toMutation(t)
                                })
                            };
                        return this.invokeRPC("Commit", n).then(function(t) {
                            return e.serializer.fromWriteResults(t.writeResults)
                        })
                    }, t.prototype.lookup = function(t) {
                        var e = this,
                            n = {
                                database: this.serializer.encodedDatabaseId,
                                documents: t.map(function(t) {
                                    return e.serializer.toName(t)
                                })
                            };
                        return this.invokeStreamingRPC("BatchGetDocuments", n).then(function(n) {
                            var r = $();
                            n.forEach(function(t) {
                                var n = e.serializer.fromMaybeDocument(t);
                                r = r.insert(n.key, n)
                            });
                            var o = [];
                            return t.forEach(function(t) {
                                var e = r.get(t);
                                c(!!e, "Missing entity in write response for " + t), o.push(e)
                            }), o
                        })
                    }, t.prototype.invokeRPC = function(t, e) {
                        var n = this;
                        return this.credentials.getToken(!1).then(function(r) {
                            return n.connection.invokeRPC(t, e, r)
                        })
                    }, t.prototype.invokeStreamingRPC = function(t, e) {
                        var n = this;
                        return this.credentials.getToken(!1).then(function(r) {
                            return n.connection.invokeStreamingRPC(t, e, r)
                        })
                    }, t
                }(),
                to = function() {
                    function t(t) {
                        this.datastore = t, this.readVersions = tt(), this.mutations = [], this.committed = !1
                    }
                    return t.prototype.recordVersion = function(t) {
                        var e = t.version;
                        t instanceof ce && (e = He.forDeletedDoc());
                        var n = this.readVersions.get(t.key);
                        if (null !== n) {
                            if (!e.equals(n)) throw new zt(Ht.ABORTED, "Document version changed between two reads.")
                        } else this.readVersions = this.readVersions.insert(t.key, e)
                    }, t.prototype.lookup = function(t) {
                        var e = this;
                        return this.committed ? Promise.reject("Transaction has already completed.") : this.mutations.length > 0 ? Promise.reject("Transactions lookups are invalid after writes.") : this.datastore.lookup(t).then(function(t) {
                            return t.forEach(function(t) {
                                return e.recordVersion(t)
                            }), t
                        })
                    }, t.prototype.write = function(t) {
                        if (this.committed) throw new zt(Ht.FAILED_PRECONDITION, "Transaction has already completed.");
                        this.mutations = this.mutations.concat(t)
                    }, t.prototype.precondition = function(t) {
                        var e = this.readVersions.get(t);
                        return e ? nn.updateTime(e) : nn.NONE
                    }, t.prototype.preconditionForUpdate = function(t) {
                        var e = this.readVersions.get(t);
                        if (e && e.equals(He.forDeletedDoc())) throw new zt(Ht.FAILED_PRECONDITION, "Can't update a document that doesn't exist.");
                        return e ? nn.updateTime(e) : nn.exists(!0)
                    }, t.prototype.set = function(t, e) {
                        this.write(e.toMutations(t, this.precondition(t)))
                    }, t.prototype.update = function(t, e) {
                        this.write(e.toMutations(t, this.preconditionForUpdate(t)))
                    }, t.prototype.delete = function(t) {
                        this.write([new un(t, this.precondition(t))]), this.readVersions = this.readVersions.insert(t, He.forDeletedDoc())
                    }, t.prototype.commit = function() {
                        var t = this,
                            e = this.readVersions;
                        return this.mutations.forEach(function(t) {
                            e = e.remove(t.key)
                        }), e.isEmpty() ? this.datastore.commit(this.mutations).then(function() {
                            t.committed = !0
                        }) : Promise.reject(Error("Every document read in a transaction must also be written."))
                    }, t
                }(),
                eo = function() {
                    function t(t, e, n) {
                        this.localStore = t, this.datastore = e, this.onlineStateHandler = n, this.pendingWrites = [], this.lastBatchSeen = ar, this.listenTargets = {}, this.pendingTargetResponses = {}, this.accumulatedWatchChanges = [], this.watchStream = null, this.writeStream = null, this.watchStreamOnlineState = Ln.Unknown, this.watchStreamFailures = 0, this.shouldWarnOffline = !0
                    }
                    return t.prototype.start = function() {
                        return this.enableNetwork()
                    }, t.prototype.setOnlineStateToHealthy = function() {
                        this.shouldWarnOffline = !1, this.updateAndBroadcastOnlineState(Ln.Healthy)
                    }, t.prototype.setOnlineStateToUnknown = function() {
                        this.watchStreamFailures = 0, this.updateAndBroadcastOnlineState(Ln.Unknown)
                    }, t.prototype.updateOnlineStateAfterFailure = function() {
                        this.watchStreamOnlineState === Ln.Healthy ? this.setOnlineStateToUnknown() : ++this.watchStreamFailures >= 2 && (this.shouldWarnOffline && (a("Could not reach Firestore backend."), this.shouldWarnOffline = !1), this.updateAndBroadcastOnlineState(Ln.Failed))
                    }, t.prototype.updateAndBroadcastOnlineState = function(t) {
                        var e = this.watchStreamOnlineState !== t;
                        this.watchStreamOnlineState = t, e && this.onlineStateHandler(t)
                    }, t.prototype.isNetworkEnabled = function() {
                        return c(null == this.watchStream == (null == this.writeStream), "WatchStream and WriteStream should both be null or non-null"), null != this.watchStream
                    }, t.prototype.enableNetwork = function() {
                        var t = this;
                        return c(null == this.watchStream, "enableNetwork() called with non-null watchStream."), c(null == this.writeStream, "enableNetwork() called with non-null writeStream."), this.watchStream = this.datastore.newPersistentWatchStream(), this.writeStream = this.datastore.newPersistentWriteStream(), this.localStore.getLastStreamToken().then(function(e) {
                            return t.writeStream.lastStreamToken = e, t.shouldStartWatchStream() && t.startWatchStream(), t.updateAndBroadcastOnlineState(Ln.Unknown), t.fillWritePipeline()
                        })
                    }, t.prototype.disableNetwork = function() {
                        return this.updateAndBroadcastOnlineState(Ln.Failed), this.watchStream.stop(), this.writeStream.stop(), this.cleanUpWatchStreamState(), this.cleanUpWriteStreamState(), this.writeStream = null, this.watchStream = null, Promise.resolve()
                    }, t.prototype.shutdown = function() {
                        return i("RemoteStore", "RemoteStore shutting down."), this.disableNetwork(), Promise.resolve(void 0)
                    }, t.prototype.listen = function(t) {
                        c(!f(this.listenTargets, t.targetId), "listen called with duplicate targetId!"), this.listenTargets[t.targetId] = t, this.shouldStartWatchStream() ? this.startWatchStream() : this.isNetworkEnabled() && this.watchStream.isOpen() && this.sendWatchRequest(t)
                    }, t.prototype.unlisten = function(t) {
                        c(f(this.listenTargets, t), "unlisten called without assigned target ID!"), this.listenTargets[t], delete this.listenTargets[t], this.isNetworkEnabled() && this.watchStream.isOpen() && (this.sendUnwatchRequest(t), m(this.listenTargets) && this.watchStream.markIdle())
                    }, t.prototype.sendWatchRequest = function(t) {
                        this.recordPendingTargetRequest(t.targetId), this.watchStream.watch(t)
                    }, t.prototype.sendUnwatchRequest = function(t) {
                        this.recordPendingTargetRequest(t), this.watchStream.unwatch(t)
                    }, t.prototype.recordPendingTargetRequest = function(t) {
                        this.pendingTargetResponses[t] = (this.pendingTargetResponses[t] || 0) + 1
                    }, t.prototype.startWatchStream = function() {
                        c(this.shouldStartWatchStream(), "startWriteStream() called when shouldStartWatchStream() is false."), this.watchStream.start({
                            onOpen: this.onWatchStreamOpen.bind(this),
                            onClose: this.onWatchStreamClose.bind(this),
                            onWatchChange: this.onWatchStreamChange.bind(this)
                        })
                    }, t.prototype.shouldStartWatchStream = function() {
                        return this.isNetworkEnabled() && !this.watchStream.isStarted() && !m(this.listenTargets)
                    }, t.prototype.cleanUpWatchStreamState = function() {
                        this.accumulatedWatchChanges = [], this.pendingTargetResponses = {}
                    }, t.prototype.onWatchStreamOpen = function() {
                        var t = this;
                        return p(this.listenTargets, function(e, n) {
                            t.sendWatchRequest(n)
                        }), Promise.resolve()
                    }, t.prototype.onWatchStreamClose = function(t) {
                        return c(this.isNetworkEnabled(), "onWatchStreamClose() should only be called when the network is enabled"), this.cleanUpWatchStreamState(), this.shouldStartWatchStream() ? (this.updateOnlineStateAfterFailure(), this.startWatchStream()) : this.setOnlineStateToUnknown(), Promise.resolve()
                    }, t.prototype.onWatchStreamChange = function(t, e) {
                        if (this.setOnlineStateToHealthy(), t instanceof En && t.state === gn.Removed && t.cause) return this.handleTargetError(t);
                        if (this.accumulatedWatchChanges.push(t), !e.equals(He.MIN) && e.compareTo(this.localStore.getLastRemoteSnapshotVersion()) >= 0) {
                            var n = this.accumulatedWatchChanges;
                            return this.accumulatedWatchChanges = [], this.handleWatchChangeBatch(e, n)
                        }
                        return Promise.resolve()
                    }, t.prototype.handleWatchChangeBatch = function(t, e) {
                        var n = this,
                            r = new Sn(t, this.listenTargets, this.pendingTargetResponses);
                        r.addChanges(e);
                        var o = r.createRemoteEvent();
                        this.pendingTargetResponses = r.pendingTargetResponses;
                        var i = [];
                        return p(r.existenceFilters, function(e, r) {
                            var a = n.listenTargets[e];
                            if (a) {
                                var s = a.query;
                                if (s.isDocumentQuery())
                                    if (0 === r.count) {
                                        var u = new se(s.path),
                                            h = new ce(u, t);
                                        o.addDocumentUpdate(h)
                                    } else c(1 === r.count, "Single document existence filter with count: " + r.count);
                                else {
                                    var l = n.localStore.remoteDocumentKeys(e).then(function(t) {
                                        if (o.targetChanges[e]) {
                                            var i = o.targetChanges[e].mapping;
                                            null !== i && (i instanceof wn ? t = i.applyToKeySet(t) : (c(i instanceof bn, "Expected either reset or update mapping but got something else: " + i), t = i.documents))
                                        }
                                        if (t.size !== r.count) {
                                            o.handleExistenceFilterMismatch(e);
                                            var u = new Xe(s, e, a.purpose);
                                            n.listenTargets[e] = u, n.sendUnwatchRequest(e);
                                            var h = new Xe(s, e, me.ExistenceFilterMismatch);
                                            n.sendWatchRequest(h)
                                        }
                                    });
                                    i.push(l)
                                }
                            }
                        }), Promise.all(i).then(function() {
                            return p(o.targetChanges, function(t, e) {
                                if (e.resumeToken.length > 0) {
                                    var r = n.listenTargets[t];
                                    r && (n.listenTargets[t] = r.update({
                                        resumeToken: e.resumeToken,
                                        snapshotVersion: e.snapshotVersion
                                    }))
                                }
                            }), n.syncEngine.applyRemoteEvent(o)
                        })
                    }, t.prototype.handleTargetError = function(t) {
                        var e = this;
                        c(!!t.cause, "Handling target error without a cause");
                        var n = t.cause,
                            r = Promise.resolve();
                        return t.targetIds.forEach(function(t) {
                            r = r.then(function() {
                                return f(e.listenTargets, t) ? (delete e.listenTargets[t], e.syncEngine.rejectListen(t, n)) : Promise.resolve()
                            })
                        }), r
                    }, t.prototype.cleanUpWriteStreamState = function() {
                        this.lastBatchSeen = ar, this.pendingWrites = []
                    }, t.prototype.fillWritePipeline = function() {
                        var t = this;
                        return this.canWriteMutations() ? this.localStore.nextMutationBatch(this.lastBatchSeen).then(function(e) {
                            return null === e ? (0 == t.pendingWrites.length && t.writeStream.markIdle(), Promise.resolve()) : (t.commit(e), t.fillWritePipeline())
                        }) : Promise.resolve()
                    }, t.prototype.canWriteMutations = function() {
                        return this.isNetworkEnabled() && this.pendingWrites.length < 10
                    }, t.prototype.outstandingWrites = function() {
                        return this.pendingWrites.length
                    }, t.prototype.commit = function(t) {
                        c(this.canWriteMutations(), "commit called when batches can't be written"), this.lastBatchSeen = t.batchId, this.pendingWrites.push(t), this.shouldStartWriteStream() ? this.startWriteStream() : this.isNetworkEnabled() && this.writeStream.handshakeComplete && this.writeStream.writeMutations(t.mutations)
                    }, t.prototype.shouldStartWriteStream = function() {
                        return this.isNetworkEnabled() && !this.writeStream.isStarted() && this.pendingWrites.length > 0
                    }, t.prototype.startWriteStream = function() {
                        c(this.shouldStartWriteStream(), "startWriteStream() called when shouldStartWriteStream() is false."), this.writeStream.start({
                            onOpen: this.onWriteStreamOpen.bind(this),
                            onClose: this.onWriteStreamClose.bind(this),
                            onHandshakeComplete: this.onWriteHandshakeComplete.bind(this),
                            onMutationResult: this.onMutationResult.bind(this)
                        })
                    }, t.prototype.onWriteStreamOpen = function() {
                        return this.writeStream.writeHandshake(), Promise.resolve()
                    }, t.prototype.onWriteHandshakeComplete = function() {
                        var t = this;
                        return this.localStore.setLastStreamToken(this.writeStream.lastStreamToken).then(function() {
                            for (var e = 0, n = t.pendingWrites; e < n.length; e++) {
                                var r = n[e];
                                t.writeStream.writeMutations(r.mutations)
                            }
                        })
                    }, t.prototype.onMutationResult = function(t, e) {
                        var n = this;
                        c(this.pendingWrites.length > 0, "Got result for empty pending writes");
                        var r = this.pendingWrites.shift(),
                            o = ur.from(r, t, e, this.writeStream.lastStreamToken);
                        return this.syncEngine.applySuccessfulWrite(o).then(function() {
                            return n.fillWritePipeline()
                        })
                    }, t.prototype.onWriteStreamClose = function(t) {
                        var e = this;
                        if (c(this.isNetworkEnabled(), "onWriteStreamClose() should only be called when the network is enabled"), t && this.pendingWrites.length > 0) {
                            c(!!t, "We have pending writes, but the write stream closed without an error");
                            var n = void 0;
                            return n = this.writeStream.handshakeComplete ? this.handleWriteError(t) : this.handleHandshakeError(t), n.then(function() {
                                e.shouldStartWriteStream() && e.startWriteStream()
                            })
                        }
                        return Promise.resolve()
                    }, t.prototype.handleHandshakeError = function(t) {
                        return H(t.code) || t.code === Ht.ABORTED ? (i("RemoteStore", "RemoteStore error before completed handshake; resetting stream token: ", this.writeStream.lastStreamToken), this.writeStream.lastStreamToken = h(), this.localStore.setLastStreamToken(h())) : Promise.resolve()
                    }, t.prototype.handleWriteError = function(t) {
                        var e = this;
                        if (H(t.code)) {
                            var n = this.pendingWrites.shift();
                            return this.writeStream.inhibitBackoff(), this.syncEngine.rejectFailedWrite(n.batchId, t).then(function() {
                                return e.fillWritePipeline()
                            })
                        }
                        return Promise.resolve()
                    }, t.prototype.createTransaction = function() {
                        return new to(this.datastore)
                    }, t.prototype.handleUserChange = function(t) {
                        return i("RemoteStore", "RemoteStore changing users: uid=", t.uid), this.disableNetwork(), this.enableNetwork()
                    }, t
                }(),
                no = function() {
                    function t(t, e, n, r) {
                        this.platform = t, this.databaseInfo = e, this.credentials = n, this.asyncQueue = r
                    }
                    return t.prototype.start = function(t) {
                        var e = this,
                            n = new Qr,
                            r = new Qr,
                            o = !1;
                        return this.credentials.setUserChangeListener(function(i) {
                            o ? e.asyncQueue.schedule(function() {
                                return e.handleUserChange(i)
                            }) : (o = !0, e.initializePersistence(t, r).then(function() {
                                return e.initializeRest(i)
                            }).then(n.resolve, n.reject))
                        }), this.asyncQueue.schedule(function() {
                            return n.promise
                        }), r.promise
                    }, t.prototype.enableNetwork = function() {
                        var t = this;
                        return this.asyncQueue.schedule(function() {
                            return t.remoteStore.enableNetwork()
                        })
                    }, t.prototype.initializePersistence = function(t, e) {
                        var n = this;
                        return t ? this.startIndexedDbPersistence().then(e.resolve).catch(function(t) {
                            return e.reject(t), n.canFallback(t) ? (console.warn("Error enabling offline storage. Falling back to storage disabled: " + t), n.startMemoryPersistence()) : Promise.reject(t)
                        }) : (e.resolve(), this.startMemoryPersistence())
                    }, t.prototype.canFallback = function(t) {
                        return t.code === Ht.FAILED_PRECONDITION || t.code === Ht.UNIMPLEMENTED
                    }, t.prototype.startIndexedDbPersistence = function() {
                        this.garbageCollector = new jr;
                        var t = _r.buildStoragePrefix(this.databaseInfo),
                            e = new kn(this.databaseInfo.databaseId, {
                                useProto3Json: !0
                            });
                        return this.persistence = new _r(t, e), this.persistence.start()
                    }, t.prototype.startMemoryPersistence = function() {
                        return this.garbageCollector = new zn, this.persistence = new Vr, this.persistence.start()
                    }, t.prototype.initializeRest = function(t) {
                        var e = this;
                        return this.platform.loadConnection(this.databaseInfo).then(function(n) {
                            e.localStore = new xr(e.persistence, t, e.garbageCollector);
                            var r = e.platform.newSerializer(e.databaseInfo.databaseId),
                                o = new Zr(e.databaseInfo, e.asyncQueue, n, e.credentials, r),
                                i = function(t) {
                                    e.eventMgr.onOnlineStateChanged(t)
                                };
                            return e.remoteStore = new eo(e.localStore, o, i), e.syncEngine = new ir(e.localStore, e.remoteStore, t), e.remoteStore.syncEngine = e.syncEngine, e.eventMgr = new Wn(e.syncEngine), e.localStore.start()
                        }).then(function() {
                            return e.remoteStore.start()
                        })
                    }, t.prototype.handleUserChange = function(t) {
                        return this.asyncQueue.verifyOperationInProgress(), i("FirestoreClient", "User Changed: " + t.uid), this.syncEngine.handleUserChange(t)
                    }, t.prototype.disableNetwork = function() {
                        var t = this;
                        return this.asyncQueue.schedule(function() {
                            return t.remoteStore.disableNetwork()
                        })
                    }, t.prototype.shutdown = function() {
                        var t = this;
                        return this.asyncQueue.schedule(function() {
                            return t.credentials.removeUserChangeListener(), t.remoteStore.shutdown()
                        }).then(function() {
                            return t.persistence.shutdown()
                        })
                    }, t.prototype.listen = function(t, e, n) {
                        var r = this,
                            o = new Gn(t, e, n);
                        return this.asyncQueue.schedule(function() {
                            return r.eventMgr.listen(o)
                        }), o
                    }, t.prototype.unlisten = function(t) {
                        var e = this;
                        this.asyncQueue.schedule(function() {
                            return e.eventMgr.unlisten(t)
                        })
                    }, t.prototype.write = function(t) {
                        var e = this,
                            n = new Qr;
                        return this.asyncQueue.schedule(function() {
                            return e.syncEngine.write(t, n)
                        }), n.promise
                    }, t.prototype.databaseId = function() {
                        return this.databaseInfo.databaseId
                    }, t.prototype.transaction = function(t) {
                        var e = this;
                        return this.asyncQueue.schedule(function() {
                            return Promise.resolve()
                        }).then(function() {
                            return e.syncEngine.runTransaction(t)
                        })
                    }, t
                }(),
                ro = function() {
                    function t(t) {
                        this.observer = t, this.muted = !1
                    }
                    return t.prototype.next = function(t) {
                        this.scheduleEvent(this.observer.next, t)
                    }, t.prototype.error = function(t) {
                        this.scheduleEvent(this.observer.error, t)
                    }, t.prototype.mute = function() {
                        this.muted = !0
                    }, t.prototype.scheduleEvent = function(t, e) {
                        var n = this;
                        this.muted || setTimeout(function() {
                            n.muted || t(e)
                        }, 0)
                    }, t
                }(),
                oo = function() {
                    function t() {
                        this.tail = Promise.resolve(), this.delayedOperations = [], this.delayedOperationsCount = 0, this.operationInProgress = !1
                    }
                    return t.prototype.schedule = function(t, e) {
                        var n = this;
                        if (this.failure && u("AsyncQueue is already failed: " + (this.failure.stack || this.failure.message)), (e || 0) > 0) {
                            this.delayedOperationsCount++;
                            var r = {
                                handle: null,
                                op: t,
                                deferred: new Qr
                            };
                            return r.handle = setTimeout(function() {
                                n.scheduleInternal(function() {
                                    return r.op().then(function(t) {
                                        r.deferred.resolve(t)
                                    })
                                }), r.handle = null, 0 == --n.delayedOperationsCount && (n.delayedOperations = [])
                            }, e), this.delayedOperations.push(r), r.deferred.promise
                        }
                        return this.scheduleInternal(t)
                    }, t.prototype.scheduleInternal = function(t) {
                        var e = this;
                        return this.tail = this.tail.then(function() {
                            return e.operationInProgress = !0, t().catch(function(t) {
                                e.failure = t, e.operationInProgress = !1;
                                var n = t.stack || t.message || "";
                                throw a("INTERNAL UNHANDLED ERROR: ", n), n.indexOf("Firestore Test Simulated Error") < 0 && setTimeout(function() {
                                    throw t
                                }, 0), t
                            }).then(function() {
                                e.operationInProgress = !1
                            })
                        }), this.tail
                    }, t.prototype.verifyOperationInProgress = function() {
                        c(this.operationInProgress, "verifyOpInProgress() called when no op in progress on this queue.")
                    }, t.prototype.drain = function(t) {
                        var e = this;
                        return this.delayedOperations.forEach(function(n) {
                            n.handle && (clearTimeout(n.handle), t ? e.scheduleInternal(n.op).then(n.deferred.resolve, n.deferred.reject) : n.deferred.reject(new zt(Ht.CANCELLED, "Operation cancelled by shutdown")))
                        }), this.delayedOperations = [], this.delayedOperationsCount = 0, this.schedule(function() {
                            return Promise.resolve()
                        })
                    }, t
                }(),
                io = function() {
                    function t(t) {
                        this.uid = t
                    }
                    return t.prototype.isUnauthenticated = function() {
                        return null == this.uid
                    }, t.prototype.toKey = function() {
                        return this.isUnauthenticated() ? "anonymous-user" : "uid:" + this.uid
                    }, t.prototype.equals = function(t) {
                        return t.uid === this.uid
                    }, t.UNAUTHENTICATED = new t(null), t.GOOGLE_CREDENTIALS = new t("google-credentials-uid"), t.FIRST_PARTY = new t("first-party-uid"), t
                }(),
                ao = function() {
                    function t(t, e) {
                        this.user = e, this.type = "OAuth", this.authHeaders = {
                            Authorization: "Bearer " + t
                        }
                    }
                    return t
                }(),
                so = function() {
                    function t() {
                        this.userListener = null
                    }
                    return t.prototype.getToken = function(t) {
                        return Promise.resolve(null)
                    }, t.prototype.setUserChangeListener = function(t) {
                        c(!this.userListener, "Can only call setUserChangeListener() once."), this.userListener = t, t(io.UNAUTHENTICATED)
                    }, t.prototype.removeUserChangeListener = function() {
                        c(null !== this.userListener, "removeUserChangeListener() when no listener registered"), this.userListener = null
                    }, t
                }(),
                uo = function() {
                    function t(t) {
                        var e = this;
                        this.app = t, this.tokenListener = null, this.userCounter = 0, this.userListener = null, this.tokenListener = function() {
                            var t = e.getUser();
                            e.currentUser && t.equals(e.currentUser) || (e.currentUser = t, e.userCounter++, e.userListener && e.userListener(e.currentUser))
                        }, this.userCounter = 0, this.app.INTERNAL.addAuthTokenListener(this.tokenListener)
                    }
                    return t.prototype.getToken = function(t) {
                        var e = this;
                        c(null != this.tokenListener, "getToken cannot be called after listener removed.");
                        var n = this.userCounter;
                        return this.app.INTERNAL.getToken(t).then(function(t) {
                            if (e.userCounter !== n) throw new zt(Ht.ABORTED, "getToken aborted due to uid change.");
                            return t ? (c("string" == typeof t.accessToken, "Invalid tokenData returned from getToken():" + t), new ao(t.accessToken, e.currentUser)) : null
                        })
                    }, t.prototype.setUserChangeListener = function(t) {
                        c(!this.userListener, "Can only call setUserChangeListener() once."), this.userListener = t, this.currentUser && t(this.currentUser)
                    }, t.prototype.removeUserChangeListener = function() {
                        c(null != this.tokenListener, "removeUserChangeListener() called twice"), c(null !== this.userListener, "removeUserChangeListener() called when no listener registered"), this.app.INTERNAL.removeAuthTokenListener(this.tokenListener), this.tokenListener = null, this.userListener = null
                    }, t.prototype.getUser = function() {
                        "function" != typeof this.app.INTERNAL.getUid && u("This version of the Firestore SDK requires at least version 3.7.0 of firebase.js.");
                        var t = this.app.INTERNAL.getUid();
                        return c(null === t || "string" == typeof t, "Received invalid UID: " + t), new io(t)
                    }, t
                }(),
                co = function() {
                    function t(t, e) {
                        this.gapi = t, this.sessionIndex = e, this.type = "FirstParty", this.user = io.FIRST_PARTY, c(this.gapi && this.gapi.auth && this.gapi.auth.getAuthHeaderValueForFirstParty, "unexpected gapi interface")
                    }
                    return Object.defineProperty(t.prototype, "authHeaders", {
                        get: function() {
                            return {
                                Authorization: this.gapi.auth.getAuthHeaderValueForFirstParty([]),
                                "X-Goog-AuthUser": this.sessionIndex
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t
                }(),
                ho = function() {
                    function t(t, e) {
                        this.gapi = t, this.sessionIndex = e, c(this.gapi && this.gapi.auth && this.gapi.auth.getAuthHeaderValueForFirstParty, "unexpected gapi interface")
                    }
                    return t.prototype.getToken = function(t) {
                        return Promise.resolve(new co(this.gapi, this.sessionIndex))
                    }, t.prototype.setUserChangeListener = function(t) {
                        t(io.FIRST_PARTY)
                    }, t.prototype.removeUserChangeListener = function() {}, t
                }(),
                lo = this && this.__extends || function() {
                    var t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    };
                    return function(e, n) {
                        function r() {
                            this.constructor = e
                        }
                        t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                    }
                }(),
                fo = function() {
                    function t() {}
                    return t.delete = function() {
                        return po.instance
                    }, t.serverTimestamp = function() {
                        return yo.instance
                    }, t
                }(),
                po = function(t) {
                    function e() {
                        return t.call(this) || this
                    }
                    return lo(e, t), e.instance = new e, e
                }(fo),
                yo = function(t) {
                    function e() {
                        return t.call(this) || this
                    }
                    return lo(e, t), e.instance = new e, e
                }(fo),
                mo = l(fo, "Use FieldValue.<field>() instead."),
                go = /^__.*__$/,
                vo = function() {
                    function t(t, e, n) {
                        this.data = t, this.fieldMask = e, this.fieldTransforms = n
                    }
                    return t.prototype.toMutations = function(t, e) {
                        var n = [];
                        return null !== this.fieldMask ? n.push(new an(t, this.data, this.fieldMask, e)) : n.push(new on(t, this.data, e)), this.fieldTransforms.length > 0 && n.push(new sn(t, this.fieldTransforms)), n
                    }, t
                }(),
                bo = function() {
                    function t(t, e, n) {
                        this.data = t, this.fieldMask = e, this.fieldTransforms = n
                    }
                    return t.prototype.toMutations = function(t, e) {
                        var n = [new an(t, this.data, this.fieldMask, e)];
                        return this.fieldTransforms.length > 0 && n.push(new sn(t, this.fieldTransforms)), n
                    }, t
                }();
            ! function(t) {
                t[t.Set = 0] = "Set", t[t.Update = 1] = "Update", t[t.MergeSet = 2] = "MergeSet", t[t.QueryValue = 3] = "QueryValue"
            }(Gr || (Gr = {}));
            var wo = function() {
                    function t(t, e, n, r, o, i) {
                        this.dataSource = t, this.methodName = e, this.path = n, this.arrayElement = r, void 0 === o && this.validatePath(), this.arrayElement = void 0 !== r && r, this.fieldTransforms = o || [], this.fieldMask = i || []
                    }
                    return t.prototype.childContextForField = function(e) {
                        var n = null == this.path ? null : this.path.child(e),
                            r = new t(this.dataSource, this.methodName, n, !1, this.fieldTransforms, this.fieldMask);
                        return r.validatePathSegment(e), r
                    }, t.prototype.childContextForFieldPath = function(e) {
                        var n = null == this.path ? null : this.path.child(e),
                            r = new t(this.dataSource, this.methodName, n, !1, this.fieldTransforms, this.fieldMask);
                        return r.validatePath(), r
                    }, t.prototype.childContextForArray = function(e) {
                        return new t(this.dataSource, this.methodName, null, !0, this.fieldTransforms, this.fieldMask)
                    }, t.prototype.createError = function(t) {
                        var e = null === this.path || this.path.isEmpty() ? "" : " (found in field " + this.path + ")";
                        return new zt(Ht.INVALID_ARGUMENT, "Function " + this.methodName + "() called with invalid data. " + t + e)
                    }, t.prototype.validatePath = function() {
                        if (null !== this.path)
                            for (var t = 0; t < this.path.length; t++) this.validatePathSegment(this.path.get(t))
                    }, t.prototype.validatePathSegment = function(t) {
                        if (At(this.dataSource) && go.test(t)) throw this.createError("Document fields cannot begin and end with __")
                    }, t.prototype.isWrite = function() {
                        return this.dataSource === Gr.Set || this.dataSource === Gr.Update
                    }, t
                }(),
                Io = function() {
                    function t(t, e) {
                        this.databaseId = t, this.key = e
                    }
                    return t
                }(),
                To = function() {
                    function t(t) {
                        this.preConverter = t
                    }
                    return t.prototype.parseSetData = function(t, e) {
                        var n = new wo(Gr.Set, t, ae.EMPTY_PATH);
                        Ot("Data must be an object, but it was:", n, e);
                        var r = this.parseData(e, n);
                        return new vo(r, null, n.fieldTransforms)
                    }, t.prototype.parseMergeData = function(t, e) {
                        var n = new wo(Gr.MergeSet, t, ae.EMPTY_PATH);
                        Ot("Data must be an object, but it was:", n, e);
                        var r = this.parseData(e, n),
                            o = new Je(n.fieldMask);
                        return new vo(r, o, n.fieldTransforms)
                    }, t.prototype.parseUpdateData = function(t, e) {
                        var n = this,
                            r = new wo(Gr.Update, t, ae.EMPTY_PATH);
                        Ot("Data must be an object, but it was:", r, e);
                        var o = [],
                            i = Ae.EMPTY;
                        y(e, function(e, a) {
                            var s = _t(t, e),
                                u = r.childContextForFieldPath(s);
                            if ((a = n.runPreConverter(a, u)) instanceof po) o.push(s);
                            else {
                                var c = n.parseData(a, u);
                                null != c && (o.push(s), i = i.set(s, c))
                            }
                        });
                        var a = new Je(o);
                        return new bo(i, a, r.fieldTransforms)
                    }, t.prototype.parseUpdateVarargs = function(t, e, n, r) {
                        var o = new wo(Gr.Update, t, ae.EMPTY_PATH),
                            i = [Mt(t, e)],
                            a = [n];
                        if (r.length % 2 != 0) throw new zt(Ht.INVALID_ARGUMENT, "Function " + t + "() needs to be called with an even number of arguments that alternate between field names and values.");
                        for (var s = 0; s < r.length; s += 2) i.push(Mt(t, r[s])), a.push(r[s + 1]);
                        for (var u = [], c = Ae.EMPTY, s = 0; s < i.length; ++s) {
                            var h = i[s],
                                l = o.childContextForFieldPath(h),
                                f = this.runPreConverter(a[s], l);
                            if (f instanceof po) u.push(h);
                            else {
                                var d = this.parseData(f, l);
                                null != d && (u.push(h), c = c.set(h, d))
                            }
                        }
                        var p = new Je(u);
                        return new bo(c, p, o.fieldTransforms)
                    }, t.prototype.parseQueryValue = function(t, e) {
                        var n = new wo(Gr.QueryValue, t, ae.EMPTY_PATH),
                            r = this.parseData(e, n);
                        return c(null != r, "Parsed data should not be null."), c(0 === n.fieldTransforms.length, "Field transforms should have been disallowed."), r
                    }, t.prototype.runPreConverter = function(t, e) {
                        try {
                            return this.preConverter(t)
                        } catch (t) {
                            var n = Pt(t);
                            throw e.createError(n)
                        }
                    }, t.prototype.parseData = function(t, e) {
                        if ((t = this.runPreConverter(t, e)) instanceof Array) {
                            if (e.arrayElement) throw e.createError("Nested arrays are not supported");
                            return e.path && e.fieldMask.push(e.path), this.parseArray(t, e)
                        }
                        return Rt(t) ? (Ot("Unsupported field value:", e, t), this.parseObject(t, e)) : (e.path && e.fieldMask.push(e.path), this.parseScalarValue(t, e))
                    }, t.prototype.parseArray = function(t, e) {
                        for (var n = [], r = 0, o = 0, i = t; o < i.length; o++) {
                            var a = i[o],
                                s = this.parseData(a, e.childContextForArray(r));
                            null == s && (s = ve.INSTANCE), n.push(s), r++
                        }
                        return new Re(n)
                    }, t.prototype.parseObject = function(t, e) {
                        var n = this,
                            r = new he(L);
                        return y(t, function(t, o) {
                            var i = n.parseData(o, e.childContextForField(t));
                            null != i && (r = r.insert(t, i))
                        }), new Ae(r)
                    }, t.prototype.parseScalarValue = function(t, e) {
                        if (null === t) return ve.INSTANCE;
                        if ("number" == typeof t) return W(t) ? new Ie(t) : new Te(t);
                        if ("boolean" == typeof t) return be.of(t);
                        if ("string" == typeof t) return new Ee(t);
                        if (t instanceof Date) return new Se(Ge.fromDate(t));
                        if (t instanceof $t) return new Ne(t);
                        if (t instanceof Yt) return new De(t);
                        if (t instanceof Io) return new ke(t.databaseId, t.key);
                        if (t instanceof fo) {
                            if (t instanceof po) {
                                if (e.dataSource == Gr.MergeSet) return null;
                                throw e.dataSource === Gr.Update ? (c(null == e.path || e.path.length > 0, "FieldValue.delete() at the top level should have already been handled."), e.createError("FieldValue.delete() can only appear at the top level of your update data")) : e.createError("FieldValue.delete() can only be used with update() and set() with {merge:true}")
                            }
                            if (t instanceof yo) {
                                if (!At(e.dataSource)) throw e.createError("FieldValue.serverTimestamp() can only be used with set() and update()");
                                if (null === e.path) throw e.createError("FieldValue.serverTimestamp() is not currently supported inside arrays");
                                return e.fieldTransforms.push(new Ze(e.path, $e.instance)), null
                            }
                            return u("Unknown FieldValue type: " + t)
                        }
                        throw e.createError("Unsupported field value: " + N(t))
                    }, t
                }(),
                Eo = this && this.__extends || function() {
                    var t = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    };
                    return function(e, n) {
                        function r() {
                            this.constructor = e
                        }
                        t(e, n), e.prototype = null === n ? Object.create(n) : (r.prototype = n.prototype, new r)
                    }
                }(),
                So = "firestore.googleapis.com",
                Co = !0,
                Do = function() {
                    function t(t) {
                        if (void 0 === t.host) {
                            if (void 0 !== t.ssl) throw new zt(Ht.INVALID_ARGUMENT, "Can't provide ssl option if host option is not set");
                            this.host = So, this.ssl = Co
                        } else S("settings", "string", "host", t.host), this.host = t.host, C("settings", "boolean", "ssl", t.ssl), this.ssl = d(t.ssl, Co);
                        O("settings", t, ["host", "ssl", "credentials"]), C("settings", "object", "credentials", t.credentials), this.credentials = t.credentials
                    }
                    return t.prototype.equals = function(t) {
                        return this.host === t.host && this.ssl === t.ssl && this.credentials === t.credentials
                    }, t
                }(),
                ko = function() {
                    function t() {}
                    return t
                }(),
                No = function() {
                    function t(e) {
                        var n = this;
                        this.k = new oo, this.INTERNAL = {
                            delete: function() {
                                return n._ ? n._.shutdown() : Promise.resolve()
                            },
                            disableNetwork: function() {
                                return n._.disableNetwork()
                            },
                            enableNetwork: function() {
                                return n._.enableNetwork()
                            },
                            drainAsyncQueue: function(t) {
                                return n.k.drain(t)
                            }
                        };
                        var r = new ko;
                        if ("object" == typeof e.options) {
                            var o = e;
                            r.firebaseApp = o, r.databaseId = t.databaseIdFromApp(o), r.persistenceKey = r.firebaseApp.name, r.credentials = new uo(o)
                        } else {
                            var i = e;
                            if (!i.projectId) throw new zt(Ht.INVALID_ARGUMENT, "Must provide projectId");
                            r.databaseId = new ee(i.projectId, i.database), r.persistenceKey = "[DEFAULT]", r.credentials = new so
                        }
                        r.settings = new Do({}), this.x = r, this._databaseId = r.databaseId
                    }
                    return t.prototype.settings = function(t) {
                        if (v("Firestore.settings", arguments, 1), T("Firestore.settings", "object", 1, t), f(t, "persistence")) throw new zt(Ht.INVALID_ARGUMENT, '"persistence" is now specified with a separate call to firestore.enablePersistence().');
                        var e = new Do(t);
                        if (this._ && !this.x.settings.equals(e)) throw new zt(Ht.FAILED_PRECONDITION, "Firestore has already been started and its settings can no longer be changed. You can only call settings() before calling any other methods on a Firestore object.");
                        this.x.settings = e, void 0 !== e.credentials && (this.x.credentials = Dt(e.credentials))
                    }, t.prototype.enablePersistence = function() {
                        if (this._) throw new zt(Ht.FAILED_PRECONDITION, "Firestore has already been started and persistence can no longer be enabled. You can only call enablePersistence() before calling any other methods on a Firestore object.");
                        return this.configureClient(!0)
                    }, t.prototype.ensureClientConfigured = function() {
                        return this._ || this.configureClient(!1), this._
                    }, t.prototype.configureClient = function(t) {
                        var e = this;
                        c(!!this.x.settings.host, "FirestoreSettings.host cannot be falsey"), c(!this._, "configureClient() called multiple times");
                        var n = new Zt(this.x.databaseId, this.x.persistenceKey, this.x.settings.host, this.x.settings.ssl),
                            r = function(t) {
                                if (t instanceof Oo) {
                                    var n = e.x.databaseId,
                                        r = t.firestore.x.databaseId;
                                    if (!r.equals(n)) throw new zt(Ht.INVALID_ARGUMENT, "Document reference is for database " + r.projectId + "/" + r.database + " but should be for database " + n.projectId + "/" + n.database);
                                    return new Io(e.x.databaseId, t.q)
                                }
                                return t
                            };
                        return this._dataConverter = new To(r), this._ = new no(Wt.getPlatform(), n, this.x.credentials, this.k), this._.start(t)
                    }, t.databaseIdFromApp = function(t) {
                        var e = t.options;
                        if (!f(e, "projectId")) {
                            if (f(e, "firestoreId")) throw new zt(Ht.INVALID_ARGUMENT, '"firestoreId" is now specified as "projectId" in firebase.initializeApp.');
                            throw new zt(Ht.INVALID_ARGUMENT, '"projectId" not provided in firebase.initializeApp.')
                        }
                        if (f(e, "firestoreOptions")) throw new zt(Ht.INVALID_ARGUMENT, '"firestoreOptions" values are now specified with Firestore.settings()');
                        var n = e.projectId;
                        if (!n || "string" != typeof n) throw new zt(Ht.INVALID_ARGUMENT, "projectId must be a string in FirebaseApp.options");
                        return new ee(n)
                    }, Object.defineProperty(t.prototype, "app", {
                        get: function() {
                            if (!this.x.firebaseApp) throw new zt(Ht.FAILED_PRECONDITION, "Firestore was not initialized using the Firebase SDK. 'app' is not available");
                            return this.x.firebaseApp
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.collection = function(t) {
                        if (v("Firestore.collection", arguments, 1), T("Firestore.collection", "string", 1, t), !t) throw new zt(Ht.INVALID_ARGUMENT, "Must provide a non-empty collection path to collection()");
                        return this.ensureClientConfigured(), new Lo(oe.fromString(t), this)
                    }, t.prototype.doc = function(t) {
                        if (v("Firestore.doc", arguments, 1), T("Firestore.doc", "string", 1, t), !t) throw new zt(Ht.INVALID_ARGUMENT, "Must provide a non-empty document path to doc()");
                        return this.ensureClientConfigured(), Oo.forPath(oe.fromString(t), this)
                    }, t.prototype.runTransaction = function(t) {
                        var e = this;
                        return v("Firestore.runTransaction", arguments, 1), T("Firestore.runTransaction", "function", 1, t), this.ensureClientConfigured().transaction(function(n) {
                            return t(new Ao(e, n))
                        })
                    }, t.prototype.batch = function() {
                        return this.ensureClientConfigured(), new Ro(this)
                    }, Object.defineProperty(t, "logLevel", {
                        get: function() {
                            switch (r()) {
                                case qt.DEBUG:
                                    return "debug";
                                case qt.ERROR:
                                    return "error";
                                case qt.SILENT:
                                    return "silent";
                                default:
                                    return u("Unknown log level: " + r())
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.setLogLevel = function(t) {
                        switch (v("Firestore.setLogLevel", arguments, 1), T("Firestore.setLogLevel", "string", 1, t), t) {
                            case "debug":
                                o(qt.DEBUG);
                                break;
                            case "error":
                                o(qt.ERROR);
                                break;
                            case "silent":
                                o(qt.SILENT);
                                break;
                            default:
                                throw new zt(Ht.INVALID_ARGUMENT, "Invalid log level: " + t)
                        }
                    }, t
                }(),
                Ao = function() {
                    function t(t, e) {
                        this.Q = t, this.z = e
                    }
                    return t.prototype.get = function(t) {
                        var e = this;
                        v("Transaction.get", arguments, 1);
                        var n = xt("Transaction.get", t, this.Q);
                        return this.z.lookup([n.q]).then(function(t) {
                            if (!t || 1 !== t.length) return u("Mismatch in docs returned from document lookup.");
                            var r = t[0];
                            return r instanceof ce ? new Mo(e.Q, n.q, null, !1) : new Mo(e.Q, n.q, r, !1)
                        })
                    }, t.prototype.set = function(t, e, n) {
                        w("Transaction.set", arguments, 2, 3);
                        var r = xt("Transaction.set", t, this.Q);
                        n = Lt("Transaction.set", n);
                        var o = n.merge ? this.Q._dataConverter.parseMergeData("Transaction.set", e) : this.Q._dataConverter.parseSetData("Transaction.set", e);
                        return this.z.set(r.q, o), this
                    }, t.prototype.update = function(t, e, n) {
                        for (var r = [], o = 3; o < arguments.length; o++) r[o - 3] = arguments[o];
                        var i, a;
                        return "string" == typeof e || e instanceof xn ? (b("Transaction.update", arguments, 3), i = xt("Transaction.update", t, this.Q), a = this.Q._dataConverter.parseUpdateVarargs("Transaction.update", e, n, r)) : (v("Transaction.update", arguments, 2), i = xt("Transaction.update", t, this.Q), a = this.Q._dataConverter.parseUpdateData("Transaction.update", e)), this.z.update(i.q, a), this
                    }, t.prototype.delete = function(t) {
                        v("Transaction.delete", arguments, 1);
                        var e = xt("Transaction.delete", t, this.Q);
                        return this.z.delete(e.q), this
                    }, t
                }(),
                Ro = function() {
                    function t(t) {
                        this.Q = t, this.tt = [], this.et = !1
                    }
                    return t.prototype.set = function(t, e, n) {
                        w("WriteBatch.set", arguments, 2, 3), this.verifyNotCommitted();
                        var r = xt("WriteBatch.set", t, this.Q);
                        n = Lt("WriteBatch.set", n);
                        var o = n.merge ? this.Q._dataConverter.parseMergeData("WriteBatch.set", e) : this.Q._dataConverter.parseSetData("WriteBatch.set", e);
                        return this.tt = this.tt.concat(o.toMutations(r.q, nn.NONE)), this
                    }, t.prototype.update = function(t, e, n) {
                        for (var r = [], o = 3; o < arguments.length; o++) r[o - 3] = arguments[o];
                        this.verifyNotCommitted();
                        var i, a;
                        return "string" == typeof e || e instanceof xn ? (b("WriteBatch.update", arguments, 3), i = xt("WriteBatch.update", t, this.Q), a = this.Q._dataConverter.parseUpdateVarargs("WriteBatch.update", e, n, r)) : (v("WriteBatch.update", arguments, 2), i = xt("WriteBatch.update", t, this.Q), a = this.Q._dataConverter.parseUpdateData("WriteBatch.update", e)), this.tt = this.tt.concat(a.toMutations(i.q, nn.exists(!0))), this
                    }, t.prototype.delete = function(t) {
                        v("WriteBatch.delete", arguments, 1), this.verifyNotCommitted();
                        var e = xt("WriteBatch.delete", t, this.Q);
                        return this.tt = this.tt.concat(new un(e.q, nn.NONE)), this
                    }, t.prototype.commit = function() {
                        return this.verifyNotCommitted(), this.et = !0, this.tt.length > 0 ? this.Q.ensureClientConfigured().write(this.tt) : Promise.resolve()
                    }, t.prototype.verifyNotCommitted = function() {
                        if (this.et) throw new zt(Ht.FAILED_PRECONDITION, "A write batch can no longer be used after commit() has been called.")
                    }, t
                }(),
                Oo = function() {
                    function t(t, e) {
                        this.q = t, this.firestore = e, this._ = this.firestore.ensureClientConfigured()
                    }
                    return t.forPath = function(e, n) {
                        if (e.length % 2 != 0) throw new zt(Ht.INVALID_ARGUMENT, "Invalid document reference. Document references must have an even number of segments, but " + e.canonicalString() + " has " + e.length);
                        return new t(new se(e), n)
                    }, Object.defineProperty(t.prototype, "id", {
                        get: function() {
                            return this.q.path.lastSegment()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "parent", {
                        get: function() {
                            return new Lo(this.q.path.popLast(), this.firestore)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "path", {
                        get: function() {
                            return this.q.path.canonicalString()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.collection = function(t) {
                        if (v("DocumentReference.collection", arguments, 1), T("DocumentReference.collection", "string", 1, t), !t) throw new zt(Ht.INVALID_ARGUMENT, "Must provide a non-empty collection name to collection()");
                        var e = oe.fromString(t);
                        return new Lo(this.q.path.child(e), this.firestore)
                    }, t.prototype.isEqual = function(e) {
                        if (!(e instanceof t)) throw M("isEqual", "DocumentReference", 1, e);
                        return this.firestore === e.firestore && this.q.equals(e.q)
                    }, t.prototype.set = function(t, e) {
                        w("DocumentReference.set", arguments, 1, 2), e = Lt("DocumentReference.set", e);
                        var n = e.merge ? this.firestore._dataConverter.parseMergeData("DocumentReference.set", t) : this.firestore._dataConverter.parseSetData("DocumentReference.set", t);
                        return this._.write(n.toMutations(this.q, nn.NONE))
                    }, t.prototype.update = function(t, e) {
                        for (var n = [], r = 2; r < arguments.length; r++) n[r - 2] = arguments[r];
                        var o;
                        return "string" == typeof t || t instanceof xn ? (b("DocumentReference.update", arguments, 2), o = this.firestore._dataConverter.parseUpdateVarargs("DocumentReference.update", t, e, n)) : (v("DocumentReference.update", arguments, 1), o = this.firestore._dataConverter.parseUpdateData("DocumentReference.update", t)), this._.write(o.toMutations(this.q, nn.exists(!0)))
                    }, t.prototype.delete = function() {
                        return v("DocumentReference.delete", arguments, 0), this._.write([new un(this.q, nn.NONE)])
                    }, t.prototype.onSnapshot = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        w("DocumentReference.onSnapshot", arguments, 1, 4);
                        var n, r = {
                                includeMetadataChanges: !1
                            },
                            o = 0;
                        "object" != typeof t[o] || kt(t[o]) || (r = t[o], O("DocumentReference.onSnapshot", r, ["includeMetadataChanges"]), C("DocumentReference.onSnapshot", "boolean", "includeMetadataChanges", r.includeMetadataChanges), o++);
                        var i = {
                            includeDocumentMetadataChanges: r.includeMetadataChanges,
                            includeQueryMetadataChanges: r.includeMetadataChanges
                        };
                        return kt(t[o]) ? n = t[o] : (T("DocumentReference.onSnapshot", "function", o, t[o]), E("DocumentReference.onSnapshot", "function", o + 1, t[o + 1]), E("DocumentReference.onSnapshot", "function", o + 2, t[o + 2]), n = {
                            next: t[o],
                            error: t[o + 1],
                            complete: t[o + 2]
                        }), this.onSnapshotInternal(i, n)
                    }, t.prototype.onSnapshotInternal = function(t, e) {
                        var n = this,
                            r = function(t) {
                                console.error("Uncaught Error in onSnapshot:", t)
                            };
                        e.error && (r = e.error.bind(e));
                        var o = new ro({
                                next: function(t) {
                                    if (e.next) {
                                        c(t.docs.size <= 1, "Too many documents returned on a document query");
                                        var r = t.docs.get(n.q);
                                        e.next(new Mo(n.firestore, n.q, r, t.fromCache))
                                    }
                                },
                                error: r
                            }),
                            i = this._.listen(Le.atPath(this.q.path), o, t);
                        return function() {
                            o.mute(), n._.unlisten(i)
                        }
                    }, t.prototype.get = function() {
                        var t = this;
                        return v("DocumentReference.get", arguments, 0), new Promise(function(e, n) {
                            var r = t.onSnapshotInternal({
                                includeQueryMetadataChanges: !0,
                                includeDocumentMetadataChanges: !0,
                                waitForSyncWhenOnline: !0
                            }, {
                                next: function(t) {
                                    r(), !t.exists && t.metadata.fromCache ? n(new zt(Ht.ABORTED, "Failed to get document because the client is offline.")) : e(t)
                                },
                                error: n
                            })
                        })
                    }, t
                }(),
                Mo = function() {
                    function t(t, e, n, r) {
                        this.Q = t, this.q = e, this.nt = n, this.rt = r
                    }
                    return t.prototype.data = function() {
                        if (v("DocumentSnapshot.data", arguments, 0), !this.nt) throw new zt(Ht.NOT_FOUND, "This document doesn't exist. Check doc.exists to make sure the document exists before calling doc.data().");
                        return this.convertObject(this.nt.data)
                    }, t.prototype.get = function(t) {
                        if (v("DocumentSnapshot.get", arguments, 1), !this.nt) throw new zt(Ht.NOT_FOUND, "This document doesn't exist. Check doc.exists to make sure the document exists before calling doc.get().");
                        var e = this.nt.data.field(Mt("DocumentSnapshot.get", t));
                        return void 0 === e ? void 0 : this.convertValue(e)
                    }, Object.defineProperty(t.prototype, "id", {
                        get: function() {
                            return this.q.path.lastSegment()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "ref", {
                        get: function() {
                            return new Oo(this.q, this.Q)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "exists", {
                        get: function() {
                            return null !== this.nt
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "metadata", {
                        get: function() {
                            return {
                                hasPendingWrites: null !== this.nt && this.nt.hasLocalMutations,
                                fromCache: this.rt
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.convertObject = function(t) {
                        var e = this,
                            n = {};
                        return t.forEach(function(t, r) {
                            n[t] = e.convertValue(r)
                        }), n
                    }, t.prototype.convertValue = function(t) {
                        if (t instanceof Ae) return this.convertObject(t);
                        if (t instanceof Re) return this.convertArray(t);
                        if (t instanceof ke) {
                            var e = t.value(),
                                n = this.Q.ensureClientConfigured().databaseId();
                            return t.databaseId.equals(n) || a("Document " + this.q.path + " contains a document reference within a different database (" + t.databaseId.projectId + "/" + t.databaseId.database + ") which is not supported. It will be treated as a reference in the current database (" + n.projectId + "/" + n.database + ") instead."), new Oo(e, this.Q)
                        }
                        return t.value()
                    }, t.prototype.convertArray = function(t) {
                        var e = this;
                        return t.internalValue.map(function(t) {
                            return e.convertValue(t)
                        })
                    }, t
                }(),
                _o = function() {
                    function t(t, e) {
                        this.ot = t, this.firestore = e
                    }
                    return t.prototype.where = function(e, n, r) {
                        v("Query.where", arguments, 3), T("Query.where", "string", 2, n), R("Query.where", 3, r);
                        var o, i = Mt("Query.where", e);
                        if (i.isKeyField())
                            if ("string" == typeof r) {
                                if (-1 !== r.indexOf("/")) throw new zt(Ht.INVALID_ARGUMENT, "Function Query.where() requires its third parameter to be a valid document ID if the first parameter is FieldPath.documentId(), but it contains a slash.");
                                if ("" === r) throw new zt(Ht.INVALID_ARGUMENT, "Function Query.where() requires its third parameter to be a valid document ID if the first parameter is FieldPath.documentId(), but it was an empty string.");
                                var a = this.ot.path.child(new oe([r]));
                                c(a.length % 2 == 0, "Path should be a document key"), o = new ke(this.firestore._databaseId, new se(a))
                            } else {
                                if (!(r instanceof Oo)) throw new zt(Ht.INVALID_ARGUMENT, "Function Query.where() requires its third parameter to be a string or a DocumentReference if the first parameter is FieldPath.documentId(), but it was: " + N(r) + ".");
                                var s = r;
                                o = new ke(this.firestore._databaseId, s.q)
                            }
                        else o = this.firestore._dataConverter.parseQueryValue("Query.where", r);
                        var u = G(i, xe.fromString(n), o);
                        return this.validateNewFilter(u), new t(this.ot.addFilter(u), this.firestore)
                    }, t.prototype.orderBy = function(e, n) {
                        w("Query.orderBy", arguments, 1, 2), E("Query.orderBy", "string", 2, n);
                        var r;
                        if (void 0 === n || "asc" === n) r = Ve.ASCENDING;
                        else {
                            if ("desc" !== n) throw new zt(Ht.INVALID_ARGUMENT, "Function Query.orderBy() has unknown direction '" + n + "', expected 'asc' or 'desc'.");
                            r = Ve.DESCENDING
                        }
                        if (null !== this.ot.startAt) throw new zt(Ht.INVALID_ARGUMENT, "Invalid query. You must not call Query.startAt() or Query.startAfter() before calling Query.orderBy().");
                        if (null !== this.ot.endAt) throw new zt(Ht.INVALID_ARGUMENT, "Invalid query. You must not call Query.endAt() or Query.endBefore() before calling Query.orderBy().");
                        var o = Mt("Query.orderBy", e),
                            i = new je(o, r);
                        return this.validateNewOrderBy(i), new t(this.ot.addOrderBy(i), this.firestore)
                    }, t.prototype.limit = function(e) {
                        if (v("Query.limit", arguments, 1), T("Query.limit", "number", 1, e), e <= 0) throw new zt(Ht.INVALID_ARGUMENT, "Invalid Query. Query limit (" + e + ") is invalid. Limit must be positive.");
                        return new t(this.ot.withLimit(e), this.firestore)
                    }, t.prototype.startAt = function(e) {
                        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                        b("Query.startAt", arguments, 1);
                        var o = this.boundFromDocOrFields("Query.startAt", e, n, !0);
                        return new t(this.ot.withStartAt(o), this.firestore)
                    }, t.prototype.startAfter = function(e) {
                        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                        b("Query.startAfter", arguments, 1);
                        var o = this.boundFromDocOrFields("Query.startAfter", e, n, !1);
                        return new t(this.ot.withStartAt(o), this.firestore)
                    }, t.prototype.endBefore = function(e) {
                        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                        b("Query.endBefore", arguments, 1);
                        var o = this.boundFromDocOrFields("Query.endBefore", e, n, !0);
                        return new t(this.ot.withEndAt(o), this.firestore)
                    }, t.prototype.endAt = function(e) {
                        for (var n = [], r = 1; r < arguments.length; r++) n[r - 1] = arguments[r];
                        b("Query.endAt", arguments, 1);
                        var o = this.boundFromDocOrFields("Query.endAt", e, n, !1);
                        return new t(this.ot.withEndAt(o), this.firestore)
                    }, t.prototype.isEqual = function(e) {
                        if (!(e instanceof t)) throw M("isEqual", "Query", 1, e);
                        return this.firestore === e.firestore && this.ot.equals(e.ot)
                    }, t.prototype.boundFromDocOrFields = function(t, e, n, r) {
                        if (R(t, 1, e), e instanceof Mo) {
                            if (n.length > 0) throw new zt(Ht.INVALID_ARGUMENT, "Too many arguments provided to " + t + "().");
                            var o = e;
                            if (!o.exists) throw new zt(Ht.NOT_FOUND, "Can't use a DocumentSnapshot that doesn't exist for " + t + "().");
                            return this.boundFromDocument(t, o.nt, r)
                        }
                        var i = [e].concat(n);
                        return this.boundFromFields(t, i, r)
                    }, t.prototype.boundFromDocument = function(t, e, n) {
                        for (var r = [], o = 0, i = this.ot.orderBy; o < i.length; o++) {
                            var a = i[o];
                            if (a.field.isKeyField()) r.push(new ke(this.firestore._databaseId, e.key));
                            else {
                                var s = e.field(a.field);
                                if (void 0 === s) {
                                    var u = a.field.canonicalString();
                                    throw new zt(Ht.INVALID_ARGUMENT, "Invalid query. You are trying to start or end a query using a document for which the field '" + u + "' (used as the orderBy) does not exist.")
                                }
                                r.push(s)
                            }
                        }
                        return new qe(r, n)
                    }, t.prototype.boundFromFields = function(t, e, n) {
                        var r = this.ot.explicitOrderBy;
                        if (e.length > r.length) throw new zt(Ht.INVALID_ARGUMENT, "Too many arguments provided to " + t + "(). The number of arguments must be less than or equal to the number of Query.orderBy() clauses");
                        for (var o = [], i = 0; i < e.length; i++) {
                            var a = e[i];
                            if (r[i].field.isKeyField()) {
                                if ("string" != typeof a) throw new zt(Ht.INVALID_ARGUMENT, "Invalid query. Expected a string for document ID in " + t + "(), but got a " + typeof a);
                                if (-1 !== a.indexOf("/")) throw new zt(Ht.INVALID_ARGUMENT, "Invalid query. Document ID '" + a + "' contains a slash in " + t + "()");
                                var s = new se(this.ot.path.child(a));
                                o.push(new ke(this.firestore._databaseId, s))
                            } else {
                                var u = this.firestore._dataConverter.parseQueryValue(t, a);
                                o.push(u)
                            }
                        }
                        return new qe(o, n)
                    }, t.prototype.onSnapshot = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        w("Query.onSnapshot", arguments, 1, 4);
                        var n, r = {},
                            o = 0;
                        return "object" != typeof t[o] || kt(t[o]) || (r = t[o], O("Query.onSnapshot", r, ["includeQueryMetadataChanges", "includeDocumentMetadataChanges"]), C("Query.onSnapshot", "boolean", "includeDocumentMetadataChanges", r.includeDocumentMetadataChanges), C("Query.onSnapshot", "boolean", "includeQueryMetadataChanges", r.includeQueryMetadataChanges), o++), kt(t[o]) ? n = t[o] : (T("Query.onSnapshot", "function", o, t[o]), E("Query.onSnapshot", "function", o + 1, t[o + 1]), E("Query.onSnapshot", "function", o + 2, t[o + 2]), n = {
                            next: t[o],
                            error: t[o + 1],
                            complete: t[o + 2]
                        }), this.onSnapshotInternal(r, n)
                    }, t.prototype.onSnapshotInternal = function(t, e) {
                        var n = this,
                            r = function(t) {
                                console.error("Uncaught Error in onSnapshot:", t)
                            };
                        e.error && (r = e.error.bind(e));
                        var o = new ro({
                                next: function(t) {
                                    e.next && e.next(new Po(n.firestore, n.ot, t))
                                },
                                error: r
                            }),
                            i = this.firestore.ensureClientConfigured(),
                            a = i.listen(this.ot, o, t);
                        return function() {
                            o.mute(), i.unlisten(a)
                        }
                    }, t.prototype.get = function() {
                        var t = this;
                        return v("Query.get", arguments, 0), new Promise(function(e, n) {
                            var r = t.onSnapshotInternal({
                                includeDocumentMetadataChanges: !1,
                                includeQueryMetadataChanges: !0,
                                waitForSyncWhenOnline: !0
                            }, {
                                next: function(t) {
                                    r(), e(t)
                                },
                                error: n
                            })
                        })
                    }, t.prototype.validateNewFilter = function(t) {
                        if (t instanceof Be && t.isInequality()) {
                            var e = this.ot.getInequalityFilterField();
                            if (null !== e && !e.equals(t.field)) throw new zt(Ht.INVALID_ARGUMENT, "Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '" + e + "' and '" + t.field + "'");
                            var n = this.ot.getFirstOrderByField();
                            null !== n && this.validateOrderByAndInequalityMatch(t.field, n)
                        }
                    }, t.prototype.validateNewOrderBy = function(t) {
                        if (null === this.ot.getFirstOrderByField()) {
                            var e = this.ot.getInequalityFilterField();
                            null !== e && this.validateOrderByAndInequalityMatch(e, t.field)
                        }
                    }, t.prototype.validateOrderByAndInequalityMatch = function(t, e) {
                        if (!e.equals(t)) throw new zt(Ht.INVALID_ARGUMENT, "Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '" + t + "' and so you must also use '" + t + "' as your first Query.orderBy(), but your first Query.orderBy() is on field '" + e + "' instead.")
                    }, t
                }(),
                Po = function() {
                    function t(t, e, n) {
                        this.Q = t, this.it = e, this.at = n, this._cachedChanges = null, this.metadata = {
                            fromCache: n.fromCache,
                            hasPendingWrites: n.hasPendingWrites
                        }
                    }
                    return Object.defineProperty(t.prototype, "docs", {
                        get: function() {
                            var t = [];
                            return this.forEach(function(e) {
                                return t.push(e)
                            }), t
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "empty", {
                        get: function() {
                            return this.at.docs.isEmpty()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "size", {
                        get: function() {
                            return this.at.docs.size
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.forEach = function(t, e) {
                        var n = this;
                        w("QuerySnapshot.forEach", arguments, 1, 2), T("QuerySnapshot.forEach", "function", 1, t), this.at.docs.forEach(function(r) {
                            t.call(e, n.convertToDocumentImpl(r))
                        })
                    }, Object.defineProperty(t.prototype, "query", {
                        get: function() {
                            return new _o(this.it, this.Q)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(t.prototype, "docChanges", {
                        get: function() {
                            return this._cachedChanges || (this._cachedChanges = Bt(this.Q, this.at)), this._cachedChanges
                        },
                        enumerable: !0,
                        configurable: !0
                    }), t.prototype.convertToDocumentImpl = function(t) {
                        return new Mo(this.Q, t.key, t, this.metadata.fromCache)
                    }, t
                }(),
                Lo = function(t) {
                    function e(e, n) {
                        var r = t.call(this, Le.atPath(e), n) || this;
                        if (e.length % 2 != 1) throw new zt(Ht.INVALID_ARGUMENT, "Invalid collection reference. Collection references must have an odd number of segments, but " + e.canonicalString() + " has " + e.length);
                        return r
                    }
                    return Eo(e, t), Object.defineProperty(e.prototype, "id", {
                        get: function() {
                            return this.ot.path.lastSegment()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "parent", {
                        get: function() {
                            var t = this.ot.path.popLast();
                            return t.isEmpty() ? null : new Oo(new se(t), this.firestore)
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(e.prototype, "path", {
                        get: function() {
                            return this.ot.path.canonicalString()
                        },
                        enumerable: !0,
                        configurable: !0
                    }), e.prototype.doc = function(t) {
                        if (w("CollectionReference.doc", arguments, 0, 1), 0 === arguments.length && (t = Xt.newId()), T("CollectionReference.doc", "string", 1, t), "" === t) throw new zt(Ht.INVALID_ARGUMENT, "Document path must be a non-empty string");
                        var e = oe.fromString(t);
                        return Oo.forPath(this.ot.path.child(e), this.firestore)
                    }, e.prototype.add = function(t) {
                        v("CollectionReference.add", arguments, 1), T("CollectionReference.add", "object", 1, t);
                        var e = this.doc();
                        return e.set(t).then(function() {
                            return e
                        })
                    }, e
                }(_o),
                xo = l(No, "Use firebase.firestore() instead."),
                Bo = l(Ao, "Use firebase.firestore().runTransaction() instead."),
                Uo = l(Ro, "Use firebase.firestore().batch() instead."),
                Fo = l(Oo, "Use firebase.firestore().doc() instead."),
                Vo = l(Mo),
                qo = l(_o),
                jo = l(Po),
                Qo = l(Lo, "Use firebase.firestore().collection() instead."),
                Ko = {
                    Firestore: xo,
                    GeoPoint: $t,
                    Blob: Jt,
                    Transaction: Bo,
                    WriteBatch: Uo,
                    DocumentReference: Fo,
                    DocumentSnapshot: Vo,
                    Query: qo,
                    QuerySnapshot: jo,
                    CollectionReference: Qo,
                    FieldPath: xn,
                    FieldValue: mo,
                    setLogLevel: No.setLogLevel
                };
            e.registerFirestore = Vt, Vt(jt.default)
        },
        115: function(module, exports, __webpack_require__) {
            (function(global) {
                (function() {
                    function l(t) {
                        return "string" == typeof t
                    }

                    function aa() {}

                    function ba(t) {
                        var e = typeof t;
                        if ("object" == e) {
                            if (!t) return "null";
                            if (t instanceof Array) return "array";
                            if (t instanceof Object) return e;
                            var n = Object.prototype.toString.call(t);
                            if ("[object Window]" == n) return "object";
                            if ("[object Array]" == n || "number" == typeof t.length && void 0 !== t.splice && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable("splice")) return "array";
                            if ("[object Function]" == n || void 0 !== t.call && void 0 !== t.propertyIsEnumerable && !t.propertyIsEnumerable("call")) return "function"
                        } else if ("function" == e && void 0 === t.call) return "object";
                        return e
                    }

                    function n(t) {
                        return "array" == ba(t)
                    }

                    function ca(t) {
                        var e = ba(t);
                        return "array" == e || "object" == e && "number" == typeof t.length
                    }

                    function da(t) {
                        return "function" == ba(t)
                    }

                    function p(t) {
                        var e = typeof t;
                        return "object" == e && null != t || "function" == e
                    }

                    function fa(t, e, n) {
                        return t.call.apply(t.bind, arguments)
                    }

                    function ha(t, e, n) {
                        if (!t) throw Error();
                        if (2 < arguments.length) {
                            var r = Array.prototype.slice.call(arguments, 2);
                            return function() {
                                var n = Array.prototype.slice.call(arguments);
                                return Array.prototype.unshift.apply(n, r), t.apply(e, n)
                            }
                        }
                        return function() {
                            return t.apply(e, arguments)
                        }
                    }

                    function r(t, e, n) {
                        return r = Function.prototype.bind && -1 != ("" + Function.prototype.bind).indexOf("native code") ? fa : ha, r.apply(null, arguments)
                    }

                    function ia(t, e) {
                        var n = Array.prototype.slice.call(arguments, 1);
                        return function() {
                            var e = n.slice();
                            return e.push.apply(e, arguments), t.apply(this, e)
                        }
                    }

                    function u(t, e) {
                        function n() {}
                        n.prototype = e.prototype, t.L = e.prototype, t.prototype = new n, t.prototype.constructor = t, t.Ab = function(t, n, r) {
                            for (var o = Array(arguments.length - 2), i = 2; i < arguments.length; i++) o[i - 2] = arguments[i];
                            return e.prototype[n].apply(t, o)
                        }
                    }

                    function ja(t) {
                        if (Error.captureStackTrace) Error.captureStackTrace(this, ja);
                        else {
                            var e = Error().stack;
                            e && (this.stack = e)
                        }
                        t && (this.message = t + "")
                    }

                    function ka(t, e) {
                        for (var n = t.split("%s"), r = "", o = Array.prototype.slice.call(arguments, 1); o.length && 1 < n.length;) r += n.shift() + o.shift();
                        return r + n.join("%s")
                    }

                    function ma(t, e) {
                        return t < e ? -1 : t > e ? 1 : 0
                    }

                    function na(t, e) {
                        e.unshift(t), ja.call(this, ka.apply(null, e)), e.shift()
                    }

                    function oa(t, e) {
                        throw new na("Failure" + (t ? ": " + t : ""), Array.prototype.slice.call(arguments, 1))
                    }

                    function w() {
                        0 != qa && (ra[this[q] || (this[q] = ++ea)] = this), this.i = this.i, this.w = this.w
                    }

                    function ua(t) {
                        t: {
                            for (var e = va, n = t.length, r = l(t) ? t.split("") : t, o = 0; o < n; o++)
                                if (o in r && e.call(void 0, r[o], o, t)) {
                                    e = o;
                                    break t
                                }
                            e = -1
                        }
                        return 0 > e ? null : l(t) ? t.charAt(e) : t[e]
                    }

                    function wa(t) {
                        if (!n(t))
                            for (var e = t.length - 1; 0 <= e; e--) delete t[e];
                        t.length = 0
                    }

                    function xa(t) {
                        return Array.prototype.concat.apply([], arguments)
                    }

                    function ya(t) {
                        var e = t.length;
                        if (0 < e) {
                            for (var n = Array(e), r = 0; r < e; r++) n[r] = t[r];
                            return n
                        }
                        return []
                    }

                    function y(t) {
                        return -1 != x.indexOf(t)
                    }

                    function Ba(t, e, n) {
                        for (var r in t) e.call(n, t[r], r, t)
                    }

                    function Ca(t) {
                        var e, n = [],
                            r = 0;
                        for (e in t) n[r++] = t[e];
                        return n
                    }

                    function Da(t) {
                        var e, n = [],
                            r = 0;
                        for (e in t) n[r++] = e;
                        return n
                    }

                    function Ea(t) {
                        var e, n = {};
                        for (e in t) n[e] = t[e];
                        return n
                    }

                    function Ga(t, e) {
                        for (var n, r, o = 1; o < arguments.length; o++) {
                            r = arguments[o];
                            for (n in r) t[n] = r[n];
                            for (var i = 0; i < Fa.length; i++) n = Fa[i], Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                        }
                    }

                    function Ha(t) {
                        return Ha[" "](t), t
                    }

                    function Ia(t, e) {
                        var n = Ja;
                        return Object.prototype.hasOwnProperty.call(n, t) ? n[t] : n[t] = e(t)
                    }

                    function Oa() {
                        var t = k.document;
                        return t ? t.documentMode : void 0
                    }

                    function Ta(t) {
                        return Ia(t, function() {
                            for (var e = 0, n = la(Pa + "").split("."), r = la(t + "").split("."), o = Math.max(n.length, r.length), i = 0; 0 == e && i < o; i++) {
                                var a = n[i] || "",
                                    s = r[i] || "";
                                do {
                                    if (a = /(\d*)(\D*)(.*)/.exec(a) || ["", "", "", ""], s = /(\d*)(\D*)(.*)/.exec(s) || ["", "", "", ""], 0 == a[0].length && 0 == s[0].length) break;
                                    e = ma(0 == a[1].length ? 0 : parseInt(a[1], 10), 0 == s[1].length ? 0 : parseInt(s[1], 10)) || ma(0 == a[2].length, 0 == s[2].length) || ma(a[2], s[2]), a = a[3], s = s[3]
                                } while (0 == e)
                            }
                            return 0 <= e
                        })
                    }

                    function A(t, e) {
                        this.type = t, this.a = this.target = e, this.Pa = !0
                    }

                    function $a(t, e) {
                        if (A.call(this, t ? t.type : ""), this.relatedTarget = this.a = this.target = null, this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0, this.key = "", this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1, this.pointerId = 0, this.pointerType = "", this.c = null, t) {
                            var n = this.type = t.type,
                                r = t.changedTouches ? t.changedTouches[0] : null;
                            if (this.target = t.target || t.srcElement, this.a = e, e = t.relatedTarget) {
                                if (Ma) {
                                    t: {
                                        try {
                                            Ha(e.nodeName);
                                            var o = !0;
                                            break t
                                        } catch (t) {}
                                        o = !1
                                    }
                                    o || (e = null)
                                }
                            } else "mouseover" == n ? e = t.fromElement : "mouseout" == n && (e = t.toElement);
                            this.relatedTarget = e, null === r ? (this.clientX = void 0 !== t.clientX ? t.clientX : t.pageX, this.clientY = void 0 !== t.clientY ? t.clientY : t.pageY, this.screenX = t.screenX || 0, this.screenY = t.screenY || 0) : (this.clientX = void 0 !== r.clientX ? r.clientX : r.pageX, this.clientY = void 0 !== r.clientY ? r.clientY : r.pageY, this.screenX = r.screenX || 0, this.screenY = r.screenY || 0), this.button = t.button, this.key = t.key || "", this.ctrlKey = t.ctrlKey, this.altKey = t.altKey, this.shiftKey = t.shiftKey, this.metaKey = t.metaKey, this.pointerId = t.pointerId || 0, this.pointerType = l(t.pointerType) ? t.pointerType : ab[t.pointerType] || "", this.c = t, t.defaultPrevented && this.b()
                        }
                    }

                    function cb(t) {
                        return !(!t || !t[bb])
                    }

                    function eb(t, e, n, r, o) {
                        this.listener = t, this.a = null, this.src = e, this.type = n, this.capture = !!r, this.ga = o, this.key = ++db, this.Y = this.ca = !1
                    }

                    function fb(t) {
                        t.Y = !0, t.listener = null, t.a = null, t.src = null, t.ga = null
                    }

                    function gb(t) {
                        this.src = t, this.a = {}, this.b = 0
                    }

                    function ib(t, e) {
                        var n = e.type;
                        if (n in t.a) {
                            var r, o = t.a[n],
                                i = sa(o, e);
                            (r = 0 <= i) && Array.prototype.splice.call(o, i, 1), r && (fb(e), 0 == t.a[n].length && (delete t.a[n], t.b--))
                        }
                    }

                    function jb(t, e, n, r, o) {
                        return t = t.a["" + e], e = -1, t && (e = hb(t, n, r, o)), -1 < e ? t[e] : null
                    }

                    function hb(t, e, n, r) {
                        for (var o = 0; o < t.length; ++o) {
                            var i = t[o];
                            if (!i.Y && i.listener == e && i.capture == !!n && i.ga == r) return o
                        }
                        return -1
                    }

                    function nb(t, e, r, o, i) {
                        if (o && o.once) return ob(t, e, r, o, i);
                        if (n(e)) {
                            for (var a = 0; a < e.length; a++) nb(t, e[a], r, o, i);
                            return null
                        }
                        return r = pb(r), cb(t) ? t.aa(e, r, p(o) ? !!o.capture : !!o, i) : qb(t, e, r, !1, o, i)
                    }

                    function qb(t, e, n, r, o, i) {
                        if (!e) throw Error("Invalid event type");
                        var a = p(o) ? !!o.capture : !!o,
                            s = rb(t);
                        if (s || (t[kb] = s = new gb(t)), n = s.add(e, n, r, a, i), n.a) return n;
                        if (r = sb(), n.a = r, r.src = t, r.listener = n, t.addEventListener) Za || (o = a), void 0 === o && (o = !1), t.addEventListener("" + e, r, o);
                        else if (t.attachEvent) t.attachEvent(tb("" + e), r);
                        else {
                            if (!t.addListener || !t.removeListener) throw Error("addEventListener and attachEvent are unavailable.");
                            t.addListener(r)
                        }
                        return mb++, n
                    }

                    function sb() {
                        var t = ub,
                            e = Xa ? function(n) {
                                return t.call(e.src, e.listener, n)
                            } : function(n) {
                                if (!(n = t.call(e.src, e.listener, n))) return n
                            };
                        return e
                    }

                    function ob(t, e, r, o, i) {
                        if (n(e)) {
                            for (var a = 0; a < e.length; a++) ob(t, e[a], r, o, i);
                            return null
                        }
                        return r = pb(r), cb(t) ? t.Ha(e, r, p(o) ? !!o.capture : !!o, i) : qb(t, e, r, !0, o, i)
                    }

                    function vb(t, e, r, o, i) {
                        if (n(e))
                            for (var a = 0; a < e.length; a++) vb(t, e[a], r, o, i);
                        else o = p(o) ? !!o.capture : !!o, r = pb(r), cb(t) ? t.va(e, r, o, i) : t && (t = rb(t)) && (e = jb(t, e, r, o, i)) && wb(e)
                    }

                    function wb(t) {
                        if ("number" != typeof t && t && !t.Y) {
                            var e = t.src;
                            if (cb(e)) ib(e.c, t);
                            else {
                                var n = t.type,
                                    r = t.a;
                                e.removeEventListener ? e.removeEventListener(n, r, t.capture) : e.detachEvent ? e.detachEvent(tb(n), r) : e.addListener && e.removeListener && e.removeListener(r), mb--, (n = rb(e)) ? (ib(n, t), 0 == n.b && (n.src = null, e[kb] = null)) : fb(t)
                            }
                        }
                    }

                    function tb(t) {
                        return t in lb ? lb[t] : lb[t] = "on" + t
                    }

                    function xb(t, e, n, r) {
                        var o = !0;
                        if ((t = rb(t)) && (e = t.a["" + e]))
                            for (e = e.concat(), t = 0; t < e.length; t++) {
                                var i = e[t];
                                i && i.capture == n && !i.Y && (i = yb(i, r), o = o && !1 !== i)
                            }
                        return o
                    }

                    function yb(t, e) {
                        var n = t.listener,
                            r = t.ga || t.src;
                        return t.ca && wb(t), n.call(r, e)
                    }

                    function ub(t, e) {
                        if (t.Y) return !0;
                        if (!Xa) {
                            if (!e) t: {
                                e = ["window", "event"];
                                for (var n = k, r = 0; r < e.length; r++)
                                    if (null == (n = n[e[r]])) {
                                        e = null;
                                        break t
                                    }
                                e = n
                            }
                            if (r = e, e = new $a(r, this), n = !0, !(0 > r.keyCode || void 0 != r.returnValue)) {
                                t: {
                                    var o = !1;
                                    if (0 == r.keyCode) try {
                                        r.keyCode = -1;
                                        break t
                                    } catch (t) {
                                        o = !0
                                    }(o || void 0 == r.returnValue) && (r.returnValue = !0)
                                }
                                for (r = [], o = e.a; o; o = o.parentNode) r.push(o);
                                for (t = t.type, o = r.length - 1; 0 <= o; o--) {
                                    e.a = r[o];
                                    var i = xb(r[o], t, !0, e);
                                    n = n && i
                                }
                                for (o = 0; o < r.length; o++) e.a = r[o],
                                i = xb(r[o], t, !1, e),
                                n = n && i
                            }
                            return n
                        }
                        return yb(t, new $a(e, this))
                    }

                    function rb(t) {
                        return t = t[kb], t instanceof gb ? t : null
                    }

                    function pb(t) {
                        return da(t) ? t : (t[zb] || (t[zb] = function(e) {
                            return t.handleEvent(e)
                        }), t[zb])
                    }

                    function B() {
                        w.call(this), this.c = new gb(this), this.P = this, this.J = null
                    }

                    function Ab(t, e, n, r) {
                        if (!(e = t.c.a[e + ""])) return !0;
                        e = e.concat();
                        for (var o = !0, i = 0; i < e.length; ++i) {
                            var a = e[i];
                            if (a && !a.Y && a.capture == n) {
                                var s = a.listener,
                                    u = a.ga || a.src;
                                a.ca && ib(t.c, a), o = !1 !== s.call(u, r) && o
                            }
                        }
                        return o && 0 != r.Pa
                    }

                    function Bb(t) {
                        return !/^\s*$/.test(t) && /^[\],:{}\s\u2028\u2029]*$/.test(t.replace(/\\["\\\/bfnrtu]/g, "@").replace(/(?:"[^"\\\n\r\u2028\u2029\x00-\x08\x0a-\x1f]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)[\s\u2028\u2029]*(?=:|,|]|}|$)/g, "]").replace(/(?:^|:|,)(?:[\s\u2028\u2029]*\[)+/g, ""))
                    }

                    function Cb(a) {
                        if (a += "", Bb(a)) try {
                            return eval("(" + a + ")")
                        } catch (t) {}
                        throw Error("Invalid JSON string: " + a)
                    }

                    function Db(t) {
                        var e = [];
                        return Eb(new Fb, t, e), e.join("")
                    }

                    function Fb() {}

                    function Eb(t, e, r) {
                        if (null == e) r.push("null");
                        else {
                            if ("object" == typeof e) {
                                if (n(e)) {
                                    var o = e;
                                    e = o.length, r.push("[");
                                    for (var i = "", a = 0; a < e; a++) r.push(i), Eb(t, o[a], r), i = ",";
                                    return void r.push("]")
                                }
                                if (!(e instanceof String || e instanceof Number || e instanceof Boolean)) {
                                    r.push("{"), i = "";
                                    for (o in e) Object.prototype.hasOwnProperty.call(e, o) && "function" != typeof(a = e[o]) && (r.push(i), Gb(o, r), r.push(":"), Eb(t, a, r), i = ",");
                                    return void r.push("}")
                                }
                                e = e.valueOf()
                            }
                            switch (typeof e) {
                                case "string":
                                    Gb(e, r);
                                    break;
                                case "number":
                                    r.push(isFinite(e) && !isNaN(e) ? e + "" : "null");
                                    break;
                                case "boolean":
                                    r.push(e + "");
                                    break;
                                case "function":
                                    r.push("null");
                                    break;
                                default:
                                    throw Error("Unknown type: " + typeof e)
                            }
                        }
                    }

                    function Gb(t, e) {
                        e.push('"', t.replace(Ib, function(t) {
                            var e = Hb[t];
                            return e || (e = "\\u" + (65536 | t.charCodeAt(0)).toString(16).substr(1), Hb[t] = e), e
                        }), '"')
                    }

                    function Jb(t, e) {
                        this.c = t, this.f = e, this.b = 0, this.a = null
                    }

                    function Kb() {
                        this.b = this.a = null
                    }

                    function Ob() {
                        var t = Pb,
                            e = null;
                        return t.a && (e = t.a, t.a = t.a.next, t.a || (t.b = null), e.next = null), e
                    }

                    function Lb() {
                        this.next = this.b = this.a = null
                    }

                    function Qb(t) {
                        k.setTimeout(function() {
                            throw t
                        }, 0)
                    }

                    function Sb() {
                        var t = k.MessageChannel;
                        if (void 0 === t && "undefined" != typeof window && window.postMessage && window.addEventListener && !y("Presto") && (t = function() {
                                var t = document.createElement("IFRAME");
                                t.style.display = "none", t.src = "", document.documentElement.appendChild(t);
                                var e = t.contentWindow;
                                t = e.document, t.open(), t.write(""), t.close();
                                var n = "callImmediate" + Math.random(),
                                    o = "file:" == e.location.protocol ? "*" : e.location.protocol + "//" + e.location.host;
                                t = r(function(t) {
                                    "*" != o && t.origin != o || t.data != n || this.port1.onmessage()
                                }, this), e.addEventListener("message", t, !1), this.port1 = {}, this.port2 = {
                                    postMessage: function() {
                                        e.postMessage(n, o)
                                    }
                                }
                            }), void 0 !== t && !y("Trident") && !y("MSIE")) {
                            var e = new t,
                                n = {},
                                o = n;
                            return e.port1.onmessage = function() {
                                    if (void 0 !== n.next) {
                                        n = n.next;
                                        var t = n.za;
                                        n.za = null, t()
                                    }
                                },
                                function(t) {
                                    o.next = {
                                        za: t
                                    }, o = o.next, e.port2.postMessage(0)
                                }
                        }
                        return "undefined" != typeof document && "onreadystatechange" in document.createElement("SCRIPT") ? function(t) {
                            var e = document.createElement("SCRIPT");
                            e.onreadystatechange = function() {
                                e.onreadystatechange = null, e.parentNode.removeChild(e), e = null, t(), t = null
                            }, document.documentElement.appendChild(e)
                        } : function(t) {
                            k.setTimeout(t, 0)
                        }
                    }

                    function Ub() {
                        if (-1 != (k.Promise + "").indexOf("[native code]")) {
                            var t = k.Promise.resolve(void 0);
                            Tb = function() {
                                t.then(Vb)
                            }
                        } else Tb = function() {
                            var t = Vb;
                            !da(k.setImmediate) || k.Window && k.Window.prototype && !y("Edge") && k.Window.prototype.setImmediate == k.setImmediate ? (Rb || (Rb = Sb()), Rb(t)) : k.setImmediate(t)
                        }
                    }

                    function Vb() {
                        for (var t; t = Ob();) {
                            try {
                                t.a.call(t.b)
                            } catch (t) {
                                Qb(t)
                            }
                            var e = Nb;
                            e.f(t), 100 > e.b && (e.b++, t.next = e.a, e.a = t)
                        }
                        Wb = !1
                    }

                    function Xb(e, n) {
                        B.call(this), this.b = e || 1, this.a = n || k, this.f = r(this.ib, this), this.g = t()
                    }

                    function Yb(t) {
                        t.$ = !1, t.K && (t.a.clearTimeout(t.K), t.K = null)
                    }

                    function Zb(t, e, n) {
                        if (da(t)) n && (t = r(t, n));
                        else {
                            if (!t || "function" != typeof t.handleEvent) throw Error("Invalid listener argument");
                            t = r(t.handleEvent, t)
                        }
                        return 2147483647 < +e ? -1 : k.setTimeout(t, e || 0)
                    }

                    function $b(t, e, n) {
                        w.call(this), this.f = null != n ? r(t, n) : t, this.c = e, this.b = r(this.bb, this), this.a = []
                    }

                    function ac(t) {
                        t.X = Zb(t.b, t.c), t.f.apply(null, t.a)
                    }

                    function C(t) {
                        w.call(this), this.b = t, this.a = {}
                    }

                    function cc(t) {
                        Ba(t.a, function(t, e) {
                            this.a.hasOwnProperty(e) && wb(t)
                        }, t), t.a = {}
                    }

                    function dc(t, e, n) {
                        this.reset(t, e, n, void 0, void 0)
                    }

                    function fc(t) {
                        this.f = t, this.b = this.c = this.a = null
                    }

                    function D(t, e) {
                        this.name = t, this.value = e
                    }

                    function lc(t) {
                        return t.c ? t.c : t.a ? lc(t.a) : (oa("Root logger has no level set."), null)
                    }

                    function oc(t) {
                        nc || (nc = new fc(""), mc[""] = nc, nc.c = jc);
                        var e;
                        if (!(e = mc[t])) {
                            e = new fc(t);
                            var n = t.lastIndexOf("."),
                                r = t.substr(n + 1);
                            n = oc(t.substr(0, n)), n.b || (n.b = {}), n.b[r] = e, e.a = n, mc[t] = e
                        }
                        return e
                    }

                    function E(t, e) {
                        t && t.log(hc, e, void 0)
                    }

                    function pc(t, e) {
                        t && t.log(ic, e, void 0)
                    }

                    function F(t, e) {
                        t && t.log(kc, e, void 0)
                    }

                    function qc() {
                        this.a = oc("goog.labs.net.webChannel.WebChannelDebug"), this.b = !0
                    }

                    function rc(t, e, n, r, o, i) {
                        H(t, function() {
                            if (t.b)
                                if (i)
                                    for (var a = "", s = i.split("&"), u = 0; u < s.length; u++) {
                                        var c = s[u].split("=");
                                        if (1 < c.length) {
                                            var h = c[0];
                                            c = c[1];
                                            var l = h.split("_");
                                            a = 2 <= l.length && "type" == l[1] ? a + (h + "=") + c + "&" : a + (h + "=redacted&")
                                        }
                                    } else a = null;
                                else a = i;
                            return "XMLHTTP REQ (" + r + ") [attempt " + o + "]: " + e + "\n" + n + "\n" + a
                        })
                    }

                    function sc(t, e, n, r, o, i, a) {
                        H(t, function() {
                            return "XMLHTTP RESP (" + r + ") [ attempt " + o + "]: " + e + "\n" + n + "\n" + i + " " + a
                        })
                    }

                    function tc(t, e, n, r) {
                        H(t, function() {
                            return "XMLHTTP TEXT (" + e + "): " + uc(t, n) + (r ? " " + r : "")
                        })
                    }

                    function vc(t, e) {
                        H(t, function() {
                            return "TIMEOUT: " + e
                        })
                    }

                    function I(t, e) {
                        F(t.a, e)
                    }

                    function wc(t, e, n) {
                        (t = t.a) && t.log(gc, n || "Exception", e)
                    }

                    function H(t, e) {
                        pc(t.a, e)
                    }

                    function xc(t, e) {
                        (t = t.a) && t.log(gc, e, void 0)
                    }

                    function uc(t, e) {
                        if (!t.b) return e;
                        if (!e) return null;
                        try {
                            var r = JSON.parse(e);
                            if (r)
                                for (var o = 0; o < r.length; o++)
                                    if (n(r[o])) {
                                        var i = r[o];
                                        if (!(2 > i.length)) {
                                            var a = i[1];
                                            if (n(a) && !(1 > a.length)) {
                                                var s = a[0];
                                                if ("noop" != s && "stop" != s && "close" != s)
                                                    for (var u = 1; u < a.length; u++) a[u] = ""
                                            }
                                        }
                                    }
                            return Db(r)
                        } catch (n) {
                            return I(t, "Exception parsing expected JS array - probably was not JS"), e
                        }
                    }

                    function zc(t) {
                        A.call(this, "serverreachability", t)
                    }

                    function Ac(t) {
                        yc.dispatchEvent(new zc(yc, t))
                    }

                    function Bc(t) {
                        A.call(this, "statevent", t)
                    }

                    function J(t) {
                        yc.dispatchEvent(new Bc(yc, t))
                    }

                    function Cc(t) {
                        A.call(this, "timingevent", t)
                    }

                    function Dc(t, e, n) {
                        yc.dispatchEvent(new Cc(yc, t, e, n))
                    }

                    function Ec(t, e) {
                        if (!da(t)) throw Error("Fn must not be null and must be a function");
                        return k.setTimeout(function() {
                            t()
                        }, e)
                    }

                    function Hc() {}

                    function Ic(t) {
                        var e;
                        return (e = t.a) || (e = {}, Jc(t) && (e[0] = !0, e[1] = !0), e = t.a = e), e
                    }

                    function Lc() {}

                    function Mc(t) {
                        return (t = Jc(t)) ? new ActiveXObject(t) : new XMLHttpRequest
                    }

                    function Jc(t) {
                        if (!t.b && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
                            for (var e = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], n = 0; n < 4; n++) {
                                var r = e[n];
                                try {
                                    return new ActiveXObject(r), t.b = r
                                } catch (t) {}
                            }
                            throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed")
                        }
                        return t.b
                    }

                    function K(t, e, n, r) {
                        this.i = t, this.b = e, this.f = n, this.T = r || 1, this.N = new C(this), this.S = Nc, t = this.H = new Xb, t.b = Oc, t.K && t.$ ? (Yb(t), t.start()) : t.K && Yb(t), this.j = null, this.c = !1, this.m = this.g = this.h = this.J = this.D = this.U = this.w = null, this.s = [], this.a = null, this.F = 0, this.l = this.o = null, this.C = -1, this.B = !1, this.P = 0, this.I = null, this.M = !1
                    }

                    function Pc(t, e) {
                        switch (t) {
                            case 0:
                                return "Non-200 return code (" + e + ")";
                            case 1:
                                return "XMLHTTP failure (no data)";
                            case 2:
                                return "HttpConnection timeout";
                            default:
                                return "Unknown error"
                        }
                    }

                    function Sc(t, e, n) {
                        t.J = 1, t.h = Tc(L(e)), t.m = n, t.M = !0, Uc(t, null)
                    }

                    function Vc(t, e, n, r) {
                        t.J = 1, t.h = Tc(L(e)), t.m = null, t.M = n, Uc(t, r)
                    }

                    function Uc(e, n) {
                        e.D = t(), Wc(e), e.g = L(e.h), Xc(e.g, "t", e.T), e.F = 0, e.a = e.i.da(e.i.ia() ? n : null), 0 < e.P && (e.I = new $b(r(e.Qa, e, e.a), e.P)), e.N.aa(e.a, "readystatechange", e.fb), n = e.j ? Ea(e.j) : {}, e.m ? (e.o || (e.o = "POST"), n["Content-Type"] = "application/x-www-form-urlencoded", e.a.fa(e.g, e.o, e.m, n)) : (e.o = "GET", e.a.fa(e.g, e.o, null, n)), Ac(1), rc(e.b, e.o, e.g, e.f, e.T, e.m)
                    }

                    function Yc(t) {
                        var e = M(t.a),
                            n = t.a.Fa(),
                            r = t.a.W();
                        if (!(3 > e || 3 == e && !Ka && !t.a.V())) {
                            t.B || 4 != e || 7 == n || Ac(8 == n || 0 >= r ? 3 : 2), Zc(t);
                            var o = t.a.W();
                            t.C = o, (n = t.a.V()) || I(t.b, function() {
                                return "No response text for uri " + t.g + " status " + o
                            }), t.c = 200 == o, sc(t.b, t.o, t.g, t.f, t.T, e, o), t.c ? (t.M ? ($c(t, e, n), Ka && t.c && 3 == e && ad(t)) : (tc(t.b, t.f, n, null), bd(t, n)), 4 == e && cd(t), t.c && !t.B && (4 == e ? t.i.ua(t) : (t.c = !1, Wc(t)))) : (400 == o && 0 < n.indexOf("Unknown SID") ? (t.l = 3, J(12), E(t.b.a, "XMLHTTP Unknown SID (" + t.f + ")")) : (t.l = 0, J(13), E(t.b.a, "XMLHTTP Bad status " + o + " (" + t.f + ")")), cd(t), dd(t))
                        }
                    }

                    function $c(t, e, n) {
                        for (var r = !0; !t.B && t.F < n.length;) {
                            var o = ed(t, n);
                            if (o == Rc) {
                                4 == e && (t.l = 4, J(14), r = !1), tc(t.b, t.f, null, "[Incomplete Response]");
                                break
                            }
                            if (o == Qc) {
                                t.l = 4, J(15), tc(t.b, t.f, n, "[Invalid Chunk]"), r = !1;
                                break
                            }
                            tc(t.b, t.f, o, null), bd(t, o)
                        }
                        4 == e && 0 == n.length && (t.l = 1, J(16), r = !1), t.c = t.c && r, r || (tc(t.b, t.f, n, "[Invalid Chunked Response]"), cd(t), dd(t))
                    }

                    function ad(t) {
                        t.N.aa(t.H, "tick", t.eb), t.H.start()
                    }

                    function ed(t, e) {
                        var n = t.F,
                            r = e.indexOf("\n", n);
                        return -1 == r ? Rc : (n = +e.substring(n, r), isNaN(n) ? Qc : (r += 1) + n > e.length ? Rc : (e = e.substr(r, n), t.F = r + n, e))
                    }

                    function Wc(e) {
                        e.U = t() + e.S, fd(e, e.S)
                    }

                    function fd(t, e) {
                        if (null != t.w) throw Error("WatchDog timer not null");
                        t.w = Ec(r(t.cb, t), e)
                    }

                    function Zc(t) {
                        t.w && (k.clearTimeout(t.w), t.w = null)
                    }

                    function dd(t) {
                        t.i.Ja() || t.B || t.i.ua(t)
                    }

                    function cd(t) {
                        Zc(t);
                        var e = t.I;
                        e && "function" == typeof e.Z && e.Z(), t.I = null, Yb(t.H), cc(t.N), t.a && (e = t.a, t.a = null, e.abort(), e.Z())
                    }

                    function bd(t, e) {
                        try {
                            t.i.Ma(t, e), Ac(4)
                        } catch (e) {
                            wc(t.b, e, "Error in httprequest callback")
                        }
                    }

                    function gd(t) {
                        if (t.v && "function" == typeof t.v) return t.v();
                        if (l(t)) return t.split("");
                        if (ca(t)) {
                            for (var e = [], n = t.length, r = 0; r < n; r++) e.push(t[r]);
                            return e
                        }
                        return Ca(t)
                    }

                    function hd(t, e) {
                        if (t.forEach && "function" == typeof t.forEach) t.forEach(e, void 0);
                        else if (ca(t) || l(t)) ta(t, e, void 0);
                        else {
                            if (t.O && "function" == typeof t.O) var n = t.O();
                            else if (t.v && "function" == typeof t.v) n = void 0;
                            else if (ca(t) || l(t)) {
                                n = [];
                                for (var r = t.length, o = 0; o < r; o++) n.push(o)
                            } else n = Da(t);
                            r = gd(t), o = r.length;
                            for (var i = 0; i < o; i++) e.call(void 0, r[i], n && n[i], t)
                        }
                    }

                    function N(t, e) {
                        this.b = {}, this.a = [], this.c = 0;
                        var n = arguments.length;
                        if (1 < n) {
                            if (n % 2) throw Error("Uneven number of arguments");
                            for (var r = 0; r < n; r += 2) this.set(arguments[r], arguments[r + 1])
                        } else if (t) {
                            t instanceof N ? (n = t.O(), r = t.v()) : (n = Da(t), r = Ca(t));
                            for (var o = 0; o < n.length; o++) this.set(n[o], r[o])
                        }
                    }

                    function jd(t) {
                        t.b = {}, t.a.length = 0, t.c = 0
                    }

                    function kd(t, e) {
                        return !!O(t.b, e) && (delete t.b[e], t.c--, t.a.length > 2 * t.c && id(t), !0)
                    }

                    function id(t) {
                        if (t.c != t.a.length) {
                            for (var e = 0, n = 0; e < t.a.length;) {
                                var r = t.a[e];
                                O(t.b, r) && (t.a[n++] = r), e++
                            }
                            t.a.length = n
                        }
                        if (t.c != t.a.length) {
                            var o = {};
                            for (n = e = 0; e < t.a.length;) r = t.a[e], O(o, r) || (t.a[n++] = r, o[r] = 1), e++;
                            t.a.length = n
                        }
                    }

                    function O(t, e) {
                        return Object.prototype.hasOwnProperty.call(t, e)
                    }

                    function md(t, e) {
                        if (t) {
                            t = t.split("&");
                            for (var n = 0; n < t.length; n++) {
                                var r = t[n].indexOf("="),
                                    o = null;
                                if (0 <= r) {
                                    var i = t[n].substring(0, r);
                                    o = t[n].substring(r + 1)
                                } else i = t[n];
                                e(i, o ? decodeURIComponent(o.replace(/\+/g, " ")) : "")
                            }
                        }
                    }

                    function P(t, e) {
                        this.b = this.j = this.f = "", this.i = null, this.g = this.a = "", this.h = !1;
                        var n;
                        t instanceof P ? (this.h = void 0 !== e ? e : t.h, nd(this, t.f), this.j = t.j, od(this, t.b), pd(this, t.i), this.a = t.a, qd(this, rd(t.c)), this.g = t.g) : t && (n = (t + "").match(ld)) ? (this.h = !!e, nd(this, n[1] || "", !0), this.j = sd(n[2] || ""), od(this, n[3] || "", !0), pd(this, n[4]), this.a = sd(n[5] || "", !0), qd(this, n[6] || "", !0), this.g = sd(n[7] || "")) : (this.h = !!e, this.c = new td(null, this.h))
                    }

                    function L(t) {
                        return new P(t)
                    }

                    function nd(t, e, n) {
                        t.f = n ? sd(e, !0) : e, t.f && (t.f = t.f.replace(/:$/, ""))
                    }

                    function od(t, e, n) {
                        t.b = n ? sd(e, !0) : e
                    }

                    function pd(t, e) {
                        if (e) {
                            if (e = +e, isNaN(e) || 0 > e) throw Error("Bad port number " + e);
                            t.i = e
                        } else t.i = null
                    }

                    function qd(t, e, n) {
                        e instanceof td ? (t.c = e, zd(t.c, t.h)) : (n || (e = ud(e, Ad)), t.c = new td(e, t.h))
                    }

                    function Q(t, e, n) {
                        t.c.set(e, n)
                    }

                    function Xc(t, e, r) {
                        n(r) || (r = [r + ""]), Bd(t.c, e, r)
                    }

                    function Tc(e) {
                        return Q(e, "zx", Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ t()).toString(36)), e
                    }

                    function Cd(t) {
                        return t instanceof P ? L(t) : new P(t, void 0)
                    }

                    function Dd(t, e, n, r) {
                        var o = new P(null, void 0);
                        return t && nd(o, t), e && od(o, e), n && pd(o, n), r && (o.a = r), o
                    }

                    function sd(t, e) {
                        return t ? e ? decodeURI(t.replace(/%25/g, "%2525")) : decodeURIComponent(t) : ""
                    }

                    function ud(t, e, n) {
                        return l(t) ? (t = encodeURI(t).replace(e, Ed), n && (t = t.replace(/%25([0-9a-fA-F]{2})/g, "%$1")), t) : null
                    }

                    function Ed(t) {
                        return t = t.charCodeAt(0), "%" + (t >> 4 & 15).toString(16) + (15 & t).toString(16)
                    }

                    function td(t, e) {
                        this.b = this.a = null, this.c = t || null, this.f = !!e
                    }

                    function R(t) {
                        t.a || (t.a = new N, t.b = 0, t.c && md(t.c, function(e, n) {
                            t.add(decodeURIComponent(e.replace(/\+/g, " ")), n)
                        }))
                    }

                    function Gd(t, e) {
                        R(t), e = Fd(t, e), O(t.a.b, e) && (t.c = null, t.b -= t.a.get(e).length, kd(t.a, e))
                    }

                    function Hd(t, e) {
                        return R(t), e = Fd(t, e), O(t.a.b, e)
                    }

                    function Bd(t, e, n) {
                        Gd(t, e), 0 < n.length && (t.c = null, t.a.set(Fd(t, e), ya(n)), t.b += n.length)
                    }

                    function rd(t) {
                        var e = new td;
                        return e.c = t.c, t.a && (e.a = new N(t.a), e.b = t.b), e
                    }

                    function Fd(t, e) {
                        return e += "", t.f && (e = e.toLowerCase()), e
                    }

                    function zd(t, e) {
                        e && !t.f && (R(t), t.c = null, t.a.forEach(function(t, e) {
                            var n = e.toLowerCase();
                            e != n && (Gd(this, e), Bd(this, n, t))
                        }, t)), t.f = e
                    }

                    function Id() {
                        this.a = t()
                    }

                    function Kd() {
                        Jd || (Jd = new Id)
                    }

                    function Ld() {
                        Jd || (Jd = new Id)
                    }

                    function Md() {}

                    function Od() {
                        A.call(this, "d")
                    }

                    function Pd() {
                        A.call(this, "c")
                    }

                    function Qd(t, e) {
                        this.a = t, this.b = e, this.c = this.i = null, this.h = !1, this.l = null, this.f = -1, this.m = this.g = null
                    }

                    function Rd(t) {
                        I(t.b, "TestConnection: starting stage 2");
                        var e = t.a.H.a;
                        if (null != e) I(t.b, function() {
                            return "Buffered"
                        }), J(4), e ? (J(10), Sd(t.a, t, !1)) : (J(11), Sd(t.a, t, !0));
                        else {
                            t.c = new K(t, t.b, void 0, void 0), t.c.j = t.i;
                            var n = Td(t.a, t.g, t.l);
                            J(4), Xc(n, "TYPE", "xmlhttp");
                            var r = t.a.j,
                                o = t.a.J;
                            r && o && Q(n, r, o), Vc(t.c, n, !1, t.g)
                        }
                    }

                    function Vd() {
                        this.a = this.b = null
                    }

                    function S() {
                        this.a = new N
                    }

                    function Wd(t) {
                        var e = typeof t;
                        return "object" == e && t || "function" == e ? "o" + (t[q] || (t[q] = ++ea)) : e.charAt(0) + t
                    }

                    function Xd(t, e) {
                        this.a = t, this.b = e
                    }

                    function Yd(t) {
                        this.g = t || Zd, this.f = k.pa && k.pa.Ka && k.pa.Ka() && k.pa.Ka().Bb ? this.g : 1, this.a = null, 1 < this.f && (this.a = new S), this.b = null, this.c = []
                    }

                    function $d(t, e) {
                        t.a || -1 == e.indexOf("spdy") && -1 == e.indexOf("quic") && -1 == e.indexOf("h2") || (t.f = t.g, t.a = new S, t.b && (ae(t, t.b), t.b = null))
                    }

                    function be(t) {
                        return !!t.b || !!t.a && t.a.u() >= t.f
                    }

                    function ce(t, e) {
                        return t.b ? t.b == e : !!t.a && t.a.contains(e)
                    }

                    function ae(t, e) {
                        t.a ? t.a.add(e) : t.b = e
                    }

                    function de(t, e) {
                        t.b && t.b == e ? t.b = null : t.a && t.a.contains(e) && kd(t.a.a, Wd(e))
                    }

                    function ee(t) {
                        if (null != t.b) return t.c.concat(t.b.s);
                        if (null != t.a && 0 != t.a.a.c) {
                            var e = t.c;
                            return ta(t.a.v(), function(t) {
                                e = e.concat(t.s)
                            }), e
                        }
                        return ya(t.c)
                    }

                    function fe(t, e) {
                        t.c = t.c.concat(e)
                    }

                    function ge() {}

                    function he() {
                        this.a = new ge
                    }

                    function ie(t, e, n) {
                        var r = n || "";
                        try {
                            hd(t, function(t, n) {
                                var o = t;
                                p(t) && (o = Db(t)), e.push(r + n + "=" + encodeURIComponent(o))
                            })
                        } catch (t) {
                            throw e.push(r + "type=" + encodeURIComponent("_badmap")), t
                        }
                    }

                    function je(t, e) {
                        var n = new qc;
                        I(n, "TestLoadImage: loading " + t);
                        var r = new Image;
                        r.onload = ia(ke, n, r, "TestLoadImage: loaded", !0, e), r.onerror = ia(ke, n, r, "TestLoadImage: error", !1, e), r.onabort = ia(ke, n, r, "TestLoadImage: abort", !1, e), r.ontimeout = ia(ke, n, r, "TestLoadImage: timeout", !1, e), k.setTimeout(function() {
                            r.ontimeout && r.ontimeout()
                        }, 1e4), r.src = t
                    }

                    function ke(t, e, n, r, o) {
                        try {
                            I(t, n), e.onload = null, e.onerror = null, e.onabort = null, e.ontimeout = null, o(r)
                        } catch (e) {
                            wc(t, e)
                        }
                    }

                    function T(t) {
                        B.call(this), this.headers = new N, this.F = t || null, this.f = !1, this.D = this.a = null, this.M = this.s = "", this.j = 0, this.g = "", this.h = this.I = this.o = this.H = !1, this.l = 0, this.B = null, this.N = le, this.C = this.m = !1
                    }

                    function qe(t) {
                        return z && Ta(9) && "number" == typeof t.timeout && void 0 !== t.ontimeout
                    }

                    function va(t) {
                        return "content-type" == t.toLowerCase()
                    }

                    function oe(t, e) {
                        t.f = !1, t.a && (t.h = !0, t.a.abort(), t.h = !1), t.g = e, t.j = 5, re(t), se(t)
                    }

                    function re(t) {
                        t.H || (t.H = !0, t.dispatchEvent("complete"), t.dispatchEvent("error"))
                    }

                    function te(t) {
                        if (t.f && void 0 !== goog)
                            if (t.D[1] && 4 == M(t) && 2 == t.W()) F(t.b, U(t, "Local request error detected and ignored"));
                            else if (t.o && 4 == M(t)) Zb(t.La, 0, t);
                        else if (t.dispatchEvent("readystatechange"), 4 == M(t)) {
                            F(t.b, U(t, "Request complete")), t.f = !1;
                            try {
                                var e = t.W();
                                t: switch (e) {
                                    case 200:
                                    case 201:
                                    case 202:
                                    case 204:
                                    case 206:
                                    case 304:
                                    case 1223:
                                        var n = !0;
                                        break t;
                                    default:
                                        n = !1
                                }
                                var r;
                                if (!(r = n)) {
                                    var o;
                                    if (o = 0 === e) {
                                        var i = (t.s + "").match(ld)[1] || null;
                                        if (!i && k.self && k.self.location) {
                                            var a = k.self.location.protocol;
                                            i = a.substr(0, a.length - 1)
                                        }
                                        o = !me.test(i ? i.toLowerCase() : "")
                                    }
                                    r = o
                                }
                                r ? (t.dispatchEvent("complete"), t.dispatchEvent("success")) : (t.j = 6, t.g = t.Ga() + " [" + t.W() + "]", re(t))
                            } finally {
                                se(t)
                            }
                        }
                    }

                    function se(t, e) {
                        if (t.a) {
                            pe(t);
                            var n = t.a,
                                r = t.D[0] ? aa : null;
                            t.a = null, t.D = null, e || t.dispatchEvent("ready");
                            try {
                                n.onreadystatechange = r
                            } catch (e) {
                                (t = t.b) && t.log(gc, "Problem encountered resetting onreadystatechange: " + e.message, void 0)
                            }
                        }
                    }

                    function pe(t) {
                        t.a && t.C && (t.a.ontimeout = null), t.B && (k.clearTimeout(t.B), t.B = null)
                    }

                    function M(t) {
                        return t.a ? t.a.readyState : 0
                    }

                    function U(t, e) {
                        return e + " [" + t.M + " " + t.s + " " + t.W() + "]"
                    }

                    function ue(t) {
                        var e = "";
                        return Ba(t, function(t, n) {
                            e += n, e += ":", e += t, e += "\r\n"
                        }), e
                    }

                    function ve(t, e, n) {
                        t: {
                            for (r in n) {
                                var r = !1;
                                break t
                            }
                            r = !0
                        }
                        if (r) return t;
                        if (n = ue(n), l(t)) {
                            if (e = encodeURIComponent(e + ""), n = null != n ? "=" + encodeURIComponent(n + "") : "", e += n) {
                                if (n = t.indexOf("#"), 0 > n && (n = t.length), 0 > (r = t.indexOf("?")) || r > n) {
                                    r = n;
                                    var o = ""
                                } else o = t.substring(r + 1, n);
                                t = [t.substr(0, r), o, t.substr(n)], n = t[1], t[1] = e ? n ? n + "&" + e : e : n, t = t[0] + (t[1] ? "?" + t[1] : "") + t[2]
                            }
                            return t
                        }
                        return Q(t, e, n),
                        t
                    }

                    function we(t) {
                        this.ya = 0, this.g = [], this.a = new qc, this.H = new Vd, this.ja = this.wa = this.F = this.ka = this.b = this.J = this.j = this.U = this.h = this.M = this.i = null, this.Ua = this.P = 0, this.la = this.B = this.o = this.m = this.l = this.f = null, this.s = this.xa = this.N = -1, this.T = this.w = this.C = 0, this.S = t && t.supportsCrossDomainXhr || !1, this.I = "", this.c = new Yd(t && t.concurrentRequestLimit), this.ma = new he, this.D = !t || void 0 === t.backgroundChannelTest || t.backgroundChannelTest, this.Ta = t && t.fastHandshake || !1, t && t.Ea && this.a.Ea()
                    }

                    function xe(e) {
                        if (I(e.a, "disconnect()"), ye(e), 3 == e.G) {
                            var n = e.P++,
                                r = L(e.F);
                            Q(r, "SID", e.I), Q(r, "RID", n), Q(r, "TYPE", "terminate"), ze(e, r), n = new K(e, e.a, n, void 0), n.J = 2, n.h = Tc(L(r)), r = !1, k.navigator && k.navigator.sendBeacon && (r = k.navigator.sendBeacon("" + n.h, "")), !r && k.Image && ((new Image).src = n.h, r = !0), r || (n.a = n.i.da(null), n.a.fa(n.h)), n.D = t(), Wc(n)
                        }
                        Ae(e)
                    }

                    function ye(t) {
                        t.B && (t.B.abort(), t.B = null), t.b && (t.b.cancel(), t.b = null), t.m && (k.clearTimeout(t.m), t.m = null), Be(t), t.c.cancel(), t.l && (k.clearTimeout(t.l), t.l = null)
                    }

                    function Ce(t, e) {
                        1e3 == t.g.length && xc(t.a, function() {
                            return "Already have 1000 queued maps upon queueing " + Db(e)
                        }), t.g.push(new Xd(t.Ua++, e)), 3 == t.G && De(t)
                    }

                    function De(t) {
                        be(t.c) || t.l || (t.l = Ec(r(t.Oa, t), 0), t.C = 0)
                    }

                    function Ee(t, e) {
                        var n = t.c;
                        return (n.b ? 1 : n.a ? n.a.u() : 0) >= t.c.f - (t.l ? 1 : 0) ? (xc(t.a, "Unexpected retry request is scheduled."), !1) : t.l ? (I(t.a, "Use the retry request that is already scheduled."), t.g = e.s.concat(t.g), !0) : !(1 == t.G || 2 == t.G || 2 <= t.C || (I(t.a, "Going to retry POST"), t.l = Ec(r(t.Oa, t, e), Fe(t, t.C)), t.C++, 0))
                    }

                    function He(t, e) {
                        var n;
                        n = e ? e.f : t.P++;
                        var r = L(t.F);
                        Q(r, "SID", t.I), Q(r, "RID", n), Q(r, "AID", t.N), ze(t, r), t.h && t.i && ve(r, t.h, t.i), n = new K(t, t.a, n, t.C + 1), null === t.h && (n.j = t.i), e && (t.g = e.s.concat(t.g)), e = Ge(t, n), n.setTimeout(Math.round(1e4) + Math.round(1e4 * Math.random())), ae(t.c, n), Sc(n, r, e)
                    }

                    function ze(t, e) {
                        t.f && hd({}, function(t, n) {
                            Q(e, n, t)
                        })
                    }

                    function Ge(t, e) {
                        var n = Math.min(t.g.length, 1e3),
                            o = t.f ? r(t.f.Va, t.f, t) : null;
                        t: for (var i = t.g, a = -1;;) {
                            var s = ["count=" + n]; - 1 == a ? 0 < n ? (a = i[0].a, s.push("ofs=" + a)) : a = 0 : s.push("ofs=" + a);
                            for (var u = !0, c = 0; c < n; c++) {
                                var h = i[c].a,
                                    l = i[c].b;
                                if (0 > (h -= a)) a = Math.max(0, i[c].a - 100), u = !1;
                                else try {
                                    ie(l, s, "req" + h + "_")
                                } catch (t) {
                                    o && o(l)
                                }
                            }
                            if (u) {
                                o = s.join("&");
                                break t
                            }
                        }
                        return t = t.g.splice(0, n), e.s = t, o
                    }

                    function Ie(t) {
                        if (!t.b && !t.m) {
                            t.T = 1;
                            var e = t.Na;
                            Tb || Ub(), Wb || (Tb(), Wb = !0), Pb.add(e, t), t.w = 0
                        }
                    }

                    function Je(t) {
                        return t.b || t.m ? (xc(t.a, "Request already in progress"), !1) : !(3 <= t.w || (I(t.a, "Going to retry GET"), t.T++, t.m = Ec(r(t.Na, t), Fe(t, t.w)), t.w++, 0))
                    }

                    function Sd(t, e, n) {
                        I(t.a, "Test Connection Finished");
                        var r = e.m;
                        r && $d(t.c, r), t.la = n, t.s = e.f, I(t.a, "connectChannel_()"), t.F = Ke(t, t.ka), De(t)
                    }

                    function Ud(t, e) {
                        I(t.a, "Test Connection Failed"), t.s = e.f, V(t, 2)
                    }

                    function Be(t) {
                        null != t.o && (k.clearTimeout(t.o), t.o = null)
                    }

                    function Fe(t, e) {
                        var n = 5e3 + Math.floor(1e4 * Math.random());
                        return t.ra() || (I(t.a, "Inactive channel"), n *= 2), n * e
                    }

                    function V(t, e) {
                        if (H(t.a, "Error code " + e), 2 == e) {
                            var n = null;
                            t.f && (n = null);
                            var o = r(t.hb, t);
                            n || (n = new P("//www.google.com/images/cleardot.gif"), k.location && "http" == k.location.protocol || nd(n, "https"), Tc(n)), je("" + n, o)
                        } else J(2);
                        I(t.a, "HttpChannel: error - " + e), t.G = 0, t.f && t.f.Ba(e), Ae(t), ye(t)
                    }

                    function Ae(t) {
                        if (t.G = 0, t.s = -1, t.f) {
                            var e = ee(t.c);
                            0 == e.length && 0 == t.g.length || (I(t.a, function() {
                                return "Number of undelivered maps, pending: " + e.length + ", outgoing: " + t.g.length
                            }), t.c.c.length = 0, ya(t.g), t.g.length = 0), t.f.Aa()
                        }
                    }

                    function Ke(t, e) {
                        return e = Le(t, null, e), I(t.a, "GetForwardChannelUri: " + e), e
                    }

                    function Td(t, e, n) {
                        return e = Le(t, t.ia() ? e : null, n), I(t.a, "GetBackChannelUri: " + e), e
                    }

                    function Le(t, e, n) {
                        var r = Cd(n);
                        if ("" != r.b) e && od(r, e + "." + r.b), pd(r, r.i);
                        else {
                            var o, i = k.location;
                            o = e ? e + "." + i.hostname : i.hostname, r = Dd(i.protocol, o, i.port, n)
                        }
                        return t.U && Ba(t.U, function(t, e) {
                            Q(r, e, t)
                        }), e = t.j, n = t.J, e && n && Q(r, e, n), Q(r, "VER", t.oa), ze(t, r), r
                    }

                    function Me() {}

                    function Ne(t) {
                        for (var e = arguments[0], n = 1; n < arguments.length; n++) {
                            var r = arguments[n];
                            if (0 == r.lastIndexOf("/", 0)) e = r;
                            else {
                                var o;
                                (o = "" == e) || (o = e.length - 1, o = 0 <= o && e.indexOf("/", o) == o), e += o ? r : "/" + r
                            }
                        }
                        return e
                    }

                    function Oe() {
                        if (z && !(10 <= +Ua)) throw Error("Environmental error: no available transport.")
                    }

                    function W(t, e) {
                        B.call(this), this.a = new we(e), this.b = t, this.s = e && e.testUrl ? e.testUrl : Ne(this.b, "test"), this.f = oc("goog.labs.net.webChannel.WebChannelBaseTransport"), this.g = e && e.messageUrlParams || null, t = e && e.messageHeaders || null, e && e.clientProtocolHeaderRequired && (t ? t["X-Client-Protocol"] = "webchannel" : t = {
                            "X-Client-Protocol": "webchannel"
                        }), this.a.i = t, t = e && e.initMessageHeaders || null, e && e.messageContentType && (t ? t["X-WebChannel-Content-Type"] = e.messageContentType : t = {
                            "X-WebChannel-Content-Type": e.messageContentType
                        }), this.a.M = t, (t = e && e.httpHeadersOverwriteParam) && !/^[\s\xa0]*$/.test(t) && (this.a.h = t), this.o = e && e.supportsCrossDomainXhr || !1, this.m = e && e.sendRawJson || !1, (e = e && e.httpSessionIdParam) && !/^[\s\xa0]*$/.test(e) && (this.a.j = e, null !== (t = this.g) && e in t && (t = this.g, e in t && delete t[e], E(this.f, "Ignore httpSessionIdParam also specified with messageUrlParams: " + e))), this.h = new Pe(this)
                    }

                    function Qe(t) {
                        Od.call(this);
                        var e = t.__sm__;
                        if (e) {
                            t: {
                                for (var n in e) {
                                    t = n;
                                    break t
                                }
                                t = void 0
                            }(this.c = t) ? (t = this.c, this.data = null !== e && t in e ? e[t] : void 0) : this.data = e
                        }
                        else this.data = t
                    }

                    function Re() {
                        Pd.call(this), this.status = 1
                    }

                    function Pe(t) {
                        this.a = t
                    }

                    function Te() {
                        this.b = [], this.a = []
                    }

                    function Ue(t) {
                        return 0 == t.b.length && (t.b = t.a, t.b.reverse(), t.a = []), t.b.pop()
                    }

                    function Ve(t, e) {
                        if (w.call(this), this.h = t || 0, this.c = e || 10, this.h > this.c) throw Error(We);
                        this.a = new Te, this.b = new S, this.g = null, this.ba()
                    }

                    function Xe(t) {
                        if ("function" == typeof t.Z) t.Z();
                        else
                            for (var e in t) t[e] = null
                    }

                    function Ye(t, e) {
                        this.a = t, this.b = e
                    }

                    function Ze(t) {
                        if (this.a = [], t) t: {
                            if (t instanceof Ze) {
                                var e = t.O();
                                if (t = t.v(), 0 >= this.u()) {
                                    for (var n = this.a, r = 0; r < e.length; r++) n.push(new Ye(e[r], t[r]));
                                    break t
                                }
                            } else e = Da(t),
                            t = Ca(t);
                            for (r = 0; r < e.length; r++) $e(this, e[r], t[r])
                        }
                    }

                    function $e(t, e, n) {
                        var r = t.a;
                        for (r.push(new Ye(e, n)), e = r.length - 1, t = t.a, n = t[e]; 0 < e && (r = e - 1 >> 1, t[r].a > n.a);) t[e] = t[r], e = r;
                        t[e] = n
                    }

                    function af() {
                        Ze.call(this)
                    }

                    function X(t, e) {
                        this.f = new af, Ve.call(this, t, e)
                    }

                    function Y(t, e, n, r) {
                        this.l = t, this.j = !!r, X.call(this, e, n)
                    }
                    var g, goog = goog || {},
                        k = this,
                        q = "closure_uid_" + (1e9 * Math.random() >>> 0),
                        ea = 0,
                        t = Date.now || function() {
                            return +new Date
                        };
                    u(ja, Error), ja.prototype.name = "CustomError";
                    var la = String.prototype.trim ? function(t) {
                        return t.trim()
                    } : function(t) {
                        return t.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
                    };
                    u(na, ja), na.prototype.name = "AssertionError";
                    var qa = 0,
                        ra = {};
                    w.prototype.i = !1, w.prototype.Z = function() {
                        if (!this.i && (this.i = !0, this.A(), 0 != qa)) {
                            var t = this[q] || (this[q] = ++ea);
                            delete ra[t]
                        }
                    }, w.prototype.A = function() {
                        if (this.w)
                            for (; this.w.length;) this.w.shift()()
                    };
                    var sa = Array.prototype.indexOf ? function(t, e) {
                            return Array.prototype.indexOf.call(t, e, void 0)
                        } : function(t, e) {
                            if (l(t)) return l(e) && 1 == e.length ? t.indexOf(e, 0) : -1;
                            for (var n = 0; n < t.length; n++)
                                if (n in t && t[n] === e) return n;
                            return -1
                        },
                        ta = Array.prototype.forEach ? function(t, e, n) {
                            Array.prototype.forEach.call(t, e, n)
                        } : function(t, e, n) {
                            for (var r = t.length, o = l(t) ? t.split("") : t, i = 0; i < r; i++) i in o && e.call(n, o[i], i, t)
                        },
                        x;
                    t: {
                        var za = k.navigator;
                        if (za) {
                            var Aa = za.userAgent;
                            if (Aa) {
                                x = Aa;
                                break t
                            }
                        }
                        x = ""
                    }
                    var Fa = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
                    Ha[" "] = aa;
                    var Ka = y("Opera"),
                        z = y("Trident") || y("MSIE"),
                        La = y("Edge"),
                        Ma = y("Gecko") && !(-1 != x.toLowerCase().indexOf("webkit") && !y("Edge")) && !(y("Trident") || y("MSIE")) && !y("Edge"),
                        Na = -1 != x.toLowerCase().indexOf("webkit") && !y("Edge"),
                        Pa;
                    t: {
                        var Qa = "",
                            Ra = function() {
                                var t = x;
                                return Ma ? /rv:([^\);]+)(\)|;)/.exec(t) : La ? /Edge\/([\d\.]+)/.exec(t) : z ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t) : Na ? /WebKit\/(\S+)/.exec(t) : Ka ? /(?:Version)[ \/]?(\S+)/.exec(t) : void 0
                            }();
                        if (Ra && (Qa = Ra ? Ra[1] : ""), z) {
                            var Sa = Oa();
                            if (null != Sa && Sa > parseFloat(Qa)) {
                                Pa = Sa + "";
                                break t
                            }
                        }
                        Pa = Qa
                    }
                    var Ja = {},
                        Ua, Va = k.document;
                    Ua = Va && z ? Oa() || ("CSS1Compat" == Va.compatMode ? parseInt(Pa, 10) : 5) : void 0;
                    var Wa = Object.freeze || function(t) {
                            return t
                        },
                        Xa = !z || 9 <= +Ua,
                        Ya = z && !Ta("9"),
                        Za = function() {
                            if (!k.addEventListener || !Object.defineProperty) return !1;
                            var t = !1,
                                e = Object.defineProperty({}, "passive", {
                                    get: function() {
                                        t = !0
                                    }
                                });
                            return k.addEventListener("test", aa, e), k.removeEventListener("test", aa, e), t
                        }();
                    A.prototype.b = function() {
                        this.Pa = !1
                    }, u($a, A);
                    var ab = Wa({
                        2: "touch",
                        3: "pen",
                        4: "mouse"
                    });
                    $a.prototype.b = function() {
                        $a.L.b.call(this);
                        var t = this.c;
                        if (t.preventDefault) t.preventDefault();
                        else if (t.returnValue = !1, Ya) try {
                            (t.ctrlKey || 112 <= t.keyCode && 123 >= t.keyCode) && (t.keyCode = -1)
                        } catch (t) {}
                    };
                    var bb = "closure_listenable_" + (1e6 * Math.random() | 0),
                        db = 0;
                    gb.prototype.add = function(t, e, n, r, o) {
                        var i = "" + t;
                        (t = this.a[i]) || (t = this.a[i] = [], this.b++);
                        var a = hb(t, e, r, o);
                        return -1 < a ? (e = t[a], n || (e.ca = !1)) : (e = new eb(e, this.src, i, !!r, o), e.ca = n, t.push(e)), e
                    };
                    var kb = "closure_lm_" + (1e6 * Math.random() | 0),
                        lb = {},
                        mb = 0,
                        zb = "__closure_events_fn_" + (1e9 * Math.random() >>> 0);
                    u(B, w), B.prototype[bb] = !0, g = B.prototype, g.addEventListener = function(t, e, n, r) {
                        nb(this, t, e, n, r)
                    }, g.removeEventListener = function(t, e, n, r) {
                        vb(this, t, e, n, r)
                    }, g.dispatchEvent = function(t) {
                        var e, n = this.J;
                        if (n)
                            for (e = []; n; n = n.J) e.push(n);
                        n = this.P;
                        var r = t.type || t;
                        if (l(t)) t = new A(t, n);
                        else if (t instanceof A) t.target = t.target || n;
                        else {
                            var o = t;
                            t = new A(r, n), Ga(t, o)
                        }
                        if (o = !0, e)
                            for (var i = e.length - 1; 0 <= i; i--) {
                                var a = t.a = e[i];
                                o = Ab(a, r, !0, t) && o
                            }
                        if (a = t.a = n, o = Ab(a, r, !0, t) && o, o = Ab(a, r, !1, t) && o, e)
                            for (i = 0; i < e.length; i++) a = t.a = e[i], o = Ab(a, r, !1, t) && o;
                        return o
                    }, g.A = function() {
                        if (B.L.A.call(this), this.c) {
                            var t, e = this.c,
                                n = 0;
                            for (t in e.a) {
                                for (var r = e.a[t], o = 0; o < r.length; o++) ++n, fb(r[o]);
                                delete e.a[t], e.b--
                            }
                        }
                        this.J = null
                    }, g.aa = function(t, e, n, r) {
                        return this.c.add(t + "", e, !1, n, r)
                    }, g.Ha = function(t, e, n, r) {
                        return this.c.add(t + "", e, !0, n, r)
                    }, g.va = function(t, e, n, r) {
                        var o = this.c;
                        if ((t += "") in o.a) {
                            var i = o.a[t]; - 1 < (e = hb(i, e, n, r)) && (fb(i[e]), Array.prototype.splice.call(i, e, 1), 0 == i.length && (delete o.a[t], o.b--))
                        }
                    };
                    var Hb = {
                            '"': '\\"',
                            "\\": "\\\\",
                            "/": "\\/",
                            "\b": "\\b",
                            "\f": "\\f",
                            "\n": "\\n",
                            "\r": "\\r",
                            "\t": "\\t",
                            "\v": "\\u000b"
                        },
                        Ib = /\uffff/.test("￿") ? /[\\"\x00-\x1f\x7f-\uffff]/g : /[\\"\x00-\x1f\x7f-\xff]/g;
                    Jb.prototype.get = function() {
                        if (0 < this.b) {
                            this.b--;
                            var t = this.a;
                            this.a = t.next, t.next = null
                        } else t = this.c();
                        return t
                    };
                    var Nb = new Jb(function() {
                        return new Lb
                    }, function(t) {
                        t.reset()
                    });
                    Kb.prototype.add = function(t, e) {
                        var n = Nb.get();
                        n.set(t, e), this.b ? this.b.next = n : this.a = n, this.b = n
                    }, Lb.prototype.set = function(t, e) {
                        this.a = t, this.b = e, this.next = null
                    }, Lb.prototype.reset = function() {
                        this.next = this.b = this.a = null
                    };
                    var Rb, Tb, Wb = !1,
                        Pb = new Kb;
                    u(Xb, B), g = Xb.prototype, g.$ = !1, g.K = null, g.ib = function() {
                        if (this.$) {
                            var e = t() - this.g;
                            0 < e && e < .8 * this.b ? this.K = this.a.setTimeout(this.f, this.b - e) : (this.K && (this.a.clearTimeout(this.K), this.K = null), this.dispatchEvent("tick"), this.$ && (this.K = this.a.setTimeout(this.f, this.b), this.g = t()))
                        }
                    }, g.start = function() {
                        this.$ = !0, this.K || (this.K = this.a.setTimeout(this.f, this.b), this.g = t())
                    }, g.A = function() {
                        Xb.L.A.call(this), Yb(this), delete this.a
                    }, u($b, w), g = $b.prototype, g.ha = !1, g.X = null, g.Xa = function(t) {
                        this.a = arguments, this.X ? this.ha = !0 : ac(this)
                    }, g.A = function() {
                        $b.L.A.call(this), this.X && (k.clearTimeout(this.X), this.X = null, this.ha = !1, this.a = [])
                    }, g.bb = function() {
                        this.X = null, this.ha && (this.ha = !1, ac(this))
                    }, u(C, w);
                    var bc = [];
                    C.prototype.aa = function(t, e, r, o) {
                        n(e) || (e && (bc[0] = "" + e), e = bc);
                        for (var i = 0; i < e.length; i++) {
                            var a = nb(t, e[i], r || this.handleEvent, o || !1, this.b || this);
                            if (!a) break;
                            this.a[a.key] = a
                        }
                        return this
                    }, C.prototype.va = function(t, e, r, o, i) {
                        if (n(e))
                            for (var a = 0; a < e.length; a++) this.va(t, e[a], r, o, i);
                        else r = r || this.handleEvent, o = p(o) ? !!o.capture : !!o, i = i || this.b || this, r = pb(r), o = !!o, (e = cb(t) ? jb(t.c, e + "", r, o, i) : t && (t = rb(t)) ? jb(t, e, r, o, i) : null) && (wb(e), delete this.a[e.key])
                    }, C.prototype.A = function() {
                        C.L.A.call(this), cc(this)
                    }, C.prototype.handleEvent = function() {
                        throw Error("EventHandler.handleEvent not implemented")
                    }, dc.prototype.a = null;
                    var ec = 0;
                    dc.prototype.reset = function(e, n, r, o, i) {
                        "number" == typeof i || ec++, o || t(), delete this.a
                    }, D.prototype.toString = function() {
                        return this.name
                    };
                    var gc = new D("SEVERE", 1e3),
                        hc = new D("WARNING", 900),
                        ic = new D("INFO", 800),
                        jc = new D("CONFIG", 700),
                        kc = new D("FINE", 500);
                    fc.prototype.log = function(t, e, n) {
                        if (t.value >= lc(this).value)
                            for (da(e) && (e = e()), t = new dc(t, e + "", this.f), n && (t.a = n), n = this; n;) n = n.a
                    };
                    var mc = {},
                        nc = null;
                    qc.prototype.Ea = function() {
                        this.b = !1
                    };
                    var yc = new B;
                    u(zc, A), u(Bc, A), u(Cc, A);
                    var Fc = {
                            NO_ERROR: 0,
                            jb: 1,
                            qb: 2,
                            pb: 3,
                            mb: 4,
                            ob: 5,
                            rb: 6,
                            Ra: 7,
                            TIMEOUT: 8,
                            ub: 9
                        },
                        Gc = {
                            lb: "complete",
                            yb: "success",
                            Sa: "error",
                            Ra: "abort",
                            wb: "ready",
                            xb: "readystatechange",
                            TIMEOUT: "timeout",
                            sb: "incrementaldata",
                            vb: "progress",
                            nb: "downloadprogress",
                            zb: "uploadprogress"
                        };
                    Hc.prototype.a = null;
                    var Kc;
                    u(Lc, Hc), Kc = new Lc;
                    var Nc = 45e3,
                        Oc = 250,
                        Qc = {},
                        Rc = {};
                    g = K.prototype, g.setTimeout = function(t) {
                        this.S = t
                    }, g.fb = function(t) {
                        t = t.target;
                        var e = this.I;
                        e && 3 == M(t) ? (I(this.b, "Throttling readystatechange."), e.Xa()) : this.Qa(t)
                    }, g.Qa = function(t) {
                        try {
                            t == this.a ? Yc(this) : E(this.b.a, "Called back with an unexpected xmlhttp")
                        } catch (t) {
                            if (I(this.b, "Failed call to OnXmlHttpReadyStateChanged_"), this.a && this.a.V()) {
                                var e = this;
                                wc(this.b, t, function() {
                                    return "ResponseText: " + e.a.V()
                                })
                            } else wc(this.b, t, "No response text")
                        }
                    }, g.eb = function() {
                        var t = M(this.a),
                            e = this.a.V();
                        this.F < e.length && (Zc(this), $c(this, t, e), this.c && 4 != t && Wc(this))
                    }, g.cancel = function() {
                        this.B = !0, cd(this)
                    }, g.cb = function() {
                        this.w = null;
                        var e = t();
                        0 <= e - this.U ? (this.c && xc(this.b, "Received watchdog timeout even though request loaded successfully"), vc(this.b, this.g), 2 != this.J && (Ac(3), J(17)), cd(this), this.l = 2, dd(this)) : (E(this.b.a, "WatchDog timer called too early"), fd(this, this.U - e))
                    }, g = N.prototype, g.u = function() {
                        return this.c
                    }, g.v = function() {
                        id(this);
                        for (var t = [], e = 0; e < this.a.length; e++) t.push(this.b[this.a[e]]);
                        return t
                    }, g.O = function() {
                        return id(this), this.a.concat()
                    }, g.get = function(t, e) {
                        return O(this.b, t) ? this.b[t] : e
                    }, g.set = function(t, e) {
                        O(this.b, t) || (this.c++, this.a.push(t)), this.b[t] = e
                    }, g.forEach = function(t, e) {
                        for (var n = this.O(), r = 0; r < n.length; r++) {
                            var o = n[r],
                                i = this.get(o);
                            t.call(e, i, o, this)
                        }
                    };
                    var ld = /^(?:([^:\/?#.]+):)?(?:\/\/(?:([^\/?#]*)@)?([^\/#?]*?)(?::([0-9]+))?(?=[\/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
                    P.prototype.toString = function() {
                        var t = [],
                            e = this.f;
                        e && t.push(ud(e, vd, !0), ":");
                        var n = this.b;
                        return (n || "file" == e) && (t.push("//"), (e = this.j) && t.push(ud(e, vd, !0), "@"), t.push(encodeURIComponent(n + "").replace(/%25([0-9a-fA-F]{2})/g, "%$1")), null != (n = this.i) && t.push(":", n + "")), (n = this.a) && (this.b && "/" != n.charAt(0) && t.push("/"), t.push(ud(n, "/" == n.charAt(0) ? wd : xd, !0))), (n = "" + this.c) && t.push("?", n), (n = this.g) && t.push("#", ud(n, yd)), t.join("")
                    }, P.prototype.resolve = function(t) {
                        var e = L(this),
                            n = !!t.f;
                        n ? nd(e, t.f) : n = !!t.j, n ? e.j = t.j : n = !!t.b, n ? od(e, t.b) : n = null != t.i;
                        var r = t.a;
                        if (n) pd(e, t.i);
                        else if (n = !!t.a) {
                            if ("/" != r.charAt(0))
                                if (this.b && !this.a) r = "/" + r;
                                else {
                                    var o = e.a.lastIndexOf("/"); - 1 != o && (r = e.a.substr(0, o + 1) + r)
                                }
                            if (".." == (o = r) || "." == o) r = "";
                            else if (-1 != o.indexOf("./") || -1 != o.indexOf("/.")) {
                                r = 0 == o.lastIndexOf("/", 0), o = o.split("/");
                                for (var i = [], a = 0; a < o.length;) {
                                    var s = o[a++];
                                    "." == s ? r && a == o.length && i.push("") : ".." == s ? ((1 < i.length || 1 == i.length && "" != i[0]) && i.pop(), r && a == o.length && i.push("")) : (i.push(s), r = !0)
                                }
                                r = i.join("/")
                            } else r = o
                        }
                        return n ? e.a = r : n = "" != "" + t.c, n ? qd(e, rd(t.c)) : n = !!t.g, n && (e.g = t.g), e
                    };
                    var vd = /[#\/\?@]/g,
                        xd = /[#\?:]/g,
                        wd = /[#\?]/g,
                        Ad = /[#\?@]/g,
                        yd = /#/g;
                    g = td.prototype, g.u = function() {
                        return R(this), this.b
                    }, g.add = function(t, e) {
                        R(this), this.c = null, t = Fd(this, t);
                        var n = this.a.get(t);
                        return n || this.a.set(t, n = []), n.push(e), this.b += 1, this
                    }, g.forEach = function(t, e) {
                        R(this), this.a.forEach(function(n, r) {
                            ta(n, function(n) {
                                t.call(e, n, r, this)
                            }, this)
                        }, this)
                    }, g.O = function() {
                        R(this);
                        for (var t = this.a.v(), e = this.a.O(), n = [], r = 0; r < e.length; r++)
                            for (var o = t[r], i = 0; i < o.length; i++) n.push(e[r]);
                        return n
                    }, g.v = function(t) {
                        R(this);
                        var e = [];
                        if (l(t)) Hd(this, t) && (e = xa(e, this.a.get(Fd(this, t))));
                        else {
                            t = this.a.v();
                            for (var n = 0; n < t.length; n++) e = xa(e, t[n])
                        }
                        return e
                    }, g.set = function(t, e) {
                        return R(this), this.c = null, t = Fd(this, t), Hd(this, t) && (this.b -= this.a.get(t).length), this.a.set(t, [e]), this.b += 1, this
                    }, g.get = function(t, e) {
                        return t = t ? this.v(t) : [], 0 < t.length ? t[0] + "" : e
                    }, g.toString = function() {
                        if (this.c) return this.c;
                        if (!this.a) return "";
                        for (var t = [], e = this.a.O(), n = 0; n < e.length; n++) {
                            var r = e[n],
                                o = encodeURIComponent(r + "");
                            r = this.v(r);
                            for (var i = 0; i < r.length; i++) {
                                var a = o;
                                "" !== r[i] && (a += "=" + encodeURIComponent(r[i] + "")), t.push(a)
                            }
                        }
                        return this.c = t.join("&")
                    };
                    var Jd = null;
                    Id.prototype.set = function(t) {
                        this.a = t
                    }, Id.prototype.reset = function() {
                        this.set(t())
                    }, Id.prototype.get = function() {
                        return this.a
                    }, u(Ld, Kd);
                    var Nd = {
                        OPEN: "a",
                        kb: "b",
                        Sa: "c",
                        tb: "d"
                    };
                    u(Od, A), u(Pd, A), g = Qd.prototype, g.R = null, g.da = function(t) {
                        return this.a.da(t)
                    }, g.abort = function() {
                        this.c && (this.c.cancel(), this.c = null), this.f = -1
                    }, g.Ja = function() {
                        return !1
                    }, g.Ma = function(t, e) {
                        if (this.f = t.C, 0 == this.R) {
                            if (I(this.b, "TestConnection: Got data for stage 1"), !this.a.D && (t = t.a)) {
                                var n = t.a ? t.a.getResponseHeader("X-Client-Wire-Protocol") : null;
                                this.m = n || null, this.a.j && ((t = t.a ? t.a.getResponseHeader("X-HTTP-Session-Id") : null) ? this.a.J = t : E(this.b.a, "Missing X_HTTP_SESSION_ID in the handshake response"))
                            }
                            if (e) {
                                try {
                                    var r = this.a.ma.a.parse(e)
                                } catch (t) {
                                    return wc(this.b, t), void Ud(this.a, this)
                                }
                                this.g = r[0]
                            } else I(this.b, "TestConnection: Null responseText"), Ud(this.a, this)
                        } else 1 == this.R && (this.h ? J(6) : "11111" == e ? (J(5), this.h = !0, (!z || 10 <= +Ua) && (this.f = 200, this.c.cancel(), I(this.b, "Test connection succeeded; using streaming connection"), J(11), Sd(this.a, this, !0))) : (J(7), this.h = !1))
                    }, g.ua = function() {
                        this.f = this.c.C, this.c.c ? 0 == this.R ? (this.R = 1, I(this.b, "TestConnection: request complete for initial check"), Rd(this)) : 1 == this.R && (I(this.b, "TestConnection: request complete for stage 2"), this.h ? (I(this.b, "Test connection succeeded; using streaming connection"), J(11), Sd(this.a, this, !0)) : (I(this.b, "Test connection failed; not using streaming"), J(10), Sd(this.a, this, !1))) : (I(this.b, "TestConnection: request failed, in state " + this.R), 0 == this.R ? J(8) : 1 == this.R && J(9), Ud(this.a, this))
                    }, g.ia = function() {
                        return this.a.ia()
                    }, g.ra = function() {
                        return this.a.ra()
                    }, S.prototype.u = function() {
                        return this.a.u()
                    }, S.prototype.add = function(t) {
                        this.a.set(Wd(t), t)
                    }, S.prototype.contains = function(t) {
                        return t = Wd(t), O(this.a.b, t)
                    }, S.prototype.v = function() {
                        return this.a.v()
                    };
                    var Zd = 10;
                    Yd.prototype.cancel = function() {
                        this.c = ee(this), this.b ? (this.b.cancel(), this.b = null) : this.a && 0 != this.a.a.c && (ta(this.a.v(), function(t) {
                            t.cancel()
                        }), jd(this.a.a))
                    }, ge.prototype.stringify = function(t) {
                        return k.JSON.stringify(t, void 0)
                    }, ge.prototype.parse = function(t) {
                        return k.JSON.parse(t, void 0)
                    }, u(T, B);
                    var le = "";
                    T.prototype.b = oc("goog.net.XhrIo");
                    var me = /^https?$/i,
                        ne = ["POST", "PUT"];
                    g = T.prototype, g.fa = function(t, e, n, o) {
                        if (this.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.s + "; newUri=" + t);
                        e = e ? e.toUpperCase() : "GET", this.s = t, this.g = "", this.j = 0, this.M = e, this.H = !1, this.f = !0, this.a = Mc(this.F ? this.F : Kc), this.D = Ic(this.F ? this.F : Kc), this.a.onreadystatechange = r(this.La, this);
                        try {
                            F(this.b, U(this, "Opening Xhr")), this.I = !0, this.a.open(e, t + "", !0), this.I = !1
                        } catch (t) {
                            return F(this.b, U(this, "Error opening Xhr: " + t.message)), void oe(this, t)
                        }
                        t = n || "";
                        var i = new N(this.headers);
                        o && hd(o, function(t, e) {
                            i.set(e, t)
                        }), o = ua(i.O()), n = k.FormData && t instanceof k.FormData, !(0 <= sa(ne, e)) || o || n || i.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8"), i.forEach(function(t, e) {
                            this.a.setRequestHeader(e, t)
                        }, this), this.N && (this.a.responseType = this.N), "withCredentials" in this.a && this.a.withCredentials !== this.m && (this.a.withCredentials = this.m);
                        try {
                            pe(this), 0 < this.l && (this.C = qe(this.a), F(this.b, U(this, "Will abort after " + this.l + "ms if incomplete, xhr2 " + this.C)), this.C ? (this.a.timeout = this.l, this.a.ontimeout = r(this.Ia, this)) : this.B = Zb(this.Ia, this.l, this)), F(this.b, U(this, "Sending request")), this.o = !0, this.a.send(t), this.o = !1
                        } catch (t) {
                            F(this.b, U(this, "Send error: " + t.message)), oe(this, t)
                        }
                    }, g.Ia = function() {
                        void 0 !== goog && this.a && (this.g = "Timed out after " + this.l + "ms, aborting", this.j = 8, F(this.b, U(this, this.g)), this.dispatchEvent("timeout"), this.abort(8))
                    }, g.abort = function(t) {
                        this.a && this.f && (F(this.b, U(this, "Aborting")), this.f = !1, this.h = !0, this.a.abort(), this.h = !1, this.j = t || 7, this.dispatchEvent("complete"), this.dispatchEvent("abort"), se(this))
                    }, g.A = function() {
                        this.a && (this.f && (this.f = !1, this.h = !0, this.a.abort(), this.h = !1), se(this, !0)), T.L.A.call(this)
                    }, g.La = function() {
                        this.i || (this.I || this.o || this.h ? te(this) : this.ab())
                    }, g.ab = function() {
                        te(this)
                    }, g.W = function() {
                        try {
                            return 2 < M(this) ? this.a.status : -1
                        } catch (t) {
                            return -1
                        }
                    }, g.Ga = function() {
                        try {
                            return 2 < M(this) ? this.a.statusText : ""
                        } catch (t) {
                            return F(this.b, "Can not get status: " + t.message), ""
                        }
                    }, g.V = function() {
                        try {
                            return this.a ? this.a.responseText : ""
                        } catch (t) {
                            return F(this.b, "Can not get responseText: " + t.message), ""
                        }
                    }, g.Ya = function(t) {
                        if (this.a) {
                            var e = this.a.responseText;
                            t && 0 == e.indexOf(t) && (e = e.substring(t.length));
                            t: {
                                if (t = e, k.JSON) try {
                                    var n = k.JSON.parse(t);
                                    break t
                                } catch (t) {}
                                n = Cb(t)
                            }
                            return n
                        }
                    }, g.Fa = function() {
                        return this.j
                    }, g.Za = function() {
                        return l(this.g) ? this.g : this.g + ""
                    }, g = we.prototype, g.oa = 8, g.G = 1, g.Ja = function() {
                        return 0 == this.G
                    }, g.Oa = function(t) {
                        if (this.l = null, I(this.a, "startForwardChannel_"), 1 == this.G)
                            if (t) xc(this.a, "Not supposed to retry the open");
                            else {
                                I(this.a, "open_()"), this.P = Math.floor(1e5 * Math.random()), t = this.P++;
                                var e = new K(this, this.a, t, void 0),
                                    n = this.i;
                                this.M && (n ? (n = Ea(n), Ga(n, this.M)) : n = this.M), null === this.h && (e.j = n);
                                var r = Ge(this, e),
                                    o = L(this.F);
                                Q(o, "RID", t), Q(o, "CVER", 21), this.D && this.j && Q(o, "X-HTTP-Session-Id", this.j), ze(this, o), this.h && n && ve(o, this.h, n), ae(this.c, e), this.Ta ? (Q(o, "$req", r), Sc(e, o, null)) : Sc(e, o, r), this.G = 2
                            }
                        else 3 == this.G && (t ? He(this, t) : 0 == this.g.length ? I(this.a, "startForwardChannel_ returned: nothing to send") : be(this.c) ? xc(this.a, "startForwardChannel_ returned: connection already in progress") : (He(this), I(this.a, "startForwardChannel_ finished, sent request")))
                    }, g.Na = function() {
                        this.m = null, I(this.a, "Creating new HttpRequest"), this.b = new K(this, this.a, "rpc", this.T), null === this.h && (this.b.j = this.i), this.b.P = 0;
                        var t = L(this.wa);
                        Q(t, "RID", "rpc"), Q(t, "SID", this.I), Q(t, "CI", this.la ? "0" : "1"), Q(t, "AID", this.N), ze(this, t), Q(t, "TYPE", "xmlhttp"), this.h && this.i && ve(t, this.h, this.i), Vc(this.b, t, !0, this.ja), I(this.a, "New Request created")
                    }, g.Ma = function(t, e) {
                        if (0 != this.G && (this.b == t || ce(this.c, t)))
                            if (this.s = t.C, ce(this.c, t) && 3 == this.G) {
                                try {
                                    var o = this.ma.a.parse(e)
                                } catch (t) {
                                    o = null
                                }
                                if (n(o) && 3 == o.length)
                                    if (e = o, 0 == e[0]) t: if (I(this.a, "Server claims our backchannel is missing."), this.m) I(this.a, "But we are currently starting the request.");
                                        else {
                                            if (this.b) {
                                                if (!(this.b.D + 3e3 < t.D)) break t;
                                                Be(this), this.b.cancel(), this.b = null
                                            } else E(this.a.a, "We do not have a BackChannel established");
                                            Je(this), J(18)
                                        }
                                else this.xa = e[1], 0 < (t = this.xa - this.N) && (e = e[2], I(this.a, e + " bytes (in " + t + " arrays) are outstanding on the BackChannel"), 37500 > e && this.la && 0 == this.w && !this.o && (this.o = Ec(r(this.$a, this), 6e3)));
                                else I(this.a, "Bad POST response data returned"), V(this, 11)
                            } else if (this.b == t && Be(this), !/^[\s\xa0]*$/.test(e))
                            for (e = o = this.ma.a.parse(e), o = 0; o < e.length; o++) {
                                var i = e[o];
                                if (this.N = i[0], i = i[1], 2 == this.G)
                                    if ("c" == i[0]) {
                                        this.I = i[1], this.ja = i[2];
                                        var a = i[3];
                                        null != a && (this.oa = a, H(this.a, "VER=" + this.oa)), i = i[4], null != i && (this.ya = i, H(this.a, "SVER=" + this.ya)), this.D && (i = t.a) && ((a = i.a ? i.a.getResponseHeader("X-Client-Wire-Protocol") : null) && $d(this.c, a), this.j && ((i = i.a ? i.a.getResponseHeader("X-HTTP-Session-Id") : null) ? (this.J = i, Q(this.F, this.j, i)) : E(this.a.a, "Missing X_HTTP_SESSION_ID in the handshake response"))), this.G = 3, this.f && this.f.Da(), this.wa = Td(this, this.ja, this.ka), Ie(this)
                                    } else "stop" != i[0] && "close" != i[0] || V(this, 7);
                                else 3 == this.G && ("stop" == i[0] || "close" == i[0] ? "stop" == i[0] ? V(this, 7) : xe(this) : "noop" != i[0] && this.f && this.f.Ca(i), this.w = 0)
                            }
                    }, g.$a = function() {
                        null != this.o && (this.o = null, this.b.cancel(), this.b = null, Je(this), J(19))
                    }, g.ua = function(e) {
                        I(this.a, "Request complete");
                        var n = null;
                        if (this.b == e) {
                            Be(this), this.b = null;
                            var r = 2
                        } else {
                            if (!ce(this.c, e)) return;
                            n = e.s, de(this.c, e), r = 1
                        }
                        if (this.s = e.C, 0 != this.G)
                            if (e.c) 1 == r ? (Dc(e.m ? e.m.length : 0, t() - e.D, this.C), De(this)) : Ie(this);
                            else {
                                var o = e.l;
                                if (3 == o || 0 == o && 0 < this.s) I(this.a, "Not retrying due to error type");
                                else {
                                    var i = this;
                                    if (I(this.a, function() {
                                            return "Maybe retrying, last error: " + Pc(o, i.s)
                                        }), 1 == r && Ee(this, e) || 2 == r && Je(this)) return;
                                    I(this.a, "Exceeded max number of retries")
                                }
                                switch (n && 0 < n.length && fe(this.c, n), I(this.a, "Error: HTTP request failed"), o) {
                                    case 1:
                                        V(this, 5);
                                        break;
                                    case 4:
                                        V(this, 10);
                                        break;
                                    case 3:
                                        V(this, 6);
                                        break;
                                    default:
                                        V(this, 2)
                                }
                            }
                    }, g.hb = function(t) {
                        t ? (H(this.a, "Successfully pinged google.com"), J(2)) : (H(this.a, "Failed to ping google.com"), J(1))
                    }, g.da = function(t) {
                        if (t && !this.S) throw Error("Can't create secondary domain capable XhrIo object.");
                        return t = new T, t.m = this.S, t
                    }, g.ra = function() {
                        return !!this.f && !0
                    }, g.ia = function() {
                        return this.S
                    }, new Ld, g = Me.prototype, g.Da = function() {}, g.Ca = function() {}, g.Ba = function() {}, g.Aa = function() {}, g.Va = function() {}, Oe.prototype.a = function(t, e) {
                        return new W(t, e)
                    }, u(W, B), W.prototype.j = function() {
                        this.a.f = this.h, this.o && (this.a.S = !0);
                        var t = this.a,
                            e = this.s,
                            n = this.b,
                            r = this.g || void 0;
                        I(t.a, "connect()"), J(0), t.ka = n, t.U = r || {}, t.D && (I(t.a, "connect() bypassed channel-test."), t.H.b = [], t.H.a = !1), I(t.a, "connectTest_()"), t.B = new Qd(t, t.a), null === t.h && (t.B.i = t.i), n = e, t.h && t.i && (n = ve(e, t.h, t.i)), t = t.B, t.l = n, e = Ke(t.a, t.l), J(3), n = t.a.H.b, null != n ? (t.g = n[0], t.R = 1, Rd(t)) : (Xc(e, "MODE", "init"), !t.a.D && t.a.j && Xc(e, "X-HTTP-Session-Id", t.a.j), t.c = new K(t, t.b, void 0, void 0), t.c.j = t.i, Vc(t.c, e, !1, null), t.R = 0)
                    }, W.prototype.close = function() {
                        xe(this.a)
                    }, W.prototype.l = function(t) {
                        if (l(t)) {
                            var e = {};
                            e.__data__ = t, Ce(this.a, e)
                        } else this.m ? (e = {}, e.__data__ = Db(t), Ce(this.a, e)) : Ce(this.a, t)
                    }, W.prototype.A = function() {
                        this.a.f = null, delete this.h, xe(this.a), delete this.a, W.L.A.call(this)
                    }, u(Qe, Od), u(Re, Pd), u(Pe, Me), Pe.prototype.Da = function() {
                        pc(this.a.f, "WebChannel opened on " + this.a.b), this.a.dispatchEvent("a")
                    }, Pe.prototype.Ca = function(t) {
                        this.a.dispatchEvent(new Qe(t))
                    }, Pe.prototype.Ba = function(t) {
                        pc(this.a.f, "WebChannel aborted on " + this.a.b + " due to channel error: " + t), this.a.dispatchEvent(new Re(t))
                    }, Pe.prototype.Aa = function() {
                        pc(this.a.f, "WebChannel closed on " + this.a.b), this.a.dispatchEvent("b")
                    };
                    var Se = ia(function(t, e) {
                        function n() {}
                        n.prototype = t.prototype;
                        var r = new n;
                        return t.apply(r, Array.prototype.slice.call(arguments, 1)), r
                    }, Oe);
                    Te.prototype.u = function() {
                        return this.b.length + this.a.length
                    }, Te.prototype.contains = function(t) {
                        return 0 <= sa(this.b, t) || 0 <= sa(this.a, t)
                    }, Te.prototype.v = function() {
                        for (var t = [], e = this.b.length - 1; 0 <= e; --e) t.push(this.b[e]);
                        var n = this.a.length;
                        for (e = 0; e < n; ++e) t.push(this.a[e]);
                        return t
                    }, u(Ve, w);
                    var We = "[goog.structs.Pool] Min can not be greater than max";
                    g = Ve.prototype, g.ea = function() {
                        var e = t();
                        if (!(null != this.g && 0 > e - this.g)) {
                            for (var n; 0 < this.a.u() && (n = Ue(this.a), !this.ta(n));) this.ba();
                            return !n && this.u() < this.c && (n = this.qa()), n && (this.g = e, this.b.add(n)), n
                        }
                    }, g.gb = function(t) {
                        return !!kd(this.b.a, Wd(t)) && (this.na(t), !0)
                    }, g.na = function(t) {
                        kd(this.b.a, Wd(t)), this.ta(t) && this.u() < this.c ? this.a.a.push(t) : Xe(t)
                    }, g.ba = function() {
                        for (var t = this.a; this.u() < this.h;) {
                            var e = this.qa();
                            t.a.push(e)
                        }
                        for (; this.u() > this.c && 0 < this.a.u();) Xe(Ue(t))
                    }, g.qa = function() {
                        return {}
                    }, g.ta = function(t) {
                        return "function" != typeof t.Wa || t.Wa()
                    }, g.contains = function(t) {
                        return this.a.contains(t) || this.b.contains(t)
                    }, g.u = function() {
                        return this.a.u() + this.b.u()
                    }, g.A = function() {
                        if (Ve.L.A.call(this), 0 < this.b.u()) throw Error("[goog.structs.Pool] Objects not released");
                        delete this.b;
                        for (var t = this.a; 0 != t.b.length || 0 != t.a.length;) Xe(Ue(t));
                        delete this.a
                    }, Ze.prototype.v = function() {
                        for (var t = this.a, e = [], n = t.length, r = 0; r < n; r++) e.push(t[r].b);
                        return e
                    }, Ze.prototype.O = function() {
                        for (var t = this.a, e = [], n = t.length, r = 0; r < n; r++) e.push(t[r].a);
                        return e
                    }, Ze.prototype.u = function() {
                        return this.a.length
                    }, u(af, Ze), u(X, Ve), g = X.prototype, g.ea = function(t, e) {
                        if (!t) return X.L.ea.call(this);
                        $e(this.f, void 0 !== e ? e : 100, t), this.sa()
                    }, g.sa = function() {
                        for (var t = this.f; 0 < t.u();) {
                            var e = this.ea();
                            if (!e) break;
                            var n = t,
                                r = n.a,
                                o = r.length,
                                i = r[0];
                            if (0 >= o) i = void 0;
                            else {
                                if (1 == o) wa(r);
                                else {
                                    r[0] = r.pop(), r = 0, n = n.a, o = n.length;
                                    for (var a = n[r]; r < o >> 1;) {
                                        var s = 2 * r + 1,
                                            u = 2 * r + 2;
                                        if (s = u < o && n[u].a < n[s].a ? u : s, n[s].a > a.a) break;
                                        n[r] = n[s], r = s
                                    }
                                    n[r] = a
                                }
                                i = i.b
                            }
                            i.apply(this, [e])
                        }
                    }, g.na = function(t) {
                        X.L.na.call(this, t), this.sa()
                    }, g.ba = function() {
                        X.L.ba.call(this), this.sa()
                    }, g.A = function() {
                        X.L.A.call(this), k.clearTimeout(void 0), wa(this.f.a), this.f = null
                    }, u(Y, X), Y.prototype.qa = function() {
                        var t = new T,
                            e = this.l;
                        return e && e.forEach(function(e, n) {
                            t.headers.set(n, e)
                        }), this.j && (t.m = !0), t
                    }, Y.prototype.ta = function(t) {
                        return !t.i && !t.a
                    }, Oe.prototype.createWebChannel = Oe.prototype.a, W.prototype.send = W.prototype.l, W.prototype.open = W.prototype.j, W.prototype.close = W.prototype.close, Fc.NO_ERROR = 0, Fc.TIMEOUT = 8, Fc.HTTP_ERROR = 6, Gc.COMPLETE = "complete", Md.EventType = Nd, Nd.OPEN = "a", Nd.CLOSE = "b", Nd.ERROR = "c", Nd.MESSAGE = "d", B.prototype.listen = B.prototype.aa, Y.prototype.getObject = Y.prototype.ea, Y.prototype.releaseObject = Y.prototype.gb, T.prototype.listenOnce = T.prototype.Ha, T.prototype.getLastError = T.prototype.Za, T.prototype.getLastErrorCode = T.prototype.Fa, T.prototype.getStatus = T.prototype.W, T.prototype.getStatusText = T.prototype.Ga, T.prototype.getResponseJson = T.prototype.Ya, T.prototype.getResponseText = T.prototype.V, T.prototype.getResponseText = T.prototype.V, T.prototype.send = T.prototype.fa, module.exports = {
                        createWebChannelTransport: Se,
                        ErrorCode: Fc,
                        EventType: Gc,
                        WebChannel: Md,
                        XhrIoPool: Y
                    }
                }).call(void 0 !== global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
            }).call(exports, __webpack_require__(12))
        }
    }, [113])
} catch (t) {
    throw Error("Cannot instantiate firebase-firestore.js - be sure to load firebase-app.js first.")
}
//# sourceMappingURL=firebase-firestore.js.map
