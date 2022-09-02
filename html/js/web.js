//jeqeury start!
$(function(){

  /* 모바일 .inner_menu */
  $('header .mo_ham_btn').click(function(e){
      e.preventDefault();
      $('.inner_menu').fadeIn(300);
  });
  $('.inner_menu .mo_close_btn').click(function(e){
      e.preventDefault();
  
     $('.inner_menu').fadeOut(500);
  });
  
  /* main_visual슬라이드  */
  //선생님이 알려줬던걸로! 그대로 짤껀데 오류있으면 절망임,,
  //혈실적으로는 스와이퍼하는게 답임,, 일단 미뤄두자..
  
  
  /* banner 이미지 나타나기  */
  //윈도우 스크롤을 했을 시 배너웹이 윈도우의 가운데에 위치할 때 타워 이미지가생기기 
  //좌표는 배너웹 가운데위치+배너웹 1/2사이즈일때 생김
  //pc 일때는 못생겨서 3/1지점에서 생겼으면 좋겠어서 윈도우 리사이즈 사용하여 제작할꺼임~~
  var ww = $(window).width();


  let BNwrapY = $('.banner_wrap');
  let offset = $(window).height()/3+$(window).height()/3 - $(BNwrapY).height()/2;
  let BNwrapOST =BNwrapY.offset().top - offset;
  
  $(window).scroll(function(){
      
      if($(window).scrollTop() >=BNwrapOST){
          $('.banner_wrap img').addClass('animate');
      } else{
          $('.banner_wrap img').removeClass('animate')
      }
      
  });
  
  
  
  /*
  //스와이퍼 
      var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1.5,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  */
  //
  var ww = $(window).width();
  var mySwiper = undefined;
  var jbMedia = window.matchMedia( '( min-width: 601px )' );

  function initSwiper() {
  
    if (ww < 601 && mySwiper == undefined) {
      mySwiper = new Swiper(".mySwiper", {
          slidesPerView: 1.5,
          spaceBetween: 30,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
      });
    } else if (ww >= 601 && mySwiper != undefined) {
      mySwiper.destroy();
      mySwiper = undefined;
    }
  }
  
  initSwiper();
  
  $(window).on('resize', function () {
    ww = $(window).width();
    initSwiper();
  });
  
  
  /* 탭메뉴  */
  let tab =$('.cars_box li ')
  let sheet =$('.car li')
  
  let list=$(".cars_box li a");
  let li=$(".car").find("li");
  let i=0;
  let playOn=false;
  let rollAuto;
  
  //ver1
  tab.click(function(e){
      e.preventDefault();
      let target =$(this);
      let i = target.index();
  
      list.removeClass('under_tab');
      list.eq(i).addClass('under_tab');
      
  
      sheet.removeClass('on_sheet');
      sheet.eq(i).addClass('on_sheet');
  
  });
  
  //ver2 
    
  list.click(function(e){
      e.preventDefault();
      
      let index=list.index(this);
  
  if(list.state){
      stop(); //rolling
      imgOff(list.state);
      imgOn(this);
      $(li.state).hide();
      $(li[index]).show();
      i=index;
      stop(); //rolling
  }else{
      imgOn(this);
      $(li[index]).show();
      stop(); //rolling
  }
      list.state=this;
      li.state=li[index];
  
      return false;   
  
  });
  
  $(".right").click(function(){
      i--;
      if(i < 0){
          i=list.length-1;
      }
      
      list[i].click();
  
  });
  
  $(".left").click(function(){
  i++;
      if(i > list.length-1){
      i=0;
      }
      
      list[i].click();
  
  });
  
  function play(){
  
    if(!playOn){
      playOn=true;
      rollAuto = setInterval(function(){
          $(".right").click()
      },2000);
      }
  }
  
  function stop(){
      if(playOn){
          playOn=false;
          clearInterval(rollAuto);
      }
  }
  
  function imgOn(t){
      t.preventDefault();
    //$(t).find("img").attr("src",$(t).find("img").attr("src").replace("off","on"));
    $(t).find('.cars_box li a').attr('class',$(t).find(list).attr('class').addClass('under_tab'));
    //list.addClass('under_tab')
  }
  
  function imgOff(t){
      t.preventDefault();
    //$(t).find("img").attr("src", $(t).find("img").attr("src").replace("on","off"));
      $(t).find('.cars_box li a').attr('class',$(t).find(list).attr('class').removeClass('under_tab'));
      //list.removeClass('under_tab')
  }
  
  list[0].click();
  
  //ver1+ ver2의 합작으로 됐다구yoyo~~~
  
  
  
  let tab_ =$('.cars_box li ')
  let sheet_ =$('.right_con3 .car li')
  
  let list_=$(".cars_box li a");
  let li_=$(".car").find("li");
  let ii=0;
  let playOn_=false;
  let rollAuto_;
  
  //ver1
  tab_.click(function(e){
      e.preventDefault();
      let target =$(this);
      let i = target.index();
  
      list.removeClass('under_tab');
      list.eq(i).addClass('under_tab');
      
  
      sheet_.removeClass('on_sheet');
      sheet_.eq(i).addClass('on_sheet');
  
  });
  
  //ver2 
    
  list.click(function(e){
      e.preventDefault();
      
      let index=list.index(this);
  
  if(list.state){
      stop(); //rolling
      imgOff(list.state);
      imgOn(this);
      $(li.state).hide();
      $(li[index]).show();
      i=index;
      stop(); //rolling
  }else{
      imgOn(this);
      $(li[index]).show();
      stop(); //rolling
  }
      list.state=this;
      li.state=li[index];
  
      return false;   
  
  });
  
  $(".right").click(function(){
      i--;
      if(i < 0){
          i=list.length-1;
      }
      
      list[i].click();
  
  });
  
  $(".left").click(function(){
  i++;
      if(i > list.length-1){
      i=0;
      }
      
      list[i].click();
  
  });
  
  function play(){
  
    if(!playOn){
      playOn=true;
      rollAuto = setInterval(function(){
          $(".left").click()
      },2000);
      }
  }
  
  function stop(){
      if(playOn){
          playOn=false;
          clearInterval(rollAuto);
      }
  }
  
  function imgOn(t){
      t.preventDefault();
    //$(t).find("img").attr("src",$(t).find("img").attr("src").replace("off","on"));
    $(t).find('.cars_box li a').attr('class',$(t).find(list).attr('class').addClass('under_tab'));
    //list.addClass('under_tab')
  }
  
  function imgOff(t){
      t.preventDefault();
    //$(t).find("img").attr("src", $(t).find("img").attr("src").replace("on","off"));
      $(t).find('.cars_box li a').attr('class',$(t).find(list).attr('class').removeClass('under_tab'));
      //list.removeClass('under_tab')
  }
  
  list[0].click();
  
  //ver1+ ver2의 합작으로 됐다구yoyo~~~
  
      
  });//jeqeury end

document.addEventListener('DOMContentLoaded',function(){
    const video = document.querySelector('.ceo_video')
    const pic = document.querySelector('.ceo_img')
    const zz = document.querySelector('.txt_introduce')

    pic.addEventListener('mouseover',()=>{
        zz.style.display='none'
        pic.style.display='none'
        video.style.display='block'
    })
})