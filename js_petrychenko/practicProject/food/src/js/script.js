window.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader')

    //Алгоритм:
    // 1) Функція, яка буде приховувати непотрібні таби

    function hideTabContent () {
        tabsContent.forEach(item => {
            item.style.display = 'none';
        }); 
    }
    // 2) Функція, яка буде показувати потрібні таби
    // 3) Обробник подій

});