$(document).ready(function(){
	(function() 
	{
		$(window).scroll(function () {
			if ($(window).scrollTop() > 100) {
				$('#scroller').css('top', $(window).scrollTop());
			}
		}
	); (function() {		
		// scroll behavior    
		function sticky_relocate() {
			var winHeight = $(window).height(); 
			var window_top = $(window).scrollTop();
			var div_pageNav = $('#pageNavAnchor').offset().top;
			var ext_top = $('#exterior').offset().top;
			var int_top = $('#interior').offset().top;
			var connectivity_top = $('#connectivity').offset().top;
			var performance_top = $('#performance').offset().top;
			var specs_top = $('#specs').offset().top;	
			var parallax_speed = 0.3;				
			if(window_top > div_pageNav) {
            	$('#pNavigation').css('top','0px');
            	$('#pNavigation').css('position','fixed');
           	 	$('#secondary_menu_desktop_anchor').css('height','42px');
        	}
			if (window_top < div_pageNav) {
            	$('#pNavigation').css('top','auto');
            	$('#pNavigation').css('position','relative');
				$('#pageNavAnchor').css('height','0px');
			}	
			if (ext_top - window_top > 5) {
				$('.navItem').removeClass('active');
			}	
			if (ext_top - window_top < 5) {
				$('.navItem').removeClass('active');
				$('.navItem.ext').addClass('active');	
			}
			if (int_top - window_top < 5) {
				$('.navItem').removeClass('active');
				$('.navItem.int').addClass('active');	
			}
			if (connectivity_top - window_top < 5) {
				$('.navItem').removeClass('active');
				$('.navItem.connectivity').addClass('active');	
			}
			if (performance_top - window_top < 5) {
				$('.navItem').removeClass('active');
				$('.navItem.performance').addClass('active');	
			}
			if (specs_top - window_top < 5) {
				$('.navItem').removeClass('active');
				$('.navItem.specs').addClass('active');	
			}
			if ( window_top > (winHeight * 1.5)) { 
				$('#move2top').fadeIn();
			}
			else {
				$('#move2top').hide();					
			}
			// partition parallax
			$('.pSectionPar').each(function(index){
				var distance = $(this).offset().top - window_top;
				if ( distance < winHeight ) {
					if ($(this).css('background-position')!=null) { // non-IE browsers			
						var PosX = $(this).css('background-position').split(' ')[0];				
					}
					else {
						var PosX = $(this).css('background-position-x');
					}
					var PosY =  -(winHeight-distance) * parallax_speed;					
					if (PosY < -400) { PosY = -400; }
					$(this).css({ "background-position" : PosX + " " + PosY + "px" });
				}
			}); 
		}  	
		$(window).scroll(sticky_relocate); })();
		
    })();	
	$('#move2top').bind('click', function() {
		$('html, body').animate({ scrollTop: 0}, 1000);
	});
	$('.navItem.gallery').on('click', function(){
		$('.product_gallery_wrap').show();
	});		
	$('.product_gallery_wrap .dashboard .thumbnails').on('click',function(e){
		if($(this).hasClass('active')) { 
			$(this).removeClass('active');
			$('#carousel').animate({ top: '-150px' }, 500);
		} 
		else {
			$(this).addClass('active');
			$('#carousel').addClass('show').animate({ top: '40px' }, 500);
		} 
	});			  
	$('.product_gallery_wrap .dashboard .close').on('click',function(e){
		$('.product_gallery_wrap').hide();
	});	  
	$('.navItem.gallery').on('click',function(){
		if ($("#slider ul.slides").children('li').length<1) { // initialize
			for (i=1; i<=gallery_photo_count; i++) {
				$("#carousel ul.slides").append('<li><img src="' + img_url + '/products/' + $('#car_model').attr('model').toLowerCase() + '_gallery_' + i + '_t.jpg"></li>');
				$("#slider ul.slides").append('<li><img src="' + img_url + '/products/' + $('#car_model').attr('model').toLowerCase() + '_gallery_' + i + '.jpg"></li>');	
			}
			$('.product_gallery_wrap').show();
			$( "#carousel ul li, #slider ul li").spin(spinner_15_wt);
			$('#carousel ul li img, #slider ul li img').load(function(){
				$(this).parent().children('.spinner').hide();
			});	
			$('#carousel').flexslider({
				animation: "slide",
			    controlNav: false,
			    animationLoop: false,
			    slideshow: false,
			    itemWidth: 180,
			    itemMargin: 25,
				prevText: "",
				nextText: "",
			    asNavFor: '#slider'
			});			
			$('#slider').flexslider({
			    animation: "slide",
			    controlNav: false,
			    animationLoop: false,
			    slideshow: false,
				prevText: "",
				nextText: "",	  
			    sync: "#carousel"
			});				
		}
		$("#carousel, #slider").data('flexslider').resize();
	}); 
	// switching specs
	$('#btn_choose_specs li a').click(function(){
		$('#btn_choose_specs li a').removeClass('current');
		$(this).addClass('current');
		$('.specs_wrap').hide();
		$('.download_brochure').css('visibility','hidden');
		$('.specs_wrap.' + $(this).attr('name')).show();
		if ($(this).attr('name') == "new") { $('.specsFootnote .download_brochure').css('visibility','visible');}
	});
	$('#btn_choose_specs .cf11_new').click(function(){
		$('.specsFootnote .beizhu').hide();
	})
	$('#btn_choose_specs .cf11_brand_new').click(function(){
		$('.specsFootnote .beizhu').show();
	})

	//ipad
	var winWidth = $(window).width();
	if(winWidth <= 768 ) {
		$('.win_content_two').css("height", "286px");
		$('.win_content_two').css("left", "-18px");
		$('.win_content_two').css("width", "41%");
		$('.cf11_win .caption2').css("right", "67%");
		$('.cf11_win .caption1 ul').css("marginTop", "80px");
		$('.win_content_two').css("background", "url('../images/products/cf11_win_03ipad.jpg') top center no-repeat");
	}
});

