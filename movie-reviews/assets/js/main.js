$(document).ready(function () {

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
    // $('.tab__list a').click(function(event) {
    //   event.preventDefault();

    //   $('.active').removeClass('active');
    //   $(this).addClass('active');

    //   var id = this.id;
    //   $('.' + id).addClass('active');
    // });

    const tabsBtn = document.querySelectorAll(".tab__nav-btn", ".tab__link-icon")
    const tabsItem = document.querySelectorAll(".tab__item")

    tabsBtn.forEach(function (item) {
        item.addEventListener("click", function () {
            let currentBtn = item
            let tabId = currentBtn.getAttribute("data-tab")
            let currentTab = document.querySelector(tabId)
            

            tabsBtn.forEach(function (item) {
                item.classList.remove('active')
            })
            tabsItem.forEach(function (item) {
                item.classList.remove('active')
            })

            currentBtn.classList.add('active')
            currentTab.classList.add('active')



        })
    })



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