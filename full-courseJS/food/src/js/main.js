//Табы
window.addEventListener('DOMContentLoaded', () => {

    //Получаем переменные з которыми будем взаемодействовать
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

    //Три задачи:
    // 1.Функция, котороя будет скрывать ненужные табы
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    // 2.Функция, котороя будет показывать нужный таб
    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    // 3.Назначить обработчик событий на нужный таб, который будет манипулировать етими функциями
    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
});


//через inline-style

//     //Получаем переменные з которыми будем взаемодействовать
//     const tabs = document.querySelectorAll('.tabheader__item'),
//           tabsContent = document.querySelectorAll('.tabcontent'),
//           tabsParent = document.querySelector('.tabheader__items');

//     //Три задачи:
//     // 1.Функция, котороя будет скрывать ненужные табы
//     function hideTabContent() {
//         tabsContent.forEach(item => {
//             item.style.display = 'none';
//         });

//         tabs.forEach(item => {
//             item.classList.remove('tabheader__item_active');
//         });
//     }

//     // 2.Функция, котороя будет показывать нужный таб
//     function showTabContent(i = 0) {
//         tabsContent[i].style.display = 'block';
//         tabs[i].classList.add('tabheader__item_active');
//     }

//     hideTabContent();
//     showTabContent();

//     // 3.Назначить обработчик событий на нужный таб, который будет манипулировать етими функциями
//     tabsParent.addEventListener('click', (event) => {
//         const target = event.target;

//         if (target && target.classList.contains('tabheader__item')) {
//             tabs.forEach((item, i) => {
//                 if (target == item) {
//                     hideTabContent();
//                     showTabContent(i);
//                 }
//             });
//         }
//     });
// });