'use strict';

const box = document.getElementById('box'),
            btns = document.getElementsByTagName('button'),
            circles = document.getElementsByClassName('circle'),
            hearts = document.querySelectorAll('.heart'),
            oneHeart = document.querySelector('.heart'),
            wrapper = document.querySelector('.wrapper');


// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

// box.style.cssText = 'background-color: blue; width: 500px';

// btns[1].style.borderRadius = '100%';
// circles[0].style.backgroundColor = 'red';


//Щоб змінити елементи псевдомасиву, спочатку їх потрібно перебрати
//1) через цикл for
// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

// 2) методом forEach
hearts.forEach(element => {
    element.style.backgroundColor = 'blue';
});

//Створення елемента на сторінці
const div = document.createElement('div');
// const text = document.createTextNode('Тут була я'); //застаріле значення

//Модифікація елемента
div.classList.add('black');

//Методи для розміщення елемента
// document.body.append(div);

// wrapper.prepend(div); //на початок батьківського елементу
wrapper.append(div);//в кінець батьківського елементу

// hearts[0].before(div) //перед елементом
// hearts[0].after(div) //після елементу


//Видалення елемента зі сторінки
// circles[0].remove();

//Заміна одного елемента іншим
// hearts[0].replaceWith(circles[0]);


//Добавлення коду/тексту прямо в елементи
div.innerHTML = "<h1>Hello</h1>";

//Коли чітко відомо, що від користувача отримаємо текст:
// div.textContent = "Hello";

//Як вказати розміщення тексту/коду
// div.insertAdjacentHTML("beforebegin", '<h2>Hello<h2>');
// div.insertAdjacentHTML("beforeend", '<h2>Hello<h2>');
// div.insertAdjacentHTML("afterbegin", '<h2>Hello<h2>');
// div.insertAdjacentHTML("afterend", '<h2>Hello<h2>');

