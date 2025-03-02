! function ($) {
    'use strict'; 

	jQuery(document).ready(function(){
		
		jQuery( '.bafg-filter-gallery' ).each(function(){
			
			var eachWraper = jQuery(this);

			var eachItem = jQuery( '.bafg-filter-item', this );

			jQuery( '.bafg_gallery_filter', eachWraper ).isotope({ filter: '*' });

			jQuery( '.bafg_filter_controls', this ).on( 'click', '.bafg-filter-control', function(){

				var filterValue = jQuery(this).attr('data-filter');

				jQuery( '.bafg_gallery_filter', eachWraper ).isotope({ filter: filterValue });

			} );

		});
	
	});
	
	jQuery(window).on('load', function(){
		jQuery('.bafg-filter-control.bafg-filter-active').trigger('click');
	});

}(jQuery);
