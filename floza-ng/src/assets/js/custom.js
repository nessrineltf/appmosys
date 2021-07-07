(function($) {
    'use strict';

    // Mean Menu JS
	$('.mean-menu').meanmenu({ 
		meanScreenWidth: "991"
	});

	// Header Sticky
	$(window).on('scroll',function() {
		if ($(this).scrollTop() > 120){  
			$('.navbar-area').addClass("is-sticky");
		}
		else{
			$('.navbar-area').removeClass("is-sticky");
		}
	});
	
	// Search Menu JS
	$(".search-box i").on("click", function(){
		$(".search-overlay").toggleClass("search-overlay-active");
	});
	$(".search-overlay-close").on("click", function(){
		$(".search-overlay").removeClass("search-overlay-active");
	});
    
    // Hero slider
	$('.hero-slider').owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		nav: true,
		autoHeight: true,
		autoplay: true,
		autoplayHoverPause: true,
		dots: false,
		navText: [
			"<i class='bx bx-chevron-left'></i>",
			"<i class='bx bx-chevron-right'></i>"
		]
	})

	// Hero slider Two
	$('.hero-slider-two').owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		nav: true,
		autoplay: true,
		autoplayHoverPause: true,
		dots: false,
		navText: [
			"<i class='bx bx-chevron-left'></i>",
			"<i class='bx bx-chevron-right'></i>"
		]
	})

	// Speciality Slider
	$('.speciality-slider').owlCarousel({
		loop: true,
		margin: 30,
		dots: false,
		nav: true,
		autoplay: true,
		autoplayHoverPause: true,
		navText: [
			"<i class='bx bx-chevron-left'></i>",
			"<i class='bx bx-chevron-right'></i>"
		],
		responsive:{
			0:{
				items:1
			},
			576:{
				items:2
			},
			768:{
				items:2
			},
			1200:{
				items:3
			}
		}
	})

	// Testimonials Slider
	$('.testimonials-slider').owlCarousel({
		items:1,
		loop: true,
		margin: 30,
		dots: true,
		nav: true,
		autoplay: true,
		autoplayHoverPause: true,
		navText: [
			"<i class='bx bx-chevron-left'></i>",
			"<i class='bx bx-chevron-right'></i>"
		],
	})

	// Partner Slider
	$('.partner-slider').owlCarousel({
		loop: true,
		dots: false,
		margin: 30,
		nav: false,
		autoplay: true,
		autoplayHoverPause: true,
		responsive:{
			0:{
				items:2
			},
			576:{
				items:3
			},
			768:{
				items:4
			},
			1200:{
				items:5
			}
		}
	})

	// Popup Video
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 300,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	// Services Slider
	$('.services-slider').owlCarousel({
		loop: true,
		margin: 30,
		dots: false,
		nav: true,
		autoplay: true,
		autoplayHoverPause: true,
		navText: [
			"<i class='bx bx-chevron-left'></i>",
			"<i class='bx bx-chevron-right'></i>"
		],
		responsive:{
			0:{
				items:1
			},
			576:{
				items:1
			},
			768:{
				items:2
			},
			1200:{
				items:4
			}
		}
	})

	// Odometer JS
	$('.odometer').appear(function(e) {
		var odo = $(".odometer");
		odo.each(function() {
			var countNumber = $(this).attr("data-count");
			$(this).html(countNumber);
		});
	});

	// Hero slider Three
	$('.hero-slider-three').owlCarousel({
		items: 1,
		loop: true,
		margin: 0,
		nav: true,
		autoHeight: true,
		autoplay: true,
		autoplayHoverPause: true,
		dots: true,
		navText: [
			"<i class='bx bx-chevron-left'></i>",
			"<i class='bx bx-chevron-right'></i>"
		]
	})
	
	//  Services Slider Two
	$('.services-slider-two').owlCarousel({
		loop: true,
		margin: 30,
		dots: false,
		nav: true,
		autoplay: true,
		autoplayHoverPause: true,
		navText: [
			"<i class='bx bx-chevron-left'></i>",
			"<i class='bx bx-chevron-right'></i>"
		],
		responsive:{
			0:{
				items:1
			},
			576:{
				items:1
			},
			768:{
				items:2
			},
			1200:{
				items:3
			}
		}
	})

	//  Clients Slider
	$('.clients-slider').owlCarousel({
		loop: true,
		margin: 30,
		dots: false,
		nav: true,
		autoplay: true,
		autoplayHoverPause: true,
		navText: [
			"<i class='bx bx-chevron-left'></i>",
			"<i class='bx bx-chevron-right'></i>"
		],
		responsive:{
			0:{
				items:1
			},
			576:{
				items:1
			},
			768:{
				items:1
			},
			1200:{
				items:2
			}
		}
	})

	//  Accrodion JS
	$('#accordion h3').on('click', function() {
        // capture all icons
        var iconChevron = $('.bx-chevron-right'),
 
		// capture current icon
		currentIcon = $(this).children('.bx-chevron-right');
         
        // Rotate none clicked icons back to original position
        $(iconChevron).not(currentIcon).removeClass('is-rotate');
 
        // Need rotate chevron on click 
        $(this).children('.bx-chevron-right').toggleClass('is-rotate');
     
        // Toggle is-hidden class on clicked and add it to previously clicked
        $(this).next()
		.toggleClass('is-hidden')
		.siblings('.drawer').addClass('is-hidden');
    });

	// Blog Slider
	$('.blog-slider').owlCarousel({
		loop: true,
		margin: 30,
		dots: false,
		nav: true,
		autoplay: true,
		autoplayHoverPause: true,
		navText: [
			"<i class='bx bx-chevron-left'></i>",
			"<i class='bx bx-chevron-right'></i>"
		],
		responsive:{
			0:{
				items:1
			},
			576:{
				items:1
			},
			768:{
				items:2
			},
			1200:{
				items:3
			}
		}
	})

	// Gallery JS
	$('.floza-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1]
		}
	});

	// Accordion JS
	$('.accordion > li:eq(0) .title').addClass('active').next().slideDown();
	$('.accordion .title').click(function(j) {
		var dropDown = $(this).closest('li').find('.accordion-content');
		$(this).closest('.accordion').find('.accordion-content').not(dropDown).slideUp();
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
		} else {
			$(this).closest('.accordion').find('.title.active').removeClass('active');
			$(this).addClass('active');
		}
		dropDown.stop(false, true).slideToggle();
		j.preventDefault();
	});

	// Feedback Slider
	$('.feedback-slider').owlCarousel({
		loop: true,
		margin: 30,
		dots: false,
		nav: true,
		autoplay: true,
		autoplayHoverPause: true,
		navText: [
			"<i class='bx bx-chevron-left'></i>",
			"<i class='bx bx-chevron-right'></i>"
		],
		responsive:{
			0:{
				items:1
			},
			576:{
				items:1
			},
			768:{
				items:1
			},
			1200:{
				items:1
			}
		}
	});
	
	// Go to Top
	$(window).on('scroll', function() {
        if ($(this).scrollTop() > 0) {
            $('.go-top').addClass('active');
        } else {
            $('.go-top').removeClass('active');
        }
	});	
    $(function(){
        $(window).on('scroll', function(){
            var scrolled = $(window).scrollTop();
            if (scrolled > 600) $('.go-top').addClass('active');
            if (scrolled < 600) $('.go-top').removeClass('active');
        });  
        
        $('.go-top').on('click', function() {
            $("html, body").animate({ scrollTop: "0" },  500);
        });
    });
	
})(jQuery);