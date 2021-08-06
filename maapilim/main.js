/*
sticky header
----------------
*/
var headerPosition = $('.header__inner').offset().top;

$(window).scroll(function () {
  var scrollValue = $(window).scrollTop();
  if (scrollValue > headerPosition) {
    $('.header__inner').addClass('sticky');
  } else {
    $('.header__inner').removeClass('sticky');
  }
});

/*
slick slider
----------------
*/
$('.slider').slick({
  dots: true,
  arrows: false
});

/*
mobile-menu
----------------
*/
$('.menu-btn').on('click', function () {
  $('.menu').toggleClass('menu--open');
});
