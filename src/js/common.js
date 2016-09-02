$(document).ready(function(){
	
	
		$('.main-nav--cross').click(function(){
		$('.new-nav').slideToggle();


		


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


			/*var $this_fl=$('.kottedj-wrap__single--fl');
			var $this_oz=$('.kottedj-wrap__single--oz');
			var $this_ol=$('.kottedj-wrap__single--ol');
			var $this_pr=$('.kottedj-wrap__single--pr');
	

		$('.parent__label.parent__label--fl').click(function(){
			
			$this_fl.fadeIn();
			$this_oz.fadeOut();
			$this_pr.fadeOut();
			$this_ol.fadeOut();
			
						});

		$('.parent__label.parent__label--oz').click(function(){
			
			$this_oz.fadeIn();
			$this_fl.fadeOut();
			$this_ol.fadeOut();
			$this_pr.fadeOut();
			
			});
		$('.parent__label.parent__label--ol').click(function(){
			
			$this_ol.fadeIn();
			$this_oz.fadeOut();
			$this_fl.fadeOut();
			$this_pr.fadeOut();
						});

	$('.parent__label.parent__label--pr').click(function(){
			
			$this_pr.fadeIn();
			$this_ol.fadeOut();
			$this_oz.fadeOut();
			$this_fl.fadeOut();
						});*/



$('.genwrap').on('click', function(e){
//e.preventDefault();
var index = $(this).index();

$('.kottedj-wrap__single').hide();
$('.kottedj-wrap__single').eq(index).show();
});	

/*--------------check forarrive or now----------------------*/

$('.fa-check').click(function(e){
	var $thisFacheck=e.target;
	
if($('.fa-check').is($thisFacheck)){
$(this).toggleClass('fa-check--myactive');
}

/*else if($('.fa-check').is(!($thisFacheck))){
	$(this).removeClass('fa-check--myactive');
}*/

});


/*------------ submit-----------------------*/

var $msg=$('<i class="fa fa-exclamation-circle"></i><p class="for__pay__p">Пожалуйста,'+
	'<a href="#date__req" class="for__pay__required">выберите дату въезда и выезда</a>, чтобы увидеть сумму к оплате.</p>'); 
var $msg2=$('<i class="fa fa-exclamation-circle"></i><p class="for__pay__p">Пожалуйста,'+ 
'<a href="#fname__req" class="for__pay__required">заполните персональную информацию</a>, чтобы увидеть сумму к оплате.</p>'); 

$('#rest__form').validate({

	

	 errorPlacement: function(error, element) {

	
    if (element.attr("name") == "dateArr") {


      error.insertAfter(".for__error").append($msg);
      
   } 
   else if (element.attr("name") == "Kode"){
     error.insertAfter(".for__error").append($msg2);

   	}
   	//e.preventDefault();
   }

  
 
});
//<a href="#date__req" class="for__pay__required">
//<a href="#fname__req" class="for__pay__required">
/*---------------end document ready-----------*/	
	});
