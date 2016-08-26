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


var $this_fl=$('.kottedj-wrap__single--fl');
			var $this_oz=$('.kottedj-wrap__single--oz');
			var $this_ol=$('.kottedj-wrap__single--ol');
			var $this_pr=$('.kottedj-wrap__single--pr');
	

		$('.parent__label.parent__label--fl').click(function(){
			/*var $this_fl=$('.kottedj-wrap__single--fl');
			var $this_oz=$('.kottedj-wrap__single--oz');
			var $this_ol=$('.kottedj-wrap__single--ol');
			var $this_pr=$('.kottedj-wrap__single--pr');*/
			$this_fl.fadeIn();
			$this_oz.fadeOut();
			$this_pr.fadeOut();
			$this_ol.fadeOut();
			
						});

		$('.parent__label.parent__label--oz').click(function(){
			/*var $this_fl=$('.kottedj-wrap__single--fl');
			var $this_oz=$('.kottedj-wrap__single--oz');
			var $this_ol=$('.kottedj-wrap__single--ol');
			var $this_pr=$('.kottedj-wrap__single--pr');*/
			$this_oz.fadeIn();
			$this_fl.fadeOut();
			$this_ol.fadeOut();
			$this_pr.fadeOut();
			
			});
		$('.parent__label.parent__label--ol').click(function(){
			/*var $this_fl=$('.kottedj-wrap__single--fl');
			var $this_oz=$('.kottedj-wrap__single--oz');
			var $this_ol=$('.kottedj-wrap__single--ol');
			var $this_pr=$('.kottedj-wrap__single--pr');*/
			$this_ol.fadeIn();
			$this_oz.fadeOut();
			$this_fl.fadeOut();
			$this_pr.fadeOut();
						});

	$('.parent__label.parent__label--pr').click(function(){
			/*var $this_fl=$('.kottedj-wrap__single--fl');
			var $this_oz=$('.kottedj-wrap__single--oz');
			var $this_ol=$('.kottedj-wrap__single--ol');
			var $this_pr=$('.kottedj-wrap__single--pr');*/
			$this_pr.fadeIn();
			$this_ol.fadeOut();
			$this_oz.fadeOut();
			$this_fl.fadeOut();
						});
/*---------------end document ready-----------*/		
	});
