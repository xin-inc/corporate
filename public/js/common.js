$(function(){ 

  // headerロゴ　スクロールで小さく
  $(window).scroll(function(){
    var obj = $('.header--logo');
    scroll = $(window).scrollTop();
    if (scroll > 1) {
      obj.addClass('isSmall');
    } else if(obj.hasClass('isTop')) {
      obj.removeClass('isSmall');
      if ( $('.bodyWrap').hasClass('body_fixed') ){
        obj.addClass('isSmall');
      }
    }
  });

  // Topパネルのアニメーション
  $('.md_contentUnit--panel .bgImgSet .bgImgSection--left .bgImg').each(function(index){
    $(this).delay(index * 300).queue(function(){
      $(this).addClass('bgImg--anime');
    });
  }); 
  $('.md_contentUnit--panel .bgImgSet .bgImgSection--right .bgImg').each(function(index){
    $(this).delay(index * 300).queue(function(){
      $(this).addClass('bgImg--anime');
    });
  }); 

  ScrollReveal().reveal('.js_animeReveal', animeOption );
  ScrollReveal().reveal('.js_animeReveal01', animeOption );
  ScrollReveal().reveal('.js_animeReveal02', animeOption );
  ScrollReveal().reveal('.js_animeReveal03', animeOption );
  ScrollReveal().reveal('.js_animeReveal04', animeOption );
  ScrollReveal().reveal('.js_animeReveal05', animeOption );
  ScrollReveal().reveal('.js_animeReveal06', animeOption );
  ScrollReveal().reveal('.js_animeReveal07', animeOption );
  ScrollReveal().reveal('.js_animeReveal08', animeOption );
  ScrollReveal().reveal('.js_animeReveal09', animeOption );
  ScrollReveal().reveal('.js_animeReveal10', animeOption );
  ScrollReveal().reveal('.js_animeReveal11', animeOption );
  ScrollReveal().reveal('.js_animeReveal12', animeOption );

  //スライドイン
  var animeOption2 = {origin: 'left',delay:1800,duration: 1600,interval: 400,scale: 1,distance: '80px',reset: false,viewFactor: 0.15,}
  ScrollReveal().reveal('.js_slideInReveal', animeOption2 );

  //フェードイン
  var animeOption3 = {origin: 'bottom',delay:1000,duration: 1600,interval: 400,scale: 1,reset: false,viewFactor: 0.15,}
  ScrollReveal().reveal('.js_fadeInReveal', animeOption3 );

  //オブジェクト用フェードイン
  var animeOption4 = {origin: 'bottom',delay:1000,duration: 1600,interval: 400,scale: 1,distance: '80px',reset: false,viewFactor: 0.15,}
  ScrollReveal().reveal('.js_fadeIvReveal_bgImg', animeOption4 );

});