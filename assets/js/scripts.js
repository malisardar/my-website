/*
Author       : Hash Theme.
Template Name: Clorine - Responsive Business Template
Version      : 1.0
*/
/*=============================================
Table Of Contents
================================================
1. PRELOADER JS
2. BOOTSTRAP TOOLTIP
3. MENU JS
4. SLIDER JS
5. TEAM SLIDER
6. TESTIMONIAL SLIDER
7. CLIENT SLIDER
8. BLOG SLIDER
9. ACCORDION JS
10. PROGRESS BAR JS
11. COUNTDOWN JS
12. SECTIONS BACKGROUNDS
13. MIXITUP JS
14. WOW ANIMATION JS


Table Of Contents end
================================================
*/
 
(function($) {
    'use strict';

    jQuery(document).on('ready', function() {

        /* 1. PRELOADER JS*/

        $(window).on('load', function() {
            $('.loadscreen').fadeOut();
            $('.preloader').delay(350).fadeOut('slow');
        });



        /* 2. BOOTSTRAP TOOLTIP  */

        $('[data-toggle="tooltip"]').tooltip();




        /* 3. MENU JS*/

        $('a.page-scroll').on('click', function(e) {
            var anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $(anchor.attr('href')).offset().top - 50
            }, 1500);
            e.preventDefault();
        });


        $(window).on('scroll', function() {
            if ($(this).scrollTop() > 100) {
                $('.main-menu').addClass('menu-animation');
            } else {
                $('.main-menu').removeClass('menu-animation');
            }
        });

        $(document).on('click', '.navbar-collapse.in', function(e) {
            if ($(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle') {
                $(this).collapse('hide');
            }
        });
		


        /* 4. SLIDER JS */

		
		$('.home-slider').owlCarousel({
			loop:true,
			margin:0,
			dots:true,
			nav:true,
			autoplay:true,
			navText: ["<i class='icofont icofont-thin-left'></i>", "<i class='icofont icofont-thin-right'></i>"],
			responsiveClass:true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:1
				}
			}
		});



        /* 5. TEAM SLIDER */
		
		$('.team-slider').owlCarousel({
			loop:true,
			margin:0,
			dots:true,
			nav:true,
			autoplay:false,
			navText: ["<i class='icofont icofont-thin-left'></i>", "<i class='icofont icofont-thin-right'></i>"],
			responsiveClass:true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:1
				}
			}
		});


        /* 6. TESTIMONIAL SLIDER */
		
		$('.testimonial-slider').owlCarousel({
			loop:true,
			margin:0,
			dots:true,
			nav:true,
			autoplay:false,
			navText: ["<i class='icofont icofont-thin-left'></i>", "<i class='icofont icofont-thin-right'></i>"],
			responsiveClass:true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				1000:{
					items:1
				}
			}
		});
		

        /* 7. CLIENT SLIDER */
		
		$('.client-slider').owlCarousel({
			loop:true,
			margin:0,
			dots:false,
			nav:false,
			autoplay:true,
			autoplayTimeout:4000,
			navText: ["<i class='icofont icofont-thin-left'></i>", "<i class='icofont icofont-thin-right'></i>"],
			responsiveClass:true,
			responsive:{
				0:{
					items:2
				},
				600:{
					items:3
				},
				700:{
					items:4
				},
				1000:{
					items:6
				}
			}
		});


        /* 8. BLOG SLIDER */
		
		$('.blog-slider').owlCarousel({
			loop:true,
			margin:30,
			dots:false,
			nav:false,
			autoplay:true,
			autoplayTimeout:4000,
			navText: ["<i class='icofont icofont-thin-left'></i>", "<i class='icofont icofont-thin-right'></i>"],
			responsiveClass:true,
			responsive:{
				0:{
					items:1
				},
				600:{
					items:1
				},
				700:{
					items:2
				},
				1000:{
					items:3
				}
			}
		});


	   /* 9. ACCORDION JS  */
	   
		var selectIds = $('#panel1');
		$(function($) {
			selectIds.on('show.bs.collapse hidden.bs.collapse', function() {
				$(this).prev().find('.icofont').toggleClass('icofont-simple-down icofont-close');
			})
		});
		var selectIds = $('#panel2');
		$(function($) {
			selectIds.on('show.bs.collapse hidden.bs.collapse', function() {
				$(this).prev().find('.icofont').toggleClass('icofont-close icofont-simple-down');
			})
		});
		
		
		

	    /* 10. PROGRESS BAR JS */
		
		 if(typeof($.fn.knob) != 'undefined') {
			$('.knob').each(function () {
				 var $this = $(this),
				knobVal  = $this.attr('data-rel');

				 $this.knob({
					'draw' : function () { 
					   $(this.i).val(this.cv + '%')
					}
				 });

				 $this.appear(function() {
					$({
					   value: 0
					})
					.animate({
					   value: knobVal
					},
						{
							duration : 2000,
							easing   : 'swing',
							step     : function () {
							$this.val(Math.ceil(this.value)).trigger('change');
						}
					});
				 }, {accX: 0, accY: -150});
			});
		}

		
		
        /* 11. COUNTDOWN JS */
		
        $('.counter-section').on('inview', function(event, visible, visiblePartX, visiblePartY) {
            if (visible) {
                $(this).find('.timer').each(function() {
                    var $this = $(this);
                    $({
                        Counter: 0
                    }).animate({
                        Counter: $this.text()
                    }, {
                        duration: 2000,
                        easing: 'swing',
                        step: function() {
                            $this.text(Math.ceil(this.Counter));
                        }
                    });
                });
                $(this).unbind('inview');
            }
        });
    

        /* 12. SECTIONS BACKGROUNDS */

        var pageSection = $("section,div");
        pageSection.each(function(indx) {

            if ($(this).attr("data-background")) {
                $(this).css("background-image", "url(" + $(this).data("background") + ")");
            }
        });

		
    });

    /* 13. MIXITUP JS */

    $('.portfoli-items').mixItUp();

    // jQuery Lightbox
    $('.venobox').venobox({
        numeratio: true,
        titleattr: 'data-title',
        infinigall: true
    });


    /* 14. WOW ANIMATION JS */

    new WOW().init();



})(jQuery);