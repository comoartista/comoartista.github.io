'use strict';

const box = document.getElementById('box');

console.log(box);

const btns = document.getElementsByTagName('button');

console.log(btns[1]);

const circles = document.getElementsByClassName('circle');

console.log(circles);

const hearts = document.querySelectorAll('.heart');

//Метод forEach: виводить послідовно всі елементи псевдомасиву 
hearts.forEach(item => {
    console.log(item);
});


const oneHeart = document.querySelector('.heart')

console.log(oneHeart);