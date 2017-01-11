function scaleSliderImages() {
	$(".m-04-intro-section-home-slider img[data-image-src], .m-08-features-slider img[data-image-src]").each(function() {
		var n = $(this);
		n.attr("data-size", ""), image_scaleOne(n), image_swapOne(n)
	})
}

function image_swap(n) {
	try {
		n = n === undefined ? "" : n, $("img[data-image-src]").not(n).each(function() {
			var n = $(this);
			image_swapOne(n)
		})
	} catch (t) {}
}

function image_swapOne(n) {
	var i;
	try {
		if (typeof n == "undefined") return;
		var t = n,
			r = t.attr("data-size"),
			u = t.attr("src");
		i = t.attr("data-image-src").indexOf("?") != -1 ? t.attr("data-image-src") + r : t.attr("data-image-src") + "?" + r, u !== i && t.attr("src", i)
	} catch (f) {}
}

function image_scale(n) {
	try {
		n = n === undefined ? "" : n, $("img[data-image-src]").not(n).each(function() {
			var n = $(this);
			image_scaleOne(n)
		})
	} catch (t) {}
}

function image_scaleOne(n) {
	if (typeof n != "undefined") {
		var f = n,
			i = "",
			s = f.width(),
			e = f.attr("data-width"),
			u = $("html").hasClass("lt-ie9") ? 1450 : 1600,
			h = window.screen.width > u ? u : window.screen.width,
			c = $(window).width() > u ? u : $(window).width(),
			l = h / c,
			o = parseInt((s * l).toString(), 0) + 1,
			t = Math.round(o / e * 100, 0),
			r = 1;
		if (e > o) {
			t <= 100 && t > 80 ? (t = 100, r = 1) : t <= 90 && t > 80 ? (t = 90, r = 2) : t <= 80 && t > 75 ? (t = 80, r = 3) : t <= 75 && t > 64 ? (t = 75, r = 4) : t <= 64 && t > 40 ? (t = 64, r = 5) : t <= 40 && t > 35 ? (t = 40, r = 6) : t <= 35 && t > 30 ? (t = 35, r = 7) : t <= 30 && t > 25 ? (t = 30, r = 8) : t <= 25 && t > 20 ? (t = 30, r = 9) : t <= 20 && (t = 20, r = 10), t / 100 * e <= o && (r -= 1);
			switch (r) {
				case 1:
					i = "";
					break;
				case 2:
					i = "15";
					break;
				case 3:
					i = "2";
					break;
				case 4:
					i = "25";
					break;
				case 5:
					i = "3";
					break;
				case 6:
					i = "4";
					break;
				case 7:
					i = "45";
					break;
				case 8:
					i = "5";
					break;
				case 9:
					i = "55";
					break;
				case 10:
					i = "6";
					break;
				default:
					i = ""
			}
			i = r <= 1 ? "" : "&s=" + i
		} else i = "";
		f.attr("data-size", i)
	}
}

function getURLParameter(n) {
	return decodeURI((RegExp(n + "=(.+?)(&|$)").exec(location.search) || [, null])[1])
}

function addGrid() {
	if ($(".b-grid-overlay").length === 0) {
		$(".b-page-wrapper").append('<div class="b-grid-overlay"><div class="b-column"><\/div><div class="b-column"><\/div><div class="b-column"><\/div><div class="b-column"><\/div><div class="b-column"><\/div><div class="b-column"><\/div><div class="b-column"><\/div><div class="b-column"><\/div><div class="b-column"><\/div><div class="b-column"><\/div><div class="b-column"><\/div><div class="b-column"><\/div><\/div>'), $(".b-page-wrapper").addClass("show-grid");
		$(".b-grid-overlay").on("click", function() {
			$(".b-page-wrapper").removeClass("show-grid"), $(".b-grid-overlay").remove()
		})
	}
}

function addGridForms() {
	if ($(".b-grid-overlay-zforms").length === 0) {
		$(".b-form-wrapper .group").append('<div class="b-grid-overlay-zforms"><div class="b-column"><\/div><div class="b-column"><\/div><div class="b-column"><\/div><div class="b-column"><\/div><div class="b-column"><\/div><div class="b-column"><\/div><div class="b-column"><\/div><div class="b-column"><\/div><div class="b-column"><\/div><div class="b-column"><\/div><div class="b-column"><\/div><div class="b-column"><\/div><\/div>'), $(".b-page-wrapper").addClass("show-grid-zforms");
		$(".b-grid-overlay-zforms").on("click", function() {
			$(".b-page-wrapper").removeClass("show-grid-zforms"), $(".b-grid-overlay-zforms").remove()
		})
	}
}

function submitForm(n, t) {
	if (t || (t = "formcomponentform"), n == "reset") return $("#" + t).length > 0 && document.forms[t].reset(), !1;
	if ($("#" + t).length > 0) $("#" + t).append('<div><input type="hidden" name="' + n + '" value="' + n + '" /><\/div>');
	else return !1;
	return $("#" + t).submit(), !0
}

function fakeCheckPassword() {
	compareValidator("password1", "adresstype-error-idnxpspagformcomponentvalidatorcebfcecdacfdceelanguagenonepoolgermany", this.va, "business", "equals", null)
}

function hideServerErrors() {
	$(".serverErrorText").hide()
}

function copyVal(n, t) {
	jQuery("#" + t).val(jQuery("#" + n).val())
}

function copySelected(n, t) {
	jQuery("#" + t).val(jQuery("#" + n).val()).trigger("change")
}

function actionsByID(n, t, i) {
	var r = "",
		u = "";
	n != "" && (r = "#" + n.replace(/ /g, "").replace(/\,/g, ",#")), t != "" && (u = "#" + t.replace(/ /g, "").replace(/\,/g, ",#")), i == !0 ? (jQuery(r).hasClass("Disabled") && jQuery(r).removeClass("Disabled"), jQuery(u).hasClass("Disabled") || jQuery(u).addClass("Disabled")) : (jQuery(r).hasClass("Disabled") || jQuery(r).addClass("Disabled"), jQuery(u).hasClass("Disabled") && jQuery(u).removeClass("Disabled"))
}

function regexValidator(n, t, i, r) {
	var u = !1;
	return u = r.test(i) ? !0 : !1, u == !0 ? (jQuery("#" + n).hasClass("validationSuccess") || jQuery("#" + n).addClass("validationSuccess"), jQuery("#" + n).hasClass("validationFail") && jQuery("#" + n).removeClass("validationFail"), jQuery("#lbl" + n).hasClass("error") && jQuery("#lbl" + n).removeClass("error"), $("#" + t).hide()) : (jQuery("#" + n).hasClass("validationSuccess") && jQuery("#" + n).removeClass("validationSuccess"), jQuery("#" + n).hasClass("validationFail") || jQuery("#" + n).addClass("validationFail"), jQuery("#lbl" + n).hasClass("error") || jQuery("#lbl" + n).addClass("error"), $("#" + t).show()), u
}

function compareValidator(n, t, i, r, u) {
	var f = !1;
	switch (u) {
		case "greaterthan":
			i > r && (f = !0);
			break;
		case "greaterequals":
			i >= r && (f = !0);
			break;
		case "equals":
			i == r && (f = !0);
			break;
		case "equalsnot":
			i != r && (f = !0);
			break;
		case "smallerequals":
			i < r && (f = !0);
			break;
		case "smallerthan":
			i <= r && (f = !0)
	}
	return f
}

function magicDisclaimerLayerReset() {
	$("#datasave_1").is(":checked") == !0 ? ($("#mainprivacy").show(), $("#mainprivacy").removeClass("hidden"), $("#datasaveX_1").attr("checked", !1), $("#datasaveX_2").attr("checked", !1)) : ($("#datasaveX_1").attr("checked", !0), $("#datasaveX_2").attr("checked", !1), $("#mainprivacy").hasClass("hidden") || ($("#mainprivacy").addClass("hidden"), $("#mainprivacy").hide()))
}

function TeilnahmeLayer(n) {
	$("#datasaveX_1").is(":checked") == !0 ? $("#teilnahmebedingung_1").attr("checked", !1) : $("#teilnahmebedingung_1").attr("checked", !0), dialogCloseOverlay(n)
}

function magicDisclaimerLayerResetMobil() {
	$("#datasave_1").is(":checked") == !0 ? ($("#mainprivacy").show(), $("#mainprivacy").removeClass("hidden"), $("#datasaveX_1").attr("checked", !1), $("#datasaveX_2").attr("checked", !1)) : ($("#datasaveX_1").attr("checked", !0), $("#datasaveX_2").attr("checked", !1), $("#mainprivacy").hasClass("hidden") || ($("#mainprivacy").addClass("hidden"), $("#mainprivacy").hide()))
}

function openDisclaimerIAA() {
	$("#datasaveX_1").attr("checked", !1), $("#datasaveX_2").attr("checked", !1), $("#allowusagephone_1").attr("checked", !1), $("#allowusagemail_1").attr("checked", !1), $("#allowusagmail_1").attr("checked", !1), $("#datasave_1").attr("checked") == !0 ? dialogOpenOverlay("mainprivacy") : ($("#datasaveX_1").attr("checked", !1), $("#datasaveX_2").attr("checked", !0))
}

function dialogOpenOverlay(n) {
	($("#overlayTest").length < 1 && jQuery("#formcomponentform").prepend("<div id='overlayTest' class='dialogBG'><\/div>"), $("#" + n).length < 1) || ($("html").css("overflow-y", "hidden"), $.browser.msie == !0 && $.browser.version < 7 && $(window).scrollTop(0), $("#overlayTest").css({
		"z-index": "2000"
	}), $("#" + n).css({
		"z-index": "2001"
	}), jQuery("#formcomponentform").append($("#" + n)), $("#overlayTest, #" + n).show())
}

function dialogCloseOverlay(n) {
	$("#overlayTest, #" + n).hide(), $("html").css("overflow-y", "scroll")
}

function openValueLink(n, t) {
	t = typeof t != "undefined" ? "_self" : "_blank";
	var i = $(n).find("option:selected")[0].value;
	!i || window.open(i, t)
}

function magicDisclaimerLayer() {
	$(".dataprotection-switched").length ? ($("#datasaveX_1").is(":checked") == !0 && ($("#datasave_2").attr("checked", !1), $("#datasave_1").attr("checked", !0)), $("#datasaveX_2").is(":checked") == !0 && ($("#datasave_2").attr("checked", !0), $("#datasave_1").attr("checked", !1), $("#allowusagephone_1").attr("checked", !1), $("#allowusagemail_1").attr("checked", !1), $("#hideallowusagephone").val("false"), $("#hideallowusagemail").val("false")), $("#mainprivacy").addClass("hidden"), dialogCloseOverlay("mainprivacy")) : ($("#datasaveX_1").is(":checked") == !0 && ($("#datasave_2").attr("checked", !0), $("#datasave_1").attr("checked", !1), $("#allowusagephone_1").attr("checked", !1), $("#allowusagemail_1").attr("checked", !1), $("#hideallowusagephone").val("false"), $("#hideallowusagemail").val("false")), $("#datasaveX_2").is(":checked") == !0 && ($("#datasave_2").attr("checked", !1), $("#datasave_1").attr("checked", !0)), $("#mainprivacy").addClass("hidden"), dialogCloseOverlay("mainprivacy"))
}

function SelectPorscheCar() {
	if ($("#car_modelinterest").length != 0) {
		var t = $("#modelinterest1").val(),
			i = $("#modelinterest2").val(),
			n = $("#car_modelinterest").val();
		$("#formcomponentform #modelinterest1 option, #formcomponentform #modelinterest2 option").remove(), $("#formcomponentform #modelinterest1 optgroup, #formcomponentform #modelinterest2 optgroup").remove(), $("<option/>").val("").text("- - -").appendTo("#formcomponentform #modelinterest1"), $("<option/>").val("").text("- - -").appendTo("#formcomponentform #modelinterest2"), n.indexOf("6") > -1 ? ($("#tempporschemodel optgroup").clone().appendTo("#formcomponentform #modelinterest1"), $("#tempporschemodel optgroup").clone().appendTo("#formcomponentform #modelinterest2")) : n != "" && ($("#tempporschemodel optgroup." + n).clone().appendTo("#formcomponentform #modelinterest1"), $("#tempporschemodel optgroup." + n).clone().appendTo("#formcomponentform #modelinterest2")), $("#modelinterest1").val(t), $("#modelinterest2").val(i)
	}
}

function cleardd(n) {
	$("#formcomponentform #" + n + " option").remove(), $("#formcomponentform #" + n + " optgroup").remove()
}

function dieselcode() {
	return
}

function selectdd(n, t) {
	var r, i;
	$("#" + t).length != 0 && (r = $("#" + t).val(), $("#formcomponentform #" + t + " option").remove(), $("#formcomponentform #" + t + " optgroup").remove(), i = $("#" + n).val(), $("<option/>").val("").text("---").appendTo("#formcomponentform #" + t), i != "" && ($("#temp-" + t + " optgroup." + i).clone().appendTo("#formcomponentform #" + t), $("#formcomponentform #" + t + " optgroup").remove(), $(".b-form-wrapper #" + t).select2({
		containerCssClass: "gui-select2-container",
		dropdownCssClass: "gui-select2-dropDown",
		minimumResultsForSearch: -1,
		width: "100%",
		placeholder: $(this).find(":selected").text()
	})), $("#" + t).val(r))
}

function SelectMake() {
	var t, n;
	$("#model").length != 0 && (t = $("#model").val(), $("#formcomponentform #model option").remove(), $("#formcomponentform #model optgroup").remove(), n = $("#make").val(), $("<option/>").val(n + "000").text("- - -").appendTo("#formcomponentform #model"), $("#model select").val(n + "000"), n != "" && ($("#tempmodel optgroup." + n + "> option").clone().appendTo("#formcomponentform #model"), $("#model").children().remove("optgroup"), $(".b-form-wrapper #model").select2({
		containerCssClass: "gui-select2-container",
		dropdownCssClass: "gui-select2-dropDown",
		minimumResultsForSearch: -1,
		width: "100%",
		placeholder: $(this).find(":selected").text()
	})))
}

function Select_Make() {
	for (models = car[document.getElementById("make").selectedIndex][1], document.getElementById("model").length = 1, document.getElementById("model").selectedIndex = 0, count = 1; count != models.length; count++) newModel = new Option(models[count][0], models[count][0], !1, !0), document.getElementById("model").options[document.getElementById("model").length] = newModel;
	document.getElementById("model").selectedIndex = 0
}

function SelectModel() {
	models = car[document.forms.formcontrol.car_make.selectedIndex][1], types = models[document.forms.formcontrol.car_model.selectedIndex][1]
}

function SelectMakeUS() {
	for (models_us = car_us[document.getElementById("make").selectedIndex][1], document.getElementById("model").length = 1, document.getElementById("model").selectedIndex = 0, count = 1; count != models_us.length; count++) newModel = new Option(models_us[count][0], models_us[count][0], !1, !0), document.getElementById("model").options[document.getElementById("model").length] = newModel;
	document.getElementById("model").selectedIndex = 0
}

function SelectModelUS() {
	models_us = car_us[document.forms.formcontrol.car_make.selectedIndex][1], types_us = models_us[document.forms.formcontrol.car_model.selectedIndex][1]
}

function dialog_click_track(n, t, i) {
	if (t) try {
		i == 1 && click_track(n)
	} catch (r) {}
}

function setMail() {
	$("#allowusagemail_1").is(":checked") == !0 ? $("#hideallowusagemail").val("true") : $("#hideallowusagemail").val("false")
}

function setPhone() {
	$("#allowusagephone_1").is(":checked") == !0 ? $("#hideallowusagephone").val("true") : $("#hideallowusagephone").val("false")
}

function positionPrivacyCommitmentLayer() {
	$("#privacy_commitment_layer").length > 0 && $("#privacy_commitment_layer > .privacyCommitment_layerMessageContainer").css({
		top: $("body").offset().top + "px"
	})
}

function maxChars(n) {
	$("#message").attr("maxlength", n), $("#lblmessage").text($("#lblmessage").text().replace(/([0-9])+/g, n - $("#message").val().length))
}

function onJQWindowLoad() {
	runExternalScripts()
}

function runExternalScripts() {
	if (typeof GLOBAL_CONFIG.loadPsyma != "undefined") {
		if (GLOBAL_CONFIG.loadPsyma === "") return;
		runExternalScript("scripts.psyma.com/" + GLOBAL_CONFIG.loadPsyma, 1)
	}
}

function initPONCookieController() {
	GxGeneral = function() {
		function t() {
			var t = $.cookie(n);
			return (log("BlueConic Cookie (" + n + ") : " + t), t != null && typeof t != "undefined" && (t == "ANONYMOUS" || t == "PERSONAL")) ? !0 : !1
		}
		var n = "BCPermissionLevel";
		return {
			hasPermission: t
		}
	}()
}

function initAll() {
	initPONCookieController(), g_is_home = $("body[class*='home']").length > 0, $("#page").append($(".dealerlocator, .dealerlocatorResults")), g_is_fit = $(".fitMlbody").length > 0, g_is_iPhone = navigator.userAgent.toLowerCase().indexOf("iphone") != -1, g_is_iPad = navigator.userAgent.toLowerCase().indexOf("ipad") != -1, g_is_iPad3 = g_is_iPad && window.devicePixelRatio && window.devicePixelRatio == 2, hasTouch = g_is_iPad || navigator.userAgent.toLowerCase().indexOf("android") != -1 || navigator.userAgent.toLowerCase().indexOf("silk") != -1, $("#formcomponentform").length == 0 && $("#vp").remove(), initPressGallery(), checkKBase(), getNXid(), initGallerySubtitles(), specialSpotlightTrackings(), initPorscheCode(), showGrid()
}

function TL() {
	window.scrollTo(0, 0)
}

function showGrid() {
	var n = getQueryVariable("debug");
	n == "gridoflove" && ($(".page").append('<div id="grid"><\/div>'), $("body").click(function() {
		$("#grid").toggleClass("VIS")
	}))
}

function checkKBase() {
	$(".tabContent2").length == 0 && ($("ul.galleryKBase li.kbase a,ul.knowledgeBases li.kbase a").bind("click", function(n) {
		var t = $("ul.galleryKBase li.kbase a").index($(this));
		clickKnowledgebase($(this).attr("href"), t), n.preventDefault()
	}), handleDirectKBaseUrl())
}

function handleDirectKBaseUrl() {
	var t = getQueryString(),
		i = /kbase=\/(kbase|event2).aspx((\?|\&)(pool|type|lang|id|callpath|marketpool|marketlang|gtabindex|itemindex)=.*){3,10}/ig;
	if (t.match(i)) {
		var r = t.indexOf("kbase=") + "kbase=".length,
			u = t.substring(r),
			n = getQueryVariable("itemindex");
		n = n == "" || isNaN(parseInt(n)) || parseInt(n) <= 0 ? null : parseInt(n) - 1, clickKnowledgebase(u, n)
	}
}

function getNXid() {
	g_page_nxid = $("body").data("pageid")
}

function getQueryString() {
	return window.location.search.substring(1)
}

function getQueryVariable(n) {
	var r = getQueryString().split("&"),
		t;
	for (i = 0; i < r.length; i++)
		if (t = r[i].split("="), t[0] == n) return t[1];
	return ""
}

function setIntroImageBorder() {
	var n = document.getElementById("introImage");
	n && (n.style.borderBottom = "solid 1px #CECECE", n.style.width = "615px")
}

function getPoolName() {
	if (typeof CURRENTPOOL != "undefined" && CURRENTPOOL != "") return CURRENTPOOL;
	var n = window.location.href,
		t = n.indexOf(window.location.hostname),
		i = n.substr(t, n.length - 1);
	return retVal = i.split("/")[1]
}

function getPoolLang(n) {
	if (typeof CURRENTLANGUAGE != "undefined" && CURRENTLANGUAGE != "") return CURRENTLANGUAGE;
	var i = window.location.href,
		r = i.indexOf(window.location.hostname),
		u = i.substr(r, i.length - 1),
		t = u.split("/")[2];
	if (t == "de" || t == "en" || t == "es" || t == "fr" || t == "it" || t == "jp" || t == "nl" || t == "ko" || t == "th" || t == "zh" || t == "pt" || t == "tr") return t;
	switch (n) {
		case "china":
			t = "zh";
			break;
		case "belgium":
			t = "en";
			break;
		case "korea":
			t = "ko";
			break;
		case "netherlands":
			t = "nl";
			break;
		case "swiss":
			t = "de";
			break;
		case "taiwan":
			t = "zh";
			break;
		case "thailand":
			t = "th";
			break;
		case "pco":
			t = "de";
			break;
		case "turkey":
			t = "tr";
			break;
		default:
			t = "none"
	}
	return t
}

function fitFrameFromParent(n) {
	var i = document.getElementById("mainframe"),
		r = document.getElementById("footer"),
		t = document.getElementById("search");
	i && (i.style.height = n + 40 + 140 + "px", t && (t.style.display = "none"), r && (r.style.bottom = "-1px"), t && (t.style.display = "block"))
}

function containsStr(n, t) {
	if (n) return n.indexOf(t) != -1
}

function openDivPopup(n, t, i) {
	var f, e, o;
	if (g_divPopupOpen == 0) {
		g_divPopupHasCloseButton = !0;
		var s = i + g_divPopupContentBorder * 2 + g_divPopupNaviSpace,
			h = t + g_divPopupContentBorder * 2,
			c = i + g_divPopupContentBorder * 2 + g_divPopupShadeborder * 2 + g_divPopupNaviSpace + 2,
			l = t + g_divPopupContentBorder * 2 + g_divPopupShadeborder * 2 + 2,
			r = document.getElementById("divPopupShade"),
			u = document.getElementById("divPopup");
		r.className = "bannerlibShade", u.className = "bannerlib", f = g_pageWidth / 2 - t / 2, e = Math.round((viewportGetHeight() - i) / 2) + viewportGetScrollY(), e < 0 && (e = 0), f < 0 && (f = 0), r.style.left = f - g_divPopupShadeborder + "px", r.style.top = e - g_divPopupShadeborder + "px", r.style.width = l + "px", r.style.height = c + "px", u.style.left = f + "px", u.style.top = e + "px", u.style.height = s + "px", u.style.width = h + "px", o = document.getElementById("closeButtonDivPopup"), o && (o.style.left = t - 19 + "px"), g_divPopupOpen = n, prepareFillDivPopup(n)
	}
}

function openDivPopupTemplate(n, t) {
	var s, i, r, e, o, h;
	if (g_divPopupOpen == 0) {
		g_divPopupHasCloseButton = !0, s = t;
		switch (t) {
			case "bannerlib":
				i = 758, r = 640;
				break;
			case "bannerlibsky":
				i = 192, r = 670;
				break;
			case "bannerlibfull":
				i = 498, r = 126;
				break;
			case "bannerlibhalf":
				i = 264, r = 126;
				break;
			case "bannerlibrect":
				i = 210, r = 216;
				break;
			case "bannerlibmrect":
				i = 330, r = 316;
				break;
			case "bannerlibpopuph":
				i = 230, r = 366;
				break;
			case "bannerlibpopupr":
				i = 280, r = 316
		}
		var c = r,
			l = i,
			a = r + g_divPopupShadeborder * 2 + 2,
			v = i + g_divPopupShadeborder * 2 + 2,
			u = document.getElementById("divPopupShade"),
			f = document.getElementById("divPopup");
		u.className = s + "Shade", f.className = s, e = g_pageWidth / 2 - i / 2, o = Math.round((viewportGetHeight() - r) / 2) + viewportGetScrollY(), o < 0 && (o = 0), e < 0 && (e = 0), u.style.left = e - g_divPopupShadeborder + "px", u.style.top = o - g_divPopupShadeborder + "px", u.style.width = v + "px", u.style.height = a + "px", f.style.left = e + "px", f.style.top = o + "px", f.style.height = c + "px", f.style.width = l + "px", h = document.getElementById("closeButtonDivPopup"), h && (h.style.left = i - 19 + "px"), g_divPopupOpen = n, prepareFillDivPopup(n)
	}
}

function closeDivPopup() {
	var t = document.getElementById("divPopup"),
		n;
	t.innerHTML = "<p>&nbsp;<\/p>", t.style.display = "none", hideLr("divPopupShade"), g_divPopupOpen = 0, g_is_safari && (n = document.getElementById("introImage"), n && (n.style.visibility = "visible"))
}

function prepareFillDivPopup(n) {
	n += n.indexOf("?") > -1 ? "&" + getCachePrevent() : "?" + getCachePrevent(), window.XMLHttpRequest ? g_req = new XMLHttpRequest : window.ActiveXObject && (g_req = new ActiveXObject("Microsoft.XMLHTTP")), g_req.onreadystatechange = fillDivPopup, g_req.open("GET", n, !0), g_req.send(null)
}

function fillDivPopup() {
	var e, u, f, o, s, h;
	if (g_req.readyState == 4)
		if (g_req.status == 200) {
			g_is_safari && (e = document.getElementById("introImage"), e && (e.style.visibility = "hidden"));
			var n = "",
				t = document.getElementById("divPopup"),
				r = t.style.width;
			for (r = r.replace(/px/, ""), u = t.style.height, u = u.replace(/px/, ""), divPopPageHeight = u - 2 * g_divPopupContentBorder, divPopPageWidth = r - 2 * g_divPopupContentBorder, r -= 17, u -= 17, n += "", g_divPopupHasCloseButton == !0 && (n += '<div style="left:' + r + 'px;" class="closeButton" id="closeButtonDivPopup" onclick="closeDivPopup();"><img src="/Images/close-button.gif" alt="[X]" title="Close" /><\/div>'), n += g_req.responseText, n = replStr(n, "<content>", ""), n = replStr(n, "<\/content>", ""), f = getTextBetween(n, "// <![CDATA[", "// ]\]>"), f = replStr(f, ",wmode=opaque", ","), t.innerHTML = n, o = document.getElementById("divPopupShade"), t = document.getElementById("divPopup"), screen.width <= 800 && (s = 350, h = document.getElementById("divPopupWrapper"), h.style.height = s - 80 + "px"), g_maxDivPage = getMaxDivPage("page"), i = 1; i <= g_maxDivPage; i++) pageElm = document.getElementById("page" + i), pageElm && (pageElm.style.width = divPopPageWidth + "px", pageElm.style.height = divPopPageHeight + "px");
			naviElm = document.getElementById("divPopupNavi"), naviElm && (naviElm.style.top = divPopPageHeight + "px", naviElm.style.left = g_divPopupContentBorder + (divPopPageWidth / 2 - 45) + "px"), t.style.display = "block", o.style.display = "block", f != "" && eval(f)
		} else alert("Can't retrieve XML: " + g_req.statusText)
}

function getMaxDivPage(n) {
	var t = 0,
		i = null;
	do t++, i = document.getElementById(n + t); while (i != null);
	return t--, t
}

function prevDivPage(n) {
	g_maxDivPage == 0 && (g_maxDivPage = getMaxDivPage(n));
	var t = g_currentDivPage;
	return t--, t <= 0 && (t = g_maxDivPage), t != g_currentDivPage && (showLr(n + t), hideLr(n + g_currentDivPage)), g_currentDivPage = t, !1
}

function nextDivPage(n) {
	g_maxDivPage == 0 && (g_maxDivPage = getMaxDivPage(n));
	var t = g_currentDivPage;
	return t++, t > g_maxDivPage && (t = 1), t != g_currentDivPage && g_maxDivPage > 1 && (showLr(n + t), hideLr(n + g_currentDivPage)), g_currentDivPage = t, !1
}

function clickKnowledgebase(n, t, i) {
	n != "" && (g_currentKBase != null && (g_currentKBase == null || g_currentKBase.isOpen) || (g_currentKBase = new KBase), i != null && (g_currentKBase.kbWrapperHeightDiff = 127, g_currentKBase.direction = i), t >= 0 && (g_currentKBase.currentItemIndex = t), g_currentKBase.open(n, t))
}

function KBase() {
	var n = this;
	this.oldModelPage = g_kbaseClassicStyle == !0, this.isOpen = !1, this.currentPool = getPoolName(), this.currentLanguage = getPoolLang(this.currentPool), this.isCuttingEdge = !0, this.navigationBarTop = -1, this.navigationBarWidth = 857, this.navigationBarLeft = 106, this.flashContainerId = "introImageKBase_flash", this.direction = "no", this.animateContent = function(t, i) {
		var e, o, r, u, f;
		e = 600, o = 0, t ? (r = 0, u = .01, f = 1) : (r = n.prevRequested ? n.contentWidth : -n.contentWidth, u = 1, f = .01), $("#knowledgeBase .animationWrapper").css("opacity", u).animate({
			opacity: f,
			left: this.direction == "left" ? -r : r
		}, e, "swing", function() {
			typeof i == "function" && i()
		})
	}, this.clear = function() {
		$("#knowledgeBase").empty()
	}, this.showLoadingScreen = function() {
		$("#knowledgeBase .loading").length == 0 && $("#knowledgeBase").append('<div class="loading"><\/div>'), $("#knowledgeBase .loading").show()
	}, this.hideLoadingScreen = function() {
		$("#knowledgeBase .loading").hide()
	}, this.show = function() {
		var u, i, t, r;
		n.isCuttingEdge && n.isOpen ? (u = n.prevRequested || this.direction == "left" ? -n.contentWidth : n.contentWidth, $("#knowledgeBase .animationWrapper").css("left", u + "px"), $("#knowledgeBaseShade, #knowledgeBase").css("visibility", "visible"), n.animateContent(!0, null)) : ($("#knowledgeBase .animationWrapper").css("left", "0px"), $("#knowledgeBaseShade,#knowledgeBase").css({
			visibility: "visible",
			display: "block"
		}), n.isOpen = !0);
		$("#closeButtonKbase").one("click", function() {
			$("#knowledgeBase").empty()
		});
		if (!$("#knowledgeBase .animationWrapper #galleryFlashContainer").length) {
			if (i = function() {
					function s() {
						var n, e;
						$(".innerContent", $("#knowledgebaseWrapper")).addClass(t).css({
							"max-height": o ? r - $("#knowledgebaseWrapper .innerContent").position().top : 250
						}).removeClass("innerContent"), i - f < 0 ? ($("." + t, $("#knowledgebaseWrapper")).wrapInner('<div style="width:auto;margin-left:1em;margin-right:2em" />'), $("." + t, $("#knowledgebaseWrapper")).jScrollPane({
							showArrows: "true",
							horizontalScrollbar: "false"
						})) : ($("." + t, $("#knowledgebaseWrapper")).wrapInner('<div class="wrapInner" style="width:auto;margin-left:1em;margin-right:2em" />'), !$("#introImageKBase_flash").length || (n = $("#knowledgeBase").height() - u - $("#introImageKBase_flash").outerHeight(!0) - 30, $("." + t, $("#knowledgebaseWrapper")).css("max-height", n), n < $("#knowledgebaseWrapper .wrapInner").height() && $("." + t, $("#knowledgebaseWrapper")).jScrollPane({
							showArrows: "true",
							horizontalScrollbar: "false"
						}))), e = $("#knowledgebaseWrapper").attr("style"), e += $("#knowledgebaseWrapper").attr("style", "overflow-y: hidden !important; border-right:none;").attr("style"), $("#knowledgeBase .animationWrapper").css("overflow-y", "hidden")
					}
					var u;
					n.adjustDimensions();
					var i = $("#knowledgebaseWrapper").height(),
						f = 0,
						o = $("#knowledgebaseWrapper .innerContent").length == 0 ? !1 : !0;
					$("#knowledgebaseWrapper").children().each(function(n, t) {
						$(t).css("display") != "none" && (f += $(t).height())
					});
					var i = $("#knowledgebaseWrapper").height(),
						e = $("#knowledgeBase .animationWrapper").length > 0 ? $("#knowledgeBase .animationWrapper").height() : 0,
						r = 0;
					i - e < 0 ? (r = e, u = 0, $("#knowledgeBase .animationWrapper").children().each(function(n, t) {
						$(t).attr("id") != "knowledgebaseWrapper" && (u += $(t).outerHeight())
					}), r -= u) : r = i, $.when($(document).ajaxStop(function() {})).then(function() {
						s()
					})
				}, jQuery(".tabContent2 .techdata").length > 0) {
				if (t = "scroll-pane", $(".innerContent").find(".engineDiagram").length > 0) {
					t = "kbase-scroll-pane", $("#knowledgebaseWrapper").addClass(t).jScrollPane({
						showArrows: "true",
						horizontalScrollbar: "false"
					});
					return
				}
				i(), $("#knowledgebaseWrapper .introImage").css("margin-bottom", "19px")
			} else $(".innerContent").find(".engineDiagram").length > 0 ? (t = "kbase-scroll-pane", $("#knowledgebaseWrapper").addClass(t).jScrollPane({
				showArrows: "true",
				horizontalScrollbar: "false"
			})) : (t = "kbase-scroll-pane", i());
			$("#introImageKBase_flash").length != 0 && (r = $("#introImageKBase_flash").get(0), $("#introImageKBase_flash").parent().css({
				height: $(r).attr("height") + "px",
				width: $(r).attr("width") + "px"
			}))
		}
	}, this.prevRequested = !1, this.nextRequested = !1, this.contentTop = -1, this.contentHeight = -1, this.contentWidth = $("#knowledgeBase").width(), this.currentItemIndex = 0, this.open = function(t, i) {
		i == null || isNaN(i) || (n.currentItemIndex = i), n.isCuttingEdge ? n.isOpen ? n.animateContent(!1, function() {
			n.showLoadingScreen(), n.retrieve(t)
		}) : n.retrieve(t) : n.retrieve(t)
	}, this.retrieve = function(t) {
		$.ajax({
			url: t,
			dataType: "html",
			success: function(i) {
				var r, u, f;
				ieToggleDropDowns(!0), n.clear(), r = $('<div class="animationWrapper"><\/div>'), u = "", n.isCuttingEdge && (u = '<span class="closeLabel"><\/span>'), $('<div class="closeButton" id="closeButtonKbase">' + u + '<img src="/Images/close-button.gif" alt="[X]" title="Close" /><\/div>').click(n.closebuttonCallback).appendTo(r), r.appendTo("#knowledgeBase"), $(i.replace(/\<\/?content\>/g, "")).appendTo(".animationWrapper"), f = new I18N, f.resolveText("js_apps", "kbase", "closeLabel", ".closeLabel"), f.doProcessing(), n.toggleMilkyBackground("on"), n.isCuttingEdge && this.direction == "no" ? $("#knowledgeBaseShade, #knowledgeBase").fadeIn(350) : $("#knowledgeBaseShade, #knowledgeBase").css({
					visibility: "hidden",
					display: "block"
				}), n.oldModelPage || n.setupNavigationBar(), n.adjustDimensions("retrieve"), n.hideLoadingScreen(), n.show(t)
			},
			error: function(n, t) {
				alert("Unable to retrieve content: " + t + ". Please try again.")
			}
		})
	}, this.runVideo = function() {}, this.stopVideo = function() {}, this.closebuttonCallback = function() {
		n.close()
	}, this.navigationElementSelector = "ul li.kbase", this.navigationItemCollection = null, this.setupNavigationBar = function() {
		var t, i;
		if (n.isCuttingEdge && (n.navigationItemCollection = $(n.navigationElementSelector), n.navigationItemCollection.length > 1)) {
			$("#kbNavi").length == 0 && $('<div id="kbNavi"><\/div>').insertBefore("#knowledgeBaseShade"), n.navigationBarTop = ($(window).height() - $("#kbNavi").height()) / 2 + viewportGetScrollY(), $("#kbNavi").css({
				top: n.navigationBarTop + "px",
				width: n.navigationBarWidth + "px",
				left: n.navigationBarLeft + "px"
			});
			var e, o, r = n.getPrev(),
				u = n.getNext(),
				f = "89px";
			r ? (t = $(r).find("span").text(), $("#kbPrev").length == 0 ? e = $('<div id="kbPrev"><a title="' + t + '" href="javascript:void(0);"><\/a><\/div>').click(function() {
				n.clickPrev()
			}).appendTo("#kbNavi") : $("#kbPrev a").attr("title", t), $("#kbPrev").animate({
				left: 0
			}, 200, "swing")) : $("#kbPrev").animate({
				left: f
			}, 200, "swing"), u ? (i = $(u).find("span").text(), $("#kbNext").length == 0 ? o = $('<div id="kbNext"><a title="' + i + '"  href="javascript:void(0);"><\/a><\/div>').click(function() {
				n.clickNext()
			}).appendTo("#kbNavi") : $("#kbNext a").attr("title", i), $("#kbNext").animate({
				right: 0
			}, 200, "swing")) : $("#kbNext").animate({
				right: f
			}, 200, "swing")
		}
	}, this.getSibling = function(t) {
		var i = n.currentItemIndex + (t ? 1 : -1);
		return i < 0 || n.navigationItemCollection.length <= i ? !1 : n.navigationItemCollection[i]
	}, this.getNext = function() {
		return this.getSibling(!0)
	}, this.getPrev = function() {
		return this.getSibling(!1)
	}, this.clickNext = function() {
		n.nextRequested = !0, n.prevRequested = !1, $(n.navigationItemCollection[n.currentItemIndex + 1]).find("a").trigger("click")
	}, this.clickPrev = function() {
		n.prevRequested = !0, n.nextRequested = !1, $(n.navigationItemCollection[n.currentItemIndex - 1]).find("a").trigger("click")
	}, this.toggleMilkyBackground = function(n) {
		if (n == "on") {
			if ($("#kbaseMilkyBG").length != 0) return;
			$("#knowledgeBase").parent().append('<div id="kbaseMilkyBG"><\/div>')
		} else $("#kbaseMilkyBG").remove()
	}, this.imgWidth = 656, this.imgHeight = 535, this.minContainerHeight = 575, this.name = "KBASE", this.kbWrapperHeightDiff = 67, this.kbShadeMarginTopBottom = 16, this.shadeBorderWidth = 8, this.kbMagicHightModifier = 1, this.getContentHeight = function() {
		return $("#knowledgebaseWrapper").outerHeight(!0) + 47
	}, this.setKbWrapperHeight = function(n) {
		$("#knowledgebaseWrapper").length > 0 && $("#knowledgebaseWrapper").height(n - this.kbWrapperHeightDiff)
	}, this.adjustDimensions = function(t) {
		var t = t || "",
			f, c, i, h, e, o, s, l, u, r, a, v;
		f = $(window).height() - 2 * n.kbShadeMarginTopBottom - 2 * n.shadeBorderWidth, f < 0 && (f = 0), c = n.getContentHeight(), $("#" + n.flashContainerId).length > 0 && (e = $("#" + n.flashContainerId).attr("height"), e != "" && typeof e != "undefined" && (c += e)), i = f, i += n.kbMagicHightModifier, h = i + 2 * n.shadeBorderWidth, this.setKbWrapperHeight(i), o = document.getElementById("knowledgeBaseShade"), s = document.getElementById("knowledgeBase"), l = $(".page").length > 0 ? $(".page").width() : $("body").width(), u = l / 2 - n.imgWidth / 2, r = Math.round(($(window).height() - h) / 2) + viewportGetScrollY() + 8, r < 0 && (r = 0), u < 0 && (u = 0), n.isCuttingEdge && n.contentHeight != -1 && i != n.contentHeight ? (a = "+=" + (i - n.contentHeight), v = "+=" + (r - n.contentTop), $("#knowledgeBase,#knowledgeBaseShade").animate({
			height: a,
			top: v
		}, 300, "swing")) : (o.style.left = u - n.shadeBorderWidth + "px", o.style.top = r - n.shadeBorderWidth + "px", o.style.height = h + "px", s.style.left = u + "px", s.style.top = r + "px", s.style.height = i + "px"), n.contentTop = r, n.contentHeight = i
	}, this.close = function() {
		$("#kbNavi").remove(), ieToggleDropDowns(!1), n.isCuttingEdge ? $("#knowledgeBaseShade, #knowledgeBase").fadeOut("fast", function() {
			n.toggleMilkyBackground("off")
		}) : ($("#knowledgeBaseShade, #knowledgeBase").empty().hide(), n.toggleMilkyBackground("off")), $("#knowledgeBase, #knowledgeBaseShade, #knowledgebaseWrapper,  #knowledgebaseWrapper .jspContainer").removeAttr("style"), this.isOpen = !1
	}
}

function VidBase(n, t, i) {
	var r = this;
	r = new KBase, r.name = "VIDBASE", r.oldModelPage = !1, r.flashContainerId = "galleryFlashContainer_flash", r.containerWidth = n != null && !isNaN(n) ? n : 792, r.containerPaddingLeft = 23, r.containerPaddingRight = 23, r.imgWidth = r.containerWidth + r.containerPaddingLeft + r.containerPaddingRight, r.containerHeight = t != null && !isNaN(t) ? t : 455, r.containerPaddingTop = 48, r.containerPaddingBottom = 55, r.showLoadingBGI = i != null && i == !0 ? !0 : !1, r.imgHeight = r.containerHeight + r.containerPaddingTop + r.containerPaddingBottom, r.minContainerHeight = r.imgHeight, r.kbWrapperHeightDiff = 0, r.kbShadeMarginTopBottom = 8, r.kbMagicHightModifier = 0, r.navigationElementSelector = "#content > .tabContent2 > ul.galleryFilms > li > a", r.navigationBarWidth = r.imgWidth + r.shadeBorderWidth * 2 + 140, r.navigationBarLeft = 36, r.stopVideo = function() {
		flashPlayer_cmdStop(r.flashContainerId)
	}, r.closebuttonCallback = function() {
		r.stopVideo(), r.close()
	}, r.showLoadingScreen = function() {}, r.hideLoadingScreen = function() {}, this.open = r.open, r.getContentHeight = function() {
		return $("#knowledgeBase").outerHeight(!0)
	}, r.getSibling = function(n) {
		var t = r.currentItemIndex + (n ? 1 : -1);
		return t < 0 || r.navigationItemCollection.length <= t ? !1 : r.navigationItemCollection[t]
	}, r.clickNext = function() {
		r.nextRequested = !0, r.prevRequested = !1, r.stopVideo(), $(r.navigationItemCollection[r.currentItemIndex + 1]).trigger("click")
	}, r.clickPrev = function() {
		r.prevRequested = !0, r.nextRequested = !1, r.stopVideo(), $(r.navigationItemCollection[r.currentItemIndex - 1]).trigger("click")
	}, r.createFlashContainer = function(n) {
		var t = $("<div><\/div>").css({
			"background-color": "white",
			padding: r.containerPaddingTop + "px " + r.containerPaddingRight + "px " + r.containerPaddingBottom + "px " + r.containerPaddingLeft + "px",
			height: r.containerHeight + "px",
			width: r.containerWidth + "px"
		}).attr("id", r.flashContainerId.replace(/_flash/, ""));
		r.showLoadingBGI && t.css({
			"background-image": "url(/images/loading.gif)",
			"background-position": "center center",
			"background-repeat": "no-repeat"
		}), $(t).appendTo(n)
	}, r.runVideo = function() {}, r.retrieve = function(n) {
		var t, i, u;
		ieToggleDropDowns(!0), r.clear(), t = $('<div class="animationWrapper"><\/div>'), i = "", r.isCuttingEdge && (i = '<span class="closeLabel"><\/span>'), $('<div class="closeButton" id="closeButtonKbase">' + i + '<img src="/Images/close-button.gif" alt="[X]" title="Close" /><\/div>').click(r.closebuttonCallback).appendTo(t), t.appendTo("#knowledgeBase"), $("#knowledgeBase").css({
			width: r.imgWidth + "px"
		}), $("#knowledgeBaseShade").css({
			width: r.imgWidth + 16 + "px"
		}), r.createFlashContainer(".animationWrapper"), u = new I18N, u.resolveText("js_apps", "kbase", "closeLabel", ".closeLabel"), u.doProcessing(), r.toggleMilkyBackground("on"), r.isCuttingEdge ? $("#knowledgeBaseShade, #knowledgeBase").fadeIn(350) : $("#knowledgeBaseShade, #knowledgeBase").css({
			visibility: "hidden",
			display: "block"
		}), r.setupNavigationBar(), r.adjustDimensions(), r.show(n), this.runVideo(n)
	}
}

function PanoramaBase(n, t) {
	var i = this;
	i = new VidBase(n, t, !0, !0), i.name = "PANORAMABASE", i.navigationElementSelector = "#content > .tabContent2 > ul.galleryPanorama > li.flash > a", this.open = i.open
}

function getTextBetween(n, t, i) {
	var f = "",
		r = n.indexOf(t),
		u = n.indexOf(i);
	return r >= 0 && u >= 0 && u > r && (f = n.substring(r + t.length, u)), f
}

function clickZoomable(n) {
	var t;
	if ($ && ($("#kbaseMilkyBG").length == 0 && $("#knowledgeBase").parent().append('<div id="kbaseMilkyBG"><\/div>'), $("#kbaseMilkyBG").click(clickZoomed)), g_openZoom == 0) {
		var r = document.getElementById("zoomImageShade"),
			u = document.getElementById("zoomImage" + n),
			i = document.getElementById("kbaseMilkyBG"),
			f = document.getElementById("closeButton" + n);
		u.style.display = "block", r.style.display = "block", i && (i.style.display = "block"), g_openZoom = n, t = $("#zoomImage" + n + " img"), image_scaleOne(t), image_swapOne(t)
	}
}

function clickZoomed() {
	hideLr("zoomImageShade"), hideLr("zoomImage" + g_openZoom);
	var n = document.getElementById("kbaseMilkyBG");
	n && (n.style.display = "none"), $("#kbaseMilkyBG").unbind("click"), g_openZoom = 0
}

function showLr(n) {
	var t = document.getElementById(n);
	t && (t.style.display = "block")
}

function hideLr(n) {
	var t = document.getElementById(n);
	t && (t.style.display = "none")
}

function toggleLr(n) {
	var t = document.getElementById(n);
	t && (t.style.display != "block" ? showLr(n) : hideLr(n))
}

function expandCollapse(n) {
	$("#expandable_" + n).hasClass("isexpanded") ? collapseElement(n) : (collapseAllElements(), showElement(n))
}

function showElement(n) {
	$("#expandable_" + n).addClass("isexpanded")
}

function collapseElement(n) {
	$("#expandable_" + n).removeClass("isexpanded")
}

function collapseAllElements() {
	$(".expandable").removeClass("isexpanded")
}

function viewportGetHeight() {
	var n = 0;
	return window.innerHeight ? n = window.innerHeight - 18 : document.documentElement && document.documentElement.clientHeight ? n = document.documentElement.clientHeight : document.body && document.body.clientHeight && (n = document.body.clientHeight), n
}

function viewportGetWidth() {
	var n = 0;
	return window.innerWidth ? n = window.innerWidth - 18 : document.documentElement && document.documentElement.clientWidth ? n = document.documentElement.clientWidth : document.body && document.body.clientWidth && (n = document.body.clientWidth), n
}

function viewportGetScrollY() {
	var n = 0;
	return typeof window.pageYOffset == "number" ? n = window.pageYOffset : document.documentElement && document.documentElement.scrollTop ? n = document.documentElement.scrollTop : document.body && document.body.scrollTop ? n = document.body.scrollTop : window.scrollY && (n = window.scrollY), n
}

function showFlash(n, t, i, r, u, f, e, o) {
	var b = t + "_flash",
		v, h, l, k, y, a, p, d, c;
	if (i = "" + i, r = "" + r, u = "" + u, v = $("#" + t).get(0) || $("." + t).get(0), v) {
		if (CURRENTPOOL == "usa" && (o += ",buttonWidth=131"), h = JSONify(o + ",posx=296"), e.indexOf("allowScriptAccess") < 0 && (e = "allowScriptAccess=always," + e), l = JSONify("allowfullscreen=true," + e), k = !1, l.bgcolor = f, l.align = "middle", y = "/all/media/flash/expressInstall.swf", g_is_home && (y = !1), a = !0, hasFlashContent = !0, hasFlashContentHeight = r, p = !1, d = navigator.userAgent.toLowerCase().indexOf("ipad") != -1, typeof h.videopath != "undefined" && (p = document.location.href.indexOf("germany/models/") > -1 || document.location.href.indexOf("usa/models/") > -1), p && d) {
			var w = h.videopath.replace(".flv", ".mp4"),
				g = h.headline,
				s = h.playbuttontext,
				r = parseInt(l.height) - 60;
			$("#" + t).length > 0 ? (c = '<a target="_blank" href="' + w + '" class="greybutton videoicon" style="right:-478px;margin-right:16px; margin-top: 0; position:relative; top: -54px;"><span><img title="' + s + '" alt="' + s + '" src="/germany/ImageMachines/LinkblockTitle.ashx?text=' + encodeURIComponent(s) + '&amp;mode=greybutton"/><\/span><\/a>', CURRENTPOOL == "usa" && (c = '<a target="_blank" href="' + w + '" class="greybutton techtermPlay videoicon" style=""><span><img title="' + s + '" alt="' + s + '" src="/usa/ImageMachines/LinkblockTitle.ashx?text=' + encodeURIComponent(s) + '&amp;mode=greybutton"/><\/span><\/a>'), $("#" + t).append(c)) : (c = '<a target="_blank" href="' + w + '" class="greybutton videoicon" style="left:293px;margin-right:16px; margin-top: 0; position:absolute; top: 300px;z-index: 10;"><span><img title="' + s + '" alt="' + s + '" src="/germany/ImageMachines/LinkblockTitle.ashx?text=' + encodeURIComponent(s) + '&amp;mode=greybutton"/><\/span><\/a>', $("#introImage").append(c));
			return
		}
		g_is_home ? swfobject.hasFlashPlayerVersion(u) || (fallBackFromFlash(getPoolName()), a = !1) : swfobject.getFlashPlayerVersion().major + "" == "0" && (a = !1), a && ($(v).html('<div id="' + b + '"><\/div>'), swfobject.embedSWF(n, b, i, r, u, y, h, l, k))
	}
}

function JSONify(n) {
	var i, t;
	if (n == undefined || n == null) return "{}";
	var r = "{",
		u = !1,
		f = n.split(",");
	for (i = 0; i < f.length; i++)
		if (t = f[i].split("="), t[0] == undefined || t[0] == null || t[0] == "") {
			u = !0;
			continue
		} else i > 0 && !u && (r += ",", u = !1), r += t[0] + ':"' + t[1] + '"';
	return r += "}", eval("(" + r + ")")
}

function swfIsVideoPlayer(n) {
	var t = !1,
		i = n.substr(n.lastIndexOf("/") + 1);
	return i && i.toLowerCase() == "videoplayer.swf" && (t = !0), t
}

function setImage(n, t) {
	var i, r;
	return g_lastNumber != t && (i = document.getElementById("thumbnail" + g_lastNumber), i.className = "", i.style.border = "1px solid #ccc", r = document.getElementById("thumbnail" + t), r.className = "selected", r.style.border = "1px solid rgb(204,0,0)", g_lastNumber = t, sHref = n.href, document.getElementById("galleryImage").src = sHref, showGallerySubtitle(t), showGalleryClaim(t)), !1
}

function setThumbnail(n, t) {
	var i, r;
	return g_lastNumber != t && (i = document.getElementById("thumbnail" + g_lastNumber), i.className = "", i.style.border = "1px solid #ccc", r = document.getElementById("thumbnail" + t), r.className = "selected", r.style.border = "1px solid rgb(204,0,0)", g_lastNumber = t), !1
}

function prevgalleryImage() {
	var i = document.getElementById("thumbnail" + g_lastNumber),
		n, t, r;
	return i && (i.className = "", i.style.border = "1px solid #ccc"), n = --g_lastNumber, n < 1 && (n = getMaxNumberGallery()), t = document.getElementById("thumbnail" + n), t && (t.className = "selected", t.style.border = "1px solid rgb(204,0,0)"), r = document.getElementById("href" + n), sHref = r.href, document.getElementById("galleryImage").src = sHref, g_lastNumber = n, showGallerySubtitle(n), showGalleryClaim(n), !1
}

function nextgalleryImage() {
	var i = document.getElementById("thumbnail" + g_lastNumber),
		n, r, t, u;
	return i && (i.className = "", i.style.border = "1px solid #ccc"), n = ++g_lastNumber, r = getMaxNumberGallery(), n > r && (n = 1), t = document.getElementById("thumbnail" + n), t && (t.className = "selected", t.style.border = "1px solid rgb(204,0,0)"), u = document.getElementById("href" + n), sHref = u.href, document.getElementById("galleryImage").src = sHref, g_lastNumber = n, showGallerySubtitle(n), showGalleryClaim(n), !1
}

function initGallerySubtitles() {
	var n = getGalleryItemNo(),
		t, i;
	n == -1 && (n = 1), t = document.getElementById("gallerySubtitles"), t && (showGallerySubtitle(n), t.style.display = "block"), i = document.getElementById("galleryClaims"), i && (showGalleryClaim(n), i.style.display = "block")
}

function getGalleryItemNo() {
	var n = -1,
		t = /itemindex=(\d*)/.exec(document.URL);
	return t != null && (n = t[1]), n
}

function showGallerySubtitle(n) {
	var i = document.getElementById("gallerySubtitlesTab" + getGallerySubtitleTabNo()),
		t;
	t = i ? $("#gallerySubtitlesTab" + getGallerySubtitleTabNo() + " > div") : $("#gallerySubtitles > div"), $(t).hide(), $(t[n - 1]).show()
}

function getPageTitle() {
	for (var n = 0; n < document.getElementsByTagName("meta").length; n++) document.getElementsByTagName("meta")[n].getAttribute("name") == "titel" && (pageTitle = document.getElementsByTagName("meta")[n].getAttribute("content"))
}

function showGalleryClaim(n) {
	var i = document.getElementById("galleryClaimsTab" + getGallerySubtitleTabNo()),
		t;
	i ? (t = $("#galleryClaimsTab" + getGallerySubtitleTabNo() + " > div"), $(t).length < 1 && (t = $("#galleryClaimsTab" + getGallerySubtitleTabNo() + " > img"))) : (t = $("#galleryClaims > div"), $(t).length < 1 && (t = $("#galleryClaims > img"))), $(t).hide(), $(t[n - 1]).show()
}

function getGalleryClaimTab() {
	return document.getElementById("galleryClaims")
}

function getGallerySubtitleTab() {
	return document.getElementById("gallerySubtitles")
}

function getGallerySubtitleTabNo() {
	var n = 1,
		t = /tabindex=(\d)/.exec(document.URL);
	return t != null && (n = t[1]), n
}

function getMaxNumberGallery() {
	return parseInt($(".galleryThumbs li").length)
}

function showWallpaper(n) {
	gotoUrlNewWin(n)
}

function openMC(n, t, i) {
	var f = 980,
		e = 680;
	f -= g_is_ie ? 15 : 20, e -= 25, alert("Diese Funktion ist momentan noch nicht implementiert");
	var r = "",
		u = "",
		o = "";
	blnOpenWindow == null && (blnOpenWindow = !0), g_is_mac == !0 && i != null && (i = "2D");
	switch (window.location.hostname) {
		case "intranet.porsche.com":
			r = "http://cc.web.porsche.de", u = "http://cc.web.porsche.de";
			break;
		case "preview.porsche.com":
			r = "https://ppnlite.porsche.com", u = "https://ppnlite.porsche.com", o = "_uat";
			break;
		default:
			r = "http://cc.porsche.com", OriginHostName = "http://origin-cc.porsche.com"
	}
}

function openSelectionShopItem(n, t) {
	gotoUrlNewWinSizeScrollableWithMenu("http://shop.eu.porsche.com/germany/product2.asp?dept_id=" + n + "&pf_id=" + t + "&comefrom=teq911", 870, 700)
}

function openPDDSShop(n, t) {
	var i = "http://shop.porsche.com/" + n + "/";
	t && t != "" && (i += t + "/"), gotoUrlNewWinSimple(i)
}

function openPDDSPopup(n) {
	POPUP.OPEN(n);
	return
}

function openConfiguration() {
	var i = 980,
		r = 680,
		n, t;
	i -= g_is_ie ? 15 : 20, r -= 25, n = getQueryVariableEx("viewurl") + "", n = n.replace(/\|/g, "&"), n = n.replace(/viewurl\=/g, ""), t = n.indexOf(!1) || n.indexOf(!1), t &= n.indexOf("hookURL") != -1, t ? gotoUrlNewWinSizeByName(n, i, r, "PVA") : configureCar("cc")
}

function getQueryVariableEx(n) {
	var t = getQueryString().split("&");
	for (i = 0; i < t.length; i++)
		if (t[i].indexOf(n) == 0) return t[i];
	return ""
}

function openCC(n, t, i, r) {
	var o = 980,
		s = 680,
		a;
	o -= g_is_ie ? 15 : 20, s -= 25;
	var u = "",
		f = "",
		h = "",
		c = "",
		e = 2,
		l = "";
	r == null && (r = !0), g_is_mac == !0 && i != null && (i = "2D");
	switch (window.location.hostname) {
		case "intranet.porsche.com":
			f = "http://cc.web.porsche.de", h = "http://cc.web.porsche.de";
			break;
		case "preview.porsche.com":
			f = "https://ppnlite.porsche.com", h = "https://ppnlite.porsche.com", l = "_uat";
			break;
		default:
			f = "http://cc.porsche.com", OriginHostName = "http://origin-cc.porsche.com"
	}
	e = 2, i == "3D" && (e = 3), u = i == null ? t == null ? f + "/icc_pcna{TESTFOLDER}/ui/pva/index.jsp?sprache={LANG}&modelRange=null&ORDERTYPE=null" : f + "/icc_pcna{TESTFOLDER}/ccCall.do?userID={USER}&lang={LANG}&PARAM={PARAM}&ORDERTYPE={MODEL}&vLevel={MODE}&view=exterior" : t == null ? f + "/icc_pcna{TESTFOLDER}/ccCall.do?userID={USER}&lang={LANG}&PARAM={PARAM}&vLevel={MODE}" : f + "/icc_pcna{TESTFOLDER}/ccCall.do?userID={USER}&lang={LANG}&PARAM={PARAM}&vLevel={MODE}&ORDERTYPE={MODEL}&view=exterior";
	switch (n) {
		case "us":
			sUser = "US", c = "us", sParam = "parameter_internet_us";
			break;
		default:
			u = f + "/icc_pcna{TESTFOLDER}/ccCall.do?userID=US&lang=us&PARAM=parameter_internet_us&ORDERTYPE=" + t + "&vLevel={MODE}&view=exterior"
	}
	u != "" && (u = u.replace(/{USER}/g, sUser), u = u.replace(/{LANG}/g, c), u = u.replace(/{PARAM}/g, sParam), u = u.replace(/{MODEL}/g, t), u = u.replace(/{MODE}/g, e), u = u.replace(/{TESTFOLDER}/g, l), a = getScreenXYUrlParam(), t != null && (t.indexOf("99745") > -1 || t.indexOf("99765") > -1) && (u += "&option1=710"), r ? gotoUrlNewWinSizeByName(u, o, s, "PVA") : window.location.href = u)
}

function openPE(n, t) {
	gotoUrlNewWinSimple("/usa/accessoriesandservices/porschefinancialservices/paymentestimator/?model=" + n + "&type=" + t)
}

function openModelJumpPage(n, t, i, r, u, f) {
	var h = i,
		c = r,
		a = u,
		e = f,
		v = screen.width,
		y = screen.height,
		s, l;
	e.indexOf("&amp;") == -1 && (e = "&amp;customID=" + e);
	var p = escape(window.location.href.replace(window.location.search, "") + "/all/"),
		w = ccbaseurl(h),
		o = w + "/ccCall.do?userID=" + h + "&amp;lang=" + c + "&amp;PARAM=parameter_internet_" + c + "&amp;hookURL=" + p + "&amp;ORDERTYPE=" + n + a + e + "&amp;screen=" + v + "x" + y;
	t != "" && (o += "&amp;MODELYEAR=" + t), g_is_iPad || g_is_iPhone ? document.location.href = (o + "&amp;vLevel=5").replace(/&amp;/g, String.fromCharCode(38)) : (s = plugigns(), s != null ? ($("#cluetip").hide(), l = o + "&amp;vLevel=1", $("#x2D").attr("href", l.replace(/&amp;/g, String.fromCharCode(38))), $("#noplug").attr("href", s), $("#chooseview").css("display", "block")) : document.location.href = (o + "&amp;vLevel=2").replace(/&amp;/g, String.fromCharCode(38)))
}

function configureCar(n, t, i, r) {
	var h = 980,
		o = 680,
		s, f, u, e, c;
	if (o -= 25, configureCar_redirectPool(h, o, r, t) != !0) {
		s = "", f = "", window.location.hostname == "intranet.porsche.com" ? (f = "http://cc.web.porsche.de", OriginHostName = "http://cc.web.porsche.de") : window.location.hostname == "preview.porsche.com" ? (f = "https://ppnlite.porsche.com", OriginHostName = "https://ppnlite.porsche.com", s = "_uat") : (f = "http://cc.porsche.com", OriginHostName = "http://origin-cc.porsche.com"), u = "", e = f + "/icc_euro/ccCall.do?&vLevel=2&PARAM=parameter_internet_cc&lang=cc&userID=cc";
		switch (n) {
			case "de":
				u = f + "/icc_euro/ccCall.do?&vLevel=2&PARAM=parameter_internet_" + n + "&lang=" + n + "&userID=" + n;
				break;
			case "us":
				u = f + "/icc_pcna" + s + "/ccCall.do?vLevel=2&PARAM=parameter_internet_us&lang=us&userID=US";
				break;
			case "ca":
				u = "http://cc.porsche.com/icc_pcna/ccCall.do?&vLevel=2&PARAM=parameter_internet_ca&lang=ca&userID=CA";
				break;
			case "ca-fr":
				u = "http://cc.porsche.com/icc_pcna/ccCall.do?&vLevel=2&PARAM=parameter_internet_cf&lang=cf&userID=USCCF";
				break;
			case "fr":
				u = f + "/icc_euro/ccCall.do?&vLevel=2&PARAM=parameter_internet_" + n + "&lang=" + n + "&userID=" + n;
				break;
			case "it":
				u = f + "/icc_euro/ccCall.do?&vLevel=2&PARAM=parameter_internet_" + n + "&lang=" + n + "&userID=" + n;
				break;
			case "en":
				u = f + "/icc_euro/ccCall.do?&vLevel=2&PARAM=parameter_internet_" + n + "&lang=" + n + "&userID=" + n;
				break;
			case "sp":
				u = f + "/icc_euro/ccCall.do?&vLevel=2&PARAM=parameter_internet_" + n + "&lang=" + n + "&userID=" + n;
				break;
			case "mx":
				u = f + "/icc_euro/ccCall.do?&vLevel=2&PARAM=parameter_internet_" + n + "&lang=" + n + "&userID=" + n;
				break;
			case "hk":
				u = f + "/icc_euro/ccCall.do?&vLevel=2&PARAM=parameter_internet_" + n + "&lang=" + n + "&userID=" + n;
				break;
			case "ru":
				u = f + "/icc_euro/ccCall.do?&vLevel=2&PARAM=parameter_internet_" + n + "&lang=" + n + "&userID=" + n;
				break;
			case "ae":
				u = f + "/icc_euro/ccCall.do?&vLevel=2&PARAM=parameter_internet_" + n + "&lang=" + n + "&userID=" + n;
				break;
			case "me":
				u = "/all/transitional/middle-east/models/countryselector/default.htm?t=";
				break;
			case "du":
				u = f + "/icc_euro/ccCall.do?&vLevel=2&PARAM=parameter_internet_" + n + "&lang=" + n + "&userID=PDA";
				break;
			case "ba":
				u = f + "/icc_euro/ccCall.do?&vLevel=2&PARAM=parameter_internet_" + n + "&lang=" + n + "&userID=PDB";
				break;
			case "va":
				u = f + "/icc_euro/ccCall.do?&vLevel=2&PARAM=parameter_internet_" + n + "&lang=" + n + "&userID=PDD";
				break;
			case "kw":
				u = f + "/icc_euro/ccCall.do?&vLevel=2&PARAM=parameter_internet_" + n + "&lang=" + n + "&userID=PDK";
				break;
			case "oa":
				u = f + "/icc_euro/ccCall.do?&vLevel=2&PARAM=parameter_internet_" + n + "&lang=" + n + "&userID=PDO";
				break;
			case "qu":
				u = f + "/icc_euro/ccCall.do?&vLevel=2&PARAM=parameter_internet_" + n + "&lang=" + n + "&userID=PDT";
				break;
			case "ks":
				u = f + "/icc_euro/ccCall.do?&vLevel=2&PARAM=parameter_internet_" + n + "&lang=" + n + "&userID=PDS";
				break;
			case "sa":
				u = f + "/icc_euro/ccCall.do?&vLevel=2&PARAM=parameter_internet_" + n + "&lang=" + n + "&userID=PDR";
				break;
			case "ao":
				u = f + "/icc_euro/ccCall.do?&vLevel=2&PARAM=parameter_internet_" + n + "&lang=" + n + "&userID=PDG";
				break;
			case "jo":
				u = f + "/icc_euro/ccCall.do?&vLevel=2&PARAM=parameter_internet_" + n + "&lang=" + n + "&userID=PDJ";
				break;
			case "lb":
				u = f + "/icc_euro/ccCall.do?&vLevel=2&PARAM=parameter_internet_" + n + "&lang=" + n + "&userID=PDL";
				break;
			case "ni":
				u = f + "/icc_euro/ccCall.do?&vLevel=2&PARAM=parameter_internet_" + n + "&lang=" + n + "&userID=PDF";
				break;
			case "eg":
				u = f + "/icc_euro/ccCall.do?&vLevel=2&PARAM=parameter_internet_" + n + "&lang=" + n + "&userID=PDE";
				break;
			case "gh":
				u = f + "/icc_euro/ccCall.do?&vLevel=2&PARAM=parameter_internet_" + n + "&lang=" + n + "&userID=MEG";
				break;
			case "il":
				u = f + "/icc_euro/ccCall.do?&vLevel=2&PARAM=parameter_internet_" + n + "&lang=" + n + "&userID=PDH";
				break;
			case "pdh":
				u = f + "/icc_euro/ccCall.do?&vLevel=2&PARAM=parameter_internet_" + n + "&lang=" + n + "&userID=PDH";
				break;
			case "ir":
				u = f + "/icc_euro/ccCall.do?&vLevel=2&PARAM=parameter_internet_" + n + "&lang=" + n + "&userID=PDU";
				break;
			case "pk":
				u = f + "/icc_euro/ccCall.do?&vLevel=2&PARAM=parameter_internet_" + n + "&lang=" + n + "&userID=PDV";
				break;
			case "sy":
				u = f + "/icc_euro/ccCall.do?&vLevel=2&PARAM=parameter_internet_" + n + "&lang=" + n + "&userID=MEY";
				break;
			case "ye":
				u = f + "/icc_euro/ccCall.do?&vLevel=2&PARAM=parameter_internet_" + n + "&lang=" + n + "&userID=PDM";
				break;
			case "jp":
				n = "pj", u = f + "/icc_euro/ccCall.do?&vLevel=2&PARAM=parameter_internet_" + n + "&lang=" + n + "&userID=" + n;
				break;
			case "zh":
				n = "cn", u = f + "/icc_euro/ccCall.do?&vLevel=2&PARAM=parameter_internet_" + n + "&lang=" + n + "&userID=" + n;
				break;
			case "ce":
				u = f + "/icc_euro/ccCall.do?&vLevel=2&PARAM=parameter_internet_" + n + "&lang=" + n + "&userID=PACCE";
				break;
			case "ba":
				u = f + "/icc_euro/ccCall.do?&vLevel=2&PARAM=parameter_internet_" + n + "&lang=" + n + "&userID=PDB";
				break;
			case "va":
				u = f + "/icc_euro/ccCall.do?&vLevel=2&PARAM=parameter_internet_" + n + "&lang=" + n + "&userID=PDD";
				break;
			case "kw":
				u = f + "/icc_euro/ccCall.do?&vLevel=2&PARAM=parameter_internet_" + n + "&lang=" + n + "&userID=PDK";
				break;
			case "oa":
				u = f + "/icc_euro/ccCall.do?&vLevel=2&PARAM=parameter_internet_" + n + "&lang=" + n + "&userID=PDO";
				break;
			case "qu":
				u = f + "/icc_euro/ccCall.do?&vLevel=2&PARAM=parameter_internet_" + n + "&lang=" + n + "&userID=PDT";
				break;
			case "ks":
				u = f + "/icc_euro/ccCall.do?&vLevel=2&PARAM=parameter_internet_" + n + "&lang=" + n + "&userID=PDS";
				break;
			case "cur":
				u = e;
				break;
			case "pap":
				u = e + "&customID=" + n;
				break;
			case "sg":
				u = f + "/icc_euro/ccCall.do?&vLevel=2&PARAM=parameter_internet_" + n + "&lang=" + n + "&userID=" + n;
				break;
			case "ind":
				u = e + "&customID=" + n;
				break;
			case "mal":
				u = e + "&customID=" + n;
				break;
			case "nca":
				u = e + "&customID=" + n;
				break;
			case "sri":
				u = e + "&customID=" + n;
				break;
			case "phi":
				u = e + "&customID=" + n;
				break;
			case "du":
				u = f + "/icc_euro/ccCall.do?&vLevel=2&PARAM=parameter_internet_" + n + "&lang=" + n + "&userID=PDA";
				break;
			case "sa":
				u = f + "/icc_euro/ccCall.do?&vLevel=2&PARAM=parameter_internet_" + n + "&lang=" + n + "&userID=PDR";
				break;
			case "prt":
				n = "po", u = f + "/icc_euro/ccCall.do?&vLevel=2&PARAM=parameter_internet_" + n + "&lang=" + n + "&userID=" + n;
				break;
			case "swiss-de":
				u = f + "/icc_euro/ccCall.do?&vLevel=2&PARAM=parameter_internet_sd&lang=sd&userID=CHSD";
				break;
			case "swiss-fr":
				u = f + "/icc_euro/ccCall.do?&vLevel=2&PARAM=parameter_internet_sf&lang=sf&userID=CHSF";
				break;
			case "swiss-it":
				u = f + "/icc_euro/ccCall.do?userID=CHSI&lang=si&PARAM=parameter_internet_si&vLevel=2";
				break;
			case "bef":
				u = e + "&customID=" + n;
				break;
			case "ben":
				u = e + "&customID=" + n;
				break;
			case "arg":
				u = e + "&customID=" + n;
				break;
			case "bar":
				u = e + "&customID=" + n;
				break;
			case "bul":
				u = e + "&customID=" + n;
				break;
			case "chi":
				u = e + "&customID=" + n;
				break;
			case "bra":
				u = e + "&customID=" + n;
				break;
			case "bru":
				u = e + "&customID=" + n;
				break;
			case "cos":
				u = e + "&customID=" + n;
				break;
			case "dom":
				u = e + "&customID=" + n;
				break;
			case "ecu":
				u = e + "&customID=" + n;
				break;
			case "els":
				u = e + "&customID=" + n;
				break;
			case "fin":
				u = e + "&customID=" + n;
				break;
			case "gua":
				u = e + "&customID=" + n;
				break;
			case "hai":
				u = e + "&customID=" + n;
				break;
			case "hon":
				u = e + "&customID=" + n;
				break;
			case "isl":
				u = e + "&customID=" + n;
				break;
			case "kai":
				u = e + "&customID=" + n;
				break;
			case "kol":
				u = e + "&customID=" + n;
				break;
			case "lux":
				u = e + "&customID=" + n;
				break;
			case "nie":
				u = e + "&customID=" + n;
				break;
			case "pan":
				u = e + "&customID=" + n;
				break;
			case "par":
				u = e + "&customID=" + n;
				break;
			case "per":
				u = e + "&customID=" + n;
				break;
			case "pue":
				u = e + "&customID=" + n;
				break;
			case "swe":
				u = e + "&customID=" + n;
				break;
			case "stm":
				u = e + "&customID=" + n;
				break;
			case "tri":
				u = e + "&customID=" + n;
				break;
			case "tue":
				u = e + "&customID=" + n;
				break;
			case "uru":
				u = e + "&customID=" + n;
				break;
			case "ven":
				u = e + "&customID=" + n;
				break;
			case "vie":
				u = e + "&customID=" + n;
				break;
			case "wed":
				u = e + "&customID=" + n;
				break;
			case "wef":
				u = e + "&customID=" + n;
				break;
			case "wei":
				u = e + "&customID=" + n;
				break;
			case "wie":
				u = e + "&customID=" + n;
				break;
			case "zyp":
				u = e + "&customID=" + n;
				break;
			default:
				u = e
		}
		t != null && t.length == 6 && (u += "&ORDERTYPE=" + t), c = getScreenXYUrlParam(), u && u.length > 0 && (u += c, u += "&RT=" + (new Date).getTime()), gotoUrlNewWinSizeByName(u, h, o, "PVA")
	}
}

function configureCar_redirectPool(n, t, i) {
	var s = window.location.hostname,
		f = window.location.href,
		o = "/modelstart/all/",
		u = s + "/" + CURRENTPOOL,
		r, e;
	if (typeof CURRENTCONDITION == "undefined" && (CURRENTCONDITION = ""), CURRENTLANGUAGE != "none" ? u = CURRENTCONDITION != "" ? u + "/_" + CURRENTCONDITION + "_/" + CURRENTLANGUAGE : u + "/" + CURRENTLANGUAGE : CURRENTCONDITION != "" && (u = u + "/_" + CURRENTCONDITION + "_"), r = "", e = !1, i == null) f.indexOf(u + "/models") != -1 && (r = u + o, f.indexOf(u + "/models/911") != -1 ? r = r + "?modelrange=911" : f.indexOf(u + "/models/boxster") != -1 ? r = r + "?modelrange=boxster" : f.indexOf(u + "/models/cayman") != -1 ? r = r + "?modelrange=cayman" : f.indexOf(u + "/models/cayenne") != -1 ? r = r + "?modelrange=cayenne" : f.indexOf(u + "/models/panamera") != -1 && (r = r + "?modelrange=panamera"));
	else if (i != "") switch (i) {
		case "911":
		case "boxster":
		case "cayman":
		case "cayenne":
		case "panamera":
			r = u + o + "?modelrange=" + i
	}
	if (configureCar_redirectPool.arguments.length > 3 && (r += "&model=" + configureCar_redirectPool.arguments[3]), r != "") switch (CURRENTPOOL) {
		case "australia":
		case "canada":
		case "china":
		case "germany":
		case "france":
		case "germany":
		case "italy":
		case "international":
		case "japan":
		case "latin-america-en":
		case "latin-america-es":
		case "pap":
		case "portugal":
		case "russia":
		case "spain":
		case "swiss":
		case "uk":
			e = !0;
			break;
		case "middle-east":
			e = CURRENTCONDITION == "" ? !1 : !0;
			break;
		default:
			e = !1
	}
	return e == !0 && gotoUrlNewWinSizeScrollable(window.location.protocol + "//" + r, 980, 680), e
}

function getScreenXYUrlParam() {
	var n = screen.width,
		t = screen.height;
	return "&screen=" + n + "x" + t
}

function compareModels(n) {
	compareModelMulti(n, "", "", "", !0, "popup", null)
}

function compareModelWith(n, t, i) {
	compareModelMulti(n, t, i, "", !1)
}

function compareModelMulti(n, t, i, r, u, f, e) {
	var o, s, h;
	windowSizeX = 1003, windowSizeY = 625, oneSizeFitsAll = !0, cmPage = u ? "Select" : "Compare", o = "", e && !isNaN(e) && (o = "&compTab=" + e), f || (f = "popup"), cmUrl = "/all/comparemodels/" + cmPage + ".aspx?pool=" + n + "&model1=" + t + "&model2=" + i + "&model3=" + r + "" + o;
	switch (f) {
		case "popup":
			if (!oneSizeFitsAll) switch (n) {
				case "usa":
					windowSizeX = 1003, windowSizeY = 625;
					break;
				case "canada":
					windowSizeX = 975, windowSizeY = 625
			}
			n == "usa" ? gotoUrlNewWinSizeScrollable(cmUrl, windowSizeX, windowSizeY) : gotoUrlNewWinSize(cmUrl, windowSizeX, windowSizeY);
			break;
		case "iframe":
			s = {
				width: 1024,
				height: 660,
				name: "comparemodels"
			}, h = new Overlay(cmUrl, s), h.show()
	}
}

function gotoUrlNewWinSimple(n) {
	POPUP.OPEN(n);
	return
}

function gotoUrlNewWin(n) {
	POPUP.OPEN(n);
	return
}

function gotoUrlNewWinSize(n) {
	POPUP.OPEN(n);
	return
}

function gotoUrlNewWinSizeCloseOnBlur(n) {
	POPUP.OPEN(n);
	return
}

function gotoUrlNewWinSizeScrollable(n) {
	POPUP.OPEN(n);
	return
}

function gotoUrlNewWinSizeScrollableWithMenu(n) {
	POPUP.OPEN(n);
	return
}

function gotoUrlNewWinSizeScrollableWithMenuR(n) {
	POPUP.OPEN(n);
	return
}

function gotoUrlNewWinDefaultSize(n) {
	POPUP.OPEN(n);
	return
}

function gotoUrlNewWinSizeCentered(n) {
	POPUP.OPEN(n);
	return
}

function gotoUrlNewWinSizeScrollableResizeable(n) {
	POPUP.OPEN(n);
	return
}

function gotoUrlNewWinSizeByName(n) {
	POPUP.OPEN(n);
	return
}

function openLeanWin(n) {
	POPUP.OPEN(n);
	return
}

function gotoUrlFullscreen(n) {
	POPUP.OPEN(n);
	return
}

function gotoUrlFullscreenResizable(n) {
	POPUP.OPEN(n);
	return
}

function openDealerLocator(n, t, i, r, u) {
	POPUP.OPEN(u);
	return
}

function openModelAdvisor(n) {
	var t = "/all/modeladvisor/" + n + ".aspx";
	POPUP.OPEN(t);
	return
}

function getRandomInt(n) {
	return Math.round(Math.random() * (n - 1))
}

function getAdTrackerNumber() {
	var n = Math.random() + "";
	return n * 1e13
}

function bannerLinkToHi(n) {
	var t = document.getElementById(n);
	t && (t.style.color = "#c00", t.style.backgroundPosition = "210px -142px;")
}

function bannerLinkToLo(n) {
	var t = document.getElementById(n);
	t && (t.style.color = "rgb(102,102,102)", t.style.backgroundPosition = "210px -292px;")
}

function loadImage(n, t) {
	var i = function() {
		$("#" + n + "_image").attr("src", t)
	};
	window.clearTimeout(loadImage_timeOutHandler), loadImage_timeOutHandler = window.setTimeout(i, loadImage_timeOut)
}

function setModel(n) {
	g_currentModelLink = n
}

function gotoModel() {
	g_currentModelLink != "" && gotoUrl(g_currentModelLink)
}

function gotoUrl(n) {
	document.location.href = n
}

function gotoUrlDropDown(n) {
	if (n.options) {
		var t = n.options[n.options.selectedIndex].value;
		t != "" && gotoUrl(t)
	}
}

function gotoUrlTimeout(n, t) {
	setTimeout("gotoUrl('" + n + "')", t)
}

function nogo() {}

function selectAllInput(n) {
	typeof txtSearchtermOfValue == "undefined" && (txtSearchtermOfValue = n.value), (n.value.replace(/\s/) == "" || n.value == txtSearchtermOfValue) && (n.value = ""), n.onblur = function() {
		n.value.replace(/\s/) == "" && (n.value = txtSearchtermOfValue)
	}
}

function sniffAll() {
	var n = navigator.userAgent.toLowerCase(),
		f = navigator.appVersion.toLowerCase(),
		o, u, s, e, r, t;
	g_is_minor = parseFloat(f), g_is_major = parseInt(g_is_minor), o = n.indexOf("opera") != -1, u = f.indexOf("msie"), u != -1 && (g_is_minor = parseFloat(f.substring(u + 5, f.indexOf(";", u))), g_is_major = parseInt(g_is_minor)), s = !1, e = n.indexOf("konqueror"), e != -1 && (s = !0, g_is_minor = parseFloat(n.substring(e + 10, n.indexOf(";", e))), g_is_major = parseInt(g_is_minor));
	var it = document.getElementById ? "true" : "false",
		rt = document.getElementsByTagName ? "true" : "false",
		ut = document.documentElement ? "true" : "false",
		c = n.indexOf("safari") != -1 && n.indexOf("mac") != -1 ? !0 : !1,
		h = c || s,
		l = !h && navigator.product && navigator.product.toLowerCase() == "gecko" ? !0 : !1,
		v = 0;
	l && (v = navigator.productSub);
	var a = n.indexOf("mozilla/5") != -1 && n.indexOf("spoofer") == -1 && n.indexOf("compatible") == -1 && n.indexOf("opera") == -1 && n.indexOf("webtv") == -1 && n.indexOf("hotjava") == -1 && l && (navigator.vendor == "" || navigator.vendor == "Mozilla"),
		y = n.indexOf("macintosh") != -1 ? !0 : !1,
		p = navigator.platform.toLowerCase().indexOf("linux") != -1 ? !0 : !1,
		w = navigator.platform.toLowerCase().indexOf("win") != -1 ? !0 : !1;
	a && (r = navigator.vendorSub ? navigator.vendorSub : 0, r || (r = n.indexOf("rv:"), r = n.substring(r + 3), is_paren = r.indexOf(")"), r = r.substring(0, is_paren)), g_is_minor = r, g_is_major = parseInt(r)), t = n.indexOf("mozilla") != -1 && n.indexOf("spoofer") == -1 && n.indexOf("compatible") == -1 && n.indexOf("opera") == -1 && n.indexOf("webtv") == -1 && n.indexOf("hotjava") == -1 && !h && !a, navigator.vendor && (navigator.vendor == "Netscape6" || navigator.vendor == "Netscape") && t && (g_is_major = parseInt(navigator.vendorSub), g_is_minor = parseFloat(navigator.vendorSub));
	var ft = t && g_is_major == 2,
		et = t && g_is_major == 3,
		ot = t && g_is_major == 4,
		st = t && g_is_minor >= 4,
		ht = t && (n.indexOf(";nav") != -1 || n.indexOf("; nav") != -1),
		b = t && g_is_major == 6,
		ct = t && g_is_minor >= 6,
		lt = t && g_is_major == 5 && !b,
		at = t && g_is_minor >= 5,
		vt = t && g_is_major == 7,
		yt = t && g_is_minor >= 7,
		i = u != -1 && !o && !h,
		pt = i && g_is_major < 4,
		wt = i && g_is_major == 4,
		bt = i && g_is_minor >= 4,
		k = i && g_is_major == 5,
		kt = i && g_is_minor >= 5,
		d = i && n.indexOf("msie 5.5") != -1,
		dt = i && g_is_minor >= 5.5,
		g = i && g_is_major == 6,
		gt = i && g_is_minor >= 6,
		nt = i && g_is_major == 7,
		tt = i && g_is_major == 8;
	g_is_win = w, g_is_mac = y, g_is_linux = p, g_is_ie = i, g_is_opera = o, g_is_ie5 = k, g_is_ie5_5 = d, g_is_ie6 = g, g_is_ie7 = nt, g_is_ie8 = tt, g_is_safari = c
}

function updateImageSwitch(n, t) {
	var r = null,
		u, i;
	r = n.childNodes[0].style != undefined ? n.childNodes[0] : n.childNodes[1];
	switch (t) {
		case "active":
			u = 1;
			do i = document.getElementById("switchImage" + u), i != null && updateImageSwitch(i, "inactive"), u++; while (i != null);
			n.style.color = "rgb(204,0,0)", n.style.background = "white url(/images/arrow-red.gif) no-repeat left 3px", r.style.display = "block";
			break;
		case "inactive":
			n.style.color = "rgb(102,102,102)", n.style.background = "white url(/images/arrow-gray.gif) no-repeat left 3px", r.style.display = "none"
	}
}

function RedirectToOptionValue(n) {
	obj = document.getElementById(n), obj && (link = obj.options[obj.selectedIndex].value, link.length > 0 && (document.location.href = link))
}

function isLoggedIn() {
	var n = getCookie("SSO_LOGIN");
	return (n == null || n == "false") && (n = !1), n
}

function getCookie(n) {
	var t = document.cookie,
		i = t.indexOf(n + "="),
		r;
	return i == -1 ? null : (i = t.indexOf("=", i) + 1, r = t.indexOf(";", i), r == -1 && (r = t.length), unescape(t.substring(i, r)))
}

function replStr(n, t, i) {
	var r = n.indexOf(t);
	return r >= 0 ? n.substring(0, r) + i + replStr(n.substring(r + t.length), t, i) : n
}

function gotoUrlIE() {}

function submitSDSTrainingSearchForm() {
	var n = document.getElementById("SDSTrainingSearchForm");
	n.month.options.selectedIndex != 0 && n.submit()
}

function ieToggleDropDowns(n) {
	var t = getListIEDropDowns();
	if (t.length > 0)
		for (i = 0; i < t.length; i++) dd = document.getElementById(t[i]), dd && (dd.style.visibility = n ? "hidden" : "visible")
}

function getListIEDropDowns() {
	return ["monthDropDown", "modelprice", "modelpower"]
}

function myreplace(n, t, i) {
	return ti = n.indexOf(t), n.substring(0, ti) + i + n.substr(ti + t.length)
}

function checkClassic(n) {
	var r = new Date,
		u = [],
		t;
	for (i = 0; i < n.length; i++) t = r.getFullYear() - n[i][3], t > 10 && (t == 11 && r.getMonth() < 8 || u.push(n[i]));
	return u
}

function getPoolLangUrl(n, t) {
	return t != "none" ? n + "/" + t : n
}

function initPorscheCode() {
	var f = g_is_iPad ? "touchstart" : "click",
		u, n, i, t, r;
	$(".porschecodeFormRL .nextButton > a").attr("href", 'javascript:$(".porschecodeFormRL").submit();'), g_is_iPad && $("#porschecode").addClass("ipad"), $(".porschecodeInfoIcon").bind(f, function(n) {
		n.preventDefault(), $(".porschecodeInfoLayerContent").show()
	}), $(".porschecodeInfoLayerContent .closeLabel").bind(f, function(n) {
		n.preventDefault(), n.stopPropagation(), $(".porschecodeInfoLayerContent").hide()
	}), $("#porschecodeForm, .porschecodeFormRL").submit(function(n) {
		var i, t;
		return n.preventDefault(), i = $("#porschecodeCode").val(), t = "", i != "" ? (t = "http://cc.porsche.com/PorscheCodeService/pcsdispatcher", t += "?hookURL=" + encodeURIComponent(document.URL) + "&webcode=" + i, window.location = t) : $("#codeInputField").focus(), !1
	}), g_page_nxid === "LP-2012-06-PorscheCode-tellafriend" && (u = decodeURIComponent(getUrlParamValue("code")), /P[A-Za-z0-9]{7}/.test(u) || (u = "NOTVALID"), n = decodeURIComponent(getUrlParamValue("codeurl")), /http:\/\/www\.porsche-code\.com\/P[A-Za-z0-9]{7}/.test(n) || (n = "http://www.porsche-code.com/"), i = decodeURIComponent(getUrlParamValue("modelname")), g_containsPorscheModel.test(i) || (i = ""), t = i.toLowerCase(), i = t.indexOf("boxster") > -1 ? "Boxster" : t.indexOf("cayman") > -1 ? "Cayman" : t.indexOf("911") > -1 ? "911" : t.indexOf("cayenne") > -1 ? "Cayenne" : t.indexOf("macan") > -1 ? "Macan" : t.indexOf("panamera") > -1 ? "Panamera" : t.indexOf("918") > -1 ? "918" : "", $("#porschecode").val(u), $("#porschecodeurl").val(n), $("#porschecodemodelname").val(i), $("#introText").length > 0 && (r = $("#introText").html(), r = r.replace("#MODELNAME#", i), n = '<a href="' + n + '">' + n.replace("http://", "") + "<\/a>", r = r.replace("#CODEURL#", n), $("#introText").html(r), $("#messagehidden").attr({
		value: r
	})))
}

function log() {
	try {} catch (n) {}
}

function Hashtable() {
	this.length = 0, this.items = [];
	for (var n = 0; n < arguments.length; n += 2) typeof arguments[n + 1] != "undefined" && (this.items[arguments[n]] = arguments[n + 1], this.length++);
	this.removeItem = function(n) {
		var t;
		return typeof this.items[n] != "undefined" && (this.length--, t = this.items[n], delete this.items[n]), t
	}, this.getItem = function(n) {
		return this.items[n]
	}, this.setItem = function(n, t) {
		return typeof t != "undefined" && (typeof this.items[n] == "undefined" && this.length++, this.items[n] = t), t
	}, this.hasItem = function(n) {
		return typeof this.items[n] != "undefined"
	}
}

function getButtonTarget() {
	return buttonTarget
}

function getCachePrevent() {
	return "rand=" + escape(Math.round(Math.random() * 1e4))
}

function conditionLinkFix(n) {
	var t = window.location.href.match(/_.+_/ig),
		i = n.split(/[\s,;]+/);
	$.each(i, function() {
		t || $("#" + this).css({
			left: "-10000px",
			visibility: "hidden"
		})
	})
}

function gplus() {
	var t, n, i;
	if ($("#sharelayer_aliencontent").length == 0) {
		$("#sharelayer").append('<div id="sharelayer_aliencontent"><div class="sharelayer_aliencontent_description" /><div class="g-plusone" data-href="http://www.porsche.com/" /><\/div>'), $("#sharelayer_aliencontent .sharelayer_aliencontent_description").html($('a[href="javascript:gplus()"]').attr("rel")), t = "en";
		switch (CURRENTPOOL) {
			case "uk":
				t = "en";
				break;
			case "germany":
				t = "de"
		}
		window.___gcfg = {
			lang: t
		}, n = document.createElement("script"), n.type = "text/javascript", n.async = !0, n.src = "https://apis.google.com/js/plusone.js", i = document.getElementsByTagName("script")[0], i.parentNode.insertBefore(n, i)
	}
	$("#sharelayer_aliencontent").is(":hidden") && $("#sharelayer").animate({
		height: "+=81"
	}, 300, function() {
		$("#sharelayer_aliencontent").fadeIn(400)
	}), preventSharebarHide = !0, $("html").bind("click", closeShareBar)
}

function gplusready() {
	$("#sharelayer_aliencontent").is(":visible") && ($("#sharelayer").css({
		height: $("#sharelayer").height() - 81 + "px"
	}), $("#sharelayer_aliencontent").hide(), $("html").unbind("click", closeShareBar))
}

function click_track_hp(n) {
	g_is_home && click_track(n)
}

function click_trackevent(n) {
	if (typeof wiredminds !== undefined) try {
		wiredminds.push(["trackEvent", n])
	} catch (t) {}
}

function getUrlParamValue(n) {
	n = n.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
	var i = "[\\?&]" + n + "=([^&#]*)",
		r = new RegExp(i),
		t = r.exec(window.location.href);
	return t == null ? "" : t[1]
}

function scaleImage() {
	var s = WIDTH,
		h = HEIGHT,
		t = $(window).height() - 143,
		n;
	t = t < M_HEIGHT ? M_HEIGHT : t, $("#imageZoom").css("width", $(window).width()), $("#imageZoom, #imageZoom .nav").css("height", t), n = s * (t / h) + 1, n = n < M_WIDTH ? M_WIDTH : n;
	var c = parseInt(n.toString()) + "px",
		i = -parseInt((n / 2).toString()),
		l = "-" + parseInt((n / 2).toString()) + "px",
		a = $(window).width(),
		u = "-" + parseInt((n / 2).toString()) + "px",
		f = "50%";
	if (n > a && (u = "0px", f = "0px"), $("#previewImage").attr("src").indexOf("filetype=" + TYPE) > -1) {
		$("#previewImage").css({
			width: c,
			height: t + "px"
		}), $("#previewImage").css({
			position: "absolute",
			left: "50%",
			"margin-left": l
		});
		var r = $("#previewImage").position(),
			v = r.left + i < 0 ? 0 : r.left + i,
			e = $(window).width(),
			o = $(".nav").eq(0).width(),
			y = $(".nav .arrow").eq(0).height() == 0 ? 100 : $(".nav .arrow").eq(0).height(),
			p = r.left + i + n,
			w = n >= e ? e - o : p - o;
		$("#imageZoom .navleft").css("left", v.toString() + "px"), $("#imageZoom .navright").css("left", w.toString() + "px"), $("#imageZoom .nav .arrow").css("top", (t - y) / 2), CURRENTPOOL == "usa" ? $("#zoomBtn").css({
			left: "50%",
			"margin-left": "-75px"
		}) : $("#zoomBtn").css({
			left: f,
			"margin-left": u
		})
	}
}

function copyItems() {
	scrollerItemsDone == !1 && (scrollerItemsDone = !0, $(".tabContent2 ul li, .galleryContent ul li").each(function() {
		var n = jQuery(this);
		n.children("h4").length == 0 && n.clone().appendTo($("#triggers")).children().attr("href", "#")
	}), $("#triggers li a").each(function() {
		jQuery(this).click(function() {
			var i = jQuery(this).attr("rel"),
				n = jQuery(this).children().eq(0).attr("title"),
				t;
			n = n == "[+]" ? "" : n, $("#imagetitle").html(n), $("#previewImage").trigger("swap", [i]), t = $("#triggers li a").index($(this)), imageScrollerCheckBoundaries(t)
		})
	}), $("#clone").addClass("scrollable"), $("#clone").css("width", 708), $("#clone").scrollable({
		clickable: !0,
		size: 4,
		api: !0
	}))
}

function imageScrollerCheckBoundaries(n) {
	var t = $("#clone").data("scrollable"),
		i = t.getSize();
	n == 0 ? $("#imageZoom .navleft").addClass("hidden") : $("#imageZoom .navleft").removeClass("hidden"), n == i - 1 ? $("#imageZoom .navright").addClass("hidden") : $("#imageZoom .navright").removeClass("hidden")
}

function openOverlay(n, t) {
	copyItems(), $("html").css("overflow-y", "hidden"), $("#overlayTest, #gallery-legacy, #teaserBG, #imageZoom, #imgClose, #closeBar, #closeText, #imagetitle").show(), $("#clone").scrollable().click(t), imageScrollerCheckBoundaries(t), scaleImage()
}

function closeOverlay() {
	$("#overlayTest, #gallery-legacy, #teaserBG, #imageZoom, #imgClose, #closeBar, #closeText, #imagetitle").hide(), $("html").css("overflow-y", "scroll"), $("#previewImage").trigger("swap", "/images/transparent/trans.gif")
}

function initScroller() {
	$(".tabContent2 ul li a, .galleryContent ul li a").each(function() {
		var n = jQuery(this);
		n.attr("rel", n.attr("href")), n.attr("href", "#"), jQuery(this).click(function() {
			var i = jQuery(this).attr("rel"),
				n = jQuery(this).children().eq(0).attr("title"),
				t;
			n = n == "[+]" ? "" : n, $("#imagetitle").html(n), $("#previewImage").trigger("swap", [i]), t = $(".tabContent2 ul li a, .galleryContent ul li a").index(jQuery(this)), openOverlay(4, t)
		})
	})
}

function addOverlay() {
	jQuery("body").prepend("<div id='overlayTest'><\/div><div id='closeBar'><\/div><a id='closeText' href='javascript:closeOverlay();' class='gui-btn close-button'><span style='font-size:1px;'><\/span><\/a><div id='imageZoom'><a class=\"navleft nav bg\" href='javascript:void(0);'><span class=\"arrow\" /><\/a><a class=\"navright nav bg\" href='javascript:void(0);'><span class=\"arrow\" /><\/a><img id='previewImage' alt='zoom' style='' src='/images/transparent/trans.gif' /><div id='zoomBtn' class='zoomIn'>&#160;<\/div><\/div><div id='imagetitle'>&#160;<\/div><div class='simple_overlay' id='gallery-legacy'><!-- 'previous page' action --> <a class='prevPage browse left' id='prevPage'><\/a><div id='clone'><ul id='triggers' class='galleryPictures8 items'><\/ul><\/div><!-- 'next page' action --> <a class='nextPage browse right' id='nextPage'><\/a><\/div><div id='teaserBG'><\/div>"), jQuery("#imageZoom .nav").click(function() {
		var i = $("#clone").data("scrollable"),
			n = $("#triggers li.active"),
			t;
		t = $(this).hasClass("navleft") ? n.prev() : n.next(), t.find("a").andSelf().click()
	})
}

function ttPageHeight() {
	$(".techterm").each(function() {
		for (var i = 0, t = $(this).find(".contentPages > .contentPage"), r, n = 0; n < t.length; n++) $(t[n]).css({
			"min-height": "0px"
		});
		for (n = 0; n < t.length; n++) r = $(t[n]).height(), i = i < r ? r : i;
		for (n = 0; n < t.length; n++) $(t[n]).css({
			"min-height": i + "px"
		})
	})
}

function initAll3() {
	var n = new I18N,
		i, t;
	$(".zoomImage").length > 0 && $(".zoomImage").appendTo("body"), jQuery(".tabContent2 .galleryKBase, .tabContent2 .MRfeatures, .tabContent2 .technicalspecs").length != 0 && (jQuery(".innerContent").length > 0 && $(".tabContent2").hasClass("noTab") ? ($(".innerContent").append($(".related")), $(".related").addClass("relatedBottom")) : $(".tabContent2").append($(".related"))), jQuery("#stopMovie").length != 0 && (n.resolveText("js_apps", "kbase", "closeLabel", ".closeButtonFlash"), n.doProcessing()), jQuery(".tabContent2 .galleryKBase").length != 0 && (i = {
		timeoutHandle: null,
		delay: 200,
		speed: 120,
		effect: "linear"
	}, $.tools.tabs.addEffect("slide", function(t, i) {
		var f = this,
			e = {
				root: $.browser.webkit ? $("body").eq(0) : $("html").eq(0),
				duration: 600,
				scrollOffset: 48
			},
			o = {
				durationUp: 600,
				durationDown: 600,
				durationContentSlide: 900
			},
			h = {
				closeButton: 32,
				loading: 200
			},
			r = f.getPanes().eq(t),
			v = function() {
				var u = function(n) {
						var t = r.parent().offset().top - e.scrollOffset;
						t != e.root.scrollTop() ? e.root.animate({
							scrollTop: t
						}, e.duration, "swing", function() {
							n()
						}) : n()
					},
					l = function(t) {
						$.ajax({
							url: t,
							dataType: "html",
							success: function(t) {
								r.parent().animate({
									height: kbaseIntroHeight
								}, "fast", "swing", function() {
									var a = t.replace(/\<\/?content\>/g, ""),
										s, e, c, l, v;
									if (a += '<div class="kbaseTabClose"><a href="javascript:void(0);"><span class="collapseLabel"><\/span><\/a><\/div>', r.html(a), $("#knowledgebaseWrapper").removeClass("knowledgebaseWrapper"), $("#introImageKBase").removeClass("introImage"), $(".innerContent > *:first-child").hasClass("footnote"))
										for (s = $(".innerContent").children(), e = 0; e < s.length; e++)
											if (jQuery(s[e]).hasClass("footnote")) $(".innerContent").parent().find(".introImage").append($(".innerContent > *:first-child"));
											else break;
									c = "scroll-pane", $(".innerContent").find(".engineDiagram").length > 0 && (c = "scroll-pane-enginediagram"), $(".innerContent", r).addClass(c).removeClass("innerContent").jScrollPane({
										showArrows: "true"
									}), $("#introImageKBase_flash", r).length != 0 && (l = $("#introImageKBase_flash", r).get(0), $("#introImageKBase_flash").parent().css({
										height: $(l).attr("height") + "px",
										width: $(l).attr("width") + "px"
									})), v = r.height() + h.closeButton, r.parent().animate({
										height: v
									}, o.durationContentSlide, "swing", function() {
										n.resolveText("js_apps", "kbase", "closeLabel", ".collapseLabel"), n.doProcessing(), r.find(".kbaseTabClose").click(function() {
											u(function() {
												f.getCurrentTab().click()
											})
										}), u(function() {
											i.call()
										})
									})
								})
							}
						})
					},
					s, c;
				r.is(":empty") ? (s = $("#kbaseLink" + (t + 1)).eq(0).attr("href"), r.html('<div class="kbase-loading"><\/div>'), c = h.loading + h.closeButton, r.parent().animate({
					height: c
				}, 200, "linear", l(s))) : u(function() {
					i.call()
				})
			},
			y = function() {
				if ($(".kbaseTabClose", r.parent()).show(), !r.is(":empty")) {
					var n = r.height() + $(".kbaseTabClose").height();
					r.parent().animate({
						height: n
					}, o.durationContentSlide, "swing")
				}
				r.parent().slideDown(o.durationDown, v)
			},
			s, u = r.data("lastopen"),
			l, c, a;
		flashPlayer_cmdStop("introImageKBase_flash"), l = function() {
			f.getPanes().eq(u).parent().find(".kbaseTabClose").hide()
		}, l(), typeof u == "undefined" || t == u && r.data("status") == "closed" ? s = 0 : (s = o.durationUp, c = function() {
			$.browser.msie && $.browser.version < 8 && f.getPanes().eq(u).empty()
		}, t == u && r.data("status") == "open" || (a = this.getPanes().eq(u), c = function() {
			a.empty()
		}), f.getPanes().eq(u).parent().animate({
			height: kbaseIntroHeight
		}, s, "swing", c)), r.data("status", "closed"), r.parent().find(".kbaseHead .kbaseTabClose").length == 0 && (r.parent().find(".kbaseHead").append('<div class="kbaseTabClose"><a href="javascript:void(0);"><span class="collapseLabel"><\/span><\/a><\/div>'), n.resolveText("js_apps", "kbase", "closeLabel", ".collapseLabel"), n.doProcessing()), r.data("clickonsame") != !0 ? (window.setTimeout(y, s), r.data("status", "open")) : i.call()
	}), $(".tabContent2").tabs(".tabContent2 .galleryKBase div.kbaseContent", {
		tabs: ".kbaseHead",
		effect: "slide",
		initialIndex: null,
		onBeforeClick: function(n, t) {
			this.getPanes().data("lastopen", this.getIndex());
			var i = this.getPanes().eq(t);
			typeof i.data("status") == "undefined" && i.data("status", "closed"), this.getIndex() === t && i.data("clickonsame") != !0 ? (i.data("clickonsame", !0), i.siblings().data("clickonsame", !1)) : this.getPanes().data("clickonsame", !1)
		},
		onClick: function(n, t) {
			var u = this.getPanes().eq(t),
				i, r;
			u.data("status") == "closed" && (i = this.getCurrentTab(), r = this.getConf().current, window.setTimeout(function() {
				i.removeClass(r)
			}, 1))
		}
	}), getQueryVariable("topic") != "" && $("#" + getQueryVariable("topic")).click()), jQuery("ul.galleryPictures").length != 0 && (t = $("ul.galleryPictures[data-preview=normal]").length > 0, WIDTH = t ? WIDTH_TEQ : WIDTH_MOD, HEIGHT = t ? HEIGHT_TEQ : HEIGHT_MOD, TYPE = t ? TYPE_TEQ : TYPE_MOD, Z_WIDTH = t ? Z_WIDTH_TEQ : Z_WIDTH_MOD, Z_HEIGHT = t ? Z_HEIGHT_TEQ : Z_HEIGHT_MOD, Z_TYPE = t ? Z_TYPE_TEQ : Z_TYPE_MOD, TYPE_RegEx = t ? /filetype=normal/ : /filetype=zoom/, Z_TYPE_RegEx = t ? /filetype=zoom/ : /filetype=zoom2/, addOverlay(), n = new I18N, n.resolveText("js_apps", "kbase", "closeLabel", ".closeLabel"), initScroller(), $("body").bind("resize", scaleImage), $("#overlayTest").click(function() {
		closeOverlay()
	}), Modernizr.touch && $("#zoomBtn").remove(), $("#imageZoom").miniZoomPan({
		sW: WIDTH,
		sH: HEIGHT,
		lW: Z_WIDTH,
		lH: Z_HEIGHT,
		loaderContent: "<img src='/images/loading4.gif' style='width: 16px; height: 16px;' />",
		previewType: TYPE,
		zoomType: Z_TYPE,
		previewTypeRegEx: TYPE_RegEx,
		zoomTypeRegEx: Z_TYPE_RegEx,
		callback: function() {
			scaleImage(), n.resolveText("js_apps", "gallery", "clicktozoomin", "#previewImage|attr:title"), n.doProcessing()
		}
	}), $.browser.msie == !0 && $.browser.version < 7 && $("#overlayTest, #closeBar, #imgClose, #imageZoom, #gallery-legacy, #teaserBG").addClass("ie6fixedposition")), jQuery("ul.galleryWallpapers > li > a > img[data-wp-src]").length != 0 ? (jQuery("#wallpaperDownloads").bind("swapUrl", function(n, t, i, r, u) {
		jQuery(this).children("li").children("a").each(function() {
			var n = jQuery(this).attr("data-wp-width"),
				i = jQuery(this).attr("data-wp-height"),
				u = jQuery(this).attr("id"),
				r = t + "&w=" + n + "&h=" + i;
			jQuery(this).attr("href", r)
		}), jQuery(this).css("top", r.top + "px"), jQuery(this).css("left", u.left + 100 + "px"), jQuery(this).show()
	}), jQuery("#wallpaperDownloads").mouseleave(function() {
		jQuery(this).hide()
	}), jQuery("ul.galleryWallpapers li").each(function() {
		jQuery(this).mouseenter(function(n) {
			var t = jQuery(this).children("a").children("img").attr("data-wp-src"),
				i = jQuery(this).offset(),
				r = jQuery(this).position(),
				u = this.offsetLeft,
				f = this.offsetTop,
				e = jQuery(this).children("a").children("img");
			jQuery("#wallpaperDownloads").trigger("swapUrl", [t, n, i, r])
		})
	})) : jQuery("ul.galleryWallpapers").length != 0 && (jQuery("#wallpaperDownloads").bind("swapUrl", function(n, t, i, r, u) {
		var f;
		jQuery(this).children("li").children("a").each(function() {
			var n = jQuery(this).attr("id"),
				i = t.replace(/preview.jpg/, "wallpaper-" + n + ".jpg").replace(/filetype=preview/, "filetype=" + n);
			jQuery(this).attr("href", i)
		}), f = jQuery(this).parent().hasClass("galleryContent") ? 60 : 80, jQuery(this).css("top", r.top + "px"), jQuery(this).css("left", u.left + 100 + "px"), jQuery(this).show()
	}), jQuery("#wallpaperDownloads").mouseleave(function() {
		jQuery(this).hide()
	}), jQuery(".b-standard-content-wrapper ul.galleryWallpapers li").each(function() {
		jQuery(this).mouseenter(function(n) {
			var i = jQuery(this).children("a").children("img").attr("src"),
				r = jQuery(this).offset(),
				u = jQuery(this).position(),
				f = this.offsetLeft,
				e = this.offsetTop,
				t = jQuery(this).children("a").children("img");
			$(t).hasClass("i320x480") ? jQuery("#i320x480").parent().removeClass("wHidden") : jQuery("#i320x480").parent().hasClass("wHidden") || jQuery("#i320x480").parent().addClass("wHidden"), $(t).hasClass("i640x960") ? jQuery("#i640x960").parent().removeClass("wHidden") : jQuery("#i640x960").parent().hasClass("wHidden") || jQuery("#i640x960").parent().addClass("wHidden"), $(t).hasClass("i1024x1024") ? jQuery("#i1024x1024").parent().removeClass("wHidden") : jQuery("#i1024x1024").parent().hasClass("wHidden") || jQuery("#i1024x1024").parent().addClass("wHidden"), $(t).hasClass("i2048x1536") ? jQuery("#i2048x1536").parent().removeClass("wHidden") : jQuery("#i2048x1536").parent().hasClass("wHidden") || jQuery("#i2048x1536").parent().addClass("wHidden"), jQuery("#wallpaperDownloads").trigger("swapUrl", [i, n, r, u])
		})
	}))
}

function initPressGallery() {
	$(".pressGallery").each(function() {
		var n = new PressGallery(this);
		n.init()
	})
}

function PressGallery(n, t) {
	var i = this;
	this.settings = $.extend({
		effect: !1,
		effectDuration: 300
	}, t), this.container = $(n), this.currentImage = 1, this.maximumImageCount = 1, this.locked = !1, this.init = function() {
		i.currentImage = parseInt(i.container.find(".pressGalleryCinema img.active").attr("data-rel")), i.maximumImageCount = i.container.find(".pressGalleryCinema img").length, i.container.find(".pressGalleryCinemaNavigation").click(function(n) {
			n.preventDefault(), n.stopPropagation();
			var t = $(this).hasClass("next");
			i.showImage(t ? i.currentImage + 1 : i.currentImage - 1)
		}), i.container.find(".pressGalleryThumbView a").click(function(n) {
			n.preventDefault(), n.stopPropagation(), i.showImage(parseInt($(this).attr("data-rel")))
		}), i.restoreMetrics()
	}, this.showImage = function(n) {
		typeof n == "undefined" || isNaN(n) || i.locked || (i.settings.effect ? (i.setLocked(!0), i.container.find(".pressGalleryCinema img.active").fadeOut(i.settings.effectDuration, function() {
			$(this).removeClass("active"), i.container.find(".pressGalleryThumbView a.active").removeClass("active")
		}), i.container.find('.pressGalleryCinema img[data-rel="' + n + '"]').fadeIn(i.settings.effectDuration, function() {
			$(this).addClass("active"), i.container.find('.pressGalleryThumbView a[data-rel="' + n + '"]').addClass("active"), i.currentImage = n, i.restoreNavigation(), i.restoreMetrics(), i.setLocked(!1)
		})) : (i.setLocked(!0), i.container.find(".pressGalleryCinema img.active").removeClass("active"), i.container.find('.pressGalleryCinema img[data-rel="' + n + '"]').addClass("active"), i.container.find(".pressGalleryThumbView a.active").removeClass("active"), i.container.find('.pressGalleryThumbView a[data-rel="' + n + '"]').addClass("active"), i.currentImage = n, i.restoreNavigation(), i.restoreMetrics(), i.setLocked(!1)))
	}, this.setLocked = function(n) {
		i.container.removeClass("locked"), n && i.container.addClass("locked"), i.locked = n
	}, this.restoreNavigation = function(n) {
		typeof n == "undefined" && (n = i.currentImage), n == 1 ? i.container.find(".pressGalleryCinemaNavigation.prev").addClass("notpossible") : i.container.find(".pressGalleryCinemaNavigation.prev").removeClass("notpossible"), n >= i.maximumImageCount ? i.container.find(".pressGalleryCinemaNavigation.next").addClass("notpossible") : i.container.find(".pressGalleryCinemaNavigation.next").removeClass("notpossible")
	}, this.restoreMetrics = function() {
		var n = (i.container.find(".pressGalleryCinema").width() - i.container.find(".pressGalleryCinema img.active").width()) / 2,
			t = {
				width: n + "px"
			};
		i.container.find(".pressGalleryCinemaNavigation").css(t)
	}
}

function flashPlayer_cmdStart() {
	return
}

function flashPlayer_cmdStop() {
	return
}

function runExternalScript(n, t) {
	var r = "https:" == document.location.protocol && t ? "https://" : "http://",
		i = document.createElement("script");
	i.type = "text/javascript", i.src = r + n, document.body.appendChild(i)
}

function I18N() {
	function t(n, t) {
		this.selector = n, this.textId = t
	}

	function i() {
		var n = this;
		this.dataQueue = [], this.dataQueueBuffered = [], this.enqueue = function(i, r) {
			n.dataQueue.push(new t(i, r))
		}, this.dequeue = function() {
			return n.dataQueue.pop()
		}, this.enqueueBuffered = function(i, r) {
			n.dataQueueBuffered.push(new t(i, r))
		}, this.dequeueBuffered = function() {
			n.dataQueueBuffered.pop()
		}
	}
	var n = this;
	this.q = new i, this.pool = getPoolName(), this.language = getPoolLang(this.pool), this.textlistContainer = "i18n", this.textlistPool = this.pool, this.textlistLanguage = this.language, this.currentTextListId = "", this.getGroupId = function(t, i) {
		return "textlist_" + n.clearAttr(t) + "_" + n.clearAttr(i)
	}, this.getTextId = function(t, i, r) {
		return n.getGroupId(t, i) + "_" + n.clearAttr(r)
	}, this.clearAttr = function(n) {
		return n.replace(/\s+/g, "_")
	}, this.requiredGroups = [], this.insertTLGroups = function(t, i) {
		id = n.currentTextListId, $("#" + n.textlistContainer).length == 0 && $('<div id="' + n.textlistContainer + '" style="display:none !important;"><\/div>').appendTo("body"), $.ajax({
			url: "/all/cms2js/gettext.aspx?i=" + id + "&p=" + t + "&l=" + i,
			success: function(t) {
				$.each(n.requiredGroups, function(i, r) {
					var f = r.split("|"),
						e = f[0],
						u = f[1],
						o = n.getGroupId(e, u);
					$('<div class="textlist_hidden" id="' + o + '"><\/div>').appendTo("#" + n.textlistContainer), $(t).find("group[name='" + u + "']").children("text").each(function() {
						$('<span id="' + n.getTextId(e, u, $(this).attr("name")) + '">' + $(this).text() + "<\/span>").appendTo("#" + o)
					})
				})
			},
			complete: function() {
				while (n.q.dataQueue.length > 0) {
					var t = n.q.dequeue();
					n.setText(t.selector, t.textId)
				}
				n.requiredGroups = []
			}
		})
	}, this.setText = function(n, t) {
		var r, e = "text",
			o = "",
			u = n.split("|"),
			i, f;
		if (u.length == 2 ? (u[1].indexOf(":") != -1 && (i = u[1].split(":"), i[0] == "attr" && i[1].length > 0 && (e = i[0], o = i[1])), r = u[0]) : r = n, f = $("#" + t).html(), f != null) switch (e) {
			case "text":
				$(r).html(f);
				break;
			case "attr":
				$(r).attr(o, f)
		}
	}, this.resolveText = function(t, i, r, u) {
		var o, f, e;
		this.currentTextListId = t, o = $("#" + n.getGroupId(t, i)), f = n.getTextId(t, i, r), o.length == 0 ? (e = t + "|" + i, ArrayContainsItem(n.requiredGroups, e) || n.requiredGroups.push(e), this.q.enqueue(u, f)) : n.setText(u, f)
	}, this.toDo = function() {
		return this.requiredGroups.length > 0
	}, this.doProcessing = function() {
		this.toDo() && this.insertTLGroups(n.textlistPool, n.textlistLanguage)
	}
}

function ArrayContainsItem(n, t) {
	if (!$.isArray(n)) return !1;
	for (var i = 0; i < n.length; i++)
		if (n[i] == t) return !0;
	return !1
}

function specialSpotlightTrackings() {
	var n = null,
		t = null,
		i = null,
		r = null,
		u = null,
		f = null;
	if (CURRENTPOOL == "france") switch (g_page_nxid) {
		case "porscheapproved-usedcarlocator":
			n = 92079
	}
	if (CURRENTPOOL == "spain") switch (g_page_nxid) {
		case "WS-2012-09-Panamara-Cayenne-registration":
			var e = $("#formcomponentform").hasClass("formedit step1"),
				o = $("#formcomponentform").hasClass("formedit step2"),
				s = $("#formcomponentform").hasClass("formprint");
			e ? (n = 238045, t = "[Revenue]", i = "[OrderID]", r = "[ProductID]", u = "[ProductInfo]", f = "[Quantity]") : o ? (n = 238042, t = "[Revenue]", i = "[OrderID]", r = "[ProductID]", u = "[ProductInfo]", f = "[Quantity]") : s && (n = 250059, t = "[Revenue]", i = "[OrderID]", r = "[ProductID]", u = "[ProductInfo]", f = "[Quantity]");
			break;
		case "homepage":
			n = 238045
	}
	if (CURRENTPOOL == "usa") switch (g_page_nxid) {
		case "rd2013-homepage":
			n = 585534;
			break;
		case "9c89b326-61c2-419c-9210-e3e86a1d1885":
			getQueryVariable("model") == "" && (n = 585905), getQueryVariable("model") == "cayenne" && (n = 585917), getQueryVariable("model") == "boxster" && (n = 600085), getQueryVariable("model") == "911" && (n = 600086), getQueryVariable("model") == "cayman" && (n = 600087), getQueryVariable("model") == "panamera" && (n = 600088);
			break;
		case "rd-2013-dealersearch":
			n = 600700;
			break;
		case "cc-modelstart":
			n = 600701;
			break;
		case "cayenne":
			n = 585907;
			break;
		case "9pa-e2-2nd-s-e-hy":
			n = 585908;
			break;
		case "9pa-e2-2nd-s":
			n = 585913;
			break;
		case "cc-modelstart-all":
			getQueryVariable("modelrange") == "cayenne" && (n = 585909);
			break;
		case "9pa-e2-2nd-v6":
			n = 585910;
			break;
		case "9pa-e2-2nd-di":
			n = 585911;
			break;
		case "9pa-e2-2nd-gts":
			n = 585914;
			break;
		case "9pa-e2-2nd-tu":
			n = 585915;
			break;
		case "9pa-e2-2nd-tus":
			n = 585916;
			break;
		case "aps594":
			n = 600077;
			break;
		case "911":
			n = 600078;
			break;
		case "cayman":
			n = 600083;
			break;
		case "panamera":
			n = 600084;
			break;
		case "970-g1-2nd-s-e-hy":
			n = 551159;
			break;
		case "po-416-tu":
			n = 550839;
			break;
		case "po-416-s":
			n = 550838;
			break;
		case "WS-2013-10-Macan-registration":
			n = 548992;
			break;
		case "carconfiguratormodelstart-all":
			getQueryVariable("modelrange") == "macan" && (n = 548991);
			break;
		default:
			return
	}
	if (CURRENTPOOL == "canada") switch (g_page_nxid) {
		case "home":
			n = 79149;
			break;
		case "aps594":
			n = 79150;
			break;
		case "987-2nd-bo":
			n = 79151;
			break;
		case "987-2nd-bos":
			n = 79152;
			break;
		case "987-2nd-bo-spyder":
			n = 79153;
			break;
		case "cayman":
			n = 79154;
			break;
		case "987-2nd-c7":
			n = 79155;
			break;
		case "987-2nd-c7s":
			n = 79156;
			break;
		case "911":
			n = 79157;
			break;
		case "997-2nd-c2":
			n = 79158;
			break;
		case "997-2nd-c2s":
			n = 79159;
			break;
		case "997-2nd-c2cab":
			n = 79160;
			break;
		case "997-2nd-c2scab":
			n = 79161;
			break;
		case "997-2nd-c4":
			n = 79162;
			break;
		case "997-2nd-c4s":
			n = 79163;
			break;
		case "997-2nd-c4cab":
			n = 79164;
			break;
		case "997-2nd-c4scab":
			n = 79165;
			break;
		case "997-2nd-ta4":
			n = 79166;
			break;
		case "997-2nd-ta4s":
			n = 79167;
			break;
		case "997-2nd-tu":
			n = 79168;
			break;
		case "997-2nd-tus":
			n = 79169;
			break;
		case "997-2nd-tucab":
			n = 79170;
			break;
		case "997-2nd-tuscab":
			n = 79171;
			break;
		case "997-2nd-gt3":
			n = 79172;
			break;
		case "997-2nd-gt3rs":
			n = 79173;
			break;
		case "997-2nd-gt2rs-microsite":
			n = 79174;
			break;
		case "panamera":
			n = 79175;
			break;
		case "970-g1-v6":
			n = 79176;
			break;
		case "970-g1-4":
			n = 79177;
			break;
		case "970-g1-s":
			n = 79178;
			break;
		case "970-g1-4s":
			n = 79179;
			break;
		case "970-g1-tu":
			n = 79180;
			break;
		case "aps882":
			n = 79181;
			break;
		case "9pa-e2-v6":
			n = 79182;
			break;
		case "9pa-e2-s":
			n = 79183;
			break;
		case "9pa-e2-s-hy":
			n = 79184;
			break;
		case "9pa-e2-tu":
			n = 79185;
			break;
		case "n5":
			n = 79186;
			break;
		case "79482b1a-6789-4df1-90e7-440f10ce0baf":
			n = 79187;
			break;
		case "6ecb1f51-7c8d-4aef-9fa7-ff83e2302b9e":
			n = 79188;
			break;
		case "n11":
			n = 79189;
			break;
		case "a93f98e0-2f56-4f9f-9938-b17728b3bb89":
			n = 79190;
			break;
		case "dialogarea":
			n = 79192;
			break;
		default:
			return
	}
	n != null && conversionTag(n, t, i, r, u, f)
}

function conversionTag(n, t, i, r, u, f) {
	var e, o;
	typeof n != "undefined" && (e = Math.random() + "", e = e * 1e6, o = window.location.protocol + "//bs.serving-sys.com/BurstingPipe/ActivityServer.bs?cn=as&ActivityID=" + n + "&rnd=" + e + "&ns=0", typeof t != "undefined" && t != null && (o += "&Value=" + t + "&OrderID=" + i + "ProductID=" + r + "ProductInfo=" + u + "&Quantity=" + f), jQuery.getScript(o))
}

function kVoid() {
	return
}

function kenshoo_conv(n, t, i, r, u) {
	var e = "https:" == document.location.protocol ? "https" : "http",
		o = e + "://170.xg4ken.com/media/redir.php?track=1&id=6b039cc4-a5fd-4573-9cc1-723ef98dbae7&type=" + n + "&val=" + t + "&orderId=" + i + "&valueCurrency=" + u + "&promoCode=" + r + "&ref=" + document.referrer,
		f = new Image(1, 1);
	f.src = o, f.onload = function() {
		kVoid()
	}
}

function thirdpartstrackingpixellibs() {
	this.facebookpixelcode = function(n) {
		! function(t, i, r, u, f, e, o) {
			t.fbq || (f = t.fbq = function() {
				f.callMethod ? f.callMethod.apply(f, arguments) : f.queue.push(arguments)
			}, t._fbq || (t._fbq = f), f.push = f, f.loaded = !0, f.version = "2.0", f.queue = [], e = i.createElement(r), e.async = !0, e.src = u + "?num=" + parseInt(Math.random() * 1e13, 0), o = i.getElementsByTagName(r)[0], o.parentNode.insertBefore(e, o), n())
		}(window, document, "script", "//connect.facebook.net/en_US/fbevents.js", null, null, null, n)
	}, this.facebookconversioncode = function(n) {
		var r = window.__fbq || (window.__fbq = []),
			t = document.createElement("script"),
			i;
		t.async = !0, t.src = "https://connect.facebook.net/en_US/fbds.js", i = document.getElementsByTagName("script")[0], i.parentNode.insertBefore(t, i), n()
	}, this.twitterplattform = function(n) {
		var r = window._tpc || (window._tpc = []),
			t, i, u;
		r.loaded || (t = document.createElement("script"), t.async = !0, t.src = "//platform.twitter.com/oct.js", i = document.getElementsByTagName("script")[0], i.parentNode.insertBefore(t, i), r.loaded = !0, u = setInterval(function() {
			typeof twttr == "object" && (clearInterval(u), n())
		}, 10))
	}, this.googleconversionpage = function(n, t, i, r, u, f) {
		var h = n,
			c = t,
			l = i,
			a = r,
			v = u,
			y = f,
			s = window._gcp || (window._gcp = []),
			e, o;
		s.loaded || (e = document.createElement("script"), e.async = !0, e.src = "//www.googleadservices.com/pagead/conversion.js", o = document.getElementsByTagName("script")[0], o.parentNode.insertBefore(e, o), s.loaded = !0)
	}, this.googleremarketingtag = function(n, t) {
		var f = n,
			e = window.google_tag_params,
			o = t,
			u = window._gmt || (window._gmt = []),
			i, r;
		u.loaded || (i = document.createElement("script"), i.async = !0, i.src = "//www.googleadservices.com/pagead/conversion.js", r = document.getElementsByTagName("script")[0], r.parentNode.insertBefore(i, r), u.loaded = !0)
	}, this.floodlighttag = function(n, t, i, r) {
		var u = r || "6b039cc4-a5fd-4573-9cc1-723ef98dbae7",
			f = "https:" == document.location.protocol ? "https" : "http";
		$.getScript(f + "://170.xg4ken.com/media/getpx.php?cid=" + u, function() {
			var f = [],
				r;
			f[0] = "id=" + u, f[1] = "type=" + n, f[2] = "val=0.0", f[3] = "orderId=", f[4] = "promoCode=", f[5] = "valueCurrency=" + t, f[6] = "GCID=", f[7] = "kw=", f[8] = "product=", r = new thirdpartstrackingpixellibs;
			switch (i) {
				case "findadealer":
					!$("#m-01-dealer-search-form").length || $(function() {
						$("#m-01-dealer-search-form").submit(function() {
							typeof kenshoo_conv != "undefined" && kenshoo_conv(n, "", "", "", t), r.facebookconversioncode(function() {
								window._fbq = window._fbq || [], window._fbq.push(["track", "6031869591675", {
									value: "0.00",
									currency: "USD"
								}])
							})
						})
					});
					$(".m-13-dealer-search-form a, .m-13-dealer-search-form-state a, .m-13-find-dealer-localization a").on("click", function() {
						typeof kenshoo_conv != "undefined" && kenshoo_conv(n, "", "", "", t), r.facebookconversioncode(function() {
							window._fbq = window._fbq || [], window._fbq.push(["track", "6031869591675", {
								value: "0.00",
								currency: "USD"
							}])
						})
					});
					break;
				case "termsearch":
					!$("#m-01-site-search-form").length || $("#m-01-site-search-form").submit(function() {
						typeof kenshoo_conv != "undefined" && typeof kenshoo_conv != "undefined" && kenshoo_conv(n, "", "", "", t)
					});
					break;
				case "searchinventory":
					$(".m-21-scn-bluebuttons-wrapper a.gui-btn-round-blue.search").on("click", function() {
						typeof kenshoo_conv != "undefined" && kenshoo_conv(n, "", "", "", t), r.facebookconversioncode(function() {
							window._fbq = window._fbq || [], window._fbq.push(["track", "6031950817275", {
								value: "0.00",
								currency: "USD"
							}])
						})
					});
					if (!!$("#m-01-shopping-tools-item a.m-01-search-inventory-icon").length) $("#m-01-shopping-tools-item a.m-01-search-inventory-icon").on("click", function() {
						typeof kenshoo_conv != "undefined" && kenshoo_conv(n, "", "", "", t), r.facebookconversioncode(function() {
							window._fbq = window._fbq || [], window._fbq.push(["track", "6031950817275", {
								value: "0.00",
								currency: "USD"
							}])
						})
					});
					if ($("#m-03-related-links-01-content li a").each(function() {
							if ($(this).attr("href").indexOf("inventorysearch") > -1) $(this).on("click", function() {
								typeof kenshoo_conv != "undefined" && kenshoo_conv(n, "", "", "", t), r.facebookconversioncode(function() {
									window._fbq = window._fbq || [], window._fbq.push(["track", "6031950817275", {
										value: "0.00",
										currency: "USD"
									}])
								})
							})
						}), !!$("a.m-13-zip-search-submit").length) $("a.m-13-zip-search-submit").on("click", function() {
						$(".m-13-car-tile-wrapper-active").attr("data-model") == "cayenne" && (typeof kenshoo_conv != "undefined" && kenshoo_conv(n, "", "", "", t), r.facebookconversioncode(function() {
							window._fbq = window._fbq || [], window._fbq.push(["track", "6031950817275", {
								value: "0.00",
								currency: "USD"
							}])
						}))
					});
					!$(".m-28-blue-buttons-module .m-28-blue-buttons-wrapper a").length || $(".m-28-blue-buttons-module .m-28-blue-buttons-wrapper a").each(function() {
						if ($(this).attr("href").indexOf("inventorysearch") > -1) $(this).on("click", function() {
							typeof kenshoo_conv != "undefined" && kenshoo_conv(n, "", "", "", t), r.facebookconversioncode(function() {
								window._fbq = window._fbq || [], window._fbq.push(["track", "6031950817275", {
									value: "0.00",
									currency: "USD"
								}])
							})
						})
					});
					break;
				case "findalldealer":
					$("a").each(function() {
						if (typeof $(this).attr("href") != "undefined" && $(this).attr("href").indexOf("/dealer/usLocator/") > -1) $(this).on("click", function() {
							typeof kenshoo_conv != "undefined" && kenshoo_conv(n, "", "", "", t)
						})
					});
					break;
				case "buildyourmodel":
					if ($("a.m-14-model-tile-link, .m-21-scn-bluebuttons-wrapper a").each(function() {
							if (typeof $(this).attr("href") != "undefined" && $(this).attr("href").indexOf("icc_pcna") > -1) $(this).on("click", function() {
								typeof kenshoo_conv != "undefined" && kenshoo_conv(n, "", "", "", t), r.facebookconversioncode(function() {
									window._fbq = window._fbq || [], window._fbq.push(["track", "6031999834275", {
										value: "0.00",
										currency: "USD"
									}])
								})
							})
						}), !$(".m-28-blue-buttons-module .m-28-blue-buttons-wrapper a").length || $(".m-28-blue-buttons-module .m-28-blue-buttons-wrapper a").each(function() {
							if ($(this).attr("href").indexOf("modelstart") > -1) $(this).on("click", function() {
								typeof kenshoo_conv != "undefined" && kenshoo_conv(n, "", "", "", t), r.facebookconversioncode(function() {
									window._fbq = window._fbq || [], window._fbq.push(["track", "6031999834275", {
										value: "0.00",
										currency: "USD"
									}])
								})
							})
						}), !!$("#m-01-car-configurator-button a").length) $("#m-01-car-configurator-button a").on("click", function() {
						typeof kenshoo_conv != "undefined" && kenshoo_conv(n, "", "", "", t), r.facebookconversioncode(function() {
							window._fbq = window._fbq || [], window._fbq.push(["track", "6031999834275", {
								value: "0.00",
								currency: "USD"
							}])
						})
					});
					if (!!$("#m-01-shopping-tools-item a.m-01-car-configurator-icon").length) $("#m-01-shopping-tools-item a.m-01-car-configurator-icon").on("click", function() {
						typeof kenshoo_conv != "undefined" && kenshoo_conv(n, "", "", "", t), r.facebookconversioncode(function() {
							window._fbq = window._fbq || [], window._fbq.push(["track", "6031999834275", {
								value: "0.00",
								currency: "USD"
							}])
						})
					});
					$("#m-03-related-links-01-content li a").each(function() {
						if ($(this).attr("href").indexOf("modelstart") > -1) $(this).on("click", function() {
							typeof kenshoo_conv != "undefined" && kenshoo_conv(n, "", "", "", t), r.facebookconversioncode(function() {
								window._fbq = window._fbq || [], window._fbq.push(["track", "6031999834275", {
									value: "0.00",
									currency: "USD"
								}])
							})
						})
					});
					break;
				case "buildyoutmodelall":
					$("a").each(function() {
						if (typeof $(this).attr("href") != "undefined" && $(this).attr("href").indexOf("/usa/modelstart/") > -1) $(this).on("click", function() {
							typeof kenshoo_conv != "undefined" && kenshoo_conv(n, "", "", "", t)
						})
					})
			}
		})
	}, this.sslt = function(n, t) {
		var r = Math.random() + "",
			i;
		r = r * 1e6, i = "HTTP://bs.serving-sys.com/Serving/ActivityServer.bs?cn=as&ActivityID=" + n + "&rnd=" + r;
		switch (t) {
			case "buildyourown":
				$(function() {
					$(".m-21-scn-bluebuttons-wrapper a").eq(0).on("click", function() {
						$.getScript(i)
					})
				});
				break;
			case "searchinventory":
				$(function() {
					$("#m-01-shopping-tools-item a.m-01-search-inventory-icon").on("click", function() {
						$.getScript(i)
					})
				});
				break;
			case "findadealer":
				$(function() {
					$(".m-21-scn-bluebuttons-wrapper .search").on("click", function() {
						$.getScript(i)
					})
				})
		}
	}, this.doubleclick = function(n, t, i, r, u) {
		var e = Math.random() + "",
			o = u || "",
			f = e * 1e13;
		switch (u) {
			case "buildyourown":
				$(function() {
					if (!!$("#m-01-car-configurator-button a").length) $("#m-01-car-configurator-button a").on("click", function() {
						$("body").append('<iframe src="https://' + n + ".fls.doubleclick.net/activityi;src=" + t + ";type=" + i + ";cat=" + r + ";dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=" + f + '?" width="1" height="1" frameborder="0" style="display:none"><\/iframe>')
					});
					$("#m-03-related-links-01-content li a").each(function() {
						if ($(this).attr("href").indexOf("modelstart") > -1) $(this).on("click", function() {
							$("body").append('<iframe src="https://' + n + ".fls.doubleclick.net/activityi;src=" + t + ";type=" + i + ";cat=" + r + ";dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=" + f + '?" width="1" height="1" frameborder="0" style="display:none"><\/iframe>')
						})
					}), $(".m-01-blue-button-section a").each(function() {
						if ($(this).attr("href").indexOf("modelstart") > -1) $(this).on("click", function() {
							$("body").append('<iframe src="https://' + n + ".fls.doubleclick.net/activityi;src=" + t + ";type=" + i + ";cat=" + r + ";dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=" + f + '?" width="1" height="1" frameborder="0" style="display:none"><\/iframe>')
						})
					}), $(".m-21-scn-bluebuttons-wrapper a").each(function() {
						if (console.log("??"), $(this).hasClass("configure")) $(this).on("click", function() {
							$("body").append('<iframe src="https://' + n + ".fls.doubleclick.net/activityi;src=" + t + ";type=" + i + ";cat=" + r + ";dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=" + f + '?" width="1" height="1" frameborder="0" style="display:none"><\/iframe>')
						})
					}), !$(".m-28-blue-buttons-module .m-28-blue-buttons-wrapper a").length || $(".m-28-blue-buttons-module .m-28-blue-buttons-wrapper a").each(function() {
						if ($(this).attr("href").indexOf("modelstart") > -1) $(this).on("click", function() {
							$("body").append('<iframe src="https://' + n + ".fls.doubleclick.net/activityi;src=" + t + ";type=" + i + ";cat=" + r + ";dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=" + f + '?" width="1" height="1" frameborder="0" style="display:none"><\/iframe>')
						})
					})
				});
				break;
			case "findadealer":
				$(function() {
					!$("#m-01-dealer-search-form").length || $(function() {
						$("#m-01-dealer-search-form").submit(function() {
							$("body").append('<iframe src="https://' + n + ".fls.doubleclick.net/activityi;src=" + t + ";type=" + i + ";cat=" + r + ";dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=" + f + '?" width="1" height="1" frameborder="0" style="display:none"><\/iframe>')
						})
					}), $("#m-03-related-links-01-content li a").each(function() {
						$(this).on("click", function() {
							$(this).attr("href").indexOf("dealer") > -1 && $("body").append('<iframe src="https://' + n + ".fls.doubleclick.net/activityi;src=" + t + ";type=" + i + ";cat=" + r + ";dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=" + f + '?" width="1" height="1" frameborder="0" style="display:none"><\/iframe>')
						})
					})
				});
				break;
			case "searchinventory":
				$(function() {
					$(".m-01-blue-button-section a").each(function() {
						if ($(this).attr("href").indexOf("inventorysearch") > -1) $(this).on("click", function() {
							$("body").append('<iframe src="https://' + n + ".fls.doubleclick.net/activityi;src=" + t + ";type=" + i + ";cat=" + r + ";dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=" + f + '?" width="1" height="1" frameborder="0" style="display:none"><\/iframe>')
						})
					}), !$(".m-28-blue-buttons-module .m-28-blue-buttons-wrapper a").length || $(".m-28-blue-buttons-module .m-28-blue-buttons-wrapper a").each(function() {
						if ($(this).attr("href").indexOf("inventorysearch") > -1) $(this).on("click", function() {
							$("body").append('<iframe src="https://' + n + ".fls.doubleclick.net/activityi;src=" + t + ";type=" + i + ";cat=" + r + ";dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=" + f + '?" width="1" height="1" frameborder="0" style="display:none"><\/iframe>')
						})
					}), $("#m-03-related-links-01-content li a").each(function() {
						if ($(this).attr("href").indexOf("inventorysearch") > -1) $(this).on("click", function() {
							$("body").append('<iframe src="https://' + n + ".fls.doubleclick.net/activityi;src=" + t + ";type=" + i + ";cat=" + r + ";dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=" + f + '?" width="1" height="1" frameborder="0" style="display:none"><\/iframe>')
						})
					}), $(".m-21-scn-bluebuttons-wrapper a").each(function() {
						if ($(this).hasClass("search")) $(this).on("click", function() {
							$("body").append('<iframe src="https://' + n + ".fls.doubleclick.net/activityi;src=" + t + ";type=" + i + ";cat=" + r + ";dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=" + f + '?" width="1" height="1" frameborder="0" style="display:none"><\/iframe>')
						})
					})
				});
				break;
			case "pagevisit":
				$(function() {
					$("body").append('<iframe src="https://' + n + ".fls.doubleclick.net/activityi;src=" + t + ";type=" + i + ";cat=" + r + ";dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=" + f + '?" width="1" height="1" frameborder="0" style="display:none"><\/iframe>')
				});
				break;
			case "socialnetworks":
				$(function() {
					$('a[class^="gui-btn-sm-"]').each(function() {
						$(this).on("click", function() {
							$("body").append('<iframe src="https://' + n + ".fls.doubleclick.net/activityi;src=" + t + ";type=" + i + ";cat=" + r + ";dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=" + f + '?" width="1" height="1" frameborder="0" style="display:none"><\/iframe>')
						})
					}), $('.b-sharepanel span[class^="gui-btn-sm-"]').each(function() {
						$(this).on("click", function() {
							$("body").append('<iframe src="https://' + n + ".fls.doubleclick.net/activityi;src=" + t + ";type=" + i + ";cat=" + r + ";dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=" + f + '?" width="1" height="1" frameborder="0" style="display:none"><\/iframe>')
						})
					})
				})
		}
	}, this.sambatv = function(n) {
		! function() {
			var t = window.SambaTV = window.SambaTV || [],
				u = n,
				i, r;
			if (!t.track) {
				if (t.invoked) return void(window.console && window.console.error && window.console.error("Samba Metrics snippet included twice."));
				for (t.invoked = !0, t.methods = ["track", "Impression", "Purchase", "Register", "Click", "Login", "Register"], t.factory = function(n) {
						return function() {
							var i = Array.prototype.slice.call(arguments);
							return i.unshift(n), t.push(i), t
						}
					}, i = 0; i < t.methods.length; i++) r = t.methods[i], t[r] = t.factory(r);
				t.load = function(n) {
					var t = document.createElement("script"),
						i;
					t.type = "text/javascript", t.async = !0, t.src = ("https:" === document.location.protocol ? "https://" : "http://") + "tag.mtrcs.samba.tv/v3/tag/" + n + "/sambaTag.js", i = document.getElementsByTagName("script")[0], i.parentNode.insertBefore(t, i)
				}, t.attrs || (t.attrs = {}), t.SNIPPET_VERSION = "1.0.1", t.load(u)
			}
		}()
	}
}

function submitForm(n, t) {
	if (t || (t = "formcomponentform"), n == "reset") return $("#" + t).length > 0 && document.forms[t].reset(), !1;
	if ($("#" + t).length > 0) $("#" + t).append('<div><input type="hidden" name="' + n + '" value="' + n + '" /><\/div>');
	else return !1;
	return $("#" + t).submit(), !0
}

function previewText(n, t) {
	var i = t ? "<br>" : "";
	$("#" + n + "preview").html($("#" + n).attr("value").replace(/ /g, " ").replace(/\</g, "").replace(/\>/g, "").replace(/\u00a0/g, " ").replace(/\n/g, i)), $("#messagehidden").attr({
		value: $("#message").attr("value").replace(/ /g, " ").replace(/\</g, "").replace(/\n/g, i)
	}), g_page_nxid === "LP-2012-06-PorscheCode-tellafriend" && ($("#message").attr("value") != "" ? ($("#messagepreview").show(), $("#messagehidden").attr({
		value: $("#introText").html() + "<br/><br/>" + $("#message").attr("value").replace(/ /g, " ").replace(/\</g, "").replace(/\n/g, i)
	})) : $("#messagepreview").hide())
}

function previewKey(n) {
	alert(n)
}

function GenerateRSSHtml(n, t) {
	var i = new google.feeds.Feed(n);
	i.load(function(n) {
		var i, r, f, u, e;
		if (!n.error)
			for (i = 0; i != n.feed.entries.length - 1; i++) {
				r = n.feed.entries[i], f = "";
				try {
					u = new Date(r.publishedDate), f = u.getMonth() + 1 + "/" + u.getDate() + "/" + u.getFullYear()
				} catch (o) {}
				try {
					e = '<tr><td><a href="' + r.link + '">' + r.title + "<\/a><\/td><td>" + f + "<\/td><\/tr>", jQuery(t).append(e)
				} catch (o) {}
			}
	})
}

function openApplicationForm() {
	var n = $("#applicationFormSelect").val();
	n = n.replace("javascript:", ""), n.indexOf("gotoUrl") == 0 && n.indexOf("http") > 0 ? eval(n) : n.indexOf("gotoUrl") == -1 && n.indexOf("http") == 0 && gotoUrlNewWinSizeScrollableResizeable(n)
}
var GLOBAL_CONFIG, BROWSER, swfobject, evaluation1, actvalue, showvalue, modelData, GxGeneral, g_lastNumber, loadImage_timeOut, loadImage_timeOutHandler, txtSearchtermOfValue, g_clueTip_ModelLayer_TimeoutId, g_clueTip_ModelLayer_TimeoutMillisec, g_galleryZoomInTimeoutHandle, g_galleryNavblockTimeout, kbaseIntroHeight, Guid;
window.Modernizr = function(n, t, i) {
		function l(n) {
			c.cssText = n
		}

		function at(n, t) {
			return l(y.join(n + ";") + (t || ""))
		}

		function h(n, t) {
			return typeof n === t
		}

		function v(n, t) {
			return !!~("" + n).indexOf(t)
		}

		function lt(n, t) {
			var u, r;
			for (u in n)
				if (r = n[u], !v(r, "-") && c[r] !== i) return t == "pfx" ? r : !0;
			return !1
		}

		function vt(n, t, r) {
			var f, u;
			for (f in n)
				if (u = t[n[f]], u !== i) return r === !1 ? n[f] : h(u, "function") ? u.bind(r || t) : u;
			return !1
		}

		function f(n, t, i) {
			var r = n.charAt(0).toUpperCase() + n.slice(1),
				u = (n + " " + ot.join(r + " ") + r).split(" ");
			return h(t, "string") || h(t, "undefined") ? lt(u, t) : (u = (n + " " + st.join(r + " ") + r).split(" "), vt(u, t, i))
		}

		function yt() {
			u.input = function(i) {
				for (var r = 0, u = i.length; r < u; r++) w[i[r]] = !!(i[r] in e);
				return w.list && (w.list = !!(t.createElement("datalist") && n.HTMLDataListElement)), w
			}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), u.inputtypes = function(n) {
				for (var u = 0, r, f, o, h = n.length; u < h; u++) e.setAttribute("type", f = n[u]), r = e.type !== "text", r && (e.value = g, e.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(f) && e.style.WebkitAppearance !== i ? (s.appendChild(e), o = t.defaultView, r = o.getComputedStyle && o.getComputedStyle(e, null).WebkitAppearance !== "textfield" && e.offsetHeight !== 0, s.removeChild(e)) : /^(search|tel)$/.test(f) || (r = /^(url|email)$/.test(f) ? e.checkValidity && e.checkValidity() === !1 : e.value != g)), ht[n[u]] = !!r;
				return ht
			}("search tel url email datetime date month week time datetime-local number range color".split(" "))
		}
		var u = {},
			d = !0,
			s = t.documentElement,
			o = "modernizr",
			ut = t.createElement(o),
			c = ut.style,
			e = t.createElement("input"),
			g = ":)",
			ft = {}.toString,
			y = " -webkit- -moz- -o- -ms- ".split(" "),
			et = "Webkit Moz O ms",
			ot = et.split(" "),
			st = et.toLowerCase().split(" "),
			p = {
				svg: "http://www.w3.org/2000/svg"
			},
			r = {},
			ht = {},
			w = {},
			nt = [],
			tt = nt.slice,
			b, a = function(n, i, r, u) {
				var l, a, c, v, f = t.createElement("div"),
					h = t.body,
					e = h || t.createElement("body");
				if (parseInt(r, 10))
					while (r--) c = t.createElement("div"), c.id = u ? u[r] : o + (r + 1), f.appendChild(c);
				return l = ["&#173;", '<style id="s', o, '">', n, "<\/style>"].join(""), f.id = o, (h ? f : e).innerHTML += l, e.appendChild(f), h || (e.style.background = "", e.style.overflow = "hidden", v = s.style.overflow, s.style.overflow = "hidden", s.appendChild(e)), a = i(f, n), h ? f.parentNode.removeChild(f) : (e.parentNode.removeChild(e), s.style.overflow = v), !!a
			},
			ct = function() {
				function r(r, u) {
					u = u || t.createElement(n[r] || "div"), r = "on" + r;
					var f = r in u;
					return f || (u.setAttribute || (u = t.createElement("div")), u.setAttribute && u.removeAttribute && (u.setAttribute(r, ""), f = h(u[r], "function"), h(u[r], "undefined") || (u[r] = i), u.removeAttribute(r))), u = null, f
				}
				var n = {
					select: "input",
					change: "input",
					submit: "form",
					reset: "form",
					error: "img",
					load: "img",
					abort: "img"
				};
				return r
			}(),
			it = {}.hasOwnProperty,
			rt, k;
		rt = h(it, "undefined") || h(it.call, "undefined") ? function(n, t) {
			return t in n && h(n.constructor.prototype[t], "undefined")
		} : function(n, t) {
			return it.call(n, t)
		}, Function.prototype.bind || (Function.prototype.bind = function(n) {
			var t = this,
				i, r;
			if (typeof t != "function") throw new TypeError;
			return i = tt.call(arguments, 1), r = function() {
				var f, e, u;
				return this instanceof r ? (f = function() {}, f.prototype = t.prototype, e = new f, u = t.apply(e, i.concat(tt.call(arguments))), Object(u) === u) ? u : e : t.apply(n, i.concat(tt.call(arguments)))
			}, r
		}), r.flexbox = function() {
			return f("flexWrap")
		}, r.canvas = function() {
			var n = t.createElement("canvas");
			return !!(n.getContext && n.getContext("2d"))
		}, r.canvastext = function() {
			return !!(u.canvas && h(t.createElement("canvas").getContext("2d").fillText, "function"))
		}, r.webgl = function() {
			return !!n.WebGLRenderingContext
		}, r.touch = function() {
			var i;
			return "ontouchstart" in n || n.DocumentTouch && t instanceof DocumentTouch ? i = !0 : a(["@media (", y.join("touch-enabled),("), o, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(n) {
				i = n.offsetTop === 9
			}), i
		}, r.geolocation = function() {
			return "geolocation" in navigator
		}, r.postmessage = function() {
			return !!n.postMessage
		}, r.websqldatabase = function() {
			return !!n.openDatabase
		}, r.indexedDB = function() {
			return !!f("indexedDB", n)
		}, r.hashchange = function() {
			return ct("hashchange", n) && (t.documentMode === i || t.documentMode > 7)
		}, r.history = function() {
			return !!(n.history && history.pushState)
		}, r.draganddrop = function() {
			var n = t.createElement("div");
			return "draggable" in n || "ondragstart" in n && "ondrop" in n
		}, r.websockets = function() {
			return "WebSocket" in n || "MozWebSocket" in n
		}, r.rgba = function() {
			return l("background-color:rgba(150,255,150,.5)"), v(c.backgroundColor, "rgba")
		}, r.hsla = function() {
			return l("background-color:hsla(120,40%,100%,.5)"), v(c.backgroundColor, "rgba") || v(c.backgroundColor, "hsla")
		}, r.multiplebgs = function() {
			return l("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(c.background)
		}, r.backgroundsize = function() {
			return f("backgroundSize")
		}, r.borderimage = function() {
			return f("borderImage")
		}, r.borderradius = function() {
			return f("borderRadius")
		}, r.boxshadow = function() {
			return f("boxShadow")
		}, r.textshadow = function() {
			return t.createElement("div").style.textShadow === ""
		}, r.opacity = function() {
			return at("opacity:.55"), /^0.55$/.test(c.opacity)
		}, r.cssanimations = function() {
			return f("animationName")
		}, r.csscolumns = function() {
			return f("columnCount")
		}, r.cssgradients = function() {
			var n = "background-image:";
			return l((n + "-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));" + n) + y.join("linear-gradient(left top,#9f9, white);" + n)).slice(0, -n.length)), v(c.backgroundImage, "gradient")
		}, r.cssreflections = function() {
			return f("boxReflect")
		}, r.csstransforms = function() {
			return !!f("transform")
		}, r.csstransforms3d = function() {
			var n = !!f("perspective");
			return n && "webkitPerspective" in s.style && a("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(t) {
				n = t.offsetLeft === 9 && t.offsetHeight === 3
			}), n
		}, r.csstransitions = function() {
			return f("transition")
		}, r.fontface = function() {
			var n;
			return a('@font-face {font-family:"font";src:url("https://")}', function(i, r) {
				var f = t.getElementById("smodernizr"),
					u = f.sheet || f.styleSheet,
					e = u ? u.cssRules && u.cssRules[0] ? u.cssRules[0].cssText : u.cssText || "" : "";
				n = /src/i.test(e) && e.indexOf(r.split(" ")[0]) === 0
			}), n
		}, r.generatedcontent = function() {
			var n;
			return a(["#", o, "{font:0/0 a}#", o, ':after{content:"', g, '";visibility:hidden;font:3px/1 a}'].join(""), function(t) {
				n = t.offsetHeight >= 3
			}), n
		}, r.video = function() {
			var i = t.createElement("video"),
				n = !1;
			try {
				(n = !!i.canPlayType) && (n = new Boolean(n), n.ogg = i.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = i.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = i.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
			} catch (r) {}
			return n
		}, r.audio = function() {
			var i = t.createElement("audio"),
				n = !1;
			try {
				(n = !!i.canPlayType) && (n = new Boolean(n), n.ogg = i.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = i.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = i.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (i.canPlayType("audio/x-m4a;") || i.canPlayType("audio/aac;")).replace(/^no$/, ""))
			} catch (r) {}
			return n
		}, r.localstorage = function() {
			try {
				return localStorage.setItem(o, o), localStorage.removeItem(o), !0
			} catch (n) {
				return !1
			}
		}, r.sessionstorage = function() {
			try {
				return sessionStorage.setItem(o, o), sessionStorage.removeItem(o), !0
			} catch (n) {
				return !1
			}
		}, r.webworkers = function() {
			return !!n.Worker
		}, r.applicationcache = function() {
			return !!n.applicationCache
		}, r.svg = function() {
			return !!t.createElementNS && !!t.createElementNS(p.svg, "svg").createSVGRect
		}, r.inlinesvg = function() {
			var n = t.createElement("div");
			return n.innerHTML = "<svg/>", (n.firstChild && n.firstChild.namespaceURI) == p.svg
		}, r.smil = function() {
			return !!t.createElementNS && /SVGAnimate/.test(ft.call(t.createElementNS(p.svg, "animate")))
		}, r.svgclippaths = function() {
			return !!t.createElementNS && /SVGClipPath/.test(ft.call(t.createElementNS(p.svg, "clipPath")))
		};
		for (k in r) rt(r, k) && (b = k.toLowerCase(), u[b] = r[k](), nt.push((u[b] ? "" : "no-") + b));
		return u.input || yt(), u.addTest = function(n, t) {
				if (typeof n == "object")
					for (var r in n) rt(n, r) && u.addTest(r, n[r]);
				else {
					if (n = n.toLowerCase(), u[n] !== i) return u;
					t = typeof t == "function" ? t() : t, typeof d != "undefined" && d && (s.className += " " + (t ? "" : "no-") + n), u[n] = t
				}
				return u
			}, l(""), ut = e = null,
			function(n, t) {
				function p(n, t) {
					var i = n.createElement("p"),
						r = n.getElementsByTagName("head")[0] || n.documentElement;
					return i.innerHTML = "x<style>" + t + "<\/style>", r.insertBefore(i.lastChild, r.firstChild)
				}

				function c() {
					var n = r.elements;
					return typeof n == "string" ? n.split(" ") : n
				}

				function o(n) {
					var t = h[n[s]];
					return t || (t = {}, e++, n[s] = e, h[e] = t), t
				}

				function l(n, r, u) {
					if (r || (r = t), i) return r.createElement(n);
					u || (u = o(r));
					var f;
					return f = u.cache[n] ? u.cache[n].cloneNode() : y.test(n) ? (u.cache[n] = u.createElem(n)).cloneNode() : u.createElem(n), f.canHaveChildren && !v.test(n) ? u.frag.appendChild(f) : f
				}

				function w(n, r) {
					if (n || (n = t), i) return n.createDocumentFragment();
					r = r || o(n);
					for (var f = r.frag.cloneNode(), u = 0, e = c(), s = e.length; u < s; u++) f.createElement(e[u]);
					return f
				}

				function b(n, t) {
					t.cache || (t.cache = {}, t.createElem = n.createElement, t.createFrag = n.createDocumentFragment, t.frag = t.createFrag()), n.createElement = function(i) {
						return r.shivMethods ? l(i, n, t) : t.createElem(i)
					}, n.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + c().join().replace(/\w+/g, function(n) {
						return t.createElem(n), t.frag.createElement(n), 'c("' + n + '")'
					}) + ");return n}")(r, t.frag)
				}

				function a(n) {
					n || (n = t);
					var u = o(n);
					return !r.shivCSS || f || u.hasCSS || (u.hasCSS = !!p(n, "article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")), i || b(n, u), n
				}
				var u = n.html5 || {},
					v = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
					y = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
					f, s = "_html5shiv",
					e = 0,
					h = {},
					i, r;
				(function() {
					try {
						var n = t.createElement("a");
						n.innerHTML = "<xyz><\/xyz>", f = "hidden" in n, i = n.childNodes.length == 1 || function() {
							t.createElement("a");
							var n = t.createDocumentFragment();
							return typeof n.cloneNode == "undefined" || typeof n.createDocumentFragment == "undefined" || typeof n.createElement == "undefined"
						}()
					} catch (r) {
						f = !0, i = !0
					}
				})(), r = {
					elements: u.elements || "abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",
					shivCSS: u.shivCSS !== !1,
					supportsUnknownElements: i,
					shivMethods: u.shivMethods !== !1,
					type: "default",
					shivDocument: a,
					createElement: l,
					createDocumentFragment: w
				}, n.html5 = r, a(t)
			}(this, t), u._version = "2.6.2", u._prefixes = y, u._domPrefixes = st, u._cssomPrefixes = ot, u.hasEvent = ct, u.testProp = function(n) {
				return lt([n])
			}, u.testAllProps = f, u.testStyles = a, u.prefixed = function(n, t, i) {
				return t ? f(n, t, i) : f(n, "pfx")
			}, s.className = s.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (d ? " js " + nt.join(" ") : ""), u
	}(this, this.document),
	function(n, t, i) {
		function h(n) {
			return "[object Function]" == y.call(n)
		}

		function c(n) {
			return "string" == typeof n
		}

		function l() {}

		function w(n) {
			return !n || "loaded" == n || "complete" == n || "uninitialized" == n
		}

		function e() {
			var n = a.shift();
			v = 1, n ? n.t ? s(function() {
				("c" == n.t ? u.injectCss : u.injectJs)(n.s, 0, n.a, n.x, n.e, 1)
			}, 0) : (n(), e()) : v = 0
		}

		function ut(n, i, f, h, c, l, y) {
			function k(t) {
				if (!nt && w(p.readyState) && (tt.r = nt = 1, !v && e(), p.onload = p.onreadystatechange = null, t)) {
					"img" != n && s(function() {
						g.removeChild(p)
					}, 50);
					for (var u in r[i]) r[i].hasOwnProperty(u) && r[i][u].onload()
				}
			}
			var y = y || u.errorTimeout,
				p = t.createElement(n),
				nt = 0,
				b = 0,
				tt = {
					t: f,
					s: i,
					e: c,
					a: l,
					x: y
				};
			1 === r[i] && (b = 1, r[i] = []), "object" == n ? p.data = i : (p.src = i, p.type = n), p.width = p.height = "0", p.onerror = p.onload = p.onreadystatechange = function() {
				k.call(this, b)
			}, a.splice(h, 0, tt), "img" != n && (b || 2 === r[i] ? (g.insertBefore(p, d ? null : o), s(k, y)) : r[i].push(p))
		}

		function ft(n, t, i, r, u) {
			return v = 0, t = t || "j", c(n) ? ut("c" == t ? et : nt, n, t, this.i++, i, r, u) : (a.splice(this.i++, 0, n), 1 == a.length && e()), this
		}

		function b() {
			var n = u;
			return n.loader = {
				load: ft,
				i: 0
			}, n
		}
		var f = t.documentElement,
			s = n.setTimeout,
			o = t.getElementsByTagName("script")[0],
			y = {}.toString,
			a = [],
			v = 0,
			k = "MozAppearance" in f.style,
			d = k && !!t.createRange().compareNode,
			g = d ? f : o.parentNode,
			f = n.opera && "[object Opera]" == y.call(n.opera),
			f = !!t.attachEvent && !f,
			nt = k ? "object" : f ? "script" : "img",
			et = f ? "script" : nt,
			tt = Array.isArray || function(n) {
				return "[object Array]" == y.call(n)
			},
			p = [],
			r = {},
			it = {
				timeout: function(n, t) {
					return t.length && (n.timeout = t[0]), n
				}
			},
			rt, u;
		u = function(n) {
			function a(n) {
				for (var n = n.split("!"), f = p.length, t = n.pop(), e = n.length, t = {
						url: t,
						origUrl: t,
						prefixes: n
					}, u, r, i = 0; i < e; i++) r = n[i].split("="), (u = it[r.shift()]) && (t = u(t, r));
				for (i = 0; i < f; i++) t = p[i](t);
				return t
			}

			function f(n, t, u, f, e) {
				var o = a(n),
					s = o.autoCallback;
				o.url.split(".").pop().split("?").shift(), o.bypass || (t && (t = h(t) ? t : t[n] || t[f] || t[n.split("/").pop().split("?")[0]]), o.instead ? o.instead(n, t, u, f, e) : (r[o.url] ? o.noexec = !0 : r[o.url] = 1, u.load(o.url, o.forceCSS || !o.forceJS && "css" == o.url.split(".").pop().split("?").shift() ? "c" : i, o.noexec, o.attrs, o.timeout), (h(t) || h(s)) && u.load(function() {
					b(), t && t(o.origUrl, e, f), s && s(o.origUrl, e, f), r[o.url] = 2
				})))
			}

			function s(n, t) {
				function a(n, o) {
					if (n) {
						if (c(n)) o || (i = function() {
							var n = [].slice.call(arguments);
							s.apply(this, n), u()
						}), f(n, i, t, 0, e);
						else if (Object(n) === n)
							for (r in v = function() {
									var t = 0,
										i;
									for (i in n) n.hasOwnProperty(i) && t++;
									return t
								}(), n) n.hasOwnProperty(r) && (!o && !--v && (h(i) ? i = function() {
								var n = [].slice.call(arguments);
								s.apply(this, n), u()
							} : i[r] = function(n) {
								return function() {
									var t = [].slice.call(arguments);
									n && n.apply(this, t), u()
								}
							}(s[r])), f(n[r], i, t, r, e))
					} else o || u()
				}
				var e = !!n.test,
					o = n.load || n.both,
					i = n.callback || l,
					s = i,
					u = n.complete || l,
					v, r;
				a(e ? n.yep : n.nope, !!o), o && a(o)
			}
			var e, t, o = this.yepnope.loader;
			if (c(n)) f(n, 0, o, 0);
			else if (tt(n))
				for (e = 0; e < n.length; e++) t = n[e], c(t) ? f(t, 0, o, 0) : tt(t) ? u(t) : Object(t) === t && s(t, o);
			else Object(n) === n && s(n, o)
		}, u.addPrefix = function(n, t) {
			it[n] = t
		}, u.addFilter = function(n) {
			p.push(n)
		}, u.errorTimeout = 1e4, null == t.readyState && t.addEventListener && (t.readyState = "loading", t.addEventListener("DOMContentLoaded", rt = function() {
			t.removeEventListener("DOMContentLoaded", rt, 0), t.readyState = "complete"
		}, 0)), n.yepnope = b(), n.yepnope.executeStack = e, n.yepnope.injectJs = function(n, i, r, f, h, c) {
			var a = t.createElement("script"),
				v, y, f = f || u.errorTimeout;
			a.src = n;
			for (y in r) a.setAttribute(y, r[y]);
			i = c ? e : i || l, a.onreadystatechange = a.onload = function() {
				!v && w(a.readyState) && (v = 1, i(), a.onload = a.onreadystatechange = null)
			}, s(function() {
				v || (v = 1, i(1))
			}, f), h ? a.onload() : o.parentNode.insertBefore(a, o)
		}, n.yepnope.injectCss = function(n, i, r, u, f, h) {
			var u = t.createElement("link"),
				c, i = h ? e : i || l;
			u.href = n, u.rel = "stylesheet", u.type = "text/css";
			for (c in r) u.setAttribute(c, r[c]);
			f || (o.parentNode.insertBefore(u, o), s(i, 0))
		}
	}(this, document), Modernizr.load = function() {
		yepnope.apply(window, [].slice.call(arguments, 0))
	}, Modernizr.addTest("pointerevents", function() {
		var n = document.createElement("x"),
			t = document.documentElement,
			i = window.getComputedStyle,
			r;
		return ("pointerEvents" in n.style) ? (n.style.pointerEvents = "auto", n.style.pointerEvents = "x", t.appendChild(n), r = i && i(n, "").pointerEvents === "auto", t.removeChild(n), !!r) : !1
	}), GLOBAL_CONFIG = GLOBAL_CONFIG || {}, GLOBAL_CONFIG.currentMainNavigationArea = GLOBAL_CONFIG.currentMainNavigationArea || "", GLOBAL_CONFIG.pool = GLOBAL_CONFIG.pool || "germany", GLOBAL_CONFIG.language = GLOBAL_CONFIG.language || "none", GLOBAL_CONFIG.region = GLOBAL_CONFIG.region || "", GLOBAL_CONFIG.loadPsyma = GLOBAL_CONFIG.loadPsyma || "", GLOBAL_CONFIG.home = GLOBAL_CONFIG.home || !1, GLOBAL_CONFIG.isLocal = GLOBAL_CONFIG.isLocal || !1, GLOBAL_CONFIG.dealersearch = GLOBAL_CONFIG.dealersearch || {}, GLOBAL_CONFIG.dealersearch.porschedealerLocatorURL = GLOBAL_CONFIG.dealersearch.porschedealerLocatorURL || "http://porschedealer.com/dealer/usLocator/?zip=[[###ZIP###]]&page=search", GLOBAL_CONFIG.popup = GLOBAL_CONFIG.popup || {}, GLOBAL_CONFIG.popup.CC = GLOBAL_CONFIG.popup.CC || {
		height: 680,
		width: 980,
		targetWindow: "ccmodelstart"
	}, GLOBAL_CONFIG.popup.MC = GLOBAL_CONFIG.popup.MC || {
		height: 680,
		width: 980,
		targetWindow: "modelcompare"
	}, GLOBAL_CONFIG.debugLogging = !0;
var TRACKING = {
		TRACK: function() {
			var n = this.get_trackingParams(),
				t;
			n.activityID !== "" && (t = this.get_trackingURL(n), $("body").append('<iframe src="' + t + '" width="1" height="1" frameborder="0" style="display:none !important;"/>'))
		},
		get_trackingParams: function() {
			var n = {
				activityID: "",
				categoryID: "",
				type: "",
				rnd: parseInt(Math.random() * 1e13, 0)
			};
			switch (GLOBAL_CONFIG.pool) {
				case "usa":
					switch (GLOBAL_CONFIG.page) {
						case "rd-2014-motorsport-raceseries-fiawec":
							n.service = "doubleclick", n.activityID = "4450347", n.categoryID = "9U22ez1T", n.type = "invmedia";
							break;
						case "rd-2014-motorsport-raceseries-fiawec-livestreaming":
							n.service = "doubleclick", n.activityID = "4450347", n.categoryID = "0n0QE27B", n.type = "invmedia"
					}
					break;
				case "specials":
					switch (GLOBAL_CONFIG.page) {
						case "germany_faszination-porsche":
							n.service = "doubleclick", n.activityID = "4349699", n.categoryID = "de_ak0", n.type = "com_cnt"
					}
			}
			return n
		},
		get_trackingURL: function(n) {
			var t = "";
			switch (n.service) {
				case "doubleclick":
					t = "https://#ACTIVITY#.fls.doubleclick.net/activityi;src=#ACTIVITY#;type=#TYPE#;cat=#CATEGORY#;ord=#RND#?", t = t.replace(/#ACTIVITY#/g, n.activityID), t = t.replace(/#CATEGORY#/g, n.categoryID), t = t.replace(/#RND#/g, n.rnd), t = t.replace(/#TYPE#/g, n.type)
			}
			return typeof console != "undefined" && console.log("TRACKING.get_trackingURL : " + t), t
		},
		FB: {
			CONVERSION: function() {
				var i = window._fbq || (window._fbq = []),
					n, t;
				i.loaded || (n = document.createElement("script"), n.async = !0, n.src = "//connect.facebook.net/en_US/fbds.js", t = document.getElementsByTagName("script")[0], t.parentNode.insertBefore(n, t), i.loaded = !0)
			},
			convert: !1
		}
	},
	POPUP = POPUP || {
		OPEN: this.OPEN || function(n) {
			var t = this.windowParams();
			t.urlTarget = this.htmlDecode(n), this.openPopup(t)
		},
		CC_Overview: this.CC_Overview || function(n) {
			if (n.indexOf("http://") === 0) {
				this.CC(n);
				return
			}
			var t = this.windowParams();
			t.urlTarget = n, t.targetWindow = GLOBAL_CONFIG.popup.CC.targetWindow, t.toolbar = 0, t.menubar = 0, this.openPopup(t)
		},
		CC: this.CC || function(n) {
			var t = this.windowParams();
			t.urlTarget = this.addCCParams(n), t.targetWindow = GLOBAL_CONFIG.popup.CC.targetWindow, t.toolbar = 0, t.menubar = 0, this.openPopup(t)
		},
		MC: this.MC || function(n) {
			var t = this.windowParams();
			t.urlTarget = this.addCCParams(n), t.targetWindow = GLOBAL_CONFIG.popup.MC.targetWindow, t.height = GLOBAL_CONFIG.popup.MC.height, t.width = GLOBAL_CONFIG.popup.MC.width, t.replace = !0, this.openPopup(t)
		},
		openPopup: this.openPopup || function(n) {
			var t, i;
			if (typeof n === undefined || typeof n.urlTarget === undefined || n.urlTarget.indexOf("http") !== 0 && n.urlTarget.indexOf("/") !== 0) return !1;
			t = n.targetWindow, typeof window.name !== undefined && window.name === t && (t = "_self"), i = window.open(n.urlTarget, t, this.buildFeaturelist(n), n.replace);
			try {
				i.name = n.targetWindow
			} catch (r) {}
			return i
		},
		windowParams: function() {
			return {
				urlTarget: "",
				targetWindow: "_blank",
				height: 0,
				width: 0,
				replace: !1,
				location: "1",
				menubar: "1",
				resizable: "1",
				scrollbars: "1",
				status: "1",
				titlebar: "1",
				toolbar: "1"
			}
		},
		buildFeaturelist: function(n) {
			return "location=" + n.location + ",menubar=" + n.menubar + ",resizable=" + n.resizable + ",scrollbars=" + n.scrollbars + ",status=" + n.status + ",titlebar=" + n.titlebar + ",toolbar=" + n.toolbar + (n.height < 100 ? "" : ",height=" + n.height) + (n.width < 100 ? "" : ",width=" + n.width)
		},
		buildRandomParam: function() {
			return "rt=" + Math.round((new Date).getTime() / 1e3)
		},
		addCCParams: this.addCCParams || function(n) {
			return n = this.appendParam(n, "screen=" + screen.width + "x" + screen.height), this.appendParam(n, this.buildRandomParam())
		},
		appendParam: function(n, t) {
			return n.split("?")[0] + "?" + t + "&" + n.split("?")[1]
		},
		htmlDecode: function(n) {
			var t = $("<textarea><\/textarea>");
			return t.html(n), t.text()
		}
	},
	LANDINGPAGE = LANDINGPAGE || {};
LANDINGPAGE.namespace = function(n) {
	var t = n.split("."),
		r = LANDINGPAGE,
		i;
	for (t[0] === "LANDINGPAGE" && (t = t.slice(1)), i = 0; i < t.length; i += 1) typeof r[t[i]] == "undefined" && (r[t[i]] = {}), r = r[t[i]];
	return r
};
var LOG_DEBUG = !1,
	Logger = {
		error: function(n) {
			typeof console != "undefined" && console.log("ERROR " + n)
		},
		debug: function(n) {
			typeof console != "undefined" && console.log("DEBUG " + n)
		}
	},
	SHARING = SHARING || {};
jQuery.extend(!0, SHARING, {
		sharingHost: this.sharingHost,
		images: [],
		tracking: {},
		services: {},
		SHARE: function(n, t, i, r, u) {
			var o = !0,
				f, e;
			return this.services[n] === undefined ? n + " is missing." : (f = this.services[n].shareurl, e = this.getShareData(n, t, i, r, u), f = f.replace(/#TITLE#/g, o ? encodeURIComponent(e.shareTitle) : e.shareTitle), f = f.replace(/#TEXT#/g, o ? encodeURIComponent(e.shareText) : e.shareText), f = f.replace(/#MEDIA#/g, o ? encodeURIComponent(e.mediaRef) : e.mediaRef), f = f.replace(/#URL#/g, o ? encodeURIComponent(e.composedShareURL) : e.composedShareURL), n === "facebook" && (f = f.replace(/&#91;/mg, "["), f = f.replace(/&#93;/mg, "]")), typeof tracker != "undefined" && tracker.social(n, "share", f), f = f.replace("%3Fpc", "&amp;pc"), this.enabled ? POPUP.OPEN(f) : f)
		},
		getShareData: function(n, t, i, r, u) {
			return t === undefined && (t = this.sharingHost + document.location.pathname), t += (t.indexOf("?") >= 0 ? "&" : "?") + "pc=" + this.tracking.ga.replace(/#TRACKID#/g, this.services[n].trackid), i === undefined && (i = $('meta[property="og:title"]').attr("content")), r === undefined && (r = $('meta[property="og:description"]').attr("content")), u === undefined && (u = $('meta[property="og:image"]').attr("content")), {
				shareTitle: i || "",
				shareText: r || "",
				mediaRef: u || "",
				composedShareURL: t
			}
		}
	}), BROWSER = BROWSER || {}, jQuery.extend(!0, BROWSER, {
		detect: function() {
			this.browser = this.searchString(this.dataBrowser) || "Other", this.version = this.searchVersion(navigator.userAgent) || this.searchVersion(navigator.appVersion) || "Unknown", this.os = this.searchString(this.dataOs) || "Other"
		},
		searchString: function(n) {
			for (var i, t = 0; t < n.length; t++)
				if (i = n[t].string, this.versionSearchString = n[t].subString, i.indexOf(n[t].subString) !== -1) return n[t].identity
		},
		searchVersion: function(n) {
			var i = n.indexOf(this.versionSearchString),
				t;
			if (i !== -1) return t = n.indexOf("rv:"), this.versionSearchString === "Trident" && t !== -1 ? parseFloat(n.substring(t + 3)) : parseFloat(n.substring(i + this.versionSearchString.length + 1))
		},
		dataOs: [{
			string: navigator.userAgent,
			subString: "iPad",
			identity: "iOS"
		}, {
			string: navigator.userAgent,
			subString: "iPhone",
			identity: "iOS"
		}, {
			string: navigator.userAgent,
			subString: "Android",
			identity: "Android"
		}],
		dataBrowser: [{
			string: navigator.userAgent,
			subString: "Edge",
			identity: "MS Edge"
		}, {
			string: navigator.userAgent,
			subString: "Chrome",
			identity: "Chrome"
		}, {
			string: navigator.userAgent,
			subString: "MSIE",
			identity: "Explorer"
		}, {
			string: navigator.userAgent,
			subString: "Trident",
			identity: "Explorer"
		}, {
			string: navigator.userAgent,
			subString: "Firefox",
			identity: "Firefox"
		}, {
			string: navigator.userAgent,
			subString: "Safari",
			identity: "Safari"
		}, {
			string: navigator.userAgent,
			subString: "Opera",
			identity: "Opera"
		}]
	}), BROWSER.detect(),
	function(n, t, i, r) {
		"use strict";

		function u() {
			n(".touch .b-sharepanel").bind("click", function() {
				n(this).hasClass("isActive") ? n(this).removeClass("isActive") : n(this).addClass("isActive")
			});
			n(".b-sharing").on("click", function() {
				var t = n(this).data("service");
				typeof console != "undefined" && console.log(SHARING.SHARE(t))
			})
		}

		function f() {
			n(".b-linkblock-notice").length > 0 && n(".b-linkblock-notice").each(function() {
				var t = n(this).attr("id"),
					r = n.cookie(t + "_" + GLOBAL_CONFIG.pool + "_closed");
				r !== "true" && (n("body").addClass("b-shownotice"), n(this).find(".gui-btn-close").click(function() {
					var t = n(this).parent().parent(),
						r = t.attr("id");
					n.cookie(r + "_" + GLOBAL_CONFIG.pool + "_closed", "true", {
						expires: 3,
						secure: i.location.protocol === "https" ? !0 : !1
					}), n("body").removeClass("b-shownotice")
				}))
			})
		}

		function e() {
			location.hash || t.pageYOffset || t.setTimeout(function() {
				t.scrollTo(0, 1)
			}, 0)
		}

		function o() {
			var f = n(t).width(),
				e = n(t).height(),
				r = Math.floor(f * (12 / 14) / 16) * 16,
				u;
			r = r > 640 ? 640 : r, u = r / 16 * 9, n("#streaming").attr("src", i.location.protocol + "//" + GLOBAL_CONFIG.stream.url + "?width=" + r + "&height=" + u)
		}
		n(i).ready(function() {
			GLOBAL_CONFIG.page = n("body").data("pageid"), logonstate = isLoggedIn(), image_scale(".m-01-model-figure > img, .zoomImage img, .ce-media-wrapper img, .m-04-intro-section-home-slider img, .m-08-features-slider img"), image_swap(".m-01-model-figure > img, .zoomImage img, .ce-media-wrapper img, .m-04-intro-section-home-slider img, .m-08-features-slider img");
			n(i).on("royalSliderHandler-ReadyEvent", scaleSliderImages);
			if (u(), f(), GLOBAL_CONFIG.stream !== r && o(), typeof swfobject != "undefined" && (swfobject.hasFlashPlayerVersion("1") ? n("html").addClass("hasflash") : n("html").addClass("no-flash")), typeof GLOBAL_CONFIG.GRID != "undefined" && GLOBAL_CONFIG.GRID === !0 && getURLParameter("grid") !== "null") n(".m-00-header").on("click", function() {
				addGrid(), n(".b-form-wrapper .group").length > 0 && addGridForms()
			});
			TRACKING.TRACK(), t._fbq !== "undefined" && TRACKING.FB.convert && TRACKING.FB.CONVERSION()
		}), n(t).load(function() {
			e()
		})
	}(jQuery, this, this.document), ! function(n) {
		"undefined" == typeof n.fn.each2 && n.extend(n.fn, {
			each2: function(t) {
				for (var i = n([0]), r = -1, u = this.length; ++r < u && (i.context = i[0] = this[r]) && t.call(i[0], r, i) !== !1;);
				return this
			}
		})
	}(jQuery),
	function(n, t) {
		"use strict";

		function d(t) {
			var i = n(document.createTextNode(""));
			t.before(i), i.before(t), i.remove()
		}

		function h(n) {
			function t(n) {
				return dt[n] || n
			}
			return n.replace(/[^\u0000-\u007E]/g, t)
		}

		function e(n, t) {
			for (var i = 0, r = t.length; r > i; i += 1)
				if (f(n, t[i])) return i;
			return -1
		}

		function ct() {
			var t = n(kt),
				i;
			return t.appendTo(document.body), i = {
				width: t.width() - t[0].clientWidth,
				height: t.height() - t[0].clientHeight
			}, t.remove(), i
		}

		function f(n, i) {
			return n === i ? !0 : n === t || i === t ? !1 : null === n || null === i ? !1 : n.constructor === String ? n + "" == i + "" : i.constructor === String ? i + "" == n + "" : !1
		}

		function v(n, t, i) {
			var r, u, f;
			if (null === n || n.length < 1) return [];
			for (r = n.split(t), u = 0, f = r.length; f > u; u += 1) r[u] = i(r[u]);
			return r
		}

		function g(n) {
			return n.outerWidth(!1) - n.width()
		}

		function nt(i) {
			var r = "keyup-change-value";
			i.on("keydown", function() {
				n.data(i, r) === t && n.data(i, r, i.val())
			}), i.on("keyup", function() {
				var u = n.data(i, r);
				u !== t && i.val() !== u && (n.removeData(i, r), i.trigger("keyup-change"))
			})
		}

		function lt(i) {
			i.on("mousemove", function(i) {
				var r = k;
				(r === t || r.x !== i.pageX || r.y !== i.pageY) && n(i.target).trigger("mousemove-filtered", i)
			})
		}

		function tt(n, i, r) {
			r = r || t;
			var u;
			return function() {
				var t = arguments;
				window.clearTimeout(u), u = window.setTimeout(function() {
					i.apply(r, t)
				}, n)
			}
		}

		function at(n, t) {
			var i = tt(n, function(n) {
				t.trigger("scroll-debounced", n)
			});
			t.on("scroll", function(n) {
				e(n.target, t.get()) >= 0 && i(n)
			})
		}

		function vt(n) {
			n[0] !== document.activeElement && window.setTimeout(function() {
				var i, t = n[0],
					r = n.val().length,
					u;
				n.focus(), u = t.offsetWidth > 0 || t.offsetHeight > 0, u && t === document.activeElement && (t.setSelectionRange ? t.setSelectionRange(r, r) : t.createTextRange && (i = t.createTextRange(), i.collapse(!1), i.select()))
			}, 0)
		}

		function yt(t) {
			var i, r, u;
			return t = n(t)[0], i = 0, r = 0, "selectionStart" in t ? (i = t.selectionStart, r = t.selectionEnd - i) : "selection" in document && (t.focus(), u = document.selection.createRange(), r = document.selection.createRange().text.length, u.moveStart("character", -t.value.length), i = u.text.length - r), {
				offset: i,
				length: r
			}
		}

		function r(n) {
			n.preventDefault(), n.stopPropagation()
		}

		function pt(n) {
			n.preventDefault(), n.stopImmediatePropagation()
		}

		function wt(t) {
			if (!s) {
				var i = t[0].currentStyle || window.getComputedStyle(t[0], null);
				s = n(document.createElement("div")).css({
					position: "absolute",
					left: "-10000px",
					top: "-10000px",
					display: "none",
					fontSize: i.fontSize,
					fontFamily: i.fontFamily,
					fontStyle: i.fontStyle,
					fontWeight: i.fontWeight,
					letterSpacing: i.letterSpacing,
					textTransform: i.textTransform,
					whiteSpace: "nowrap"
				}), s.attr("class", "select2-sizer"), n(document.body).append(s)
			}
			return s.text(t.val()), s.width()
		}

		function l(t, i, r) {
			var u, f, e = [];
			u = n.trim(t.attr("class")), u && (u = "" + u, n(u.split(/\s+/)).each2(function() {
				0 === this.indexOf("select2-") && e.push(this)
			})), u = n.trim(i.attr("class")), u && (u = "" + u, n(u.split(/\s+/)).each2(function() {
				0 !== this.indexOf("select2-") && (f = r(this), f && e.push(f))
			})), t.attr("class", e.join(" "))
		}

		function it(n, t, i, r) {
			var u = h(n.toUpperCase()).indexOf(h(t.toUpperCase())),
				f = t.length;
			return 0 > u ? (i.push(r(n)), void 0) : (i.push(r(n.substring(0, u))), i.push("<span class='select2-match'>"), i.push(r(n.substring(u, u + f))), i.push("<\/span>"), i.push(r(n.substring(u + f, n.length))), void 0)
		}

		function rt(n) {
			var t = {
				"\\": "&#92;",
				"&": "&amp;",
				"<": "&lt;",
				">": "&gt;",
				'"': "&quot;",
				"'": "&#39;",
				"/": "&#47;"
			};
			return String(n).replace(/[&<>"'\/\\]/g, function(n) {
				return t[n]
			})
		}

		function ut(i) {
			var f, r = null,
				e = i.quietMillis || 100,
				o = i.url,
				u = this;
			return function(s) {
				window.clearTimeout(f), f = window.setTimeout(function() {
					var e = i.data,
						f = o,
						c = i.transport || n.fn.select2.ajaxDefaults.transport,
						l = {
							type: i.type || "GET",
							cache: i.cache || !1,
							jsonpCallback: i.jsonpCallback || t,
							dataType: i.dataType || "json"
						},
						h = n.extend({}, n.fn.select2.ajaxDefaults.params, l);
					e = e ? e.call(u, s.term, s.page, s.context) : null, f = "function" == typeof f ? f.call(u, s.term, s.page, s.context) : f, r && "function" == typeof r.abort && r.abort(), i.params && (n.isFunction(i.params) ? n.extend(h, i.params.call(u)) : n.extend(h, i.params)), n.extend(h, {
						url: f,
						dataType: i.dataType,
						data: e,
						success: function(n) {
							var t = i.results(n, s.page, s);
							s.callback(t)
						},
						error: function(n, t, i) {
							var r = {
								hasError: !0,
								jqXHR: n,
								textStatus: t,
								errorThrown: i
							};
							s.callback(r)
						}
					}), r = c.call(u, h)
				}, e)
			}
		}

		function ft(t) {
			var e, u, i = t,
				r = function(n) {
					return "" + n.text
				},
				f;
			return n.isArray(i) && (u = i, i = {
					results: u
				}), n.isFunction(i) === !1 && (u = i, i = function() {
					return u
				}), f = i(), f.text && (r = f.text, n.isFunction(r) || (e = f.text, r = function(n) {
					return n[e]
				})),
				function(t) {
					var u, f = t.term,
						e = {
							results: []
						};
					return "" === f ? (t.callback(i()), void 0) : (u = function(i, e) {
						var o, s;
						if (i = i[0], i.children) {
							o = {};
							for (s in i) i.hasOwnProperty(s) && (o[s] = i[s]);
							o.children = [], n(i.children).each2(function(n, t) {
								u(t, o.children)
							}), (o.children.length || t.matcher(f, r(o), i)) && e.push(o)
						} else t.matcher(f, r(i), i) && e.push(i)
					}, n(i().results).each2(function(n, t) {
						u(t, e.results)
					}), t.callback(e), void 0)
				}
		}

		function et(i) {
			var r = n.isFunction(i);
			return function(u) {
				var f = u.term,
					e = {
						results: []
					},
					o = r ? i(u) : i;
				n.isArray(o) && (n(o).each(function() {
					var n = this.text !== t,
						i = n ? this.text : this;
					("" === f || u.matcher(f, i)) && e.results.push(n ? this : {
						id: this,
						text: this
					})
				}), u.callback(e))
			}
		}

		function o(t, i) {
			if (n.isFunction(t)) return !0;
			if (!t) return !1;
			if ("string" == typeof t) return !0;
			throw new Error(i + " must be a string, function, or falsy value");
		}

		function u(t, i) {
			if (n.isFunction(t)) {
				var r = Array.prototype.slice.call(arguments, 2);
				return t.apply(i, r)
			}
			return t
		}

		function ot(t) {
			var i = 0;
			return n.each(t, function(n, t) {
				t.children ? i += ot(t.children) : i++
			}), i
		}

		function bt(n, i, r, u) {
			var e, s, o, h, c, a = n,
				l = !1;
			if (!u.createSearchChoice || !u.tokenSeparators || u.tokenSeparators.length < 1) return t;
			for (;;) {
				for (s = -1, o = 0, h = u.tokenSeparators.length; h > o && (c = u.tokenSeparators[o], s = n.indexOf(c), !(s >= 0)); o++);
				if (0 > s) break;
				if (e = n.substring(0, s), n = n.substring(s + c.length), e.length > 0 && (e = u.createSearchChoice.call(this, e, i), e !== t && null !== e && u.id(e) !== t && null !== u.id(e))) {
					for (l = !1, o = 0, h = i.length; h > o; o++)
						if (f(u.id(e), u.id(i[o]))) {
							l = !0;
							break
						}
					l || r(e)
				}
			}
			if (a !== n) return n
		}

		function y() {
			var t = this;
			n.each(arguments, function(n, i) {
				t[i].remove(), t[i] = null
			})
		}

		function p(t, i) {
			var r = function() {};
			return r.prototype = new t, r.prototype.constructor = r, r.prototype.parent = t.prototype, r.prototype = n.extend(r.prototype, i), r
		}
		if (window.Select2 === t) {
			var a, st, ht, c, s, w, b, k = {
					x: 0,
					y: 0
				},
				i = {
					TAB: 9,
					ENTER: 13,
					ESC: 27,
					SPACE: 32,
					LEFT: 37,
					UP: 38,
					RIGHT: 39,
					DOWN: 40,
					SHIFT: 16,
					CTRL: 17,
					ALT: 18,
					PAGE_UP: 33,
					PAGE_DOWN: 34,
					HOME: 36,
					END: 35,
					BACKSPACE: 8,
					DELETE: 46,
					isArrow: function(n) {
						switch (n = n.which ? n.which : n) {
							case i.LEFT:
							case i.RIGHT:
							case i.UP:
							case i.DOWN:
								return !0
						}
						return !1
					},
					isControl: function(n) {
						var t = n.which;
						switch (t) {
							case i.SHIFT:
							case i.CTRL:
							case i.ALT:
								return !0
						}
						return n.metaKey ? !0 : !1
					},
					isFunctionKey: function(n) {
						return n = n.which ? n.which : n, n >= 112 && 123 >= n
					}
				},
				kt = "<div class='select2-measure-scrollbar'><\/div>",
				dt = {
					"Ⓐ": "A",
					"Ａ": "A",
					"À": "A",
					"Á": "A",
					"Â": "A",
					"Ầ": "A",
					"Ấ": "A",
					"Ẫ": "A",
					"Ẩ": "A",
					"Ã": "A",
					"Ā": "A",
					"Ă": "A",
					"Ằ": "A",
					"Ắ": "A",
					"Ẵ": "A",
					"Ẳ": "A",
					"Ȧ": "A",
					"Ǡ": "A",
					"Ä": "A",
					"Ǟ": "A",
					"Ả": "A",
					"Å": "A",
					"Ǻ": "A",
					"Ǎ": "A",
					"Ȁ": "A",
					"Ȃ": "A",
					"Ạ": "A",
					"Ậ": "A",
					"Ặ": "A",
					"Ḁ": "A",
					"Ą": "A",
					"Ⱥ": "A",
					"Ɐ": "A",
					"Ꜳ": "AA",
					"Æ": "AE",
					"Ǽ": "AE",
					"Ǣ": "AE",
					"Ꜵ": "AO",
					"Ꜷ": "AU",
					"Ꜹ": "AV",
					"Ꜻ": "AV",
					"Ꜽ": "AY",
					"Ⓑ": "B",
					"Ｂ": "B",
					"Ḃ": "B",
					"Ḅ": "B",
					"Ḇ": "B",
					"Ƀ": "B",
					"Ƃ": "B",
					"Ɓ": "B",
					"Ⓒ": "C",
					"Ｃ": "C",
					"Ć": "C",
					"Ĉ": "C",
					"Ċ": "C",
					"Č": "C",
					"Ç": "C",
					"Ḉ": "C",
					"Ƈ": "C",
					"Ȼ": "C",
					"Ꜿ": "C",
					"Ⓓ": "D",
					"Ｄ": "D",
					"Ḋ": "D",
					"Ď": "D",
					"Ḍ": "D",
					"Ḑ": "D",
					"Ḓ": "D",
					"Ḏ": "D",
					"Đ": "D",
					"Ƌ": "D",
					"Ɗ": "D",
					"Ɖ": "D",
					"Ꝺ": "D",
					"Ǳ": "DZ",
					"Ǆ": "DZ",
					"ǲ": "Dz",
					"ǅ": "Dz",
					"Ⓔ": "E",
					"Ｅ": "E",
					"È": "E",
					"É": "E",
					"Ê": "E",
					"Ề": "E",
					"Ế": "E",
					"Ễ": "E",
					"Ể": "E",
					"Ẽ": "E",
					"Ē": "E",
					"Ḕ": "E",
					"Ḗ": "E",
					"Ĕ": "E",
					"Ė": "E",
					"Ë": "E",
					"Ẻ": "E",
					"Ě": "E",
					"Ȅ": "E",
					"Ȇ": "E",
					"Ẹ": "E",
					"Ệ": "E",
					"Ȩ": "E",
					"Ḝ": "E",
					"Ę": "E",
					"Ḙ": "E",
					"Ḛ": "E",
					"Ɛ": "E",
					"Ǝ": "E",
					"Ⓕ": "F",
					"Ｆ": "F",
					"Ḟ": "F",
					"Ƒ": "F",
					"Ꝼ": "F",
					"Ⓖ": "G",
					"Ｇ": "G",
					"Ǵ": "G",
					"Ĝ": "G",
					"Ḡ": "G",
					"Ğ": "G",
					"Ġ": "G",
					"Ǧ": "G",
					"Ģ": "G",
					"Ǥ": "G",
					"Ɠ": "G",
					"Ꞡ": "G",
					"Ᵹ": "G",
					"Ꝿ": "G",
					"Ⓗ": "H",
					"Ｈ": "H",
					"Ĥ": "H",
					"Ḣ": "H",
					"Ḧ": "H",
					"Ȟ": "H",
					"Ḥ": "H",
					"Ḩ": "H",
					"Ḫ": "H",
					"Ħ": "H",
					"Ⱨ": "H",
					"Ⱶ": "H",
					"Ɥ": "H",
					"Ⓘ": "I",
					"Ｉ": "I",
					"Ì": "I",
					"Í": "I",
					"Î": "I",
					"Ĩ": "I",
					"Ī": "I",
					"Ĭ": "I",
					"İ": "I",
					"Ï": "I",
					"Ḯ": "I",
					"Ỉ": "I",
					"Ǐ": "I",
					"Ȉ": "I",
					"Ȋ": "I",
					"Ị": "I",
					"Į": "I",
					"Ḭ": "I",
					"Ɨ": "I",
					"Ⓙ": "J",
					"Ｊ": "J",
					"Ĵ": "J",
					"Ɉ": "J",
					"Ⓚ": "K",
					"Ｋ": "K",
					"Ḱ": "K",
					"Ǩ": "K",
					"Ḳ": "K",
					"Ķ": "K",
					"Ḵ": "K",
					"Ƙ": "K",
					"Ⱪ": "K",
					"Ꝁ": "K",
					"Ꝃ": "K",
					"Ꝅ": "K",
					"Ꞣ": "K",
					"Ⓛ": "L",
					"Ｌ": "L",
					"Ŀ": "L",
					"Ĺ": "L",
					"Ľ": "L",
					"Ḷ": "L",
					"Ḹ": "L",
					"Ļ": "L",
					"Ḽ": "L",
					"Ḻ": "L",
					"Ł": "L",
					"Ƚ": "L",
					"Ɫ": "L",
					"Ⱡ": "L",
					"Ꝉ": "L",
					"Ꝇ": "L",
					"Ꞁ": "L",
					"Ǉ": "LJ",
					"ǈ": "Lj",
					"Ⓜ": "M",
					"Ｍ": "M",
					"Ḿ": "M",
					"Ṁ": "M",
					"Ṃ": "M",
					"Ɱ": "M",
					"Ɯ": "M",
					"Ⓝ": "N",
					"Ｎ": "N",
					"Ǹ": "N",
					"Ń": "N",
					"Ñ": "N",
					"Ṅ": "N",
					"Ň": "N",
					"Ṇ": "N",
					"Ņ": "N",
					"Ṋ": "N",
					"Ṉ": "N",
					"Ƞ": "N",
					"Ɲ": "N",
					"Ꞑ": "N",
					"Ꞥ": "N",
					"Ǌ": "NJ",
					"ǋ": "Nj",
					"Ⓞ": "O",
					"Ｏ": "O",
					"Ò": "O",
					"Ó": "O",
					"Ô": "O",
					"Ồ": "O",
					"Ố": "O",
					"Ỗ": "O",
					"Ổ": "O",
					"Õ": "O",
					"Ṍ": "O",
					"Ȭ": "O",
					"Ṏ": "O",
					"Ō": "O",
					"Ṑ": "O",
					"Ṓ": "O",
					"Ŏ": "O",
					"Ȯ": "O",
					"Ȱ": "O",
					"Ö": "O",
					"Ȫ": "O",
					"Ỏ": "O",
					"Ő": "O",
					"Ǒ": "O",
					"Ȍ": "O",
					"Ȏ": "O",
					"Ơ": "O",
					"Ờ": "O",
					"Ớ": "O",
					"Ỡ": "O",
					"Ở": "O",
					"Ợ": "O",
					"Ọ": "O",
					"Ộ": "O",
					"Ǫ": "O",
					"Ǭ": "O",
					"Ø": "O",
					"Ǿ": "O",
					"Ɔ": "O",
					"Ɵ": "O",
					"Ꝋ": "O",
					"Ꝍ": "O",
					"Ƣ": "OI",
					"Ꝏ": "OO",
					"Ȣ": "OU",
					"Ⓟ": "P",
					"Ｐ": "P",
					"Ṕ": "P",
					"Ṗ": "P",
					"Ƥ": "P",
					"Ᵽ": "P",
					"Ꝑ": "P",
					"Ꝓ": "P",
					"Ꝕ": "P",
					"Ⓠ": "Q",
					"Ｑ": "Q",
					"Ꝗ": "Q",
					"Ꝙ": "Q",
					"Ɋ": "Q",
					"Ⓡ": "R",
					"Ｒ": "R",
					"Ŕ": "R",
					"Ṙ": "R",
					"Ř": "R",
					"Ȑ": "R",
					"Ȓ": "R",
					"Ṛ": "R",
					"Ṝ": "R",
					"Ŗ": "R",
					"Ṟ": "R",
					"Ɍ": "R",
					"Ɽ": "R",
					"Ꝛ": "R",
					"Ꞧ": "R",
					"Ꞃ": "R",
					"Ⓢ": "S",
					"Ｓ": "S",
					"ẞ": "S",
					"Ś": "S",
					"Ṥ": "S",
					"Ŝ": "S",
					"Ṡ": "S",
					"Š": "S",
					"Ṧ": "S",
					"Ṣ": "S",
					"Ṩ": "S",
					"Ș": "S",
					"Ş": "S",
					"Ȿ": "S",
					"Ꞩ": "S",
					"Ꞅ": "S",
					"Ⓣ": "T",
					"Ｔ": "T",
					"Ṫ": "T",
					"Ť": "T",
					"Ṭ": "T",
					"Ț": "T",
					"Ţ": "T",
					"Ṱ": "T",
					"Ṯ": "T",
					"Ŧ": "T",
					"Ƭ": "T",
					"Ʈ": "T",
					"Ⱦ": "T",
					"Ꞇ": "T",
					"Ꜩ": "TZ",
					"Ⓤ": "U",
					"Ｕ": "U",
					"Ù": "U",
					"Ú": "U",
					"Û": "U",
					"Ũ": "U",
					"Ṹ": "U",
					"Ū": "U",
					"Ṻ": "U",
					"Ŭ": "U",
					"Ü": "U",
					"Ǜ": "U",
					"Ǘ": "U",
					"Ǖ": "U",
					"Ǚ": "U",
					"Ủ": "U",
					"Ů": "U",
					"Ű": "U",
					"Ǔ": "U",
					"Ȕ": "U",
					"Ȗ": "U",
					"Ư": "U",
					"Ừ": "U",
					"Ứ": "U",
					"Ữ": "U",
					"Ử": "U",
					"Ự": "U",
					"Ụ": "U",
					"Ṳ": "U",
					"Ų": "U",
					"Ṷ": "U",
					"Ṵ": "U",
					"Ʉ": "U",
					"Ⓥ": "V",
					"Ｖ": "V",
					"Ṽ": "V",
					"Ṿ": "V",
					"Ʋ": "V",
					"Ꝟ": "V",
					"Ʌ": "V",
					"Ꝡ": "VY",
					"Ⓦ": "W",
					"Ｗ": "W",
					"Ẁ": "W",
					"Ẃ": "W",
					"Ŵ": "W",
					"Ẇ": "W",
					"Ẅ": "W",
					"Ẉ": "W",
					"Ⱳ": "W",
					"Ⓧ": "X",
					"Ｘ": "X",
					"Ẋ": "X",
					"Ẍ": "X",
					"Ⓨ": "Y",
					"Ｙ": "Y",
					"Ỳ": "Y",
					"Ý": "Y",
					"Ŷ": "Y",
					"Ỹ": "Y",
					"Ȳ": "Y",
					"Ẏ": "Y",
					"Ÿ": "Y",
					"Ỷ": "Y",
					"Ỵ": "Y",
					"Ƴ": "Y",
					"Ɏ": "Y",
					"Ỿ": "Y",
					"Ⓩ": "Z",
					"Ｚ": "Z",
					"Ź": "Z",
					"Ẑ": "Z",
					"Ż": "Z",
					"Ž": "Z",
					"Ẓ": "Z",
					"Ẕ": "Z",
					"Ƶ": "Z",
					"Ȥ": "Z",
					"Ɀ": "Z",
					"Ⱬ": "Z",
					"Ꝣ": "Z",
					"ⓐ": "a",
					"ａ": "a",
					"ẚ": "a",
					"à": "a",
					"á": "a",
					"â": "a",
					"ầ": "a",
					"ấ": "a",
					"ẫ": "a",
					"ẩ": "a",
					"ã": "a",
					"ā": "a",
					"ă": "a",
					"ằ": "a",
					"ắ": "a",
					"ẵ": "a",
					"ẳ": "a",
					"ȧ": "a",
					"ǡ": "a",
					"ä": "a",
					"ǟ": "a",
					"ả": "a",
					"å": "a",
					"ǻ": "a",
					"ǎ": "a",
					"ȁ": "a",
					"ȃ": "a",
					"ạ": "a",
					"ậ": "a",
					"ặ": "a",
					"ḁ": "a",
					"ą": "a",
					"ⱥ": "a",
					"ɐ": "a",
					"ꜳ": "aa",
					"æ": "ae",
					"ǽ": "ae",
					"ǣ": "ae",
					"ꜵ": "ao",
					"ꜷ": "au",
					"ꜹ": "av",
					"ꜻ": "av",
					"ꜽ": "ay",
					"ⓑ": "b",
					"ｂ": "b",
					"ḃ": "b",
					"ḅ": "b",
					"ḇ": "b",
					"ƀ": "b",
					"ƃ": "b",
					"ɓ": "b",
					"ⓒ": "c",
					"ｃ": "c",
					"ć": "c",
					"ĉ": "c",
					"ċ": "c",
					"č": "c",
					"ç": "c",
					"ḉ": "c",
					"ƈ": "c",
					"ȼ": "c",
					"ꜿ": "c",
					"ↄ": "c",
					"ⓓ": "d",
					"ｄ": "d",
					"ḋ": "d",
					"ď": "d",
					"ḍ": "d",
					"ḑ": "d",
					"ḓ": "d",
					"ḏ": "d",
					"đ": "d",
					"ƌ": "d",
					"ɖ": "d",
					"ɗ": "d",
					"ꝺ": "d",
					"ǳ": "dz",
					"ǆ": "dz",
					"ⓔ": "e",
					"ｅ": "e",
					"è": "e",
					"é": "e",
					"ê": "e",
					"ề": "e",
					"ế": "e",
					"ễ": "e",
					"ể": "e",
					"ẽ": "e",
					"ē": "e",
					"ḕ": "e",
					"ḗ": "e",
					"ĕ": "e",
					"ė": "e",
					"ë": "e",
					"ẻ": "e",
					"ě": "e",
					"ȅ": "e",
					"ȇ": "e",
					"ẹ": "e",
					"ệ": "e",
					"ȩ": "e",
					"ḝ": "e",
					"ę": "e",
					"ḙ": "e",
					"ḛ": "e",
					"ɇ": "e",
					"ɛ": "e",
					"ǝ": "e",
					"ⓕ": "f",
					"ｆ": "f",
					"ḟ": "f",
					"ƒ": "f",
					"ꝼ": "f",
					"ⓖ": "g",
					"ｇ": "g",
					"ǵ": "g",
					"ĝ": "g",
					"ḡ": "g",
					"ğ": "g",
					"ġ": "g",
					"ǧ": "g",
					"ģ": "g",
					"ǥ": "g",
					"ɠ": "g",
					"ꞡ": "g",
					"ᵹ": "g",
					"ꝿ": "g",
					"ⓗ": "h",
					"ｈ": "h",
					"ĥ": "h",
					"ḣ": "h",
					"ḧ": "h",
					"ȟ": "h",
					"ḥ": "h",
					"ḩ": "h",
					"ḫ": "h",
					"ẖ": "h",
					"ħ": "h",
					"ⱨ": "h",
					"ⱶ": "h",
					"ɥ": "h",
					"ƕ": "hv",
					"ⓘ": "i",
					"ｉ": "i",
					"ì": "i",
					"í": "i",
					"î": "i",
					"ĩ": "i",
					"ī": "i",
					"ĭ": "i",
					"ï": "i",
					"ḯ": "i",
					"ỉ": "i",
					"ǐ": "i",
					"ȉ": "i",
					"ȋ": "i",
					"ị": "i",
					"į": "i",
					"ḭ": "i",
					"ɨ": "i",
					"ı": "i",
					"ⓙ": "j",
					"ｊ": "j",
					"ĵ": "j",
					"ǰ": "j",
					"ɉ": "j",
					"ⓚ": "k",
					"ｋ": "k",
					"ḱ": "k",
					"ǩ": "k",
					"ḳ": "k",
					"ķ": "k",
					"ḵ": "k",
					"ƙ": "k",
					"ⱪ": "k",
					"ꝁ": "k",
					"ꝃ": "k",
					"ꝅ": "k",
					"ꞣ": "k",
					"ⓛ": "l",
					"ｌ": "l",
					"ŀ": "l",
					"ĺ": "l",
					"ľ": "l",
					"ḷ": "l",
					"ḹ": "l",
					"ļ": "l",
					"ḽ": "l",
					"ḻ": "l",
					"ſ": "l",
					"ł": "l",
					"ƚ": "l",
					"ɫ": "l",
					"ⱡ": "l",
					"ꝉ": "l",
					"ꞁ": "l",
					"ꝇ": "l",
					"ǉ": "lj",
					"ⓜ": "m",
					"ｍ": "m",
					"ḿ": "m",
					"ṁ": "m",
					"ṃ": "m",
					"ɱ": "m",
					"ɯ": "m",
					"ⓝ": "n",
					"ｎ": "n",
					"ǹ": "n",
					"ń": "n",
					"ñ": "n",
					"ṅ": "n",
					"ň": "n",
					"ṇ": "n",
					"ņ": "n",
					"ṋ": "n",
					"ṉ": "n",
					"ƞ": "n",
					"ɲ": "n",
					"ŉ": "n",
					"ꞑ": "n",
					"ꞥ": "n",
					"ǌ": "nj",
					"ⓞ": "o",
					"ｏ": "o",
					"ò": "o",
					"ó": "o",
					"ô": "o",
					"ồ": "o",
					"ố": "o",
					"ỗ": "o",
					"ổ": "o",
					"õ": "o",
					"ṍ": "o",
					"ȭ": "o",
					"ṏ": "o",
					"ō": "o",
					"ṑ": "o",
					"ṓ": "o",
					"ŏ": "o",
					"ȯ": "o",
					"ȱ": "o",
					"ö": "o",
					"ȫ": "o",
					"ỏ": "o",
					"ő": "o",
					"ǒ": "o",
					"ȍ": "o",
					"ȏ": "o",
					"ơ": "o",
					"ờ": "o",
					"ớ": "o",
					"ỡ": "o",
					"ở": "o",
					"ợ": "o",
					"ọ": "o",
					"ộ": "o",
					"ǫ": "o",
					"ǭ": "o",
					"ø": "o",
					"ǿ": "o",
					"ɔ": "o",
					"ꝋ": "o",
					"ꝍ": "o",
					"ɵ": "o",
					"ƣ": "oi",
					"ȣ": "ou",
					"ꝏ": "oo",
					"ⓟ": "p",
					"ｐ": "p",
					"ṕ": "p",
					"ṗ": "p",
					"ƥ": "p",
					"ᵽ": "p",
					"ꝑ": "p",
					"ꝓ": "p",
					"ꝕ": "p",
					"ⓠ": "q",
					"ｑ": "q",
					"ɋ": "q",
					"ꝗ": "q",
					"ꝙ": "q",
					"ⓡ": "r",
					"ｒ": "r",
					"ŕ": "r",
					"ṙ": "r",
					"ř": "r",
					"ȑ": "r",
					"ȓ": "r",
					"ṛ": "r",
					"ṝ": "r",
					"ŗ": "r",
					"ṟ": "r",
					"ɍ": "r",
					"ɽ": "r",
					"ꝛ": "r",
					"ꞧ": "r",
					"ꞃ": "r",
					"ⓢ": "s",
					"ｓ": "s",
					"ß": "s",
					"ś": "s",
					"ṥ": "s",
					"ŝ": "s",
					"ṡ": "s",
					"š": "s",
					"ṧ": "s",
					"ṣ": "s",
					"ṩ": "s",
					"ș": "s",
					"ş": "s",
					"ȿ": "s",
					"ꞩ": "s",
					"ꞅ": "s",
					"ẛ": "s",
					"ⓣ": "t",
					"ｔ": "t",
					"ṫ": "t",
					"ẗ": "t",
					"ť": "t",
					"ṭ": "t",
					"ț": "t",
					"ţ": "t",
					"ṱ": "t",
					"ṯ": "t",
					"ŧ": "t",
					"ƭ": "t",
					"ʈ": "t",
					"ⱦ": "t",
					"ꞇ": "t",
					"ꜩ": "tz",
					"ⓤ": "u",
					"ｕ": "u",
					"ù": "u",
					"ú": "u",
					"û": "u",
					"ũ": "u",
					"ṹ": "u",
					"ū": "u",
					"ṻ": "u",
					"ŭ": "u",
					"ü": "u",
					"ǜ": "u",
					"ǘ": "u",
					"ǖ": "u",
					"ǚ": "u",
					"ủ": "u",
					"ů": "u",
					"ű": "u",
					"ǔ": "u",
					"ȕ": "u",
					"ȗ": "u",
					"ư": "u",
					"ừ": "u",
					"ứ": "u",
					"ữ": "u",
					"ử": "u",
					"ự": "u",
					"ụ": "u",
					"ṳ": "u",
					"ų": "u",
					"ṷ": "u",
					"ṵ": "u",
					"ʉ": "u",
					"ⓥ": "v",
					"ｖ": "v",
					"ṽ": "v",
					"ṿ": "v",
					"ʋ": "v",
					"ꝟ": "v",
					"ʌ": "v",
					"ꝡ": "vy",
					"ⓦ": "w",
					"ｗ": "w",
					"ẁ": "w",
					"ẃ": "w",
					"ŵ": "w",
					"ẇ": "w",
					"ẅ": "w",
					"ẘ": "w",
					"ẉ": "w",
					"ⱳ": "w",
					"ⓧ": "x",
					"ｘ": "x",
					"ẋ": "x",
					"ẍ": "x",
					"ⓨ": "y",
					"ｙ": "y",
					"ỳ": "y",
					"ý": "y",
					"ŷ": "y",
					"ỹ": "y",
					"ȳ": "y",
					"ẏ": "y",
					"ÿ": "y",
					"ỷ": "y",
					"ẙ": "y",
					"ỵ": "y",
					"ƴ": "y",
					"ɏ": "y",
					"ỿ": "y",
					"ⓩ": "z",
					"ｚ": "z",
					"ź": "z",
					"ẑ": "z",
					"ż": "z",
					"ž": "z",
					"ẓ": "z",
					"ẕ": "z",
					"ƶ": "z",
					"ȥ": "z",
					"ɀ": "z",
					"ⱬ": "z",
					"ꝣ": "z",
					"Ά": "Α",
					"Έ": "Ε",
					"Ή": "Η",
					"Ί": "Ι",
					"Ϊ": "Ι",
					"Ό": "Ο",
					"Ύ": "Υ",
					"Ϋ": "Υ",
					"Ώ": "Ω",
					"ά": "α",
					"έ": "ε",
					"ή": "η",
					"ί": "ι",
					"ϊ": "ι",
					"ΐ": "ι",
					"ό": "ο",
					"ύ": "υ",
					"ϋ": "υ",
					"ΰ": "υ",
					"ω": "ω",
					"ς": "σ"
				};
			w = n(document), c = function() {
				var n = 1;
				return function() {
					return n++
				}
			}(), a = p(Object, {
				bind: function(n) {
					var t = this;
					return function() {
						n.apply(t, arguments)
					}
				},
				init: function(i) {
					var f, e, o = ".select2-results",
						s, h;
					this.opts = i = this.prepareOpts(i), this.id = i.id, i.element.data("select2") !== t && null !== i.element.data("select2") && i.element.data("select2").destroy(), this.container = this.createContainer(), this.liveRegion = n(".select2-hidden-accessible"), 0 == this.liveRegion.length && (this.liveRegion = n("<span>", {
						role: "status",
						"aria-live": "polite"
					}).addClass("select2-hidden-accessible").appendTo(document.body)), this.containerId = "s2id_" + (i.element.attr("id") || "autogen" + c()), this.containerEventName = this.containerId.replace(/([.])/g, "_").replace(/([;&,\-\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g, "\\$1"), this.container.attr("id", this.containerId), this.container.attr("title", i.element.attr("title")), this.body = n(document.body), l(this.container, this.opts.element, this.opts.adaptContainerCssClass), this.container.attr("style", i.element.attr("style")), this.container.css(u(i.containerCss, this.opts.element)), this.container.addClass(u(i.containerCssClass, this.opts.element)), this.elementTabIndex = this.opts.element.attr("tabindex"), this.opts.element.data("select2", this).attr("tabindex", "-1").before(this.container).on("click.select2", r), this.container.data("select2", this), this.dropdown = this.container.find(".select2-drop"), l(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass), this.dropdown.addClass(u(i.dropdownCssClass, this.opts.element)), this.dropdown.data("select2", this), this.dropdown.on("click", r), this.results = f = this.container.find(o), this.search = e = this.container.find("input.select2-input"), this.queryCount = 0, this.resultsPage = 0, this.context = null, this.initContainer(), this.container.on("click", r), lt(this.results), this.dropdown.on("mousemove-filtered", o, this.bind(this.highlightUnderEvent)), this.dropdown.on("touchstart touchmove touchend", o, this.bind(function(n) {
						this._touchEvent = !0, this.highlightUnderEvent(n)
					})), this.dropdown.on("touchmove", o, this.bind(this.touchMoved)), this.dropdown.on("touchstart touchend", o, this.bind(this.clearTouchMoved)), this.dropdown.on("click", this.bind(function() {
						this._touchEvent && (this._touchEvent = !1, this.selectHighlighted())
					})), at(80, this.results), this.dropdown.on("scroll-debounced", o, this.bind(this.loadMoreIfNeeded)), n(this.container).on("change", ".select2-input", function(n) {
						n.stopPropagation()
					}), n(this.dropdown).on("change", ".select2-input", function(n) {
						n.stopPropagation()
					}), n.fn.mousewheel && f.mousewheel(function(n, t, i, u) {
						var e = f.scrollTop();
						u > 0 && 0 >= e - u ? (f.scrollTop(0), r(n)) : 0 > u && f.get(0).scrollHeight - f.scrollTop() + u <= f.height() && (f.scrollTop(f.get(0).scrollHeight - f.height()), r(n))
					}), nt(e), e.on("keyup-change input paste", this.bind(this.updateResults)), e.on("focus", function() {
						e.addClass("select2-focused")
					}), e.on("blur", function() {
						e.removeClass("select2-focused")
					}), this.dropdown.on("mouseup", o, this.bind(function(t) {
						n(t.target).closest(".select2-result-selectable").length > 0 && (this.highlightUnderEvent(t), this.selectHighlighted(t))
					})), this.dropdown.on("click mouseup mousedown touchstart touchend focusin", function(n) {
						n.stopPropagation()
					}), this.nextSearchTerm = t, n.isFunction(this.opts.initSelection) && (this.initSelection(), this.monitorSource()), null !== i.maximumInputLength && this.search.attr("maxlength", i.maximumInputLength), s = i.element.prop("disabled"), s === t && (s = !1), this.enable(!s), h = i.element.prop("readonly"), h === t && (h = !1), this.readonly(h), b = b || ct(), this.autofocus = i.element.prop("autofocus"), i.element.prop("autofocus", !1), this.autofocus && this.focus(), this.search.attr("placeholder", i.searchInputPlaceholder)
				},
				destroy: function() {
					var n = this.opts.element,
						i = n.data("select2"),
						r = this;
					this.close(), n.length && n[0].detachEvent && r._sync && n.each(function() {
						r._sync && this.detachEvent("onpropertychange", r._sync)
					}), this.propertyObserver && (this.propertyObserver.disconnect(), this.propertyObserver = null), this._sync = null, i !== t && (i.container.remove(), i.liveRegion.remove(), i.dropdown.remove(), n.show().removeData("select2").off(".select2").prop("autofocus", this.autofocus || !1), this.elementTabIndex ? n.attr({
						tabindex: this.elementTabIndex
					}) : n.removeAttr("tabindex"), n.show()), y.call(this, "container", "liveRegion", "dropdown", "results", "search")
				},
				optionToData: function(n) {
					return n.is("option") ? {
						id: n.prop("value"),
						text: n.text(),
						element: n.get(),
						css: n.attr("class"),
						disabled: n.prop("disabled"),
						locked: f(n.attr("locked"), "locked") || f(n.data("locked"), !0)
					} : n.is("optgroup") ? {
						text: n.attr("label"),
						children: [],
						element: n.get(),
						css: n.attr("class")
					} : void 0
				},
				prepareOpts: function(i) {
					var e, o, s, r, u = this;
					if (e = i.element, "select" === e.get(0).tagName.toLowerCase() && (this.select = o = i.element), o && n.each(["id", "multiple", "ajax", "query", "createSearchChoice", "initSelection", "data", "tags"], function() {
							if (this in i) throw new Error("Option '" + this + "' is not allowed for Select2 when attached to a <select> element.");
						}), i = n.extend({}, {
							populateResults: function(r, f, e) {
								var o, s = this.opts.id,
									h = this.liveRegion;
								o = function(r, f, l) {
									var p, nt, v, tt, b, k, a, y, w, d, g;
									for (r = i.sortResults(r, f, e), g = [], p = 0, nt = r.length; nt > p; p += 1) v = r[p], b = v.disabled === !0, tt = !b && s(v) !== t, k = v.children && v.children.length > 0, a = n("<li><\/li>"), a.addClass("select2-results-dept-" + l), a.addClass("select2-result"), a.addClass(tt ? "select2-result-selectable" : "select2-result-unselectable"), b && a.addClass("select2-disabled"), k && a.addClass("select2-result-with-children"), a.addClass(u.opts.formatResultCssClass(v)), a.attr("role", "presentation"), y = n(document.createElement("div")), y.addClass("select2-result-label"), y.attr("id", "select2-result-label-" + c()), y.attr("role", "option"), d = i.formatResult(v, y, e, u.opts.escapeMarkup), d !== t && (y.html(d), a.append(y)), k && (w = n("<ul><\/ul>"), w.addClass("select2-result-sub"), o(v.children, w, l + 1), a.append(w)), a.data("select2-data", v), g.push(a[0]);
									f.append(g), h.text(i.formatMatches(r.length))
								}, o(f, r, 0)
							}
						}, n.fn.select2.defaults, i), "function" != typeof i.id && (s = i.id, i.id = function(n) {
							return n[s]
						}), n.isArray(i.element.data("select2Tags"))) {
						if ("tags" in i) throw "tags specified as both an attribute 'data-select2-tags' and in options of Select2 " + i.element.attr("id");
						i.tags = i.element.data("select2Tags")
					}
					if (o ? (i.query = this.bind(function(n) {
							var i, r, f, o = {
									results: [],
									more: !1
								},
								s = n.term;
							f = function(t, i) {
								var r;
								t.is("option") ? n.matcher(s, t.text(), t) && i.push(u.optionToData(t)) : t.is("optgroup") && (r = u.optionToData(t), t.children().each2(function(n, t) {
									f(t, r.children)
								}), r.children.length > 0 && i.push(r))
							}, i = e.children(), this.getPlaceholder() !== t && i.length > 0 && (r = this.getPlaceholderOption(), r && (i = i.not(r))), i.each2(function(n, t) {
								f(t, o.results)
							}), n.callback(o)
						}), i.id = function(n) {
							return n.id
						}) : "query" in i || ("ajax" in i ? (r = i.element.data("ajax-url"), r && r.length > 0 && (i.ajax.url = r), i.query = ut.call(i.element, i.ajax)) : "data" in i ? i.query = ft(i.data) : "tags" in i && (i.query = et(i.tags), i.createSearchChoice === t && (i.createSearchChoice = function(t) {
							return {
								id: n.trim(t),
								text: n.trim(t)
							}
						}), i.initSelection === t && (i.initSelection = function(t, r) {
							var u = [];
							n(v(t.val(), i.separator, i.transformVal)).each(function() {
								var r = {
										id: this,
										text: this
									},
									t = i.tags;
								n.isFunction(t) && (t = t()), n(t).each(function() {
									if (f(this.id, r.id)) return (r = this, !1)
								}), u.push(r)
							}), r(u)
						}))), "function" != typeof i.query) throw "query function not defined for Select2 " + i.element.attr("id");
					if ("top" === i.createSearchChoicePosition) i.createSearchChoicePosition = function(n, t) {
						n.unshift(t)
					};
					else if ("bottom" === i.createSearchChoicePosition) i.createSearchChoicePosition = function(n, t) {
						n.push(t)
					};
					else if ("function" != typeof i.createSearchChoicePosition) throw "invalid createSearchChoicePosition option must be 'top', 'bottom' or a custom function";
					return i
				},
				monitorSource: function() {
					var r, i = this.opts.element,
						f = this;
					i.on("change.select2", this.bind(function() {
						this.opts.element.data("select2-change-triggered") !== !0 && this.initSelection()
					})), this._sync = this.bind(function() {
						var r = i.prop("disabled"),
							n;
						r === t && (r = !1), this.enable(!r), n = i.prop("readonly"), n === t && (n = !1), this.readonly(n), this.container && (l(this.container, this.opts.element, this.opts.adaptContainerCssClass), this.container.addClass(u(this.opts.containerCssClass, this.opts.element))), this.dropdown && (l(this.dropdown, this.opts.element, this.opts.adaptDropdownCssClass), this.dropdown.addClass(u(this.opts.dropdownCssClass, this.opts.element)))
					}), i.length && i[0].attachEvent && i.each(function() {
						this.attachEvent("onpropertychange", f._sync)
					}), r = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver, r !== t && (this.propertyObserver && (delete this.propertyObserver, this.propertyObserver = null), this.propertyObserver = new r(function(t) {
						n.each(t, f._sync)
					}), this.propertyObserver.observe(i.get(0), {
						attributes: !0,
						subtree: !1
					}))
				},
				triggerSelect: function(t) {
					var i = n.Event("select2-selecting", {
						val: this.id(t),
						object: t,
						choice: t
					});
					return this.opts.element.trigger(i), !i.isDefaultPrevented()
				},
				triggerChange: function(t) {
					t = t || {}, t = n.extend({}, t, {
						type: "change",
						val: this.val()
					}), this.opts.element.data("select2-change-triggered", !0), this.opts.element.trigger(t), this.opts.element.data("select2-change-triggered", !1), this.opts.element.click(), this.opts.blurOnChange && this.opts.element.blur()
				},
				isInterfaceEnabled: function() {
					return this.enabledInterface === !0
				},
				enableInterface: function() {
					var n = this._enabled && !this._readonly,
						t = !n;
					return n === this.enabledInterface ? !1 : (this.container.toggleClass("select2-container-disabled", t), this.close(), this.enabledInterface = n, !0)
				},
				enable: function(n) {
					n === t && (n = !0), this._enabled !== n && (this._enabled = n, this.opts.element.prop("disabled", !n), this.enableInterface())
				},
				disable: function() {
					this.enable(!1)
				},
				readonly: function(n) {
					n === t && (n = !1), this._readonly !== n && (this._readonly = n, this.opts.element.prop("readonly", n), this.enableInterface())
				},
				opened: function() {
					return this.container ? this.container.hasClass("select2-dropdown-open") : !1
				},
				positionDropdown: function() {
					var v, o, y, r, p, t = this.dropdown,
						l = this.container,
						i = l.offset(),
						w = l.outerHeight(!1),
						s = l.outerWidth(!1),
						h = t.outerHeight(!1),
						e = n(window),
						d = e.width(),
						g = e.height(),
						k = e.scrollLeft() + d,
						nt = e.scrollTop() + g,
						a = i.top + w,
						c = i.left,
						tt = nt >= a + h,
						it = i.top - h >= e.scrollTop(),
						f = t.outerWidth(!1),
						rt = function() {
							return k >= c + f
						},
						ut = function() {
							return i.left + k + l.outerWidth(!1) > f
						},
						ft = t.hasClass("select2-drop-above");
					ft ? (o = !0, !it && tt && (y = !0, o = !1)) : (o = !1, !tt && it && (y = !0, o = !0)), y && (t.hide(), i = this.container.offset(), w = this.container.outerHeight(!1), s = this.container.outerWidth(!1), h = t.outerHeight(!1), k = e.scrollLeft() + d, nt = e.scrollTop() + g, a = i.top + w, c = i.left, f = t.outerWidth(!1), t.show(), this.focusSearch()), this.opts.dropdownAutoWidth ? (p = n(".select2-results", t)[0], t.addClass("select2-drop-auto-width"), t.css("width", ""), f = t.outerWidth(!1) + (p.scrollHeight === p.clientHeight ? 0 : b.width), f > s ? s = f : f = s, h = t.outerHeight(!1)) : this.container.removeClass("select2-drop-auto-width"), "static" !== this.body.css("position") && (v = this.body.offset(), a -= v.top, c -= v.left), !rt() && ut() && (c = i.left + this.container.outerWidth(!1) - f), r = {
						left: c,
						width: s
					}, o ? (r.top = i.top - h, r.bottom = "auto", this.container.addClass("select2-drop-above"), t.addClass("select2-drop-above")) : (r.top = a, r.bottom = "auto", this.container.removeClass("select2-drop-above"), t.removeClass("select2-drop-above")), r = n.extend(r, u(this.opts.dropdownCss, this.opts.element)), t.css(r)
				},
				shouldOpen: function() {
					var t;
					return this.opened() ? !1 : this._enabled === !1 || this._readonly === !0 ? !1 : (t = n.Event("select2-opening"), this.opts.element.trigger(t), !t.isDefaultPrevented())
				},
				clearDropdownAlignmentPreference: function() {
					this.container.removeClass("select2-drop-above"), this.dropdown.removeClass("select2-drop-above")
				},
				open: function() {
					return this.shouldOpen() ? (this.opening(), w.on("mousemove.select2Event", function(n) {
						k.x = n.pageX, k.y = n.pageY
					}), !0) : !1
				},
				opening: function() {
					var t, i = this.containerEventName,
						u = "scroll." + i,
						f = "resize." + i,
						e = "orientationchange." + i,
						r;
					this.container.addClass("select2-dropdown-open").addClass("select2-container-active"), this.clearDropdownAlignmentPreference(), this.dropdown[0] !== this.body.children().last()[0] && this.dropdown.detach().appendTo(this.body), t = n("#select2-drop-mask"), 0 === t.length && (t = n(document.createElement("div")), t.attr("id", "select2-drop-mask").attr("class", "select2-drop-mask"), t.hide(), t.appendTo(this.body), t.on("mousedown touchstart click", function(i) {
						d(t);
						var r, u = n("#select2-drop");
						u.length > 0 && (r = u.data("select2"), r.opts.selectOnBlur && r.selectHighlighted({
							noFocus: !0
						}), r.close(), i.preventDefault(), i.stopPropagation())
					})), this.dropdown.prev()[0] !== t[0] && this.dropdown.before(t), n("#select2-drop").removeAttr("id"), this.dropdown.attr("id", "select2-drop"), t.show(), this.positionDropdown(), this.dropdown.show(), this.positionDropdown(), this.dropdown.addClass("select2-drop-active"), r = this, this.container.parents().add(window).each(function() {
						n(this).on(f + " " + u + " " + e, function() {
							r.opened() && r.positionDropdown()
						})
					})
				},
				close: function() {
					if (this.opened()) {
						var t = this.containerEventName,
							i = "scroll." + t,
							r = "resize." + t,
							u = "orientationchange." + t;
						this.container.parents().add(window).each(function() {
							n(this).off(i).off(r).off(u)
						}), this.clearDropdownAlignmentPreference(), n("#select2-drop-mask").hide(), this.dropdown.removeAttr("id"), this.dropdown.hide(), this.container.removeClass("select2-dropdown-open").removeClass("select2-container-active"), this.results.empty(), w.off("mousemove.select2Event"), this.clearSearch(), this.search.removeClass("select2-active"), this.opts.element.trigger(n.Event("select2-close"))
					}
				},
				externalSearch: function(n) {
					this.open(), this.search.val(n), this.updateResults(!1)
				},
				clearSearch: function() {},
				getMaximumSelectionSize: function() {
					return u(this.opts.maximumSelectionSize, this.opts.element)
				},
				ensureHighlightVisible: function() {
					var e, i, r, u, o, s, f, h, t = this.results;
					if (i = this.highlight(), !(0 > i)) {
						if (0 == i) return t.scrollTop(0), void 0;
						e = this.findHighlightableChoices().find(".select2-result-label"), r = n(e[i]), h = (r.offset() || {}).top || 0, u = h + r.outerHeight(!0), i === e.length - 1 && (f = t.find("li.select2-more-results"), f.length > 0 && (u = f.offset().top + f.outerHeight(!0))), o = t.offset().top + t.outerHeight(!1), u > o && t.scrollTop(t.scrollTop() + (u - o)), s = h - t.offset().top, 0 > s && "none" != r.css("display") && t.scrollTop(t.scrollTop() + s)
					}
				},
				findHighlightableChoices: function() {
					return this.results.find(".select2-result-selectable:not(.select2-disabled):not(.select2-selected)")
				},
				moveHighlight: function(t) {
					for (var r, u = this.findHighlightableChoices(), i = this.highlight(); i > -1 && i < u.length;)
						if (i += t, r = n(u[i]), r.hasClass("select2-result-selectable") && !r.hasClass("select2-disabled") && !r.hasClass("select2-selected")) {
							this.highlight(i);
							break
						}
				},
				highlight: function(t) {
					var i, u, r = this.findHighlightableChoices();
					return 0 === arguments.length ? e(r.filter(".select2-highlighted")[0], r.get()) : (t >= r.length && (t = r.length - 1), 0 > t && (t = 0), this.removeHighlight(), i = n(r[t]), i.addClass("select2-highlighted"), this.search.attr("aria-activedescendant", i.find(".select2-result-label").attr("id")), this.ensureHighlightVisible(), this.liveRegion.text(i.text()), u = i.data("select2-data"), u && this.opts.element.trigger({
						type: "select2-highlight",
						val: this.id(u),
						choice: u
					}), void 0)
				},
				removeHighlight: function() {
					this.results.find(".select2-highlighted").removeClass("select2-highlighted")
				},
				touchMoved: function() {
					this._touchMoved = !0
				},
				clearTouchMoved: function() {
					this._touchMoved = !1
				},
				countSelectableResults: function() {
					return this.findHighlightableChoices().length
				},
				highlightUnderEvent: function(t) {
					var i = n(t.target).closest(".select2-result-selectable"),
						r;
					i.length > 0 && !i.is(".select2-highlighted") ? (r = this.findHighlightableChoices(), this.highlight(r.index(i))) : 0 == i.length && this.removeHighlight()
				},
				loadMoreIfNeeded: function() {
					var f, t = this.results,
						i = t.find("li.select2-more-results"),
						r = this.resultsPage + 1,
						n = this,
						e = this.search.val(),
						o = this.context;
					0 !== i.length && (f = i.offset().top - t.offset().top - t.height(), f <= this.opts.loadMorePadding && (i.addClass("select2-active"), this.opts.query({
						element: this.opts.element,
						term: e,
						page: r,
						context: o,
						matcher: this.opts.matcher,
						callback: this.bind(function(f) {
							n.opened() && (n.opts.populateResults.call(this, t, f.results, {
								term: e,
								page: r,
								context: o
							}), n.postprocessResults(f, !1, !1), f.more === !0 ? (i.detach().appendTo(t).html(n.opts.escapeMarkup(u(n.opts.formatLoadMore, n.opts.element, r + 1))), window.setTimeout(function() {
								n.loadMoreIfNeeded()
							}, 10)) : i.remove(), n.positionDropdown(), n.resultsPage = r, n.context = f.context, this.opts.element.trigger({
								type: "select2-loaded",
								items: f
							}))
						})
					})))
				},
				tokenize: function() {},
				updateResults: function(i) {
					function y() {
						e.removeClass("select2-active"), s.positionDropdown(), c.find(".select2-no-results,.select2-selection-limit,.select2-searching").length ? s.liveRegion.text(c.text()) : s.liveRegion.text(s.opts.formatMatches(c.find('.select2-result-selectable:not(".select2-selected")').length))
					}

					function h(n) {
						c.html(n), y()
					}
					var v, l, p, e = this.search,
						c = this.results,
						r = this.opts,
						s = this,
						w = e.val(),
						b = n.data(this.container, "select2-last-term"),
						a;
					if ((i === !0 || !b || !f(w, b)) && (n.data(this.container, "select2-last-term", w), i === !0 || this.showSearchInput !== !1 && this.opened())) {
						if (p = ++this.queryCount, a = this.getMaximumSelectionSize(), a >= 1 && (v = this.data(), n.isArray(v) && v.length >= a && o(r.formatSelectionTooBig, "formatSelectionTooBig"))) return h("<li class='select2-selection-limit'>" + u(r.formatSelectionTooBig, r.element, a) + "<\/li>"), void 0;
						if (e.val().length < r.minimumInputLength) return o(r.formatInputTooShort, "formatInputTooShort") ? h("<li class='select2-no-results'>" + u(r.formatInputTooShort, r.element, e.val(), r.minimumInputLength) + "<\/li>") : h(""), i && this.showSearch && this.showSearch(!0), void 0;
						if (r.maximumInputLength && e.val().length > r.maximumInputLength) return o(r.formatInputTooLong, "formatInputTooLong") ? h("<li class='select2-no-results'>" + u(r.formatInputTooLong, r.element, e.val(), r.maximumInputLength) + "<\/li>") : h(""), void 0;
						r.formatSearching && 0 === this.findHighlightableChoices().length && h("<li class='select2-searching'>" + u(r.formatSearching, r.element) + "<\/li>"), e.addClass("select2-active"), this.removeHighlight(), l = this.tokenize(), l != t && null != l && e.val(l), this.resultsPage = 1, r.query({
							element: r.element,
							term: e.val(),
							page: this.resultsPage,
							context: null,
							matcher: r.matcher,
							callback: this.bind(function(l) {
								var a;
								if (p == this.queryCount) {
									if (!this.opened()) return this.search.removeClass("select2-active"), void 0;
									if (l.hasError !== t && o(r.formatAjaxError, "formatAjaxError")) return h("<li class='select2-ajax-error'>" + u(r.formatAjaxError, r.element, l.jqXHR, l.textStatus, l.errorThrown) + "<\/li>"), void 0;
									if (this.context = l.context === t ? null : l.context, this.opts.createSearchChoice && "" !== e.val() && (a = this.opts.createSearchChoice.call(s, e.val(), l.results), a !== t && null !== a && s.id(a) !== t && null !== s.id(a) && 0 === n(l.results).filter(function() {
											return f(s.id(this), s.id(a))
										}).length && this.opts.createSearchChoicePosition(l.results, a)), 0 === l.results.length && o(r.formatNoMatches, "formatNoMatches")) return h("<li class='select2-no-results'>" + u(r.formatNoMatches, r.element, e.val()) + "<\/li>"), void 0;
									c.empty(), s.opts.populateResults.call(this, c, l.results, {
										term: e.val(),
										page: this.resultsPage,
										context: null
									}), l.more === !0 && o(r.formatLoadMore, "formatLoadMore") && (c.append("<li class='select2-more-results'>" + r.escapeMarkup(u(r.formatLoadMore, r.element, this.resultsPage)) + "<\/li>"), window.setTimeout(function() {
										s.loadMoreIfNeeded()
									}, 10)), this.postprocessResults(l, i), y(), this.opts.element.trigger({
										type: "select2-loaded",
										items: l
									})
								}
							})
						})
					}
				},
				cancel: function() {
					this.close()
				},
				blur: function() {
					this.opts.selectOnBlur && this.selectHighlighted({
						noFocus: !0
					}), this.close(), this.container.removeClass("select2-container-active"), this.search[0] === document.activeElement && this.search.blur(), this.clearSearch(), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus")
				},
				focusSearch: function() {
					vt(this.search)
				},
				selectHighlighted: function(n) {
					if (this._touchMoved) return this.clearTouchMoved(), void 0;
					var i = this.highlight(),
						r = this.results.find(".select2-highlighted"),
						t = r.closest(".select2-result").data("select2-data");
					t ? (this.highlight(i), this.onSelect(t, n)) : n && n.noFocus && this.close()
				},
				getPlaceholder: function() {
					var n;
					return this.opts.element.attr("placeholder") || this.opts.element.attr("data-placeholder") || this.opts.element.data("placeholder") || this.opts.placeholder || ((n = this.getPlaceholderOption()) !== t ? n.text() : t)
				},
				getPlaceholderOption: function() {
					if (this.select) {
						var i = this.select.children("option").first();
						if (this.opts.placeholderOption !== t) return "first" === this.opts.placeholderOption && i || "function" == typeof this.opts.placeholderOption && this.opts.placeholderOption(this.select);
						if ("" === n.trim(i.text()) && "" === i.val()) return i
					}
				},
				initContainerWidth: function() {
					function r() {
						var i, f, r, u, e, o;
						if ("off" === this.opts.width) return null;
						if ("element" === this.opts.width) return 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px";
						if ("copy" === this.opts.width || "resolve" === this.opts.width) {
							if (i = this.opts.element.attr("style"), i !== t)
								for (f = i.split(";"), u = 0, e = f.length; e > u; u += 1)
									if (o = f[u].replace(/\s/g, ""), r = o.match(/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i), null !== r && r.length >= 1) return r[1];
							return "resolve" === this.opts.width ? (i = this.opts.element.css("width"), i.indexOf("%") > 0 ? i : 0 === this.opts.element.outerWidth(!1) ? "auto" : this.opts.element.outerWidth(!1) + "px") : null
						}
						return n.isFunction(this.opts.width) ? this.opts.width() : this.opts.width
					}
					var i = r.call(this);
					null !== i && this.container.css("width", i)
				}
			}), st = p(a, {
				createContainer: function() {
					return n(document.createElement("div")).attr({
						"class": "select2-container"
					}).html("<a href='javascript:void(0)' class='select2-choice' tabindex='-1'>   <span class='select2-chosen'>&#160;<\/span><abbr class='select2-search-choice-close'><\/abbr>   <span class='select2-arrow' role='presentation'><b role='presentation'><\/b><\/span><\/a><label for='' class='select2-offscreen'><\/label><input class='select2-focusser select2-offscreen' type='text' aria-haspopup='true' role='button' /><div class='select2-drop select2-display-none'>   <div class='select2-search'>       <label for='' class='select2-offscreen'><\/label>       <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input' role='combobox' aria-expanded='true'       aria-autocomplete='list' />   <\/div>   <ul class='select2-results' role='listbox'>   <\/ul><\/div>")
				},
				enableInterface: function() {
					this.parent.enableInterface.apply(this, arguments) && this.focusser.prop("disabled", !this.isInterfaceEnabled())
				},
				opening: function() {
					var i, r, u;
					this.opts.minimumResultsForSearch >= 0 && this.showSearch(!0), this.parent.opening.apply(this, arguments), this.showSearchInput !== !1 && this.search.val(this.focusser.val()), this.opts.shouldFocusInput(this) && (this.search.focus(), i = this.search.get(0), i.createTextRange ? (r = i.createTextRange(), r.collapse(!1), r.select()) : i.setSelectionRange && (u = this.search.val().length, i.setSelectionRange(u, u))), "" === this.search.val() && this.nextSearchTerm != t && (this.search.val(this.nextSearchTerm), this.search.select()), this.focusser.prop("disabled", !0).val(""), this.updateResults(!0), this.opts.element.trigger(n.Event("select2-open"))
				},
				close: function() {
					this.opened() && (this.parent.close.apply(this, arguments), this.focusser.prop("disabled", !1), this.opts.shouldFocusInput(this) && this.focusser.focus())
				},
				focus: function() {
					this.opened() ? this.close() : (this.focusser.prop("disabled", !1), this.opts.shouldFocusInput(this) && this.focusser.focus())
				},
				isFocused: function() {
					return this.container.hasClass("select2-container-active")
				},
				cancel: function() {
					this.parent.cancel.apply(this, arguments), this.focusser.prop("disabled", !1), this.opts.shouldFocusInput(this) && this.focusser.focus()
				},
				destroy: function() {
					n("label[for='" + this.focusser.attr("id") + "']").attr("for", this.opts.element.attr("id")), this.parent.destroy.apply(this, arguments), y.call(this, "selection", "focusser")
				},
				initContainer: function() {
					var t, f, e = this.container,
						s = this.dropdown,
						u = c(),
						o;
					this.opts.minimumResultsForSearch < 0 ? this.showSearch(!1) : this.showSearch(!0), this.selection = t = e.find(".select2-choice"), this.focusser = e.find(".select2-focusser"), t.find(".select2-chosen").attr("id", "select2-chosen-" + u), this.focusser.attr("aria-labelledby", "select2-chosen-" + u), this.results.attr("id", "select2-results-" + u), this.search.attr("aria-owns", "select2-results-" + u), this.focusser.attr("id", "s2id_autogen" + u), f = n("label[for='" + this.opts.element.attr("id") + "']"), this.opts.element.focus(this.bind(function() {
						this.focus()
					})), this.focusser.prev().text(f.text()).attr("for", this.focusser.attr("id")), o = this.opts.element.attr("title"), this.opts.element.attr("title", o || f.text()), this.focusser.attr("tabindex", this.elementTabIndex), this.search.attr("id", this.focusser.attr("id") + "_search"), this.search.prev().text(n("label[for='" + this.focusser.attr("id") + "']").text()).attr("for", this.search.attr("id")), this.search.on("keydown", this.bind(function(n) {
						if (this.isInterfaceEnabled() && 229 != n.keyCode) {
							if (n.which === i.PAGE_UP || n.which === i.PAGE_DOWN) return r(n), void 0;
							switch (n.which) {
								case i.UP:
								case i.DOWN:
									return this.moveHighlight(n.which === i.UP ? -1 : 1), r(n), void 0;
								case i.ENTER:
									return this.selectHighlighted(), r(n), void 0;
								case i.TAB:
									return this.selectHighlighted({
										noFocus: !0
									}), void 0;
								case i.ESC:
									return this.cancel(n), r(n), void 0
							}
						}
					})), this.search.on("blur", this.bind(function() {
						document.activeElement === this.body.get(0) && window.setTimeout(this.bind(function() {
							this.opened() && this.search.focus()
						}), 0)
					})), this.focusser.on("keydown", this.bind(function(n) {
						if (this.isInterfaceEnabled() && n.which !== i.TAB && !i.isControl(n) && !i.isFunctionKey(n) && n.which !== i.ESC) return this.opts.openOnEnter === !1 && n.which === i.ENTER ? (r(n), void 0) : n.which == i.DOWN || n.which == i.UP || n.which == i.ENTER && this.opts.openOnEnter ? n.altKey || n.ctrlKey || n.shiftKey || n.metaKey ? void 0 : (this.open(), r(n), void 0) : n.which == i.DELETE || n.which == i.BACKSPACE ? (this.opts.allowClear && this.clear(), r(n), void 0) : void 0
					})), nt(this.focusser), this.focusser.on("keyup-change input", this.bind(function(n) {
						if (this.opts.minimumResultsForSearch >= 0) {
							if (n.stopPropagation(), this.opened()) return;
							this.open()
						}
					})), t.on("mousedown touchstart", "abbr", this.bind(function(n) {
						this.isInterfaceEnabled() && (this.clear(), pt(n), this.close(), this.selection && this.selection.focus())
					})), t.on("mousedown touchstart", this.bind(function(i) {
						d(t), this.container.hasClass("select2-container-active") || this.opts.element.trigger(n.Event("select2-focus")), this.opened() ? this.close() : this.isInterfaceEnabled() && this.open(), r(i)
					})), s.on("mousedown touchstart", this.bind(function() {
						this.opts.shouldFocusInput(this) && this.search.focus()
					})), t.on("focus", this.bind(function(n) {
						r(n)
					})), this.focusser.on("focus", this.bind(function() {
						this.container.hasClass("select2-container-active") || this.opts.element.trigger(n.Event("select2-focus")), this.container.addClass("select2-container-active")
					})).on("blur", this.bind(function() {
						this.opened() || (this.container.removeClass("select2-container-active"), this.opts.element.trigger(n.Event("select2-blur")))
					})), this.search.on("focus", this.bind(function() {
						this.container.hasClass("select2-container-active") || this.opts.element.trigger(n.Event("select2-focus")), this.container.addClass("select2-container-active")
					})), this.initContainerWidth(), this.opts.element.hide(), this.setPlaceholder()
				},
				clear: function(t) {
					var i = this.selection.data("select2-data"),
						r, u;
					if (i) {
						if (r = n.Event("select2-clearing"), this.opts.element.trigger(r), r.isDefaultPrevented()) return;
						u = this.getPlaceholderOption(), this.opts.element.val(u ? u.val() : ""), this.selection.find(".select2-chosen").empty(), this.selection.removeData("select2-data"), this.setPlaceholder(), t !== !1 && (this.opts.element.trigger({
							type: "select2-removed",
							val: this.id(i),
							choice: i
						}), this.triggerChange({
							removed: i
						}))
					}
				},
				initSelection: function() {
					if (this.isPlaceholderOptionSelected()) this.updateSelection(null), this.close(), this.setPlaceholder();
					else {
						var n = this;
						this.opts.initSelection.call(null, this.opts.element, function(i) {
							i !== t && null !== i && (n.updateSelection(i), n.close(), n.setPlaceholder(), n.nextSearchTerm = n.opts.nextSearchTerm(i, n.search.val()))
						})
					}
				},
				isPlaceholderOptionSelected: function() {
					var n;
					return this.getPlaceholder() === t ? !1 : (n = this.getPlaceholderOption()) !== t && n.prop("selected") || "" === this.opts.element.val() || this.opts.element.val() === t || null === this.opts.element.val()
				},
				prepareOpts: function() {
					var t = this.parent.prepareOpts.apply(this, arguments),
						i = this;
					return "select" === t.element.get(0).tagName.toLowerCase() ? t.initSelection = function(n, t) {
						var r = n.find("option").filter(function() {
							return this.selected && !this.disabled
						});
						t(i.optionToData(r))
					} : "data" in t && (t.initSelection = t.initSelection || function(i, r) {
						var e = i.val(),
							u = null;
						t.query({
							matcher: function(n, i, r) {
								var o = f(e, t.id(r));
								return o && (u = r), o
							},
							callback: n.isFunction(r) ? function() {
								r(u)
							} : n.noop
						})
					}), t
				},
				getPlaceholder: function() {
					return this.select && this.getPlaceholderOption() === t ? t : this.parent.getPlaceholder.apply(this, arguments)
				},
				setPlaceholder: function() {
					var n = this.getPlaceholder();
					if (this.isPlaceholderOptionSelected() && n !== t) {
						if (this.select && this.getPlaceholderOption() === t) return;
						this.selection.find(".select2-chosen").html(this.opts.escapeMarkup(n)), this.selection.addClass("select2-default"), this.container.removeClass("select2-allowclear")
					}
				},
				postprocessResults: function(n, t, i) {
					var r = 0,
						e = this,
						u;
					(this.findHighlightableChoices().each2(function(n, t) {
						if (f(e.id(t.data("select2-data")), e.opts.element.val())) return (r = n, !1)
					}), i !== !1 && (t === !0 && r >= 0 ? this.highlight(r) : this.highlight(0)), t === !0) && (u = this.opts.minimumResultsForSearch, u >= 0 && this.showSearch(ot(n.results) >= u))
				},
				showSearch: function(t) {
					this.showSearchInput !== t && (this.showSearchInput = t, this.dropdown.find(".select2-search").toggleClass("select2-search-hidden", !t), this.dropdown.find(".select2-search").toggleClass("select2-offscreen", !t), n(this.dropdown, this.container).toggleClass("select2-with-searchbox", t))
				},
				onSelect: function(n, t) {
					if (this.triggerSelect(n)) {
						var i = this.opts.element.val(),
							r = this.data();
						this.opts.element.val(this.id(n)), this.updateSelection(n), this.opts.element.trigger({
							type: "select2-selected",
							val: this.id(n),
							choice: n
						}), this.nextSearchTerm = this.opts.nextSearchTerm(n, this.search.val()), this.close(), t && t.noFocus || !this.opts.shouldFocusInput(this) || this.focusser.focus(), f(i, this.id(n)) || this.triggerChange({
							added: n,
							removed: r
						})
					}
				},
				updateSelection: function(n) {
					var r, u, i = this.selection.find(".select2-chosen");
					this.selection.data("select2-data", n), i.empty(), null !== n && (r = this.opts.formatSelection(n, i, this.opts.escapeMarkup)), r !== t && i.append(r), u = this.opts.formatSelectionCssClass(n, i), u !== t && i.addClass(u), this.selection.removeClass("select2-default"), this.opts.allowClear && this.getPlaceholder() !== t && this.container.addClass("select2-allowclear")
				},
				val: function() {
					var i, r = !1,
						u = null,
						n = this,
						f = this.data();
					if (0 === arguments.length) return this.opts.element.val();
					if (i = arguments[0], arguments.length > 1 && (r = arguments[1]), this.select) this.select.val(i).find("option").filter(function() {
						return this.selected
					}).each2(function(t, i) {
						return u = n.optionToData(i), !1
					}), this.updateSelection(u), this.setPlaceholder(), r && this.triggerChange({
						added: u,
						removed: f
					});
					else {
						if (!i && 0 !== i) return this.clear(r), void 0;
						if (this.opts.initSelection === t) throw new Error("cannot call val() if initSelection() is not defined");
						this.opts.element.val(i), this.opts.initSelection(this.opts.element, function(t) {
							n.opts.element.val(t ? n.id(t) : ""), n.updateSelection(t), n.setPlaceholder(), r && n.triggerChange({
								added: t,
								removed: f
							})
						})
					}
				},
				clearSearch: function() {
					this.search.val(""), this.focusser.val("")
				},
				data: function(n) {
					var i, r = !1;
					return 0 === arguments.length ? (i = this.selection.data("select2-data"), i == t && (i = null), i) : (arguments.length > 1 && (r = arguments[1]), n ? (i = this.data(), this.opts.element.val(n ? this.id(n) : ""), this.updateSelection(n), r && this.triggerChange({
						added: n,
						removed: i
					})) : this.clear(r), void 0)
				}
			}), ht = p(a, {
				createContainer: function() {
					return n(document.createElement("div")).attr({
						"class": "select2-container select2-container-multi"
					}).html("<ul class='select2-choices'>  <li class='select2-search-field'>    <label for='' class='select2-offscreen'><\/label>    <input type='text' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' class='select2-input'>  <\/li><\/ul><div class='select2-drop select2-drop-multi select2-display-none'>   <ul class='select2-results'>   <\/ul><\/div>")
				},
				prepareOpts: function() {
					var t = this.parent.prepareOpts.apply(this, arguments),
						i = this;
					return "select" === t.element.get(0).tagName.toLowerCase() ? t.initSelection = function(n, t) {
						var r = [];
						n.find("option").filter(function() {
							return this.selected && !this.disabled
						}).each2(function(n, t) {
							r.push(i.optionToData(t))
						}), t(r)
					} : "data" in t && (t.initSelection = t.initSelection || function(i, r) {
						var e = v(i.val(), t.separator, t.transformVal),
							u = [];
						t.query({
							matcher: function(i, r, o) {
								var s = n.grep(e, function(n) {
									return f(n, t.id(o))
								}).length;
								return s && u.push(o), s
							},
							callback: n.isFunction(r) ? function() {
								for (var h, n, s, o = [], i = 0; i < e.length; i++)
									for (h = e[i], n = 0; n < u.length; n++)
										if (s = u[n], f(h, t.id(s))) {
											o.push(s), u.splice(n, 1);
											break
										}
								r(o)
							} : n.noop
						})
					}), t
				},
				selectChoice: function(n) {
					var t = this.container.find(".select2-search-choice-focus");
					t.length && n && n[0] == t[0] || (t.length && this.opts.element.trigger("choice-deselected", t), t.removeClass("select2-search-choice-focus"), n && n.length && (this.close(), n.addClass("select2-search-choice-focus"), this.opts.element.trigger("choice-selected", n)))
				},
				destroy: function() {
					n("label[for='" + this.search.attr("id") + "']").attr("for", this.opts.element.attr("id")), this.parent.destroy.apply(this, arguments), y.call(this, "searchContainer", "selection")
				},
				initContainer: function() {
					var t, u = ".select2-choices",
						f;
					this.searchContainer = this.container.find(".select2-search-field"), this.selection = t = this.container.find(u), f = this, this.selection.on("click", ".select2-container:not(.select2-container-disabled) .select2-search-choice:not(.select2-locked)", function() {
						f.search[0].focus(), f.selectChoice(n(this))
					}), this.search.attr("id", "s2id_autogen" + c()), this.search.prev().text(n("label[for='" + this.opts.element.attr("id") + "']").text()).attr("for", this.search.attr("id")), this.opts.element.focus(this.bind(function() {
						this.focus()
					})), this.search.on("input paste", this.bind(function() {
						this.search.attr("placeholder") && 0 == this.search.val().length || this.isInterfaceEnabled() && (this.opened() || this.open())
					})), this.search.attr("tabindex", this.elementTabIndex), this.keydowns = 0, this.search.on("keydown", this.bind(function(n) {
						var u;
						if (this.isInterfaceEnabled()) {
							++this.keydowns;
							var f = t.find(".select2-search-choice-focus"),
								o = f.prev(".select2-search-choice:not(.select2-locked)"),
								e = f.next(".select2-search-choice:not(.select2-locked)"),
								s = yt(this.search);
							if (f.length && (n.which == i.LEFT || n.which == i.RIGHT || n.which == i.BACKSPACE || n.which == i.DELETE || n.which == i.ENTER)) return u = f, n.which == i.LEFT && o.length ? u = o : n.which == i.RIGHT ? u = e.length ? e : null : n.which === i.BACKSPACE ? this.unselect(f.first()) && (this.search.width(10), u = o.length ? o : e) : n.which == i.DELETE ? this.unselect(f.first()) && (this.search.width(10), u = e.length ? e : null) : n.which == i.ENTER && (u = null), this.selectChoice(u), r(n), u && u.length || this.open(), void 0;
							if ((n.which === i.BACKSPACE && 1 == this.keydowns || n.which == i.LEFT) && 0 == s.offset && !s.length) return this.selectChoice(t.find(".select2-search-choice:not(.select2-locked)").last()), r(n), void 0;
							if (this.selectChoice(null), this.opened()) switch (n.which) {
								case i.UP:
								case i.DOWN:
									return this.moveHighlight(n.which === i.UP ? -1 : 1), r(n), void 0;
								case i.ENTER:
									return this.selectHighlighted(), r(n), void 0;
								case i.TAB:
									return this.selectHighlighted({
										noFocus: !0
									}), this.close(), void 0;
								case i.ESC:
									return this.cancel(n), r(n), void 0
							}
							if (n.which !== i.TAB && !i.isControl(n) && !i.isFunctionKey(n) && n.which !== i.BACKSPACE && n.which !== i.ESC) {
								if (n.which === i.ENTER) {
									if (this.opts.openOnEnter === !1) return;
									if (n.altKey || n.ctrlKey || n.shiftKey || n.metaKey) return
								}
								this.open(), (n.which === i.PAGE_UP || n.which === i.PAGE_DOWN) && r(n), n.which === i.ENTER && r(n)
							}
						}
					})), this.search.on("keyup", this.bind(function() {
						this.keydowns = 0, this.resizeSearch()
					})), this.search.on("blur", this.bind(function(t) {
						this.container.removeClass("select2-container-active"), this.search.removeClass("select2-focused"), this.selectChoice(null), this.opened() || this.clearSearch(), t.stopImmediatePropagation(), this.opts.element.trigger(n.Event("select2-blur"))
					})), this.container.on("click", u, this.bind(function(t) {
						this.isInterfaceEnabled() && (n(t.target).closest(".select2-search-choice").length > 0 || (this.selectChoice(null), this.clearPlaceholder(), this.container.hasClass("select2-container-active") || this.opts.element.trigger(n.Event("select2-focus")), this.open(), this.focusSearch(), t.preventDefault()))
					})), this.container.on("focus", u, this.bind(function() {
						this.isInterfaceEnabled() && (this.container.hasClass("select2-container-active") || this.opts.element.trigger(n.Event("select2-focus")), this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"), this.clearPlaceholder())
					})), this.initContainerWidth(), this.opts.element.hide(), this.clearSearch()
				},
				enableInterface: function() {
					this.parent.enableInterface.apply(this, arguments) && this.search.prop("disabled", !this.isInterfaceEnabled())
				},
				initSelection: function() {
					if ("" === this.opts.element.val() && "" === this.opts.element.text() && (this.updateSelection([]), this.close(), this.clearSearch()), this.select || "" !== this.opts.element.val()) {
						var n = this;
						this.opts.initSelection.call(null, this.opts.element, function(i) {
							i !== t && null !== i && (n.updateSelection(i), n.close(), n.clearSearch())
						})
					}
				},
				clearSearch: function() {
					var n = this.getPlaceholder(),
						i = this.getMaxSearchWidth();
					n !== t && 0 === this.getVal().length && this.search.hasClass("select2-focused") === !1 ? (this.search.val(n).addClass("select2-default"), this.search.width(i > 0 ? i : this.container.css("width"))) : this.search.val("").width(10)
				},
				clearPlaceholder: function() {
					this.search.hasClass("select2-default") && this.search.val("").removeClass("select2-default")
				},
				opening: function() {
					this.clearPlaceholder(), this.resizeSearch(), this.parent.opening.apply(this, arguments), this.focusSearch(), "" === this.search.val() && this.nextSearchTerm != t && (this.search.val(this.nextSearchTerm), this.search.select()), this.updateResults(!0), this.opts.shouldFocusInput(this) && this.search.focus(), this.opts.element.trigger(n.Event("select2-open"))
				},
				close: function() {
					this.opened() && this.parent.close.apply(this, arguments)
				},
				focus: function() {
					this.close(), this.search.focus()
				},
				isFocused: function() {
					return this.search.hasClass("select2-focused")
				},
				updateSelection: function(t) {
					var r = [],
						u = [],
						i = this;
					n(t).each(function() {
						e(i.id(this), r) < 0 && (r.push(i.id(this)), u.push(this))
					}), t = u, this.selection.find(".select2-search-choice").remove(), n(t).each(function() {
						i.addSelectedChoice(this)
					}), i.postprocessResults()
				},
				tokenize: function() {
					var n = this.search.val();
					n = this.opts.tokenizer.call(this, n, this.data(), this.bind(this.onSelect), this.opts), null != n && n != t && (this.search.val(n), n.length > 0 && this.open())
				},
				onSelect: function(n, i) {
					this.triggerSelect(n) && "" !== n.text && (this.addSelectedChoice(n), this.opts.element.trigger({
						type: "selected",
						val: this.id(n),
						choice: n
					}), this.nextSearchTerm = this.opts.nextSearchTerm(n, this.search.val()), this.clearSearch(), this.updateResults(), (this.select || !this.opts.closeOnSelect) && this.postprocessResults(n, !1, this.opts.closeOnSelect === !0), this.opts.closeOnSelect ? (this.close(), this.search.width(10)) : this.countSelectableResults() > 0 ? (this.search.width(10), this.resizeSearch(), this.getMaximumSelectionSize() > 0 && this.val().length >= this.getMaximumSelectionSize() ? this.updateResults(!0) : this.nextSearchTerm != t && (this.search.val(this.nextSearchTerm), this.updateResults(), this.search.select()), this.positionDropdown()) : (this.close(), this.search.width(10)), this.triggerChange({
						added: n
					}), i && i.noFocus || this.focusSearch())
				},
				cancel: function() {
					this.close(), this.focusSearch()
				},
				addSelectedChoice: function(i) {
					var f, e, o = !i.locked,
						h = n("<li class='select2-search-choice'>    <div><\/div>    <a href='#' class='select2-search-choice-close' tabindex='-1'><\/a><\/li>"),
						c = n("<li class='select2-search-choice select2-locked'><div><\/div><\/li>"),
						u = o ? h : c,
						l = this.id(i),
						s = this.getVal();
					f = this.opts.formatSelection(i, u.find("div"), this.opts.escapeMarkup), f != t && u.find("div").replaceWith(n("<div><\/div>").html(f)), e = this.opts.formatSelectionCssClass(i, u.find("div")), e != t && u.addClass(e), o && u.find(".select2-search-choice-close").on("mousedown", r).on("click dblclick", this.bind(function(t) {
						this.isInterfaceEnabled() && (this.unselect(n(t.target)), this.selection.find(".select2-search-choice-focus").removeClass("select2-search-choice-focus"), r(t), this.close(), this.focusSearch())
					})).on("focus", this.bind(function() {
						this.isInterfaceEnabled() && (this.container.addClass("select2-container-active"), this.dropdown.addClass("select2-drop-active"))
					})), u.data("select2-data", i), u.insertBefore(this.searchContainer), s.push(l), this.setVal(s)
				},
				unselect: function(t) {
					var i, f, u = this.getVal(),
						r;
					if (t = t.closest(".select2-search-choice"), 0 === t.length) throw "Invalid argument: " + t + ". Must be .select2-search-choice";
					if (i = t.data("select2-data")) {
						if (r = n.Event("select2-removing"), r.val = this.id(i), r.choice = i, this.opts.element.trigger(r), r.isDefaultPrevented()) return !1;
						for (;
							(f = e(this.id(i), u)) >= 0;) u.splice(f, 1), this.setVal(u), this.select && this.postprocessResults();
						return t.remove(), this.opts.element.trigger({
							type: "select2-removed",
							val: this.id(i),
							choice: i
						}), this.triggerChange({
							removed: i
						}), !0
					}
				},
				postprocessResults: function(n, t, i) {
					var s = this.getVal(),
						f = this.results.find(".select2-result"),
						h = this.results.find(".select2-result-with-children"),
						r = this;
					f.each2(function(n, t) {
						var i = r.id(t.data("select2-data"));
						e(i, s) >= 0 && (t.addClass("select2-selected"), t.find(".select2-result-selectable").addClass("select2-selected"))
					}), h.each2(function(n, t) {
						t.is(".select2-result-selectable") || 0 !== t.find(".select2-result-selectable:not(.select2-selected)").length || t.addClass("select2-selected")
					}), -1 == this.highlight() && i !== !1 && this.opts.closeOnSelect === !0 && r.highlight(0), !this.opts.createSearchChoice && !f.filter(".select2-result:not(.select2-selected)").length > 0 && (!n || n && !n.more && 0 === this.results.find(".select2-no-results").length) && o(r.opts.formatNoMatches, "formatNoMatches") && this.results.append("<li class='select2-no-results'>" + u(r.opts.formatNoMatches, r.opts.element, r.search.val()) + "<\/li>")
				},
				getMaxSearchWidth: function() {
					return this.selection.width() - g(this.search)
				},
				resizeSearch: function() {
					var i, u, t, f, n, r = g(this.search);
					i = wt(this.search) + 10, u = this.search.offset().left, t = this.selection.width(), f = this.selection.offset().left, n = t - (u - f) - r, i > n && (n = t - r), 40 > n && (n = t - r), 0 >= n && (n = i), this.search.width(Math.floor(n))
				},
				getVal: function() {
					var n;
					return this.select ? (n = this.select.val(), null === n ? [] : n) : (n = this.opts.element.val(), v(n, this.opts.separator, this.opts.transformVal))
				},
				setVal: function(t) {
					var i;
					this.select ? this.select.val(t) : (i = [], n(t).each(function() {
						e(this, i) < 0 && i.push(this)
					}), this.opts.element.val(0 === i.length ? "" : i.join(this.opts.separator)))
				},
				buildChangeDetails: function(n, t) {
					for (var r, t = t.slice(0), n = n.slice(0), i = 0; i < t.length; i++)
						for (r = 0; r < n.length; r++) f(this.opts.id(t[i]), this.opts.id(n[r])) && (t.splice(i, 1), i > 0 && i--, n.splice(r, 1), r--);
					return {
						added: t,
						removed: n
					}
				},
				val: function(i, r) {
					var f, u = this;
					if (0 === arguments.length) return this.getVal();
					if (f = this.data(), f.length || (f = []), !i && 0 !== i) return this.opts.element.val(""), this.updateSelection([]), this.clearSearch(), r && this.triggerChange({
						added: this.data(),
						removed: f
					}), void 0;
					if (this.setVal(i), this.select) this.opts.initSelection(this.select, this.bind(this.updateSelection)), r && this.triggerChange(this.buildChangeDetails(f, this.data()));
					else {
						if (this.opts.initSelection === t) throw new Error("val() cannot be called if initSelection() is not defined");
						this.opts.initSelection(this.opts.element, function(t) {
							var i = n.map(t, u.id);
							u.setVal(i), u.updateSelection(t), u.clearSearch(), r && u.triggerChange(u.buildChangeDetails(f, u.data()))
						})
					}
					this.clearSearch()
				},
				onSortStart: function() {
					if (this.select) throw new Error("Sorting of elements is not supported when attached to <select>. Attach to <input type='hidden'/> instead.");
					this.search.width(0), this.searchContainer.hide()
				},
				onSortEnd: function() {
					var t = [],
						i = this;
					this.searchContainer.show(), this.searchContainer.appendTo(this.searchContainer.parent()), this.resizeSearch(), this.selection.find(".select2-search-choice").each(function() {
						t.push(i.opts.id(n(this).data("select2-data")))
					}), this.setVal(t), this.triggerChange()
				},
				data: function(t, i) {
					var r, u, f = this;
					return 0 === arguments.length ? this.selection.children(".select2-search-choice").map(function() {
						return n(this).data("select2-data")
					}).get() : (u = this.data(), t || (t = []), r = n.map(t, function(n) {
						return f.opts.id(n)
					}), this.setVal(r), this.updateSelection(t), this.clearSearch(), i && this.triggerChange(this.buildChangeDetails(u, this.data())), void 0)
				}
			}), n.fn.select2 = function() {
				var r, u, f, o, s, i = Array.prototype.slice.call(arguments, 0),
					c = ["val", "destroy", "opened", "open", "close", "focus", "isFocused", "container", "dropdown", "onSortStart", "onSortEnd", "enable", "disable", "readonly", "positionDropdown", "data", "search"],
					l = ["opened", "isFocused", "container", "dropdown"],
					a = ["val", "data"],
					h = {
						search: "externalSearch"
					};
				return this.each(function() {
					if (0 === i.length || "object" == typeof i[0]) r = 0 === i.length ? {} : n.extend({}, i[0]), r.element = n(this), "select" === r.element.get(0).tagName.toLowerCase() ? s = r.element.prop("multiple") : (s = r.multiple || !1, "tags" in r && (r.multiple = s = !0)), u = s ? new window.Select2["class"].multi : new window.Select2["class"].single, u.init(r);
					else {
						if ("string" != typeof i[0]) throw "Invalid arguments to select2 plugin: " + i;
						if (e(i[0], c) < 0) throw "Unknown method: " + i[0];
						if (o = t, u = n(this).data("select2"), u === t) return;
						if (f = i[0], "container" === f ? o = u.container : "dropdown" === f ? o = u.dropdown : (h[f] && (f = h[f]), o = u[f].apply(u, i.slice(1))), e(i[0], l) >= 0 || e(i[0], a) >= 0 && 1 == i.length) return !1
					}
				}), o === t ? this : o
			}, n.fn.select2.defaults = {
				width: "copy",
				loadMorePadding: 0,
				closeOnSelect: !0,
				openOnEnter: !0,
				containerCss: {},
				dropdownCss: {},
				containerCssClass: "",
				dropdownCssClass: "",
				formatResult: function(n, t, i, r) {
					var u = [];
					return it(this.text(n), i.term, u, r), u.join("")
				},
				transformVal: function(t) {
					return n.trim(t)
				},
				formatSelection: function(n, i, r) {
					return n ? r(this.text(n)) : t
				},
				sortResults: function(n) {
					return n
				},
				formatResultCssClass: function(n) {
					return n.css
				},
				formatSelectionCssClass: function() {
					return t
				},
				minimumResultsForSearch: 0,
				minimumInputLength: 0,
				maximumInputLength: null,
				maximumSelectionSize: 0,
				id: function(n) {
					return n == t ? null : n.id
				},
				text: function(t) {
					return t && this.data && this.data.text ? n.isFunction(this.data.text) ? this.data.text(t) : t[this.data.text] : t.text
				},
				matcher: function(n, t) {
					return h("" + t).toUpperCase().indexOf(h("" + n).toUpperCase()) >= 0
				},
				separator: ",",
				tokenSeparators: [],
				tokenizer: bt,
				escapeMarkup: rt,
				blurOnChange: !1,
				selectOnBlur: !1,
				adaptContainerCssClass: function(n) {
					return n
				},
				adaptDropdownCssClass: function() {
					return null
				},
				nextSearchTerm: function() {
					return t
				},
				searchInputPlaceholder: "",
				createSearchChoicePosition: "top",
				shouldFocusInput: function(n) {
					var t = "ontouchstart" in window || navigator.msMaxTouchPoints > 0;
					return t ? n.opts.minimumResultsForSearch < 0 ? !1 : !0 : !0
				}
			}, n.fn.select2.locales = [], n.fn.select2.locales.en = {
				formatMatches: function(n) {
					return 1 === n ? "One result is available, press enter to select it." : n + " results are available, use up and down arrow keys to navigate."
				},
				formatNoMatches: function() {
					return "No matches found"
				},
				formatAjaxError: function() {
					return "Loading failed"
				},
				formatInputTooShort: function(n, t) {
					var i = t - n.length;
					return "Please enter " + i + " or more character" + (1 == i ? "" : "s")
				},
				formatInputTooLong: function(n, t) {
					var i = n.length - t;
					return "Please delete " + i + " character" + (1 == i ? "" : "s")
				},
				formatSelectionTooBig: function(n) {
					return "You can only select " + n + " item" + (1 == n ? "" : "s")
				},
				formatLoadMore: function() {
					return "Loading more results…"
				},
				formatSearching: function() {
					return "Searching…"
				}
			}, n.extend(n.fn.select2.defaults, n.fn.select2.locales.en), n.fn.select2.ajaxDefaults = {
				transport: n.ajax,
				params: {
					type: "GET",
					cache: !1,
					dataType: "json"
				}
			}, window.Select2 = {
				query: {
					ajax: ut,
					local: ft,
					tags: et
				},
				util: {
					debounce: tt,
					markMatch: it,
					escapeMarkup: rt,
					stripDiacritics: h
				},
				"class": {
					abstract: a,
					single: st,
					multi: ht
				}
			}
		}
	}(jQuery), swfobject = function() {
		function yt() {
			l.readyState == "complete" && (l.parentNode.removeChild(l), nt())
		}

		function nt() {
			var u, r, f, i;
			if (!g) {
				if (n.ie && n.win) {
					u = o("span");
					try {
						r = t.getElementsByTagName("body")[0].appendChild(u), r.parentNode.removeChild(r)
					} catch (e) {
						return
					}
				}
				for (g = !0, k && (clearInterval(k), k = null), f = w.length, i = 0; i < f; i++) w[i]()
			}
		}

		function tt(n) {
			g ? n() : w[w.length] = n
		}

		function st(n) {
			if (typeof r.addEventListener != i) r.addEventListener("load", n, !1);
			else if (typeof t.addEventListener != i) t.addEventListener("load", n, !1);
			else if (typeof r.attachEvent != i) it(r, "onload", n);
			else if (typeof r.onload == "function") {
				var u = r.onload;
				r.onload = function() {
					u(), n()
				}
			} else r.onload = n
		}

		function pt() {
			for (var f = e.length, r, i, t = 0; t < f; t++) r = e[t].id, n.pv[0] > 0 ? (i = u(r), i && (e[t].width = i.getAttribute("width") ? i.getAttribute("width") : "0", e[t].height = i.getAttribute("height") ? i.getAttribute("height") : "0", y(e[t].swfVersion) ? (n.webkit && n.webkit < 312 && wt(i), h(r, !0)) : e[t].expressInstall && !v && y("6.0.65") && (n.win || n.mac) ? ht(e[t]) : bt(i))) : h(r, !0)
		}

		function wt(n) {
			var s = n.getElementsByTagName(f)[0],
				e, t, h, i, r, c, u;
			if (s) {
				if (e = o("embed"), t = s.attributes, t)
					for (h = t.length, i = 0; i < h; i++) t[i].nodeName == "DATA" ? e.setAttribute("src", t[i].nodeValue) : e.setAttribute(t[i].nodeName, t[i].nodeValue);
				if (r = s.childNodes, r)
					for (c = r.length, u = 0; u < c; u++) r[u].nodeType == 1 && r[u].nodeName == "PARAM" && e.setAttribute(r[u].getAttribute("name"), r[u].getAttribute("value"));
				n.parentNode.replaceChild(e, n)
			}
		}

		function ht(i) {
			var f, e, h, c;
			if (v = !0, f = u(i.id), f) {
				i.altContentId ? (e = u(i.altContentId), e && (a = e, d = i.altContentId)) : a = ut(f), !/%$/.test(i.width) && parseInt(i.width, 10) < 310 && (i.width = "310"), !/%$/.test(i.height) && parseInt(i.height, 10) < 137 && (i.height = "137"), t.title = t.title.slice(0, 47) + " - Flash Player Installation";
				var l = n.ie && n.win ? "ActiveX" : "PlugIn",
					y = t.title,
					p = "MMredirectURL=" + r.location + "&MMplayerType=" + l + "&MMdoctitle=" + y,
					s = i.id;
				n.ie && n.win && f.readyState != 4 && (h = o("div"), s += "SWFObjectNew", h.setAttribute("id", s), f.parentNode.insertBefore(h, f), f.style.display = "none", c = function() {
					f.parentNode.removeChild(f)
				}, it(r, "onload", c)), ft({
					data: i.expressInstall,
					id: ot,
					width: i.width,
					height: i.height
				}, {
					flashvars: p
				}, s)
			}
		}

		function bt(t) {
			var i, u;
			n.ie && n.win && t.readyState != 4 ? (i = o("div"), t.parentNode.insertBefore(i, t), i.parentNode.replaceChild(ut(t), i), t.style.display = "none", u = function() {
				t.parentNode.removeChild(t)
			}, it(r, "onload", u)) : t.parentNode.replaceChild(ut(t), t)
		}

		function ut(t) {
			var u = o("div"),
				e, i, s, r;
			if (n.win && n.ie) u.innerHTML = t.innerHTML;
			else if (e = t.getElementsByTagName(f)[0], e && (i = e.childNodes, i))
				for (s = i.length, r = 0; r < s; r++) i[r].nodeType == 1 && i[r].nodeName == "PARAM" || i[r].nodeType == 8 || u.appendChild(i[r].cloneNode(!0));
			return u
		}

		function ft(t, r, e) {
			var d, v = u(e),
				g, s, nt, k, c, h, y, a, l, w;
			if (v)
				if (typeof t.id == i && (t.id = e), n.ie && n.win) {
					g = "";
					for (s in t) t[s] != Object.prototype[s] && (s.toLowerCase() == "data" ? r.movie = t[s] : s.toLowerCase() == "styleclass" ? g += ' class="' + t[s] + '"' : s.toLowerCase() != "classid" && (g += " " + s + '="' + t[s] + '"'));
					nt = "";
					for (k in r) r[k] != Object.prototype[k] && (nt += '<param name="' + k + '" value="' + r[k] + '" />');
					v.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + g + ">" + nt + "<\/object>", b[b.length] = t.id, d = u(t.id)
				} else if (n.webkit && n.webkit < 312) {
				c = o("embed"), c.setAttribute("type", p);
				for (h in t) t[h] != Object.prototype[h] && (h.toLowerCase() == "data" ? c.setAttribute("src", t[h]) : h.toLowerCase() == "styleclass" ? c.setAttribute("class", t[h]) : h.toLowerCase() != "classid" && c.setAttribute(h, t[h]));
				for (y in r) r[y] != Object.prototype[y] && y.toLowerCase() != "movie" && c.setAttribute(y, r[y]);
				v.parentNode.replaceChild(c, v), d = c
			} else {
				a = o(f), a.setAttribute("type", p);
				for (l in t) t[l] != Object.prototype[l] && (l.toLowerCase() == "styleclass" ? a.setAttribute("class", t[l]) : l.toLowerCase() != "classid" && a.setAttribute(l, t[l]));
				for (w in r) r[w] != Object.prototype[w] && w.toLowerCase() != "movie" && kt(a, w, r[w]);
				v.parentNode.replaceChild(a, v), d = a
			}
			return d
		}

		function kt(n, t, i) {
			var r = o("param");
			r.setAttribute("name", t), r.setAttribute("value", i), n.appendChild(r)
		}

		function ct(t) {
			var i = u(t);
			i && (i.nodeName == "OBJECT" || i.nodeName == "EMBED") && (n.ie && n.win ? i.readyState == 4 ? lt(t) : r.attachEvent("onload", function() {
				lt(t)
			}) : i.parentNode.removeChild(i))
		}

		function lt(n) {
			var t = u(n),
				i;
			if (t) {
				for (i in t) typeof t[i] == "function" && (t[i] = null);
				t.parentNode.removeChild(t)
			}
		}

		function u(n) {
			var i = null;
			try {
				i = t.getElementById(n)
			} catch (r) {}
			return i
		}

		function o(n) {
			return t.createElement(n)
		}

		function it(n, t, i) {
			n.attachEvent(t, i), c[c.length] = [n, t, i]
		}

		function y(t) {
			var r = n.pv,
				i = t.split(".");
			return i[0] = parseInt(i[0], 10), i[1] = parseInt(i[1], 10) || 0, i[2] = parseInt(i[2], 10) || 0, r[0] > i[0] || r[0] == i[0] && r[1] > i[1] || r[0] == i[0] && r[1] == i[1] && r[2] >= i[2] ? !0 : !1
		}

		function at(r, u) {
			var h, e, s;
			n.ie && n.mac || (h = t.getElementsByTagName("head")[0], e = o("style"), e.setAttribute("type", "text/css"), e.setAttribute("media", "screen"), n.ie && n.win || typeof t.createTextNode == i || e.appendChild(t.createTextNode(r + " {" + u + "}")), h.appendChild(e), n.ie && n.win && typeof t.styleSheets != i && t.styleSheets.length > 0 && (s = t.styleSheets[t.styleSheets.length - 1], typeof s.addRule == f && s.addRule(r, u)))
		}

		function h(n, t) {
			var i = t ? "visible" : "hidden";
			g && u(n) ? u(n).style.visibility = i : at("#" + n, "visibility:" + i)
		}

		function vt(n) {
			var t = /[\\\"<>\.;]/.exec(n) != null;
			return t ? encodeURIComponent(n) : n
		}
		var i = "undefined",
			f = "object",
			et = "Shockwave Flash",
			rt = "ShockwaveFlash.ShockwaveFlash",
			p = "application/x-shockwave-flash",
			ot = "SWFObjectExprInst",
			r = window,
			t = document,
			s = navigator,
			w = [],
			e = [],
			b = [],
			c = [],
			l, k = null,
			a = null,
			d = null,
			g = !1,
			v = !1,
			n = function() {
				var y = typeof t.getElementById != i && typeof t.getElementsByTagName != i && typeof t.createElement != i,
					u = [0, 0, 0],
					n = null,
					e, o;
				if (typeof s.plugins != i && typeof s.plugins[et] == f) n = s.plugins[et].description, !n || typeof s.mimeTypes != i && s.mimeTypes[p] && !s.mimeTypes[p].enabledPlugin || (n = n.replace(/^.*\s+(\S+\s+\S+$)/, "$1"), u[0] = parseInt(n.replace(/^(.*)\..*$/, "$1"), 10), u[1] = parseInt(n.replace(/^.*\.(.*)\s.*$/, "$1"), 10), u[2] = /r/.test(n) ? parseInt(n.replace(/^.*r(.*)$/, "$1"), 10) : 0);
				else if (typeof r.ActiveXObject != i) {
					e = null, o = !1;
					try {
						e = new ActiveXObject(rt + ".7")
					} catch (b) {
						try {
							e = new ActiveXObject(rt + ".6"), u = [6, 0, 21], e.AllowScriptAccess = "always"
						} catch (b) {
							u[0] == 6 && (o = !0)
						}
						if (!o) try {
							e = new ActiveXObject(rt)
						} catch (b) {}
					}
					if (!o && e) try {
						n = e.GetVariable("$version"), n && (n = n.split(" ")[1].split(","), u = [parseInt(n[0], 10), parseInt(n[1], 10), parseInt(n[2], 10)])
					} catch (b) {}
				}
				var h = s.userAgent.toLowerCase(),
					c = s.platform.toLowerCase(),
					w = /webkit/.test(h) ? parseFloat(h.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : !1,
					l = !1,
					a = c ? /win/.test(c) : /win/.test(h),
					v = c ? /mac/.test(c) : /mac/.test(h); /*@cc_on l=!0;@if(@_win32)a=!0;@elif(@_mac)v=!0;@end@*/
				return {
					w3cdom: y,
					pv: u,
					webkit: w,
					ie: l,
					win: a,
					mac: v
				}
			}(),
			dt = function() {
				if (n.w3cdom) {
					if (tt(pt), n.ie && n.win) try {
						t.write("<script id=__ie_ondomload defer=true src=//:><\/script>"), l = u("__ie_ondomload"), l && it(l, "onreadystatechange", yt)
					} catch (r) {}
					n.webkit && typeof t.readyState != i && (k = setInterval(function() {
						/loaded|complete/.test(t.readyState) && nt()
					}, 10)), typeof t.addEventListener != i && t.addEventListener("DOMContentLoaded", nt, null), st(nt)
				}
			}(),
			gt = function() {
				n.ie && n.win && window.attachEvent("onunload", function() {
					for (var e = c.length, r, i, u, f, t = 0; t < e; t++) c[t][0].detachEvent(c[t][1], c[t][2]);
					for (r = b.length, i = 0; i < r; i++) ct(b[i]);
					for (u in n) n[u] = null;
					n = null;
					for (f in swfobject) swfobject[f] = null;
					swfobject = null
				})
			}();
		return {
			registerObject: function(t, i, r) {
				if (n.w3cdom && t && i) {
					var u = {};
					u.id = t, u.swfVersion = i, u.expressInstall = r ? r : !1, e[e.length] = u, h(t, !1)
				}
			},
			getObjectById: function(t) {
				var o = null,
					r, e;
				return n.w3cdom && (r = u(t), r && (e = r.getElementsByTagName(f)[0], !e || e && typeof r.SetVariable != i ? o = r : typeof e.SetVariable != i && (o = e))), o
			},
			embedSWF: function(t, r, u, e, o, s, c, l, a) {
				var p, k, b, d, w;
				if (n.w3cdom && t && r && u && e && o)
					if (u += "", e += "", y(o)) {
						if (h(r, !1), p = {}, a && typeof a === f)
							for (k in a) a[k] != Object.prototype[k] && (p[k] = a[k]);
						if (p.data = t, p.width = u, p.height = e, b = {}, l && typeof l === f)
							for (d in l) l[d] != Object.prototype[d] && (b[d] = l[d]);
						if (c && typeof c === f)
							for (w in c) c[w] != Object.prototype[w] && (typeof b.flashvars != i ? b.flashvars += "&" + w + "=" + c[w] : b.flashvars = w + "=" + c[w]);
						tt(function() {
							ft(p, b, r), p.id == r && h(r, !0)
						})
					} else s && !v && y("6.0.65") && (n.win || n.mac) && (v = !0, h(r, !1), tt(function() {
						var n = {};
						n.id = n.altContentId = r, n.width = u, n.height = e, n.expressInstall = s, ht(n)
					}))
			},
			getFlashPlayerVersion: function() {
				return {
					major: n.pv[0],
					minor: n.pv[1],
					release: n.pv[2]
				}
			},
			hasFlashPlayerVersion: y,
			createSWF: function(t, i, r) {
				return n.w3cdom ? ft(t, i, r) : undefined
			},
			removeSWF: function(t) {
				n.w3cdom && ct(t)
			},
			createCSS: function(t, i) {
				n.w3cdom && at(t, i)
			},
			addDomLoadEvent: tt,
			addLoadEvent: st,
			getQueryParamValue: function(n) {
				var u = t.location.search || t.location.hash,
					r, i;
				if (n == null) return vt(u);
				if (u)
					for (r = u.substring(1).split("&"), i = 0; i < r.length; i++)
						if (r[i].substring(0, r[i].indexOf("=")) == n) return vt(r[i].substring(r[i].indexOf("=") + 1));
				return ""
			},
			expressInstallCallback: function() {
				if (v && a) {
					var t = u(ot);
					t && (t.parentNode.replaceChild(a, t), d && (h(d, !0), n.ie && n.win && (a.style.display = "block")), a = null, d = null, v = !1)
				}
			}
		}
	}(), $(document).ready(function() {
		if (!($("#formcomponentform").length < 1)) {
			$(".b-form-wrapper #formcomponentform, .b-form-wrapper #formcomponentform2").length > 0 ? ($(".b-form-wrapper #formcomponentform input[type=text], .b-form-wrapper #formcomponentform input[type=password]").addClass("gui-form-text-input"), $(".b-form-wrapper #formcomponentform2 input[type=text], .b-form-wrapper #formcomponentform2 input[type=password]").addClass("gui-form-text-input"), $(".b-form-wrapper #formcomponentform select, .b-form-wrapper #formcomponentform2 select").addClass("gui-form-select"), $(".b-form-wrapper #formcomponentform .container .birthday, .b-form-wrapper #formcomponentform2 .container .birthday").length > 0 && $(".b-form-wrapper #formcomponentform .container .birthday, .b-form-wrapper #formcomponentform2 .container .birthday").parent().parent().addClass("c-birthday"), $(".b-form-wrapper #formcomponentform group, .b-form-wrapper #formcomponentform2 group").attr("style", ""), $(".b-form-wrapper #formcomponentform, .b-form-wrapper #formcomponentform2").attr("class").indexOf("layout-") === -1 && $(".b-form-wrapper #formcomponentform, .b-form-wrapper #formcomponentform2").addClass("layout-3"), $(".b-form-wrapper #formcomponentform .radiolist > .radio, .b-form-wrapper #formcomponentform2 .radiolist > .radio").each(function() {
				$(this).attr("class").indexOf("cols") === -1 && $(this).addClass("cols4")
			}), $(".b-form-wrapper #formcomponentform .helpInfo, .b-form-wrapper #formcomponentform2 .helpInfo").hover(function() {
				$(this).parent().addClass("showTooltip")
			}, function() {
				$(this).parent().removeClass("showTooltip")
			}), $(".b-form-wrapper #formcomponentform .checkbox > label, .b-form-wrapper #formcomponentform2 .checkbox > label, .b-form-wrapper #formcomponentform .radio > label, .b-form-wrapper #formcomponentform2 .radio > label").each(function() {
				if ($("#" + $(this).attr("for")).is(":checked") && $(this).addClass("isChecked"), $(this).attr("title", $(this).text()), $(this).parent().hasClass("radio")) $(this).on("click", function() {
					var n = $(this).hasClass("isChecked");
					n === !1 && ($(this).parent().parent().find(".radio > input[type=radio]").checked = !1, $(this).parent().parent().find(".radio > label").removeClass("isChecked"), $(this).addClass("isChecked"), $(this).parent().find("input[type=radio]").checked = !0)
				});
				else if ($(this).parent().hasClass("checkbox")) $(this).on("click", function() {
					$(this).toggleClass("isChecked")
				})
			})) : ($("body").attr("style", ""), $(".b-page-wrapper").css({
				"margin-top": "-12px"
			}));
			var n = $(".b-form-wrapper select");
			n.each(function() {
				$("#sal").find("option:selected") && $("#sal").attr("selected", "selected")
			}), SelectMake(), SelectPorscheCar(), cleardd("dmodelyear"), $(".Required > label").each(function() {
				jQuery(this).text(jQuery(this).text() + " *")
			}), $(".helpInfo").mouseover(function() {
				var n = $(this).attr("for");
				$("#" + n + "-help").show(), $(this).parent().children(".helpText").show()
			}), $(".helpInfo").mouseout(function() {
				var n = $(this).attr("for");
				$("#" + n + "-help").hide(), $(this).parent().children(".helpText").hide()
			}), $("#datasaveX_1").is(":checked") == !1 && $("#datasaveX_2").is(":checked") == !1 && ($("#datasave_1").attr("checked", !1), $("#datasave_2").attr("checked", !1)), $("#datasave_1").is(":checked") == !0 && $("#datasaveX_1").is(":checked") == !1 && $("#datasave_1").attr("checked", !0), $("#datasave_2").is(":checked") == !0 && $("#datasaveX_2").is(":checked") == !1 && $("#datasave_2").attr("checked", !0), $("#hideallowusagephone").val() == "true" ? $("#allowusagephone_1").attr("checked", !0) : $("#allowusagephone_1").attr("checked", !1), $("#hideallowusagemail").val() == "true" ? $("#allowusagemail_1").attr("checked", !0) : $("#allowusagemail_1").attr("checked", !1)
		}
	}), evaluation1 = compareValidator("adresstype", "adresstype-error-idnxpspagformcomponentvalidatorcebfcecdacfdceelanguagenonepoolgermany", this.value, "business", "equals", null), actionsByID("fbfirma, fbstrasse, fbno, fbplz, fbort, fbLand", "fpstrasse,fpno,fpplz,fport,fpland", evaluation1), actvalue = 0, $(function() {
		!$(".b-form-wrapper #formcomponentform").length || ($(".radiolist.Required .radio").each(function() {
			!$(this).find("label").hasClass("isChecked") || $(this).find("input").click()
		}), !$("#emailstandard").length || $("#emailstandard").val($.trim($("#emailstandard").val())))
	}),
	function(n, t, i) {
		"use strict";
		n(i).ready(function() {
			function vi(t) {
				if (n("#m-01-model-menu .m-01-level-2, .m-01-menu-item").height("auto").removeAttr("style"), !u()) {
					var l = n("#m-01-model-menu .m-01-level-2 > .m-01-menu-item").not(".m-01-overview-link"),
						h = n(".m-01-active"),
						c = 0,
						f = 0,
						o = 0,
						s = 0;
					l.each(function(t, e) {
						var h = n(e),
							l = 0,
							a = 0,
							c = null,
							v = 0,
							y;
						h.addClass(r), h.parents(i).addClass(r), l = h.position().top, a = h.height(), f = Math.max(f, n("#m-01-model-menu .m-01-level-2").innerHeight()), c = h.find(".m-01-level-3 .m-01-menu-item").not(".m-01-overview-link"), c.first().removeAttr("style"), c.each(function(t, i) {
							var u = n(i),
								e = u.find(".m-01-model-information"),
								f = u.find(".m-01-link");
							v += f.height(), u.addClass(r), o = Math.max(o, h.find(".m-01-level-3").innerHeight()), s = Math.max(s, n("#m-01-model-menu .m-01-level-4").innerHeight())
						}), !u() && l + a >= v ? (y = l + a - v, c.first().css("margin-top", y + 0)) : c.first().removeAttr("style")
					}), e(), h.addClass(r), h.parents(i).addClass(r), !u() && t && (c = Math.max(Math.max(f, o), s), n("#m-01-model-menu .m-01-level-2").height(c))
				}
			}

			function yi() {
				ft = u() ? n(ci).children(i) : n(ii).children(i)
			}

			function pi() {
				if (!at && (t.navigator.msPointerEnabled || Modernizr.touch)) {
					l.on(ei, function(n) {
						(!t.navigator.msPointerEnabled || t.navigator.msPointerEnabled && n.isPrimary) && (p = !0)
					});
					at = !0
				}
			}

			function wi() {
				if (Modernizr.touch && t.navigator.msPointerEnabled) ut.on("click", ui);
				if (t.navigator.msPointerEnabled && Modernizr.touch || Modernizr.touch || u()) {
					if (!k) {
						ut.on(lt, gi);
						k = !0
					}
				} else k && (ut.off(lt), k = !1)
			}

			function bi() {
				if (Modernizr.touch || u()) d && (c.off(ht), c.off(st), c.off(ct), d = !1);
				else if (!d) {
					c.on(ht, tr);
					c.on(st, ir);
					c.on(ct, rr);
					d = !0
				}
			}

			function ki() {
				e(), v()
			}

			function w() {
				return ft.hasClass(r)
			}

			function e() {
				n("." + r).removeClass(r), n("#m-01-model-menu").css({
					"padding-top": ""
				})
			}

			function g() {
				n("html").addClass("m-01-main-navigation-shown"), vt || ri.addClass("m-01-main-navigation-show-overlay")
			}

			function v() {
				n("html").removeClass("m-01-main-navigation-shown"), vt || ri.removeClass("m-01-main-navigation-show-overlay")
			}

			function u() {
				return o === "small"
			}

			function di() {
				var n = o;
				o = li.is(":visible") ? "small" : ai.is(":visible") ? "medium" : "large", n !== o && tt === !0 && (tt = !1, h.trigger(ot))
			}

			function ui(t) {
				var f = n(t.currentTarget),
					e = f.closest(i),
					o = !e.hasClass(r);
				if (!f.attr("href").match("^#"))
					if (f.closest(hi).attr("id") == "m-01-model-menu" && f.closest(ti).hasClass("m-01-level-3")) {
						if (u()) return t.stopPropagation(), !0
					} else return Modernizr.touch || u() ? f.parent().find(ti).length ? (t.stopPropagation(), !1) : (t.stopPropagation(), !0) : (t.stopPropagation(), !0);
				return !1
			}

			function b(f, e) {
				var h, o, c, a;
				f ? (e.addClass(r), e.parents(i).addClass(r), u() && (n("body").hasClass("pool-usa") && e.attr("id") == "m-01-shopping-tools-item" && (h = n("#m-01-shopping-tools-item .m-01-sub-menu.m-01-level-2").height(), n("#m-01-model-menu").css({
					"padding-top": h + "px"
				})), Modernizr.csstransitions && pt && (o = e.children(".m-01-sub-menu"), c = o.outerHeight(!0), o.css({
					overflow: "hidden"
				}).height(0), t.setTimeout(function() {
					w() ? g() : (v(), l.off(y), s = !1), o.gpAnimate({
						height: c
					}, wt, bt, 0, function() {
						o.removeAttr("style")
					})
				}, 0)), e.children("#m-01-main-menu-button").length == 0 && kt && (a = dt ? gt : 0, n("html, body").animate({
					scrollTop: e.offset().top
				}, a))), w() ? g() : (v(), l.off(y), s = !1)) : (e.parents(i).addClass(r), w() ? g() : (v(), l.off(y), s = !1)), nt(e)
			}

			function gi(f) {
				var h, a, v;
				if (w() && p) return p = !1;
				if (!s) {
					l.on(y, nr);
					s = !0
				}
				if (!u() && f.originalEvent.pointerType && f.originalEvent.pointerType == f.originalEvent.MSPOINTER_TYPE_MOUSE) return f.stopPropagation(), !1;
				var k = n(f.currentTarget),
					o = k.closest(i),
					c = !o.hasClass(r);
				return ui(f) ? !0 : (n("input").blur(), u() ? (Modernizr.csstransitions && pt ? (h = n(".m-01-active").last().children(".m-01-sub-menu"), h.length > 0 && h.find(o).length <= 0 ? (a = h.height(), h.css("overflow", "hidden").height(a), t.setTimeout(function() {
					var n = o.attr("id") == "#m-01-main-menu-button" ? "84px" : 0;
					h.height(a).gpAnimate({
						height: n
					}, wt, bt, 0, function() {
						h.removeAttr("style"), e(), b(c, o)
					})
				}, 0)) : (e(), b(c, o))) : (e(), b(c, o)), c || o.children("#m-01-main-menu-button").length == 0 && kt && (v = dt ? gt : 0, n("html, body").animate({
					scrollTop: 1
				}, v))) : (e(), b(c, o)), f.stopImmediatePropagation(), f.stopPropagation(), f.preventDefault(), !1)
			}

			function nr(t) {
				if (p) return p = !1;
				var r = n(t.target);
				if (!(r.closest(i).length > 0)) {
					if (u()) {
						if (r.closest(it).length > 0) return
					} else if (r.closest(n("#m-01-shopping-tools-link").parent()).length > 0 || r.closest("#m-01-model-menu").length > 0) return;
					return w() && (l.off(y), s = !1, b(!1, h.children(".m-01-menu-item").first()), e(), v()), nt(a), t.preventDefault(), !1
				}
			}

			function tr(t) {
				if (t.originalEvent.pointerType && t.originalEvent.pointerType == t.originalEvent.MSPOINTER_TYPE_TOUCH) return !1;
				var r = n(t.currentTarget),
					u = r.closest(i);
				nt(u)
			}

			function ir(t) {
				if (t.originalEvent.pointerType && t.originalEvent.pointerType == t.originalEvent.MSPOINTER_TYPE_TOUCH) return !1;
				(t.stopPropagation(), n(t.target).closest("#m-01-dealer-search-form").length > 0 || n(t.target).closest("#m-01-site-search-form").length > 0 || n(t.currentTarget).closest("#m-01-car-configurator-button").length > 0) || g()
			}

			function rr(t) {
				if (t.originalEvent.pointerType && t.originalEvent.pointerType == t.originalEvent.MSPOINTER_TYPE_TOUCH) return !1;
				var r = n(t.currentTarget),
					u = r.closest(i),
					f = n(t.relatedTarget);
				nt(u), t.stopPropagation(), f.parents(i).length > 0 || v()
			}

			function nt(n) {
				if (n) {
					var t = n.children(".m-01-sub-menu .m-01-model-information");
					a && a != t && (fr(a), a = null), !t.length || t.is(":visible") && (ur(t), a = t)
				}
			}

			function ur(n) {
				var t = n.find(".m-01-model-figure > img[data-image-src]");
				t.length > 0 && (image_swapOne(t), image_scaleOne(t))
			}

			function fr() {}
			var fi = n(t),
				o = "",
				f = ".mainnavigation",
				tt = !0,
				et = "resize" + f,
				ot = "layoutChange" + f,
				st = (t.navigator.msPointerEnabled && Modernizr.touch ? "MSPointerOver" : "mouseover") + f,
				ht = (t.navigator.msPointerEnabled && Modernizr.touch ? "MSPointerEnter" : "mouseenter") + f,
				ct = (t.navigator.msPointerEnabled && Modernizr.touch ? "MSPointerOut" : "mouseleave") + f,
				ei = (t.navigator.msPointerEnabled && Modernizr.touch ? "MSPointerMove" : "touchmove") + f,
				lt = (t.navigator.msPointerEnabled && Modernizr.touch ? "MSPointerUp" : "click") + f,
				y = (Modernizr.touch ? "touchend" : t.navigator.msPointerEnabled ? "MSPointerUp" : "click") + f,
				k = !1,
				d = !1,
				at = !1,
				s = !1,
				p = !1,
				vt = n("html.ie8").length > 0,
				oi = 100,
				yt = null,
				pt = !1,
				wt = 250,
				bt = "cubic-bezier(0.645, 0.045, 0.355, 1.000)",
				kt = !0,
				dt = !0,
				gt = 250,
				it = ".m-01-main-navigation",
				ni = "m-01-main-menu-button",
				si = "m-01-primary-menu-button",
				i = ".m-01-menu-item",
				rt = ".m-01-link",
				ti = ".m-01-sub-menu",
				hi = ".m-01-menu-section",
				ii = "#m-01-model-menu, #m-01-primary-menu, #m-01-blue-buttons",
				ci = it + ", " + ii,
				r = "m-01-active",
				h = n(it),
				c = h.find(i),
				ut = h.find(rt),
				ft = null,
				er = h.find(i + ", " + rt),
				ri = n(".b-page-overlay"),
				l = n("html"),
				li = n("#m-01-main-menu-button"),
				ai = n("#m-01-primary-menu-button"),
				a = !1;
			h.on(ot, function() {
				ki(), vi(!0), yi(), pi(), wi(), bi(), tt = !0
			});
			fi.on(et, function() {
				t.clearTimeout(yt), yt = t.setTimeout(function() {
					di()
				}, oi)
			}).trigger(et), n("#" + GLOBAL_CONFIG.currentMainNavigationArea).addClass("m-01-current")
		})
	}(jQuery, this, this.document), $(document).ready(function() {
		function n() {
			i && typeof console != "undefined"
		}

		function u(n, t) {
			var i, r;
			if (t === "success")
				if (i = n.responseJSON || {
						models: []
					}, modelData = i, r = document.createEvent("Event"), r.initEvent("modelDataAvailable", !0, !1), document.dispatchEvent(r), $("#m-01-model-menu").length != 0) f(i);
				else return
		}

		function f(i) {
			var c = 0,
				v, r;
			for (c; c < i.models.length; c++) {
				var u = i.models[c],
					l = u.id,
					y = u.year,
					a = "#f" + l + (typeof y == "string" && y.length > 0 ? "y" + y : "");
				if ($(a).length == 0) {
					n(a + ":false");
					continue
				}
				var f = u.values,
					s = u.price,
					h = u.footnotes;
				if (n(l + ".values:" + (f != null)), n(l + ".prices:" + (s != null)), n(l + ".footnotes:" + (h != null)), f == null && s == null && h == null) return;
				if ($(a + " > .m-01-model-details").append('<table class="m-01-model-techspec"><\/table>'), v = $(a + " > .m-01-model-details > .m-01-model-techspec"), r = 0, s != null)
					for (r = 0; r < s.length; r++) v.append(e(s[r]));
				if (f != null)
					for (r = 0; r < f.length; r++) v.append(t(f[r]));
				if (h != null)
					for (r = 0; r < h.length; r++) v.append(o(h[r]))
			}
		}

		function t(n) {
			var t = "";
			return typeof n.mark != "undefined" && (t = " " + n.mark), '<tr><td class="m-01-model-techspec-th">' + n.title + "<\/td><td>" + n.value + t + "<\/td><\/tr>"
		}

		function e(n) {
			return typeof n.buttonlink == "undefined" ? t(n) : typeof n.buttontext != "undefined" ? '<tr><td colspan="2" style="margin-top:1em;"><a class="gui-btn-with-arrow" href="' + n.buttonlink + '"><span>' + n.buttontext + "<\/span><\/a><\/td><\/tr>" : ""
		}

		function o(n) {
			var t = "";
			return typeof n.mark != "undefined" && (t = n.mark + " "), '<tr><td colspan="2" class="m-01-model-disclaimer">' + t + n.value + "<\/td><\/tr>"
		}
		var i = !0,
			r = document.location.protocol + "//" + document.location.host + "/json/techdata/" + GLOBAL_CONFIG.pool + (GLOBAL_CONFIG.language != "none" ? "/" + GLOBAL_CONFIG.language : "") + (GLOBAL_CONFIG.region != "" ? "/_" + GLOBAL_CONFIG.region + "_" : "") + "/c.long";
		$.ajax({
			url: r,
			type: "GET",
			dataType: "json",
			complete: u
		})
	}),
	function(n) {
		function f(n, t) {
			return 32 - new Date(n, t, 32).getDate()
		}

		function e(n, t) {
			for (n = "" + n, t = t || 2; n.length < t;) n = "0" + n;
			return n
		}

		function o(n, t, i) {
			var o = n.getDate(),
				s = n.getDay(),
				u = n.getMonth(),
				f;
			return n = n.getFullYear(), f = {
				d: o,
				dd: e(o),
				ddd: r[i].shortDays[s],
				dddd: r[i].days[s],
				m: u + 1,
				mm: e(u + 1),
				mmm: r[i].shortMonths[u],
				mmmm: r[i].months[u],
				yy: String(n).slice(2),
				yyyy: n
			}, t = t.replace(l, function(n) {
				return n in f ? f[n] : n.slice(1, n.length - 1)
			}), a.html(t).html()
		}

		function t(n) {
			return parseInt(n, 10)
		}

		function s(n, t) {
			return n.getFullYear() === t.getFullYear() && n.getMonth() == t.getMonth() && n.getDate() == t.getDate()
		}

		function i(n) {
			if (n) {
				if (n.constructor == Date) return n;
				if (typeof n == "string") {
					var i = n.split("-");
					if (i.length == 3) return new Date(t(i[0]), t(i[1]) - 1, t(i[2]));
					if (!/^-?\d+$/.test(n)) return;
					n = t(n)
				}
				return i = new Date, i.setDate(i.getDate() + n), i
			}
		}

		function v(u, e) {
			function ct(t, i, r) {
				p = t, g = t.getFullYear(), nt = t.getMonth(), ot = t.getDate(), r = r || n.Event("api"), r.type = "change", tt.trigger(r, [t]), r.isDefaultPrevented() || (u.val(o(t, i.format, i.lang)), u.data("date", t), a.hide(r))
			}

			function vt(t) {
				t.type = "onShow", tt.trigger(t), n(document).bind("keydown.d", function(t) {
					var i;
					if (t.ctrlKey) return !0;
					if (i = t.keyCode, i == 8) return u.val(""), a.hide(t);
					if (i == 27) return a.hide(t);
					if (n(c).index(i) >= 0) {
						if (!b) return a.show(t), t.preventDefault();
						var e = n("#" + l.weeks + " a"),
							f = n("." + l.focus),
							r = e.index(f);
						return f.removeClass(l.focus), i == 74 || i == 40 ? r += 7 : i == 75 || i == 38 ? r -= 7 : i == 76 || i == 39 ? r += 1 : (i == 72 || i == 37) && (r -= 1), r > 41 ? (a.addMonth(), f = n("#" + l.weeks + " a:eq(" + (r - 42) + ")")) : r < 0 ? (a.addMonth(-1), f = n("#" + l.weeks + " a:eq(" + (r + 42) + ")")) : f = e.eq(r), f.addClass(l.focus), t.preventDefault()
					}
					return i == 34 ? a.addMonth() : i == 33 ? a.addMonth(-1) : i == 36 ? a.today() : (i == 13 && (n(t.target).is("select") || n("." + l.focus).click()), n([16, 17, 18, 9]).index(i) >= 0)
				}), n(document).bind("click.d", function(t) {
					var i = t.target;
					n(i).parents("#" + l.root).length || i == u[0] || at && i == at[0] || a.hide(t)
				})
			}
			var a = this,
				rt = new Date,
				l = e.css,
				ut = r[e.lang],
				v = n("#" + l.root),
				lt = v.find("#" + l.title),
				at, ft, et, g, nt, ot, p = u.attr("data-value") || e.value || u.val(),
				y = u.attr("min") || e.min,
				w = u.attr("max") || e.max,
				b, st, tt, k, d, yt, ht, it;
			if (y === 0 && (y = "0"), p = i(p) || rt, y = i(y || e.yearRange[0] * 365), w = i(w || e.yearRange[1] * 365), !ut) throw "Dateinput: invalid language: " + e.lang;
			if (u.attr("type") == "date" && (st = n("<input/>"), n.each("class,disabled,id,maxlength,name,readonly,required,size,style,tabindex,title,value".split(","), function(n, t) {
					st.attr(t, u.attr(t))
				}), u.replaceWith(st), u = st), u.addClass(l.input), tt = u.add(a), !v.length) {
				for (v = n("<div><div><a/><div/><a/><\/div><div><div/><div/><\/div><\/div>").hide().css({
						position: "absolute"
					}).attr("id", l.root), v.children().eq(0).attr("id", l.head).end().eq(1).attr("id", l.body).children().eq(0).attr("id", l.days).end().eq(1).attr("id", l.weeks).end().end().end().find("a").eq(0).attr("id", l.prev).end().eq(1).attr("id", l.next), lt = v.find("#" + l.head).find("div").attr("id", l.title), e.selectors && (k = n("<select/>").attr("id", l.month), d = n("<select/>").attr("id", l.year), lt.html(k.add(d))), yt = v.find("#" + l.days), ht = 0; ht < 7; ht++) yt.append(n("<span/>").text(ut.shortDays[(ht + e.firstDay) % 7]));
				n("body").append(v)
			}
			e.trigger && (at = n("<a/>").attr("href", "#").addClass(l.trigger).click(function(n) {
				return a.show(), n.preventDefault()
			}).insertAfter(u)), it = v.find("#" + l.weeks), d = v.find("#" + l.year), k = v.find("#" + l.month), n.extend(a, {
				show: function(t) {
					if (!(u.attr("readonly") || u.attr("disabled") || b) && (t = t || n.Event(), t.type = "onBeforeShow", tt.trigger(t), !t.isDefaultPrevented())) {
						n.each(h, function() {
							this.hide()
						}), b = !0, k.unbind("change").change(function() {
							a.setValue(d.val(), n(this).val())
						}), d.unbind("change").change(function() {
							a.setValue(n(this).val(), k.val())
						}), ft = v.find("#" + l.prev).unbind("click").click(function() {
							return ft.hasClass(l.disabled) || a.addMonth(-1), !1
						}), et = v.find("#" + l.next).unbind("click").click(function() {
							return et.hasClass(l.disabled) || a.addMonth(), !1
						}), a.setValue(p);
						var i = u.offset();
						return /iPad/i.test(navigator.userAgent) && (i.top -= n(window).scrollTop()), v.css({
							top: i.top + u.outerHeight({
								margins: !0
							}) + e.offset[0],
							left: i.left + e.offset[1]
						}), e.speed ? v.show(e.speed, function() {
							vt(t)
						}) : (v.show(), vt(t)), a
					}
				},
				setValue: function(i, r, u) {
					var o = t(r) >= -1 ? new Date(t(i), t(r), t(u || 1)) : i || p,
						tt, st, ot, h, c, v;
					if (o < y ? o = y : o > w && (o = w), i = o.getFullYear(), r = o.getMonth(), u = o.getDate(), r == -1 ? (r = 11, i--) : r == 12 && (r = 0, i++), !b) return ct(o, e), a;
					if (nt = r, g = i, u = new Date(i, r, 1 - e.firstDay), u = u.getDay(), tt = f(i, r), st = f(i, r - 1), e.selectors) {
						for (k.empty(), n.each(ut.months, function(t, r) {
								y < new Date(i, t + 1, -1) && w > new Date(i, t, 0) && k.append(n("<option/>").html(r).attr("value", t))
							}), d.empty(), o = rt.getFullYear(), h = o + e.yearRange[0]; h < o + e.yearRange[1]; h++) y <= new Date(h + 1, -1, 1) && w > new Date(h, 0, 0) && d.append(n("<option/>").text(h));
						k.val(r), d.val(i)
					} else lt.html(ut.months[r] + " " + i);
					for (it.empty(), ft.add(et).removeClass(l.disabled), h = u ? 0 : -7; h < (u ? 42 : 35); h++) c = n("<a/>"), h % 7 == 0 && (ot = n("<div/>").addClass(l.week), it.append(ot)), h < u ? (c.addClass(l.off), v = st - u + h + 1, o = new Date(i, r - 1, v)) : h >= u + tt ? (c.addClass(l.off), v = h - tt - u + 1, o = new Date(i, r + 1, v)) : (v = h - u + 1, o = new Date(i, r, v), s(p, o) ? c.attr("id", l.current).addClass(l.focus) : s(rt, o) && c.attr("id", l.today)), y && o < y && c.add(ft).addClass(l.disabled), w && o > w && c.add(et).addClass(l.disabled), c.attr("href", "#" + v).text(v).data("date", o), ot.append(c);
					return it.find("a").click(function(t) {
						var i = n(this);
						return i.hasClass(l.disabled) || (n("#" + l.current).removeAttr("id"), i.attr("id", l.current), ct(i.data("date"), e, t)), !1
					}), l.sunday && it.find(l.week).each(function() {
						var t = e.firstDay ? 7 - e.firstDay : 0;
						n(this).children().slice(t, t + 1).addClass(l.sunday)
					}), a
				},
				setMin: function(n, t) {
					return y = i(n), t && p < y && a.setValue(y), a
				},
				setMax: function(n, t) {
					return w = i(n), t && p > w && a.setValue(w), a
				},
				today: function() {
					return a.setValue(rt)
				},
				addDay: function(n) {
					return this.setValue(g, nt, ot + (n || 1))
				},
				addMonth: function(n) {
					return this.setValue(g, nt + (n || 1), ot)
				},
				addYear: function(n) {
					return this.setValue(g + (n || 1), nt, ot)
				},
				hide: function(t) {
					if (b) {
						if (t = n.Event(), t.type = "onHide", tt.trigger(t), n(document).unbind("click.d").unbind("keydown.d"), t.isDefaultPrevented()) return;
						v.hide(), b = !1
					}
					return a
				},
				getConf: function() {
					return e
				},
				getInput: function() {
					return u
				},
				getCalendar: function() {
					return v
				},
				getValue: function(n) {
					return n ? o(p, n, e.lang) : p
				},
				isOpen: function() {
					return b
				}
			}), n.each(["onBeforeShow", "onShow", "change", "onHide"], function(t, i) {
				n.isFunction(e[i]) && n(a).bind(i, e[i]), a[i] = function(t) {
					return t && n(a).bind(i, t), a
				}
			}), u.bind("focus click", a.show).keydown(function(t) {
				var i = t.keyCode;
				return !b && n(c).index(i) >= 0 ? (a.show(t), t.preventDefault()) : t.shiftKey || t.ctrlKey || t.altKey || i == 9 ? !0 : t.preventDefault()
			}), i(u.val()) && ct(p, e)
		}
		var l, a;
		n.tools = n.tools || {
			version: "1.2.5"
		};
		var h = [],
			u, c = [75, 76, 38, 39, 74, 72, 40, 37],
			r = {};
		u = n.tools.dateinput = {
			conf: {
				format: "mm/dd/yy",
				selectors: !1,
				yearRange: [-5, 5],
				lang: "en",
				offset: [0, 0],
				speed: 0,
				firstDay: 0,
				min: undefined,
				max: undefined,
				trigger: !1,
				css: {
					prefix: "cal",
					input: "date",
					root: 0,
					head: 0,
					title: 0,
					prev: 0,
					next: 0,
					month: 0,
					year: 0,
					days: 0,
					body: 0,
					weeks: 0,
					today: 0,
					current: 0,
					week: 0,
					off: 0,
					sunday: 0,
					focus: 0,
					disabled: 0,
					trigger: 0
				}
			},
			localize: function(t, i) {
				n.each(i, function(n, t) {
					i[n] = t.split(",")
				}), r[t] = i
			}
		}, u.localize("en", {
			months: "January,February,March,April,May,June,July,August,September,October,November,December",
			shortMonths: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec",
			days: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday",
			shortDays: "Sun,Mon,Tue,Wed,Thu,Fri,Sat"
		}), l = /d{1,4}|m{1,4}|yy(?:yy)?|"[^"]*"|'[^']*'/g, a = n("<a/>"), n.expr[":"].date = function(t) {
			var i = t.getAttribute("type");
			return i && i == "date" || !!n(t).data("dateinput")
		}, n.fn.dateinput = function(t) {
			if (this.data("dateinput")) return this;
			t = n.extend(!0, {}, u.conf, t), n.each(t.css, function(n, i) {
				i || n == "prefix" || (t.css[n] = (t.css.prefix || "") + (i || n))
			});
			var i;
			return this.each(function() {
				var r = new v(n(this), t);
				h.push(r), r = r.getInput().data("dateinput", r), i = i ? i.add(r) : r
			}), i ? i : this
		}
	}(jQuery),
	function(n) {
		function e(n, t) {
			return t = Math.pow(10, t), Math.round(n * t) / t
		}

		function t(n, t) {
			return (t = parseInt(n.css(t), 10)) ? t : (n = n[0].currentStyle) && n.width && parseInt(n.width, 10)
		}

		function u(n) {
			return (n = n.data("events")) && n.onSlide
		}

		function o(i, r) {
			function g(n, t, u, h) {
				if (u === undefined ? u = t / o * nt : h && (u -= r.min), a && (u = Math.round(u / a) * a), (t === undefined || a) && (t = u * o / nt), isNaN(u)) return f;
				t = Math.max(0, Math.min(t, o)), u = t / o * nt, (h || !c) && (u += r.min), c && (h ? t = o - t : u = r.max - u), u = e(u, k);
				var v = n.type == "click";
				return tt && l !== undefined && !v && (n.type = "onSlide", d.trigger(n, [u, t]), n.isDefaultPrevented()) ? f : (h = v ? r.speed : 0, v = v ? function() {
					n.type = "change", d.trigger(n, [u])
				} : null, c ? (s.animate({
					top: t
				}, h, v), r.progress && b.animate({
					height: o - t + s.width() / 2
				}, h)) : (s.animate({
					left: t
				}, h, v), r.progress && b.animate({
					width: t + s.width() / 2
				}, h)), l = u, rt = t, i.val(u), f)
			}

			function y() {
				(c = r.vertical || t(h, "height") > t(h, "width")) ? (o = t(h, "height") - t(s, "height"), w = h.offset().top + o) : (o = t(h, "width") - t(s, "width"), w = h.offset().left)
			}

			function it() {
				y(), f.setValue(r.value !== undefined ? r.value : r.min)
			}
			var f = this,
				p = r.css,
				h = n("<div><div/><a href='#'/><\/div>").data("rangeinput", f),
				c, l, w, o, rt, s, b, v, d, tt;
			i.before(h), s = h.addClass(p.slider).find("a").addClass(p.handle), b = h.find("div").addClass(p.progress), n.each("min,max,step,value".split(","), function(n, t) {
				n = i.attr(t), parseFloat(n) && (r[t] = parseFloat(n, 10))
			});
			var nt = r.max - r.min,
				a = r.step == "any" ? 0 : r.step,
				k = r.precision;
			if (k === undefined) try {
				k = a.toString().split(".")[1].length
			} catch (ut) {
				k = 0
			}
			i.attr("type") == "range" && (v = n("<input/>"), n.each("class,disabled,id,maxlength,name,readonly,required,size,style,tabindex,title,value".split(","), function(n, t) {
				v.attr(t, i.attr(t))
			}), v.val(r.value), i.replaceWith(v), i = v), i.addClass(p.input), d = n(f).add(i), tt = !0, n.extend(f, {
				getValue: function() {
					return l
				},
				setValue: function(t, i) {
					return y(), g(i || n.Event("api"), undefined, t, !0)
				},
				getConf: function() {
					return r
				},
				getProgress: function() {
					return b
				},
				getHandle: function() {
					return s
				},
				getInput: function() {
					return i
				},
				step: function(t, i) {
					i = i || n.Event();
					var u = r.step == "any" ? 1 : r.step;
					f.setValue(l + u * (t || 1), i)
				},
				stepUp: function(n) {
					return f.step(n || 1)
				},
				stepDown: function(n) {
					return f.step(-n || -1)
				}
			}), n.each("onSlide,change".split(","), function(t, i) {
				n.isFunction(r[i]) && n(f).bind(i, r[i]), f[i] = function(t) {
					return t && n(f).bind(i, t), f
				}
			}), s.drag({
				drag: !1
			}).bind("dragStart", function() {
				y(), tt = u(n(f)) || u(i)
			}).bind("drag", function(n, t, r) {
				if (i.is(":disabled")) return !1;
				g(n, c ? t : r)
			}).bind("dragEnd", function(n) {
				n.isDefaultPrevented() || (n.type = "change", d.trigger(n, [l]))
			}).click(function(n) {
				return n.preventDefault()
			}), h.click(function(n) {
				if (i.is(":disabled") || n.target == s[0]) return n.preventDefault();
				y();
				var t = s.width() / 2;
				g(n, c ? o - w - t + n.pageY : n.pageX - w - t)
			}), r.keyboard && i.keydown(function(t) {
				if (!i.attr("readonly")) {
					var r = t.keyCode,
						u = n([75, 76, 38, 33, 39]).index(r) != -1,
						e = n([74, 72, 40, 34, 37]).index(r) != -1;
					if ((u || e) && !(t.shiftKey || t.altKey || t.ctrlKey)) return u ? f.step(r == 33 ? 10 : 1, t) : e && f.step(r == 34 ? -10 : -1, t), t.preventDefault()
				}
			}), i.blur(function(t) {
				var i = n(this).val();
				i !== l && f.setValue(i, t)
			}), n.extend(i[0], {
				stepUp: f.stepUp,
				stepDown: f.stepDown
			}), it(), o || n(window).load(it)
		}
		var f, i, r;
		n.tools = n.tools || {
			version: "1.2.5"
		}, f = n.tools.rangeinput = {
			conf: {
				min: 0,
				max: 100,
				step: "any",
				steps: 0,
				value: 0,
				precision: undefined,
				vertical: 0,
				keyboard: !0,
				progress: !1,
				speed: 100,
				css: {
					input: "range",
					slider: "slider",
					progress: "progress",
					handle: "handle"
				}
			}
		}, n.fn.drag = function(t) {
			return document.ondragstart = function() {
				return !1
			}, t = n.extend({
				x: !0,
				y: !0,
				drag: !0
			}, t), i = i || n(document).bind("mousedown mouseup", function(u) {
				var f = n(u.target);
				if (u.type == "mousedown" && f.data("drag")) {
					var e = f.position(),
						s = u.pageX - e.left,
						h = u.pageY - e.top,
						o = !0;
					i.bind("mousemove.drag", function(n) {
						var u = n.pageX - s,
							i;
						n = n.pageY - h, i = {}, t.x && (i.left = u), t.y && (i.top = n), o && (f.trigger("dragStart"), o = !1), t.drag && f.css(i), f.trigger("drag", [n, u]), r = f
					}), u.preventDefault()
				} else try {
					r && r.trigger("dragEnd")
				} finally {
					i.unbind("mousemove.drag"), r = null
				}
			}), this.data("drag", !0)
		}, n.expr[":"].range = function(t) {
			var i = t.getAttribute("type");
			return i && i == "range" || !!n(t).filter("input").data("rangeinput")
		}, n.fn.rangeinput = function(t) {
			if (this.data("rangeinput")) return this;
			t = n.extend(!0, {}, f.conf, t);
			var i;
			return this.each(function() {
				var r = new o(n(this), n.extend(!0, {}, t));
				r = r.getInput().data("rangeinput", r), i = i ? i.add(r) : r
			}), i ? i : this
		}
	}(jQuery),
	function(n) {
		function f(t, i, r) {
			var u = t.offset().top,
				e = t.offset().left,
				f = r.position.split(/,?\s+/),
				o = f[0];
			return f = f[1], u -= i.outerHeight() - r.offset[0], e += t.outerWidth() + r.offset[1], /iPad/i.test(navigator.userAgent) && (u -= n(window).scrollTop()), r = i.outerHeight() + t.outerHeight(), o == "center" && (u += r / 2), o == "bottom" && (u += r), t = t.outerWidth(), f == "center" && (e -= (t + i.outerWidth()) / 2), f == "left" && (e -= t), {
				top: u,
				left: e
			}
		}

		function o(n) {
			function t() {
				return this.getAttribute("type") == n
			}
			return t.key = "[type=" + n + "]", t
		}

		function e(e, o, s) {
			function a(i, r, u) {
				if (!(!s.grouped && i.length)) {
					var f;
					u === !1 || n.isArray(u) ? (f = t.messages[r.key || r] || t.messages["*"], f = f[s.lang] || t.messages["*"].en, (r = f.match(/\$\d/g)) && n.isArray(u) && n.each(r, function(n) {
						f = f.replace(this, u[n])
					})) : f = u[s.lang] || u, i.push(f)
				}
			}
			var h = this,
				c = o.add(h),
				l;
			e = e.not(":button, :image, :reset, :submit"), n.extend(h, {
				getConf: function() {
					return s
				},
				getForm: function() {
					return o
				},
				getInputs: function() {
					return e
				},
				reflow: function() {
					return e.each(function() {
						var t = n(this),
							i = t.data("msg.el");
						i && (t = f(t, i, s), i.css({
							top: t.top,
							left: t.left
						}))
					}), h
				},
				invalidate: function(t, r) {
					if (!r) {
						var u = [];
						n.each(t, function(n, t) {
							n = e.filter("[name='" + n + "']"), n.length && (n.trigger("OI", [t]), u.push({
								input: n,
								messages: [t]
							}))
						}), t = u, r = n.Event()
					}
					return r.type = "onFail", c.trigger(r, [t]), r.isDefaultPrevented() || i[s.effect][0].call(h, t, r), h
				},
				reset: function(t) {
					return t = t || e, t.removeClass(s.errorClass).each(function() {
						var t = n(this).data("msg.el");
						t && (t.remove(), n(this).data("msg.el", null))
					}).unbind(s.errorInputEvent || ""), h
				},
				destroy: function() {
					return o.unbind(s.formEvent + ".V").unbind("reset.V"), e.unbind(s.inputEvent + ".V").unbind("change.V"), h.reset()
				},
				checkValidity: function(t, f) {
					var o, l;
					if (t = t || e, t = t.not(":disabled"), !t.length) return !0;
					if (f = f || n.Event(), f.type = "onBeforeValidate", c.trigger(f, [t]), f.isDefaultPrevented()) return f.result;
					if (o = [], t.not(":radio:not(:checked)").each(function() {
							var i = [],
								t = n(this).data("messages", i),
								e = r && t.is(":date") ? "onHide.v" : s.errorInputEvent + ".v";
							return t.unbind(e), n.each(u, function() {
								var n = this,
									r = n[0],
									u;
								if (t.filter(r).length && (n = n[1].call(h, t, t.val()), n !== !0)) {
									if (f.type = "onBeforeFail", c.trigger(f, [t, r]), f.isDefaultPrevented()) return !1;
									if (u = t.attr(s.messageAttr), u) return i = [u], !1;
									a(i, r, n)
								}
							}), i.length && (o.push({
								input: t,
								messages: i
							}), t.trigger("OI", [i]), s.errorInputEvent && t.bind(e, function(n) {
								h.checkValidity(t, n)
							})), s.singleError && o.length ? !1 : void 0
						}), l = i[s.effect], !l) throw 'Validator: cannot find effect "' + s.effect + '"';
					return o.length ? (h.invalidate(o, f), !1) : (l[1].call(h, t, f), f.type = "onSuccess", c.trigger(f, [t]), t.unbind(s.errorInputEvent + ".v"), !0)
				}
			}), n.each("onBeforeValidate,onBeforeFail,onFail,onSuccess".split(","), function(t, i) {
				n.isFunction(s[i]) && n(h).bind(i, s[i]), h[i] = function(t) {
					return t && n(h).bind(i, t), h
				}
			}), s.formEvent && o.bind(s.formEvent + ".V", function(n) {
				if (!h.checkValidity(null, n)) return n.preventDefault()
			}), o.bind("reset.V", function() {
				h.reset()
			}), e[0] && e[0].validity && e.each(function() {
				this.oninvalid = function() {
					return !1
				}
			}), o[0] && (o[0].checkValidity = h.checkValidity), s.inputEvent && e.bind(s.inputEvent + ".V", function(t) {
				h.checkValidity(n(this), t)
			}), e.filter(":checkbox, select").filter("[required]").bind("change.V", function(t) {
				var r = n(this);
				(this.checked || r.is("select") && n(this).val()) && i[s.effect][1].call(h, r, t)
			}), l = e.filter(":radio").change(function(n) {
				h.checkValidity(l, n)
			}), n(window).resize(function() {
				h.reflow()
			})
		}
		var u, i;
		n.tools = n.tools || {
			version: "1.2.5"
		};
		var s = /\[type=([a-z]+)\]/,
			h = /^-?[0-9]*(\.[0-9]+)?$/,
			r = n.tools.dateinput,
			c = /^([a-z0-9_\.\-\+]+)@([\da-z\.\-]+)\.([a-z\.]{2,6})$/i,
			l = /^(https?:\/\/)?[\da-z\.\-]+\.[a-z\.]{2,6}[#&+_\?\/\w \.\-=]*$/i,
			t;
		t = n.tools.validator = {
			conf: {
				grouped: !1,
				effect: "default",
				errorClass: "invalid",
				inputEvent: null,
				errorInputEvent: "keyup",
				formEvent: "submit",
				lang: "en",
				message: "<div/>",
				messageAttr: "data-message",
				messageClass: "error",
				offset: [0, 0],
				position: "center right",
				singleError: !1,
				speed: "normal"
			},
			messages: {
				"*": {
					en: "Please correct this value"
				}
			},
			localize: function(i, r) {
				n.each(r, function(n, r) {
					t.messages[n] = t.messages[n] || {}, t.messages[n][i] = r
				})
			},
			localizeFn: function(i, r) {
				t.messages[i] = t.messages[i] || {}, n.extend(t.messages[i], r)
			},
			fn: function(t, i, r) {
				n.isFunction(i) ? r = i : (typeof i == "string" && (i = {
					en: i
				}), this.messages[t.key || t] = i), (i = s.exec(t)) && (t = o(i[1])), u.push([t, r])
			},
			addEffect: function(n, t, r) {
				i[n] = [t, r]
			}
		}, u = [], i = {
			"default": [function(t) {
				var i = this.getConf();
				n.each(t, function(t, r) {
					t = r.input, t.addClass(i.errorClass);
					var u = t.data("msg.el");
					u || (u = n(i.message).addClass(i.messageClass).appendTo(document.body), t.data("msg.el", u)), u.css({
						visibility: "hidden"
					}).find("p").remove(), n.each(r.messages, function(t, i) {
						n("<p/>").html(i).appendTo(u)
					}), u.outerWidth() == u.parent().width() && u.add(u.find("p")).css({
						display: "inline"
					}), r = f(t, u, i), u.css({
						visibility: "visible",
						position: "absolute",
						top: r.top,
						left: r.left
					}).fadeIn(i.speed)
				})
			}, function(t) {
				var i = this.getConf();
				t.removeClass(i.errorClass).each(function() {
					var t = n(this).data("msg.el");
					t && t.css({
						visibility: "hidden"
					})
				})
			}]
		}, n.each("email,url,number".split(","), function(t, i) {
			n.expr[":"][i] = function(n) {
				return n.getAttribute("type") === i
			}
		}), n.fn.oninvalid = function(n) {
			return this[n ? "bind" : "trigger"]("OI", n)
		}, t.fn(":email", "Please enter a valid email address", function(n, t) {
			return !t || c.test(t)
		}), t.fn(":url", "Please enter a valid URL", function(n, t) {
			return !t || l.test(t)
		}), t.fn(":number", "Please enter a numeric value.", function(n, t) {
			return h.test(t)
		}), t.fn("[max]", "Please enter a value smaller than $1", function(n, t) {
			return t === "" || r && n.is(":date") ? !0 : (n = n.attr("max"), parseFloat(t) <= parseFloat(n) ? !0 : [n])
		}), t.fn("[min]", "Please enter a value larger than $1", function(n, t) {
			return t === "" || r && n.is(":date") ? !0 : (n = n.attr("min"), parseFloat(t) >= parseFloat(n) ? !0 : [n])
		}), t.fn("[required]", "Please complete this mandatory field.", function(n, t) {
			return n.is(":checkbox") ? n.is(":checked") : !!t
		}), t.fn("[pattern]", function(n) {
			var t = new RegExp("^" + n.attr("pattern") + "$");
			return t.test(n.val())
		}), n.fn.validator = function(i) {
			var r = this.data("validator");
			return r && (r.destroy(), this.removeData("validator")), i = n.extend(!0, {}, t.conf, i), this.is("form") ? this.each(function() {
				var t = n(this);
				r = new e(t.find(":input"), t, i), t.data("validator", r)
			}) : (r = new e(this, this.eq(0).closest("form"), i), this.data("validator", r))
		}
	}(jQuery),
	function(n) {
		"use strict";
		n.browser = {
			opera: !1,
			msie: !1,
			safari: !1,
			firefox: !1,
			chrome: !1,
			version: 600
		}
	}(jQuery, this, this.document);
/*!
 * http://www.shamasis.net/projects/ga/
 * Refer jquery.ga.debug.js
 * Revision: 13
 */
(function(n) {
	n.ga = {}, n.ga.load = function(r, u) {
		jQuery.ajax({
			type: "GET",
			url: (document.location.protocol == "https:" ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js",
			cache: !0,
			success: function() {
				if (typeof _gat == undefined) throw "_gat has not been defined";
				t = _gat._getTracker(r), i(), n.isFunction(u) && u(t), t._trackPageview()
			},
			dataType: "script",
			data: null
		})
	};
	var t, i = function() {
			if (r()) throw "pageTracker has not been defined";
			for (var i in t) i.charAt(0) == "_" && (n.ga[i.substr(1)] = t[i])
		},
		r = function() {
			return t == undefined
		}
})(jQuery);
/*!
 * jQuery Google Analytics Plugin
 * jquery.ga.js
 * http://www.shamasis.net/projects/ga/
 *
 * Copyright (c) 2009 Shamasis Bhattacharya
 * Complies and conforms to all jQuery licensing schemes.
 * http://docs.jquery.com/License
 *
 * Date: 2009-08-23
 * Revision: 13
 */
(function(n) {
	n.ga = {}, n.ga.load = function(r, u) {
		jQuery.ajax({
			type: "GET",
			url: (document.location.protocol == "https:" ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js",
			cache: !0,
			success: function() {
				if (typeof _gat == undefined) throw "_gat has not been defined";
				t = _gat._getTracker(r), i(), n.isFunction(u) && u(t), t._trackPageview()
			},
			dataType: "script",
			data: null
		})
	};
	var t, i = function() {
			if (r()) throw "pageTracker has not been defined";
			for (var i in t) i.charAt(0) == "_" && (n.ga[i.substr(1)] = t[i])
		},
		r = function() {
			return t == undefined
		}
})(jQuery),
function(n, t, i) {
	function l() {
		h = t[f](function() {
			r.each(function() {
				var i = n(this),
					r = i.width(),
					u = i.height(),
					t = n.data(this, e);
				(r !== t.w || u !== t.h) && i.trigger(s, [t.w = r, t.h = u])
			}), l()
		}, u[c])
	}
	var r = n([]),
		u = n.resize = n.extend(n.resize, {}),
		h, f = "setTimeout",
		s = "resize",
		e = s + "-special-event",
		c = "delay",
		o = "throttleWindow";
	u[c] = 250, u[o] = !0, n.event.special[s] = {
		setup: function() {
			if (!u[o] && this[f]) return !1;
			var t = n(this);
			r = r.add(t), n.data(this, e, {
				w: t.width(),
				h: t.height()
			}), r.length === 1 && l()
		},
		teardown: function() {
			if (!u[o] && this[f]) return !1;
			var t = n(this);
			r = r.not(t), t.removeData(e), r.length || clearTimeout(h)
		},
		add: function(t) {
			function s(t, u, f) {
				var o = n(this),
					s = n.data(this, e);
				s.w = u !== i ? u : o.width(), s.h = f !== i ? f : o.height(), r.apply(this, arguments)
			}
			if (!u[o] && this[f]) return !1;
			var r;
			if (n.isFunction(t)) return r = t, s;
			r = t.handler, t.handler = s
		}
	}
}(jQuery, this);
/*!
 * jQuery miniZoomPan 1.0
 * 2009 Gian Carlo Mingati
 * Version: 1.0 (18-JUNE-2009)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Requires:
 * jQuery v1.3.2 or later
 * 
 */
jQuery.fn.miniZoomPan = function(n) {
		return n = jQuery.extend({
			sW: 10,
			sH: 10,
			lW: 20,
			lH: 20,
			frameColor: "#cecece",
			frameWidth: 0,
			loaderContent: "loading...",
			zoom: !1,
			vpW: n.sW,
			vpH: n.sH,
			previewImageTitle: "",
			zoomImageTitle: "",
			previewType: "normal",
			zoomType: "zoom",
			previewTypeRegEx: /filetype=normal/,
			zoomTypeRegEx: /filetype=zoom/,
			callback: function() {}
		}, n), this.each(function() {
			function u(r, u) {
				var o = t.width(),
					s = t.height(),
					c = n.lW,
					l = n.lH,
					h = t.offset(),
					e = (r - h.left) * (o - c) / (o + n.frameWidth * 2),
					f;
				isNaN(e) && (e = 0), f = (u - h.top) * (s - l) / (s + n.frameWidth * 2), isNaN(f) && (f = 0), i.css({
					left: e,
					top: f
				})
			}

			function r(i, r, f, e, o) {
				t.children("span.loader").show();
				try {
					i.css({
						cursor: "progress"
					})
				} catch (s) {}
				i.load(function() {
					var r = new I18N;
					t.children("span.loader").hide(), f == !0 ? (t.data.zoom = !0, i.css({
						position: "relative",
						"margin-left": "0",
						left: "0",
						width: n.lW,
						height: n.lH
					}), i.css({
						cursor: "move"
					}), u(e, o), $("#zoomBtn").removeClass("zoomIn"), $("#zoomBtn").addClass("zoomOut")) : (t.data.zoom = !1, i.css({
						left: "0",
						top: "0",
						width: n.sW,
						height: n.sH
					}), i.css({
						cursor: "-moz-zoom-in"
					}), n.callback(), $("#zoomBtn").removeClass("zoomOut"), $("#zoomBtn").addClass("zoomIn")), r.doProcessing(), i.data.loading = !1
				}).error(function() {}), log("swapImage::after img.load"), i.attr("src", r)
			}
			var t = jQuery(this),
				i;
			t.data = {
				zoom: !1
			}, t.css({
				width: n.vpW,
				height: n.vpH,
				border: n.frameWidth + "px solid " + n.frameColor
			}).addClass("minizoompan"), i = t.children("img"), i.attr("title", n.previewImageTitle), i.css({
				cursor: "-moz-zoom-in"
			}), i.data = {
				loading: !1
			}, t.css({
				overflow: "hidden"
			}), jQuery("<span class='loader'>" + n.loaderContent + "<\/span>").insertBefore(i), t.mousemove(function(n) {
				t.data.zoom == !0 && u(n.pageX, n.pageY)
			}), i.click(function(i) {
				var u, f, e;
				if (!Modernizr.touch) {
					if (u = jQuery(this), u.data.loading == !0) return;
					u.data.loading = !0, t.data.zoom == !1 ? (f = u.attr("src").replace(n.previewTypeRegEx, "filetype=" + n.zoomType), r(u, f, !0, i.pageX, i.pageY)) : (e = u.attr("src").replace(n.zoomTypeRegEx, "filetype=" + n.previewType), r(u, e, !1))
				}
				return !1
			}), i.bind("swap", function(n, i) {
				var u = jQuery(this);
				u.data.loading = !0, t.children("span.loader").show(), r(u, i.toString(), !1)
			}), $("#zoomBtn").click(function(n) {
				jQuery("#previewImage").trigger("click", [n])
			})
		})
	},
	function(n) {
		function r(t, r, u) {
			var f = this,
				h = t.add(this),
				e = t.find(u.tabs),
				o = r.jquery ? r : t.children(r),
				s;
			e.length || (e = t.children()), o.length || (o = t.parent().find(r)), o.length || (o = n(r)), n.extend(this, {
				click: function(t, r) {
					var o = e.eq(t),
						c;
					if (typeof t == "string" && t.replace("#", "") && (o = e.filter("[href*=" + t.replace("#", "") + "]"), t = Math.max(e.index(o), 0)), u.rotate) {
						if (c = e.length - 1, t < 0) return f.click(c, r);
						if (t > c) return f.click(0, r)
					}
					if (!o.length) {
						if (s >= 0) return f;
						t = u.initialIndex, o = e.eq(t)
					}
					return r = r || n.Event(), r.type = "onBeforeClick", h.trigger(r, [t]), r.isDefaultPrevented() ? void 0 : (i[u.effect].call(f, t, function() {
						r.type = "onClick", h.trigger(r, [t])
					}), s = t, e.removeClass(u.current), o.addClass(u.current), f)
				},
				getConf: function() {
					return u
				},
				getTabs: function() {
					return e
				},
				getPanes: function() {
					return o
				},
				getCurrentPane: function() {
					return o.eq(s)
				},
				getCurrentTab: function() {
					return e.eq(s)
				},
				getIndex: function() {
					return s
				},
				next: function() {
					return f.click(s + 1)
				},
				prev: function() {
					return f.click(s - 1)
				},
				destroy: function() {
					return e.unbind(u.event).removeClass(u.current), o.find("a[href^=#]").unbind("click.T"), f
				}
			}), n.each("onBeforeClick,onClick".split(","), function(t, i) {
				n.isFunction(u[i]) && n(f).bind(i, u[i]), f[i] = function(t) {
					return t && n(f).bind(i, t), f
				}
			}), u.history && n.fn.history && (n.tools.history.init(e), u.event = "history"), e.each(function(t) {
				n(this).bind(u.event, function(n) {
					return f.click(t, n), n.preventDefault()
				})
			}), o.find("a[href^=#]").bind("click.T", function(t) {
				f.click(n(this).attr("href"), t)
			}), location.hash && u.tabs == "a" && t.find("[href=" + location.hash + "]").length ? f.click(location.hash) : (u.initialIndex === 0 || u.initialIndex > 0) && f.click(u.initialIndex)
		}
		n.tools = n.tools || {
			version: "1.2.5"
		}, n.tools.tabs = {
			conf: {
				tabs: "a",
				current: "current",
				onBeforeClick: null,
				onClick: null,
				effect: "default",
				initialIndex: 0,
				event: "click",
				rotate: !1,
				history: !1
			},
			addEffect: function(n, t) {
				i[n] = t
			}
		};
		var i = {
				"default": function(n, t) {
					this.getPanes().hide().eq(n).show(), t.call()
				},
				fade: function(n, t) {
					var r = this.getConf(),
						u = r.fadeOutSpeed,
						i = this.getPanes();
					u ? i.fadeOut(u) : i.hide(), i.eq(n).fadeIn(r.fadeInSpeed, t)
				},
				slide: function(n, t) {
					this.getPanes().slideUp(200), this.getPanes().eq(n).slideDown(400, t)
				},
				ajax: function(n, t) {
					this.getPanes().eq(0).load(this.getTabs().eq(n).attr("href"), t)
				}
			},
			t;
		n.tools.tabs.addEffect("horizontal", function(i, r) {
			t || (t = this.getPanes().eq(0).width()), this.getCurrentPane().animate({
				width: 0
			}, function() {
				n(this).hide()
			}), this.getPanes().eq(i).animate({
				width: t
			}, function() {
				n(this).show(), r.call()
			})
		}), n.fn.tabs = function(t, i) {
			var u = this.data("tabs");
			return u && (u.destroy(), this.removeData("tabs")), n.isFunction(i) && (i = {
				onBeforeClick: i
			}), i = n.extend({}, n.tools.tabs.conf, i), this.each(function() {
				u = new r(n(this), t, i), n(this).data("tabs", u)
			}), i.api ? u : this
		}
	}(jQuery),
	function(n) {
		function i(t, i) {
			function c(i) {
				var r = n(i);
				return r.length < 2 ? r : t.parent().find(i)
			}
			var r = this,
				e = t.add(this),
				u = t.data("tabs"),
				f, s = !0,
				l = c(i.next).click(function() {
					u.next()
				}),
				h = c(i.prev).click(function() {
					u.prev()
				}),
				o;
			if (n.extend(r, {
					getTabs: function() {
						return u
					},
					getConf: function() {
						return i
					},
					play: function() {
						if (f) return r;
						var t = n.Event("onBeforePlay");
						return (e.trigger(t), t.isDefaultPrevented()) ? r : (f = setInterval(u.next, i.interval), s = !1, e.trigger("onPlay"), r)
					},
					pause: function() {
						if (!f) return r;
						var t = n.Event("onBeforePause");
						return (e.trigger(t), t.isDefaultPrevented()) ? r : (f = clearInterval(f), e.trigger("onPause"), r)
					},
					stop: function() {
						r.pause(), s = !0
					}
				}), n.each("onBeforePlay,onPlay,onBeforePause,onPause".split(","), function(t, u) {
					n.isFunction(i[u]) && n(r).bind(u, i[u]), r[u] = function(t) {
						return n(r).bind(u, t)
					}
				}), i.autopause && u.getTabs().add(l).add(h).add(u.getPanes()).hover(r.pause, function() {
					s || r.play()
				}), i.autoplay && r.play(), i.clickable && u.getPanes().click(function() {
					u.next()
				}), !u.getConf().rotate) {
				o = i.disabledClass, u.getIndex() || h.addClass(o);
				u.onBeforeClick(function(n, t) {
					h.toggleClass(o, !t), l.toggleClass(o, t == u.getTabs().length - 1)
				})
			}
		}
		var t;
		t = n.tools.tabs.slideshow = {
			conf: {
				next: ".forward",
				prev: ".backward",
				disabledClass: "disabled",
				autoplay: !1,
				autopause: !0,
				interval: 3e3,
				clickable: !0,
				api: !1
			}
		}, n.fn.slideshow = function(r) {
			var u = this.data("slideshow");
			return u ? u : (r = n.extend({}, t.conf, r), this.each(function() {
				u = new i(n(this), r), n(this).data("slideshow", u)
			}), r.api ? u : this)
		}
	}(jQuery),
	function(n) {
		function i(t, i, r) {
			var u = r.relative ? t.position().top : t.offset().top,
				e = r.relative ? t.position().left : t.offset().left,
				f = r.position[0],
				o;
			return u -= i.outerHeight() - r.offset[0], e += t.outerWidth() + r.offset[1], /iPad/i.test(navigator.userAgent) && (u -= n(window).scrollTop()), o = i.outerHeight() + t.outerHeight(), f == "center" && (u += o / 2), f == "bottom" && (u += o), f = r.position[1], t = i.outerWidth() + t.outerWidth(), f == "center" && (e -= t / 2), f == "left" && (e -= t), {
				top: u,
				left: e
			}
		}

		function r(r, u) {
			var f = this,
				h = r.add(f),
				e, l = 0,
				a = 0,
				c = r.attr("title"),
				v = r.attr("data-tooltip"),
				y = t[u.effect],
				s, p = r.is(":input"),
				b = p && r.is(":checkbox, :radio, select, :button, :submit"),
				w = r.attr("type"),
				o = u.events[w] || u.events[p ? b ? "widget" : "input" : "def"];
			if (!y) throw 'Nonexistent effect "' + u.effect + '"';
			if (o = o.split(/,\s*/), o.length != 2) throw "Tooltip: bad events configuration for " + w;
			r.bind(o[0], function(n) {
				clearTimeout(l), u.predelay ? a = setTimeout(function() {
					f.show(n)
				}, u.predelay) : f.show(n)
			}).bind(o[1], function(n) {
				clearTimeout(a), u.delay ? l = setTimeout(function() {
					f.hide(n)
				}, u.delay) : f.hide(n)
			}), c && u.cancelDefault && (r.removeAttr("title"), r.data("title", c)), n.extend(f, {
				show: function(t) {
					if (!e && (v ? e = n(v) : u.tip ? e = n(u.tip).eq(0) : c ? e = n(u.layout).addClass(u.tipClass).appendTo(document.body).hide().append(c) : (e = r.next(), e.length || (e = r.parent().next())), !e.length)) throw "Cannot find tooltip for " + r;
					if (f.isShown()) return f;
					e.stop(!0, !0);
					var p = i(r, e, u);
					return (u.tip && e.html(r.data("title")), t = t || n.Event(), t.type = "onBeforeShow", h.trigger(t, [p]), t.isDefaultPrevented()) ? f : (p = i(r, e, u), e.css({
						position: "absolute",
						top: p.top,
						left: p.left
					}), s = !0, y[0].call(f, function() {
						t.type = "onShow", s = "full", h.trigger(t)
					}), p = u.events.tooltip.split(/,\s*/), e.data("__set") || (e.bind(p[0], function() {
						clearTimeout(l), clearTimeout(a)
					}), p[1] && !r.is("input:not(:checkbox, :radio), textarea") && e.bind(p[1], function(n) {
						n.relatedTarget != r[0] && r.trigger(o[1].split(" ")[0])
					}), e.data("__set", !0)), f)
				},
				hide: function(i) {
					return !e || !f.isShown() ? f : (i = i || n.Event(), i.type = "onBeforeHide", h.trigger(i), i.isDefaultPrevented() ? void 0 : (s = !1, t[u.effect][1].call(f, function() {
						i.type = "onHide", h.trigger(i)
					}), f))
				},
				isShown: function(n) {
					return n ? s == "full" : s
				},
				getConf: function() {
					return u
				},
				getTip: function() {
					return e
				},
				getTrigger: function() {
					return r
				}
			}), n.each("onHide,onBeforeShow,onShow,onBeforeHide".split(","), function(t, i) {
				n.isFunction(u[i]) && n(f).bind(i, u[i]), f[i] = function(t) {
					return t && n(f).bind(i, t), f
				}
			})
		}
		n.tools = n.tools || {
			version: "1.2.5"
		}, n.tools.tooltip = {
			conf: {
				effect: "toggle",
				fadeOutSpeed: "fast",
				predelay: 0,
				delay: 30,
				opacity: 1,
				tip: 0,
				position: ["top", "center"],
				offset: [0, 0],
				relative: !1,
				cancelDefault: !0,
				events: {
					def: "mouseenter,mouseleave",
					input: "focus,blur",
					widget: "focus mouseenter,blur mouseleave",
					tooltip: "mouseenter,mouseleave"
				},
				layout: "<div/>",
				tipClass: "tooltip"
			},
			addEffect: function(n, i, r) {
				t[n] = [i, r]
			}
		};
		var t = {
			toggle: [function(n) {
				var t = this.getConf(),
					i = this.getTip();
				t = t.opacity, t < 1 && i.css({
					opacity: t
				}), i.show(), n.call()
			}, function(n) {
				this.getTip().hide(), n.call()
			}],
			fade: [function(n) {
				var t = this.getConf();
				this.getTip().fadeTo(t.fadeInSpeed, t.opacity, n)
			}, function(n) {
				this.getTip().fadeOut(this.getConf().fadeOutSpeed, n)
			}]
		};
		n.fn.tooltip = function(t) {
			var i = this.data("tooltip");
			return i ? i : (t = n.extend(!0, {}, n.tools.tooltip.conf, t), typeof t.position == "string" && (t.position = t.position.split(/,?\s/)), this.each(function() {
				i = new r(n(this), t), n(this).data("tooltip", i)
			}), t.api ? i : this)
		}
	}(jQuery),
	function(n) {
		var i = n.tools.tooltip,
			t;
		n.extend(i.conf, {
			direction: "up",
			bounce: !1,
			slideOffset: 10,
			slideInSpeed: 200,
			slideOutSpeed: 200,
			slideFade: !n.browser.msie
		}), t = {
			up: ["-", "top"],
			down: ["+", "top"],
			left: ["-", "left"],
			right: ["+", "left"]
		}, i.addEffect("slide", function(n) {
			var i = this.getConf(),
				r = this.getTip(),
				u = i.slideFade ? {
					opacity: i.opacity
				} : {},
				f = t[i.direction] || t.up;
			u[f[1]] = f[0] + "=" + i.slideOffset, i.slideFade && r.css({
				opacity: 0
			}), r.show().animate(u, i.slideInSpeed, n)
		}, function(i) {
			var r = this.getConf(),
				o = r.slideOffset,
				f = r.slideFade ? {
					opacity: 0
				} : {},
				e = t[r.direction] || t.up,
				u = "" + e[0];
			r.bounce && (u = u == "+" ? "-" : "+"), f[e[1]] = u + "=" + o, this.getTip().animate(f, r.slideOutSpeed, function() {
				n(this).hide(), i.call()
			})
		})
	}(jQuery),
	function(n) {
		function i(t) {
			var i = n(window),
				r = i.width() + i.scrollLeft(),
				u = i.height() + i.scrollTop();
			return [t.offset().top <= i.scrollTop(), r <= t.offset().left + t.width(), u <= t.offset().top + t.height(), i.scrollLeft() >= t.offset().left]
		}

		function r(n) {
			for (var t = n.length; t--;)
				if (n[t]) return !1;
			return !0
		}
		var t = n.tools.tooltip;
		t.dynamic = {
			conf: {
				classNames: "top right bottom left"
			}
		}, n.fn.dynamic = function(u) {
			typeof u == "number" && (u = {
				speed: u
			}), u = n.extend({}, t.dynamic.conf, u);
			var e = u.classNames.split(/\s/),
				f;
			return this.each(function() {
				var t = n(this).tooltip().onBeforeShow(function(t, o) {
					t = this.getTip();
					var s = this.getConf();
					f || (f = [s.position[0], s.position[1], s.offset[0], s.offset[1], n.extend({}, s)]), n.extend(s, f[4]), s.position = [f[0], f[1]], s.offset = [f[2], f[3]], t.css({
						visibility: "hidden",
						position: "absolute",
						top: o.top,
						left: o.left
					}).show(), o = i(t), r(o) || (o[2] && (n.extend(s, u.top), s.position[0] = "top", t.addClass(e[0])), o[3] && (n.extend(s, u.right), s.position[1] = "right", t.addClass(e[1])), o[0] && (n.extend(s, u.bottom), s.position[0] = "bottom", t.addClass(e[2])), o[1] && (n.extend(s, u.left), s.position[1] = "left", t.addClass(e[3])), (o[0] || o[2]) && (s.offset[0] *= -1), (o[1] || o[3]) && (s.offset[1] *= -1)), t.css({
						visibility: "visible"
					}).hide()
				});
				t.onBeforeShow(function() {
					var n = this.getConf();
					this.getTip(), setTimeout(function() {
						n.position = [f[0], f[1]], n.offset = [f[2], f[3]]
					}, 0)
				});
				t.onHide(function() {
					var n = this.getTip();
					n.removeClass(u.classNames)
				});
				ret = t
			}), u.api ? ret : this
		}
	}(jQuery),
	function(n) {
		function i(i, r) {
			function h(t) {
				var u = n(t);
				return r.globalNav ? u : i.parent().find(t)
			}
			var u = this,
				s = n(this),
				p = !r.vertical,
				f = i.children(),
				e = 0,
				o, v, y;
			t || (t = u), n.each(r, function(t, i) {
				n.isFunction(i) && s.bind(t, i)
			}), f.length > 1 && (f = n(r.items, i)), i.data("finder", h);
			var w = h(r.prev),
				l = h(r.next),
				a = h(r.prevPage),
				c = h(r.nextPage);
			n.extend(u, {
				getIndex: function() {
					return e
				},
				getClickIndex: function() {
					var n = u.getItems();
					return n.index(n.filter("." + r.activeClass))
				},
				getConf: function() {
					return r
				},
				getSize: function() {
					return u.getItems().size()
				},
				getPageAmount: function() {
					return Math.ceil(this.getSize() / r.size)
				},
				getPageIndex: function() {
					return Math.ceil(e / r.size)
				},
				getNaviButtons: function() {
					return w.add(l).add(a).add(c)
				},
				getRoot: function() {
					return i
				},
				getItemWrap: function() {
					return f
				},
				getItems: function() {
					return f.children(r.item)
				},
				getVisibleItems: function() {
					return u.getItems().slice(e, e + r.size)
				},
				seekTo: function(i, o, h) {
					function b() {
						h && h.call(u, i), s.trigger("onSeek", [i])
					}
					var y, v;
					return (i < 0 && (i = 0), e === i) ? u : (n.isFunction(o) && (h = o), i > u.getSize() - r.size) ? r.loop ? u.begin() : this.end() : (y = u.getItems().eq(i), !y.length) ? u : (v = n.Event("onBeforeSeek"), s.trigger(v, [i]), v.isDefaultPrevented()) ? u : ((o === undefined || n.isFunction(o)) && (o = r.speed), p ? f.animate({
						left: -y.position().left
					}, o, r.easing, b) : f.animate({
						top: -y.position().top
					}, o, r.easing, b), t = u, e = i, v = n.Event("onStart"), s.trigger(v, [i]), v.isDefaultPrevented()) ? u : (w.add(a).toggleClass(r.disabledClass, i === 0), l.add(c).toggleClass(r.disabledClass, i >= u.getSize() - r.size), u)
				},
				move: function(n, t, i) {
					return o = n > 0, this.seekTo(e + n, t, i)
				},
				next: function(n, t) {
					return this.move(1, n, t)
				},
				prev: function(n, t) {
					return this.move(-1, n, t)
				},
				movePage: function(n, t, i) {
					o = n > 0;
					var f = r.size * n,
						u = e % r.size;
					return u > 0 && (f += n > 0 ? -u : r.size - u), this.move(f, t, i)
				},
				prevPage: function(n, t) {
					return this.movePage(-1, n, t)
				},
				nextPage: function(n, t) {
					return this.movePage(1, n, t)
				},
				setPage: function(n, t, i) {
					return this.seekTo(n * r.size, t, i)
				},
				begin: function(n, t) {
					return o = !1, this.seekTo(0, n, t)
				},
				end: function(n, t) {
					o = !0;
					var i = this.getSize() - r.size;
					return i > 0 ? this.seekTo(i, n, t) : u
				},
				reload: function() {
					return s.trigger("onReload"), u
				},
				focus: function() {
					return t = u, u
				},
				click: function(n) {
					var s = u.getItems().eq(n),
						t = r.activeClass,
						i = r.size,
						h, f;
					return n < 0 || n >= u.getSize() ? u : i == 1 ? r.loop ? u.next() : ((n === 0 || n == u.getSize() - 1) && (o = o === undefined ? !0 : !o), o === !1 ? u.prev() : u.next()) : i == 2 ? (n == e && n--, u.getItems().removeClass(t), s.addClass(t), u.seekTo(n, time, fn)) : !s.hasClass(t) && (u.getItems().removeClass(t), s.addClass(t), h = Math.floor(i / 2), f = n - h, f > u.getSize() - i && (f = u.getSize() - i), f !== n) ? u.seekTo(f) : u
				},
				bind: function(n, t) {
					return s.bind(n, t), u
				},
				unbind: function(n) {
					return s.unbind(n), u
				}
			}), n.each("onBeforeSeek,onStart,onSeek,onReload".split(","), function(n, t) {
				u[t] = function(n) {
					return u.bind(t, n)
				}
			}), w.addClass(r.disabledClass).click(function() {
				u.prev()
			}), l.click(function() {
				u.next()
			}), c.click(function() {
				u.nextPage()
			}), u.getSize() < r.size && l.add(c).addClass(r.disabledClass), a.addClass(r.disabledClass).click(function() {
				u.prevPage()
			}), v = r.hoverClass, y = "keydown." + Math.random().toString().substring(10);
			u.onReload(function() {
				if (v && u.getItems().hover(function() {
						n(this).addClass(v)
					}, function() {
						n(this).removeClass(v)
					}), r.clickable && u.getItems().each(function(t) {
						n(this).unbind("click.scrollable").bind("click.scrollable", function(i) {
							if (!n(i.target).is("a")) return u.click(t)
						})
					}), r.touch) {
					var i = {};
					f[0].ontouchstart = function(n) {
						var t = n.touches[0];
						i.x = t.clientX, i.y = t.clientY
					}, f[0].ontouchmove = function(n) {
						if (n.touches.length == 1 && !f.is(":animated")) {
							var t = n.touches[0],
								u = i.x - t.clientX,
								e = i.y - t.clientY;
							r.vertical && e > 40 || !r.vertical && u > 40 ? (n.preventDefault(), c.click()) : (r.vertical && e < -40 || !r.vertical && u < -40) && (n.preventDefault(), a.click())
						}
					}
				}
				r.keyboard ? n(document).unbind(y).bind(y, function(n) {
					if (!n.altKey && !n.ctrlKey && (r.keyboard == "static" || t == u)) {
						var i = r.keyboardSteps;
						return p && (n.keyCode == 37 || n.keyCode == 39) ? (u.move(n.keyCode == 37 ? -i : i), n.preventDefault()) : !p && (n.keyCode == 38 || n.keyCode == 40) ? (u.move(n.keyCode == 38 ? -i : i), n.preventDefault()) : !0
					}
				}) : n(document).unbind(y)
			});
			u.reload()
		}
		n.tools = n.tools || {}, n.tools.scrollable = {
			version: "1.1.2",
			conf: {
				touch: !0,
				size: 5,
				vertical: !1,
				speed: 400,
				keyboard: !0,
				keyboardSteps: null,
				disabledClass: "disabled",
				hoverClass: null,
				clickable: !0,
				activeClass: "active",
				easing: "swing",
				loop: !1,
				items: ".items",
				item: null,
				prev: ".prev",
				next: ".next",
				prevPage: ".prevPage",
				nextPage: ".nextPage",
				api: !1
			}
		};
		var t;
		n.fn.scrollable = function(t) {
			var r = this.eq(typeof t == "number" ? t : 0).data("scrollable"),
				u;
			return r ? r : (u = n.extend({}, n.tools.scrollable.conf), t = n.extend(u, t), t.keyboardSteps = t.keyboardSteps || t.size, this.each(function() {
				r = new i(n(this), t), n(this).data("scrollable", r)
			}), t.api ? r : this)
		}
	}(jQuery),
	function(n) {
		var t = n.tools.scrollable;
		t.plugins = t.plugins || {}, t.plugins.circular = {
			version: "0.5.1",
			conf: {
				api: !1,
				clonedClass: "cloned"
			}
		}, n.fn.circular = function(i) {
			var r = n.extend({}, t.plugins.circular.conf),
				u;
			return n.extend(r, i), this.each(function() {
				function l(n) {
					var i = s.eq(n);
					t.vertical ? o.css({
						top: -i.position().top
					}) : o.css({
						left: -i.position().left
					})
				}
				var i = n(this).scrollable(),
					e = i.getItems(),
					t = i.getConf(),
					o = i.getItemWrap(),
					f = 0,
					c, s, h;
				if (i && (u = i), e.length < t.size) return !1;
				e.slice(0, t.size).each(function(t) {
					n(this).clone().appendTo(o).click(function() {
						i.click(e.length + t)
					}).addClass(r.clonedClass)
				}), c = n.makeArray(e.slice(-t.size)).reverse(), n(c).each(function(t) {
					n(this).clone().prependTo(o).click(function() {
						i.click(-t - 1)
					}).addClass(r.clonedClass)
				}), s = o.children(t.item), h = t.hoverClass, h && s.hover(function() {
					n(this).addClass(h)
				}, function() {
					n(this).removeClass(h)
				}), l(t.size), n.extend(i, {
					move: function(n, r, u, o) {
						var h = f + n + t.size,
							a = h > i.getSize() - t.size,
							c;
						return ((h <= 0 || a) && (c = f + t.size + (a ? -e.length : e.length), l(c), h = c + n), o && s.removeClass(t.activeClass).eq(h + Math.floor(t.size / 2)).addClass(t.activeClass), h === f + t.size) ? self : i.seekTo(h, r, u)
					},
					begin: function(n, i) {
						return this.seekTo(t.size, n, i)
					},
					end: function(n, t) {
						return this.seekTo(e.length, n, t)
					},
					click: function(n, i, r) {
						if (!t.clickable) return self;
						if (t.size == 1) return this.next();
						var u = n - f,
							e = t.activeClass;
						return u -= Math.floor(t.size / 2), this.move(u, i, r, !0)
					},
					getIndex: function() {
						return f
					},
					setPage: function(n, i, r) {
						return this.seekTo(n * t.size + t.size, i, r)
					},
					getPageAmount: function() {
						return Math.ceil(e.length / t.size)
					},
					getPageIndex: function() {
						if (f < 0) return this.getPageAmount() - 1;
						if (f >= e.length) return 0;
						return (f + t.size) / t.size - 1
					},
					getVisibleItems: function() {
						var n = f + t.size;
						return s.slice(n, n + t.size)
					}
				});
				i.onStart(function(n, i) {
					return f = i - t.size, !1
				});
				i.getNaviButtons().removeClass(t.disabledClass)
			}), r.api ? u : this
		}
	}(jQuery),
	function(n) {
		var t = n.tools.scrollable;
		t.plugins = t.plugins || {}, t.plugins.autoscroll = {
			version: "1.0.1",
			conf: {
				autoplay: !0,
				interval: 3e3,
				autopause: !0,
				steps: 1,
				api: !1
			}
		}, n.fn.autoscroll = function(i) {
			typeof i == "number" && (i = {
				interval: i
			});
			var r = n.extend({}, t.plugins.autoscroll.conf),
				u;
			return n.extend(r, i), this.each(function() {
				var t = n(this).scrollable(),
					i, e, f;
				t && (u = t), f = !0, t.play = function() {
					i || (f = !1, i = setInterval(function() {
						t.move(r.steps)
					}, r.interval), t.move(r.steps))
				}, t.pause = function() {
					i = clearInterval(i)
				}, t.stop = function() {
					t.pause(), f = !0
				}, r.autopause && t.getRoot().add(t.getNaviButtons()).hover(function() {
					t.pause(), clearInterval(e)
				}, function() {
					f || (e = setTimeout(t.play, r.interval))
				}), r.autoplay && setTimeout(t.play, r.interval)
			}), r.api ? u : this
		}
	}(jQuery),
	function(n) {
		function r(r, u) {
			var f = this,
				h = r.add(f),
				v = n(window),
				s, e, c, o = n.tools.expose && (u.mask || u.expose),
				l = Math.random().toString().slice(10),
				a;
			if (o && (typeof o == "string" && (o = {
					color: o
				}), o.closeOnClick = o.closeOnEsc = !1), a = u.target || r.attr("rel"), e = a ? n(a) : r, !e.length) throw "Could not find Overlay: " + a;
			r && r.index(e) == -1 && r.click(function(n) {
				return f.load(n), n.preventDefault()
			}), n.extend(f, {
				load: function(r) {
					var a;
					if (f.isOpened()) return f;
					if (a = t[u.effect], !a) throw 'Overlay: cannot find effect : "' + u.effect + '"';
					if (u.oneInstance && n.each(i, function() {
							this.close(r)
						}), r = r || n.Event(), r.type = "onBeforeLoad", h.trigger(r), r.isDefaultPrevented()) return f;
					c = !0, o && n(e).expose(o);
					var s = u.top,
						y = u.left,
						p = e.outerWidth({
							margin: !0
						}),
						w = e.outerHeight({
							margin: !0
						});
					return typeof s == "string" && (s = s == "center" ? Math.max((v.height() - w) / 2, 0) : parseInt(s, 10) / 100 * v.height()), y == "center" && (y = Math.max((v.width() - p) / 2, 0)), a[0].call(f, {
						top: s,
						left: y
					}, function() {
						c && (r.type = "onLoad", h.trigger(r))
					}), o && u.closeOnClick && n.mask.getMask().one("click", f.close), u.closeOnClick && n(document).bind("click." + l, function(t) {
						n(t.target).parents(e).length || f.close(t)
					}), u.closeOnEsc && n(document).bind("keydown." + l, function(n) {
						n.keyCode == 27 && f.close(n)
					}), f
				},
				close: function(i) {
					return f.isOpened() ? (i = i || n.Event(), i.type = "onBeforeClose", h.trigger(i), i.isDefaultPrevented() ? void 0 : (c = !1, t[u.effect][1].call(f, function() {
						i.type = "onClose", h.trigger(i)
					}), n(document).unbind("click." + l).unbind("keydown." + l), o && n.mask.close(), f)) : f
				},
				getOverlay: function() {
					return e
				},
				getTrigger: function() {
					return r
				},
				getClosers: function() {
					return s
				},
				isOpened: function() {
					return c
				},
				getConf: function() {
					return u
				}
			}), n.each("onBeforeLoad,onStart,onLoad,onBeforeClose,onClose".split(","), function(t, i) {
				n.isFunction(u[i]) && n(f).bind(i, u[i]), f[i] = function(t) {
					return t && n(f).bind(i, t), f
				}
			}), s = e.find(u.close || ".close"), s.length || u.close || (s = n('<a class="close"><\/a>'), e.prepend(s)), s.click(function(n) {
				f.close(n)
			}), u.load && f.load()
		}
		n.tools = n.tools || {
			version: "1.2.5"
		}, n.tools.overlay = {
			addEffect: function(n, i, r) {
				t[n] = [i, r]
			},
			conf: {
				close: null,
				closeOnClick: !0,
				closeOnEsc: !0,
				closeSpeed: "fast",
				effect: "default",
				fixed: !n.browser.msie || n.browser.version > 6,
				left: "center",
				load: !1,
				mask: null,
				oneInstance: !0,
				speed: "normal",
				target: null,
				top: "10%"
			}
		};
		var i = [],
			t = {};
		n.tools.overlay.addEffect("default", function(t, i) {
			var r = this.getConf(),
				u = n(window);
			r.fixed || (t.top += u.scrollTop(), t.left += u.scrollLeft()), t.position = r.fixed ? "fixed" : "absolute", this.getOverlay().css(t).fadeIn(r.speed, i)
		}, function(n) {
			this.getOverlay().fadeOut(this.getConf().closeSpeed, n)
		}), n.fn.overlay = function(t) {
			var u = this.data("overlay");
			return u ? u : (n.isFunction(t) && (t = {
				onBeforeLoad: t
			}), t = n.extend(!0, {}, n.tools.overlay.conf, t), this.each(function() {
				u = new r(n(this), t), i.push(u), n(this).data("overlay", u)
			}), t.api ? u : this)
		}
	}(jQuery),
	function(n) {
		function i(n) {
			var t = n.offset();
			return {
				top: t.top + n.height() / 2,
				left: t.left + n.width() / 2
			}
		}

		function u(r, u) {
			var e = this.getOverlay(),
				o = this.getConf(),
				s = this.getTrigger(),
				v = this,
				l = e.outerWidth({
					margin: !0
				}),
				f = e.data("img"),
				a = o.fixed ? "fixed" : "absolute",
				h, c;
			if (!f) {
				if (f = e.css("backgroundImage"), !f) throw "background-image CSS property not set for overlay";
				f = f.slice(f.indexOf("(") + 1, f.indexOf(")")).replace(/\"/g, ""), e.css("backgroundImage", "none"), f = n('<img src="' + f + '"/>'), f.css({
					border: 0,
					display: "none"
				}).width(l), n("body").append(f), e.data("img", f)
			}
			h = o.start.top || Math.round(t.height() / 2), c = o.start.left || Math.round(t.width() / 2), s && (s = i(s), h = s.top, c = s.left), o.fixed ? (h -= t.scrollTop(), c -= t.scrollLeft()) : (r.top += t.scrollTop(), r.left += t.scrollLeft()), f.css({
				position: "absolute",
				top: h,
				left: c,
				width: 0,
				zIndex: o.zIndex
			}).show(), r.position = a, e.css(r), f.animate({
				top: e.css("top"),
				left: e.css("left"),
				width: l
			}, o.speed, function() {
				e.css("zIndex", o.zIndex + 1).fadeIn(o.fadeInSpeed, function() {
					v.isOpened() && !n(this).index(e) ? u.call() : e.hide()
				})
			}).css("position", a)
		}

		function f(r) {
			var u = this.getOverlay().hide(),
				f = this.getConf(),
				o = this.getTrigger(),
				e;
			u = u.data("img"), e = {
				top: f.start.top,
				left: f.start.left,
				width: 0
			}, o && n.extend(e, i(o)), f.fixed && u.css({
				position: "absolute"
			}).animate({
				top: "+=" + t.scrollTop(),
				left: "+=" + t.scrollLeft()
			}, 0), u.animate(e, f.closeSpeed, r)
		}
		var r = n.tools.overlay,
			t = n(window);
		n.extend(r.conf, {
			start: {
				top: null,
				left: null
			},
			fadeInSpeed: "fast",
			zIndex: 9999
		}), r.addEffect("apple", u, f)
	}(jQuery),
	function(n, t, i) {
		n.fn.jScrollPane = function(t) {
			function u(t, r) {
				function si(r) {
					var l, a, p, k, d, b;
					if (u = r, f == i) t.css({
						overflow: "hidden",
						padding: 0
					}), c = t.innerWidth() + it, h = t.innerHeight(), t.width(c), f = n('<div class="jspPane" />').wrap(n('<div class="jspContainer" />').css({
						width: c + "px",
						height: h + "px"
					})), t.wrapInner(f.parent()), e = t.find(">.jspContainer"), f = e.find(">.jspPane"), f.css("padding", vi);
					else {
						if (t.css("width", ""), b = t.outerWidth() + it != c || t.outerHeight() != h, b && (c = t.innerWidth() + it, h = t.innerHeight(), e.css({
								width: c + "px",
								height: h + "px"
							})), ei = f.innerWidth(), !b && f.outerWidth() == ot && f.outerHeight() == w) {
							(v || y) && (f.css("width", ei + "px"), t.css("width", ei + it + "px"));
							return
						}
						f.css("width", ""), t.css("width", c + "px"), e.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()
					}
					l = f.clone().css("position", "absolute"), a = n('<div style="width:1px; position: relative;" />').append(l), n("body").append(a), ot = Math.max(f.outerWidth(), l.outerWidth()), a.remove(), w = f.outerHeight(), ii = ot / c, wt = w / h, y = wt > 1, v = ii > 1, v || y ? (t.addClass("jspScrollable"), p = u.maintainPosition && (o || s), p && (k = ai(), d = ht()), nr(), tr(), ir(), p && (li(k), ut(d)), hr(), or(), u.enableKeyboardNavigation && lr(), u.clickOnTrack && ur(), vr(), u.hijackInternalLinks && gi()) : (t.removeClass("jspScrollable"), f.css({
						top: 0,
						width: e.width() - it
					}), sr(), cr(), ar(), bi(), di()), u.autoReinitialise && !bt ? bt = setInterval(function() {
						si(u)
					}, u.autoReinitialiseDelay) : !u.autoReinitialise && bt && clearInterval(bt), t.trigger("jsp-initialised", [v || y])
				}

				function nr() {
					y && (e.append(n('<div class="jspVerticalBar" />').append(n('<div class="jspCap jspCapTop" />'), n('<div class="jspTrack" />').append(n('<div class="jspDrag" />').append(n('<div class="jspDragTop" />'), n('<div class="jspDragBottom" />'))), n('<div class="jspCap jspCapBottom" />'))), ri = e.find(">.jspVerticalBar"), b = ri.find(">.jspTrack"), l = b.find(">.jspDrag"), u.showArrows && (lt = n('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp", rt(0, -1)).bind("click.jsp", ti), at = n('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp", rt(0, 1)).bind("click.jsp", ti), u.arrowScrollOnHover && (lt.bind("mouseover.jsp", rt(0, -1, lt)), at.bind("mouseover.jsp", rt(0, 1, at))), wi(b, u.verticalArrowPositions, lt, at)), st = h, e.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function() {
						st -= n(this).outerHeight()
					}), l.hover(function() {
						l.addClass("jspHover")
					}, function() {
						l.removeClass("jspHover")
					}).bind("mousedown.jsp", function(t) {
						n("html").bind("dragstart.jsp selectstart.jsp", function() {
							return !1
						}), l.addClass("jspActive");
						var i = t.pageY - l.position().top;
						return n("html").bind("mousemove.jsp", function(n) {
							p(n.pageY - i, !1)
						}).bind("mouseup.jsp mouseleave.jsp", ki), !1
					}), yi())
				}

				function yi() {
					b.height(st + "px"), o = 0, ui = u.verticalGutter + b.outerWidth(), f.width(c - ui - it), ri.position().left == 0 && f.css("margin-left", ui + "px")
				}

				function tr() {
					v && (e.append(n('<div class="jspHorizontalBar" />').append(n('<div class="jspCap jspCapLeft" />'), n('<div class="jspTrack" />').append(n('<div class="jspDrag" />').append(n('<div class="jspDragLeft" />'), n('<div class="jspDragRight" />'))), n('<div class="jspCap jspCapRight" />'))), fi = e.find(">.jspHorizontalBar"), k = fi.find(">.jspTrack"), a = k.find(">.jspDrag"), u.showArrows && (vt = n('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp", rt(-1, 0)).bind("click.jsp", ti), yt = n('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp", rt(1, 0)).bind("click.jsp", ti), u.arrowScrollOnHover && (vt.bind("mouseover.jsp", rt(-1, 0, vt)), yt.bind("mouseover.jsp", rt(1, 0, yt))), wi(k, u.horizontalArrowPositions, vt, yt)), a.hover(function() {
						a.addClass("jspHover")
					}, function() {
						a.removeClass("jspHover")
					}).bind("mousedown.jsp", function(t) {
						n("html").bind("dragstart.jsp selectstart.jsp", function() {
							return !1
						}), a.addClass("jspActive");
						var i = t.pageX - a.position().left;
						return n("html").bind("mousemove.jsp", function(n) {
							d(n.pageX - i, !1)
						}).bind("mouseup.jsp mouseleave.jsp", ki), !1
					}), et = e.innerWidth(), pi())
				}

				function pi() {
					e.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function() {
						et -= n(this).outerWidth()
					}), k.width(et + "px"), s = 0
				}

				function ir() {
					if (v && y) {
						var t = k.outerHeight(),
							i = b.outerWidth();
						st -= t, n(fi).find(">.jspCap:visible,>.jspArrow").each(function() {
							et += n(this).outerWidth()
						}), et -= i, h -= i, c -= t, k.parent().append(n('<div class="jspCorner" />').css("width", t + "px")), yi(), pi()
					}
					v && f.width(e.outerWidth() - it + "px"), w = f.outerHeight(), wt = w / h, v && (tt = 1 / ii * et, tt > u.horizontalDragMaxWidth ? tt = u.horizontalDragMaxWidth : tt < u.horizontalDragMinWidth && (tt = u.horizontalDragMinWidth), a.width(tt + "px"), ft = et - tt, ci(s)), y && (nt = 1 / wt * st, nt > u.verticalDragMaxHeight ? nt = u.verticalDragMaxHeight : nt < u.verticalDragMinHeight && (nt = u.verticalDragMinHeight), l.height(nt + "px"), g = st - nt, hi(o))
				}

				function wi(n, t, i, r) {
					var u = "before",
						f = "after",
						e;
					t == "os" && (t = /Mac/.test(navigator.platform) ? "after" : "split"), t == u ? f = t : t == f && (u = t, e = i, i = r, r = e), n[u](i)[f](r)
				}

				function rt(n, t, i) {
					return function() {
						return rr(n, t, this, i), this.blur(), !1
					}
				}

				function rr(t, r, f, e) {
					f = n(f).addClass("jspActive");
					var h, c = function() {
							t != 0 && d(s + t * u.arrowButtonSpeed, !1), r != 0 && p(o + r * u.arrowButtonSpeed, !1)
						},
						l = setInterval(c, u.arrowRepeatFreq);
					c(), h = e == i ? "mouseup.jsp" : "mouseout.jsp", e = e || n("html"), e.bind(h, function() {
						f.removeClass("jspActive"), clearInterval(l), e.unbind(h)
					})
				}

				function ur() {
					bi(), y && b.bind("mousedown.jsp", function(t) {
						if (t.originalTarget == i || t.originalTarget == t.currentTarget) {
							var e = n(this),
								r = setInterval(function() {
									var i = e.offset(),
										n = t.pageY - i.top;
									o + nt < n ? p(o + u.trackClickSpeed) : n < o ? p(o - u.trackClickSpeed) : f()
								}, u.trackClickRepeatFreq),
								f = function() {
									r && clearInterval(r), r = null, n(document).unbind("mouseup.jsp", f)
								};
							return n(document).bind("mouseup.jsp", f), !1
						}
					}), v && k.bind("mousedown.jsp", function(t) {
						if (t.originalTarget == i || t.originalTarget == t.currentTarget) {
							var e = n(this),
								r = setInterval(function() {
									var i = e.offset(),
										n = t.pageX - i.left;
									s + tt < n ? d(s + u.trackClickSpeed) : n < s ? d(s - u.trackClickSpeed) : f()
								}, u.trackClickRepeatFreq),
								f = function() {
									r && clearInterval(r), r = null, n(document).unbind("mouseup.jsp", f)
								};
							return n(document).bind("mouseup.jsp", f), !1
						}
					})
				}

				function bi() {
					k && k.unbind("mousedown.jsp"), b && b.unbind("mousedown.jsp")
				}

				function ki() {
					n("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"), l && l.removeClass("jspActive"), a && a.removeClass("jspActive")
				}

				function p(n, t) {
					y && (n < 0 ? n = 0 : n > g && (n = g), t == i && (t = u.animateScroll), t ? ct.animate(l, "top", n, hi) : (l.css("top", n), hi(n)))
				}

				function hi(n) {
					n == i && (n = l.position().top), e.scrollTop(0), o = n;
					var r = o == 0,
						u = o == g,
						c = n / g,
						s = -c * (w - h);
					(kt != r || gt != u) && (kt = r, gt = u, t.trigger("jsp-arrow-change", [kt, gt, dt, ni])), fr(r, u), f.css("top", s), t.trigger("jsp-scroll-y", [-s, r, u])
				}

				function d(n, t) {
					v && (n < 0 ? n = 0 : n > ft && (n = ft), t == i && (t = u.animateScroll), t ? ct.animate(a, "left", n, ci) : (a.css("left", n), ci(n)))
				}

				function ci(n) {
					n == i && (n = a.position().left), e.scrollTop(0), s = n;
					var r = s == 0,
						u = s == ft,
						h = n / ft,
						o = -h * (ot - c);
					(dt != r || ni != u) && (dt = r, ni = u, t.trigger("jsp-arrow-change", [kt, gt, dt, ni])), er(r, u), f.css("left", o), t.trigger("jsp-scroll-x", [-o, r, u])
				}

				function fr(n, t) {
					u.showArrows && (lt[n ? "addClass" : "removeClass"]("jspDisabled"), at[t ? "addClass" : "removeClass"]("jspDisabled"))
				}

				function er(n, t) {
					u.showArrows && (vt[n ? "addClass" : "removeClass"]("jspDisabled"), yt[t ? "addClass" : "removeClass"]("jspDisabled"))
				}

				function ut(n, t) {
					var i = n / (w - h);
					p(i * g, t)
				}

				function li(n, t) {
					var i = n / (ot - c);
					d(i * ft, t)
				}

				function pt(t, i, r) {
					var f, c, o = 0,
						l, a, s;
					try {
						f = n(t)
					} catch (v) {
						return
					}
					for (c = f.outerHeight(), e.scrollTop(0); !f.is(".jspPane");)
						if (o += f.position().top, f = f.offsetParent(), /^body|html$/i.test(f[0].nodeName)) return;
					l = ht(), a = l + h, o < l || i ? s = o - u.verticalGutter : o + c > a && (s = o - h + c + u.verticalGutter), s && ut(s, r)
				}

				function ai() {
					return -f.position().left
				}

				function ht() {
					return -f.position().top
				}

				function or() {
					e.unbind(oi).bind(oi, function(n, t, i, r) {
						var f = s,
							e = o;
						return d(s + i * u.mouseWheelSpeed, !1), p(o - r * u.mouseWheelSpeed, !1), f == s && e == o
					})
				}

				function sr() {
					e.unbind(oi)
				}

				function ti() {
					return !1
				}

				function hr() {
					f.unbind("focusin.jsp").bind("focusin.jsp", function(n) {
						n.target !== f[0] && pt(n.target, !1)
					})
				}

				function cr() {
					f.unbind("focusin.jsp")
				}

				function lr() {
					var n, i;
					t.attr("tabindex", 0).unbind("keydown.jsp").bind("keydown.jsp", function(r) {
						if (r.target === t[0]) {
							var f = s,
								e = o,
								u = n ? 2 : 16;
							switch (r.keyCode) {
								case 40:
									p(o + u, !1);
									break;
								case 38:
									p(o - u, !1);
									break;
								case 34:
								case 32:
									ut(ht() + Math.max(32, h) - 16);
									break;
								case 33:
									ut(ht() - h + 16);
									break;
								case 35:
									ut(w - h);
									break;
								case 36:
									ut(0);
									break;
								case 39:
									d(s + u, !1);
									break;
								case 37:
									d(s - u, !1)
							}
							if (f != s || e != o) return n = !0, clearTimeout(i), i = setTimeout(function() {
								n = !1
							}, 260), !1
						}
					}), u.hideFocus ? (t.css("outline", "none"), "hideFocus" in e[0] && t.attr("hideFocus", !0)) : (t.css("outline", ""), "hideFocus" in e[0] && t.attr("hideFocus", !1))
				}

				function ar() {
					t.attr("tabindex", "-1").removeAttr("tabindex").unbind("keydown.jsp")
				}

				function vr() {
					if (location.hash && location.hash.length > 1) {
						var t, i;
						try {
							t = n(location.hash)
						} catch (r) {
							return
						}
						t.length && f.find(t) && (e.scrollTop() == 0 ? i = setInterval(function() {
							e.scrollTop() > 0 && (pt(location.hash, !0), n(document).scrollTop(e.position().top), clearInterval(i))
						}, 50) : (pt(location.hash, !0), n(document).scrollTop(e.position().top)))
					}
				}

				function di() {
					n("a.jspHijack").unbind("click.jsp-hijack").removeClass("jspHijack")
				}

				function gi() {
					di(), n("a[href^=#]").addClass("jspHijack").bind("click.jsp-hijack", function() {
						var t = this.href.split("#"),
							n;
						if (t.length > 1 && (n = t[1], n.length > 0 && f.find("#" + n).length > 0)) return pt("#" + n, !0), !1
					})
				}
				var u, ct = this,
					f, c, h, e, ot, w, ii, wt, y, v, l, g, o, a, ft, s, ri, b, ui, st, nt, lt, at, fi, k, et, tt, vt, yt, bt, vi, it, ei, kt = !0,
					dt = !0,
					gt = !1,
					ni = !1,
					oi = n.fn.mwheelIntent ? "mwheelIntent.jsp" : "mousewheel.jsp";
				vi = t.css("paddingTop") + " " + t.css("paddingRight") + " " + t.css("paddingBottom") + " " + t.css("paddingLeft"), it = (parseInt(t.css("paddingLeft")) || 0) + (parseInt(t.css("paddingRight")) || 0), si(r), n.extend(ct, {
					reinitialise: function(t) {
						t = n.extend({}, t, u), si(t)
					},
					scrollToElement: function(n, t, i) {
						pt(n, t, i)
					},
					scrollTo: function(n, t, i) {
						li(n, i), ut(t, i)
					},
					scrollToX: function(n, t) {
						li(n, t)
					},
					scrollToY: function(n, t) {
						ut(n, t)
					},
					scrollBy: function(n, t, i) {
						ct.scrollByX(n, i), ct.scrollByY(t, i)
					},
					scrollByX: function(n, t) {
						var i = ai() + n,
							r = i / (ot - c);
						d(r * ft, t)
					},
					scrollByY: function(n, t) {
						var i = ht() + n,
							r = i / (w - h);
						p(r * g, t)
					},
					animate: function(n, t, i, r) {
						var f = {};
						f[t] = i, n.animate(f, {
							duration: u.animateDuration,
							ease: u.animateEase,
							queue: !1,
							step: r
						})
					},
					getContentPositionX: function() {
						return ai()
					},
					getContentPositionY: function() {
						return ht()
					},
					getIsScrollableH: function() {
						return v
					},
					getIsScrollableV: function() {
						return y
					},
					getContentPane: function() {
						return f
					},
					scrollToBottom: function(n) {
						p(g, n)
					},
					hijackInternalLinks: function() {
						gi()
					}
				})
			}
			t = n.extend({}, n.fn.jScrollPane.defaults, t);
			var r;
			return this.each(function() {
				var i = n(this),
					f = i.data("jsp");
				f ? f.reinitialise(t) : (f = new u(i, t), i.data("jsp", f)), r = r ? r.add(i) : i
			}), r
		}, n.fn.jScrollPane.defaults = {
			showArrows: !1,
			maintainPosition: !0,
			clickOnTrack: !0,
			autoReinitialise: !1,
			autoReinitialiseDelay: 500,
			verticalDragMinHeight: 0,
			verticalDragMaxHeight: 99999,
			horizontalDragMinWidth: 0,
			horizontalDragMaxWidth: 99999,
			animateScroll: !1,
			animateDuration: 300,
			animateEase: "linear",
			hijackInternalLinks: !1,
			verticalGutter: 4,
			horizontalGutter: 4,
			mouseWheelSpeed: 10,
			arrowButtonSpeed: 10,
			arrowRepeatFreq: 100,
			arrowScrollOnHover: !1,
			trackClickSpeed: 30,
			trackClickRepeatFreq: 100,
			verticalArrowPositions: "split",
			horizontalArrowPositions: "split",
			enableKeyboardNavigation: !0,
			hideFocus: !1
		}
	}(jQuery, this);
/*! Copyright (c) 2010 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE_jquery.final-countdown.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.4
 * 
 * Requires: 1.2.2+
 */
(function(n) {
	function i(t) {
		var i = t || window.event,
			e = [].slice.call(arguments, 1),
			r = 0,
			f = 0,
			u = 0;
		if (t = n.event.fix(i), t.type = "mousewheel", t.wheelDelta && (r = t.wheelDelta / 120), t.detail && (r = -t.detail / 3), u = r, i.axis !== undefined && i.axis === i.HORIZONTAL_AXIS && (u = 0, f = -1 * r), i.wheelDeltaY !== undefined && (u = i.wheelDeltaY / 120), i.wheelDeltaX !== undefined && (f = i.wheelDeltaX / -120), e.unshift(t, r, f, u), !!n.event.handle) return n.event.handle.apply(this, e)
	}
	var t = ["DOMMouseScroll", "mousewheel"];
	n.event.special.mousewheel = {
		setup: function() {
			if (this.addEventListener)
				for (var n = t.length; n;) this.addEventListener(t[--n], i, !1);
			else this.onmousewheel = i
		},
		teardown: function() {
			if (this.removeEventListener)
				for (var n = t.length; n;) this.removeEventListener(t[--n], i, !1);
			else this.onmousewheel = null
		}
	}, n.fn.extend({
		mousewheel: function(n) {
			return n ? this.bind("mousewheel", n) : this.trigger("mousewheel")
		},
		unmousewheel: function(n) {
			return this.unbind("mousewheel", n)
		}
	})
})(jQuery),
function(n) {
	function t(t) {
		var i = n.formatCurrency.regions[t],
			r;
		return i ? i : /(\w+)-(\w+)/g.test(t) ? (r = t.replace(/(\w+)-(\w+)/g, "$1"), n.formatCurrency.regions[r]) : null
	}

	function r(n) {
		switch (n.toLowerCase()) {
			case "int":
				return "Int";
			case "float":
				return "Float";
			default:
				throw "invalid parseType";
		}
	}

	function i(n) {
		if (n.symbol === "") return new RegExp("[^\\d" + n.decimalSymbol + "-]", "g");
		var t = n.symbol.replace("$", "\\$").replace(".", "\\.");
		return new RegExp(t + "|[^\\d" + n.decimalSymbol + "-]", "g")
	}
	n.formatCurrency = {}, n.formatCurrency.regions = [], n.formatCurrency.regions[""] = {
		symbol: "$",
		positiveFormat: "%s%n",
		negativeFormat: "(%s%n)",
		decimalSymbol: ".",
		digitGroupSymbol: ",",
		groupDigits: !0
	}, n.fn.formatCurrency = function(r, u) {
		arguments.length == 1 && typeof r != "string" && (u = r, r = !1);
		var f = {
			name: "formatCurrency",
			colorize: !1,
			region: "",
			global: !0,
			roundToDecimalPlace: 2,
			eventOnDecimalsEntered: !1
		};
		return f = n.extend(f, n.formatCurrency.regions[""]), u = n.extend(f, u), u.region.length > 0 && (u = n.extend(u, t(u.region))), u.regex = i(u), this.each(function() {
			var t, f, a, o, e;
			if ($this = n(this), t = "0", t = $this[$this.is("input, select, textarea") ? "val" : "html"](), t.search("\\(") >= 0 && (t = "-" + t), t !== "" && (t !== "-" || u.roundToDecimalPlace !== -1)) {
				if (isNaN(t)) {
					if (t = t.replace(u.regex, ""), t === "" || t === "-" && u.roundToDecimalPlace === -1) return;
					u.decimalSymbol != "." && (t = t.replace(u.decimalSymbol, ".")), isNaN(t) && (t = "0")
				}
				var s = String(t).split("."),
					c = t == Math.abs(t),
					h = s.length > 1,
					i = h ? s[1].toString() : "0",
					l = i;
				if (t = Math.abs(s[0]), t = isNaN(t) ? 0 : t, u.roundToDecimalPlace >= 0 && (i = parseFloat("1." + i), i = i.toFixed(u.roundToDecimalPlace), i.substring(0, 1) == "2" && (t = Number(t) + 1), i = i.substring(2)), t = String(t), u.groupDigits)
					for (f = 0; f < Math.floor((t.length - (1 + f)) / 3); f++) t = t.substring(0, t.length - (4 * f + 3)) + u.digitGroupSymbol + t.substring(t.length - (4 * f + 3));
				(h && u.roundToDecimalPlace == -1 || u.roundToDecimalPlace > 0) && (t += u.decimalSymbol + i), a = c ? u.positiveFormat : u.negativeFormat, o = a.replace(/%s/g, u.symbol), o = o.replace(/%n/g, t), e = n([]), e = r ? n(r) : $this, e[e.is("input, select, textarea") ? "val" : "html"](o), h && u.eventOnDecimalsEntered && l.length > u.roundToDecimalPlace && e.trigger("decimalsEntered", l), u.colorize && e.css("color", c ? "black" : "red")
			}
		})
	}, n.fn.toNumber = function(r) {
		var u = n.extend({
			name: "toNumber",
			region: "",
			global: !0
		}, n.formatCurrency.regions[""]);
		return r = jQuery.extend(u, r), r.region.length > 0 && (r = n.extend(r, t(r.region))), r.regex = i(r), this.each(function() {
			var t = n(this).is("input, select, textarea") ? "val" : "html";
			n(this)[t](n(this)[t]().replace("(", "(-").replace(r.regex, ""))
		})
	}, n.fn.asNumber = function(u) {
		var o = n.extend({
				name: "asNumber",
				region: "",
				parse: !0,
				parseType: "Float",
				global: !0
			}, n.formatCurrency.regions[""]),
			e, f;
		return (u = jQuery.extend(o, u), u.region.length > 0 && (u = n.extend(u, t(u.region))), u.regex = i(u), u.parseType = r(u.parseType), e = n(this).is("input, select, textarea") ? "val" : "html", f = n(this)[e](), f = f ? f : "", f = f.replace("(", "(-"), f = f.replace(u.regex, ""), !u.parse) ? f : (f.length == 0 && (f = "0"), u.decimalSymbol != "." && (f = f.replace(u.decimalSymbol, ".")), window["parse" + u.parseType](f))
	}
}(jQuery),
function(n) {
	jQuery.fn.porscheOrigin = function(t) {
		var t = jQuery.extend({
			url: "http://test.origin.porsche.com/",
			fadeSpeed: 150,
			count: 4,
			arrowButton: "hide"
		}, t);
		return this.each(function() {
			var i;
			t.arrowButton == "show" ? (i = jQuery(this), n.ajax({
				url: t.url,
				type: "GET",
				dataType: "jsonp",
				cache: !0,
				jsonpCallback: "widget",
				success: function(n) {
					var o = jQuery('<div class="link-button"><\/div>').appendTo(i),
						u = jQuery('<div class="origin-content"><\/div>').appendTo(i).css("display", "none"),
						r, f, e;
					for (jQuery("#porsche-origin .link-button").click(function() {
							u.css("display") == "none" ? (u.fadeIn(t.fadeSpeed), o.addClass("origin-active")) : (u.fadeOut(t.fadeSpeed), o.removeClass("origin-active"))
						}), r = 0; r <= t.count - 1; r++) f = jQuery("<div class='origin-article-box'><\/div>").appendTo(u), jQuery("<img class='foto-box' alt='' />").attr("src", n[r].image).appendTo(f), e = jQuery("<div class='origin-article-content'><\/div>").appendTo(f), jQuery('<a class="article-header"><\/a>').attr("href", n[r].path).text(n[r].title).appendTo(e), jQuery('<span class="article-date"><\/span>').text(n[r].date).appendTo(e)
				}
			})) : (i = jQuery(this), n.ajax({
				url: t.url,
				type: "GET",
				dataType: "jsonp",
				cache: !0,
				jsonpCallback: "widget",
				success: function(n) {
					for (var e = jQuery('<div class="origin-content v2"><\/div>').appendTo(i).css("display", "block"), u, f, r = 0; r <= t.count - 1; r++) u = jQuery("<div class='origin-article-box'><\/div>").appendTo(e), jQuery("<img class='foto-box' alt='' />").attr("src", n[r].image).appendTo(u), f = jQuery("<div class='origin-article-content'><\/div>").appendTo(u), jQuery('<a class="article-header"><\/a>').attr("href", n[r].path).text(n[r].title).appendTo(f), jQuery('<span class="article-date"><\/span>').text(n[r].date).appendTo(f)
				}
			}))
		})
	}
}(jQuery),
function(n) {
	/**
	 * jQuery ScrollTo (balupton edition)
	 * @version 1.0.1
	 * @date August 31, 2010
	 * @since 0.1.0, August 27, 2010
	 * @package jquery-scrollto {@link http://balupton.com/projects/jquery-scrollto}
	 * @author Benjamin "balupton" Lupton {@link http://balupton.com}
	 * @copyright (c) 2010 Benjamin Arthur Lupton {@link http://balupton.com}
	 * @license MIT License {@link http://creativecommons.org/licenses/MIT/}
	 */
	n.ScrollTo || !1 ? window.console.warn("$.ScrollTo has already been defined...") : (n.ScrollTo = {
		config: {
			duration: 400,
			easing: "swing",
			callback: undefined,
			durationMode: "each",
			elementHeight: 0
		},
		configure: function(t) {
			var i = n.ScrollTo;
			return n.extend(i.config, t || {}), this
		},
		scroll: function(t, i) {
			var s = n.ScrollTo,
				f = t.pop(),
				r = f.$container,
				h = f.$target,
				u = n("<span/>").css({
					position: "absolute",
					top: "0px",
					left: "0px"
				}),
				c = r.css("position"),
				o;
			r.css("position", "relative"), u.appendTo(r);
			var l = u.offset().top,
				a = h.offset().top,
				e = a - l;
			return u.remove(), r.css("position", c), o = function(n) {
				return t.length === 0 ? typeof i.callback == "function" && i.callback.apply(this, [n]) : s.scroll(t, i), !0
			}, e -= n(window).height() - i.elementHeight, r.animate({
				scrollTop: e + "px"
			}, i.duration, i.easing, o), !0
		},
		fn: function(t) {
			var e = n.ScrollTo,
				r = n(this),
				i, u, f;
			if (r.length === 0) return this;
			for (i = r.parent(), u = [], config = n.extend({}, e.config, t); i.length === 1 && !i.is("body") && !(i.get(0) === document);) f = i.get(0), i.css("overflow-y") !== "visible" && f.scrollHeight !== f.clientHeight && (u.push({
				$container: i,
				$target: r
			}), r = i), i = i.parent();
			return u.push({
				$container: n("body"),
				$target: r
			}), config.durationMode === "all" && (config.duration /= u.length), e.scroll(u, config), this
		},
		construct: function(t) {
			var i = n.ScrollTo;
			return n.fn.ScrollTo = i.fn, i.config = n.extend(i.config, t), this
		}
	}, n.ScrollTo.construct())
}(jQuery);
/*!
 * jQuery Cookie Plugin v1.3.0
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */
(function(n, t, i) {
	function f(n) {
		return n
	}

	function e(n) {
		return o(decodeURIComponent(n.replace(u, " ")))
	}

	function o(n) {
		return n.indexOf('"') === 0 && (n = n.slice(1, -1).replace('\\"', '"').replace("\\\\", "\\")), n
	}
	var u = /\+/g,
		r = n.cookie = function(u, o, s) {
			var p, c, l, a, h, w, v, y;
			if (o !== i) return s = n.extend({}, r.defaults, s), o === null && (s.expires = -1), typeof s.expires == "number" && (p = s.expires, c = s.expires = new Date, c.setDate(c.getDate() + p)), o = r.json ? JSON.stringify(o) : String(o), t.cookie = [encodeURIComponent(u), "=", r.raw ? o : encodeURIComponent(o), s.expires ? "; expires=" + s.expires.toUTCString() : "", s.path ? "; path=" + s.path : "", s.domain ? "; domain=" + s.domain : "", s.secure ? "; secure" : ""].join("");
			for (l = r.raw ? f : e, a = t.cookie.split("; "), h = 0, w = a.length; h < w; h++)
				if (v = a[h].split("="), l(v.shift()) === u) return y = l(v.join("=")), r.json ? JSON.parse(y) : y;
			return null
		};
	r.defaults = {}, n.removeCookie = function(t, i) {
		return n.cookie(t) !== null ? (n.cookie(t, null, i), !0) : !1
	}
})(jQuery, document);
/*! Copyright (c) 2012 Bassier, Bergmann & Kindler (http://www.bb-k.com)
 *
 * Filterplugin for Model Startpage and Car Configurator Startpage. 
 * 
 *
 * Author: Sascha Kreher
 * Version: 1.0
 * 
 */
$.fn.modelfilter = function(n) {
	function d(n) {
		var t = "modelimg";
		switch (!0) {
			case n == 1:
				t = t;
				break;
			case n > 1 && n <= 6:
				t = t;
				break;
			case n > 6 && n <= 12:
				t = t + "_230x111";
				break;
			case n > 12:
				t = t + "_165x80"
		}
		return t
	}

	function g() {
		h ? ($(".selectLink").bind("touchend", k), $(".selectLink .imageBox a, .selectlink").bind("click", function(n) {
			n.preventDefault()
		}), $(".selectLink .imageBox a").bind("touchend", function(n) {
			var t = (new Date).getTime();
			t - w < 500 ? n.preventDefault() : ($(this).attr("target") == "_blank" ? gotoUrlNewWinSimple($(this).attr("href")) : document.location.href = $(this).attr("href"), n.preventDefault())
		})) : $(".selectLink").hoverIntent({
			over: k,
			timeout: 550,
			out: nt
		}), $(".hoverInfoLayer .close").bind("touchend", function() {
			u = !1, l = !0, a($(this).closest(".selectLink"))
		})
	}

	function k() {
		var o = $(this),
			c, f, k, r, v, y, p;
		if (o.hasClass("active")) return !0;
		if (w = (new Date).getTime(), l) return l = !1, !1;
		c = $(".selectLink.active").length > 0 ? $(".selectLink.active") : undefined, $(".hoverInfoLayer").hide(), o.addClass("active"), o.css("zIndex", 1), u = b == $(this).attr("data-row") ? !0 : !1, b = $(this).attr("data-row"), c != undefined && a(c), f = $(this).find(".hoverInfoLayer"), k = $(this).find(".modelDisclaimer"), hasDisclaimer = !k.is(":empty"), o.addClass("hasDisclaimer"), i.empty().html($(this).find(".modelDisclaimer").html()), r = 0, v = 0, t == 5 ? (r = s(f, !0) - 50, v = r + 60 + (e + 15) * ($(this).attr("data-row") - 1) + "px", y = hasDisclaimer && n.showdisclaimer ? r + s(i, !1) + 20 : r) : (r = s(f, !1) - 40, v = r + (e + 10) * ($(this).attr("data-row") - 1) + "px", y = hasDisclaimer && n.showdisclaimer ? r + s(i, !1) : r), i.css("top", v), p = !1, $(".selectLink[data-row=" + $(this).attr("data-row") + "]").stop(!0, !0).animate({
			height: y + "px"
		}, {
			duration: 300,
			complete: function() {
				p || (f.show(), n.showdisclaimer && i.show(), o.css("overflow", "visible"), h && f.is(":below-the-fold") && f.ScrollTo({
					elementHeight: r + 50
				}), p = !0)
			}
		})
	}

	function nt() {
		$(".selectLink.active")[0] === $(this)[0] && (u = !1, a($(this)))
	}

	function a(n) {
		var t = n,
			r;
		t.find(".hoverInfoLayer").hide(), t.css("zIndex", 0), t.removeClass("active"), $(".selectLink.active.hasDisclaimer").length == 0 && i.hide(), u || (r = !1, $(".selectLink[data-row=" + t.attr("data-row") + "]").stop(!0, !0).animate({
			height: e
		}, 300, function() {
			r || ($(this).css("overflow", "visible"), r = !0)
		})), u = !1
	}

	function tt() {
		var n = $("<ul><\/ul>");
		$.each(filterdata, function(t, i) {
			var u = t,
				e = $("<li><\/li>"),
				f, r;
			e.addClass(t), f = $("<select><\/select>"), f.attr("id", t), f.attr("name", t), r = [0], $.each(modelsdata.modelrange, function(n, t) {
				u == "modelrange" ? $.inArray(n + 1, r) == -1 && r.push(n + 1) : $.each(t.models, function(n, t) {
					$.inArray(t[u], r) == -1 && r.push(t[u])
				})
			}), r.sort(), $.each(r, function(n, t) {
				var i = $("<option><\/option>").val(t).html(filterdata[u].values[t]);
				filterdata[u].values[t] != undefined && getUrlParamValue("modelrange") == filterdata[u].values[t].toLowerCase() && i.attr("selected", !0), f.append(i)
			}), e.append($("<div><\/div>").html(i.label)), e.append(f), n.append(e)
		});
		switch (presentation_type) {
			case "CC":
				n.append($('<li class="resetfilter"><\/li>').append('<div class="filterreset"><a href="#" class="greybutton"><span><img src="/germany/ImageMachines/LinkblockTitle.ashx/rendered.gif?text=' + labels.linkfilterreset + '&amp;mode=greybutton" alt="' + labels.linkfilterreset + '"><\/span><\/a><\/div>'));
				break;
			case "MR":
				n.append($('<li class="resetfilter"><\/li>').append('<div class="filterreset"><a href="#" class="reset">' + labels.linkfilterreset + "<\/a><\/div>"))
		}
		c.append(n)
	}

	function it() {
		var i = 0,
			u = 0,
			f, o, r;
		n.outputContainer.css({
			visibility: "hidden",
			display: "block"
		}), $.each(n.outputContainer.find("li.selectLink"), function() {
			var n = $(this).offset();
			o != n.left && (o = n.left, i++), f != n.top && ($(this).addClass("first"), r != undefined && i == t + 1 && r.addClass("last"), f = n.top, i = 1, u++), $(this).attr("data-row", u), $(this).attr("data-col", i), e = t == 5 ? $(this).outerHeight() - 20 : $(this).outerHeight(), r = $(this)
		}), i == 5 && r.addClass("last"), n.outputContainer.css({
			visibility: "visible",
			display: "none"
		})
	}

	function v() {
		function r(n) {
			return $.each(filtersettings, function(t, i) {
				if (t == "modelrange") return !0;
				n.models = y(n, t, i)
			}), n
		}
		n.outputContainer.fadeOut(function() {
			var f, u, e;
			if ($(this).empty(), o.modelrange = [], f = p(modelsdata), filtersettings.modelrange != "" && filtersettings.modelrange != "0" && filtersettings.modelrange != undefined ? o.modelrange[filtersettings.modelrange] = r(f.modelrange[filtersettings.modelrange - 1]) : $.each(f.modelrange, function(n, t) {
					o.modelrange[n] = r(t)
				}), u = 0, e = [], $.each(o.modelrange, function(t, i) {
					var f, r;
					if (i == undefined) return !0;
					f = $("<div><\/div>").attr("id", "modelGroup-" + i.name).attr("class", "modelGroup"), r = "/images/modelranges/";
					switch (i.name) {
						case "Boxster":
							r += "txt_boxster.png";
							break;
						case "Cayman":
							r += "txt_cayman.png";
							break;
						case "911":
							r += "txt_911.png";
							break;
						case "Panamera":
							r += "txt_panamera.png";
							break;
						case "Cayenne":
							r += "txt_cayenne.png"
					}
					f.append('<div class="modelGroupImage"><img src="' + r + '" alt=""><\/div>');
					var o = $("<div><\/div>").addClass("modelGroupItems"),
						s = $("<ul><\/ul>"),
						h = d(i.models.length);
					$.each(i.models, function(n, t) {
						s.append($("<li><\/li>").addClass("selectLink").attr("data-modelid", t.id).append(t[h], $("<span><\/span>").html(t.name))), e.push(t), u++
					}), o.append(s), f.append(o), (filtersettings.modelrange == "" || filtersettings.modelrange == "0" || filtersettings.modelrange == undefined) && f.append('<div class="clearfix"><\/div>'), n.outputContainer.append(f)
				}), n.outputContainer.append('<div class="finalPlaceholder" />'), i = n.disclaimerContainer.clone(), n.outputContainer.append(i), n.outputContainer.removeClass("colview-1 colview-2 colview-3 colview-4 colview-5"), filtersettings.modelrange != "" && filtersettings.modelrange != "0" && filtersettings.modelrange != undefined) switch (presentation_type) {
				case "CC":
					switch (!0) {
						case u == 1:
							n.outputContainer.addClass("colview-1"), t = 1;
							break;
						case u > 1 && u <= 4:
							n.outputContainer.addClass("colview-2"), t = 2;
							break;
						case u > 4 && u <= 12:
							n.outputContainer.addClass("colview-3"), t = 3;
							break;
						case u > 12:
							n.outputContainer.addClass("colview-4"), t = 4
					}
					break;
				case "MR":
					switch (!0) {
						case u == 1:
							n.outputContainer.addClass("colview-1"), t = 1;
							break;
						case u > 1 && u <= 6:
							n.outputContainer.addClass("colview-2"), t = 2;
							break;
						case u > 6 && u <= 12:
							n.outputContainer.addClass("colview-3"), t = 3;
							break;
						case u > 12:
							n.outputContainer.addClass("colview-4"), t = 4
					}
			} else n.outputContainer.addClass("colview-5"), t = 5;
			$.each(e, function(n, t) {
				var c, u, f, i, s, h, e, r, o;
				t.extrainformation != undefined && t.extrainformation != "" && (c = $("<div />", {
					"class": "modelInfo"
				}).html(t.extrainformation)), u = $("<div />", {
					"class": "modelDisclaimer"
				}), t.defaultdisclaimer == 1 && u.html(defaults.disclaimer), t.disclaimer != undefined && t.disclaimer != "" && u.html(t.disclaimer);
				switch (presentation_type) {
					case "CC":
						f = "redbutton", i = "javascript:openModel(&quot;" + t.id + "&quot;, &quot;&quot;)", h = '<div class="buttonwrap right"><a href="' + t.linkmore + '" target="_blank" class="cssbutton greybutton"><span>' + labels.linkmoreLabel + "<\/span><\/a><\/div>", s = '<div class="buttonwrap left"><a href="' + i + '" class="cssbutton ' + f + '"><span>' + labels.linkccLabel + "<\/span><\/a><\/div>", e = '<a href="' + i + '"><img src="' + t.image_620x300 + '"><\/a>';
						break;
					case "MR":
						f = "greybutton", i = "javascript:configureCar(&quot;" + marketId + "&quot;,&quot;" + t.id + "&quot;, null)", s = '<div class="buttonwrap left"><a href="' + t.linkmore + '" target="_blank" class="cssbutton greybutton"><span>' + labels.linkmoreLabel + "<\/span><\/a><\/div>", h = '<div class="buttonwrap right"><a href="' + i + '" class="cssbutton ' + f + '"><span>' + labels.linkccLabel + "<\/span><\/a><\/div>", e = '<img src="' + t.image_620x300 + '">', e = '<a href="' + t.linkmore + '" target="_blank"><img src="' + t.image_620x300 + '"><\/a>'
				}
				r = $("<div />", {
					"class": "hoverInfoLayer"
				}).attr({
					"data-modelid": t.id
				}), r.append($("<div />", {
					"class": "imageBox"
				}).append(e).append($("<div />", {
					"class": "close"
				}))), r.append($("<div />", {
					"class": "borderliner"
				})), r.append($("<div />", {
					"class": "dataBox"
				}).append($("<div />", {
					"class": "modelData"
				}).append('<p class="modelDesc">' + t.name + "<\/p>").append('<p class="modelPrice">' + t.price + "<\/p>").append(c)).append($("<div />", {
					"class": "buttons"
				}).append(s).append(t.ccavailable ? h : "")).append(u)), $('.selectLink[data-modelid="' + t.id + '"]').append(r), presentation_type == "CC" && (o = 0, $.each($('.selectLink[data-modelid="' + t.id + '"] .buttonwrap span'), function() {
					var n = rt($(this));
					n > o && (o = n)
				}), $('.selectLink[data-modelid="' + t.id + '"] .buttonwrap span').css("width", o + "px"))
			}), it(), t > 1 && g(), $.each($(".modelGroup"), function() {
				$(this).find(".modelGroupItems ul:empty").length > 0 && $(this).css({
					display: "none",
					visibility: "hidden"
				})
			}), n.outputContainer.fadeIn()
		})
	}

	function s(n, t) {
		$(n).css({
			visibility: "hidden",
			display: "block"
		});
		var i = 0;
		return t ? $.each(n.children(), function(n, t) {
			i += $(t).outerHeight()
		}) : i = $(n).outerHeight(), $(n).css({
			visibility: "visible",
			display: "none"
		}), i
	}

	function rt(n) {
		var t = n.clone(),
			i;
		return t.css("visibility", "hidden"), $("body").append(t), i = t.outerWidth(), t.remove(), i
	}

	function y(n, t, i) {
		var u = [],
			r;
		for (r in n)
			if (n.hasOwnProperty(r))
				if (typeof n[r] == "object") {
					if (n[r] != null && n[r][0] != undefined && n[r][0].tagName == "IMG") continue;
					u = u.concat(y(n[r], t, i))
				} else r == t && n[t] == i && u.push(n);
		return u
	}

	function p(n) {
		function u(n, t, i) {
			var r, u, f = {};
			for (r in t) u = t[r], r in n && (n[r] === u || r in f && f[r] === u) || (n[r] = i ? i(u) : u);
			return n
		}
		if (!n || typeof n != "object" || Object.prototype.toString.call(n) === "[object Function]") return n;
		if (n.nodeType && "cloneNode" in n) return n.cloneNode(!0);
		if (n instanceof Date) return new Date(n.getTime());
		if (n instanceof RegExp) return new RegExp(n);
		var i, t, r;
		if (n instanceof Array)
			for (i = [], t = 0, r = n.length; t < r; ++t) t in n && i.push(p(n[t]));
		else i = n.constructor ? new n.constructor : {};
		return u(i, n, p)
	}
	var f, r, u, b;
	n = $.extend({
		outputContainer: $("#CarsTable"),
		filterContainer: $("#control-modelfilter"),
		disclaimerContainer: $('<div id="disclaimer"><\/div>'),
		showdisclaimer: !1
	}, n);
	var h = "ontouchstart" in document.documentElement,
		c = $(this),
		i, e, t, o = {
			modelrange: []
		};
	tt(), h && (n.outputContainer.addClass("hasTouch"), n.filterContainer.addClass("hasTouch")), f = y(modelsdata, "type", "model"), r = 0, $.each(f, function(n, t) {
		t.modelimg = $("<img>").attr("src", t.image_620x300).addClass("modelImg").load(function() {
			r++, r == f.length
		}), t.modelimg_230x111 = $("<img>").attr("src", t.image_230x111).addClass("modelImg").load(function() {
			r++, r == f.length
		}), t.modelimg_165x80 = $("<img>").attr("src", t.image_165x80).addClass("modelImg").load(function() {
			r++, r == f.length
		}), n + 1 == f.length && v()
	}), $("#" + c.attr("id") + " select").change(function() {
		$("#" + $(this).attr("id") + " option:selected").val() == "0" ? delete filtersettings[$(this).attr("id")] : filtersettings[$(this).attr("id")] = $("#" + $(this).attr("id") + " option:selected").val(), v()
	}), $(".CONTENTmodels").hover(function() {
		$(this).css("z-index", "3")
	}, function() {
		$(this).css("z-index", "0")
	}), $(".filterreset").click(function() {
		$("#" + c.attr("id") + " select").val("0");
		switch (presentation_type) {
			case "CC":
				filtersettings = {};
				break;
			case "MR":
				filtersettings = {
					modelrange: filtersettings.modelrange
				}
		}
		v()
	});
	var l = !1,
		w = 0;
	u = !1
};
var WIDTH_TEQ = 1162,
	HEIGHT_TEQ = 600,
	TYPE_TEQ = "normal",
	Z_WIDTH_TEQ = 3e3,
	Z_HEIGHT_TEQ = 1560,
	Z_TYPE_TEQ = "zoom",
	WIDTH_MOD = 1120,
	HEIGHT_MOD = 630,
	TYPE_MOD = "zoom",
	Z_WIDTH_MOD = 3200,
	Z_HEIGHT_MOD = 1800,
	Z_TYPE_MOD = "zoom2",
	WIDTH = 0,
	HEIGHT = 0,
	TYPE = "",
	Z_WIDTH = 0,
	Z_HEIGHT = 0,
	Z_TYPE = "",
	TYPE_RegEx = /./,
	Z_TYPE_RegEx = /./,
	M_WIDTH = 11,
	M_HEIGHT = 6,
	Z_BTN_MARGINLEFT = "-75px",
	scrollerInit = !1,
	scrollerItemsDone = !1,
	g_homemenu_hl_fontcolor = "#CC0000",
	g_homemenu_hl_background_color = "transparent",
	g_homemenu_hl_background_color_Level5 = "#FFFFFF",
	g_homemenu_ll_background_color_Level5 = "#EEF2F5",
	g_homemenu_ll_fontcolor_level0 = "#000000",
	g_homemenu_ll_fontcolor_level1 = "#000000",
	g_homemenu_ll_background_color = "#eef2f5",
	g_homemenu_ll_background_image_level0 = "url(/images/arrows.gif)",
	g_homemenu_ll_background_image_level1 = "url(/images/arrows.gif)",
	g_homemenu_ll_background_position_level0 = "210px -592px",
	g_homemenu_ll_background_position_level1 = "210px -592px",
	g_homemenu_Fadeout = !0,
	g_jdpowerphase = "none",
	g_kbaseClassicStyle = !0,
	g_containsPorscheModel = /.*(boxster|cayman|911|cayenne|macan|panamera|918).*/i,
	g_timeout = 1,
	g_timeoutTime = 250,
	g_openZoom = 0,
	g_imageNr = 1,
	g_req, g_is_home = !1,
	g_currentKBase = null,
	g_pageWidth = 839,
	g_maxShowScrollingItems = 4,
	g_formContainerWidth = 430,
	g_timeoutHide1 = 0,
	g_timeoutHide2 = 0,
	g_timeoutHide3 = 0,
	g_timeoutHide4 = 0,
	g_timeoutHead = 0,
	g_currentNav1 = "",
	g_currentNav2 = "",
	g_currentNav3 = "",
	g_currentNav4 = "",
	g_currentHi1 = "",
	g_currentHi2 = "",
	g_currentHi3 = "",
	g_currentHi4 = "",
	G_MAXSUBLAYERS = 30,
	G_MAXITEMS_MAINNAVI = 30,
	g_blackValue = 0,
	g_blackTimeout = 0,
	g_navShadeMax = .35,
	g_currentModelLink = "",
	g_is_opera = !1,
	g_is_ie = !1,
	g_is_ie5 = !1,
	g_is_ie5_5 = !1,
	g_is_ie6 = !1,
	g_is_ie7 = !1,
	g_is_ie8 = !1,
	g_is_safari = !1,
	g_is_mac = !1,
	g_is_linux = !1,
	g_contextDebug = "",
	g_fallbackImage = "",
	g_is_iPhone = !1,
	g_is_iPad = !1,
	g_is_iPad3 = !1,
	g_is_fit = !1,
	g_home_head_id = "homeHead",
	g_is_minor = 0,
	g_is_major = 0,
	g_newWinFocus, g_page_nxid, z_wm_custnum = "",
	z_wm_page_name = "",
	z_wm_group_name = "",
	z_wm_campaign_key = "",
	z_wm_milestone = "",
	hasFlashContent = !1,
	hasFlashContentHeight = 0,
	evntClick = "click",
	hasTouch = !1;
typeof jQuery != "undefined" ? $(document).ready(function() {
	$(".b-standard-content-wrapper #gallerySubtitles").appendTo($(".galleryImage").not("#galleryImage")), sniffAll(), initAll(), typeof wiredminds != "undefined" && typeof WIREDMINDSEXEC == "function" ? g_page_nxid == "pip" && CURRENTPOOL == "root" || WIREDMINDSEXEC() : log("Skipping Wiredminds.");
	var n = !1;
	(CURRENTPOOL == "netherlands" && GxGeneral.hasPermission() || CURRENTPOOL != "netherlands") && (n = !0), initAll3(), $(window).load(onJQWindowLoad())
}) : log("jQuery not available. You must load the jquery core library before this document."), GxGeneral = null;
var g_divPopupOpen = 0,
	g_divPopupShadeborder = 8,
	g_divPopupContentBorder = 15,
	g_divPopupNaviSpace = 30,
	g_divPopupHasCloseButton = !1;
g_currentDivPage = 1, g_maxDivPage = 0, g_lastNumber = 1, loadImage_timeOut = 150, window.Node && Node.prototype && !Node.prototype.contains && (Node.prototype.contains = function(n) {
	return !!(this.compareDocumentPosition(n) & 16)
}), g_clueTip_ModelLayer_TimeoutId = null, g_clueTip_ModelLayer_TimeoutMillisec = 1e3, g_galleryZoomInTimeoutHandle = null, g_galleryNavblockTimeout = 500, kbaseIntroHeight = 103, $(function() {
	var t = location.href,
		i = document.referrer,
		r = window.location.protocol + "//" + window.location.host,
		n = new thirdpartstrackingpixellibs;
	switch (t) {
		case "http://www.porsche.com/usa/models/boxster/":
		case "http://www.porsche.com/usa/models/cayman/":
		case "http://www.porsche.com/usa/models/911/":
		case "http://www.porsche.com/usa/models/panamera/":
		case "http://www.porsche.com/usa/models/macan/":
		case "http://www.porsche.com/usa/models/cayenne/":
			n.facebookpixelcode(function() {
				fbq("init", "1087987151230208"), fbq("track", "PageView")
			})
	}
	if (document.location.pathname.indexOf("usa/dealersearch") > 0) switch (i) {
		case "http://www.porsche.com/usa/models/911/":
			n.facebookconversioncode(function() {
				window._fbq = window._fbq || [], window._fbq.push(["track", "6027447932179", {
					value: "0.00",
					currency: "USD"
				}])
			}), n.twitterplattform(function() {
				twttr.conversion.trackPid("l6ejz", {
					tw_sale_amount: 0,
					tw_order_quantity: 0
				})
			});
			break;
		case "http://www.porsche.com/usa/models/cayman/":
			n.facebookconversioncode(function() {
				window._fbq = window._fbq || [], window._fbq.push(["track", "6027448007579", {
					value: "0.00",
					currency: "USD"
				}])
			}), n.twitterplattform(function() {
				twttr.conversion.trackPid("l6ejy", {
					tw_sale_amount: 0,
					tw_order_quantity: 0
				})
			});
			break;
		case "http://www.porsche.com/usa/models/911/":
			n.facebookconversioncode(function() {
				window._fbq = window._fbq || [], window._fbq.push(["track", "6027448000779", {
					value: "0.00",
					currency: "USD"
				}])
			}), n.twitterplattform(function() {
				twttr.conversion.trackPid("l6ejw", {
					tw_sale_amount: 0,
					tw_order_quantity: 0
				})
			});
			break;
		case "http://www.porsche.com/usa/models/panamera/":
			n.facebookconversioncode(function() {
				window._fbq = window._fbq || [], window._fbq.push(["track", "6027447984779", {
					value: "0.00",
					currency: "USD"
				}])
			}), n.twitterplattform(function() {
				twttr.conversion.trackPid("l6ek1", {
					tw_sale_amount: 0,
					tw_order_quantity: 0
				})
			});
			break;
		case "http://www.porsche.com/usa/models/macan/":
			n.facebookconversioncode(function() {
				window._fbq = window._fbq || [], window._fbq.push(["track", "6027448014579", {
					value: "0.00",
					currency: "USD"
				}])
			}), n.twitterplattform(function() {
				twttr.conversion.trackPid("l6ek2", {
					tw_sale_amount: 0,
					tw_order_quantity: 0
				})
			});
			break;
		case "http://www.porsche.com/usa/models/cayenne/":
			n.facebookconversioncode(function() {
				window._fbq = window._fbq || [], window._fbq.push(["track", "6027448017379", {
					value: "0.00",
					currency: "USD"
				}]), window._fbq.push(["track", "6031999834275", {
					value: "0.00",
					currency: "USD"
				}])
			}), n.twitterplattform(function() {
				twttr.conversion.trackPid("l6ejx", {
					tw_sale_amount: 0,
					tw_order_quantity: 0
				})
			})
	}
	switch (t) {
		case "https://my.porsche.com/germany/dialog/newsletter/subscribe/":
			n.facebookconversioncode(function() {
				$("#formcomponentform").hasClass("formprint") && (window._fbq = window._fbq || [], window._fbq.push(["track", "6027893193508", {
					value: "0.00",
					currency: "EUR"
				}]))
			})
	}
	switch (t) {
		case "http://www.porsche.com/usa/modelstart/":
			n.googleconversionpage(975623255, "en", "3", "ffffff", "fH7OCODzul4Q16ib0QM", !1), n.googleremarketingtag(975623255, {}, !0), n.floodlighttag("Cayenne_Build", "USD", "buildyourmodel");
			break;
		case "http://www.porsche.com/usa/modelstart/all/?modelrange=cayenne":
			n.floodlighttag("Cayenne_Build", "USD", "buildyourmodel");
			break;
		case "http://www.porsche.com/usa/inventorysearch/":
			n.googleconversionpage(975623255, "en", "3", "ffffff", "vu-FCM6fwV4Q16ib0QM", !1), n.googleremarketingtag(975623255, {}, !0);
			break;
		case "http://www.porsche.com/usa/dealersearch/?m-01-dealer-search-field=":
			n.googleconversionpage(975623255, "en", "3", "ffffff", "fH7OCODzul4Q16ib0QM", !1), n.googleremarketingtag(975623255, {}, !0)
	}
	switch (t) {
		case "http://www.porsche.com/usa/models/cayenne/":
			n.floodlighttag("Cayenne_FindDealer", "USD", "findadealer"), n.floodlighttag("Cayenne_Term_Search", "USD", "termsearch"), n.floodlighttag("Cayenne_Search_Inventory", "USD", "searchinventory"), n.floodlighttag("Cayenne_Build_Your_Model", "USD", "buildyourmodel");
			break;
		case "http://www.porsche.com/usa/models/cayenne/cayenne/":
			n.floodlighttag("Cayenne_FindDealer", "USD", "findadealer"), n.floodlighttag("Cayenne_Search", "USD", "termsearch"), n.floodlighttag("Cayenne_Search", "USD", "searchinventory"), n.floodlighttag("Cayenne_Build", "USD", "buildyourmodel"), n.sslt(698180, "buildyourown"), n.sslt(698182, "searchinventory"), n.sslt(698182, "findadealer");
			break;
		case "http://www.porsche.com/usa/models/cayenne/cayenne-s-e-hybrid/":
			n.floodlighttag("Cayenne-S-E-hybrid-FindDealer", "USD", "findadealer"), n.floodlighttag("Cayenne-S-E-hybrid_Search", "USD", "termsearch"), n.floodlighttag("Cayenne-S-E-hybrid_Search", "USD", "searchinventory"), n.floodlighttag("Cayenne-S-E-hybrid_Build", "USD", "buildyourmodel"), n.sslt(698186, "buildyourown"), n.sslt(698187, "searchinventory"), n.sslt(698187, "findadealer");
			break;
		case "http://www.porsche.com/usa/inventorysearch/":
			n.floodlighttag("Inventory_Search", "USD", "searchinventory");
			break;
		case "http://www.porsche.com/usa/modelstart/":
			n.floodlighttag("Build Your Model - All", "USD", "buildyourmodel"), n.googleremarketingtag(931859113, {}, !0);
			break;
		case "http://www.porsche.com/usa/models/panamera/":
			n.floodlighttag("Panamera_FindDealer", "USD", "findadealer"), n.floodlighttag("Panamera_Search_Inventory", "USD", "searchinventory"), n.floodlighttag("Panamera_Build_Your_Model", "USD", "buildyourmodel");
			break;
		case "http://www.porsche.com/usa/models/panamera/panamera/":
			n.floodlighttag("Panamera_FindDealer", "USD", "findadealer"), n.floodlighttag("Panamera_Search_Inventory", "USD", "searchinventory"), n.floodlighttag("Panamera_Build_Your_Model", "USD", "buildyourmodel"), n.sslt(706144, "buildyourown"), n.sslt(706145, "searchinventory");
			break;
		case "http://www.porsche.com/usa/modelstart/all/?modelrange=cayenne":
			n.floodlighttag("Build Your Model - All", "USD", "buildyourmodel")
	}
	location.href.indexOf("http://www.porsche.com/usa/dealersearch") > -1 && (n.floodlighttag("FindDealer", "USD", "findadealer"), n.floodlighttag("Term_Search", "USD", "termsearch"), n.floodlighttag("Search_Inventory", "USD", "searchinventory"), n.floodlighttag("FindDealer_All", "USD", "findalldealer"), n.floodlighttag("Cayenne_FindDealer", "USD", "findalldealer"), n.floodlighttag("Cayenne_Build", "USD", "buildyourmodel"));
	switch (t) {
		case "http://www.porsche.com/usa/models/911/911-carrera/":
			n.facebookpixelcode(function() {
				fbq("init", "1552849295033197"), fbq("track", "PageView")
			}), n.twitterplattform(function() {
				twttr.conversion.trackPid("nubua", {
					tw_sale_amount: 0,
					tw_order_quantity: 0
				})
			}), n.floodlighttag("Build", "USD", "buildyourmodel", "5705a827-7353-41dd-b96c-689adceaecb2"), n.floodlighttag("Find", "USD", "findadealer", "5705a827-7353-41dd-b96c-689adceaecb2"), n.floodlighttag("Search", "USD", "searchinventory", "5705a827-7353-41dd-b96c-689adceaecb2"), n.doubleclick("5368208", "5368208", "porsc0", "new910", "pagevisit"), n.googleremarketingtag(931859113, {}, !0), n.doubleclick("5368208", "5368208", "porsc0", "alway0", "buildyourown"), n.doubleclick("5368208", "5368208", "porsc0", "alway00", "findadealer"), n.doubleclick("5368208", "5368208", "porsc0", "alway000", "searchinventory"), $(function() {
				$("body").append('<img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/931859113/?value=0&amp;guid=ON&amp;script=0"/>')
			});
			break;
		case "http://www.porsche.com/usa/models/911/911-carrera-s/":
			n.facebookpixelcode(function() {
				fbq("init", "1552849295033197"), fbq("track", "PageView")
			}), n.twitterplattform(function() {
				twttr.conversion.trackPid("nubua", {
					tw_sale_amount: 0,
					tw_order_quantity: 0
				})
			}), n.doubleclick("5368208", "5368208", "porsc0", "newca00", "pagevisit"), n.floodlighttag("Build", "USD", "buildyourmodel", "5705a827-7353-41dd-b96c-689adceaecb2"), n.floodlighttag("Find", "USD", "findadealer", "5705a827-7353-41dd-b96c-689adceaecb2"), n.floodlighttag("Search", "USD", "searchinventory", "5705a827-7353-41dd-b96c-689adceaecb2"), n.googleremarketingtag(931859113, {}, !0), n.doubleclick("5368208", "5368208", "porsc0", "alway0", "buildyourown"), n.doubleclick("5368208", "5368208", "porsc0", "alway00", "findadealer"), n.doubleclick("5368208", "5368208", "porsc0", "alway000", "searchinventory"), $(function() {
				$("body").append('<img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/931859113/?value=0&amp;guid=ON&amp;script=0"/>')
			});
			break;
		case "http://www.porsche.com/usa/models/911/911-carrera-cabriolet/":
			n.facebookpixelcode(function() {
				fbq("init", "1552849295033197"), fbq("track", "PageView")
			}), n.twitterplattform(function() {
				twttr.conversion.trackPid("nubua", {
					tw_sale_amount: 0,
					tw_order_quantity: 0
				})
			}), n.doubleclick("5368208", "5368208", "porsc0", "newca0", "pagevisit"), n.floodlighttag("Build", "USD", "buildyourmodel", "5705a827-7353-41dd-b96c-689adceaecb2"), n.floodlighttag("Find", "USD", "findadealer", "5705a827-7353-41dd-b96c-689adceaecb2"), n.floodlighttag("Search", "USD", "searchinventory", "5705a827-7353-41dd-b96c-689adceaecb2"), n.googleremarketingtag(931859113, {}, !0), n.doubleclick("5368208", "5368208", "porsc0", "alway0", "buildyourown"), n.doubleclick("5368208", "5368208", "porsc0", "alway00", "findadealer"), n.doubleclick("5368208", "5368208", "porsc0", "alway000", "searchinventory"), $(function() {
				$("body").append('<img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/931859113/?value=0&amp;guid=ON&amp;script=0"/>')
			});
			break;
		case "http://www.porsche.com/usa/models/911/911-carrera-s-cabriolet/":
			n.facebookpixelcode(function() {
				fbq("init", "1552849295033197"), fbq("track", "PageView")
			}), n.twitterplattform(function() {
				twttr.conversion.trackPid("nubua", {
					tw_sale_amount: 0,
					tw_order_quantity: 0
				})
			}), n.doubleclick("5368208", "5368208", "porsc0", "newsc0", "pagevisit"), n.doubleclick("5368208", "5368208", "porsc0", "alway0", "buildyourown"), n.doubleclick("5368208", "5368208", "porsc0", "alway00", "findadealer"), n.doubleclick("5368208", "5368208", "porsc0", "alway000", "searchinventory"), n.floodlighttag("Build", "USD", "buildyourmodel", "5705a827-7353-41dd-b96c-689adceaecb2"), n.floodlighttag("Find", "USD", "findadealer", "5705a827-7353-41dd-b96c-689adceaecb2"), n.floodlighttag("Search", "USD", "searchinventory", "5705a827-7353-41dd-b96c-689adceaecb2"), n.googleremarketingtag(931859113, {}, !0), $(function() {
				$("body").append('<img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/931859113/?value=0&amp;guid=ON&amp;script=0"/>')
			});
			break;
		case "http://www.porsche.com/usa/modelstart/":
			n.twitterplattform(function() {
				twttr.conversion.trackPid("nubu5", {
					tw_sale_amount: 0,
					tw_order_quantity: 0
				})
			}), n.facebookpixelcode(function() {
				fbq("init", "1552849295033197"), fbq("track", "PageView")
			}), n.googleremarketingtag(931859113, {}, !0), $(function() {
				$("body").append('<img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/931859113/?value=0&amp;guid=ON&amp;script=0"/>')
			});
			break;
		case "http://www.porsche.com/usa/dealersearch/?m-01-dealer-search-field=":
		case "http://www.porsche.com/usa/dealersearch/?m-01-dealer-search-field":
			n.twitterplattform(function() {
				twttr.conversion.trackPid("nubu8", {
					tw_sale_amount: 0,
					tw_order_quantity: 0
				})
			}), n.facebookpixelcode(function() {
				fbq("init", "1552849295033197"), fbq("track", "PageView")
			}), n.googleremarketingtag(931859113, {}, !0), n.doubleclick("5368208", "5368208", "porsc0", "alway00", "findadealer"), n.doubleclick("5368208", "5368208", "porsc0", "alway00", "pagevisit"), $(function() {
				$("body").append('<img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/931859113/?value=0&amp;guid=ON&amp;script=0"/>')
			});
			break;
		case "http://www.porsche.com/usa/inventorysearch/":
			n.twitterplattform(function() {
				twttr.conversion.trackPid("nubu9", {
					tw_sale_amount: 0,
					tw_order_quantity: 0
				})
			}), n.facebookpixelcode(function() {
				fbq("init", "1552849295033197"), fbq("track", "PageView")
			}), n.googleremarketingtag(931859113, {}, !0), n.doubleclick("5368208", "5368208", "porsc0", "alway000", "searchinventory"), $(function() {
				$("body").append('<img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/931859113/?value=0&amp;guid=ON&amp;script=0"/>')
			});
			break;
		case "http://www.porsche.com/usa/":
			n.facebookpixelcode(function() {
				fbq("init", "1552849295033197"), fbq("track", "PageView")
			}), n.googleremarketingtag(931859113, {}, !0), n.sambatv("Porsche/Homepage"), n.floodlighttag("Find", "USD", "findadealer"), n.floodlighttag("Search", "USD", "termsearch"), n.floodlighttag("Search", "USD", "searchinventory"), n.floodlighttag("Build", "USD", "buildyourmodel"), n.doubleclick("5368208", "5368208", "porsc0", "alway0", "buildyourown"), n.doubleclick("5368208", "5368208", "porsc0", "alway00", "findadealer"), n.doubleclick("5368208", "5368208", "porsc0", "alway000", "searchinventory"), n.doubleclick("5368208", "5368208", "porsc0", "porsc0", "pagevisit"), n.doubleclick("5368208", "5368208", "porsc0", "porsc00", "socialnetworks"), $(function() {
				$("body").append('<img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/931859113/?value=0&amp;guid=ON&amp;script=0"/>')
			});
			break;
		case "http://www.porsche.com/usa/models/911/":
			n.sambatv("Porsche/All_911_Models");
			break;
		case "http://www.porsche.com/usa/aboutporsche/":
			n.sambatv("Porsche/About_Company_and_Brand");
			break;
		case "http://www.porsche.com/usa/models/":
			n.sambatv("Porsche/Models");
			break;
		case "http://www.porsche.com/usa/approvedused/":
			n.sambatv("Porsche/Pre_Owned_Vehicles");
			break;
		case "http://www.porsche.com/usa/eventsandracing/":
			n.sambatv("Porsche/Events_and_Racing");
			break;
		case "http://www.porsche.com/usa/accessoriesandservices/":
			n.sambatv("Porsche/Services_and_Accessories")
	}
}()), window.storystreamtrackingbyajaxcall = function() {
	if (!$(".m-22-social-media-content .socialmedia").length || $(".m-22-social-media-content .socialmedia").each(function(n, t) {
			var r = $(t).attr("data-id"),
				u = $(t).attr("data-name"),
				i = $(t).attr("data-title");
			$(t).find(".itemsharedoc li").not(".tracked").each(function(n, t) {
				$(t).on("click", function() {
					$(t).find("span").attr("data-service") == "digg" && pag_tracker.social("outbound", "digg.com", "/submit?url=http%3a%2f%2fwww.porsche.com%2fgermany%2fsocial-media%2f%3f%26lid%3d39393114&title=wir%20bauen%20sportwagen.%20schon%20immer.%20entsprechend%20tief%20ist%20in%20unseren%20genen%20der%20drang%20verankert%2c%20weite")
				})
			}), $(t).find(".itemsharedoc li").addClass("tracked");
			$(t).find(".button.media").not(".tracked").on("click", function() {
				$(t).attr("data-name") == "custom" && pag_tracker.event("interaction", "social", i)
			});
			$(t).find(".button.media").addClass("tracked");
			$(t).find(".m-22-read-more").not(".tracked").on("click", function() {
				pag_tracker.event("interaction", "social", i)
			});
			$(t).find(".m-22-read-more").addClass("tracked")
		}), !!$(".m-22-load-more-container a.loadmore").length) $(".m-22-load-more-container a.loadmore").one("click", function() {
		pag_tracker.event("interaction", "load-more")
	})
}, $(function() {
	if (!!$(".m-22-filter .m-22-filter-button").length) $(".m-22-filter .m-22-filter-button").on("click", function() {
		$(this).hasClass("active") ? pag_tracker.event("interaction", "close", "filter") : pag_tracker.event("interaction", "open", "filter")
	});
	!$(".m-22-category-tabs").length || $(".m-22-category-tabs a").each(function(n, t) {
		$(t).on("click", function() {
			pag_tracker.event("navigation", "tabs", $(this).text())
		})
	}), document.onreadystatechange = function() {
		document.readyState === "complete" && storystreamtrackingbyajaxcall()
	}
}), this.imagePreview = function() {
	xOffset = 10, yOffset = 30, $("a.kbpreview").hover(function(n) {
		this.t = this.title, this.title = "", $("body").append("<img id='kbpreview' src='" + this.rel + "' alt=''/>"), $("#kbpreview").css("top", n.pageY - xOffset + "px").css("left", n.pageX + yOffset + "px").fadeIn("fast")
	}, function() {
		this.title = this.t, $("#kbpreview").remove()
	}), $("a.kbpreview").mousemove(function(n) {
		$("#kbpreview").css("top", n.pageY - xOffset + "px").css("left", n.pageX + yOffset + "px")
	})
}, Guid = function() {
	var n = function() {
		return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1)
	};
	return n() + n() + "-" + n() + "-" + n() + "-" + n() + "-" + n() + n() + n()
}