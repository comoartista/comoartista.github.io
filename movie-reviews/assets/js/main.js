$( document ).ready(function() { 

    //   SLICK SLIDER
// ==================================================
$('.slider').slick({
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
  $('.tab-list .tab__link').click(function(event) {
    event.preventDefault();
  
    $('.active').removeClass('active');
    $(this).addClass('active');
  
    var id = this.id;
    $('.' + id).addClass('active');
  });

});