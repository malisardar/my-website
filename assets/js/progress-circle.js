(function() {
	"use strict";
	
	$(document).ready(function() {
		//progress-circle 1
		function setProgress(num){
			var $spinner = $('.p-circle1 .spinner');
			var $filler = $('.p-circle1 .filler');
			var $percentage = $('.p-circle1 .percentage');

			if (num < 0) num = 0;
			if (num > 100) num = 100;

			var initialNum = $percentage.text().replace('%','');
			$({numVal:initialNum}).animate({numVal:num},{
				duration: 6000,
				easing: 'swing',
					step: function (currVal) {
					  $percentage.text(Math.ceil(currVal) + '%');
					  if (currVal > 0 && currVal <= 50) {
						$filler.css('display', 'none');
						var spinnerDegs = -180 + ((currVal * 180) / 50);
						rotate($spinner, spinnerDegs);
					  } else if (currVal > 50) {
						rotate($spinner, 0);
						$filler.css('display', '');
						var fillerDegs = 0 + ((currVal * 180) / 50);
						rotate($filler, fillerDegs);
					  }
					}
				});

			}
			function rotate($el, deg) {
			  $el.css({
				'-webkit-transform': 'rotate(' + deg + 'deg)',
				'-moz-transform': 'rotate(' + deg + 'deg)',
				'-ms-transform': 'rotate(' + deg + 'deg)',
				'-o-transform': 'rotate(' + deg + 'deg)',
				'transform': 'rotate(' + deg + 'deg)'
			  });
			}
			setProgress(80); //change present(%) hare


		//progress-circle 1
		function setProgress2(num){
			var $spinner = $('.p-circle2 .spinner');
			var $filler = $('.p-circle2 .filler');
			var $percentage = $('.p-circle2 .percentage');

			if (num < 0) num = 0;
			if (num > 100) num = 100;

			var initialNum = $percentage.text().replace('%','');
			$({numVal:initialNum}).animate({numVal:num},{
				duration: 6000,
				easing: 'swing',
					step: function (currVal) {
					  $percentage.text(Math.ceil(currVal) + '%');
					  if (currVal > 0 && currVal <= 50) {
						$filler.css('display', 'none');
						var spinnerDegs = -180 + ((currVal * 180) / 50);
						rotate($spinner, spinnerDegs);
					  } else if (currVal > 50) {
						rotate($spinner, 0);
						$filler.css('display', '');
						var fillerDegs = 0 + ((currVal * 180) / 50);
						rotate($filler, fillerDegs);
					  }
					}
				});

			}
			function rotate($el, deg) {
			  $el.css({
				'-webkit-transform': 'rotate(' + deg + 'deg)',
				'-moz-transform': 'rotate(' + deg + 'deg)',
				'-ms-transform': 'rotate(' + deg + 'deg)',
				'-o-transform': 'rotate(' + deg + 'deg)',
				'transform': 'rotate(' + deg + 'deg)'
			  });
			}
			setProgress2(70); //change present(%) hare

		
		//progress-circle 3
		function setProgress3(num){
			var $spinner = $('.p-circle3 .spinner');
			var $filler = $('.p-circle3 .filler');
			var $percentage = $('.p-circle3 .percentage');

			if (num < 0) num = 0;
			if (num > 100) num = 100;

			var initialNum = $percentage.text().replace('%','');
			$({numVal:initialNum}).animate({numVal:num},{
				duration: 6000,
				easing: 'swing',
					step: function (currVal) {
					  $percentage.text(Math.ceil(currVal) + '%');
					  if (currVal > 0 && currVal <= 50) {
						$filler.css('display', 'none');
						var spinnerDegs = -180 + ((currVal * 180) / 50);
						rotate($spinner, spinnerDegs);
					  } else if (currVal > 50) {
						rotate($spinner, 0);
						$filler.css('display', '');
						var fillerDegs = 0 + ((currVal * 180) / 50);
						rotate($filler, fillerDegs);
					  }
					}
				});

			}
			function rotate($el, deg) {
			  $el.css({
				'-webkit-transform': 'rotate(' + deg + 'deg)',
				'-moz-transform': 'rotate(' + deg + 'deg)',
				'-ms-transform': 'rotate(' + deg + 'deg)',
				'-o-transform': 'rotate(' + deg + 'deg)',
				'transform': 'rotate(' + deg + 'deg)'
			  });
			}
			setProgress3(60); //change present(%) hare

		
		//progress-circle 4
		function setProgress4(num){
			var $spinner = $('.p-circle4 .spinner');
			var $filler = $('.p-circle4 .filler');
			var $percentage = $('.p-circle4 .percentage');

			if (num < 0) num = 0;
			if (num > 100) num = 100;

			var initialNum = $percentage.text().replace('%','');
			$({numVal:initialNum}).animate({numVal:num},{
				duration: 6000,
				easing: 'swing',
					step: function (currVal) {
					  $percentage.text(Math.ceil(currVal) + '%');
					  if (currVal > 0 && currVal <= 50) {
						$filler.css('display', 'none');
						var spinnerDegs = -180 + ((currVal * 180) / 50);
						rotate($spinner, spinnerDegs);
					  } else if (currVal > 50) {
						rotate($spinner, 0);
						$filler.css('display', '');
						var fillerDegs = 0 + ((currVal * 180) / 50);
						rotate($filler, fillerDegs);
					  }
					}
				});

			}
			function rotate($el, deg) {
			  $el.css({
				'-webkit-transform': 'rotate(' + deg + 'deg)',
				'-moz-transform': 'rotate(' + deg + 'deg)',
				'-ms-transform': 'rotate(' + deg + 'deg)',
				'-o-transform': 'rotate(' + deg + 'deg)',
				'transform': 'rotate(' + deg + 'deg)'
			  });
			}
			setProgress4(50); //change present(%) hare
			
			// $('.progress-circle2').on('click', function(e){
			  // setProgress4(Math.ceil(Math.random() * 100));
			// });
		});
		
	
})(jQuery);