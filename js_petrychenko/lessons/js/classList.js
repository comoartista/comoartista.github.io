// ==================================================
//   37. Classlist i Делегування подій 
// ==================================================

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

      
// console.log(btns[0].classList.length); //кількість класів в кнопки


// Методи classList: item, add, remove, toggle
// console.log(btns[0].classList.item(1)); //item дозволяє отримати клас, який знаходиться під певним індексом
// console.log(btns[1].classList.add('red', 'yellow')); //додає клас
// console.log(btns[0].classList.remove('blue')); //видаляє клас
// console.log(btns[0].classList.toggle('blue')); //toggle якщо клас є на елементі, то він забереться. якщо нема - добавиться


// Метод contains (перевіряє наявність класу на певному елементі і повертає булеве значення)
// якщо клас є - то повертає true, нема - то  false
// if (btns[1].classList.contains('red')){
//     console.log('red');
// }


// btns[0].addEventListener('click', () => {
//     if (!btns[1].classList.contains('red')) {
//         btns[1].classList.add('red');
//     } else {
//         btns[1].classList.remove('red');
//     }
// });


//або через toggle
// btns[0].addEventListener('click', () => {
//     btns[3].classList.toggle('red');
// });


// className - застаріле. Отримуємо список класів строкою, щоб маніпулювати класами, треба перетворити строку якимось методом
// console.log('btns[0].className')



// Делегування подій -- беремо елемент, який є батьком і працюємо з ним. 
//Один з найкорисніших прийомів для роботи з DOM деревом. Ідеально підходить,
// коли є багато елементів з однаковими обробниками, напишем менше коду, зеокономимо память бравзера
// wrapper.addEventListener('click', (event) => {
//     if(event.target && event.target.tagName == "BUTTON") {
//         console.log('Hello');
//     }
// });


// const btn = document.createElement('button');
// btn.classList.add('red');
// wrapper.append(btn);


// Делегування через навішування обробника події при переборі. Не працює з createElement
// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('Hello') 
//     })
// })

//Делегування через matches (якийсь елемент співпадає з чимось)
// wrapper.addEventListener('click', (event) => {
//     if (event.target && event.target.matches("button.red")) {
//         console.log('Hello');
//     };
// });



//Пояснення до уроку
// const btn = document.createElement('button'); //створили нову кнопку
// btn.classList.add('red'); //добавили клас
// wrapper.append(btn); //помістили кнопку у wrapper