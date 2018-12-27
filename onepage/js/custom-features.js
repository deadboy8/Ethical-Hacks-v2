(function($) { "use strict";

	
	//Navigation	

	$('ul.slimmenu').on('click',function(){
	var width = $(window).width(); 
	if ((width <= 1200)){ 
		$(this).slideToggle(); 
	}	
	});				
	$('ul.slimmenu').slimmenu(
	{
		resizeWidth: '1200',
		collapserTitle: '',
		easingEffect:'easeInOutQuint',
		animSpeed:'medium',
		indentChildren: true,
		childrenIndenter: '&raquo;'
	});	
	
	


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
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 





	