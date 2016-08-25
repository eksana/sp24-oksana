$(document).ready(function(){
	
	//$('.main-nav--cross').click(function(){
		$('.main-nav--cross').click(function(){
		$('.new-nav').slideToggle();


		/*var w=$(window).width();
		if(w>800).css('display','none');*/


});

		$('.tabs.tabs__for-corp').click(function(){
			$('.vacation__for-corpor').fadeIn();
			$('.vacation__for-family').fadeOut();
		});

		$('.tabs.tabs__for-family--active').click(function(){
			$('.vacation__for-corpor').fadeOut();
			$('.vacation__for-family').fadeIn();
		});

	/*-------------check form---------------------------*/


		$('.parent__label--fl').click(function(){
		
			$('.kottedj-wrap__single--fl').fadeIn();
		

	});	
		$('.parent__label--oz').click(function(){
		
			$('.kottedj-wrap__single--oz').fadeIn();
		

	});	
		$('.parent__label--ol').click(function(){
		
			$('.kottedj-wrap__single--ol').fadeIn();
		

	});	
		$('.parent__label--pr').click(function(){
		
			$('.kottedj-wrap__single--pr').fadeIn();
		

	});	


	
/*---------------end document ready-----------*/		
	});
