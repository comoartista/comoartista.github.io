'use strict';

const box = document.querySelector('.box'),
      btn = document.querySelector('button');
// const width = box.clientWidth;
// const height = box.clientHeight;

// const width = box.offsetWidth;
// const height = box.offsetHeight;

const width = box.scrollWidth;
const height = box.scrollHeight;

console.log(width, height);


//Розкриття контенту після кліку на кнопку
// btn.addEventListener('click', () => {
//     box.style.height = box.scrollHeight + 'px';
// });


btn.addEventListener('click', () => {
    console.log(box.scrollTop)
});

console.log(box.getBoundingClientRect());


const style = window.getComputedStyle(box);

console.log(style.display);

//Щоб отримати кількість пікселів, які проскролив користувач
console.log(document.documentElement.clientWidth);
// console.log(document.documentElement.scrollTop); //можно вручну змінювати
// console.log(document.documentElement.scrollTop = 0); //підтягнне нааверх

// window.scrollBy(0, 400) //від теперішньої позиції скролить на 400
// window.scrollTo(0, 400)