"use strict";

// const arr = [1, 2, 3, 6, 8];
// arr[99] = 0;
// console.log(arr.length);

//Методи масиву
// arr.pop(); //видаляє останній елемент з масиву
// arr.push(10); //добавляє елемент вкінці масиву

// console.log(arr);

//перебір масиву методом for
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

//перебір масиву методом for of
// for (let value of arr) {
//     console.log(value);
// } 

//перебір масиву методом for each
// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} inside array ${arr}`)
// });

//arr.map перебирає масив, дозволяє модифікувати елементи, повертає новий масив
//arr.filter фільтрує по критерію, над: залишити тільки парні числа/чи залишити елементи з типом даних строка

//Метод split - зі рядків робить елементи масиву
// const str = prompt("", "");
// const products = str.split(", ");
// console.log(products)

//Метод join (обєднання елементів масиву) з масиву робить рядок
// const str = prompt("", "");
// const products = str.split(", ");
// console.log(products.join(';'));

//Метод sort (сортування), сортує елементи як строки
// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join(';'));


//Сортування чисел за допомогою функції
const arr = [2, 13, 26, 8, 10];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}