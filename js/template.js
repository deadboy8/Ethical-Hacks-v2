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
	
	


	
	/* Scroll Too */
	
			$(window).load(function(){
				
				/* Page Scroll to id fn call */
				$("ul.slimmenu li a,a[href='#top'],a[data-gal='m_PageScroll2id']").mPageScroll2id({
					highlightSelector:"ul.slimmenu li a",
					offset: 80,
					scrollSpeed:1000,
					scrollEasing: "easeInOutCubic"
				});
				
				/* demo functions */
				$("a[rel='next']").click(function(e){
					e.preventDefault();
					var to=$(this).parent().parent("section").next().attr("id");
					$.mPageScroll2id("scrollTo",to);
				});
				
			});	 

 	
	/* Top Carousel */
	
	$(document).ready(function() {
	
	  var time = 7; // time in seconds
	 
	  var $progressBar,
		  $bar, 
		  $elem, 
		  isPause, 
		  tick,
		  percentTime;
	 
		//Init the carousel
		$("#owl-top").owlCarousel({
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
			id:"progressBar"
		  });
		  $bar = $("<div>",{
			id:"bar"
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
 	 
	  var owl = $("#owl-top");
	 
	  owl.owlCarousel();
	 
	  // Custom Navigation Events
	  $(".next").click(function(){
		owl.trigger('owl.next');
	  })
	  $(".prev").click(function(){
		owl.trigger('owl.prev');
	  })
	 
	});	

	
 	//Parallax
	
	$('.parallax-1').parallax("50%", 0.4);
	$('.parallax-2').parallax("50%", 0.4);
	$('.parallax-3').parallax("50%", 0.4);
	$('.parallax-footer').parallax("50%", 0.4);
	
	
	//Tooltip
	
	$(".tipped").tipper();		

 	
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
 	
	
	//set your google maps parameters

	jQuery(document).ready(function($){
		
		var latitude = 44.8013716,
			longitude = 20.4631372,
			map_zoom = 15;

		//google map custom marker icon - .png fallback for IE11
		var is_internetExplorer11= navigator.userAgent.toLowerCase().indexOf('trident') > -1;
		var marker_url = ( is_internetExplorer11 ) ? 'images/cd-icon-location.png' : 'images/cd-icon-location.svg';
			
		//define the basic color of your map, plus a value for saturation and brightness
		var	main_color = '#16a085',
			saturation_value= -50,
			brightness_value= 14;

		//we define here the style of the map
		var style= [ 
			{
				//set saturation for the labels on the map
				elementType: "labels",
				stylers: [
					{saturation: saturation_value}
				]
			},  
			{	//poi stands for point of interest - don't show these lables on the map 
				featureType: "poi",
				elementType: "labels",
				stylers: [
					{visibility: "off"}
				]
			},
			{
				//don't show highways lables on the map
				featureType: 'road.highway',
				elementType: 'labels',
				stylers: [
					{visibility: "off"}
				]
			}, 
			{ 	
				//don't show local road lables on the map
				featureType: "road.local", 
				elementType: "labels.icon", 
				stylers: [
					{visibility: "off"} 
				] 
			},
			{ 
				//don't show arterial road lables on the map
				featureType: "road.arterial", 
				elementType: "labels.icon", 
				stylers: [
					{visibility: "off"}
				] 
			},
			{
				//don't show road lables on the map
				featureType: "road",
				elementType: "geometry.stroke",
				stylers: [
					{visibility: "off"}
				]
			}, 
			//style different elements on the map
			{ 
				featureType: "transit", 
				elementType: "geometry.fill", 
				stylers: [
					{ hue: main_color },
					{ visibility: "on" }, 
					{ lightness: brightness_value }, 
					{ saturation: saturation_value }
				]
			}, 
			{
				featureType: "poi",
				elementType: "geometry.fill",
				stylers: [
					{ hue: main_color },
					{ visibility: "on" }, 
					{ lightness: brightness_value }, 
					{ saturation: saturation_value }
				]
			},
			{
				featureType: "poi.government",
				elementType: "geometry.fill",
				stylers: [
					{ hue: main_color },
					{ visibility: "on" }, 
					{ lightness: brightness_value }, 
					{ saturation: saturation_value }
				]
			},
			{
				featureType: "poi.sport_complex",
				elementType: "geometry.fill",
				stylers: [
					{ hue: main_color },
					{ visibility: "on" }, 
					{ lightness: brightness_value }, 
					{ saturation: saturation_value }
				]
			},
			{
				featureType: "poi.attraction",
				elementType: "geometry.fill",
				stylers: [
					{ hue: main_color },
					{ visibility: "on" }, 
					{ lightness: brightness_value }, 
					{ saturation: saturation_value }
				]
			},
			{
				featureType: "poi.business",
				elementType: "geometry.fill",
				stylers: [
					{ hue: main_color },
					{ visibility: "on" }, 
					{ lightness: brightness_value }, 
					{ saturation: saturation_value }
				]
			},
			{
				featureType: "transit",
				elementType: "geometry.fill",
				stylers: [
					{ hue: main_color },
					{ visibility: "on" }, 
					{ lightness: brightness_value }, 
					{ saturation: saturation_value }
				]
			},
			{
				featureType: "transit.station",
				elementType: "geometry.fill",
				stylers: [
					{ hue: main_color },
					{ visibility: "on" }, 
					{ lightness: brightness_value }, 
					{ saturation: saturation_value }
				]
			},
			{
				featureType: "landscape",
				stylers: [
					{ hue: main_color },
					{ visibility: "on" }, 
					{ lightness: brightness_value }, 
					{ saturation: saturation_value }
				]
				
			},
			{
				featureType: "road",
				elementType: "geometry.fill",
				stylers: [
					{ hue: main_color },
					{ visibility: "on" }, 
					{ lightness: brightness_value }, 
					{ saturation: saturation_value }
				]
			},
			{
				featureType: "road.highway",
				elementType: "geometry.fill",
				stylers: [
					{ hue: main_color },
					{ visibility: "on" }, 
					{ lightness: brightness_value }, 
					{ saturation: saturation_value }
				]
			}, 
			{
				featureType: "water",
				elementType: "geometry",
				stylers: [
					{ hue: main_color },
					{ visibility: "on" }, 
					{ lightness: brightness_value }, 
					{ saturation: saturation_value }
				]
			}
		];
			
		//set google map options
		var map_options = {
			center: new google.maps.LatLng(latitude, longitude),
			zoom: map_zoom,
			panControl: false,
			zoomControl: false,
			mapTypeControl: false,
			streetViewControl: false,
			mapTypeId: google.maps.MapTypeId.ROADMAP,
			scrollwheel: false,
			styles: style,
		}
		//inizialize the map
		var map = new google.maps.Map(document.getElementById('google-container'), map_options);
		//add a custom marker to the map				
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(latitude, longitude),
			map: map,
			visible: true,
			icon: marker_url,
		});

		//add custom buttons for the zoom-in/zoom-out on the map
		function CustomZoomControl(controlDiv, map) {
			//grap the zoom elements from the DOM and insert them in the map 
			var controlUIzoomIn= document.getElementById('cd-zoom-in'),
				controlUIzoomOut= document.getElementById('cd-zoom-out');
			controlDiv.appendChild(controlUIzoomIn);
			controlDiv.appendChild(controlUIzoomOut);

			// Setup the click event listeners and zoom-in or out according to the clicked element
			google.maps.event.addDomListener(controlUIzoomIn, 'click', function() {
				map.setZoom(map.getZoom()+1)
			});
			google.maps.event.addDomListener(controlUIzoomOut, 'click', function() {
				map.setZoom(map.getZoom()-1)
			});
		}

		var zoomControlDiv = document.createElement('div');
		var zoomControl = new CustomZoomControl(zoomControlDiv, map);

		//insert the zoom div on the top left of the map
		map.controls[google.maps.ControlPosition.LEFT_TOP].push(zoomControlDiv);
	});		 
		 
 
 
 
  })(jQuery); 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 





	