if (document.documentMode!=undefined) {
	if (document.documentMode<9) {
		_isIE678 = true;
	}
	else if (document.documentMode=9) {
		_isIE9 = true;
	}
	else {
		_isIE1011 = true;
	}
}
$(document).ready(function() {
	// define slider style 1
	$(".others_slider").flexslider({
		animation: "slide",
		prevText: "",           //String: Set the text for the "previous" directionNav item
		nextText: "",
		directionNav: true
	});
	// define slider style 2
	$(".flexslider").flexslider({
		animation: "slide",
		slideshowSpeed: 2300,
		directionNav: false
	});

 	// global navigation dropdown menu
	$(".gNavigation li").hover(function() {
		$(this).find(".main_nav_dropdown").show();
		$(this).find(".main_nav_dropdownCH").show();
		}, function () {
		$(this).find(".main_nav_dropdown").hide();
		$(this).find(".main_nav_dropdownCH").hide();
	});

	// wechat overlay
	$(".bottom_menu_wechat").click(function(e) {
  		e.preventDefault();
	  	$(".hide_on_click").hide();
	  	$(".slide_in_wechat").animate({marginLeft: "0px"}, 500);
  	});

	// search
	$(".btn_gSearch").click(function(e){
		keyword = $("#keyword").val();
        if(keyword = ''){
        alert('搜索词不能为空!');
        return;
        }
        $( "#gSearchForm" ).submit();
	});

	$(".gSearchBox .btn_close").click(function(e){
		$(".gSearchBox").fadeOut();
		$("#gsearch_str").val("");
		$("#pre_search_result_wrap").empty();
	});


	//pre-search
	/*
	$.getJSON(source_url + "pre_search_keywords.json", function( data ) {
		pre_search_keywords = data.data;  // save a copy
	});

  	$.getJSON(source_url + "pre_search_result.json", function( data ) {
		pre_search_result = data; // save a copy
	});
	*/


	$("#gsearch_str").bind("keyup", function(e){
		$("#pre_search_result_wrap").empty();
		search_keyword = $.trim($(this).val().toLowerCase());
		if (search_keyword === "") { return false; }
		$.each(pre_search_keywords, function(key, val) {
			if (val.keyword.indexOf(search_keyword)>=0) { // yes matched
				result_ids = val.result_ids.split(",");
				$.each(result_ids, function(k,v) {
					if ( pre_search_result[v].target === "_self") {
						target_url = site_url + pre_search_result[v].target_url;
					}
					else {
						target_url = pre_search_result[v].target_url;
					}
					$("#pre_search_result_wrap").append("<li><a href=\"" + target_url + "\" onclick=\"mztrack('presearch_link_click'); return true; \"><img src=\"" + root_url + "/images/global/" + pre_search_result[v].icon + "\" /><div><p class=\"title\">" + pre_search_result[v].title + "</p><p>" + pre_search_result[v].desc + "</p></a></li>");
				});
				return false;
			}
		});
	});
	$('#btnWeChat').click(function() {
		$('#popupWeChat').fadeIn();
	});

	$('.popup .btnClose').click(function() {
		$('#popupWeChat').fadeOut();
	});
	$(window).resize(function(){
		_ww = $(window).width();
		_wh = $(window).height();
		adjust();
	});

	var _W;
	_W = $(window).width();
	function adjust(){
		if (_W < 1000) {
			$('.information_float').css('-webkit-transform', 'scale(' + (_W / 1000) + ')');
		}
	}
	if (_W < 1000) {
		$('.information_float').css('-webkit-transform', 'scale(' + (_W / 1000) + ')');
	}

	$(".information").click(function(){
		$(".information_float_mask").show();
	})

	$(".information_float_mask .btn_close").click(function(){
		$(".information_float_mask").hide();
	})
});

