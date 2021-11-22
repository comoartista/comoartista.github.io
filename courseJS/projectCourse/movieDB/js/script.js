// "use strict";

// // load - подія, яка спрацьовує, коли сторінка повністю завантажилася
// // DOMContentLoaded - подія, яка спрацьовує, коли завантажилося DOM дерево

// document.addEventListener("DOMContentLoaded", () => {
  
//     const movieDB = {
//     movies: [
//       "Логан",
//       "Лига справедливости",
//       "Ла-ла лэнд",
//       "Одержимость",
//       "Скотт Пилигрим против...",
//     ]

//   };

//   const adv = document.querySelectorAll(".promo__adv img"),
//     poster = document.querySelector(".promo__bg"),
//     genre = poster.querySelector(".promo__genre"),
//     movieList = document.querySelector(".promo__interactive-list"),
//     addForm = document.querySelector("form.add"),
//     addInput = addForm.querySelector(".adding__input"),
//     checkbox = addForm.querySelector('[type="checkbox"]');

//   //навішуємо обробник подій на форму, вказуємо подію submit
//   addForm.addEventListener("submit", (event) => {
//     event.preventDefault(); //відміняємо стандартну поведінку бравзера

//     let newFilm = addInput.value; //отримуємо введені значення
//     const favorite = checkbox.checked; //checked для отримання булієвого значення. true нажато, false ненажато

//     movieDB.movies.push(newFilm); //добавлення нового фільму в обєкт
//     sortArr (movieDB.movies); //сортування фільмів

//     createMovieList(movieDB.movies, movieList); //додавання нового фільму до списку
//     event.target.reset(); //очистка імпута

//     function createMovieList(films, parent) {
//       parent.innerHTML = ""; //видалення списку фільмів зі сторінки

//       //перебір масиву
//       films.movies.forEach((film, i) => {
//         parent.innerHTML += `
//                     <li class="promo__interactive-item">${i + 1} ${film} 
//                         <div class="delete"></div>
//                     </li>`;
//       });
//     }
//     deleteAdv(adv); // виклик функції
//     makeChanges();
//     sortArr(movieDB.movies);
//     createMovieList(movieDB.movies, movieList);
//   });

//   //видалення рекламних блоків зі сторінки
//   const deleteAdv = (arr) => {
//     arr.forEach((item) => {
//       //за допомогою forEach і стрілочної функції
//       item.remove();
//     });
//   };

//   // adv.forEach(function(item){ //за допомогою forEach і звичайної функції
//   //     item.remove();
//   // });

//   // for(let i = 0; i < adv.length; i++) { // за допомогою циклу
//   //     adv[i].remove()
//   // }

//   //зміна в заголовку жанру фільма: з комедія на драма
//   const makeChanges = () => {
//     genre.textContent = "драма";

//     //зміна фонового зображення
//     poster.style.backgroundImage = 'url("img/bg.jpg")';
//   };

//   const sorArr = (arr) => {
//     arr.sort();
//   };

//   //список фільмів формується на основі даних із обєкту  movieDB.movies
//   movieList.innerHTML = ""; //видалення списку фільмів зі сторінки

//   movieDB.movies.sort(); //сортування за алфавітом

//   //перебір масиву
//   movieDB.movies.forEach((film, i) => {
//     movieList.innerHTML += `
//             <li class="promo__interactive-item">${i + 1} ${film} 
//                 <div class="delete"></div>
//             </li>`;

//     //a = a + 1;
//     //a += 1;
//   });

//   /* Задания на урок:
//     1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
//     новый фильм добавляется в список. Страница не должна перезагружаться.
//     Новый фильм должен добавляться в movieDB.movies.
//     Для получения доступа к значению input - обращаемся к нему как input.value;
//     P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.






//     2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
//     3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)
//     4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
//     "Добавляем любимый фильм"
//     5) Фильмы должны быть отсортированы по алфавиту */
// });


'use strict';

document.addEventListener('DOMContentLoaded', () => { //callback функція (що буде, після того, як DOM структура прогрузиться)

    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv = document.querySelectorAll('.promo__adv img'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) { //якщо користувач щось ввів

            if (newFilm.length > 21) { //перевірка довжини фільма
                newFilm = `${newFilm.substring(0,22)}...`

            }

            if (favorite) {
                console.log('Добавлено в улюблене');
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
    
            createMovieList(movieDB.movies, movieList);
        }

        event.target.reset();
    });
    
    const deleteAdv = (arr) => { //function expression
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => {
        genre.textContent = 'драма';
    
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };

    const sortArr = (arr) => {
        movieDB.movies.sort();
    };
   
    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1); //метод splice вирізає елемент з масива; i - номер елемент, 1 - к-сть елементів, які потрібно видалити

                createMovieList(films, parent);
            });
        });
    }

    //список функцій, які викликаємо
    deleteAdv(adv);  
    makeChanges();
     createMovieList(movieDB.movies, movieList);
});

