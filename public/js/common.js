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

  // スナックバー
	$(document).on('click','.js_snackOpen', snackOpen);
	$(document).on('click','.js_snackX', snackX);

	// ドロワー
	$(document).on('click','.js_drawerOpen', drawerOpen);
	$(document).on('click','.js_drawerX', drawerX);

  var animeOption = {origin: 'bottom',duration: 1600,interval: 400,scale: 1,distance: '40px',reset: false,viewFactor: 0.15,}
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

  // ドロワー
  var drawerOpen = function(){
    var tgtClass = $(this).attr('data-drawer');
    $('.md_drawer.'+tgtClass+'').addClass('md_drawer--show');
    // No Scroll
    current_scrollY = $( window ).scrollTop();
    $('.bodyWrap').addClass('body_fixed');
    $('.bodyWrap').css({ top: -1 * current_scrollY });
    return false;
  }
  var drawerX = function(){
    $(this).parents('.md_drawer').removeClass('md_drawer--show');
    $('.bodyWrap').removeClass('body_fixed');
    $('.bodyWrap').attr( { style: '' } );
    $('html, .bodyWrap').prop( { scrollTop: current_scrollY } );
    return false;
  }


  $('.js_slick').slick({
		arrows: true,
		autoplay: false,
		centerMode: true,
		centerPadding: '40px',
		slidesToShow: 1,
		variableWidth: true,
		autoplaySpeed: 5000,
		speed: 600,
	});

});