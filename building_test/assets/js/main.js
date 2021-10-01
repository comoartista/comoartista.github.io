$(document).ready(function() {

  // ================================================
  //   MOBILE MENU
  // ================================================

  $('.header__burger').on('click', function (event) {
    $('.header__burger, .menu').toggleClass('active');
    $('body').toggleClass('lock')
  });
  

  // ================================================
  //   SLIDER
  // ================================================
  const slider = $('.image-item__wrapper');
  const totalSlides = $(".slider__image").length;

  slider.on('init', function(slick) {

    $('.current-slide').text('1');
    $('.total-slides').text(totalSlides);
  });

  slider.on('afterChange', function(event, slick, currentSlide) {
    $('.current-slide').text(currentSlide + 1);
  });


  $('.image-item__wrapper').slick({
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
    prevArrow: $('.slider__control--prev'),
    nextArrow: $('.slider__control--next')
  });

});
