$(function(){

    
      $('section').mousewheel(function(e, delta){
    
    
        if(delta > 0) {
    
          let prev = $(this).prev().offset().top;
    
          $('html, body').stop().animate({scrollTop : prev}, 1000);
    
        } else if(delta < 0) {
    
          let next = $(this).next().offset().top;
    
          $('html, body').stop().animate({scrollTop : next}, 1000);
    
        }
    

    
      }); // mousewheel_event
    

    
      $(window).scroll(function(){
    

    
        if($('.page02').offset().top == $(this).scrollTop()) {
    
          $('.page02>.sub_box>.page02_1').fadeIn(500);
    
          $('.page02>.sub_box>.page02_2').delay(500).fadeIn(500);
    
          $('.page02>.sub_box>.page02_3').delay(1000).fadeIn(500);
    
        } else {
    
          $('.page02>.sub_box>div').fadeOut(1000);
    
        }
    

    
      if($('.page03').offset().top == $(this).scrollTop()) {
    
        $('.page03>.sub_box>.page03_1').animate({bottom : 0}, 500);
    
        $('.page03>.sub_box>.page03_2').delay(500).animate({bottom : 0}, 500);
    
        $('.page03>.sub_box>.page03_3').delay(1000).animate({bottom : 0}, 500);
    
      }
    

    
      }); //scroll_event
    

    
    });