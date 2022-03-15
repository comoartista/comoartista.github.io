const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length)
// console.log(btns[0].classList.item(1));
// console.log(btns[1].classList.add('red', 'strong'));
// console.log(btns[0].classList.remove('blue'));
// console.log(btns[0].classList.toggle('blue'));

// if (btns[1].classList.contains('red')) { //якщо є клас red на елементі
//     console.log('red');
// }

btns[0].addEventListener('click', () => {
    // if (!btns[1].classList.contains('red')) {
    //     btns[1].classList.add('red');
    // } else {
    //     btns[1].classList.remove('red');
    // }

    btns[1].classList.toggle('red');
}); 

// wrapper.addEventListener('click', (e) => { //e - це обєкт події, містить всю інформацію про елемент на якому відбуається подія
//     if (e.target && e.target.classList.contains('blue')) {
//         console.log("Hello");
//     }
// });

// wrapper.addEventListener('click', (e) => { //e - це обєкт події, містить всю інформацію про елемент на якому відбуається подія
//     if (e.target && e.target.tagName == "BUTTON") {
//         console.log("Hello");
//     }
// });

//Спосіб який люблять в гуглі, перевірка на співпадіння (matches)
wrapper.addEventListener('click', (e) => { 
    if (e.target && e.target.matches("button.red")) {
        console.log("Hello");
    }
});


// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log("Hello");
//     });
// });

//Створення нового елементу і вставляння в батьківський елемент
const btn = document.createElement('button');
btn.classList.add('red');
wrapper.append(btn); 