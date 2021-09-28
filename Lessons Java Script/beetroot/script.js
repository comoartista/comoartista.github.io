 /* ================================================
     МАСИВИ
   ================================================ */
//Сума
// let arr = [-1, 2, 3, 4]
// let sum = 0
// for ( let i = 0; i < arr.length; i++) {
//     sum = sum + arr[i]
//   }

// console.log('сума елементів: ' + sum)


// Найдем сумму элементов массива:
// let arr = [1, 2, 4]
// let result = arr.reduce(function(sum, elem){
//   return sum+elem
// })

// console.log(result)

// Найдем сумму все положительных чисел массива:
// let arr = [1, -2, -3, 4, 5, -6];
// let result = arr.reduce (function(sum, elem) {
//   if (elem >= 0) {
//     return sum+elem
//   }
//   else {
//     return sum
//   }
// })
// console.log(result)

//Міняє елементи місцями
// let arr = [1, 2, 3, 4]
// let t = arr[0]
// arr[0] = arr[3]
// arr[3] = t
// console.log(arr)

//Міняє елементи місцями
// let arr = [1, 2, 3, 4]
// let t = arr[0]
// arr[0] = arr[arr.length - 1]
// arr[arr.length - 1] = t
// console.log(arr)

//Вивід на сторінку
// let arr = [1, 2, 3, 4]
// let out =''
// for (i = 0; i < arr.length; i++) {
//   out += arr[i] + '_'
// }

// document.querySelector('.out').innerHTML = out


// Вивід на сторінку тільки парні
// let arr = [1, 2, 3, 4]
// let out =''
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 0) {
//     out += arr[i] + '_'
//   }
  
// }

// document.querySelector('.out').innerHTML = out

// Вивід на сторінку тільки непарні
// let arr = [1, 2, 3, 4]
// let out =''
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 != 0) {
//     out += arr[i] + '_'
//   }
  
// }

// document.querySelector('.out').innerHTML = out

//Максимальне значення
// let arr = [1, 2, 3, 4]
// let max = arr[0]
// for ( let i = 0; i < arr.length; i++) {
//   if ( arr[i] > max) {
//     max = arr [i]
//   }
// }

// console.log('максимальне значення: ' + max)

// let arr = [-9, 2, 3, 4]
// let min = arr[0]
// for ( let i = 0; i < arr.length; i++) {
//   if ( arr[i] < min) {
//     min = arr [i]
//   }
// }

// console.log('мінімальне значення: ' + min)

 /* ================================================
     16. Цикл for of и сравнение с for, for in
   ================================================ */
   //Перебор масива
  //  let arr = [1, 2, 3]

   //1. Цикл for
  //  for(let i = 0; i < arr.length; i++) {
  //    console.log(arr[i])
  //  } 

  //2. Цикл for in
  // for(let key in arr) {
    // console.log(key) // вивід ключів
  //   console.log(arr[key])//вивід значень
  // } 

  //3. Цикл for of
  //   for(let item of arr) {
  //   console.log(item) 
  // } 
// let arr = [1, 2, 3]
// let allP = document.getElementsByTagName('p')
// console.log(arr)
// console.log(allP) // Получаем HTML колекцію

//1. For работает
// for(let i = 0; i < allP.length; i++) {
//      console.log(allP[i])
//    } 

  //2. Цикл for in не підходить для перебору колекції HTML елементі 
  // for(let key in allP) {
  //   console.log(key) // вивід ключів
  //   console.log(allP[key])//вивід значень
  // } 

   //3. Цикл for of работает
  //   for(let item of allP) {
  //   console.log(item) 
  // } 

  // let qP = document.querySelectorAll('p')
  // console.log(qP) // Получаем колекцію NodeList

   /* ================================================
     17. Изучаем методы map, filter
   ================================================ */
  // map создает новый масив,
  // с результатом вызова указанной функции,
  // для каждого элемента масива

  // Функция  map подходить, когда нужно перебрать масив,
  // приезвести над каждым элементом операции и возвратить

// let a = [4, 5, 12, 200, 1, 0, -2]
// let b = a.map(function (item, index) {
//   console.log(item)
//   return(item)

// })
// console.log(b)

// Умножить на 5 каждый элемент 
// let a = [4, 5, 12, 200, 1, 0, -2]
// let b = a.map(function (item, index) {
//   return(item * 5)

// })
// console.log(b)

// Упрощаем, используя стрелочную функцию
// let a = [4, 5, 12, 200, 1, 0, -2]
// let b = a.map((item, index) => {
//   return(item * 5)

// })
// console.log(b)

//Если только одна строка return то можна упустить слово return
// let a = [4, 5, 12, 200, 1, 0, -2]
// let b = a.map((item, index) => item * 5)
// console.log(b)

//Если один параметр, можно сократить 
// let a = [4, 5, 12, 200, 1, 0, -2]
// let b = a.map(item => item * 5)
// console.log(b)

//Filter создаёт новый массив со всеми элементами, 
// прошедшими проверку, задаваемую в передаваемой функции
// Як перебрати и повернути тільки ті значення, які підпадають під умови
// let a = [4, 5, 12, 200, 1, 0, -2]
// let b = a.map(item => item * 5)

// let c = a.filter (function(item, index){
// if (item %2 == 0) {
//   return true
// }
// })
// console.log(c) 

  /* ================================================
     18. Методы split, join, forEach
   ================================================ */
  // Метод split() разбивает объект String на массив строк
  // путём разделения строки указанной подстрокой.
  // let a = 'hello, hi, mahai'
  // console.log(a.split()) // получаем масив с одним елементом

  //  let a = 'hello,hi,mahai'
  // console.log(a.split(', ')) // добавляем разделитель, получаем три елементи масива
  
  // Метод join() объединяет все элементы массива (или массивоподобного объекта) в строку.
  // let b = [1, 2, 3]
  // console.log(b.join())

  // let b = [1, 2, 3]
  // console.log(b.join('-')) // сепаратор дефіс

  // Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве.
//   let b = [8, 9, 7]

//   b.forEach(function(elem, index) {
// console.log(index)
// console.log(elem*2)
// console.log('--')
//   })
//   console.log(b)


/* ================================================
     19. СОБЫТИЯ МЫШИ В JAVASCRIPT
   ================================================ */
  //  document.querySelector('.one').onclick = function (event) {
  //    console.log(event)
  //    console.log('click')
  //  }

  //  document.querySelector('.two').onclick = function () {
  //   console.log('click2')
  // }

  //Событие Двойной клик
  //  document.querySelector('.two').ondblclick = function () {
  //   console.log('double')
  // }

   //Событие правая клавиша мыши
  // document.querySelector('.two').oncontextmenu = function () {
  //   console.log('rightbutton')
  // }

  //Событие движение мыши 
  // document.querySelector('.three').onmousemove = function () {
  //   // console.log('+')
  //   document.querySelector('.three').style.width = w + 'px'
  //   w++
  // }


//   document.querySelector('.three').onmouseenter = function () {
//     document.querySelector('.three').style.background = 'red'
// }

//  document.querySelector('.three').onmouseleave = function () {
//   document.querySelector('.three').style.background = 'green'
// }

//  document.querySelector('.three').onmousedown = () => {
//   document.querySelector('.three').style.background = 'orange'
// }

//  document.querySelector('.three').onmouseup = () => {
//   document.querySelector('.three').style.background = 'blue'
// } 
// let p = 10
// document.querySelector('button').onclick = () => {
// p++
// document.querySelector('progress').value = p
// }

/* ================================================
     20. События клавиатуры
   ================================================ */
  //  document.querySelector('.i-1').onkeypress = (event) => {
  //   console.log('keypress')
  //    console.log('charCode:' + event.charCode)
  //    console.log('code:' + event.code)
  //    console.log('key:' + event.key)
  //    console.log('keyCode:' + event.keyCode)
  //   // console.log(event)
  //  }

  //  document.querySelector('.i-1').onkeydown = (event) => {
  //   console.log('keydown')
  //   console.log('charCode:' + event.charCode)
  //   console.log('code:' + event.code)
  //   console.log('key:' + event.key)
  //   console.log('keyCode:' + event.keyCode)
  // //  console.log(event)
  //  if (event.key == 'Capslock') {
  //   document.querySelector('.ch-1').checked = true
  //  }
  //  else {
  //   document.querySelector('.ch-1').checked = false
  //  }
  // }


  // document.querySelector('.i-1').onkeyup = (event) => {
  //   console.log('keyup')
  //   console.log('charCode:' + event.charCode)
  //   console.log('code:' + event.code)
  //   console.log('key:' + event.key)
  //   console.log('keyCode:' + event.keyCode) 
  // }

  // document.querySelector('.i-2').onkeypress = (event) => {
  //   console.log('keypress')
  //    console.log('charCode:' + event.charCode)
  //    console.log('code:' + event.code)
  //    console.log('key:' + event.key)
  //    console.log('keyCode:' + event.keyCode)
  //   // console.log(event)
  //   const a = {
  //     q: 'w',
  //     w: 'e'
  //   }
  //   document.querySelector('.i-2').value += a[event.key]
  //   return false
  //  }


   /* ================================================
     21. Основы Touch событий 
   ================================================ */
   document.querySelector('.block-1').addEventListener("touchstart", myTouch)
   document.querySelector('.block-1').addEventListener("touchend", myTouchEnd)
   document.querySelector('.block-2').addEventListener("touchmove", myTouchMove)

   function myTouch(event) {
    console.log(event)
     console.log('touch')
     document.querySelector('.out-1').innerHTML += 'work'
     document.querySelector('.out-2').innerHTML = event.touches.length
   }

   function myTouchEnd(event) {
     document.querySelector('.out-1').innerHTML += ' end'
   }

   function myTouchMove(event) {
    document.querySelector('.out-1').innerHTML += ' end'
    document.querySelector('.out-2').innerHTML = event.touches.length
  }


   /* ================================================
     22. Try Catch. Работаем с ошибками.
   ================================================ */
   let a = 5
   a = a * 2
try {
  document.querySelector('test').innerHTML = a
}

catch(err) {
  console.log(err)
  console.log(1)
}
finally {
  console.log('програма працює')

}
   console.log(a)

      /* ================================================
     22. Try Catch. Работаем с ошибками.
   ================================================ */
  //  localStorage.setItem('data', 5)
  //  console.log(localStorage.getItem('data'))

  //  const a = [3, 4, 5]
  //  localStorage.setItem('a', a)
  //  let b = localStorage.getItem('a')
  //  console.log(b)
  //  console.log(b[0])

      /* ================================================
     25. AJAX - учимся посылать GET, POST запросы
   ================================================ */

   let xhttp = new XMLHttpRequest() // cоздал запрос

   xhttp.onreadystatechange = function() {//на изменение состояние запускати функцию myFunction
     if(this.readyState == 4 && this.status == 200) {
       myFunction(this.responseText)
     }
   }
 

   xhttp.open("GET", "http://getpost.itgid.info/index2.php", true)  //отправка запроса
   xhttp.send()
//метод open позволяет запустить сам запрос. 
//етот метод требует 2 параметра: способ запуска (GET) и куда посилать запрос (http://getpost.itgid.info/index2.php)
// true - параметр, которий говорит как запускается синхронно или асинхронно 

//синхронно или асинхронно . что ето?
function myFunction(data) { //сама функция
     console.log('data')
   }