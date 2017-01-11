

function accordionInit() {
	var r = $(".m-13-dealer-accordion-usa"),
		u = "accordion-",
		t = ".accordion-headline",
		f = "gui-active-tab",
		n = ".accordion-content",
		i = "-content";
	$(n).removeClass("display"), r.each(function(r) {
		for (var s = $(this).find(t), a = s.length, h = undefined, c = $(this).find(n), v = c.length, l = undefined, o = undefined, e = 0; e < a; e++) {
			if (e >= v) break;
			h = s.eq(e), l = c.eq(e), o = u + r + "-" + e, h.attr("id", o), l.attr("id", o + i)
		}
		$(this).accordion({
			accordionLinkSelector: t,
			accordionContent: n,
			closeOpenAccordions: !0,
			alwaysToggleActiveState: !0,
			ignoreBreakpoints: !0,
			checkEventClass: !0,
			accordionHeadlineActiveClass: f,
			accordionClickedCallback: null,
			contentSuffix: i
		})
	})
}

function isScrolledIntoView(n) {
	var t = $(window).scrollTop(),
		r = t + $(window).height(),
		i = $(n).offset().top,
		u = i;
	return u <= r && i >= t
}(function(n, t, i) {
	"use strict";
	var u = "contentnavigation",
		p = ".m-02-cn-menu-item",
		w = ".m-02-cn-submenu",
		e = ".m-02-cn-top-item",
		s = ".m-02-cn-bottom-item",
		y = ".m-02-cn-modules-item",
		b = ".m-02-cn-breadcrumb-item",
		h = ".b-page-overlay",
		c = "m-02-cn-anchor",
		a = "m-02-cn-submenu-item",
		nt = "m-02-cn-submenu-modules",
		r = "m-02-cn-submenu-active",
		g = "m-02-cn-module-active",
		d = "m-02-cn-module-fixed-submenu",
		l = "m-02-cn-wrapper",
		tt = '<li class="m-02-cn-submenu-item"><a href="#"><span><\/span><\/a><\/li>',
		o = "click." + u,
		it = "div[data-" + c + "]",
		k = !0,
		v = !!n("html.ie8").length,
		f = function(n) {
			return n.preventDefault(), !1
		};
	n(i).ready(function() {
		function ut(i) {
			var r = typeof i == "number" ? i : i.position().top,
				u = Math.abs(r - n(t).scrollTop()),
				f = Math.min(2 * u, 1200);
			n("html, body").stop(!0, !0).animate({
				scrollTop: r
			}, f, "easeOutQuad")
		}

		function et() {
			v || n(h).addClass("b-show m-02-show-cn"), n("." + l).addClass("m-02-cn-open")
		}

		function ot() {
			v || n(h).removeClass("b-show m-02-show-cn"), n("." + l).removeClass("m-02-cn-open")
		}

		function ht(t) {
			var i = n(t.currentTarget).data(u + c),
				e = n(i);
			return n("." + r).removeClass(r), n(h).removeClass("b-show m-02-show-cn"), ut(e), f(t)
		}

		function ct(t) {
			var i = 0;
			return t.each(function(t, r) {
				i += n(r).outerHeight(!0)
			}), i
		}

		function lt() {
			rt.children("li").each(function() {
				var t = n(this).data(u + c),
					i = n(t).offset().top,
					r = i + n(t).outerHeight(!0);
				n(this).data(u + "activeFrom", i), n(this).data(u + "activeTo", r)
			})
		}

		function ft() {
			n(t).off("scroll", ft), lt();
			var i = n(t).scrollTop(),
				f = n(t).height(),
				r = -1;
			rt.children("li").each(function() {
				var t = n(this).data(u + "activeFrom"),
					e = n(this).data(u + "activeTo"),
					h = n(this).data(u + c),
					s = i >= t && i <= e,
					o = i <= t && i + f >= e;
				return (s || o) && (rt.data(u + "lastActiveIndex", n(this).index()), r = n(this).index(), rt.children("li").removeClass(g), n(this).addClass(g)), o ? !1 : void 0
			}), i + f >= n("body").height() ? n(s).addClass("m-02-disabled-menu-item") : n(s).removeClass("m-02-disabled-menu-item"), i <= 5 || r <= 0 && r != -1 ? n(e).addClass("m-02-disabled-menu-item") : n(e).removeClass("m-02-disabled-menu-item");
			n(t).on("scroll", ft)
		}

		function i() {
			var h, u, et, ht, it, b, g;
			if (v || (n(t).off("resize", i), ft()), k ? n(e).removeAttr("style") : n(e).css({
					display: "block"
				}), h = n("." + r), !(h.length <= 0)) {
				u = h.find(w), u.children(":first").css("margin-top", 0);
				var lt = navigator.userAgent.toLowerCase(),
					rt = ct(u.find("." + a)),
					o = n("." + a).outerHeight(!0),
					s = n("." + l).position().top,
					nt = s + rt,
					c = /iphone|ipod/i.test(lt) ? t.innerHeight : n(t).height(),
					yt = Math.ceil((nt - c) / o) * o,
					ot = h.get(0).getBoundingClientRect().bottom,
					tt = 0,
					at = s - tt,
					st = Math.floor(at / o),
					ut = Math.floor((ot - s) / o),
					p = u.find("." + a).length,
					f = p > ut ? Math.min(p - ut, st) : 0,
					vt = f;
				if (!u.closest(y).length || !n(e + ":visible").length || (f = Math.max(Math.min(Math.ceil(p / 2) - ut, st))), rt >= c - tt ? (h.addClass(d), u.css({
						top: tt,
						bottom: 0
					}), b = u.position().top, g = n("." + l).position().top + n("." + l).height() - c, b == s && u.css({
						top: -s,
						bottom: g
					})) : (h.removeClass(d), nt - o * f <= c ? ot - s >= rt ? p > 1 ? (f = Math.abs(f) == 2 ? 0 : f, f = u.children().length == 3 ? f + 1 : f, u.css({
						top: "auto",
						bottom: o * f
					}), n(e + ":visible").length ? u.children(":first").css("margin-top", -1) : u.children(":first").css("margin-top", 0)) : (u.css({
						top: "auto",
						bottom: "auto",
						marginTop: -1
					}), u.children(":first").css("margin-top", -1)) : p > 1 ? n(e + ":visible").length ? (u.attr("id") == "m-02-cn-submenu-modules" && (f = u.children().length == 4 ? f + 1 : f), et = Math.abs(f) == 1 ? 0 : 0, u.css({
						top: -(o * f) + et,
						bottom: "auto"
					}), u.children(":first").css("margin-top", -et)) : (u.css({
						top: -(o * f),
						bottom: "auto"
					}), u.children(":first").css("margin-top", 0)) : u.css({
						top: 0,
						bottom: "auto"
					}) : (ht = Math.abs(u.position().top / o), it = Math.min(ht + 1, vt), nt - o * it <= c ? c - (nt - o * it) < o && u.css({
						top: -(o * it),
						bottom: "auto"
					}) : (h.addClass(d), u.css({
						top: tt,
						bottom: 0
					}), b = u.position().top, g = n("." + l).position().top + n("." + l).height() - c, b == s && u.css({
						top: -s,
						bottom: g
					})))), !v) n(t).on("resize", i)
			}
		}
		if (n(".m-02-cn-dummyitem").remove(), v) {
			n(".m-02-cn-modules-item").remove(), n(y + ", " + b).hover(function(t) {
				return n("." + r).removeClass(r), n(this).addClass(r), et(), i(), f(t)
			}, function(t) {
				return n(this).removeClass(r), ot(), i(), f(t)
			});
			n(p).on(o, function(t) {
				return n(t.target).hasClass("m-02-cn-breadcrumb-link") || !!n(t.target).closest(b).length ? !0 : f(t)
			});
			n(e).on(o, function(t) {
				return ut(n(".b-page-wrapper").position().top), f(t)
			});
			n(s).on(o, function(i) {
				return ut(n("body").height() - n(t).height()), f(i)
			});
			i();
			return
		}
		n(h + ", " + y + ", .m-02-cn-breadcrumb-item").on("touchmove", function(n) {
			return f(n)
		});
		var st = n(it),
			rt = n("#" + nt);
		if (st.length ? st.each(function(t, i) {
				var e = n(i).data(c),
					r = n(tt),
					f = n(i).attr("id");
				typeof f == "undefined" && (f = "M" + parseInt((Math.random() * 1e7).toString()), n(i).attr("id", f)), r.find("span").text(n(i).data(c)), r.data(u + c, "#" + f);
				r.on(o, function(n) {
					ht(n)
				});
				rt.append(r)
			}) : (k = !1, n(y).css({
				display: "none"
			})), Modernizr.touch) {
			n("html").on("touchend." + u, function(t) {
				if (!n(t.target).closest("." + a).length && n("." + r).length) return n("." + r).removeClass(r), n(h).removeClass("b-show m-02-show-cn"), f(t)
			});
			n(p).on("touchend." + u, function(t) {
				if (!n(t.target).closest("." + a).length && n(t.currentTarget).find(w).length) return n(this).hasClass(r) ? (n(this).removeClass(r), ot()) : (n("." + r).removeClass(r), n(this).addClass(r), et()), i(), f(t)
			});
			n(p).on("click." + u, function(t) {
				if (!n(t.target).closest("." + a).length) return f(t)
			});
			n(w).on("touchmove", function(n) {
				n.stopPropagation()
			})
		} else {
			n(y + ", " + b).hover(function(t) {
				return n("." + r).removeClass(r), n(this).addClass(r), et(), i(), f(t)
			}, function(t) {
				return n(this).removeClass(r), ot(), i(), f(t)
			});
			n(w).on("DOMMouseScroll.contentnavigation mousewheel.contentnavigation", function(t) {
				var i = n(this),
					u = this.scrollTop,
					f = this.scrollHeight,
					o = i.height(),
					r = t.originalEvent.wheelDelta,
					e = r > 0;
				return !e && -r > f - o - u ? (i.scrollTop(f), !1) : e && r > u ? (i.scrollTop(0), !1) : void 0
			});
			n(p).on(o, function(t) {
				return n(t.target).hasClass("m-02-cn-breadcrumb-link") || !!n(t.target).closest(b).length ? !0 : f(t)
			})
		}
		n(e).on(o, function(t) {
			if (k) {
				var i = rt.data(u + "lastActiveIndex"),
					e = rt.children("li");
				i - 1 >= 0 && n(e[i - 1]).trigger(o), n("." + r).removeClass(r), n(h).removeClass("b-show m-02-show-cn")
			} else ut(n(".b-page-wrapper").position().top);
			return f(t)
		});
		n(s).on(o, function(i) {
			if (k) {
				var e = rt.data(u + "lastActiveIndex"),
					s = rt.children("li");
				e + 1 <= s.length - 1 && n(s[e + 1]).trigger(o), n("." + r).removeClass(r), n(h).removeClass("b-show m-02-show-cn")
			} else ut(n("body").height() - n(t).height());
			return f(i)
		});
		n(t).on("resize", i);
		n(t).on("scroll", ft);
		i()
	}), n(t).load(function() {
		function i() {
			n('html[dir="rtl"]').length ? !n(e + ":visible").length || !n(s + ":visible").length ? n(".m-02-cn-wrapper").css({
				left: -n(".m-02-cn-wrapper").outerWidth(),
				opacity: 0
			}) : n(".m-02-cn-wrapper").css({
				right: n(".b-page-wrapper").offset().left - n(".m-02-cn-wrapper").outerWidth(),
				opacity: 0
			}) : !n(e + ":visible").length || !n(s + ":visible").length ? n(".m-02-cn-wrapper").css({
				right: -n(".m-02-cn-wrapper").outerWidth(),
				opacity: 0
			}) : n(".m-02-cn-wrapper").css({
				left: n(".b-page-wrapper").offset().left - n(".m-02-cn-wrapper").outerWidth(),
				opacity: 0
			}), t.setTimeout(function() {
				var t = {};
				t = n('html[dir="rtl"]').length ? !n(e + ":visible").length || !n(s + ":visible").length ? {
					left: 0,
					opacity: 1
				} : {
					right: n(".b-page-wrapper").offset().left,
					opacity: 1
				} : !n(e + ":visible").length || !n(s + ":visible").length ? {
					right: 0,
					opacity: 1
				} : {
					left: n(".b-page-wrapper").offset().left,
					opacity: 1
				}, n(".m-02-cn-wrapper").animate(t, 800, "easeOutBack", function() {
					n(".m-02-cn-wrapper").removeAttr("style").css("opacity", 1)
				})
			}, 1500)
		}
		v ? n(".m-02-cn-wrapper").css("opacity", 1) : i()
	})
})(jQuery, this, this.document),
function(n, t, i, r) {
	"use strict";

	function g() {
		cr(!0)
	}

	function or(t) {
		n(".b-title-wrapper").length > 0 ? t.insertAfter(".b-title-wrapper:first") : n(".m-04-intro-section-model-slider-wrapper").length > 0 ? t.insertAfter(".m-04-intro-section-model-slider-wrapper:first") : n(".m-04-intro-section-home-slider-wrapper").length > 0 ? t.insertAfter(".m-04-intro-section-home-slider-wrapper:first") : n(".b-title-wrapper-inline").length > 0 && t.insertAfter(".b-title-wrapper-inline:first")
	}

	function ci() {
		function p(t, i) {
			var o = n(t),
				u, e = -1,
				r, f;
			if (h.isActive === !0 && h.showSpecialButtonsOnThisPage) {
				n: for (r = 0; r < h.buttonMapping.length; r++)
					for (f = 0; f < h.buttonMapping[r].moduleBaseClasses.length; f++) {
						if (h.buttonMapping[r].isActive !== !0) return;
						if (o.hasClass(h.buttonMapping[r].moduleBaseClasses[f])) {
							e = r;
							break n
						}
					}
				if (e !== -1) {
					u = n(h.buttonBaseTemplate), u.find("." + h.iconContainerClass).eq(0).addClass(h.buttonMapping[e][
						["iconClass"]
					]), u.data(c + s, "#" + i), u.find("." + h.labelContainerClass).eq(0).html(o.data(s)), hi.append(u);
					u.on(y, function(n) {
						yt(n)
					})
				}
			}
		}
		var a, t, i, f, v;
		if (o = o != r ? o : n("#" + st), o.find("." + l + ", .m-21-scn-submenu-item-basket").detach(), n("." + u).removeClass("m-21-svn-hasBlueBtns"), et = !1, w = n(ir), tt(-1), w.length > 1 && !new RegExp(bi, "i").test(location.href)) {
			if (a = !1, w.each(function(t, i) {
					var f = n(i).data(s),
						r = n(it),
						u = n(i).attr("id");
					typeof u == "undefined" && (u = "M" + parseInt((Math.random() * 1e7).toString()), n(i).attr("id", u)), t == 0 && n(i).hasClass("m-04-intro-section-model-slider-wrapper") && (r.addClass(ti), a = !0), r.find("span").html(n(i).data(s)), r.data(c + s, "#" + u), r.attr("data-" + c + s, u);
					r.on(y, function(n) {
						yt(n)
					});
					o.append(r), p(i, u)
				}), !a && ((typeof e != "string" || e == "") && (e = "", t = o.data(ht), typeof t != "undefined" && (e = t)), e != "" && e == ni && (e = " ", t = o.data(nr), typeof t != "undefined" && (e = t)), e != "")) {
				i = n(it), i.addClass(ti), i.find("span").html(e), i.data(c + s, "#pagetop");
				i.on(y, function(n) {
					yt(n)
				});
				o.prepend(i), tt(0), et = !0
			}
			o.find("." + l + ":first").addClass("m-21-scn-submenu-item-first"), o.find("." + l + ":last").addClass("m-21-scn-submenu-item-last"), f = n(rr), f.length > 0 && (f.each(function(t, i) {
				var r = n(it);
				r.find("span").text(n.trim(n(i).text())), r.find("a").attr("href", n(i).attr("href")), r.find("a").addClass(("" + n(i).attr("class")).replace(/ ?gui-btn-round-blue|gui-btn-round-blue search ?/ig, "")), r.addClass("m-21-scn-submenu-item-blue-btn"), t == 0 && r.addClass("m-21-scn-submenu-item-blue-btn-first"), f.length == t + 1 && r.addClass("m-21-scn-submenu-item-blue-btn-last");
				r.find("a").on(y, function(n) {
					return n.stopPropagation(), !0
				});
				r.on(y, function(n) {
					hr(n)
				});
				o.append(r)
			}), n("." + u).addClass("m-21-svn-hasBlueBtns")), v = n(ur), v.length > 0 && n("." + u).addClass("m-21-svn-hasBasket"), ct = !0, n("." + u).removeClass("m-21-svn-noModulesMenu"), n("." + u).addClass("m-21-svn-hasModulesMenu"), lr()
		} else ct = !1, n("." + u).addClass("m-21-svn-noModulesMenu"), n("." + u).removeClass("m-21-svn-hasModulesMenu"), ki && n(ft).hasClass(gt) && n(ft).css({
			display: "block"
		})
	}

	function li(n) {
		if (d === null && (d = ai()), typeof t.requestAnimationFrame != "undefined") {
			var i = n - d;
			i < wt ? bt = t.requestAnimationFrame(li) : p(null, !1)
		} else t.setTimeout(p, wt, null, !1)
	}

	function sr() {
		typeof t.cancelAnimationFrame != "undefined" ? t.cancelAnimationFrame(bt) : t.clearTimeout(p), d = null
	}

	function ai() {
		return typeof performance != "undefined" ? typeof performance.now != "undefined" ? performance.now() : Date.now() : Date.now()
	}

	function p(i, r) {
		var f, u;
		if (sr(), typeof i == "undefined" || i === null || (v = i), typeof r == "undefined" && (r = !1), r !== !0 && (r = !1), r === !1 && pt === !1) {
			f = ai(), li(f);
			return
		}
		u = typeof v == "number" ? v : v.offset().top, typeof v == "object" && typeof v.hasClass == "function" && v.hasClass("m-04-intro-section-model-slider-wrapper") ? u = 0 : n("." + b + "-wrapper").length > 0 && (u -= n("." + b + "-wrapper").height() - 5, u < 0 && (u = 0));
		var e = Math.abs(u - n(t).scrollTop()),
			o = Math.min(2 * e, 1200);
		n("html, body").stop(!0, !0).animate({
			scrollTop: u
		}, o, "easeOutQuad")
	}

	function vi() {}

	function vt() {}

	function yt(t) {
		var i = n(t.currentTarget).data(c + s),
			r = i == "#pagetop" ? 0 : n(i);
		return n("." + f).removeClass(f), n(ot).removeClass("b-show m-21-show-scn"), p(r, !0), a(t)
	}

	function hr(t) {
		return n(t.currentTarget).find("a").click(), !1
	}

	function yi(n) {
		var t = n.find(ut),
			i;
		t.css({
			bottom: "initial",
			top: "100%"
		}), t.removeClass("m-21-scn-submenu-scrolling"), t.css({
			height: "auto"
		}), i = wr(), i < t.height() && (t.addClass("m-21-scn-submenu-scrolling"), t.css({
			height: i
		}))
	}

	function nt() {
		var t = n("#" + st + " ." + l),
			i;
		if (k >= 0 && t.length > k)
			for (t.removeClass(ri + " " + ui), t.eq(k).addClass(ri), i = 0; i < k; i++) t.eq(i).addClass(ui)
	}

	function tt(t) {
		var u = n("#" + st),
			f = "",
			e = u.find("." + l),
			i, r;
		et && t++, t == -1 ? (i = u.data(di), i = typeof i == "string" ? i : "", i = i.replace(new RegExp(fi), u.data(ht)), r = u.data(gi), r = typeof r == "string" ? r : "", r = r.replace(new RegExp(fi), u.data(ht)), f = '<span class="m-21-scn-modules-item-current-long">' + i + '<\/span><span class="m-21-scn-modules-item-current-short">' + r + "<\/span>") : e.length > t && (f = e.eq(t).text()), typeof f != "undefined" && f != "" && (k = t, n("." + tr).html(f))
	}

	function cr(t) {
		var r = location.hash.replace("#", ""),
			f;
		t = t === !0, oi || typeof n.waypoints == "undefined" || (at && n(i).off(GLOBAL_CONFIG.royalSliderHandler.readyEvent, g), typeof lt != "undefined" && clearTimeout(lt), si = new Date, n("." + u).waypoint("destroy"), n("." + u).waypoint("sticky", {
			wrapper: wi,
			stuckClass: b,
			offset: 0,
			handler: ar
		}), pi(), oi = !0, t && er == 0 && r.length > 0 && r.indexOf("/") === -1 && r.indexOf("=") === -1 && (f = n("#" + r), f.length === 1 && p(f, !1)))
	}

	function pi() {
		ct && (n("." + u).removeClass("m-21-svn-noModulesMenu"), n("." + u).addClass("m-21-svn-hasModulesMenu"), w.waypoint("destroy"), w.waypoint({
			offset: n("." + b + "-wrapper").outerHeight(),
			handler: vr
		}))
	}

	function lr() {
		pi()
	}

	function ar(n) {
		n == "down" ? (ei = !0, location.hash != "" && new Date - si < 200 && yr()) : ei = !1
	}

	function vr(t) {
		var i = w.index(n(this));
		i >= 0 && (t == "down" ? tt(i) : tt(i - 1), nt())
	}

	function yr() {
		var i = location.hash.replace(/#/, ""),
			t = n("#" + i);
		t.length > 0 && p(t, !1)
	}

	function pr() {
		ci()
	}

	function wr() {
		return n(t).height() - n("." + u).height()
	}




	var c = "stickycontentnavigation",
		pt = !1,
		v = null,
		wt = 100,
		d = null,
		bt = null,
		u = "m-21-scn-wrapper",
		b = "m-21-scn-sticky",
		wi = '<div class="' + b + '-wrapper"><\/div>',
		it = '<li class="m-21-scn-submenu-item"><a href="#"><span><\/span><\/a><\/li>',
		y = "click." + c,
		rt = ".m-21-scn-menu-item",
		ut = ".m-21-scn-submenu",
		kt = ".m-21-scn-modules-item",
		bi = "/dealersearch",
		dt = ".m-21-scn-top-item",
		ft = ".m-21-scn-top-item-label",
		gt = "m-21-scn-top-item-label-has-label",
		ki = !1,
		e = "",
		ni = "",
		ti = "m-21-scn-submenu-item-pagetop",
		et = !1,
		ii = ".m-21-scn-breadcrumb-item",
		ot = ".b-page-overlay",
		l = "m-21-scn-submenu-item",
		st = "m-21-scn-submenu-modules",
		f = "m-21-scn-submenu-active",
		ri = "m-21-scn-submenu-item-active",
		ui = "m-21-scn-submenu-item-up",
		di = "m-21-scn-modules-default-label",
		gi = "m-21-scn-modules-default-label-small-screen",
		ht = "m-21-scn-modules-default-label-site-name",
		nr = "m-21-scn-modules-default-label-fallback",
		fi = "###SITENAME###",
		tr = "m-21-scn-modules-item-current",
		s = "m-02-cn-anchor",
		ir = "div[data-" + s + "][data-" + s + "!='']",
		rr = ".m-21-scn-bluebuttons-wrapper > a",
		ur = ".m-21-scn-bluebuttons-wrapper > .m-51-shop-basket",
		ct = !1,
		ei = !1,
		k = -1,
		br = !!n("html.ie8").length,
		fr = "m-21-scn-refresh-content-navigation",
		lt = r,
		oi = !1,
		si = -1,
		at = !1,
		er = 0,
		a = function(n) {
			return n.preventDefault(), !1
		},
		w = r,
		o = r,
		hi = r,
		h = {
			isActive: !0,
			showSpecialButtonsOnThisPage: new RegExp("/models", "i").test(location.href),
			buttonBaseTemplate: '<li class="m-21-scn-menu-item m-21-scn-menu-item-special"><a href="#" class="m-21-scn-item-link"><span class="m-21-scn-modules-item-special"><\/span><\/a><\/li>',
			iconContainerClass: "m-21-scn-item-link",
			labelContainerClass: "m-21-scn-modules-item-special",
			buttonMapping: [{
				moduleBaseClasses: ["m-09-techspecs-compare"],
				iconClass: "m-21-scn-technical-specs-link",
				isActive: !0
			}, {
				moduleBaseClasses: ["m-29-features-v2", "m-08-features-wrapper"],
				iconClass: "m-21-scn-features-link",
				isActive: !0
			}, {
				moduleBaseClasses: ["m-12-gallery"],
				iconClass: "m-21-scn-gallery-link",
				isActive: !0
			}]
		};
	n(t).load(function() {

		console.log(4444);


		pt = !0
	}), n(i).ready(function() {


		console.log(4444);



		if (n("." + u).length > 0) {

					console.log(4444);

			if (n(".m-21-scn-dummyitem").remove(), hi = n("." + u).find(".m-21-scn-menu-item-wrapper").eq(0), typeof GLOBAL_CONFIG == "object" && typeof GLOBAL_CONFIG.royalSliderHandler == "object" && GLOBAL_CONFIG.royalSliderHandler.sliderCount > 0) {
				at = !0;
				n(i).on(GLOBAL_CONFIG.royalSliderHandler.readyEvent, g)
			}
			if (lt = t.setTimeout(g, 5e3), or(n("." + u).detach()), typeof GLOBAL_CONFIG == "object") {
				GLOBAL_CONFIG.scn = {
					refreshContentNavigationEvent: fr
				};
				n(i).on(GLOBAL_CONFIG.scn.refreshContentNavigationEvent, pr)
			}
			var r = n(".b-title-headline-text h1 span:not(.b-subline-inline):first");
			if (r.length < 1 && (r = n(".b-title-headline-text h1:first")), r.length > 0 && (e = ni = r.text(), n(ft).text(e), n(dt).addClass(gt)), n(ii + " ul").length == 0 && n("." + u).addClass("m-21-svn-hasNoBreadcrumbItems"), ci(), Modernizr.touch) {
				n(ot + ", " + kt + ", .m-21-scn-breadcrumb-item").on("touchmove", function(n) {
					return a(n)
				});
				n("html").on("touchend." + c, function(t) {
					if (!n(t.target).closest("." + l).length && n("." + f).length) return n("." + f).removeClass(f), n(ot).removeClass("b-show m-21-show-scn"), a(t)
				});
				n(rt).on("touchend." + c, function(t) {
					if (!n(t.target).closest("." + l).length && n(t.currentTarget).find(ut).length) return n(this).hasClass(f) ? (n(this).removeClass(f), vt()) : (n("." + f).removeClass(f), n(this).addClass(f), vi(), yi(n(this))), nt(), a(t)
				});
				n(rt).on("click." + c, function(t) {
					if (!n(t.target).closest("." + l).length) return a(t)
				});
				n(ut).on("touchmove", function(n) {
					n.stopPropagation()
				});
				n(t).resize(function() {
					n("." + f).each(function() {
						n(this).removeClass(f), vt()
					})
				})
			} else {
				n(kt + ", " + ii).hover(function(t) {
					return n("." + f).removeClass(f), n(this).addClass(f), vi(), yi(n(this)), nt(), a(t)
				}, function(t) {
					return n(this).removeClass(f), vt(), nt(), a(t)
				});
				n(rt).on(y, function(t) {
					if (!n(t.target).closest("." + l).length) return a(t)
				})
			}
			n(dt).on(y, function(t) {
				return p(n(".b-page-wrapper").position().top, !0), a(t)
			});
			n("html").addClass("m-21-scn-shown"), at || g()
		}
	})
}(jQuery, this, this.document),
function(n, t, i) {
	"use strict";
	n(i).ready(function() {
		function s() {
			return n(".m-03-related-links-acc-link").css("border-bottom-width") == "1px" ? 0 : 1
		}

		function h() {
			var t = 0,
				r = 0;
			n(i).each(function(i, u) {
				var f = n(u);
				f.css({
					height: "auto"
				}), i < 2 ? t = Math.max(t, f.outerHeight()) : r = Math.max(r, f.outerHeight())
			}), n(i).each(function(i, u) {
				var f = n(u);
				i < 2 ? f.css({
					height: t
				}) : f.css({
					height: r
				})
			})
		}

		function f() {
			u = s(), u == 1 ? h() : n(i).removeAttr("style")
		}
		var e = n(t),
			u = -1,
			i = ".m-03-related-links .m-03-column",
			o = !!n("html.ie8").length,
			r;
		if (n("#m-03-related-links-content").accordion({
				accordionLinkSelector: ".m-03-related-links-acc-link",
				accordionContent: ".m-03-related-links-acc-link-content",
				closeOpenAccordions: !0,
				breakpoint: 568,
				scrollDuration: 500,
				alwaysToggleActiveState: !0,
				ignoreBreakpoints: !1,
				scrollToContent: !1,
				scrollToHeadline: !0,
				checkEventClass: !1,
				contentSuffix: "-content"
			}), r = null, !o) {
			e.on("resize.m-03-footer", function() {
				t.clearTimeout(r), r = t.setTimeout(function() {
					f()
				}, 100)
			});
			f()
		}
	})
}(jQuery, this, this.document),
function(n, t, i) {
	"use strict";

	function f() {
		var f = n(".m-04-intro-section-home-slider"),
			e = n("html.lt-ie9").length > 0,
			t = !0,
			i = 0;
		f.length && (e && n(".m-04-intro-section-home-slider > .m-04-intro-section-slide:nth-child(5)").nextAll().remove(), f.each(function() {
			var f = n(this);
			i = f.find(".m-04-intro-section-slide").length, t = i <= 1 ? !1 : !0;
			f.royalSlider({
				controlNavigation: i > 1 ? "bullets" : "none",
				autoScaleSlider: !1,
				autoHeight: !0,
				triggerGlobalReady: !0,
				controlsInside: !1,
				allowCSS3: !0,
				loop: !0,
				numImagesToPreload: 20,
				navigateByClick: !1,
				sliderDrag: !1,
				arrowsNav: t,
				arrowsNavAutoHide: !0,
				arrowsNavHideOnTouch: !0,
				keyboardNavEnabled: !1,
				globalCaption: !1,
				slidesSpacing: 0,
				transitionSpeed: 1200,
				transitionType: "move",
				easeInOut: "easeInOutSine",
				easeOut: "easeInOutSine",
				autoPlay: {
					enabled: !0,
					pauseOnHover: !0,
					delay: 6e3,
					stopAtAction: !0
				}
			}).data("royalSlider").ev.on("rsAfterSlideChange", function() {
				f.parent().parent().children().attr("id") == r && n(".jp-audio.jp-state-playing").length > 0 && n(".jp-audio.jp-state-playing").parent().find(".jp-jplayer").data("jPlayer").pause(), scaleSliderImages(), u()
			});
			f.find(n(".rsNav")).insertAfter(n(this))
		}))
	}

	function u() {
		var t = n(".m-04-intro-section-home-slider .jp-jplayer:not([id])");
		t.length > 0 && (t.each(function() {
			var i = Math.round((new Date).getTime() + Math.random() * 100),
				t;
			n(this).attr("id", "jp-player-" + i), t = n(this).siblings(".jp-audio"), t.attr("id", "jp-audio-" + i), n(this).jPlayer({
				ready: function() {
					n(this).jPlayer("setMedia", {
						title: t.attr("data-title"),
						m4a: t.attr("data-m4a"),
						oga: t.attr("data-ogg")
					})
				},
				play: function() {
					n(this).jPlayer("pauseOthers"), n(this).closest(".m-04-intro-section-slide").addClass("jp-state-playing");
					var t = n(this).closest(".m-04-intro-section-home-slider").data("royalSlider");
					t.stopAutoPlay(), r = n("#" + n(".jp-audio.jp-state-playing").attr("id")).closest(".b-standard-module").children().attr("id")
				},
				pause: function() {
					n(this).closest(".m-04-intro-section-slide").removeClass("jp-state-playing")
				},
				swfPath: "/all/media/flash",
				solution: "flash, html",
				supplied: "m4a, oga",
				cssSelectorAncestor: "#" + t.attr("id"),
				wmode: "window",
				globalVolume: !0,
				useStateClassSkin: !0,
				autoBlur: !1,
				smoothPlayBar: !0,
				keyEnabled: !0,
				errorAlerts: !1
			})
		}), n(".jp-title").click(function() {
			n(this).closest(".jp-audio").find(".jp-play").trigger("click")
		}))
	}
	var r;
	n(i).ready(function() {
		f(), u()
	})
}(jQuery, this, this.document),
function(n, t, i, r) {
	"use strict";
	n(i).ready(function() {
		function yt() {
			var i = n(t).width();
			return i >= vt && k != 2 ? (ri(), k = 2) : i < vt && k != 1 && (ui(), k = 1), this
		}

		function pt(t) {
			n(t + " .gallery-slide:nth-child(" + ni + ")").nextAll().remove()
		}

		function ri() {
			var i, r, t;
			for (n(".m-06-press-category-content").each(function(t, i) {
					n(i).removeAttr("style")
				}), i = s.find(".m-06-press-category"), r = s.find(".m-06-press-category-content"), t = 0; t < i.length; t++) rt.append(i[t]);
			for (t = 0; t < r.length; t++) ut.append(r[t]);
			s.find(".active").length == 0 && n(i[0]).addClass("active"), s.find(".display").length == 0 && n(r[0]).addClass("display")
		}

		function ui() {
			for (var t = rt.children(".m-06-press-category"), i = ut.children(".m-06-press-category-content"), n = 0; n < t.length; n++) s.append(t[n]), s.append(i[n]);
			s.append(rt), s.append(ut)
		}

		function fi() {
			var t = n("#m-06-social-hub-select"),
				i = null;
			Modernizr.touch || (i = t.select2({
				containerCssClass: "gui-select2-container",
				dropdownCssClass: "gui-select2-dropDown",
				minimumResultsForSearch: -1,
				width: "100%"
			})), n(".m-06-social-hub-headline").each(function(u, f) {
				var e = n(f);
				t.append(n("<option>", {
					text: e.text(),
					value: e.attr("id")
				}));
				n(e).on("click", function() {
					t.val(n(this).attr("id")), Modernizr.touch || i === null || i == r || i.select2("val", n(this).attr("id"))
				})
			}), t.on("change", ci).trigger("change")
		}

		function wt() {
			var i = !1,
				t;
			return oi() && (t = null, o == "m-06-social-media-yt" ? t = "#m-06-social-media-slider-container-yt" : o == "m-06-social-media-fb" && (t = "#m-06-social-media-slider-container-fb"), t != null && (dt(), n(t + " .image-centering").each(function(t, i) {
				var r = f.slides[t].content.find(".gallery-thumbnail");
				r.attr("class", r.attr("class").replace(/\brs.*?\b/g, "")), r.removeAttr("style"), r.off("click"), n(i).append(r)
			}), n(".m-06-social-hub-headline-content").removeAttr("style")), tt = !0, f.destroy(), n(".gallery-fullscreen-wrapper").empty(), n(".gallery-fullscreen-wrapper").hide(), i = !0), i
		}

		function ei(t) {
			var s = wt(),
				a;
			if (t.attr("id") == "m-06-social-media-yt") e = 0, s ? u ? v("#m-06-social-media-slider-container-fb") : g() : u || h.refresh(), o = "m-06-social-media-yt", w.removeClass(b);
			else if (t.attr("id") == "m-06-social-media-fb") e = 0, s ? u ? v("#m-06-social-media-slider-container-yt") : d() : u || c.refresh(), o = "m-06-social-media-fb", w.removeClass(b);
			else if (t.attr("id") == "m-06-press-release") o == "m-06-social-media-yt" && s ? u ? v("#m-06-social-media-slider-container-yt") : d() : o == "m-06-social-media-fb" && s && (u ? v("#m-06-social-media-slider-container-fb") : g()), o = "m-06-press-release", w.addClass(b);
			else if (t.attr("id") == "m-06-socialMediaWall") {
				var f = n("#m-06-socialMediaWall-content .m-22-social-media-wall"),
					l = f.length > 0 ? f.data("m-22-config") : r,
					y = f.length > 0 && f.data("load-triggered") === !0;
				y || typeof l != "string" || l == "" || typeof GLOBAL_CONFIG.socialMediaWall.config[l].moduleOptions != "object" || (a = GLOBAL_CONFIG.socialMediaWall.config[l].moduleOptions.loadEvent, typeof a == "string" && a != "" && (f.data("load-triggered", !0), n(i).trigger(a))), o = "m-06-socialMediaWall", w.removeClass(b)
			}
		}

		function oi() {
			return n("#m-06-social-hub-content").find(".royalSlider").length > 0
		}

		function si() {
			return !!n("#m-06-social-media-slider-container-yt").length
		}

		function hi() {
			return !!n("#m-06-social-media-slider-container-fb").length
		}

		function ci() {
			var t = n(n(this).children("option").filter(":selected")).attr("value");
			n("#" + t).click()
		}

		function d() {
			h = new IScroll("#m-06-social-media-slider-container-yt", {
				scrollY: !0,
				scrollX: !0,
				scrollbars: !0,
				interactiveScrollbars: !0,
				eventPassthrough: !0
			}), n('html[dir="rtl"]').length > 0 && (h.refresh(), h.scrollToElement("#m-06-social-media-slider-yt .gallery-slide:first-child", 0)), e != 0 && t.setTimeout(function() {
				var n = Math.floor(e / it) + 1;
				h.scrollToElement("#m-06-social-media-slider-yt .gallery-slide:nth-child(" + n + ")", 0)
			}, 0), bt(h)
		}

		function g() {
			c = new IScroll("#m-06-social-media-slider-container-fb", {
				scrollY: !1,
				scrollX: !0,
				scrollbars: !0,
				interactiveScrollbars: !0,
				eventPassthrough: !0
			}), n('html[dir="rtl"]').length > 0 && (c.refresh(), c.scrollToElement("#m-06-social-media-slider-fb .gallery-slide:first-child", 0)), e != 0 && t.setTimeout(function() {
				var n = Math.floor(e / it) + 1;
				c.scrollToElement("#m-06-social-media-slider-fb .gallery-slide:nth-child(" + n + ")", 0)
			}, 0), bt(c)
		}

		function bt(t) {
			if (!Modernizr.touch) {
				n(".iScrollIndicator").on("mousedown", function() {
					n(this).addClass("gallery-scrolling")
				});
				t.on("scrollEnd", function() {
					n(".iScrollIndicator").removeClass("gallery-scrolling")
				})
			}
		}

		function li() {
			p = n(".m-06-navigation-slider-container"), y = 0, p.find(".m-06-social-hub-headline").each(function(t, i) {
				y += n(i).outerWidth()
			})
		}

		function ai() {
			y >= at.width() ? p.css({
				width: y + 2
			}) : p.css({
				width: "auto"
			})
		}

		function vi() {
			wt(), o == "m-06-social-media-yt" ? u ? v("#m-06-social-media-slider-container-yt") : d() : o == "m-06-social-media-fb" && (u ? v("#m-06-social-media-slider-container-fb") : g())
		}

		function kt(t) {
			n(t).css({
				opacity: 0
			}), n(t + " .gallery-slide-element-link").toggleClass(ot), n(".gallery-social-media-content-container").css("overflow-x", "visible")
		}

		function v(t) {
			n(t).removeAttr("style"), n(t + " .gallery-slide-element-link").toggleClass(ot), n(".gallery-social-media-content-container").css("overflow-x", "auto")
		}

		function dt() {
			l != null && (l.dispose(), l = null)
		}

		function gt() {
			if (f.slides !== null) {
				var n = f.slides[e].content.parent();
				n.find(".ce-media-wrapper").attr("style", n.find(".gallery-thumbnail").attr("style")).show()
			}
		}

		function yi() {
			n(".gallery-thumbnail").each(function() {
				var t = n(this),
					i = t.attr("data-src");
				t.load(pi), t.attr("src", i)
			})
		}

		function pi(i) {
			var r = n(i.currentTarget).closest(".image-frame"),
				u = this.width,
				f = this.height,
				e = r.width(),
				o = r.height();
			t.setTimeout(function() {
				u / e < f / o ? r.addClass("height-oriented") : r.addClass("width-oriented")
			}, 0)
		}
		var a, st, ht, ft;
		if (n(".m-06-social-hub").length != 0) {
			var h, c, nt = null,
				f, tt = !1,
				o = "m-06-social-media-yt",
				y, p, w = n("#m-06-navigation-slider"),
				b = "m-06-press-release-open",
				it = 3,
				e = 0,
				et = "click",
				ot = "zoom-mode",
				u = n("html.ie8").length > 0,
				l = null,
				ni = 5;
			Modernizr.touch && (et = t.navigator.msPointerEnabled ? "MSPointerUp" : "touchend"), !n("#m-06-social-hub-content").accordion || (n("#m-06-social-hub-content").length > 0 && n("#m-06-social-hub-content").accordion({
				accordionLinkSelector: ".m-06-social-hub-headline",
				accordionContent: ".m-06-social-hub-headline-content",
				closeOpenAccordions: !0,
				alwaysToggleActiveState: !1,
				ignoreBreakpoints: !0,
				checkEventClass: !0,
				accordionHeadlineActiveClass: "gui-active-tab",
				accordionClickedCallback: ei,
				contentSuffix: "-content"
			}), n("#m-06-press-release-content").length > 0 && n("#m-06-press-release-content").accordion({
				accordionLinkSelector: ".m-06-press-category",
				accordionContent: ".m-06-press-category-content",
				closeOpenAccordions: !0,
				scrollDuration: 500,
				alwaysToggleActiveState: 569,
				ignoreBreakpoints: !0,
				slideAnimation: 569,
				slideDuration: 600,
				scrollToHeadline: 569,
				checkEventClass: !0,
				contentSuffix: "-content",
				withGPAnimate: !0
			})), u && (pt("#m-06-social-media-slider-yt"), pt("#m-06-social-media-slider-fb")), a = n("#m-06-social-media-slider-yt"), st = a.find(".gallery-slide").length, n(a).addClass("gallery-slide-count-" + st), a = n("#m-06-social-media-slider-fb"), ht = a.find(".gallery-slide").length, n(a).addClass("gallery-slide-count-" + ht), u || (si() && d(), hi() && g(), nt = new IScroll("#m-06-navigation-slider", {
				scrollY: !1,
				scrollX: !0,
				eventPassthrough: !0
			}));
			var ti = n("#m-06-social-media-yt-content").find(".gallery-thumbnail"),
				ii = n("#m-06-social-media-fb-content").find(".gallery-thumbnail"),
				ct = [],
				lt = [];
			ti.each(function(t, i) {
				ct.push(n(i).parent().find(".ce-media-wrapper").remove().get(0))
			}), ii.each(function(t, i) {
				lt.push(n(i).parent().find(".ce-media-wrapper").remove().get(0))
			});
			var at = n(t),
				s = n("#m-06-press-release-content"),
				rt = n("#m-06-press-release-topics"),
				ut = n("#m-06-press-release-topics-content"),
				vt = 569,
				k = 1;
			n(".gallery-slide-element").on(et, function() {
				var s, r, i, y, p;
				if (IScrollPointerHandler.hasNotScrolledInX() && IScrollPointerHandler.hasNotScrolledInY() || u) {
					s = n(this).closest(".m-06-social-hub-headline-content").attr("id"), s == "m-06-social-media-yt-content" ? (r = ct, u ? kt("#m-06-social-media-slider-container-yt") : h.destroy()) : s == "m-06-social-media-fb-content" && (r = lt, u ? kt("#m-06-social-media-slider-container-fb") : c.destroy()), n("#" + s).css({
						overflow: "visible"
					});
					var a = n(this),
						v = a.closest(".m-06-social-hub-headline-content").find(".gallery-fullscreen-wrapper"),
						o = v.parent().find(".gallery-thumbnail");
					o.on("click", function() {
						var u, i;
						return f.dragSuccess ? !0 : (u = o.index(this), f.currSlideId != u) ? (f.goTo(u), !1) : (r[u] && (i = n(r[u]).clone(), i.removeClass("ce-fullscreen-item"), n(this).parent().hide(), n(this).parent().parent().append(i), i.find("video, audio").length ? (l = createVideoJSElementFromId(i.find("video, audio").attr("id")), t.setTimeout(function() {
							/(iPad|iPhone|iPod)/g.test(navigator.userAgent) ? i.find("iframe").length || l.play() : l.play()
						}, 0)) : !i.find(".ce-image").length || createVideoJSElementFromId(i.find(".ce-image").attr("id")), gt(), n(t).trigger("resize")), !1)
					});
					o.addClass("rsImg rsMainSlideImage"), i = n('<div class="royalSlider gallery-fullscreen-slider"/>').append(o), y = n('<div class="gui-btn gallery-close-fullscreen"/>'), i.find(".gallery-thumbnail").wrap('<div class="gallery-icon-wrapper"/>'), o.each(function(t, i) {
						var u = n(r[t]),
							f = !u.find(".ce-video").length ? !u.find(".ce-audio").length ? "image" : "audio" : "video";
						n(i).closest(".gallery-icon-wrapper").addClass(f)
					}), e = a.closest(".gallery-slide").index() * it + a.index(), i.appendTo(v), v.show();
					n(".gallery-icon-wrapper").on("click", function(t) {
						if (f.dragSuccess) return !0;
						t.stopPropagation(), t.stopImmediatePropagation(), n(this).find(".gallery-thumbnail").trigger("click")
					});
					f = i.royalSlider({
						imageScaleMode: "fit",
						autoScaleSlider: !1,
						autoHeight: !1,
						controlsInside: !1,
						allowCSS3: !0,
						numImagesToPreload: 4,
						arrowsNav: !0,
						arrowsNavAutoHide: !1,
						arrowsNavHideOnTouch: !1,
						controlNavigation: "none",
						navigateByClick: !1,
						sliderDrag: !1,
						transitionType: u ? "fade" : "move",
						keyboardNavEnabled: !1,
						addActiveClass: !0,
						globalCaption: !1,
						slidesSpacing: 0,
						transitionSpeed: 1200,
						easeInOut: "easeInOutSine",
						easeOut: "easeInOutSine",
						imageScalePadding: 22,
						startSlideId: e
					}).data("royalSlider"), y.appendTo(i);
					y.on("click", vi);
					Modernizr.touch && n("html,body").animate({
						scrollTop: i.offset().top
					}, 500), tt = !1, f.updateSliderSize = function() {
						tt || n.rsProto.updateSliderSize.call(this)
					}, p = null;
					n(t).on("resize", function() {
						t.clearTimeout(p), p = t.setTimeout(function() {
							gt()
						}, 50)
					});
					f.ev.on("rsAfterSlideChange", function() {
						if (e != this.currSlideId) {
							e = this.currSlideId, dt();
							var t = n(".gallery-icon-wrapper:hidden");
							!t.length || (t.parent().find(".ce-media-wrapper").remove(), t.show())
						}
					});
					return !1
				}
			});
			ft = null;
			at.on("resize.pressrelease", function() {
				t.clearTimeout(ft), ft = t.setTimeout(function() {
					yt(), ai()
				}, 10)
			});
			yt(), li(), yi(), fi(), nt !== null && nt.refresh(), IScrollPointerHandler.attachPointerDownListener("#m-06-social-media-slider-yt, #m-06-social-media-slider-container-fb")
		}
	})
}(jQuery, this, this.document),
function(n, t, i, r) {
	n(i).ready(function() {
		function o(t) {
			var i = n(t.target);
			return i.hasClass(f) || (i = i.closest("." + f)), i.hasClass("display") ? i.removeClass("display") : (s.find(".display").removeClass("display"), i.addClass("display")), !1
		}
		i.addEventListener("modelDataAvailable", function() {
			var i, u, t;
			if (n("div.m-07-car-range").length == 0) return !1;
			for (i = {}, u = 0; u < modelData.models.length; u++) t = modelData.models[u], i[t.modelrange] !== r ? i[t.modelrange].price_raw > +t.price_raw && t.price_raw != "" && (i[t.modelrange] = {
				price_raw: +t.price_raw,
				price: t.price[0].value
			}) : i[t.modelrange] = {
				price_raw: t.price_raw,
				price: t.price[0].value
			};
			n.each(i, function(t, i) {
				n('a.m-07-car-range-link-overview[href$="' + t + '/"]').siblings("span.m-07-car-range-title").wrap('<div class="m-07-title-wrapper"><\/div>'), n('a.m-07-car-range-link-overview[href$="' + t + '/"]').siblings("div.m-07-title-wrapper").append(!i.price_raw ? '<div class="m-07-car-range-tile-price"><\/div>' : !i.price ? '<div class="m-07-car-range-tile-price"><\/div>' : '<div class="m-07-car-range-tile-price">' + i.price + "<\/div>")
			})
		});
		var s = n(".m-07-car-range-wrapper"),
			f = "m-07-car-tile-wrapper",
			u = "click",
			e = 568;
		(Modernizr.touch || t.navigator.msPointerEnabled) && (u = t.navigator.msPointerEnabled ? "MSPointerUp" : "click"), u += ".m-07-car-range";
		n(".m-07-car-range-link-overview").on(u, function(i) {
			if (Modernizr.touch) {
				if (n(t).width() >= e) return o(i), i.preventDefault(), i.stopPropagation(), !1
			} else if (i.originalEvent.pointerType && i.originalEvent.pointerType == i.originalEvent.MSPOINTER_TYPE_TOUCH && n(t).width() >= e) return o(i), !1
		})
	})
}(jQuery, this, this.document),
function(n, t, i, r) {
	"use strict";
	typeof m_08_intro_racings_labels != "undefined" && (m_08_intro_racings_labels.label_green = "Race Status", m_08_intro_racings_labels.label_yellow = "Race Status", m_08_intro_racings_labels.label_red = "Race Status", m_08_intro_racings_labels.label_safty_car = "Race Status", m_08_intro_racings_labels.label_off = "Race Status", m_08_intro_racings_labels.label_chk = "Race Status");
	var u = [],
		f = t.location.protocol,
		e = "50c5e4e0-b7ee-4d3b-bef1-756c019e19c5",
		o = "ac1e3142db9954b1b02b89665f8b556a1986b00e",
		s = "pipeline-production.netcosports.com/wec/1/races/",
		h = "pipeline-production.netcosports.com/wec/1/live_standings/";
	n(i).ready(function() {
		function p() {
			n(".m-08-features-slider").each(function() {
				var c = n(this).find(".m-08-features-slide").length,
					t = 0,
					h;
				if (n(this).parent().hasClass("royalSliderTimeline")) {
					var e = !1,
						o = !1,
						f = !1,
						s = !1,
						i = Date.now() / 1e3;
					n.each(n(this).find(".m-08-features-slide"), function(u, h) {
						var a = n(h).attr("data-date"),
							c, v, l;
						a.match(/[0-9]{1,2}:[0-9]{2}/) || (a += " 00:00:00"), c = Date.parse(a.replace(" ", "T")) / 1e3, n(this).attr("data-race-date") != r && (v = n(h).attr("data-race-date"), l = Date.parse(v.replace(" ", "T")) / 1e3, l < i + 50 && (t = u, e = u), f == !1 && l > i - 50 && l - i <= 7776e3 && (f = u)), c < i && i - c <= 432e3 && (t = u, o = u), c < i && (s = u)
					}), s !== !1 && (t = s), f !== !1 && (t = f), o !== !1 && (t = o), e != !1 && (t = e)
				}
				h = n(this).royalSlider({
					controlNavigation: c > 1 ? "bullets" : "none",
					autoScaleSlider: !0,
					autoHeight: !0,
					triggerGlobalReady: !0,
					transitionSpeed: 1200,
					loop: !0,
					easeInOut: "easeInOutSine",
					easeOut: "easeInOutSine",
					numImagesToPreload: 10,
					captionAnimationEnabled: !0,
					transitionType: "move",
					arrowsNav: !0,
					arrowsNavAutoHide: !1,
					arrowsNavHideOnTouch: !1,
					keyboardNavEnabled: !1,
					navigateByClick: !1,
					sliderDrag: !1,
					globalCaption: !1,
					globalCaptionInside: !1,
					slidesSpacing: 0,
					startSlideId: t,
					controlsInside: !1
				}).data("royalSlider").ev.on("rsAfterSlideChange", function() {
					scaleSliderImages(), y(), d(this)
				}), u.push(h.data("royalSlider"))
			})
		}

		function w(t) {
			if (!!c.length && !!i.length) {
				var r = n(t + " .gui-nav-flyout-link span"),
					u = n(t + " .gui-nav-flyout-item").first().find(".gui-submenu-link");
				l(c, r);
				c.find("select").on("change", {
					modulWrapperClass: t
				}, b);
				l(i, u), i.find("select").prop("disabled", !0).select2("enable", !1), Modernizr.touch && i.addClass("sel-touch-disabled");
				i.find("select").on("change", {
					featureSelect: c,
					detailSelect: i
				}, FlyoutTouchBehaviour.detailSelectChanged)
			}
		}

		function l(t, i) {
			var r = t.find("select");
			return r.find("option").not(":first").remove(), i.each(function(t, i) {
				r.append("<option>" + n(i).text() + "<\/option>")
			}), Modernizr.touch && r.find("option:first-child").html(r.data("placeholder")).prop("disabled", !0), t
		}

		function b(t) {
			var r = n(t.data.modulWrapperClass + " .gui-nav-flyout-item").filter(function(n) {
				return n === c.find("select").prop("selectedIndex") - 1
			});
			l(i, r.find(".gui-submenu-link")), i.find("select").prop("disabled", !1).select2("enable", !0), Modernizr.touch && i.removeClass("sel-touch-disabled")
		}

		function y() {
			t.setTimeout(function() {
				u.length < 1 || n(".m-08-features-slider").each(function(t) {
					var i = n(this).find(".rsArrowIcn");
					if (k()) {
						if (!!u[0]) {
							var r = u[t].currSlideId,
								f = u[t].slidesJQ[r],
								e = n(f).find(".m-08-features-slide-left").height();
							!i.length || (i.css("top", e - i.height() - 10), i.css("margin-top", "0"))
						}
					} else !i.length || i.removeAttr("style")
				})
			}, 0)
		}

		function k() {
			var t = !1,
				i = n("html").css("font-family").replace(/["']/g, "");
			return i === "m08-size1" && (t = !0), t
		}

		function d(t) {
			var r = t.currSlide.content[0],
				i = n(r).parent().parent();
			i.hasClass("rsContainer") && (i.find("video").each(function(t, i) {
				n(i)[0].pause()
			}), i.find("audio").each(function(t, i) {
				n(i)[0].pause()
			}))
		}

		function g() {
			var i = {
					select: !1,
					pointInteraction: !0,
					formerRaceState: !1,
					clearRedPoint: function(n) {
						n.find(".timeContainer .point.on").removeClass("on")
					},
					setRedPoint: function(n, t) {
						t.find(".timeContainer .point:eq(" + n + ")").addClass("on")
					},
					changeDefaultPositionAtSelection: function(n, t) {
						t.find('.timeSelections[type="hidden"]').select2("val", n), t.find(".timelineSelection option").removeAttr("selected"), setTimeout(function() {
							t.find(".timelineSelection option:eq(" + n + ")").attr("selected", "selected")
						}, 10)
					},
					catchAction: function(t) {
						if (typeof n(".royalSliderTimeline").has(t).get(0) != "undefined") {
							var r = n(".royalSliderTimeline").index(n(".royalSliderTimeline").has(t)),
								i = n(".royalSliderTimeline").eq(r);
							this.clearRedPoint(i), this.setRedPoint(i.find(".rsNavSelected").index(), i), this.changeDefaultPositionAtSelection(i.find(".rsNavSelected").index(), i)
						}
					},
					sortArray: function(n) {
						return n.sort(function(n, t) {
							var u = /^(\d+)([A-Z]*)/,
								i, r;
							return (n = n.id.toString().match(u), t = t.id.toString().match(u), i = parseInt(n[1], 10), r = parseInt(t[1], 10), i === r) ? n[2] < t[2] ? -1 : n[2] > t[2] ? 1 : 0 : i - r
						}), n
					},
					resetId: function(n) {
						for (var i = n.length, t = 0; t < i; t++) n[t].id = t;
						return n
					},
					stringLoop: function(n, t, i) {
						for (var f = String(t).length, u = "", r = 0; r < f; r++) f == 1 && (u += i.replace("###", "0")), u += i.replace("###", String(t)[r]);
						return u
					},
					updateStatus: function(i) {
						var r = i.parents(".m-08-features-slide"),
							u = r.attr("data-race-session-id"),
							s, c;
						r.hasClass("finished") || r.hasClass("updating") || typeof u == "undefined" || u == "" || (r.addClass("updating"), s = n.sha1(f + "//" + h + u + "?resolve_ref=ranks.%24.participation_id%2Cranks.%24.participation.car_id%2Cranks.%24.participation.car.brand_id%2Cranks.%24.participation.team_id%2Cranks.%24.participation.pilots_ids%2Cranks.%24.participation.category_id&@" + e + ":" + o), c = f + "//" + h + u + "?resolve_ref=ranks.$.participation_id,ranks.$.participation.car_id,ranks.$.participation.car.brand_id,ranks.$.participation.team_id,ranks.$.participation.pilots_ids,ranks.$.participation.category_id&api_client_id=" + e + "&api_sig=" + s, n.ajax({
							type: "GET",
							url: c,
							dataType: "json",
							success: function(n) {
								r.find(".race-status").css("display", "inline-block").attr("class", "race-status " + n.live_standing.status.toLowerCase()).find(".text").text(m_08_intro_racings_labels["label_" + n.live_standing.status.toLowerCase()])
							}
						}), t.setTimeout(function() {
							r.removeClass("updating")
						}, 5e3))
					},
					countdown: function(n, i, r, u, f, e, o, s, h, c, l, a) {
						var tt = this,
							it = n.parents(".m-08-features-slide"),
							g = n.find(".countdown").empty(),
							nt = new Date,
							rt, k, d, v;
						nt.setUTCFullYear(i, r - 1, u), nt.setUTCHours(f), nt.setUTCMinutes(e), nt.setUTCSeconds(0), rt = (new Date).getTime(), v = nt - rt, v = Math.floor(v / 1e3);
						var w = Math.floor(v / 86400),
							y = Math.floor(v / 3600 - w * 24),
							p = Math.floor(v / 60 - w * 1440 - y * 60) % 60,
							b = v - w * 86400 - y * 3600 - p * 60;
						g.attr("data-days-digits", w.toString().length);
						var n = n,
							i = i,
							r = r,
							u = u,
							f = f,
							e = e,
							o = o,
							s = s,
							h = h;
						if (w > 99) return !1;
						if (m_08_intro_racings_labels.raceSeries == "iwsc" && it.find(".b-tabs").hide(), v > 0 && a === !1) v < 60 ? (y = this.stringLoop("###", y, '<div class="time"><div class="timewindow_upper"><\/div><div class="timewindow_lower"><\/div><span>###<\/span><\/div>'), p = this.stringLoop("###", p, '<div class="time"><div class="timewindow_upper"><\/div><div class="timewindow_lower"><\/div><span>###<\/span><\/div>'), b = this.stringLoop("###", b, '<div class="time"><div class="timewindow_upper"><\/div><div class="timewindow_lower"><\/div><span>###<\/span><\/div>'), g.append(y + '<div class="indication">' + s + '<\/div><div class="separation"><\/div>' + p + '<div class="indication">' + h + '<\/div><div class="separation"><\/div>' + b + '<div class="indication">' + c + "<\/div>")) : (w = this.stringLoop("###", w, '<div class="time"><div class="timewindow_upper"><\/div><div class="timewindow_lower"><\/div><span>###<\/span><\/div>'), y = this.stringLoop("###", y, '<div class="time"><div class="timewindow_upper"><\/div><div class="timewindow_lower"><\/div><span>###<\/span><\/div>'), p = this.stringLoop("###", p, '<div class="time"><div class="timewindow_upper"><\/div><div class="timewindow_lower"><\/div><span>###<\/span><\/div>'), g.append(w + '<div class="indication">' + o + '<\/div><div class="separation"><\/div>' + y + '<div class="indication">' + s + '<\/div><div class="separation"><\/div>' + p + '<div class="indication">' + h + "<\/div>")), n.show(), t.setTimeout(function() {
							tt.countdown(n, i, r, u, f, e, o, s, h, c, l, !1)
						}, 500);
						else {
							if (it.find(".m-08-features-slide-right > .b-responsive-table").hide(), a === !1) {
								if (k = n.parents(".m-08-features-slide").attr("data-race-end-date"), typeof k != "undefined" && k != "") i = k.split(" ")[0].split("-")[0], r = k.split(" ")[0].split("-")[1], u = k.split(" ")[0].split("-")[2], f = k.split(" ")[1].split(":")[0], e = k.split(" ")[1].split(":")[1];
								else return !1;
								n.find(".headline").text(l), n.show(), n.find(".race-status").show()
							}
							if (tt.updateStatus(n), d = new Date, d.setUTCFullYear(i, r - 1, u), d.setUTCHours(f), d.setUTCMinutes(e), d.setUTCSeconds(0), v = d - rt, v = Math.floor(v / 1e3), v > 0) {
								var w = Math.floor(v / 86400),
									y = Math.floor(v / 3600 - w * 24),
									p = Math.floor(v / 60 - w * 1440 - y * 60) % 60,
									b = v - w * 86400 - y * 3600 - p * 60;
								y = this.stringLoop("###", y, '<div class="time"><div class="timewindow_upper"><\/div><div class="timewindow_lower"><\/div><span>###<\/span><\/div>'), p = this.stringLoop("###", p, '<div class="time"><div class="timewindow_upper"><\/div><div class="timewindow_lower"><\/div><span>###<\/span><\/div>'), b = this.stringLoop("###", b, '<div class="time"><div class="timewindow_upper"><\/div><div class="timewindow_lower"><\/div><span>###<\/span><\/div>'), g.append(y + '<div class="indication">' + s + '<\/div><div class="separation"><\/div>' + p + '<div class="indication">' + h + '<\/div><div class="separation"><\/div>' + b + '<div class="indication">' + c + "<\/div>"), n.parent().find(".gui-btn-with-arrow.m-11-action").css("display", "inline-block"), a != this.formerRaceState && n.closest(".royalSlider").royalSlider("updateSliderSize"), this.formerRaceState = a, t.setTimeout(function() {
									tt.countdown(n, i, r, u, f, e, o, s, h, c, l, !0)
								}, 500)
							} else {
								var y = 0,
									p = 0,
									b = 0;
								n.parents(".m-08-features-slide").addClass("finished"), n.parent().find(".claim").html('<div class="headline">' + m_08_intro_racings_labels.afterRace + "<\/div>"), n.parents(".m-08-features-slide").find(".m-08-features-slide-right").prepend('<img class="afterRaceFlag" src="/images/raceOverFlag.jpg" />'), m_08_intro_racings_labels.raceSeries != "iwsc" && it.find(".b-tabs").hide(), n.parent().find(".gui-btn-with-arrow.m-11-action").css("display", "inline-block"), n.closest(".royalSlider").royalSlider("updateSliderSize"), y = this.stringLoop("###", y, '<div class="time"><div class="timewindow_upper"><\/div><div class="timewindow_lower"><\/div><span>###<\/span><\/div>'), p = this.stringLoop("###", p, '<div class="time"><div class="timewindow_upper"><\/div><div class="timewindow_lower"><\/div><span>###<\/span><\/div>'), b = this.stringLoop("###", b, '<div class="time"><div class="timewindow_upper"><\/div><div class="timewindow_lower"><\/div><span>###<\/span><\/div>'), g.append(y + '<div class="indication">' + s + '<\/div><div class="separation"><\/div>' + p + '<div class="indication">' + h + '<\/div><div class="separation"><\/div>' + b + '<div class="indication">' + c + "<\/div>")
							}
						}
					}
				},
				w = [],
				u = [],
				l = [],
				a = 0,
				c = {
					textData: function() {
						return m_08_intro_racings_labels
					},
					getRaceSessionIDs: function(t, i, r) {
						n(t).find(i + "[" + r + "]").each(function() {
							var i = n(this),
								t = i.attr("data-race-id"),
								r;
							typeof t != "undefined" && t !== !1 && (r = n.sha1(f + "//" + s + t + "/sessions?@" + e + ":" + o), n.ajax({
								type: "GET",
								url: f + "//" + s + t + "/sessions?api_client_id=" + e + "&api_sig=" + r,
								dataType: "json",
								success: function(t) {
									n.each(t.sessions, function(n, t) {
										if (t.type == "Race") return i.attr("data-race-session-id", t.id), !1
									})
								}
							}))
						})
					},
					catchDataFromSlider: function(t, f, e, o, s, h, v, y, p) {
						for (var ot = n(t).length, k = null, w = null, b, d = 0; d < ot; d++) {
							if (w = n(t + ":eq(" + d + ")").find(f), k = w.parent(), !!w.attr(e) && !!w.attr(s)) {
								k.wrap('<div class="royalSliderTimeline" />'), k.parent().prepend('<input type="hidden" class="timeSelections" /><div class="featuresContainer"><div class="m-08-features-navbar"><ul class="gui-nav-flyout"><li class="gui-nav-flyout-item"><div class="gui-nav-flyout-link b-not-draggable"><\/div><div class="gui-nav-flyout-submenu-wrapper"><ul class="gui-nav-flyout-submenu-column"><\/ul><\/div><\/li><\/ul><\/div><div class="timeContainer"><div class="nameofmonth"><\/div><div class="months"><div class="hrcontainer"><div class="hr"><\/div><\/div><div class="month"><\/div><div class="month"><\/div><div class="month"><\/div><div class="month"><\/div><div class="month"><\/div><div class="month"><\/div><div class="month"><\/div><div class="month"><\/div><div class="month"><\/div><div class="month"><\/div><div class="month"><\/div><div class="month last"><\/div><div class="clear"><\/div><\/div><\/div><div class="clear"><\/div><\/div>'), k.parent().append('<div class="clear" />');
								var st = w.length,
									g = null,
									nt = null,
									tt = null,
									rt = null,
									it = null,
									ut = [],
									y = [],
									ft = [],
									et = [];
								for (b = 0; b < st; b++) g = parseInt(n(w[b]).attr(e).split("-")[0]), nt = parseInt(n(w[b]).attr(e).split("-")[1]) - 1, tt = parseInt(n(w[b]).attr(e).split("-")[2]), v.push(new Date(g, nt, tt)), it = parseInt(new Date(g, nt, tt).getMonth() * 100 + new Date(g, nt, tt).getDate()), rt = w.eq(b).attr(s), et.push(typeof w.eq(b).attr(h) === r ? "" : w.eq(b).attr(h)), ut.push(typeof w.eq(b).attr(o) === r ? "" : w.eq(b).attr(o)), y.push({
									id: it,
									text: rt
								}), ft.push({
									id: it,
									text: w.eq(b).find(".header > div").html()
								});
								u = i.sortArray(y), l = i.sortArray(ft), n(".royalSliderTimeline").eq(a).find(".timeSelections").select2({
									minimumResultsForSearch: -1,
									allowClear: !0,
									data: i.resetId(u),
									formatSelection: function(n) {
										return n.text
									},
									formatResult: function(n) {
										var t = c.getArrayIndexForKey(u, "id", n.id);
										return u[t].text + ": " + l[t].text
									}
								}), p(k, v, a, ut, et), a++
							}
							v = []
						}
					},
					getArrayIndexForKey: function(n, t, i) {
						for (var r = 0; r < n.length; r++)
							if (n[r][t] == i) return r;
						return -1
					}
				},
				v, y;
			n.extend(n.rsProto, {
				_i5: function() {
					var t = this;
					"bullets" === t.st.controlNavigation && (t.ev.one("rsAfterPropsSetup", function() {
						for (var i = '<div class="rsNav rsBullets">', r = 0; r < t.numSlides; r++) i += '<div class="rsNavItem rsBullet"><span><\/span><\/div>';
						t._k5 = i = n(i + "<\/div>"), t._l5 = i.appendTo(t.slider).children();
						t._k5.on("click.rs", ".rsNavItem", function() {
							t._m5 || t.goTo(n(this).index())
						})
					}), t.ev.on("rsOnUpdateNav", function() {
						var n = t.currSlideId;
						t._n5 && t._n5.removeClass("rsNavSelected"), n = t._l5.eq(n), n.addClass("rsNavSelected"), t._n5 = n, i.catchAction(n)
					}))
				}
			}), n.rsModules.bullets = n.rsProto._i5, v = function(t, f, e, o) {
				for (var h, v, p, s = 0; s < f.length; s++)(function(i) {
					var o = parseInt(i.getMonth()),
						h = parseInt(i.toString().split(" ")[2]),
						c = t.parent().find(".month").eq(o),
						f, r;
					c.append('<div class="point" id="i' + e + "p" + s + '" />'), f = h / 31 * 100, t.parent().find(".month > #i" + e + "p" + s).css("left", f + "%"), r = n('<li><a href="javascript:void(0)" class="gui-link-with-arrow gui-submenu-link"><span class="name"><\/span><br /><span class="date"><\/span><\/a><\/li>'), r.find("span.name").text(u[s].text), r.find("span.date").text(l[s].text), r.appendTo(t.parent().find(".gui-nav-flyout-submenu-column")), n("<option />").text(u[s].text).attr("id", s).appendTo(t.parent().find(".timelineSelection"))
				})(f[s]);
				for (s = 0; s < c.textData().monthNameArray.length; s++) {
					h = c.textData().monthNameArray[s];
					switch (h.length) {
						case 1:
							h = h.substring(0, 1);
							break;
						case 2:
							h = h.substring(0, 2);
							break;
						default:
							h = h.substring(0, 3)
					}
					v = n("<span><\/span>").text(h), s == c.textData().monthNameArray.length - 1 ? t.parent().find(".nameofmonth").append(v.addClass("last")) : t.parent().find(".nameofmonth").append(v)
				}
				for (t.find("select.timelineSelection").attr("id", "timelineSelection" + e), t.find("select.timelineSelection").select2({
						minimumResultsForSearch: -1,
						allowClear: !0
					}), s = 0; s < f.length; s++)
					if (p = o[s] !== r && o[s] != "", p) {
						var a = n(t).find(".m-08-features-slide").eq(s),
							w = o[s].split(" ")[0].split("-")[0],
							b = o[s].split(" ")[0].split("-")[1],
							k = o[s].split(" ")[0].split("-")[2],
							d = o[s].split(" ")[1].split(":")[0],
							g = o[s].split(" ")[1].split(":")[1];
						a.find(".claim").append('<div class="headline">' + m_08_intro_racings_labels.countdown + '<\/div><div class="coundownContainer"><div class="countdown"><\/div><\/div>').hide(), a.find(".counterlogowrapper").appendTo(".coundownContainer"), a.find(".counterlogowrapper, .counterlogo").css("display", "block"), a.find(".gui-btn-with-arrow.m-11-action").before('<div class="race-status"><span>' + m_08_intro_racings_labels.raceStatus + '<\/span><div><span class="ico"><\/span><span class="text"><\/span><\/div><\/div>'), i.countdown(a.find(".claim"), w, b, k, d, g, m_08_intro_racings_labels.days, m_08_intro_racings_labels.hours, m_08_intro_racings_labels.minutes, m_08_intro_racings_labels.seconds, m_08_intro_racings_labels.timeRemaining, !1)
					}
				y(t, e)
			}, y = function(t, r) {
				t.parent().find(".month .point").each(function(r, u) {
					i.select = !1;
					n(u).on("click", function() {
						i.clearRedPoint(t), n(u).addClass("on"), t.parent().find(".rsNav.rsBullets .rsNavItem:eq(" + r + ")").click()
					})
				}), t.parent().find(".gui-submenu-link").each(function(i, r) {
					n(r).on("click", function() {
						t.parent().find(".rsNav.rsBullets .rsNavItem:eq(" + i + ")").click()
					})
				});
				n('.royalSliderTimeline .timeSelections[type="hidden"]:eq(' + r + ")").on("change", function(t) {
					n(".royalSliderTimeline").eq(r).find(".rsNav.rsBullets .rsNavItem").eq(t.val).click()
				})
			}, n(function() {
				c.getRaceSessionIDs(".royalSlider", ".m-08-features-slide", "data-race-id"), c.catchDataFromSlider(".royalSlider", ".m-08-features-slide", "data-date", "data-race-date", "data-eventname", "data-claim", w, u, v), p()
			})
		}
		var c = n(".m-08-features-select-feature"),
			i = n(".m-08-features-select-feature-detail"),
			v = ".08-features",
			nt = n("html.ie8").length > 0,
			tt = !!n('html[dir="rtl"]').length,
			a;
		g(), a = null, n(t).on("resize" + v, function() {
			t.clearTimeout(a), a = t.setTimeout(function() {
				y()
			}, 50)
		}).trigger("resize" + v), w(".m-08-features-wrapper")
	})
}(jQuery, this, this.document),
function(n, t, i, r) {
	"use strict";

	function u() {
		var e = r,
			i = r,
			t = r,
			f, o, u;
		if (e = n("." + {
				stateForm: "m-13-dealer-search-form-state"
			}.stateForm).eq(0), t = GLOBAL_CONFIG.dealersearch.UI_GHS_STATES, e.length <= 0 || typeof t != "string") return !1;
		for (t = t.split(";"), i = e.find("select").eq(0), f = 0; f < t.length; f++) o = t[f].split(":"), i.append(n("<option />").val(o[0]).text(o[1]));
		Modernizr.touch && (u = i.find("option").eq(0), u.length > 0 && u.text() === "" && typeof i.data("placeholder") == "string" && (u.text(i.data("placeholder")), u.attr("selected", "").attr("disabled", "")))
	}
	n(i).ready(function() {
		var r = !1,
			f, e, o, i;
		/MSIE (\d+\.\d+);/.test(navigator.userAgent) && (f = new Number(RegExp.$1), r = f <= 8), r && /\/models\//g.test(t.location.href) && (n("div.m-13-dealer-map").hide(), n('div[data-m-02-cn-anchor="Visualizer"]').remove()), e = ".b-btn-download-filling", o = "click" + e;
		n(".b-btn-download").on(o, function() {
			var i = n(this);
			i.hasClass("filling") || i.hasClass("filled") || (i.addClass("filling"), t.setTimeout(function() {
				i.removeClass("filling"), i.addClass("filled")
			}, 1300))
		});
		i = !1, n(".m-13-find-dealer-wrapper").length > 0 && n(t).scroll(function() {
			var t;
			isScrolledIntoView(n("#finddealer")) && !i && (!n("#m-13-dealer-map-canvas").length || CURRENTPOOL == "china" || (t = maps(), t.initGoogle()), !n("#m-13-dealer-map-canvas").length || CURRENTPOOL != "china" || (t = maps(), t.initBaidu()), i = !0)
		}), n("#m-01-dealer-search-form").submit(function() {
			return n("#m-01-dealer-search-field").val(encodeURI(n("#m-01-dealer-search-field").val())), !0
		}), u()
	})
}(jQuery, this, this.document);
var maps = function() {
	function b() {
		$(".m-13-dealer-map-filter").is(":visible") ? ($(".m-13-dealer-map-filter").hide(), $(".m-13-dealer-map-loader").removeClass("active")) : ($(".m-13-dealer-map-filter").show(), $(".m-13-dealer-map-loader").addClass("active"))
	}

	function l(n) {
		var t, i;
		if ($(".m-13-show-all-dealers").hide(), t = $.xml2json(n), v.empty(), i = 0, u = f == "LOCAL" ? t.ListofLocations.Location : t.dealer, u == undefined) return pt(GLOBAL_CONFIG.dealersearch.UI_STRINGCONST_SEARCHFAIL), !1;
		u.length == undefined && (u = [u]), r.length = 0, r = []
	}

	function si() {}

	function hi(n) {
		ci({
			showAll: "true",
			searchValue: t,
			searchValueState: i
		}, n)
	}

	function ci(n, t) {
		var r, i, u;
		t != "" ? (r = t.split("?"), i = r.length == 1 ? [] : r[1].split("&")) : i = document.location.search.substr(1).split("&"), u = i.length, $.each(n, function(n, t) {
			n = encodeURI(n), t = encodeURI(t);
			for (var r = i.length, f; r--;)
				if (f = i[r].split("="), f[0] == n) {
					f[1] = t, i[r] = f.join("=");
					break
				}
			r < 0 && (i[u] = [n, t].join("="), u++)
		}), window.location.href = r[0] + "?" + i.join("&")
	}

	function pt(n) {
		b(), $(".m-13-dealer-error-msg").empty().html(n).addClass("active"), $(".m-13-dealer-map .m-13-dealer-map-filter").show()
	}

	function lt() {
		$(".m-13-dealer-map .m-13-dealer-map-filter").hide(), $(".m-13-dealer-error-msg").removeClass("active")
	}

	function ri(n) {
		for (var i = [{
				formSelector: ".m-13-dealer-search-form",
				type: "input",
				elementSelector: ".gui-search-input"
			}, {
				formSelector: ".m-13-dealer-search-form-name",
				type: "input",
				elementSelector: ".gui-search-input"
			}, {
				formSelector: ".m-13-dealer-search-form-state",
				type: "select",
				elementSelector: "select"
			}], f = $(n), r = null, u = null, t = 0, t = 0; t < i.length; t++)
			if (r = $(i[t].formSelector), r.length > 0 && !r.is(f) && (u = r.find(i[t].elementSelector), u.length > 0)) switch (i[t].type) {
				case "input":
					u.val("");
					break;
				case "select":
					u.val("").select2("val", "", !0)
			}
	}

	function g(n, t, i) {
		var t, r, u;
		if (noWebsite = !1, $.each(n, function(n, t) {
				n == "LINK" && typeof t == "undefined" && (noWebsite = !0)
			}), t.match("#ibid#") != null && noWebsite && (t = t.replace('<a class="gui-link-with-arrow" href="[[###LINKHREF###]]" id=#ibid#><span>' + GLOBAL_CONFIG.dealersearch.UI_STRINGCONST_DEALERINFOWEBSITE + "<\/span><\/a>", "")), r = t, $.each(n, function(n, t) {
				var i, u;
				n == "LINKLIST" && noWebsite && (t = GLOBAL_CONFIG.pool == "turkey" ? "" : '<ul class="b-link-list m-13-link-list"><li><a class="gui-link-with-arrow" target="_blank" href="[[###ROUTE###]]" ><span>' + GLOBAL_CONFIG.dealersearch.UI_STRINGCONST_DEALERINFOROUTE + "<\/span><\/a><\/li><\/ul>", noWebsite = !1), i = new RegExp("\\[\\[###" + n + "###\\]\\]", "g"), r = r.replace(i, t), u = new RegExp("\\[\\[###" + n + "-HIDE-IF-EMPTY###\\]\\]", "g"), (t == "" || t == undefined || t == "-") && (r = r.replace(u, "b-hidden"))
			}), Array.isArray(i) && i.length != 0)
			for (u = 0; u < i.length; u++) !$(r).find("." + i[u]).length || (r = $(r).find("." + i[u]).remove().end().get(0));
		return r
	}

	function ui() {}
	var nt, ii, o, p, ht, w, fi, a;
	(function() {
		$('form a[href="#m-13-dealer-search-submit"]').on("click", function(n) {
			n.preventDefault();
			var t = $(n.target),
				i = t.closest("form");
			return i.submit(), !1
		})
	})(), GLOBAL_CONFIG.pool = getURLParameter("pool") != "null" ? getURLParameter("pool") : GLOBAL_CONFIG.pool, nt = getURLParameter("faketouch") != null ? getURLParameter("faketouch") == "true" ? !0 : !1 : Modernizr.touch;
	var f = GLOBAL_CONFIG.pool == "usa" || GLOBAL_CONFIG.pool == "canada" ? "GS" : "LOCAL",
		st = $(".m-13-dealer-search").eq(0),
		ni = st.find(".m-13-dealer-map"),
		li = ni.find(".m-13-dealer-map-canvas"),
		ai = ni.find(".m-13-dealer-map-filter"),
		rt = st.find(".m-13-dealer-wrapper"),
		v = rt.find(".m-13-dealer"),
		k = st.find(".m-13-dealer-type-legend"),
		r = [],
		ti = 1,
		ut = "m-13-dealer-type-legend-has-types",
		at = "m-13-dealer-type-legend-has-type-",
		vt = 0,
		wt = [],
		e = [];
	e["default"] = [], e.mouseover = [], ii = null, o = null, (!/\/models\//i.test(location.href) || getURLParameter("showAll") == "true" || getURLParameter("m-01-dealer-search-field") != "null" || /\/belgium\/fr\/models\//i.test(location.href) || /\/belgium\/nl\/models\//i.test(location.href)) && v.addClass("showAll");
	var y = v.hasClass("showAll"),
		bt = '<div class="m-13-single-dealer-box m-13-dealer-type-code-[[###TYPECODE###]] m-13-dealer-search-mode-[[###SEARCHMODE###]]" data-type-code="[[###TYPECODE###]]"><div class="m-13-single-dealer-box-content-wrapper"><div class="m-13-dealer-info"><span class="m-13-dealer-marker"><\/span><span data-number="[[###NUMBER###]]" class="m-13-dealer-marker-number">[[###NUMBER###]]<\/span><span data-number="[[###NUMBER###]]" class="m-13-dealer-name">[[###NAME###]]<\/span>[[###TYPE_LEGEND###]]<p>[[###ADDRESS###]]<span class="m-13-dealer-phone"><br />' + GLOBAL_CONFIG.dealersearch.UI_STRINGCONST_DEALERINFOTEL + ' <a class="gui-link" href="[[###PHONEHREF###]]" ><span>[[###PHONE###]]<\/span><\/a>' + (f == "LOCAL" ? '<br /><span class="[[###FAX-HIDE-IF-EMPTY###]]">' + GLOBAL_CONFIG.dealersearch.UI_STRINGCONST_DEALERINFOFAX + " [[###FAX###]]<\/span>" : "") + (f == "LOCAL" && CURRENTPOOL != "japan" && CURRENTLANGUAGE != "jp" && CURRENTPOOL != "turkey" ? '<br /><span class="[[###EMAIL-HIDE-IF-EMPTY###]]">' + GLOBAL_CONFIG.dealersearch.UI_STRINGCONST_DEALERINFOEMAIL + " [[###EMAIL###]]<\/span>" : "") + '<\/span><\/p>[[###LINKLIST###]]<\/div><div class="m-13-link-buttons">' + (GLOBAL_CONFIG.pool == "turkey" ? "<br/>" : '<a class="gui-btn gui-link-with-pin" target="_blank" href="[[###ROUTE###]]" ><span>' + GLOBAL_CONFIG.dealersearch.UI_STRINGCONST_DEALERINFOROUTE + "<\/span><\/a>") + '<a class="gui-btn gui-link-with-phone" href="[[###PHONEHREF###]]" ><span>[[###PHONE###]]<\/span><\/a><a class="gui-btn gui-link-with-globe" target="_blank" href="[[###LINKHREF###]]" ><span>Website<\/span><\/a><\/div><\/div><\/div>',
		ei = '<div class="m-13-single-dealer-box usa m-13-dealer-type-code-[[###TYPECODE###]]" data-type-code="[[###TYPECODE###]]"><div class="m-13-single-dealer-box-content-wrapper"><div class="m-13-dealer-info"><span class="m-13-dealer-marker"><\/span><span data-number="[[###NUMBER###]]" class="m-13-dealer-marker-number">[[###NUMBER###]]<\/span><span data-number="[[###NUMBER###]]" class="m-13-dealer-name usa">[[###NAME###]]<\/span><br/><div class="m-13-dealer-address-box"><div class="m-13-dealer-address-usa"><p>[[###ADDRESS###]]<span class="m-13-dealer-phone"><br />' + GLOBAL_CONFIG.dealersearch.UI_STRINGCONST_DEALERINFOTEL + ' <a class="gui-link" href="[[###PHONEHREF###]]" ><span>[[###PHONE###]]<\/span><\/a><\/span><\/p><\/div><\/div><div class="m-13-dealer-content-usa"><ul class="m-13-dealer-link-list"><li><a class="gui-btn-with-arrow m-13-grey-btn" target="_blank" href="[[###LINKHREF###]]" ><span>' + GLOBAL_CONFIG.dealersearch.UI_STRINGCONST_DEALERINFOWEBSITE + '<\/span><\/a><\/li><li class="m-13-even"><a class="gui-btn-with-arrow m-13-grey-btn" target="_blank" href="[[###LINKHREF###]]/new/Porsche/search.php" ><span>' + GLOBAL_CONFIG.dealersearch.UI_STRINGCONST_ENTIRE_INVENTORY + '<\/span><\/a><\/li><\/ul><div class="m-13-dealer-accordion-usa"><div class="accordion-content"><ul class="m-13-dealer-link-list"><li><a class="gui-btn-with-arrow m-13-grey-btn" target="_blank" href="[[###LINKHREF###]]/about_us/contact_us.php" ><span>' + GLOBAL_CONFIG.dealersearch.UI_STRINGCONST_CONTACT + '<\/span><\/a><\/li><li class="m-13-even"><a class="gui-btn-with-arrow m-13-grey-btn" target="_blank" href="[[###LINKHREF###]]/service/service_request.php" ><span>' + GLOBAL_CONFIG.dealersearch.UI_STRINGCONST_SCHEDULE_SERVICE_APPT + '<\/span><\/a><\/li><li><a class="gui-btn-with-arrow m-13-grey-btn" target="_blank" href="[[###LINKHREF###]]/specials/" ><span>' + GLOBAL_CONFIG.dealersearch.UI_STRINGCONST_SPECIALS + '<\/span><\/a><\/li><\/ul><div class="m-13-dealer-hours"><div class="m-13-dealer-hours-row"><div class="m-13-dealer-hours-item"><p><strong>Sales:<\/strong> [[###SALESPHONE###]]<\/p><p>[[###SALESHOURS###]]<\/p><\/div><div class="m-13-dealer-hours-item m-13-even"><p><strong>Service:<\/strong> [[###SERVICEPHONE###]]<\/p><p>[[###SERVICEHOURS###]]<\/p><\/div><\/div><div class="m-13-dealer-hours-row"><div class="m-13-dealer-hours-item"><p><strong>Parts:<\/strong> [[###PARTSPHONE###]]<\/p><p>[[###PARTSHOURS###]]<\/p><\/div><\/div><\/div><\/div><a href="#" class="accordion-headline"><span class="accordion-more">More<\/span><span class="accordion-less">Less<\/span><\/a><\/div><\/div><\/div><\/div><\/div>',
		oi = {
			GS: '<ul class="b-link-list m-13-link-list"><li><a class="gui-link-with-arrow" target="_blank" href="[[###ROUTE###]]" ><span>' + GLOBAL_CONFIG.dealersearch.UI_STRINGCONST_DEALERINFOROUTE + '<\/span><\/a><\/li><li><a class="gui-link-with-arrow" target="_blank" href="[[###LINKHREF###]]" ><span>' + GLOBAL_CONFIG.dealersearch.UI_STRINGCONST_DEALERINFOWEBSITE + '<\/span><\/a><\/li><li><a class="gui-link-with-arrow" target="_blank" href="[[###LINKHREF###]]/about_us/contact_us.php" ><span>' + GLOBAL_CONFIG.dealersearch.UI_STRINGCONST_CONTACT + '<\/span><\/a><\/li><li><a class="gui-link-with-arrow" target="_blank" href="[[###LINKHREF###]]/specials/" ><span>' + GLOBAL_CONFIG.dealersearch.UI_STRINGCONST_SPECIALS + '<\/span><\/a><\/li><li><a class="gui-link-with-arrow" target="_blank" href="[[###LINKHREF###]]/new/Porsche/search.php" ><span>' + GLOBAL_CONFIG.dealersearch.UI_STRINGCONST_ENTIRE_INVENTORY + '<\/span><\/a><\/li><li><a class="gui-link-with-arrow" target="_blank" href="[[###LINKHREF###]]/service/service_request.php" ><span>' + GLOBAL_CONFIG.dealersearch.UI_STRINGCONST_SCHEDULE_SERVICE_APPT + '<\/span><\/a><\/li><li><a class="gui-link-with-arrow" target="_blank" href="http://mobileapp.porschedealer.com" ><span>' + GLOBAL_CONFIG.dealersearch.UI_STRINGCONST_DOWNLOAD_MOBIL_APP + "<\/span><\/a><\/li><\/ul>",
			LOCAL: '<ul class="b-link-list m-13-link-list"><li><a class="gui-link-with-arrow" target="_blank" href="[[###ROUTE###]]" ><span>' + GLOBAL_CONFIG.dealersearch.UI_STRINGCONST_DEALERINFOROUTE + '<\/span><\/a><\/li><li><a class="gui-link-with-arrow" target="_blank" href="[[###LINKHREF###]]" ><span>' + GLOBAL_CONFIG.dealersearch.UI_STRINGCONST_DEALERINFOWEBSITE + "<\/span><\/a><\/li><\/ul>"
		},
		yt = '<div class="m-13-infobox m-13-dealer-info [[###HASIMGCLASS###]]  m-13-dealer-type-code-[[###TYPECODE###]]" data-type-code="[[###TYPECODE###]]"><div class="m-13-infobox-info"><span class="m-13-dealer-name ">[[###NAME###]]<\/span><p class="m-13-dealer-address">[[###ADDRESS###]]<br />' + GLOBAL_CONFIG.dealersearch.UI_STRINGCONST_DEALERINFOTEL + '[[###PHONE###]]<br /><div class="fax [[###FAX-HIDE-IF-EMPTY###]]">' + GLOBAL_CONFIG.dealersearch.UI_STRINGCONST_DEALERINFOFAX + '[[###FAX###]]<\/div><br/><div class="m-13-infobox-links">' + (GLOBAL_CONFIG.pool == "turkey" ? "" : '<a class="gui-btn-with-arrow m-13-grey-btn m-13-infobox-btn" href="[[###ROUTE###]]" ><span>' + GLOBAL_CONFIG.dealersearch.UI_STRINGCONST_DEALERINFOROUTE + "<\/span><\/a><br/>") + '<a class="gui-btn-with-arrow m-13-grey-btn m-13-infobox-btn" href="[[###LINKHREF###]]" id=#ibid#><span>' + GLOBAL_CONFIG.dealersearch.UI_STRINGCONST_DEALERINFOWEBSITE + '<\/span><\/a><\/div><\/div><div class="m-13-infobox-image"><img src="[[###IMAGEURL###]]" /><\/div><\/div>',
		n = {
			LINKLIST: oi[f],
			NUMBER: "",
			TYPECODE: "",
			SEARCHMODE: "",
			NAME: "",
			PHONE: "",
			PHONEHREF: "",
			FAX: "-",
			EMAIL: "-",
			ADDRESS: "",
			LINKHREF: "",
			LINK: "",
			IMAGEURL: "",
			HASIMGCLASS: "",
			DEALERID: "",
			TYPE_LEGEND: ""
		},
		tt = "<BR />",
		kt = document.location.protocol + "//" + document.location.host,
		ft = {
			unknown: document.location.protocol + "//" + document.location.host + "/images/icon_pin-sprite-type_code-grey.png",
			centre: document.location.protocol + "//" + document.location.host + "/images/icon_pin-sprite-type_code-red.png",
			classicpartner: document.location.protocol + "//" + document.location.host + "/images/icon_pin-sprite-type_code-red.png",
			classiccentre: document.location.protocol + "//" + document.location.host + "/images/icon_pin-sprite-type_code-grey.png",
			exclusiveflagship: document.location.protocol + "//" + document.location.host + "/images/icon_pin-sprite-type_code-red.png",
			exclusivefsdandclassicpartner: document.location.protocol + "//" + document.location.host + "/images/icon_pin-sprite-type_code-red.png",
			independentbodyrepair: document.location.protocol + "//" + document.location.host + "/images/icon_pin-sprite-type_code-grey.png",
			preownedcentre: document.location.protocol + "//" + document.location.host + "/images/icon_pin-sprite-type_code-green.png",
			servicecentre: document.location.protocol + "//" + document.location.host + "/images/icon_pin-sprite-type_code-blue.png",
			site: document.location.protocol + "//" + document.location.host + "/images/icon_pin-sprite-type_code-grey.png"
		},
		it = "",
		dt = {
			unknown: !1,
			centre: !1,
			classicpartner: ["classicpartner"],
			classiccentre: !1,
			exclusiveflagship: ["exclusiveflagship"],
			exclusivefsdandclassicpartner: ["exclusiveflagship", "classicpartner"],
			independentbodyrepair: !1,
			preownedcentre: !1,
			servicecentre: !1,
			site: !1
		},
		s = "",
		et = "";
	getURLParameter("m-01-dealer-search-field") != "" && getURLParameter("m-01-dealer-search-field") != "null" && (et = getURLParameter("m-01-dealer-search-field")), f == "LOCAL" ? (p = GLOBAL_CONFIG.dealersearch.UI_GHS_SEARCHPOOL != undefined && GLOBAL_CONFIG.dealersearch.UI_GHS_SEARCHPOOL != "" ? GLOBAL_CONFIG.dealersearch.UI_GHS_SEARCHPOOL : GLOBAL_CONFIG.pool, ht = GLOBAL_CONFIG.dealersearch.language != undefined && GLOBAL_CONFIG.dealersearch.language != "" ? GLOBAL_CONFIG.dealersearch.language : GLOBAL_CONFIG.language, typeof GLOBAL_CONFIG.dealersearch.UI_GHS_SEARCH_IN_STATE != "string" && (GLOBAL_CONFIG.dealersearch.UI_GHS_SEARCH_IN_STATE = ""), typeof GLOBAL_CONFIG.dealersearch.UI_GHS_MAXPROXIMITY != "string" && (GLOBAL_CONFIG.dealersearch.UI_GHS_MAXPROXIMITY = ""), typeof GLOBAL_CONFIG.dealersearch.UI_GHS_MAXNUMTRIES != "string" && (GLOBAL_CONFIG.dealersearch.UI_GHS_MAXNUMTRIES = ""), typeof GLOBAL_CONFIG.dealersearch.UI_GHS_MAXRESULTS != "string" && (GLOBAL_CONFIG.dealersearch.UI_GHS_MAXRESULTS = ""), typeof GLOBAL_CONFIG.dealersearch.UI_GHS_LOCATION_TYPE != "string" && (GLOBAL_CONFIG.dealersearch.UI_GHS_LOCATION_TYPE = "Search.LocationTypes.Dealer"), w = {
		proximity: document.location.protocol + "//" + document.location.host + "/all/dealer2/GetLocationsWebService.asmx/GetLocationsInStateSpecialJS?market=" + p + "&siteId=" + p + "&language=" + ht + "&state=[[###STATE###]]&_locationType=" + GLOBAL_CONFIG.dealersearch.UI_GHS_LOCATION_TYPE + "&searchMode=proximity&searchKey=[[###POSITION###]]&address=[[###ADDRESS###]]&maxproximity=" + GLOBAL_CONFIG.dealersearch.UI_GHS_MAXPROXIMITY + "&maxnumtries=" + GLOBAL_CONFIG.dealersearch.UI_GHS_MAXNUMTRIES + "&maxresults=" + GLOBAL_CONFIG.dealersearch.UI_GHS_MAXRESULTS,
		nearestbyip: document.location.protocol + "//" + document.location.host + "/all/dealer2/GetLocationsWebService.asmx/GetLocationsInStateSpecialJS?market=" + p + "&siteId=" + p + "&language=" + ht + "&state=[[###STATE###]]&_locationType=" + GLOBAL_CONFIG.dealersearch.UI_GHS_LOCATION_TYPE + "&searchMode=nearestbyip&searchKey=&address=&maxproximity=" + GLOBAL_CONFIG.dealersearch.UI_GHS_MAXPROXIMITY + "&maxnumtries=" + GLOBAL_CONFIG.dealersearch.UI_GHS_MAXNUMTRIES + "&maxresults=" + GLOBAL_CONFIG.dealersearch.UI_GHS_MAXRESULTS,
		state: document.location.protocol + "//" + document.location.host + "/all/dealer2/GetLocationsWebService.asmx/GetLocationsInStateSpecialJS?market=" + p + "&siteId=" + p + "&language=" + ht + "&state=[[###STATE###]]&_locationType=" + GLOBAL_CONFIG.dealersearch.UI_GHS_LOCATION_TYPE + "&searchMode=state&searchKey=[[###STATE###]]&address=&maxproximity=" + GLOBAL_CONFIG.dealersearch.UI_GHS_MAXPROXIMITY + "&maxnumtries=" + GLOBAL_CONFIG.dealersearch.UI_GHS_MAXNUMTRIES + "&maxresults=" + GLOBAL_CONFIG.dealersearch.UI_GHS_MAXRESULTS,
		market: document.location.protocol + "//" + document.location.host + "/all/dealer2/GetLocationsWebService.asmx/GetLocationsInStateSpecialJS?market=" + p + "&siteId=" + p + "&language=" + ht + "&state=[[###STATE###]]&_locationType=" + GLOBAL_CONFIG.dealersearch.UI_GHS_LOCATION_TYPE + "&searchMode=market&searchKey=&address=&maxproximity=" + GLOBAL_CONFIG.dealersearch.UI_GHS_MAXPROXIMITY + "&maxnumtries=" + GLOBAL_CONFIG.dealersearch.UI_GHS_MAXNUMTRIES + "&maxresults=" + GLOBAL_CONFIG.dealersearch.UI_GHS_MAXRESULTS
	}) : w = {
		proximity: document.location.protocol + "//" + document.location.host + "/all/dealer2/" + GLOBAL_CONFIG.pool + "/externalSearchXml.aspx?geo=[[###POSITION###]]&lim=9",
		nearestbyip: undefined,
		state: document.location.protocol + "//" + document.location.host + "/all/dealer2/" + GLOBAL_CONFIG.pool + "/externalSearchXml.aspx?state=[[###STATE###]]",
		market: undefined
	}, f === "GS" && st.addClass("m-13-gs-mode");
	var h, d = [],
		ct = [],
		c, ot, t, i, u, gt;
	return $(".m-13-dealer-search-input").placeholder(), $(".m-13-find-dealer-localization").click(function() {
		if (lt(), t = "currentLocation", $(".m-13-dealer-search-input").val("").focus().blur(), b(), navigator.geolocation) navigator.geolocation.getCurrentPosition(function(n) {
			c = n;
			var t = w.proximity.replace(/\[\[###POSITION###\]\]/g, n.coords.latitude + "%7C" + n.coords.longitude);
			t = t.replace(/\[\[###ADDRESS###\]\]/g, ""), t = t.replace(/\[\[###STATE###\]\]/g, encodeURIComponent(GLOBAL_CONFIG.dealersearch.UI_GHS_SEARCH_IN_STATE)), pag_tracker.page("dealersearch/?searchkey=" + n.coords.latitude + "%7C" + n.coords.longitude + "&searchcat=portal dealer search"), s != "" ? $.ajax({
				url: s,
				type: "POST",
				dataType: "xml",
				data: {
					address: t
				},
				success: l
			}) : $.ajax({
				url: t,
				dataType: "xml",
				type: "GET",
				success: l
			})
		}, si);
		else {
			var n = w.nearestbyip;
			n = n.replace(/\[\[###STATE###\]\]/g, encodeURIComponent(GLOBAL_CONFIG.dealersearch.UI_GHS_SEARCH_IN_STATE)), typeof n == "string" && (s != "" ? $.ajax({
				url: s,
				type: "POST",
				data: {
					address: n
				},
				success: l
			}) : $.ajax({
				url: n,
				type: "GET",
				success: l
			}))
		}
	}), $(".m-13-show-all-dealers").click(function() {
		hi($(this).attr("data-target"))
	}), fi = function() {
		function ci() {
			var n, r, u;
			typeof google != "undefined" && (google.maps.Map.prototype.clearOverlays = function() {
				for (var n = 0; n < d.length; n++) d[n].setMap(null)
			}, ht = new google.maps.Geocoder, c != undefined ? (n = new google.maps.LatLng(c.coords.latitude, c.coords.longitude), r = 8) : (n = new google.maps.LatLng(GLOBAL_CONFIG.dealersearch.UI_MAP_DEFAULTCOORDS_LAT, GLOBAL_CONFIG.dealersearch.UI_MAP_DEFAULTCOORDS_LNG), r = GLOBAL_CONFIG.dealersearch.UI_MAP_DEFAULTCOORDS_ZOOMLEVEL), u = nt ? {
				zoom: r,
				center: n,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				disableDefaultUI: !0,
				draggable: !1,
				scrollwheel: !1,
				zoomControl: !0,
				zoomControlOptions: {
					style: google.maps.ZoomControlStyle.DEFAULT,
					position: google.maps.ControlPosition.TOP_RIGHT
				}
			} : {
				zoom: r,
				center: n,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				disableDefaultUI: !0,
				draggable: !0,
				scrollwheel: !1,
				zoomControl: !0,
				zoomControlOptions: {
					style: google.maps.ZoomControlStyle.DEFAULT,
					position: google.maps.ControlPosition.TOP_RIGHT
				}
			}, h = new google.maps.Map(document.getElementById("m-13-dealer-map-canvas"), u), google.maps.event.addListenerOnce(h, "idle", function() {
				getURLParameter("searchValue") != "null" || getURLParameter("m-01-dealer-search-field") != "" && getURLParameter("m-01-dealer-search-field") != "null" ? (t = decodeURI(getURLParameter("searchValue")) != "null" ? decodeURI(getURLParameter("searchValue")) : decodeURI(getURLParameter("m-01-dealer-search-field")), i = decodeURI(getURLParameter("searchValueState")) != "null" ? decodeURI(getURLParameter("searchValueState")) : decodeURI(getURLParameter("m-01-dealer-search-field")), t == "currentLocation" ? $(".m-13-find-dealer-localization").trigger("click") : typeof t == "string" && t.length > 0 && t != "undefined" ? ($(".m-13-dealer-search-input").val(t), $(".m-13-dealer-search-form").submit()) : typeof i == "string" && i.length > 0 && i != "undefined" && (i = i.toUpperCase(), $(".m-13-dealer-search-form-state select").val(i).select2("val", i), $(".m-13-dealer-search-form-state").submit())) : !GLOBAL_CONFIG.dealersearch.UI_INIT_MARKETSEARCH || hi()
			}), $(".m-13-marketsearch").click(function() {
				var n = "dealersearch";
				window.location.href.indexOf(n) > -1 ? hi() : (myUrl = location.host, myUrl += "/" + GLOBAL_CONFIG.pool, (GLOBAL_CONFIG.language != "none" || GLOBAL_CONFIG.language != "") && (myUrl += "/" + GLOBAL_CONFIG.language), myUrl += "/" + n, location.href = window.location.protocol + "//" + myUrl)
			}))
		}

		function fi() {
			function u() {
				n.addClass(r), f()
			}

			function f() {
				n.on("click." + i, o)
			}

			function e() {
				n.off("click." + i)
			}

			function o() {
				var i = rt.find(".m-13-single-dealer-box"),
					r = t.scrollTop(),
					n = -1;
				i.each(function() {
					if (n = $(this).position().top, n > r + 10) return !1;
					n = -1
				}), n !== -1 && t.animate({
					scrollTop: n
				}, 300)
			}
			var t = rt.find(".m-13-dealer-scroll-wrapper").eq(0),
				n = rt.find(".m-13-dealer-scroll-button").eq(0),
				i = "dealerScrollButton",
				r = "m-13-is-visible";
			u(), this.terminate = function() {
				n.removeClass(r), e()
			}
		}

		function p(t) {
			var i, u, s, c, l, a, p;
			if (google.maps.event.addDomListener(window, "resize", function() {
					h.fitBounds(ot)
				}), ot = new google.maps.LatLngBounds, h.clearOverlays(), d = [], vt = 0, st.find(".m-13-context").addClass("m-13-results-loaded"), google.maps.event.trigger(h, "resize"), gt instanceof fi && gt.terminate(), t)
				for (i = 0; i < t.length; i++)
					if (it = ft.unknown, f == "LOCAL") {
						if (n.NUMBER = i + 1, GLOBAL_CONFIG.dealersearch.UI_SHOW_TYPE_CODES ? (n.TYPECODE = t[i].TypeCode, n.TYPECODE = typeof n.TYPECODE == "string" && n.TYPECODE != "" ? n.TYPECODE : "unknown", n.TYPECODE != "unknown" && $.inArray(n.TYPECODE, r) && r.push(n.TYPECODE)) : n.TYPECODE = "unknown", n.SEARCHMODE = ("" + t[i].SearchMode).toLowerCase(), n.NAME = t[i].Name, n.ADDRESS = GLOBAL_CONFIG.pool == "japan" && GLOBAL_CONFIG.language == "jp" ? (t[i].AddressData.PostCode != "" && t[i].AddressData.PostCode != undefined ? t[i].AddressData.PostCode + " " : "") + tt + (t[i].StateName != "" && t[i].StateName != undefined ? t[i].StateName + " " : "") + (t[i].AddressData.City != "" && t[i].AddressData.City != undefined ? t[i].AddressData.City + " " : "") + t[i].AddressData.Street : t[i].AddressData.Street + tt + (t[i].AddressData.PostCode != "" && t[i].AddressData.PostCode != undefined ? t[i].AddressData.PostCode + " " : "") + (t[i].AddressData.City != "" && t[i].AddressData.City != undefined ? t[i].AddressData.City + " " : ""), n.PHONE = t[i].AddressData.Phone != "" && typeof t[i].AddressData.Phone != "undefined" ? t[i].AddressData.Phone : "-", n.PHONEHREF = "tel:" + t[i].AddressData.Phone, typeof t[i].AddressData.Fax != "undefined" && /([0-9])\w+/.test(t[i].AddressData.Fax) && (n.FAX = t[i].AddressData.Fax), n.EMAIL = GLOBAL_CONFIG.pool == "japan" && GLOBAL_CONFIG.language == "jp" ? "" : t[i].Email1 != "" && t[i].Email1 != undefined ? '<a class="gui-link" href="mailto:' + t[i].Email1 + '">' + t[i].Email1 + "<\/a>" : "-", n.LINKHREF = t[i].Url1, n.LINK = t[i].Url1, n.IMAGEURL = kt + t[i].InfoWinThumbPath, n.HASIMGCLASS = t[i].InfoWinThumbPath == "" ? "no-img" : "", n.ROUTE = navigator.userAgent.match(/iPhone|iPad|iPod/i) != null ? "http://maps.apple.com/maps?q=" + t[i].AddressData.Street.replace(" ", "+").replace("&", "%26") + "," + (t[i].AddressData.PostCode != undefined ? t[i].AddressData.PostCode.replace(" ", "+") + "," : "") + (t[i].AddressData.City != undefined ? t[i].AddressData.City.replace(" ", "+") + "@" : "@") + t[i].Coordinates.Lat + "," + t[i].Coordinates.Lng : "https://www.google.de/maps/place/" + t[i].AddressData.Street + "," + t[i].AddressData.PostCode + " " + t[i].AddressData.City, u = dt[n.TYPECODE], n.TYPE_LEGEND = "", $.isArray(u) && u.length > 0) {
							for (n.TYPE_LEGEND = '<div class="m-13-dealers-type-legend">', s = 0; s < u.length; s++) {
								try {
									c = GLOBAL_CONFIG.dealersearch.UI_STRINGCONST_TYPE_CODE_LEGEND[u[s]]
								} catch (w) {
									c = ""
								}
								typeof c == "string" && c.length > 0 && (n.TYPE_LEGEND += '<span class="', n.TYPE_LEGEND += u[s], s + 1 == u.length && (n.TYPE_LEGEND += " last"), n.TYPE_LEGEND += '">', n.TYPE_LEGEND += GLOBAL_CONFIG.dealersearch.UI_STRINGCONST_TYPE_CODE_LEGEND[u[s]], n.TYPE_LEGEND += "<\/span>")
							}
							n.TYPE_LEGEND += "<\/div>"
						}
						it = typeof ft[n.TYPECODE] == "string" ? ft[n.TYPECODE] : it, e = new google.maps.MarkerImage(it, new google.maps.Size(26, 40), new google.maps.Point(0, i * 40)), (y || i < 3) && (l = new google.maps.LatLng(t[i].Coordinates.Lat, t[i].Coordinates.Lng), ot.extend(l), a = new google.maps.Marker({
							position: l,
							map: h,
							cursor: nt ? "default" : "pointer",
							title: t[i].Name,
							icon: e,
							id: i,
							infoWinHTML: g(n, yt)
						}), nt || google.maps.event.addListener(a, "click", function() {
							si(this)
						}), d.push(a)), vt++, (y || i < 3) && v.append(g(n, bt)), i == t.length - 1 && oi(t)
					} else p = function(i) {
						ht.geocode({
							address: t[i].address[0].street + "," + t[i].address[0].city + "," + t[i].address[0].region
						}, function(r) {
							var u, f;
							if (t[i].theData = $.extend({}, n), t[i].theData.NUMBER = i + 1, t[i].theData.NAME = t[i].name, t[i].theData.ADDRESS = t[i].address[0].street + tt + t[i].address[0].city + ", <nobr>" + t[i].address[0].region + " " + t[i].address[0].postalcode + "<\/nobr>", t[i].theData.PHONE = t[i].address[0].phone, t[i].theData.PHONEHREF = "tel:" + t[i].address[0].phone, t[i].theData.LINKHREF = t[i].url, t[i].theData.LINK = t[i].url, t[i].theData.IMAGEURL = t[i].details.dealer_image || document.location.protocol + "//" + document.location.host + "/all/dealer2/assets/images/default_wide.jpg", t[i].theData.HASIMGCLASS = "no-img", t[i].theData.TYPECODE = "unknown", t[i].theData.SALESPHONE = t[i].details.sales.phone, t[i].theData.SALESHOURS = t[i].details.sales.hours, t[i].theData.SERVICEPHONE = t[i].details.service.phone, t[i].theData.SERVICEHOURS = t[i].details.service.hours, t[i].theData.PARTSPHONE = t[i].details.parts.phone, t[i].theData.PARTSHOURS = t[i].details.parts.hours, t[i].theData.FAX.replace(/\s/g, "") == "-" && wt.push("fax"), t[i].theData.ROUTE = "http://maps.apple.com/maps?q=" + t[i].address[0].street.replace(" ", "+") + "," + t[i].address[0].postalcode.replace(" ", "+") + "," + t[i].address[0].city.replace(" ", "+"), t[i].latLng = new google.maps.LatLng(r[0].geometry.location.lat(), r[0].geometry.location.lng()), vt++, vt == t.length) {
								for (u = 0; u < t.length; u++)(y || u < 3) && (e["default"].push(new google.maps.MarkerImage(it, new google.maps.Size(26, 40), new google.maps.Point(0, u * 40))), e.mouseover.push(new google.maps.MarkerImage(ft.exclusiveflagship, new google.maps.Size(26, 40), new google.maps.Point(0, u * 40))), typeof t[u].latLng == "object" && (ot.extend(t[u].latLng), f = new google.maps.Marker({
									position: t[u].latLng,
									map: h,
									cursor: nt ? "default" : "pointer",
									title: "",
									icon: e["default"][u],
									infoWinHTML: g(t[u].theData, yt, wt)
								}), d.push(f), h.fitBounds(ot), nt || (google.maps.event.addListener(f, "click", function() {
									si(this), ii = this.icon.origin.y / 40, !o || o == this.icon.origin.y / 40 || (o.setIcon(e["default"][o.icon.origin.y / 40]), o = this), o = this
								}), google.maps.event.addListener(f, "mouseover", function() {
									this.setIcon(e.mouseover[this.icon.origin.y / 40])
								}), google.maps.event.addListener(f, "mouseout", function() {
									(!o || o != this) && this.setIcon(e["default"][this.icon.origin.y / 40])
								}))), v.append(g(t[u].theData, ei)), u % 2 != 0 && v.append('<div class="separator">'));
								new google.maps.event.trigger(d[0], "click"), b(), v.find(".m-13-dealer-marker-number, .m-13-dealer-name").click(function() {
									new google.maps.event.trigger(d[$(this).attr("data-number") - 1], "click")
								}), oi(t)
							}
						})
					}, t.length > 9 ? window.setTimeout($.proxy(p, this, i), i * 600) : p(i), wt = [];
			gt = new fi
		}

		function oi(n) {
			var t, i;
			if (f == "LOCAL" && (n.length == 1 ? (h.setCenter(new google.maps.LatLng(n[0].Coordinates.Lat, n[0].Coordinates.Lng)), h.setZoom(16), !y && n.length > 3 && $(".m-13-show-all-dealers").show(), $(".m-13-show-all-dealers").hide()) : (h.fitBounds(ot), !y && n.length > 3 && $(".m-13-show-all-dealers").show())), GLOBAL_CONFIG.dealersearch.UI_SHOW_TYPE_CODES && (k.hasClass(ut) && (k.removeClass(ut), k.removeClass(function(n, t) {
					return (t.match(new RegExp("\\b" + at + "\\S+", "g")) || []).join(" ")
				})), r.length >= ti)) {
				for (t = [], i = 0; i < r.length; i++) t.push(at + r[i]);
				t.length > 0 && (t.push(ut), k.addClass(t.join(" ")))
			}
			accordionInit(), rt.show(), f == "LOCAL" && (b(), ui(), $(".m-13-dealer-marker-number, .m-13-dealer-name").click(function() {
				new google.maps.event.trigger(d[$(this).attr("data-number") - 1], "click")
			})), !y && n.length > 3 && $(".m-13-show-all-dealers").show()
		}

		function li() {
			if (ct) {
				for (var n in ct) ct[n].close();
				ct.length = 0
			}
		}

		function si(n) {
			li();
			var t = new google.maps.InfoWindow({
				content: n.infoWinHTML
			});
			ct.push(t), t.open(h, n), google.maps.event.addListener(t, "closeclick", function() {
				o.setIcon(e["default"][o.icon.origin.y / 40]), o = null, $(".m-13-single-dealer-box").removeClass("mouseover")
			}), google.maps.event.addListener(t, "domready", function() {
				n.setIcon(e.mouseover[this.anchor.icon.origin.y / 40]), $(".m-13-single-dealer-box").removeClass("mouseover"), typeof this.anchor.icon != "undefined" && $(".m-13-dealer-scroll-wrapper").scrollTo("div.m-13-single-dealer-box:eq(" + this.anchor.icon.origin.y / 40 + ")", {
					duration: 100,
					axis: "y"
				}), $(".m-13-single-dealer-box").eq(this.anchor.icon.origin.y / 40).addClass("mouseover")
			})
		}

		function hi() {
			lt(), b();
			var n = w.market.replace(/\[\[###STATE###\]\]/g, i);
			s != "" ? $.ajax({
				url: s,
				type: "POST",
				data: {
					address: n
				},
				success: l,
				complete: function() {
					p(u)
				}
			}) : $.ajax({
				url: n,
				type: "GET",
				success: l,
				complete: function() {
					p(u)
				}
			})
		}
		var ht, ni, a;
		window.initDealerSearch = ci, ni = "maps.googleapis.com", typeof GLOBAL_CONFIG.dealersearch.UI_MAP_GOOGLE_MAPS_HOST == "string" && GLOBAL_CONFIG.dealersearch.UI_MAP_GOOGLE_MAPS_HOST.length > 0 && (ni = GLOBAL_CONFIG.dealersearch.UI_MAP_GOOGLE_MAPS_HOST), a = document.location.protocol + "//" + ni + "/maps/api/js?sensor=true", a += "&language=" + GLOBAL_CONFIG.preferredLanguage, a += "&callback=initDealerSearch", document.location.host == "localhost" || document.location.host.indexOf("lu-") == 0 || (a += "&client=gme-volkswagenag3", a += "&channel=PORSCHE-" + GLOBAL_CONFIG.pool.toUpperCase() + "-DEALERSEARCH"), $.ajax({
			dataType: "script",
			cache: !0,
			url: a
		}), $(".m-13-dealer-search-form").submit(function(n) {
			var r, f, e;
			return (n.preventDefault(), getURLParameter("searchValue") != "null" || getURLParameter("m-01-dealer-search-field") != "" && getURLParameter("m-01-dealer-search-field") != "null", $(".m-13-dealer-search-input").focus().blur(), lt(), b(), ri(this), i = undefined, t = $(".m-13-dealer-search-input").val(), et = t, r = $(".m-13-dealer-search-input").val(), f = new RegExp(/^\d{1,4}$/), GLOBAL_CONFIG.pool == "usa" && f.test(r) && (r = r.length >= 5 ? r : new Array(6 - r.length).join("0") + r), e = /(\b[0-9]{4,5}\b)|(\b[A-Z]{2,2}[0-9]{3,3}\b)|(\b[0-9]{3,3}[A-Z]{2,2}\b)/, GLOBAL_CONFIG.pool == "france" && (typeof r != "string" || r.length == 0 || !e.test(r.toUpperCase()))) ? (pt(GLOBAL_CONFIG.dealersearch.UI_STRINGCONST_SEARCHFAIL), !1) : (GLOBAL_CONFIG.dealersearch.UI_GHS_SEARCHVALUE_EXTENSION != "" && (r = r + ", " + GLOBAL_CONFIG.dealersearch.UI_GHS_SEARCHVALUE_EXTENSION), ht.geocode({
				address: r,
				region: GLOBAL_CONFIG.dealersearch.UI_MAP_DEFAULT_REGION
			}, function(n, t) {
				if (t == "ZERO_RESULTS") {
					if (c = !1, !GLOBAL_CONFIG.dealersearch.ENABLE_ADDRESS_SEARCH) return pt(GLOBAL_CONFIG.dealersearch.UI_STRINGCONST_SEARCHFAIL), !1
				} else c = {
					coords: {
						latitude: n[0].geometry.location.lat(),
						longitude: n[0].geometry.location.lng()
					}
				};
				var i = w.proximity.replace(/\[\[###POSITION###\]\]/g, c != !1 ? c.coords.latitude + "%7C" + c.coords.longitude : "");
				i = i.replace(/\[\[###ADDRESS###\]\]/g, encodeURIComponent(et)), i = i.replace(/\[\[###STATE###\]\]/g, encodeURIComponent(GLOBAL_CONFIG.dealersearch.UI_GHS_SEARCH_IN_STATE)), s != "" ? $.ajax({
					url: s,
					type: "POST",
					data: {
						address: i
					},
					success: l,
					complete: function() {
						p(u)
					}
				}) : $.ajax({
					url: i,
					type: "GET",
					success: l,
					complete: function() {
						p(u)
					}
				})
			}), !1)
		}), $(".m-13-dealer-search-form-state").submit(function(n) {
			var r, f;
			if (n.preventDefault(), t = undefined, r = $(".m-13-dealer-search-form-state select").val(), typeof r == "string" && r !== "") i = r;
			else return;
			return pag_tracker.page("dealersearch/?searchkey=STATE:" + i + "&searchcat=portal dealer search"), lt(), b(), ri(this), f = w.state.replace(/\[\[###STATE###\]\]/g, i), s != "" ? $.ajax({
				url: s,
				type: "POST",
				data: {
					address: f
				},
				success: l,
				complete: function() {
					p(u)
				}
			}) : $.ajax({
				url: f,
				type: "GET",
				success: l,
				complete: function() {
					p(u)
				}
			}), !1
		})
	}, a = function() {
		function e(n, t, i) {
			var u = new BMap.Icon("/images/icon_pin-sprite-type_code-centre.png", new BMap.Size(26, 40), {
					offset: new BMap.Size(10, 25),
					imageOffset: new BMap.Size(0, 0 - t * 40)
				}),
				r = new BMap.Marker(n, {
					icon: u
				}),
				f = new BMap.InfoWindow(i);
			a.addOverlay(r), r.addEventListener("click", function() {
				this.openInfoWindow(f), $('img[src$="iws3.png"]').hide()
			})
		}
		$.getScript("http://api.map.baidu.com/getscript?v=2.0&ak=B74b66c16dece8bc726d25dcf77b6399&services=&key=20141104111948", function() {
			function p(t, i) {
				var c, u, o, s, h, l;
				if (typeof t != "undefined")
					if (a.clearOverlays(), c = {
							zh: []
						}, CURRENTLANGUAGE === "en") $.ajax({
						url: i,
						type: "GET",
						success: function(n) {
							c.zh = $.xml2json(n).ListofLocations.Location
						},
						complete: function() {
							for (var u, o, s, h, i = 0; i < t.length; i++) {
								if (it = ft.unknown, f == "LOCAL") {
									if (n.NUMBER = i + 1, GLOBAL_CONFIG.dealersearch.UI_SHOW_TYPE_CODES ? (n.TYPECODE = t[i].TypeCode, n.TYPECODE = typeof n.TYPECODE == "string" && n.TYPECODE != "" ? n.TYPECODE : "unknown", n.TYPECODE != "unknown" && $.inArray(n.TYPECODE, r) && r.push(n.TYPECODE)) : n.TYPECODE = "unknown", n.NAME = t[i].Name, n.ADDRESS = GLOBAL_CONFIG.pool == "japan" && GLOBAL_CONFIG.language == "jp" ? (t[i].AddressData.PostCode != "" && t[i].AddressData.PostCode != undefined ? t[i].AddressData.PostCode + " " : "") + tt + (t[i].StateName != "" && t[i].StateName != undefined ? t[i].StateName + " " : "") + (t[i].AddressData.City != "" && t[i].AddressData.City != undefined ? t[i].AddressData.City + " " : "") + t[i].AddressData.Street : t[i].AddressData.Street + tt + (t[i].AddressData.PostCode != "" && t[i].AddressData.PostCode != undefined ? t[i].AddressData.PostCode + " " : "") + (t[i].AddressData.City != "" && t[i].AddressData.City != undefined ? t[i].AddressData.City + " " : ""), n.PHONE = t[i].AddressData.Phone != "" && t[i].AddressData.Phone != undefined ? t[i].AddressData.Phone : "-", n.PHONEHREF = "tel:" + t[i].AddressData.Phone, n.FAX = t[i].AddressData.Fax != "" && t[i].AddressData.Fax != undefined ? t[i].AddressData.Fax : "-", n.EMAIL = GLOBAL_CONFIG.pool == "japan" && GLOBAL_CONFIG.language == "jp" ? "" : t[i].Email1 != "" && t[i].Email1 != undefined ? '<a class="gui-link" href="mailto:' + t[i].Email1 + '">' + t[i].Email1 + "<\/a>" : "-", n.LINKHREF = t[i].Url1, n.LINK = t[i].Url1, n.IMAGEURL = kt + t[i].InfoWinThumbPath, n.HASIMGCLASS = t[i].InfoWinThumbPath == "" ? "no-img" : "", n.ROUTE = "http://api.map.baidu.com/marker?location=" + t[i].Coordinates.Lat + "," + t[i].Coordinates.Lng + "&amp;title=&amp;content=" + t[i].Name + "," + t[i].AddressData.City + "&amp;output=html&operate=jsapi_message", u = dt[n.TYPECODE], n.TYPE_LEGEND = "", $.isArray(u) && u.length > 0) {
										for (n.TYPE_LEGEND = '<div class="m-13-dealers-type-legend">', o = 0; o < u.length; o++) {
											try {
												s = GLOBAL_CONFIG.dealersearch.UI_STRINGCONST_TYPE_CODE_LEGEND[u[o]]
											} catch (c) {
												s = ""
											}
											typeof s == "string" && s.length > 0 && (n.TYPE_LEGEND += '<span class="', n.TYPE_LEGEND += u[o], o + 1 == u.length && (n.TYPE_LEGEND += " last"), n.TYPE_LEGEND += '">', n.TYPE_LEGEND += GLOBAL_CONFIG.dealersearch.UI_STRINGCONST_TYPE_CODE_LEGEND[u[o]], n.TYPE_LEGEND += "<\/span>")
										}
										n.TYPE_LEGEND += "<\/div>"
									}(y || i < 3) && v.append(g(n, bt)), i == t.length - 1 && d(t)
								}
								h = new BMap.Point(t[i].Coordinates.Lng, t[i].Coordinates.Lat), e(h, i, g(n, yt))
							}
						}
					});
					else
						for (u = 0; u < t.length; u++) {
							if (it = ft.unknown, f == "LOCAL" && (n.NUMBER = u + 1, GLOBAL_CONFIG.dealersearch.UI_SHOW_TYPE_CODES ? (n.TYPECODE = t[u].TypeCode, n.TYPECODE = typeof n.TYPECODE == "string" && n.TYPECODE != "" ? n.TYPECODE : "unknown", n.TYPECODE != "unknown" && $.inArray(n.TYPECODE, r) && r.push(n.TYPECODE)) : n.TYPECODE = "unknown", n.NAME = t[u].Name, n.ADDRESS = GLOBAL_CONFIG.pool == "japan" && GLOBAL_CONFIG.language == "jp" ? (t[u].AddressData.PostCode != "" && t[u].AddressData.PostCode != undefined ? t[u].AddressData.PostCode + " " : "") + tt + (t[u].StateName != "" && t[u].StateName != undefined ? t[u].StateName + " " : "") + (t[u].AddressData.City != "" && t[u].AddressData.City != undefined ? t[u].AddressData.City + " " : "") + t[u].AddressData.Street : t[u].AddressData.Street + tt + (t[u].AddressData.PostCode != "" && t[u].AddressData.PostCode != undefined ? t[u].AddressData.PostCode + " " : "") + (t[u].AddressData.City != "" && t[u].AddressData.City != undefined ? t[u].AddressData.City + " " : ""), n.PHONE = t[u].AddressData.Phone != "" && t[u].AddressData.Phone != undefined ? t[u].AddressData.Phone : "-", n.PHONEHREF = "tel:" + t[u].AddressData.Phone, n.FAX = t[u].AddressData.Fax != "" && t[u].AddressData.Fax != undefined ? t[u].AddressData.Fax : "-", n.EMAIL = GLOBAL_CONFIG.pool == "japan" && GLOBAL_CONFIG.language == "jp" ? "" : t[u].Email1 != "" && t[u].Email1 != undefined ? '<a class="gui-link" href="mailto:' + t[u].Email1 + '">' + t[u].Email1 + "<\/a>" : "-", n.LINKHREF = t[u].Url1, n.LINK = t[u].Url1, n.IMAGEURL = kt + t[u].InfoWinThumbPath, n.HASIMGCLASS = t[u].InfoWinThumbPath == "" ? "no-img" : "", n.ROUTE = "http://map.baidu.com/?newmap=1&amp;ie=utf-8&amp;s=s%26wd%3D" + encodeURIComponent(t[u].Name)), o = dt[n.TYPECODE], n.TYPE_LEGEND = "", $.isArray(o) && o.length > 0) {
								for (n.TYPE_LEGEND = '<div class="m-13-dealers-type-legend">', s = 0; s < o.length; s++) {
									try {
										h = GLOBAL_CONFIG.dealersearch.UI_STRINGCONST_TYPE_CODE_LEGEND[o[s]]
									} catch (p) {
										h = ""
									}
									typeof h == "string" && h.length > 0 && (n.TYPE_LEGEND += '<span class="', n.TYPE_LEGEND += o[s], s + 1 == o.length && (n.TYPE_LEGEND += " last"), n.TYPE_LEGEND += '">', n.TYPE_LEGEND += GLOBAL_CONFIG.dealersearch.UI_STRINGCONST_TYPE_CODE_LEGEND[o[s]], n.TYPE_LEGEND += "<\/span>")
								}
								n.TYPE_LEGEND += "<\/div>"
							}(y || u < 3) && v.append(g(n, bt)), u == t.length - 1 && d(t), l = new BMap.Point(t[u].Coordinates.Lng, t[u].Coordinates.Lat), e(l, u, g(n, yt))
						}
			}

			function o() {
				var n = "http://api.map.baidu.com/geocoder/v2/?ak=B74b66c16dece8bc726d25dcf77b6399&output=json&address=" + encodeURIComponent(t) + "&city=" + encodeURIComponent(t);
				$.ajax({
					dataType: "jsonp",
					contentType: "application/json;charset=utf-8",
					type: "GET",
					url: n,
					success: function(n) {
						if (!!n.msg) return pt(GLOBAL_CONFIG.dealersearch.UI_STRINGCONST_SEARCHFAIL), !1;
						c = {
							coords: {
								latitude: n.result.location.lat,
								longitude: n.result.location.lng
							}
						};
						var i = w.proximity.replace(/\[\[###POSITION###\]\]/g, c.coords.latitude + "%7C" + c.coords.longitude);
						i = i.replace(/\[\[###ADDRESS###\]\]/g, encodeURIComponent(et)), i = i.replace(/\[\[###STATE###\]\]/g, encodeURIComponent(GLOBAL_CONFIG.dealersearch.UI_GHS_SEARCH_IN_STATE)), s != "" ? $.ajax({
							url: s,
							type: "POST",
							data: {
								address: i
							},
							success: l,
							complete: function() {
								p(u)
							}
						}) : $.ajax({
							url: i,
							type: "GET",
							success: l,
							complete: function() {
								p(u, i)
							}
						}), t != "" && a.centerAndZoom(new BMap.Point(n.result.location.lng, n.result.location.lat), 11)
					}
				})
			}

			function d(n) {
				var t, i;
				if (f == "LOCAL", GLOBAL_CONFIG.dealersearch.UI_SHOW_TYPE_CODES && (k.hasClass(ut) && (k.removeClass(ut), k.removeClass(function(n, t) {
						return (t.match(new RegExp("\\b" + at + "\\S+", "g")) || []).join(" ")
					})), r.length >= ti)) {
					for (t = [], i = 0; i < r.length; i++) t.push(at + r[i]);
					t.length > 0 && (t.push(ut), k.addClass(t.join(" ")))
				}
				accordionInit(), rt.show(), f == "LOCAL" && (b(), ui(), $(".m-13-dealer-marker-number, .m-13-dealer-name").click(function() {
					$("#m-13-dealer-map-canvas .BMap_Marker.BMap_noprint").eq($(this).attr("data-number") - 1).click()
				})), !y && n.length > 3 && $(".m-13-show-all-dealers").show()
			}
			a = new BMap.Map("m-13-dealer-map-canvas");
			var nt = new BMap.NavigationControl,
				h = !1;
			a.centerAndZoom(new BMap.Point(GLOBAL_CONFIG.dealersearch.UI_MAP_DEFAULTCOORDS_LNG, GLOBAL_CONFIG.dealersearch.UI_MAP_DEFAULTCOORDS_LAT), 6), a.addControl(new BMap.MapTypeControl), a.addControl(nt), a.addEventListener("tilesloaded", function() {
				getURLParameter("searchValue") == "null" && (getURLParameter("m-01-dealer-search-field") == "" || getURLParameter("m-01-dealer-search-field") == "null" || !!h) || (t = decodeURI(getURLParameter("searchValue")) != "null" ? decodeURI(getURLParameter("searchValue")) : getURLParameter("m-01-dealer-search-field"), i = decodeURI(getURLParameter("searchValueState")) != "null" ? decodeURI(getURLParameter("searchValueState")) : getURLParameter("m-01-dealer-search-field"), t == "currentLocation" ? $(".m-13-find-dealer-localization").trigger("click") : typeof t == "string" && t.length > 0 && t != "undefined" ? ($(".m-13-dealer-search-input").val(t), $(".m-13-dealer-search-form").submit()) : typeof i == "string" && i.length > 0 && i != "undefined" && (i = i.toUpperCase(), $(".m-13-dealer-search-form-state select").val(i).select2("val", i), $(".m-13-dealer-search-form-state").submit())), h = !0
			}), $(".m-13-dealer-search-form").submit(function(n) {
				var r, u;
				return getURLParameter("searchValue") != "null" || getURLParameter("m-01-dealer-search-field") != "" && getURLParameter("m-01-dealer-search-field") != "null", $(".m-13-dealer-search-input").focus().blur(), lt(), b(), n.preventDefault, i = undefined, t = $(".m-13-dealer-search-input").val(), et = t, CURRENTLANGUAGE == "en" || CURRENTLANGUAGE == "zh" && /([a-zA-Z])\w+/.test(t) ? (r = function(n) {
					var r, i;
					if (n.geonames.length != 0)
						for (r = n.geonames[0].alternateNames.length, i = 0; i < r; i++) n.geonames[0].alternateNames[i].lang == "zh" && (t = n.geonames[0].alternateNames[i].name);
					else t = "";
					o(CURRENTLANGUAGE)
				}, window.chinacitylist = r, u = "http://ba-ws.geonames.net/searchJSON?callback=chinacitylist&userName=udg2015&lang=en&featureClass=P&style=full&name_startsWith=" + encodeURIComponent(et), $.get(document.location.protocol + "//" + document.location.host + "/all/dealer2/GetLocationsWebService.asmx/GetChinaCity?&siteId=" + CURRENTPOOL + "&city=" + t, function(n) {
					$(n)[0].documentElement.textContent == "" ? $.ajax({
						dataType: "jsonp",
						contentType: "application/json;charset=utf-8",
						type: "GET",
						url: u
					}) : (t = $(n)[0].documentElement.textContent, o(CURRENTLANGUAGE))
				})) : o(CURRENTLANGUAGE), !1
			})
		})
	}, {
		initGoogle: fi,
		initBaidu: a
	}
};
(function() {
	!$(".b-responsive-scroller-table").length || (String.prototype.generate = function() {
		for (var t = "", i = "abcdefghijklmnopqrstuvwxyz", n = 5; n > 0; --n) t += i[Math.round(Math.random() * (i.length - 1))];
		return t
	}, $(function() {
		for (var a = new String, t = [], k = $(".b-responsive-scroller-table-container").length, h, p, c, w, b, i, u, o, s, f = 0; f < k; f++) {
			var n = $(".b-responsive-scroller-table-container").eq(f),
				r = "#" + a.generate(),
				e = "#" + a.generate(),
				v = n.find(".b-responsive-scroller-table table thead tr th.fixed").length / n.find(".b-responsive-scroller-table table thead tr").length,
				y = n.find(".b-responsive-scroller-table table tbody tr").length,
				l;
			for ($(".b-responsive-scroller-table-container").eq(f).parent().parent().parent().hasClass("b-responsive-scroller-table-tabs") || (l = $(".b-responsive-scroller-table-container").eq(f).parent().parent().parent(), l.addClass("b-responsive-scroller-table-tabs"), l.parent().css("overflow", "hidden"), $("body").css("overflow") == "hidden" && $("body").css("overflow", "auto")), $(".b-responsive-scroller-table-container table").closest(".b-standard-module").hasClass("normalTable") && $(".b-responsive-scroller-table-container table").addClass("normalTable"), $(".b-responsive-scroller-table-container table tbody tr:odd").addClass("alternate"), h = 0; h < v; h++)
				for (p = n.find(".b-responsive-scroller-table table thead tr th").index(n.find(".b-responsive-scroller-table table thead tr th.fixed").eq(h)), c = 0; c < y; c++) n.find(".b-responsive-scroller-table table tbody tr").eq(c).find("td").eq(p).addClass("fixed");
			for (n.find(".b-responsive-scroller-table").clone().appendTo(n), n.find(".b-responsive-scroller-table:eq(0)").addClass("fixed"), n.find(".b-responsive-scroller-table:eq(0)").attr("id", e.replace("#", "")), n.find(".b-responsive-scroller-table:eq(0) table thead tr th").not(".fixed").remove(), n.find(".b-responsive-scroller-table:eq(0) table tbody tr td").not(".fixed").remove(), n.find(".b-responsive-scroller-table:eq(1)").addClass("flow"), n.find(".b-responsive-scroller-table:eq(1)").attr("id", r.replace("#", "")), n.find(".b-responsive-scroller-table:eq(1) table thead tr th.fixed").remove(), n.find(".b-responsive-scroller-table:eq(1) table tbody tr td.fixed").remove(), w = $(r).height() / $(e).height() * 1024, $(e).parentsUntil(".b-standard-module").parent().hasClass("tableautosize") || v != 0 && $(r).find("table").width(w), b = $(r).find("thead tr").length, u = 0; u < b; u++) $(e).find("thead tr").eq(u).height($(r).find("thead tr").eq(u).height());
			for (i = 0; i < y; i++) $(e).find("tbody tr").eq(i).height() <= $(r).find("tbody tr").eq(i).height() && $(e).find("tbody tr").eq(i).height($(r).find("tbody tr").eq(i).height()), $(e).find("tbody tr").eq(i).height() >= $(r).find("tbody tr").eq(i).height() && $(r).find("tbody tr").eq(i).height($(e).find("tbody tr").eq(i).height());
			t[f] = new IScroll(r, {
				scrollY: !1,
				scrollX: !0,
				scrollbars: !0,
				interactiveScrollbars: !0,
				eventPassthrough: !1,
				listenX: !0
			}), $.extend(t[f].indicator2.options, {
				scrollertable: !0
			})
		}
		$(window).on("resize orientationchange", function() {
			for (var n = 0; n < t.length; n++) t[n].indicator2.options.scrollertable && !t[n].indicator2.scroller.hasHorizontalScroll && ($(t[n].indicator2.wrapper).hide(), t[n].refresh()), t[n].indicator2.options.scrollertable && t[n].indicator2.scroller.hasHorizontalScroll && ($(t[n].indicator2.wrapper).show(), t[n].refresh())
		});
		if (!!$(".b-tabs.b-responsive-scroller-table-tabs").length)
			for (u = 0; u < $(".b-tabs.b-responsive-scroller-table-tabs").length; u++) $(".b-tabs.b-responsive-scroller-table-tabs").eq(u).find(".b-tabs-content-wrapper").eq(0).addClass("display");
		if ($(window).trigger("resize"), $(".b-responsive-scroller-table.fixed").find("tbody td.fixed").filter(function() {
				if ($(this).text() == "") return !0
			}).remove(), /Android/i.test(navigator.userAgent) || /iPhone|iPad/i.test(navigator.userAgent)) {
			$(window).scroll(function() {
				$(".b-responsive-scroller-table-container").offset().top - $(document).scrollTop() < document.documentElement.clientHeight ? !$(".b-responsive-scroller-table-container").css("content") || $(".iScrollHorizontalScrollbar").addClass("fixed") : $(".iScrollHorizontalScrollbar").removeClass("fixed"), $(document).scrollTop() - $(".b-responsive-scroller-table-container").offset().top > document.documentElement.clientHeight && $(".iScrollHorizontalScrollbar").removeClass("fixed")
			}), o = 0, s = 0;
			$(".b-responsive-scroller-table-container").on("touchstart touchmove touchend touchcancel touchleave", function(n) {
				n.type == "touchstart" && (o = s = n.originalEvent.touches[0].clientY), n.type == "touchmove" && (o = n.originalEvent.touches[0].clientY - s, s = n.originalEvent.touches[0].clientY), (n.type == "touchend" || n.type == "touchcancel" || n.type == "touchleave") && (s = o = 0), o != s && (o > 0 ? $(document).scrollTop($(document).scrollTop() - o) : $(document).scrollTop($(document).scrollTop() - o))
			})
		}
	}))
})(),
function(n, t, i, r) {
	"use strict";
	var u = {
			moduleContainer: "m-29-features-v2",
			tabContainer: "m-29-tabs",
			tabNavigationWrapper: "m-29-tabs-headline-wrapper-large",
			tabNavigationElement: "m-29-tab-headline",
			hideTabNavigation: "m-29-hide-tab-navigation",
			tabContent: "m-29-tab-content",
			tabActive: "display",
			tabScrollContainer: "m-29-tab-scroll-container",
			featureItemWrapper: "m-29-feature-item-wrapper",
			featureItem: "m-29-feature-item",
			activeItem: "gui-active-item"
		},
		s = !1,
		f = r,
		h = r,
		e = r,
		a = r,
		v = r,
		c = r,
		o = r,
		l = r;
	n(i).ready(function() {
		if (h = n("." + u.moduleContainer).eq(0), e = h.find("." + u.tabContainer).eq(0), a = e.find("." + u.tabNavigationWrapper).eq(0), v = a.find("." + u.tabNavigationElement), c = h.find("." + u.tabContent), o = c.filter("." + u.tabActive).eq(0), l = o.find("." + u.featureItem + "." + u.activeItem).eq(0), e.length === 0) return !1;
		n("html").hasClass("lt-ie9") && (s = !0), v.length <= 1 && e.addClass(u.hideTabNavigation), y(o), p(), l.length > 0 && s === !1 && f.scrollToElement(l[0])
	});
	var p = function() {
			e.on("tabChange", function() {
				o = c.filter("." + u.tabActive).eq(0), y(o)
			})
		},
		y = function(t) {
			var i = 0,
				r = t.find("." + u.featureItemWrapper),
				f = t.find("." + u.featureItem),
				e = t.find("." + u.tabScrollContainer);
			if (r.length === 0 || f.length === 0) return !1;
			e.length === 0 && (f.each(function() {
				var t = n(this).outerWidth(!0);
				i += t
			}), i = Math.ceil(i), r.css("width", i + "px"), r.wrap('<div class="' + u.tabScrollContainer + '"><\/div>')), w(t)
		},
		w = function(n) {
			var t = n.find("." + u.tabScrollContainer);
			if (s) return !1;
			f instanceof IScroll && (f.destroy(), f = r), f = new IScroll(t[0], {
				scrollY: !1,
				scrollX: !0,
				scrollbars: !0,
				interactiveScrollbars: !0,
				eventPassthrough: !0
			})
		}
}(jQuery, this, this.document),
function(n, t, i, r) {
	"use strict";
	var u = {
			moduleContainer: "m-30-timeline",
			tabScrollContainer: "m-30-timeline-scroll-container",
			timelineItemWrapper: "m-30-timeline-item-wrapper",
			timelineItem: "m-30-timeline-item",
			timelineItemContent: "m-30-timeline-item-content",
			timelineScaleWrapper: "m-30-timeline-scale-wrapper",
			m30timelineScale: "m-30-timeline-scale",
			m30timelineYear: "m-30-timeline-year",
			m30flyout: "m-30-hover-flyout"
		},
		o = !1,
		f = r,
		s = r,
		h = r,
		c = r,
		l = r,
		e = !1;
	n(i).ready(function() {
		if (n(".m-30-timeline").length !== 0) {
			n(".mission-report-timeline").length > 0 && (e = !0), f = n("." + u.moduleContainer).eq(0), c = n("." + u.moduleContainer).data("timeline-from"), l = n("." + u.moduleContainer).data("timeline-until"), n("html").hasClass("lt-ie9") && (o = !0), h = new p, v();
			var s = "",
				r;
			n(t).resize(function() {
				n(i).trigger("timeline_resize"), r = n("." + u.timelineScaleWrapper).is(":visible") == !0 ? "big" : n("." + u.timelineItem).width() == 250 ? "small" : "medium", s != r && (s = r, a())
			})
		}
	});
	var w = function() {},
		a = function() {
			var t = 0,
				i = f.find("." + u.timelineItemWrapper),
				r = f.find("." + u.timelineItem);
			r.each(function() {
				var i = n(this).outerWidth(!0);
				t += i
			}), t = Math.ceil(t), i.css("width", t + "px")
		},
		v = function() {
			var t = 0,
				r = f.find("." + u.timelineItemWrapper),
				e = f.find("." + u.timelineItem),
				o = f.find("." + u.tabScrollContainer);
			if (r.length === 0 || e.length === 0) return !1;
			o.length === 0 && (e.each(function(r) {
				var f = n(this).outerWidth(!0);
				t += f;
				var e = n(this).find("h3").html().replace(/\s/, ""),
					o = n(this).find("." + u.timelineItemContent + " p").html().substr(0, 4),
					s = n(this).find("." + u.timelineItemContent + " p").html().substr(n(this).find("." + u.timelineItemContent + " p").html().length - 4, n(this).find("." + u.timelineItemContent + " p").html().length);
				n(i).trigger("set_timeline_scale", {
					count: r,
					from: o,
					until: s,
					currentId: e
				})
			}), t = Math.ceil(t), r.css("width", t + "px"), r.wrap('<div class="' + u.tabScrollContainer + '"><\/div>')), y()
		},
		y = function() {
			var n = f.find("." + u.tabScrollContainer);
			if (o) return !1;
			s = new IScroll(n[0], {
				scrollY: !1,
				scrollX: !0,
				scrollbars: !0,
				interactiveScrollbars: !0,
				eventPassthrough: !0
			})
		},
		p = function() {
			function c() {
				n(i).on("set_timeline_scale." + t, l);
				n(i).on("timeline_resize." + t, h)
			}

			function l(t, i) {
				i.from < r ? r = i.from : !1, i.until > f ? f = i.until : !1;
				var e = {
					id: i.currentId,
					from: i.from,
					until: i.until
				};
				s.push(e), i.count >= n("." + u.timelineItem).length - 1 && a(parseInt(r), parseInt(f), s)
			}

			function a(t, i, r) {
				for (var f = 0; f <= i - t; f++) e ? n("." + u.m30timelineScale).append('<span class="' + u.m30timelineYear + '" data-year=' + (i - f) + "><\/span>") : n("." + u.m30timelineScale).append('<span class="' + u.m30timelineYear + '" data-year=' + (t + f) + "><\/span>");
				n("." + u.m30timelineYear).each(function(r) {
					e ? r == 0 || r == i - t ? (n(this).addClass("bound"), n(this).append("<p>" + (i - r) + "<\/p>")) : (i - r) % 10 == 0 && (n(this).addClass("full-decade"), n(this).append("<p>" + (i - r) + "<\/p>")) : r == 0 || r == i - t ? (n(this).addClass("bound"), n(this).append("<p>" + (t + r) + "<\/p>")) : (t + r) % 10 == 0 && (n(this).addClass("full-decade"), n(this).append("<p>" + (t + r) + "<\/p>"))
				}), n.each(r, function(t, i) {
					n("." + u.m30timelineYear).each(function() {
						n(this).data("year") >= i.from && n(this).data("year") <= i.until && (n(this).addClass(i.id), e && n(this).addClass("winnerdate"))
					})
				}), n("." + u.timelineItem + ":odd").addClass("even"), n("." + u.timelineItem).hover(function() {
					var t, i;
					n(this).addClass("active"), t = n(this).find("." + u.m30flyout), t.addClass("show"), e || (!!t && t.visible(!1, !1, "horizontal") ? n(this).closest("." + u.tabScrollContainer).find(".iScrollHorizontalScrollbar").css("cssText", "z-index: -1 !important") : t.removeClass("show")), e ? (i = n(this).find(".m-30-timeline-item-content").find("p").html(), n(".m-30-timeline-scale").find('[data-year="' + i + '"]').addClass("active")) : n("." + n(this).find("h3").html().replace(/\s/, "")).addClass("active")
				}, function() {
					var t = n(this).find("." + u.m30flyout);
					t.removeClass("show"), e ? (n(".m-30-timeline-scale .active").removeClass("active"), n(this).removeClass("active")) : n(this).removeClass("active"), n(this).closest("." + u.tabScrollContainer).find(".iScrollHorizontalScrollbar").css("cssText", "z-index: 9999"), n("." + n(this).find("h3").html().replace(/\s/, "")).removeClass("active")
				}), h()
			}

			function h() {
				o = (n("." + u.m30timelineScale).width() - 1) / (parseInt(f) + 1 - parseInt(r)), n("." + u.m30timelineYear).width(o + "px"), n("." + u.m30timelineYear + " p").css("margin-left", -(n("." + u.m30timelineYear + " p").width() - o) / 2 + "px")
			}
			var t = "m30Timeline_event",
				o = "",
				r = 9999,
				f = 0,
				s = [];
			(function() {
				c()
			})()
		}
}(jQuery, this, this.document),
function(n, t, i) {
	"use strict";
	n(i).ready(function() {
		n(".m-32-image").on("click", function() {
			if (!!n(this).find(".b-zoom-icon").length && n(this).css("position") != "static") {
				n(this).closest(".b-standard-module-wrapper").toggleClass("m-32-fullsize");
				var t = n(this).find("img");
				image_scaleOne(t), image_swapOne(t)
			}
		});
		n(t).resize(function() {
			n(".m-32-marginal .m-32-image").css("position") == "static" ? n(".b-standard-module-wrapper").each(function(t, i) {
				n(i).find(".m-32-marginal").next().hasClass("m-32-content") && n(i).find(".m-32-marginal").insertAfter(n(i).find(".m-32-content"))
			}) : n(".b-standard-module-wrapper").each(function(t, i) {
				n(i).find(".m-32-content").next().hasClass("m-32-marginal") && n(i).find(".m-32-content").insertAfter(n(i).find(".m-32-marginal"))
			})
		}), n(".m-32-caption").each(function(t, i) {
			!!n(i).find(".m-32-quote").length || n(i).addClass("no-quote")
		}), n(t).trigger("resize")
	})
}(jQuery, this, this.document), $(function() {
		if (!!$(".m-92-leasing-calculator-wrapper").length) {
			var e = $(".m-92-leasing-calculator-wrapper .slider-wrapper .sliderColumn"),
				v = e.length,
				r, d = !!$(".result .entity .summe").length,
				o = [],
				s = [],
				h = [],
				i = [],
				f = !1,
				u = [],
				c = !1,
				l = function(n, t) {
					var r = n,
						i = [];
					return $.each(r, function(n, t) {
						$.inArray(t, i) === -1 && i.push(t)
					}), (typeof t == "undefined" || t == 1) && (i = i.sort(function(n, t) {
						return n - t
					})), t == -1 && (i = i.sort(function(n, t) {
						return t - n
					})), i
				},
				t = {
					term: "",
					kilometersperannum: "",
					deposit: "",
					arrDeposit: "",
					search: function(t) {
						for (var e = [], o = [], i = [], u, f, r = 0; r < t.length; r++) t[r].term == this.term && e.push(t[r]);
						for (u = 0; u < e.length; u++) e[u].kilometers_per_annum == this.kilometersperannum && o.push(e[u]);
						for (f = 0; f < o.length; f++) o[f].deposit_in_percent == this.deposit && i.push(o[f]);
						this.arrDeposit = i;
						try {
							if (i.length == 1) $("#m-92-price").text((new n).numberFormat(parseInt(i[0].upe), 3, ".")), $(".summe").html((new n).numberFormat(Math.round(i[0].leasing.replace(/.[a-zA-Z]/g, "")), 3, ".")), $(".text-rate-summe").text((new n).numberFormat(parseInt(i[0].deposit_in_percent), 3, "."));
							else {
								$("#m-92-price").text("N/A"), $(".summe").text("N/A"), $(".text-rate-summe").text("N/A");
								throw new Error("no or more results is/are found");
							}
						} catch (s) {
							console.log(s)
						}
					}
				},
				g = $.get(leasingjsonurl, function(e) {
					var d, p, b, a;
					r = e.leasingdata, d = r.length;
					for (a in r) o.push(parseInt(r[a].term));
					for (a in r) s.push(parseInt(r[a].kilometers_per_annum));
					for (a in r) h.push(parseInt(r[a].deposit_in_percent));
					for (typeof leasingcalculator_term == "string" && leasingcalculator_term.length != 0 && typeof leasingcalculator_kilometers_per_annum == "string" && leasingcalculator_kilometers_per_annum.length != 0 && typeof leasingcalculator_deposit == "string" && leasingcalculator_deposit.length != 0 && (f = !0, p = {
							term: [24, 36, 48],
							kilometers_per_annum: [1e4, 15e3, 2e4],
							deposit: [10, 15, 20]
						}, b = function() {
							u.push(leasingcalculator_term), u.push(leasingcalculator_kilometers_per_annum), u.push(leasingcalculator_deposit)
						}, !(new n).geturlparam("term") || !(new n).geturlparam("kilometers_per_annum") || !(new n).geturlparam("deposit") || !p.term[(new n).geturlparam("term")] || !p.kilometers_per_annum[(new n).geturlparam("kilometers_per_annum")] || !p.deposit[(new n).geturlparam("deposit")] ? b() : (c = !0, u.push(p.term[(new n).geturlparam("term")]), u.push(p.kilometers_per_annum[(new n).geturlparam("kilometers_per_annum")]), u.push(p.deposit[(new n).geturlparam("deposit")]))), o = l(o), s = l(s), h = l(h), i.push(o), i.push(s), i.push(h), a = 0; a < v; a++) y(i, a);
					k(), t.search(r), f = !1, w(), $(".sliderColumn.deposit .text-rate-summe").text((new n).numberFormat(parseInt(t.arrDeposit[0].deposit), 3, ".")), $(".sliderColumn.deposit .slider-header span").eq(0).append("<br/>"), c && (c = !1, $(".m-92-module-right .slider-context span.point").each(function(n) {
						$(".slider").eq(n).slider("option").slide(null, {
							value: $(".slider").eq(n).slider("value")
						})
					}))
				}),
				y = function(n, t) {
					for (var r = '<div class="value_min"><div class="number">' + n[t][0] + '<\/div><span class="point"><\/span><\/div>', i = 1; i < n[t].length - 1; i++) r += '<div class="value"><div class="number">' + n[t][i] + '<\/div><span class="point"><\/span><\/div>';
					r += '<div class="value_max"><div class="number">' + n[t][n[t].length - 1] + '<\/div><span class="point"><\/span><\/div>', e.eq(t).find(".slider-context").append(r), p(t, n[t].length - 1), b(t, n[t].length - 1)
				},
				p = function(o, s) {
					e.eq(o).find(".slider").slider({
						range: "max",
						min: parseInt(i[o][0]),
						max: parseInt(i[o][i[o].length - 1]),
						step: parseInt((i[o][i[o].length - 1] - i[o][0]) / s),
						value: !f ? parseInt(i[o][0]) : parseInt(u[o]),
						slide: function(i, u) {
							a(o, u.value), t.search(r), $(".sliderColumn.deposit .text-rate-summe").text((new n).numberFormat(parseInt(t.arrDeposit[0].deposit), 3, "."))
						}
					}), a(o, i[o][0])
				},
				w = function() {
					$(".m-92-module-right .slider-context span.point").each(function(n, t) {
						$(t).on("click", function() {
							var n = $(this).parent().find(".number").text().replace(".", ""),
								t = $(".sliderColumn").index($(this).parentsUntil(".sliderColumn").parent());
							$(".slider").eq(t).slider("value", n), $(".slider").eq(t).slider("option").slide(null, {
								value: n
							})
						})
					})
				},
				b = function(n, t) {
					t >= 2 && (e.eq(n).find(".value_min").css("width", 100 / t + "%"), e.eq(n).find(".value").css("width", 100 / t + "%"))
				},
				k = function() {
					$(".slider-context .number").each(function(t, i) {
						var r = parseInt($(i).text());
						$(i).text((new n).numberFormat(r, 3, "."))
					})
				},
				a = function(n, i) {
					switch (n) {
						case 0:
							t.term = !f ? i : leasingcalculator_term;
							break;
						case 1:
							t.kilometersperannum = !f ? i : leasingcalculator_kilometers_per_annum;
							break;
						case 2:
							t.deposit = !f ? i : leasingcalculator_deposit
					}
				},
				n = function() {
					this.numberFormat = function(n, t, i, r) {
						var f, o, s;
						if (typeof n == "number" && typeof t == "number" && typeof i != "undefined" && i.length != 0) {
							f = n, f = f.toString().split("").reverse();
							var u = [],
								e = "",
								h = 0;
							for (o = 0; o < f.length; o++) h == t && (u.push(i), h = 0), h++, u.push(f[o]);
							for (u = u.reverse(), s = 0; s < u.length; s++) e += u[s];
							if (!!r) switch (r) {
								case "germany":
									e = e + ",00"
							}
							return e
						}
					}, this.geturlparam = function(n) {
						n = n.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
						var i = "[\\?&]" + n + "=([^&#]*)",
							r = new RegExp(i),
							t = r.exec(window.location.href);
						return t == null ? "" : t[1]
					}, this.layer = function() {
						return this.makeLayer = function(n) {
							var t = "";
							typeof n == "string" && n.length != 0 && (t = n + '<a id="close" href="javascript:void(0)" />', $("#layer").html(t), $("#layer").show(), $(".m-92-leasing-calculator-wrapper").addClass("layer"), $("html, body").animate({
								scrollTop: $(".m-92-leasing-calculator-wrapper.layer").parent().offset().top
							}, 1e3));
							$("#layer #close").one("click", function() {
								$("#layer").empty(), $("#layer").hide(), $(".m-92-leasing-calculator-wrapper").removeClass("layer")
							});
							return this
						}, this.dataInjection = function(t) {
							var i = t[0];
							return $("#layer .m-92-leasing-calculator-layer-content-wrapper").html($("#layer .m-92-leasing-calculator-layer-content-wrapper").html().replace("###UPE###", (new n).numberFormat(parseInt(i.upe), 3, ".")).replace("###SPECIALPAYMENT###", (new n).numberFormat(parseInt(i.deposit_in_percent), 3, ".") + " %").replace("###TERM###", i.term).replace("###KPA###", (new n).numberFormat(parseInt(i.kilometers_per_annum), 3, ".")).replace("###DEPOSIT###", (new n).numberFormat(parseInt(i.deposit), 3, ".")).replace("###TOTAL###", (new n).numberFormat(parseInt(i.total), 3, ".")).replace("###LEASING###", (new n).numberFormat(Math.round(i.leasing), 3, ".")).replace("###NETLOAN###", (new n).numberFormat(Math.round(i.net_loan), 3, ".")).replace("###INTERESTRATE###", (parseFloat(i.interest_rate).toFixed(4) * 100).toFixed(2)).replace("###ANNUALPERCENTAGERATE###", (parseFloat(i.annual_percentage_rate).toFixed(4) * 100).toFixed(2)).replace("###TOTALAMOUNT###", (new n).numberFormat(Math.round(i.total_amount), 3, "."))), this
						}, this
					}
				};
			$(".m-92-module-right .result .entity .info").on("click", function() {
				(new n).layer().makeLayer(leasingcalculatorlayercontent).dataInjection(t.arrDeposit)
			});
			$(".m-92-module-right .gui-btn.gui-link-with-article").on("click", function(i) {
				i.preventDefault();
				var r = $(this).attr("href"),
					u = encodeURI($("#techspecs").find(".m-09-techspecs-pattern .img-wrapper img").attr("src")),
					f = $("body").append('<form name="postarrDepositFormular" method="POST" action="' + r + '" id="postarrDepositFormular" style="display:none;"><input type="hidden" name="thumbUrl" value="' + u + '" /><input type="hidden" name="fn" value="' + t.arrDeposit[0].model + '"><input type="hidden" name="fp" value="' + (new n).numberFormat(parseInt(t.arrDeposit[0].total), 3, ".") + " " + leasingcalculatorcurrency + '"><input type="hidden" name="fd" value="' + t.arrDeposit[0].term + " " + leasingcalculator_duration_unit_value + '"><input type="hidden" name="fkm" value="' + (new n).numberFormat(parseInt(t.arrDeposit[0].kilometers_per_annum), 3, ".") + " " + leasingcalculator_mileage_unit_value + '"><input type="hidden" name="fsp" value="' + (new n).numberFormat(parseInt(t.arrDeposit[0].deposit), 3, ".") + " " + leasingcalculatorcurrency + '"><input type="hidden" name="fmp" value="' + (new n).numberFormat(Math.round(t.arrDeposit[0].leasing), 3, ".") + " " + leasingcalculatorcurrency + '"><\/form>');
				$("#postarrDepositFormular").submit()
			})
		}
	}),
	function(n, t, i) {
		"use strict";
		n(i).ready(function() {
			function v() {
				if (u = new IScroll("#m-12-gallery-slider-container", {
						scrollY: !1,
						scrollX: !0,
						scrollbars: !0,
						interactiveScrollbars: !0,
						eventPassthrough: !0
					}), !n('html[dir="rtl"]').length || (u.refresh(), u.scrollToElement("#m-12-gallery-slider .gallery-slide:first-child", 0)), r != 0) {
					var t = Math.floor(r / w);
					u.scrollToElement("#m-12-gallery-slider .gallery-slide:nth-child(" + t + ")", 0)
				}
				if (!Modernizr.touch) {
					n(".iScrollIndicator").on("mousedown", function() {
						n(this).addClass("gallery-scrolling")
					});
					u.on("scrollEnd", function() {
						n(".iScrollIndicator").removeClass("gallery-scrolling")
					})
				}
			}

			function b() {
				n(".image-frame").each(function(i, r) {
					var u = n(r);
					u.find("img").one("load", function() {
						var n = this.width,
							i = this.height,
							r = u.width(),
							f = u.height();
						t.setTimeout(function() {
							n / r < i / f ? u.addClass("height-oriented") : u.addClass("width-oriented")
						}, 0)
					}).each(function() {
						this.complete && n(this).load()
					})
				})
			}

			function k() {
				var t = !1;
				return tt() && (y(), n("#m-12-gallery-slider-container .image-centering").each(function(t, r) {
					var u = i.slides[t].content.find(".gallery-thumbnail");
					u.attr("class", u.attr("class").replace(/\brs.*?\b/g, "")), u.removeAttr("style"), u.off("click"), n(r).append(u)
				}), n(".m-06-social-hub-headline-content").removeAttr("style"), s = !0, i.destroy(), n(".gallery-fullscreen-wrapper").empty(), n(".gallery-fullscreen-wrapper").hide(), t = !0), t
			}

			function d() {
				k(), f ? nt("#m-12-gallery-slider") : v()
			}

			function g(t) {
				n(t).css({
					opacity: 0
				}), n(t + " .gallery-slide-element-link").toggleClass(l), n(".gallery-social-media-content-container").css("overflow-x", "visible")
			}

			function nt(t) {
				n(t).removeAttr("style"), n(t + " .gallery-slide-element-link").toggleClass(l), n(".gallery-social-media-content-container").css("overflow-x", "auto")
			}

			function tt() {
				return !!n(".m-12-gallery-content .royalSlider").length
			}

			function y() {
				e != null && (e.dispose(), e = null)
			}

			function p() {
				if (i.slides !== null) {
					var n = i.slides[r].content.parent();
					n.find(".ce-media-wrapper").attr("style", n.find(".gallery-thumbnail").attr("style")).show()
				}
			}
			var a, h;
			if (n(".image-frame.text").click(function(n) {
					n.preventDefault()
				}), n(".m-12-gallery").length != 0) {
				var u, i, s = !1,
					w = 3,
					r = 0,
					c = "click",
					f = n("html.lt-ie9").length > 0,
					o = [],
					e = null,
					l = "zoom-mode";
				Modernizr.touch && (c = t.navigator.msPointerEnabled ? "MSPointerUp" : "touchend"), a = n("#m-12-gallery-slider-container").find(".ce-media-wrapper"), a.each(function(t, i) {
					o.push(n(i).parent().find(".ce-media-wrapper").detach().get(0))
				}), f, h = n("#m-12-gallery-slider"), n(h).addClass("gallery-slide-count-" + h.find(".gallery-slide").length);
				n(".gallery-slide-element").on(c, function() {
					var w, h, a, v;
					if (IScrollPointerHandler.hasNotScrolledInX() && IScrollPointerHandler.hasNotScrolledInY() || f) {
						w = "m-12-gallery-slider-container", f ? g("#m-12-gallery-slider") : u.destroy(), n("#" + w).css({
							overflow: "visible"
						});
						var b = n(this),
							l = b.closest(".m-12-gallery-content").find(".gallery-fullscreen-wrapper"),
							c = l.parent().find(".gallery-thumbnail");
						c.on("click", function() {
							var u, r;
							return i.dragSuccess ? !0 : (u = c.index(this), i.currSlideId != u) ? (i.goTo(u), !1) : (o[u] && (r = n(o[u]).clone(), r.removeClass("ce-fullscreen-item"), n(this).parent().hide(), n(this).parent().parent().append(r), r.find("video, audio").length ? (e = createVideoJSElementFromId(r.find("video, audio").attr("id")), t.setTimeout(function() {
								/(iPad|iPhone|iPod)/g.test(navigator.userAgent) ? r.find("iframe").length || e.play() : e.play()
							}, 0)) : !r.find(".ce-image").length || createVideoJSElementFromId(r.find(".ce-image").attr("id")), p(), n(t).trigger("resize")), !1)
						});
						c.addClass("rsImg rsMainSlideImage"), h = n('<div class="royalSlider gallery-fullscreen-slider"/>').append(c), a = n('<div class="gui-btn gallery-close-fullscreen"/>'), h.find(".gallery-thumbnail").wrap('<div class="gallery-icon-wrapper"/>'), c.each(function(t, i) {
							var r = n(o[t]),
								u = !r.find(".ce-video").length ? !r.find(".ce-audio").length ? "image" : "audio" : "video";
							n(i).closest(".gallery-icon-wrapper").addClass(u)
						}), r = l.parent().find(".gallery-slide-element").not(".gallerytext").index(b), h.appendTo(l), l.show();
						n(".gallery-icon-wrapper").on("click", function(t) {
							if (i.dragSuccess) return !0;
							t.stopPropagation(), t.stopImmediatePropagation(), n(this).find(".gallery-thumbnail").trigger("click")
						});
						i = h.royalSlider({
							imageScaleMode: "fit",
							autoScaleSlider: !1,
							autoHeight: !1,
							controlsInside: !1,
							allowCSS3: !0,
							numImagesToPreload: 4,
							arrowsNav: !0,
							arrowsNavAutoHide: !1,
							arrowsNavHideOnTouch: !1,
							controlNavigation: "none",
							navigateByClick: !1,
							sliderDrag: !1,
							transitionType: f ? "fade" : "move",
							keyboardNavEnabled: !1,
							addActiveClass: !0,
							globalCaption: !1,
							slidesSpacing: 44,
							transitionSpeed: 1200,
							easeInOut: "easeInOutSine",
							easeOut: "easeInOutSine",
							imageScalePadding: 0,
							startSlideId: r
						}).data("royalSlider"), a.appendTo(h);
						a.on("click", d);
						Modernizr.touch && n("html,body").animate({
							scrollTop: h.offset().top
						}, 500), s = !1, i.updateSliderSize = function() {
							s || n.rsProto.updateSliderSize.call(this)
						}, v = null;
						n(t).on("resize", function() {
							t.clearTimeout(v), v = t.setTimeout(function() {
								p()
							}, 50)
						});
						i.ev.on("rsAfterSlideChange", function() {
							if (r != this.currSlideId) {
								r = this.currSlideId, y();
								var t = n(".gallery-icon-wrapper:hidden");
								!t.length || (t.parent().find(".ce-media-wrapper").remove(), t.show())
							}
						});
						return !1
					}
				});
				f || v(), b(), IScrollPointerHandler.attachPointerDownListener("#m-12-gallery-slider"), n(".gallery-slide-element.gallerytext").unbind()
			}
		})
	}(jQuery, this, this.document),
	function(n, t, i, r) {
		"use strict";

		function k() {
			l.hide(), w.empty().append(y + "&nbsp;"), f.hide(), f.empty(), a = u.val(), encodeURIComponent(a), jQuery.support.cors = !0, n.ajax({
				url: b,
				type: "GET",
				crossDomain: "true",
				dataType: "html",
				data: {
					model: e,
					postal_code: a
				},
				success: d
			})
		}

		function d(t) {
			v = n(t), v.is("#no_results") ? (f.append(v.html()), f.fadeIn("slow")) : g(), typeof GLOBAL_CONFIG.scn == "object" && typeof GLOBAL_CONFIG.scn.refreshContentNavigationEvent == "string" && n(i).trigger(GLOBAL_CONFIG.scn.refreshContentNavigationEvent)
		}

		function g() {
			var e = {
					dealerHtmlTemplate: '<div class="m-13-inventory-dealer"><\/div>',
					tableHtmlTemplate: '<div class="m-13-inventory-responsive-table"><div class="m-13-inventory-responsive-table-wrapper"><\/div><\/div>',
					rowHtmlTemplate: '<div class="m-13-inventory-table-row"><\/div>',
					dealerInfoHtmlTemplate: '<div class="info m-13-inventory-dealer-info"><\/div>'
				},
				s = r,
				y = r,
				h = r,
				a = r,
				o = r,
				u = r,
				c = r,
				i = r,
				t = r;
			v.find(".dealer").each(function() {
				u = n(e.dealerHtmlTemplate), c = n(e.tableHtmlTemplate), o = [], n(this).find(".inventory tr th").each(function() {
					o.push(n(this).html())
				});
				var r = n(this).find(".info .name").eq(0).html();
				u.attr("data-m-02-cn-anchor", r), n(this).find(".inventory tr").each(function(t) {
					i = n(e.rowHtmlTemplate), s = n(this).children().length, y = n(this).find("th").length, h = n(this).find("td").length, t === 0 && i.addClass("m-13-inventory-table-row-headline"), h > 0 && (a = n(this).find("td").eq(h - 1)), n(this).children().each(function(t) {
						n(this).is("th") && t < s - 1 && i.append(n('<div class="m-13-inventory-table-column-' + (t + 1) + '">' + n(this).html() + "<\/div>")), n(this).is("td") && t < s - 1 && (t === 0 ? (i.append(n('<div class="m-13-inventory-table-column-' + (t + 1) + '"><div class="m-13-inventory-table-headline-small">' + o[t] + '<\/div><div class="m-13-inventory-table-image">' + a.html() + '<\/div><div class="m-13-inventory-table-link">' + n(this).html() + "<\/div><\/div>")), i.find(".m-13-inventory-table-link a").eq(0).addClass("gui-link-with-arrow").wrapInner("<span><\/span>")) : i.append(n('<div class="m-13-inventory-table-column-' + (t + 1) + '"><div class="m-13-inventory-table-headline-small">' + o[t] + '<\/div><div class="m-13-inventory-table-text">' + n(this).html() + "<\/div><\/div>")))
					}), c.find(".m-13-inventory-responsive-table-wrapper").eq(0).append(i)
				}), u.append(c), t = n(e.dealerInfoHtmlTemplate), t.append('<div class="m-13-inventory-dealer-image">' + n(this).find(".info .image").eq(0).wrap("<div><\/div>").parent().html() + "<\/div>"), t.append('<div class="m-13-inventory-dealer-address">' + n(this).find(".info .name").eq(0).wrap("<div><\/div>").parent().html() + n(this).find(".info .address").eq(0).wrap("<div><\/div>").parent().html() + n(this).find(".info .phone").eq(0).wrap("<div><\/div>").parent().html() + "<\/div>"), t.append('<div class="m-13-inventory-dealer-links"><div class="m-13-inventory-dealer-links-placeholder">' + n(this).find(".info .name").eq(0).wrap("<div><\/div>").parent().html() + "<\/div>" + n(this).find(".info .links").eq(0).wrap("<div><\/div>").parent().html() + "<\/div>"), t.find(".name").addClass("gui-link-with-arrow").wrapInner("<span><\/span>"), t.find(".phone strong").append("<\/br>"), t.find(".links a").addClass("gui-link-with-arrow").wrapInner("<span><\/span>"), u.append(t), f.append(u), l.fadeIn("slow"), f.fadeIn("slow")
			})
		}
		var h = r,
			c = "m-13-car-tile-wrapper-active",
			o = r,
			s = r,
			u = r,
			p = r,
			l = r,
			w = r,
			b = i.location.protocol + "//porschedealer.com/dealer/inventory/ajax/",
			e = "",
			y = "",
			a = "",
			v = r,
			f = r;
		n(i).ready(function() {
			h = n(".m-13-car-tile-wrapper"), s = n(".m-13-zip-search-form form").eq(0), u = s.find(".m-13-zip-search-input").eq(0), p = n(".m-13-zip-search-submit").eq(0), l = n(".m-13-inventory-results-subline").eq(0), w = l.find(".m-13-inventory-results-subline-model"), f = n(".m-13-inventory-locator-results").eq(0), e = getURLParameter("model").toLowerCase(), o = n(".m-13-car-tile-wrapper[data-model='" + e + "']").eq(0), o.length > 0 ? (h.removeClass(c), o.addClass(c), e = o.data("model"), y = o.data("caption")) : e = "";
			h.on("click", function() {
				h.removeClass(c), n(this).addClass(c), e = n(this).data("model"), y = n(this).data("caption"), a !== "" && s.submit()
			});
			s.on("submit", function(n) {
				n.preventDefault(), k()
			});
			p.on("click", function() {
				s.submit()
			});
			if (typeof Modernizr != "undefined" && typeof Modernizr.input != "undefined" && !Modernizr.input.placeholder) {
				var t = u.attr("placeholder");
				u.val(t);
				u.on("focus", function() {
					u.val() === t && u.val("")
				});
				u.on("blur", function() {
					u.val() === "" && u.val(t)
				})
			}
		})
	}(jQuery, this, this.document)