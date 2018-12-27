(function($) { "use strict";
	
	//Hero text fade on scroll	
	
   $(window).scroll(function () { 
        var $Fade = $('.hero-top, .top-link-pages');
        //Get scroll position of window 
        var windowScroll = $(this).scrollTop();
        //Slow scroll and fade it out 
        $Fade.css({
            'margin-top': -(windowScroll / 0) + "px",
            'opacity': 1 - (windowScroll / 300)
        });
    });	
	
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
	
	$('.parallax-about').parallax("50%", 0.4);
	$('.parallax-2').parallax("50%", 0.4);
	$('.parallax-footer').parallax("50%", 0.4);
	
	
	//Tooltip
	
	$(".tipped").tipper();		

	
	//About Slider 
	
	jQuery(document).ready(function($){
		var itemInfoWrapper = $('.cd-single-item');
		
		itemInfoWrapper.each(function(){
			var container = $(this),
				// create slider pagination
				sliderPagination = createSliderPagination(container);
			
			container.find('.cd-slider').on('click', function(event){
				//enlarge slider images 
				if( !container.hasClass('cd-slider-active') && $(event.target).is('.cd-slider')) {
					itemInfoWrapper.removeClass('cd-slider-active');
					container.addClass('cd-slider-active').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function(){
						$('body,html').animate({'scrollTop':container.offset().top - 60}, 500);
					});
				}
			});

			container.find('.cd-close').on('click', function(){
				//shrink slider images 
				container.removeClass('cd-slider-active');
			});

			//update visible slide
			container.find('.cd-next').on('click', function(){
				nextSlide(container, sliderPagination);
			});

			container.find('.cd-prev').on('click', function(){
				prevSlide(container, sliderPagination);
			});

			container.find('.cd-slider').on('swipeleft', function(){
				var wrapper = $(this),
					bool = enableSwipe(container);
				if(!wrapper.find('.selected').is(':last-child') && bool) {nextSlide(container, sliderPagination);}
			});

			container.find('.cd-slider').on('swiperight', function(){
				var wrapper = $(this),
					bool = enableSwipe(container);
				if(!wrapper.find('.selected').is(':first-child') && bool) {prevSlide(container, sliderPagination);}
			});

			sliderPagination.on('click', function(){
				var selectedDot = $(this);
				if(!selectedDot.hasClass('selected')) {
					var selectedPosition = selectedDot.index(),
						activePosition = container.find('.cd-slider .selected').index();
					if( activePosition < selectedPosition) {
						nextSlide(container, sliderPagination, selectedPosition);
					} else {
						prevSlide(container, sliderPagination, selectedPosition);
					}
				}
			});
		});	
			
		//keyboard slider navigation
		$(document).keyup(function(event){
			if(event.which=='37' && $('.cd-slider-active').length > 0 && !$('.cd-slider-active .cd-slider .selected').is(':first-child')) {
				prevSlide($('.cd-slider-active'), $('.cd-slider-active').find('.cd-slider-pagination li'));
			} else if( event.which=='39' && $('.cd-slider-active').length && !$('.cd-slider-active .cd-slider .selected').is(':last-child')) {
				nextSlide($('.cd-slider-active'), $('.cd-slider-active').find('.cd-slider-pagination li'));
			} else if(event.which=='27') {
				itemInfoWrapper.removeClass('cd-slider-active');
			}
		});

		function createSliderPagination($container){
			var wrapper = $('<ul class="cd-slider-pagination"></ul>').insertAfter($container.find('.cd-slider-navigation'));
			$container.find('.cd-slider li').each(function(index){
				var dotWrapper = (index == 0) ? $('<li class="selected"></li>') : $('<li></li>'),
					dot = $('<a href="#0"></a>').appendTo(dotWrapper);
				dotWrapper.appendTo(wrapper);
				dot.text(index+1);
			});
			return wrapper.children('li');
		}

		function nextSlide($container, $pagination, $n){
			var visibleSlide = $container.find('.cd-slider .selected'),
				navigationDot = $container.find('.cd-slider-pagination .selected');
			if(typeof $n === 'undefined') $n = visibleSlide.index() + 1;
			visibleSlide.removeClass('selected');
			$container.find('.cd-slider li').eq($n).addClass('selected').prevAll().addClass('move-left');
			navigationDot.removeClass('selected')
			$pagination.eq($n).addClass('selected');
			updateNavigation($container, $container.find('.cd-slider li').eq($n));
		}

		function prevSlide($container, $pagination, $n){
			var visibleSlide = $container.find('.cd-slider .selected'),
				navigationDot = $container.find('.cd-slider-pagination .selected');
			if(typeof $n === 'undefined') $n = visibleSlide.index() - 1;
			visibleSlide.removeClass('selected')
			$container.find('.cd-slider li').eq($n).addClass('selected').removeClass('move-left').nextAll().removeClass('move-left');
			navigationDot.removeClass('selected');
			$pagination.eq($n).addClass('selected');
			updateNavigation($container, $container.find('.cd-slider li').eq($n));
		}

		function updateNavigation($container, $active) {
			$container.find('.cd-prev').toggleClass('inactive', $active.is(':first-child'));
			$container.find('.cd-next').toggleClass('inactive', $active.is(':last-child'));
		}

		function enableSwipe($container) {
			var mq = window.getComputedStyle(document.querySelector('.cd-slider'), '::before').getPropertyValue('content');
			return ( mq=='mobile' || $container.hasClass('cd-slider-active'));
		}
	});

	
 	//Facts Counter 
	
	jQuery(document).ready(function($){
        $('.counter-facts').counterUp({
            delay: 100,
            time: 3000
        });
    });
	
	
	//Logo Carousel
	
	$(document).ready(function() {
	 
	  var owl = $("#owl-logo");
	 
	  owl.owlCarousel({
			items : 6, //6 items above 1000px browser width
			itemsDesktop : [1000,4], //4 items between 1000px and 901px
			itemsDesktopSmall : [900,3], // betweem 900px and 601px
			itemsTablet: [600,2], //2 items between 600 and 0
			itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
			pagination : false,
			autoPlay : 4000,
			slideSpeed : 500,
			paginationSpeed : 500
	  });	
	});

 	
	/* Quote Carousel */
	
	$(document).ready(function() {
	
	  var time = 7; // time in seconds
	 
	  var $progressBar,
		  $bar, 
		  $elem, 
		  isPause, 
		  tick,
		  percentTime;
	 
		//Init the carousel
		$("#owl-quote").owlCarousel({
			pagination : false,
			transitionStyle : "fade",
			slideSpeed : 500,
			paginationSpeed : 500,
			singleItem:true,
			afterInit : progressBar,
			afterMove : moved,
			startDragging : pauseOnDragging			
			
		});

		
		//Init progressBar where elem is $("#owl-demo")
		function progressBar(elem){
		  $elem = elem;
		  //build progress bar elements
		  buildProgressBar();
		  //start counting
		  start();
		}
	 
		//create div#progressBar and div#bar then prepend to $("#owl-demo")
		function buildProgressBar(){
		  $progressBar = $("<div>",{
			id:"progressBar-quote"
		  });
		  $bar = $("<div>",{
			id:"bar-quote"
		  });
		  $progressBar.append($bar).prependTo($elem);
		}
	 
		function start() {
		  //reset timer
		  percentTime = 0;
		  isPause = false;
		  //run interval every 0.01 second
		  tick = setInterval(interval, 10);
		};
	 
		function interval() {
		  if(isPause === false){
			percentTime += 1 / time;
			$bar.css({
			   width: percentTime+"%"
			 });
			//if percentTime is equal or greater than 100
			if(percentTime >= 100){
			  //slide to next item 
			  $elem.trigger('owl.next')
			}
		  }
		}
	 
		//pause while dragging 
		function pauseOnDragging(){
		  isPause = true;
		}
	 
		//moved callback
		function moved(){
		  //clear interval
		  clearTimeout(tick);
		  //start again
		  start();
		}
	 
		//uncomment this to make pause on mouseover 
		// $elem.on('mouseover',function(){
		//   isPause = true;
		// })
		// $elem.on('mouseout',function(){
		//   isPause = false;
		// })
 	 
	  var owl = $("#owl-quote");
	 
	  owl.owlCarousel();
	 
	  // Custom Navigation Events
	  $(".next-quote").click(function(){
		owl.trigger('owl.next');
	  })
	  $(".prev-quote").click(function(){
		owl.trigger('owl.prev');
	  })
	 
	});	

	
  })(jQuery); 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 





	