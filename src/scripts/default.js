jQuery(document).ready(function($){
	
	var hash = window.location.hash;
	
	lastScrollTop = 0;
	
	$('html').removeClass('no-js');
	
	stickymenu();
	scrollparallax();
	showbacktotop();
	$(window).scroll(function(){
		stickymenu();
		scrollparallax();
		sidemenuautoclose();
		showbacktotop();
	});
	
	contentminheight();
	$(window).resize(function(){
		contentminheight();
		hiddenspecialmenu();
	});
	
	function stickymenu(){
        var st = $(window).scrollTop();
		if (st > 0) {
			$('.main-header').addClass('scrollmin');
			if (st > 200) {
				$('.main-header').addClass('scrolled');
				if (st > lastScrollTop){
					$('.main-header').removeClass('scrollup');
				} else {
					$('.main-header').addClass('scrollup');
				}  
			} else {
				if (lastScrollTop == 0 || st == 0) {
					$('.main-header').removeClass('scrolled');
					$('.main-header').removeClass('scrollup');
				} else if (st > lastScrollTop){
					$('.main-header').removeClass('scrollup');
				} else {
					$('.main-header').addClass('scrollup');
				}  
			}
		} else {
			$('.main-header').removeClass('scrollmin');
		}
        lastScrollTop = st;
    }
	
	function scrollparallax(){
		var scrolltop = $(window).scrollTop();
		$('.title-parallax-bg').css('top', (scrolltop / 2) + 'px');
	}
	
	function sidemenuautoclose(){
		var $body = $('body');
		if( $body.hasClass('side-menu-open') && !$body.hasClass('side-menu-animate') ){
			if( $(window).scrollTop() > 200 ){
				$body.addClass('side-menu-animate');
				$body.removeClass('side-menu-open');
				setTimeout(function(){
					$body.removeClass('side-menu-animate');
				}, 300);
			}
		}
	}

	function hiddenspecialmenu(){
        var $html = $('html');
        var $body = $('body');
        if( $body.hasClass('side-menu-open') && !$body.hasClass('side-menu-animate') ){
        	if(!$('.special-menu-btn:visible, .mobile-special-btn:visible').length){
                $body.addClass('side-menu-animate');
                $body.removeClass('side-menu-open');
                setTimeout(function(){
                    $body.removeClass('side-menu-animate');
                }, 300);
			}
        }else if( $html.hasClass('menu-fullscreen-open') && !$body.hasClass('menu-fullscreen-animate') ){
            $body.addClass('menu-fullscreen-animate');
            $html.removeClass('menu-fullscreen-open');
            setTimeout(function(){
                $body.removeClass('menu-fullscreen-animate');
            }, 300);
		}
	}
	
	$('body.has-side-menu .special-menu-btn, body.has-side-menu .side-menu-close, body.has-side-menu .mobile-special-btn, body.has-side-menu .side-menu-cover').click(function(){
		var $body = $('body');
		if(!$body.hasClass('side-menu-animate')){
			$body.addClass('side-menu-animate');
			if(!$body.hasClass('side-menu-open')){
				$body.addClass('side-menu-open');
			}else{
				$body.removeClass('side-menu-open');
			}
			setTimeout(function(){
				$body.removeClass('side-menu-animate');
			}, 300);
		}
		return false;
	});
	
	$('body.has-fullscreen-menu .special-menu-btn, body.has-fullscreen-menu .menu-fullscreen-close, body.has-fullscreen-menu .mobile-special-btn').click(function(){
		var $body = $('body');
		if(!$body.hasClass('menu-fullscreen-animate')){
			var $html = $('html');
			$body.addClass('menu-fullscreen-animate');
			if(!$html.hasClass('menu-fullscreen-open')){
				$html.addClass('menu-fullscreen-open');
			}else{
				$html.removeClass('menu-fullscreen-open');
			}
			setTimeout(function(){
				$body.removeClass('menu-fullscreen-animate');
			}, 300);
		}
		return false;
	});
	
	$('.mobile-menu-btn').click(function(){
		var $menu = $('.header-mobile-menu');
		if( !$menu.hasClass('animate') ){
			$menu.addClass('animate');
			if(!$menu.hasClass('header-mobile-menu-open')){
				$menu.addClass('header-mobile-menu-open');
				$menu.slideDown(300);
			}else{
				$menu.removeClass('header-mobile-menu-open');
				$menu.slideUp(300);
			}
			setTimeout(function(){
				$menu.removeClass('animate');
			}, 300);
		}
		return false;
	});
	
	if( $('body').hasClass('has-uncovering-footer') ){
		
		$('.main-footer').addClass('footer-fixed');
		uncoveringfooter();
		$(window).resize(function(){
			uncoveringfooter();
		});
	
		function uncoveringfooter(){
			var footerheight = $('.main-footer').outerHeight();
			$('.content-outer').css('margin-bottom', footerheight + 'px');
		}
	}
	
	function showbacktotop(){
		if( $(window).scrollTop() > 200 ){
			$('.back-to-top').addClass('visible');
		}else{
			$('.back-to-top').removeClass('visible');
		}
	}
	
	function contentminheight(){
		
		var $content = $('.content');
		if( $content.length ){
			var windowheight = $(window).outerHeight();
			var footerheight = $('.main-footer').outerHeight();
			var minheight = windowheight - footerheight - $content.offset().top;
			if( minheight < 300 ){
				minheight = 300;
			}
			$content.css('min-height', minheight);
		}
		
	}
	
	$('.main-menu li.menu-item-has-children>a, .header-top ul.menu li.menu-item-has-children>a, .left-menu li.menu-item-has-children>a').on('touchstart', function(){
		var $li = $(this).closest('li.menu-item-has-children');
		if(!$li.hasClass('submenuopen')){
			$(this).parents('li').addClass('dontclose');
			$('.submenuopen:not(.dontclose)').removeClass('submenuopen');
			$('.dontclose').removeClass('dontclose');
			$li.addClass('submenuopen');
			return false;
		}
	});
	
	$(document).on('touchstart', function(e){
		if ($(e.target).closest('.menu-item-has-children').length === 0) {
			$('.submenuopen').removeClass('submenuopen');
		}
	});
	
	$('.back-to-top').click(function(){
        $('body, html').animate({
            scrollTop: 0
        }, $(window).scrollTop() / 3, 'linear');
		return false;
	});
	
	$('.dist-slider').each(function(){
		$(this).addClass('dist-slider-initializing');
		var autoplay = $(this).attr('data-autoplay');
		var smartspeed = $(this).attr('data-smartspeed');
		var nav = $(this).attr('data-nav');
		var dots = $(this).attr('data-dots');
		$(this).owlCarousel({
			loop:true,
			margin:0,
			items:1,
			autoplay:(autoplay != '0'),
			autoplayTimeout:( autoplay ? autoplay : 4500 ),
			smartSpeed:( smartspeed ? smartspeed : 650 ),
			nav:( nav == '1' ),
			dots:( dots == '1' ),
			navText:['<span aria-label="Previous"><i class="far fa-angle-left"></i></span>','<span aria-label="Next"><i class="far fa-angle-right"></i></span>'],
			mouseDrag:false,
			touchDrag:true,
			onInitialized:dist_slider_init,
		});
		$(this).removeClass('dist-slider-initializing');
	});
	
	function dist_slider_init(e){
		var $slider = $('.dist-slider-initializing');
		var $outer = $slider.closest('.dist-slider-outer');
		var $general = $outer.find('.dist-slider-general');
		if($general.length){
			$general.appendTo($slider);
		}
		var dot_counter = 0;
		$slider.find('.owl-dot').each(function(){
			dot_counter++;
			$(this).attr('aria-label', dot_counter);
		});
	}
	
	$('li>.sub-menu-arrow, li>.menu-item-inner>.sub-menu-arrow').click(function(){
		var $li = $(this).closest('li');
		if( !$li.hasClass('sub-menu-animate') ){
			$li.addClass('sub-menu-animate');
			if( !$li.hasClass('sub-menu-open') ){
				$li.find('>ul, >.menu-item-inner>ul').slideDown(300);
				$li.addClass('sub-menu-open');
			}else{
				$li.find('>ul, >.menu-item-inner>ul').slideUp(300);
				$li.removeClass('sub-menu-open');
			}
			setTimeout(function(){
				$li.removeClass('sub-menu-animate');
			}, 300);
		}
		return false;
	});
	
	$('.dist-accordion-title').click(function(){
		var $accordion = $(this).closest('.dist-accordion');
		if( !$accordion.hasClass('animate') ){
			$accordion.addClass('animate');
			$section = $(this).closest('.dist-accordion-section');
			if( $accordion.attr('data-type') == 'accordion' && !$section.hasClass('open') ){
				$accordion.find('.dist-accordion-section.open .dist-accordion-content').slideUp(300);
				$accordion.find('.dist-accordion-section.open').removeClass('open');
			}
			if( !$section.hasClass('open') ){
				$section.addClass('open');
				$section.find('.dist-accordion-content').slideDown(300);
			}else{
				$section.removeClass('open');
				$section.find('.dist-accordion-content').slideUp(300);
			}
			setTimeout(function(){
				$accordion.removeClass('animate');
			}, 300);
		}
		return false;
	});
	
	if( $('.dist-accordion-section[data-hashid="' + hash.replace('#', '') + '"]').length ){
		var $section = $('.dist-accordion-section[data-hashid="' + hash.replace('#', '') + '"]');
		var $accordion = $section.closest('.dist-accordion');
		$accordion.addClass('animate');
		$accordion.addClass('js-hidden-content');
		$section.addClass('js-scroll-to-here');
		$('html, body').animate({
			scrollTop: $section.offset().top - $('.main-header').outerHeight(true)
		}, 1000, 'swing');
		$accordion.removeClass('js-hidden-content');
		$section.removeClass('js-scroll-to-here');
		var $toclose = $accordion.find('.dist-accordion-section.open:not(.js-scroll-to-here)');
		$toclose.removeClass('open');
		$toclose.find('.dist-accordion-content').slideUp(300);
		$section.find('.dist-accordion-content').slideDown(300);
		$section.addClass('open');
		setTimeout(function(){
			$accordion.removeClass('animate');
		}, 300);
	}
	
});
