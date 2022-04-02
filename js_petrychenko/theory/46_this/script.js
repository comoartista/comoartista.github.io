'use strict';
//Контекст виклику this - це те, що оточує функцію, і зя яких умов вона викликається.

// Функція може викликатися 4-ма способами, контекст виклику в кожному відрізняється

// 1) Метод виклику функції. При включеному 'use strict' виводить underfined. При виключеному - window.

// function showThis(a, b) {
//     console.log(this);
//     function sum() { 
//         console.log(this); //що поверне тут? При включеному 'use strict' виводить underfined. При виключеному - window.
//         return a + b;//чи спрацює комбінація return this.a + this.b і як її виправити? В-дь: забрати this: return a + b
//     }

//     console.log(sum());
// }
// showThis(4, 5);


// 2) Якщо метод виклику функції this використовується всередині об'єкта, то контекст виклику завжди буде посилатися на цей же об'єкт
//Контекст у методів  об'єкта - сам об'єкт.
// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this);
//     }
// };
// obj.sum();


// 3) Через оператор new
//This в конструкторах і класах - це новий екземпляр об'єкта
// function User(name, id) {
//     this.name = name; //для кожного окремого
//     this.age = id;
//     this.humen = true;
// }
// let Ivan = new User('Ivan', 23);


//4 Ручна привязка this: call, apply, bind
// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };

// //різниця між call і aplly в передачі параметрів
// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// //створює нову функцію
// function count(num) {
//     return this*num;
// }

// const double = count.bind(2);
//  console.log(double(3));

// const btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//     // console.log(this);
//     this.style.background = 'red';
// });

//Коли обробник подій, написаний в класичному режимі function() - тоді контекст визова буде самим елементом на якому виникла подія. this = button

//Приклад роботи стрілочної функції з контекстом виклику.
//Так, як у стрілочної функції немає свого контексту виклику, вона бере контекст у батька. У метода контекст посилається на об'єкт. Тому this = обєкт
// const obj2 = {
//     num: 5,
//     sayNumber: function() {
//         const say = () => {
//             console.log(this);
//         }

//         say();
//     }
// };

// obj2.sayNumber();


// Якщо дія поміщається в один рядок, то можна спростити: забрати дужки і return  
//     const double = (a) => {
//         return a*2;
// )};

// const double = (a) => a*2;

//Більше того, якщо у стрілочної функції один аргумент, тоді можна забрати дужки в (а)

// const double = a => a*2;
// console.log(double(4));