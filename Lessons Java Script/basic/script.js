// console.log('Hello')
// console.log('world')
// console.log('333')
// console.log(333)
// console.log('Hello ' + 'world')//Операція склеювання обєктів: конкатенація 
// console.info('Hello')
// // alert('Hello')

// document.getElementById('out').innerHTML = 'Hello'

// document.querySelector('h2.header').innerHTML = 5
// document.querySelector('#one').innerHTML = 7//Потрібно ставити #
// document.getElementById('one').innerHTML = 111 // Не потрібно ставити # при виборі елемента по ID

// Вивчили: 
// 1. консоль
// 2. alert для вивода вспливающих вікон
// 3. getElementById для виведення елемента 
// 4. querySelector для роботи з елементом через CSS селектор

// let a = document.querySelector('#one') // всередину змінної а отримали параграф 
// a.innerHTML = 999

// let c = 8
// let b = 4

// console.log(c + b)

// let inputIn = document.querySelector('.input-in')
// let button = document.querySelector('button')

// button.onclick = function () {
//     console.log('Работает')
//     // console.log(inputIn.value)
//     let b = inputIn.value
//     console.log(b*2)
//     inputIn.value = ''
// }

/* ================================================
     Ветвление If, else, switch
   ================================================ */

//    let a = 1
//    if (a > 9) {
//        // true
//        console.log('yes')
//    }
//    else {
//        console.log('else')
//    }

const button = document.querySelector('button')
const input = document.querySelector('.age')

button.onclick = () => {
    let num = +input.value
    if (num >= 16 && num <60) {
        console.log('welcome')
    }
    else if (num > 60) {
        console.log('Точно сюда?')
    }
    else {
        console.log('close')
    }
    switch (num) {
        case 15:
            console.log('Потерпи')
            break
         case 16:
            console.log('Ура')
            break
        default:
            console.log('ook')
        
    }
}

let b = 3
console.log(b > 3 && b != 7)

