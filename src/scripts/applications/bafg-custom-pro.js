;(function ($) {

	'use strict'; 
	$(window).on('load',function () {
		before_after_function_pro(); 
	});

	function before_after_function_pro(response=''){

		jQuery(".bafg-twentytwenty-wrapper").each(function () {

			var $this = jQuery(this);

			var imgH = $this.find('.bafg-autoslide').height();
			var imgW = $this.find('.bafg-autoslide .bafg-before-autoslide').width();
			if(imgW == 0){
				imgW = $this.find('.bafg-autoslide .bafg-before-autoslide').prop('naturalWidth'); 
			}
			if(response != '' && response != 'undefined'){
				var imageHeight = $('#bafg_popup_wrap .bafg-twentytwenty-container').find('img:first').height();
				if(imageHeight == 0){
					imageHeight = $('#bafg_popup_wrap .bafg-twentytwenty-container').find('img:first').prop('naturalHeight');  
				} 
				$('#bafg_popup_wrap .bafg-twentytwenty-container').css("height", imageHeight);
			}
			// alert(imgW)
		 

			$this.find('.bafg-autoslide .bafg-before-autoslide').attr('bafg-height', imgH);
			$this.find('.bafg-autoslide .bafg-before-autoslide').attr('bafg-width', imgW);

		});

		var $num = 1;
		jQuery(".bafg-autoslide").each(function () {

			jQuery(this).addClass('bafg-autoslide-' + $num);

			var autoSlide = jQuery(this).attr('bafg-autoslide');

			if (autoSlide == '1') {

				var imgH   = jQuery('.bafg-before-autoslide', this).attr('bafg-height');
				var imgW   = jQuery('.bafg-before-autoslide', this).attr('bafg-width');
				let videoH = jQuery('.bafg-before-autoslide', this).height();
				let videoW = jQuery('.bafg-before-autoslide', this).width();

				var orientation = jQuery(this).attr('bafg-orientation');
				if (orientation == 'horizontal') {
					//For before image
					jQuery.keyframe.define([{
						name: 'hb-img-' + $num,
						'0%': {
							'clip': "rect(0px, 0px, " + imgH + "px, 0px)"
						},
						'50%': {
							'clip': "rect(0px, " + imgW + "px, " + imgH + "px, 0px)"
						},
						'100%': {
							'clip': "rect(0px, 0px, " + imgH + "px, 0px)"
						}
                    }]);

					//For after image
					jQuery.keyframe.define([{
						name: 'ha-img-' + $num,
						'0%': {
							'clip': "rect(0px, " + imgW + "px, " + imgH + "px, 0px)"
						},
						'50%': {
							'clip': "rect(0px, " + imgW + "px, " + imgH + "px, " + imgW + "px)"
						},
						'100%': {
							'clip': "rect(0px, " + imgW + "px, " + imgH + "px, 0px)"
						}
                    }]);

					//For handle
					jQuery.keyframe.define([{
						name: 'hba-handle-' + $num,
						'0%': {
							'left': "0px"
						},
						'50%': {
							'left': imgW + "px"
						},
						'100%': {
							'left': "0"
						}
                    }]);

					//Play all keyframes
					jQuery('.bafg-autoslide-' + $num).find('.bafg-before-autoslide').playKeyframe({
						name: 'hb-img-' + $num,
						duration: "6s",
						timingFunction: 'ease',
						iterationCount: 'infinite',
					});
					jQuery('.bafg-autoslide-' + $num).find('.bafg-after-autoslide').playKeyframe({
						name: 'ha-img-' + $num,
						duration: "6s",
						timingFunction: 'ease',
						iterationCount: 'infinite',
					});

					jQuery('.bafg-autoslide-' + $num).find('.twentytwenty-handle').playKeyframe({
						name: 'hba-handle-' + $num,
						duration: "6s",
						timingFunction: 'ease',
						iterationCount: 'infinite',
					});

				} else {

					//For before image
					jQuery.keyframe.define([{
						name: 'vb-img-' + $num,
						'0%': {
							'clip': "rect(0px, " + imgW + "px, 0px, 0px)"
						},
						'50%': {
							'clip': "rect(0px, " + imgW + "px, " + imgH + "px, 0px)"
						},
						'100%': {
							'clip': "rect(0px, " + imgW + "px, 0px, 0px)"
						}
                    }]);

					//For after image
					jQuery.keyframe.define([{
						name: 'va-img-' + $num,
						'0%': {
							'clip': "rect(0px, " + imgW + "px, " + imgH + "px, 0px)"
						},
						'50%': {
							'clip': "rect(" + imgH + "px, " + imgW + "px, " + imgH + "px, 0px)"
						},
						'100%': {
							'clip': "rect(0px, " + imgW + "px, " + imgH + "px, 0px)"
						}
                    }]);

					//For handle
					jQuery.keyframe.define([{
						name: 'vba-handle-' + $num,
						'0%': {
							'top': '0px'
						},
						'50%': {
							'top': '' + imgH + 'px'
						},
						'100%': {
							'top': '0px'
						}
                    }]);

					//Play all keyframes
					jQuery('.bafg-autoslide-' + $num).find('.bafg-before-autoslide').playKeyframe({
						name: 'vb-img-' + $num,
						duration: "6s",
						timingFunction: 'ease',
						iterationCount: 'infinite',
					});
					jQuery('.bafg-autoslide-' + $num).find('.bafg-after-autoslide').playKeyframe({
						name: 'va-img-' + $num,
						duration: "6s",
						timingFunction: 'ease',
						iterationCount: 'infinite',
					});
					jQuery('.bafg-autoslide-' + $num).find('.twentytwenty-handle').playKeyframe({
						name: 'vba-handle-' + $num,
						duration: "6s",
						timingFunction: 'ease',
						iterationCount: 'infinite',
					});
				}

				//Pause slider
				jQuery(this).mouseover(function () {

					jQuery(this).find('.bafg-before-autoslide, .bafg-after-autoslide, .twentytwenty-handle').pauseKeyframe();

				});

				//Resume slider
				jQuery(this).mouseout(function () {

					jQuery(this).find('.bafg-before-autoslide, .bafg-after-autoslide, .twentytwenty-handle').resumeKeyframe();

				});
			}

			//Hide before after handle
			var handle = jQuery(this).attr('bafg-handle');
			if (autoSlide == '1' && handle == '1') {
				jQuery(this).find('.twentytwenty-handle').hide();
			}

			jQuery(this).css("height", imgH);

			$num++;

		});

	}

	function before_after_function($id){
        $("#bafg_popup_wrap .slider-"+$id+"").each(function () {
            if ($(this).attr('bafg-move-slider-on-hover') == '') {
                var moveSliderHover = false;
            } else {
                var moveSliderHover = true;
            }

            if ($(this).attr('bafg-overlay') == '1') {
                var overlay = false;
            } else {
                var overlay = true;
            }

            if ($(this).attr('bafg-click-to-move') == '') {
                var clickToMove = false;
            } else {
                var clickToMove = true;
            }

            $(this).twentytwenty({
                orientation: $(this).attr('bafg-orientation'),
                default_offset_pct: $(this).attr('bafg-default-offset'),
                before_label: $(this).attr('bafg-before-label'),
                after_label: $(this).attr('bafg-after-label'),
                no_overlay: overlay,
                move_slider_on_hover: moveSliderHover,
                click_to_move: clickToMove
            });
			$(this).css('width', '100vw');
            var beforeImageW = $(this).find('img.twentytwenty-before').width(); 
            $(this).css('max-width', beforeImageW + 'px');

            //Label OutSide
            var bafgLabelOutside = $(this).data('label_outside');
            var orientation = $(this).attr('bafg-orientation');
            if (bafgLabelOutside == "1" && orientation == 'vertical') {
                $('.bafg-outside-label-wrapper.twentytwenty-vertical .bafg-twentytwenty-container').css('margin', 50 + 'px' + ' auto');

                $('.bafg-outside-label-wrapper.twentytwenty-vertical .twentytwenty-overlay>.twentytwenty-before-label').css('display', 'none');
                $('.bafg-outside-label-wrapper.twentytwenty-vertical .twentytwenty-overlay .twentytwenty-after-label').css('display', 'none');
            }

        });

        $(window).trigger("resize.twentytwenty");
    }
	
	/*
	 * Filter button
	 */
	jQuery(document).on('click', '.bafg-filter-control', function () {
		jQuery(this).addClass('bafg-filter-active').siblings().removeClass('bafg-filter-active');
	});
	
	/*
	* On scroll slide
	*/
	jQuery(document).ready(function () {

		function on_scroll_slide(elementOffset){

			jQuery( '.twentytwenty-horizontal .bafg-twentytwenty-container.bafg-on-scroll-slide' ).each(function(){
				
				var $this = jQuery(this);
				
				var elementOffset = $this.offset().top;
				var elementOffset = elementOffset - jQuery(window).scrollTop();
											
				var imgH     = $this.find('.bafg-before-image').prop('naturalHeight');
				var imgWidth = $this.find('.bafg-before-image').prop('naturalWidth');

				var imgW = elementOffset;

				if (elementOffset >= imgWidth) {

					imgW = imgWidth;
				}

				if (elementOffset < 0) {

					imgW = 0;
				}
				
				$this.find('.bafg-before-image').css('clip', "rect(0px, " + imgW + "px, " + imgH + "px, 0px)");
				
				$this.find('.bafg-after-image').css('clip', "rect(0px, " + imgWidth + "px, " + imgH + "px, " + imgW + "px)");

				$this.find('.twentytwenty-handle').css("left", "" + imgW + "px");
				
			});//end scroll function
			
			
			jQuery( '.twentytwenty-vertical .bafg-twentytwenty-container.bafg-on-scroll-slide' ).each(function(){
				
				var $this = jQuery(this);
				
				var elementOffset = $this.offset().top;
				var elementOffset = elementOffset - jQuery(window).scrollTop();
				
				var imgHeight = $this.find('.bafg-before-image').height();
				var imgW = $this.find('.bafg-before-image').width();

				var imgH = elementOffset;

				if (elementOffset >= imgHeight) {

					imgH = imgHeight;
				}

				if (elementOffset < 0) {

					imgH = 0;
				}
				
				$this.find('.bafg-before-image').css('clip', "rect(0px, "+imgW+"px, "+imgH+"px, 0px)");
				
				$this.find('.bafg-after-image').css('clip', "rect("+imgH+"px, "+imgW+"px, "+imgHeight+"px, 0px)");

				$this.find('.twentytwenty-handle').css("top", "" + imgH + "px");
				
			});//end scroll function
					
		}
		on_scroll_slide();

		jQuery(window).scroll(function () {
			on_scroll_slide();
		});
	});
	
	/**
	 * Fade effect style 9 image height width
	 */
	$(window).on('load', function () {
		$('.bafg-fade-effect').each(function(){
			let fadeImageW = $(this).find('.bafg-before-image img').width();
			let fadeImageH = $(this).find('.bafg-before-image img').height();
			$(this).css({'max-width': fadeImageW,'height':fadeImageH});
		});
	});


	/**
	 * Full Screan Feature 
	 */
	$( document ).ready(function() {  
        $(".popup_button").on( 'click', function() {
            var id = $(this).attr("data-id"); 
			$(this).html('<img src="'+bafg_ajax_url.ajax_url+'assets/image/loader.gif" alt="">');
            jQuery.ajax({
                url : bafg_ajax_url.ajax_url+'/inc/popup-load.php',
                dataType: "json",
                type : 'post',
                data : { 
                    id : id, 
                },
				beforeSend: function() { 
					
				},
                success : function( response ) {   
                    $("#bafg_popup_wrap").html(response.shortcode); 
					$(".bafg_popup_preview").fadeIn(0);
					$(".popup_button.popup_"+response.id+"").html('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M5 16h3v3h2v-5H5v2zm3-8H5v2h5V5H8v3zm6 11h2v-3h3v-2h-5v5zm2-11V5h-2v5h5V8h-3z"></path></svg>');
                    $(".bafg_popup_preview .popup_button").remove(); 
                    before_after_function(response.id);
					before_after_function_pro(response.id);
                },
				complete: function(){	
					//fixing the design 2 handle issue after full screen initializing				
					$("#bafg_popup_wrap").find(".design-1 .twentytwenty-handle").wrapInner("<div class='handle-trnasf' />");
					setTimeout(function(){
						$(window).trigger("resize.twentytwenty");
						
					},100);
				}
            });   
          });
          $(".close").on('click',function() {
            $(".bafg_popup_preview").fadeOut(10);
			$("#bafg_popup_wrap").html('');
          });
		  
    
       
    });

	/**
	 * Image link feature
	 * @since 4.2.14
	 * @author Abu Hena
	 */
	let enable_before_after_image_link = $('.bafg-twentytwenty-container').attr('bafg-enable-img-link');
	let bafgOrientation                = $('.bafg-twentytwenty-container').attr('bafg-orientation');
	if( enable_before_after_image_link == '1' && typeof enable_before_after_image_link !== 'undefined' && enable_before_after_image_link !== '' ){
		let container = document.querySelector('.bafg-twentytwenty-container');
		container.addEventListener('click', function(event) {			
			if (container) {
				let handle = this.querySelector('.twentytwenty-handle');
				let handlePosition, imageIndex,clickPosition,sliderWidth,sliderHeight,imageLink;
				if( bafgOrientation == 'horizontal' ){
					sliderWidth    = this.offsetWidth;
					handlePosition = handle.offsetLeft + handle.offsetWidth / 2;
					clickPosition  = event.clientX - container.getBoundingClientRect().left;  // Get the position of the click relative to the container
					
					imageIndex     = clickPosition < handlePosition ? 0 : 1;
				}else{
					sliderHeight   = this.offsetHeight;
					handlePosition = handle.offsetTop + handle.offsetHeight / 2;
					clickPosition  = event.clientY - container.getBoundingClientRect().top;  // Get the position of the click relative to the container
					imageIndex     = clickPosition < handlePosition ? 0 : 1;
				}

				let isClickOnRightSide = clickPosition > handlePosition + 30;
				let isClickOnLeftSide  = clickPosition < handlePosition - 30;
				let imageLinks         = this.querySelectorAll('.image-link');
				let openLink           = this.getAttribute('bafg-open-link');

				if (isClickOnRightSide) {
					if( typeof imageLinks[imageIndex] !== 'undefined' ){
						imageLink           = imageLinks[imageIndex].getAttribute('href');
						if( openLink == '1' ){
							window.open(imageLink, '_blank');
							return false;
						}else{
							window.location.href = imageLink;
						}
						// set hover style to cursor 
						this.style.cursor = 'pointer';
					}
				}
			
				if (isClickOnLeftSide) {
					if( typeof imageLinks[imageIndex] !== 'undefined' ){
						imageLink           = imageLinks[imageIndex].getAttribute('href');
						if( openLink == '1' ){
							window.open(imageLink, '_blank');
							return false;
						}else{
							window.location.href = imageLink;
						}
						this.style.cursor = 'pointer';
					}
				}
			}
		});
	}

	/**
	 * Frontend before after image preview test feature
	 * @since 4.2.15
	 * @author Abu Hena
	 */
	let containers = document.querySelectorAll('.bafg-frontend-preview');
	if( containers.length > 0 ){
		containers.forEach(function(container) {
			let bafgBeforeImg   = container.querySelector('.bafg-before-prev-image');
			let bafgAfterImg    = container.querySelector('.bafg-after-prev-image');
			let uploadBeforeImg = container.nextElementSibling.querySelector('.upload-before-image');
			let uploadAfterImg 	= container.nextElementSibling.querySelector('.upload-after-image');
			
			//create a image blob URL and set it as image src
			uploadBeforeImg.addEventListener('change', function() {
				let bImgURL = URL.createObjectURL(this.files[0]);
				bafgBeforeImg.src = bImgURL;
				//save it to local storage
				localStorage.setItem('bafgBeforeImg', bImgURL);
			});
			//create a image blob URL and set it as image src
			uploadAfterImg.addEventListener('change', function() {
				let aImgURL = URL.createObjectURL(this.files[0]);
				bafgAfterImg.src = aImgURL;
				//save it to local storage
				localStorage.setItem('bafgAfterImg', aImgURL);
			});

			let resetBtn = container.nextElementSibling.querySelector('.bafg-reset-preview-btn');
			//set image src from local storage when page reload
			if( localStorage.getItem('bafgBeforeImg') !== null ){
				bafgBeforeImg.src = localStorage.getItem('bafgBeforeImg');
			}else{
				bafgBeforeImg.src = bafgBeforeImg.getAttribute('before-image-url');
				resetBtn.click();
				
			}
			if( localStorage.getItem('bafgAfterImg') !== null ){
				bafgAfterImg.src = localStorage.getItem('bafgAfterImg');
			}else{
				bafgAfterImg.src = bafgAfterImg.getAttribute('after-image-url');
				resetBtn.click();
			}

			//reset image src when click on reset button .bafg-reset-preview-btn
			container.nextElementSibling.querySelector('.bafg-reset-preview-btn').addEventListener('click', function() {
				bafgBeforeImg.src     = bafgBeforeImg.getAttribute('before-image-url');
				bafgAfterImg.src      = bafgAfterImg.getAttribute('after-image-url');
				uploadBeforeImg.value = '';
				uploadAfterImg.value  = '';
				localStorage.removeItem('bafgBeforeImg');
				localStorage.removeItem('bafgAfterImg');
				//resize the slider after reset
				$(window).trigger("resize.twentytwenty");
			});

			let isNavigatingAway = false;

			// Detect popstate event (navigation)
			window.addEventListener('popstate', function(event) {
			  if (event.state && event.state.isNavigatingAway) {
				isNavigatingAway = true;
			  }
			});
			
			// Detect link clicks
			document.addEventListener('click', function(event) {
			  const clickedElement = event.target;
			
			  // Check if the clicked element is an anchor link
			  if (clickedElement.tagName === 'A' && clickedElement.href) {
				const targetUrl = clickedElement.href;
			
				if (targetUrl === window.location.href) {
				  // Clicking on the same page
				  isNavigatingAway = false;
				} else {
				  // Clicking on a different page
				  isNavigatingAway = true;
				}
			  }
			});
			
			// Execute code when leaving the page
			window.addEventListener('beforeunload', function() {
			  if (isNavigatingAway) {
				// Clear local storage
				localStorage.removeItem('bafgBeforeImg');
				localStorage.removeItem('bafgAfterImg');
			  }
			});			

		});
	}
	
})(jQuery);
	