/* ================================================
     LESSONS 8 Циклы While и Do while
   ================================================ */

// Є цикл for
for (let i = 0; i < 6; i++) {
    console.log(i)
}

// Щоб бути більш гнучким, використовується цикл while
// while — це ключове слово, яке запускає тіло цикла. 
// Тіло цикла працює до того часу, поки в скобках буде true 
// (функція буде виконуватися поки k < 5)
let k = 0
while ( k < 5) { 
    k++
	console.log ('k: ' + k)
}
// Задача1: Найти суму чисел от 0 + ... + 3 (1+2+3=6)
let sum = 0 
let p = 0
while (p <= 3) {
    sum = sum + p
    p++
}
console.log ('sum ' + sum)

//Задача 2: Вывести фигуру
// ****
// ****
// ****

let out = document.querySelector('.out-8') 
p = 0
let outStr = ''
let flag = 3

while (p < 4) {
    let p1 = 0
    while (p1 < 4) {
        if (p1 < flag) {
            outStr += '0'
        }
        else {
            outStr += '*'
        }
        p1++
    }
    flag--
    outStr += '<br>'
    p++
}
out.innerHTML = outStr



/* ================================================
     LESSONS 9 Работа с DOM, создание элементов, работа с CSS
   ================================================ */

   const one = document.querySelector('.one-9')
   one.style.width = '150px'
   one.style.paddingBottom = '40px'

   one.classList.add('two-9', 'three-9')
   one.classList.remove('three-9')

   const toggle = document.querySelector('.toggle-9')

   toggle.onclick = function() {
       this.classList.toggle('three-9')
   }
 
   //Атрибути data
   console.log(one.getAttribute('data'))
   console.log(document.querySelector('link').getAttribute('href'))

   //Добавление атрибута
   one.setAttribute('data-num', 6)

   //Gas, задачка
   // Научились с помощью атрибутов сохранять данные в HTML
   let gas = document.querySelectorAll('.gas')
   for (let i = 0; i < gas.length; i++)
    gas[i].onclick = function() {
        let gallons = document.querySelector('.gallons').value
        let amount = this.getAttribute('data')
        console.log(gallons*amount)
    }

let a = document.createElement('div')
a.innerHTML = 'Hello!'
a.classList.add('five-9')
a.onclick = function() {
    alert('hello')
}

//Получаем test-9
document.querySelector('.test-9').appendChild(a)

console.log(a)


// Присвоювання значення
// out.style.width = '200px'

// Присвоювання класу
// out.classList.add('bg-2')

// Видалення класу
// out.classList.remove('bg-3')


/* ================================================
     LESSONS 10 Масиви
   ================================================ */

   let a10 = 'Ivan'
   let b10 = '37'
   let z10 = 'Oven'
   let c10 = ['Ivan', 37, 'Oven']
   let d10 = []
   console.log(c10.length)

   let zodiak = ['Козерог', 1, 1, 19]
   console.log(zodiak)

   let man = ['Ivan', 'male', 176, 93, 'Ivanov']
   console.log(man)

   //Довжина масива
   console.log(zodiak.length)
   console.log(man.length)

   //Вивести елемент масиву
   console.log(man[4])

   //Змінити елемент в масиві
   man[0] = 'Sergey'
   console.log(man)

   let a101 = [1, 2, 3, 4]
   console.log(a101)

    //Поміняти місцями перший і останній елемент масиву
    let t10 = a101[0] //cтв тимчасову змінну, ставимо значення нульового елемента
    a101[0] = a101[3] // записуємо 4 на місці 1
    a101[3] = t10
    console.log(a101)

    //Через довжину масиву
    let a102 = [1, 2, 3, 4]
    let t101 = a102[0] //cтв тимчасову змінну, ставимо значення нульового елемента
    a102[0] = a102[a102.length - 1] // записуємо 4 на місці 1
    a102[a102.length - 1] = t101
    console.log(a102)

    // Звернення до елементу масиву, якоо не існує
    console.log(a102[888]) //отримуємо underfined


    //Виводимо масив на сторінку. Спосіб 1, через цикл
    for (let i = 0; i < a101.length; i++) {
        document.querySelector('.out-10').innerHTML += a101[i] + ' '
    }


    //Виводимо масив на сторінку. Спосіб 2

    let out10 = ''
    for (let i = 0; i < a101.length; i++) {
        out10 += a101[i] + '_ '
    }

    document.querySelector('.out-10').innerHTML = out10


    //Часто немає потребв виводити всі елементи масиву, тому вивід  out10 += a101[i] + '_ '
    //можна обернути в якусь умову. Наприклад виводити тільки парні

    let out101 = ''
    for (let i = 0; i < a101.length; i++) {
        if (a101[i] % 2 == 0) {
            out101 += a101[i] + '_ '
        }
       
    }

    document.querySelector('.out-10').innerHTML = out101

    //Знайти міn або мах елемент в масиві
    let e10 = [564, 2, 5, 23, 43, 5551, 2, 6, 12]
    let max = e10[0] //всередині max зараз лежить 4
    for(let i = 0; i < e10.length; i++) {
        if (e10[i] > max) {
            max = e10[i]
        }
    }
    console.log('max: ' + max)

    //Знайти cуму масиву e10
    let sum10 = 0 //всередині max зараз лежить 4
    for(let i = 0; i < e10.length; i++) {
            sum10 = sum10 + e10[i]
    }
    console.log('sum10: ' + sum10) 


    /* ================================================
     LESSONS 12 ДВУМЕРНЫЕ МАССИВЫ
   ================================================ */

   let b12 = [
       [1, 2, 3],
       [4, 5, 6],
       [7, 8, 9],
   ]
   console.log(b12)

//    for (let i = 0; i < b12.length; i++) {
//        //console.log(b12[i])
//        let c12 = b12[i] //c - масив [1, 2, 3]
//     //    for (let k = 0; k < c12.length; k++) {
//     //        console.log(c12[k])
//     //    }

//        //Вивід в зdоротньому порядку
//        for (let k = c12.length - 1; k >= 0; k--) {
//         console.log(c12[k])
//     }
// }

// let out12 = ' ' 
// for (let i = 0; i < b12.length; i++ ){
//     for (let k = 0; k < b12[i].length; k++) {
//         console.log(b12[i][k])
//         out12 += b12[i][k] + ' '
//     }
//     out12 += '<br>'
// }
   
// document.querySelector('.out-12').innerHTML = out12

//Вивести числа, які більше 4
let out12 = ' ' 
for (let i = 0; i < b12.length; i++ ){
    for (let k = 0; k < b12[i].length; k++) {
        if (b12[i][k] > 4) {
            out12 += b12[i][k] + ' '
        }    
    }
    out12 += '<br>'
}
console.log(out12)

//Задача: нажимати кнопку, пересувати 1
let d12 = [1, 0, 0, 0]
document.querySelector('.out-121').innerHTML = d12
let k12 = 0
document.querySelector('.button-12').onclick = () => {
    if (k12 + 1 < 4) {
        d12[k12] = 0;
        d12[k12 + 1] = 1;
        k12++;
    }
    document.querySelector('.out-121').innerHTML = d12

}

 /* ================================================
     LESSONS 13 АССОЦИАТИВНЫЙ МАССИВ (ОБЪЕКТ) В JAVASCRIPT
   ================================================ */
   
   const a13 = {
       "a13" : 5,
       "b13" : 'Hello',
       "z13" : 'Hi',

   }
   a13.yyyy = 555
   a13.b13 = 'Buy' //перезаписати змінну
   delete a13.a13 //видаляєм значення
   console.log(a13)
   console.log(a13.z13)

   let k13 = 'b13'
   console.log(a13[k13])


   //Виведення на сторінку
//    document.querySelector('.out-13').innerHTML = a13 //не працює з об'єктом


let out13 = '' // ств змінну, яка дорівнює пустому рядку
for (let key in a13) {
    out13 += a13[key] + ' '
}

document.querySelector('.out-13').innerHTML = out13

 /* ================================================
     LESSONS 16 Цикл for of и сравнение с for, for in
   ================================================ */
   let arr161 = [1, 7, 9] 
   let arr162 = [2, 7, 9] 
   let arr163 = [3, 7, 9] 

   //Перебор масиву циклом for
   for (let i = 0; i < arr161.length; i++ ) {
       console.log(arr161[i])
   }

   //Перебор масиву циклом for in
   for (let key in arr162) {
    console.log(arr162[key])
}

   //Перебор масиву циклом for of
   for (let item of arr163) {
    console.log(item)
}