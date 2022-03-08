"use strict";

// let str = "some";
// let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

// console.dir([1,2,3]);

const soldier = {
    health: 400,
    armor: 300,
    sayHello: function() {
        console.log("Hello");
    }
};

//Створення прототипу
const jonh = Object.create(soldier); //ств новий обєкт jonh з доступом до обєкту soldier

jonh.sayHello();