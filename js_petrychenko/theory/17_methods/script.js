"use strict";

const str = "test";
const arr = [1, 2, 4];

console.log(str.length);// довжина строки
console.log(arr.length);//довжина масиву

console.log(str[2]); 

//Методи
console.log(str.toUpperCase());//заглавні літери
console.log(str.toLowerCase());//нижній регістр

console.log(str); 

let fruit = "Some fruit";
console.log(fruit.indexOf("fruit"));//"пошук по строці" показує, чи є слово/буква в строці

//Методи для взаємодії з рядками: slice, substring, substr
const logg = "Hello world!";

console.log(logg.slice(6, 11));//що повертаємо з рядка
console.log(logg.substring(6, 11));//як slice, тільки не підтримує відємнні значення 
console.log(logg.substr(6, 5)); //другий аргемент вказує ксть символів, які потрібно вирізати

//Методи для взаємодії з числами: Math
const num = 12.2;
console.log(Math.round(num));//округлення

const test = "12.2px";
console.log(parseInt(test));//перетворює в число і округлює
console.log(parseFloat(test));//перетворює число в десятичному варіанті