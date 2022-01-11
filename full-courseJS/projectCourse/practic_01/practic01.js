// 'use strict';
// let numberOfFilms; // обявляємо змінну numberOfFilms глобально, щоб працювати з нею всередині функції

// //1. Функція для перевірки введених даних при відповіді на перше запитання
// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     /* Перевірка: на порожнє поле для введення АБО на кнопку Скасувати АБО
//         на НЕ число, то знову запитуємо... */

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }
// start(); // Виклик функції

// // --------- Головний об'єкт програми ---------
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false,
// }

// // 2. Функція заносить у головний об'єкт програми інформацію про фільми
// function rememberMyFilms() {
//     for (let i = 0 ; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//               b = prompt('На сколько оцените его?', '');
//               /* Перевірка на порожнє поле для введення АБО на кнопку Скасування АБО на кількість символів */

//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }
// // rememberMyFilms(); // Виклик функції

// // 3. Функція аналізу рівня Кіноманії
//     function detectPersonalLevel() {
//         if(personalMovieDB.count < 10) {
//             console.log("Просмотрено довольно мало фильмов");
//         } else if(personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
//             console.log("Вы классический зритель");
//         } else if (personalMovieDB.count >= 30) {
//             console.log("Вы киноман");
//         } else {
//             console.log("Произошла ошибка");
//         }
//     }
//     // detectPersonalLevel() // Виклик функції

// // 4. Функція Жанрів – 3-я частина завдання
//     function writeYourGenres() {
//         for (let i = 1; i <= 3; i++) {
//             personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//         }
//     }
//     writeYourGenres();// Виклик функції

//     // 5. Функція перевірки приватності БД - 2 частина завдання
//     function showMyDB(hidden) {
//         if (!hidden) {
//             console.log(personalMovieDB);
//         }
//     }
//     showMyDB(personalMovieDB.privat)// Виклик функції

/* Задание на урок:
1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы
2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.
3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

"use strict";
let numberOfFilms; // обявляємо змінну numberOfFilms глобально, щоб працювати з нею всередині функції

// --------- Головний об'єкт програми ---------
const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  // Метод для перевірки введених даних при відповіді на перше запитання, перепрблений з функції (практика, ч.4)
  start: function () {
    personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", "");
    /* Перевірка: на порожнє поле для введення АБО на кнопку Скасувати АБО
            на НЕ число, то знову запитуємо... */

    while (
      personalMovieDB.count == "" ||
      numberOfFilms == null ||
      isNaN(numberOfFilms)
    ) {
      numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
  },

  // 2. Метод, перепрблений з функції (практика, ч.4), заносить у головний об'єкт програми інформацію про фільми
  rememberMyFilms: function () {
    for (let i = 0; i < 2; i++) {
      const a = prompt("Один из последних просмотренных фильмов?", ""),
        b = prompt("На сколько оцените его?", "");
      /* Перевірка на порожнє поле для введення АБО на кнопку Скасування АБО на кількість символів */

      if (a != null && b != null && a != "" && b != "" && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log("done");
      } else {
        console.log("error");
        i--;
      }
    }
  },
  // 3. Метод, перероблений з функції (практика, ч.4), аналізу рівня Кіноманії
  detectPersonalLevel: function () {
    if (personalMovieDB.count < 10) {
      console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
      console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
      console.log("Вы киноман");
    } else {
      console.log("Произошла ошибка");
    }
  },

  // 4. Метод, перероблений з функції (практика, ч.4), перевірки приватності БД - 2 частина завдання
  showMyDB: function (hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  //     метод toggleVisibleMyDB проверять свойство privat. Если оно false - он
  // переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.
  toggleVisibleMyDB: function () {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  // 5. Метод, перероблений з функції (практика, ч.4),  жанрів – 3-я частина завдання
  writeYourGenres: function () {
    for (let i = 1; i < 2; i++) {
      //     let genre = prompt(`Ваш любимый жанр под номером ${i}`);

      //     if (genre === '' || genre == null) {
      //         console.log('Ввели некоректні дані');
      //         i--;
      //     } else {
      //         personalMovieDB.genres[i - 1] = genre;
      //     }
      // }
      let genres = prompt(`Введіть ваші любимі жанри через кому`).toLowerCase;
      //умови для перевірки. Pапретить пользователю нажать кнопку "отмена" или оставлять пустую строку.
      // Если он это сделал - возвращать его к этому же вопросу
      if (genres === "" || genres == null) {
        console.log("Ввели некоректні дані");
        i--;
      } else {
        personalMovieDB.genres = genres.split(", ");
        personalMovieDB.genres.sort();
      }
    }

    personalMovieDB.genres.forEach((item, i) => {
      console.log(`"Любимый жанр ${i + 1} - это ${item}`);
    });
  }
};
