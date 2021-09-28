// // 1. Создание, вызов, работа с переменными, счетчики
// Функція -- це блок кода, який має назву і може викликатися повторно
// function unixTime() {
//     let time = Math.floor(new Data().getTime())
//     console.log(time) 
// }
// unixTime()


// function randomInt() {
//     const min = 100;
//     const max = 200;
//     let randomNamber = Math.floor(min + Math.random() * (max + 1 - min));
//     console.log(randomNamber);
// }
// randomInt()

// let min = 1000;
// let max = 2000;

// function rand() {

//     let randomNamber = Math.floor(min + Math.random() * (max + 1 - min));
//     console.log(randomNamber);
// }
// rand()

// min = 5
// max = 15
// rand()

// let c = 9
// function count() {
    
//     c++
//     console.log(c)
// }
// count()
// count()
// count()


// let w = 100
// document.querySelector('.out-1').addEventListener('mousemove', blockWidth)
// function blockWidth() {
//     document.querySelector('.out-1').style.width = w + 'px'
//     w++
// }


// Task1
// Создайте функцию getRandomInt, которая выводит в блок .out-1 случайное целое число от 117 до 132. 
// Все переменные должны быть внутри функции. Запустите эту функцию.




// Task2
// Чуть усложним. Сейчас первая задача жестко завязана на значения 117 и 132. Напишите функцию getRandomInt2, которая на основе min,
// max генерирует случайное целое число в этом диапазоне и выводит в out-2. Запустите эту функцию.

// let a = 117
// let b = 132
// function randomInt() {
//     let randomNamber = Math.floor(a + Math.random() * (b + 1 - a))
//     // console.log(randomNamber)
//     document.querySelector('.out-2').textContent = randomNamber

// }

// randomInt()
// randomInt()
// randomInt()

// Task3
// Не забываем, что функции можно вызывать внутри другой функции.
// Напишите функцию t3, которая срабатывает при клике по кнопке .b-3, и запускает фукнции hello, и f2021. 
// Если все сделано верно, то внутри .out-3 вы увидите текст hello 2021.

// function t3() {
//     function hello() {
//         let a = 'Hello '
//         let b = 2021
//         let c = a + b
//         document.querySelector('.out-3').textContent = c }

//         hello()       
// }

// document.querySelector('.b-3').onclick = t3;

// 2.Аргументы в функциях JavaScript. Аргументы по умолчанию, функции как аргументы. Unit 02


function sum3(x, y) {
    console.log(x+y)
}
sum3(44,11)