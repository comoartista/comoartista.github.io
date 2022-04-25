"use strict"

// && - return true, if all arguments it's true
// const gamburger = true,
//       frenchFries = null;

// if (gamburger && frenchFries) {
//     console.log("I'm ate");
// } else {
//     console.log("I'm hungry");
// }

/*
динамічна типізація 
5 сущностей, які завжди будуть false: 
0
('') пуста строка; (" ") з пробілом не пуста
null
undefined
NaN

Все інше завжди буде true:1
*/

const gamburger = 3,
      frenchFries = 1,
      cola = 0;

// if (gamburger === 3 && cola === 1 && frenchFries) {
//     console.log("All had dinner");
// } else {
//     console.log("We're hungry");
// }


//Який оператор виконається першим?

console.log((gamburger === 3 && cola && frenchFries)); //якщо у змінних значення, то: повертає значення, на якому зупинився.
console.log(1 && 0); //true & false = false = 0
console.log(1 && 5); //true & true = повертає останнє значення = 5
console.log(null && 10); //false & true = false = null
console.log(0 && "ffff"); //0 & true = false = 0

