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
	
	// For pie chart 
	window.onload = function () {
		 CanvasJS.addColorSet("piecolor",
					[//colorSet Array

					"#418CCB",
					"#6633cc",
					"#2ecc71",
					"#00A7E4",
					"#5BBC2E",            
					"#009a00"            
					]);

		var chart = new CanvasJS.Chart("chartContainer",
		{	
			colorSet: "piecolor",
			backgroundColor: "#ECEEF3",
			title:{
				text: "Performance sets"
			},
					animationEnabled: true,
			legend:{
				verticalAlign: "bottom",
				horizontalAlign: "center"
			},
			
			data: [
			{        
				indexLabelFontSize: 20,
				indexLabelFontFamily: "Monospace",       
				indexLabelFontColor: "darkgrey", 
				indexLabelLineColor: "darkgrey",        
				indexLabelPlacement: "outside",
				type: "pie",       
				showInLegend: true,
				toolTipContent: "{y} - <strong>#percent%</strong>",
				dataPoints: [
					{  y: 95, legendText:"Coding", indexLabel: "Coding" },
					{  y: 95, legendText:"Designing", indexLabel: "Designing" },
					{  y: 95, legendText:"Creativity",exploded: true, indexLabel: "Creativity" },
					{  y: 95, legendText:"Cummunication" , indexLabel: "Cummunication"},
					{  y: 95, legendText:"Feedback", indexLabel: "Feedback" },
					{  y: 95, legendText:"Success" , indexLabel: "Success"}		
				]
					
				
			}
			]
		});
		chart.render();
	}

}(jQuery));


	