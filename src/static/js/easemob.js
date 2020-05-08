!function(e) {
    function t(r) {
        if (n[r])
            return n[r].exports;
        var a = n[r] = {
            exports: {},
            id: r,
            loaded: !1
        };
        return e[r].call(a.exports, a, a.exports, t),
            a.loaded = !0,
            a.exports
    }
    var n = {};
    return t.m = e,
        t.c = n,
        t.p = "",
        t(0)
}([function(e, t, n) {
    n(1),
        e.exports = n(2)
}
    , function(e, t) {
        window.URL = window.URL || window.webkitURL || window.mozURL || window.msURL,
        Array.prototype.indexOf || (Array.prototype.indexOf = function(e) {
                var t = this.length
                    , n = Number(arguments[1]) || 0;
                for (n = n < 0 ? Math.ceil(n) : Math.floor(n),
                     n < 0 && (n += t); n < t; n++)
                    if (n in this && this[n] === e)
                        return n;
                return -1
            }
        ),
        String.prototype.trim || (String.prototype.trim = function() {
                return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
            }
        ),
        Array.prototype.forEach || (Array.prototype.forEach = function(e, t) {
                var n, r;
                if (null === this)
                    throw new TypeError("this is null or not defined");
                var a = Object(this)
                    , i = a.length >>> 0;
                if ("function" != typeof e)
                    throw new TypeError(e + " is not a function");
                for (arguments.length > 1 && (n = t),
                         r = 0; r < i; ) {
                    var s;
                    r in a && (s = a[r],
                        e.call(n, s, r, a)),
                        r++
                }
            }
        ),
            function(e) {
                e.console || (e.console = {});
                for (var t, n, r = e.console, a = function() {}, i = ["memory"], s = "assert,clear,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn".split(","); t = i.pop(); )
                    r[t] || (r[t] = {});
                for (; n = s.pop(); )
                    r[n] || (r[n] = a)
            }("undefined" == typeof window ? this : window)
    }
    , function(e, t, n) {
        function r(e) {
            var t, n, r, i = _.extend({}, d, {
                grUserId: c.get("gr_user_id")
            });
            e = e || {},
                i = _.extend({}, i, easemobim.config, e),
                t = "" !== c.convertFalse(i.hide) ? i.hide : p.json.hide,
                n = "" !== c.convertFalse(M.resources) ? i.resources : p.json.resources,
                r = "" !== c.convertFalse(i.satisfaction) ? i.satisfaction : p.json.sat,
                i = _.extend({}, i, {
                    tenantId: i.tenantId || p.json.tenantId,
                    configId: i.configId || p.json.configId,
                    hide: c.convertFalse(t),
                    resources: c.convertFalse(n),
                    satisfaction: c.convertFalse(r),
                    domain: i.domain || p.domain,
                    path: i.path || p.domain + "/webim",
                    staticPath: i.staticPath || p.domain + "/webim/static",
                    guestId: c.getStore("guestId")
                }),
            e.tenantId && (i.configId = ""),
                a(i)
        }
        function a(e) {
            M = _.extend({}, M, e)
        }
        function i() {
            var e, t, n, r, a, i = {}, s = document.scripts;
            for (t = 0,
                     n = s.length; t < n; t++)
                if (~s[t].src.indexOf("easemob.js")) {
                    e = s[t].src;
                    break
                }
            if (!e)
                return {
                    json: i,
                    domain: ""
                };
            var o, d = e.indexOf("?"), u = ~e.indexOf("//") ? e.indexOf("//") : 0, _ = e.slice(0, e.indexOf("/", u + 2)), l = e.slice(d + 1).split("&");
            for (r = 0,
                     a = l.length; r < a; r++)
                o = l[r].split("="),
                    i[o[0]] = o.length > 1 ? decodeURIComponent(o[1]) : "";
            return {
                json: i,
                domain: _
            }
        }
        var s, o;
        n(3);
        var d, u, l, c = n(5), m = n(124), h = n(126), f = {}, p = i(), M = {};
        if (window.easemobim = window.easemobim || {},
            window.easemobim.config = window.easemobim.config || {},
            window.easemobim.version = "plugin_53.0.16_final",
        /MSIE 7\.0/.test(navigator.userAgent) && !window.localStorage && !document.querySelector)
            throw easemobim.bind = function() {
                alert("您使用的IE浏览器版本过低，请使用IE8以上版本的IE浏览器或Chrome浏览器")
            }
                ,
                new Error("unsupported browser.");
        n(195),
            d = {
                tenantId: "",
                to: "",
                agentName: "",
                appKey: "",
                domain: "",
                path: "",
                ticket: !0,
                staticPath: "",
                buttonText: "联系客服",
                dialogWidth: "360px",
                dialogHeight: "550px",
                dragenable: !0,
                minimum: !0,
                soundReminder: !0,
                titleSlide: !0,
                dialogPosition: {
                    x: "10px",
                    y: "10px"
                },
                user: {
                    username: "",
                    password: "",
                    token: ""
                },
                fromUrl: window.location.href,
                referer: document.referrer
            },
            window.easemobIM = function(e) {
                easemobim.bind({
                    emgroup: e
                })
            }
            ,
            window.easemobIMS = function(e, t) {
                easemobim.bind({
                    tenantId: e,
                    emgroup: t
                })
            }
            ,
            l = function(e, t) {
                var n, i;
                if (r(e),
                    t)
                    M.hide && !M.autoConnect && !M.eventCollector || !M.tenantId && !M.configId || (n = M.configId || M.tenantId + (M.emgroup || ""),
                    M.user.username || (M.isUsernameFromCookie = !0,
                        M.user = {
                            username: c.get(M.configId || (M.to || "") + M.tenantId + (M.emgroup || ""))
                        }),
                        u = f[n] || new h(M),
                        f[n] = u,
                        u.set(M, u.close),
                        easemobim.config.eventCollector = !1);
                else {
                    e = e || {},
                        e.emgroup = e.emgroup || easemobim.config.emgroup || "",
                        n = e.configId || e.tenantId + e.emgroup;
                    for (i in f)
                        Object.prototype.hasOwnProperty.call(f, i) && f[i].close();
                    if (u = f[n])
                        u.open();
                    else {
                        if (c.isMobile && m.show(),
                        M.user.username || (e.isUsernameFromCookie = !0,
                            e.user = {
                                username: c.get(M.configId || (M.to || "") + M.tenantId + (M.emgroup || ""))
                            }),
                            a(e),
                        !M.tenantId && !M.configId)
                            return void console.error("No tenantId is specified.");
                        u = new h(M),
                            f[n] = u,
                            u.set(M, u.open)
                    }
                }
            }
            ,
            easemobim.sendExt = function(e) {
                u ? u.send({
                    ext: e
                }) : console.error("The chat window is not initialized.")
            }
            ,
            easemobim.sendText = function(e) {
                u ? u.sendText(e) : console.error("The chat window is not initialized.")
            }
            ,
            easemobim.minimize = function() {
                u && u.close()
            }
            ,
            easemobim.restore = function() {
                u && u.open()
            }
            ,
            window.easemobim.bind = function(e) {
                l(e, !1)
            }
            ,
            l({}, !0),
            "object" == typeof e && "object" == typeof e.exports ? e.exports = easemobim : (s = [],
                o = function() {
                    return easemobim
                }
                    .apply(t, s),
                !(void 0 !== o && (e.exports = o)))
    }
    , function(e, t, n) {
        (function(t) {
                e.exports = t._ = n(4)
            }
        ).call(t, function() {
            return this
        }())
    }
    , function(e, t, n) {
        var r, a;
        (function() {
                function n(e) {
                    function t(t, n, r, a, i, s) {
                        for (; i >= 0 && i < s; i += e) {
                            var o = a ? a[i] : i;
                            r = n(r, t[o], o, t)
                        }
                        return r
                    }
                    return function(n, r, a, i) {
                        r = w(r, i, 4);
                        var s = !E(n) && v.keys(n)
                            , o = (s || n).length
                            , d = e > 0 ? 0 : o - 1;
                        return arguments.length < 3 && (a = n[s ? s[d] : d],
                            d += e),
                            t(n, r, a, s, d, o)
                    }
                }
                function i(e) {
                    return function(t, n, r) {
                        n = k(n, r);
                        for (var a = x(t), i = e > 0 ? 0 : a - 1; i >= 0 && i < a; i += e)
                            if (n(t[i], i, t))
                                return i;
                        return -1
                    }
                }
                function s(e, t, n) {
                    return function(r, a, i) {
                        var s = 0
                            , o = x(r);
                        if ("number" == typeof i)
                            e > 0 ? s = i >= 0 ? i : Math.max(i + o, s) : o = i >= 0 ? Math.min(i + 1, o) : i + o + 1;
                        else if (n && i && o)
                            return i = n(r, a),
                                r[i] === a ? i : -1;
                        if (a !== a)
                            return i = t(h.call(r, s, o), v.isNaN),
                                i >= 0 ? i + s : -1;
                        for (i = e > 0 ? s : o - 1; i >= 0 && i < o; i += e)
                            if (r[i] === a)
                                return i;
                        return -1
                    }
                }
                function o(e, t) {
                    var n = P.length
                        , r = e.constructor
                        , a = v.isFunction(r) && r.prototype || l
                        , i = "constructor";
                    for (v.has(e, i) && !v.contains(t, i) && t.push(i); n--; )
                        i = P[n],
                        i in e && e[i] !== a[i] && !v.contains(t, i) && t.push(i)
                }
                var d = this
                    , u = d._
                    , _ = Array.prototype
                    , l = Object.prototype
                    , c = Function.prototype
                    , m = _.push
                    , h = _.slice
                    , f = l.toString
                    , p = l.hasOwnProperty
                    , M = Array.isArray
                    , y = Object.keys
                    , L = c.bind
                    , g = Object.create
                    , Y = function() {}
                    , v = function(e) {
                    return e instanceof v ? e : this instanceof v ? void (this._wrapped = e) : new v(e)
                };
                "undefined" != typeof e && e.exports && (t = e.exports = v),
                    t._ = v,
                    v.VERSION = "1.8.3";
                var w = function(e, t, n) {
                    if (void 0 === t)
                        return e;
                    switch (null == n ? 3 : n) {
                        case 1:
                            return function(n) {
                                return e.call(t, n)
                            }
                                ;
                        case 2:
                            return function(n, r) {
                                return e.call(t, n, r)
                            }
                                ;
                        case 3:
                            return function(n, r, a) {
                                return e.call(t, n, r, a)
                            }
                                ;
                        case 4:
                            return function(n, r, a, i) {
                                return e.call(t, n, r, a, i)
                            }
                    }
                    return function() {
                        return e.apply(t, arguments)
                    }
                }
                    , k = function(e, t, n) {
                    return null == e ? v.identity : v.isFunction(e) ? w(e, t, n) : v.isObject(e) ? v.matcher(e) : v.property(e)
                };
                v.iteratee = function(e, t) {
                    return k(e, t, 1 / 0)
                }
                ;
                var b = function(e, t) {
                    return function(n) {
                        var r = arguments.length;
                        if (r < 2 || null == n)
                            return n;
                        for (var a = 1; a < r; a++)
                            for (var i = arguments[a], s = e(i), o = s.length, d = 0; d < o; d++) {
                                var u = s[d];
                                t && void 0 !== n[u] || (n[u] = i[u])
                            }
                        return n
                    }
                }
                    , T = function(e) {
                    if (!v.isObject(e))
                        return {};
                    if (g)
                        return g(e);
                    Y.prototype = e;
                    var t = new Y;
                    return Y.prototype = null,
                        t
                }
                    , D = function(e) {
                    return function(t) {
                        return null == t ? void 0 : t[e]
                    }
                }
                    , S = Math.pow(2, 53) - 1
                    , x = D("length")
                    , E = function(e) {
                    var t = x(e);
                    return "number" == typeof t && t >= 0 && t <= S
                };
                v.each = v.forEach = function(e, t, n) {
                    t = w(t, n);
                    var r, a;
                    if (E(e))
                        for (r = 0,
                                 a = e.length; r < a; r++)
                            t(e[r], r, e);
                    else {
                        var i = v.keys(e);
                        for (r = 0,
                                 a = i.length; r < a; r++)
                            t(e[i[r]], i[r], e)
                    }
                    return e
                }
                    ,
                    v.map = v.collect = function(e, t, n) {
                        t = k(t, n);
                        for (var r = !E(e) && v.keys(e), a = (r || e).length, i = Array(a), s = 0; s < a; s++) {
                            var o = r ? r[s] : s;
                            i[s] = t(e[o], o, e)
                        }
                        return i
                    }
                    ,
                    v.reduce = v.foldl = v.inject = n(1),
                    v.reduceRight = v.foldr = n(-1),
                    v.find = v.detect = function(e, t, n) {
                        var r;
                        if (r = E(e) ? v.findIndex(e, t, n) : v.findKey(e, t, n),
                        void 0 !== r && r !== -1)
                            return e[r]
                    }
                    ,
                    v.filter = v.select = function(e, t, n) {
                        var r = [];
                        return t = k(t, n),
                            v.each(e, function(e, n, a) {
                                t(e, n, a) && r.push(e)
                            }),
                            r
                    }
                    ,
                    v.reject = function(e, t, n) {
                        return v.filter(e, v.negate(k(t)), n)
                    }
                    ,
                    v.every = v.all = function(e, t, n) {
                        t = k(t, n);
                        for (var r = !E(e) && v.keys(e), a = (r || e).length, i = 0; i < a; i++) {
                            var s = r ? r[i] : i;
                            if (!t(e[s], s, e))
                                return !1
                        }
                        return !0
                    }
                    ,
                    v.some = v.any = function(e, t, n) {
                        t = k(t, n);
                        for (var r = !E(e) && v.keys(e), a = (r || e).length, i = 0; i < a; i++) {
                            var s = r ? r[i] : i;
                            if (t(e[s], s, e))
                                return !0
                        }
                        return !1
                    }
                    ,
                    v.contains = v.includes = v.include = function(e, t, n, r) {
                        return E(e) || (e = v.values(e)),
                        ("number" != typeof n || r) && (n = 0),
                        v.indexOf(e, t, n) >= 0
                    }
                    ,
                    v.invoke = function(e, t) {
                        var n = h.call(arguments, 2)
                            , r = v.isFunction(t);
                        return v.map(e, function(e) {
                            var a = r ? t : e[t];
                            return null == a ? a : a.apply(e, n)
                        })
                    }
                    ,
                    v.pluck = function(e, t) {
                        return v.map(e, v.property(t))
                    }
                    ,
                    v.where = function(e, t) {
                        return v.filter(e, v.matcher(t))
                    }
                    ,
                    v.findWhere = function(e, t) {
                        return v.find(e, v.matcher(t))
                    }
                    ,
                    v.max = function(e, t, n) {
                        var r, a, i = -(1 / 0), s = -(1 / 0);
                        if (null == t && null != e) {
                            e = E(e) ? e : v.values(e);
                            for (var o = 0, d = e.length; o < d; o++)
                                r = e[o],
                                r > i && (i = r)
                        } else
                            t = k(t, n),
                                v.each(e, function(e, n, r) {
                                    a = t(e, n, r),
                                    (a > s || a === -(1 / 0) && i === -(1 / 0)) && (i = e,
                                        s = a)
                                });
                        return i
                    }
                    ,
                    v.min = function(e, t, n) {
                        var r, a, i = 1 / 0, s = 1 / 0;
                        if (null == t && null != e) {
                            e = E(e) ? e : v.values(e);
                            for (var o = 0, d = e.length; o < d; o++)
                                r = e[o],
                                r < i && (i = r)
                        } else
                            t = k(t, n),
                                v.each(e, function(e, n, r) {
                                    a = t(e, n, r),
                                    (a < s || a === 1 / 0 && i === 1 / 0) && (i = e,
                                        s = a)
                                });
                        return i
                    }
                    ,
                    v.shuffle = function(e) {
                        for (var t, n = E(e) ? e : v.values(e), r = n.length, a = Array(r), i = 0; i < r; i++)
                            t = v.random(0, i),
                            t !== i && (a[i] = a[t]),
                                a[t] = n[i];
                        return a
                    }
                    ,
                    v.sample = function(e, t, n) {
                        return null == t || n ? (E(e) || (e = v.values(e)),
                            e[v.random(e.length - 1)]) : v.shuffle(e).slice(0, Math.max(0, t))
                    }
                    ,
                    v.sortBy = function(e, t, n) {
                        return t = k(t, n),
                            v.pluck(v.map(e, function(e, n, r) {
                                return {
                                    value: e,
                                    index: n,
                                    criteria: t(e, n, r)
                                }
                            }).sort(function(e, t) {
                                var n = e.criteria
                                    , r = t.criteria;
                                if (n !== r) {
                                    if (n > r || void 0 === n)
                                        return 1;
                                    if (n < r || void 0 === r)
                                        return -1
                                }
                                return e.index - t.index
                            }), "value")
                    }
                ;
                var H = function(e) {
                    return function(t, n, r) {
                        var a = {};
                        return n = k(n, r),
                            v.each(t, function(r, i) {
                                var s = n(r, i, t);
                                e(a, r, s)
                            }),
                            a
                    }
                };
                v.groupBy = H(function(e, t, n) {
                    v.has(e, n) ? e[n].push(t) : e[n] = [t]
                }),
                    v.indexBy = H(function(e, t, n) {
                        e[n] = t
                    }),
                    v.countBy = H(function(e, t, n) {
                        v.has(e, n) ? e[n]++ : e[n] = 1
                    }),
                    v.toArray = function(e) {
                        return e ? v.isArray(e) ? h.call(e) : E(e) ? v.map(e, v.identity) : v.values(e) : []
                    }
                    ,
                    v.size = function(e) {
                        return null == e ? 0 : E(e) ? e.length : v.keys(e).length
                    }
                    ,
                    v.partition = function(e, t, n) {
                        t = k(t, n);
                        var r = []
                            , a = [];
                        return v.each(e, function(e, n, i) {
                            (t(e, n, i) ? r : a).push(e)
                        }),
                            [r, a]
                    }
                    ,
                    v.first = v.head = v.take = function(e, t, n) {
                        if (null != e)
                            return null == t || n ? e[0] : v.initial(e, e.length - t)
                    }
                    ,
                    v.initial = function(e, t, n) {
                        return h.call(e, 0, Math.max(0, e.length - (null == t || n ? 1 : t)))
                    }
                    ,
                    v.last = function(e, t, n) {
                        if (null != e)
                            return null == t || n ? e[e.length - 1] : v.rest(e, Math.max(0, e.length - t))
                    }
                    ,
                    v.rest = v.tail = v.drop = function(e, t, n) {
                        return h.call(e, null == t || n ? 1 : t)
                    }
                    ,
                    v.compact = function(e) {
                        return v.filter(e, v.identity)
                    }
                ;
                var j = function(e, t, n, r) {
                    for (var a = [], i = 0, s = r || 0, o = x(e); s < o; s++) {
                        var d = e[s];
                        if (E(d) && (v.isArray(d) || v.isArguments(d))) {
                            t || (d = j(d, t, n));
                            var u = 0
                                , _ = d.length;
                            for (a.length += _; u < _; )
                                a[i++] = d[u++]
                        } else
                            n || (a[i++] = d)
                    }
                    return a
                };
                v.flatten = function(e, t) {
                    return j(e, t, !1)
                }
                    ,
                    v.without = function(e) {
                        return v.difference(e, h.call(arguments, 1))
                    }
                    ,
                    v.uniq = v.unique = function(e, t, n, r) {
                        v.isBoolean(t) || (r = n,
                            n = t,
                            t = !1),
                        null != n && (n = k(n, r));
                        for (var a = [], i = [], s = 0, o = x(e); s < o; s++) {
                            var d = e[s]
                                , u = n ? n(d, s, e) : d;
                            t ? (s && i === u || a.push(d),
                                i = u) : n ? v.contains(i, u) || (i.push(u),
                                a.push(d)) : v.contains(a, d) || a.push(d)
                        }
                        return a
                    }
                    ,
                    v.union = function() {
                        return v.uniq(j(arguments, !0, !0))
                    }
                    ,
                    v.intersection = function(e) {
                        for (var t = [], n = arguments.length, r = 0, a = x(e); r < a; r++) {
                            var i = e[r];
                            if (!v.contains(t, i)) {
                                for (var s = 1; s < n && v.contains(arguments[s], i); s++)
                                    ;
                                s === n && t.push(i)
                            }
                        }
                        return t
                    }
                    ,
                    v.difference = function(e) {
                        var t = j(arguments, !0, !0, 1);
                        return v.filter(e, function(e) {
                            return !v.contains(t, e)
                        })
                    }
                    ,
                    v.zip = function() {
                        return v.unzip(arguments)
                    }
                    ,
                    v.unzip = function(e) {
                        for (var t = e && v.max(e, x).length || 0, n = Array(t), r = 0; r < t; r++)
                            n[r] = v.pluck(e, r);
                        return n
                    }
                    ,
                    v.object = function(e, t) {
                        for (var n = {}, r = 0, a = x(e); r < a; r++)
                            t ? n[e[r]] = t[r] : n[e[r][0]] = e[r][1];
                        return n
                    }
                    ,
                    v.findIndex = i(1),
                    v.findLastIndex = i(-1),
                    v.sortedIndex = function(e, t, n, r) {
                        n = k(n, r, 1);
                        for (var a = n(t), i = 0, s = x(e); i < s; ) {
                            var o = Math.floor((i + s) / 2);
                            n(e[o]) < a ? i = o + 1 : s = o
                        }
                        return i
                    }
                    ,
                    v.indexOf = s(1, v.findIndex, v.sortedIndex),
                    v.lastIndexOf = s(-1, v.findLastIndex),
                    v.range = function(e, t, n) {
                        null == t && (t = e || 0,
                            e = 0),
                            n = n || 1;
                        for (var r = Math.max(Math.ceil((t - e) / n), 0), a = Array(r), i = 0; i < r; i++,
                            e += n)
                            a[i] = e;
                        return a
                    }
                ;
                var O = function(e, t, n, r, a) {
                    if (!(r instanceof t))
                        return e.apply(n, a);
                    var i = T(e.prototype)
                        , s = e.apply(i, a);
                    return v.isObject(s) ? s : i
                };
                v.bind = function(e, t) {
                    if (L && e.bind === L)
                        return L.apply(e, h.call(arguments, 1));
                    if (!v.isFunction(e))
                        throw new TypeError("Bind must be called on a function");
                    var n = h.call(arguments, 2)
                        , r = function() {
                        return O(e, r, t, this, n.concat(h.call(arguments)))
                    };
                    return r
                }
                    ,
                    v.partial = function(e) {
                        var t = h.call(arguments, 1)
                            , n = function() {
                            for (var r = 0, a = t.length, i = Array(a), s = 0; s < a; s++)
                                i[s] = t[s] === v ? arguments[r++] : t[s];
                            for (; r < arguments.length; )
                                i.push(arguments[r++]);
                            return O(e, n, this, this, i)
                        };
                        return n
                    }
                    ,
                    v.bindAll = function(e) {
                        var t, n, r = arguments.length;
                        if (r <= 1)
                            throw new Error("bindAll must be passed function names");
                        for (t = 1; t < r; t++)
                            n = arguments[t],
                                e[n] = v.bind(e[n], e);
                        return e
                    }
                    ,
                    v.memoize = function(e, t) {
                        var n = function(r) {
                            var a = n.cache
                                , i = "" + (t ? t.apply(this, arguments) : r);
                            return v.has(a, i) || (a[i] = e.apply(this, arguments)),
                                a[i]
                        };
                        return n.cache = {},
                            n
                    }
                    ,
                    v.delay = function(e, t) {
                        var n = h.call(arguments, 2);
                        return setTimeout(function() {
                            return e.apply(null, n)
                        }, t)
                    }
                    ,
                    v.defer = v.partial(v.delay, v, 1),
                    v.throttle = function(e, t, n) {
                        var r, a, i, s = null, o = 0;
                        n || (n = {});
                        var d = function() {
                            o = n.leading === !1 ? 0 : v.now(),
                                s = null,
                                i = e.apply(r, a),
                            s || (r = a = null)
                        };
                        return function() {
                            var u = v.now();
                            o || n.leading !== !1 || (o = u);
                            var _ = t - (u - o);
                            return r = this,
                                a = arguments,
                                _ <= 0 || _ > t ? (s && (clearTimeout(s),
                                    s = null),
                                    o = u,
                                    i = e.apply(r, a),
                                s || (r = a = null)) : s || n.trailing === !1 || (s = setTimeout(d, _)),
                                i
                        }
                    }
                    ,
                    v.debounce = function(e, t, n) {
                        var r, a, i, s, o, d = function() {
                            var u = v.now() - s;
                            u < t && u >= 0 ? r = setTimeout(d, t - u) : (r = null,
                            n || (o = e.apply(i, a),
                            r || (i = a = null)))
                        };
                        return function() {
                            i = this,
                                a = arguments,
                                s = v.now();
                            var u = n && !r;
                            return r || (r = setTimeout(d, t)),
                            u && (o = e.apply(i, a),
                                i = a = null),
                                o
                        }
                    }
                    ,
                    v.wrap = function(e, t) {
                        return v.partial(t, e)
                    }
                    ,
                    v.negate = function(e) {
                        return function() {
                            return !e.apply(this, arguments)
                        }
                    }
                    ,
                    v.compose = function() {
                        var e = arguments
                            , t = e.length - 1;
                        return function() {
                            for (var n = t, r = e[t].apply(this, arguments); n--; )
                                r = e[n].call(this, r);
                            return r
                        }
                    }
                    ,
                    v.after = function(e, t) {
                        return function() {
                            if (--e < 1)
                                return t.apply(this, arguments)
                        }
                    }
                    ,
                    v.before = function(e, t) {
                        var n;
                        return function() {
                            return --e > 0 && (n = t.apply(this, arguments)),
                            e <= 1 && (t = null),
                                n
                        }
                    }
                    ,
                    v.once = v.partial(v.before, 2);
                var A = !{
                    toString: null
                }.propertyIsEnumerable("toString")
                    , P = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"];
                v.keys = function(e) {
                    if (!v.isObject(e))
                        return [];
                    if (y)
                        return y(e);
                    var t = [];
                    for (var n in e)
                        v.has(e, n) && t.push(n);
                    return A && o(e, t),
                        t
                }
                    ,
                    v.allKeys = function(e) {
                        if (!v.isObject(e))
                            return [];
                        var t = [];
                        for (var n in e)
                            t.push(n);
                        return A && o(e, t),
                            t
                    }
                    ,
                    v.values = function(e) {
                        for (var t = v.keys(e), n = t.length, r = Array(n), a = 0; a < n; a++)
                            r[a] = e[t[a]];
                        return r
                    }
                    ,
                    v.mapObject = function(e, t, n) {
                        t = k(t, n);
                        for (var r, a = v.keys(e), i = a.length, s = {}, o = 0; o < i; o++)
                            r = a[o],
                                s[r] = t(e[r], r, e);
                        return s
                    }
                    ,
                    v.pairs = function(e) {
                        for (var t = v.keys(e), n = t.length, r = Array(n), a = 0; a < n; a++)
                            r[a] = [t[a], e[t[a]]];
                        return r
                    }
                    ,
                    v.invert = function(e) {
                        for (var t = {}, n = v.keys(e), r = 0, a = n.length; r < a; r++)
                            t[e[n[r]]] = n[r];
                        return t
                    }
                    ,
                    v.functions = v.methods = function(e) {
                        var t = [];
                        for (var n in e)
                            v.isFunction(e[n]) && t.push(n);
                        return t.sort()
                    }
                    ,
                    v.extend = b(v.allKeys),
                    v.extendOwn = v.assign = b(v.keys),
                    v.findKey = function(e, t, n) {
                        t = k(t, n);
                        for (var r, a = v.keys(e), i = 0, s = a.length; i < s; i++)
                            if (r = a[i],
                                t(e[r], r, e))
                                return r
                    }
                    ,
                    v.pick = function(e, t, n) {
                        var r, a, i = {}, s = e;
                        if (null == s)
                            return i;
                        v.isFunction(t) ? (a = v.allKeys(s),
                            r = w(t, n)) : (a = j(arguments, !1, !1, 1),
                            r = function(e, t, n) {
                                return t in n
                            }
                            ,
                            s = Object(s));
                        for (var o = 0, d = a.length; o < d; o++) {
                            var u = a[o]
                                , _ = s[u];
                            r(_, u, s) && (i[u] = _)
                        }
                        return i
                    }
                    ,
                    v.omit = function(e, t, n) {
                        if (v.isFunction(t))
                            t = v.negate(t);
                        else {
                            var r = v.map(j(arguments, !1, !1, 1), String);
                            t = function(e, t) {
                                return !v.contains(r, t)
                            }
                        }
                        return v.pick(e, t, n)
                    }
                    ,
                    v.defaults = b(v.allKeys, !0),
                    v.create = function(e, t) {
                        var n = T(e);
                        return t && v.extendOwn(n, t),
                            n
                    }
                    ,
                    v.clone = function(e) {
                        return v.isObject(e) ? v.isArray(e) ? e.slice() : v.extend({}, e) : e
                    }
                    ,
                    v.tap = function(e, t) {
                        return t(e),
                            e
                    }
                    ,
                    v.isMatch = function(e, t) {
                        var n = v.keys(t)
                            , r = n.length;
                        if (null == e)
                            return !r;
                        for (var a = Object(e), i = 0; i < r; i++) {
                            var s = n[i];
                            if (t[s] !== a[s] || !(s in a))
                                return !1
                        }
                        return !0
                    }
                ;
                var I = function(e, t, n, r) {
                    if (e === t)
                        return 0 !== e || 1 / e === 1 / t;
                    if (null == e || null == t)
                        return e === t;
                    e instanceof v && (e = e._wrapped),
                    t instanceof v && (t = t._wrapped);
                    var a = f.call(e);
                    if (a !== f.call(t))
                        return !1;
                    switch (a) {
                        case "[object RegExp]":
                        case "[object String]":
                            return "" + e == "" + t;
                        case "[object Number]":
                            return +e !== +e ? +t !== +t : 0 === +e ? 1 / +e === 1 / t : +e === +t;
                        case "[object Date]":
                        case "[object Boolean]":
                            return +e === +t
                    }
                    var i = "[object Array]" === a;
                    if (!i) {
                        if ("object" != typeof e || "object" != typeof t)
                            return !1;
                        var s = e.constructor
                            , o = t.constructor;
                        if (s !== o && !(v.isFunction(s) && s instanceof s && v.isFunction(o) && o instanceof o) && "constructor"in e && "constructor"in t)
                            return !1
                    }
                    n = n || [],
                        r = r || [];
                    for (var d = n.length; d--; )
                        if (n[d] === e)
                            return r[d] === t;
                    if (n.push(e),
                        r.push(t),
                        i) {
                        if (d = e.length,
                        d !== t.length)
                            return !1;
                        for (; d--; )
                            if (!I(e[d], t[d], n, r))
                                return !1
                    } else {
                        var u, _ = v.keys(e);
                        if (d = _.length,
                        v.keys(t).length !== d)
                            return !1;
                        for (; d--; )
                            if (u = _[d],
                            !v.has(t, u) || !I(e[u], t[u], n, r))
                                return !1
                    }
                    return n.pop(),
                        r.pop(),
                        !0
                };
                v.isEqual = function(e, t) {
                    return I(e, t)
                }
                    ,
                    v.isEmpty = function(e) {
                        return null == e || (E(e) && (v.isArray(e) || v.isString(e) || v.isArguments(e)) ? 0 === e.length : 0 === v.keys(e).length)
                    }
                    ,
                    v.isElement = function(e) {
                        return !(!e || 1 !== e.nodeType)
                    }
                    ,
                    v.isArray = M || function(e) {
                        return "[object Array]" === f.call(e)
                    }
                    ,
                    v.isObject = function(e) {
                        var t = typeof e;
                        return "function" === t || "object" === t && !!e
                    }
                    ,
                    v.each(["Arguments", "Function", "String", "Number", "Date", "RegExp", "Error"], function(e) {
                        v["is" + e] = function(t) {
                            return f.call(t) === "[object " + e + "]"
                        }
                    }),
                v.isArguments(arguments) || (v.isArguments = function(e) {
                        return v.has(e, "callee")
                    }
                ),
                "function" != typeof /./ && "object" != typeof Int8Array && (v.isFunction = function(e) {
                        return "function" == typeof e || !1
                    }
                ),
                    v.isFinite = function(e) {
                        return isFinite(e) && !isNaN(parseFloat(e))
                    }
                    ,
                    v.isNaN = function(e) {
                        return v.isNumber(e) && e !== +e
                    }
                    ,
                    v.isBoolean = function(e) {
                        return e === !0 || e === !1 || "[object Boolean]" === f.call(e)
                    }
                    ,
                    v.isNull = function(e) {
                        return null === e
                    }
                    ,
                    v.isUndefined = function(e) {
                        return void 0 === e
                    }
                    ,
                    v.has = function(e, t) {
                        return null != e && p.call(e, t)
                    }
                    ,
                    v.noConflict = function() {
                        return d._ = u,
                            this
                    }
                    ,
                    v.identity = function(e) {
                        return e
                    }
                    ,
                    v.constant = function(e) {
                        return function() {
                            return e
                        }
                    }
                    ,
                    v.noop = function() {}
                    ,
                    v.property = D,
                    v.propertyOf = function(e) {
                        return null == e ? function() {}
                            : function(t) {
                                return e[t]
                            }
                    }
                    ,
                    v.matcher = v.matches = function(e) {
                        return e = v.extendOwn({}, e),
                            function(t) {
                                return v.isMatch(t, e)
                            }
                    }
                    ,
                    v.times = function(e, t, n) {
                        var r = Array(Math.max(0, e));
                        t = w(t, n, 1);
                        for (var a = 0; a < e; a++)
                            r[a] = t(a);
                        return r
                    }
                    ,
                    v.random = function(e, t) {
                        return null == t && (t = e,
                            e = 0),
                        e + Math.floor(Math.random() * (t - e + 1))
                    }
                    ,
                    v.now = Date.now || function() {
                        return (new Date).getTime()
                    }
                ;
                var W = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#x27;",
                    "`": "&#x60;"
                }
                    , R = v.invert(W)
                    , N = function(e) {
                    var t = function(t) {
                        return e[t]
                    }
                        , n = "(?:" + v.keys(e).join("|") + ")"
                        , r = RegExp(n)
                        , a = RegExp(n, "g");
                    return function(e) {
                        return e = null == e ? "" : "" + e,
                            r.test(e) ? e.replace(a, t) : e
                    }
                };
                v.escape = N(W),
                    v.unescape = N(R),
                    v.result = function(e, t, n) {
                        var r = null == e ? void 0 : e[t];
                        return void 0 === r && (r = n),
                            v.isFunction(r) ? r.call(e) : r
                    }
                ;
                var F = 0;
                v.uniqueId = function(e) {
                    var t = ++F + "";
                    return e ? e + t : t
                }
                    ,
                    v.templateSettings = {
                        evaluate: /<%([\s\S]+?)%>/g,
                        interpolate: /<%=([\s\S]+?)%>/g,
                        escape: /<%-([\s\S]+?)%>/g
                    };
                var C = /(.)^/
                    , z = {
                    "'": "'",
                    "\\": "\\",
                    "\r": "r",
                    "\n": "n",
                    "\u2028": "u2028",
                    "\u2029": "u2029"
                }
                    , B = /\\|'|\r|\n|\u2028|\u2029/g
                    , U = function(e) {
                    return "\\" + z[e]
                };
                v.template = function(e, t, n) {
                    !t && n && (t = n),
                        t = v.defaults({}, t, v.templateSettings);
                    var r = RegExp([(t.escape || C).source, (t.interpolate || C).source, (t.evaluate || C).source].join("|") + "|$", "g")
                        , a = 0
                        , i = "__p+='";
                    e.replace(r, function(t, n, r, s, o) {
                        return i += e.slice(a, o).replace(B, U),
                            a = o + t.length,
                            n ? i += "'+\n((__t=(" + n + "))==null?'':_.escape(__t))+\n'" : r ? i += "'+\n((__t=(" + r + "))==null?'':__t)+\n'" : s && (i += "';\n" + s + "\n__p+='"),
                            t
                    }),
                        i += "';\n",
                    t.variable || (i = "with(obj||{}){\n" + i + "}\n"),
                        i = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n";
                    try {
                        var s = new Function(t.variable || "obj","_",i)
                    } catch (o) {
                        throw o.source = i,
                            o
                    }
                    var d = function(e) {
                        return s.call(this, e, v)
                    }
                        , u = t.variable || "obj";
                    return d.source = "function(" + u + "){\n" + i + "}",
                        d
                }
                    ,
                    v.chain = function(e) {
                        var t = v(e);
                        return t._chain = !0,
                            t
                    }
                ;
                var J = function(e, t) {
                    return e._chain ? v(t).chain() : t
                };
                v.mixin = function(e) {
                    v.each(v.functions(e), function(t) {
                        var n = v[t] = e[t];
                        v.prototype[t] = function() {
                            var e = [this._wrapped];
                            return m.apply(e, arguments),
                                J(this, n.apply(v, e))
                        }
                    })
                }
                    ,
                    v.mixin(v),
                    v.each(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function(e) {
                        var t = _[e];
                        v.prototype[e] = function() {
                            var n = this._wrapped;
                            return t.apply(n, arguments),
                            "shift" !== e && "splice" !== e || 0 !== n.length || delete n[0],
                                J(this, n)
                        }
                    }),
                    v.each(["concat", "join", "slice"], function(e) {
                        var t = _[e];
                        v.prototype[e] = function() {
                            return J(this, t.apply(this._wrapped, arguments))
                        }
                    }),
                    v.prototype.value = function() {
                        return this._wrapped
                    }
                    ,
                    v.prototype.valueOf = v.prototype.toJSON = v.prototype.value,
                    v.prototype.toString = function() {
                        return "" + this._wrapped
                    }
                    ,
                    r = [],
                    a = function() {
                        return v
                    }
                        .apply(t, r),
                    !(void 0 !== a && (e.exports = a))
            }
        ).call(this)
    }
    , function(e, t, n) {
        function r(e) {
            return e.toString().replace(/^\/(.*)\/$/, "$1")
        }
        function a(e) {
            var t = Object.prototype.toString.call(e);
            return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(t) && "number" == typeof e.length && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
        }
        function i(e, t) {
            o(e, t) || (e.className += " " + t)
        }
        function s(e, t) {
            o(e, t) && (e.className = (" " + e.className + " ").replace(new RegExp(" " + t + " ","g"), " ").trim())
        }
        function o(e, t) {
            return !!~(" " + e.className + " ").indexOf(" " + t + " ")
        }
        function d(e, t) {
            if ("function" == typeof t) {
                var n, r, i, s = a(e) ? e : [e], o = [];
                for (n = 2,
                         r = arguments.length; n < r; ++n)
                    o.push(arguments[n]);
                for (n = 0,
                         r = s.length; n < r; ++n)
                    (i = s[n]) && t.apply(null, [i].concat(o))
            }
        }
        function u(e, t, n, r) {
            e.addEventListener ? e.addEventListener(t, n, r) : e.attachEvent && (e["_" + t] = function() {
                n.apply(e, arguments)
            }
                ,
                e.attachEvent("on" + t, e["_" + t]))
        }
        function l(e, t, n) {
            var r = "_" + t
                , a = "on" + t;
            e.removeEventListener && n ? e.removeEventListener(t, n) : e.detachEvent && (e.detachEvent(a, e[r]),
                delete e[r])
        }
        function c(e, t) {
            if (e) {
                var n, r, a = document.createElement("div"), i = document.createDocumentFragment();
                for (a.innerHTML = t,
                         n = a.childNodes,
                         r = n[0]; n.length > 0; )
                    i.appendChild(n[0]);
                return e.appendChild(i),
                    r
            }
        }
        function m(e, t) {
            function n() {
                var e = r.shift();
                return "string" != typeof e ? a : "object" == typeof a && null !== a ? (a = a[e],
                    n()) : void 0
            }
            var r = t.split(".")
                , a = e;
            return n()
        }
        function h(e) {
            return e.match(/^(https?)|(ftp):\/\//i) || (e = "http://" + e),
                e
        }
        function f(e) {
            return e = String(e),
                e = e.replace(/&amp;/g, "&"),
                e = e.replace(/<br>/gi, "\n"),
                e = e.replace(b, function(e, t) {
                    return e ? '<a class="link" href="' + h(e) + '" target="_blank">' + e + "</a>" : e
                }),
                e.replace(/\n/g, "<br>")
        }
        var p = n(6)
            , M = /mobile/i.test(navigator.userAgent) && !/iPad/i.test(navigator.userAgent)
            , y = /(((ftp|https?):)?\/\/)?/
            , L = /([-._0-9a-zA-Z]+(:[-._0-9a-zA-Z]+)?@)?/
            , g = /((\d+\.\d+\.\d+\.\d+)|(([-_0-9a-zA-Z_]+\.)+[a-zA-Z]+))/
            , Y = /(:\d+)?/
            , v = /(\/[^ ?\n]*)*/
            , w = /(\?([-+._%0-9a-zA-Z]+=[^ &#'"\n]*&)*([-+._%0-9a-zA-Z]+=[^ &#'"\n]*))?/
            , k = /(#[-+._%0-9a-zA-Z/]*)?/
            , b = new RegExp(r(y) + r(L) + r(g) + r(Y) + r(v) + r(w) + r(k),"gi");
        e.exports = {
            isTop: window.top === window.self,
            isNodeList: a,
            isAndroid: /android/i.test(navigator.userAgent),
            isQQBrowser: /MQQBrowser/i.test(navigator.userAgent),
            isIOS: /(iPad|iPhone|iPod)/i.test(navigator.userAgent),
            isSafari: /^((?!chrome|android|crios|fxios).)*safari/i.test(navigator.userAgent),
            isMobile: M,
            noop: function() {},
            click: M && "ontouchstart"in window ? "touchstart" : "click",
            isBrowserMinimized: function() {
                return "hidden" === document.visibilityState || document.hidden
            },
            appendHTMLTo: c,
            appendHTMLToBody: function(e) {
                return c(document.body, e)
            },
            createElementFromHTML: function(e) {
                var t = document.createElement("div");
                return t.innerHTML = e,
                    t.childNodes[0]
            },
            getBrief: function(e, t) {
                return "string" != typeof e ? "" : e.length > t ? e.slice(0, t) + "..." : e
            },
            formatDate: function(e) {
                return p(e || _.now()).format("M月D日 HH:mm")
            },
            formatProtocol: function(e) {
                return e.replace(/(http:|https:)?(\/\/)?(.+)/, function(e, t, n, r) {
                    return "//" + r
                })
            },
            filesizeFormat: function(e) {
                var t, n, r = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB"];
                return e > 0 ? (t = Math.floor(Math.log(e) / Math.log(1024)),
                    n = (e / Math.pow(1024, t)).toFixed(2) + " " + r[t]) : n = 0 === e ? "0 B" : "",
                    n
            },
            uuid: function() {
                var e, t = [], n = "0123456789abcdef";
                for (e = 0; e < 36; e++)
                    t[e] = n.substr(Math.floor(16 * Math.random()), 1);
                return t[14] = "4",
                    t[19] = n.substr(3 & t[19] | 8, 1),
                    t[8] = t[13] = t[18] = t[23] = "-",
                    t.join("")
            },
            convertFalse: function(e) {
                return e = "undefined" == typeof e ? "" : e,
                "false" !== e && e
            },
            removeDom: function(e) {
                e && (e.remove ? e.remove() : e.parentNode && e.parentNode.removeChild(e))
            },
            live: function(e, t, n, r) {
                var a = this
                    , i = r || document;
                a.on(i, t, function(t) {
                    var r, a, s, o = t || window.event, d = o.target || o.srcElement, u = d.parentNode, _ = i.querySelectorAll(e);
                    for (r = 0,
                             a = _.length; r < a; ++r)
                        s = _[r],
                            s === d ? n.call(d, o) : s === u && n.call(u, o)
                })
            },
            on: function(e, t, n, r) {
                t.split(" ").forEach(function(t) {
                    t && d(e, u, t, n, r)
                })
            },
            off: function(e, t, n) {
                t.split(" ").forEach(function(t) {
                    t && d(e, l, t, n)
                })
            },
            one: function(e, t, n, r) {
                if (e && t) {
                    var a = function() {
                        n.apply(this, arguments),
                            l(e, t, a)
                    };
                    u(e, t, a, r)
                }
            },
            trigger: function(e, t) {
                var n;
                document.createEvent ? (n = document.createEvent("HTMLEvents"),
                    n.initEvent(t, !0, !1),
                    e.dispatchEvent(n)) : e.fireEvent("on" + t)
            },
            extend: function(e, t) {
                var n, r, a;
                for (n in t)
                    Object.prototype.hasOwnProperty.call(t, n) && (a = t[n],
                        r = Object.prototype.toString.call(a),
                        void 0 === a ? e[n] = a : "[object Array]" === r ? (e[n] = [],
                            this.extend(e[n], a)) : "[object Object]" === r ? (e[n] = {},
                            this.extend(e[n], a)) : e[n] = a);
                return e
            },
            addClass: function(e, t) {
                return d(e, i, t),
                    e
            },
            removeClass: function(e, t) {
                return d(e, s, t),
                    e
            },
            hasClass: function(e, t) {
                return !!e && o(e, t)
            },
            toggleClass: function(e, t, n) {
                if (e && t) {
                    var r = "undefined" == typeof n ? !o(e, t) : n;
                    r ? i(e, t) : s(e, t)
                }
            },
            getDataByPath: m,
            query: function(e) {
                var t = new RegExp("[?&]" + e + "=([^&]*)(?=&|$)")
                    , n = t.exec(location.search);
                return n ? n[1] : ""
            },
            sameProtocol: function(e) {
                return e = e || "",
                    e = e.replace(/^http[s]?:/, ""),
                    e = e.replace(/^\/\//, ""),
                /^\//.test(e) || (e = "//" + e),
                    e
            },
            setStore: function(e, t) {
                try {
                    localStorage.setItem(e, t)
                } catch (n) {}
            },
            getStore: function(e) {
                try {
                    return localStorage.getItem(e)
                } catch (t) {}
            },
            clearStore: function(e) {
                try {
                    localStorage.removeItem(e)
                } catch (t) {}
            },
            clearAllStore: function() {
                try {
                    localStorage.clear()
                } catch (e) {}
            },
            set: function(e, t, n) {
                var r = new Date
                    , a = r.getTime() + 24 * (n || 30) * 3600 * 1e3;
                r.setTime(a),
                    document.cookie = encodeURIComponent(e) + "=" + encodeURIComponent(t) + ";path=/;expires=" + r.toGMTString()
            },
            get: function(e) {
                var t = document.cookie.match("(^|;) ?" + encodeURIComponent(e) + "=([^;]*)(;|$)");
                return t ? decodeURIComponent(t[2]) : ""
            },
            getAvatarsFullPath: function(e, t) {
                if (!e)
                    return "";
                var n = /^(https?:)?\/\//.test(e)
                    , r = ~e.indexOf("img-cn")
                    , a = ~e.indexOf("ossimages");
                return e = e.replace(/^(https?:)?\/\/?/, ""),
                    r && !a ? t + "/ossimages/" + e : n ? "//" + e : t + "/" + e
            },
            copy: function(e) {
                return this.extend({}, e)
            },
            encode: function(e) {
                var t;
                return e ? (t = e || "",
                    0 == e.length ? "" : (t = t.replace(/[<]/g, "&lt;"),
                        t = t.replace(/[>]/g, "&gt;"),
                        t = t.replace(/[']/g, "&#39;"),
                        t = t.replace(/["]/g, "&quot;"),
                        t = t.replace(/\n/g, "<br>"))) : ""
            },
            decode: function(e) {
                var t;
                return e ? (t = e || "",
                    0 == e.length ? "" : (t = t.replace(/&lt;/g, "<"),
                        t = t.replace(/&gt;/g, ">"),
                        t = t.replace(/&amp;/g, "&"))) : ""
            },
            parseUrl: f,
            stopPropagation: function(e) {
                e = window.event || e,
                    document.all ? e.cancelBubble = !0 : e.stopPropagation()
            }
        }
    }
    , function(e, t, n) {
        (function(e) {
                !function(t, n) {
                    e.exports = n()
                }(this, function() {
                    "use strict";
                    function t() {
                        return Yr.apply(null, arguments)
                    }
                    function r(e) {
                        Yr = e
                    }
                    function a(e) {
                        return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
                    }
                    function i(e) {
                        return null != e && "[object Object]" === Object.prototype.toString.call(e)
                    }
                    function s(e) {
                        var t;
                        for (t in e)
                            return !1;
                        return !0
                    }
                    function o(e) {
                        return void 0 === e
                    }
                    function d(e) {
                        return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
                    }
                    function u(e) {
                        return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
                    }
                    function _(e, t) {
                        var n, r = [];
                        for (n = 0; n < e.length; ++n)
                            r.push(t(e[n], n));
                        return r
                    }
                    function l(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }
                    function c(e, t) {
                        for (var n in t)
                            l(t, n) && (e[n] = t[n]);
                        return l(t, "toString") && (e.toString = t.toString),
                        l(t, "valueOf") && (e.valueOf = t.valueOf),
                            e
                    }
                    function m(e, t, n, r) {
                        return gt(e, t, n, r, !0).utc()
                    }
                    function h() {
                        return {
                            empty: !1,
                            unusedTokens: [],
                            unusedInput: [],
                            overflow: -2,
                            charsLeftOver: 0,
                            nullInput: !1,
                            invalidMonth: null,
                            invalidFormat: !1,
                            userInvalidated: !1,
                            iso: !1,
                            parsedDateParts: [],
                            meridiem: null,
                            rfc2822: !1,
                            weekdayMismatch: !1
                        }
                    }
                    function f(e) {
                        return null == e._pf && (e._pf = h()),
                            e._pf
                    }
                    function p(e) {
                        if (null == e._isValid) {
                            var t = f(e)
                                , n = wr.call(t.parsedDateParts, function(e) {
                                return null != e
                            })
                                , r = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n);
                            if (e._strict && (r = r && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour),
                            null != Object.isFrozen && Object.isFrozen(e))
                                return r;
                            e._isValid = r
                        }
                        return e._isValid
                    }
                    function M(e) {
                        var t = m(NaN);
                        return null != e ? c(f(t), e) : f(t).userInvalidated = !0,
                            t
                    }
                    function y(e, t) {
                        var n, r, a;
                        if (o(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject),
                        o(t._i) || (e._i = t._i),
                        o(t._f) || (e._f = t._f),
                        o(t._l) || (e._l = t._l),
                        o(t._strict) || (e._strict = t._strict),
                        o(t._tzm) || (e._tzm = t._tzm),
                        o(t._isUTC) || (e._isUTC = t._isUTC),
                        o(t._offset) || (e._offset = t._offset),
                        o(t._pf) || (e._pf = f(t)),
                        o(t._locale) || (e._locale = t._locale),
                        kr.length > 0)
                            for (n = 0; n < kr.length; n++)
                                r = kr[n],
                                    a = t[r],
                                o(a) || (e[r] = a);
                        return e
                    }
                    function L(e) {
                        y(this, e),
                            this._d = new Date(null != e._d ? e._d.getTime() : NaN),
                        this.isValid() || (this._d = new Date(NaN)),
                        br === !1 && (br = !0,
                            t.updateOffset(this),
                            br = !1)
                    }
                    function g(e) {
                        return e instanceof L || null != e && null != e._isAMomentObject
                    }
                    function Y(e) {
                        return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
                    }
                    function v(e) {
                        var t = +e
                            , n = 0;
                        return 0 !== t && isFinite(t) && (n = Y(t)),
                            n
                    }
                    function w(e, t, n) {
                        var r, a = Math.min(e.length, t.length), i = Math.abs(e.length - t.length), s = 0;
                        for (r = 0; r < a; r++)
                            (n && e[r] !== t[r] || !n && v(e[r]) !== v(t[r])) && s++;
                        return s + i
                    }
                    function k(e) {
                        t.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
                    }
                    function b(e, n) {
                        var r = !0;
                        return c(function() {
                            if (null != t.deprecationHandler && t.deprecationHandler(null, e),
                                r) {
                                for (var a, i = [], s = 0; s < arguments.length; s++) {
                                    if (a = "",
                                    "object" == typeof arguments[s]) {
                                        a += "\n[" + s + "] ";
                                        for (var o in arguments[0])
                                            a += o + ": " + arguments[0][o] + ", ";
                                        a = a.slice(0, -2)
                                    } else
                                        a = arguments[s];
                                    i.push(a)
                                }
                                k(e + "\nArguments: " + Array.prototype.slice.call(i).join("") + "\n" + (new Error).stack),
                                    r = !1
                            }
                            return n.apply(this, arguments)
                        }, n)
                    }
                    function T(e, n) {
                        null != t.deprecationHandler && t.deprecationHandler(e, n),
                        Tr[e] || (k(n),
                            Tr[e] = !0)
                    }
                    function D(e) {
                        return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
                    }
                    function S(e) {
                        var t, n;
                        for (n in e)
                            t = e[n],
                                D(t) ? this[n] = t : this["_" + n] = t;
                        this._config = e,
                            this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
                    }
                    function x(e, t) {
                        var n, r = c({}, e);
                        for (n in t)
                            l(t, n) && (i(e[n]) && i(t[n]) ? (r[n] = {},
                                c(r[n], e[n]),
                                c(r[n], t[n])) : null != t[n] ? r[n] = t[n] : delete r[n]);
                        for (n in e)
                            l(e, n) && !l(t, n) && i(e[n]) && (r[n] = c({}, r[n]));
                        return r
                    }
                    function E(e) {
                        null != e && this.set(e)
                    }
                    function H(e, t, n) {
                        var r = this._calendar[e] || this._calendar.sameElse;
                        return D(r) ? r.call(t, n) : r
                    }
                    function j(e) {
                        var t = this._longDateFormat[e]
                            , n = this._longDateFormat[e.toUpperCase()];
                        return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) {
                            return e.slice(1)
                        }),
                            this._longDateFormat[e])
                    }
                    function O() {
                        return this._invalidDate
                    }
                    function A(e) {
                        return this._ordinal.replace("%d", e)
                    }
                    function P(e, t, n, r) {
                        var a = this._relativeTime[n];
                        return D(a) ? a(e, t, n, r) : a.replace(/%d/i, e)
                    }
                    function I(e, t) {
                        var n = this._relativeTime[e > 0 ? "future" : "past"];
                        return D(n) ? n(t) : n.replace(/%s/i, t)
                    }
                    function W(e, t) {
                        var n = e.toLowerCase();
                        Ir[n] = Ir[n + "s"] = Ir[t] = e
                    }
                    function R(e) {
                        return "string" == typeof e ? Ir[e] || Ir[e.toLowerCase()] : void 0
                    }
                    function N(e) {
                        var t, n, r = {};
                        for (n in e)
                            l(e, n) && (t = R(n),
                            t && (r[t] = e[n]));
                        return r
                    }
                    function F(e, t) {
                        Wr[e] = t
                    }
                    function C(e) {
                        var t = [];
                        for (var n in e)
                            t.push({
                                unit: n,
                                priority: Wr[n]
                            });
                        return t.sort(function(e, t) {
                            return e.priority - t.priority
                        }),
                            t
                    }
                    function z(e, n) {
                        return function(r) {
                            return null != r ? (U(this, e, r),
                                t.updateOffset(this, n),
                                this) : B(this, e)
                        }
                    }
                    function B(e, t) {
                        return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
                    }
                    function U(e, t, n) {
                        e.isValid() && e._d["set" + (e._isUTC ? "UTC" : "") + t](n);
                    }
                    function J(e) {
                        return e = R(e),
                            D(this[e]) ? this[e]() : this
                    }
                    function V(e, t) {
                        if ("object" == typeof e) {
                            e = N(e);
                            for (var n = C(e), r = 0; r < n.length; r++)
                                this[n[r].unit](e[n[r].unit])
                        } else if (e = R(e),
                            D(this[e]))
                            return this[e](t);
                        return this
                    }
                    function G(e, t, n) {
                        var r = "" + Math.abs(e)
                            , a = t - r.length
                            , i = e >= 0;
                        return (i ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + r
                    }
                    function q(e, t, n, r) {
                        var a = r;
                        "string" == typeof r && (a = function() {
                                return this[r]()
                            }
                        ),
                        e && (Cr[e] = a),
                        t && (Cr[t[0]] = function() {
                                return G(a.apply(this, arguments), t[1], t[2])
                            }
                        ),
                        n && (Cr[n] = function() {
                                return this.localeData().ordinal(a.apply(this, arguments), e)
                            }
                        )
                    }
                    function X(e) {
                        return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "")
                    }
                    function K(e) {
                        var t, n, r = e.match(Rr);
                        for (t = 0,
                                 n = r.length; t < n; t++)
                            Cr[r[t]] ? r[t] = Cr[r[t]] : r[t] = X(r[t]);
                        return function(t) {
                            var a, i = "";
                            for (a = 0; a < n; a++)
                                i += D(r[a]) ? r[a].call(t, e) : r[a];
                            return i
                        }
                    }
                    function $(e, t) {
                        return e.isValid() ? (t = Z(t, e.localeData()),
                            Fr[t] = Fr[t] || K(t),
                            Fr[t](e)) : e.localeData().invalidDate()
                    }
                    function Z(e, t) {
                        function n(e) {
                            return t.longDateFormat(e) || e
                        }
                        var r = 5;
                        for (Nr.lastIndex = 0; r >= 0 && Nr.test(e); )
                            e = e.replace(Nr, n),
                                Nr.lastIndex = 0,
                                r -= 1;
                        return e
                    }
                    function Q(e, t, n) {
                        ia[e] = D(t) ? t : function(e, r) {
                            return e && n ? n : t
                        }
                    }
                    function ee(e, t) {
                        return l(ia, e) ? ia[e](t._strict, t._locale) : new RegExp(te(e))
                    }
                    function te(e) {
                        return ne(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, r, a) {
                            return t || n || r || a
                        }))
                    }
                    function ne(e) {
                        return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
                    }
                    function re(e, t) {
                        var n, r = t;
                        for ("string" == typeof e && (e = [e]),
                             d(t) && (r = function(e, n) {
                                     n[t] = v(e)
                                 }
                             ),
                                 n = 0; n < e.length; n++)
                            sa[e[n]] = r
                    }
                    function ae(e, t) {
                        re(e, function(e, n, r, a) {
                            r._w = r._w || {},
                                t(e, r._w, r, a)
                        })
                    }
                    function ie(e, t, n) {
                        null != t && l(sa, e) && sa[e](t, n._a, n, e)
                    }
                    function se(e, t) {
                        return new Date(Date.UTC(e, t + 1, 0)).getUTCDate()
                    }
                    function oe(e, t) {
                        return e ? a(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Ma).test(t) ? "format" : "standalone"][e.month()] : a(this._months) ? this._months : this._months.standalone
                    }
                    function de(e, t) {
                        return e ? a(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Ma.test(t) ? "format" : "standalone"][e.month()] : a(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
                    }
                    function ue(e, t, n) {
                        var r, a, i, s = e.toLocaleLowerCase();
                        if (!this._monthsParse)
                            for (this._monthsParse = [],
                                     this._longMonthsParse = [],
                                     this._shortMonthsParse = [],
                                     r = 0; r < 12; ++r)
                                i = m([2e3, r]),
                                    this._shortMonthsParse[r] = this.monthsShort(i, "").toLocaleLowerCase(),
                                    this._longMonthsParse[r] = this.months(i, "").toLocaleLowerCase();
                        return n ? "MMM" === t ? (a = pa.call(this._shortMonthsParse, s),
                            a !== -1 ? a : null) : (a = pa.call(this._longMonthsParse, s),
                            a !== -1 ? a : null) : "MMM" === t ? (a = pa.call(this._shortMonthsParse, s),
                            a !== -1 ? a : (a = pa.call(this._longMonthsParse, s),
                                a !== -1 ? a : null)) : (a = pa.call(this._longMonthsParse, s),
                            a !== -1 ? a : (a = pa.call(this._shortMonthsParse, s),
                                a !== -1 ? a : null))
                    }
                    function _e(e, t, n) {
                        var r, a, i;
                        if (this._monthsParseExact)
                            return ue.call(this, e, t, n);
                        for (this._monthsParse || (this._monthsParse = [],
                            this._longMonthsParse = [],
                            this._shortMonthsParse = []),
                                 r = 0; r < 12; r++) {
                            if (a = m([2e3, r]),
                            n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(a, "").replace(".", "") + "$","i"),
                                this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(a, "").replace(".", "") + "$","i")),
                            n || this._monthsParse[r] || (i = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""),
                                this._monthsParse[r] = new RegExp(i.replace(".", ""),"i")),
                            n && "MMMM" === t && this._longMonthsParse[r].test(e))
                                return r;
                            if (n && "MMM" === t && this._shortMonthsParse[r].test(e))
                                return r;
                            if (!n && this._monthsParse[r].test(e))
                                return r
                        }
                    }
                    function le(e, t) {
                        var n;
                        if (!e.isValid())
                            return e;
                        if ("string" == typeof t)
                            if (/^\d+$/.test(t))
                                t = v(t);
                            else if (t = e.localeData().monthsParse(t),
                                !d(t))
                                return e;
                        return n = Math.min(e.date(), se(e.year(), t)),
                            e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n),
                            e
                    }
                    function ce(e) {
                        return null != e ? (le(this, e),
                            t.updateOffset(this, !0),
                            this) : B(this, "Month")
                    }
                    function me() {
                        return se(this.year(), this.month())
                    }
                    function he(e) {
                        return this._monthsParseExact ? (l(this, "_monthsRegex") || pe.call(this),
                            e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (l(this, "_monthsShortRegex") || (this._monthsShortRegex = ga),
                            this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
                    }
                    function fe(e) {
                        return this._monthsParseExact ? (l(this, "_monthsRegex") || pe.call(this),
                            e ? this._monthsStrictRegex : this._monthsRegex) : (l(this, "_monthsRegex") || (this._monthsRegex = Ya),
                            this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
                    }
                    function pe() {
                        function e(e, t) {
                            return t.length - e.length
                        }
                        var t, n, r = [], a = [], i = [];
                        for (t = 0; t < 12; t++)
                            n = m([2e3, t]),
                                r.push(this.monthsShort(n, "")),
                                a.push(this.months(n, "")),
                                i.push(this.months(n, "")),
                                i.push(this.monthsShort(n, ""));
                        for (r.sort(e),
                                 a.sort(e),
                                 i.sort(e),
                                 t = 0; t < 12; t++)
                            r[t] = ne(r[t]),
                                a[t] = ne(a[t]);
                        for (t = 0; t < 24; t++)
                            i[t] = ne(i[t]);
                        this._monthsRegex = new RegExp("^(" + i.join("|") + ")","i"),
                            this._monthsShortRegex = this._monthsRegex,
                            this._monthsStrictRegex = new RegExp("^(" + a.join("|") + ")","i"),
                            this._monthsShortStrictRegex = new RegExp("^(" + r.join("|") + ")","i")
                    }
                    function Me(e) {
                        return ye(e) ? 366 : 365
                    }
                    function ye(e) {
                        return e % 4 === 0 && e % 100 !== 0 || e % 400 === 0
                    }
                    function Le() {
                        return ye(this.year())
                    }
                    function ge(e, t, n, r, a, i, s) {
                        var o = new Date(e,t,n,r,a,i,s);
                        return e < 100 && e >= 0 && isFinite(o.getFullYear()) && o.setFullYear(e),
                            o
                    }
                    function Ye(e) {
                        var t = new Date(Date.UTC.apply(null, arguments));
                        return e < 100 && e >= 0 && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e),
                            t
                    }
                    function ve(e, t, n) {
                        var r = 7 + t - n
                            , a = (7 + Ye(e, 0, r).getUTCDay() - t) % 7;
                        return -a + r - 1
                    }
                    function we(e, t, n, r, a) {
                        var i, s, o = (7 + n - r) % 7, d = ve(e, r, a), u = 1 + 7 * (t - 1) + o + d;
                        return u <= 0 ? (i = e - 1,
                            s = Me(i) + u) : u > Me(e) ? (i = e + 1,
                            s = u - Me(e)) : (i = e,
                            s = u),
                            {
                                year: i,
                                dayOfYear: s
                            }
                    }
                    function ke(e, t, n) {
                        var r, a, i = ve(e.year(), t, n), s = Math.floor((e.dayOfYear() - i - 1) / 7) + 1;
                        return s < 1 ? (a = e.year() - 1,
                            r = s + be(a, t, n)) : s > be(e.year(), t, n) ? (r = s - be(e.year(), t, n),
                            a = e.year() + 1) : (a = e.year(),
                            r = s),
                            {
                                week: r,
                                year: a
                            }
                    }
                    function be(e, t, n) {
                        var r = ve(e, t, n)
                            , a = ve(e + 1, t, n);
                        return (Me(e) - r + a) / 7
                    }
                    function Te(e) {
                        return ke(e, this._week.dow, this._week.doy).week
                    }
                    function De() {
                        return this._week.dow
                    }
                    function Se() {
                        return this._week.doy
                    }
                    function xe(e) {
                        var t = this.localeData().week(this);
                        return null == e ? t : this.add(7 * (e - t), "d")
                    }
                    function Ee(e) {
                        var t = ke(this, 1, 4).week;
                        return null == e ? t : this.add(7 * (e - t), "d")
                    }
                    function He(e, t) {
                        return "string" != typeof e ? e : isNaN(e) ? (e = t.weekdaysParse(e),
                            "number" == typeof e ? e : null) : parseInt(e, 10)
                    }
                    function je(e, t) {
                        return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e
                    }
                    function Oe(e, t) {
                        return e ? a(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()] : a(this._weekdays) ? this._weekdays : this._weekdays.standalone
                    }
                    function Ae(e) {
                        return e ? this._weekdaysShort[e.day()] : this._weekdaysShort
                    }
                    function Pe(e) {
                        return e ? this._weekdaysMin[e.day()] : this._weekdaysMin
                    }
                    function Ie(e, t, n) {
                        var r, a, i, s = e.toLocaleLowerCase();
                        if (!this._weekdaysParse)
                            for (this._weekdaysParse = [],
                                     this._shortWeekdaysParse = [],
                                     this._minWeekdaysParse = [],
                                     r = 0; r < 7; ++r)
                                i = m([2e3, 1]).day(r),
                                    this._minWeekdaysParse[r] = this.weekdaysMin(i, "").toLocaleLowerCase(),
                                    this._shortWeekdaysParse[r] = this.weekdaysShort(i, "").toLocaleLowerCase(),
                                    this._weekdaysParse[r] = this.weekdays(i, "").toLocaleLowerCase();
                        return n ? "dddd" === t ? (a = pa.call(this._weekdaysParse, s),
                            a !== -1 ? a : null) : "ddd" === t ? (a = pa.call(this._shortWeekdaysParse, s),
                            a !== -1 ? a : null) : (a = pa.call(this._minWeekdaysParse, s),
                            a !== -1 ? a : null) : "dddd" === t ? (a = pa.call(this._weekdaysParse, s),
                            a !== -1 ? a : (a = pa.call(this._shortWeekdaysParse, s),
                                a !== -1 ? a : (a = pa.call(this._minWeekdaysParse, s),
                                    a !== -1 ? a : null))) : "ddd" === t ? (a = pa.call(this._shortWeekdaysParse, s),
                            a !== -1 ? a : (a = pa.call(this._weekdaysParse, s),
                                a !== -1 ? a : (a = pa.call(this._minWeekdaysParse, s),
                                    a !== -1 ? a : null))) : (a = pa.call(this._minWeekdaysParse, s),
                            a !== -1 ? a : (a = pa.call(this._weekdaysParse, s),
                                a !== -1 ? a : (a = pa.call(this._shortWeekdaysParse, s),
                                    a !== -1 ? a : null)))
                    }
                    function We(e, t, n) {
                        var r, a, i;
                        if (this._weekdaysParseExact)
                            return Ie.call(this, e, t, n);
                        for (this._weekdaysParse || (this._weekdaysParse = [],
                            this._minWeekdaysParse = [],
                            this._shortWeekdaysParse = [],
                            this._fullWeekdaysParse = []),
                                 r = 0; r < 7; r++) {
                            if (a = m([2e3, 1]).day(r),
                            n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(a, "").replace(".", ".?") + "$","i"),
                                this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(a, "").replace(".", ".?") + "$","i"),
                                this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(a, "").replace(".", ".?") + "$","i")),
                            this._weekdaysParse[r] || (i = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""),
                                this._weekdaysParse[r] = new RegExp(i.replace(".", ""),"i")),
                            n && "dddd" === t && this._fullWeekdaysParse[r].test(e))
                                return r;
                            if (n && "ddd" === t && this._shortWeekdaysParse[r].test(e))
                                return r;
                            if (n && "dd" === t && this._minWeekdaysParse[r].test(e))
                                return r;
                            if (!n && this._weekdaysParse[r].test(e))
                                return r
                        }
                    }
                    function Re(e) {
                        if (!this.isValid())
                            return null != e ? this : NaN;
                        var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
                        return null != e ? (e = He(e, this.localeData()),
                            this.add(e - t, "d")) : t
                    }
                    function Ne(e) {
                        if (!this.isValid())
                            return null != e ? this : NaN;
                        var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
                        return null == e ? t : this.add(e - t, "d")
                    }
                    function Fe(e) {
                        if (!this.isValid())
                            return null != e ? this : NaN;
                        if (null != e) {
                            var t = je(e, this.localeData());
                            return this.day(this.day() % 7 ? t : t - 7)
                        }
                        return this.day() || 7
                    }
                    function Ce(e) {
                        return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Ue.call(this),
                            e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (l(this, "_weekdaysRegex") || (this._weekdaysRegex = Da),
                            this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
                    }
                    function ze(e) {
                        return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Ue.call(this),
                            e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (l(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Sa),
                            this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
                    }
                    function Be(e) {
                        return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || Ue.call(this),
                            e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (l(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = xa),
                            this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
                    }
                    function Ue() {
                        function e(e, t) {
                            return t.length - e.length
                        }
                        var t, n, r, a, i, s = [], o = [], d = [], u = [];
                        for (t = 0; t < 7; t++)
                            n = m([2e3, 1]).day(t),
                                r = this.weekdaysMin(n, ""),
                                a = this.weekdaysShort(n, ""),
                                i = this.weekdays(n, ""),
                                s.push(r),
                                o.push(a),
                                d.push(i),
                                u.push(r),
                                u.push(a),
                                u.push(i);
                        for (s.sort(e),
                                 o.sort(e),
                                 d.sort(e),
                                 u.sort(e),
                                 t = 0; t < 7; t++)
                            o[t] = ne(o[t]),
                                d[t] = ne(d[t]),
                                u[t] = ne(u[t]);
                        this._weekdaysRegex = new RegExp("^(" + u.join("|") + ")","i"),
                            this._weekdaysShortRegex = this._weekdaysRegex,
                            this._weekdaysMinRegex = this._weekdaysRegex,
                            this._weekdaysStrictRegex = new RegExp("^(" + d.join("|") + ")","i"),
                            this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")","i"),
                            this._weekdaysMinStrictRegex = new RegExp("^(" + s.join("|") + ")","i")
                    }
                    function Je() {
                        return this.hours() % 12 || 12
                    }
                    function Ve() {
                        return this.hours() || 24
                    }
                    function Ge(e, t) {
                        q(e, 0, 0, function() {
                            return this.localeData().meridiem(this.hours(), this.minutes(), t)
                        })
                    }
                    function qe(e, t) {
                        return t._meridiemParse
                    }
                    function Xe(e) {
                        return "p" === (e + "").toLowerCase().charAt(0)
                    }
                    function Ke(e, t, n) {
                        return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
                    }
                    function $e(e) {
                        return e ? e.toLowerCase().replace("_", "-") : e
                    }
                    function Ze(e) {
                        for (var t, n, r, a, i = 0; i < e.length; ) {
                            for (a = $e(e[i]).split("-"),
                                     t = a.length,
                                     n = $e(e[i + 1]),
                                     n = n ? n.split("-") : null; t > 0; ) {
                                if (r = Qe(a.slice(0, t).join("-")))
                                    return r;
                                if (n && n.length >= t && w(a, n, !0) >= t - 1)
                                    break;
                                t--
                            }
                            i++
                        }
                        return null
                    }
                    function Qe(t) {
                        var r = null;
                        if (!Aa[t] && "undefined" != typeof e && e && e.exports)
                            try {
                                r = Ea._abbr,
                                    n(8)("./" + t),
                                    et(r)
                            } catch (a) {}
                        return Aa[t]
                    }
                    function et(e, t) {
                        var n;
                        return e && (n = o(t) ? rt(e) : tt(e, t),
                        n && (Ea = n)),
                            Ea._abbr
                    }
                    function tt(e, t) {
                        if (null !== t) {
                            var n = Oa;
                            if (t.abbr = e,
                            null != Aa[e])
                                T("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),
                                    n = Aa[e]._config;
                            else if (null != t.parentLocale) {
                                if (null == Aa[t.parentLocale])
                                    return Pa[t.parentLocale] || (Pa[t.parentLocale] = []),
                                        Pa[t.parentLocale].push({
                                            name: e,
                                            config: t
                                        }),
                                        null;
                                n = Aa[t.parentLocale]._config
                            }
                            return Aa[e] = new E(x(n, t)),
                            Pa[e] && Pa[e].forEach(function(e) {
                                tt(e.name, e.config)
                            }),
                                et(e),
                                Aa[e]
                        }
                        return delete Aa[e],
                            null
                    }
                    function nt(e, t) {
                        if (null != t) {
                            var n, r = Oa;
                            null != Aa[e] && (r = Aa[e]._config),
                                t = x(r, t),
                                n = new E(t),
                                n.parentLocale = Aa[e],
                                Aa[e] = n,
                                et(e)
                        } else
                            null != Aa[e] && (null != Aa[e].parentLocale ? Aa[e] = Aa[e].parentLocale : null != Aa[e] && delete Aa[e]);
                        return Aa[e]
                    }
                    function rt(e) {
                        var t;
                        if (e && e._locale && e._locale._abbr && (e = e._locale._abbr),
                            !e)
                            return Ea;
                        if (!a(e)) {
                            if (t = Qe(e))
                                return t;
                            e = [e]
                        }
                        return Ze(e)
                    }
                    function at() {
                        return xr(Aa)
                    }
                    function it(e) {
                        var t, n = e._a;
                        return n && f(e).overflow === -2 && (t = n[da] < 0 || n[da] > 11 ? da : n[ua] < 1 || n[ua] > se(n[oa], n[da]) ? ua : n[_a] < 0 || n[_a] > 24 || 24 === n[_a] && (0 !== n[la] || 0 !== n[ca] || 0 !== n[ma]) ? _a : n[la] < 0 || n[la] > 59 ? la : n[ca] < 0 || n[ca] > 59 ? ca : n[ma] < 0 || n[ma] > 999 ? ma : -1,
                        f(e)._overflowDayOfYear && (t < oa || t > ua) && (t = ua),
                        f(e)._overflowWeeks && t === -1 && (t = ha),
                        f(e)._overflowWeekday && t === -1 && (t = fa),
                            f(e).overflow = t),
                            e
                    }
                    function st(e) {
                        var t, n, r, a, i, s, o = e._i, d = Ia.exec(o) || Wa.exec(o);
                        if (d) {
                            for (f(e).iso = !0,
                                     t = 0,
                                     n = Na.length; t < n; t++)
                                if (Na[t][1].exec(d[1])) {
                                    a = Na[t][0],
                                        r = Na[t][2] !== !1;
                                    break
                                }
                            if (null == a)
                                return void (e._isValid = !1);
                            if (d[3]) {
                                for (t = 0,
                                         n = Fa.length; t < n; t++)
                                    if (Fa[t][1].exec(d[3])) {
                                        i = (d[2] || " ") + Fa[t][0];
                                        break
                                    }
                                if (null == i)
                                    return void (e._isValid = !1)
                            }
                            if (!r && null != i)
                                return void (e._isValid = !1);
                            if (d[4]) {
                                if (!Ra.exec(d[4]))
                                    return void (e._isValid = !1);
                                s = "Z"
                            }
                            e._f = a + (i || "") + (s || ""),
                                mt(e)
                        } else
                            e._isValid = !1
                    }
                    function ot(e) {
                        var t, n, r, a, i, s, o, d, u = {
                            " GMT": " +0000",
                            " EDT": " -0400",
                            " EST": " -0500",
                            " CDT": " -0500",
                            " CST": " -0600",
                            " MDT": " -0600",
                            " MST": " -0700",
                            " PDT": " -0700",
                            " PST": " -0800"
                        }, _ = "YXWVUTSRQPONZABCDEFGHIKLM";
                        if (t = e._i.replace(/\([^\)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s|\s$/g, ""),
                            n = za.exec(t)) {
                            if (r = n[1] ? "ddd" + (5 === n[1].length ? ", " : " ") : "",
                                a = "D MMM " + (n[2].length > 10 ? "YYYY " : "YY "),
                                i = "HH:mm" + (n[4] ? ":ss" : ""),
                                n[1]) {
                                var l = new Date(n[2])
                                    , c = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][l.getDay()];
                                if (n[1].substr(0, 3) !== c)
                                    return f(e).weekdayMismatch = !0,
                                        void (e._isValid = !1)
                            }
                            switch (n[5].length) {
                                case 2:
                                    0 === d ? o = " +0000" : (d = _.indexOf(n[5][1].toUpperCase()) - 12,
                                        o = (d < 0 ? " -" : " +") + ("" + d).replace(/^-?/, "0").match(/..$/)[0] + "00");
                                    break;
                                case 4:
                                    o = u[n[5]];
                                    break;
                                default:
                                    o = u[" GMT"]
                            }
                            n[5] = o,
                                e._i = n.splice(1).join(""),
                                s = " ZZ",
                                e._f = r + a + i + s,
                                mt(e),
                                f(e).rfc2822 = !0
                        } else
                            e._isValid = !1
                    }
                    function dt(e) {
                        var n = Ca.exec(e._i);
                        return null !== n ? void (e._d = new Date(+n[1])) : (st(e),
                            void (e._isValid === !1 && (delete e._isValid,
                                ot(e),
                            e._isValid === !1 && (delete e._isValid,
                                t.createFromInputFallback(e)))))
                    }
                    function ut(e, t, n) {
                        return null != e ? e : null != t ? t : n
                    }
                    function _t(e) {
                        var n = new Date(t.now());
                        return e._useUTC ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()] : [n.getFullYear(), n.getMonth(), n.getDate()]
                    }
                    function lt(e) {
                        var t, n, r, a, i = [];
                        if (!e._d) {
                            for (r = _t(e),
                                 e._w && null == e._a[ua] && null == e._a[da] && ct(e),
                                 null != e._dayOfYear && (a = ut(e._a[oa], r[oa]),
                                 (e._dayOfYear > Me(a) || 0 === e._dayOfYear) && (f(e)._overflowDayOfYear = !0),
                                     n = Ye(a, 0, e._dayOfYear),
                                     e._a[da] = n.getUTCMonth(),
                                     e._a[ua] = n.getUTCDate()),
                                     t = 0; t < 3 && null == e._a[t]; ++t)
                                e._a[t] = i[t] = r[t];
                            for (; t < 7; t++)
                                e._a[t] = i[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                            24 === e._a[_a] && 0 === e._a[la] && 0 === e._a[ca] && 0 === e._a[ma] && (e._nextDay = !0,
                                e._a[_a] = 0),
                                e._d = (e._useUTC ? Ye : ge).apply(null, i),
                            null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
                            e._nextDay && (e._a[_a] = 24)
                        }
                    }
                    function ct(e) {
                        var t, n, r, a, i, s, o, d;
                        if (t = e._w,
                        null != t.GG || null != t.W || null != t.E)
                            i = 1,
                                s = 4,
                                n = ut(t.GG, e._a[oa], ke(Yt(), 1, 4).year),
                                r = ut(t.W, 1),
                                a = ut(t.E, 1),
                            (a < 1 || a > 7) && (d = !0);
                        else {
                            i = e._locale._week.dow,
                                s = e._locale._week.doy;
                            var u = ke(Yt(), i, s);
                            n = ut(t.gg, e._a[oa], u.year),
                                r = ut(t.w, u.week),
                                null != t.d ? (a = t.d,
                                (a < 0 || a > 6) && (d = !0)) : null != t.e ? (a = t.e + i,
                                (t.e < 0 || t.e > 6) && (d = !0)) : a = i
                        }
                        r < 1 || r > be(n, i, s) ? f(e)._overflowWeeks = !0 : null != d ? f(e)._overflowWeekday = !0 : (o = we(n, r, a, i, s),
                            e._a[oa] = o.year,
                            e._dayOfYear = o.dayOfYear)
                    }
                    function mt(e) {
                        if (e._f === t.ISO_8601)
                            return void st(e);
                        if (e._f === t.RFC_2822)
                            return void ot(e);
                        e._a = [],
                            f(e).empty = !0;
                        var n, r, a, i, s, o = "" + e._i, d = o.length, u = 0;
                        for (a = Z(e._f, e._locale).match(Rr) || [],
                                 n = 0; n < a.length; n++)
                            i = a[n],
                                r = (o.match(ee(i, e)) || [])[0],
                            r && (s = o.substr(0, o.indexOf(r)),
                            s.length > 0 && f(e).unusedInput.push(s),
                                o = o.slice(o.indexOf(r) + r.length),
                                u += r.length),
                                Cr[i] ? (r ? f(e).empty = !1 : f(e).unusedTokens.push(i),
                                    ie(i, r, e)) : e._strict && !r && f(e).unusedTokens.push(i);
                        f(e).charsLeftOver = d - u,
                        o.length > 0 && f(e).unusedInput.push(o),
                        e._a[_a] <= 12 && f(e).bigHour === !0 && e._a[_a] > 0 && (f(e).bigHour = void 0),
                            f(e).parsedDateParts = e._a.slice(0),
                            f(e).meridiem = e._meridiem,
                            e._a[_a] = ht(e._locale, e._a[_a], e._meridiem),
                            lt(e),
                            it(e)
                    }
                    function ht(e, t, n) {
                        var r;
                        return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? (r = e.isPM(n),
                        r && t < 12 && (t += 12),
                        r || 12 !== t || (t = 0),
                            t) : t
                    }
                    function ft(e) {
                        var t, n, r, a, i;
                        if (0 === e._f.length)
                            return f(e).invalidFormat = !0,
                                void (e._d = new Date(NaN));
                        for (a = 0; a < e._f.length; a++)
                            i = 0,
                                t = y({}, e),
                            null != e._useUTC && (t._useUTC = e._useUTC),
                                t._f = e._f[a],
                                mt(t),
                            p(t) && (i += f(t).charsLeftOver,
                                i += 10 * f(t).unusedTokens.length,
                                f(t).score = i,
                            (null == r || i < r) && (r = i,
                                n = t));
                        c(e, n || t)
                    }
                    function pt(e) {
                        if (!e._d) {
                            var t = N(e._i);
                            e._a = _([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) {
                                return e && parseInt(e, 10)
                            }),
                                lt(e)
                        }
                    }
                    function Mt(e) {
                        var t = new L(it(yt(e)));
                        return t._nextDay && (t.add(1, "d"),
                            t._nextDay = void 0),
                            t
                    }
                    function yt(e) {
                        var t = e._i
                            , n = e._f;
                        return e._locale = e._locale || rt(e._l),
                            null === t || void 0 === n && "" === t ? M({
                                nullInput: !0
                            }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)),
                                g(t) ? new L(it(t)) : (u(t) ? e._d = t : a(n) ? ft(e) : n ? mt(e) : Lt(e),
                                p(e) || (e._d = null),
                                    e))
                    }
                    function Lt(e) {
                        var n = e._i;
                        o(n) ? e._d = new Date(t.now()) : u(n) ? e._d = new Date(n.valueOf()) : "string" == typeof n ? dt(e) : a(n) ? (e._a = _(n.slice(0), function(e) {
                            return parseInt(e, 10)
                        }),
                            lt(e)) : i(n) ? pt(e) : d(n) ? e._d = new Date(n) : t.createFromInputFallback(e)
                    }
                    function gt(e, t, n, r, o) {
                        var d = {};
                        return n !== !0 && n !== !1 || (r = n,
                            n = void 0),
                        (i(e) && s(e) || a(e) && 0 === e.length) && (e = void 0),
                            d._isAMomentObject = !0,
                            d._useUTC = d._isUTC = o,
                            d._l = n,
                            d._i = e,
                            d._f = t,
                            d._strict = r,
                            Mt(d)
                    }
                    function Yt(e, t, n, r) {
                        return gt(e, t, n, r, !1)
                    }
                    function vt(e, t) {
                        var n, r;
                        if (1 === t.length && a(t[0]) && (t = t[0]),
                            !t.length)
                            return Yt();
                        for (n = t[0],
                                 r = 1; r < t.length; ++r)
                            t[r].isValid() && !t[r][e](n) || (n = t[r]);
                        return n
                    }
                    function wt() {
                        var e = [].slice.call(arguments, 0);
                        return vt("isBefore", e)
                    }
                    function kt() {
                        var e = [].slice.call(arguments, 0);
                        return vt("isAfter", e)
                    }
                    function bt(e) {
                        for (var t in e)
                            if (Va.indexOf(t) === -1 || null != e[t] && isNaN(e[t]))
                                return !1;
                        for (var n = !1, r = 0; r < Va.length; ++r)
                            if (e[Va[r]]) {
                                if (n)
                                    return !1;
                                parseFloat(e[Va[r]]) !== v(e[Va[r]]) && (n = !0)
                            }
                        return !0
                    }
                    function Tt() {
                        return this._isValid
                    }
                    function Dt() {
                        return Vt(NaN)
                    }
                    function St(e) {
                        var t = N(e)
                            , n = t.year || 0
                            , r = t.quarter || 0
                            , a = t.month || 0
                            , i = t.week || 0
                            , s = t.day || 0
                            , o = t.hour || 0
                            , d = t.minute || 0
                            , u = t.second || 0
                            , _ = t.millisecond || 0;
                        this._isValid = bt(t),
                            this._milliseconds = +_ + 1e3 * u + 6e4 * d + 1e3 * o * 60 * 60,
                            this._days = +s + 7 * i,
                            this._months = +a + 3 * r + 12 * n,
                            this._data = {},
                            this._locale = rt(),
                            this._bubble()
                    }
                    function xt(e) {
                        return e instanceof St
                    }
                    function Et(e) {
                        return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e)
                    }
                    function Ht(e, t) {
                        q(e, 0, 0, function() {
                            var e = this.utcOffset()
                                , n = "+";
                            return e < 0 && (e = -e,
                                n = "-"),
                            n + G(~~(e / 60), 2) + t + G(~~e % 60, 2)
                        })
                    }
                    function jt(e, t) {
                        var n = (t || "").match(e);
                        if (null === n)
                            return null;
                        var r = n[n.length - 1] || []
                            , a = (r + "").match(Ga) || ["-", 0, 0]
                            , i = +(60 * a[1]) + v(a[2]);
                        return 0 === i ? 0 : "+" === a[0] ? i : -i
                    }
                    function Ot(e, n) {
                        var r, a;
                        return n._isUTC ? (r = n.clone(),
                            a = (g(e) || u(e) ? e.valueOf() : Yt(e).valueOf()) - r.valueOf(),
                            r._d.setTime(r._d.valueOf() + a),
                            t.updateOffset(r, !1),
                            r) : Yt(e).local()
                    }
                    function At(e) {
                        return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
                    }
                    function Pt(e, n, r) {
                        var a, i = this._offset || 0;
                        if (!this.isValid())
                            return null != e ? this : NaN;
                        if (null != e) {
                            if ("string" == typeof e) {
                                if (e = jt(na, e),
                                null === e)
                                    return this
                            } else
                                Math.abs(e) < 16 && !r && (e *= 60);
                            return !this._isUTC && n && (a = At(this)),
                                this._offset = e,
                                this._isUTC = !0,
                            null != a && this.add(a, "m"),
                            i !== e && (!n || this._changeInProgress ? $t(this, Vt(e - i, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0,
                                t.updateOffset(this, !0),
                                this._changeInProgress = null)),
                                this
                        }
                        return this._isUTC ? i : At(this)
                    }
                    function It(e, t) {
                        return null != e ? ("string" != typeof e && (e = -e),
                            this.utcOffset(e, t),
                            this) : -this.utcOffset()
                    }
                    function Wt(e) {
                        return this.utcOffset(0, e)
                    }
                    function Rt(e) {
                        return this._isUTC && (this.utcOffset(0, e),
                            this._isUTC = !1,
                        e && this.subtract(At(this), "m")),
                            this
                    }
                    function Nt() {
                        if (null != this._tzm)
                            this.utcOffset(this._tzm, !1, !0);
                        else if ("string" == typeof this._i) {
                            var e = jt(ta, this._i);
                            null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
                        }
                        return this
                    }
                    function Ft(e) {
                        return !!this.isValid() && (e = e ? Yt(e).utcOffset() : 0,
                        (this.utcOffset() - e) % 60 === 0)
                    }
                    function Ct() {
                        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
                    }
                    function zt() {
                        if (!o(this._isDSTShifted))
                            return this._isDSTShifted;
                        var e = {};
                        if (y(e, this),
                            e = yt(e),
                            e._a) {
                            var t = e._isUTC ? m(e._a) : Yt(e._a);
                            this._isDSTShifted = this.isValid() && w(e._a, t.toArray()) > 0
                        } else
                            this._isDSTShifted = !1;
                        return this._isDSTShifted
                    }
                    function Bt() {
                        return !!this.isValid() && !this._isUTC
                    }
                    function Ut() {
                        return !!this.isValid() && this._isUTC
                    }
                    function Jt() {
                        return !!this.isValid() && (this._isUTC && 0 === this._offset)
                    }
                    function Vt(e, t) {
                        var n, r, a, i = e, s = null;
                        return xt(e) ? i = {
                            ms: e._milliseconds,
                            d: e._days,
                            M: e._months
                        } : d(e) ? (i = {},
                            t ? i[t] = e : i.milliseconds = e) : (s = qa.exec(e)) ? (n = "-" === s[1] ? -1 : 1,
                            i = {
                                y: 0,
                                d: v(s[ua]) * n,
                                h: v(s[_a]) * n,
                                m: v(s[la]) * n,
                                s: v(s[ca]) * n,
                                ms: v(Et(1e3 * s[ma])) * n
                            }) : (s = Xa.exec(e)) ? (n = "-" === s[1] ? -1 : 1,
                            i = {
                                y: Gt(s[2], n),
                                M: Gt(s[3], n),
                                w: Gt(s[4], n),
                                d: Gt(s[5], n),
                                h: Gt(s[6], n),
                                m: Gt(s[7], n),
                                s: Gt(s[8], n)
                            }) : null == i ? i = {} : "object" == typeof i && ("from"in i || "to"in i) && (a = Xt(Yt(i.from), Yt(i.to)),
                            i = {},
                            i.ms = a.milliseconds,
                            i.M = a.months),
                            r = new St(i),
                        xt(e) && l(e, "_locale") && (r._locale = e._locale),
                            r
                    }
                    function Gt(e, t) {
                        var n = e && parseFloat(e.replace(",", "."));
                        return (isNaN(n) ? 0 : n) * t
                    }
                    function qt(e, t) {
                        var n = {
                            milliseconds: 0,
                            months: 0
                        };
                        return n.months = t.month() - e.month() + 12 * (t.year() - e.year()),
                        e.clone().add(n.months, "M").isAfter(t) && --n.months,
                            n.milliseconds = +t - +e.clone().add(n.months, "M"),
                            n
                    }
                    function Xt(e, t) {
                        var n;
                        return e.isValid() && t.isValid() ? (t = Ot(t, e),
                            e.isBefore(t) ? n = qt(e, t) : (n = qt(t, e),
                                n.milliseconds = -n.milliseconds,
                                n.months = -n.months),
                            n) : {
                            milliseconds: 0,
                            months: 0
                        }
                    }
                    function Kt(e, t) {
                        return function(n, r) {
                            var a, i;
                            return null === r || isNaN(+r) || (T(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),
                                i = n,
                                n = r,
                                r = i),
                                n = "string" == typeof n ? +n : n,
                                a = Vt(n, r),
                                $t(this, a, e),
                                this
                        }
                    }
                    function $t(e, n, r, a) {
                        var i = n._milliseconds
                            , s = Et(n._days)
                            , o = Et(n._months);
                        e.isValid() && (a = null == a || a,
                        i && e._d.setTime(e._d.valueOf() + i * r),
                        s && U(e, "Date", B(e, "Date") + s * r),
                        o && le(e, B(e, "Month") + o * r),
                        a && t.updateOffset(e, s || o))
                    }
                    function Zt(e, t) {
                        var n = e.diff(t, "days", !0);
                        return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse"
                    }
                    function Qt(e, n) {
                        var r = e || Yt()
                            , a = Ot(r, this).startOf("day")
                            , i = t.calendarFormat(this, a) || "sameElse"
                            , s = n && (D(n[i]) ? n[i].call(this, r) : n[i]);
                        return this.format(s || this.localeData().calendar(i, this, Yt(r)))
                    }
                    function en() {
                        return new L(this)
                    }
                    function tn(e, t) {
                        var n = g(e) ? e : Yt(e);
                        return !(!this.isValid() || !n.isValid()) && (t = R(o(t) ? "millisecond" : t),
                            "millisecond" === t ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf())
                    }
                    function nn(e, t) {
                        var n = g(e) ? e : Yt(e);
                        return !(!this.isValid() || !n.isValid()) && (t = R(o(t) ? "millisecond" : t),
                            "millisecond" === t ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf())
                    }
                    function rn(e, t, n, r) {
                        return r = r || "()",
                        ("(" === r[0] ? this.isAfter(e, n) : !this.isBefore(e, n)) && (")" === r[1] ? this.isBefore(t, n) : !this.isAfter(t, n))
                    }
                    function an(e, t) {
                        var n, r = g(e) ? e : Yt(e);
                        return !(!this.isValid() || !r.isValid()) && (t = R(t || "millisecond"),
                            "millisecond" === t ? this.valueOf() === r.valueOf() : (n = r.valueOf(),
                            this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf()))
                    }
                    function sn(e, t) {
                        return this.isSame(e, t) || this.isAfter(e, t)
                    }
                    function on(e, t) {
                        return this.isSame(e, t) || this.isBefore(e, t)
                    }
                    function dn(e, t, n) {
                        var r, a, i, s;
                        return this.isValid() ? (r = Ot(e, this),
                            r.isValid() ? (a = 6e4 * (r.utcOffset() - this.utcOffset()),
                                t = R(t),
                                "year" === t || "month" === t || "quarter" === t ? (s = un(this, r),
                                    "quarter" === t ? s /= 3 : "year" === t && (s /= 12)) : (i = this - r,
                                    s = "second" === t ? i / 1e3 : "minute" === t ? i / 6e4 : "hour" === t ? i / 36e5 : "day" === t ? (i - a) / 864e5 : "week" === t ? (i - a) / 6048e5 : i),
                                n ? s : Y(s)) : NaN) : NaN
                    }
                    function un(e, t) {
                        var n, r, a = 12 * (t.year() - e.year()) + (t.month() - e.month()), i = e.clone().add(a, "months");
                        return t - i < 0 ? (n = e.clone().add(a - 1, "months"),
                            r = (t - i) / (i - n)) : (n = e.clone().add(a + 1, "months"),
                            r = (t - i) / (n - i)),
                        -(a + r) || 0
                    }
                    function _n() {
                        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
                    }
                    function ln() {
                        if (!this.isValid())
                            return null;
                        var e = this.clone().utc();
                        return e.year() < 0 || e.year() > 9999 ? $(e, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : D(Date.prototype.toISOString) ? this.toDate().toISOString() : $(e, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
                    }
                    function cn() {
                        if (!this.isValid())
                            return "moment.invalid(/* " + this._i + " */)";
                        var e = "moment"
                            , t = "";
                        this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone",
                            t = "Z");
                        var n = "[" + e + '("]'
                            , r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY"
                            , a = "-MM-DD[T]HH:mm:ss.SSS"
                            , i = t + '[")]';
                        return this.format(n + r + a + i)
                    }
                    function mn(e) {
                        e || (e = this.isUtc() ? t.defaultFormatUtc : t.defaultFormat);
                        var n = $(this, e);
                        return this.localeData().postformat(n)
                    }
                    function hn(e, t) {
                        return this.isValid() && (g(e) && e.isValid() || Yt(e).isValid()) ? Vt({
                            to: this,
                            from: e
                        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
                    }
                    function fn(e) {
                        return this.from(Yt(), e)
                    }
                    function pn(e, t) {
                        return this.isValid() && (g(e) && e.isValid() || Yt(e).isValid()) ? Vt({
                            from: this,
                            to: e
                        }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
                    }
                    function Mn(e) {
                        return this.to(Yt(), e)
                    }
                    function yn(e) {
                        var t;
                        return void 0 === e ? this._locale._abbr : (t = rt(e),
                        null != t && (this._locale = t),
                            this)
                    }
                    function Ln() {
                        return this._locale
                    }
                    function gn(e) {
                        switch (e = R(e)) {
                            case "year":
                                this.month(0);
                            case "quarter":
                            case "month":
                                this.date(1);
                            case "week":
                            case "isoWeek":
                            case "day":
                            case "date":
                                this.hours(0);
                            case "hour":
                                this.minutes(0);
                            case "minute":
                                this.seconds(0);
                            case "second":
                                this.milliseconds(0)
                        }
                        return "week" === e && this.weekday(0),
                        "isoWeek" === e && this.isoWeekday(1),
                        "quarter" === e && this.month(3 * Math.floor(this.month() / 3)),
                            this
                    }
                    function Yn(e) {
                        return e = R(e),
                            void 0 === e || "millisecond" === e ? this : ("date" === e && (e = "day"),
                                this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"))
                    }
                    function vn() {
                        return this._d.valueOf() - 6e4 * (this._offset || 0)
                    }
                    function wn() {
                        return Math.floor(this.valueOf() / 1e3)
                    }
                    function kn() {
                        return new Date(this.valueOf())
                    }
                    function bn() {
                        var e = this;
                        return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
                    }
                    function Tn() {
                        var e = this;
                        return {
                            years: e.year(),
                            months: e.month(),
                            date: e.date(),
                            hours: e.hours(),
                            minutes: e.minutes(),
                            seconds: e.seconds(),
                            milliseconds: e.milliseconds()
                        }
                    }
                    function Dn() {
                        return this.isValid() ? this.toISOString() : null
                    }
                    function Sn() {
                        return p(this)
                    }
                    function xn() {
                        return c({}, f(this))
                    }
                    function En() {
                        return f(this).overflow
                    }
                    function Hn() {
                        return {
                            input: this._i,
                            format: this._f,
                            locale: this._locale,
                            isUTC: this._isUTC,
                            strict: this._strict
                        }
                    }
                    function jn(e, t) {
                        q(0, [e, e.length], 0, t)
                    }
                    function On(e) {
                        return Wn.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
                    }
                    function An(e) {
                        return Wn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
                    }
                    function Pn() {
                        return be(this.year(), 1, 4)
                    }
                    function In() {
                        var e = this.localeData()._week;
                        return be(this.year(), e.dow, e.doy)
                    }
                    function Wn(e, t, n, r, a) {
                        var i;
                        return null == e ? ke(this, r, a).year : (i = be(e, r, a),
                        t > i && (t = i),
                            Rn.call(this, e, t, n, r, a))
                    }
                    function Rn(e, t, n, r, a) {
                        var i = we(e, t, n, r, a)
                            , s = Ye(i.year, 0, i.dayOfYear);
                        return this.year(s.getUTCFullYear()),
                            this.month(s.getUTCMonth()),
                            this.date(s.getUTCDate()),
                            this
                    }
                    function Nn(e) {
                        return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
                    }
                    function Fn(e) {
                        var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
                        return null == e ? t : this.add(e - t, "d")
                    }
                    function Cn(e, t) {
                        t[ma] = v(1e3 * ("0." + e))
                    }
                    function zn() {
                        return this._isUTC ? "UTC" : ""
                    }
                    function Bn() {
                        return this._isUTC ? "Coordinated Universal Time" : ""
                    }
                    function Un(e) {
                        return Yt(1e3 * e)
                    }
                    function Jn() {
                        return Yt.apply(null, arguments).parseZone()
                    }
                    function Vn(e) {
                        return e
                    }
                    function Gn(e, t, n, r) {
                        var a = rt()
                            , i = m().set(r, t);
                        return a[n](i, e)
                    }
                    function qn(e, t, n) {
                        if (d(e) && (t = e,
                            e = void 0),
                            e = e || "",
                        null != t)
                            return Gn(e, t, n, "month");
                        var r, a = [];
                        for (r = 0; r < 12; r++)
                            a[r] = Gn(e, r, n, "month");
                        return a
                    }
                    function Xn(e, t, n, r) {
                        "boolean" == typeof e ? (d(t) && (n = t,
                            t = void 0),
                            t = t || "") : (t = e,
                            n = t,
                            e = !1,
                        d(t) && (n = t,
                            t = void 0),
                            t = t || "");
                        var a = rt()
                            , i = e ? a._week.dow : 0;
                        if (null != n)
                            return Gn(t, (n + i) % 7, r, "day");
                        var s, o = [];
                        for (s = 0; s < 7; s++)
                            o[s] = Gn(t, (s + i) % 7, r, "day");
                        return o
                    }
                    function Kn(e, t) {
                        return qn(e, t, "months")
                    }
                    function $n(e, t) {
                        return qn(e, t, "monthsShort")
                    }
                    function Zn(e, t, n) {
                        return Xn(e, t, n, "weekdays")
                    }
                    function Qn(e, t, n) {
                        return Xn(e, t, n, "weekdaysShort")
                    }
                    function er(e, t, n) {
                        return Xn(e, t, n, "weekdaysMin")
                    }
                    function tr() {
                        var e = this._data;
                        return this._milliseconds = si(this._milliseconds),
                            this._days = si(this._days),
                            this._months = si(this._months),
                            e.milliseconds = si(e.milliseconds),
                            e.seconds = si(e.seconds),
                            e.minutes = si(e.minutes),
                            e.hours = si(e.hours),
                            e.months = si(e.months),
                            e.years = si(e.years),
                            this
                    }
                    function nr(e, t, n, r) {
                        var a = Vt(t, n);
                        return e._milliseconds += r * a._milliseconds,
                            e._days += r * a._days,
                            e._months += r * a._months,
                            e._bubble()
                    }
                    function rr(e, t) {
                        return nr(this, e, t, 1)
                    }
                    function ar(e, t) {
                        return nr(this, e, t, -1)
                    }
                    function ir(e) {
                        return e < 0 ? Math.floor(e) : Math.ceil(e)
                    }
                    function sr() {
                        var e, t, n, r, a, i = this._milliseconds, s = this._days, o = this._months, d = this._data;
                        return i >= 0 && s >= 0 && o >= 0 || i <= 0 && s <= 0 && o <= 0 || (i += 864e5 * ir(dr(o) + s),
                            s = 0,
                            o = 0),
                            d.milliseconds = i % 1e3,
                            e = Y(i / 1e3),
                            d.seconds = e % 60,
                            t = Y(e / 60),
                            d.minutes = t % 60,
                            n = Y(t / 60),
                            d.hours = n % 24,
                            s += Y(n / 24),
                            a = Y(or(s)),
                            o += a,
                            s -= ir(dr(a)),
                            r = Y(o / 12),
                            o %= 12,
                            d.days = s,
                            d.months = o,
                            d.years = r,
                            this
                    }
                    function or(e) {
                        return 4800 * e / 146097
                    }
                    function dr(e) {
                        return 146097 * e / 4800
                    }
                    function ur(e) {
                        if (!this.isValid())
                            return NaN;
                        var t, n, r = this._milliseconds;
                        if (e = R(e),
                        "month" === e || "year" === e)
                            return t = this._days + r / 864e5,
                                n = this._months + or(t),
                                "month" === e ? n : n / 12;
                        switch (t = this._days + Math.round(dr(this._months)),
                            e) {
                            case "week":
                                return t / 7 + r / 6048e5;
                            case "day":
                                return t + r / 864e5;
                            case "hour":
                                return 24 * t + r / 36e5;
                            case "minute":
                                return 1440 * t + r / 6e4;
                            case "second":
                                return 86400 * t + r / 1e3;
                            case "millisecond":
                                return Math.floor(864e5 * t) + r;
                            default:
                                throw new Error("Unknown unit " + e)
                        }
                    }
                    function _r() {
                        return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * v(this._months / 12) : NaN
                    }
                    function lr(e) {
                        return function() {
                            return this.as(e)
                        }
                    }
                    function cr(e) {
                        return e = R(e),
                            this.isValid() ? this[e + "s"]() : NaN
                    }
                    function mr(e) {
                        return function() {
                            return this.isValid() ? this._data[e] : NaN
                        }
                    }
                    function hr() {
                        return Y(this.days() / 7)
                    }
                    function fr(e, t, n, r, a) {
                        return a.relativeTime(t || 1, !!n, e, r)
                    }
                    function pr(e, t, n) {
                        var r = Vt(e).abs()
                            , a = vi(r.as("s"))
                            , i = vi(r.as("m"))
                            , s = vi(r.as("h"))
                            , o = vi(r.as("d"))
                            , d = vi(r.as("M"))
                            , u = vi(r.as("y"))
                            , _ = a <= wi.ss && ["s", a] || a < wi.s && ["ss", a] || i <= 1 && ["m"] || i < wi.m && ["mm", i] || s <= 1 && ["h"] || s < wi.h && ["hh", s] || o <= 1 && ["d"] || o < wi.d && ["dd", o] || d <= 1 && ["M"] || d < wi.M && ["MM", d] || u <= 1 && ["y"] || ["yy", u];
                        return _[2] = t,
                            _[3] = +e > 0,
                            _[4] = n,
                            fr.apply(null, _)
                    }
                    function Mr(e) {
                        return void 0 === e ? vi : "function" == typeof e && (vi = e,
                            !0)
                    }
                    function yr(e, t) {
                        return void 0 !== wi[e] && (void 0 === t ? wi[e] : (wi[e] = t,
                        "s" === e && (wi.ss = t - 1),
                            !0))
                    }
                    function Lr(e) {
                        if (!this.isValid())
                            return this.localeData().invalidDate();
                        var t = this.localeData()
                            , n = pr(this, !e, t);
                        return e && (n = t.pastFuture(+this, n)),
                            t.postformat(n)
                    }
                    function gr() {
                        if (!this.isValid())
                            return this.localeData().invalidDate();
                        var e, t, n, r = ki(this._milliseconds) / 1e3, a = ki(this._days), i = ki(this._months);
                        e = Y(r / 60),
                            t = Y(e / 60),
                            r %= 60,
                            e %= 60,
                            n = Y(i / 12),
                            i %= 12;
                        var s = n
                            , o = i
                            , d = a
                            , u = t
                            , _ = e
                            , l = r
                            , c = this.asSeconds();
                        return c ? (c < 0 ? "-" : "") + "P" + (s ? s + "Y" : "") + (o ? o + "M" : "") + (d ? d + "D" : "") + (u || _ || l ? "T" : "") + (u ? u + "H" : "") + (_ ? _ + "M" : "") + (l ? l + "S" : "") : "P0D"
                    }
                    var Yr, vr;
                    vr = Array.prototype.some ? Array.prototype.some : function(e) {
                        for (var t = Object(this), n = t.length >>> 0, r = 0; r < n; r++)
                            if (r in t && e.call(this, t[r], r, t))
                                return !0;
                        return !1
                    }
                    ;
                    var wr = vr
                        , kr = t.momentProperties = []
                        , br = !1
                        , Tr = {};
                    t.suppressDeprecationWarnings = !1,
                        t.deprecationHandler = null;
                    var Dr;
                    Dr = Object.keys ? Object.keys : function(e) {
                        var t, n = [];
                        for (t in e)
                            l(e, t) && n.push(t);
                        return n
                    }
                    ;
                    var Sr, xr = Dr, Er = {
                        sameDay: "[Today at] LT",
                        nextDay: "[Tomorrow at] LT",
                        nextWeek: "dddd [at] LT",
                        lastDay: "[Yesterday at] LT",
                        lastWeek: "[Last] dddd [at] LT",
                        sameElse: "L"
                    }, Hr = {
                        LTS: "h:mm:ss A",
                        LT: "h:mm A",
                        L: "MM/DD/YYYY",
                        LL: "MMMM D, YYYY",
                        LLL: "MMMM D, YYYY h:mm A",
                        LLLL: "dddd, MMMM D, YYYY h:mm A"
                    }, jr = "Invalid date", Or = "%d", Ar = /\d{1,2}/, Pr = {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        ss: "%d seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    }, Ir = {}, Wr = {}, Rr = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, Nr = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Fr = {}, Cr = {}, zr = /\d/, Br = /\d\d/, Ur = /\d{3}/, Jr = /\d{4}/, Vr = /[+-]?\d{6}/, Gr = /\d\d?/, qr = /\d\d\d\d?/, Xr = /\d\d\d\d\d\d?/, Kr = /\d{1,3}/, $r = /\d{1,4}/, Zr = /[+-]?\d{1,6}/, Qr = /\d+/, ea = /[+-]?\d+/, ta = /Z|[+-]\d\d:?\d\d/gi, na = /Z|[+-]\d\d(?::?\d\d)?/gi, ra = /[+-]?\d+(\.\d{1,3})?/, aa = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, ia = {}, sa = {}, oa = 0, da = 1, ua = 2, _a = 3, la = 4, ca = 5, ma = 6, ha = 7, fa = 8;
                    Sr = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
                        var t;
                        for (t = 0; t < this.length; ++t)
                            if (this[t] === e)
                                return t;
                        return -1
                    }
                    ;
                    var pa = Sr;
                    q("M", ["MM", 2], "Mo", function() {
                        return this.month() + 1
                    }),
                        q("MMM", 0, 0, function(e) {
                            return this.localeData().monthsShort(this, e)
                        }),
                        q("MMMM", 0, 0, function(e) {
                            return this.localeData().months(this, e)
                        }),
                        W("month", "M"),
                        F("month", 8),
                        Q("M", Gr),
                        Q("MM", Gr, Br),
                        Q("MMM", function(e, t) {
                            return t.monthsShortRegex(e)
                        }),
                        Q("MMMM", function(e, t) {
                            return t.monthsRegex(e)
                        }),
                        re(["M", "MM"], function(e, t) {
                            t[da] = v(e) - 1
                        }),
                        re(["MMM", "MMMM"], function(e, t, n, r) {
                            var a = n._locale.monthsParse(e, r, n._strict);
                            null != a ? t[da] = a : f(n).invalidMonth = e
                        });
                    var Ma = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/
                        , ya = "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
                        , La = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_")
                        , ga = aa
                        , Ya = aa;
                    q("Y", 0, 0, function() {
                        var e = this.year();
                        return e <= 9999 ? "" + e : "+" + e
                    }),
                        q(0, ["YY", 2], 0, function() {
                            return this.year() % 100
                        }),
                        q(0, ["YYYY", 4], 0, "year"),
                        q(0, ["YYYYY", 5], 0, "year"),
                        q(0, ["YYYYYY", 6, !0], 0, "year"),
                        W("year", "y"),
                        F("year", 1),
                        Q("Y", ea),
                        Q("YY", Gr, Br),
                        Q("YYYY", $r, Jr),
                        Q("YYYYY", Zr, Vr),
                        Q("YYYYYY", Zr, Vr),
                        re(["YYYYY", "YYYYYY"], oa),
                        re("YYYY", function(e, n) {
                            n[oa] = 2 === e.length ? t.parseTwoDigitYear(e) : v(e)
                        }),
                        re("YY", function(e, n) {
                            n[oa] = t.parseTwoDigitYear(e)
                        }),
                        re("Y", function(e, t) {
                            t[oa] = parseInt(e, 10)
                        }),
                        t.parseTwoDigitYear = function(e) {
                            return v(e) + (v(e) > 68 ? 1900 : 2e3)
                        }
                    ;
                    var va = z("FullYear", !0);
                    q("w", ["ww", 2], "wo", "week"),
                        q("W", ["WW", 2], "Wo", "isoWeek"),
                        W("week", "w"),
                        W("isoWeek", "W"),
                        F("week", 5),
                        F("isoWeek", 5),
                        Q("w", Gr),
                        Q("ww", Gr, Br),
                        Q("W", Gr),
                        Q("WW", Gr, Br),
                        ae(["w", "ww", "W", "WW"], function(e, t, n, r) {
                            t[r.substr(0, 1)] = v(e)
                        });
                    var wa = {
                        dow: 0,
                        doy: 6
                    };
                    q("d", 0, "do", "day"),
                        q("dd", 0, 0, function(e) {
                            return this.localeData().weekdaysMin(this, e)
                        }),
                        q("ddd", 0, 0, function(e) {
                            return this.localeData().weekdaysShort(this, e)
                        }),
                        q("dddd", 0, 0, function(e) {
                            return this.localeData().weekdays(this, e)
                        }),
                        q("e", 0, 0, "weekday"),
                        q("E", 0, 0, "isoWeekday"),
                        W("day", "d"),
                        W("weekday", "e"),
                        W("isoWeekday", "E"),
                        F("day", 11),
                        F("weekday", 11),
                        F("isoWeekday", 11),
                        Q("d", Gr),
                        Q("e", Gr),
                        Q("E", Gr),
                        Q("dd", function(e, t) {
                            return t.weekdaysMinRegex(e)
                        }),
                        Q("ddd", function(e, t) {
                            return t.weekdaysShortRegex(e)
                        }),
                        Q("dddd", function(e, t) {
                            return t.weekdaysRegex(e)
                        }),
                        ae(["dd", "ddd", "dddd"], function(e, t, n, r) {
                            var a = n._locale.weekdaysParse(e, r, n._strict);
                            null != a ? t.d = a : f(n).invalidWeekday = e
                        }),
                        ae(["d", "e", "E"], function(e, t, n, r) {
                            t[r] = v(e)
                        });
                    var ka = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_")
                        , ba = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_")
                        , Ta = "Su_Mo_Tu_We_Th_Fr_Sa".split("_")
                        , Da = aa
                        , Sa = aa
                        , xa = aa;
                    q("H", ["HH", 2], 0, "hour"),
                        q("h", ["hh", 2], 0, Je),
                        q("k", ["kk", 2], 0, Ve),
                        q("hmm", 0, 0, function() {
                            return "" + Je.apply(this) + G(this.minutes(), 2)
                        }),
                        q("hmmss", 0, 0, function() {
                            return "" + Je.apply(this) + G(this.minutes(), 2) + G(this.seconds(), 2)
                        }),
                        q("Hmm", 0, 0, function() {
                            return "" + this.hours() + G(this.minutes(), 2)
                        }),
                        q("Hmmss", 0, 0, function() {
                            return "" + this.hours() + G(this.minutes(), 2) + G(this.seconds(), 2)
                        }),
                        Ge("a", !0),
                        Ge("A", !1),
                        W("hour", "h"),
                        F("hour", 13),
                        Q("a", qe),
                        Q("A", qe),
                        Q("H", Gr),
                        Q("h", Gr),
                        Q("k", Gr),
                        Q("HH", Gr, Br),
                        Q("hh", Gr, Br),
                        Q("kk", Gr, Br),
                        Q("hmm", qr),
                        Q("hmmss", Xr),
                        Q("Hmm", qr),
                        Q("Hmmss", Xr),
                        re(["H", "HH"], _a),
                        re(["k", "kk"], function(e, t, n) {
                            var r = v(e);
                            t[_a] = 24 === r ? 0 : r
                        }),
                        re(["a", "A"], function(e, t, n) {
                            n._isPm = n._locale.isPM(e),
                                n._meridiem = e
                        }),
                        re(["h", "hh"], function(e, t, n) {
                            t[_a] = v(e),
                                f(n).bigHour = !0
                        }),
                        re("hmm", function(e, t, n) {
                            var r = e.length - 2;
                            t[_a] = v(e.substr(0, r)),
                                t[la] = v(e.substr(r)),
                                f(n).bigHour = !0
                        }),
                        re("hmmss", function(e, t, n) {
                            var r = e.length - 4
                                , a = e.length - 2;
                            t[_a] = v(e.substr(0, r)),
                                t[la] = v(e.substr(r, 2)),
                                t[ca] = v(e.substr(a)),
                                f(n).bigHour = !0
                        }),
                        re("Hmm", function(e, t, n) {
                            var r = e.length - 2;
                            t[_a] = v(e.substr(0, r)),
                                t[la] = v(e.substr(r))
                        }),
                        re("Hmmss", function(e, t, n) {
                            var r = e.length - 4
                                , a = e.length - 2;
                            t[_a] = v(e.substr(0, r)),
                                t[la] = v(e.substr(r, 2)),
                                t[ca] = v(e.substr(a))
                        });
                    var Ea, Ha = /[ap]\.?m?\.?/i, ja = z("Hours", !0), Oa = {
                        calendar: Er,
                        longDateFormat: Hr,
                        invalidDate: jr,
                        ordinal: Or,
                        dayOfMonthOrdinalParse: Ar,
                        relativeTime: Pr,
                        months: ya,
                        monthsShort: La,
                        week: wa,
                        weekdays: ka,
                        weekdaysMin: Ta,
                        weekdaysShort: ba,
                        meridiemParse: Ha
                    }, Aa = {}, Pa = {}, Ia = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Wa = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, Ra = /Z|[+-]\d\d(?::?\d\d)?/, Na = [["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/], ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/], ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/], ["GGGG-[W]WW", /\d{4}-W\d\d/, !1], ["YYYY-DDD", /\d{4}-\d{3}/], ["YYYY-MM", /\d{4}-\d\d/, !1], ["YYYYYYMMDD", /[+-]\d{10}/], ["YYYYMMDD", /\d{8}/], ["GGGG[W]WWE", /\d{4}W\d{3}/], ["GGGG[W]WW", /\d{4}W\d{2}/, !1], ["YYYYDDD", /\d{7}/]], Fa = [["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/], ["HH:mm:ss", /\d\d:\d\d:\d\d/], ["HH:mm", /\d\d:\d\d/], ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/], ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/], ["HHmmss", /\d\d\d\d\d\d/], ["HHmm", /\d\d\d\d/], ["HH", /\d\d/]], Ca = /^\/?Date\((\-?\d+)/i, za = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;
                    t.createFromInputFallback = b("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
                        e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
                    }),
                        t.ISO_8601 = function() {}
                        ,
                        t.RFC_2822 = function() {}
                    ;
                    var Ba = b("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                        var e = Yt.apply(null, arguments);
                        return this.isValid() && e.isValid() ? e < this ? this : e : M()
                    })
                        , Ua = b("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
                        var e = Yt.apply(null, arguments);
                        return this.isValid() && e.isValid() ? e > this ? this : e : M()
                    })
                        , Ja = function() {
                        return Date.now ? Date.now() : +new Date
                    }
                        , Va = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
                    Ht("Z", ":"),
                        Ht("ZZ", ""),
                        Q("Z", na),
                        Q("ZZ", na),
                        re(["Z", "ZZ"], function(e, t, n) {
                            n._useUTC = !0,
                                n._tzm = jt(na, e)
                        });
                    var Ga = /([\+\-]|\d\d)/gi;
                    t.updateOffset = function() {}
                    ;
                    var qa = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/
                        , Xa = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
                    Vt.fn = St.prototype,
                        Vt.invalid = Dt;
                    var Ka = Kt(1, "add")
                        , $a = Kt(-1, "subtract");
                    t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ",
                        t.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
                    var Za = b("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
                        return void 0 === e ? this.localeData() : this.locale(e)
                    });
                    q(0, ["gg", 2], 0, function() {
                        return this.weekYear() % 100
                    }),
                        q(0, ["GG", 2], 0, function() {
                            return this.isoWeekYear() % 100
                        }),
                        jn("gggg", "weekYear"),
                        jn("ggggg", "weekYear"),
                        jn("GGGG", "isoWeekYear"),
                        jn("GGGGG", "isoWeekYear"),
                        W("weekYear", "gg"),
                        W("isoWeekYear", "GG"),
                        F("weekYear", 1),
                        F("isoWeekYear", 1),
                        Q("G", ea),
                        Q("g", ea),
                        Q("GG", Gr, Br),
                        Q("gg", Gr, Br),
                        Q("GGGG", $r, Jr),
                        Q("gggg", $r, Jr),
                        Q("GGGGG", Zr, Vr),
                        Q("ggggg", Zr, Vr),
                        ae(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, r) {
                            t[r.substr(0, 2)] = v(e)
                        }),
                        ae(["gg", "GG"], function(e, n, r, a) {
                            n[a] = t.parseTwoDigitYear(e)
                        }),
                        q("Q", 0, "Qo", "quarter"),
                        W("quarter", "Q"),
                        F("quarter", 7),
                        Q("Q", zr),
                        re("Q", function(e, t) {
                            t[da] = 3 * (v(e) - 1)
                        }),
                        q("D", ["DD", 2], "Do", "date"),
                        W("date", "D"),
                        F("date", 9),
                        Q("D", Gr),
                        Q("DD", Gr, Br),
                        Q("Do", function(e, t) {
                            return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
                        }),
                        re(["D", "DD"], ua),
                        re("Do", function(e, t) {
                            t[ua] = v(e.match(Gr)[0], 10)
                        });
                    var Qa = z("Date", !0);
                    q("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
                        W("dayOfYear", "DDD"),
                        F("dayOfYear", 4),
                        Q("DDD", Kr),
                        Q("DDDD", Ur),
                        re(["DDD", "DDDD"], function(e, t, n) {
                            n._dayOfYear = v(e)
                        }),
                        q("m", ["mm", 2], 0, "minute"),
                        W("minute", "m"),
                        F("minute", 14),
                        Q("m", Gr),
                        Q("mm", Gr, Br),
                        re(["m", "mm"], la);
                    var ei = z("Minutes", !1);
                    q("s", ["ss", 2], 0, "second"),
                        W("second", "s"),
                        F("second", 15),
                        Q("s", Gr),
                        Q("ss", Gr, Br),
                        re(["s", "ss"], ca);
                    var ti = z("Seconds", !1);
                    q("S", 0, 0, function() {
                        return ~~(this.millisecond() / 100)
                    }),
                        q(0, ["SS", 2], 0, function() {
                            return ~~(this.millisecond() / 10)
                        }),
                        q(0, ["SSS", 3], 0, "millisecond"),
                        q(0, ["SSSS", 4], 0, function() {
                            return 10 * this.millisecond()
                        }),
                        q(0, ["SSSSS", 5], 0, function() {
                            return 100 * this.millisecond()
                        }),
                        q(0, ["SSSSSS", 6], 0, function() {
                            return 1e3 * this.millisecond()
                        }),
                        q(0, ["SSSSSSS", 7], 0, function() {
                            return 1e4 * this.millisecond()
                        }),
                        q(0, ["SSSSSSSS", 8], 0, function() {
                            return 1e5 * this.millisecond()
                        }),
                        q(0, ["SSSSSSSSS", 9], 0, function() {
                            return 1e6 * this.millisecond()
                        }),
                        W("millisecond", "ms"),
                        F("millisecond", 16),
                        Q("S", Kr, zr),
                        Q("SS", Kr, Br),
                        Q("SSS", Kr, Ur);
                    var ni;
                    for (ni = "SSSS"; ni.length <= 9; ni += "S")
                        Q(ni, Qr);
                    for (ni = "S"; ni.length <= 9; ni += "S")
                        re(ni, Cn);
                    var ri = z("Milliseconds", !1);
                    q("z", 0, 0, "zoneAbbr"),
                        q("zz", 0, 0, "zoneName");
                    var ai = L.prototype;
                    ai.add = Ka,
                        ai.calendar = Qt,
                        ai.clone = en,
                        ai.diff = dn,
                        ai.endOf = Yn,
                        ai.format = mn,
                        ai.from = hn,
                        ai.fromNow = fn,
                        ai.to = pn,
                        ai.toNow = Mn,
                        ai.get = J,
                        ai.invalidAt = En,
                        ai.isAfter = tn,
                        ai.isBefore = nn,
                        ai.isBetween = rn,
                        ai.isSame = an,
                        ai.isSameOrAfter = sn,
                        ai.isSameOrBefore = on,
                        ai.isValid = Sn,
                        ai.lang = Za,
                        ai.locale = yn,
                        ai.localeData = Ln,
                        ai.max = Ua,
                        ai.min = Ba,
                        ai.parsingFlags = xn,
                        ai.set = V,
                        ai.startOf = gn,
                        ai.subtract = $a,
                        ai.toArray = bn,
                        ai.toObject = Tn,
                        ai.toDate = kn,
                        ai.toISOString = ln,
                        ai.inspect = cn,
                        ai.toJSON = Dn,
                        ai.toString = _n,
                        ai.unix = wn,
                        ai.valueOf = vn,
                        ai.creationData = Hn,
                        ai.year = va,
                        ai.isLeapYear = Le,
                        ai.weekYear = On,
                        ai.isoWeekYear = An,
                        ai.quarter = ai.quarters = Nn,
                        ai.month = ce,
                        ai.daysInMonth = me,
                        ai.week = ai.weeks = xe,
                        ai.isoWeek = ai.isoWeeks = Ee,
                        ai.weeksInYear = In,
                        ai.isoWeeksInYear = Pn,
                        ai.date = Qa,
                        ai.day = ai.days = Re,
                        ai.weekday = Ne,
                        ai.isoWeekday = Fe,
                        ai.dayOfYear = Fn,
                        ai.hour = ai.hours = ja,
                        ai.minute = ai.minutes = ei,
                        ai.second = ai.seconds = ti,
                        ai.millisecond = ai.milliseconds = ri,
                        ai.utcOffset = Pt,
                        ai.utc = Wt,
                        ai.local = Rt,
                        ai.parseZone = Nt,
                        ai.hasAlignedHourOffset = Ft,
                        ai.isDST = Ct,
                        ai.isLocal = Bt,
                        ai.isUtcOffset = Ut,
                        ai.isUtc = Jt,
                        ai.isUTC = Jt,
                        ai.zoneAbbr = zn,
                        ai.zoneName = Bn,
                        ai.dates = b("dates accessor is deprecated. Use date instead.", Qa),
                        ai.months = b("months accessor is deprecated. Use month instead", ce),
                        ai.years = b("years accessor is deprecated. Use year instead", va),
                        ai.zone = b("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", It),
                        ai.isDSTShifted = b("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", zt);
                    var ii = E.prototype;
                    ii.calendar = H,
                        ii.longDateFormat = j,
                        ii.invalidDate = O,
                        ii.ordinal = A,
                        ii.preparse = Vn,
                        ii.postformat = Vn,
                        ii.relativeTime = P,
                        ii.pastFuture = I,
                        ii.set = S,
                        ii.months = oe,
                        ii.monthsShort = de,
                        ii.monthsParse = _e,
                        ii.monthsRegex = fe,
                        ii.monthsShortRegex = he,
                        ii.week = Te,
                        ii.firstDayOfYear = Se,
                        ii.firstDayOfWeek = De,
                        ii.weekdays = Oe,
                        ii.weekdaysMin = Pe,
                        ii.weekdaysShort = Ae,
                        ii.weekdaysParse = We,
                        ii.weekdaysRegex = Ce,
                        ii.weekdaysShortRegex = ze,
                        ii.weekdaysMinRegex = Be,
                        ii.isPM = Xe,
                        ii.meridiem = Ke,
                        et("en", {
                            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                            ordinal: function(e) {
                                var t = e % 10
                                    , n = 1 === v(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                                return e + n
                            }
                        }),
                        t.lang = b("moment.lang is deprecated. Use moment.locale instead.", et),
                        t.langData = b("moment.langData is deprecated. Use moment.localeData instead.", rt);
                    var si = Math.abs
                        , oi = lr("ms")
                        , di = lr("s")
                        , ui = lr("m")
                        , _i = lr("h")
                        , li = lr("d")
                        , ci = lr("w")
                        , mi = lr("M")
                        , hi = lr("y")
                        , fi = mr("milliseconds")
                        , pi = mr("seconds")
                        , Mi = mr("minutes")
                        , yi = mr("hours")
                        , Li = mr("days")
                        , gi = mr("months")
                        , Yi = mr("years")
                        , vi = Math.round
                        , wi = {
                        ss: 44,
                        s: 45,
                        m: 45,
                        h: 22,
                        d: 26,
                        M: 11
                    }
                        , ki = Math.abs
                        , bi = St.prototype;
                    return bi.isValid = Tt,
                        bi.abs = tr,
                        bi.add = rr,
                        bi.subtract = ar,
                        bi.as = ur,
                        bi.asMilliseconds = oi,
                        bi.asSeconds = di,
                        bi.asMinutes = ui,
                        bi.asHours = _i,
                        bi.asDays = li,
                        bi.asWeeks = ci,
                        bi.asMonths = mi,
                        bi.asYears = hi,
                        bi.valueOf = _r,
                        bi._bubble = sr,
                        bi.get = cr,
                        bi.milliseconds = fi,
                        bi.seconds = pi,
                        bi.minutes = Mi,
                        bi.hours = yi,
                        bi.days = Li,
                        bi.weeks = hr,
                        bi.months = gi,
                        bi.years = Yi,
                        bi.humanize = Lr,
                        bi.toISOString = gr,
                        bi.toString = gr,
                        bi.toJSON = gr,
                        bi.locale = yn,
                        bi.localeData = Ln,
                        bi.toIsoString = b("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", gr),
                        bi.lang = Za,
                        q("X", 0, 0, "unix"),
                        q("x", 0, 0, "valueOf"),
                        Q("x", ea),
                        Q("X", ra),
                        re("X", function(e, t, n) {
                            n._d = new Date(1e3 * parseFloat(e, 10))
                        }),
                        re("x", function(e, t, n) {
                            n._d = new Date(v(e))
                        }),
                        t.version = "2.18.1",
                        r(Yt),
                        t.fn = ai,
                        t.min = wt,
                        t.max = kt,
                        t.now = Ja,
                        t.utc = m,
                        t.unix = Un,
                        t.months = Kn,
                        t.isDate = u,
                        t.locale = et,
                        t.invalid = M,
                        t.duration = Vt,
                        t.isMoment = g,
                        t.weekdays = Zn,
                        t.parseZone = Jn,
                        t.localeData = rt,
                        t.isDuration = xt,
                        t.monthsShort = $n,
                        t.weekdaysMin = er,
                        t.defineLocale = tt,
                        t.updateLocale = nt,
                        t.locales = at,
                        t.weekdaysShort = Qn,
                        t.normalizeUnits = R,
                        t.relativeTimeRounding = Mr,
                        t.relativeTimeThreshold = yr,
                        t.calendarFormat = Zt,
                        t.prototype = ai,
                        t
                })
            }
        ).call(t, n(7)(e))
    }
    , function(e, t) {
        e.exports = function(e) {
            return e.webpackPolyfill || (e.deprecate = function() {}
                ,
                e.paths = [],
                e.children = [],
                e.webpackPolyfill = 1),
                e
        }
    }
    , function(e, t, n) {
        function r(e) {
            return n(a(e))
        }
        function a(e) {
            return i[e] || function() {
                throw new Error("Cannot find module '" + e + "'.")
            }()
        }
        var i = {
            "./af": 9,
            "./af.js": 9,
            "./ar": 10,
            "./ar-dz": 11,
            "./ar-dz.js": 11,
            "./ar-kw": 12,
            "./ar-kw.js": 12,
            "./ar-ly": 13,
            "./ar-ly.js": 13,
            "./ar-ma": 14,
            "./ar-ma.js": 14,
            "./ar-sa": 15,
            "./ar-sa.js": 15,
            "./ar-tn": 16,
            "./ar-tn.js": 16,
            "./ar.js": 10,
            "./az": 17,
            "./az.js": 17,
            "./be": 18,
            "./be.js": 18,
            "./bg": 19,
            "./bg.js": 19,
            "./bn": 20,
            "./bn.js": 20,
            "./bo": 21,
            "./bo.js": 21,
            "./br": 22,
            "./br.js": 22,
            "./bs": 23,
            "./bs.js": 23,
            "./ca": 24,
            "./ca.js": 24,
            "./cs": 25,
            "./cs.js": 25,
            "./cv": 26,
            "./cv.js": 26,
            "./cy": 27,
            "./cy.js": 27,
            "./da": 28,
            "./da.js": 28,
            "./de": 29,
            "./de-at": 30,
            "./de-at.js": 30,
            "./de-ch": 31,
            "./de-ch.js": 31,
            "./de.js": 29,
            "./dv": 32,
            "./dv.js": 32,
            "./el": 33,
            "./el.js": 33,
            "./en-au": 34,
            "./en-au.js": 34,
            "./en-ca": 35,
            "./en-ca.js": 35,
            "./en-gb": 36,
            "./en-gb.js": 36,
            "./en-ie": 37,
            "./en-ie.js": 37,
            "./en-nz": 38,
            "./en-nz.js": 38,
            "./eo": 39,
            "./eo.js": 39,
            "./es": 40,
            "./es-do": 41,
            "./es-do.js": 41,
            "./es.js": 40,
            "./et": 42,
            "./et.js": 42,
            "./eu": 43,
            "./eu.js": 43,
            "./fa": 44,
            "./fa.js": 44,
            "./fi": 45,
            "./fi.js": 45,
            "./fo": 46,
            "./fo.js": 46,
            "./fr": 47,
            "./fr-ca": 48,
            "./fr-ca.js": 48,
            "./fr-ch": 49,
            "./fr-ch.js": 49,
            "./fr.js": 47,
            "./fy": 50,
            "./fy.js": 50,
            "./gd": 51,
            "./gd.js": 51,
            "./gl": 52,
            "./gl.js": 52,
            "./gom-latn": 53,
            "./gom-latn.js": 53,
            "./he": 54,
            "./he.js": 54,
            "./hi": 55,
            "./hi.js": 55,
            "./hr": 56,
            "./hr.js": 56,
            "./hu": 57,
            "./hu.js": 57,
            "./hy-am": 58,
            "./hy-am.js": 58,
            "./id": 59,
            "./id.js": 59,
            "./is": 60,
            "./is.js": 60,
            "./it": 61,
            "./it.js": 61,
            "./ja": 62,
            "./ja.js": 62,
            "./jv": 63,
            "./jv.js": 63,
            "./ka": 64,
            "./ka.js": 64,
            "./kk": 65,
            "./kk.js": 65,
            "./km": 66,
            "./km.js": 66,
            "./kn": 67,
            "./kn.js": 67,
            "./ko": 68,
            "./ko.js": 68,
            "./ky": 69,
            "./ky.js": 69,
            "./lb": 70,
            "./lb.js": 70,
            "./lo": 71,
            "./lo.js": 71,
            "./lt": 72,
            "./lt.js": 72,
            "./lv": 73,
            "./lv.js": 73,
            "./me": 74,
            "./me.js": 74,
            "./mi": 75,
            "./mi.js": 75,
            "./mk": 76,
            "./mk.js": 76,
            "./ml": 77,
            "./ml.js": 77,
            "./mr": 78,
            "./mr.js": 78,
            "./ms": 79,
            "./ms-my": 80,
            "./ms-my.js": 80,
            "./ms.js": 79,
            "./my": 81,
            "./my.js": 81,
            "./nb": 82,
            "./nb.js": 82,
            "./ne": 83,
            "./ne.js": 83,
            "./nl": 84,
            "./nl-be": 85,
            "./nl-be.js": 85,
            "./nl.js": 84,
            "./nn": 86,
            "./nn.js": 86,
            "./pa-in": 87,
            "./pa-in.js": 87,
            "./pl": 88,
            "./pl.js": 88,
            "./pt": 89,
            "./pt-br": 90,
            "./pt-br.js": 90,
            "./pt.js": 89,
            "./ro": 91,
            "./ro.js": 91,
            "./ru": 92,
            "./ru.js": 92,
            "./sd": 93,
            "./sd.js": 93,
            "./se": 94,
            "./se.js": 94,
            "./si": 95,
            "./si.js": 95,
            "./sk": 96,
            "./sk.js": 96,
            "./sl": 97,
            "./sl.js": 97,
            "./sq": 98,
            "./sq.js": 98,
            "./sr": 99,
            "./sr-cyrl": 100,
            "./sr-cyrl.js": 100,
            "./sr.js": 99,
            "./ss": 101,
            "./ss.js": 101,
            "./sv": 102,
            "./sv.js": 102,
            "./sw": 103,
            "./sw.js": 103,
            "./ta": 104,
            "./ta.js": 104,
            "./te": 105,
            "./te.js": 105,
            "./tet": 106,
            "./tet.js": 106,
            "./th": 107,
            "./th.js": 107,
            "./tl-ph": 108,
            "./tl-ph.js": 108,
            "./tlh": 109,
            "./tlh.js": 109,
            "./tr": 110,
            "./tr.js": 110,
            "./tzl": 111,
            "./tzl.js": 111,
            "./tzm": 112,
            "./tzm-latn": 113,
            "./tzm-latn.js": 113,
            "./tzm.js": 112,
            "./uk": 114,
            "./uk.js": 114,
            "./ur": 115,
            "./ur.js": 115,
            "./uz": 116,
            "./uz-latn": 117,
            "./uz-latn.js": 117,
            "./uz.js": 116,
            "./vi": 118,
            "./vi.js": 118,
            "./x-pseudo": 119,
            "./x-pseudo.js": 119,
            "./yo": 120,
            "./yo.js": 120,
            "./zh-cn": 121,
            "./zh-cn.js": 121,
            "./zh-hk": 122,
            "./zh-hk.js": 122,
            "./zh-tw": 123,
            "./zh-tw.js": 123
        };
        r.keys = function() {
            return Object.keys(i)
        }
            ,
            r.resolve = a,
            e.exports = r,
            r.id = 8
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("af", {
                months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"),
                monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"),
                weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"),
                weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"),
                weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"),
                meridiemParse: /vm|nm/i,
                isPM: function(e) {
                    return /^nm$/i.test(e)
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? n ? "vm" : "VM" : n ? "nm" : "NM"
                },
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Vandag om] LT",
                    nextDay: "[Môre om] LT",
                    nextWeek: "dddd [om] LT",
                    lastDay: "[Gister om] LT",
                    lastWeek: "[Laas] dddd [om] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "oor %s",
                    past: "%s gelede",
                    s: "'n paar sekondes",
                    m: "'n minuut",
                    mm: "%d minute",
                    h: "'n uur",
                    hh: "%d ure",
                    d: "'n dag",
                    dd: "%d dae",
                    M: "'n maand",
                    MM: "%d maande",
                    y: "'n jaar",
                    yy: "%d jaar"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                ordinal: function(e) {
                    return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = {
                1: "١",
                2: "٢",
                3: "٣",
                4: "٤",
                5: "٥",
                6: "٦",
                7: "٧",
                8: "٨",
                9: "٩",
                0: "٠"
            }
                , n = {
                "١": "1",
                "٢": "2",
                "٣": "3",
                "٤": "4",
                "٥": "5",
                "٦": "6",
                "٧": "7",
                "٨": "8",
                "٩": "9",
                "٠": "0"
            }
                , r = function(e) {
                return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
            }
                , a = {
                s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
            }
                , i = function(e) {
                return function(t, n, i, s) {
                    var o = r(t)
                        , d = a[e][r(t)];
                    return 2 === o && (d = d[n ? 0 : 1]),
                        d.replace(/%d/i, t)
                }
            }
                , s = ["كانون الثاني يناير", "شباط فبراير", "آذار مارس", "نيسان أبريل", "أيار مايو", "حزيران يونيو", "تموز يوليو", "آب أغسطس", "أيلول سبتمبر", "تشرين الأول أكتوبر", "تشرين الثاني نوفمبر", "كانون الأول ديسمبر"]
                , o = e.defineLocale("ar", {
                months: s,
                monthsShort: s,
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "D/‏M/‏YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /ص|م/,
                isPM: function(e) {
                    return "م" === e
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "ص" : "م"
                },
                calendar: {
                    sameDay: "[اليوم عند الساعة] LT",
                    nextDay: "[غدًا عند الساعة] LT",
                    nextWeek: "dddd [عند الساعة] LT",
                    lastDay: "[أمس عند الساعة] LT",
                    lastWeek: "dddd [عند الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "بعد %s",
                    past: "منذ %s",
                    s: i("s"),
                    m: i("m"),
                    mm: i("m"),
                    h: i("h"),
                    hh: i("h"),
                    d: i("d"),
                    dd: i("d"),
                    M: i("M"),
                    MM: i("M"),
                    y: i("y"),
                    yy: i("y")
                },
                preparse: function(e) {
                    return e.replace(/\u200f/g, "").replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
                        return n[e]
                    }).replace(/،/g, ",")
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e]
                    }).replace(/,/g, "،")
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            });
            return o
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("ar-dz", {
                months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "أح_إث_ثلا_أر_خم_جم_سب".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                week: {
                    dow: 0,
                    doy: 4
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("ar-kw", {
                months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                week: {
                    dow: 0,
                    doy: 12
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = {
                1: "1",
                2: "2",
                3: "3",
                4: "4",
                5: "5",
                6: "6",
                7: "7",
                8: "8",
                9: "9",
                0: "0"
            }
                , n = function(e) {
                return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5
            }
                , r = {
                s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"],
                m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"],
                h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"],
                d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"],
                M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"],
                y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"]
            }
                , a = function(e) {
                return function(t, a, i, s) {
                    var o = n(t)
                        , d = r[e][n(t)];
                    return 2 === o && (d = d[a ? 0 : 1]),
                        d.replace(/%d/i, t)
                }
            }
                , i = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"]
                , s = e.defineLocale("ar-ly", {
                months: i,
                monthsShort: i,
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "D/‏M/‏YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /ص|م/,
                isPM: function(e) {
                    return "م" === e
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "ص" : "م"
                },
                calendar: {
                    sameDay: "[اليوم عند الساعة] LT",
                    nextDay: "[غدًا عند الساعة] LT",
                    nextWeek: "dddd [عند الساعة] LT",
                    lastDay: "[أمس عند الساعة] LT",
                    lastWeek: "dddd [عند الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "بعد %s",
                    past: "منذ %s",
                    s: a("s"),
                    m: a("m"),
                    mm: a("m"),
                    h: a("h"),
                    hh: a("h"),
                    d: a("d"),
                    dd: a("d"),
                    M: a("M"),
                    MM: a("M"),
                    y: a("y"),
                    yy: a("y")
                },
                preparse: function(e) {
                    return e.replace(/\u200f/g, "").replace(/،/g, ",")
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e]
                    }).replace(/,/g, "،")
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            });
            return s
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("ar-ma", {
                months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"),
                weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = {
                1: "١",
                2: "٢",
                3: "٣",
                4: "٤",
                5: "٥",
                6: "٦",
                7: "٧",
                8: "٨",
                9: "٩",
                0: "٠"
            }
                , n = {
                "١": "1",
                "٢": "2",
                "٣": "3",
                "٤": "4",
                "٥": "5",
                "٦": "6",
                "٧": "7",
                "٨": "8",
                "٩": "9",
                "٠": "0"
            }
                , r = e.defineLocale("ar-sa", {
                months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /ص|م/,
                isPM: function(e) {
                    return "م" === e
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "ص" : "م"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                preparse: function(e) {
                    return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) {
                        return n[e]
                    }).replace(/،/g, ",")
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e]
                    }).replace(/,/g, "،")
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            });
            return r
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("ar-tn", {
                months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"),
                weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"),
                weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"),
                weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[اليوم على الساعة] LT",
                    nextDay: "[غدا على الساعة] LT",
                    nextWeek: "dddd [على الساعة] LT",
                    lastDay: "[أمس على الساعة] LT",
                    lastWeek: "dddd [على الساعة] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "في %s",
                    past: "منذ %s",
                    s: "ثوان",
                    m: "دقيقة",
                    mm: "%d دقائق",
                    h: "ساعة",
                    hh: "%d ساعات",
                    d: "يوم",
                    dd: "%d أيام",
                    M: "شهر",
                    MM: "%d أشهر",
                    y: "سنة",
                    yy: "%d سنوات"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = {
                1: "-inci",
                5: "-inci",
                8: "-inci",
                70: "-inci",
                80: "-inci",
                2: "-nci",
                7: "-nci",
                20: "-nci",
                50: "-nci",
                3: "-üncü",
                4: "-üncü",
                100: "-üncü",
                6: "-ncı",
                9: "-uncu",
                10: "-uncu",
                30: "-uncu",
                60: "-ıncı",
                90: "-ıncı"
            }
                , n = e.defineLocale("az", {
                months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
                monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
                weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"),
                weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"),
                weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[bugün saat] LT",
                    nextDay: "[sabah saat] LT",
                    nextWeek: "[gələn həftə] dddd [saat] LT",
                    lastDay: "[dünən] LT",
                    lastWeek: "[keçən həftə] dddd [saat] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s sonra",
                    past: "%s əvvəl",
                    s: "birneçə saniyyə",
                    m: "bir dəqiqə",
                    mm: "%d dəqiqə",
                    h: "bir saat",
                    hh: "%d saat",
                    d: "bir gün",
                    dd: "%d gün",
                    M: "bir ay",
                    MM: "%d ay",
                    y: "bir il",
                    yy: "%d il"
                },
                meridiemParse: /gecə|səhər|gündüz|axşam/,
                isPM: function(e) {
                    return /^(gündüz|axşam)$/.test(e)
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "gecə" : e < 12 ? "səhər" : e < 17 ? "gündüz" : "axşam"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/,
                ordinal: function(e) {
                    if (0 === e)
                        return e + "-ıncı";
                    var n = e % 10
                        , r = e % 100 - n
                        , a = e >= 100 ? 100 : null;
                    return e + (t[n] || t[r] || t[a])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return n
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            function t(e, t) {
                var n = e.split("_");
                return t % 10 === 1 && t % 100 !== 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
            }
            function n(e, n, r) {
                var a = {
                    mm: n ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін",
                    hh: n ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін",
                    dd: "дзень_дні_дзён",
                    MM: "месяц_месяцы_месяцаў",
                    yy: "год_гады_гадоў"
                };
                return "m" === r ? n ? "хвіліна" : "хвіліну" : "h" === r ? n ? "гадзіна" : "гадзіну" : e + " " + t(a[r], +e)
            }
            var r = e.defineLocale("be", {
                months: {
                    format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"),
                    standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_")
                },
                monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"),
                weekdays: {
                    format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"),
                    standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"),
                    isFormat: /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/
                },
                weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"),
                weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY г.",
                    LLL: "D MMMM YYYY г., HH:mm",
                    LLLL: "dddd, D MMMM YYYY г., HH:mm"
                },
                calendar: {
                    sameDay: "[Сёння ў] LT",
                    nextDay: "[Заўтра ў] LT",
                    lastDay: "[Учора ў] LT",
                    nextWeek: function() {
                        return "[У] dddd [ў] LT"
                    },
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 5:
                            case 6:
                                return "[У мінулую] dddd [ў] LT";
                            case 1:
                            case 2:
                            case 4:
                                return "[У мінулы] dddd [ў] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "праз %s",
                    past: "%s таму",
                    s: "некалькі секунд",
                    m: n,
                    mm: n,
                    h: n,
                    hh: n,
                    d: "дзень",
                    dd: n,
                    M: "месяц",
                    MM: n,
                    y: "год",
                    yy: n
                },
                meridiemParse: /ночы|раніцы|дня|вечара/,
                isPM: function(e) {
                    return /^(дня|вечара)$/.test(e)
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "ночы" : e < 12 ? "раніцы" : e < 17 ? "дня" : "вечара"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "M":
                        case "d":
                        case "DDD":
                        case "w":
                        case "W":
                            return e % 10 !== 2 && e % 10 !== 3 || e % 100 === 12 || e % 100 === 13 ? e + "-ы" : e + "-і";
                        case "D":
                            return e + "-га";
                        default:
                            return e
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return r
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("bg", {
                months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"),
                monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"),
                weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"),
                weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"),
                weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "D.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY H:mm",
                    LLLL: "dddd, D MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[Днес в] LT",
                    nextDay: "[Утре в] LT",
                    nextWeek: "dddd [в] LT",
                    lastDay: "[Вчера в] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 6:
                                return "[В изминалата] dddd [в] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[В изминалия] dddd [в] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "след %s",
                    past: "преди %s",
                    s: "няколко секунди",
                    m: "минута",
                    mm: "%d минути",
                    h: "час",
                    hh: "%d часа",
                    d: "ден",
                    dd: "%d дни",
                    M: "месец",
                    MM: "%d месеца",
                    y: "година",
                    yy: "%d години"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
                ordinal: function(e) {
                    var t = e % 10
                        , n = e % 100;
                    return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = {
                1: "১",
                2: "২",
                3: "৩",
                4: "৪",
                5: "৫",
                6: "৬",
                7: "৭",
                8: "৮",
                9: "৯",
                0: "০"
            }
                , n = {
                "১": "1",
                "২": "2",
                "৩": "3",
                "৪": "4",
                "৫": "5",
                "৬": "6",
                "৭": "7",
                "৮": "8",
                "৯": "9",
                "০": "0"
            }
                , r = e.defineLocale("bn", {
                months: "জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"),
                monthsShort: "জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে".split("_"),
                weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"),
                weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"),
                weekdaysMin: "রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"),
                longDateFormat: {
                    LT: "A h:mm সময়",
                    LTS: "A h:mm:ss সময়",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm সময়",
                    LLLL: "dddd, D MMMM YYYY, A h:mm সময়"
                },
                calendar: {
                    sameDay: "[আজ] LT",
                    nextDay: "[আগামীকাল] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[গতকাল] LT",
                    lastWeek: "[গত] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s পরে",
                    past: "%s আগে",
                    s: "কয়েক সেকেন্ড",
                    m: "এক মিনিট",
                    mm: "%d মিনিট",
                    h: "এক ঘন্টা",
                    hh: "%d ঘন্টা",
                    d: "এক দিন",
                    dd: "%d দিন",
                    M: "এক মাস",
                    MM: "%d মাস",
                    y: "এক বছর",
                    yy: "%d বছর"
                },
                preparse: function(e) {
                    return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function(e) {
                        return n[e]
                    })
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e]
                    })
                },
                meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0),
                        "রাত" === t && e >= 4 || "দুপুর" === t && e < 5 || "বিকাল" === t ? e + 12 : e
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "রাত" : e < 10 ? "সকাল" : e < 17 ? "দুপুর" : e < 20 ? "বিকাল" : "রাত"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            });
            return r
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = {
                1: "༡",
                2: "༢",
                3: "༣",
                4: "༤",
                5: "༥",
                6: "༦",
                7: "༧",
                8: "༨",
                9: "༩",
                0: "༠"
            }
                , n = {
                "༡": "1",
                "༢": "2",
                "༣": "3",
                "༤": "4",
                "༥": "5",
                "༦": "6",
                "༧": "7",
                "༨": "8",
                "༩": "9",
                "༠": "0"
            }
                , r = e.defineLocale("bo", {
                months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
                monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"),
                weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"),
                weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
                weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"),
                longDateFormat: {
                    LT: "A h:mm",
                    LTS: "A h:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm",
                    LLLL: "dddd, D MMMM YYYY, A h:mm"
                },
                calendar: {
                    sameDay: "[དི་རིང] LT",
                    nextDay: "[སང་ཉིན] LT",
                    nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT",
                    lastDay: "[ཁ་སང] LT",
                    lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s ལ་",
                    past: "%s སྔན་ལ",
                    s: "ལམ་སང",
                    m: "སྐར་མ་གཅིག",
                    mm: "%d སྐར་མ",
                    h: "ཆུ་ཚོད་གཅིག",
                    hh: "%d ཆུ་ཚོད",
                    d: "ཉིན་གཅིག",
                    dd: "%d ཉིན་",
                    M: "ཟླ་བ་གཅིག",
                    MM: "%d ཟླ་བ",
                    y: "ལོ་གཅིག",
                    yy: "%d ལོ"
                },
                preparse: function(e) {
                    return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function(e) {
                        return n[e]
                    })
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e]
                    })
                },
                meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0),
                        "མཚན་མོ" === t && e >= 4 || "ཉིན་གུང" === t && e < 5 || "དགོང་དག" === t ? e + 12 : e
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "མཚན་མོ" : e < 10 ? "ཞོགས་ཀས" : e < 17 ? "ཉིན་གུང" : e < 20 ? "དགོང་དག" : "མཚན་མོ"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            });
            return r
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            function t(e, t, n) {
                var r = {
                    mm: "munutenn",
                    MM: "miz",
                    dd: "devezh"
                };
                return e + " " + a(r[n], e)
            }
            function n(e) {
                switch (r(e)) {
                    case 1:
                    case 3:
                    case 4:
                    case 5:
                    case 9:
                        return e + " bloaz";
                    default:
                        return e + " vloaz"
                }
            }
            function r(e) {
                return e > 9 ? r(e % 10) : e
            }
            function a(e, t) {
                return 2 === t ? i(e) : e
            }
            function i(e) {
                var t = {
                    m: "v",
                    b: "v",
                    d: "z"
                };
                return void 0 === t[e.charAt(0)] ? e : t[e.charAt(0)] + e.substring(1)
            }
            var s = e.defineLocale("br", {
                months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"),
                monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"),
                weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"),
                weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"),
                weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "h[e]mm A",
                    LTS: "h[e]mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D [a viz] MMMM YYYY",
                    LLL: "D [a viz] MMMM YYYY h[e]mm A",
                    LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A"
                },
                calendar: {
                    sameDay: "[Hiziv da] LT",
                    nextDay: "[Warc'hoazh da] LT",
                    nextWeek: "dddd [da] LT",
                    lastDay: "[Dec'h da] LT",
                    lastWeek: "dddd [paset da] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "a-benn %s",
                    past: "%s 'zo",
                    s: "un nebeud segondennoù",
                    m: "ur vunutenn",
                    mm: t,
                    h: "un eur",
                    hh: "%d eur",
                    d: "un devezh",
                    dd: t,
                    M: "ur miz",
                    MM: t,
                    y: "ur bloaz",
                    yy: n
                },
                dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/,
                ordinal: function(e) {
                    var t = 1 === e ? "añ" : "vet";
                    return e + t
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return s
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            function t(e, t, n) {
                var r = e + " ";
                switch (n) {
                    case "m":
                        return t ? "jedna minuta" : "jedne minute";
                    case "mm":
                        return r += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                    case "h":
                        return t ? "jedan sat" : "jednog sata";
                    case "hh":
                        return r += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                    case "dd":
                        return r += 1 === e ? "dan" : "dana";
                    case "MM":
                        return r += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                    case "yy":
                        return r += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
                }
            }
            var n = e.defineLocale("bs", {
                months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
                monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
                weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
                weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danas u] LT",
                    nextDay: "[sutra u] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[u] [nedjelju] [u] LT";
                            case 3:
                                return "[u] [srijedu] [u] LT";
                            case 6:
                                return "[u] [subotu] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[u] dddd [u] LT"
                        }
                    },
                    lastDay: "[jučer u] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                                return "[prošlu] dddd [u] LT";
                            case 6:
                                return "[prošle] [subote] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[prošli] dddd [u] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "prije %s",
                    s: "par sekundi",
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: "dan",
                    dd: t,
                    M: "mjesec",
                    MM: t,
                    y: "godinu",
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return n
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("ca", {
                months: {
                    standalone: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"),
                    format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"),
                    isFormat: /D[oD]?(\s)+MMMM/
                },
                monthsShort: "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"),
                monthsParseExact: !0,
                weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"),
                weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"),
                weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "[el] D MMMM [de] YYYY",
                    ll: "D MMM YYYY",
                    LLL: "[el] D MMMM [de] YYYY [a les] H:mm",
                    lll: "D MMM YYYY, H:mm",
                    LLLL: "[el] dddd D MMMM [de] YYYY [a les] H:mm",
                    llll: "ddd D MMM YYYY, H:mm"
                },
                calendar: {
                    sameDay: function() {
                        return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    nextDay: function() {
                        return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    nextWeek: function() {
                        return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    lastDay: function() {
                        return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    lastWeek: function() {
                        return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "d'aquí %s",
                    past: "fa %s",
                    s: "uns segons",
                    m: "un minut",
                    mm: "%d minuts",
                    h: "una hora",
                    hh: "%d hores",
                    d: "un dia",
                    dd: "%d dies",
                    M: "un mes",
                    MM: "%d mesos",
                    y: "un any",
                    yy: "%d anys"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/,
                ordinal: function(e, t) {
                    var n = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è";
                    return "w" !== t && "W" !== t || (n = "a"),
                    e + n
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            function t(e) {
                return e > 1 && e < 5 && 1 !== ~~(e / 10)
            }
            function n(e, n, r, a) {
                var i = e + " ";
                switch (r) {
                    case "s":
                        return n || a ? "pár sekund" : "pár sekundami";
                    case "m":
                        return n ? "minuta" : a ? "minutu" : "minutou";
                    case "mm":
                        return n || a ? i + (t(e) ? "minuty" : "minut") : i + "minutami";
                    case "h":
                        return n ? "hodina" : a ? "hodinu" : "hodinou";
                    case "hh":
                        return n || a ? i + (t(e) ? "hodiny" : "hodin") : i + "hodinami";
                    case "d":
                        return n || a ? "den" : "dnem";
                    case "dd":
                        return n || a ? i + (t(e) ? "dny" : "dní") : i + "dny";
                    case "M":
                        return n || a ? "měsíc" : "měsícem";
                    case "MM":
                        return n || a ? i + (t(e) ? "měsíce" : "měsíců") : i + "měsíci";
                    case "y":
                        return n || a ? "rok" : "rokem";
                    case "yy":
                        return n || a ? i + (t(e) ? "roky" : "let") : i + "lety"
                }
            }
            var r = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_")
                , a = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_")
                , i = e.defineLocale("cs", {
                months: r,
                monthsShort: a,
                monthsParse: function(e, t) {
                    var n, r = [];
                    for (n = 0; n < 12; n++)
                        r[n] = new RegExp("^" + e[n] + "$|^" + t[n] + "$","i");
                    return r
                }(r, a),
                shortMonthsParse: function(e) {
                    var t, n = [];
                    for (t = 0; t < 12; t++)
                        n[t] = new RegExp("^" + e[t] + "$","i");
                    return n
                }(a),
                longMonthsParse: function(e) {
                    var t, n = [];
                    for (t = 0; t < 12; t++)
                        n[t] = new RegExp("^" + e[t] + "$","i");
                    return n
                }(r),
                weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),
                weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"),
                weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd D. MMMM YYYY H:mm",
                    l: "D. M. YYYY"
                },
                calendar: {
                    sameDay: "[dnes v] LT",
                    nextDay: "[zítra v] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[v neděli v] LT";
                            case 1:
                            case 2:
                                return "[v] dddd [v] LT";
                            case 3:
                                return "[ve středu v] LT";
                            case 4:
                                return "[ve čtvrtek v] LT";
                            case 5:
                                return "[v pátek v] LT";
                            case 6:
                                return "[v sobotu v] LT"
                        }
                    },
                    lastDay: "[včera v] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[minulou neděli v] LT";
                            case 1:
                            case 2:
                                return "[minulé] dddd [v] LT";
                            case 3:
                                return "[minulou středu v] LT";
                            case 4:
                            case 5:
                                return "[minulý] dddd [v] LT";
                            case 6:
                                return "[minulou sobotu v] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "před %s",
                    s: n,
                    m: n,
                    mm: n,
                    h: n,
                    hh: n,
                    d: n,
                    dd: n,
                    M: n,
                    MM: n,
                    y: n,
                    yy: n
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return i
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("cv", {
                months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"),
                monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"),
                weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"),
                weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"),
                weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD-MM-YYYY",
                    LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]",
                    LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm",
                    LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm"
                },
                calendar: {
                    sameDay: "[Паян] LT [сехетре]",
                    nextDay: "[Ыран] LT [сехетре]",
                    lastDay: "[Ӗнер] LT [сехетре]",
                    nextWeek: "[Ҫитес] dddd LT [сехетре]",
                    lastWeek: "[Иртнӗ] dddd LT [сехетре]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: function(e) {
                        var t = /сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран";
                        return e + t
                    },
                    past: "%s каялла",
                    s: "пӗр-ик ҫеккунт",
                    m: "пӗр минут",
                    mm: "%d минут",
                    h: "пӗр сехет",
                    hh: "%d сехет",
                    d: "пӗр кун",
                    dd: "%d кун",
                    M: "пӗр уйӑх",
                    MM: "%d уйӑх",
                    y: "пӗр ҫул",
                    yy: "%d ҫул"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-мӗш/,
                ordinal: "%d-мӗш",
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("cy", {
                months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"),
                monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"),
                weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"),
                weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"),
                weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Heddiw am] LT",
                    nextDay: "[Yfory am] LT",
                    nextWeek: "dddd [am] LT",
                    lastDay: "[Ddoe am] LT",
                    lastWeek: "dddd [diwethaf am] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "mewn %s",
                    past: "%s yn ôl",
                    s: "ychydig eiliadau",
                    m: "munud",
                    mm: "%d munud",
                    h: "awr",
                    hh: "%d awr",
                    d: "diwrnod",
                    dd: "%d diwrnod",
                    M: "mis",
                    MM: "%d mis",
                    y: "blwyddyn",
                    yy: "%d flynedd"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/,
                ordinal: function(e) {
                    var t = e
                        , n = ""
                        , r = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"];
                    return t > 20 ? n = 40 === t || 50 === t || 60 === t || 80 === t || 100 === t ? "fed" : "ain" : t > 0 && (n = r[t]),
                    e + n
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("da", {
                months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
                monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
                weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
                weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"),
                weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY HH:mm",
                    LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm"
                },
                calendar: {
                    sameDay: "[i dag kl.] LT",
                    nextDay: "[i morgen kl.] LT",
                    nextWeek: "på dddd [kl.] LT",
                    lastDay: "[i går kl.] LT",
                    lastWeek: "[i] dddd[s kl.] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "%s siden",
                    s: "få sekunder",
                    m: "et minut",
                    mm: "%d minutter",
                    h: "en time",
                    hh: "%d timer",
                    d: "en dag",
                    dd: "%d dage",
                    M: "en måned",
                    MM: "%d måneder",
                    y: "et år",
                    yy: "%d år"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            function t(e, t, n, r) {
                var a = {
                    m: ["eine Minute", "einer Minute"],
                    h: ["eine Stunde", "einer Stunde"],
                    d: ["ein Tag", "einem Tag"],
                    dd: [e + " Tage", e + " Tagen"],
                    M: ["ein Monat", "einem Monat"],
                    MM: [e + " Monate", e + " Monaten"],
                    y: ["ein Jahr", "einem Jahr"],
                    yy: [e + " Jahre", e + " Jahren"]
                };
                return t ? a[n][0] : a[n][1]
            }
            var n = e.defineLocale("de", {
                months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
                monthsParseExact: !0,
                weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
                weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY HH:mm",
                    LLLL: "dddd, D. MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[heute um] LT [Uhr]",
                    sameElse: "L",
                    nextDay: "[morgen um] LT [Uhr]",
                    nextWeek: "dddd [um] LT [Uhr]",
                    lastDay: "[gestern um] LT [Uhr]",
                    lastWeek: "[letzten] dddd [um] LT [Uhr]"
                },
                relativeTime: {
                    future: "in %s",
                    past: "vor %s",
                    s: "ein paar Sekunden",
                    m: t,
                    mm: "%d Minuten",
                    h: t,
                    hh: "%d Stunden",
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return n
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            function t(e, t, n, r) {
                var a = {
                    m: ["eine Minute", "einer Minute"],
                    h: ["eine Stunde", "einer Stunde"],
                    d: ["ein Tag", "einem Tag"],
                    dd: [e + " Tage", e + " Tagen"],
                    M: ["ein Monat", "einem Monat"],
                    MM: [e + " Monate", e + " Monaten"],
                    y: ["ein Jahr", "einem Jahr"],
                    yy: [e + " Jahre", e + " Jahren"]
                };
                return t ? a[n][0] : a[n][1]
            }
            var n = e.defineLocale("de-at", {
                months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
                monthsParseExact: !0,
                weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
                weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY HH:mm",
                    LLLL: "dddd, D. MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[heute um] LT [Uhr]",
                    sameElse: "L",
                    nextDay: "[morgen um] LT [Uhr]",
                    nextWeek: "dddd [um] LT [Uhr]",
                    lastDay: "[gestern um] LT [Uhr]",
                    lastWeek: "[letzten] dddd [um] LT [Uhr]"
                },
                relativeTime: {
                    future: "in %s",
                    past: "vor %s",
                    s: "ein paar Sekunden",
                    m: t,
                    mm: "%d Minuten",
                    h: t,
                    hh: "%d Stunden",
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return n
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            function t(e, t, n, r) {
                var a = {
                    m: ["eine Minute", "einer Minute"],
                    h: ["eine Stunde", "einer Stunde"],
                    d: ["ein Tag", "einem Tag"],
                    dd: [e + " Tage", e + " Tagen"],
                    M: ["ein Monat", "einem Monat"],
                    MM: [e + " Monate", e + " Monaten"],
                    y: ["ein Jahr", "einem Jahr"],
                    yy: [e + " Jahre", e + " Jahren"]
                };
                return t ? a[n][0] : a[n][1]
            }
            var n = e.defineLocale("de-ch", {
                months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "Jan._Febr._März_April_Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),
                monthsParseExact: !0,
                weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY HH.mm",
                    LLLL: "dddd, D. MMMM YYYY HH.mm"
                },
                calendar: {
                    sameDay: "[heute um] LT [Uhr]",
                    sameElse: "L",
                    nextDay: "[morgen um] LT [Uhr]",
                    nextWeek: "dddd [um] LT [Uhr]",
                    lastDay: "[gestern um] LT [Uhr]",
                    lastWeek: "[letzten] dddd [um] LT [Uhr]"
                },
                relativeTime: {
                    future: "in %s",
                    past: "vor %s",
                    s: "ein paar Sekunden",
                    m: t,
                    mm: "%d Minuten",
                    h: t,
                    hh: "%d Stunden",
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return n
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"]
                , n = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"]
                , r = e.defineLocale("dv", {
                months: t,
                monthsShort: t,
                weekdays: n,
                weekdaysShort: n,
                weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "D/M/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /މކ|މފ/,
                isPM: function(e) {
                    return "މފ" === e
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "މކ" : "މފ"
                },
                calendar: {
                    sameDay: "[މިއަދު] LT",
                    nextDay: "[މާދަމާ] LT",
                    nextWeek: "dddd LT",
                    lastDay: "[އިއްޔެ] LT",
                    lastWeek: "[ފާއިތުވި] dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ތެރޭގައި %s",
                    past: "ކުރިން %s",
                    s: "ސިކުންތުކޮޅެއް",
                    m: "މިނިޓެއް",
                    mm: "މިނިޓު %d",
                    h: "ގަޑިއިރެއް",
                    hh: "ގަޑިއިރު %d",
                    d: "ދުވަހެއް",
                    dd: "ދުވަސް %d",
                    M: "މަހެއް",
                    MM: "މަސް %d",
                    y: "އަހަރެއް",
                    yy: "އަހަރު %d"
                },
                preparse: function(e) {
                    return e.replace(/،/g, ",")
                },
                postformat: function(e) {
                    return e.replace(/,/g, "،")
                },
                week: {
                    dow: 7,
                    doy: 12
                }
            });
            return r
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            function t(e) {
                return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
            }
            var n = e.defineLocale("el", {
                monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"),
                monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"),
                months: function(e, t) {
                    return e ? /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl
                },
                monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"),
                weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"),
                weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"),
                weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"),
                meridiem: function(e, t, n) {
                    return e > 11 ? n ? "μμ" : "ΜΜ" : n ? "πμ" : "ΠΜ"
                },
                isPM: function(e) {
                    return "μ" === (e + "").toLowerCase()[0]
                },
                meridiemParse: /[ΠΜ]\.?Μ?\.?/i,
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendarEl: {
                    sameDay: "[Σήμερα {}] LT",
                    nextDay: "[Αύριο {}] LT",
                    nextWeek: "dddd [{}] LT",
                    lastDay: "[Χθες {}] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 6:
                                return "[το προηγούμενο] dddd [{}] LT";
                            default:
                                return "[την προηγούμενη] dddd [{}] LT"
                        }
                    },
                    sameElse: "L"
                },
                calendar: function(e, n) {
                    var r = this._calendarEl[e]
                        , a = n && n.hours();
                    return t(r) && (r = r.apply(n)),
                        r.replace("{}", a % 12 === 1 ? "στη" : "στις")
                },
                relativeTime: {
                    future: "σε %s",
                    past: "%s πριν",
                    s: "λίγα δευτερόλεπτα",
                    m: "ένα λεπτό",
                    mm: "%d λεπτά",
                    h: "μία ώρα",
                    hh: "%d ώρες",
                    d: "μία μέρα",
                    dd: "%d μέρες",
                    M: "ένας μήνας",
                    MM: "%d μήνες",
                    y: "ένας χρόνος",
                    yy: "%d χρόνια"
                },
                dayOfMonthOrdinalParse: /\d{1,2}η/,
                ordinal: "%dη",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return n
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("en-au", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var t = e % 10
                        , n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                    return e + n
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("en-ca", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "YYYY-MM-DD",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY h:mm A",
                    LLLL: "dddd, MMMM D, YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var t = e % 10
                        , n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                    return e + n
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("en-gb", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var t = e % 10
                        , n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                    return e + n
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("en-ie", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD-MM-YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var t = e % 10
                        , n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                    return e + n
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("en-nz", {
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Today at] LT",
                    nextDay: "[Tomorrow at] LT",
                    nextWeek: "dddd [at] LT",
                    lastDay: "[Yesterday at] LT",
                    lastWeek: "[Last] dddd [at] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "a few seconds",
                    m: "a minute",
                    mm: "%d minutes",
                    h: "an hour",
                    hh: "%d hours",
                    d: "a day",
                    dd: "%d days",
                    M: "a month",
                    MM: "%d months",
                    y: "a year",
                    yy: "%d years"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var t = e % 10
                        , n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                    return e + n
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("eo", {
                months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"),
                monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"),
                weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"),
                weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"),
                weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "D[-a de] MMMM, YYYY",
                    LLL: "D[-a de] MMMM, YYYY HH:mm",
                    LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm"
                },
                meridiemParse: /[ap]\.t\.m/i,
                isPM: function(e) {
                    return "p" === e.charAt(0).toLowerCase()
                },
                meridiem: function(e, t, n) {
                    return e > 11 ? n ? "p.t.m." : "P.T.M." : n ? "a.t.m." : "A.T.M."
                },
                calendar: {
                    sameDay: "[Hodiaŭ je] LT",
                    nextDay: "[Morgaŭ je] LT",
                    nextWeek: "dddd [je] LT",
                    lastDay: "[Hieraŭ je] LT",
                    lastWeek: "[pasinta] dddd [je] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "post %s",
                    past: "antaŭ %s",
                    s: "sekundoj",
                    m: "minuto",
                    mm: "%d minutoj",
                    h: "horo",
                    hh: "%d horoj",
                    d: "tago",
                    dd: "%d tagoj",
                    M: "monato",
                    MM: "%d monatoj",
                    y: "jaro",
                    yy: "%d jaroj"
                },
                dayOfMonthOrdinalParse: /\d{1,2}a/,
                ordinal: "%da",
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")
                , n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_")
                , r = e.defineLocale("es", {
                months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                monthsShort: function(e, r) {
                    return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
                },
                monthsParseExact: !0,
                weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
                weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
                weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY H:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
                },
                calendar: {
                    sameDay: function() {
                        return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    nextDay: function() {
                        return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    nextWeek: function() {
                        return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    lastDay: function() {
                        return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    lastWeek: function() {
                        return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "en %s",
                    past: "hace %s",
                    s: "unos segundos",
                    m: "un minuto",
                    mm: "%d minutos",
                    h: "una hora",
                    hh: "%d horas",
                    d: "un día",
                    dd: "%d días",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un año",
                    yy: "%d años"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return r
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_")
                , n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_")
                , r = e.defineLocale("es-do", {
                months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                monthsShort: function(e, r) {
                    return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
                },
                monthsParseExact: !0,
                weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"),
                weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"),
                weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY h:mm A",
                    LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A"
                },
                calendar: {
                    sameDay: function() {
                        return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    nextDay: function() {
                        return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    nextWeek: function() {
                        return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    lastDay: function() {
                        return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    lastWeek: function() {
                        return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "en %s",
                    past: "hace %s",
                    s: "unos segundos",
                    m: "un minuto",
                    mm: "%d minutos",
                    h: "una hora",
                    hh: "%d horas",
                    d: "un día",
                    dd: "%d días",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un año",
                    yy: "%d años"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return r
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            function t(e, t, n, r) {
                var a = {
                    s: ["mõne sekundi", "mõni sekund", "paar sekundit"],
                    m: ["ühe minuti", "üks minut"],
                    mm: [e + " minuti", e + " minutit"],
                    h: ["ühe tunni", "tund aega", "üks tund"],
                    hh: [e + " tunni", e + " tundi"],
                    d: ["ühe päeva", "üks päev"],
                    M: ["kuu aja", "kuu aega", "üks kuu"],
                    MM: [e + " kuu", e + " kuud"],
                    y: ["ühe aasta", "aasta", "üks aasta"],
                    yy: [e + " aasta", e + " aastat"]
                };
                return t ? a[n][2] ? a[n][2] : a[n][1] : r ? a[n][0] : a[n][1]
            }
            var n = e.defineLocale("et", {
                months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
                monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
                weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"),
                weekdaysShort: "P_E_T_K_N_R_L".split("_"),
                weekdaysMin: "P_E_T_K_N_R_L".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[Täna,] LT",
                    nextDay: "[Homme,] LT",
                    nextWeek: "[Järgmine] dddd LT",
                    lastDay: "[Eile,] LT",
                    lastWeek: "[Eelmine] dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s pärast",
                    past: "%s tagasi",
                    s: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: "%d päeva",
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return n
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("eu", {
                months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"),
                monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"),
                monthsParseExact: !0,
                weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"),
                weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"),
                weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "YYYY[ko] MMMM[ren] D[a]",
                    LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm",
                    LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm",
                    l: "YYYY-M-D",
                    ll: "YYYY[ko] MMM D[a]",
                    lll: "YYYY[ko] MMM D[a] HH:mm",
                    llll: "ddd, YYYY[ko] MMM D[a] HH:mm"
                },
                calendar: {
                    sameDay: "[gaur] LT[etan]",
                    nextDay: "[bihar] LT[etan]",
                    nextWeek: "dddd LT[etan]",
                    lastDay: "[atzo] LT[etan]",
                    lastWeek: "[aurreko] dddd LT[etan]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s barru",
                    past: "duela %s",
                    s: "segundo batzuk",
                    m: "minutu bat",
                    mm: "%d minutu",
                    h: "ordu bat",
                    hh: "%d ordu",
                    d: "egun bat",
                    dd: "%d egun",
                    M: "hilabete bat",
                    MM: "%d hilabete",
                    y: "urte bat",
                    yy: "%d urte"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = {
                1: "۱",
                2: "۲",
                3: "۳",
                4: "۴",
                5: "۵",
                6: "۶",
                7: "۷",
                8: "۸",
                9: "۹",
                0: "۰"
            }
                , n = {
                "۱": "1",
                "۲": "2",
                "۳": "3",
                "۴": "4",
                "۵": "5",
                "۶": "6",
                "۷": "7",
                "۸": "8",
                "۹": "9",
                "۰": "0"
            }
                , r = e.defineLocale("fa", {
                months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
                monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"),
                weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
                weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"),
                weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                meridiemParse: /قبل از ظهر|بعد از ظهر/,
                isPM: function(e) {
                    return /بعد از ظهر/.test(e)
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "قبل از ظهر" : "بعد از ظهر"
                },
                calendar: {
                    sameDay: "[امروز ساعت] LT",
                    nextDay: "[فردا ساعت] LT",
                    nextWeek: "dddd [ساعت] LT",
                    lastDay: "[دیروز ساعت] LT",
                    lastWeek: "dddd [پیش] [ساعت] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "در %s",
                    past: "%s پیش",
                    s: "چند ثانیه",
                    m: "یک دقیقه",
                    mm: "%d دقیقه",
                    h: "یک ساعت",
                    hh: "%d ساعت",
                    d: "یک روز",
                    dd: "%d روز",
                    M: "یک ماه",
                    MM: "%d ماه",
                    y: "یک سال",
                    yy: "%d سال"
                },
                preparse: function(e) {
                    return e.replace(/[۰-۹]/g, function(e) {
                        return n[e]
                    }).replace(/،/g, ",")
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e]
                    }).replace(/,/g, "،")
                },
                dayOfMonthOrdinalParse: /\d{1,2}م/,
                ordinal: "%dم",
                week: {
                    dow: 6,
                    doy: 12
                }
            });
            return r
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            function t(e, t, r, a) {
                var i = "";
                switch (r) {
                    case "s":
                        return a ? "muutaman sekunnin" : "muutama sekunti";
                    case "m":
                        return a ? "minuutin" : "minuutti";
                    case "mm":
                        i = a ? "minuutin" : "minuuttia";
                        break;
                    case "h":
                        return a ? "tunnin" : "tunti";
                    case "hh":
                        i = a ? "tunnin" : "tuntia";
                        break;
                    case "d":
                        return a ? "päivän" : "päivä";
                    case "dd":
                        i = a ? "päivän" : "päivää";
                        break;
                    case "M":
                        return a ? "kuukauden" : "kuukausi";
                    case "MM":
                        i = a ? "kuukauden" : "kuukautta";
                        break;
                    case "y":
                        return a ? "vuoden" : "vuosi";
                    case "yy":
                        i = a ? "vuoden" : "vuotta"
                }
                return i = n(e, a) + " " + i
            }
            function n(e, t) {
                return e < 10 ? t ? a[e] : r[e] : e
            }
            var r = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" ")
                , a = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", r[7], r[8], r[9]]
                , i = e.defineLocale("fi", {
                months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
                monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"),
                weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
                weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
                weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD.MM.YYYY",
                    LL: "Do MMMM[ta] YYYY",
                    LLL: "Do MMMM[ta] YYYY, [klo] HH.mm",
                    LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm",
                    l: "D.M.YYYY",
                    ll: "Do MMM YYYY",
                    lll: "Do MMM YYYY, [klo] HH.mm",
                    llll: "ddd, Do MMM YYYY, [klo] HH.mm"
                },
                calendar: {
                    sameDay: "[tänään] [klo] LT",
                    nextDay: "[huomenna] [klo] LT",
                    nextWeek: "dddd [klo] LT",
                    lastDay: "[eilen] [klo] LT",
                    lastWeek: "[viime] dddd[na] [klo] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s päästä",
                    past: "%s sitten",
                    s: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return i
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("fo", {
                months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
                weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"),
                weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"),
                weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D. MMMM, YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Í dag kl.] LT",
                    nextDay: "[Í morgin kl.] LT",
                    nextWeek: "dddd [kl.] LT",
                    lastDay: "[Í gjár kl.] LT",
                    lastWeek: "[síðstu] dddd [kl] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "um %s",
                    past: "%s síðani",
                    s: "fá sekund",
                    m: "ein minutt",
                    mm: "%d minuttir",
                    h: "ein tími",
                    hh: "%d tímar",
                    d: "ein dagur",
                    dd: "%d dagar",
                    M: "ein mánaði",
                    MM: "%d mánaðir",
                    y: "eitt ár",
                    yy: "%d ár"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("fr", {
                months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
                monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
                monthsParseExact: !0,
                weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Aujourd’hui à] LT",
                    nextDay: "[Demain à] LT",
                    nextWeek: "dddd [à] LT",
                    lastDay: "[Hier à] LT",
                    lastWeek: "dddd [dernier à] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dans %s",
                    past: "il y a %s",
                    s: "quelques secondes",
                    m: "une minute",
                    mm: "%d minutes",
                    h: "une heure",
                    hh: "%d heures",
                    d: "un jour",
                    dd: "%d jours",
                    M: "un mois",
                    MM: "%d mois",
                    y: "un an",
                    yy: "%d ans"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "D":
                            return e + (1 === e ? "er" : "");
                        default:
                        case "M":
                        case "Q":
                        case "DDD":
                        case "d":
                            return e + (1 === e ? "er" : "e");
                        case "w":
                        case "W":
                            return e + (1 === e ? "re" : "e")
                    }
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("fr-ca", {
                months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
                monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
                monthsParseExact: !0,
                weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Aujourd’hui à] LT",
                    nextDay: "[Demain à] LT",
                    nextWeek: "dddd [à] LT",
                    lastDay: "[Hier à] LT",
                    lastWeek: "dddd [dernier à] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dans %s",
                    past: "il y a %s",
                    s: "quelques secondes",
                    m: "une minute",
                    mm: "%d minutes",
                    h: "une heure",
                    hh: "%d heures",
                    d: "un jour",
                    dd: "%d jours",
                    M: "un mois",
                    MM: "%d mois",
                    y: "un an",
                    yy: "%d ans"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
                ordinal: function(e, t) {
                    switch (t) {
                        default:
                        case "M":
                        case "Q":
                        case "D":
                        case "DDD":
                        case "d":
                            return e + (1 === e ? "er" : "e");
                        case "w":
                        case "W":
                            return e + (1 === e ? "re" : "e")
                    }
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("fr-ch", {
                months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"),
                monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"),
                monthsParseExact: !0,
                weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Aujourd’hui à] LT",
                    nextDay: "[Demain à] LT",
                    nextWeek: "dddd [à] LT",
                    lastDay: "[Hier à] LT",
                    lastWeek: "dddd [dernier à] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dans %s",
                    past: "il y a %s",
                    s: "quelques secondes",
                    m: "une minute",
                    mm: "%d minutes",
                    h: "une heure",
                    hh: "%d heures",
                    d: "un jour",
                    dd: "%d jours",
                    M: "un mois",
                    MM: "%d mois",
                    y: "un an",
                    yy: "%d ans"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(er|e)/,
                ordinal: function(e, t) {
                    switch (t) {
                        default:
                        case "M":
                        case "Q":
                        case "D":
                        case "DDD":
                        case "d":
                            return e + (1 === e ? "er" : "e");
                        case "w":
                        case "W":
                            return e + (1 === e ? "re" : "e")
                    }
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_")
                , n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_")
                , r = e.defineLocale("fy", {
                months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"),
                monthsShort: function(e, r) {
                    return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
                },
                monthsParseExact: !0,
                weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"),
                weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"),
                weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD-MM-YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[hjoed om] LT",
                    nextDay: "[moarn om] LT",
                    nextWeek: "dddd [om] LT",
                    lastDay: "[juster om] LT",
                    lastWeek: "[ôfrûne] dddd [om] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "oer %s",
                    past: "%s lyn",
                    s: "in pear sekonden",
                    m: "ien minút",
                    mm: "%d minuten",
                    h: "ien oere",
                    hh: "%d oeren",
                    d: "ien dei",
                    dd: "%d dagen",
                    M: "ien moanne",
                    MM: "%d moannen",
                    y: "ien jier",
                    yy: "%d jierren"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                ordinal: function(e) {
                    return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return r
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"]
                , n = ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"]
                , r = ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"]
                , a = ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"]
                , i = ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"]
                , s = e.defineLocale("gd", {
                months: t,
                monthsShort: n,
                monthsParseExact: !0,
                weekdays: r,
                weekdaysShort: a,
                weekdaysMin: i,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[An-diugh aig] LT",
                    nextDay: "[A-màireach aig] LT",
                    nextWeek: "dddd [aig] LT",
                    lastDay: "[An-dè aig] LT",
                    lastWeek: "dddd [seo chaidh] [aig] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ann an %s",
                    past: "bho chionn %s",
                    s: "beagan diogan",
                    m: "mionaid",
                    mm: "%d mionaidean",
                    h: "uair",
                    hh: "%d uairean",
                    d: "latha",
                    dd: "%d latha",
                    M: "mìos",
                    MM: "%d mìosan",
                    y: "bliadhna",
                    yy: "%d bliadhna"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/,
                ordinal: function(e) {
                    var t = 1 === e ? "d" : e % 10 === 2 ? "na" : "mh";
                    return e + t
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return s
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("gl", {
                months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"),
                monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"),
                weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"),
                weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY H:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY H:mm"
                },
                calendar: {
                    sameDay: function() {
                        return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                    },
                    nextDay: function() {
                        return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT"
                    },
                    nextWeek: function() {
                        return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT"
                    },
                    lastDay: function() {
                        return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT"
                    },
                    lastWeek: function() {
                        return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: function(e) {
                        return 0 === e.indexOf("un") ? "n" + e : "en " + e
                    },
                    past: "hai %s",
                    s: "uns segundos",
                    m: "un minuto",
                    mm: "%d minutos",
                    h: "unha hora",
                    hh: "%d horas",
                    d: "un día",
                    dd: "%d días",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un ano",
                    yy: "%d anos"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            function t(e, t, n, r) {
                var a = {
                    s: ["thodde secondanim", "thodde second"],
                    m: ["eka mintan", "ek minute"],
                    mm: [e + " mintanim", e + " mintam"],
                    h: ["eka horan", "ek hor"],
                    hh: [e + " horanim", e + " hor"],
                    d: ["eka disan", "ek dis"],
                    dd: [e + " disanim", e + " dis"],
                    M: ["eka mhoinean", "ek mhoino"],
                    MM: [e + " mhoineanim", e + " mhoine"],
                    y: ["eka vorsan", "ek voros"],
                    yy: [e + " vorsanim", e + " vorsam"]
                };
                return t ? a[n][0] : a[n][1]
            }
            var n = e.defineLocale("gom-latn", {
                months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"),
                monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"),
                monthsParseExact: !0,
                weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"),
                weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"),
                weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "A h:mm [vazta]",
                    LTS: "A h:mm:ss [vazta]",
                    L: "DD-MM-YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY A h:mm [vazta]",
                    LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]",
                    llll: "ddd, D MMM YYYY, A h:mm [vazta]"
                },
                calendar: {
                    sameDay: "[Aiz] LT",
                    nextDay: "[Faleam] LT",
                    nextWeek: "[Ieta to] dddd[,] LT",
                    lastDay: "[Kal] LT",
                    lastWeek: "[Fatlo] dddd[,] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s",
                    past: "%s adim",
                    s: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}(er)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "D":
                            return e + "er";
                        default:
                        case "M":
                        case "Q":
                        case "DDD":
                        case "d":
                        case "w":
                        case "W":
                            return e
                    }
                },
                week: {
                    dow: 1,
                    doy: 4
                },
                meridiemParse: /rati|sokalli|donparam|sanje/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0),
                        "rati" === t ? e < 4 ? e : e + 12 : "sokalli" === t ? e : "donparam" === t ? e > 12 ? e : e + 12 : "sanje" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "rati" : e < 12 ? "sokalli" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati"
                }
            });
            return n
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("he", {
                months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"),
                monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"),
                weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"),
                weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"),
                weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [ב]MMMM YYYY",
                    LLL: "D [ב]MMMM YYYY HH:mm",
                    LLLL: "dddd, D [ב]MMMM YYYY HH:mm",
                    l: "D/M/YYYY",
                    ll: "D MMM YYYY",
                    lll: "D MMM YYYY HH:mm",
                    llll: "ddd, D MMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[היום ב־]LT",
                    nextDay: "[מחר ב־]LT",
                    nextWeek: "dddd [בשעה] LT",
                    lastDay: "[אתמול ב־]LT",
                    lastWeek: "[ביום] dddd [האחרון בשעה] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "בעוד %s",
                    past: "לפני %s",
                    s: "מספר שניות",
                    m: "דקה",
                    mm: "%d דקות",
                    h: "שעה",
                    hh: function(e) {
                        return 2 === e ? "שעתיים" : e + " שעות"
                    },
                    d: "יום",
                    dd: function(e) {
                        return 2 === e ? "יומיים" : e + " ימים"
                    },
                    M: "חודש",
                    MM: function(e) {
                        return 2 === e ? "חודשיים" : e + " חודשים"
                    },
                    y: "שנה",
                    yy: function(e) {
                        return 2 === e ? "שנתיים" : e % 10 === 0 && 10 !== e ? e + " שנה" : e + " שנים"
                    }
                },
                meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i,
                isPM: function(e) {
                    return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e)
                },
                meridiem: function(e, t, n) {
                    return e < 5 ? "לפנות בוקר" : e < 10 ? "בבוקר" : e < 12 ? n ? 'לפנה"צ' : "לפני הצהריים" : e < 18 ? n ? 'אחה"צ' : "אחרי הצהריים" : "בערב"
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = {
                1: "१",
                2: "२",
                3: "३",
                4: "४",
                5: "५",
                6: "६",
                7: "७",
                8: "८",
                9: "९",
                0: "०"
            }
                , n = {
                "१": "1",
                "२": "2",
                "३": "3",
                "४": "4",
                "५": "5",
                "६": "6",
                "७": "7",
                "८": "8",
                "९": "9",
                "०": "0"
            }
                , r = e.defineLocale("hi", {
                months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"),
                monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"),
                monthsParseExact: !0,
                weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
                weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"),
                weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
                longDateFormat: {
                    LT: "A h:mm बजे",
                    LTS: "A h:mm:ss बजे",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm बजे",
                    LLLL: "dddd, D MMMM YYYY, A h:mm बजे"
                },
                calendar: {
                    sameDay: "[आज] LT",
                    nextDay: "[कल] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[कल] LT",
                    lastWeek: "[पिछले] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s में",
                    past: "%s पहले",
                    s: "कुछ ही क्षण",
                    m: "एक मिनट",
                    mm: "%d मिनट",
                    h: "एक घंटा",
                    hh: "%d घंटे",
                    d: "एक दिन",
                    dd: "%d दिन",
                    M: "एक महीने",
                    MM: "%d महीने",
                    y: "एक वर्ष",
                    yy: "%d वर्ष"
                },
                preparse: function(e) {
                    return e.replace(/[१२३४५६७८९०]/g, function(e) {
                        return n[e]
                    })
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e]
                    })
                },
                meridiemParse: /रात|सुबह|दोपहर|शाम/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0),
                        "रात" === t ? e < 4 ? e : e + 12 : "सुबह" === t ? e : "दोपहर" === t ? e >= 10 ? e : e + 12 : "शाम" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "रात" : e < 10 ? "सुबह" : e < 17 ? "दोपहर" : e < 20 ? "शाम" : "रात"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            });
            return r
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            function t(e, t, n) {
                var r = e + " ";
                switch (n) {
                    case "m":
                        return t ? "jedna minuta" : "jedne minute";
                    case "mm":
                        return r += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                    case "h":
                        return t ? "jedan sat" : "jednog sata";
                    case "hh":
                        return r += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                    case "dd":
                        return r += 1 === e ? "dan" : "dana";
                    case "MM":
                        return r += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                    case "yy":
                        return r += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina"
                }
            }
            var n = e.defineLocale("hr", {
                months: {
                    format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
                    standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_")
                },
                monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
                monthsParseExact: !0,
                weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
                weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
                weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danas u] LT",
                    nextDay: "[sutra u] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[u] [nedjelju] [u] LT";
                            case 3:
                                return "[u] [srijedu] [u] LT";
                            case 6:
                                return "[u] [subotu] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[u] dddd [u] LT"
                        }
                    },
                    lastDay: "[jučer u] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                                return "[prošlu] dddd [u] LT";
                            case 6:
                                return "[prošle] [subote] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[prošli] dddd [u] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "prije %s",
                    s: "par sekundi",
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: "dan",
                    dd: t,
                    M: "mjesec",
                    MM: t,
                    y: "godinu",
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return n
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            function t(e, t, n, r) {
                var a = e;
                switch (n) {
                    case "s":
                        return r || t ? "néhány másodperc" : "néhány másodperce";
                    case "m":
                        return "egy" + (r || t ? " perc" : " perce");
                    case "mm":
                        return a + (r || t ? " perc" : " perce");
                    case "h":
                        return "egy" + (r || t ? " óra" : " órája");
                    case "hh":
                        return a + (r || t ? " óra" : " órája");
                    case "d":
                        return "egy" + (r || t ? " nap" : " napja");
                    case "dd":
                        return a + (r || t ? " nap" : " napja");
                    case "M":
                        return "egy" + (r || t ? " hónap" : " hónapja");
                    case "MM":
                        return a + (r || t ? " hónap" : " hónapja");
                    case "y":
                        return "egy" + (r || t ? " év" : " éve");
                    case "yy":
                        return a + (r || t ? " év" : " éve")
                }
                return ""
            }
            function n(e) {
                return (e ? "" : "[múlt] ") + "[" + r[this.day()] + "] LT[-kor]"
            }
            var r = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ")
                , a = e.defineLocale("hu", {
                months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"),
                monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"),
                weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"),
                weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"),
                weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "YYYY.MM.DD.",
                    LL: "YYYY. MMMM D.",
                    LLL: "YYYY. MMMM D. H:mm",
                    LLLL: "YYYY. MMMM D., dddd H:mm"
                },
                meridiemParse: /de|du/i,
                isPM: function(e) {
                    return "u" === e.charAt(1).toLowerCase()
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? n === !0 ? "de" : "DE" : n === !0 ? "du" : "DU"
                },
                calendar: {
                    sameDay: "[ma] LT[-kor]",
                    nextDay: "[holnap] LT[-kor]",
                    nextWeek: function() {
                        return n.call(this, !0)
                    },
                    lastDay: "[tegnap] LT[-kor]",
                    lastWeek: function() {
                        return n.call(this, !1)
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s múlva",
                    past: "%s",
                    s: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return a
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("hy-am", {
                months: {
                    format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"),
                    standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_")
                },
                monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"),
                weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"),
                weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
                weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY թ.",
                    LLL: "D MMMM YYYY թ., HH:mm",
                    LLLL: "dddd, D MMMM YYYY թ., HH:mm"
                },
                calendar: {
                    sameDay: "[այսօր] LT",
                    nextDay: "[վաղը] LT",
                    lastDay: "[երեկ] LT",
                    nextWeek: function() {
                        return "dddd [օրը ժամը] LT"
                    },
                    lastWeek: function() {
                        return "[անցած] dddd [օրը ժամը] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s հետո",
                    past: "%s առաջ",
                    s: "մի քանի վայրկյան",
                    m: "րոպե",
                    mm: "%d րոպե",
                    h: "ժամ",
                    hh: "%d ժամ",
                    d: "օր",
                    dd: "%d օր",
                    M: "ամիս",
                    MM: "%d ամիս",
                    y: "տարի",
                    yy: "%d տարի"
                },
                meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/,
                isPM: function(e) {
                    return /^(ցերեկվա|երեկոյան)$/.test(e)
                },
                meridiem: function(e) {
                    return e < 4 ? "գիշերվա" : e < 12 ? "առավոտվա" : e < 17 ? "ցերեկվա" : "երեկոյան"
                },
                dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "DDD":
                        case "w":
                        case "W":
                        case "DDDo":
                            return 1 === e ? e + "-ին" : e + "-րդ";
                        default:
                            return e
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("id", {
                months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),
                weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
                weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
                weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse: /pagi|siang|sore|malam/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0),
                        "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam"
                },
                calendar: {
                    sameDay: "[Hari ini pukul] LT",
                    nextDay: "[Besok pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kemarin pukul] LT",
                    lastWeek: "dddd [lalu pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dalam %s",
                    past: "%s yang lalu",
                    s: "beberapa detik",
                    m: "semenit",
                    mm: "%d menit",
                    h: "sejam",
                    hh: "%d jam",
                    d: "sehari",
                    dd: "%d hari",
                    M: "sebulan",
                    MM: "%d bulan",
                    y: "setahun",
                    yy: "%d tahun"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            function t(e) {
                return e % 100 === 11 || e % 10 !== 1
            }
            function n(e, n, r, a) {
                var i = e + " ";
                switch (r) {
                    case "s":
                        return n || a ? "nokkrar sekúndur" : "nokkrum sekúndum";
                    case "m":
                        return n ? "mínúta" : "mínútu";
                    case "mm":
                        return t(e) ? i + (n || a ? "mínútur" : "mínútum") : n ? i + "mínúta" : i + "mínútu";
                    case "hh":
                        return t(e) ? i + (n || a ? "klukkustundir" : "klukkustundum") : i + "klukkustund";
                    case "d":
                        return n ? "dagur" : a ? "dag" : "degi";
                    case "dd":
                        return t(e) ? n ? i + "dagar" : i + (a ? "daga" : "dögum") : n ? i + "dagur" : i + (a ? "dag" : "degi");
                    case "M":
                        return n ? "mánuður" : a ? "mánuð" : "mánuði";
                    case "MM":
                        return t(e) ? n ? i + "mánuðir" : i + (a ? "mánuði" : "mánuðum") : n ? i + "mánuður" : i + (a ? "mánuð" : "mánuði");
                    case "y":
                        return n || a ? "ár" : "ári";
                    case "yy":
                        return t(e) ? i + (n || a ? "ár" : "árum") : i + (n || a ? "ár" : "ári")
                }
            }
            var r = e.defineLocale("is", {
                months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"),
                monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"),
                weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"),
                weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"),
                weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY [kl.] H:mm",
                    LLLL: "dddd, D. MMMM YYYY [kl.] H:mm"
                },
                calendar: {
                    sameDay: "[í dag kl.] LT",
                    nextDay: "[á morgun kl.] LT",
                    nextWeek: "dddd [kl.] LT",
                    lastDay: "[í gær kl.] LT",
                    lastWeek: "[síðasta] dddd [kl.] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "eftir %s",
                    past: "fyrir %s síðan",
                    s: n,
                    m: n,
                    mm: n,
                    h: "klukkustund",
                    hh: n,
                    d: n,
                    dd: n,
                    M: n,
                    MM: n,
                    y: n,
                    yy: n
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return r
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("it", {
                months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
                monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
                weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"),
                weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
                weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Oggi alle] LT",
                    nextDay: "[Domani alle] LT",
                    nextWeek: "dddd [alle] LT",
                    lastDay: "[Ieri alle] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[la scorsa] dddd [alle] LT";
                            default:
                                return "[lo scorso] dddd [alle] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: function(e) {
                        return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e
                    },
                    past: "%s fa",
                    s: "alcuni secondi",
                    m: "un minuto",
                    mm: "%d minuti",
                    h: "un'ora",
                    hh: "%d ore",
                    d: "un giorno",
                    dd: "%d giorni",
                    M: "un mese",
                    MM: "%d mesi",
                    y: "un anno",
                    yy: "%d anni"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("ja", {
                months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"),
                weekdaysShort: "日_月_火_水_木_金_土".split("_"),
                weekdaysMin: "日_月_火_水_木_金_土".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY/MM/DD",
                    LL: "YYYY年M月D日",
                    LLL: "YYYY年M月D日 HH:mm",
                    LLLL: "YYYY年M月D日 HH:mm dddd",
                    l: "YYYY/MM/DD",
                    ll: "YYYY年M月D日",
                    lll: "YYYY年M月D日 HH:mm",
                    llll: "YYYY年M月D日 HH:mm dddd"
                },
                meridiemParse: /午前|午後/i,
                isPM: function(e) {
                    return "午後" === e
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "午前" : "午後"
                },
                calendar: {
                    sameDay: "[今日] LT",
                    nextDay: "[明日] LT",
                    nextWeek: "[来週]dddd LT",
                    lastDay: "[昨日] LT",
                    lastWeek: "[前週]dddd LT",
                    sameElse: "L"
                },
                dayOfMonthOrdinalParse: /\d{1,2}日/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "d":
                        case "D":
                        case "DDD":
                            return e + "日";
                        default:
                            return e
                    }
                },
                relativeTime: {
                    future: "%s後",
                    past: "%s前",
                    s: "数秒",
                    m: "1分",
                    mm: "%d分",
                    h: "1時間",
                    hh: "%d時間",
                    d: "1日",
                    dd: "%d日",
                    M: "1ヶ月",
                    MM: "%dヶ月",
                    y: "1年",
                    yy: "%d年"
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("jv", {
                months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"),
                monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"),
                weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"),
                weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"),
                weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse: /enjing|siyang|sonten|ndalu/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0),
                        "enjing" === t ? e : "siyang" === t ? e >= 11 ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu"
                },
                calendar: {
                    sameDay: "[Dinten puniko pukul] LT",
                    nextDay: "[Mbenjang pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kala wingi pukul] LT",
                    lastWeek: "dddd [kepengker pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "wonten ing %s",
                    past: "%s ingkang kepengker",
                    s: "sawetawis detik",
                    m: "setunggal menit",
                    mm: "%d menit",
                    h: "setunggal jam",
                    hh: "%d jam",
                    d: "sedinten",
                    dd: "%d dinten",
                    M: "sewulan",
                    MM: "%d wulan",
                    y: "setaun",
                    yy: "%d taun"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("ka", {
                months: {
                    standalone: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"),
                    format: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_")
                },
                monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"),
                weekdays: {
                    standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"),
                    format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"),
                    isFormat: /(წინა|შემდეგ)/
                },
                weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"),
                weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[დღეს] LT[-ზე]",
                    nextDay: "[ხვალ] LT[-ზე]",
                    lastDay: "[გუშინ] LT[-ზე]",
                    nextWeek: "[შემდეგ] dddd LT[-ზე]",
                    lastWeek: "[წინა] dddd LT-ზე",
                    sameElse: "L"
                },
                relativeTime: {
                    future: function(e) {
                        return /(წამი|წუთი|საათი|წელი)/.test(e) ? e.replace(/ი$/, "ში") : e + "ში"
                    },
                    past: function(e) {
                        return /(წამი|წუთი|საათი|დღე|თვე)/.test(e) ? e.replace(/(ი|ე)$/, "ის უკან") : /წელი/.test(e) ? e.replace(/წელი$/, "წლის უკან") : void 0
                    },
                    s: "რამდენიმე წამი",
                    m: "წუთი",
                    mm: "%d წუთი",
                    h: "საათი",
                    hh: "%d საათი",
                    d: "დღე",
                    dd: "%d დღე",
                    M: "თვე",
                    MM: "%d თვე",
                    y: "წელი",
                    yy: "%d წელი"
                },
                dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/,
                ordinal: function(e) {
                    return 0 === e ? e : 1 === e ? e + "-ლი" : e < 20 || e <= 100 && e % 20 === 0 || e % 100 === 0 ? "მე-" + e : e + "-ე"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = {
                0: "-ші",
                1: "-ші",
                2: "-ші",
                3: "-ші",
                4: "-ші",
                5: "-ші",
                6: "-шы",
                7: "-ші",
                8: "-ші",
                9: "-шы",
                10: "-шы",
                20: "-шы",
                30: "-шы",
                40: "-шы",
                50: "-ші",
                60: "-шы",
                70: "-ші",
                80: "-ші",
                90: "-шы",
                100: "-ші"
            }
                , n = e.defineLocale("kk", {
                months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"),
                monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"),
                weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"),
                weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"),
                weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Бүгін сағат] LT",
                    nextDay: "[Ертең сағат] LT",
                    nextWeek: "dddd [сағат] LT",
                    lastDay: "[Кеше сағат] LT",
                    lastWeek: "[Өткен аптаның] dddd [сағат] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s ішінде",
                    past: "%s бұрын",
                    s: "бірнеше секунд",
                    m: "бір минут",
                    mm: "%d минут",
                    h: "бір сағат",
                    hh: "%d сағат",
                    d: "бір күн",
                    dd: "%d күн",
                    M: "бір ай",
                    MM: "%d ай",
                    y: "бір жыл",
                    yy: "%d жыл"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/,
                ordinal: function(e) {
                    var n = e % 10
                        , r = e >= 100 ? 100 : null;
                    return e + (t[e] || t[n] || t[r])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return n
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("km", {
                months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
                monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"),
                weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
                weekdaysShort: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
                weekdaysMin: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[ថ្ងៃនេះ ម៉ោង] LT",
                    nextDay: "[ស្អែក ម៉ោង] LT",
                    nextWeek: "dddd [ម៉ោង] LT",
                    lastDay: "[ម្សិលមិញ ម៉ោង] LT",
                    lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%sទៀត",
                    past: "%sមុន",
                    s: "ប៉ុន្មានវិនាទី",
                    m: "មួយនាទី",
                    mm: "%d នាទី",
                    h: "មួយម៉ោង",
                    hh: "%d ម៉ោង",
                    d: "មួយថ្ងៃ",
                    dd: "%d ថ្ងៃ",
                    M: "មួយខែ",
                    MM: "%d ខែ",
                    y: "មួយឆ្នាំ",
                    yy: "%d ឆ្នាំ"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = {
                1: "೧",
                2: "೨",
                3: "೩",
                4: "೪",
                5: "೫",
                6: "೬",
                7: "೭",
                8: "೮",
                9: "೯",
                0: "೦"
            }
                , n = {
                "೧": "1",
                "೨": "2",
                "೩": "3",
                "೪": "4",
                "೫": "5",
                "೬": "6",
                "೭": "7",
                "೮": "8",
                "೯": "9",
                "೦": "0"
            }
                , r = e.defineLocale("kn", {
                months: "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"),
                monthsShort: "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬ_ಅಕ್ಟೋಬ_ನವೆಂಬ_ಡಿಸೆಂಬ".split("_"),
                monthsParseExact: !0,
                weekdays: "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"),
                weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"),
                weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"),
                longDateFormat: {
                    LT: "A h:mm",
                    LTS: "A h:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm",
                    LLLL: "dddd, D MMMM YYYY, A h:mm"
                },
                calendar: {
                    sameDay: "[ಇಂದು] LT",
                    nextDay: "[ನಾಳೆ] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[ನಿನ್ನೆ] LT",
                    lastWeek: "[ಕೊನೆಯ] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s ನಂತರ",
                    past: "%s ಹಿಂದೆ",
                    s: "ಕೆಲವು ಕ್ಷಣಗಳು",
                    m: "ಒಂದು ನಿಮಿಷ",
                    mm: "%d ನಿಮಿಷ",
                    h: "ಒಂದು ಗಂಟೆ",
                    hh: "%d ಗಂಟೆ",
                    d: "ಒಂದು ದಿನ",
                    dd: "%d ದಿನ",
                    M: "ಒಂದು ತಿಂಗಳು",
                    MM: "%d ತಿಂಗಳು",
                    y: "ಒಂದು ವರ್ಷ",
                    yy: "%d ವರ್ಷ"
                },
                preparse: function(e) {
                    return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function(e) {
                        return n[e]
                    })
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e]
                    })
                },
                meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0),
                        "ರಾತ್ರಿ" === t ? e < 4 ? e : e + 12 : "ಬೆಳಿಗ್ಗೆ" === t ? e : "ಮಧ್ಯಾಹ್ನ" === t ? e >= 10 ? e : e + 12 : "ಸಂಜೆ" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "ರಾತ್ರಿ" : e < 10 ? "ಬೆಳಿಗ್ಗೆ" : e < 17 ? "ಮಧ್ಯಾಹ್ನ" : e < 20 ? "ಸಂಜೆ" : "ರಾತ್ರಿ"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/,
                ordinal: function(e) {
                    return e + "ನೇ"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            });
            return r
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("ko", {
                months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
                monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"),
                weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"),
                weekdaysShort: "일_월_화_수_목_금_토".split("_"),
                weekdaysMin: "일_월_화_수_목_금_토".split("_"),
                longDateFormat: {
                    LT: "A h:mm",
                    LTS: "A h:mm:ss",
                    L: "YYYY.MM.DD",
                    LL: "YYYY년 MMMM D일",
                    LLL: "YYYY년 MMMM D일 A h:mm",
                    LLLL: "YYYY년 MMMM D일 dddd A h:mm",
                    l: "YYYY.MM.DD",
                    ll: "YYYY년 MMMM D일",
                    lll: "YYYY년 MMMM D일 A h:mm",
                    llll: "YYYY년 MMMM D일 dddd A h:mm"
                },
                calendar: {
                    sameDay: "오늘 LT",
                    nextDay: "내일 LT",
                    nextWeek: "dddd LT",
                    lastDay: "어제 LT",
                    lastWeek: "지난주 dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s 후",
                    past: "%s 전",
                    s: "몇 초",
                    ss: "%d초",
                    m: "1분",
                    mm: "%d분",
                    h: "한 시간",
                    hh: "%d시간",
                    d: "하루",
                    dd: "%d일",
                    M: "한 달",
                    MM: "%d달",
                    y: "일 년",
                    yy: "%d년"
                },
                dayOfMonthOrdinalParse: /\d{1,2}일/,
                ordinal: "%d일",
                meridiemParse: /오전|오후/,
                isPM: function(e) {
                    return "오후" === e
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "오전" : "오후"
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = {
                0: "-чү",
                1: "-чи",
                2: "-чи",
                3: "-чү",
                4: "-чү",
                5: "-чи",
                6: "-чы",
                7: "-чи",
                8: "-чи",
                9: "-чу",
                10: "-чу",
                20: "-чы",
                30: "-чу",
                40: "-чы",
                50: "-чү",
                60: "-чы",
                70: "-чи",
                80: "-чи",
                90: "-чу",
                100: "-чү"
            }
                , n = e.defineLocale("ky", {
                months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"),
                monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"),
                weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"),
                weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"),
                weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Бүгүн саат] LT",
                    nextDay: "[Эртең саат] LT",
                    nextWeek: "dddd [саат] LT",
                    lastDay: "[Кече саат] LT",
                    lastWeek: "[Өткен аптанын] dddd [күнү] [саат] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s ичинде",
                    past: "%s мурун",
                    s: "бирнече секунд",
                    m: "бир мүнөт",
                    mm: "%d мүнөт",
                    h: "бир саат",
                    hh: "%d саат",
                    d: "бир күн",
                    dd: "%d күн",
                    M: "бир ай",
                    MM: "%d ай",
                    y: "бир жыл",
                    yy: "%d жыл"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/,
                ordinal: function(e) {
                    var n = e % 10
                        , r = e >= 100 ? 100 : null;
                    return e + (t[e] || t[n] || t[r])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return n
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            function t(e, t, n, r) {
                var a = {
                    m: ["eng Minutt", "enger Minutt"],
                    h: ["eng Stonn", "enger Stonn"],
                    d: ["een Dag", "engem Dag"],
                    M: ["ee Mount", "engem Mount"],
                    y: ["ee Joer", "engem Joer"]
                };
                return t ? a[n][0] : a[n][1]
            }
            function n(e) {
                var t = e.substr(0, e.indexOf(" "));
                return a(t) ? "a " + e : "an " + e
            }
            function r(e) {
                var t = e.substr(0, e.indexOf(" "));
                return a(t) ? "viru " + e : "virun " + e
            }
            function a(e) {
                if (e = parseInt(e, 10),
                    isNaN(e))
                    return !1;
                if (e < 0)
                    return !0;
                if (e < 10)
                    return 4 <= e && e <= 7;
                if (e < 100) {
                    var t = e % 10
                        , n = e / 10;
                    return a(0 === t ? n : t)
                }
                if (e < 1e4) {
                    for (; e >= 10; )
                        e /= 10;
                    return a(e)
                }
                return e /= 1e3,
                    a(e)
            }
            var i = e.defineLocale("lb", {
                months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"),
                monthsParseExact: !0,
                weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"),
                weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"),
                weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm [Auer]",
                    LTS: "H:mm:ss [Auer]",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm [Auer]",
                    LLLL: "dddd, D. MMMM YYYY H:mm [Auer]"
                },
                calendar: {
                    sameDay: "[Haut um] LT",
                    sameElse: "L",
                    nextDay: "[Muer um] LT",
                    nextWeek: "dddd [um] LT",
                    lastDay: "[Gëschter um] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 2:
                            case 4:
                                return "[Leschten] dddd [um] LT";
                            default:
                                return "[Leschte] dddd [um] LT"
                        }
                    }
                },
                relativeTime: {
                    future: n,
                    past: r,
                    s: "e puer Sekonnen",
                    m: t,
                    mm: "%d Minutten",
                    h: t,
                    hh: "%d Stonnen",
                    d: t,
                    dd: "%d Deeg",
                    M: t,
                    MM: "%d Méint",
                    y: t,
                    yy: "%d Joer"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return i
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("lo", {
                months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
                monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"),
                weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
                weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"),
                weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "ວັນdddd D MMMM YYYY HH:mm"
                },
                meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/,
                isPM: function(e) {
                    return "ຕອນແລງ" === e
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ"
                },
                calendar: {
                    sameDay: "[ມື້ນີ້ເວລາ] LT",
                    nextDay: "[ມື້ອື່ນເວລາ] LT",
                    nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT",
                    lastDay: "[ມື້ວານນີ້ເວລາ] LT",
                    lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ອີກ %s",
                    past: "%sຜ່ານມາ",
                    s: "ບໍ່ເທົ່າໃດວິນາທີ",
                    m: "1 ນາທີ",
                    mm: "%d ນາທີ",
                    h: "1 ຊົ່ວໂມງ",
                    hh: "%d ຊົ່ວໂມງ",
                    d: "1 ມື້",
                    dd: "%d ມື້",
                    M: "1 ເດືອນ",
                    MM: "%d ເດືອນ",
                    y: "1 ປີ",
                    yy: "%d ປີ"
                },
                dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/,
                ordinal: function(e) {
                    return "ທີ່" + e
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            function t(e, t, n, r) {
                return t ? "kelios sekundės" : r ? "kelių sekundžių" : "kelias sekundes"
            }
            function n(e, t, n, r) {
                return t ? a(n)[0] : r ? a(n)[1] : a(n)[2]
            }
            function r(e) {
                return e % 10 === 0 || e > 10 && e < 20
            }
            function a(e) {
                return s[e].split("_")
            }
            function i(e, t, i, s) {
                var o = e + " ";
                return 1 === e ? o + n(e, t, i[0], s) : t ? o + (r(e) ? a(i)[1] : a(i)[0]) : s ? o + a(i)[1] : o + (r(e) ? a(i)[1] : a(i)[2])
            }
            var s = {
                m: "minutė_minutės_minutę",
                mm: "minutės_minučių_minutes",
                h: "valanda_valandos_valandą",
                hh: "valandos_valandų_valandas",
                d: "diena_dienos_dieną",
                dd: "dienos_dienų_dienas",
                M: "mėnuo_mėnesio_mėnesį",
                MM: "mėnesiai_mėnesių_mėnesius",
                y: "metai_metų_metus",
                yy: "metai_metų_metus"
            }
                , o = e.defineLocale("lt", {
                months: {
                    format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"),
                    standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"),
                    isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/
                },
                monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
                weekdays: {
                    format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"),
                    standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"),
                    isFormat: /dddd HH:mm/
                },
                weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"),
                weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "YYYY [m.] MMMM D [d.]",
                    LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                    LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
                    l: "YYYY-MM-DD",
                    ll: "YYYY [m.] MMMM D [d.]",
                    lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                    llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
                },
                calendar: {
                    sameDay: "[Šiandien] LT",
                    nextDay: "[Rytoj] LT",
                    nextWeek: "dddd LT",
                    lastDay: "[Vakar] LT",
                    lastWeek: "[Praėjusį] dddd LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "po %s",
                    past: "prieš %s",
                    s: t,
                    m: n,
                    mm: i,
                    h: n,
                    hh: i,
                    d: n,
                    dd: i,
                    M: n,
                    MM: i,
                    y: n,
                    yy: i
                },
                dayOfMonthOrdinalParse: /\d{1,2}-oji/,
                ordinal: function(e) {
                    return e + "-oji"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return o
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            function t(e, t, n) {
                return n ? t % 10 === 1 && t % 100 !== 11 ? e[2] : e[3] : t % 10 === 1 && t % 100 !== 11 ? e[0] : e[1]
            }
            function n(e, n, r) {
                return e + " " + t(i[r], e, n)
            }
            function r(e, n, r) {
                return t(i[r], e, n)
            }
            function a(e, t) {
                return t ? "dažas sekundes" : "dažām sekundēm"
            }
            var i = {
                m: "minūtes_minūtēm_minūte_minūtes".split("_"),
                mm: "minūtes_minūtēm_minūte_minūtes".split("_"),
                h: "stundas_stundām_stunda_stundas".split("_"),
                hh: "stundas_stundām_stunda_stundas".split("_"),
                d: "dienas_dienām_diena_dienas".split("_"),
                dd: "dienas_dienām_diena_dienas".split("_"),
                M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
                MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"),
                y: "gada_gadiem_gads_gadi".split("_"),
                yy: "gada_gadiem_gads_gadi".split("_")
            }
                , s = e.defineLocale("lv", {
                months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
                monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"),
                weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"),
                weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
                weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY.",
                    LL: "YYYY. [gada] D. MMMM",
                    LLL: "YYYY. [gada] D. MMMM, HH:mm",
                    LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm"
                },
                calendar: {
                    sameDay: "[Šodien pulksten] LT",
                    nextDay: "[Rīt pulksten] LT",
                    nextWeek: "dddd [pulksten] LT",
                    lastDay: "[Vakar pulksten] LT",
                    lastWeek: "[Pagājušā] dddd [pulksten] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "pēc %s",
                    past: "pirms %s",
                    s: a,
                    m: r,
                    mm: n,
                    h: r,
                    hh: n,
                    d: r,
                    dd: n,
                    M: r,
                    MM: n,
                    y: r,
                    yy: n
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return s
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = {
                words: {
                    m: ["jedan minut", "jednog minuta"],
                    mm: ["minut", "minuta", "minuta"],
                    h: ["jedan sat", "jednog sata"],
                    hh: ["sat", "sata", "sati"],
                    dd: ["dan", "dana", "dana"],
                    MM: ["mjesec", "mjeseca", "mjeseci"],
                    yy: ["godina", "godine", "godina"]
                },
                correctGrammaticalCase: function(e, t) {
                    return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
                },
                translate: function(e, n, r) {
                    var a = t.words[r];
                    return 1 === r.length ? n ? a[0] : a[1] : e + " " + t.correctGrammaticalCase(e, a)
                }
            }
                , n = e.defineLocale("me", {
                months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
                monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"),
                weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"),
                weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danas u] LT",
                    nextDay: "[sjutra u] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[u] [nedjelju] [u] LT";
                            case 3:
                                return "[u] [srijedu] [u] LT";
                            case 6:
                                return "[u] [subotu] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[u] dddd [u] LT"
                        }
                    },
                    lastDay: "[juče u] LT",
                    lastWeek: function() {
                        var e = ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"];
                        return e[this.day()]
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "prije %s",
                    s: "nekoliko sekundi",
                    m: t.translate,
                    mm: t.translate,
                    h: t.translate,
                    hh: t.translate,
                    d: "dan",
                    dd: t.translate,
                    M: "mjesec",
                    MM: t.translate,
                    y: "godinu",
                    yy: t.translate
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return n
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("mi", {
                months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"),
                monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"),
                monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
                monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
                monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i,
                monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i,
                weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"),
                weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
                weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [i] HH:mm",
                    LLLL: "dddd, D MMMM YYYY [i] HH:mm"
                },
                calendar: {
                    sameDay: "[i teie mahana, i] LT",
                    nextDay: "[apopo i] LT",
                    nextWeek: "dddd [i] LT",
                    lastDay: "[inanahi i] LT",
                    lastWeek: "dddd [whakamutunga i] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "i roto i %s",
                    past: "%s i mua",
                    s: "te hēkona ruarua",
                    m: "he meneti",
                    mm: "%d meneti",
                    h: "te haora",
                    hh: "%d haora",
                    d: "he ra",
                    dd: "%d ra",
                    M: "he marama",
                    MM: "%d marama",
                    y: "he tau",
                    yy: "%d tau"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("mk", {
                months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"),
                monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"),
                weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"),
                weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"),
                weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "D.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY H:mm",
                    LLLL: "dddd, D MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[Денес во] LT",
                    nextDay: "[Утре во] LT",
                    nextWeek: "[Во] dddd [во] LT",
                    lastDay: "[Вчера во] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 6:
                                return "[Изминатата] dddd [во] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[Изминатиот] dddd [во] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "после %s",
                    past: "пред %s",
                    s: "неколку секунди",
                    m: "минута",
                    mm: "%d минути",
                    h: "час",
                    hh: "%d часа",
                    d: "ден",
                    dd: "%d дена",
                    M: "месец",
                    MM: "%d месеци",
                    y: "година",
                    yy: "%d години"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/,
                ordinal: function(e) {
                    var t = e % 10
                        , n = e % 100;
                    return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("ml", {
                months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"),
                monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"),
                monthsParseExact: !0,
                weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"),
                weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"),
                weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"),
                longDateFormat: {
                    LT: "A h:mm -നു",
                    LTS: "A h:mm:ss -നു",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm -നു",
                    LLLL: "dddd, D MMMM YYYY, A h:mm -നു"
                },
                calendar: {
                    sameDay: "[ഇന്ന്] LT",
                    nextDay: "[നാളെ] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[ഇന്നലെ] LT",
                    lastWeek: "[കഴിഞ്ഞ] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s കഴിഞ്ഞ്",
                    past: "%s മുൻപ്",
                    s: "അൽപ നിമിഷങ്ങൾ",
                    m: "ഒരു മിനിറ്റ്",
                    mm: "%d മിനിറ്റ്",
                    h: "ഒരു മണിക്കൂർ",
                    hh: "%d മണിക്കൂർ",
                    d: "ഒരു ദിവസം",
                    dd: "%d ദിവസം",
                    M: "ഒരു മാസം",
                    MM: "%d മാസം",
                    y: "ഒരു വർഷം",
                    yy: "%d വർഷം"
                },
                meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0),
                        "രാത്രി" === t && e >= 4 || "ഉച്ച കഴിഞ്ഞ്" === t || "വൈകുന്നേരം" === t ? e + 12 : e
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "രാത്രി" : e < 12 ? "രാവിലെ" : e < 17 ? "ഉച്ച കഴിഞ്ഞ്" : e < 20 ? "വൈകുന്നേരം" : "രാത്രി"
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            function t(e, t, n, r) {
                var a = "";
                if (t)
                    switch (n) {
                        case "s":
                            a = "काही सेकंद";
                            break;
                        case "m":
                            a = "एक मिनिट";
                            break;
                        case "mm":
                            a = "%d मिनिटे";
                            break;
                        case "h":
                            a = "एक तास";
                            break;
                        case "hh":
                            a = "%d तास";
                            break;
                        case "d":
                            a = "एक दिवस";
                            break;
                        case "dd":
                            a = "%d दिवस";
                            break;
                        case "M":
                            a = "एक महिना";
                            break;
                        case "MM":
                            a = "%d महिने";
                            break;
                        case "y":
                            a = "एक वर्ष";
                            break;
                        case "yy":
                            a = "%d वर्षे"
                    }
                else
                    switch (n) {
                        case "s":
                            a = "काही सेकंदां";
                            break;
                        case "m":
                            a = "एका मिनिटा";
                            break;
                        case "mm":
                            a = "%d मिनिटां";
                            break;
                        case "h":
                            a = "एका तासा";
                            break;
                        case "hh":
                            a = "%d तासां";
                            break;
                        case "d":
                            a = "एका दिवसा";
                            break;
                        case "dd":
                            a = "%d दिवसां";
                            break;
                        case "M":
                            a = "एका महिन्या";
                            break;
                        case "MM":
                            a = "%d महिन्यां";
                            break;
                        case "y":
                            a = "एका वर्षा";
                            break;
                        case "yy":
                            a = "%d वर्षां"
                    }
                return a.replace(/%d/i, e)
            }
            var n = {
                1: "१",
                2: "२",
                3: "३",
                4: "४",
                5: "५",
                6: "६",
                7: "७",
                8: "८",
                9: "९",
                0: "०"
            }
                , r = {
                "१": "1",
                "२": "2",
                "३": "3",
                "४": "4",
                "५": "5",
                "६": "6",
                "७": "7",
                "८": "8",
                "९": "9",
                "०": "0"
            }
                , a = e.defineLocale("mr", {
                months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"),
                monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"),
                monthsParseExact: !0,
                weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"),
                weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"),
                weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"),
                longDateFormat: {
                    LT: "A h:mm वाजता",
                    LTS: "A h:mm:ss वाजता",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm वाजता",
                    LLLL: "dddd, D MMMM YYYY, A h:mm वाजता"
                },
                calendar: {
                    sameDay: "[आज] LT",
                    nextDay: "[उद्या] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[काल] LT",
                    lastWeek: "[मागील] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%sमध्ये",
                    past: "%sपूर्वी",
                    s: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                preparse: function(e) {
                    return e.replace(/[१२३४५६७८९०]/g, function(e) {
                        return r[e]
                    })
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return n[e]
                    })
                },
                meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0),
                        "रात्री" === t ? e < 4 ? e : e + 12 : "सकाळी" === t ? e : "दुपारी" === t ? e >= 10 ? e : e + 12 : "सायंकाळी" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "रात्री" : e < 10 ? "सकाळी" : e < 17 ? "दुपारी" : e < 20 ? "सायंकाळी" : "रात्री"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            });
            return a
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("ms", {
                months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
                monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
                weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
                weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
                weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse: /pagi|tengahari|petang|malam/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0),
                        "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
                },
                calendar: {
                    sameDay: "[Hari ini pukul] LT",
                    nextDay: "[Esok pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kelmarin pukul] LT",
                    lastWeek: "dddd [lepas pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dalam %s",
                    past: "%s yang lepas",
                    s: "beberapa saat",
                    m: "seminit",
                    mm: "%d minit",
                    h: "sejam",
                    hh: "%d jam",
                    d: "sehari",
                    dd: "%d hari",
                    M: "sebulan",
                    MM: "%d bulan",
                    y: "setahun",
                    yy: "%d tahun"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("ms-my", {
                months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"),
                monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"),
                weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"),
                weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"),
                weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [pukul] HH.mm",
                    LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
                },
                meridiemParse: /pagi|tengahari|petang|malam/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0),
                        "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam"
                },
                calendar: {
                    sameDay: "[Hari ini pukul] LT",
                    nextDay: "[Esok pukul] LT",
                    nextWeek: "dddd [pukul] LT",
                    lastDay: "[Kelmarin pukul] LT",
                    lastWeek: "dddd [lepas pukul] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dalam %s",
                    past: "%s yang lepas",
                    s: "beberapa saat",
                    m: "seminit",
                    mm: "%d minit",
                    h: "sejam",
                    hh: "%d jam",
                    d: "sehari",
                    dd: "%d hari",
                    M: "sebulan",
                    MM: "%d bulan",
                    y: "setahun",
                    yy: "%d tahun"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = {
                1: "၁",
                2: "၂",
                3: "၃",
                4: "၄",
                5: "၅",
                6: "၆",
                7: "၇",
                8: "၈",
                9: "၉",
                0: "၀"
            }
                , n = {
                "၁": "1",
                "၂": "2",
                "၃": "3",
                "၄": "4",
                "၅": "5",
                "၆": "6",
                "၇": "7",
                "၈": "8",
                "၉": "9",
                "၀": "0"
            }
                , r = e.defineLocale("my", {
                months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"),
                monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"),
                weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"),
                weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
                weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[ယနေ.] LT [မှာ]",
                    nextDay: "[မနက်ဖြန်] LT [မှာ]",
                    nextWeek: "dddd LT [မှာ]",
                    lastDay: "[မနေ.က] LT [မှာ]",
                    lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "လာမည့် %s မှာ",
                    past: "လွန်ခဲ့သော %s က",
                    s: "စက္ကန်.အနည်းငယ်",
                    m: "တစ်မိနစ်",
                    mm: "%d မိနစ်",
                    h: "တစ်နာရီ",
                    hh: "%d နာရီ",
                    d: "တစ်ရက်",
                    dd: "%d ရက်",
                    M: "တစ်လ",
                    MM: "%d လ",
                    y: "တစ်နှစ်",
                    yy: "%d နှစ်"
                },
                preparse: function(e) {
                    return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function(e) {
                        return n[e]
                    })
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e]
                    })
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return r
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("nb", {
                months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
                monthsParseExact: !0,
                weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"),
                weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"),
                weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY [kl.] HH:mm",
                    LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
                },
                calendar: {
                    sameDay: "[i dag kl.] LT",
                    nextDay: "[i morgen kl.] LT",
                    nextWeek: "dddd [kl.] LT",
                    lastDay: "[i går kl.] LT",
                    lastWeek: "[forrige] dddd [kl.] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "%s siden",
                    s: "noen sekunder",
                    m: "ett minutt",
                    mm: "%d minutter",
                    h: "en time",
                    hh: "%d timer",
                    d: "en dag",
                    dd: "%d dager",
                    M: "en måned",
                    MM: "%d måneder",
                    y: "ett år",
                    yy: "%d år"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = {
                1: "१",
                2: "२",
                3: "३",
                4: "४",
                5: "५",
                6: "६",
                7: "७",
                8: "८",
                9: "९",
                0: "०"
            }
                , n = {
                "१": "1",
                "२": "2",
                "३": "3",
                "४": "4",
                "५": "5",
                "६": "6",
                "७": "7",
                "८": "8",
                "९": "9",
                "०": "0"
            }
                , r = e.defineLocale("ne", {
                months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"),
                monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"),
                monthsParseExact: !0,
                weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"),
                weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"),
                weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "Aको h:mm बजे",
                    LTS: "Aको h:mm:ss बजे",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, Aको h:mm बजे",
                    LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे"
                },
                preparse: function(e) {
                    return e.replace(/[१२३४५६७८९०]/g, function(e) {
                        return n[e]
                    })
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e]
                    })
                },
                meridiemParse: /राति|बिहान|दिउँसो|साँझ/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0),
                        "राति" === t ? e < 4 ? e : e + 12 : "बिहान" === t ? e : "दिउँसो" === t ? e >= 10 ? e : e + 12 : "साँझ" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 3 ? "राति" : e < 12 ? "बिहान" : e < 16 ? "दिउँसो" : e < 20 ? "साँझ" : "राति"
                },
                calendar: {
                    sameDay: "[आज] LT",
                    nextDay: "[भोलि] LT",
                    nextWeek: "[आउँदो] dddd[,] LT",
                    lastDay: "[हिजो] LT",
                    lastWeek: "[गएको] dddd[,] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%sमा",
                    past: "%s अगाडि",
                    s: "केही क्षण",
                    m: "एक मिनेट",
                    mm: "%d मिनेट",
                    h: "एक घण्टा",
                    hh: "%d घण्टा",
                    d: "एक दिन",
                    dd: "%d दिन",
                    M: "एक महिना",
                    MM: "%d महिना",
                    y: "एक बर्ष",
                    yy: "%d बर्ष"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            });
            return r
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_")
                , n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_")
                , r = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i]
                , a = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i
                , i = e.defineLocale("nl", {
                months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
                monthsShort: function(e, r) {
                    return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
                },
                monthsRegex: a,
                monthsShortRegex: a,
                monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
                monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
                monthsParse: r,
                longMonthsParse: r,
                shortMonthsParse: r,
                weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
                weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
                weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD-MM-YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[vandaag om] LT",
                    nextDay: "[morgen om] LT",
                    nextWeek: "dddd [om] LT",
                    lastDay: "[gisteren om] LT",
                    lastWeek: "[afgelopen] dddd [om] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "over %s",
                    past: "%s geleden",
                    s: "een paar seconden",
                    m: "één minuut",
                    mm: "%d minuten",
                    h: "één uur",
                    hh: "%d uur",
                    d: "één dag",
                    dd: "%d dagen",
                    M: "één maand",
                    MM: "%d maanden",
                    y: "één jaar",
                    yy: "%d jaar"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                ordinal: function(e) {
                    return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return i
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_")
                , n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_")
                , r = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i]
                , a = /^(januari|februari|maart|april|mei|april|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i
                , i = e.defineLocale("nl-be", {
                months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
                monthsShort: function(e, r) {
                    return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t
                },
                monthsRegex: a,
                monthsShortRegex: a,
                monthsStrictRegex: /^(januari|februari|maart|mei|ju[nl]i|april|augustus|september|oktober|november|december)/i,
                monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i,
                monthsParse: r,
                longMonthsParse: r,
                shortMonthsParse: r,
                weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
                weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
                weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[vandaag om] LT",
                    nextDay: "[morgen om] LT",
                    nextWeek: "dddd [om] LT",
                    lastDay: "[gisteren om] LT",
                    lastWeek: "[afgelopen] dddd [om] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "over %s",
                    past: "%s geleden",
                    s: "een paar seconden",
                    m: "één minuut",
                    mm: "%d minuten",
                    h: "één uur",
                    hh: "%d uur",
                    d: "één dag",
                    dd: "%d dagen",
                    M: "één maand",
                    MM: "%d maanden",
                    y: "één jaar",
                    yy: "%d jaar"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/,
                ordinal: function(e) {
                    return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return i
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("nn", {
                months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"),
                weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"),
                weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"),
                weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY [kl.] H:mm",
                    LLLL: "dddd D. MMMM YYYY [kl.] HH:mm"
                },
                calendar: {
                    sameDay: "[I dag klokka] LT",
                    nextDay: "[I morgon klokka] LT",
                    nextWeek: "dddd [klokka] LT",
                    lastDay: "[I går klokka] LT",
                    lastWeek: "[Føregåande] dddd [klokka] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "%s sidan",
                    s: "nokre sekund",
                    m: "eit minutt",
                    mm: "%d minutt",
                    h: "ein time",
                    hh: "%d timar",
                    d: "ein dag",
                    dd: "%d dagar",
                    M: "ein månad",
                    MM: "%d månader",
                    y: "eit år",
                    yy: "%d år"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = {
                1: "੧",
                2: "੨",
                3: "੩",
                4: "੪",
                5: "੫",
                6: "੬",
                7: "੭",
                8: "੮",
                9: "੯",
                0: "੦"
            }
                , n = {
                "੧": "1",
                "੨": "2",
                "੩": "3",
                "੪": "4",
                "੫": "5",
                "੬": "6",
                "੭": "7",
                "੮": "8",
                "੯": "9",
                "੦": "0"
            }
                , r = e.defineLocale("pa-in", {
                months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
                monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"),
                weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"),
                weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
                weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"),
                longDateFormat: {
                    LT: "A h:mm ਵਜੇ",
                    LTS: "A h:mm:ss ਵਜੇ",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm ਵਜੇ",
                    LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ"
                },
                calendar: {
                    sameDay: "[ਅਜ] LT",
                    nextDay: "[ਕਲ] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[ਕਲ] LT",
                    lastWeek: "[ਪਿਛਲੇ] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s ਵਿੱਚ",
                    past: "%s ਪਿਛਲੇ",
                    s: "ਕੁਝ ਸਕਿੰਟ",
                    m: "ਇਕ ਮਿੰਟ",
                    mm: "%d ਮਿੰਟ",
                    h: "ਇੱਕ ਘੰਟਾ",
                    hh: "%d ਘੰਟੇ",
                    d: "ਇੱਕ ਦਿਨ",
                    dd: "%d ਦਿਨ",
                    M: "ਇੱਕ ਮਹੀਨਾ",
                    MM: "%d ਮਹੀਨੇ",
                    y: "ਇੱਕ ਸਾਲ",
                    yy: "%d ਸਾਲ"
                },
                preparse: function(e) {
                    return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function(e) {
                        return n[e]
                    })
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e]
                    })
                },
                meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0),
                        "ਰਾਤ" === t ? e < 4 ? e : e + 12 : "ਸਵੇਰ" === t ? e : "ਦੁਪਹਿਰ" === t ? e >= 10 ? e : e + 12 : "ਸ਼ਾਮ" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "ਰਾਤ" : e < 10 ? "ਸਵੇਰ" : e < 17 ? "ਦੁਪਹਿਰ" : e < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            });
            return r
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            function t(e) {
                return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 !== 1
            }
            function n(e, n, r) {
                var a = e + " ";
                switch (r) {
                    case "m":
                        return n ? "minuta" : "minutę";
                    case "mm":
                        return a + (t(e) ? "minuty" : "minut");
                    case "h":
                        return n ? "godzina" : "godzinę";
                    case "hh":
                        return a + (t(e) ? "godziny" : "godzin");
                    case "MM":
                        return a + (t(e) ? "miesiące" : "miesięcy");
                    case "yy":
                        return a + (t(e) ? "lata" : "lat")
                }
            }
            var r = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_")
                , a = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_")
                , i = e.defineLocale("pl", {
                months: function(e, t) {
                    return e ? "" === t ? "(" + a[e.month()] + "|" + r[e.month()] + ")" : /D MMMM/.test(t) ? a[e.month()] : r[e.month()] : r
                },
                monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"),
                weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"),
                weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"),
                weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Dziś o] LT",
                    nextDay: "[Jutro o] LT",
                    nextWeek: "[W] dddd [o] LT",
                    lastDay: "[Wczoraj o] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[W zeszłą niedzielę o] LT";
                            case 3:
                                return "[W zeszłą środę o] LT";
                            case 6:
                                return "[W zeszłą sobotę o] LT";
                            default:
                                return "[W zeszły] dddd [o] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "%s temu",
                    s: "kilka sekund",
                    m: n,
                    mm: n,
                    h: n,
                    hh: n,
                    d: "1 dzień",
                    dd: "%d dni",
                    M: "miesiąc",
                    MM: n,
                    y: "rok",
                    yy: n
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return i
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("pt", {
                months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
                monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
                weekdays: "Domingo_Segunda-Feira_Terça-Feira_Quarta-Feira_Quinta-Feira_Sexta-Feira_Sábado".split("_"),
                weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
                weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY HH:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Hoje às] LT",
                    nextDay: "[Amanhã às] LT",
                    nextWeek: "dddd [às] LT",
                    lastDay: "[Ontem às] LT",
                    lastWeek: function() {
                        return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "em %s",
                    past: "há %s",
                    s: "segundos",
                    m: "um minuto",
                    mm: "%d minutos",
                    h: "uma hora",
                    hh: "%d horas",
                    d: "um dia",
                    dd: "%d dias",
                    M: "um mês",
                    MM: "%d meses",
                    y: "um ano",
                    yy: "%d anos"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("pt-br", {
                months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"),
                monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"),
                weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"),
                weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"),
                weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY [às] HH:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm"
                },
                calendar: {
                    sameDay: "[Hoje às] LT",
                    nextDay: "[Amanhã às] LT",
                    nextWeek: "dddd [às] LT",
                    lastDay: "[Ontem às] LT",
                    lastWeek: function() {
                        return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT"
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "em %s",
                    past: "%s atrás",
                    s: "poucos segundos",
                    m: "um minuto",
                    mm: "%d minutos",
                    h: "uma hora",
                    hh: "%d horas",
                    d: "um dia",
                    dd: "%d dias",
                    M: "um mês",
                    MM: "%d meses",
                    y: "um ano",
                    yy: "%d anos"
                },
                dayOfMonthOrdinalParse: /\d{1,2}º/,
                ordinal: "%dº"
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            function t(e, t, n) {
                var r = {
                    mm: "minute",
                    hh: "ore",
                    dd: "zile",
                    MM: "luni",
                    yy: "ani"
                }
                    , a = " ";
                return (e % 100 >= 20 || e >= 100 && e % 100 === 0) && (a = " de "),
                e + a + r[n]
            }
            var n = e.defineLocale("ro", {
                months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"),
                monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"),
                weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"),
                weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY H:mm",
                    LLLL: "dddd, D MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[azi la] LT",
                    nextDay: "[mâine la] LT",
                    nextWeek: "dddd [la] LT",
                    lastDay: "[ieri la] LT",
                    lastWeek: "[fosta] dddd [la] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "peste %s",
                    past: "%s în urmă",
                    s: "câteva secunde",
                    m: "un minut",
                    mm: t,
                    h: "o oră",
                    hh: t,
                    d: "o zi",
                    dd: t,
                    M: "o lună",
                    MM: t,
                    y: "un an",
                    yy: t
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return n
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            function t(e, t) {
                var n = e.split("_");
                return t % 10 === 1 && t % 100 !== 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
            }
            function n(e, n, r) {
                var a = {
                    mm: n ? "минута_минуты_минут" : "минуту_минуты_минут",
                    hh: "час_часа_часов",
                    dd: "день_дня_дней",
                    MM: "месяц_месяца_месяцев",
                    yy: "год_года_лет"
                };
                return "m" === r ? n ? "минута" : "минуту" : e + " " + t(a[r], +e)
            }
            var r = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i]
                , a = e.defineLocale("ru", {
                months: {
                    format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"),
                    standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_")
                },
                monthsShort: {
                    format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"),
                    standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_")
                },
                weekdays: {
                    standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"),
                    format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"),
                    isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/
                },
                weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"),
                weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"),
                monthsParse: r,
                longMonthsParse: r,
                shortMonthsParse: r,
                monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
                monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i,
                monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i,
                monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY г.",
                    LLL: "D MMMM YYYY г., HH:mm",
                    LLLL: "dddd, D MMMM YYYY г., HH:mm"
                },
                calendar: {
                    sameDay: "[Сегодня в] LT",
                    nextDay: "[Завтра в] LT",
                    lastDay: "[Вчера в] LT",
                    nextWeek: function(e) {
                        if (e.week() === this.week())
                            return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
                        switch (this.day()) {
                            case 0:
                                return "[В следующее] dddd [в] LT";
                            case 1:
                            case 2:
                            case 4:
                                return "[В следующий] dddd [в] LT";
                            case 3:
                            case 5:
                            case 6:
                                return "[В следующую] dddd [в] LT"
                        }
                    },
                    lastWeek: function(e) {
                        if (e.week() === this.week())
                            return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT";
                        switch (this.day()) {
                            case 0:
                                return "[В прошлое] dddd [в] LT";
                            case 1:
                            case 2:
                            case 4:
                                return "[В прошлый] dddd [в] LT";
                            case 3:
                            case 5:
                            case 6:
                                return "[В прошлую] dddd [в] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "через %s",
                    past: "%s назад",
                    s: "несколько секунд",
                    m: n,
                    mm: n,
                    h: "час",
                    hh: n,
                    d: "день",
                    dd: n,
                    M: "месяц",
                    MM: n,
                    y: "год",
                    yy: n
                },
                meridiemParse: /ночи|утра|дня|вечера/i,
                isPM: function(e) {
                    return /^(дня|вечера)$/.test(e)
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "M":
                        case "d":
                        case "DDD":
                            return e + "-й";
                        case "D":
                            return e + "-го";
                        case "w":
                        case "W":
                            return e + "-я";
                        default:
                            return e
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return a
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = ["جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر"]
                , n = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"]
                , r = e.defineLocale("sd", {
                months: t,
                monthsShort: t,
                weekdays: n,
                weekdaysShort: n,
                weekdaysMin: n,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd، D MMMM YYYY HH:mm"
                },
                meridiemParse: /صبح|شام/,
                isPM: function(e) {
                    return "شام" === e
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "صبح" : "شام"
                },
                calendar: {
                    sameDay: "[اڄ] LT",
                    nextDay: "[سڀاڻي] LT",
                    nextWeek: "dddd [اڳين هفتي تي] LT",
                    lastDay: "[ڪالهه] LT",
                    lastWeek: "[گزريل هفتي] dddd [تي] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s پوء",
                    past: "%s اڳ",
                    s: "چند سيڪنڊ",
                    m: "هڪ منٽ",
                    mm: "%d منٽ",
                    h: "هڪ ڪلاڪ",
                    hh: "%d ڪلاڪ",
                    d: "هڪ ڏينهن",
                    dd: "%d ڏينهن",
                    M: "هڪ مهينو",
                    MM: "%d مهينا",
                    y: "هڪ سال",
                    yy: "%d سال"
                },
                preparse: function(e) {
                    return e.replace(/،/g, ",")
                },
                postformat: function(e) {
                    return e.replace(/,/g, "،")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return r
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("se", {
                months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"),
                monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"),
                weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"),
                weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"),
                weekdaysMin: "s_v_m_g_d_b_L".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "MMMM D. [b.] YYYY",
                    LLL: "MMMM D. [b.] YYYY [ti.] HH:mm",
                    LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm"
                },
                calendar: {
                    sameDay: "[otne ti] LT",
                    nextDay: "[ihttin ti] LT",
                    nextWeek: "dddd [ti] LT",
                    lastDay: "[ikte ti] LT",
                    lastWeek: "[ovddit] dddd [ti] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s geažes",
                    past: "maŋit %s",
                    s: "moadde sekunddat",
                    m: "okta minuhta",
                    mm: "%d minuhtat",
                    h: "okta diimmu",
                    hh: "%d diimmut",
                    d: "okta beaivi",
                    dd: "%d beaivvit",
                    M: "okta mánnu",
                    MM: "%d mánut",
                    y: "okta jahki",
                    yy: "%d jagit"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("si", {
                months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"),
                monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"),
                weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"),
                weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"),
                weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "a h:mm",
                    LTS: "a h:mm:ss",
                    L: "YYYY/MM/DD",
                    LL: "YYYY MMMM D",
                    LLL: "YYYY MMMM D, a h:mm",
                    LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss"
                },
                calendar: {
                    sameDay: "[අද] LT[ට]",
                    nextDay: "[හෙට] LT[ට]",
                    nextWeek: "dddd LT[ට]",
                    lastDay: "[ඊයේ] LT[ට]",
                    lastWeek: "[පසුගිය] dddd LT[ට]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%sකින්",
                    past: "%sකට පෙර",
                    s: "තත්පර කිහිපය",
                    m: "මිනිත්තුව",
                    mm: "මිනිත්තු %d",
                    h: "පැය",
                    hh: "පැය %d",
                    d: "දිනය",
                    dd: "දින %d",
                    M: "මාසය",
                    MM: "මාස %d",
                    y: "වසර",
                    yy: "වසර %d"
                },
                dayOfMonthOrdinalParse: /\d{1,2} වැනි/,
                ordinal: function(e) {
                    return e + " වැනි"
                },
                meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./,
                isPM: function(e) {
                    return "ප.ව." === e || "පස් වරු" === e
                },
                meridiem: function(e, t, n) {
                    return e > 11 ? n ? "ප.ව." : "පස් වරු" : n ? "පෙ.ව." : "පෙර වරු"
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            function t(e) {
                return e > 1 && e < 5
            }
            function n(e, n, r, a) {
                var i = e + " ";
                switch (r) {
                    case "s":
                        return n || a ? "pár sekúnd" : "pár sekundami";
                    case "m":
                        return n ? "minúta" : a ? "minútu" : "minútou";
                    case "mm":
                        return n || a ? i + (t(e) ? "minúty" : "minút") : i + "minútami";
                    case "h":
                        return n ? "hodina" : a ? "hodinu" : "hodinou";
                    case "hh":
                        return n || a ? i + (t(e) ? "hodiny" : "hodín") : i + "hodinami";
                    case "d":
                        return n || a ? "deň" : "dňom";
                    case "dd":
                        return n || a ? i + (t(e) ? "dni" : "dní") : i + "dňami";
                    case "M":
                        return n || a ? "mesiac" : "mesiacom";
                    case "MM":
                        return n || a ? i + (t(e) ? "mesiace" : "mesiacov") : i + "mesiacmi";
                    case "y":
                        return n || a ? "rok" : "rokom";
                    case "yy":
                        return n || a ? i + (t(e) ? "roky" : "rokov") : i + "rokmi"
                }
            }
            var r = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_")
                , a = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_")
                , i = e.defineLocale("sk", {
                months: r,
                monthsShort: a,
                weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"),
                weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"),
                weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"),
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[dnes o] LT",
                    nextDay: "[zajtra o] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[v nedeľu o] LT";
                            case 1:
                            case 2:
                                return "[v] dddd [o] LT";
                            case 3:
                                return "[v stredu o] LT";
                            case 4:
                                return "[vo štvrtok o] LT";
                            case 5:
                                return "[v piatok o] LT";
                            case 6:
                                return "[v sobotu o] LT"
                        }
                    },
                    lastDay: "[včera o] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[minulú nedeľu o] LT";
                            case 1:
                            case 2:
                                return "[minulý] dddd [o] LT";
                            case 3:
                                return "[minulú stredu o] LT";
                            case 4:
                            case 5:
                                return "[minulý] dddd [o] LT";
                            case 6:
                                return "[minulú sobotu o] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "pred %s",
                    s: n,
                    m: n,
                    mm: n,
                    h: n,
                    hh: n,
                    d: n,
                    dd: n,
                    M: n,
                    MM: n,
                    y: n,
                    yy: n
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return i
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            function t(e, t, n, r) {
                var a = e + " ";
                switch (n) {
                    case "s":
                        return t || r ? "nekaj sekund" : "nekaj sekundami";
                    case "m":
                        return t ? "ena minuta" : "eno minuto";
                    case "mm":
                        return a += 1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || r ? "minuti" : "minutama" : e < 5 ? t || r ? "minute" : "minutami" : t || r ? "minut" : "minutami";
                    case "h":
                        return t ? "ena ura" : "eno uro";
                    case "hh":
                        return a += 1 === e ? t ? "ura" : "uro" : 2 === e ? t || r ? "uri" : "urama" : e < 5 ? t || r ? "ure" : "urami" : t || r ? "ur" : "urami";
                    case "d":
                        return t || r ? "en dan" : "enim dnem";
                    case "dd":
                        return a += 1 === e ? t || r ? "dan" : "dnem" : 2 === e ? t || r ? "dni" : "dnevoma" : t || r ? "dni" : "dnevi";
                    case "M":
                        return t || r ? "en mesec" : "enim mesecem";
                    case "MM":
                        return a += 1 === e ? t || r ? "mesec" : "mesecem" : 2 === e ? t || r ? "meseca" : "mesecema" : e < 5 ? t || r ? "mesece" : "meseci" : t || r ? "mesecev" : "meseci";
                    case "y":
                        return t || r ? "eno leto" : "enim letom";
                    case "yy":
                        return a += 1 === e ? t || r ? "leto" : "letom" : 2 === e ? t || r ? "leti" : "letoma" : e < 5 ? t || r ? "leta" : "leti" : t || r ? "let" : "leti"
                }
            }
            var n = e.defineLocale("sl", {
                months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
                monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"),
                weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"),
                weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danes ob] LT",
                    nextDay: "[jutri ob] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[v] [nedeljo] [ob] LT";
                            case 3:
                                return "[v] [sredo] [ob] LT";
                            case 6:
                                return "[v] [soboto] [ob] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[v] dddd [ob] LT"
                        }
                    },
                    lastDay: "[včeraj ob] LT",
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[prejšnjo] [nedeljo] [ob] LT";
                            case 3:
                                return "[prejšnjo] [sredo] [ob] LT";
                            case 6:
                                return "[prejšnjo] [soboto] [ob] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[prejšnji] dddd [ob] LT"
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "čez %s",
                    past: "pred %s",
                    s: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return n
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("sq", {
                months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"),
                monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"),
                weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"),
                weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"),
                weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"),
                weekdaysParseExact: !0,
                meridiemParse: /PD|MD/,
                isPM: function(e) {
                    return "M" === e.charAt(0)
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "PD" : "MD"
                },
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Sot në] LT",
                    nextDay: "[Nesër në] LT",
                    nextWeek: "dddd [në] LT",
                    lastDay: "[Dje në] LT",
                    lastWeek: "dddd [e kaluar në] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "në %s",
                    past: "%s më parë",
                    s: "disa sekonda",
                    m: "një minutë",
                    mm: "%d minuta",
                    h: "një orë",
                    hh: "%d orë",
                    d: "një ditë",
                    dd: "%d ditë",
                    M: "një muaj",
                    MM: "%d muaj",
                    y: "një vit",
                    yy: "%d vite"
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = {
                words: {
                    m: ["jedan minut", "jedne minute"],
                    mm: ["minut", "minute", "minuta"],
                    h: ["jedan sat", "jednog sata"],
                    hh: ["sat", "sata", "sati"],
                    dd: ["dan", "dana", "dana"],
                    MM: ["mesec", "meseca", "meseci"],
                    yy: ["godina", "godine", "godina"]
                },
                correctGrammaticalCase: function(e, t) {
                    return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
                },
                translate: function(e, n, r) {
                    var a = t.words[r];
                    return 1 === r.length ? n ? a[0] : a[1] : e + " " + t.correctGrammaticalCase(e, a)
                }
            }
                , n = e.defineLocale("sr", {
                months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"),
                monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"),
                monthsParseExact: !0,
                weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"),
                weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"),
                weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[danas u] LT",
                    nextDay: "[sutra u] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[u] [nedelju] [u] LT";
                            case 3:
                                return "[u] [sredu] [u] LT";
                            case 6:
                                return "[u] [subotu] [u] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[u] dddd [u] LT"
                        }
                    },
                    lastDay: "[juče u] LT",
                    lastWeek: function() {
                        var e = ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"];
                        return e[this.day()]
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "za %s",
                    past: "pre %s",
                    s: "nekoliko sekundi",
                    m: t.translate,
                    mm: t.translate,
                    h: t.translate,
                    hh: t.translate,
                    d: "dan",
                    dd: t.translate,
                    M: "mesec",
                    MM: t.translate,
                    y: "godinu",
                    yy: t.translate
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return n
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = {
                words: {
                    m: ["један минут", "једне минуте"],
                    mm: ["минут", "минуте", "минута"],
                    h: ["један сат", "једног сата"],
                    hh: ["сат", "сата", "сати"],
                    dd: ["дан", "дана", "дана"],
                    MM: ["месец", "месеца", "месеци"],
                    yy: ["година", "године", "година"]
                },
                correctGrammaticalCase: function(e, t) {
                    return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2]
                },
                translate: function(e, n, r) {
                    var a = t.words[r];
                    return 1 === r.length ? n ? a[0] : a[1] : e + " " + t.correctGrammaticalCase(e, a)
                }
            }
                , n = e.defineLocale("sr-cyrl", {
                months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"),
                monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"),
                monthsParseExact: !0,
                weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"),
                weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"),
                weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm"
                },
                calendar: {
                    sameDay: "[данас у] LT",
                    nextDay: "[сутра у] LT",
                    nextWeek: function() {
                        switch (this.day()) {
                            case 0:
                                return "[у] [недељу] [у] LT";
                            case 3:
                                return "[у] [среду] [у] LT";
                            case 6:
                                return "[у] [суботу] [у] LT";
                            case 1:
                            case 2:
                            case 4:
                            case 5:
                                return "[у] dddd [у] LT"
                        }
                    },
                    lastDay: "[јуче у] LT",
                    lastWeek: function() {
                        var e = ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"];
                        return e[this.day()]
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "за %s",
                    past: "пре %s",
                    s: "неколико секунди",
                    m: t.translate,
                    mm: t.translate,
                    h: t.translate,
                    hh: t.translate,
                    d: "дан",
                    dd: t.translate,
                    M: "месец",
                    MM: t.translate,
                    y: "годину",
                    yy: t.translate
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return n
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("ss", {
                months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"),
                monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"),
                weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"),
                weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"),
                weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Namuhla nga] LT",
                    nextDay: "[Kusasa nga] LT",
                    nextWeek: "dddd [nga] LT",
                    lastDay: "[Itolo nga] LT",
                    lastWeek: "dddd [leliphelile] [nga] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "nga %s",
                    past: "wenteka nga %s",
                    s: "emizuzwana lomcane",
                    m: "umzuzu",
                    mm: "%d emizuzu",
                    h: "lihora",
                    hh: "%d emahora",
                    d: "lilanga",
                    dd: "%d emalanga",
                    M: "inyanga",
                    MM: "%d tinyanga",
                    y: "umnyaka",
                    yy: "%d iminyaka"
                },
                meridiemParse: /ekuseni|emini|entsambama|ebusuku/,
                meridiem: function(e, t, n) {
                    return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku"
                },
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0),
                        "ekuseni" === t ? e : "emini" === t ? e >= 11 ? e : e + 12 : "entsambama" === t || "ebusuku" === t ? 0 === e ? 0 : e + 12 : void 0
                },
                dayOfMonthOrdinalParse: /\d{1,2}/,
                ordinal: "%d",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("sv", {
                months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
                monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
                weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"),
                weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"),
                weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY [kl.] HH:mm",
                    LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
                    lll: "D MMM YYYY HH:mm",
                    llll: "ddd D MMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Idag] LT",
                    nextDay: "[Imorgon] LT",
                    lastDay: "[Igår] LT",
                    nextWeek: "[På] dddd LT",
                    lastWeek: "[I] dddd[s] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "om %s",
                    past: "för %s sedan",
                    s: "några sekunder",
                    m: "en minut",
                    mm: "%d minuter",
                    h: "en timme",
                    hh: "%d timmar",
                    d: "en dag",
                    dd: "%d dagar",
                    M: "en månad",
                    MM: "%d månader",
                    y: "ett år",
                    yy: "%d år"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(e|a)/,
                ordinal: function(e) {
                    var t = e % 10
                        , n = 1 === ~~(e % 100 / 10) ? "e" : 1 === t ? "a" : 2 === t ? "a" : "e";
                    return e + n
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("sw", {
                months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"),
                monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"),
                weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"),
                weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"),
                weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[leo saa] LT",
                    nextDay: "[kesho saa] LT",
                    nextWeek: "[wiki ijayo] dddd [saat] LT",
                    lastDay: "[jana] LT",
                    lastWeek: "[wiki iliyopita] dddd [saat] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s baadaye",
                    past: "tokea %s",
                    s: "hivi punde",
                    m: "dakika moja",
                    mm: "dakika %d",
                    h: "saa limoja",
                    hh: "masaa %d",
                    d: "siku moja",
                    dd: "masiku %d",
                    M: "mwezi mmoja",
                    MM: "miezi %d",
                    y: "mwaka mmoja",
                    yy: "miaka %d"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = {
                1: "௧",
                2: "௨",
                3: "௩",
                4: "௪",
                5: "௫",
                6: "௬",
                7: "௭",
                8: "௮",
                9: "௯",
                0: "௦"
            }
                , n = {
                "௧": "1",
                "௨": "2",
                "௩": "3",
                "௪": "4",
                "௫": "5",
                "௬": "6",
                "௭": "7",
                "௮": "8",
                "௯": "9",
                "௦": "0"
            }
                , r = e.defineLocale("ta", {
                months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
                monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"),
                weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"),
                weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"),
                weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, HH:mm",
                    LLLL: "dddd, D MMMM YYYY, HH:mm"
                },
                calendar: {
                    sameDay: "[இன்று] LT",
                    nextDay: "[நாளை] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[நேற்று] LT",
                    lastWeek: "[கடந்த வாரம்] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s இல்",
                    past: "%s முன்",
                    s: "ஒரு சில விநாடிகள்",
                    m: "ஒரு நிமிடம்",
                    mm: "%d நிமிடங்கள்",
                    h: "ஒரு மணி நேரம்",
                    hh: "%d மணி நேரம்",
                    d: "ஒரு நாள்",
                    dd: "%d நாட்கள்",
                    M: "ஒரு மாதம்",
                    MM: "%d மாதங்கள்",
                    y: "ஒரு வருடம்",
                    yy: "%d ஆண்டுகள்"
                },
                dayOfMonthOrdinalParse: /\d{1,2}வது/,
                ordinal: function(e) {
                    return e + "வது"
                },
                preparse: function(e) {
                    return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function(e) {
                        return n[e]
                    })
                },
                postformat: function(e) {
                    return e.replace(/\d/g, function(e) {
                        return t[e]
                    })
                },
                meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/,
                meridiem: function(e, t, n) {
                    return e < 2 ? " யாமம்" : e < 6 ? " வைகறை" : e < 10 ? " காலை" : e < 14 ? " நண்பகல்" : e < 18 ? " எற்பாடு" : e < 22 ? " மாலை" : " யாமம்"
                },
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0),
                        "யாமம்" === t ? e < 2 ? e : e + 12 : "வைகறை" === t || "காலை" === t ? e : "நண்பகல்" === t && e >= 10 ? e : e + 12
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            });
            return r
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("te", {
                months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జూలై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"),
                monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జూలై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"),
                monthsParseExact: !0,
                weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"),
                weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"),
                weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"),
                longDateFormat: {
                    LT: "A h:mm",
                    LTS: "A h:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm",
                    LLLL: "dddd, D MMMM YYYY, A h:mm"
                },
                calendar: {
                    sameDay: "[నేడు] LT",
                    nextDay: "[రేపు] LT",
                    nextWeek: "dddd, LT",
                    lastDay: "[నిన్న] LT",
                    lastWeek: "[గత] dddd, LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s లో",
                    past: "%s క్రితం",
                    s: "కొన్ని క్షణాలు",
                    m: "ఒక నిమిషం",
                    mm: "%d నిమిషాలు",
                    h: "ఒక గంట",
                    hh: "%d గంటలు",
                    d: "ఒక రోజు",
                    dd: "%d రోజులు",
                    M: "ఒక నెల",
                    MM: "%d నెలలు",
                    y: "ఒక సంవత్సరం",
                    yy: "%d సంవత్సరాలు"
                },
                dayOfMonthOrdinalParse: /\d{1,2}వ/,
                ordinal: "%dవ",
                meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0),
                        "రాత్రి" === t ? e < 4 ? e : e + 12 : "ఉదయం" === t ? e : "మధ్యాహ్నం" === t ? e >= 10 ? e : e + 12 : "సాయంత్రం" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "రాత్రి" : e < 10 ? "ఉదయం" : e < 17 ? "మధ్యాహ్నం" : e < 20 ? "సాయంత్రం" : "రాత్రి"
                },
                week: {
                    dow: 0,
                    doy: 6
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("tet", {
                months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juniu_Juliu_Augustu_Setembru_Outubru_Novembru_Dezembru".split("_"),
                monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Aug_Set_Out_Nov_Dez".split("_"),
                weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sexta_Sabadu".split("_"),
                weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sext_Sab".split("_"),
                weekdaysMin: "Do_Seg_Te_Ku_Ki_Sex_Sa".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Ohin iha] LT",
                    nextDay: "[Aban iha] LT",
                    nextWeek: "dddd [iha] LT",
                    lastDay: "[Horiseik iha] LT",
                    lastWeek: "dddd [semana kotuk] [iha] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "iha %s",
                    past: "%s liuba",
                    s: "minutu balun",
                    m: "minutu ida",
                    mm: "minutus %d",
                    h: "horas ida",
                    hh: "horas %d",
                    d: "loron ida",
                    dd: "loron %d",
                    M: "fulan ida",
                    MM: "fulan %d",
                    y: "tinan ida",
                    yy: "tinan %d"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
                ordinal: function(e) {
                    var t = e % 10
                        , n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                    return e + n
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("th", {
                months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"),
                monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"),
                monthsParseExact: !0,
                weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"),
                weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"),
                weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY เวลา H:mm",
                    LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm"
                },
                meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/,
                isPM: function(e) {
                    return "หลังเที่ยง" === e
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง"
                },
                calendar: {
                    sameDay: "[วันนี้ เวลา] LT",
                    nextDay: "[พรุ่งนี้ เวลา] LT",
                    nextWeek: "dddd[หน้า เวลา] LT",
                    lastDay: "[เมื่อวานนี้ เวลา] LT",
                    lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "อีก %s",
                    past: "%sที่แล้ว",
                    s: "ไม่กี่วินาที",
                    m: "1 นาที",
                    mm: "%d นาที",
                    h: "1 ชั่วโมง",
                    hh: "%d ชั่วโมง",
                    d: "1 วัน",
                    dd: "%d วัน",
                    M: "1 เดือน",
                    MM: "%d เดือน",
                    y: "1 ปี",
                    yy: "%d ปี"
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("tl-ph", {
                months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"),
                monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"),
                weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"),
                weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"),
                weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "MM/D/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY HH:mm",
                    LLLL: "dddd, MMMM DD, YYYY HH:mm"
                },
                calendar: {
                    sameDay: "LT [ngayong araw]",
                    nextDay: "[Bukas ng] LT",
                    nextWeek: "LT [sa susunod na] dddd",
                    lastDay: "LT [kahapon]",
                    lastWeek: "LT [noong nakaraang] dddd",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "sa loob ng %s",
                    past: "%s ang nakalipas",
                    s: "ilang segundo",
                    m: "isang minuto",
                    mm: "%d minuto",
                    h: "isang oras",
                    hh: "%d oras",
                    d: "isang araw",
                    dd: "%d araw",
                    M: "isang buwan",
                    MM: "%d buwan",
                    y: "isang taon",
                    yy: "%d taon"
                },
                dayOfMonthOrdinalParse: /\d{1,2}/,
                ordinal: function(e) {
                    return e
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            function t(e) {
                var t = e;
                return t = e.indexOf("jaj") !== -1 ? t.slice(0, -3) + "leS" : e.indexOf("jar") !== -1 ? t.slice(0, -3) + "waQ" : e.indexOf("DIS") !== -1 ? t.slice(0, -3) + "nem" : t + " pIq"
            }
            function n(e) {
                var t = e;
                return t = e.indexOf("jaj") !== -1 ? t.slice(0, -3) + "Hu’" : e.indexOf("jar") !== -1 ? t.slice(0, -3) + "wen" : e.indexOf("DIS") !== -1 ? t.slice(0, -3) + "ben" : t + " ret"
            }
            function r(e, t, n, r) {
                var i = a(e);
                switch (n) {
                    case "mm":
                        return i + " tup";
                    case "hh":
                        return i + " rep";
                    case "dd":
                        return i + " jaj";
                    case "MM":
                        return i + " jar";
                    case "yy":
                        return i + " DIS"
                }
            }
            function a(e) {
                var t = Math.floor(e % 1e3 / 100)
                    , n = Math.floor(e % 100 / 10)
                    , r = e % 10
                    , a = "";
                return t > 0 && (a += i[t] + "vatlh"),
                n > 0 && (a += ("" !== a ? " " : "") + i[n] + "maH"),
                r > 0 && (a += ("" !== a ? " " : "") + i[r]),
                    "" === a ? "pagh" : a
            }
            var i = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_")
                , s = e.defineLocale("tlh", {
                months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"),
                monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"),
                monthsParseExact: !0,
                weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
                weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
                weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[DaHjaj] LT",
                    nextDay: "[wa’leS] LT",
                    nextWeek: "LLL",
                    lastDay: "[wa’Hu’] LT",
                    lastWeek: "LLL",
                    sameElse: "L"
                },
                relativeTime: {
                    future: t,
                    past: n,
                    s: "puS lup",
                    m: "wa’ tup",
                    mm: r,
                    h: "wa’ rep",
                    hh: r,
                    d: "wa’ jaj",
                    dd: r,
                    M: "wa’ jar",
                    MM: r,
                    y: "wa’ DIS",
                    yy: r
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return s
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = {
                1: "'inci",
                5: "'inci",
                8: "'inci",
                70: "'inci",
                80: "'inci",
                2: "'nci",
                7: "'nci",
                20: "'nci",
                50: "'nci",
                3: "'üncü",
                4: "'üncü",
                100: "'üncü",
                6: "'ncı",
                9: "'uncu",
                10: "'uncu",
                30: "'uncu",
                60: "'ıncı",
                90: "'ıncı"
            }
                , n = e.defineLocale("tr", {
                months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"),
                monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"),
                weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"),
                weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"),
                weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[bugün saat] LT",
                    nextDay: "[yarın saat] LT",
                    nextWeek: "[haftaya] dddd [saat] LT",
                    lastDay: "[dün] LT",
                    lastWeek: "[geçen hafta] dddd [saat] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s sonra",
                    past: "%s önce",
                    s: "birkaç saniye",
                    m: "bir dakika",
                    mm: "%d dakika",
                    h: "bir saat",
                    hh: "%d saat",
                    d: "bir gün",
                    dd: "%d gün",
                    M: "bir ay",
                    MM: "%d ay",
                    y: "bir yıl",
                    yy: "%d yıl"
                },
                dayOfMonthOrdinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/,
                ordinal: function(e) {
                    if (0 === e)
                        return e + "'ıncı";
                    var n = e % 10
                        , r = e % 100 - n
                        , a = e >= 100 ? 100 : null;
                    return e + (t[n] || t[r] || t[a])
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return n
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            function t(e, t, n, r) {
                var a = {
                    s: ["viensas secunds", "'iensas secunds"],
                    m: ["'n míut", "'iens míut"],
                    mm: [e + " míuts", "" + e + " míuts"],
                    h: ["'n þora", "'iensa þora"],
                    hh: [e + " þoras", "" + e + " þoras"],
                    d: ["'n ziua", "'iensa ziua"],
                    dd: [e + " ziuas", "" + e + " ziuas"],
                    M: ["'n mes", "'iens mes"],
                    MM: [e + " mesen", "" + e + " mesen"],
                    y: ["'n ar", "'iens ar"],
                    yy: [e + " ars", "" + e + " ars"]
                };
                return r ? a[n][0] : t ? a[n][0] : a[n][1]
            }
            var n = e.defineLocale("tzl", {
                months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"),
                monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"),
                weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"),
                weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"),
                weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"),
                longDateFormat: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM [dallas] YYYY",
                    LLL: "D. MMMM [dallas] YYYY HH.mm",
                    LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm"
                },
                meridiemParse: /d\'o|d\'a/i,
                isPM: function(e) {
                    return "d'o" === e.toLowerCase()
                },
                meridiem: function(e, t, n) {
                    return e > 11 ? n ? "d'o" : "D'O" : n ? "d'a" : "D'A"
                },
                calendar: {
                    sameDay: "[oxhi à] LT",
                    nextDay: "[demà à] LT",
                    nextWeek: "dddd [à] LT",
                    lastDay: "[ieiri à] LT",
                    lastWeek: "[sür el] dddd [lasteu à] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "osprei %s",
                    past: "ja%s",
                    s: t,
                    m: t,
                    mm: t,
                    h: t,
                    hh: t,
                    d: t,
                    dd: t,
                    M: t,
                    MM: t,
                    y: t,
                    yy: t
                },
                dayOfMonthOrdinalParse: /\d{1,2}\./,
                ordinal: "%d.",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return n
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("tzm", {
                months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
                monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"),
                weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
                weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
                weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[ⴰⵙⴷⵅ ⴴ] LT",
                    nextDay: "[ⴰⵙⴽⴰ ⴴ] LT",
                    nextWeek: "dddd [ⴴ] LT",
                    lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT",
                    lastWeek: "dddd [ⴴ] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s",
                    past: "ⵢⴰⵏ %s",
                    s: "ⵉⵎⵉⴽ",
                    m: "ⵎⵉⵏⵓⴺ",
                    mm: "%d ⵎⵉⵏⵓⴺ",
                    h: "ⵙⴰⵄⴰ",
                    hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ",
                    d: "ⴰⵙⵙ",
                    dd: "%d oⵙⵙⴰⵏ",
                    M: "ⴰⵢoⵓⵔ",
                    MM: "%d ⵉⵢⵢⵉⵔⵏ",
                    y: "ⴰⵙⴳⴰⵙ",
                    yy: "%d ⵉⵙⴳⴰⵙⵏ"
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("tzm-latn", {
                months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
                monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"),
                weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
                weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
                weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[asdkh g] LT",
                    nextDay: "[aska g] LT",
                    nextWeek: "dddd [g] LT",
                    lastDay: "[assant g] LT",
                    lastWeek: "dddd [g] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "dadkh s yan %s",
                    past: "yan %s",
                    s: "imik",
                    m: "minuḍ",
                    mm: "%d minuḍ",
                    h: "saɛa",
                    hh: "%d tassaɛin",
                    d: "ass",
                    dd: "%d ossan",
                    M: "ayowr",
                    MM: "%d iyyirn",
                    y: "asgas",
                    yy: "%d isgasn"
                },
                week: {
                    dow: 6,
                    doy: 12
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            function t(e, t) {
                var n = e.split("_");
                return t % 10 === 1 && t % 100 !== 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
            }
            function n(e, n, r) {
                var a = {
                    mm: n ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин",
                    hh: n ? "година_години_годин" : "годину_години_годин",
                    dd: "день_дні_днів",
                    MM: "місяць_місяці_місяців",
                    yy: "рік_роки_років"
                };
                return "m" === r ? n ? "хвилина" : "хвилину" : "h" === r ? n ? "година" : "годину" : e + " " + t(a[r], +e)
            }
            function r(e, t) {
                var n = {
                    nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"),
                    accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"),
                    genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_")
                };
                if (!e)
                    return n.nominative;
                var r = /(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative";
                return n[r][e.day()]
            }
            function a(e) {
                return function() {
                    return e + "о" + (11 === this.hours() ? "б" : "") + "] LT"
                }
            }
            var i = e.defineLocale("uk", {
                months: {
                    format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"),
                    standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_")
                },
                monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"),
                weekdays: r,
                weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY р.",
                    LLL: "D MMMM YYYY р., HH:mm",
                    LLLL: "dddd, D MMMM YYYY р., HH:mm"
                },
                calendar: {
                    sameDay: a("[Сьогодні "),
                    nextDay: a("[Завтра "),
                    lastDay: a("[Вчора "),
                    nextWeek: a("[У] dddd ["),
                    lastWeek: function() {
                        switch (this.day()) {
                            case 0:
                            case 3:
                            case 5:
                            case 6:
                                return a("[Минулої] dddd [").call(this);
                            case 1:
                            case 2:
                            case 4:
                                return a("[Минулого] dddd [").call(this)
                        }
                    },
                    sameElse: "L"
                },
                relativeTime: {
                    future: "за %s",
                    past: "%s тому",
                    s: "декілька секунд",
                    m: n,
                    mm: n,
                    h: "годину",
                    hh: n,
                    d: "день",
                    dd: n,
                    M: "місяць",
                    MM: n,
                    y: "рік",
                    yy: n
                },
                meridiemParse: /ночі|ранку|дня|вечора/,
                isPM: function(e) {
                    return /^(дня|вечора)$/.test(e)
                },
                meridiem: function(e, t, n) {
                    return e < 4 ? "ночі" : e < 12 ? "ранку" : e < 17 ? "дня" : "вечора"
                },
                dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "M":
                        case "d":
                        case "DDD":
                        case "w":
                        case "W":
                            return e + "-й";
                        case "D":
                            return e + "-го";
                        default:
                            return e
                    }
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return i
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"]
                , n = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"]
                , r = e.defineLocale("ur", {
                months: t,
                monthsShort: t,
                weekdays: n,
                weekdaysShort: n,
                weekdaysMin: n,
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd، D MMMM YYYY HH:mm"
                },
                meridiemParse: /صبح|شام/,
                isPM: function(e) {
                    return "شام" === e
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? "صبح" : "شام"
                },
                calendar: {
                    sameDay: "[آج بوقت] LT",
                    nextDay: "[کل بوقت] LT",
                    nextWeek: "dddd [بوقت] LT",
                    lastDay: "[گذشتہ روز بوقت] LT",
                    lastWeek: "[گذشتہ] dddd [بوقت] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s بعد",
                    past: "%s قبل",
                    s: "چند سیکنڈ",
                    m: "ایک منٹ",
                    mm: "%d منٹ",
                    h: "ایک گھنٹہ",
                    hh: "%d گھنٹے",
                    d: "ایک دن",
                    dd: "%d دن",
                    M: "ایک ماہ",
                    MM: "%d ماہ",
                    y: "ایک سال",
                    yy: "%d سال"
                },
                preparse: function(e) {
                    return e.replace(/،/g, ",")
                },
                postformat: function(e) {
                    return e.replace(/,/g, "،")
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return r
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("uz", {
                months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"),
                monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"),
                weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"),
                weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"),
                weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "D MMMM YYYY, dddd HH:mm"
                },
                calendar: {
                    sameDay: "[Бугун соат] LT [да]",
                    nextDay: "[Эртага] LT [да]",
                    nextWeek: "dddd [куни соат] LT [да]",
                    lastDay: "[Кеча соат] LT [да]",
                    lastWeek: "[Утган] dddd [куни соат] LT [да]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "Якин %s ичида",
                    past: "Бир неча %s олдин",
                    s: "фурсат",
                    m: "бир дакика",
                    mm: "%d дакика",
                    h: "бир соат",
                    hh: "%d соат",
                    d: "бир кун",
                    dd: "%d кун",
                    M: "бир ой",
                    MM: "%d ой",
                    y: "бир йил",
                    yy: "%d йил"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("uz-latn", {
                months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"),
                monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"),
                weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"),
                weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"),
                weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "D MMMM YYYY, dddd HH:mm"
                },
                calendar: {
                    sameDay: "[Bugun soat] LT [da]",
                    nextDay: "[Ertaga] LT [da]",
                    nextWeek: "dddd [kuni soat] LT [da]",
                    lastDay: "[Kecha soat] LT [da]",
                    lastWeek: "[O'tgan] dddd [kuni soat] LT [da]",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "Yaqin %s ichida",
                    past: "Bir necha %s oldin",
                    s: "soniya",
                    m: "bir daqiqa",
                    mm: "%d daqiqa",
                    h: "bir soat",
                    hh: "%d soat",
                    d: "bir kun",
                    dd: "%d kun",
                    M: "bir oy",
                    MM: "%d oy",
                    y: "bir yil",
                    yy: "%d yil"
                },
                week: {
                    dow: 1,
                    doy: 7
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("vi", {
                months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"),
                monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
                monthsParseExact: !0,
                weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"),
                weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
                weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
                weekdaysParseExact: !0,
                meridiemParse: /sa|ch/i,
                isPM: function(e) {
                    return /^ch$/i.test(e)
                },
                meridiem: function(e, t, n) {
                    return e < 12 ? n ? "sa" : "SA" : n ? "ch" : "CH"
                },
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM [năm] YYYY",
                    LLL: "D MMMM [năm] YYYY HH:mm",
                    LLLL: "dddd, D MMMM [năm] YYYY HH:mm",
                    l: "DD/M/YYYY",
                    ll: "D MMM YYYY",
                    lll: "D MMM YYYY HH:mm",
                    llll: "ddd, D MMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[Hôm nay lúc] LT",
                    nextDay: "[Ngày mai lúc] LT",
                    nextWeek: "dddd [tuần tới lúc] LT",
                    lastDay: "[Hôm qua lúc] LT",
                    lastWeek: "dddd [tuần rồi lúc] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "%s tới",
                    past: "%s trước",
                    s: "vài giây",
                    m: "một phút",
                    mm: "%d phút",
                    h: "một giờ",
                    hh: "%d giờ",
                    d: "một ngày",
                    dd: "%d ngày",
                    M: "một tháng",
                    MM: "%d tháng",
                    y: "một năm",
                    yy: "%d năm"
                },
                dayOfMonthOrdinalParse: /\d{1,2}/,
                ordinal: function(e) {
                    return e
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("x-pseudo", {
                months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"),
                monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"),
                monthsParseExact: !0,
                weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"),
                weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"),
                weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"),
                weekdaysParseExact: !0,
                longDateFormat: {
                    LT: "HH:mm",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm"
                },
                calendar: {
                    sameDay: "[T~ódá~ý át] LT",
                    nextDay: "[T~ómó~rró~w át] LT",
                    nextWeek: "dddd [át] LT",
                    lastDay: "[Ý~ést~érdá~ý át] LT",
                    lastWeek: "[L~ást] dddd [át] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "í~ñ %s",
                    past: "%s á~gó",
                    s: "á ~féw ~sécó~ñds",
                    m: "á ~míñ~úté",
                    mm: "%d m~íñú~tés",
                    h: "á~ñ hó~úr",
                    hh: "%d h~óúrs",
                    d: "á ~dáý",
                    dd: "%d d~áýs",
                    M: "á ~móñ~th",
                    MM: "%d m~óñt~hs",
                    y: "á ~ýéár",
                    yy: "%d ý~éárs"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function(e) {
                    var t = e % 10
                        , n = 1 === ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th";
                    return e + n
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("yo", {
                months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"),
                monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"),
                weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"),
                weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"),
                weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"),
                longDateFormat: {
                    LT: "h:mm A",
                    LTS: "h:mm:ss A",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY h:mm A",
                    LLLL: "dddd, D MMMM YYYY h:mm A"
                },
                calendar: {
                    sameDay: "[Ònì ni] LT",
                    nextDay: "[Ọ̀la ni] LT",
                    nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT",
                    lastDay: "[Àna ni] LT",
                    lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT",
                    sameElse: "L"
                },
                relativeTime: {
                    future: "ní %s",
                    past: "%s kọjá",
                    s: "ìsẹjú aayá die",
                    m: "ìsẹjú kan",
                    mm: "ìsẹjú %d",
                    h: "wákati kan",
                    hh: "wákati %d",
                    d: "ọjọ́ kan",
                    dd: "ọjọ́ %d",
                    M: "osù kan",
                    MM: "osù %d",
                    y: "ọdún kan",
                    yy: "ọdún %d"
                },
                dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/,
                ordinal: "ọjọ́ %d",
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("zh-cn", {
                months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"),
                weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY年MMMD日",
                    LL: "YYYY年MMMD日",
                    LLL: "YYYY年MMMD日Ah点mm分",
                    LLLL: "YYYY年MMMD日ddddAh点mm分",
                    l: "YYYY年MMMD日",
                    ll: "YYYY年MMMD日",
                    lll: "YYYY年MMMD日 HH:mm",
                    llll: "YYYY年MMMD日dddd HH:mm"
                },
                meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0),
                        "凌晨" === t || "早上" === t || "上午" === t ? e : "下午" === t || "晚上" === t ? e + 12 : e >= 11 ? e : e + 12
                },
                meridiem: function(e, t, n) {
                    var r = 100 * e + t;
                    return r < 600 ? "凌晨" : r < 900 ? "早上" : r < 1130 ? "上午" : r < 1230 ? "中午" : r < 1800 ? "下午" : "晚上"
                },
                calendar: {
                    sameDay: "[今天]LT",
                    nextDay: "[明天]LT",
                    nextWeek: "[下]ddddLT",
                    lastDay: "[昨天]LT",
                    lastWeek: "[上]ddddLT",
                    sameElse: "L"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "d":
                        case "D":
                        case "DDD":
                            return e + "日";
                        case "M":
                            return e + "月";
                        case "w":
                        case "W":
                            return e + "周";
                        default:
                            return e
                    }
                },
                relativeTime: {
                    future: "%s内",
                    past: "%s前",
                    s: "几秒",
                    m: "1 分钟",
                    mm: "%d 分钟",
                    h: "1 小时",
                    hh: "%d 小时",
                    d: "1 天",
                    dd: "%d 天",
                    M: "1 个月",
                    MM: "%d 个月",
                    y: "1 年",
                    yy: "%d 年"
                },
                week: {
                    dow: 1,
                    doy: 4
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("zh-hk", {
                months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
                weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY年MMMD日",
                    LL: "YYYY年MMMD日",
                    LLL: "YYYY年MMMD日 HH:mm",
                    LLLL: "YYYY年MMMD日dddd HH:mm",
                    l: "YYYY年MMMD日",
                    ll: "YYYY年MMMD日",
                    lll: "YYYY年MMMD日 HH:mm",
                    llll: "YYYY年MMMD日dddd HH:mm"
                },
                meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0),
                        "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    var r = 100 * e + t;
                    return r < 600 ? "凌晨" : r < 900 ? "早上" : r < 1130 ? "上午" : r < 1230 ? "中午" : r < 1800 ? "下午" : "晚上"
                },
                calendar: {
                    sameDay: "[今天]LT",
                    nextDay: "[明天]LT",
                    nextWeek: "[下]ddddLT",
                    lastDay: "[昨天]LT",
                    lastWeek: "[上]ddddLT",
                    sameElse: "L"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "d":
                        case "D":
                        case "DDD":
                            return e + "日";
                        case "M":
                            return e + "月";
                        case "w":
                        case "W":
                            return e + "週";
                        default:
                            return e
                    }
                },
                relativeTime: {
                    future: "%s內",
                    past: "%s前",
                    s: "幾秒",
                    m: "1 分鐘",
                    mm: "%d 分鐘",
                    h: "1 小時",
                    hh: "%d 小時",
                    d: "1 天",
                    dd: "%d 天",
                    M: "1 個月",
                    MM: "%d 個月",
                    y: "1 年",
                    yy: "%d 年"
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        !function(e, t) {
            t(n(6))
        }(this, function(e) {
            "use strict";
            var t = e.defineLocale("zh-tw", {
                months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),
                monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),
                weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),
                weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"),
                weekdaysMin: "日_一_二_三_四_五_六".split("_"),
                longDateFormat: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY年MMMD日",
                    LL: "YYYY年MMMD日",
                    LLL: "YYYY年MMMD日 HH:mm",
                    LLLL: "YYYY年MMMD日dddd HH:mm",
                    l: "YYYY年MMMD日",
                    ll: "YYYY年MMMD日",
                    lll: "YYYY年MMMD日 HH:mm",
                    llll: "YYYY年MMMD日dddd HH:mm"
                },
                meridiemParse: /凌晨|早上|上午|中午|下午|晚上/,
                meridiemHour: function(e, t) {
                    return 12 === e && (e = 0),
                        "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0
                },
                meridiem: function(e, t, n) {
                    var r = 100 * e + t;
                    return r < 600 ? "凌晨" : r < 900 ? "早上" : r < 1130 ? "上午" : r < 1230 ? "中午" : r < 1800 ? "下午" : "晚上"
                },
                calendar: {
                    sameDay: "[今天]LT",
                    nextDay: "[明天]LT",
                    nextWeek: "[下]ddddLT",
                    lastDay: "[昨天]LT",
                    lastWeek: "[上]ddddLT",
                    sameElse: "L"
                },
                dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/,
                ordinal: function(e, t) {
                    switch (t) {
                        case "d":
                        case "D":
                        case "DDD":
                            return e + "日";
                        case "M":
                            return e + "月";
                        case "w":
                        case "W":
                            return e + "週";
                        default:
                            return e
                    }
                },
                relativeTime: {
                    future: "%s內",
                    past: "%s前",
                    s: "幾秒",
                    m: "1 分鐘",
                    mm: "%d 分鐘",
                    h: "1 小時",
                    hh: "%d 小時",
                    d: "1 天",
                    dd: "%d 天",
                    M: "1 個月",
                    MM: "%d 個月",
                    y: "1 年",
                    yy: "%d 年"
                }
            });
            return t
        })
    }
    , function(e, t, n) {
        var r = n(5)
            , a = n(125)
            , i = r.appendHTMLToBody(['<div class="easemobim-prompt-wrapper">', '<div class="loading">', a.loadingSvg, "</div>", "</div>"].join(""));
        e.exports = {
            show: function() {
                i.style.display = "block"
            },
            hide: function() {
                i.style.display = "none"
            }
        }
    }
    , function(e, t, n) {
        e.exports = {
            loadingSvg: ['<div class="em-widget-loading">', '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70">', '<circle opacity=".3" fill="none" stroke="#000" stroke-width="4" stroke-miterlimit="10" cx="35" cy="35" r="11"/>', '<path fill="none" stroke="#E5E5E5" stroke-width="4" stroke-linecap="round" stroke-miterlimit="10" d="M24 35c0-6.1 4.9-11 11-11 2.8 0 5.3 1 7.3 2.8"/>', "</svg>", "</div>"].join(""),
            agentStatusText: {
                Online: "(空闲)",
                Busy: "(忙碌)",
                Leave: "(离开)",
                Hidden: "(隐身)",
                Idle: "(离线)",
                Offline: "(离线)",
                Logout: "(离线)",
                Other: ""
            },
            eventMessageText: {
                NOTE: "当前暂无客服在线，请您留下联系方式，稍后我们将主动联系您"
            },
            SYSTEM_EVENT_MSG_TEXT: {
                ServiceSessionCreatedEvent: "会话创建成功",
                ServiceSessionOpenedEvent: "会话已被客服接起",
                ServiceSessionTransferedToAgentQueueEvent: "会话转接中，请稍候",
                ServiceSessionTransferedEvent: "会话已被转接至其他客服",
                ServiceSessionClosedEvent: "会话已结束"
            },
            SYSTEM_EVENT: {
                SESSION_CREATED: "ServiceSessionCreatedEvent",
                SESSION_OPENED: "ServiceSessionOpenedEvent",
                SESSION_CLOSED: "ServiceSessionClosedEvent",
                SESSION_TRANSFERED: "ServiceSessionTransferedEvent",
                SESSION_TRANSFERING: "ServiceSessionTransferedToAgentQueueEvent",
                SESSION_RESTORED: "session.restored",
                SESSION_NOT_CREATED: "session.not.created",
                AGENT_INFO_UPDATE: "agent.info.update",
                OFFICIAL_ACCOUNT_SWITCHED: "official.account.switched",
                NEW_OFFICIAL_ACCOUNT_FOUND: "new.official.account.found",
                SYSTEM_OFFICIAL_ACCOUNT_UPDATED: "system.official.account.updated",
                OFFICIAL_ACCOUNT_LIST_GOT: "official.account.list.got",
                MARKETING_MESSAGE_RECEIVED: "marketing.message.received",
                SATISFACTION_EVALUATION_MESSAGE_RECEIVED: "satisfaction.evaluation.message.received",
                MESSAGE_PROMPT: "message.prompt",
                CHAT_WINDOW_OPENED: "chat.window.opened",
                CHAT_WINDOW_CLOSED: "chat.window.closed",
                IM_CONNECTION_OPENED: "im.connection.opened",
                MESSAGE_SENT: "message.sent",
                MESSAGE_APPENDED: "message.appended",
                VIDEO_TICKET_RECEIVED: "video.ticket.received",
                MESSAGE_CHANNEL_READY: "message.channel.ready",
                CONSULT_AGENT: "consult.agent",
                ACCEPT_INVITATION: "accept_invitation"
            },
            themeMap: {
                theme_sky: "theme-1",
                theme_tree: "theme-2",
                theme_house: "theme-3",
                theme_orange: "theme-4",
                theme_grass: "theme-5",
                theme_sea: "theme-6",
                theme_mountion: "theme-7",
                theme_moon: "theme-8",
                theme_lake: "theme-9",
                theme_business: "theme-10",
                theme_cherry: "theme-11",
                "天空之城": "theme-1",
                "丛林物语": "theme-2",
                "红瓦洋房": "theme-3",
                "鲜美橙汁": "theme-4",
                "青草田间": "theme-5",
                "湖光山色": "theme-6",
                "冷峻山峰": "theme-7",
                "月色池塘": "theme-8",
                "天籁湖光": "theme-9",
                "商务风格": "theme-10",
                "烂漫樱花": "theme-11",
                Sky: "theme-1",
                Tree: "theme-2",
                House: "theme-3",
                Orange: "theme-4",
                Grass: "theme-5",
                Sea: "theme-6",
                Mountain: "theme-7",
                Moon: "theme-8",
                Lake: "theme-9",
                Business: "theme-10",
                Cherry: "theme-11"
            },
            IM: {
                WEBIM_CONNCTION_OPEN_ERROR: 1,
                WEBIM_CONNCTION_AUTH_ERROR: 2,
                WEBIM_CONNCTION_AJAX_ERROR: 17,
                WEBIM_CONNCTION_CALLBACK_INNER_ERROR: 31
            },
            EVENTS: {
                NOTIFY: "notify",
                RECOVERY: "recoveryTitle",
                SHOW: "showChat",
                CLOSE: "closeChat",
                CACHEUSER: "setUser",
                DRAGREADY: "dragReady",
                DRAGEND: "dragEnd",
                SLIDE: "titleSlide",
                ONMESSAGE: "onMessage",
                ONSESSIONCLOSED: "onSessionClosed",
                EXT: "ext",
                TEXTMSG: "textmsg",
                ONREADY: "onready",
                ON_OFFDUTY: "onOffDuty",
                SET_ITEM: "setItem",
                UPDATE_URL: "updateURL",
                REQUIRE_URL: "requireURL",
                INIT_CONFIG: "initConfig",
                SHOW_IMG: "showIMG",
                RESIZE_IFRAME: "resizeIframe",
                ADD_PROMPT: "add.prompt",
                REMOVE_PROMPT: "remove.prompt",
                SCROLL_TO_BOTTOM: "scroll.to.bottom",
                INVITATION_INIT: "invitation_init"
            },
            ERROR_MSG: {
                VISITOR_DOES_NOT_EXIST: "visitor does not exist.",
                SESSION_DOES_NOT_EXIST: "session does not exist."
            },
            SESSION_STATE: {
                WAIT: "Wait",
                PROCESSING: "Processing",
                TERMINAL: "Terminal",
                ABORT: "Abort",
                RESOLVED: "Resolved",
                PREPARE: "Prepare"
            },
            AGENT_ROLE: {
                AGENT: 1,
                ROBOT: 6
            },
            STREAM_TYPE: {
                NORMAL: 0,
                NO_AUDIO: 1
            },
            UPLOAD_FILESIZE_LIMIT: 10485760,
            FIRST_CHANNEL_MESSAGE_TIMEOUT: 1e4,
            FIRST_CHANNEL_IMG_MESSAGE_TIMEOUT: 15e3,
            SECOND_MESSAGE_CHANNEL_MAX_RETRY_COUNT: 1,
            FIRST_CHANNEL_CONNECTION_TIMEOUT: 2e4,
            HEART_BEAT_INTERVAL: 6e4,
            SECOND_CHANNEL_MESSAGE_RECEIVE_INTERVAL: 6e4,
            MESSAGE_PREDICT_MAX_LENGTH: 100,
            MAX_TEXT_MESSAGE_LENGTH: 1500,
            GET_HISTORY_MESSAGE_COUNT_EACH_TIME: 10,
            AGENT_INPUT_STATE_INTERVAL: 1e3,
            MESSAGE_TIME_SPAN_INTERVAL: 6e4,
            E_MEDIA_SDK_ERROR_CODE_MAP: {
                0: "Normal exit.",
                1: "No response.",
                2: "The other side refused.",
                3: "The other side is busy.",
                4: "Server refused.",
                5: "Unsupported.",
                10: "Log in on other devices.",
                11: "The conference is closed."
            },
            EMOJI_PATH: "static/img/faces/",
            EMOJI_MAP: {
                "[):]": "ee_1.png",
                "[:D]": "ee_2.png",
                "[;)]": "ee_3.png",
                "[:-o]": "ee_4.png",
                "[:p]": "ee_5.png",
                "[(H)]": "ee_6.png",
                "[:@]": "ee_7.png",
                "[:s]": "ee_8.png",
                "[:$]": "ee_9.png",
                "[:(]": "ee_10.png",
                "[:'(]": "ee_11.png",
                "[:|]": "ee_12.png",
                "[(a)]": "ee_13.png",
                "[8o|]": "ee_14.png",
                "[8-|]": "ee_15.png",
                "[+o(]": "ee_16.png",
                "[<o)]": "ee_17.png",
                "[|-)]": "ee_18.png",
                "[*-)]": "ee_19.png",
                "[:-#]": "ee_20.png",
                "[:-*]": "ee_21.png",
                "[^o)]": "ee_22.png",
                "[8-)]": "ee_23.png",
                "[(|)]": "ee_24.png",
                "[(u)]": "ee_25.png",
                "[(S)]": "ee_26.png",
                "[(*)]": "ee_27.png",
                "[(#)]": "ee_28.png",
                "[(R)]": "ee_29.png",
                "[({)]": "ee_30.png",
                "[(})]": "ee_31.png",
                "[(k)]": "ee_32.png",
                "[(F)]": "ee_33.png",
                "[(W)]": "ee_34.png",
                "[(D)]": "ee_35.png"
            },
            SELFSERVICE_PATH: "static/img/selfServiceIcon/"
        }
    }
    , function(e, t, n) {
        function r(e, t) {
            var n = window.event || t
                , r = document.documentElement.clientWidth
                , i = document.documentElement.clientHeight
                , s = r - n.clientX - e.rect.width + g.x
                , o = i - n.clientY - e.rect.height + g.y;
            n.clientX - g.x <= 0 ? s = r - e.rect.width : n.clientX + e.rect.width - g.x >= r && (s = 0),
                n.clientY - g.y <= 0 ? o = i - e.rect.height : n.clientY + e.rect.height - g.y >= i && (o = 0),
                e.shadow.style.left = "auto",
                e.shadow.style.top = "auto",
                e.shadow.style.right = s + "px",
                e.shadow.style.bottom = o + "px",
                e.position = {
                    x: s,
                    y: o
                },
                clearTimeout(L),
                L = setTimeout(function() {
                    a.call(e)
                }, 500)
        }
        function a() {
            var e = this
                , t = e.iframe
                , n = e.shadow;
            u.off(document, "mousemove", e._onMouseMove),
                t.style.left = "auto",
                t.style.top = "auto",
                t.style.right = e.position.x + "px",
                t.style.bottom = e.position.y + "px",
                n.style.left = "auto",
                n.style.top = "auto",
                n.style.right = e.position.x + "px",
                n.style.bottom = e.position.y + "px",
                u.removeClass(n, "easemobim-dragging"),
                u.removeClass(t, "easemobim-dragging")
        }
        function i(e) {
            u.on(window, "resize", function() {
                if (e.rect && e.rect.width) {
                    var t = document.documentElement.clientWidth
                        , n = document.documentElement.clientHeight
                        , r = +e.iframe.style.right.slice(0, -2)
                        , a = +e.iframe.style.bottom.slice(0, -2);
                    t < e.rect.width ? (e.iframe.style.left = "auto",
                        e.iframe.style.right = 0,
                        e.shadow.style.left = "auto",
                        e.shadow.style.right = 0) : t - r < e.rect.width ? (e.iframe.style.right = t - e.rect.width + "px",
                        e.iframe.style.left = 0,
                        e.shadow.style.right = t - e.rect.width + "px",
                        e.shadow.style.left = 0) : (e.iframe.style.left = "auto",
                        e.shadow.style.left = "auto"),
                        n < e.rect.height ? (e.iframe.style.top = "auto",
                            e.iframe.style.bottom = 0) : n - a < e.rect.height ? (e.iframe.style.bottom = n - e.rect.height + "px",
                            e.iframe.style.top = 0) : e.iframe.style.top = "auto"
                }
            })
        }
        function s() {
            var e, t, n = this;
            for (n.config.dragenable && !u.isMobile && i(n),
                     n.message = new l(n.iframe.id,"easemob",!0),
                     n.onsessionclosedSt = 0,
                     n.onreadySt = 0,
                     n.config.parentId = n.iframe.id,
                     n.callbackApi = {
                         onready: n.config.onready || Y,
                         onmessage: n.config.onmessage || Y,
                         onsessionclosed: n.config.onsessionclosed || Y
                     },
                     delete n.config.onready,
                     delete n.config.onmessage,
                     delete n.config.onsessionclosed,
                     n.message.send({
                         event: _.EVENTS.INIT_CONFIG,
                         data: n.config
                     }).listen(function(e) {
                         var t = e.event
                             , r = e.data;
                         if (e.to === n.iframe.id)
                             switch (t) {
                                 case _.EVENTS.ONREADY:
                                     clearTimeout(n.onreadySt),
                                         c.hide(),
                                         n.onreadySt = setTimeout(function() {
                                             n.callbackApi.onready()
                                         }, 500);
                                     break;
                                 case _.EVENTS.ON_OFFDUTY:
                                     c.hide();
                                     break;
                                 case _.EVENTS.SHOW:
                                     n.open();
                                     break;
                                 case _.EVENTS.CLOSE:
                                     n.close();
                                     break;
                                 case _.EVENTS.NOTIFY:
                                     m(r.avatar, r.title, r.brief);
                                     break;
                                 case _.EVENTS.SLIDE:
                                     h.start();
                                     break;
                                 case _.EVENTS.RECOVERY:
                                     h.stop();
                                     break;
                                 case _.EVENTS.ONMESSAGE:
                                     n.callbackApi.onmessage(r);
                                     break;
                                 case _.EVENTS.ONSESSIONCLOSED:
                                     clearTimeout(n.onsessionclosedSt),
                                         n.onsessionclosedSt = setTimeout(function() {
                                             n.callbackApi.onsessionclosed()
                                         }, 500);
                                     break;
                                 case _.EVENTS.CACHEUSER:
                                     u.set(r.key, r.value);
                                     break;
                                 case _.EVENTS.DRAGREADY:
                                     g.x = +r.x || 0,
                                         g.y = +r.y || 0,
                                         u.addClass(n.iframe, "easemobim-dragging"),
                                         u.addClass(n.shadow, "easemobim-dragging"),
                                         u.on(document, "mousemove", n._onMouseMove);
                                     break;
                                 case _.EVENTS.DRAGEND:
                                     a.call(n);
                                     break;
                                 case _.EVENTS.SET_ITEM:
                                     u.setStore(e.data.key, e.data.value);
                                     break;
                                 case _.EVENTS.REQUIRE_URL:
                                     n.message.send({
                                         event: _.EVENTS.UPDATE_URL,
                                         data: location.href
                                     });
                                     break;
                                 case _.EVENTS.SHOW_IMG:
                                     f(r);
                                     break;
                                 case _.EVENTS.RESET_IFRAME:
                                     n._updatePosition(r);
                                     break;
                                 case _.EVENTS.ADD_PROMPT:
                                     u.addClass(n.iframe, "easemobim-has-prompt");
                                     break;
                                 case _.EVENTS.REMOVE_PROMPT:
                                     u.removeClass(n.iframe, "easemobim-has-prompt");
                                     break;
                                 case _.EVENTS.SCROLL_TO_BOTTOM:
                                     n.iframe.scrollIntoView(!1);
                                     break;
                                 case _.EVENTS.INVITATION_INIT:
                                     d = new p(r,n.config),
                                     !v && d.beginStartTimer()
                             }
                     }, ["main"]),
                     e = 0,
                     t = n.extendMessageList.length; e < t; e++)
                n.message.send({
                    event: _.EVENTS.EXT,
                    data: n.extendMessageList[e]
                });
            for (e = 0,
                     t = n.textMessageList.length; e < t; e++)
                n.message.send({
                    event: _.EVENTS.TEXTMSG,
                    data: n.textMessageList[e]
                });
            "function" == typeof n.ready && n.ready(),
                M.add(_.SYSTEM_EVENT.ACCEPT_INVITATION, function() {
                    n.open()
                })
        }
        function o(e) {
            var t, n = this, i = "easemob-iframe-" + u.uuid(), d = "easemobim-chat-panel easemobim-hide easemobim-minimized", _ = document.createElement("iframe");
            return u.isMobile && (d += " easemobim-mobile"),
                _.frameBorder = 0,
                _.allowTransparency = "true",
                _.id = i,
                _.className = d,
                _.allow = "microphone; camera",
                document.body.appendChild(_),
                u.on(_, "load", function() {
                    s.call(n)
                }),
            u.isMobile || (t = document.createElement("div"),
                t.className = "easemobim-iframe-shadow",
                document.body.appendChild(t),
                u.on(t, "mouseup", function() {
                    a.call(n)
                })),
                n.config = e,
                n.iframe = _,
                n.shadow = t,
                n.show = !1,
                n._onMouseMove = function(e) {
                    r(n, e)
                }
                ,
                n.textMessageList = [],
                n.extendMessageList = [],
                o.iframe = n,
                n
        }
        var d, u = n(5), _ = n(125), l = n(127), c = n(124), m = n(128), h = n(129), f = n(130), p = n(131), M = n(132), y = "/im_cached.html", L = 0, g = {
            x: 0,
            y: 0
        }, Y = function() {}, v = !1;
        o.prototype.set = function(e, t) {
            var n = this.config.staticPath + "/img/drag.png";
            return this.config = u.copy(e || this.config),
                this.position = {
                    x: this.config.dialogPosition.x.slice(0, -2),
                    y: this.config.dialogPosition.y.slice(0, -2)
                },
                this.rect = {
                    width: +this.config.dialogWidth.slice(0, -2),
                    height: +this.config.dialogHeight.slice(0, -2)
                },
                this._updatePosition(),
                u.toggleClass(this.iframe, "easemobim-hide", this.config.hide),
                this.iframe.src = e.path + y + "?v=plugin_53.0.16_final",
            this.shadow && (this.shadow.style.backgroundImage = "url(" + n + ")"),
                this.ready = t,
                h.enable = e.titleSlide,
                this
        }
            ,
            o.prototype._updatePosition = function(e) {
                var t = this.iframe
                    , n = this.shadow
                    , r = e || this.config;
                t.style.width = r.dialogWidth,
                    t.style.height = r.dialogHeight,
                    t.style.right = r.dialogPosition.x,
                    t.style.bottom = r.dialogPosition.y,
                n && (n.style.width = r.dialogWidth,
                    n.style.height = r.dialogHeight,
                    n.style.right = r.dialogPosition.x,
                    n.style.bottom = r.dialogPosition.y)
            }
            ,
            o.prototype.open = function() {
                var e = this.iframe;
                return d && d.clearInvitation(),
                    v = !0,
                    this.show ? this : (this.show = !0,
                    u.isMobile && (u.addClass(document.body, "easemobim-mobile-body"),
                        u.addClass(document.documentElement, "easemobim-mobile-html")),
                        u.removeClass(e, "easemobim-minimized"),
                        u.removeClass(e, "easemobim-hide"),
                    this.message && this.message.send({
                        event: _.EVENTS.SHOW
                    }),
                        this)
            }
            ,
            o.prototype.close = function() {
                return this.show === !1 ? this : (this.show = !1,
                    clearTimeout(L),
                u.isMobile && (u.removeClass(document.body, "easemobim-mobile-body"),
                    u.removeClass(document.documentElement, "easemobim-mobile-html")),
                    u.addClass(this.iframe, "easemobim-minimized"),
                    u.toggleClass(this.iframe, "easemobim-hide", this.config.hide),
                this.message && this.message.send({
                    event: _.EVENTS.CLOSE
                }),
                    this)
            }
            ,
            o.prototype.send = function(e) {
                this.message ? this.message.send({
                    event: _.EVENTS.EXT,
                    data: e
                }) : this.extendMessageList.push(e)
            }
            ,
            o.prototype.sendText = function(e) {
                this.message ? this.message.send({
                    event: _.EVENTS.TEXTMSG,
                    data: e
                }) : this.textMessageList.push(e)
            }
            ,
            e.exports = o
    }
    , function(e, t) {
        function n(e, t, n) {
            var r, a, i, s = !1, o = e.data;
            if ("object" == typeof o)
                r = o;
            else if ("string" == typeof o) {
                try {
                    r = JSON.parse(o)
                } catch (d) {}
                if ("object" != typeof r)
                    return
            }
            if (n && n.length)
                for (a = 0,
                         i = n.length; a < i; a++)
                    r.key === n[a] && (s = !0,
                    "function" == typeof t && t(r));
            else
                "function" == typeof t && t(r);
            if (!s && n)
                for (a = 0,
                         i = n.length; a < i; a++)
                    if ("data" === n[a]) {
                        "function" == typeof t && t(r);
                        break
                    }
        }
        var r = function() {
            var e = !0;
            try {
                window.postMessage({
                    toString: function() {
                        e = !1
                    }
                }, "*")
            } catch (t) {}
            return e
        }()
            , a = function(e, t, n) {
            return this instanceof a ? (this.key = t,
                this.iframe = document.getElementById(e),
                this.origin = location.protocol + "//" + location.host,
                void (this.useObject = n)) : new a(e)
        };
        a.prototype.send = function(e, t) {
            return e.origin = this.origin,
                e.key = this.key,
                this.to ? e.to = this.to : t && (e.to = t),
            r && (this.useObject || e.useObject) || (e = JSON.stringify(e)),
                this.iframe ? this.iframe.contentWindow.postMessage(e, "*") : window.parent.postMessage(e, "*"),
                this
        }
            ,
            a.prototype.listen = function(e, t) {
                var r = this;
                return window.addEventListener ? window.addEventListener("message", function(a) {
                    n.call(r, a, e, t)
                }, !1) : window.attachEvent && window.attachEvent("onmessage", function(a) {
                    n.call(r, a, e, t)
                }),
                    this
            }
            ,
            e.exports = a
    }
    , function(e, t, n) {
        var r = n(129)
            , a = 0;
        e.exports = function(e, t, n) {
            var i;
            0 === a && (a = setTimeout(function() {
                a = 0
            }, 3e3),
            window.Notification && ("granted" === Notification.permission ? (i = new Notification(t || "",{
                icon: e || "",
                body: n || ""
            }),
                i.onclick = function() {
                    "function" == typeof window.focus && window.focus(),
                        this.close(),
                        r.stop()
                }
                ,
                setTimeout(function() {
                    i.close()
                }, 3e3)) : Notification.requestPermission()))
        }
    }
    , function(e, t) {
        var n, r = "新消息提醒", a = 0, i = document.title, s = (i + r).split("");
        e.exports = {
            enable: !0,
            stop: function() {
                this.enable && (clearInterval(a),
                    a = 0,
                    document.title = i)
            },
            start: function() {
                this.enable && !a && (a = setInterval(function() {
                    n = s.shift(),
                        document.title = n + Array.prototype.join.call(s, ""),
                        s.push(n)
                }, 360))
            }
        }
    }
    , function(e, t, n) {
        function r() {
            a = s.appendHTMLToBody(['<div class="easemobim-pc-img-view">', '<div class="shadow"></div>', "<img>", "</div>"].join("")),
                i = a.querySelector("img"),
                s.on(a, "click", function() {
                    a.style.display = "none"
                }, !1)
        }
        var a, i, s = n(5), o = !1;
        e.exports = function(e) {
            var t = e.imgFile;
            o || (r(),
                o = !0),
                t ? i.src = window.URL.createObjectURL(t) : i.src = e.imgSrc,
                a.style.display = "block"
        }
    }
    , function(e, t, n) {
        var r = n(5)
            , a = n(132)
            , i = n(125)
            , s = n(6)
            , o = n(133);
        e.exports = function(e, t) {
            function n() {
                var t = f(Y);
                M(),
                    t > 1 ? (h("maxInvitation", t - 1),
                    "" != e.rule.intervalTime && e.rule.intervalTime >= 0 && d(e.rule.intervalTime)) : u()
            }
            function d(e) {
                y = setTimeout(function() {
                    p(),
                        clearTimeout(y)
                }, 1e3 * e)
            }
            function u() {
                clearTimeout(y)
            }
            function _() {
                d(e.rule.visitTime),
                    l()
            }
            function l() {
                g = s().endOf("day") - s(),
                    L = setTimeout(function() {
                        clearTimeout(L),
                            h("maxInvitation", e.rule.maxInvitation),
                            d(e.rule.visitTime),
                            l()
                    }, g)
            }
            function c() {
                clearTimeout(L)
            }
            function m() {
                c(),
                    a.trigger(i.SYSTEM_EVENT.ACCEPT_INVITATION),
                    M()
            }
            function h(e, t) {
                var n = o.encrypt(e, w)
                    , r = o.encrypt(t, w);
                return window.localStorage && localStorage.setItem(n, r),
                    n
            }
            function f(e) {
                var t = localStorage.getItem(e) ? o.decrypt(localStorage.getItem(e), w) : "";
                return t
            }
            function p() {
                v.style.display = "block"
            }
            function M() {
                v.style.display = "none"
            }
            var y, L, g, Y, v = document.createElement("div"), w = "AUTOINVITATION", k = t.domain.indexOf("sandbox") >= 0 ? "//webim.sandbox.kefu.easemob.com" : "//webim.kefu.easemob.com";
            return "auto_invite_logo.png" === e.style.icon ? e.style.icon = k + "/webim/static/img/" + e.style.icon : e.style.icon = k + e.style.icon,
                v.className = r.isMobile ? "easemob-invite-box easemob-mobile-invite-box" : "easemob-invite-box",
                v.innerHTML = '<div class="invite-logo"><img class="invite-img" src="' + e.style.icon + '"/></div><span class="invite-cancel">×</span><div class="invite-text"><span>' + e.style.guide + '</span></div><div class="ui-cmp-icontxtbtn blue button invite-accept ' + e.themeName + '">' + e.style.button,
                document.body.appendChild(v),
                h("visitTime", e.rule.visitTime),
                Y = h("maxInvitation", e.rule.maxInvitation),
                r.live(".invite-cancel", "click", n, v),
                r.live(".invite-accept", "click", m, v),
                {
                    beginStartTimer: _,
                    clearInvitation: function() {
                        M(),
                            clearTimeout(y),
                            clearTimeout(L)
                    }
                }
        }
    }
    , function(e, t) {
        function n(e, t) {
            if ("string" == typeof e)
                r(e, t);
            else {
                if (!_.isArray(e))
                    throw new Error("unexpected type of event:",typeof e);
                _.each(e, function(e) {
                    r(e, t)
                })
            }
        }
        function r(e, t) {
            if ("string" != typeof e)
                throw new Error("unexpected type of event.");
            s[e] || (s[e] = []),
                s[e].push(t)
        }
        function a(e, t) {
            t.push(e),
                _.each(s[e], function(n) {
                    try {
                        n.apply(null, t)
                    } catch (r) {
                        console.warn("error occurred when run event callbacks.", e, t, r)
                    }
                })
        }
        function i() {
            var e = arguments[0]
                , t = arguments;
            _.each(s[e], function(e) {
                try {
                    e.apply(null, t)
                } catch (n) {
                    console.warn("error occurred when run event callbacks.", t, n)
                }
            })
        }
        var s = {};
        e.exports = {
            add: n,
            excuteCallbacks: a,
            trigger: i
        }
    }
    , function(e, t, n) {
        var r = n(134);
        e.exports = {
            encrypt: function(e, t) {
                var n = r.createCipher("aes192", t)
                    , a = n.update(e + "", "utf8", "hex");
                return a += n.final("hex")
            },
            decrypt: function(e, t) {
                var n = r.createDecipher("aes192", t)
                    , a = n.update(e, "hex", "utf8");
                return a += n.final("utf8")
            }
        }
    }
    , function(e, t, n) {
        (function(r) {
                function a() {
                    var e = [].slice.call(arguments).join(" ");
                    throw new Error([e, "we accept pull requests", "http://github.com/dominictarr/crypto-browserify"].join("\n"))
                }
                function i(e, t) {
                    for (var n in e)
                        t(e[n], n)
                }
                var s = n(139);
                t.createHash = n(141),
                    t.createHmac = n(154),
                    t.randomBytes = function(e, t) {
                        if (!t || !t.call)
                            return new r(s(e));
                        try {
                            t.call(this, void 0, new r(s(e)))
                        } catch (n) {
                            t(n)
                        }
                    }
                    ,
                    t.getHashes = function() {
                        return ["sha1", "sha256", "sha512", "md5", "rmd160"]
                    }
                ;
                var o = n(155)(t);
                t.pbkdf2 = o.pbkdf2,
                    t.pbkdf2Sync = o.pbkdf2Sync,
                    n(157)(t, e.exports),
                    i(["createCredentials", "createSign", "createVerify", "createDiffieHellman"], function(e) {
                        t[e] = function() {
                            a("sorry,", e, "is not implemented yet")
                        }
                    })
            }
        ).call(t, n(135).Buffer)
    }
    , function(e, t, n) {
        (function(e) {
                "use strict";
                function r() {
                    try {
                        var e = new Uint8Array(1);
                        return e.__proto__ = {
                            __proto__: Uint8Array.prototype,
                            foo: function() {
                                return 42
                            }
                        },
                        42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                    } catch (t) {
                        return !1
                    }
                }
                function a() {
                    return s.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
                }
                function i(e, t) {
                    if (a() < t)
                        throw new RangeError("Invalid typed array length");
                    return s.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t),
                        e.__proto__ = s.prototype) : (null === e && (e = new s(t)),
                        e.length = t),
                        e
                }
                function s(e, t, n) {
                    if (!(s.TYPED_ARRAY_SUPPORT || this instanceof s))
                        return new s(e,t,n);
                    if ("number" == typeof e) {
                        if ("string" == typeof t)
                            throw new Error("If encoding is specified then the first argument must be a string");
                        return _(this, e)
                    }
                    return o(this, e, t, n)
                }
                function o(e, t, n, r) {
                    if ("number" == typeof t)
                        throw new TypeError('"value" argument must not be a number');
                    return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? m(e, t, n, r) : "string" == typeof t ? l(e, t, n) : h(e, t)
                }
                function d(e) {
                    if ("number" != typeof e)
                        throw new TypeError('"size" argument must be a number');
                    if (e < 0)
                        throw new RangeError('"size" argument must not be negative')
                }
                function u(e, t, n, r) {
                    return d(t),
                        t <= 0 ? i(e, t) : void 0 !== n ? "string" == typeof r ? i(e, t).fill(n, r) : i(e, t).fill(n) : i(e, t)
                }
                function _(e, t) {
                    if (d(t),
                        e = i(e, t < 0 ? 0 : 0 | f(t)),
                        !s.TYPED_ARRAY_SUPPORT)
                        for (var n = 0; n < t; ++n)
                            e[n] = 0;
                    return e
                }
                function l(e, t, n) {
                    if ("string" == typeof n && "" !== n || (n = "utf8"),
                        !s.isEncoding(n))
                        throw new TypeError('"encoding" must be a valid string encoding');
                    var r = 0 | M(t, n);
                    e = i(e, r);
                    var a = e.write(t, n);
                    return a !== r && (e = e.slice(0, a)),
                        e
                }
                function c(e, t) {
                    var n = t.length < 0 ? 0 : 0 | f(t.length);
                    e = i(e, n);
                    for (var r = 0; r < n; r += 1)
                        e[r] = 255 & t[r];
                    return e
                }
                function m(e, t, n, r) {
                    if (t.byteLength,
                    n < 0 || t.byteLength < n)
                        throw new RangeError("'offset' is out of bounds");
                    if (t.byteLength < n + (r || 0))
                        throw new RangeError("'length' is out of bounds");
                    return t = void 0 === n && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t,n) : new Uint8Array(t,n,r),
                        s.TYPED_ARRAY_SUPPORT ? (e = t,
                            e.__proto__ = s.prototype) : e = c(e, t),
                        e
                }
                function h(e, t) {
                    if (s.isBuffer(t)) {
                        var n = 0 | f(t.length);
                        return e = i(e, n),
                            0 === e.length ? e : (t.copy(e, 0, 0, n),
                                e)
                    }
                    if (t) {
                        if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length"in t)
                            return "number" != typeof t.length || K(t.length) ? i(e, 0) : c(e, t);
                        if ("Buffer" === t.type && Q(t.data))
                            return c(e, t.data)
                    }
                    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                }
                function f(e) {
                    if (e >= a())
                        throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
                    return 0 | e
                }
                function p(e) {
                    return +e != e && (e = 0),
                        s.alloc(+e)
                }
                function M(e, t) {
                    if (s.isBuffer(e))
                        return e.length;
                    if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer))
                        return e.byteLength;
                    "string" != typeof e && (e = "" + e);
                    var n = e.length;
                    if (0 === n)
                        return 0;
                    for (var r = !1; ; )
                        switch (t) {
                            case "ascii":
                            case "latin1":
                            case "binary":
                                return n;
                            case "utf8":
                            case "utf-8":
                            case void 0:
                                return J(e).length;
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return 2 * n;
                            case "hex":
                                return n >>> 1;
                            case "base64":
                                return q(e).length;
                            default:
                                if (r)
                                    return J(e).length;
                                t = ("" + t).toLowerCase(),
                                    r = !0
                        }
                }
                function y(e, t, n) {
                    var r = !1;
                    if ((void 0 === t || t < 0) && (t = 0),
                    t > this.length)
                        return "";
                    if ((void 0 === n || n > this.length) && (n = this.length),
                    n <= 0)
                        return "";
                    if (n >>>= 0,
                        t >>>= 0,
                    n <= t)
                        return "";
                    for (e || (e = "utf8"); ; )
                        switch (e) {
                            case "hex":
                                return O(this, t, n);
                            case "utf8":
                            case "utf-8":
                                return x(this, t, n);
                            case "ascii":
                                return H(this, t, n);
                            case "latin1":
                            case "binary":
                                return j(this, t, n);
                            case "base64":
                                return S(this, t, n);
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return A(this, t, n);
                            default:
                                if (r)
                                    throw new TypeError("Unknown encoding: " + e);
                                e = (e + "").toLowerCase(),
                                    r = !0
                        }
                }
                function L(e, t, n) {
                    var r = e[t];
                    e[t] = e[n],
                        e[n] = r
                }
                function g(e, t, n, r, a) {
                    if (0 === e.length)
                        return -1;
                    if ("string" == typeof n ? (r = n,
                        n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648),
                        n = +n,
                    isNaN(n) && (n = a ? 0 : e.length - 1),
                    n < 0 && (n = e.length + n),
                    n >= e.length) {
                        if (a)
                            return -1;
                        n = e.length - 1
                    } else if (n < 0) {
                        if (!a)
                            return -1;
                        n = 0
                    }
                    if ("string" == typeof t && (t = s.from(t, r)),
                        s.isBuffer(t))
                        return 0 === t.length ? -1 : Y(e, t, n, r, a);
                    if ("number" == typeof t)
                        return t &= 255,
                            s.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? a ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : Y(e, [t], n, r, a);
                    throw new TypeError("val must be string, number or Buffer")
                }
                function Y(e, t, n, r, a) {
                    function i(e, t) {
                        return 1 === s ? e[t] : e.readUInt16BE(t * s)
                    }
                    var s = 1
                        , o = e.length
                        , d = t.length;
                    if (void 0 !== r && (r = String(r).toLowerCase(),
                    "ucs2" === r || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                        if (e.length < 2 || t.length < 2)
                            return -1;
                        s = 2,
                            o /= 2,
                            d /= 2,
                            n /= 2
                    }
                    var u;
                    if (a) {
                        var _ = -1;
                        for (u = n; u < o; u++)
                            if (i(e, u) === i(t, _ === -1 ? 0 : u - _)) {
                                if (_ === -1 && (_ = u),
                                u - _ + 1 === d)
                                    return _ * s
                            } else
                                _ !== -1 && (u -= u - _),
                                    _ = -1
                    } else
                        for (n + d > o && (n = o - d),
                                 u = n; u >= 0; u--) {
                            for (var l = !0, c = 0; c < d; c++)
                                if (i(e, u + c) !== i(t, c)) {
                                    l = !1;
                                    break
                                }
                            if (l)
                                return u
                        }
                    return -1
                }
                function v(e, t, n, r) {
                    n = Number(n) || 0;
                    var a = e.length - n;
                    r ? (r = Number(r),
                    r > a && (r = a)) : r = a;
                    var i = t.length;
                    if (i % 2 !== 0)
                        throw new TypeError("Invalid hex string");
                    r > i / 2 && (r = i / 2);
                    for (var s = 0; s < r; ++s) {
                        var o = parseInt(t.substr(2 * s, 2), 16);
                        if (isNaN(o))
                            return s;
                        e[n + s] = o
                    }
                    return s
                }
                function w(e, t, n, r) {
                    return X(J(t, e.length - n), e, n, r)
                }
                function k(e, t, n, r) {
                    return X(V(t), e, n, r)
                }
                function b(e, t, n, r) {
                    return k(e, t, n, r)
                }
                function T(e, t, n, r) {
                    return X(q(t), e, n, r)
                }
                function D(e, t, n, r) {
                    return X(G(t, e.length - n), e, n, r)
                }
                function S(e, t, n) {
                    return 0 === t && n === e.length ? $.fromByteArray(e) : $.fromByteArray(e.slice(t, n))
                }
                function x(e, t, n) {
                    n = Math.min(e.length, n);
                    for (var r = [], a = t; a < n; ) {
                        var i = e[a]
                            , s = null
                            , o = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
                        if (a + o <= n) {
                            var d, u, _, l;
                            switch (o) {
                                case 1:
                                    i < 128 && (s = i);
                                    break;
                                case 2:
                                    d = e[a + 1],
                                    128 === (192 & d) && (l = (31 & i) << 6 | 63 & d,
                                    l > 127 && (s = l));
                                    break;
                                case 3:
                                    d = e[a + 1],
                                        u = e[a + 2],
                                    128 === (192 & d) && 128 === (192 & u) && (l = (15 & i) << 12 | (63 & d) << 6 | 63 & u,
                                    l > 2047 && (l < 55296 || l > 57343) && (s = l));
                                    break;
                                case 4:
                                    d = e[a + 1],
                                        u = e[a + 2],
                                        _ = e[a + 3],
                                    128 === (192 & d) && 128 === (192 & u) && 128 === (192 & _) && (l = (15 & i) << 18 | (63 & d) << 12 | (63 & u) << 6 | 63 & _,
                                    l > 65535 && l < 1114112 && (s = l))
                            }
                        }
                        null === s ? (s = 65533,
                            o = 1) : s > 65535 && (s -= 65536,
                            r.push(s >>> 10 & 1023 | 55296),
                            s = 56320 | 1023 & s),
                            r.push(s),
                            a += o
                    }
                    return E(r)
                }
                function E(e) {
                    var t = e.length;
                    if (t <= ee)
                        return String.fromCharCode.apply(String, e);
                    for (var n = "", r = 0; r < t; )
                        n += String.fromCharCode.apply(String, e.slice(r, r += ee));
                    return n
                }
                function H(e, t, n) {
                    var r = "";
                    n = Math.min(e.length, n);
                    for (var a = t; a < n; ++a)
                        r += String.fromCharCode(127 & e[a]);
                    return r
                }
                function j(e, t, n) {
                    var r = "";
                    n = Math.min(e.length, n);
                    for (var a = t; a < n; ++a)
                        r += String.fromCharCode(e[a]);
                    return r
                }
                function O(e, t, n) {
                    var r = e.length;
                    (!t || t < 0) && (t = 0),
                    (!n || n < 0 || n > r) && (n = r);
                    for (var a = "", i = t; i < n; ++i)
                        a += U(e[i]);
                    return a
                }
                function A(e, t, n) {
                    for (var r = e.slice(t, n), a = "", i = 0; i < r.length; i += 2)
                        a += String.fromCharCode(r[i] + 256 * r[i + 1]);
                    return a
                }
                function P(e, t, n) {
                    if (e % 1 !== 0 || e < 0)
                        throw new RangeError("offset is not uint");
                    if (e + t > n)
                        throw new RangeError("Trying to access beyond buffer length")
                }
                function I(e, t, n, r, a, i) {
                    if (!s.isBuffer(e))
                        throw new TypeError('"buffer" argument must be a Buffer instance');
                    if (t > a || t < i)
                        throw new RangeError('"value" argument is out of bounds');
                    if (n + r > e.length)
                        throw new RangeError("Index out of range")
                }
                function W(e, t, n, r) {
                    t < 0 && (t = 65535 + t + 1);
                    for (var a = 0, i = Math.min(e.length - n, 2); a < i; ++a)
                        e[n + a] = (t & 255 << 8 * (r ? a : 1 - a)) >>> 8 * (r ? a : 1 - a)
                }
                function R(e, t, n, r) {
                    t < 0 && (t = 4294967295 + t + 1);
                    for (var a = 0, i = Math.min(e.length - n, 4); a < i; ++a)
                        e[n + a] = t >>> 8 * (r ? a : 3 - a) & 255
                }
                function N(e, t, n, r, a, i) {
                    if (n + r > e.length)
                        throw new RangeError("Index out of range");
                    if (n < 0)
                        throw new RangeError("Index out of range")
                }
                function F(e, t, n, r, a) {
                    return a || N(e, t, n, 4, 3.4028234663852886e38, -3.4028234663852886e38),
                        Z.write(e, t, n, r, 23, 4),
                    n + 4
                }
                function C(e, t, n, r, a) {
                    return a || N(e, t, n, 8, 1.7976931348623157e308, -1.7976931348623157e308),
                        Z.write(e, t, n, r, 52, 8),
                    n + 8
                }
                function z(e) {
                    if (e = B(e).replace(te, ""),
                    e.length < 2)
                        return "";
                    for (; e.length % 4 !== 0; )
                        e += "=";
                    return e
                }
                function B(e) {
                    return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, "")
                }
                function U(e) {
                    return e < 16 ? "0" + e.toString(16) : e.toString(16)
                }
                function J(e, t) {
                    t = t || 1 / 0;
                    for (var n, r = e.length, a = null, i = [], s = 0; s < r; ++s) {
                        if (n = e.charCodeAt(s),
                        n > 55295 && n < 57344) {
                            if (!a) {
                                if (n > 56319) {
                                    (t -= 3) > -1 && i.push(239, 191, 189);
                                    continue
                                }
                                if (s + 1 === r) {
                                    (t -= 3) > -1 && i.push(239, 191, 189);
                                    continue
                                }
                                a = n;
                                continue
                            }
                            if (n < 56320) {
                                (t -= 3) > -1 && i.push(239, 191, 189),
                                    a = n;
                                continue
                            }
                            n = (a - 55296 << 10 | n - 56320) + 65536
                        } else
                            a && (t -= 3) > -1 && i.push(239, 191, 189);
                        if (a = null,
                        n < 128) {
                            if ((t -= 1) < 0)
                                break;
                            i.push(n)
                        } else if (n < 2048) {
                            if ((t -= 2) < 0)
                                break;
                            i.push(n >> 6 | 192, 63 & n | 128)
                        } else if (n < 65536) {
                            if ((t -= 3) < 0)
                                break;
                            i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                        } else {
                            if (!(n < 1114112))
                                throw new Error("Invalid code point");
                            if ((t -= 4) < 0)
                                break;
                            i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                        }
                    }
                    return i
                }
                function V(e) {
                    for (var t = [], n = 0; n < e.length; ++n)
                        t.push(255 & e.charCodeAt(n));
                    return t
                }
                function G(e, t) {
                    for (var n, r, a, i = [], s = 0; s < e.length && !((t -= 2) < 0); ++s)
                        n = e.charCodeAt(s),
                            r = n >> 8,
                            a = n % 256,
                            i.push(a),
                            i.push(r);
                    return i
                }
                function q(e) {
                    return $.toByteArray(z(e))
                }
                function X(e, t, n, r) {
                    for (var a = 0; a < r && !(a + n >= t.length || a >= e.length); ++a)
                        t[a + n] = e[a];
                    return a
                }
                function K(e) {
                    return e !== e
                }
                var $ = n(136)
                    , Z = n(137)
                    , Q = n(138);
                t.Buffer = s,
                    t.SlowBuffer = p,
                    t.INSPECT_MAX_BYTES = 50,
                    s.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : r(),
                    t.kMaxLength = a(),
                    s.poolSize = 8192,
                    s._augment = function(e) {
                        return e.__proto__ = s.prototype,
                            e
                    }
                    ,
                    s.from = function(e, t, n) {
                        return o(null, e, t, n)
                    }
                    ,
                s.TYPED_ARRAY_SUPPORT && (s.prototype.__proto__ = Uint8Array.prototype,
                    s.__proto__ = Uint8Array,
                "undefined" != typeof Symbol && Symbol.species && s[Symbol.species] === s && Object.defineProperty(s, Symbol.species, {
                    value: null,
                    configurable: !0
                })),
                    s.alloc = function(e, t, n) {
                        return u(null, e, t, n)
                    }
                    ,
                    s.allocUnsafe = function(e) {
                        return _(null, e)
                    }
                    ,
                    s.allocUnsafeSlow = function(e) {
                        return _(null, e)
                    }
                    ,
                    s.isBuffer = function(e) {
                        return !(null == e || !e._isBuffer)
                    }
                    ,
                    s.compare = function(e, t) {
                        if (!s.isBuffer(e) || !s.isBuffer(t))
                            throw new TypeError("Arguments must be Buffers");
                        if (e === t)
                            return 0;
                        for (var n = e.length, r = t.length, a = 0, i = Math.min(n, r); a < i; ++a)
                            if (e[a] !== t[a]) {
                                n = e[a],
                                    r = t[a];
                                break
                            }
                        return n < r ? -1 : r < n ? 1 : 0
                    }
                    ,
                    s.isEncoding = function(e) {
                        switch (String(e).toLowerCase()) {
                            case "hex":
                            case "utf8":
                            case "utf-8":
                            case "ascii":
                            case "latin1":
                            case "binary":
                            case "base64":
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return !0;
                            default:
                                return !1
                        }
                    }
                    ,
                    s.concat = function(e, t) {
                        if (!Q(e))
                            throw new TypeError('"list" argument must be an Array of Buffers');
                        if (0 === e.length)
                            return s.alloc(0);
                        var n;
                        if (void 0 === t)
                            for (t = 0,
                                     n = 0; n < e.length; ++n)
                                t += e[n].length;
                        var r = s.allocUnsafe(t)
                            , a = 0;
                        for (n = 0; n < e.length; ++n) {
                            var i = e[n];
                            if (!s.isBuffer(i))
                                throw new TypeError('"list" argument must be an Array of Buffers');
                            i.copy(r, a),
                                a += i.length
                        }
                        return r
                    }
                    ,
                    s.byteLength = M,
                    s.prototype._isBuffer = !0,
                    s.prototype.swap16 = function() {
                        var e = this.length;
                        if (e % 2 !== 0)
                            throw new RangeError("Buffer size must be a multiple of 16-bits");
                        for (var t = 0; t < e; t += 2)
                            L(this, t, t + 1);
                        return this
                    }
                    ,
                    s.prototype.swap32 = function() {
                        var e = this.length;
                        if (e % 4 !== 0)
                            throw new RangeError("Buffer size must be a multiple of 32-bits");
                        for (var t = 0; t < e; t += 4)
                            L(this, t, t + 3),
                                L(this, t + 1, t + 2);
                        return this
                    }
                    ,
                    s.prototype.swap64 = function() {
                        var e = this.length;
                        if (e % 8 !== 0)
                            throw new RangeError("Buffer size must be a multiple of 64-bits");
                        for (var t = 0; t < e; t += 8)
                            L(this, t, t + 7),
                                L(this, t + 1, t + 6),
                                L(this, t + 2, t + 5),
                                L(this, t + 3, t + 4);
                        return this
                    }
                    ,
                    s.prototype.toString = function() {
                        var e = 0 | this.length;
                        return 0 === e ? "" : 0 === arguments.length ? x(this, 0, e) : y.apply(this, arguments)
                    }
                    ,
                    s.prototype.equals = function(e) {
                        if (!s.isBuffer(e))
                            throw new TypeError("Argument must be a Buffer");
                        return this === e || 0 === s.compare(this, e)
                    }
                    ,
                    s.prototype.inspect = function() {
                        var e = ""
                            , n = t.INSPECT_MAX_BYTES;
                        return this.length > 0 && (e = this.toString("hex", 0, n).match(/.{2}/g).join(" "),
                        this.length > n && (e += " ... ")),
                        "<Buffer " + e + ">"
                    }
                    ,
                    s.prototype.compare = function(e, t, n, r, a) {
                        if (!s.isBuffer(e))
                            throw new TypeError("Argument must be a Buffer");
                        if (void 0 === t && (t = 0),
                        void 0 === n && (n = e ? e.length : 0),
                        void 0 === r && (r = 0),
                        void 0 === a && (a = this.length),
                        t < 0 || n > e.length || r < 0 || a > this.length)
                            throw new RangeError("out of range index");
                        if (r >= a && t >= n)
                            return 0;
                        if (r >= a)
                            return -1;
                        if (t >= n)
                            return 1;
                        if (t >>>= 0,
                            n >>>= 0,
                            r >>>= 0,
                            a >>>= 0,
                        this === e)
                            return 0;
                        for (var i = a - r, o = n - t, d = Math.min(i, o), u = this.slice(r, a), _ = e.slice(t, n), l = 0; l < d; ++l)
                            if (u[l] !== _[l]) {
                                i = u[l],
                                    o = _[l];
                                break
                            }
                        return i < o ? -1 : o < i ? 1 : 0
                    }
                    ,
                    s.prototype.includes = function(e, t, n) {
                        return this.indexOf(e, t, n) !== -1
                    }
                    ,
                    s.prototype.indexOf = function(e, t, n) {
                        return g(this, e, t, n, !0)
                    }
                    ,
                    s.prototype.lastIndexOf = function(e, t, n) {
                        return g(this, e, t, n, !1)
                    }
                    ,
                    s.prototype.write = function(e, t, n, r) {
                        if (void 0 === t)
                            r = "utf8",
                                n = this.length,
                                t = 0;
                        else if (void 0 === n && "string" == typeof t)
                            r = t,
                                n = this.length,
                                t = 0;
                        else {
                            if (!isFinite(t))
                                throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                            t |= 0,
                                isFinite(n) ? (n |= 0,
                                void 0 === r && (r = "utf8")) : (r = n,
                                    n = void 0)
                        }
                        var a = this.length - t;
                        if ((void 0 === n || n > a) && (n = a),
                        e.length > 0 && (n < 0 || t < 0) || t > this.length)
                            throw new RangeError("Attempt to write outside buffer bounds");
                        r || (r = "utf8");
                        for (var i = !1; ; )
                            switch (r) {
                                case "hex":
                                    return v(this, e, t, n);
                                case "utf8":
                                case "utf-8":
                                    return w(this, e, t, n);
                                case "ascii":
                                    return k(this, e, t, n);
                                case "latin1":
                                case "binary":
                                    return b(this, e, t, n);
                                case "base64":
                                    return T(this, e, t, n);
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return D(this, e, t, n);
                                default:
                                    if (i)
                                        throw new TypeError("Unknown encoding: " + r);
                                    r = ("" + r).toLowerCase(),
                                        i = !0
                            }
                    }
                    ,
                    s.prototype.toJSON = function() {
                        return {
                            type: "Buffer",
                            data: Array.prototype.slice.call(this._arr || this, 0)
                        }
                    }
                ;
                var ee = 4096;
                s.prototype.slice = function(e, t) {
                    var n = this.length;
                    e = ~~e,
                        t = void 0 === t ? n : ~~t,
                        e < 0 ? (e += n,
                        e < 0 && (e = 0)) : e > n && (e = n),
                        t < 0 ? (t += n,
                        t < 0 && (t = 0)) : t > n && (t = n),
                    t < e && (t = e);
                    var r;
                    if (s.TYPED_ARRAY_SUPPORT)
                        r = this.subarray(e, t),
                            r.__proto__ = s.prototype;
                    else {
                        var a = t - e;
                        r = new s(a,void 0);
                        for (var i = 0; i < a; ++i)
                            r[i] = this[i + e]
                    }
                    return r
                }
                    ,
                    s.prototype.readUIntLE = function(e, t, n) {
                        e |= 0,
                            t |= 0,
                        n || P(e, t, this.length);
                        for (var r = this[e], a = 1, i = 0; ++i < t && (a *= 256); )
                            r += this[e + i] * a;
                        return r
                    }
                    ,
                    s.prototype.readUIntBE = function(e, t, n) {
                        e |= 0,
                            t |= 0,
                        n || P(e, t, this.length);
                        for (var r = this[e + --t], a = 1; t > 0 && (a *= 256); )
                            r += this[e + --t] * a;
                        return r
                    }
                    ,
                    s.prototype.readUInt8 = function(e, t) {
                        return t || P(e, 1, this.length),
                            this[e]
                    }
                    ,
                    s.prototype.readUInt16LE = function(e, t) {
                        return t || P(e, 2, this.length),
                        this[e] | this[e + 1] << 8
                    }
                    ,
                    s.prototype.readUInt16BE = function(e, t) {
                        return t || P(e, 2, this.length),
                        this[e] << 8 | this[e + 1]
                    }
                    ,
                    s.prototype.readUInt32LE = function(e, t) {
                        return t || P(e, 4, this.length),
                        (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
                    }
                    ,
                    s.prototype.readUInt32BE = function(e, t) {
                        return t || P(e, 4, this.length),
                        16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
                    }
                    ,
                    s.prototype.readIntLE = function(e, t, n) {
                        e |= 0,
                            t |= 0,
                        n || P(e, t, this.length);
                        for (var r = this[e], a = 1, i = 0; ++i < t && (a *= 256); )
                            r += this[e + i] * a;
                        return a *= 128,
                        r >= a && (r -= Math.pow(2, 8 * t)),
                            r
                    }
                    ,
                    s.prototype.readIntBE = function(e, t, n) {
                        e |= 0,
                            t |= 0,
                        n || P(e, t, this.length);
                        for (var r = t, a = 1, i = this[e + --r]; r > 0 && (a *= 256); )
                            i += this[e + --r] * a;
                        return a *= 128,
                        i >= a && (i -= Math.pow(2, 8 * t)),
                            i
                    }
                    ,
                    s.prototype.readInt8 = function(e, t) {
                        return t || P(e, 1, this.length),
                            128 & this[e] ? (255 - this[e] + 1) * -1 : this[e]
                    }
                    ,
                    s.prototype.readInt16LE = function(e, t) {
                        t || P(e, 2, this.length);
                        var n = this[e] | this[e + 1] << 8;
                        return 32768 & n ? 4294901760 | n : n
                    }
                    ,
                    s.prototype.readInt16BE = function(e, t) {
                        t || P(e, 2, this.length);
                        var n = this[e + 1] | this[e] << 8;
                        return 32768 & n ? 4294901760 | n : n
                    }
                    ,
                    s.prototype.readInt32LE = function(e, t) {
                        return t || P(e, 4, this.length),
                        this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
                    }
                    ,
                    s.prototype.readInt32BE = function(e, t) {
                        return t || P(e, 4, this.length),
                        this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
                    }
                    ,
                    s.prototype.readFloatLE = function(e, t) {
                        return t || P(e, 4, this.length),
                            Z.read(this, e, !0, 23, 4)
                    }
                    ,
                    s.prototype.readFloatBE = function(e, t) {
                        return t || P(e, 4, this.length),
                            Z.read(this, e, !1, 23, 4)
                    }
                    ,
                    s.prototype.readDoubleLE = function(e, t) {
                        return t || P(e, 8, this.length),
                            Z.read(this, e, !0, 52, 8)
                    }
                    ,
                    s.prototype.readDoubleBE = function(e, t) {
                        return t || P(e, 8, this.length),
                            Z.read(this, e, !1, 52, 8)
                    }
                    ,
                    s.prototype.writeUIntLE = function(e, t, n, r) {
                        if (e = +e,
                            t |= 0,
                            n |= 0,
                            !r) {
                            var a = Math.pow(2, 8 * n) - 1;
                            I(this, e, t, n, a, 0)
                        }
                        var i = 1
                            , s = 0;
                        for (this[t] = 255 & e; ++s < n && (i *= 256); )
                            this[t + s] = e / i & 255;
                        return t + n
                    }
                    ,
                    s.prototype.writeUIntBE = function(e, t, n, r) {
                        if (e = +e,
                            t |= 0,
                            n |= 0,
                            !r) {
                            var a = Math.pow(2, 8 * n) - 1;
                            I(this, e, t, n, a, 0)
                        }
                        var i = n - 1
                            , s = 1;
                        for (this[t + i] = 255 & e; --i >= 0 && (s *= 256); )
                            this[t + i] = e / s & 255;
                        return t + n
                    }
                    ,
                    s.prototype.writeUInt8 = function(e, t, n) {
                        return e = +e,
                            t |= 0,
                        n || I(this, e, t, 1, 255, 0),
                        s.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
                            this[t] = 255 & e,
                        t + 1
                    }
                    ,
                    s.prototype.writeUInt16LE = function(e, t, n) {
                        return e = +e,
                            t |= 0,
                        n || I(this, e, t, 2, 65535, 0),
                            s.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
                                this[t + 1] = e >>> 8) : W(this, e, t, !0),
                        t + 2
                    }
                    ,
                    s.prototype.writeUInt16BE = function(e, t, n) {
                        return e = +e,
                            t |= 0,
                        n || I(this, e, t, 2, 65535, 0),
                            s.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8,
                                this[t + 1] = 255 & e) : W(this, e, t, !1),
                        t + 2
                    }
                    ,
                    s.prototype.writeUInt32LE = function(e, t, n) {
                        return e = +e,
                            t |= 0,
                        n || I(this, e, t, 4, 4294967295, 0),
                            s.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24,
                                this[t + 2] = e >>> 16,
                                this[t + 1] = e >>> 8,
                                this[t] = 255 & e) : R(this, e, t, !0),
                        t + 4
                    }
                    ,
                    s.prototype.writeUInt32BE = function(e, t, n) {
                        return e = +e,
                            t |= 0,
                        n || I(this, e, t, 4, 4294967295, 0),
                            s.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24,
                                this[t + 1] = e >>> 16,
                                this[t + 2] = e >>> 8,
                                this[t + 3] = 255 & e) : R(this, e, t, !1),
                        t + 4
                    }
                    ,
                    s.prototype.writeIntLE = function(e, t, n, r) {
                        if (e = +e,
                            t |= 0,
                            !r) {
                            var a = Math.pow(2, 8 * n - 1);
                            I(this, e, t, n, a - 1, -a)
                        }
                        var i = 0
                            , s = 1
                            , o = 0;
                        for (this[t] = 255 & e; ++i < n && (s *= 256); )
                            e < 0 && 0 === o && 0 !== this[t + i - 1] && (o = 1),
                                this[t + i] = (e / s >> 0) - o & 255;
                        return t + n
                    }
                    ,
                    s.prototype.writeIntBE = function(e, t, n, r) {
                        if (e = +e,
                            t |= 0,
                            !r) {
                            var a = Math.pow(2, 8 * n - 1);
                            I(this, e, t, n, a - 1, -a)
                        }
                        var i = n - 1
                            , s = 1
                            , o = 0;
                        for (this[t + i] = 255 & e; --i >= 0 && (s *= 256); )
                            e < 0 && 0 === o && 0 !== this[t + i + 1] && (o = 1),
                                this[t + i] = (e / s >> 0) - o & 255;
                        return t + n
                    }
                    ,
                    s.prototype.writeInt8 = function(e, t, n) {
                        return e = +e,
                            t |= 0,
                        n || I(this, e, t, 1, 127, -128),
                        s.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)),
                        e < 0 && (e = 255 + e + 1),
                            this[t] = 255 & e,
                        t + 1
                    }
                    ,
                    s.prototype.writeInt16LE = function(e, t, n) {
                        return e = +e,
                            t |= 0,
                        n || I(this, e, t, 2, 32767, -32768),
                            s.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
                                this[t + 1] = e >>> 8) : W(this, e, t, !0),
                        t + 2
                    }
                    ,
                    s.prototype.writeInt16BE = function(e, t, n) {
                        return e = +e,
                            t |= 0,
                        n || I(this, e, t, 2, 32767, -32768),
                            s.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8,
                                this[t + 1] = 255 & e) : W(this, e, t, !1),
                        t + 2
                    }
                    ,
                    s.prototype.writeInt32LE = function(e, t, n) {
                        return e = +e,
                            t |= 0,
                        n || I(this, e, t, 4, 2147483647, -2147483648),
                            s.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e,
                                this[t + 1] = e >>> 8,
                                this[t + 2] = e >>> 16,
                                this[t + 3] = e >>> 24) : R(this, e, t, !0),
                        t + 4
                    }
                    ,
                    s.prototype.writeInt32BE = function(e, t, n) {
                        return e = +e,
                            t |= 0,
                        n || I(this, e, t, 4, 2147483647, -2147483648),
                        e < 0 && (e = 4294967295 + e + 1),
                            s.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24,
                                this[t + 1] = e >>> 16,
                                this[t + 2] = e >>> 8,
                                this[t + 3] = 255 & e) : R(this, e, t, !1),
                        t + 4
                    }
                    ,
                    s.prototype.writeFloatLE = function(e, t, n) {
                        return F(this, e, t, !0, n)
                    }
                    ,
                    s.prototype.writeFloatBE = function(e, t, n) {
                        return F(this, e, t, !1, n)
                    }
                    ,
                    s.prototype.writeDoubleLE = function(e, t, n) {
                        return C(this, e, t, !0, n)
                    }
                    ,
                    s.prototype.writeDoubleBE = function(e, t, n) {
                        return C(this, e, t, !1, n)
                    }
                    ,
                    s.prototype.copy = function(e, t, n, r) {
                        if (n || (n = 0),
                        r || 0 === r || (r = this.length),
                        t >= e.length && (t = e.length),
                        t || (t = 0),
                        r > 0 && r < n && (r = n),
                        r === n)
                            return 0;
                        if (0 === e.length || 0 === this.length)
                            return 0;
                        if (t < 0)
                            throw new RangeError("targetStart out of bounds");
                        if (n < 0 || n >= this.length)
                            throw new RangeError("sourceStart out of bounds");
                        if (r < 0)
                            throw new RangeError("sourceEnd out of bounds");
                        r > this.length && (r = this.length),
                        e.length - t < r - n && (r = e.length - t + n);
                        var a, i = r - n;
                        if (this === e && n < t && t < r)
                            for (a = i - 1; a >= 0; --a)
                                e[a + t] = this[a + n];
                        else if (i < 1e3 || !s.TYPED_ARRAY_SUPPORT)
                            for (a = 0; a < i; ++a)
                                e[a + t] = this[a + n];
                        else
                            Uint8Array.prototype.set.call(e, this.subarray(n, n + i), t);
                        return i
                    }
                    ,
                    s.prototype.fill = function(e, t, n, r) {
                        if ("string" == typeof e) {
                            if ("string" == typeof t ? (r = t,
                                t = 0,
                                n = this.length) : "string" == typeof n && (r = n,
                                n = this.length),
                            1 === e.length) {
                                var a = e.charCodeAt(0);
                                a < 256 && (e = a)
                            }
                            if (void 0 !== r && "string" != typeof r)
                                throw new TypeError("encoding must be a string");
                            if ("string" == typeof r && !s.isEncoding(r))
                                throw new TypeError("Unknown encoding: " + r)
                        } else
                            "number" == typeof e && (e &= 255);
                        if (t < 0 || this.length < t || this.length < n)
                            throw new RangeError("Out of range index");
                        if (n <= t)
                            return this;
                        t >>>= 0,
                            n = void 0 === n ? this.length : n >>> 0,
                        e || (e = 0);
                        var i;
                        if ("number" == typeof e)
                            for (i = t; i < n; ++i)
                                this[i] = e;
                        else {
                            var o = s.isBuffer(e) ? e : J(new s(e,r).toString())
                                , d = o.length;
                            for (i = 0; i < n - t; ++i)
                                this[i + t] = o[i % d]
                        }
                        return this
                    }
                ;
                var te = /[^+\/0-9A-Za-z-_]/g
            }
        ).call(t, function() {
            return this
        }())
    }
    , function(e, t) {
        "use strict";
        function n(e) {
            var t = e.length;
            if (t % 4 > 0)
                throw new Error("Invalid string. Length must be a multiple of 4");
            var n = e.indexOf("=");
            n === -1 && (n = t);
            var r = n === t ? 0 : 4 - n % 4;
            return [n, r]
        }
        function r(e) {
            var t = n(e)
                , r = t[0]
                , a = t[1];
            return 3 * (r + a) / 4 - a
        }
        function a(e, t, n) {
            return 3 * (t + n) / 4 - n
        }
        function i(e) {
            var t, r, i = n(e), s = i[0], o = i[1], d = new l(a(e, s, o)), u = 0, c = o > 0 ? s - 4 : s;
            for (r = 0; r < c; r += 4)
                t = _[e.charCodeAt(r)] << 18 | _[e.charCodeAt(r + 1)] << 12 | _[e.charCodeAt(r + 2)] << 6 | _[e.charCodeAt(r + 3)],
                    d[u++] = t >> 16 & 255,
                    d[u++] = t >> 8 & 255,
                    d[u++] = 255 & t;
            return 2 === o && (t = _[e.charCodeAt(r)] << 2 | _[e.charCodeAt(r + 1)] >> 4,
                d[u++] = 255 & t),
            1 === o && (t = _[e.charCodeAt(r)] << 10 | _[e.charCodeAt(r + 1)] << 4 | _[e.charCodeAt(r + 2)] >> 2,
                d[u++] = t >> 8 & 255,
                d[u++] = 255 & t),
                d
        }
        function s(e) {
            return u[e >> 18 & 63] + u[e >> 12 & 63] + u[e >> 6 & 63] + u[63 & e]
        }
        function o(e, t, n) {
            for (var r, a = [], i = t; i < n; i += 3)
                r = (e[i] << 16 & 16711680) + (e[i + 1] << 8 & 65280) + (255 & e[i + 2]),
                    a.push(s(r));
            return a.join("")
        }
        function d(e) {
            for (var t, n = e.length, r = n % 3, a = [], i = 16383, s = 0, d = n - r; s < d; s += i)
                a.push(o(e, s, s + i > d ? d : s + i));
            return 1 === r ? (t = e[n - 1],
                a.push(u[t >> 2] + u[t << 4 & 63] + "==")) : 2 === r && (t = (e[n - 2] << 8) + e[n - 1],
                a.push(u[t >> 10] + u[t >> 4 & 63] + u[t << 2 & 63] + "=")),
                a.join("")
        }
        t.byteLength = r,
            t.toByteArray = i,
            t.fromByteArray = d;
        for (var u = [], _ = [], l = "undefined" != typeof Uint8Array ? Uint8Array : Array, c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", m = 0, h = c.length; m < h; ++m)
            u[m] = c[m],
                _[c.charCodeAt(m)] = m;
        _["-".charCodeAt(0)] = 62,
            _["_".charCodeAt(0)] = 63
    }
    , function(e, t) {
        t.read = function(e, t, n, r, a) {
            var i, s, o = 8 * a - r - 1, d = (1 << o) - 1, u = d >> 1, _ = -7, l = n ? a - 1 : 0, c = n ? -1 : 1, m = e[t + l];
            for (l += c,
                     i = m & (1 << -_) - 1,
                     m >>= -_,
                     _ += o; _ > 0; i = 256 * i + e[t + l],
                     l += c,
                     _ -= 8)
                ;
            for (s = i & (1 << -_) - 1,
                     i >>= -_,
                     _ += r; _ > 0; s = 256 * s + e[t + l],
                     l += c,
                     _ -= 8)
                ;
            if (0 === i)
                i = 1 - u;
            else {
                if (i === d)
                    return s ? NaN : (m ? -1 : 1) * (1 / 0);
                s += Math.pow(2, r),
                    i -= u
            }
            return (m ? -1 : 1) * s * Math.pow(2, i - r)
        }
            ,
            t.write = function(e, t, n, r, a, i) {
                var s, o, d, u = 8 * i - a - 1, _ = (1 << u) - 1, l = _ >> 1, c = 23 === a ? Math.pow(2, -24) - Math.pow(2, -77) : 0, m = r ? 0 : i - 1, h = r ? 1 : -1, f = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                for (t = Math.abs(t),
                         isNaN(t) || t === 1 / 0 ? (o = isNaN(t) ? 1 : 0,
                             s = _) : (s = Math.floor(Math.log(t) / Math.LN2),
                         t * (d = Math.pow(2, -s)) < 1 && (s--,
                             d *= 2),
                             t += s + l >= 1 ? c / d : c * Math.pow(2, 1 - l),
                         t * d >= 2 && (s++,
                             d /= 2),
                             s + l >= _ ? (o = 0,
                                 s = _) : s + l >= 1 ? (o = (t * d - 1) * Math.pow(2, a),
                                 s += l) : (o = t * Math.pow(2, l - 1) * Math.pow(2, a),
                                 s = 0)); a >= 8; e[n + m] = 255 & o,
                         m += h,
                         o /= 256,
                         a -= 8)
                    ;
                for (s = s << a | o,
                         u += a; u > 0; e[n + m] = 255 & s,
                         m += h,
                         s /= 256,
                         u -= 8)
                    ;
                e[n + m - h] |= 128 * f
            }
    }
    , function(e, t) {
        var n = {}.toString;
        e.exports = Array.isArray || function(e) {
            return "[object Array]" == n.call(e)
        }
    }
    , function(e, t, n) {
        (function(t, r) {
                !function() {
                    var a = ("undefined" == typeof window ? t : window) || {};
                    _crypto = a.crypto || a.msCrypto || n(140),
                        e.exports = function(e) {
                            if (_crypto.getRandomValues) {
                                var t = new r(e);
                                return _crypto.getRandomValues(t),
                                    t
                            }
                            if (_crypto.randomBytes)
                                return _crypto.randomBytes(e);
                            throw new Error("secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11")
                        }
                }()
            }
        ).call(t, function() {
            return this
        }(), n(135).Buffer)
    }
    , function(e, t) {}
    , function(e, t, n) {
        (function(t) {
                function r(e) {
                    return function() {
                        var n = []
                            , r = {
                            update: function(e, r) {
                                return t.isBuffer(e) || (e = new t(e,r)),
                                    n.push(e),
                                    this
                            },
                            digest: function(r) {
                                var a = t.concat(n)
                                    , i = e(a);
                                return n = null,
                                    r ? i.toString(r) : i
                            }
                        };
                        return r
                    }
                }
                var a = n(142)
                    , i = r(n(151))
                    , s = r(n(153));
                e.exports = function(e) {
                    return "md5" === e ? new i : "rmd160" === e ? new s : a(e)
                }
            }
        ).call(t, n(135).Buffer)
    }
    , function(e, t, n) {
        var t = e.exports = function(e) {
            var n = t[e];
            if (!n)
                throw new Error(e + " is not supported (we accept pull requests)");
            return new n
        }
            , r = n(135).Buffer
            , a = n(143)(r);
        t.sha1 = n(144)(r, a),
            t.sha256 = n(149)(r, a),
            t.sha512 = n(150)(r, a)
    }
    , function(e, t) {
        e.exports = function(e) {
            function t(t, n) {
                this._block = new e(t),
                    this._finalSize = n,
                    this._blockSize = t,
                    this._len = 0,
                    this._s = 0
            }
            return t.prototype.init = function() {
                this._s = 0,
                    this._len = 0
            }
                ,
                t.prototype.update = function(t, n) {
                    "string" == typeof t && (n = n || "utf8",
                        t = new e(t,n));
                    for (var r = this._len += t.length, a = this._s = this._s || 0, i = 0, s = this._block; a < r; ) {
                        for (var o = Math.min(t.length, i + this._blockSize - a % this._blockSize), d = o - i, u = 0; u < d; u++)
                            s[a % this._blockSize + u] = t[u + i];
                        a += d,
                            i += d,
                        a % this._blockSize === 0 && this._update(s)
                    }
                    return this._s = a,
                        this
                }
                ,
                t.prototype.digest = function(e) {
                    var t = 8 * this._len;
                    this._block[this._len % this._blockSize] = 128,
                        this._block.fill(0, this._len % this._blockSize + 1),
                    t % (8 * this._blockSize) >= 8 * this._finalSize && (this._update(this._block),
                        this._block.fill(0)),
                        this._block.writeInt32BE(t, this._blockSize - 4);
                    var n = this._update(this._block) || this._hash();
                    return e ? n.toString(e) : n
                }
                ,
                t.prototype._update = function() {
                    throw new Error("_update must be implemented by subclass")
                }
                ,
                t
        }
    }
    , function(e, t, n) {
        var r = n(145).inherits;
        e.exports = function(e, t) {
            function n() {
                return h.length ? h.pop().init() : this instanceof n ? (this._w = m,
                    t.call(this, 64, 56),
                    this._h = null,
                    void this.init()) : new n
            }
            function a(e, t, n, r) {
                return e < 20 ? t & n | ~t & r : e < 40 ? t ^ n ^ r : e < 60 ? t & n | t & r | n & r : t ^ n ^ r
            }
            function i(e) {
                return e < 20 ? 1518500249 : e < 40 ? 1859775393 : e < 60 ? -1894007588 : -899497514
            }
            function s(e, t) {
                return e + t | 0
            }
            function o(e, t) {
                return e << t | e >>> 32 - t
            }
            var d = 0
                , u = 4
                , _ = 8
                , l = 12
                , c = 16
                , m = new ("undefined" == typeof Int32Array ? Array : Int32Array)(80)
                , h = [];
            return r(n, t),
                n.prototype.init = function() {
                    return this._a = 1732584193,
                        this._b = 4023233417,
                        this._c = 2562383102,
                        this._d = 271733878,
                        this._e = 3285377520,
                        t.prototype.init.call(this),
                        this
                }
                ,
                n.prototype._POOL = h,
                n.prototype._update = function(e) {
                    var t, n, r, d, u, _, l, c, m, h;
                    t = _ = this._a,
                        n = l = this._b,
                        r = c = this._c,
                        d = m = this._d,
                        u = h = this._e;
                    for (var f = this._w, p = 0; p < 80; p++) {
                        var M = f[p] = p < 16 ? e.readInt32BE(4 * p) : o(f[p - 3] ^ f[p - 8] ^ f[p - 14] ^ f[p - 16], 1)
                            , y = s(s(o(t, 5), a(p, n, r, d)), s(s(u, M), i(p)));
                        u = d,
                            d = r,
                            r = o(n, 30),
                            n = t,
                            t = y
                    }
                    this._a = s(t, _),
                        this._b = s(n, l),
                        this._c = s(r, c),
                        this._d = s(d, m),
                        this._e = s(u, h)
                }
                ,
                n.prototype._hash = function() {
                    h.length < 100 && h.push(this);
                    var t = new e(20);
                    return t.writeInt32BE(0 | this._a, d),
                        t.writeInt32BE(0 | this._b, u),
                        t.writeInt32BE(0 | this._c, _),
                        t.writeInt32BE(0 | this._d, l),
                        t.writeInt32BE(0 | this._e, c),
                        t
                }
                ,
                n
        }
    }
    , function(e, t, n) {
        (function(e, r) {
                function a(e, n) {
                    var r = {
                        seen: [],
                        stylize: s
                    };
                    return arguments.length >= 3 && (r.depth = arguments[2]),
                    arguments.length >= 4 && (r.colors = arguments[3]),
                        f(n) ? r.showHidden = n : n && t._extend(r, n),
                    Y(r.showHidden) && (r.showHidden = !1),
                    Y(r.depth) && (r.depth = 2),
                    Y(r.colors) && (r.colors = !1),
                    Y(r.customInspect) && (r.customInspect = !0),
                    r.colors && (r.stylize = i),
                        d(r, e, r.depth);
                }
                function i(e, t) {
                    var n = a.styles[t];
                    return n ? "[" + a.colors[n][0] + "m" + e + "[" + a.colors[n][1] + "m" : e
                }
                function s(e, t) {
                    return e
                }
                function o(e) {
                    var t = {};
                    return e.forEach(function(e, n) {
                        t[e] = !0
                    }),
                        t
                }
                function d(e, n, r) {
                    if (e.customInspect && n && T(n.inspect) && n.inspect !== t.inspect && (!n.constructor || n.constructor.prototype !== n)) {
                        var a = n.inspect(r, e);
                        return L(a) || (a = d(e, a, r)),
                            a
                    }
                    var i = u(e, n);
                    if (i)
                        return i;
                    var s = Object.keys(n)
                        , f = o(s);
                    if (e.showHidden && (s = Object.getOwnPropertyNames(n)),
                    b(n) && (s.indexOf("message") >= 0 || s.indexOf("description") >= 0))
                        return _(n);
                    if (0 === s.length) {
                        if (T(n)) {
                            var p = n.name ? ": " + n.name : "";
                            return e.stylize("[Function" + p + "]", "special")
                        }
                        if (v(n))
                            return e.stylize(RegExp.prototype.toString.call(n), "regexp");
                        if (k(n))
                            return e.stylize(Date.prototype.toString.call(n), "date");
                        if (b(n))
                            return _(n)
                    }
                    var M = ""
                        , y = !1
                        , g = ["{", "}"];
                    if (h(n) && (y = !0,
                        g = ["[", "]"]),
                        T(n)) {
                        var Y = n.name ? ": " + n.name : "";
                        M = " [Function" + Y + "]"
                    }
                    if (v(n) && (M = " " + RegExp.prototype.toString.call(n)),
                    k(n) && (M = " " + Date.prototype.toUTCString.call(n)),
                    b(n) && (M = " " + _(n)),
                    0 === s.length && (!y || 0 == n.length))
                        return g[0] + M + g[1];
                    if (r < 0)
                        return v(n) ? e.stylize(RegExp.prototype.toString.call(n), "regexp") : e.stylize("[Object]", "special");
                    e.seen.push(n);
                    var w;
                    return w = y ? l(e, n, r, f, s) : s.map(function(t) {
                        return c(e, n, r, f, t, y)
                    }),
                        e.seen.pop(),
                        m(w, M, g)
                }
                function u(e, t) {
                    if (Y(t))
                        return e.stylize("undefined", "undefined");
                    if (L(t)) {
                        var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                        return e.stylize(n, "string")
                    }
                    return y(t) ? e.stylize("" + t, "number") : f(t) ? e.stylize("" + t, "boolean") : p(t) ? e.stylize("null", "null") : void 0
                }
                function _(e) {
                    return "[" + Error.prototype.toString.call(e) + "]"
                }
                function l(e, t, n, r, a) {
                    for (var i = [], s = 0, o = t.length; s < o; ++s)
                        H(t, String(s)) ? i.push(c(e, t, n, r, String(s), !0)) : i.push("");
                    return a.forEach(function(a) {
                        a.match(/^\d+$/) || i.push(c(e, t, n, r, a, !0))
                    }),
                        i
                }
                function c(e, t, n, r, a, i) {
                    var s, o, u;
                    if (u = Object.getOwnPropertyDescriptor(t, a) || {
                        value: t[a]
                    },
                        u.get ? o = u.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : u.set && (o = e.stylize("[Setter]", "special")),
                    H(r, a) || (s = "[" + a + "]"),
                    o || (e.seen.indexOf(u.value) < 0 ? (o = p(n) ? d(e, u.value, null) : d(e, u.value, n - 1),
                    o.indexOf("\n") > -1 && (o = i ? o.split("\n").map(function(e) {
                        return "  " + e
                    }).join("\n").substr(2) : "\n" + o.split("\n").map(function(e) {
                        return "   " + e
                    }).join("\n"))) : o = e.stylize("[Circular]", "special")),
                        Y(s)) {
                        if (i && a.match(/^\d+$/))
                            return o;
                        s = JSON.stringify("" + a),
                            s.match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (s = s.substr(1, s.length - 2),
                                s = e.stylize(s, "name")) : (s = s.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"),
                                s = e.stylize(s, "string"))
                    }
                    return s + ": " + o
                }
                function m(e, t, n) {
                    var r = 0
                        , a = e.reduce(function(e, t) {
                        return r++,
                        t.indexOf("\n") >= 0 && r++,
                        e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
                    }, 0);
                    return a > 60 ? n[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + n[1] : n[0] + t + " " + e.join(", ") + " " + n[1]
                }
                function h(e) {
                    return Array.isArray(e)
                }
                function f(e) {
                    return "boolean" == typeof e
                }
                function p(e) {
                    return null === e
                }
                function M(e) {
                    return null == e
                }
                function y(e) {
                    return "number" == typeof e
                }
                function L(e) {
                    return "string" == typeof e
                }
                function g(e) {
                    return "symbol" == typeof e
                }
                function Y(e) {
                    return void 0 === e
                }
                function v(e) {
                    return w(e) && "[object RegExp]" === S(e)
                }
                function w(e) {
                    return "object" == typeof e && null !== e
                }
                function k(e) {
                    return w(e) && "[object Date]" === S(e)
                }
                function b(e) {
                    return w(e) && ("[object Error]" === S(e) || e instanceof Error)
                }
                function T(e) {
                    return "function" == typeof e
                }
                function D(e) {
                    return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || "undefined" == typeof e
                }
                function S(e) {
                    return Object.prototype.toString.call(e)
                }
                function x(e) {
                    return e < 10 ? "0" + e.toString(10) : e.toString(10)
                }
                function E() {
                    var e = new Date
                        , t = [x(e.getHours()), x(e.getMinutes()), x(e.getSeconds())].join(":");
                    return [e.getDate(), P[e.getMonth()], t].join(" ")
                }
                function H(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }
                var j = /%[sdj%]/g;
                t.format = function(e) {
                    if (!L(e)) {
                        for (var t = [], n = 0; n < arguments.length; n++)
                            t.push(a(arguments[n]));
                        return t.join(" ")
                    }
                    for (var n = 1, r = arguments, i = r.length, s = String(e).replace(j, function(e) {
                        if ("%%" === e)
                            return "%";
                        if (n >= i)
                            return e;
                        switch (e) {
                            case "%s":
                                return String(r[n++]);
                            case "%d":
                                return Number(r[n++]);
                            case "%j":
                                try {
                                    return JSON.stringify(r[n++])
                                } catch (t) {
                                    return "[Circular]"
                                }
                            default:
                                return e
                        }
                    }), o = r[n]; n < i; o = r[++n])
                        s += p(o) || !w(o) ? " " + o : " " + a(o);
                    return s
                }
                    ,
                    t.deprecate = function(n, a) {
                        function i() {
                            if (!s) {
                                if (r.throwDeprecation)
                                    throw new Error(a);
                                r.traceDeprecation ? console.trace(a) : console.error(a),
                                    s = !0
                            }
                            return n.apply(this, arguments)
                        }
                        if (Y(e.process))
                            return function() {
                                return t.deprecate(n, a).apply(this, arguments)
                            }
                                ;
                        if (r.noDeprecation === !0)
                            return n;
                        var s = !1;
                        return i
                    }
                ;
                var O, A = {};
                t.debuglog = function(e) {
                    if (Y(O) && (O = r.env.NODE_DEBUG || ""),
                        e = e.toUpperCase(),
                        !A[e])
                        if (new RegExp("\\b" + e + "\\b","i").test(O)) {
                            var n = r.pid;
                            A[e] = function() {
                                var r = t.format.apply(t, arguments);
                                console.error("%s %d: %s", e, n, r)
                            }
                        } else
                            A[e] = function() {}
                            ;
                    return A[e]
                }
                    ,
                    t.inspect = a,
                    a.colors = {
                        bold: [1, 22],
                        italic: [3, 23],
                        underline: [4, 24],
                        inverse: [7, 27],
                        white: [37, 39],
                        grey: [90, 39],
                        black: [30, 39],
                        blue: [34, 39],
                        cyan: [36, 39],
                        green: [32, 39],
                        magenta: [35, 39],
                        red: [31, 39],
                        yellow: [33, 39]
                    },
                    a.styles = {
                        special: "cyan",
                        number: "yellow",
                        boolean: "yellow",
                        undefined: "grey",
                        null: "bold",
                        string: "green",
                        date: "magenta",
                        regexp: "red"
                    },
                    t.isArray = h,
                    t.isBoolean = f,
                    t.isNull = p,
                    t.isNullOrUndefined = M,
                    t.isNumber = y,
                    t.isString = L,
                    t.isSymbol = g,
                    t.isUndefined = Y,
                    t.isRegExp = v,
                    t.isObject = w,
                    t.isDate = k,
                    t.isError = b,
                    t.isFunction = T,
                    t.isPrimitive = D,
                    t.isBuffer = n(147);
                var P = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
                t.log = function() {
                    console.log("%s - %s", E(), t.format.apply(t, arguments))
                }
                    ,
                    t.inherits = n(148),
                    t._extend = function(e, t) {
                        if (!t || !w(t))
                            return e;
                        for (var n = Object.keys(t), r = n.length; r--; )
                            e[n[r]] = t[n[r]];
                        return e
                    }
            }
        ).call(t, function() {
            return this
        }(), n(146))
    }
    , function(e, t) {
        function n() {
            throw new Error("setTimeout has not been defined")
        }
        function r() {
            throw new Error("clearTimeout has not been defined")
        }
        function a(e) {
            if (_ === setTimeout)
                return setTimeout(e, 0);
            if ((_ === n || !_) && setTimeout)
                return _ = setTimeout,
                    setTimeout(e, 0);
            try {
                return _(e, 0)
            } catch (t) {
                try {
                    return _.call(null, e, 0)
                } catch (t) {
                    return _.call(this, e, 0)
                }
            }
        }
        function i(e) {
            if (l === clearTimeout)
                return clearTimeout(e);
            if ((l === r || !l) && clearTimeout)
                return l = clearTimeout,
                    clearTimeout(e);
            try {
                return l(e)
            } catch (t) {
                try {
                    return l.call(null, e)
                } catch (t) {
                    return l.call(this, e)
                }
            }
        }
        function s() {
            f && m && (f = !1,
                m.length ? h = m.concat(h) : p = -1,
            h.length && o())
        }
        function o() {
            if (!f) {
                var e = a(s);
                f = !0;
                for (var t = h.length; t; ) {
                    for (m = h,
                             h = []; ++p < t; )
                        m && m[p].run();
                    p = -1,
                        t = h.length
                }
                m = null,
                    f = !1,
                    i(e)
            }
        }
        function d(e, t) {
            this.fun = e,
                this.array = t
        }
        function u() {}
        var _, l, c = e.exports = {};
        !function() {
            try {
                _ = "function" == typeof setTimeout ? setTimeout : n
            } catch (e) {
                _ = n
            }
            try {
                l = "function" == typeof clearTimeout ? clearTimeout : r
            } catch (e) {
                l = r
            }
        }();
        var m, h = [], f = !1, p = -1;
        c.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++)
                    t[n - 1] = arguments[n];
            h.push(new d(e,t)),
            1 !== h.length || f || a(o)
        }
            ,
            d.prototype.run = function() {
                this.fun.apply(null, this.array)
            }
            ,
            c.title = "browser",
            c.browser = !0,
            c.env = {},
            c.argv = [],
            c.version = "",
            c.versions = {},
            c.on = u,
            c.addListener = u,
            c.once = u,
            c.off = u,
            c.removeListener = u,
            c.removeAllListeners = u,
            c.emit = u,
            c.prependListener = u,
            c.prependOnceListener = u,
            c.listeners = function(e) {
                return []
            }
            ,
            c.binding = function(e) {
                throw new Error("process.binding is not supported")
            }
            ,
            c.cwd = function() {
                return "/"
            }
            ,
            c.chdir = function(e) {
                throw new Error("process.chdir is not supported")
            }
            ,
            c.umask = function() {
                return 0
            }
    }
    , function(e, t) {
        e.exports = function(e) {
            return e && "object" == typeof e && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8
        }
    }
    , function(e, t) {
        "function" == typeof Object.create ? e.exports = function(e, t) {
                e.super_ = t,
                    e.prototype = Object.create(t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    })
            }
            : e.exports = function(e, t) {
                e.super_ = t;
                var n = function() {};
                n.prototype = t.prototype,
                    e.prototype = new n,
                    e.prototype.constructor = e
            }
    }
    , function(e, t, n) {
        var r = n(145).inherits;
        e.exports = function(e, t) {
            function n() {
                this.init(),
                    this._w = m,
                    t.call(this, 64, 56)
            }
            function a(e, t) {
                return e >>> t | e << 32 - t
            }
            function i(e, t) {
                return e >>> t
            }
            function s(e, t, n) {
                return e & t ^ ~e & n
            }
            function o(e, t, n) {
                return e & t ^ e & n ^ t & n
            }
            function d(e) {
                return a(e, 2) ^ a(e, 13) ^ a(e, 22)
            }
            function u(e) {
                return a(e, 6) ^ a(e, 11) ^ a(e, 25)
            }
            function _(e) {
                return a(e, 7) ^ a(e, 18) ^ i(e, 3)
            }
            function l(e) {
                return a(e, 17) ^ a(e, 19) ^ i(e, 10)
            }
            var c = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]
                , m = new Array(64);
            return r(n, t),
                n.prototype.init = function() {
                    return this._a = 1779033703,
                        this._b = -1150833019,
                        this._c = 1013904242,
                        this._d = -1521486534,
                        this._e = 1359893119,
                        this._f = -1694144372,
                        this._g = 528734635,
                        this._h = 1541459225,
                        this._len = this._s = 0,
                        this
                }
                ,
                n.prototype._update = function(e) {
                    var t, n, r, a, i, m, h, f, p, M, y = this._w;
                    t = 0 | this._a,
                        n = 0 | this._b,
                        r = 0 | this._c,
                        a = 0 | this._d,
                        i = 0 | this._e,
                        m = 0 | this._f,
                        h = 0 | this._g,
                        f = 0 | this._h;
                    for (var L = 0; L < 64; L++) {
                        var g = y[L] = L < 16 ? e.readInt32BE(4 * L) : l(y[L - 2]) + y[L - 7] + _(y[L - 15]) + y[L - 16];
                        p = f + u(i) + s(i, m, h) + c[L] + g,
                            M = d(t) + o(t, n, r),
                            f = h,
                            h = m,
                            m = i,
                            i = a + p,
                            a = r,
                            r = n,
                            n = t,
                            t = p + M
                    }
                    this._a = t + this._a | 0,
                        this._b = n + this._b | 0,
                        this._c = r + this._c | 0,
                        this._d = a + this._d | 0,
                        this._e = i + this._e | 0,
                        this._f = m + this._f | 0,
                        this._g = h + this._g | 0,
                        this._h = f + this._h | 0
                }
                ,
                n.prototype._hash = function() {
                    var t = new e(32);
                    return t.writeInt32BE(this._a, 0),
                        t.writeInt32BE(this._b, 4),
                        t.writeInt32BE(this._c, 8),
                        t.writeInt32BE(this._d, 12),
                        t.writeInt32BE(this._e, 16),
                        t.writeInt32BE(this._f, 20),
                        t.writeInt32BE(this._g, 24),
                        t.writeInt32BE(this._h, 28),
                        t
                }
                ,
                n
        }
    }
    , function(e, t, n) {
        var r = n(145).inherits;
        e.exports = function(e, t) {
            function n() {
                this.init(),
                    this._w = d,
                    t.call(this, 128, 112)
            }
            function a(e, t, n) {
                return e >>> n | t << 32 - n
            }
            function i(e, t, n) {
                return e & t ^ ~e & n
            }
            function s(e, t, n) {
                return e & t ^ e & n ^ t & n
            }
            var o = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]
                , d = new Array(160);
            return r(n, t),
                n.prototype.init = function() {
                    return this._a = 1779033703,
                        this._b = -1150833019,
                        this._c = 1013904242,
                        this._d = -1521486534,
                        this._e = 1359893119,
                        this._f = -1694144372,
                        this._g = 528734635,
                        this._h = 1541459225,
                        this._al = -205731576,
                        this._bl = -2067093701,
                        this._cl = -23791573,
                        this._dl = 1595750129,
                        this._el = -1377402159,
                        this._fl = 725511199,
                        this._gl = -79577749,
                        this._hl = 327033209,
                        this._len = this._s = 0,
                        this
                }
                ,
                n.prototype._update = function(e) {
                    var t, n, r, d, u, _, l, c, m, h, f, p, M, y, L, g, Y = this._w;
                    t = 0 | this._a,
                        n = 0 | this._b,
                        r = 0 | this._c,
                        d = 0 | this._d,
                        u = 0 | this._e,
                        _ = 0 | this._f,
                        l = 0 | this._g,
                        c = 0 | this._h,
                        m = 0 | this._al,
                        h = 0 | this._bl,
                        f = 0 | this._cl,
                        p = 0 | this._dl,
                        M = 0 | this._el,
                        y = 0 | this._fl,
                        L = 0 | this._gl,
                        g = 0 | this._hl;
                    for (var v = 0; v < 80; v++) {
                        var w, k, b = 2 * v;
                        if (v < 16)
                            w = Y[b] = e.readInt32BE(4 * b),
                                k = Y[b + 1] = e.readInt32BE(4 * b + 4);
                        else {
                            var T = Y[b - 30]
                                , D = Y[b - 30 + 1]
                                , S = a(T, D, 1) ^ a(T, D, 8) ^ T >>> 7
                                , x = a(D, T, 1) ^ a(D, T, 8) ^ a(D, T, 7);
                            T = Y[b - 4],
                                D = Y[b - 4 + 1];
                            var E = a(T, D, 19) ^ a(D, T, 29) ^ T >>> 6
                                , H = a(D, T, 19) ^ a(T, D, 29) ^ a(D, T, 6)
                                , j = Y[b - 14]
                                , O = Y[b - 14 + 1]
                                , A = Y[b - 32]
                                , P = Y[b - 32 + 1];
                            k = x + O,
                                w = S + j + (k >>> 0 < x >>> 0 ? 1 : 0),
                                k += H,
                                w = w + E + (k >>> 0 < H >>> 0 ? 1 : 0),
                                k += P,
                                w = w + A + (k >>> 0 < P >>> 0 ? 1 : 0),
                                Y[b] = w,
                                Y[b + 1] = k
                        }
                        var I = s(t, n, r)
                            , W = s(m, h, f)
                            , R = a(t, m, 28) ^ a(m, t, 2) ^ a(m, t, 7)
                            , N = a(m, t, 28) ^ a(t, m, 2) ^ a(t, m, 7)
                            , F = a(u, M, 14) ^ a(u, M, 18) ^ a(M, u, 9)
                            , C = a(M, u, 14) ^ a(M, u, 18) ^ a(u, M, 9)
                            , z = o[b]
                            , B = o[b + 1]
                            , U = i(u, _, l)
                            , J = i(M, y, L)
                            , V = g + C
                            , G = c + F + (V >>> 0 < g >>> 0 ? 1 : 0);
                        V += J,
                            G = G + U + (V >>> 0 < J >>> 0 ? 1 : 0),
                            V += B,
                            G = G + z + (V >>> 0 < B >>> 0 ? 1 : 0),
                            V += k,
                            G = G + w + (V >>> 0 < k >>> 0 ? 1 : 0);
                        var q = N + W
                            , X = R + I + (q >>> 0 < N >>> 0 ? 1 : 0);
                        c = l,
                            g = L,
                            l = _,
                            L = y,
                            _ = u,
                            y = M,
                            M = p + V | 0,
                            u = d + G + (M >>> 0 < p >>> 0 ? 1 : 0) | 0,
                            d = r,
                            p = f,
                            r = n,
                            f = h,
                            n = t,
                            h = m,
                            m = V + q | 0,
                            t = G + X + (m >>> 0 < V >>> 0 ? 1 : 0) | 0
                    }
                    this._al = this._al + m | 0,
                        this._bl = this._bl + h | 0,
                        this._cl = this._cl + f | 0,
                        this._dl = this._dl + p | 0,
                        this._el = this._el + M | 0,
                        this._fl = this._fl + y | 0,
                        this._gl = this._gl + L | 0,
                        this._hl = this._hl + g | 0,
                        this._a = this._a + t + (this._al >>> 0 < m >>> 0 ? 1 : 0) | 0,
                        this._b = this._b + n + (this._bl >>> 0 < h >>> 0 ? 1 : 0) | 0,
                        this._c = this._c + r + (this._cl >>> 0 < f >>> 0 ? 1 : 0) | 0,
                        this._d = this._d + d + (this._dl >>> 0 < p >>> 0 ? 1 : 0) | 0,
                        this._e = this._e + u + (this._el >>> 0 < M >>> 0 ? 1 : 0) | 0,
                        this._f = this._f + _ + (this._fl >>> 0 < y >>> 0 ? 1 : 0) | 0,
                        this._g = this._g + l + (this._gl >>> 0 < L >>> 0 ? 1 : 0) | 0,
                        this._h = this._h + c + (this._hl >>> 0 < g >>> 0 ? 1 : 0) | 0
                }
                ,
                n.prototype._hash = function() {
                    function t(e, t, r) {
                        n.writeInt32BE(e, r),
                            n.writeInt32BE(t, r + 4)
                    }
                    var n = new e(64);
                    return t(this._a, this._al, 0),
                        t(this._b, this._bl, 8),
                        t(this._c, this._cl, 16),
                        t(this._d, this._dl, 24),
                        t(this._e, this._el, 32),
                        t(this._f, this._fl, 40),
                        t(this._g, this._gl, 48),
                        t(this._h, this._hl, 56),
                        n
                }
                ,
                n
        }
    }
    , function(e, t, n) {
        function r(e, t) {
            e[t >> 5] |= 128 << t % 32,
                e[(t + 64 >>> 9 << 4) + 14] = t;
            for (var n = 1732584193, r = -271733879, a = -1732584194, _ = 271733878, l = 0; l < e.length; l += 16) {
                var c = n
                    , m = r
                    , h = a
                    , f = _;
                n = i(n, r, a, _, e[l + 0], 7, -680876936),
                    _ = i(_, n, r, a, e[l + 1], 12, -389564586),
                    a = i(a, _, n, r, e[l + 2], 17, 606105819),
                    r = i(r, a, _, n, e[l + 3], 22, -1044525330),
                    n = i(n, r, a, _, e[l + 4], 7, -176418897),
                    _ = i(_, n, r, a, e[l + 5], 12, 1200080426),
                    a = i(a, _, n, r, e[l + 6], 17, -1473231341),
                    r = i(r, a, _, n, e[l + 7], 22, -45705983),
                    n = i(n, r, a, _, e[l + 8], 7, 1770035416),
                    _ = i(_, n, r, a, e[l + 9], 12, -1958414417),
                    a = i(a, _, n, r, e[l + 10], 17, -42063),
                    r = i(r, a, _, n, e[l + 11], 22, -1990404162),
                    n = i(n, r, a, _, e[l + 12], 7, 1804603682),
                    _ = i(_, n, r, a, e[l + 13], 12, -40341101),
                    a = i(a, _, n, r, e[l + 14], 17, -1502002290),
                    r = i(r, a, _, n, e[l + 15], 22, 1236535329),
                    n = s(n, r, a, _, e[l + 1], 5, -165796510),
                    _ = s(_, n, r, a, e[l + 6], 9, -1069501632),
                    a = s(a, _, n, r, e[l + 11], 14, 643717713),
                    r = s(r, a, _, n, e[l + 0], 20, -373897302),
                    n = s(n, r, a, _, e[l + 5], 5, -701558691),
                    _ = s(_, n, r, a, e[l + 10], 9, 38016083),
                    a = s(a, _, n, r, e[l + 15], 14, -660478335),
                    r = s(r, a, _, n, e[l + 4], 20, -405537848),
                    n = s(n, r, a, _, e[l + 9], 5, 568446438),
                    _ = s(_, n, r, a, e[l + 14], 9, -1019803690),
                    a = s(a, _, n, r, e[l + 3], 14, -187363961),
                    r = s(r, a, _, n, e[l + 8], 20, 1163531501),
                    n = s(n, r, a, _, e[l + 13], 5, -1444681467),
                    _ = s(_, n, r, a, e[l + 2], 9, -51403784),
                    a = s(a, _, n, r, e[l + 7], 14, 1735328473),
                    r = s(r, a, _, n, e[l + 12], 20, -1926607734),
                    n = o(n, r, a, _, e[l + 5], 4, -378558),
                    _ = o(_, n, r, a, e[l + 8], 11, -2022574463),
                    a = o(a, _, n, r, e[l + 11], 16, 1839030562),
                    r = o(r, a, _, n, e[l + 14], 23, -35309556),
                    n = o(n, r, a, _, e[l + 1], 4, -1530992060),
                    _ = o(_, n, r, a, e[l + 4], 11, 1272893353),
                    a = o(a, _, n, r, e[l + 7], 16, -155497632),
                    r = o(r, a, _, n, e[l + 10], 23, -1094730640),
                    n = o(n, r, a, _, e[l + 13], 4, 681279174),
                    _ = o(_, n, r, a, e[l + 0], 11, -358537222),
                    a = o(a, _, n, r, e[l + 3], 16, -722521979),
                    r = o(r, a, _, n, e[l + 6], 23, 76029189),
                    n = o(n, r, a, _, e[l + 9], 4, -640364487),
                    _ = o(_, n, r, a, e[l + 12], 11, -421815835),
                    a = o(a, _, n, r, e[l + 15], 16, 530742520),
                    r = o(r, a, _, n, e[l + 2], 23, -995338651),
                    n = d(n, r, a, _, e[l + 0], 6, -198630844),
                    _ = d(_, n, r, a, e[l + 7], 10, 1126891415),
                    a = d(a, _, n, r, e[l + 14], 15, -1416354905),
                    r = d(r, a, _, n, e[l + 5], 21, -57434055),
                    n = d(n, r, a, _, e[l + 12], 6, 1700485571),
                    _ = d(_, n, r, a, e[l + 3], 10, -1894986606),
                    a = d(a, _, n, r, e[l + 10], 15, -1051523),
                    r = d(r, a, _, n, e[l + 1], 21, -2054922799),
                    n = d(n, r, a, _, e[l + 8], 6, 1873313359),
                    _ = d(_, n, r, a, e[l + 15], 10, -30611744),
                    a = d(a, _, n, r, e[l + 6], 15, -1560198380),
                    r = d(r, a, _, n, e[l + 13], 21, 1309151649),
                    n = d(n, r, a, _, e[l + 4], 6, -145523070),
                    _ = d(_, n, r, a, e[l + 11], 10, -1120210379),
                    a = d(a, _, n, r, e[l + 2], 15, 718787259),
                    r = d(r, a, _, n, e[l + 9], 21, -343485551),
                    n = u(n, c),
                    r = u(r, m),
                    a = u(a, h),
                    _ = u(_, f)
            }
            return Array(n, r, a, _)
        }
        function a(e, t, n, r, a, i) {
            return u(_(u(u(t, e), u(r, i)), a), n)
        }
        function i(e, t, n, r, i, s, o) {
            return a(t & n | ~t & r, e, t, i, s, o)
        }
        function s(e, t, n, r, i, s, o) {
            return a(t & r | n & ~r, e, t, i, s, o)
        }
        function o(e, t, n, r, i, s, o) {
            return a(t ^ n ^ r, e, t, i, s, o)
        }
        function d(e, t, n, r, i, s, o) {
            return a(n ^ (t | ~r), e, t, i, s, o)
        }
        function u(e, t) {
            var n = (65535 & e) + (65535 & t)
                , r = (e >> 16) + (t >> 16) + (n >> 16);
            return r << 16 | 65535 & n
        }
        function _(e, t) {
            return e << t | e >>> 32 - t
        }
        var l = n(152);
        e.exports = function(e) {
            return l.hash(e, r, 16)
        }
    }
    , function(e, t, n) {
        (function(t) {
                function n(e, n) {
                    if (e.length % i !== 0) {
                        var r = e.length + (i - e.length % i);
                        e = t.concat([e, s], r)
                    }
                    for (var a = [], o = n ? e.readInt32BE : e.readInt32LE, d = 0; d < e.length; d += i)
                        a.push(o.call(e, d));
                    return a
                }
                function r(e, n, r) {
                    for (var a = new t(n), i = r ? a.writeInt32BE : a.writeInt32LE, s = 0; s < e.length; s++)
                        i.call(a, e[s], 4 * s, !0);
                    return a
                }
                function a(e, a, i, s) {
                    t.isBuffer(e) || (e = new t(e));
                    var d = a(n(e, s), e.length * o);
                    return r(d, i, s)
                }
                var i = 4
                    , s = new t(i);
                s.fill(0);
                var o = 8;
                e.exports = {
                    hash: a
                }
            }
        ).call(t, n(135).Buffer)
    }
    , function(e, t, n) {
        (function(t) {
                function n(e, t, n) {
                    return e ^ t ^ n
                }
                function r(e, t, n) {
                    return e & t | ~e & n
                }
                function a(e, t, n) {
                    return (e | ~t) ^ n
                }
                function i(e, t, n) {
                    return e & n | t & ~n
                }
                function s(e, t, n) {
                    return e ^ (t | ~n)
                }
                function o(e, t) {
                    return e << t | e >>> 32 - t
                }
                function d(e) {
                    var n = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
                    "string" == typeof e && (e = new t(e,"utf8"));
                    var r = f(e)
                        , a = 8 * e.length
                        , i = 8 * e.length;
                    r[a >>> 5] |= 128 << 24 - a % 32,
                        r[(a + 64 >>> 9 << 4) + 14] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8);
                    for (var s = 0; s < r.length; s += 16)
                        M(n, r, s);
                    for (var s = 0; s < 5; s++) {
                        var o = n[s];
                        n[s] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8)
                    }
                    var d = p(n);
                    return new t(d)
                }
                e.exports = d;
                var u = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13]
                    , _ = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11]
                    , l = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6]
                    , c = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11]
                    , m = [0, 1518500249, 1859775393, 2400959708, 2840853838]
                    , h = [1352829926, 1548603684, 1836072691, 2053994217, 0]
                    , f = function(e) {
                    for (var t = [], n = 0, r = 0; n < e.length; n++,
                        r += 8)
                        t[r >>> 5] |= e[n] << 24 - r % 32;
                    return t
                }
                    , p = function(e) {
                    for (var t = [], n = 0; n < 32 * e.length; n += 8)
                        t.push(e[n >>> 5] >>> 24 - n % 32 & 255);
                    return t
                }
                    , M = function(e, t, d) {
                    for (var f = 0; f < 16; f++) {
                        var p = d + f
                            , M = t[p];
                        t[p] = 16711935 & (M << 8 | M >>> 24) | 4278255360 & (M << 24 | M >>> 8)
                    }
                    var y, L, g, Y, v, w, k, b, T, D;
                    w = y = e[0],
                        k = L = e[1],
                        b = g = e[2],
                        T = Y = e[3],
                        D = v = e[4];
                    for (var S, f = 0; f < 80; f += 1)
                        S = y + t[d + u[f]] | 0,
                            S += f < 16 ? n(L, g, Y) + m[0] : f < 32 ? r(L, g, Y) + m[1] : f < 48 ? a(L, g, Y) + m[2] : f < 64 ? i(L, g, Y) + m[3] : s(L, g, Y) + m[4],
                            S |= 0,
                            S = o(S, l[f]),
                            S = S + v | 0,
                            y = v,
                            v = Y,
                            Y = o(g, 10),
                            g = L,
                            L = S,
                            S = w + t[d + _[f]] | 0,
                            S += f < 16 ? s(k, b, T) + h[0] : f < 32 ? i(k, b, T) + h[1] : f < 48 ? a(k, b, T) + h[2] : f < 64 ? r(k, b, T) + h[3] : n(k, b, T) + h[4],
                            S |= 0,
                            S = o(S, c[f]),
                            S = S + D | 0,
                            w = D,
                            D = T,
                            T = o(b, 10),
                            b = k,
                            k = S;
                    S = e[1] + g + T | 0,
                        e[1] = e[2] + Y + D | 0,
                        e[2] = e[3] + v + w | 0,
                        e[3] = e[4] + y + k | 0,
                        e[4] = e[0] + L + b | 0,
                        e[0] = S
                }
            }
        ).call(t, n(135).Buffer)
    }
    , function(e, t, n) {
        (function(t) {
                function r(e, n) {
                    if (!(this instanceof r))
                        return new r(e,n);
                    this._opad = d,
                        this._alg = e;
                    var s = "sha512" === e ? 128 : 64;
                    n = this._key = t.isBuffer(n) ? n : new t(n),
                        n.length > s ? n = a(e).update(n).digest() : n.length < s && (n = t.concat([n, i], s));
                    for (var o = this._ipad = new t(s), d = this._opad = new t(s), u = 0; u < s; u++)
                        o[u] = 54 ^ n[u],
                            d[u] = 92 ^ n[u];
                    this._hash = a(e).update(o)
                }
                var a = n(141)
                    , i = new t(128);
                i.fill(0),
                    e.exports = r,
                    r.prototype.update = function(e, t) {
                        return this._hash.update(e, t),
                            this
                    }
                    ,
                    r.prototype.digest = function(e) {
                        var t = this._hash.digest();
                        return a(this._alg).update(this._opad).update(t).digest(e)
                    }
            }
        ).call(t, n(135).Buffer)
    }
    , function(e, t, n) {
        var r = n(156);
        e.exports = function(e, t) {
            t = t || {};
            var n = r(e);
            return t.pbkdf2 = n.pbkdf2,
                t.pbkdf2Sync = n.pbkdf2Sync,
                t
        }
    }
    , function(e, t, n) {
        (function(t) {
                e.exports = function(e) {
                    function n(e, t, n, a, i, s) {
                        if ("function" == typeof i && (s = i,
                            i = void 0),
                        "function" != typeof s)
                            throw new Error("No callback provided to pbkdf2");
                        setTimeout(function() {
                            var o;
                            try {
                                o = r(e, t, n, a, i)
                            } catch (d) {
                                return s(d)
                            }
                            s(void 0, o)
                        })
                    }
                    function r(n, r, a, i, s) {
                        if ("number" != typeof a)
                            throw new TypeError("Iterations not a number");
                        if (a < 0)
                            throw new TypeError("Bad iterations");
                        if ("number" != typeof i)
                            throw new TypeError("Key length not a number");
                        if (i < 0)
                            throw new TypeError("Bad key length");
                        s = s || "sha1",
                        t.isBuffer(n) || (n = new t(n)),
                        t.isBuffer(r) || (r = new t(r));
                        var o, d, u, _ = 1, l = new t(i), c = new t(r.length + 4);
                        r.copy(c, 0, 0, r.length);
                        for (var m = 1; m <= _; m++) {
                            c.writeUInt32BE(m, r.length);
                            var h = e.createHmac(s, n).update(c).digest();
                            if (!o && (o = h.length,
                                u = new t(o),
                                _ = Math.ceil(i / o),
                                d = i - (_ - 1) * o,
                            i > (Math.pow(2, 32) - 1) * o))
                                throw new TypeError("keylen exceeds maximum length");
                            h.copy(u, 0, 0, o);
                            for (var f = 1; f < a; f++) {
                                h = e.createHmac(s, n).update(h).digest();
                                for (var p = 0; p < o; p++)
                                    u[p] ^= h[p]
                            }
                            var M = (m - 1) * o
                                , y = m == _ ? d : o;
                            u.copy(l, M, 0, y)
                        }
                        return l
                    }
                    return {
                        pbkdf2: n,
                        pbkdf2Sync: r
                    }
                }
            }
        ).call(t, n(135).Buffer)
    }
    , function(e, t, n) {
        e.exports = function(e, t) {
            function r() {
                return Object.keys(s)
            }
            t = t || {};
            var a = n(158)(e);
            t.createCipher = a.createCipher,
                t.createCipheriv = a.createCipheriv;
            var i = n(194)(e);
            t.createDecipher = i.createDecipher,
                t.createDecipheriv = i.createDecipheriv;
            var s = n(185);
            t.listCiphers = r
        }
    }
    , function(e, t, n) {
        (function(t) {
                function r(e, n, o) {
                    return this instanceof r ? (s.call(this),
                        this._cache = new a,
                        this._cipher = new i.AES(n),
                        this._prev = new t(o.length),
                        o.copy(this._prev),
                        void (this._mode = e)) : new r(e,n,o)
                }
                function a() {
                    return this instanceof a ? void (this.cache = new t("")) : new a
                }
                var i = n(159)
                    , s = n(160)
                    , o = n(148)
                    , d = n(185)
                    , u = n(186)
                    , _ = n(187);
                o(r, s),
                    r.prototype._transform = function(e, t, n) {
                        this._cache.add(e);
                        for (var r, a; r = this._cache.get(); )
                            a = this._mode.encrypt(this, r),
                                this.push(a);
                        n()
                    }
                    ,
                    r.prototype._flush = function(e) {
                        var t = this._cache.flush();
                        this.push(this._mode.encrypt(this, t)),
                            this._cipher.scrub(),
                            e()
                    }
                    ,
                    a.prototype.add = function(e) {
                        this.cache = t.concat([this.cache, e])
                    }
                    ,
                    a.prototype.get = function() {
                        if (this.cache.length > 15) {
                            var e = this.cache.slice(0, 16);
                            return this.cache = this.cache.slice(16),
                                e
                        }
                        return null
                    }
                    ,
                    a.prototype.flush = function() {
                        for (var e = 16 - this.cache.length, n = new t(e), r = -1; ++r < e; )
                            n.writeUInt8(e, r);
                        var a = t.concat([this.cache, n]);
                        return a
                    }
                ;
                var l = {
                    ECB: n(188),
                    CBC: n(189),
                    CFB: n(191),
                    OFB: n(192),
                    CTR: n(193)
                };
                e.exports = function(e) {
                    function n(e, n, a) {
                        var i = d[e];
                        if (!i)
                            throw new TypeError("invalid suite type");
                        if ("string" == typeof a && (a = new t(a)),
                        "string" == typeof n && (n = new t(n)),
                        n.length !== i.key / 8)
                            throw new TypeError("invalid key length " + n.length);
                        if (a.length !== i.iv)
                            throw new TypeError("invalid iv length " + a.length);
                        return "stream" === i.type ? new _(l[i.mode],n,a) : new r(l[i.mode],n,a)
                    }
                    function a(t, r) {
                        var a = d[t];
                        if (!a)
                            throw new TypeError("invalid suite type");
                        var i = u(e, r, a.key, a.iv);
                        return n(t, i.key, i.iv)
                    }
                    return {
                        createCipher: a,
                        createCipheriv: n
                    }
                }
            }
        ).call(t, n(135).Buffer)
    }
    , function(e, t, n) {
        (function(e) {
                function n(e) {
                    var t, n;
                    return t = e > o || e < 0 ? (n = Math.abs(e) % o,
                        e < 0 ? o - n : n) : e
                }
                function r(e) {
                    var t, n, r;
                    for (t = n = 0,
                             r = e.length; 0 <= r ? n < r : n > r; t = 0 <= r ? ++n : --n)
                        e[t] = 0;
                    return !1
                }
                function a() {
                    var e;
                    this.SBOX = [],
                        this.INV_SBOX = [],
                        this.SUB_MIX = function() {
                            var t, n;
                            for (n = [],
                                     e = t = 0; t < 4; e = ++t)
                                n.push([]);
                            return n
                        }(),
                        this.INV_SUB_MIX = function() {
                            var t, n;
                            for (n = [],
                                     e = t = 0; t < 4; e = ++t)
                                n.push([]);
                            return n
                        }(),
                        this.init(),
                        this.RCON = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54]
                }
                function i(e) {
                    for (var t = e.length / 4, n = new Array(t), r = -1; ++r < t; )
                        n[r] = e.readUInt32BE(4 * r);
                    return n
                }
                function s(e) {
                    this._key = i(e),
                        this._doReset()
                }
                var o = Math.pow(2, 32);
                a.prototype.init = function() {
                    var e, t, n, r, a, i, s, o, d, u;
                    for (e = function() {
                        var e, n;
                        for (n = [],
                                 t = e = 0; e < 256; t = ++e)
                            t < 128 ? n.push(t << 1) : n.push(t << 1 ^ 283);
                        return n
                    }(),
                             a = 0,
                             d = 0,
                             t = u = 0; u < 256; t = ++u)
                        n = d ^ d << 1 ^ d << 2 ^ d << 3 ^ d << 4,
                            n = n >>> 8 ^ 255 & n ^ 99,
                            this.SBOX[a] = n,
                            this.INV_SBOX[n] = a,
                            i = e[a],
                            s = e[i],
                            o = e[s],
                            r = 257 * e[n] ^ 16843008 * n,
                            this.SUB_MIX[0][a] = r << 24 | r >>> 8,
                            this.SUB_MIX[1][a] = r << 16 | r >>> 16,
                            this.SUB_MIX[2][a] = r << 8 | r >>> 24,
                            this.SUB_MIX[3][a] = r,
                            r = 16843009 * o ^ 65537 * s ^ 257 * i ^ 16843008 * a,
                            this.INV_SUB_MIX[0][n] = r << 24 | r >>> 8,
                            this.INV_SUB_MIX[1][n] = r << 16 | r >>> 16,
                            this.INV_SUB_MIX[2][n] = r << 8 | r >>> 24,
                            this.INV_SUB_MIX[3][n] = r,
                            0 === a ? a = d = 1 : (a = i ^ e[e[e[o ^ i]]],
                                d ^= e[e[d]]);
                    return !0
                }
                ;
                var d = new a;
                s.blockSize = 16,
                    s.prototype.blockSize = s.blockSize,
                    s.keySize = 32,
                    s.prototype.keySize = s.keySize,
                    s.ivSize = s.blockSize,
                    s.prototype.ivSize = s.ivSize,
                    s.prototype._doReset = function() {
                        var e, t, n, r, a, i, s, o;
                        for (n = this._key,
                                 t = n.length,
                                 this._nRounds = t + 6,
                                 a = 4 * (this._nRounds + 1),
                                 this._keySchedule = [],
                                 r = s = 0; 0 <= a ? s < a : s > a; r = 0 <= a ? ++s : --s)
                            this._keySchedule[r] = r < t ? n[r] : (i = this._keySchedule[r - 1],
                                r % t === 0 ? (i = i << 8 | i >>> 24,
                                    i = d.SBOX[i >>> 24] << 24 | d.SBOX[i >>> 16 & 255] << 16 | d.SBOX[i >>> 8 & 255] << 8 | d.SBOX[255 & i],
                                    i ^= d.RCON[r / t | 0] << 24) : t > 6 && r % t === 4 ? i = d.SBOX[i >>> 24] << 24 | d.SBOX[i >>> 16 & 255] << 16 | d.SBOX[i >>> 8 & 255] << 8 | d.SBOX[255 & i] : void 0,
                            this._keySchedule[r - t] ^ i);
                        for (this._invKeySchedule = [],
                                 e = o = 0; 0 <= a ? o < a : o > a; e = 0 <= a ? ++o : --o)
                            r = a - e,
                                i = this._keySchedule[r - (e % 4 ? 0 : 4)],
                                this._invKeySchedule[e] = e < 4 || r <= 4 ? i : d.INV_SUB_MIX[0][d.SBOX[i >>> 24]] ^ d.INV_SUB_MIX[1][d.SBOX[i >>> 16 & 255]] ^ d.INV_SUB_MIX[2][d.SBOX[i >>> 8 & 255]] ^ d.INV_SUB_MIX[3][d.SBOX[255 & i]];
                        return !0
                    }
                    ,
                    s.prototype.encryptBlock = function(t) {
                        t = i(new e(t));
                        var n = this._doCryptBlock(t, this._keySchedule, d.SUB_MIX, d.SBOX)
                            , r = new e(16);
                        return r.writeUInt32BE(n[0], 0),
                            r.writeUInt32BE(n[1], 4),
                            r.writeUInt32BE(n[2], 8),
                            r.writeUInt32BE(n[3], 12),
                            r
                    }
                    ,
                    s.prototype.decryptBlock = function(t) {
                        t = i(new e(t));
                        var n = [t[3], t[1]];
                        t[1] = n[0],
                            t[3] = n[1];
                        var r = this._doCryptBlock(t, this._invKeySchedule, d.INV_SUB_MIX, d.INV_SBOX)
                            , a = new e(16);
                        return a.writeUInt32BE(r[0], 0),
                            a.writeUInt32BE(r[3], 4),
                            a.writeUInt32BE(r[2], 8),
                            a.writeUInt32BE(r[1], 12),
                            a
                    }
                    ,
                    s.prototype.scrub = function() {
                        r(this._keySchedule),
                            r(this._invKeySchedule),
                            r(this._key)
                    }
                    ,
                    s.prototype._doCryptBlock = function(e, t, r, a) {
                        var i, s, o, d, u, _, l, c, m, h, f, p;
                        for (o = e[0] ^ t[0],
                                 d = e[1] ^ t[1],
                                 u = e[2] ^ t[2],
                                 _ = e[3] ^ t[3],
                                 i = 4,
                                 s = f = 1,
                                 p = this._nRounds; 1 <= p ? f < p : f > p; s = 1 <= p ? ++f : --f)
                            l = r[0][o >>> 24] ^ r[1][d >>> 16 & 255] ^ r[2][u >>> 8 & 255] ^ r[3][255 & _] ^ t[i++],
                                c = r[0][d >>> 24] ^ r[1][u >>> 16 & 255] ^ r[2][_ >>> 8 & 255] ^ r[3][255 & o] ^ t[i++],
                                m = r[0][u >>> 24] ^ r[1][_ >>> 16 & 255] ^ r[2][o >>> 8 & 255] ^ r[3][255 & d] ^ t[i++],
                                h = r[0][_ >>> 24] ^ r[1][o >>> 16 & 255] ^ r[2][d >>> 8 & 255] ^ r[3][255 & u] ^ t[i++],
                                o = l,
                                d = c,
                                u = m,
                                _ = h;
                        return l = (a[o >>> 24] << 24 | a[d >>> 16 & 255] << 16 | a[u >>> 8 & 255] << 8 | a[255 & _]) ^ t[i++],
                            c = (a[d >>> 24] << 24 | a[u >>> 16 & 255] << 16 | a[_ >>> 8 & 255] << 8 | a[255 & o]) ^ t[i++],
                            m = (a[u >>> 24] << 24 | a[_ >>> 16 & 255] << 16 | a[o >>> 8 & 255] << 8 | a[255 & d]) ^ t[i++],
                            h = (a[_ >>> 24] << 24 | a[o >>> 16 & 255] << 16 | a[d >>> 8 & 255] << 8 | a[255 & u]) ^ t[i++],
                            [n(l), n(c), n(m), n(h)]
                    }
                    ,
                    t.AES = s
            }
        ).call(t, n(135).Buffer)
    }
    , function(e, t, n) {
        (function(t) {
                function r() {
                    a.call(this)
                }
                var a = n(161).Transform
                    , i = n(148);
                e.exports = r,
                    i(r, a),
                    r.prototype.update = function(e, n, r) {
                        this.write(e, n);
                        for (var a, i = new t(""); a = this.read(); )
                            i = t.concat([i, a]);
                        return r && (i = i.toString(r)),
                            i
                    }
                    ,
                    r.prototype.final = function(e) {
                        this.end();
                        for (var n, r = new t(""); n = this.read(); )
                            r = t.concat([r, n]);
                        return e && (r = r.toString(e)),
                            r
                    }
            }
        ).call(t, n(135).Buffer)
    }
    , function(e, t, n) {
        function r() {
            a.call(this)
        }
        e.exports = r;
        var a = n(162).EventEmitter
            , i = n(148);
        i(r, a),
            r.Readable = n(163),
            r.Writable = n(181),
            r.Duplex = n(182),
            r.Transform = n(183),
            r.PassThrough = n(184),
            r.Stream = r,
            r.prototype.pipe = function(e, t) {
                function n(t) {
                    e.writable && !1 === e.write(t) && u.pause && u.pause()
                }
                function r() {
                    u.readable && u.resume && u.resume()
                }
                function i() {
                    _ || (_ = !0,
                        e.end())
                }
                function s() {
                    _ || (_ = !0,
                    "function" == typeof e.destroy && e.destroy())
                }
                function o(e) {
                    if (d(),
                    0 === a.listenerCount(this, "error"))
                        throw e
                }
                function d() {
                    u.removeListener("data", n),
                        e.removeListener("drain", r),
                        u.removeListener("end", i),
                        u.removeListener("close", s),
                        u.removeListener("error", o),
                        e.removeListener("error", o),
                        u.removeListener("end", d),
                        u.removeListener("close", d),
                        e.removeListener("close", d)
                }
                var u = this;
                u.on("data", n),
                    e.on("drain", r),
                e._isStdio || t && t.end === !1 || (u.on("end", i),
                    u.on("close", s));
                var _ = !1;
                return u.on("error", o),
                    e.on("error", o),
                    u.on("end", d),
                    u.on("close", d),
                    e.on("close", d),
                    e.emit("pipe", u),
                    e
            }
    }
    , function(e, t) {
        function n() {
            this._events = this._events || {},
                this._maxListeners = this._maxListeners || void 0
        }
        function r(e) {
            return "function" == typeof e
        }
        function a(e) {
            return "number" == typeof e
        }
        function i(e) {
            return "object" == typeof e && null !== e
        }
        function s(e) {
            return void 0 === e
        }
        e.exports = n,
            n.EventEmitter = n,
            n.prototype._events = void 0,
            n.prototype._maxListeners = void 0,
            n.defaultMaxListeners = 10,
            n.prototype.setMaxListeners = function(e) {
                if (!a(e) || e < 0 || isNaN(e))
                    throw TypeError("n must be a positive number");
                return this._maxListeners = e,
                    this
            }
            ,
            n.prototype.emit = function(e) {
                var t, n, a, o, d, u;
                if (this._events || (this._events = {}),
                "error" === e && (!this._events.error || i(this._events.error) && !this._events.error.length)) {
                    if (t = arguments[1],
                    t instanceof Error)
                        throw t;
                    var _ = new Error('Uncaught, unspecified "error" event. (' + t + ")");
                    throw _.context = t,
                        _
                }
                if (n = this._events[e],
                    s(n))
                    return !1;
                if (r(n))
                    switch (arguments.length) {
                        case 1:
                            n.call(this);
                            break;
                        case 2:
                            n.call(this, arguments[1]);
                            break;
                        case 3:
                            n.call(this, arguments[1], arguments[2]);
                            break;
                        default:
                            o = Array.prototype.slice.call(arguments, 1),
                                n.apply(this, o)
                    }
                else if (i(n))
                    for (o = Array.prototype.slice.call(arguments, 1),
                             u = n.slice(),
                             a = u.length,
                             d = 0; d < a; d++)
                        u[d].apply(this, o);
                return !0
            }
            ,
            n.prototype.addListener = function(e, t) {
                var a;
                if (!r(t))
                    throw TypeError("listener must be a function");
                return this._events || (this._events = {}),
                this._events.newListener && this.emit("newListener", e, r(t.listener) ? t.listener : t),
                    this._events[e] ? i(this._events[e]) ? this._events[e].push(t) : this._events[e] = [this._events[e], t] : this._events[e] = t,
                i(this._events[e]) && !this._events[e].warned && (a = s(this._maxListeners) ? n.defaultMaxListeners : this._maxListeners,
                a && a > 0 && this._events[e].length > a && (this._events[e].warned = !0,
                    console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[e].length),
                "function" == typeof console.trace && console.trace())),
                    this
            }
            ,
            n.prototype.on = n.prototype.addListener,
            n.prototype.once = function(e, t) {
                function n() {
                    this.removeListener(e, n),
                    a || (a = !0,
                        t.apply(this, arguments))
                }
                if (!r(t))
                    throw TypeError("listener must be a function");
                var a = !1;
                return n.listener = t,
                    this.on(e, n),
                    this
            }
            ,
            n.prototype.removeListener = function(e, t) {
                var n, a, s, o;
                if (!r(t))
                    throw TypeError("listener must be a function");
                if (!this._events || !this._events[e])
                    return this;
                if (n = this._events[e],
                    s = n.length,
                    a = -1,
                n === t || r(n.listener) && n.listener === t)
                    delete this._events[e],
                    this._events.removeListener && this.emit("removeListener", e, t);
                else if (i(n)) {
                    for (o = s; o-- > 0; )
                        if (n[o] === t || n[o].listener && n[o].listener === t) {
                            a = o;
                            break
                        }
                    if (a < 0)
                        return this;
                    1 === n.length ? (n.length = 0,
                        delete this._events[e]) : n.splice(a, 1),
                    this._events.removeListener && this.emit("removeListener", e, t)
                }
                return this
            }
            ,
            n.prototype.removeAllListeners = function(e) {
                var t, n;
                if (!this._events)
                    return this;
                if (!this._events.removeListener)
                    return 0 === arguments.length ? this._events = {} : this._events[e] && delete this._events[e],
                        this;
                if (0 === arguments.length) {
                    for (t in this._events)
                        "removeListener" !== t && this.removeAllListeners(t);
                    return this.removeAllListeners("removeListener"),
                        this._events = {},
                        this
                }
                if (n = this._events[e],
                    r(n))
                    this.removeListener(e, n);
                else if (n)
                    for (; n.length; )
                        this.removeListener(e, n[n.length - 1]);
                return delete this._events[e],
                    this
            }
            ,
            n.prototype.listeners = function(e) {
                var t;
                return t = this._events && this._events[e] ? r(this._events[e]) ? [this._events[e]] : this._events[e].slice() : []
            }
            ,
            n.prototype.listenerCount = function(e) {
                if (this._events) {
                    var t = this._events[e];
                    if (r(t))
                        return 1;
                    if (t)
                        return t.length
                }
                return 0
            }
            ,
            n.listenerCount = function(e, t) {
                return e.listenerCount(t)
            }
    }
    , function(e, t, n) {
        t = e.exports = n(164),
            t.Stream = t,
            t.Readable = t,
            t.Writable = n(174),
            t.Duplex = n(173),
            t.Transform = n(179),
            t.PassThrough = n(180)
    }
    , function(e, t, n) {
        (function(t, r) {
                "use strict";
                function a(e) {
                    return W.from(e)
                }
                function i(e) {
                    return W.isBuffer(e) || e instanceof R
                }
                function s(e, t, n) {
                    return "function" == typeof e.prependListener ? e.prependListener(t, n) : void (e._events && e._events[t] ? A(e._events[t]) ? e._events[t].unshift(n) : e._events[t] = [n, e._events[t]] : e.on(t, n))
                }
                function o(e, t) {
                    O = O || n(173),
                        e = e || {};
                    var r = t instanceof O;
                    this.objectMode = !!e.objectMode,
                    r && (this.objectMode = this.objectMode || !!e.readableObjectMode);
                    var a = e.highWaterMark
                        , i = e.readableHighWaterMark
                        , s = this.objectMode ? 16 : 16384;
                    a || 0 === a ? this.highWaterMark = a : r && (i || 0 === i) ? this.highWaterMark = i : this.highWaterMark = s,
                        this.highWaterMark = Math.floor(this.highWaterMark),
                        this.buffer = new B,
                        this.length = 0,
                        this.pipes = null,
                        this.pipesCount = 0,
                        this.flowing = null,
                        this.ended = !1,
                        this.endEmitted = !1,
                        this.reading = !1,
                        this.sync = !0,
                        this.needReadable = !1,
                        this.emittedReadable = !1,
                        this.readableListening = !1,
                        this.resumeScheduled = !1,
                        this.destroyed = !1,
                        this.defaultEncoding = e.defaultEncoding || "utf8",
                        this.awaitDrain = 0,
                        this.readingMore = !1,
                        this.decoder = null,
                        this.encoding = null,
                    e.encoding && (z || (z = n(178).StringDecoder),
                        this.decoder = new z(e.encoding),
                        this.encoding = e.encoding)
                }
                function d(e) {
                    return O = O || n(173),
                        this instanceof d ? (this._readableState = new o(e,this),
                            this.readable = !0,
                        e && ("function" == typeof e.read && (this._read = e.read),
                        "function" == typeof e.destroy && (this._destroy = e.destroy)),
                            void I.call(this)) : new d(e)
                }
                function u(e, t, n, r, i) {
                    var s = e._readableState;
                    if (null === t)
                        s.reading = !1,
                            f(e, s);
                    else {
                        var o;
                        i || (o = l(s, t)),
                            o ? e.emit("error", o) : s.objectMode || t && t.length > 0 ? ("string" == typeof t || s.objectMode || Object.getPrototypeOf(t) === W.prototype || (t = a(t)),
                                r ? s.endEmitted ? e.emit("error", new Error("stream.unshift() after end event")) : _(e, s, t, !0) : s.ended ? e.emit("error", new Error("stream.push() after EOF")) : (s.reading = !1,
                                    s.decoder && !n ? (t = s.decoder.write(t),
                                        s.objectMode || 0 !== t.length ? _(e, s, t, !1) : y(e, s)) : _(e, s, t, !1))) : r || (s.reading = !1)
                    }
                    return c(s)
                }
                function _(e, t, n, r) {
                    t.flowing && 0 === t.length && !t.sync ? (e.emit("data", n),
                        e.read(0)) : (t.length += t.objectMode ? 1 : n.length,
                        r ? t.buffer.unshift(n) : t.buffer.push(n),
                    t.needReadable && p(e)),
                        y(e, t)
                }
                function l(e, t) {
                    var n;
                    return i(t) || "string" == typeof t || void 0 === t || e.objectMode || (n = new TypeError("Invalid non-string/buffer chunk")),
                        n
                }
                function c(e) {
                    return !e.ended && (e.needReadable || e.length < e.highWaterMark || 0 === e.length)
                }
                function m(e) {
                    return e >= V ? e = V : (e--,
                        e |= e >>> 1,
                        e |= e >>> 2,
                        e |= e >>> 4,
                        e |= e >>> 8,
                        e |= e >>> 16,
                        e++),
                        e
                }
                function h(e, t) {
                    return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e !== e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = m(e)),
                        e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0,
                            0))
                }
                function f(e, t) {
                    if (!t.ended) {
                        if (t.decoder) {
                            var n = t.decoder.end();
                            n && n.length && (t.buffer.push(n),
                                t.length += t.objectMode ? 1 : n.length)
                        }
                        t.ended = !0,
                            p(e)
                    }
                }
                function p(e) {
                    var t = e._readableState;
                    t.needReadable = !1,
                    t.emittedReadable || (C("emitReadable", t.flowing),
                        t.emittedReadable = !0,
                        t.sync ? j.nextTick(M, e) : M(e))
                }
                function M(e) {
                    C("emit readable"),
                        e.emit("readable"),
                        k(e)
                }
                function y(e, t) {
                    t.readingMore || (t.readingMore = !0,
                        j.nextTick(L, e, t))
                }
                function L(e, t) {
                    for (var n = t.length; !t.reading && !t.flowing && !t.ended && t.length < t.highWaterMark && (C("maybeReadMore read 0"),
                        e.read(0),
                    n !== t.length); )
                        n = t.length;
                    t.readingMore = !1
                }
                function g(e) {
                    return function() {
                        var t = e._readableState;
                        C("pipeOnDrain", t.awaitDrain),
                        t.awaitDrain && t.awaitDrain--,
                        0 === t.awaitDrain && P(e, "data") && (t.flowing = !0,
                            k(e))
                    }
                }
                function Y(e) {
                    C("readable nexttick read 0"),
                        e.read(0)
                }
                function v(e, t) {
                    t.resumeScheduled || (t.resumeScheduled = !0,
                        j.nextTick(w, e, t))
                }
                function w(e, t) {
                    t.reading || (C("resume read 0"),
                        e.read(0)),
                        t.resumeScheduled = !1,
                        t.awaitDrain = 0,
                        e.emit("resume"),
                        k(e),
                    t.flowing && !t.reading && e.read(0)
                }
                function k(e) {
                    var t = e._readableState;
                    for (C("flow", t.flowing); t.flowing && null !== e.read(); )
                        ;
                }
                function b(e, t) {
                    if (0 === t.length)
                        return null;
                    var n;
                    return t.objectMode ? n = t.buffer.shift() : !e || e >= t.length ? (n = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.head.data : t.buffer.concat(t.length),
                        t.buffer.clear()) : n = T(e, t.buffer, t.decoder),
                        n
                }
                function T(e, t, n) {
                    var r;
                    return e < t.head.data.length ? (r = t.head.data.slice(0, e),
                        t.head.data = t.head.data.slice(e)) : r = e === t.head.data.length ? t.shift() : n ? D(e, t) : S(e, t),
                        r
                }
                function D(e, t) {
                    var n = t.head
                        , r = 1
                        , a = n.data;
                    for (e -= a.length; n = n.next; ) {
                        var i = n.data
                            , s = e > i.length ? i.length : e;
                        if (a += s === i.length ? i : i.slice(0, e),
                            e -= s,
                        0 === e) {
                            s === i.length ? (++r,
                                n.next ? t.head = n.next : t.head = t.tail = null) : (t.head = n,
                                n.data = i.slice(s));
                            break
                        }
                        ++r
                    }
                    return t.length -= r,
                        a
                }
                function S(e, t) {
                    var n = W.allocUnsafe(e)
                        , r = t.head
                        , a = 1;
                    for (r.data.copy(n),
                             e -= r.data.length; r = r.next; ) {
                        var i = r.data
                            , s = e > i.length ? i.length : e;
                        if (i.copy(n, n.length - e, 0, s),
                            e -= s,
                        0 === e) {
                            s === i.length ? (++a,
                                r.next ? t.head = r.next : t.head = t.tail = null) : (t.head = r,
                                r.data = i.slice(s));
                            break
                        }
                        ++a
                    }
                    return t.length -= a,
                        n
                }
                function x(e) {
                    var t = e._readableState;
                    if (t.length > 0)
                        throw new Error('"endReadable()" called on non-empty stream');
                    t.endEmitted || (t.ended = !0,
                        j.nextTick(E, t, e))
                }
                function E(e, t) {
                    e.endEmitted || 0 !== e.length || (e.endEmitted = !0,
                        t.readable = !1,
                        t.emit("end"))
                }
                function H(e, t) {
                    for (var n = 0, r = e.length; n < r; n++)
                        if (e[n] === t)
                            return n;
                    return -1
                }
                var j = n(165);
                e.exports = d;
                var O, A = n(138);
                d.ReadableState = o;
                var P = (n(162).EventEmitter,
                        function(e, t) {
                            return e.listeners(t).length
                        }
                )
                    , I = n(166)
                    , W = n(167).Buffer
                    , R = t.Uint8Array || function() {}
                    , N = n(168);
                N.inherits = n(148);
                var F = n(169)
                    , C = void 0;
                C = F && F.debuglog ? F.debuglog("stream") : function() {}
                ;
                var z, B = n(170), U = n(172);
                N.inherits(d, I);
                var J = ["error", "close", "destroy", "pause", "resume"];
                Object.defineProperty(d.prototype, "destroyed", {
                    get: function() {
                        return void 0 !== this._readableState && this._readableState.destroyed
                    },
                    set: function(e) {
                        this._readableState && (this._readableState.destroyed = e)
                    }
                }),
                    d.prototype.destroy = U.destroy,
                    d.prototype._undestroy = U.undestroy,
                    d.prototype._destroy = function(e, t) {
                        this.push(null),
                            t(e)
                    }
                    ,
                    d.prototype.push = function(e, t) {
                        var n, r = this._readableState;
                        return r.objectMode ? n = !0 : "string" == typeof e && (t = t || r.defaultEncoding,
                        t !== r.encoding && (e = W.from(e, t),
                            t = ""),
                            n = !0),
                            u(this, e, t, !1, n)
                    }
                    ,
                    d.prototype.unshift = function(e) {
                        return u(this, e, null, !0, !1)
                    }
                    ,
                    d.prototype.isPaused = function() {
                        return this._readableState.flowing === !1
                    }
                    ,
                    d.prototype.setEncoding = function(e) {
                        return z || (z = n(178).StringDecoder),
                            this._readableState.decoder = new z(e),
                            this._readableState.encoding = e,
                            this
                    }
                ;
                var V = 8388608;
                d.prototype.read = function(e) {
                    C("read", e),
                        e = parseInt(e, 10);
                    var t = this._readableState
                        , n = e;
                    if (0 !== e && (t.emittedReadable = !1),
                    0 === e && t.needReadable && (t.length >= t.highWaterMark || t.ended))
                        return C("read: emitReadable", t.length, t.ended),
                            0 === t.length && t.ended ? x(this) : p(this),
                            null;
                    if (e = h(e, t),
                    0 === e && t.ended)
                        return 0 === t.length && x(this),
                            null;
                    var r = t.needReadable;
                    C("need readable", r),
                    (0 === t.length || t.length - e < t.highWaterMark) && (r = !0,
                        C("length less than watermark", r)),
                        t.ended || t.reading ? (r = !1,
                            C("reading or ended", r)) : r && (C("do read"),
                            t.reading = !0,
                            t.sync = !0,
                        0 === t.length && (t.needReadable = !0),
                            this._read(t.highWaterMark),
                            t.sync = !1,
                        t.reading || (e = h(n, t)));
                    var a;
                    return a = e > 0 ? b(e, t) : null,
                        null === a ? (t.needReadable = !0,
                            e = 0) : t.length -= e,
                    0 === t.length && (t.ended || (t.needReadable = !0),
                    n !== e && t.ended && x(this)),
                    null !== a && this.emit("data", a),
                        a
                }
                    ,
                    d.prototype._read = function(e) {
                        this.emit("error", new Error("_read() is not implemented"))
                    }
                    ,
                    d.prototype.pipe = function(e, t) {
                        function n(e, t) {
                            C("onunpipe"),
                            e === c && t && t.hasUnpiped === !1 && (t.hasUnpiped = !0,
                                i())
                        }
                        function a() {
                            C("onend"),
                                e.end()
                        }
                        function i() {
                            C("cleanup"),
                                e.removeListener("close", u),
                                e.removeListener("finish", _),
                                e.removeListener("drain", p),
                                e.removeListener("error", d),
                                e.removeListener("unpipe", n),
                                c.removeListener("end", a),
                                c.removeListener("end", l),
                                c.removeListener("data", o),
                                M = !0,
                            !m.awaitDrain || e._writableState && !e._writableState.needDrain || p()
                        }
                        function o(t) {
                            C("ondata"),
                                y = !1;
                            var n = e.write(t);
                            !1 !== n || y || ((1 === m.pipesCount && m.pipes === e || m.pipesCount > 1 && H(m.pipes, e) !== -1) && !M && (C("false write response, pause", c._readableState.awaitDrain),
                                c._readableState.awaitDrain++,
                                y = !0),
                                c.pause())
                        }
                        function d(t) {
                            C("onerror", t),
                                l(),
                                e.removeListener("error", d),
                            0 === P(e, "error") && e.emit("error", t)
                        }
                        function u() {
                            e.removeListener("finish", _),
                                l()
                        }
                        function _() {
                            C("onfinish"),
                                e.removeListener("close", u),
                                l()
                        }
                        function l() {
                            C("unpipe"),
                                c.unpipe(e)
                        }
                        var c = this
                            , m = this._readableState;
                        switch (m.pipesCount) {
                            case 0:
                                m.pipes = e;
                                break;
                            case 1:
                                m.pipes = [m.pipes, e];
                                break;
                            default:
                                m.pipes.push(e)
                        }
                        m.pipesCount += 1,
                            C("pipe count=%d opts=%j", m.pipesCount, t);
                        var h = (!t || t.end !== !1) && e !== r.stdout && e !== r.stderr
                            , f = h ? a : l;
                        m.endEmitted ? j.nextTick(f) : c.once("end", f),
                            e.on("unpipe", n);
                        var p = g(c);
                        e.on("drain", p);
                        var M = !1
                            , y = !1;
                        return c.on("data", o),
                            s(e, "error", d),
                            e.once("close", u),
                            e.once("finish", _),
                            e.emit("pipe", c),
                        m.flowing || (C("pipe resume"),
                            c.resume()),
                            e
                    }
                    ,
                    d.prototype.unpipe = function(e) {
                        var t = this._readableState
                            , n = {
                            hasUnpiped: !1
                        };
                        if (0 === t.pipesCount)
                            return this;
                        if (1 === t.pipesCount)
                            return e && e !== t.pipes ? this : (e || (e = t.pipes),
                                t.pipes = null,
                                t.pipesCount = 0,
                                t.flowing = !1,
                            e && e.emit("unpipe", this, n),
                                this);
                        if (!e) {
                            var r = t.pipes
                                , a = t.pipesCount;
                            t.pipes = null,
                                t.pipesCount = 0,
                                t.flowing = !1;
                            for (var i = 0; i < a; i++)
                                r[i].emit("unpipe", this, n);
                            return this
                        }
                        var s = H(t.pipes, e);
                        return s === -1 ? this : (t.pipes.splice(s, 1),
                            t.pipesCount -= 1,
                        1 === t.pipesCount && (t.pipes = t.pipes[0]),
                            e.emit("unpipe", this, n),
                            this)
                    }
                    ,
                    d.prototype.on = function(e, t) {
                        var n = I.prototype.on.call(this, e, t);
                        if ("data" === e)
                            this._readableState.flowing !== !1 && this.resume();
                        else if ("readable" === e) {
                            var r = this._readableState;
                            r.endEmitted || r.readableListening || (r.readableListening = r.needReadable = !0,
                                r.emittedReadable = !1,
                                r.reading ? r.length && p(this) : j.nextTick(Y, this))
                        }
                        return n
                    }
                    ,
                    d.prototype.addListener = d.prototype.on,
                    d.prototype.resume = function() {
                        var e = this._readableState;
                        return e.flowing || (C("resume"),
                            e.flowing = !0,
                            v(this, e)),
                            this
                    }
                    ,
                    d.prototype.pause = function() {
                        return C("call pause flowing=%j", this._readableState.flowing),
                        !1 !== this._readableState.flowing && (C("pause"),
                            this._readableState.flowing = !1,
                            this.emit("pause")),
                            this
                    }
                    ,
                    d.prototype.wrap = function(e) {
                        var t = this
                            , n = this._readableState
                            , r = !1;
                        e.on("end", function() {
                            if (C("wrapped end"),
                            n.decoder && !n.ended) {
                                var e = n.decoder.end();
                                e && e.length && t.push(e)
                            }
                            t.push(null)
                        }),
                            e.on("data", function(a) {
                                if (C("wrapped data"),
                                n.decoder && (a = n.decoder.write(a)),
                                (!n.objectMode || null !== a && void 0 !== a) && (n.objectMode || a && a.length)) {
                                    var i = t.push(a);
                                    i || (r = !0,
                                        e.pause())
                                }
                            });
                        for (var a in e)
                            void 0 === this[a] && "function" == typeof e[a] && (this[a] = function(t) {
                                return function() {
                                    return e[t].apply(e, arguments)
                                }
                            }(a));
                        for (var i = 0; i < J.length; i++)
                            e.on(J[i], this.emit.bind(this, J[i]));
                        return this._read = function(t) {
                            C("wrapped _read", t),
                            r && (r = !1,
                                e.resume())
                        }
                            ,
                            this
                    }
                    ,
                    Object.defineProperty(d.prototype, "readableHighWaterMark", {
                        enumerable: !1,
                        get: function() {
                            return this._readableState.highWaterMark
                        }
                    }),
                    d._fromList = b
            }
        ).call(t, function() {
            return this
        }(), n(146))
    }
    , function(e, t, n) {
        (function(t) {
                "use strict";
                function n(e, n, r, a) {
                    if ("function" != typeof e)
                        throw new TypeError('"callback" argument must be a function');
                    var i, s, o = arguments.length;
                    switch (o) {
                        case 0:
                        case 1:
                            return t.nextTick(e);
                        case 2:
                            return t.nextTick(function() {
                                e.call(null, n)
                            });
                        case 3:
                            return t.nextTick(function() {
                                e.call(null, n, r)
                            });
                        case 4:
                            return t.nextTick(function() {
                                e.call(null, n, r, a)
                            });
                        default:
                            for (i = new Array(o - 1),
                                     s = 0; s < i.length; )
                                i[s++] = arguments[s];
                            return t.nextTick(function() {
                                e.apply(null, i)
                            })
                    }
                }
                "undefined" == typeof t || !t.version || 0 === t.version.indexOf("v0.") || 0 === t.version.indexOf("v1.") && 0 !== t.version.indexOf("v1.8.") ? e.exports = {
                    nextTick: n
                } : e.exports = t
            }
        ).call(t, n(146))
    }
    , function(e, t, n) {
        e.exports = n(162).EventEmitter
    }
    , function(e, t, n) {
        function r(e, t) {
            for (var n in e)
                t[n] = e[n]
        }
        function a(e, t, n) {
            return s(e, t, n)
        }
        var i = n(135)
            , s = i.Buffer;
        s.from && s.alloc && s.allocUnsafe && s.allocUnsafeSlow ? e.exports = i : (r(i, t),
            t.Buffer = a),
            r(s, a),
            a.from = function(e, t, n) {
                if ("number" == typeof e)
                    throw new TypeError("Argument must not be a number");
                return s(e, t, n)
            }
            ,
            a.alloc = function(e, t, n) {
                if ("number" != typeof e)
                    throw new TypeError("Argument must be a number");
                var r = s(e);
                return void 0 !== t ? "string" == typeof n ? r.fill(t, n) : r.fill(t) : r.fill(0),
                    r
            }
            ,
            a.allocUnsafe = function(e) {
                if ("number" != typeof e)
                    throw new TypeError("Argument must be a number");
                return s(e)
            }
            ,
            a.allocUnsafeSlow = function(e) {
                if ("number" != typeof e)
                    throw new TypeError("Argument must be a number");
                return i.SlowBuffer(e)
            }
    }
    , function(e, t, n) {
        (function(e) {
                function n(e) {
                    return Array.isArray ? Array.isArray(e) : "[object Array]" === p(e)
                }
                function r(e) {
                    return "boolean" == typeof e
                }
                function a(e) {
                    return null === e
                }
                function i(e) {
                    return null == e
                }
                function s(e) {
                    return "number" == typeof e
                }
                function o(e) {
                    return "string" == typeof e
                }
                function d(e) {
                    return "symbol" == typeof e
                }
                function u(e) {
                    return void 0 === e
                }
                function _(e) {
                    return "[object RegExp]" === p(e)
                }
                function l(e) {
                    return "object" == typeof e && null !== e
                }
                function c(e) {
                    return "[object Date]" === p(e)
                }
                function m(e) {
                    return "[object Error]" === p(e) || e instanceof Error
                }
                function h(e) {
                    return "function" == typeof e
                }
                function f(e) {
                    return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || "undefined" == typeof e
                }
                function p(e) {
                    return Object.prototype.toString.call(e)
                }
                t.isArray = n,
                    t.isBoolean = r,
                    t.isNull = a,
                    t.isNullOrUndefined = i,
                    t.isNumber = s,
                    t.isString = o,
                    t.isSymbol = d,
                    t.isUndefined = u,
                    t.isRegExp = _,
                    t.isObject = l,
                    t.isDate = c,
                    t.isError = m,
                    t.isFunction = h,
                    t.isPrimitive = f,
                    t.isBuffer = e.isBuffer
            }
        ).call(t, n(135).Buffer)
    }
    , function(e, t) {}
    , function(e, t, n) {
        "use strict";
        function r(e, t) {
            if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function")
        }
        function a(e, t, n) {
            e.copy(t, n)
        }
        var i = n(167).Buffer
            , s = n(171);
        e.exports = function() {
            function e() {
                r(this, e),
                    this.head = null,
                    this.tail = null,
                    this.length = 0
            }
            return e.prototype.push = function(e) {
                var t = {
                    data: e,
                    next: null
                };
                this.length > 0 ? this.tail.next = t : this.head = t,
                    this.tail = t,
                    ++this.length
            }
                ,
                e.prototype.unshift = function(e) {
                    var t = {
                        data: e,
                        next: this.head
                    };
                    0 === this.length && (this.tail = t),
                        this.head = t,
                        ++this.length
                }
                ,
                e.prototype.shift = function() {
                    if (0 !== this.length) {
                        var e = this.head.data;
                        return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next,
                            --this.length,
                            e
                    }
                }
                ,
                e.prototype.clear = function() {
                    this.head = this.tail = null,
                        this.length = 0
                }
                ,
                e.prototype.join = function(e) {
                    if (0 === this.length)
                        return "";
                    for (var t = this.head, n = "" + t.data; t = t.next; )
                        n += e + t.data;
                    return n
                }
                ,
                e.prototype.concat = function(e) {
                    if (0 === this.length)
                        return i.alloc(0);
                    if (1 === this.length)
                        return this.head.data;
                    for (var t = i.allocUnsafe(e >>> 0), n = this.head, r = 0; n; )
                        a(n.data, t, r),
                            r += n.data.length,
                            n = n.next;
                    return t
                }
                ,
                e
        }(),
        s && s.inspect && s.inspect.custom && (e.exports.prototype[s.inspect.custom] = function() {
                var e = s.inspect({
                    length: this.length
                });
                return this.constructor.name + " " + e
            }
        )
    }
    , function(e, t) {}
    , function(e, t, n) {
        "use strict";
        function r(e, t) {
            var n = this
                , r = this._readableState && this._readableState.destroyed
                , a = this._writableState && this._writableState.destroyed;
            return r || a ? (t ? t(e) : !e || this._writableState && this._writableState.errorEmitted || s.nextTick(i, this, e),
                this) : (this._readableState && (this._readableState.destroyed = !0),
            this._writableState && (this._writableState.destroyed = !0),
                this._destroy(e || null, function(e) {
                    !t && e ? (s.nextTick(i, n, e),
                    n._writableState && (n._writableState.errorEmitted = !0)) : t && t(e)
                }),
                this)
        }
        function a() {
            this._readableState && (this._readableState.destroyed = !1,
                this._readableState.reading = !1,
                this._readableState.ended = !1,
                this._readableState.endEmitted = !1),
            this._writableState && (this._writableState.destroyed = !1,
                this._writableState.ended = !1,
                this._writableState.ending = !1,
                this._writableState.finished = !1,
                this._writableState.errorEmitted = !1)
        }
        function i(e, t) {
            e.emit("error", t)
        }
        var s = n(165);
        e.exports = {
            destroy: r,
            undestroy: a
        }
    }
    , function(e, t, n) {
        "use strict";
        function r(e) {
            return this instanceof r ? (u.call(this, e),
                _.call(this, e),
            e && e.readable === !1 && (this.readable = !1),
            e && e.writable === !1 && (this.writable = !1),
                this.allowHalfOpen = !0,
            e && e.allowHalfOpen === !1 && (this.allowHalfOpen = !1),
                void this.once("end", a)) : new r(e)
        }
        function a() {
            this.allowHalfOpen || this._writableState.ended || s.nextTick(i, this)
        }
        function i(e) {
            e.end()
        }
        var s = n(165)
            , o = Object.keys || function(e) {
                var t = [];
                for (var n in e)
                    t.push(n);
                return t
            }
        ;
        e.exports = r;
        var d = n(168);
        d.inherits = n(148);
        var u = n(164)
            , _ = n(174);
        d.inherits(r, u);
        for (var l = o(_.prototype), c = 0; c < l.length; c++) {
            var m = l[c];
            r.prototype[m] || (r.prototype[m] = _.prototype[m])
        }
        Object.defineProperty(r.prototype, "writableHighWaterMark", {
            enumerable: !1,
            get: function() {
                return this._writableState.highWaterMark
            }
        }),
            Object.defineProperty(r.prototype, "destroyed", {
                get: function() {
                    return void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed && this._writableState.destroyed)
                },
                set: function(e) {
                    void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e,
                        this._writableState.destroyed = e)
                }
            }),
            r.prototype._destroy = function(e, t) {
                this.push(null),
                    this.end(),
                    s.nextTick(t, e)
            }
    }
    , function(e, t, n) {
        (function(t, r, a) {
                "use strict";
                function i(e) {
                    var t = this;
                    this.next = null,
                        this.entry = null,
                        this.finish = function() {
                            D(t, e)
                        }
                }
                function s(e) {
                    return A.from(e)
                }
                function o(e) {
                    return A.isBuffer(e) || e instanceof P
                }
                function d() {}
                function u(e, t) {
                    x = x || n(173),
                        e = e || {};
                    var r = t instanceof x;
                    this.objectMode = !!e.objectMode,
                    r && (this.objectMode = this.objectMode || !!e.writableObjectMode);
                    var a = e.highWaterMark
                        , s = e.writableHighWaterMark
                        , o = this.objectMode ? 16 : 16384;
                    a || 0 === a ? this.highWaterMark = a : r && (s || 0 === s) ? this.highWaterMark = s : this.highWaterMark = o,
                        this.highWaterMark = Math.floor(this.highWaterMark),
                        this.finalCalled = !1,
                        this.needDrain = !1,
                        this.ending = !1,
                        this.ended = !1,
                        this.finished = !1,
                        this.destroyed = !1;
                    var d = e.decodeStrings === !1;
                    this.decodeStrings = !d,
                        this.defaultEncoding = e.defaultEncoding || "utf8",
                        this.length = 0,
                        this.writing = !1,
                        this.corked = 0,
                        this.sync = !0,
                        this.bufferProcessing = !1,
                        this.onwrite = function(e) {
                            y(t, e)
                        }
                        ,
                        this.writecb = null,
                        this.writelen = 0,
                        this.bufferedRequest = null,
                        this.lastBufferedRequest = null,
                        this.pendingcb = 0,
                        this.prefinished = !1,
                        this.errorEmitted = !1,
                        this.bufferedRequestCount = 0,
                        this.corkedRequestsFree = new i(this)
                }
                function _(e) {
                    return x = x || n(173),
                        W.call(_, this) || this instanceof x ? (this._writableState = new u(e,this),
                            this.writable = !0,
                        e && ("function" == typeof e.write && (this._write = e.write),
                        "function" == typeof e.writev && (this._writev = e.writev),
                        "function" == typeof e.destroy && (this._destroy = e.destroy),
                        "function" == typeof e.final && (this._final = e.final)),
                            void O.call(this)) : new _(e)
                }
                function l(e, t) {
                    var n = new Error("write after end");
                    e.emit("error", n),
                        S.nextTick(t, n)
                }
                function c(e, t, n, r) {
                    var a = !0
                        , i = !1;
                    return null === n ? i = new TypeError("May not write null values to stream") : "string" == typeof n || void 0 === n || t.objectMode || (i = new TypeError("Invalid non-string/buffer chunk")),
                    i && (e.emit("error", i),
                        S.nextTick(r, i),
                        a = !1),
                        a
                }
                function m(e, t, n) {
                    return e.objectMode || e.decodeStrings === !1 || "string" != typeof t || (t = A.from(t, n)),
                        t
                }
                function h(e, t, n, r, a, i) {
                    if (!n) {
                        var s = m(t, r, a);
                        r !== s && (n = !0,
                            a = "buffer",
                            r = s)
                    }
                    var o = t.objectMode ? 1 : r.length;
                    t.length += o;
                    var d = t.length < t.highWaterMark;
                    if (d || (t.needDrain = !0),
                    t.writing || t.corked) {
                        var u = t.lastBufferedRequest;
                        t.lastBufferedRequest = {
                            chunk: r,
                            encoding: a,
                            isBuf: n,
                            callback: i,
                            next: null
                        },
                            u ? u.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest,
                            t.bufferedRequestCount += 1
                    } else
                        f(e, t, !1, o, r, a, i);
                    return d
                }
                function f(e, t, n, r, a, i, s) {
                    t.writelen = r,
                        t.writecb = s,
                        t.writing = !0,
                        t.sync = !0,
                        n ? e._writev(a, t.onwrite) : e._write(a, i, t.onwrite),
                        t.sync = !1
                }
                function p(e, t, n, r, a) {
                    --t.pendingcb,
                        n ? (S.nextTick(a, r),
                            S.nextTick(b, e, t),
                            e._writableState.errorEmitted = !0,
                            e.emit("error", r)) : (a(r),
                            e._writableState.errorEmitted = !0,
                            e.emit("error", r),
                            b(e, t))
                }
                function M(e) {
                    e.writing = !1,
                        e.writecb = null,
                        e.length -= e.writelen,
                        e.writelen = 0
                }
                function y(e, t) {
                    var n = e._writableState
                        , r = n.sync
                        , a = n.writecb;
                    if (M(n),
                        t)
                        p(e, n, r, t, a);
                    else {
                        var i = v(n);
                        i || n.corked || n.bufferProcessing || !n.bufferedRequest || Y(e, n),
                            r ? E(L, e, n, i, a) : L(e, n, i, a)
                    }
                }
                function L(e, t, n, r) {
                    n || g(e, t),
                        t.pendingcb--,
                        r(),
                        b(e, t)
                }
                function g(e, t) {
                    0 === t.length && t.needDrain && (t.needDrain = !1,
                        e.emit("drain"))
                }
                function Y(e, t) {
                    t.bufferProcessing = !0;
                    var n = t.bufferedRequest;
                    if (e._writev && n && n.next) {
                        var r = t.bufferedRequestCount
                            , a = new Array(r)
                            , s = t.corkedRequestsFree;
                        s.entry = n;
                        for (var o = 0, d = !0; n; )
                            a[o] = n,
                            n.isBuf || (d = !1),
                                n = n.next,
                                o += 1;
                        a.allBuffers = d,
                            f(e, t, !0, t.length, a, "", s.finish),
                            t.pendingcb++,
                            t.lastBufferedRequest = null,
                            s.next ? (t.corkedRequestsFree = s.next,
                                s.next = null) : t.corkedRequestsFree = new i(t),
                            t.bufferedRequestCount = 0
                    } else {
                        for (; n; ) {
                            var u = n.chunk
                                , _ = n.encoding
                                , l = n.callback
                                , c = t.objectMode ? 1 : u.length;
                            if (f(e, t, !1, c, u, _, l),
                                n = n.next,
                                t.bufferedRequestCount--,
                                t.writing)
                                break
                        }
                        null === n && (t.lastBufferedRequest = null)
                    }
                    t.bufferedRequest = n,
                        t.bufferProcessing = !1
                }
                function v(e) {
                    return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
                }
                function w(e, t) {
                    e._final(function(n) {
                        t.pendingcb--,
                        n && e.emit("error", n),
                            t.prefinished = !0,
                            e.emit("prefinish"),
                            b(e, t)
                    })
                }
                function k(e, t) {
                    t.prefinished || t.finalCalled || ("function" == typeof e._final ? (t.pendingcb++,
                        t.finalCalled = !0,
                        S.nextTick(w, e, t)) : (t.prefinished = !0,
                        e.emit("prefinish")))
                }
                function b(e, t) {
                    var n = v(t);
                    return n && (k(e, t),
                    0 === t.pendingcb && (t.finished = !0,
                        e.emit("finish"))),
                        n
                }
                function T(e, t, n) {
                    t.ending = !0,
                        b(e, t),
                    n && (t.finished ? S.nextTick(n) : e.once("finish", n)),
                        t.ended = !0,
                        e.writable = !1
                }
                function D(e, t, n) {
                    var r = e.entry;
                    for (e.entry = null; r; ) {
                        var a = r.callback;
                        t.pendingcb--,
                            a(n),
                            r = r.next
                    }
                    t.corkedRequestsFree ? t.corkedRequestsFree.next = e : t.corkedRequestsFree = e
                }
                var S = n(165);
                e.exports = _;
                var x, E = !t.browser && ["v0.10", "v0.9."].indexOf(t.version.slice(0, 5)) > -1 ? r : S.nextTick;
                _.WritableState = u;
                var H = n(168);
                H.inherits = n(148);
                var j = {
                    deprecate: n(177)
                }
                    , O = n(166)
                    , A = n(167).Buffer
                    , P = a.Uint8Array || function() {}
                    , I = n(172);
                H.inherits(_, O),
                    u.prototype.getBuffer = function() {
                        for (var e = this.bufferedRequest, t = []; e; )
                            t.push(e),
                                e = e.next;
                        return t
                    }
                    ,
                    function() {
                        try {
                            Object.defineProperty(u.prototype, "buffer", {
                                get: j.deprecate(function() {
                                    return this.getBuffer()
                                }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                            })
                        } catch (e) {}
                    }();
                var W;
                "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (W = Function.prototype[Symbol.hasInstance],
                    Object.defineProperty(_, Symbol.hasInstance, {
                        value: function(e) {
                            return !!W.call(this, e) || this === _ && (e && e._writableState instanceof u)
                        }
                    })) : W = function(e) {
                    return e instanceof this
                }
                    ,
                    _.prototype.pipe = function() {
                        this.emit("error", new Error("Cannot pipe, not readable"))
                    }
                    ,
                    _.prototype.write = function(e, t, n) {
                        var r = this._writableState
                            , a = !1
                            , i = !r.objectMode && o(e);
                        return i && !A.isBuffer(e) && (e = s(e)),
                        "function" == typeof t && (n = t,
                            t = null),
                            i ? t = "buffer" : t || (t = r.defaultEncoding),
                        "function" != typeof n && (n = d),
                            r.ended ? l(this, n) : (i || c(this, r, e, n)) && (r.pendingcb++,
                                a = h(this, r, i, e, t, n)),
                            a
                    }
                    ,
                    _.prototype.cork = function() {
                        var e = this._writableState;
                        e.corked++
                    }
                    ,
                    _.prototype.uncork = function() {
                        var e = this._writableState;
                        e.corked && (e.corked--,
                        e.writing || e.corked || e.finished || e.bufferProcessing || !e.bufferedRequest || Y(this, e))
                    }
                    ,
                    _.prototype.setDefaultEncoding = function(e) {
                        if ("string" == typeof e && (e = e.toLowerCase()),
                            !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1))
                            throw new TypeError("Unknown encoding: " + e);
                        return this._writableState.defaultEncoding = e,
                            this
                    }
                    ,
                    Object.defineProperty(_.prototype, "writableHighWaterMark", {
                        enumerable: !1,
                        get: function() {
                            return this._writableState.highWaterMark
                        }
                    }),
                    _.prototype._write = function(e, t, n) {
                        n(new Error("_write() is not implemented"))
                    }
                    ,
                    _.prototype._writev = null,
                    _.prototype.end = function(e, t, n) {
                        var r = this._writableState;
                        "function" == typeof e ? (n = e,
                            e = null,
                            t = null) : "function" == typeof t && (n = t,
                            t = null),
                        null !== e && void 0 !== e && this.write(e, t),
                        r.corked && (r.corked = 1,
                            this.uncork()),
                        r.ending || r.finished || T(this, r, n)
                    }
                    ,
                    Object.defineProperty(_.prototype, "destroyed", {
                        get: function() {
                            return void 0 !== this._writableState && this._writableState.destroyed
                        },
                        set: function(e) {
                            this._writableState && (this._writableState.destroyed = e)
                        }
                    }),
                    _.prototype.destroy = I.destroy,
                    _.prototype._undestroy = I.undestroy,
                    _.prototype._destroy = function(e, t) {
                        this.end(),
                            t(e)
                    }
            }
        ).call(t, n(146), n(175).setImmediate, function() {
            return this
        }())
    }
    , function(e, t, n) {
        (function(e) {
                function r(e, t) {
                    this._id = e,
                        this._clearFn = t
                }
                var a = "undefined" != typeof e && e || "undefined" != typeof self && self || window
                    , i = Function.prototype.apply;
                t.setTimeout = function() {
                    return new r(i.call(setTimeout, a, arguments),clearTimeout)
                }
                    ,
                    t.setInterval = function() {
                        return new r(i.call(setInterval, a, arguments),clearInterval)
                    }
                    ,
                    t.clearTimeout = t.clearInterval = function(e) {
                        e && e.close()
                    }
                    ,
                    r.prototype.unref = r.prototype.ref = function() {}
                    ,
                    r.prototype.close = function() {
                        this._clearFn.call(a, this._id)
                    }
                    ,
                    t.enroll = function(e, t) {
                        clearTimeout(e._idleTimeoutId),
                            e._idleTimeout = t
                    }
                    ,
                    t.unenroll = function(e) {
                        clearTimeout(e._idleTimeoutId),
                            e._idleTimeout = -1
                    }
                    ,
                    t._unrefActive = t.active = function(e) {
                        clearTimeout(e._idleTimeoutId);
                        var t = e._idleTimeout;
                        t >= 0 && (e._idleTimeoutId = setTimeout(function() {
                            e._onTimeout && e._onTimeout()
                        }, t))
                    }
                    ,
                    n(176),
                    t.setImmediate = "undefined" != typeof self && self.setImmediate || "undefined" != typeof e && e.setImmediate || this && this.setImmediate,
                    t.clearImmediate = "undefined" != typeof self && self.clearImmediate || "undefined" != typeof e && e.clearImmediate || this && this.clearImmediate
            }
        ).call(t, function() {
            return this
        }())
    }
    , function(e, t, n) {
        (function(e, t) {
                !function(e, n) {
                    "use strict";
                    function r(e) {
                        "function" != typeof e && (e = new Function("" + e));
                        for (var t = new Array(arguments.length - 1), n = 0; n < t.length; n++)
                            t[n] = arguments[n + 1];
                        var r = {
                            callback: e,
                            args: t
                        };
                        return f[h] = r,
                            m(h),
                            h++
                    }
                    function a(e) {
                        delete f[e]
                    }
                    function i(e) {
                        var t = e.callback
                            , r = e.args;
                        switch (r.length) {
                            case 0:
                                t();
                                break;
                            case 1:
                                t(r[0]);
                                break;
                            case 2:
                                t(r[0], r[1]);
                                break;
                            case 3:
                                t(r[0], r[1], r[2]);
                                break;
                            default:
                                t.apply(n, r)
                        }
                    }
                    function s(e) {
                        if (p)
                            setTimeout(s, 0, e);
                        else {
                            var t = f[e];
                            if (t) {
                                p = !0;
                                try {
                                    i(t)
                                } finally {
                                    a(e),
                                        p = !1
                                }
                            }
                        }
                    }
                    function o() {
                        m = function(e) {
                            t.nextTick(function() {
                                s(e)
                            })
                        }
                    }
                    function d() {
                        if (e.postMessage && !e.importScripts) {
                            var t = !0
                                , n = e.onmessage;
                            return e.onmessage = function() {
                                t = !1
                            }
                                ,
                                e.postMessage("", "*"),
                                e.onmessage = n,
                                t
                        }
                    }
                    function u() {
                        var t = "setImmediate$" + Math.random() + "$"
                            , n = function(n) {
                            n.source === e && "string" == typeof n.data && 0 === n.data.indexOf(t) && s(+n.data.slice(t.length))
                        };
                        e.addEventListener ? e.addEventListener("message", n, !1) : e.attachEvent("onmessage", n),
                            m = function(n) {
                                e.postMessage(t + n, "*")
                            }
                    }
                    function _() {
                        var e = new MessageChannel;
                        e.port1.onmessage = function(e) {
                            var t = e.data;
                            s(t)
                        }
                            ,
                            m = function(t) {
                                e.port2.postMessage(t)
                            }
                    }
                    function l() {
                        var e = M.documentElement;
                        m = function(t) {
                            var n = M.createElement("script");
                            n.onreadystatechange = function() {
                                s(t),
                                    n.onreadystatechange = null,
                                    e.removeChild(n),
                                    n = null
                            }
                                ,
                                e.appendChild(n)
                        }
                    }
                    function c() {
                        m = function(e) {
                            setTimeout(s, 0, e)
                        }
                    }
                    if (!e.setImmediate) {
                        var m, h = 1, f = {}, p = !1, M = e.document, y = Object.getPrototypeOf && Object.getPrototypeOf(e);
                        y = y && y.setTimeout ? y : e,
                            "[object process]" === {}.toString.call(e.process) ? o() : d() ? u() : e.MessageChannel ? _() : M && "onreadystatechange"in M.createElement("script") ? l() : c(),
                            y.setImmediate = r,
                            y.clearImmediate = a
                    }
                }("undefined" == typeof self ? "undefined" == typeof e ? this : e : self)
            }
        ).call(t, function() {
            return this
        }(), n(146))
    }
    , function(e, t) {
        (function(t) {
                function n(e, t) {
                    function n() {
                        if (!a) {
                            if (r("throwDeprecation"))
                                throw new Error(t);
                            r("traceDeprecation") ? console.trace(t) : console.warn(t),
                                a = !0
                        }
                        return e.apply(this, arguments)
                    }
                    if (r("noDeprecation"))
                        return e;
                    var a = !1;
                    return n
                }
                function r(e) {
                    try {
                        if (!t.localStorage)
                            return !1
                    } catch (n) {
                        return !1
                    }
                    var r = t.localStorage[e];
                    return null != r && "true" === String(r).toLowerCase()
                }
                e.exports = n
            }
        ).call(t, function() {
            return this
        }())
    }
    , function(e, t, n) {
        "use strict";
        function r(e) {
            if (!e)
                return "utf8";
            for (var t; ; )
                switch (e) {
                    case "utf8":
                    case "utf-8":
                        return "utf8";
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return "utf16le";
                    case "latin1":
                    case "binary":
                        return "latin1";
                    case "base64":
                    case "ascii":
                    case "hex":
                        return e;
                    default:
                        if (t)
                            return;
                        e = ("" + e).toLowerCase(),
                            t = !0
                }
        }
        function a(e) {
            var t = r(e);
            if ("string" != typeof t && (y.isEncoding === L || !L(e)))
                throw new Error("Unknown encoding: " + e);
            return t || e
        }
        function i(e) {
            this.encoding = a(e);
            var t;
            switch (this.encoding) {
                case "utf16le":
                    this.text = c,
                        this.end = m,
                        t = 4;
                    break;
                case "utf8":
                    this.fillLast = u,
                        t = 4;
                    break;
                case "base64":
                    this.text = h,
                        this.end = f,
                        t = 3;
                    break;
                default:
                    return this.write = p,
                        void (this.end = M)
            }
            this.lastNeed = 0,
                this.lastTotal = 0,
                this.lastChar = y.allocUnsafe(t)
        }
        function s(e) {
            return e <= 127 ? 0 : e >> 5 === 6 ? 2 : e >> 4 === 14 ? 3 : e >> 3 === 30 ? 4 : e >> 6 === 2 ? -1 : -2
        }
        function o(e, t, n) {
            var r = t.length - 1;
            if (r < n)
                return 0;
            var a = s(t[r]);
            return a >= 0 ? (a > 0 && (e.lastNeed = a - 1),
                a) : --r < n || a === -2 ? 0 : (a = s(t[r]),
                a >= 0 ? (a > 0 && (e.lastNeed = a - 2),
                    a) : --r < n || a === -2 ? 0 : (a = s(t[r]),
                    a >= 0 ? (a > 0 && (2 === a ? a = 0 : e.lastNeed = a - 3),
                        a) : 0))
        }
        function d(e, t, n) {
            if (128 !== (192 & t[0]))
                return e.lastNeed = 0,
                    "�";
            if (e.lastNeed > 1 && t.length > 1) {
                if (128 !== (192 & t[1]))
                    return e.lastNeed = 1,
                        "�";
                if (e.lastNeed > 2 && t.length > 2 && 128 !== (192 & t[2]))
                    return e.lastNeed = 2,
                        "�"
            }
        }
        function u(e) {
            var t = this.lastTotal - this.lastNeed
                , n = d(this, e, t);
            return void 0 !== n ? n : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed),
                this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length),
                void (this.lastNeed -= e.length))
        }
        function _(e, t) {
            var n = o(this, e, t);
            if (!this.lastNeed)
                return e.toString("utf8", t);
            this.lastTotal = n;
            var r = e.length - (n - this.lastNeed);
            return e.copy(this.lastChar, 0, r),
                e.toString("utf8", t, r)
        }
        function l(e) {
            var t = e && e.length ? this.write(e) : "";
            return this.lastNeed ? t + "�" : t
        }
        function c(e, t) {
            if ((e.length - t) % 2 === 0) {
                var n = e.toString("utf16le", t);
                if (n) {
                    var r = n.charCodeAt(n.length - 1);
                    if (r >= 55296 && r <= 56319)
                        return this.lastNeed = 2,
                            this.lastTotal = 4,
                            this.lastChar[0] = e[e.length - 2],
                            this.lastChar[1] = e[e.length - 1],
                            n.slice(0, -1)
                }
                return n
            }
            return this.lastNeed = 1,
                this.lastTotal = 2,
                this.lastChar[0] = e[e.length - 1],
                e.toString("utf16le", t, e.length - 1)
        }
        function m(e) {
            var t = e && e.length ? this.write(e) : "";
            if (this.lastNeed) {
                var n = this.lastTotal - this.lastNeed;
                return t + this.lastChar.toString("utf16le", 0, n)
            }
            return t
        }
        function h(e, t) {
            var n = (e.length - t) % 3;
            return 0 === n ? e.toString("base64", t) : (this.lastNeed = 3 - n,
                this.lastTotal = 3,
                1 === n ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2],
                    this.lastChar[1] = e[e.length - 1]),
                e.toString("base64", t, e.length - n))
        }
        function f(e) {
            var t = e && e.length ? this.write(e) : "";
            return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t
        }
        function p(e) {
            return e.toString(this.encoding)
        }
        function M(e) {
            return e && e.length ? this.write(e) : ""
        }
        var y = n(167).Buffer
            , L = y.isEncoding || function(e) {
                switch (e = "" + e,
                e && e.toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                    case "raw":
                        return !0;
                    default:
                        return !1
                }
            }
        ;
        t.StringDecoder = i,
            i.prototype.write = function(e) {
                if (0 === e.length)
                    return "";
                var t, n;
                if (this.lastNeed) {
                    if (t = this.fillLast(e),
                    void 0 === t)
                        return "";
                    n = this.lastNeed,
                        this.lastNeed = 0
                } else
                    n = 0;
                return n < e.length ? t ? t + this.text(e, n) : this.text(e, n) : t || ""
            }
            ,
            i.prototype.end = l,
            i.prototype.text = _,
            i.prototype.fillLast = function(e) {
                return this.lastNeed <= e.length ? (e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed),
                    this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length),
                    void (this.lastNeed -= e.length))
            }
    }
    , function(e, t, n) {
        "use strict";
        function r(e, t) {
            var n = this._transformState;
            n.transforming = !1;
            var r = n.writecb;
            if (!r)
                return this.emit("error", new Error("write callback called multiple times"));
            n.writechunk = null,
                n.writecb = null,
            null != t && this.push(t),
                r(e);
            var a = this._readableState;
            a.reading = !1,
            (a.needReadable || a.length < a.highWaterMark) && this._read(a.highWaterMark)
        }
        function a(e) {
            return this instanceof a ? (o.call(this, e),
                this._transformState = {
                    afterTransform: r.bind(this),
                    needTransform: !1,
                    transforming: !1,
                    writecb: null,
                    writechunk: null,
                    writeencoding: null
                },
                this._readableState.needReadable = !0,
                this._readableState.sync = !1,
            e && ("function" == typeof e.transform && (this._transform = e.transform),
            "function" == typeof e.flush && (this._flush = e.flush)),
                void this.on("prefinish", i)) : new a(e)
        }
        function i() {
            var e = this;
            "function" == typeof this._flush ? this._flush(function(t, n) {
                s(e, t, n)
            }) : s(this, null, null)
        }
        function s(e, t, n) {
            if (t)
                return e.emit("error", t);
            if (null != n && e.push(n),
                e._writableState.length)
                throw new Error("Calling transform done when ws.length != 0");
            if (e._transformState.transforming)
                throw new Error("Calling transform done when still transforming");
            return e.push(null)
        }
        e.exports = a;
        var o = n(173)
            , d = n(168);
        d.inherits = n(148),
            d.inherits(a, o),
            a.prototype.push = function(e, t) {
                return this._transformState.needTransform = !1,
                    o.prototype.push.call(this, e, t)
            }
            ,
            a.prototype._transform = function(e, t, n) {
                throw new Error("_transform() is not implemented")
            }
            ,
            a.prototype._write = function(e, t, n) {
                var r = this._transformState;
                if (r.writecb = n,
                    r.writechunk = e,
                    r.writeencoding = t,
                    !r.transforming) {
                    var a = this._readableState;
                    (r.needTransform || a.needReadable || a.length < a.highWaterMark) && this._read(a.highWaterMark)
                }
            }
            ,
            a.prototype._read = function(e) {
                var t = this._transformState;
                null !== t.writechunk && t.writecb && !t.transforming ? (t.transforming = !0,
                    this._transform(t.writechunk, t.writeencoding, t.afterTransform)) : t.needTransform = !0
            }
            ,
            a.prototype._destroy = function(e, t) {
                var n = this;
                o.prototype._destroy.call(this, e, function(e) {
                    t(e),
                        n.emit("close")
                })
            }
    }
    , function(e, t, n) {
        "use strict";
        function r(e) {
            return this instanceof r ? void a.call(this, e) : new r(e)
        }
        e.exports = r;
        var a = n(179)
            , i = n(168);
        i.inherits = n(148),
            i.inherits(r, a),
            r.prototype._transform = function(e, t, n) {
                n(null, e)
            }
    }
    , function(e, t, n) {
        e.exports = n(174)
    }
    , function(e, t, n) {
        e.exports = n(173)
    }
    , function(e, t, n) {
        e.exports = n(163).Transform
    }
    , function(e, t, n) {
        e.exports = n(163).PassThrough
    }
    , function(e, t) {
        t["aes-128-ecb"] = {
            cipher: "AES",
            key: 128,
            iv: 0,
            mode: "ECB",
            type: "block"
        },
            t["aes-192-ecb"] = {
                cipher: "AES",
                key: 192,
                iv: 0,
                mode: "ECB",
                type: "block"
            },
            t["aes-256-ecb"] = {
                cipher: "AES",
                key: 256,
                iv: 0,
                mode: "ECB",
                type: "block"
            },
            t["aes-128-cbc"] = {
                cipher: "AES",
                key: 128,
                iv: 16,
                mode: "CBC",
                type: "block"
            },
            t["aes-192-cbc"] = {
                cipher: "AES",
                key: 192,
                iv: 16,
                mode: "CBC",
                type: "block"
            },
            t["aes-256-cbc"] = {
                cipher: "AES",
                key: 256,
                iv: 16,
                mode: "CBC",
                type: "block"
            },
            t.aes128 = t["aes-128-cbc"],
            t.aes192 = t["aes-192-cbc"],
            t.aes256 = t["aes-256-cbc"],
            t["aes-128-cfb"] = {
                cipher: "AES",
                key: 128,
                iv: 16,
                mode: "CFB",
                type: "stream"
            },
            t["aes-192-cfb"] = {
                cipher: "AES",
                key: 192,
                iv: 16,
                mode: "CFB",
                type: "stream"
            },
            t["aes-256-cfb"] = {
                cipher: "AES",
                key: 256,
                iv: 16,
                mode: "CFB",
                type: "stream"
            },
            t["aes-128-ofb"] = {
                cipher: "AES",
                key: 128,
                iv: 16,
                mode: "OFB",
                type: "stream"
            },
            t["aes-192-ofb"] = {
                cipher: "AES",
                key: 192,
                iv: 16,
                mode: "OFB",
                type: "stream"
            },
            t["aes-256-ofb"] = {
                cipher: "AES",
                key: 256,
                iv: 16,
                mode: "OFB",
                type: "stream"
            },
            t["aes-128-ctr"] = {
                cipher: "AES",
                key: 128,
                iv: 16,
                mode: "CTR",
                type: "stream"
            },
            t["aes-192-ctr"] = {
                cipher: "AES",
                key: 192,
                iv: 16,
                mode: "CTR",
                type: "stream"
            },
            t["aes-256-ctr"] = {
                cipher: "AES",
                key: 256,
                iv: 16,
                mode: "CTR",
                type: "stream"
            }
    }
    , function(e, t, n) {
        (function(t) {
                e.exports = function(e, n, r, a) {
                    r /= 8,
                        a = a || 0;
                    for (var i, s, o, d = 0, u = 0, _ = new t(r), l = new t(a), c = 0; ; ) {
                        if (i = e.createHash("md5"),
                        c++ > 0 && i.update(s),
                            i.update(n),
                            s = i.digest(),
                            o = 0,
                        r > 0)
                            for (; ; ) {
                                if (0 === r)
                                    break;
                                if (o === s.length)
                                    break;
                                _[d++] = s[o],
                                    r--,
                                    o++
                            }
                        if (a > 0 && o !== s.length)
                            for (; ; ) {
                                if (0 === a)
                                    break;
                                if (o === s.length)
                                    break;
                                l[u++] = s[o],
                                    a--,
                                    o++
                            }
                        if (0 === r && 0 === a)
                            break
                    }
                    for (o = 0; o < s.length; o++)
                        s[o] = 0;
                    return {
                        key: _,
                        iv: l
                    }
                }
            }
        ).call(t, n(135).Buffer)
    }
    , function(e, t, n) {
        (function(t) {
                function r(e, n, s, o) {
                    return this instanceof r ? (i.call(this),
                        this._cipher = new a.AES(n),
                        this._prev = new t(s.length),
                        this._cache = new t(""),
                        this._secCache = new t(""),
                        this._decrypt = o,
                        s.copy(this._prev),
                        void (this._mode = e)) : new r(e,n,s)
                }
                var a = n(159)
                    , i = n(160)
                    , s = n(148);
                s(r, i),
                    e.exports = r,
                    r.prototype._transform = function(e, t, n) {
                        n(null, this._mode.encrypt(this, e, this._decrypt))
                    }
                    ,
                    r.prototype._flush = function(e) {
                        this._cipher.scrub(),
                            e()
                    }
            }
        ).call(t, n(135).Buffer)
    }
    , function(e, t) {
        t.encrypt = function(e, t) {
            return e._cipher.encryptBlock(t)
        }
            ,
            t.decrypt = function(e, t) {
                return e._cipher.decryptBlock(t)
            }
    }
    , function(e, t, n) {
        var r = n(190);
        t.encrypt = function(e, t) {
            var n = r(t, e._prev);
            return e._prev = e._cipher.encryptBlock(n),
                e._prev
        }
            ,
            t.decrypt = function(e, t) {
                var n = e._prev;
                e._prev = t;
                var a = e._cipher.decryptBlock(t);
                return r(a, n)
            }
    }
    , function(e, t, n) {
        (function(t) {
                function n(e, n) {
                    for (var r = Math.min(e.length, n.length), a = new t(r), i = -1; ++i < r; )
                        a.writeUInt8(e[i] ^ n[i], i);
                    return a
                }
                e.exports = n
            }
        ).call(t, n(135).Buffer)
    }
    , function(e, t, n) {
        (function(e) {
                function r(t, n, r) {
                    var i = n.length
                        , s = a(n, t._cache);
                    return t._cache = t._cache.slice(i),
                        t._prev = e.concat([t._prev, r ? n : s]),
                        s
                }
                var a = n(190);
                t.encrypt = function(t, n, a) {
                    for (var i, s = new e(""); n.length; ) {
                        if (0 === t._cache.length && (t._cache = t._cipher.encryptBlock(t._prev),
                            t._prev = new e("")),
                            !(t._cache.length <= n.length)) {
                            s = e.concat([s, r(t, n, a)]);
                            break
                        }
                        i = t._cache.length,
                            s = e.concat([s, r(t, n.slice(0, i), a)]),
                            n = n.slice(i)
                    }
                    return s
                }
            }
        ).call(t, n(135).Buffer)
    }
    , function(e, t, n) {
        (function(e) {
                function r(e) {
                    return e._prev = e._cipher.encryptBlock(e._prev),
                        e._prev
                }
                var a = n(190);
                t.encrypt = function(t, n) {
                    for (; t._cache.length < n.length; )
                        t._cache = e.concat([t._cache, r(t)]);
                    var i = t._cache.slice(0, n.length);
                    return t._cache = t._cache.slice(n.length),
                        a(n, i)
                }
            }
        ).call(t, n(135).Buffer)
    }
    , function(e, t, n) {
        (function(e) {
                function r(e) {
                    var t = e._cipher.encryptBlock(e._prev);
                    return a(e._prev),
                        t
                }
                function a(e) {
                    for (var t, n = e.length; n--; ) {
                        if (t = e.readUInt8(n),
                        255 !== t) {
                            t++,
                                e.writeUInt8(t, n);
                            break
                        }
                        e.writeUInt8(0, n)
                    }
                }
                var i = n(190);
                t.encrypt = function(t, n) {
                    for (; t._cache.length < n.length; )
                        t._cache = e.concat([t._cache, r(t)]);
                    var a = t._cache.slice(0, n.length);
                    return t._cache = t._cache.slice(n.length),
                        i(n, a)
                }
            }
        ).call(t, n(135).Buffer)
    }
    , function(e, t, n) {
        (function(t) {
                function r(e, n, i) {
                    return this instanceof r ? (o.call(this),
                        this._cache = new a,
                        this._last = void 0,
                        this._cipher = new s.AES(n),
                        this._prev = new t(i.length),
                        i.copy(this._prev),
                        void (this._mode = e)) : new r(e,n,i)
                }
                function a() {
                    return this instanceof a ? void (this.cache = new t("")) : new a
                }
                function i(e) {
                    var t = e[15];
                    if (16 !== t)
                        return e.slice(0, 16 - t)
                }
                var s = n(159)
                    , o = n(160)
                    , d = n(148)
                    , u = n(185)
                    , _ = n(187)
                    , l = n(186);
                d(r, o),
                    r.prototype._transform = function(e, t, n) {
                        this._cache.add(e);
                        for (var r, a; r = this._cache.get(); )
                            a = this._mode.decrypt(this, r),
                                this.push(a);
                        n()
                    }
                    ,
                    r.prototype._flush = function(e) {
                        var t = this._cache.flush();
                        return t ? (this.push(i(this._mode.decrypt(this, t))),
                            void e()) : e
                    }
                    ,
                    a.prototype.add = function(e) {
                        this.cache = t.concat([this.cache, e])
                    }
                    ,
                    a.prototype.get = function() {
                        if (this.cache.length > 16) {
                            var e = this.cache.slice(0, 16);
                            return this.cache = this.cache.slice(16),
                                e
                        }
                        return null
                    }
                    ,
                    a.prototype.flush = function() {
                        if (this.cache.length)
                            return this.cache
                    }
                ;
                var c = {
                    ECB: n(188),
                    CBC: n(189),
                    CFB: n(191),
                    OFB: n(192),
                    CTR: n(193)
                };
                e.exports = function(e) {
                    function n(e, n, a) {
                        var i = u[e];
                        if (!i)
                            throw new TypeError("invalid suite type");
                        if ("string" == typeof a && (a = new t(a)),
                        "string" == typeof n && (n = new t(n)),
                        n.length !== i.key / 8)
                            throw new TypeError("invalid key length " + n.length);
                        if (a.length !== i.iv)
                            throw new TypeError("invalid iv length " + a.length);
                        return "stream" === i.type ? new _(c[i.mode],n,a,!0) : new r(c[i.mode],n,a)
                    }
                    function a(t, r) {
                        var a = u[t];
                        if (!a)
                            throw new TypeError("invalid suite type");
                        var i = l(e, r, a.key, a.iv);
                        return n(t, i.key, i.iv)
                    }
                    return {
                        createDecipher: a,
                        createDecipheriv: n
                    }
                }
            }
        ).call(t, n(135).Buffer)
    }
    , function(e, t, n) {
        var r = n(196);
        "string" == typeof r && (r = [[e.id, r, ""]]);
        n(197)(r, {
            sourceMap: !0
        });
        r.locals && (e.exports = r.locals)
    }
    , function(e, t) {
        e.exports = ".easemobim-mobile-html{position:relative!important;width:100%!important;height:100%!important;padding:0!important;margin:0!important}.easemobim-mobile-body{position:absolute;top:0!important;left:0!important;width:100%!important;height:100%!important;overflow:hidden!important;padding:0!important;margin:0!important}.easemobim-mobile-body>*{display:none!important}.easemobim-mobile-body>.easemobim-chat-panel{display:block!important}.easemobim-chat-panel{z-index:1000;overflow:hidden;position:fixed;border:none;width:0;height:0;-webkit-transition:all .01s;-moz-transition:all .01s;transition:all .01s;box-shadow:0 4px 8px rgba(0,0,0,.2);border-radius:4px}.easemobim-chat-panel.easemobim-minimized{border:none;box-shadow:none;height:37px!important;width:104px!important}.easemobim-chat-panel.easemobim-minimized.easemobim-has-prompt{width:360px!important;height:270px!important}.easemobim-chat-panel.easemobim-mobile{position:absolute!important;width:100%!important;height:100%!important;left:0!important;top:0!important;border-radius:0;box-shadow:none}.easemobim-chat-panel.easemobim-mobile.easemobim-minimized{height:0!important;width:0!important}.easemobim-chat-panel.easemobim-hide{visibility:hidden;width:1px!important;height:1px!important;border:none}.easemobim-chat-panel.easemobim-dragging{display:none}.easemobim-chat-panel.easemobim-big{width:720px}.easemobim-iframe-shadow{left:auto;top:auto;display:none;cursor:move;z-index:16777270;position:fixed;border:none;box-shadow:0 4px 8px rgba(0,0,0,.2);border-radius:4px;background-size:100% 100%;background-repeat:no-repeat}.easemobim-iframe-shadow.easemobim-dragging{display:block}.easemobim-prompt-wrapper{display:none;z-index:16777271;position:fixed;width:30px;height:30px;padding:10px;top:0;bottom:0;margin:auto;left:0;right:0;color:#fff;background-color:#000;text-align:center;border-radius:4px;-webkit-transition:all .5s;-moz-transition:all .5s;transition:all .5s;opacity:.7;-moz-box-sizing:content-box;box-sizing:content-box}.easemobim-prompt-wrapper>.loading{position:relative;width:30px;height:30px;display:inline-block;overflow:hidden;margin:0;padding:0;-webkit-animation:easemobim-loading-frame 1s linear infinite;-moz-animation:easemobim-loading-frame 1s linear infinite;animation:easemobim-loading-frame 1s linear infinite}@-webkit-keyframes easemobim-loading-frame{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@-moz-keyframes easemobim-loading-frame{0%{-moz-transform:rotate(0);transform:rotate(0)}to{-moz-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes easemobim-loading-frame{0%{-webkit-transform:rotate(0);-moz-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);-moz-transform:rotate(1turn);transform:rotate(1turn)}}.easemobim-pc-img-view{display:none;position:fixed;top:0;left:0;width:100%;height:100%;z-index:16777270}.easemobim-pc-img-view>.shadow{position:fixed;top:0;left:0;width:100%;height:100%;background-color:#000}.easemobim-pc-img-view>img{max-width:100%;max-height:100%;position:absolute;margin:auto;top:0;right:0;bottom:0;left:0}.easemob-invite-box{position:absolute;top:50%;left:50%;width:400px;height:200px;border:1px solid #e6eaf2;padding:0;border-radius:0;margin-left:-200px;margin-top:-100px;background:#fff;display:none}.easemob-invite-box .invite-logo{width:100%;height:45px;text-align:center;margin-top:30px}.easemob-invite-box .invite-logo>img{max-width:45px;max-height:45px}.easemob-invite-box .invite-text{text-align:center;margin:0 20px;color:gray;font-size:12px;height:65px;line-height:65px}.easemob-invite-box .invite-text>span{display:inline-block;line-height:25px;vertical-align:middle}.easemob-invite-box .button{position:absolute;bottom:0;width:100%;height:50px;line-height:50px;border-radius:0;margin:0;text-align:center;cursor:pointer;color:#fff;background-color:#1ba8ed}.easemob-invite-box>span{position:absolute;right:15px;top:5px;color:gray;cursor:pointer;font-size:20px}.easemob-invite-box .theme_sky{background-color:#42b8f4}.easemob-invite-box .theme_tree{background-color:#00b45f}.easemob-invite-box .theme_house{background-color:#b50e03}.easemob-invite-box .theme_cherry{background-color:#ffa0be}.easemob-invite-box .theme_orange{background-color:#f49300}.easemob-invite-box .theme_grass{background-color:#9ec100}.easemob-invite-box .theme_sea{background-color:#00cccd}.easemob-invite-box .theme_mountion{background-color:#5b799a}.easemob-invite-box .theme_moon{background-color:#3977cf}.easemob-invite-box .theme_business{background-color:#000}.easemob-invite-box .theme_lake{background-color:#06a89c}.easemob-invite-box.easemob-mobile-invite-box{width:280px;height:140px;margin-left:-140px;margin-top:-70px}.easemob-invite-box.easemob-mobile-invite-box .invite-logo{margin-top:20px;height:35px}.easemob-invite-box.easemob-mobile-invite-box .invite-logo>img{max-width:35px;max-height:35px}.easemob-invite-box.easemob-mobile-invite-box .invite-text{margin:0 5px;color:gray;font-size:12px;height:45px;line-height:45px}.easemob-invite-box.easemob-mobile-invite-box>div.button{height:35px;line-height:35px}"
    }
    , function(e, t, n) {
        function r(e, t) {
            for (var n = 0; n < e.length; n++) {
                var r = e[n]
                    , a = c[r.id];
                if (a) {
                    a.refs++;
                    for (var i = 0; i < a.parts.length; i++)
                        a.parts[i](r.parts[i]);
                    for (; i < r.parts.length; i++)
                        a.parts.push(d(r.parts[i], t))
                } else {
                    for (var s = [], i = 0; i < r.parts.length; i++)
                        s.push(d(r.parts[i], t));
                    c[r.id] = {
                        id: r.id,
                        refs: 1,
                        parts: s
                    }
                }
            }
        }
        function a(e) {
            for (var t = [], n = {}, r = 0; r < e.length; r++) {
                var a = e[r]
                    , i = a[0]
                    , s = a[1]
                    , o = a[2]
                    , d = a[3]
                    , u = {
                    css: s,
                    media: o,
                    sourceMap: d
                };
                n[i] ? n[i].parts.push(u) : t.push(n[i] = {
                    id: i,
                    parts: [u]
                })
            }
            return t
        }
        function i(e, t) {
            var n = Array.prototype.slice.call(arguments, 2);
            return function() {
                var r = Array.prototype.slice.call(arguments);
                e.apply(t, n.concat(r))
            }
        }
        function s() {
            var e = document.createElement("style")
                , t = f();
            return e.type = "text/css",
                t.appendChild(e),
                e
        }
        function o() {
            var e = document.createElement("link")
                , t = f();
            return e.rel = "stylesheet",
                t.appendChild(e),
                e
        }
        function d(e, t) {
            var n, r, a;
            if (t.singleton) {
                var d = M++;
                n = p || (p = s()),
                    r = i(u, null, n, d, !1),
                    a = i(u, null, n, d, !0)
            } else
                e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n = o(),
                        r = i(l, null, n),
                        a = function() {
                            n.parentNode.removeChild(n),
                            n.href && URL.revokeObjectURL(n.href)
                        }
                ) : (n = s(),
                        r = i(_, null, n),
                        a = function() {
                            n.parentNode.removeChild(n)
                        }
                );
            return r(e),
                function(t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap)
                            return;
                        r(e = t)
                    } else
                        a()
                }
        }
        function u(e, t, n, r) {
            var a = n ? "" : r.css;
            if (e.styleSheet)
                e.styleSheet.cssText = y(t, a);
            else {
                var i = document.createTextNode(a)
                    , s = e.childNodes;
                s[t] && e.removeChild(s[t]),
                    s.length ? e.insertBefore(i, s[t]) : e.appendChild(i)
            }
        }
        function _(e, t) {
            var n = t.css
                , r = t.media;
            t.sourceMap;
            if (r && e.setAttribute("media", r),
                e.styleSheet)
                e.styleSheet.cssText = n;
            else {
                for (; e.firstChild; )
                    e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(n))
            }
        }
        function l(e, t) {
            var n = t.css
                , r = (t.media,
                t.sourceMap);
            r && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r)))) + " */");
            var a = new Blob([n],{
                type: "text/css"
            })
                , i = e.href;
            e.href = URL.createObjectURL(a),
            i && URL.revokeObjectURL(i)
        }
        var c = {}
            , m = function(e) {
            var t;
            return function() {
                return "undefined" == typeof t && (t = e.apply(this, arguments)),
                    t
            }
        }
            , h = m(function() {
            return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())
        })
            , f = m(function() {
            return document.head || document.getElementsByTagName("head")[0]
        })
            , p = null
            , M = 0;
        e.exports = function(e, t) {
            t = t || {},
            "undefined" == typeof t.singleton && (t.singleton = h());
            var n = a(e);
            return r(n, t),
                function(e) {
                    for (var i = [], s = 0; s < n.length; s++) {
                        var o = n[s]
                            , d = c[o.id];
                        d.refs--,
                            i.push(d)
                    }
                    if (e) {
                        var u = a(e);
                        r(u, t)
                    }
                    for (var s = 0; s < i.length; s++) {
                        var d = i[s];
                        if (0 === d.refs) {
                            for (var _ = 0; _ < d.parts.length; _++)
                                d.parts[_]();
                            delete c[d.id]
                        }
                    }
                }
        }
        ;
        var y = function() {
            var e = [];
            return function(t, n) {
                var r = [];
                e[t] = n;
                for (var a = 0; a < e.length; a++)
                    e[a] && r.push(e[a]);
                return r.join("\n")
            }
        }()
    }
]);
