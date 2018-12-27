(function($) { "use strict";

	
	/* Scroll Too */
	
	$(document).ready(function(){"use strict";
		$(".scroll").click(function(event){

			event.preventDefault();

			var full_url = this.href;
			var parts = full_url.split("#");
			var trgt = parts[1];
			var target_offset = $("#"+trgt).offset();
			var target_top = target_offset.top;

			$('html, body').animate({scrollTop:target_top}, 1000);
		});
	});		 

	
 	//Parallax
	
	$('.parallax-1').parallax("50%", 0.4);
	$('.parallax-footer').parallax("50%", 0.4);
	
	
	//Tooltip
	
	$(".tipped").tipper();		
 
  })(jQuery); 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 





	