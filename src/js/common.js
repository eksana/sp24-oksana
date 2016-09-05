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
var $msg3=$('<i class="fa fa-exclamation-circle"></i><p class="for__pay__p">Пожалуйста,'+ 
'<a href="#fname__req" class="for__pay__required">заполните срок действия карты</a>, чтобы увидеть сумму к оплате.</p>');



  $('.form').each(function(){
    // Объявляем переменные (форма и кнопка отправки)
	var form = $(this),
        btn = form.find('.btn_submit');

    // Добавляем каждому проверяемому полю, указание что поле пустое
	form.find('.rfield').addClass('empty_field');

    // Функция проверки полей формы
    function checkInput(){
      form.find('.rfield').each(function(){
        if($(this).val() !==''){
         
		 // Если поле не пустое удаляем класс-указание
		//$(this).removeClass('empty_field');
		$(this).removeClass('empty_field').addClass('notempty_field');
		//в блоке "к оплате" подсказку скрываем
		//$('#f').hide();

        } 
        else {
        	// Если поле пустое добавляем класс-указание
        	$(this).addClass('empty_field');
		//делаем в блоке "к оплате" подсказку видимой
		//$('.for__error').append('$msg');
        	
          
        }
      });
    }

    // Функция подсветки незаполненных полей
    function lightEmpty(){

      //form.find('.empty_field').css({'border-color':'#d8512d'});
      form.find('.empty_field').addClass('er');
      form.find('.notempty_field').addClass('noer');

      if(form.find('.empty_field').is('#nc')){
$('.for__error').append($msg);
     } 

     if(form.find('.empty_field').is('#ln')){
      	$('.for__error').append($msg2);
     }

      if(form.find('.empty_field').is('#d')){
      	$('.for__error').append($msg3);
     }

   else if(form.find($('#ln').val() !=="")&&($('#nc').val() !=="")&&($('#d').val() !=="")){
      	$('.for__error').empty().replaceWith('<p>234</p>');
      }

      

      //form.find('.empty_field').not('[name="dateArr"]').before('<i class="fa fa-check now__fa-check fa-check--no-active"></i>');
      //$('.for__error').append($msg);
     

    /*else(('#ln').val()!==""){
     	($msg2).hide();
     }*/
     
//$('.for__error').remove($msg);
     
       

      // Через полсекунды удаляем подсветку
      /*setTimeout(function(){
        form.find('.empty_field').removeAttr('style');
      },500);*/
    }


    // Проверка в режиме реального времени
    setInterval(
    	function(){
      // Запускаем функцию проверки полей на заполненность
	  checkInput();
      // Считаем к-во незаполненных полей
      var sizeEmpty = form.find('.empty_field').size();
      // Вешаем условие-тригер на кнопку отправки формы
      if(sizeEmpty > 0){
        if(btn.hasClass('disabled')){
          return false
        }
         /* else {
          btn.addClass('disabled')
        }*/
      }
      /*else {
        btn.removeClass('disabled');


      }*/
    },700);

    // Событие клика по кнопке отправить
    btn.click(function(e){

      if($(this).hasClass('disabled')){
        // подсвечиваем незаполненные поля и форму не отправляем, если есть незаполненные поля
		lightEmpty();

        return false
      } else {
        // Все хорошо, все заполнено, отправляем форму
         $('.for__error').replaceWith('<p>234</p>');
         
          //e.preventDefault();
       //form.submit();
      }
    });
  });
//});

//})( jQuery );

/*---------------end document ready-----------*/	
	});
