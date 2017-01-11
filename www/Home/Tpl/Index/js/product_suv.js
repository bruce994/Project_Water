$(document).ready(function() {

    var div_pageNav;
    var _top = [];
    var _W;

    function adjust(e) {
        _W = $(window).width();

        $('.kv').each(function(i) {
            var off = $(this).offset();
            if (off)
                _top[i] = off.top;
        });
        div_pageNav = $('.nav').offset().top;

        sticky_relocate();

        if (_W < 1000) {
            $('.ft1 .f3').height($('.ft1 .f3 figure').height());
            $('.popup .block').css('-webkit-transform', 'scale(' + (_W / 1000) + ')');
        } else {
            if (!Modernizr.csstransforms) {
                $('.box').not('.popup .box').css('left', (_W - 1400) / 2);
            }
        }
    }



    //ie8 fix
    if (!Modernizr.nthchild) {
        $('.block .box li:nth-child(3n+1)').css('clear', 'left');
        $('.ft4 .f2 li:nth-child(4)').css('margin-left', 64);
        $('.ft4 .f2 li:last-child h4 a').css('right', 0);
        $('.suv_testdrive li:last-child h3,.suv_testdrive li:last-child p').css('margin-left', 14);
        $('.popup .ft1 .p3 .text-group:last-child h3').width(200);
        $('.popup .ft1 .p3 .text-group:last-child .content').width(250);
        $('.popup .ft2 .s5 .text:last-child').css('left', 20);
    }

    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            $('#scroller').css('top', $(window).scrollTop());
        }
    }).resize(adjust);

    $(".fs").flexslider({
        animation: "slide",
        directionNav: false,
        start: adjust
    });

    // scroll behavior
    function sticky_relocate() {
        var winHeight = $(window).height();
        var window_top = $(window).scrollTop();

        // var ext_top = $('#exterior').offset().top;
        // var performance_top = $('#performance').offset().top;
        // var connectivity_top = $('#connectivity').offset().top;

        var parallax_speed = 0.3;
        if (window_top > div_pageNav) {
            $('.nav nav').addClass('fixed');
        }
        if (window_top < div_pageNav) {
            $('.nav nav').removeClass('fixed');
        }

        $('.nav li').removeClass('active');
        for (var i = _top.length - 1; i >= 0; i--) {
            if (window_top + 45 > _top[i]) {
                $('.nav li').eq(i).addClass('active');
                break;
            }
        }

        if (window_top > (winHeight * 1.5)) {
            $('#move2top').fadeIn();
        } else {
            $('#move2top').hide();
        }
        var winWidth = $(window).width();
        if(winWidth <= 1024 ){
            // $(".spin_360_wrap").css("height","375px");
        }
        if(winWidth <= 768 ){
            // $(".spin_360_wrap").css("height","317px");
        }

        // partition parallax
        $('.pSectionPar').each(function(index) {
            var distance = $(this).offset().top - window_top;
            var winWidth = $(window).width();
            if(winWidth <= 768 ){
                $('.kv1').css("background-image","url('../images/products/cf16/design_kv.jpg')");
                $('.kv2').css("background-image","url('../images/products/cf16/powe_kv2.jpg')");
                $('.kv4').css("background-image","url('../images/products/cf16/tech_kv2.jpg')");
                if (distance < winHeight) {
                    if ($(this).css('background-position') != null) {//
                        // non-IE browsers
                        var PosX = $(this).css('background-position').split(' ')[0];
                    } else {
                        var PosX = $(this).css('background-position-x');
                    }
                    var PosY = -(winHeight - distance) * 0.3;
                    if (PosY < -240) {
                        PosY = -240;
                    }
                    $(this).css({
                        "background-position": PosX + " " + PosY + "px"
                    });
                }
            }else if(winWidth <= 1024 ){
                $('.kv1').css("background-image","url('../images/products/cf16/design_kv.jpg')");
                $('.kv2').css("background-image","url('../images/products/cf16/powe_kv2.jpg')");
                $('.kv4').css("background-image","url('../images/products/cf16/tech_kv2.jpg')");
                if (distance < winHeight) {
                    if ($(this).css('background-position') != null) {//
                        // non-IE browsers
                        var PosX = $(this).css('background-position').split(' ')[0];
                    } else {
                        var PosX = $(this).css('background-position-x');
                    }
                    var PosY = -(winHeight - distance) * 0.4;
                    if (PosY < -225) {
                        PosY = -225;
                    }
                    $(this).css({
                        "background-position": PosX + " " + PosY + "px"
                    });
                }
            }else{
                if (distance < winHeight) {
                    if ($(this).css('background-position') != null) {//
                        // non-IE browsers
                        var PosX = $(this).css('background-position').split(' ')[0];
                    } else {
                        var PosX = $(this).css('background-position-x');
                    }
                    var PosY = -(winHeight - distance) * 0.28;
                    if (PosY < -230) {
                        PosY = -230;
                    }
                    $(this).css({
                        "background-position": PosX + " " + PosY + "px"
                    });
                }
            }


        });

        $('.pSectionPar_other').each(function(index) {
            var distance = $(this).offset().top - window_top;
            if(winWidth <= 1024 ){
                if (distance < winHeight) {
                    if ($(this).css('background-position') != null) {//
                        // non-IE browsers
                        var PosX = $(this).css('background-position').split(' ')[0];
                    } else {
                        var PosX = $(this).css('background-position-x');
                    }
                    var PosY = -(winHeight - distance) * 0.28;
                    if (PosY < -400) {
                        PosY = -400;
                    }
                    $(this).css({
                        "background-position": PosX + " " + PosY + "px"
                    });
                }
            }else{
                if (distance < winHeight) {
                    if ($(this).css('background-position') != null) {//
                        // non-IE browsers
                        var PosX = $(this).css('background-position').split(' ')[0];
                    } else {
                        var PosX = $(this).css('background-position-x');
                    }
                    var PosY = -(winHeight - distance) * 0.22;
                    if (PosY < -400) {
                        PosY = -400;
                    }
                    $(this).css({
                        "background-position": PosX + " " + PosY + "px"
                    });
                }
            }

        });


    }



    $(window).scroll(sticky_relocate);

    $('a[data-more]').click(function() {
        var data = $(this).data('more').split('-');
        if (data.length > 1) {
            $('#popupDetail .block,#popupDetail .block>div').hide();
            $('#popupDetail .ft' + data[0]).show();
            var scope = $('#popupDetail .ft' + data[0] + '.p' + data[1]).show();
            $('#popupDetail').addClass('popup-show');
            if (scope.hasClass('slider')) {
                $(scope).flexslider({
                    selector: '.wrap _3E .slide.slide',
                    animation: 'slide',
                    directionNav: false
                });
            }
        }
    });
    $('#popupDetail').click(function(e) {
        if (!$(e.target).hasClass('block') && $(e.target).parents('.block').length === 0) {
            $('#popupDetail').removeClass('popup-show');
        }
    });
    $('.popup .btnClose').click(function(e) {
            $('#popupDetail').removeClass('popup-show');
    });

    $('#move2top').bind('click', function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });
    $('.nav .gallery').on('click', function() {
        $('.product_gallery_wrap').show();
    });
    $('.product_gallery_wrap .dashboard .thumbnails').on('click', function(e) {
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
            $('.product_gallery_wrap #carousel').animate({
                top: '-150px'
            }, 500);
        } else {
            $(this).addClass('active');
            $('.product_gallery_wrap #carousel').addClass('show').animate({
                top: '40px'
            }, 500);
        }
    });
    $('.product_gallery_wrap .dashboard .close').on('click', function(e) {
        $('.product_gallery_wrap').hide();
    });
    $('.nav .gallery').on('click', function() {
        if ($(".product_gallery_wrap #slider ul.slides").children('li').length < 1) {// initialize
            for ( i = 1; i <= gallery_photo_count; i++) {
                $(".product_gallery_wrap #carousel ul.slides").append('<li><img src="' + img_url + '/products/' + $('#car_model').attr('model').toLowerCase() + '_gallery_' + i + '_t.jpg"></li>');
                $(".product_gallery_wrap #slider ul.slides").append('<li><img src="' + img_url + '/products/' + $('#car_model').attr('model').toLowerCase() + '_gallery_' + i + '.jpg"></li>');
            }
            $('.product_gallery_wrap').show();

            $(".product_gallery_wrap #carousel ul li,.product_gallery_wrap #slider ul li").spin(spinner_15_wt);
            $('.product_gallery_wrap #carousel ul li img, .product_gallery_wrap #slider ul li img').load(function() {
                $(this).parent().children('.product_gallery_wrap .spinner').hide();
            });
            $('.product_gallery_wrap #carousel').flexslider({
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

            $('.product_gallery_wrap #slider').flexslider({
                animation: "slide",
                controlNav: false,
                animationLoop: false,
                slideshow: false,
                prevText: "",
                nextText: "",
                sync: "#carousel"
            });
        }
        $("#carousel,#slider").data('flexslider').resize();
    });
    // switching specs
    $('#btn_choose_specs li a').click(function() {
        $('#btn_choose_specs li a').removeClass('current');
        $(this).addClass('current');
        $('.specs_wrap').hide();
        $('.download_brochure').css('visibility', 'hidden');
        $('.specs_wrap.' + $(this).attr('name')).show();
        if ($(this).attr('name') == "new") {
            $('.specsFootnote .download_brochure').css('visibility', 'visible');
        }
    });
    $('#btn_choose_specs .cf11_new').click(function() {
        $('.specsFootnote .beizhu').hide();
    });
    $('#btn_choose_specs .cf11_brand_new').click(function() {
        $('.specsFootnote .beizhu').show();
    });
});

