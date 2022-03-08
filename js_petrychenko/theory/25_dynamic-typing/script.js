'use strict';

//Динамічна типізація: перетворення одного типу даних в інший

//To string

//1) String
console.log(typeof(String(null)));
console.log(typeof(String(4)));

//2) Конкатенация - коли щось складуємо зі строкою = строка
console.log(typeof(5 + ''));

const num = 5;
// console.log("http://vk.com/catalog/" + num);
console.log(`http://vk.com/catalog/${num}`);

const fontSize = 26 + 'px'; 

//To number 
//1) Number
console.log(typeof(Number('4')));

//2) унарний +
console.log(typeof(+'5'));

//3) методом parseInt
console.log(typeof(parseInt("15px", 10)));


let ansq = +prompt("Hello", "");


//To boolean
//false:
// 0, '', null, undefined, NaN; 

//1)
let swither = null;

if(swither) {
    console.log('Working...');
}

swither = 1;

if(swither) {
    console.log('Working...');
}

//2)
console.log(typeof(Boolean('4')));

// 3) 
console.log(typeof(!!('4444')));
