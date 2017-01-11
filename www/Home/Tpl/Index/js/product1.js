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
			if ( window_top > (winHeight * 0.5)) { 
				$('#move2top').fadeIn();
			}
			else {
				$('#move2top').hide();					
			}
		}  	
		$(window).scroll(sticky_relocate); })();
		
    })();	
	$('#move2top').bind('click', function() {
		$('html, body').animate({ scrollTop: 0}, 1000);
	});

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

