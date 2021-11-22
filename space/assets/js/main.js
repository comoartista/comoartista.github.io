  $(document).ready(function() {

  // ================================================
  //   MOBILE MENU
  // ================================================

  // const mobileMenu = '.header__burger, .menu, .menu__mobile-bg'

  // $('.header__burger').click(function() {
  //   $(mobileMenu).toggleClass('active');
  //   $('body').toggleClass('lock')
  // });

  // $('.menu__mobile-bg').click(function() {
  //   $(mobileMenu).removeClass('active');
  // }); 
  
  $('.menu-btn').on('click', function(){
    $('.menu__list').toggleClass('active')
  });

  // ================================================
  //   SLIDER
  // ================================================

  $('.slider__box').slick({
    prevArrow: '<img class="slider__arrow slider__arrow-left" src="assets/img/arrow02.svg" alt="">',
    nextArrow: '<img class="slider__arrow slider__arrow-right" src="assets/img/arrow01.svg" alt="">',
  });

});
