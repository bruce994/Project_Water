/* StoryStream ClientSide API v1.1 */ ! function() {
	"use strict";

	function e() {
		var e = {
				"&": "&#38;",
				"<": "&#60;",
				">": "&#62;",
				'"': "&#34;",
				"'": "&#39;",
				"/": "&#47;"
			},
			t = /&(?!#?\w+;)|<|>|"|'|\//g;
		return function() {
			return this ? this.replace(t, function(t) {
				return e[t] || t
			}) : this
		}
	}

	function t(e, n, s) {
		return ("string" == typeof n ? n : n.toString()).replace(e.define || a, function(t, n, r, o) {
			return 0 === n.indexOf("def.") && (n = n.substring(4)), n in s || (":" === r ? (e.defineParams && o.replace(e.defineParams, function(e, t, r) {
				s[n] = {
					arg: t,
					text: r
				}
			}), n in s || (s[n] = o)) : new Function("def", "def['" + n + "']=" + o)(s)), ""
		}).replace(e.use || a, function(n, r) {
			e.useParams && (r = r.replace(e.useParams, function(e, t, n, r) {
				if (s[n] && s[n].arg && r) {
					var o = (n + ":" + r).replace(/'|\\/g, "_");
					return s.__exp = s.__exp || {}, s.__exp[o] = s[n].text.replace(new RegExp("(^|[^\\w$])" + s[n].arg + "([^\\w$])", "g"), "$1" + r + "$2"), t + "def.__exp['" + o + "']"
				}
			}));
			var o = new Function("def", "return " + r)(s);
			return o ? t(e, o, s) : o
		})
	}

	function n(e) {
		return e.replace(/\\('|\\)/g, "$1").replace(/[\r\t\n]/g, " ")
	}
	var s, r = {
		version: "1.0.1",
		templateSettings: {
			evaluate: /\{\{([\s\S]+?(\}?)+)\}\}/g,
			interpolate: /\{\{=([\s\S]+?)\}\}/g,
			encode: /\{\{!([\s\S]+?)\}\}/g,
			use: /\{\{#([\s\S]+?)\}\}/g,
			useParams: /(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,
			define: /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,
			defineParams: /^\s*([\w$]+):([\s\S]+)/,
			conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,
			iterate: /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,
			varname: "it",
			strip: !0,
			append: !0,
			selfcontained: !1
		},
		template: void 0,
		compile: void 0
	};
	"undefined" != typeof module && module.exports ? module.exports = r : "function" == typeof define && define.amd ? define(function() {
		return r
	}) : (s = function() {
		return this || (0, eval)("this")
	}(), s.doT = r), String.prototype.encodeHTML = e();
	var o = {
			append: {
				start: "'+(",
				end: ")+'",
				endencode: "||'').toString().encodeHTML()+'"
			},
			split: {
				start: "';out+=(",
				end: ");out+='",
				endencode: "||'').toString().encodeHTML();out+='"
			}
		},
		a = /$^/;
	r.template = function(s, i, l) {
		i = i || r.templateSettings;
		var c, d, u = i.append ? o.append : o.split,
			_ = 0,
			m = i.use || i.define ? t(i, s, l || {}) : s;
		m = ("var out='" + (i.strip ? m.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g, " ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g, "") : m).replace(/'|\\/g, "\\$&").replace(i.interpolate || a, function(e, t) {
			return u.start + n(t) + u.end
		}).replace(i.encode || a, function(e, t) {
			return c = !0, u.start + n(t) + u.endencode
		}).replace(i.conditional || a, function(e, t, s) {
			return t ? s ? "';}else if(" + n(s) + "){out+='" : "';}else{out+='" : s ? "';if(" + n(s) + "){out+='" : "';}out+='"
		}).replace(i.iterate || a, function(e, t, s, r) {
			return t ? (_ += 1, d = r || "i" + _, t = n(t), "';var arr" + _ + "=" + t + ";if(arr" + _ + "){var " + s + "," + d + "=-1,l" + _ + "=arr" + _ + ".length-1;while(" + d + "<l" + _ + "){" + s + "=arr" + _ + "[" + d + "+=1];out+='") : "';} } out+='"
		}).replace(i.evaluate || a, function(e, t) {
			return "';" + n(t) + "out+='"
		}) + "';return out;").replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r").replace(/(\s|;|\}|^|\{)out\+='';/g, "$1").replace(/\+''/g, "").replace(/(\s|;|\}|^|\{)out\+=''\+/g, "$1out+="), c && i.selfcontained && (m = "String.prototype.encodeHTML=(" + e.toString() + "());" + m);
		try {
			return new Function(i.varname, m)
		} catch (f) {
			throw "undefined" != typeof console && console.log("Could not create a template function: " + m), f
		}
	}, r.compile = function(e, t) {
		return r.template(e, null, t)
	}
}(),
function(e) {
	"use strict";
	e.ItemRenderer = function t(n) {
		function s(t, n, r) {
			t.indexOf(".html") > -1 ? e.sendRequest({
				url: t,
				method: "GET",
				success: function(e) {
					n(i.create(e))
				},
				error: function() {
					r ? (a(e.messages.error_loading_template, {
						template_name: t
					}), n(null)) : (a(e.formatString(e.messages.error_loading_template_retrying, {
						template_name: t
					})), s(t, n, !0))
				}
			}) : n(i.create(t))
		}

		function r(e) {
			var t = e.feed_type.toLowerCase();
			return t += e.videos && e.videos.length > 0 ? "-video" : e.images && e.images.length > 0 ? "-image" : "-text"
		}

		function o() {
			return c.layout ? c.layout + "-item.html" : "item.html"
		}

		function a(t) {
			e.info(e.formatString(e.messages.log_message, {
				class_name: l.className,
				version: l.version,
				message: t
			}))
		}
		if (!this instanceof t) return new t(n || {});
		var i, l = {},
			c = n || {},
			d = c.templateUrl && "string" == typeof c.templateUrl ? c.templateUrl : "/html/" + o(),
			u = '<p class="{content_item_class} stry-error" {data_block_id}="{block_id}" {data_item_id}="{item_id}" >Invalid feed type <strong>{template_name}</strong></p>';
		return l.version = "0.0.1", l.className = "ItemRenderer", l.init = function() {
			i = new e.TemplateEngine
		}, l.render = function(t, n, o) {
			if (i || l.init(), !t) return void a(e.messages.no_item_provided);
			if (!o) return void a(e.messages.no_callback_provided);
			if (!t.feed_type) return void a(e.messages.invalid_item_provided_no_feed_type);
			var c = (r(t), document.createElement("ul")),
				_ = e.truncate(t.body, 160);
			t.feed_type && (t.feed_class = t.feed_type.toLowerCase()), t.snippet = _ ? _ : " ", s(d, function(s) {
				if (s) {
					var r = i.render(s, t);
					null !== r && (c.innerHTML = i.render(s, t), e.addClass(c.firstChild, e.resources.class_content_item), c.firstChild.setAttribute(e.resources.data_content_item, t.content_item_id), c.firstChild.setAttribute(e.resources.data_content_block, t.content_block_id))
				} else c.innerHTML = e.formatString(u, {
					data_block_id: e.data_content_block,
					data_item_id: e.resources.data_content_item,
					content_item_class: e.resources.class_content_item,
					block_id: t.content_block_id,
					item_id: t.content_item_id
				});
				o(c.firstChild, n)
			})
		}, l
	}
}(this.STRY = this.STRY || {}),
function(e) {
	e.messages = {
		"en-gb": {
			log_message: "{class_name} (v{version}) -> {message}",
			browser_not_supported: "Your browser is not supported",
			configuration_error: "Incorrectly configured",
			invalid_wrapper_id: "No valid wrapperId was provided",
			invalid_template_url: "Configuration error - TemplateUrl is invalid; ignoring.",
			invalid_wrapper: 'Wrapper element "#{wrapper_id}" not found.',
			new_item_check_too_short_error: "newItemCheckDelay is less than 1 second and is being ignored",
			new_item_check_too_short_warning: "newItemCheckDelay is very short and is recommended to be more than 5 seconds",
			load_more: "Load more",
			loading_message: "Loading, please wait...",
			json_parse_not_found_error: "JSON.parse is not available",
			no_api_url_provided_error: "No apiUrl provided",
			no_default_template_url_error: "Configuration error - no defaultTemplateUrl provided",
			no_item_provided: "No item provided",
			no_callback_provided: "No callback method provided, stopping render",
			invalid_item_provided_no_feed_type: "Invalid item provided, no feed_type",
			error_loading_template_retrying: 'Error in requesting template "{template_name}"; retrying with fallback',
			error_loading_template: 'Error in requesting template "{template_name}"; giving up.',
			load_new: "You have new items to load"
		}
	}
}(this.STRY = this.STRY || {}),
function(e) {
	e.resources = {
		class_widget: "stry-widget",
		class_loading: "stry-loading",
		class_content_list: "stry-item-list",
		class_content_item: "stry-item",
		class_enter: "stry-enter",
		class_enter_start: "stry-enter-start",
		class_enter_complete: "stry-enter-complete",
		class_load_more: "stry-load-more",
		class_loading_fade: "stry-loading-fade",
		class_loading_message_wrapper: "stry-loading-message-wrapper",
		class_loading_message: "stry-loading-message",
		class_load_new_ready: "stry-new-items-ready",
		class_load_new: "stry-load-new",
		data_content_item: "data-content-item",
		data_content_block: "data-content-block",
		data_load_more: "data-load-url",
		data_action_click: "data-action-click",
		data_new_items: "data-new-items"
	}
}(this.STRY = this.STRY || {}),
function(t) {
	"use strict";
	t.Widget = function n(s, r) {
		function o(e) {
			e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
			var n = t.formatString(I + _stry.apiUrl, {
				story_name: U,
				access_token: A
			});
			G ? (x.page && (n += "&page=" + x.page), k("onLoadingItems", {
				target: x.el,
				data: null
			})) : (X && X.getAttribute(t.resources.data_load_more) && (n += "&page=" + X.getAttribute(t.resources.data_load_more)), t.addClass(x.el, t.resources.class_loading)), L.limit > 0 && (n += "&rpp=" + L.limit), M && (n += "&categories=" + M), H && (n += "&tags=" + H), t.sendRequest({
				url: n,
				cache: !1,
				method: "GET",
				success: c,
				error: null
			})
		}

		function a() {
			var e = t.formatString(I + _stry.sinceApiUrl, {
				story_name: U,
				access_token: A,
				since_id: O[0]
			});
			M && (e += "&categories=" + M), H && (e += "&tags=" + H), t.addClass(x.el, t.resources.class_loading), t.sendRequest({
				url: e,
				cache: !1,
				method: "GET",
				success: function(e) {
					c(e, !0)
				},
				error: null
			})
		}

		function i(e) {
			if (O.length > 0) {
				var n = t.formatString(I + _stry.sinceApiUrl, {
					story_name: U,
					access_token: A,
					since_id: O[0]
				});
				M && (n += "&categories=" + M), H && (n += "&tags=" + H), k("onPollingItems", {
					target: x.el,
					data: null
				}), t.sendRequest({
					url: n,
					cache: !1,
					method: "GET",
					success: function(t) {
						d(t, e)
					},
					error: null
				})
			} else o();
			L.polling && (J = setTimeout(i, B))
		}

		function l(e, t) {
			e.response && c(e.response, t)
		}

		function c(e, t) {
			var n = [],
				s = JSON.parse(e),
				r = 0,
				o = 0;
			if (s && s.blocks && (p(s), n = _(s)), G) {
				for (r = n.length, o = 0; r--;) t ? O.unshift(n[r].content_block_id) : O.push(n[o].content_block_id), o++;
				k("onLoadingComplete", {
					target: x.el,
					data: n
				}), n = []
			} else if (n && n.length > 0) {
				for (k("documentIsUpdating", {
						target: x.el,
						data: n
					}), r = n.length, o = 0; r--;) t ? x.itemRenderer.render(n[r], {
					index: o,
					len: n.length
				}, v) : x.itemRenderer.render(n[o], {
					index: o,
					len: n.length
				}, g), o++;
				n = []
			}
		}

		function d(e, n) {
			var s = JSON.parse(e),
				r = {},
				o = [];
			s && s.blocks && (o = _(s), r.total = o.length, r.response = e, k("onPollingComplete", {
				target: x.el,
				data: r
			}), n && n.success && n.success(r), G ? L.autoLoadNewItems && o.length > 0 && c(e, !0) : j && !L.autoLoadNewItems && o.length > 0 && (t.addClass(x.el, t.resources.class_load_new_ready), j.setAttribute(t.resources.data_new_items, o.length)))
		}

		function u() {
			t.removeClass(x.el, t.resources.class_loading), j && j.getAttribute(t.resources.data_new_items) && (t.removeClass(x.el, t.resources.class_load_new_ready), j.removeAttribute(t.resources.data_new_items)), k("documentHasUpdated", {
				target: x.el,
				data: q
			}), q = []
		}

		function _(e) {
			var t = [],
				n = 0,
				s = 0;
			for (n = 0, s = e.blocks.length; s > n; n++)
				for (var r = 0, o = e.blocks[n].content_items.length; o > r; r++) {
					var a = e.blocks[n].content_items[r];
					a.content_block_id = e.blocks[n].content_block_id, a.feed_type && "flickr" == a.feed_type.toLowerCase() && (a.url = a.url.replace(F, "/")), t.push(a)
				}
			return t
		}

		function m() {
			var e = document.createElement("link"),
				t = document.getElementsByTagName("head")[0];
			e.href = Y, e.type = "text/css", e.rel = "stylesheet", t.appendChild(e)
		}

		function f() {
			L.polling && !isNaN(L.polling) && (L.polling < 1e3 && C(t.messages[$].new_item_check_too_short_error), L.polling >= 1e3 && (L.polling < 5e3 && C(t.messages[$].new_item_check_too_short_warning), B = L.polling))
		}

		function p(e) {
			var n = 0,
				s = 0,
				r = 0;
			e.total_pages && L.controls ? (n = X.getAttribute(t.resources.data_load_more), s = e.total_pages, r = 0, !n && s > 1 ? (r = 2, X.setAttribute(t.resources.data_load_more, 2)) : s > n ? X.setAttribute(t.resources.data_load_more, n++) : X.removeAttribute(t.resources.data_load_more)) : e.total_pages && (n = x.page, s = e.total_pages, x.page = !n && s > 1 ? 2 : s > n ? n++ : null)
		}

		function g(e, n) {
			var s = n.index + 1 === n.len;
			D.appendChild(e), q.push(e), O.push(e.getAttribute(t.resources.data_content_block)), s && u(e)
		}

		function v(e, n) {
			var s = n.index + 1 === n.len;
			t.addClass(e, t.resources.class_enter), t.addClass(e, t.resources.class_enter_start), D.insertBefore(e, D.firstChild), q.push(e), O.unshift(e.getAttribute(t.resources.data_content_block)), s && u(e), setTimeout(function() {
				t.removeClass(e, t.resources.class_enter_start), t.addClass(e, t.resources.class_enter_complete)
			}, 100)
		}

		function y() {
			L.autoLoadNewItems || (j = document.createElement("div"), j.innerHTML = '<a title="' + t.messages[$].load_new + '">' + t.messages[$].load_new + "</a>", t.addClass(j, t.resources.class_load_new), x.el.insertBefore(j, x.el.firstChild)), X = document.createElement("div"), X.innerHTML = '<a title="' + t.messages[$].load_more + '">' + t.messages[$].load_more + "</a>", t.addClass(X, t.resources.class_load_more), x.el.appendChild(X), P = document.createElement("div"), t.addClass(P, t.resources.class_loading_message_wrapper), P.innerHTML = t.formatString('<span class="{message_class}">{loading_message}</span>', {
				message_class: t.resources.class_loading_message,
				loading_message: t.messages[$].loading_message
			}), x.el.appendChild(P)
		}

		function h() {
			!L.autoLoadNewItems && L.controls && (j.onclick = a), L.controls && (X.onclick = o)
		}

		function w(e) {
			switch (e) {
				case "category":
					return L.categories && "string" == typeof L.categories ? L.categories.replace(/\s+/g, "") : null;
				case "tag":
					return L.tags && "string" == typeof L.tags ? L.tags.replace(/\s+/g, "") : null
			}
		}

		function b(e) {
			var n = null;
			return e && "object" == typeof e && e.nodeName ? n = e : e && "string" == typeof e ? n = document.getElementById(e) : G || N(t.messages[$].invalid_wrapper_id), n
		}

		function T(e) {
			return "string" == typeof e || "object" == typeof e && e.nodeName ? !1 : !0
		}

		function S(e) {
			return e.lang && "string" == typeof e.lang && t.messages[e.lang] ? e.lang : void 0
		}

		function k(e, n) {
			if (8 !== t.isIE()) {
				var s = new CustomEvent(e, {
					detail: n
				});
				x.dispatchEvent(s)
			}
			L.events && L.events[e] && L.events[e](n)
		}

		function C(e) {
			t.warn(t.formatString(t.messages[$].log_message, {
				class_name: x.className,
				version: x.version,
				message: e
			}))
		}

		function N(e) {
			t.error(t.formatString(t.messages[$].log_message, {
				class_name: x.className,
				version: x.version,
				message: e
			}))
		}

		function R() {
			var e = [];
			if (JSON && JSON.parse || e.push(t.messages[$].json_parse_not_found_error), t.debug)
				for (var n = 0; n < e.length; n++) N(e[n]);
			return 0 === e.length
		}

		function E() {
			var e = [];
			if (("undefined" == typeof _stry.apiUrl || "string" != typeof _stry.apiUrl) && e.push(t.messages[$].no_api_url_provided_error), t.debug)
				for (var n = 0; n < e.length; n++) N(e[n]);
			return 0 === e.length
		}
		if (!(this instanceof n)) return new n(s, r || {});
		var x = document.createElement("div"),
			L = "string" == typeof s || "string" == typeof s.nodeName ? r : s,
			I = L.story.environment ? L.story.environment : _stry.root_url,
			U = L.story.name ? L.story.name : _stry.story_name,
			A = L.story.token ? L.story.token : _stry.access_token,
			$ = S(L) ? S(L) : "en-gb",
			Y = L.cssUrl && "string" == typeof L.cssUrl ? L.cssUrl : "/css/main.css",
			M = w("category"),
			H = w("tag"),
			O = [],
			q = [],
			P = null,
			j = null,
			X = null,
			D = null,
			J = null,
			B = 3e4,
			G = T(s),
			F = /\/\d+\/$/;
		return x.version = "0.0.1", x.className = "StoryWidget", x.el = b(s), x.init = function() {
			return R() ? E() ? (t.isIE() && t.polyfillCustomEvent(), G || (x.el.innerHTML = t.formatString('<ul class="{class_name}"></ul>', {
				class_name: t.resources.class_content_list
			}), D = x.el.firstChild, m(), t.addClass(x.el, t.resources.class_widget), L.controls && y(), h()), x.itemRenderer = new t.ItemRenderer({
				layout: L.layout,
				templateUrl: L.templateUrl,
				defaultTemplateUrl: L.defaultTemplateUrl
			}), x.itemRenderer.init(), f(), o(), void(L.polling && (J = setTimeout(i, B)))) : void N(t.messages[$]._configuration_error) : void N(t.messages[$].browser_not_supported)
		}, x.load = function(t) {
			t && t.response ? l(e, !0) : o()
		}, x.poll = function(e) {
			i(e)
		}, x.prepend = function(e) {
			l(e, !0)
		}, x.append = function(e) {
			l(e)
		}, x.viewItem = function() {
			var e = this.getAttribute(t.resources.data_content_item);
			_loadItem(e, function() {})
		}, L.init !== !1 && setTimeout(function() {
			x.init()
		}, 10), x
	}
}(this.STRY = this.STRY || {}),
function(e, t) {
	"use strict";
	e.TemplateEngine = function n() {
		function s(t) {
			e.error(e.formatString(e.messages.log_message, {
				class_name: r.className,
				version: r.version,
				message: t
			}))
		}
		if (!this instanceof n) return new n;
		var r = {};
		return r.version = "0.0.1", r.className = "TemplateEngine", r.create = function(e) {
			return t.template(e)
		}, r.render = function(e, t) {
			var n = {};
			try {
				n = e(t)
			} catch (r) {
				n = null, s(r + "\n" + JSON.stringify(t))
			}
			return n
		}, r
	}
}(this.STRY = this.STRY, doT),
function(e) {
	"use strict";

	function t() {
		for (var e = !1, t = 0; t < n.length; t++) {
			try {
				e = n[t]()
			} catch (s) {
				continue
			}
			break
		}
		return e
	}
	var n = [function() {
			return new XDomainRequest
		}, function() {
			return new XMLHttpRequest
		}, function() {
			return new ActiveXObject("Msxml2.XMLHTTP")
		}, function() {
			return new ActiveXObject("Msxml3.XMLHTTP")
		}, function() {
			return new ActiveXObject("Microsoft.XMLHTTP")
		}],
		s = /\s+/,
		r = /[\n\t\r]/g,
		o = /\{(\w+)\}/g,
		a = {};
	e.log = function(t, n) {
		(e.debug || n) && "undefined" != typeof console && "undefined" != typeof console.log && console.log("STRY -> " + t)
	}, e.error = function(t) {
		"undefined" != typeof console && "undefined" != typeof console.log && ("undefined" !== console.error ? console.error("STRY -> " + t) : e.log(t, !0))
	}, e.warn = function(t) {
		e.debug && "undefined" != typeof console && "undefined" != typeof console.log && ("undefined" !== console.warn ? console.warn("STRY -> " + t) : e.log(t))
	}, e.info = function(t) {
		e.debug && "undefined" != typeof console && "undefined" != typeof console.log && ("undefined" !== console.info ? console.info("STRY -> " + t) : e.log(t))
	}, e.sendRequest = function(e) {
		if (e.url in a && e.success) return void e.success(a[e.url]);
		("undefined" == typeof e.cache || "boolean" != typeof e.cache) && (e.cache = !0);
		var n = t();
		if (n)
			if (n.open(e.method || "GET", e.url, !0), e.data && n.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), window.XDomainRequest && n instanceof XDomainRequest) n.onload = function() {
				e.cache && (a[e.url] = n.responseText), e.success && e.success(n.responseText)
			}, n.onprogress = function() {}, n.ontimeout = function() {}, n.onerror = function() {
				e.error && e.error(n)
			}, setTimeout(function() {
				n.send()
			}, 0);
			else {
				if (n.onreadystatechange = function() {
						4 == n.readyState && (200 != n.status && 304 != n.status ? e.error && e.error(n) : (e.cache && (a[e.url] = n.responseText), e.success && e.success(n.responseText)))
					}, 4 == n.readyState) return;
				n.send(e.data)
			}
	}, e.addClass = function(e, t) {
		if (t && "string" == typeof t) {
			var n = (t || "").split(s);
			if (1 === e.nodeType)
				if (e.className) {
					for (var r = " " + e.className + " ", o = e.className, a = 0, i = n.length; i > a; a++) r.indexOf(" " + n[a] + " ") < 0 && (o += " " + n[a]);
					e.className = o.replace(/^\s+|\s+$/g, "")
				} else e.className = t
		}
	}, e.removeClass = function(e, t) {
		if (t && "string" == typeof t || void 0 === t) {
			var n = (t || "").split(s);
			if (1 === e.nodeType && e.className)
				if (t) {
					t = (" " + e.className + " ").replace(r, " ");
					for (var o = 0, a = n.length; a > o; o++) t = t.replace(" " + n[o] + " ", " ");
					e.className = t.replace(/^\s+|\s+$/g, "")
				} else e.className = ""
		}
	}, e.hasClass = function(e, t) {
		return (" " + e.className + " ").replace(r, " ").indexOf(t) > -1 ? !0 : !1
	}, e.formatString = function(e, t) {
		if ("undefined" == typeof e || "string" != typeof e) return "";
		if ("undefined" == typeof t) return e;
		var n = function(e, n) {
			return t[n] || e
		};
		return e.replace(o, n)
	}, e.purgeCache = function(e) {
		return e in a ? delete a[e] : a = {}, a
	}, e.truncate = function(e, t) {
		if (e && "string" == typeof e && t) {
			var n = e.replace(/(<([^>]+)>)/gi, "");
			if (!(n.length > t)) return e; {
				var s;
				n.length
			}
			for (s = t; s < n.length; s++)
				if (" " === n[s]) return n.substring(0, s) + "..."
		}
	}, e.isIE = function() {
		var e = navigator.userAgent.toLowerCase(),
			t = (document.getElementsByTagName("body")[0], !1);
		return -1 != e.indexOf("msie") ? t = parseInt(e.split("msie")[1]) : -1 != e.indexOf("trident") && -1 != e.indexOf("rv:") && (t = parseInt(e.split("rv:")[1])), t
	}, e.polyfillCustomEvent = function() {
		function e(e, t) {
			t = t || {
				bubbles: !1,
				cancelable: !1,
				detail: void 0
			};
			var n = document.createEvent("CustomEvent");
			return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n
		}
		e.prototype = window.Event.prototype, window.CustomEvent = e
	}
}(this.STRY = this.STRY || {});
var _stry = {
	access_token: "0dcbcf09a85b36167ccc60ac241ef9c2cda30aa7",
	story_name: "",
	root_url: "//live.storystream.it",
	apiUrl: "/api/v2/{story_name}/search/published/.json?access_token={access_token}",
	sinceApiUrl: "/api/v2/{story_name}/search/published/since/.json?access_token={access_token}&since_id={since_id}",
	getItemUrl: "/api/v2/{story_name}/items/.json?ids={items}&access_token={access_token}&approved_only=false"
};