// JavaScript Document
jQuery( document ).on('scroll', function(){
		if ( jQuery( document ).scrollTop() > 0 ){
			jQuery( 'header' ).addClass( 'active' );
		} else {
			jQuery( 'header' ).removeClass( 'active' );
		}
	});