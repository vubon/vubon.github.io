(function ($) {
	$(document).ready(function(){
		// hide .navbar first
		$(".navbar").hide();
		
		// fade in .navbar
		$(function () {
			$(window).scroll(function () {
				// set distance user needs to scroll before we fadeIn navbar
				if ($(this).scrollTop() > 100) {
					$('.navbar').fadeIn();
				} else {
					$('.navbar').fadeOut();
				}
			});

		
		});

		function scrollVubon() {
			  $('a').click(function(){  
				//Toggle Class
				$(".active").removeClass("active");      
				$(this).closest('li').addClass("active");
				var theClass = $(this).attr("class");
				$('.'+theClass).parent('li').addClass('active');
				//Animate
				$('html, body').stop().animate({
					scrollTop: $( $(this).attr('href') ).offset().top - 50
				}, 1000);
				return false;
			  });
			  $('.scrollTop a').scrollTop();
			}
		scrollVubon();
	});
}(jQuery));


	