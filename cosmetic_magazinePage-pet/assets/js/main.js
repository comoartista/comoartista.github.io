$( document ).ready(function() { 

//   STICKY HEADER
// ==================================================
   
let headerPosition = $('.header__inner').offset().top;

$(window).scroll(function () {
  let scrollValue = $(window).scrollTop();
  if (scrollValue > headerPosition) {
    $('.header__inner').addClass('sticky');
  } else {
    $('.header__inner').removeClass('sticky');
  }
});

//   SLICK SLIDER
// ==================================================
$('.slider').slick({
  dots: true,
  arrows: false
});

//   MOBILE MENU
// ==================================================
$('.menu-btn').on('click', function () {
  $('.menu').toggleClass('menu--open');
});

});