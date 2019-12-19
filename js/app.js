$(function () {

    /*fixed header*/
    $(window).scroll(function() {
        var height = $(window).scrollTop();
        
             /*Если сделали скролл на 100px задаём новый класс для header*/
        if(height > 100){
        $('header').addClass('fixed');
        } else{
             /*Если меньше 100px удаляем класс для header*/
        $('header').removeClass('fixed');
        }
        
        });
      

});