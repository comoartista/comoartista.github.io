"use strict";

// const obj = new Objects(); //застарий запис ств обєктів

const options = {
    name: 'test',
    widht: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("Test");
    }
};

options.makeTest();

//деструктиризація обєкта
const {border, bg} = options.colors;
console.log(border);

//console.log(options["colors"] ["border"]);

// console.log(options.name);

// delete options.name; //оператор видалення 

// console.log(options);

//перебирання обєкта через for in
let counter = 0;
for (let key in options) {
    if (typeof(options[key]) === 'object') {
        for (let i in options[key]) {
            console.log(`Властивість ${i} має значення ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Властивість ${key} має значення ${options[key]}`);
        counter++;
    }
}

console.log(counter);

//Метод keys - отримуємо масив
console.log(Object.keys(options).length)