! function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t(require("react-is"), require("react")) : "function" == typeof define && define.amd ? define(["react-is", "react"], t) : (e = e || self).styled = t(e.ReactIs, e.React)
}(this, (function(e, t) {
    "use strict";
    console.log('react-is:',e);
    console.log('react:',t);

    var r = "default" in e ? e.default : e,
        n = "default" in t ? t.default : t;

    function o(e) {
        return e && "string" == typeof e.styledComponentId
    }
    var a = function(e, t) {
            for (var r = [e[0]], n = 0, o = t.length; n < o; n += 1) r.push(t[n], e[n + 1]);
            return r
        },
        i = function(t) {
            return null !== t && "object" == typeof t && "[object Object]" === (t.toString ? t.toString() : Object.prototype.toString.call(t)) && !e.typeOf(t)
        },
        s = Object.freeze([]),
        c = Object.freeze({});

    function l(e) {
        return "function" == typeof e
    }

    function u(e) {
        return "string" == typeof e && e || e.displayName || e.name || "Component"
    }

    function d() {
        return (d = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }).apply(this, arguments)
    }
    var h = "undefined" != typeof process && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled",
        f = "undefined" != typeof window && "HTMLElement" in window,
        p = Boolean("boolean" == typeof SC_DISABLE_SPEEDY ? SC_DISABLE_SPEEDY : "undefined" != typeof process && void 0 !== process.env.REACT_APP_SC_DISABLE_SPEEDY && "" !== process.env.REACT_APP_SC_DISABLE_SPEEDY ? "false" !== process.env.REACT_APP_SC_DISABLE_SPEEDY && process.env.REACT_APP_SC_DISABLE_SPEEDY : "undefined" == typeof process || void 0 === process.env.SC_DISABLE_SPEEDY || "" === process.env.SC_DISABLE_SPEEDY || "false" !== process.env.SC_DISABLE_SPEEDY && process.env.SC_DISABLE_SPEEDY),
        m = {},
        g = {
            1: "Cannot create styled-component for component: %s.\n\n",
            2: "Can't collect styles once you've consumed a `ServerStyleSheet`'s styles! `ServerStyleSheet` is a one off instance for each server-side render cycle.\n\n- Are you trying to reuse it across renders?\n- Are you accidentally calling collectStyles twice?\n\n",
            3: "Streaming SSR is only supported in a Node.js environment; Please do not try to call this method in the browser.\n\n",
            4: "The `StyleSheetManager` expects a valid target or sheet prop!\n\n- Does this error occur on the client and is your target falsy?\n- Does this error occur on the server and is the sheet falsy?\n\n",
            5: "The clone method cannot be used on the client!\n\n- Are you running in a client-like environment on the server?\n- Are you trying to run SSR on the client?\n\n",
            6: "Trying to insert a new style tag, but the given Node is unmounted!\n\n- Are you using a custom target that isn't mounted?\n- Does your document not have a valid head element?\n- Have you accidentally removed a style tag manually?\n\n",
            7: 'ThemeProvider: Please return an object from your "theme" prop function, e.g.\n\n```js\ntheme={() => ({})}\n```\n\n',
            8: 'ThemeProvider: Please make your "theme" prop an object.\n\n',
            9: "Missing document `<head>`\n\n",
            10: "Cannot find a StyleSheet instance. Usually this happens if there are multiple copies of styled-components loaded at once. Check out this issue for how to troubleshoot and fix the common cases where this situation can happen: https://github.com/styled-components/styled-components/issues/1941#issuecomment-417862021\n\n",
            11: "_This error was replaced with a dev-time warning, it will be deleted for v4 final._ [createGlobalStyle] received children which will not be rendered. Please use the component without passing children elements.\n\n",
            12: "It seems you are interpolating a keyframe declaration (%s) into an untagged string. This was supported in styled-components v3, but is not longer supported in v4 as keyframes are now injected on-demand. Please wrap your string in the css\\`\\` helper which ensures the styles are injected correctly. See https://www.styled-components.com/docs/api#css\n\n",
            13: "%s is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details.\n\n",
            14: 'ThemeProvider: "theme" prop is required.\n\n',
            15: "A stylis plugin has been supplied that is not named. We need a name for each plugin to be able to prevent styling collisions between different stylis configurations within the same app. Before you pass your plugin to `<StyleSheetManager stylisPlugins={[]}>`, please make sure each plugin is uniquely-named, e.g.\n\n```js\nObject.defineProperty(importedPlugin, 'name', { value: 'some-unique-name' });\n```\n\n",
            16: "Reached the limit of how many styled components may be created at group %s.\nYou may only create up to 1,073,741,824 components. If you're creating components dynamically,\nas for instance in your render method then you may be running into this limitation.\n\n",
            17: "CSSStyleSheet could not be found on HTMLStyleElement.\nHas styled-components' style tag been unmounted or altered by another script?\n"
        };

    function y() {
        for (var e = arguments.length <= 0 ? void 0 : arguments[0], t = [], r = 1, n = arguments.length; r < n; r += 1) t.push(r < 0 || arguments.length <= r ? void 0 : arguments[r]);
        return t.forEach((function(t) {
            e = e.replace(/%[a-z]/, t)
        })), e
    }

    function v(e) {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
        throw new Error(y.apply(void 0, [g[e]].concat(r)).trim())
    }
    var b = function() {
            function e(e) {
                this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = e
            }
            var t = e.prototype;
            return t.indexOfGroup = function(e) {
                for (var t = 0, r = 0; r < e; r++) t += this.groupSizes[r];
                return t
            }, t.insertRules = function(e, t) {
                if (e >= this.groupSizes.length) {
                    for (var r = this.groupSizes, n = r.length, o = n; e >= o;)(o <<= 1) < 0 && v(16, "" + e);
                    this.groupSizes = new Uint32Array(o), this.groupSizes.set(r), this.length = o;
                    for (var a = n; a < o; a++) this.groupSizes[a] = 0
                }
                for (var i = this.indexOfGroup(e + 1), s = 0, c = t.length; s < c; s++) this.tag.insertRule(i, t[s]) && (this.groupSizes[e]++, i++)
            }, t.clearGroup = function(e) {
                if (e < this.length) {
                    var t = this.groupSizes[e],
                        r = this.indexOfGroup(e),
                        n = r + t;
                    this.groupSizes[e] = 0;
                    for (var o = r; o < n; o++) this.tag.deleteRule(r)
                }
            }, t.getGroup = function(e) {
                var t = "";
                if (e >= this.length || 0 === this.groupSizes[e]) return t;
                for (var r = this.groupSizes[e], n = this.indexOfGroup(e), o = n + r, a = n; a < o; a++) t += this.tag.getRule(a) + "/*!sc*/\n";
                return t
            }, e
        }(),
        w = new Map,
        S = new Map,
        k = 1,
        C = function(e) {
            if (w.has(e)) return w.get(e);
            for (; S.has(k);) k++;
            var t = k++;
            return ((0 | t) < 0 || t > 1 << 30) && v(16, "" + t), w.set(e, t), S.set(t, e), t
        },
        A = function(e) {
            return S.get(e)
        },
        x = function(e, t) {
            t >= k && (k = t + 1), w.set(e, t), S.set(t, e)
        },
        P = "style[" + h + '][data-styled-version="5.3.5"]',
        I = new RegExp("^" + h + '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),
        R = function(e, t, r) {
            for (var n, o = r.split(","), a = 0, i = o.length; a < i; a++)(n = o[a]) && e.registerName(t, n)
        },
        O = function(e, t) {
            for (var r = (t.textContent || "").split("/*!sc*/\n"), n = [], o = 0, a = r.length; o < a; o++) {
                var i = r[o].trim();
                if (i) {
                    var s = i.match(I);
                    if (s) {
                        var c = 0 | parseInt(s[1], 10),
                            l = s[2];
                        0 !== c && (x(l, c), R(e, l, s[3]), e.getTag().insertRules(c, n)), n.length = 0
                    } else n.push(i)
                }
            }
        },
        T = function() {
            return "undefined" != typeof window && void 0 !== window.__webpack_nonce__ ? window.__webpack_nonce__ : null
        },
        _ = function(e) {
            var t = document.head,
                r = e || t,
                n = document.createElement("style"),
                o = function(e) {
                    for (var t = e.childNodes, r = t.length; r >= 0; r--) {
                        var n = t[r];
                        if (n && 1 === n.nodeType && n.hasAttribute(h)) return n
                    }
                }(r),
                a = void 0 !== o ? o.nextSibling : null;
            n.setAttribute(h, "active"), n.setAttribute("data-styled-version", "5.3.5");
            var i = T();
            return i && n.setAttribute("nonce", i), r.insertBefore(n, a), n
        },
        E = function() {
            function e(e) {
                var t = this.element = _(e);
                t.appendChild(document.createTextNode("")), this.sheet = function(e) {
                    if (e.sheet) return e.sheet;
                    for (var t = document.styleSheets, r = 0, n = t.length; r < n; r++) {
                        var o = t[r];
                        if (o.ownerNode === e) return o
                    }
                    v(17)
                }(t), this.length = 0
            }
            var t = e.prototype;
            return t.insertRule = function(e, t) {
                try {
                    return this.sheet.insertRule(t, e), this.length++, !0
                } catch (e) {
                    return !1
                }
            }, t.deleteRule = function(e) {
                this.sheet.deleteRule(e), this.length--
            }, t.getRule = function(e) {
                var t = this.sheet.cssRules[e];
                return void 0 !== t && "string" == typeof t.cssText ? t.cssText : ""
            }, e
        }(),
        j = function() {
            function e(e) {
                var t = this.element = _(e);
                this.nodes = t.childNodes, this.length = 0
            }
            var t = e.prototype;
            return t.insertRule = function(e, t) {
                if (e <= this.length && e >= 0) {
                    var r = document.createTextNode(t),
                        n = this.nodes[e];
                    return this.element.insertBefore(r, n || null), this.length++, !0
                }
                return !1
            }, t.deleteRule = function(e) {
                this.element.removeChild(this.nodes[e]), this.length--
            }, t.getRule = function(e) {
                return e < this.length ? this.nodes[e].textContent : ""
            }, e
        }(),
        N = function() {
            function e(e) {
                this.rules = [], this.length = 0
            }
            var t = e.prototype;
            return t.insertRule = function(e, t) {
                return e <= this.length && (this.rules.splice(e, 0, t), this.length++, !0)
            }, t.deleteRule = function(e) {
                this.rules.splice(e, 1), this.length--
            }, t.getRule = function(e) {
                return e < this.length ? this.rules[e] : ""
            }, e
        }(),
        D = f,
        z = {
            isServer: !f,
            useCSSOMInjection: !p
        },
        M = function() {
            function e(e, t, r) {
                void 0 === e && (e = c), void 0 === t && (t = {}), this.options = d({}, z, {}, e), this.gs = t, this.names = new Map(r), this.server = !!e.isServer, !this.server && f && D && (D = !1, function(e) {
                    for (var t = document.querySelectorAll(P), r = 0, n = t.length; r < n; r++) {
                        var o = t[r];
                        o && "active" !== o.getAttribute(h) && (O(e, o), o.parentNode && o.parentNode.removeChild(o))
                    }
                }(this))
            }
            e.registerId = function(e) {
                return C(e)
            };
            var t = e.prototype;
            return t.reconstructWithOptions = function(t, r) {
                return void 0 === r && (r = !0), new e(d({}, this.options, {}, t), this.gs, r && this.names || void 0)
            }, t.allocateGSInstance = function(e) {
                return this.gs[e] = (this.gs[e] || 0) + 1
            }, t.getTag = function() {
                return this.tag || (this.tag = (r = (t = this.options).isServer, n = t.useCSSOMInjection, o = t.target, e = r ? new N(o) : n ? new E(o) : new j(o), new b(e)));
                var e, t, r, n, o
            }, t.hasNameForId = function(e, t) {
                return this.names.has(e) && this.names.get(e).has(t)
            }, t.registerName = function(e, t) {
                if (C(e), this.names.has(e)) this.names.get(e).add(t);
                else {
                    var r = new Set;
                    r.add(t), this.names.set(e, r)
                }
            }, t.insertRules = function(e, t, r) {
                this.registerName(e, t), this.getTag().insertRules(C(e), r)
            }, t.clearNames = function(e) {
                this.names.has(e) && this.names.get(e).clear()
            }, t.clearRules = function(e) {
                this.getTag().clearGroup(C(e)), this.clearNames(e)
            }, t.clearTag = function() {
                this.tag = void 0
            }, t.toString = function() {
                return function(e) {
                    for (var t = e.getTag(), r = t.length, n = "", o = 0; o < r; o++) {
                        var a = A(o);
                        if (void 0 !== a) {
                            var i = e.names.get(a),
                                s = t.getGroup(o);
                            if (i && s && i.size) {
                                var c = h + ".g" + o + '[id="' + a + '"]',
                                    l = "";
                                void 0 !== i && i.forEach((function(e) {
                                    e.length > 0 && (l += e + ",")
                                })), n += "" + s + c + '{content:"' + l + '"}/*!sc*/\n'
                            }
                        }
                    }
                    return n
                }(this)
            }, e
        }(),
        L = /(a)(d)/gi,
        $ = function(e) {
            return String.fromCharCode(e + (e > 25 ? 39 : 97))
        };

    function F(e) {
        var t, r = "";
        for (t = Math.abs(e); t > 52; t = t / 52 | 0) r = $(t % 52) + r;
        return ($(t % 52) + r).replace(L, "$1-$2")
    }
    var B = function(e, t) {
            for (var r = t.length; r;) e = 33 * e ^ t.charCodeAt(--r);
            return e
        },
        G = function(e) {
            return B(5381, e)
        },
        H = G("5.3.5"),
        Y = function() {
            function e(e, t, r) {
                this.rules = e, this.staticRulesId = "", this.isStatic = !1, this.componentId = t, this.baseHash = B(H, t), this.baseStyle = r, M.registerId(t)
            }
            return e.prototype.generateAndInjectStyles = function(e, t, r) {
                var n = this.componentId,
                    o = [];
                if (this.baseStyle && o.push(this.baseStyle.generateAndInjectStyles(e, t, r)), this.isStatic && !r.hash)
                    if (this.staticRulesId && t.hasNameForId(n, this.staticRulesId)) o.push(this.staticRulesId);
                    else {
                        var a = de(this.rules, e, t, r).join(""),
                            i = F(B(this.baseHash, a) >>> 0);
                        if (!t.hasNameForId(n, i)) {
                            var s = r(a, "." + i, void 0, n);
                            t.insertRules(n, i, s)
                        }
                        o.push(i), this.staticRulesId = i
                    }
                else {
                    for (var c = this.rules.length, l = B(this.baseHash, r.hash), u = "", d = 0; d < c; d++) {
                        var h = this.rules[d];
                        if ("string" == typeof h) u += h, l = B(l, h + d);
                        else if (h) {
                            var f = de(h, e, t, r),
                                p = Array.isArray(f) ? f.join("") : f;
                            l = B(l, p + d), u += p
                        }
                    }
                    if (u) {
                        var m = F(l >>> 0);
                        if (!t.hasNameForId(n, m)) {
                            var g = r(u, "." + m, void 0, n);
                            t.insertRules(n, m, g)
                        }
                        o.push(m)
                    }
                }
                return o.join(" ")
            }, e
        }();

    function q(e) {
        function t(e, t, n) {
            var o = t.trim().split(p);
            t = o;
            var a = o.length,
                i = e.length;
            switch (i) {
                case 0:
                case 1:
                    var s = 0;
                    for (e = 0 === i ? "" : e[0] + " "; s < a; ++s) t[s] = r(e, t[s], n).trim();
                    break;
                default:
                    var c = s = 0;
                    for (t = []; s < a; ++s)
                        for (var l = 0; l < i; ++l) t[c++] = r(e[l] + " ", o[s], n).trim()
            }
            return t
        }

        function r(e, t, r) {
            var n = t.charCodeAt(0);
            switch (33 > n && (n = (t = t.trim()).charCodeAt(0)), n) {
                case 38:
                    return t.replace(m, "$1" + e.trim());
                case 58:
                    return e.trim() + t.replace(m, "$1" + e.trim());
                default:
                    if (0 < 1 * r && 0 < t.indexOf("\f")) return t.replace(m, (58 === e.charCodeAt(0) ? "" : "$1") + e.trim())
            }
            return e + t
        }

        function n(e, t, r, a) {
            var i = e + ";",
                s = 2 * t + 3 * r + 4 * a;
            if (944 === s) {
                e = i.indexOf(":", 9) + 1;
                var c = i.substring(e, i.length - 1).trim();
                return c = i.substring(0, e).trim() + c + ";", 1 === O || 2 === O && o(c, 1) ? "-webkit-" + c + c : c
            }
            if (0 === O || 2 === O && !o(i, 1)) return i;
            switch (s) {
                case 1015:
                    return 97 === i.charCodeAt(10) ? "-webkit-" + i + i : i;
                case 951:
                    return 116 === i.charCodeAt(3) ? "-webkit-" + i + i : i;
                case 963:
                    return 110 === i.charCodeAt(5) ? "-webkit-" + i + i : i;
                case 1009:
                    if (100 !== i.charCodeAt(4)) break;
                case 969:
                case 942:
                    return "-webkit-" + i + i;
                case 978:
                    return "-webkit-" + i + "-moz-" + i + i;
                case 1019:
                case 983:
                    return "-webkit-" + i + "-moz-" + i + "-ms-" + i + i;
                case 883:
                    if (45 === i.charCodeAt(8)) return "-webkit-" + i + i;
                    if (0 < i.indexOf("image-set(", 11)) return i.replace(x, "$1-webkit-$2") + i;
                    break;
                case 932:
                    if (45 === i.charCodeAt(4)) switch (i.charCodeAt(5)) {
                        case 103:
                            return "-webkit-box-" + i.replace("-grow", "") + "-webkit-" + i + "-ms-" + i.replace("grow", "positive") + i;
                        case 115:
                            return "-webkit-" + i + "-ms-" + i.replace("shrink", "negative") + i;
                        case 98:
                            return "-webkit-" + i + "-ms-" + i.replace("basis", "preferred-size") + i
                    }
                    return "-webkit-" + i + "-ms-" + i + i;
                case 964:
                    return "-webkit-" + i + "-ms-flex-" + i + i;
                case 1023:
                    if (99 !== i.charCodeAt(8)) break;
                    return "-webkit-box-pack" + (c = i.substring(i.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify")) + "-webkit-" + i + "-ms-flex-pack" + c + i;
                case 1005:
                    return h.test(i) ? i.replace(d, ":-webkit-") + i.replace(d, ":-moz-") + i : i;
                case 1e3:
                    switch (t = (c = i.substring(13).trim()).indexOf("-") + 1, c.charCodeAt(0) + c.charCodeAt(t)) {
                        case 226:
                            c = i.replace(b, "tb");
                            break;
                        case 232:
                            c = i.replace(b, "tb-rl");
                            break;
                        case 220:
                            c = i.replace(b, "lr");
                            break;
                        default:
                            return i
                    }
                    return "-webkit-" + i + "-ms-" + c + i;
                case 1017:
                    if (-1 === i.indexOf("sticky", 9)) break;
                case 975:
                    switch (t = (i = e).length - 10, s = (c = (33 === i.charCodeAt(t) ? i.substring(0, t) : i).substring(e.indexOf(":", 7) + 1).trim()).charCodeAt(0) + (0 | c.charCodeAt(7))) {
                        case 203:
                            if (111 > c.charCodeAt(8)) break;
                        case 115:
                            i = i.replace(c, "-webkit-" + c) + ";" + i;
                            break;
                        case 207:
                        case 102:
                            i = i.replace(c, "-webkit-" + (102 < s ? "inline-" : "") + "box") + ";" + i.replace(c, "-webkit-" + c) + ";" + i.replace(c, "-ms-" + c + "box") + ";" + i
                    }
                    return i + ";";
                case 938:
                    if (45 === i.charCodeAt(5)) switch (i.charCodeAt(6)) {
                        case 105:
                            return c = i.replace("-items", ""), "-webkit-" + i + "-webkit-box-" + c + "-ms-flex-" + c + i;
                        case 115:
                            return "-webkit-" + i + "-ms-flex-item-" + i.replace(k, "") + i;
                        default:
                            return "-webkit-" + i + "-ms-flex-line-pack" + i.replace("align-content", "").replace(k, "") + i
                    }
                    break;
                case 973:
                case 989:
                    if (45 !== i.charCodeAt(3) || 122 === i.charCodeAt(4)) break;
                case 931:
                case 953:
                    if (!0 === A.test(e)) return 115 === (c = e.substring(e.indexOf(":") + 1)).charCodeAt(0) ? n(e.replace("stretch", "fill-available"), t, r, a).replace(":fill-available", ":stretch") : i.replace(c, "-webkit-" + c) + i.replace(c, "-moz-" + c.replace("fill-", "")) + i;
                    break;
                case 962:
                    if (i = "-webkit-" + i + (102 === i.charCodeAt(5) ? "-ms-" + i : "") + i, 211 === r + a && 105 === i.charCodeAt(13) && 0 < i.indexOf("transform", 10)) return i.substring(0, i.indexOf(";", 27) + 1).replace(f, "$1-webkit-$2") + i
            }
            return i
        }

        function o(e, t) {
            var r = e.indexOf(1 === t ? ":" : "{"),
                n = e.substring(0, 3 !== t ? r : 10);
            return r = e.substring(r + 1, e.length - 1), j(2 !== t ? n : n.replace(C, "$1"), r, t)
        }

        function a(e, t) {
            var r = n(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
            return r !== t + ";" ? r.replace(S, " or ($1)").substring(4) : "(" + t + ")"
        }

        function i(e, t, r, n, o, a, i, s, l, u) {
            for (var d, h = 0, f = t; h < E; ++h) switch (d = _[h].call(c, e, f, r, n, o, a, i, s, l, u)) {
                case void 0:
                case !1:
                case !0:
                case null:
                    break;
                default:
                    f = d
            }
            if (f !== t) return f
        }

        function s(e) {
            return void 0 !== (e = e.prefix) && (j = null, e ? "function" != typeof e ? O = 1 : (O = 2, j = e) : O = 0), s
        }

        function c(e, r) {
            var s = e;
            if (33 > s.charCodeAt(0) && (s = s.trim()), s = [s], 0 < E) {
                var c = i(-1, r, s, s, I, P, 0, 0, 0, 0);
                void 0 !== c && "string" == typeof c && (r = c)
            }
            var d = function e(r, s, c, d, h) {
                for (var f, p, m, b, S, k = 0, C = 0, A = 0, x = 0, _ = 0, j = 0, D = m = f = 0, z = 0, M = 0, L = 0, $ = 0, F = c.length, B = F - 1, G = "", H = "", Y = "", q = ""; z < F;) {
                    if (p = c.charCodeAt(z), z === B && 0 !== C + x + A + k && (0 !== C && (p = 47 === C ? 10 : 47), x = A = k = 0, F++, B++), 0 === C + x + A + k) {
                        if (z === B && (0 < M && (G = G.replace(u, "")), 0 < G.trim().length)) {
                            switch (p) {
                                case 32:
                                case 9:
                                case 59:
                                case 13:
                                case 10:
                                    break;
                                default:
                                    G += c.charAt(z)
                            }
                            p = 59
                        }
                        switch (p) {
                            case 123:
                                for (f = (G = G.trim()).charCodeAt(0), m = 1, $ = ++z; z < F;) {
                                    switch (p = c.charCodeAt(z)) {
                                        case 123:
                                            m++;
                                            break;
                                        case 125:
                                            m--;
                                            break;
                                        case 47:
                                            switch (p = c.charCodeAt(z + 1)) {
                                                case 42:
                                                case 47:
                                                    e: {
                                                        for (D = z + 1; D < B; ++D) switch (c.charCodeAt(D)) {
                                                            case 47:
                                                                if (42 === p && 42 === c.charCodeAt(D - 1) && z + 2 !== D) {
                                                                    z = D + 1;
                                                                    break e
                                                                }
                                                                break;
                                                            case 10:
                                                                if (47 === p) {
                                                                    z = D + 1;
                                                                    break e
                                                                }
                                                        }
                                                        z = D
                                                    }
                                            }
                                            break;
                                        case 91:
                                            p++;
                                        case 40:
                                            p++;
                                        case 34:
                                        case 39:
                                            for (; z++ < B && c.charCodeAt(z) !== p;);
                                    }
                                    if (0 === m) break;
                                    z++
                                }
                                switch (m = c.substring($, z), 0 === f && (f = (G = G.replace(l, "").trim()).charCodeAt(0)), f) {
                                    case 64:
                                        switch (0 < M && (G = G.replace(u, "")), p = G.charCodeAt(1)) {
                                            case 100:
                                            case 109:
                                            case 115:
                                            case 45:
                                                M = s;
                                                break;
                                            default:
                                                M = T
                                        }
                                        if ($ = (m = e(s, M, m, p, h + 1)).length, 0 < E && (S = i(3, m, M = t(T, G, L), s, I, P, $, p, h, d), G = M.join(""), void 0 !== S && 0 === ($ = (m = S.trim()).length) && (p = 0, m = "")), 0 < $) switch (p) {
                                            case 115:
                                                G = G.replace(w, a);
                                            case 100:
                                            case 109:
                                            case 45:
                                                m = G + "{" + m + "}";
                                                break;
                                            case 107:
                                                m = (G = G.replace(g, "$1 $2")) + "{" + m + "}", m = 1 === O || 2 === O && o("@" + m, 3) ? "@-webkit-" + m + "@" + m : "@" + m;
                                                break;
                                            default:
                                                m = G + m, 112 === d && (H += m, m = "")
                                        } else m = "";
                                        break;
                                    default:
                                        m = e(s, t(s, G, L), m, d, h + 1)
                                }
                                Y += m, m = L = M = D = f = 0, G = "", p = c.charCodeAt(++z);
                                break;
                            case 125:
                            case 59:
                                if (1 < ($ = (G = (0 < M ? G.replace(u, "") : G).trim()).length)) switch (0 === D && (f = G.charCodeAt(0), 45 === f || 96 < f && 123 > f) && ($ = (G = G.replace(" ", ":")).length), 0 < E && void 0 !== (S = i(1, G, s, r, I, P, H.length, d, h, d)) && 0 === ($ = (G = S.trim()).length) && (G = "\0\0"), f = G.charCodeAt(0), p = G.charCodeAt(1), f) {
                                    case 0:
                                        break;
                                    case 64:
                                        if (105 === p || 99 === p) {
                                            q += G + c.charAt(z);
                                            break
                                        }
                                    default:
                                        58 !== G.charCodeAt($ - 1) && (H += n(G, f, p, G.charCodeAt(2)))
                                }
                                L = M = D = f = 0, G = "", p = c.charCodeAt(++z)
                        }
                    }
                    switch (p) {
                        case 13:
                        case 10:
                            47 === C ? C = 0 : 0 === 1 + f && 107 !== d && 0 < G.length && (M = 1, G += "\0"), 0 < E * N && i(0, G, s, r, I, P, H.length, d, h, d), P = 1, I++;
                            break;
                        case 59:
                        case 125:
                            if (0 === C + x + A + k) {
                                P++;
                                break
                            }
                        default:
                            switch (P++, b = c.charAt(z), p) {
                                case 9:
                                case 32:
                                    if (0 === x + k + C) switch (_) {
                                        case 44:
                                        case 58:
                                        case 9:
                                        case 32:
                                            b = "";
                                            break;
                                        default:
                                            32 !== p && (b = " ")
                                    }
                                    break;
                                case 0:
                                    b = "\\0";
                                    break;
                                case 12:
                                    b = "\\f";
                                    break;
                                case 11:
                                    b = "\\v";
                                    break;
                                case 38:
                                    0 === x + C + k && (M = L = 1, b = "\f" + b);
                                    break;
                                case 108:
                                    if (0 === x + C + k + R && 0 < D) switch (z - D) {
                                        case 2:
                                            112 === _ && 58 === c.charCodeAt(z - 3) && (R = _);
                                        case 8:
                                            111 === j && (R = j)
                                    }
                                    break;
                                case 58:
                                    0 === x + C + k && (D = z);
                                    break;
                                case 44:
                                    0 === C + A + x + k && (M = 1, b += "\r");
                                    break;
                                case 34:
                                case 39:
                                    0 === C && (x = x === p ? 0 : 0 === x ? p : x);
                                    break;
                                case 91:
                                    0 === x + C + A && k++;
                                    break;
                                case 93:
                                    0 === x + C + A && k--;
                                    break;
                                case 41:
                                    0 === x + C + k && A--;
                                    break;
                                case 40:
                                    if (0 === x + C + k) {
                                        if (0 === f) switch (2 * _ + 3 * j) {
                                            case 533:
                                                break;
                                            default:
                                                f = 1
                                        }
                                        A++
                                    }
                                    break;
                                case 64:
                                    0 === C + A + x + k + D + m && (m = 1);
                                    break;
                                case 42:
                                case 47:
                                    if (!(0 < x + k + A)) switch (C) {
                                        case 0:
                                            switch (2 * p + 3 * c.charCodeAt(z + 1)) {
                                                case 235:
                                                    C = 47;
                                                    break;
                                                case 220:
                                                    $ = z, C = 42
                                            }
                                            break;
                                        case 42:
                                            47 === p && 42 === _ && $ + 2 !== z && (33 === c.charCodeAt($ + 2) && (H += c.substring($, z + 1)), b = "", C = 0)
                                    }
                            }
                            0 === C && (G += b)
                    }
                    j = _, _ = p, z++
                }
                if (0 < ($ = H.length)) {
                    if (M = s, 0 < E && void 0 !== (S = i(2, H, M, r, I, P, $, d, h, d)) && 0 === (H = S).length) return q + H + Y;
                    if (H = M.join(",") + "{" + H + "}", 0 != O * R) {
                        switch (2 !== O || o(H, 2) || (R = 0), R) {
                            case 111:
                                H = H.replace(v, ":-moz-$1") + H;
                                break;
                            case 112:
                                H = H.replace(y, "::-webkit-input-$1") + H.replace(y, "::-moz-$1") + H.replace(y, ":-ms-input-$1") + H
                        }
                        R = 0
                    }
                }
                return q + H + Y
            }(T, s, r, 0, 0);
            return 0 < E && void 0 !== (c = i(-2, d, s, s, I, P, d.length, 0, 0, 0)) && (d = c), R = 0, P = I = 1, d
        }
        var l = /^\0+/g,
            u = /[\0\r\f]/g,
            d = /: */g,
            h = /zoo|gra/,
            f = /([,: ])(transform)/g,
            p = /,\r+?/g,
            m = /([\t\r\n ])*\f?&/g,
            g = /@(k\w+)\s*(\S*)\s*/,
            y = /::(place)/g,
            v = /:(read-only)/g,
            b = /[svh]\w+-[tblr]{2}/,
            w = /\(\s*(.*)\s*\)/g,
            S = /([\s\S]*?);/g,
            k = /-self|flex-/g,
            C = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
            A = /stretch|:\s*\w+\-(?:conte|avail)/,
            x = /([^-])(image-set\()/,
            P = 1,
            I = 1,
            R = 0,
            O = 1,
            T = [],
            _ = [],
            E = 0,
            j = null,
            N = 0;
        return c.use = function e(t) {
            switch (t) {
                case void 0:
                case null:
                    E = _.length = 0;
                    break;
                default:
                    if ("function" == typeof t) _[E++] = t;
                    else if ("object" == typeof t)
                        for (var r = 0, n = t.length; r < n; ++r) e(t[r]);
                    else N = 0 | !!t
            }
            return e
        }, c.set = s, void 0 !== e && s(e), c
    }
    var W = /^\s*\/\/.*$/gm,
        U = [":", "[", ".", "#"];

    function V(e) {
        var t, r, n, o, a = void 0 === e ? c : e,
            i = a.options,
            l = void 0 === i ? c : i,
            u = a.plugins,
            d = void 0 === u ? s : u,
            h = new q(l),
            f = [],
            p = function(e) {
                function t(t) {
                    if (t) try {
                        e(t + "}")
                    } catch (e) {}
                }
                return function(r, n, o, a, i, s, c, l, u, d) {
                    switch (r) {
                        case 1:
                            if (0 === u && 64 === n.charCodeAt(0)) return e(n + ";"), "";
                            break;
                        case 2:
                            if (0 === l) return n + "/*|*/";
                            break;
                        case 3:
                            switch (l) {
                                case 102:
                                case 112:
                                    return e(o[0] + n), "";
                                default:
                                    return n + (0 === d ? "/*|*/" : "")
                            }
                        case -2:
                            n.split("/*|*/}").forEach(t)
                    }
                }
            }((function(e) {
                f.push(e)
            })),
            m = function(e, n, a) {
                return 0 === n && -1 !== U.indexOf(a[r.length]) || a.match(o) ? e : "." + t
            };

        function g(e, a, i, s) {
            void 0 === s && (s = "&");
            var c = e.replace(W, ""),
                l = a && i ? i + " " + a + " { " + c + " }" : c;
            return t = s, r = a, n = new RegExp("\\" + r + "\\b", "g"), o = new RegExp("(\\" + r + "\\b){2,}"), h(i || !a ? "" : a, l)
        }
        return h.use([].concat(d, [function(e, t, o) {
            2 === e && o.length && o[0].lastIndexOf(r) > 0 && (o[0] = o[0].replace(n, m))
        }, p, function(e) {
            if (-2 === e) {
                var t = f;
                return f = [], t
            }
        }])), g.hash = d.length ? d.reduce((function(e, t) {
            return t.name || v(15), B(e, t.name)
        }), 5381).toString() : "", g
    }
    var X = n.createContext(),
        Z = X.Consumer,
        J = n.createContext(),
        K = (J.Consumer, new M),
        Q = V();

    function ee() {
        return t.useContext(X) || K
    }

    function te() {
        return t.useContext(J) || Q
    }

    function re(e) {
        var r = t.useState(e.stylisPlugins),
            o = r[0],
            a = r[1],
            i = ee(),
            s = t.useMemo((function() {
                var t = i;
                return e.sheet ? t = e.sheet : e.target && (t = t.reconstructWithOptions({
                    target: e.target
                }, !1)), e.disableCSSOMInjection && (t = t.reconstructWithOptions({
                    useCSSOMInjection: !1
                })), t
            }), [e.disableCSSOMInjection, e.sheet, e.target]),
            c = t.useMemo((function() {
                return V({
                    options: {
                        prefix: !e.disableVendorPrefixes
                    },
                    plugins: o
                })
            }), [e.disableVendorPrefixes, o]);
        return t.useEffect((function() {
            (function(e, t, r, n) {
                var o = void 0;
                if (void 0 !== o) return !!o;
                if (e === t) return !0;
                if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
                var a = Object.keys(e),
                    i = Object.keys(t);
                if (a.length !== i.length) return !1;
                for (var s = Object.prototype.hasOwnProperty.bind(t), c = 0; c < a.length; c++) {
                    var l = a[c];
                    if (!s(l)) return !1;
                    var u = e[l],
                        d = t[l];
                    if (!1 === (o = void 0) || void 0 === o && u !== d) return !1
                }
                return !0
            })(o, e.stylisPlugins) || a(e.stylisPlugins)
        }), [e.stylisPlugins]), n.createElement(X.Provider, {
            value: s
        }, n.createElement(J.Provider, {
            value: c
        }, n.Children.only(e.children)))
    }
    var ne = function() {
            function e(e, t) {
                var r = this;
                this.inject = function(e, t) {
                    void 0 === t && (t = Q);
                    var n = r.name + t.hash;
                    e.hasNameForId(r.id, n) || e.insertRules(r.id, n, t(r.rules, n, "@keyframes"))
                }, this.toString = function() {
                    return v(12, String(r.name))
                }, this.name = e, this.id = "sc-keyframes-" + e, this.rules = t
            }
            return e.prototype.getName = function(e) {
                return void 0 === e && (e = Q), this.name + e.hash
            }, e
        }(),
        oe = /([A-Z])/,
        ae = /([A-Z])/g,
        ie = /^ms-/,
        se = function(e) {
            return "-" + e.toLowerCase()
        };

    function ce(e) {
        return oe.test(e) ? e.replace(ae, se).replace(ie, "-ms-") : e
    }
    var le = {
            animationIterationCount: 1,
            borderImageOutset: 1,
            borderImageSlice: 1,
            borderImageWidth: 1,
            boxFlex: 1,
            boxFlexGroup: 1,
            boxOrdinalGroup: 1,
            columnCount: 1,
            columns: 1,
            flex: 1,
            flexGrow: 1,
            flexPositive: 1,
            flexShrink: 1,
            flexNegative: 1,
            flexOrder: 1,
            gridRow: 1,
            gridRowEnd: 1,
            gridRowSpan: 1,
            gridRowStart: 1,
            gridColumn: 1,
            gridColumnEnd: 1,
            gridColumnSpan: 1,
            gridColumnStart: 1,
            msGridRow: 1,
            msGridRowSpan: 1,
            msGridColumn: 1,
            msGridColumnSpan: 1,
            fontWeight: 1,
            lineHeight: 1,
            opacity: 1,
            order: 1,
            orphans: 1,
            tabSize: 1,
            widows: 1,
            zIndex: 1,
            zoom: 1,
            WebkitLineClamp: 1,
            fillOpacity: 1,
            floodOpacity: 1,
            stopOpacity: 1,
            strokeDasharray: 1,
            strokeDashoffset: 1,
            strokeMiterlimit: 1,
            strokeOpacity: 1,
            strokeWidth: 1
        },
        ue = function(e) {
            return null == e || !1 === e || "" === e
        };

    function de(t, r, n, a) {
        if (Array.isArray(t)) {
            for (var s, c = [], d = 0, h = t.length; d < h; d += 1) "" !== (s = de(t[d], r, n, a)) && (Array.isArray(s) ? c.push.apply(c, s) : c.push(s));
            return c
        }
        if (ue(t)) return "";
        if (o(t)) return "." + t.styledComponentId;
        if (l(t)) {
            if ("function" != typeof(p = t) || p.prototype && p.prototype.isReactComponent || !r) return t;
            var f = t(r);
            return e.isElement(f) && console.warn(u(t) + " is not a styled component and cannot be referred to via component selector. See https://www.styled-components.com/docs/advanced#referring-to-other-components for more details."), de(f, r, n, a)
        }
        var p;
        return t instanceof ne ? n ? (t.inject(n, a), t.getName(a)) : t : i(t) ? function e(t, r) {
            var n, o, a = [];
            for (var s in t) t.hasOwnProperty(s) && !ue(t[s]) && (Array.isArray(t[s]) && t[s].isCss || l(t[s]) ? a.push(ce(s) + ":", t[s], ";") : i(t[s]) ? a.push.apply(a, e(t[s], s)) : a.push(ce(s) + ": " + (n = s, null == (o = t[s]) || "boolean" == typeof o || "" === o ? "" : "number" != typeof o || 0 === o || n in le ? String(o).trim() : o + "px") + ";"));
            return r ? [r + " {"].concat(a, ["}"]) : a
        }(t) : t.toString()
    }
    var he = function(e) {
        return Array.isArray(e) && (e.isCss = !0), e
    };

    function fe(e) {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
        return l(e) || i(e) ? he(de(a(s, [e].concat(r)))) : 0 === r.length && 1 === e.length && "string" == typeof e[0] ? e : he(de(a(e, r)))
    }
    var pe = function() {
            function e(e, t) {
                this.rules = e, this.componentId = t, this.isStatic = function(e) {
                    for (var t = 0; t < e.length; t += 1) {
                        var r = e[t];
                        if (l(r) && !o(r)) return !1
                    }
                    return !0
                }(e), M.registerId(this.componentId + 1)
            }
            var t = e.prototype;
            return t.createStyles = function(e, t, r, n) {
                var o = n(de(this.rules, t, r, n).join(""), ""),
                    a = this.componentId + e;
                r.insertRules(a, a, o)
            }, t.removeStyles = function(e, t) {
                t.clearRules(this.componentId + e)
            }, t.renderStyles = function(e, t, r, n) {
                e > 2 && M.registerId(this.componentId + e), this.removeStyles(e, r), this.createStyles(e, t, r, n)
            }, e
        }(),
        me = n.createContext(),
        ge = me.Consumer,
        ye = /invalid hook call/i,
        ve = new Set,
        be = function(e, r) {
            var n = "The component " + e + (r ? ' with the id of "' + r + '"' : "") + " has been created dynamically.\nYou may see this warning because you've called styled inside another component.\nTo resolve this only create new StyledComponents outside of any render method and function component.",
                o = console.error;
            try {
                var a = !0;
                console.error = function(e) {
                    if (ye.test(e)) a = !1, ve.delete(n);
                    else {
                        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) r[i - 1] = arguments[i];
                        o.apply(void 0, [e].concat(r))
                    }
                }, t.useRef(), a && !ve.has(n) && (console.warn(n), ve.add(n))
            } catch (e) {
                ye.test(e.message) && ve.delete(n)
            } finally {
                console.error = o
            }
        },
        we = function(e, t, r) {
            return void 0 === r && (r = c), e.theme !== r.theme && e.theme || t || r.theme
        },
        Se = function(e) {
            return F(G(e) >>> 0)
        },
        ke = function() {
            function e() {
                var e = this;
                this._emitSheetCSS = function() {
                    var t = e.instance.toString();
                    if (!t) return "";
                    var r = T();
                    return "<style " + [r && 'nonce="' + r + '"', h + '="true"', 'data-styled-version="5.3.5"'].filter(Boolean).join(" ") + ">" + t + "</style>"
                }, this.getStyleTags = function() {
                    return e.sealed ? v(2) : e._emitSheetCSS()
                }, this.getStyleElement = function() {
                    var t;
                    if (e.sealed) return v(2);
                    var r = ((t = {})[h] = "", t["data-styled-version"] = "5.3.5", t.dangerouslySetInnerHTML = {
                            __html: e.instance.toString()
                        }, t),
                        o = T();
                    return o && (r.nonce = o), [n.createElement("style", d({}, r, {
                        key: "sc-0-0"
                    }))]
                }, this.seal = function() {
                    e.sealed = !0
                }, this.instance = new M({
                    isServer: !0
                }), this.sealed = !1
            }
            var t = e.prototype;
            return t.collectStyles = function(e) {
                return this.sealed ? v(2) : n.createElement(re, {
                    sheet: this.instance
                }, e)
            }, t.interleaveWithNodeStream = function(e) {
                return v(3)
            }, e
        }(),
        Ce = {
            childContextTypes: !0,
            contextType: !0,
            contextTypes: !0,
            defaultProps: !0,
            displayName: !0,
            getDefaultProps: !0,
            getDerivedStateFromError: !0,
            getDerivedStateFromProps: !0,
            mixins: !0,
            propTypes: !0,
            type: !0
        },
        Ae = {
            name: !0,
            length: !0,
            prototype: !0,
            caller: !0,
            callee: !0,
            arguments: !0,
            arity: !0
        },
        xe = {
            $$typeof: !0,
            compare: !0,
            defaultProps: !0,
            displayName: !0,
            propTypes: !0,
            type: !0
        },
        Pe = {};

    function Ie(e) {
        return r.isMemo(e) ? xe : Pe[e.$$typeof] || Ce
    }
    Pe[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
    }, Pe[r.Memo] = xe;
    var Re = Object.defineProperty,
        Oe = Object.getOwnPropertyNames,
        Te = Object.getOwnPropertySymbols,
        _e = Object.getOwnPropertyDescriptor,
        Ee = Object.getPrototypeOf,
        je = Object.prototype,
        Ne = function e(t, r, n) {
            if ("string" != typeof r) {
                if (je) {
                    var o = Ee(r);
                    o && o !== je && e(t, o, n)
                }
                var a = Oe(r);
                Te && (a = a.concat(Te(r)));
                for (var i = Ie(t), s = Ie(r), c = 0; c < a.length; ++c) {
                    var l = a[c];
                    if (!(Ae[l] || n && n[l] || s && s[l] || i && i[l])) {
                        var u = _e(r, l);
                        try {
                            Re(t, l, u)
                        } catch (e) {}
                    }
                }
            }
            return t
        },
        De = {
            StyleSheet: M,
            masterSheet: K
        };
    "undefined" != typeof navigator && "ReactNative" === navigator.product && console.warn("It looks like you've imported 'styled-components' on React Native.\nPerhaps you're looking to import 'styled-components/native'?\nRead more about this at https://www.styled-components.com/docs/basics#react-native"), "undefined" != typeof window && (window["__styled-components-init__"] = window["__styled-components-init__"] || 0, 1 === window["__styled-components-init__"] && console.warn("It looks like there are several instances of 'styled-components' initialized in this application. This may cause dynamic styles to not render properly, errors during the rehydration process, a missing theme prop, and makes your application bigger without good reason.\n\nSee https://s-c.sh/2BAXzed for more info."), window["__styled-components-init__"] += 1);
    var ze = Object.freeze({
        __proto__: null,
        createGlobalStyle: function(e) {
            for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) o[a - 1] = arguments[a];
            var i = fe.apply(void 0, [e].concat(o)),
                s = "sc-global-" + Se(JSON.stringify(i)),
                c = new pe(i, s);

            function l(e) {
                var r = ee(),
                    o = te(),
                    a = t.useContext(me),
                    l = t.useRef(r.allocateGSInstance(s)).current;
                return n.Children.count(e.children) && console.warn("The global style component " + s + " was given child JSX. createGlobalStyle does not render children."), i.some((function(e) {
                    return "string" == typeof e && -1 !== e.indexOf("@import")
                })) && console.warn("Please do not use @import CSS syntax in createGlobalStyle at this time, as the CSSOM APIs we use in production do not handle it well. Instead, we recommend using a library such as react-helmet to inject a typical <link> meta tag to the stylesheet, or simply embedding it manually in your index.html <head> section for a simpler app."), r.server && u(l, e, r, a, o), t.useLayoutEffect((function() {
                    if (!r.server) return u(l, e, r, a, o),
                        function() {
                            return c.removeStyles(l, r)
                        }
                }), [l, e, r, a, o]), null
            }

            function u(e, t, r, n, o) {
                if (c.isStatic) c.renderStyles(e, m, r, o);
                else {
                    var a = d({}, t, {
                        theme: we(t, n, l.defaultProps)
                    });
                    c.renderStyles(e, a, r, o)
                }
            }
            return be(s), n.memo(l)
        },
        css: fe,
        isStyledComponent: o,
        keyframes: function(e) {
            "undefined" != typeof navigator && "ReactNative" === navigator.product && console.warn("`keyframes` cannot be used on ReactNative, only on the web. To do animation in ReactNative please use Animated.");
            for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
            var o = fe.apply(void 0, [e].concat(r)).join(""),
                a = Se(o);
            return new ne(a, o)
        },
        ServerStyleSheet: ke,
        StyleSheetConsumer: Z,
        StyleSheetContext: X,
        StyleSheetManager: re,
        ThemeConsumer: ge,
        ThemeContext: me,
        ThemeProvider: function(e) {
            var r = t.useContext(me),
                o = t.useMemo((function() {
                    return function(e, t) {
                        if (!e) return v(14);
                        if (l(e)) {
                            var r = e(t);
                            return null === r || Array.isArray(r) || "object" != typeof r ? v(7) : r
                        }
                        return Array.isArray(e) || "object" != typeof e ? v(8) : t ? d({}, t, {}, e) : e
                    }(e.theme, r)
                }), [e.theme, r]);
            return e.children ? n.createElement(me.Provider, {
                value: o
            }, e.children) : null
        },
        useTheme: function() {
            return t.useContext(me)
        },
        version: "5.3.5",
        withTheme: function(e) {
            var r = n.forwardRef((function(r, o) {
                var a = t.useContext(me),
                    i = e.defaultProps,
                    s = we(r, a, i);
                return void 0 === s && console.warn('[withTheme] You are not using a ThemeProvider nor passing a theme prop or a theme in defaultProps in component class "' + u(e) + '"'), n.createElement(e, d({}, r, {
                    theme: s,
                    ref: o
                }))
            }));
            return Ne(r, e), r.displayName = "WithTheme(" + u(e) + ")", r
        },
        __PRIVATE__: De
    });

    function Me(e) {
        var t = Object.create(null);
        return function(r) {
            return void 0 === t[r] && (t[r] = e(r)), t[r]
        }
    }
    var Le = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
        $e = Me((function(e) {
            return Le.test(e) || 111 === e.charCodeAt(0) && 110 === e.charCodeAt(1) && e.charCodeAt(2) < 91
        })),
        Fe = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,
        Be = /(^-|-$)/g;

    function Ge(e) {
        return e.replace(Fe, "-").replace(Be, "")
    }

    function He(e) {
        return "string" == typeof e && e.charAt(0) === e.charAt(0).toLowerCase()
    }
    var Ye = function(e) {
            return "function" == typeof e || "object" == typeof e && null !== e && !Array.isArray(e)
        },
        qe = function(e) {
            return "__proto__" !== e && "constructor" !== e && "prototype" !== e
        };

    function We(e, t, r) {
        var n = e[r];
        Ye(t) && Ye(n) ? Ue(n, t) : e[r] = t
    }

    function Ue(e) {
        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) r[n - 1] = arguments[n];
        for (var o = 0, a = r; o < a.length; o++) {
            var i = a[o];
            if (Ye(i))
                for (var s in i) qe(s) && We(e, i[s], s)
        }
        return e
    }
    var Ve = {};

    function Xe(e, r, a) {
        var i = o(e),
            h = !He(e),
            f = r.attrs,
            p = void 0 === f ? s : f,
            m = r.componentId,
            g = void 0 === m ? function(e, t) {
                var r = "string" != typeof e ? "sc" : Ge(e);
                Ve[r] = (Ve[r] || 0) + 1;
                var n = r + "-" + Se("5.3.5" + r + Ve[r]);
                return t ? t + "-" + n : n
            }(r.displayName, r.parentComponentId) : m,
            y = r.displayName,
            v = void 0 === y ? function(e) {
                return He(e) ? "styled." + e : "Styled(" + u(e) + ")"
            }(e) : y,
            b = r.displayName && r.componentId ? Ge(r.displayName) + "-" + r.componentId : r.componentId || g,
            w = i && e.attrs ? Array.prototype.concat(e.attrs, p).filter(Boolean) : p,
            S = r.shouldForwardProp;
        i && e.shouldForwardProp && (S = r.shouldForwardProp ? function(t, n, o) {
            return e.shouldForwardProp(t, n, o) && r.shouldForwardProp(t, n, o)
        } : e.shouldForwardProp);
        var k, C = new Y(a, b, i ? e.componentStyle : void 0),
            A = C.isStatic && 0 === p.length,
            x = function(e, r) {
                return function(e, r, n, o) {
                    var a = e.attrs,
                        i = e.componentStyle,
                        s = e.defaultProps,
                        u = e.foldedComponentIds,
                        h = e.shouldForwardProp,
                        f = e.styledComponentId,
                        p = e.target;
                    t.useDebugValue(f);
                    var m = function(e, t, r) {
                            void 0 === e && (e = c);
                            var n = d({}, t, {
                                    theme: e
                                }),
                                o = {};
                            return r.forEach((function(e) {
                                var t, r, a, i = e;
                                for (t in l(i) && (i = i(n)), i) n[t] = o[t] = "className" === t ? (r = o[t], a = i[t], r && a ? r + " " + a : r || a) : i[t]
                            })), [n, o]
                        }(we(r, t.useContext(me), s) || c, r, a),
                        g = m[0],
                        y = m[1],
                        v = function(e, r, n, o) {
                            var a = ee(),
                                i = te(),
                                s = r ? e.generateAndInjectStyles(c, a, i) : e.generateAndInjectStyles(n, a, i);
                            return t.useDebugValue(s), !r && o && o(s), s
                        }(i, o, g, e.warnTooManyClasses),
                        b = n,
                        w = y.$as || r.$as || y.as || r.as || p,
                        S = He(w),
                        k = y !== r ? d({}, r, {}, y) : r,
                        C = {};
                    for (var A in k) "$" !== A[0] && "as" !== A && ("forwardedAs" === A ? C.as = k[A] : (h ? h(A, $e, w) : !S || $e(A)) && (C[A] = k[A]));
                    return r.style && y.style !== r.style && (C.style = d({}, r.style, {}, y.style)), C.className = Array.prototype.concat(u, f, v !== f ? v : null, r.className, y.className).filter(Boolean).join(" "), C.ref = b, t.createElement(w, C)
                }(k, e, r, A)
            };
        return x.displayName = v, (k = n.forwardRef(x)).attrs = w, k.componentStyle = C, k.displayName = v, k.shouldForwardProp = S, k.foldedComponentIds = i ? Array.prototype.concat(e.foldedComponentIds, e.styledComponentId) : s, k.styledComponentId = b, k.target = i ? e.target : e, k.withComponent = function(e) {
            var t = r.componentId,
                n = function(e, t) {
                    if (null == e) return {};
                    var r, n, o = {},
                        a = Object.keys(e);
                    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (o[r] = e[r]);
                    return o
                }(r, ["componentId"]),
                o = t && t + "-" + (He(e) ? e : Ge(u(e)));
            return Xe(e, d({}, n, {
                attrs: w,
                componentId: o
            }), a)
        }, Object.defineProperty(k, "defaultProps", {
            get: function() {
                return this._foldedDefaultProps
            },
            set: function(t) {
                this._foldedDefaultProps = i ? Ue({}, e.defaultProps, t) : t
            }
        }), be(v, b), k.warnTooManyClasses = function(e, t) {
            var r = {},
                n = !1;
            return function(o) {
                if (!n && (r[o] = !0, Object.keys(r).length >= 200)) {
                    var a = t ? ' with the id of "' + t + '"' : "";
                    console.warn("Over 200 classes were generated for component " + e + a + ".\nConsider using the attrs method, together with a style object for frequently changed styles.\nExample:\n  const Component = styled.div.attrs(props => ({\n    style: {\n      background: props.background,\n    },\n  }))`width: 100%;`\n\n  <Component />"), n = !0, r = {}
                }
            }
        }(v, b), k.toString = function() {
            return "." + k.styledComponentId
        }, h && Ne(k, e, {
            attrs: !0,
            componentStyle: !0,
            displayName: !0,
            foldedComponentIds: !0,
            shouldForwardProp: !0,
            styledComponentId: !0,
            target: !0,
            withComponent: !0
        }), k
    }
    var Ze = function(t) {
        return function t(r, n, o) {
            if (void 0 === o && (o = c), !e.isValidElementType(n)) return v(1, String(n));
            var a = function() {
                return r(n, o, fe.apply(void 0, arguments))
            };
            return a.withConfig = function(e) {
                return t(r, n, d({}, o, {}, e))
            }, a.attrs = function(e) {
                return t(r, n, d({}, o, {
                    attrs: Array.prototype.concat(o.attrs, e).filter(Boolean)
                }))
            }, a
        }(Xe, t)
    };
    for (var Je in ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "marquee", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "textPath", "tspan"].forEach((function(e) {
            Ze[e] = Ze(e)
        })), ze) Ze[Je] = ze[Je];
    return Ze
}));
