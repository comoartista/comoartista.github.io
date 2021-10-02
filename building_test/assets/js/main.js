$(document).ready(function() {

  // ================================================
  //   MOBILE MENU
  // ================================================

  const mobileMenu = '.header__burger, .menu, .menu__mobile-bg'

  $('.header__burger').click(function() {
    $(mobileMenu).toggleClass('active');
    $('body').toggleClass('lock')
  });

  $('.menu__mobile-bg').click(function() {
    $(mobileMenu).removeClass('active');
  }); 
  

  // ================================================
  //   SLIDER
  // ================================================
  const slider = $('.slider__wrapper');
  const totalSlides = $(".slider__slide").length;

  const addZero = number => number < 10 ? `0${number}` : number

  slider.on('init', function() {
    $('.current-slide').text('01');
    $('.total-slides').text(addZero(totalSlides));
  });

  slider.on('afterChange', function(event, slick, currentSlide) {
    $('.current-slide').text(addZero(currentSlide + 1));
  });

  $('.slider__wrapper').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover:false,
    fade: !0,
    cssEase: 'linear',
    speed: 500,
    arrows: true,
    prevArrow: $('.slider__btn--prev'),
    nextArrow: $('.slider__btn--next')
  });

});

