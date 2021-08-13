$( document ).ready(function() { 

    //   SLICK SLIDER
// ==================================================
$('.premium-slider__slider').slick({
    // dots: false,
    arrows: false,
    infinite: true, // бесконечная прокрутка слайдов

    slidesToShow: 5,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 6000,

  });

    //   TAB
// ==================================================
  $('.tab__list a').click(function(event) {
    event.preventDefault();
  
    $('.active').removeClass('active');
    $(this).addClass('active');
  
    var id = this.id;
    $('.' + id).addClass('active');
  });



    //   SLICK SLIDER
// ==================================================
$('.review-slider').slick({
  arrows: true,
  infinite: true,

});

});




// $('.tab-list a').click(function(event) {
//   event.preventDefault();

//   $('.active').removeClass('active');
//   $(this).addClass('active');

//   var id = this.id;
//   $('.' + id).addClass('active');
// });