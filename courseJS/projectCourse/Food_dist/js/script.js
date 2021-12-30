window.addEventListener('DOMContentLoaded', () => {
// ==================================================
//   38. Створюємо таби
// ==================================================

    // const tabs = document.querySelectorAll('.tabheader__item'),
    //       tabsContent = document.querySelectorAll('.tabcontent'),
    //       tabsParent = document.querySelector('.tabheader__items');

    // //Приховати ввесь контент
    // function hideTabContent() {
    //     tabsContent.forEach(item => {
    //         item.classList.add('hide');
    //         item.classList.remove('show', 'fade');
    //     });

    //     tabs.forEach(item => {
    //         item.classList.remove('tabheader__item_active');
    //     });
    // }

    // //Показати таб
    // function showTabContent(i = 0) {
    //     tabsContent[i].classList.add('show', 'fade');
    //     tabsContent[i].classList.remove('hide');
    //     tabs[i].classList.add('tabheader__item_active');
    // }

    // hideTabContent();
    // showTabContent();

    // //Делегування подій, призначити обробник кліка
    // tabsParent.addEventListener('click', (event) => {
    //    const target = event.target;
    //    if (target && target.classList.contains('tabheader__item')) {
    //        tabs.forEach((item, i) => {
    //            if (target == item) {
    //             hideTabContent();
    //             showTabContent(i);
    //            }
    //        });
    //    }
    // });

    // // ==================================================
    // // 41. Створюємо таймер зворотнього відліку на сайті
    // // ==================================================

    // const deadline = '2021-12-20'; //відправна дата

    // function getTimeRemaining(endtime) {
    //     const t = Date.parse(endtime) - Date.parse(new Date()), //метод, завдяки якому отримаємо кількість мілісекунд, які будуть вкінці
    //           days = Math.floor(t / (1000 * 60 * 60 * 24)), //Math.floor метод заокруглення до найближчого цілого 
    //           // 1000 *  60 (к-сть мілісекунд в хв) *  60 (к-сть мілісекунд в год) *  24 (к-ть мілісекунд в добі)
    //           hours = Math.floor((t / (1000 * 60 * 60) % 24)),
    //           minutes = Math.floor((t / 1000 / 60) % 60), 
    //           seconds = Math.floor((t / 1000) % 60);

    //     return {
    //         'total': t,
    //         'days': days,
    //         'hours': hours,
    //         'minutes': minutes,
    //         'seconds': seconds
    //     };
    // }

    // function setClock(selector, endtime) {
    //     const timer = document.querySelector(selector),
    //           days = timer.querySelector('#days'),
    //           hours = timer.querySelector('#hours'),
    //           minutes = timer.querySelector('#minutes'),
    //           seconds = timer.querySelector('#seconds');
    //           timeInterval = setInterval(updateClock, 1000); //функція буде запускатися кожну секунду

    //     function updateClock() {
    //         const t = getTimeRemaining(endtime);

    //         days.innerHTML = t.days;
    //         days.innerHTML = t.hours;
    //         days.innerHTML = t.minutes;
    //         days.innerHTML = t.seconds; 

    //         if (t.total <= 0 ) {
    //             clearInterval(timeInterval);
    //         }
    //     }
    // }

    // setClock('.timer', deadline);

    const deadline = '2021-12-11';

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),
            days = Math.floor( (t/(1000*60*60*24)) ),
            seconds = Math.floor( (t/1000) % 60 ),
            minutes = Math.floor( (t/1000/60) % 60 ),
            hours = Math.floor( (t/(1000*60*60) % 24) );

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num){
        if (num >= 0 && num < 10) { 
            return '0' + num;
        } else {
            return num;
        }
    }

    function setClock(selector, endtime) {

        const timer = document.querySelector(selector),
            days = timer.querySelector("#days"),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000);

        updateClock();

        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days);
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
        }
    }

    setClock('.timer', deadline);

});




