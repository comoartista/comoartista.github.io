// Unit02
let a = 6
let b = 'Hello'
console.log(a)

let inputIn = document.querySelector('.input-in')
let buttonIn = document.querySelector('.button-in')
let div = document.querySelector('.out')

buttonIn.onclick = function () {
    let b = +inputIn.value
    console.log(b)
    div.innerHTML = b
    inputIn.value = ''
}

// Task 1.
// Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.
// let a = 7
// let b = 9
// console.log(a * b)
// Task 2.
// Создайте две переменные c = 7 и d = 9. Выведите на страницу в .out-2 результат деления c на d.
let c = 7
let d = 2
document.querySelector('.out-2').innerHTML = c / d


// Task 3.
// Создайте две переменные e = 3 и f = 5. Выведите на страницу  в .out-3 результат сложения e + f.
let e = 3
let f = 5
document.querySelector('.out-3').innerHTML = e + f

// Task 4.
// Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу  в .out-4 результат сложения e1 + f1. Объясните разницу.
let e1 = 3
let f1 = 5
document.querySelector('.out-4').innerHTML = e1 + f1


// Task 5.
// Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу  в .out-5 результат деления e2 на f2.
let e2 = 3
let f2 = 0
document.querySelector('.out-5').innerHTML = e2 / f2

// Task 6.
// Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу  в .out-6 результат сложения двух переменных.
let e3 = 3
let f3 = ' Hello'
document.querySelector('.out-6').innerHTML = e3 + f3

// Task 7.
// Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу  в .out-7 результат умножения двух переменных.
let e4 = 3
let f4 = 'Hello'
document.querySelector('.out-7').innerHTML = e4 * f4

// Task 8.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит в консоль то, что пользователь ввел в input.
let input8 = document.querySelector('.t8')
let button8 = document.querySelector('.b-8')
button8.onclick = function () {
    let out8 = input8.value
    console.log(out8)
}





// Task 9.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу,  что пользователь ввел в input. Добавьте очистку input после нажатия кнопки.
let input9 = document.querySelector('.i-9')
let button9 = document.querySelector('.b-9')
function t9() {
    let out9 = input9.value
    console.log(out9)
    input9.value = ''

}



// Task 10.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь умноженное на 10.
let input10 = document.querySelector('.i-10')
let button10 = document.querySelector('.b-10')
button10.onclick = function () {
    let out10 = input10.value
    console.log(out10 * 10)
}

// Task 11.
// Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу в .out-11 число, которое ввел пользователь и к нему добавленное число 10.
let input11 = document.querySelector('.i-11')
let button11 = document.querySelector('.b-11')
button11.onclick = function () {
    let out11 = +input11.value
    console.log(out11 + 10)
}

// Task 12.
// Создайте два input (i-12_1 и i-12-2) и кнопку. В первый input пользователь вводит имя, во второе фамилию. При нажатии кнопки выполняется функция, которая выводит в .out-12 строку 'Hello имя фамилия', где имя - имя пользователя и фамилия - введенная фамилия.

let input12_1 = document.querySelector('.i-12_1')
let input12_2 = document.querySelector('.i-12_2')
let button12 = document.querySelector('.b-12')
let out12 = document.querySelector('.out-12')

button12.onclick = function () {
    let out12_1 = input12_1.value
    let out12_2 = input12_2.value
    let outHello = 'Hello '
    out12.innerHTML = outHello + out12_1 + ' ' + out12_2
}

// Task 13.
// Создайте два input и кнопку. В input пользователь вводит числа. При нажатии кнопки выполняется функция, которая выводит сумму данных двух чисел на страницу в .out-13.

let input13_1 = document.querySelector('.i-13_1')
let input13_2 = document.querySelector('.i-13_2')
let button13 = document.querySelector('.b-13')
button13.onclick = function () {
    let out13_1 = +input13_1.value
    let out13_2 = +input13_2.value
    console.log(out13_1 + out13_2)
}

// Task 14.
// Создайте input .i-14 и пропишите ему в html value = 77. С помощью JS измените value на 'Hello'.
document.querySelector('.i-14').value = 'Hello'


// Task 15.
// Создайте input i-15 и получите его в переменную y. В js выполните следующее присвоение: y.style.border = '2px solid red' . Изучите результат операции.

let y = document.querySelector('.i-15')
y.style.border = '2px solid red'

// Task 16.
// Создайте два input type=number, куда пользователь может ввести числа. Выведите на страницу сумму данных чисел по нажатию кнопки b-16

let input16_1 = document.querySelector('.i-16-1')
let input16_2 = document.querySelector('.i-16-2')
let button16 = document.querySelector('.b-16')
let out16 = document.querySelector('.out-16')

button16.onclick = function () {
    let out16_1 = +input16_1.value
    let out16_2 = +input16_2.value
    out16.innerHTML = out16_1 + out16_2
}


// Task 17.
// Создайте input type="text" куда пользователь может ввести строку и число.
//  Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. 
//  А затем сделайте операцию t = parseInt(t), и результат операции выведите в out-17. Прочитайте за эту операцию. П
//  опробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.
let input17 = document.querySelector('.i-17')
let button17 = document.querySelector('.b-17')
let out17 = document.querySelector('.out-17')

button17.onclick = function () {
    let t = input17.value
    t = parseInt(t)
    out17.innerHTML = t
}


// Task 18.
// Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. Получите значение из input в переменную t. А затем сделайте операцию t = parseFloat(t), и результат операции выведите в консоль. Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.

function t18() {

}

document.querySelector('.b-18').onclick = t18;

// Task 19.
// Создайте два input type=number, куда пользователь может ввести отрицательные числа. Выведите на страницу сумму данных чисел. Мы это делали! Зачем? Затем, что нужно понимать как влияет перевод в число с помощью + и parseInt на отрицательные числа!!!

function t19() {

}

document.querySelector('.b-19').onclick = t19;

// Task 20
// Создайте опросник, куда пользователь может ввести имя, фамилию, возраст, род занятий. И кнопку. По нажатию кнопки выведите на страницу предложение 'Уважаемый Иван, Иванов, ваш возраст 33 года, по професси вы ...' куда поставьте соответствующие данные из inputов.

let inputName = document.querySelector('.name')
let inputAge = document.querySelector('.age')
let inputWork = document.querySelector('.work')
let button20 = document.querySelector('.b-20')
let out20 = document.querySelector('.out-20')

button20.onclick = function() {
    let outName = inputName.value
    let outAge = inputAge.value
    let outWork = inputWork.value

    out20.innerHTML = "Привіт, тебе звуть" + outName + ". Тобі" + outAge + "І ти цікавишся" + outWork + " Це круто!"
}


