(function($) { "use strict";



 	//Parallax
	
	$('.parallax-footer').parallax("50%", 0.4);
	
	
	//Tooltip
	
	$(".tipped").tipper();		

	
 	//Skills Counter 
	
	jQuery(document).ready(function($){
        $('.counter-skills').counterUp({
            delay: 100,
            time: 3000
        });
    });		

 
	//Full Accordion	
	
	jQuery(document).ready(function($){
		$(".accordion").smk_Accordion({
			closeAble: true 
		});
	});
		
		
	
  })(jQuery); 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 





	