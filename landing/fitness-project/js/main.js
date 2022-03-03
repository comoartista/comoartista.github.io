window.addEventListener('DOMContentLoaded', () => {

//hamburger
    const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.navbar');


hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

    //Tabs
    //1. Отримуємо зміннні
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader');

    //2. Функція, яка приховує непотрібні таби
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }

    //3. Функція, яка показує потрібний таб
    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    //4. Призначаємо обробника подій, який маніпулюватиме функціями
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

//jquery form validate
$(document).ready(function(){
        $('.contacts__form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            name: {
                required: "Введіть своє ім'я",
                minlength: jQuery.validator.format("Введіть {0} символів")
            },       
            phone: "Введіть свій номер",
            email: {
              required: "Введіть свій email",
              email: "Неправильний адрес"
            }
        }
    });

    $('input[name=phone]').mask("38(099) 99 99 99");

    $('form').submit(function(e) {
        e.preventDefault();

        if (!$(this).valid()) {
            return;
        }
        
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function(){
            $(this).find("input").val("");

            $('form').trigger('reset'); 
        });
        return false;
    });
});