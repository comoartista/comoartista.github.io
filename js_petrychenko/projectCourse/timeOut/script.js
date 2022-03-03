// ==================================================
//   38. Скрипти і їх час виконання. setTimeOut i setInterval
// ==================================================

// const timerId = setTimeout(function() { //запуск операції із затримкою
//     console.log('Hello')
// }, 2000); 

//дана конструкція може приймати аргументи, які будуть аргументами для функції всередині
//використовується не часто
// const timerId = setTimeout(function(text) { //запуск операції із затримкою
//     console.log(text)
// }, 2000, 'Hello'); 


//можна передавати готову функцію
// const timerId = setTimeout(logger, 2000); //в setTimeout передається функція logger. спустя 2с функція запуститься
// clearInterval(timerId); //скидування таймера

// function logger() {
//     console.log('text');
// }



// const timerId = setTimeout(logger, 2000); //в setTimeout передається функція logger. спустя 2с функція запуститься
// clearInterval(timerId); //скидування таймера

// function logger() {
//     console.log('text');
// }


// const btn = document.querySelector('.btn');
// let timerId;
      

// btn.addEventListener('click', () => {
//     const timerId = setTimeout(logger, 2000);
// });

// clearInterval(timerId); // для зупинки

// function logger() {
//     console.log('text');
// }



//щоб скрипт повторювався через інтервали часу setInterval
// const btn = document.querySelector('.btn');
// let timerId,
//     i = 0;

// btn.addEventListener('click', () => {
//     timerId = setInterval(logger, 500);
// });


// function logger() {
//     if(i === 3) {
//         clearInterval(timerId);  // для зупинки
//     }
//     console.log('text');
//     i++;
// }


// Чим рекурсивний setInterval кращий за setTimeout?
// Рекурсія - це коли функція всередині себе сама викликає.



// let id = setTimeout(function log(){
//     console.log('Hello');
//     id = setTimeout(log, 500);
// }, 500);



// //Практика з анімацією
// const btn = document.querySelector('.btn');
// let timerId,
//     i = 0;

// function myAnimation() {
//     const elem = document.querySelector('.box');
//     let pos = 0;

//     const id = setInterval(frame, 10);
//     function frame() {
//         if(pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + "px";
//         }
//     }
// }

// //призначаєм тригер анімації
// btn.addEventListener('click', myAnimation);