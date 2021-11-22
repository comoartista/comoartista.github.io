// ==================================================
//   Оператори
// ==================================================

// if (4 == 2) {
//     console.log('Ok')
// } else {
//     console.log('Error')
// }


// const num = 50

// if (num < 49) {
//     console.log('Error')
// } else if (num > 100) {
//     console.log('Много')
// } else {
//     console.log('Ok')
// }


// Тернаний оператор: економить обєм коду і місце. Він один в JS
// Він називається тернарним, бо в його роботі бере участь три аргумента
// (num === 50) ? console.log('Правильно') : console.log('Помилка')


// Оператор switch перевіряє на строгу відповідність
// const num = 50

// switch (num) {
//     case 49: 
//         console.log('Невірно')
//         break;

//     case 100: 
//         console.log('Невірно')
//         break;
    
//     case 50: 
//         console.log('В точку')
//         break;

//     default:
//         console.log('Не в цей раз')
//         break;
// }




// ==================================================
//   Цикли
// ==================================================

// let num = 50;

// while (num <55) {
//     console.log(num);
//     num++
// }


// do  {
//     console.log(num);
//     num++
// }
// while (num <55);


// for (let i = 1; i < 8; i++) {
//     console.log(num);
//     num++;
// }


// for( let i = 1; i < 10; i++) {
//     if (i === 6) {
//         break;
//     }

//     console.log(i);
// }


// for( let i = 1; i < 10; i++) {
//     if (i === 6) {
//         continue;
//     }

//     console.log(i);
// }




// ==================================================
//   Функції
// ==================================================
// let num = 20;

// function showFirstMessage(text) {
//     console.log(text);
//     num = 10;
//     console.log(num);
// }

// showFirstMessage('Hello');
// console.log(num);



// Замикання -- це сама функція разом з усіма зовнішніми змінними, які їй доступні
// Функції -- один з принципімв оптимізації коду
// return -- дозволяє повернути значення наззовні і закінчити виконання функції



// function calc(a, b) {
//     return (a + b);
// }

// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));



// function ret() {
//     let num = 50;
//     return num;
// }

// const anotherNum = ret();
// console.log(anotherNum);



//  Типи функцій
//  function declaration
//  Створюється до початку виконання скрипта, працює до того, як функція була викликана
//  function foo() {
//      code
//  }


//  function expression
//  Створюється тільки тоді, коли доходить поток коду, можна викликати після обявлення
// const loger = function(){
//     console.log('Hello');
// };
// logger()


//  стрілкова функція
//  Не має свого контексту (this)
//  ()=>
//  const calc = (a, b) => a + b; скорочений варіант, якщо код поміщається в рядок
//  const calc = (a, b) => {
//     console.log('1');
//     return a + b}; повний варіант





// ==================================================
//   Методи та властивості строк/чисел
// ==================================================
// Методи - це допоміжні функції
// Властивості - допопоміжні значення, пишуться через точку

// const str = "test";
// console.log(str.length);
// console.log(str[2]);

// const arr = [1, 2, 4];
// console.log(arr.length);


// Методи зі строками 

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let fruit = "Some fruit";
// console.log(fruit.indexOf("fruit")); 

// const logg = "Hello world";
// console.log(logg.slice(6, 11));

// console.log(logg.substring(6, 11));

// console.log(logg.substr(6, 3)); 



// Методи зі числами
// math -- бібліотека методів ддля роботи з числами

// const num = 12.2;
// console.log(Math.round(num)); -- зокруглює


// const test = '12.2px';
// console.log(parseInt(test)); -- перетворює число в строку
// console.log(parseFloat(test)); 





// ==================================================
//   Callback функція
// ==================================================
// Callback функція - це функція, яка має бути виконана після того, як інша функція завершила своє виконання

// function first() {
//     setTimeout(function(){
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();



// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();  
// }

// function done() {
//     console.log(`Я прошел етот урок!`);
// }


// learnJS(`JavaScript`, done);





// ==================================================
//   Обєкти
// ==================================================
// Обєкти -- це структури, які можуть зберігати в собі типи даних у форматі ключ-значення. 
// І вони можуть вкладені в обєкти і в масиви.
// Щоб їх перебрати використ конструкцію for in.  
// У обєктів є вбудовані властивості і методи, які можна використовувати.
// Щоб обєкт вмів щось робити всередину записуємо функції всередині обєкта.

// Властивості-акцеcори: гет і сет.
  

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
// };

// console.log(options.name);



// delete options.name;
// console.log(options); 


//спосіб переробора для обєкта for in
// for (let key in options) {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
// }


//спосіб переробора обєкта і обєктів, які всередині
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
// }



//прием счетчика щоб порахувати кількість властивостей в обєкті
// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter ++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter ++;
//     }
// }
// console.log(counter);



//кількість елементів в масиві через метод Object.keys - отримуємо масив з усіма ключами і використовуємо властивість length
// console.log(Object.keys(options).length);



// методи можливо створювати вручну
// методи - це дії, які вміє виконувати обєкт


// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() { // створення методу вручну
//         console.log("Test");
//     }
// };

// options.makeTest();

// // Деструктиризація обєкта - витягування з обєкта змінних в якості нових структор, і виносити за межі обєкта
// const {border, bg} = options.colors;
// console.log(border);




// ==================================================
//   Масиви і псевдомасиви
// ==================================================

// const arr = [1, 2, 3, 6, 8]

//Методи для роботи з кінцем масива
// arr.pop(); //видаляє останній елемент з масиву

// console.log(pop);

// arr.push(10); // додає елемент вкінці



//Методи для роботи з початком масива
// shift/anshift - додає/видаляє елемент на початку масиву
// недолік - зсуває індекси



// перебір масива: циклом for in, for of
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// console.log(arr.length);
// Як співвідноситься між собою властивість lenght і порядкові номера всередині масиву
// lenght складається з останнього індексу, який є в масиві плюс один



// метод масиву for each - дозволяє гнучко перебрати елементи масиву
// коли використовувати звичайний цикл, метод for of, метод for Each? Переважео використовується  метод for Each.
// метод for of має плюс в тому, що можна використовувати ключові слова break i continue. 

// arr.forEach(function(item, i, arr){
//     console.log(`${i}: ${item} внутри масива ${arr}`)
// });



// Методи зміни масиву 
// map - модифікує і повертає вкінці новий масив, 
// every/some, 
// filter - відфільтровуємо масив по певних параметрах, н-ад, залишити парні числа, чи тільки з типом даних стрінг
// reduce


// const str = prompt("", "");
// const products = str.split(", ");
// products.sort(); //сортує в алфавітному порядку як строки
// console.log(products.join(";"));

// // // але можна сказати, як саме сортувати масив
// const arr = [2, 45, 67, 3, 2];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a - b
// }


// //псевдомасиви -- не працюють із методами масиву





// ==================================================
//   Передача за посиланням і за значенням
// ==================================================

// let a = 5,
//     b = a;

// b = b + 5;


// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; //передає посилання на обєкт а не сам обєкт

// copy.a = 10;

// console.log(copy);
// console.log(obj);


//передача значення за допомогою циклу (ств новий обєкт, перебираючи елементи старого обєкта)
// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy
// }



// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10; // коли клонуємо обєкти є глибокі і поверхнісні копії обєктів.
// // як тільки появляється вкладена структура, то ці властивості матимуть ссилочні типи даних

// console.log(newNumbers);
// console.log(numbers);



// const add = {
//     d: 17,
//     e: 20
// }

// console.log(Object.assign(numbers, add));

// const clone = Object.assign({}, add);
// clone.d = 20;

// console.log(add);
// console.log(clone);


//копія масива
// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'adasdasha';
// console.log(newArray);
// console.log(oldArray);


//оператор розвороту Spread: розвертає структуру і перетворює на набір даних

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wp', 'lj', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'fb'];

// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);  
//     console.log(c);
// }   

// const num = [2, 5, 7];
// log(...num); 

// const array = ["a", "b"];

// const newArray = [...array];

// const q = {
//     one: 1,
//     two: 2
// }

// const newObj = {...q};





// ==================================================
//   Основи ООП, прототипно-орієнтовані наслідування
// ==================================================

// ООП - наука по стаоренні архітектури

// let str = "some";
// let strObj = new String(str);

// // console.log(typeof(str));
// // console.log(typeof(strObj));

// console.dir([1, 2, 3]);

// const soldier = {
//     health: 400,
//     armor: 200,
//     sayHello: function() {
//         console.log("Hello")
//     }
// };

// const john = Object.create(soldier);//створ новий обєкт john, який буде прототипно наслідуватися від обєкта soldier
// // const john = {
// //     health: 100,
// // };

// // john.__proto__ = soldier; // встановили прототип для john від soldier -- це старий метод, зараз не використов

// // Object.setPrototypeOf(john, soldier); // встановили прототип для john від soldier -- новий
 
// // console.log(john.armor);
// john.sayHello();





// // ==================================================
// //   Динамічна типізація 
// // ==================================================
// // -- це можливість перетворювати один тип даних на інший. 
// // число стає строкою, а строка числом. 
// // обєкт булієвим значенням

// // !!Все, що отримуємо від користувачів приходить у вигляді строк.
// // Інколи, ці строки потрібно перетворювати в інший тип даних



// //перетворення to string
// //1. застарілий спосіб через команду String 
// console.log(typeof(String(null)));
// console.log(typeof(String(4)));

// //2. через конкатинацію (складення строки з чим-небудь)
// console.log(typeof(5 + ''));

// const num = 5;
// console.log("https://vk.com/catalog/" + num) // динамічне формування строки
// const fontSize = 26 + 'px'; 



// //перетворення to number
// //1. через команду number, його не зручно використовувати
// console.log(typeof(Number('4')));

// //2. більш лаконічний, через унарний +
// console.log(typeof(+'4'));


// //3. через метод, який існує для чисел: parseInt. Ним рідко користуються, неочевидний спосіб для використанням методу
// console.log(typeof(parseInt("15px", 10)));


// let answ = +prompt("Hello", "");



// // перетворення to boolean
// // false: 0, '', null, undefined, NaN 
// // true: пусті масиви, пусті обєкти, строки

// //1. через створення умови
// let switcher = null; // тут false, умова не спрацює, working не виведеться

// if (switcher) {
//     console.log('Working...');
// }

// switcher = 1; // тут число, true

// if (switcher) {
//     console.log('Working...');
// }

// //якщо на сторінці поки не існує якогось елементу, замість нього буде null



// //2. через boolean
// console.log(typeof(Boolean('4')));



// //3. через знак заперечення. цей варіант практично ніколи не використовується.
// console.log(typeof(!!'4444'));





// ==================================================
//   Задачі із співбесіди на розуміння основ 
// ==================================================
//оператор  || запиняється на true
// оператор && завжди запиняється на false 


// Какое будет выведено значение: let x = 5; alert( x++ ); ?
// let x = 5; alert( x++ ); //тут буде 5. інкремент ++ після знаку спочатку повертає ісходне значення (це 5, а потім збільшить на 1)
// let x = 5; alert( ++x ); //тут 6


//  Чему равно такое выражение: [ ] + false - null + true ?
// console.log([ ] + false - null + true); //NaN 



//  Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
// let y = 1; 
// let x = y = 2; 
// alert(x); //тут посдовне присвоювання: спочатку y присвоїли 1, потім присвоїли 2. в результаті х = 2



//  Чему равна сумма [ ] + 1 + 2?
// console.log([ ] + 1 + 2) //12



//  Что выведет этот код: alert( "1"[0] )?
// alert( "1"[0] ); //до кожного елементу строки можна звернутися по його індексу. тобто тут виведе 1



//  Чему равно 2 && 1 && null && 0 && undefined ?
// console.log(2 && 1 && null && 0 && undefined); //оператор && завжди запиняється на (false) null, тому виведе null



//  Есть ли разница между выражениями? !!(a && b) і (a && b)?
// console.log(!!(1 && 2) === (1 && 2)); // false, значення не рівні. !! - перетворює в булеве значення



//  Что выведет этот код: alert(null || 2 && 3 || 4); ?
//                 3
// alert(null || 2 && 3 || 4); //глянути табл пріоритетів

//оператор  || запиняється на true



//  a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
// const a = [1, 2, 3];
//       b = [1, 2, 3];
// console.log(a == b) // false, бо це два різні сховища інформації, які містять однакові дані



// //  Что выведет этот код: alert( +&quot;Infinity&quot; ); ?
// alert(+"Infinity"); // виведе Infinity, а тип даних number



// //  Верно ли сравнение: "Ёжик" > "яблоко"?
// console.log("Ёжик" > "яблоко") // тут посимвольне порівняння, потрібно відкрити табл кодування юнікод 
// // і подив хто на яких символах знаход. але так як  ежик з великої почин, а яблуко з малої літери, отримуєм false 



// //  Чему равно 0 || "" || 2 || undefined || true || falsе ?
// console.log(0 || "" || 2 || undefined || true || falsе)




// ==================================================
//   Отримання елементів зі сторінки, DOM
// ==================================================
// DOM - document object model, обєктна модель документа
// щоб звернутися до DOM, потрібна сущність document

//1. старі методи
// const box = document.getElementById('box');
// console.log(box);


// const btn = document.getElementsByTagName('button')
// console.log(btn);

// console.log(btn);


// const btn = document.getElementsByTagName('button')[1]; //щоб отримати конкретну кнопку, вказуємо її індекс в колекції
// console.log(btn);

// const btn = document.getElementsByTagName('button')[1]; //щоб отримати конкретну кнопку, вказуємо її індекс
// console.log(btn[1]); //щоб отримати конкретну кнопку, вказуємо її індекс в конкретному елементі


// const circles = document.getElementsByClassName('circle');
// console.log(circles);



//2. нові методи
//у псевдомасивів немає ніяких методів, по факту вони нічого не всміють.
//виключенням є querySelectorAll, бо у нього зявляється один метод forEach

// const hearts = document.querySelectorAll('.heart');

// hearts.forEach(item => { //стрілочна callback функція
//     console.log(item);
// }); 


// const oneHeart = document.querySelector('.heart'); 
// console.log(oneHeart);




// ==================================================
//   Дії з елементами на сторінці
// ==================================================

// const box = document.getElementById('box'),
//       btns = document.getElementsByTagName('button'),
//       circles = document.getElementsByClassName('circle'),
//       wrapper = document.querySelector('.wrapper'),
//       hearts = wrapper.querySelectorAll('.heart'),
//       oneHeart = wrapper.querySelector('.heart');
      

// // console.dir(box); //команда виводить обєкт

// // box.style.backgroundColor = 'blue';
// // box.style.width = '500px';

// box.style.cssText = 'background-color: blue; width: 500px';
// // box.style.cssText = `background-color: blue; width: ${num}px`;

// btns[1].style.borderRadius = '100%';
// circles[0].style.backgroundColor = 'red';


// //Всі елементи можна змінювати, використовуючи: 
// // 1) цикли
// for (let i = 0; i <hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

// // 2) методи
// hearts.forEach(item => {
//     item.style.backgroundColor = 'green';
// });



// //Основні методи для роботи зі сторінкою
// const div = document.createElement('div');
// // const text = document.createTextNode('Тут був я') //використ рідко, устарівший


// //здорова альтернатива: classlist, де через точку можна прописувати дії з класом:
// //видалення, добавлення, переключення, перевірка на вміст, визначення кількості класів які були застосовані

// div.classList.add('black');

// wrapper.append(div); //вставляє елемент вкінці. застарілий варіант appendChild
// // wrapper.prepend(div); //вставляє елемент спочатку

// // hearts[1].before(div); //застарілий варіант: wrapper.insertBefore(div, hearts[2]);
// // hearts[1].after(div);

// //circles[0].remove; //застарілий варіант: wrapper.removeChild(hearts[1]);

// // hearts[0].replaceWith(circles[0]); //застарілий варіант: wrapper.replaceChild(circles[0], hearts[0]);



// //Метод щоб вписати текст
// div.innerHTML = "<h1>Hello world</h1>"; 
// // div.textContent = 'Hello'; //коли чітко знаємо, що потрібно вписати тільки текст


// // Як вставити кусок коду у визначеному місці
// div.insertAdjacentHTML('beforebegin', '<h2>Buy</h2>');


// ==================================================
//   Події і їх обробники
// ==================================================
// Події -- це сигнал від бравзера, що щось відбулося. І ми їх можемо 
// відловлювати. Це клік, подвійний клік, наведення/забирання миші,
// прокрутка колеса миші, відправка даних у формі, нажаття клавіш на клавіатурі.


//Щоб використовувати любу події потрібно призначити обробника події.
// Обробник -- це функція, яка спрацьовує як тільки подія відбулася.

// 3 способи призначити обробник подій:
// 1) використати html-атрибут. В реальних проектах таке не використ.
// <button onclick="alert('Click')" id="btn">Нажми на мене</button>

// 2) використ властивості DOM дерева для подій. Теж поганий варіант.
//Якщо великий код, а обобників подій багато, то зчитується тільки останній.
// const btn = document.querySelectorAll('button');

// btn.onckick = function() {
//     alert('Click');
// }

// 3) Правильний спосіб
// btn.addEventListener('click', () => {
//     alert('Click');
// }); 

// btn.addEventListener('click', () => {
//     alert('Second click');
// }); 

//перший аргумент -- це назва події. другий аргумент - callback функція, яка і буде нашим обробником
// callback функції виконуються строго за іншими. На прикладі, спочатку виконується клік,
// і потім строго після цього запускається кастомна callback функція

// Перевага: можна призначати декілька дій на одну подію


//При наведені миші
// btn.addEventListener('mouseenter', () => {
//     alert('hover');
// }); 
 
// Інколи треба отримувати якісь дані про той елемент з яким взаємодіємо
// Н-ад, яка подія зараз відбулася або який елемент використовується, чи координати елемента
// Для цього є спеціальний обєкт event, і як інші обєкти він може мати свої властивості. 
// Цей обєкт event передається як аргумент в callback функцію
// btn.addEventListener('mouseenter', (event) => { // зазвичай, його називають event або скорочено буквою -- е
//     alert('hover');
// }); 

// Назва не грає ролі, головне event йде завжди першим аргументом. 
// Якщо в callback функцію потрібно передати інші аргументи, тоді ставим кому і дані передаєм наступними аргументами
// btn.addEventListener('mouseenter', (e) => {
//     console.log(e);
// }); 

// btn.addEventListener('mouseenter', (e) => {
//     console.log(e.target);
// }); 

// btn.addEventListener('mouseenter', (e) => {
//     console.log(e.target);
    // e.target.remove;
// }); 



// Щоб видалити функцію, її потрібно винести в окрему змінну

// let i = 0;
// const deleteElement = (e) => {
//     console.log(e.target);
//     i++;
//     if (i === 1) {
//         btn.removeEventListener('click', deleteElement);
//     }
// } 

// btn.addEventListener('click', deleteElement);


// Спливання подій -- це коли обробник подій спрацьовує спочатку
// на самій вкладеній події, потім на батькові, і вище піднімаючись по ієрархії
// const btn = document.querySelector('button'),
//       overlay = document.querySelector('.overlay')

//       const deleteElement = (e) => {
//         console.log(e.target);
//         console.log(e.type);        
//     } 

//     overlay.addEventListener('click', deleteElement);


//     Важливо вміти відміняти стандартну поведінку в бравзері.
//     використовується метод, який є в обєкта події

//     const link = document.querySelector('a');
//     link.addEventListener('click', (event) => {
//         event.preventDefault(); //preventDefault() -- метод, який відміняє стандартну поведінку
//    //прописали метод, після чого взаємодіємо н-ад з посиланням як захочемо
//         console.log(event.target);
//     });

      
// Щоб навісити один функціонал на багато елементів потрібно перебрати масиві на кожен елемент всередині
// навісити обробник події за допомогою методу forEach

// btns.forEach(btn => { //item або btn -- логічніша назва
//     btn.addEventListener('click', deleteElement)
// });


// Опції події. в addEventListener є третій аргумент 
// наприклад once

// btns.forEach(btn => { //item або btn -- логічніша назва
//     btn.addEventListener('click', deleteElement, {once: true});
// });

// ==================================================
//   32. Навігація по DOM, data-атрибути, переваги for of
// ==================================================
//  console.log(document.body);
//  console.log(document.head);
//  console.log(document.documentElement); //щоб достукатися до html

// console.log(document.body.childNodes) //властивість childNodes - вузли, які є дітьми у body. отримаєм псевдомасив

// DOM елемент -- кожна сутність, яка знаходиться на сторінці по факту є DOM вузлом. 
// але не кожен DOM вузол є елементом.  Все що видно в тегах є елементами; 
// а перенос строки, коментарій, текст -- вузлами

// можна отримати першу дитину всередині батька або останню: firstChild i lastChild
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);



// команди, які дозволяють отримати: батька, сусідів, дітей
// console.log(document.querySelector('#current').parentNode);
// console.log(document.querySelector('#current').parentNode.parentNode);


// data-атрибути data-current
// console.log(document.querySelector('[data-current="3"]').nextSibling); //отримання через data-current + nextSibling - достук до наступного суіда 
// console.log(document.querySelector('[data-current="3"]').previousSibling);

// // всі попередні працюють з вузлами, наступні з елементами: 
// console.log(document.querySelector('[data-current="3"]').nextElementSibling); //отримання через data-current + nextSibling - достук до наступного суіда 
// console.log(document.querySelector('[data-current="3"]').previousElementSibling);

// console.log(document.querySelector('#current').parentElement);

// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);

// console.log(document.body.childNodes) //немає альтернативи для елемента
//тому його створюють вручну. метод forEach використовують для перебору псевдоколекцій
//інколи його не можемо використати, в такому випадку використов перебираюсу конструкцію for of
//н-ад, задача перебрати всіх childNodes, які лежать в body і позбутися всіх текстових нод (nodes-вузол) 
// for (let node of document.body.childNodes) {
//     if(node.nodeName == '#text') {
//         continue;
//     }
//     console.log(node)
// }

// for of використовують для того, щоб мати можливість перервати цикл або зупинити