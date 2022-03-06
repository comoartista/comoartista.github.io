"use strict";

//Function declaration
function showFirstMessage() {
    console.log('Hi!');
}
 
showFirstMessage();


//Функція із аргументом
function showFirstMessage2(text) {
    console.log(text);
}

showFirstMessage2('Hello');


//Запуск функції із змінною
let num = 20;

function showFirstMessage3(number) {
    console.log(number);
    num = 10;
}

showFirstMessage3('Hello World');
console.log(num);


//Return повертає значення функції
function calc(a, b) {
    return (a + b);
}

console.log(calc(4, 3));
console.log(calc(5, 6));
console.log(calc(1, 2)); 


//Return повертає значення назовні
function ret() {
    let num = 50;

    return num;
}

const anotherNum = ret(); //записуємо результат роботи функції в змінну
console.log(anotherNum);


//Function expression - можна викликати, після того, як вона була об'явлена
const logger = function() {
    console.log("Hello Function Expression!");
};

logger();

//Arrow function
const calc = (a, b) => {
    console.log('1');
    return a + b;
};