const btns = document.querySelectorAll('button');
      overlay = document.querySelector('.overlay');

 //Не підходящий запис
//  btn.onclick = function() {
//      alert('Click');
//  }

//  btn.onclick = function() {
//      alert('Second click');
//  }

//Цим методом можна призначати кілька дій на 1 подію
// btn.addEventListener('click', () => {
//     alert('Click');
// });

// btn.addEventListener('click', () => {
//     alert('Second click');
// });

//Наведення миші
// btn.addEventListener('mouseenter', (event) => {
//     console.log(event.target);
//     event.target.remove();
//     // console.log('Hover');
// });

//Дані про елементи, координати показує обєкт event або e. Він передається як аргумент у функції


// Видалення обробника подій
// let i = 0;
// const deleteElement = (e) => {
//     console.log(e.target);
//     i++;
//     if (i == 1) {
//         btn.removeEventListener('click', deleteElement);
//     }
// };

// btn.addEventListener('click', deleteElement);


//Всплитие собитий: коли обробник подій спочатку вспливає на самому вкладеному елменті, а потім на батьківському елементі
const deleteElement = (e) => {
    console.log(e.target);
    console.log(e.type);
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

//Відміна стандартної поведінки бравзера методом preventDefault
const link = document.querySelector('a');

link.addEventListener('click', (e) => {
    e.preventDefault();

    console.log(e.target);
});

//Один обробник подій навісити на кілька елементів
btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true}) //третій елемент - Опції подій (once - спрацює тільки раз)
});

