
// ==================================================
//   37. Classlist i Делегування подій 
// ==================================================

const btns = document.querySelectorAll('button');
      wrapper = document.querySelector('.btn-block')

// console.log(btns[0].classList.length); //кількість класів в кнопки

// Методи classList
// console.log(btns[0].classList.item(0)); item дозволяє отримати клас, який знаходиться під певним індексом
// console.log(btns[1].classList.add('red', 'yellow'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue')); //toggle якщо клас є на елементі, то він забереться. якщо нема - добавиться



// метод contains перевіряє наявність класу на певному елементі і повертає булеве значення
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
//         btns[1].classList.toggle('red');
// });



// className - застаріле
// console.log('btns[0].className')




// Делегування подій -- беремо елемент, який є батьком і працюємо з ним. 
// wrapper.addEventListener('click', (event) => {
//     if (event.target && event.target.tagName == "BUTTON") {
//         console.log('Hello')
//     };
// });


//ще один спосіб через matches
wrapper.addEventListener('click', (event) => {
    if (event.target && event.target.matches("button.red") == "BUTTON") {
        console.log('Hello')
    };
});


// навішування обробника події при переборі
// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log('Hello') 
//     })
// })

const btn = document.createElement('button'); //створили нову кнопку
btn.classList.add('red'); //добавили клас
wrapper.append(btn); //помістили кнопку у wrapper