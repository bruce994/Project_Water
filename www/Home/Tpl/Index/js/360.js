var spritespin_obj=null;

function showCar360(_source) {
	var _w = 1024;
	var _h = 500;
	var _renderer = 'background';
	if (_isIE678) {
		var _renderer = 'canvas';
	}	
	if (device=="pc") {
		if(_ww>=1280) {
			_w = 1200; 
			_h = 586; 	
		}
		else if (_ww >=1124 && _ww<=1280) {
			_w = 1024;
			_h = 500;
		}
		else if(_ww>=980 && _ww< 1124) {
			_w = 768;
			_h = 375;
		}
		else {
			_w = 650;
			_h = 317;
		}
	}
	else {
		if(_ww>667) { // iphone6+ 736x414
			_w = 700; 
			_h = 410; 
		}
	
		else if(_ww<=667 && _ww>568) { // iphone6 667x375
			_w = 635; 
			_h = 372; 		
		}
	
		else if(_ww<=568 && _ww>480) {  // iphone5 568x320
			_w = 550; 
			_h = 322; 
		}
		else { // iphone4 480x320
			_w = 450; 
			_h = 264; 
		}
	}
	if (_source==null) { // window resize or first-time initiation
		_source = img_url + "/360/" + device + "/" + $(".spin_360_wrap .color_options a.current").attr("id") + "/{frame}.jpg"; 
		if (spritespin_obj!=null && device=="pc") { // window resize
			var orig_w = spritespin_obj.spritespin('data').width;	
			if (orig_w == _w) { return false; }	// no size change				
		}
	}
	else {
		_source = img_url + "/360/" + device + "/" + _source + "/{frame}.jpg"; // compose image src
	}
	if (spritespin_obj!==null) {
		spritespin_obj = $('.spin_360_wrap .car').spritespin({
	        source: SpriteSpin.sourceArray(_source, {
	            frame: [0, 35],
	            digits: 1
	        }),
	        frames:36,
	        width: _w,
	        height: _h,
			animate: false,
			onInit: function() { $('.spin_360_wrap').spin(spinner_15_bk); }, // show loading spinner
	        onLoad: function() { $('.spin_360_wrap .spinner').hide(); } // hide loading spinner
	    });		
	}
	else {
		spritespin_obj = $('.spin_360_wrap .car').spritespin({
	        source: SpriteSpin.sourceArray(_source, {
	            frame: [0, 35],
	            digits: 1
	        }),
	        frames:36,
	        width: _w,
	        height: _h,
			animate: false,
			onInit: function() { $('.spin_360_wrap').spin(spinner_15_bk); }, // show loading spinner
	        onLoad: function() { $('.spin_360_wrap .spinner').hide(); } // hide loading spinner
	    });	
	}
}


function showPanorama() {
	$('.panorama_wrap').spin(spinner_15_bk);	
	$('.panorama').html('<iframe id="panorama_object" src="' + root_url + '/panorama/panorama.php?id=' + $('.panorama_wrap .color_options a.current').attr("name") + '" /></iframe>');	
	$('#panorama_object').load(function(){
		$('.panorama_wrap .spinner').hide();
	})		
}

$(document).ready(function(){
	// remove 360 mask and initialize 360 
	$("#mask360, #btn360").click(function(){
		$("#mask360, #btn360").fadeOut();
		showCar360();
		mztrack($('#car_model').attr('model').toLowerCase() + '_360_click');
	});

	// 360 switch color
	$('.spin_360_wrap .color_options a.color').click(function(){
		$('.spin_360_wrap .color_options a').removeClass('current');
		$(this).addClass('current');
	    showCar360($(this).attr("id"));
		mztrack($('#car_model').attr('model').toLowerCase() + '_360_' + $(this).attr("color") + '_click');	
	});

	// panorama switch color 
	$('.panorama_wrap .color_options a.color').click(function() {
		$('.panorama_wrap .color_options a').removeClass('current');
		$(this).addClass('current');
		showPanorama();		
		mztrack($('#car_model').attr('model').toLowerCase() + '_overlay_panorama_' + $(this).attr("color") + '_click');			
	});


	// show color label
	$('.spin_360_wrap .color_options li').hover(function() { $(this).find('.label').show(); }, function () { $(this).find('.label').hide(); }); 

	// swith to sphirical panorama
	$('.spin_360_wrap .color_options a.int').click(function(){ 
		$('.spin_360_wrap').hide();
		$('.panorama_wrap').show();
		mztrack($('#car_model').attr('model').toLowerCase() + '_overlay_360_to_panorama_click'); // 
		showPanorama();
	});
	
	// swith to exterior 360 view
	$('.panorama_wrap .color_options a.ext').click(function(){ 
		$('.panorama_wrap').hide();
		$('.spin_360_wrap').show();
		mztrack($('#car_model').attr('model').toLowerCase() + '_overlay_panorama_to_360_click');				
	});
	
	// be responsive to window size change
	$(window).resize(function(){
		if (spritespin_obj==null || _isIE678) {
			return false;
		} 
		showCar360();
	}); 
});

