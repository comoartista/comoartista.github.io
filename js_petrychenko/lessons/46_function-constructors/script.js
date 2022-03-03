'use strict'

// При використанні такого синтаксису функція стає конструктором. З її допомогою можна створювати нових користувачів
function User(name, id) {
    this.name = name;
    this.id = id;
    this.humen = true;
    //метод
    this.hello = function() {
         console.log(`Hello ${this.name}`);
    }
}
// Функція Prototipe, з її допомогою можемо добавляти нові методи або властивості в наш конструктор і вони будуть прототипно наслідуватися в потомків. Прийом використовується, коли немає доступу до прототипу, але його потрібно трохи модифікувати
User.prototype.exit = function() {
    console.log(`Пользователь ${this.name} ушел`)
}

//Функція User стала конструктором, коли вона викликається з допомогою ключового слова new -- функція створює новий обєкт з тими властивостями, які записані вище
const ivan = new User('Ivan', 28);
//І так, як це конструктор, то можна створити новий обєкт, який буде відрізнятися
const alex = new User('Alex', 20);

ivan.exit()

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);

//В консоли виведеться 2 обєкти:
// User { name: 'Ivan', id: 28, humen: true }
// User { name: 'Alex', id: 20, humen: true }


//Такі функції призначені для конструювання обєктів і створення багатьох подібних копій. В таких функціях не потрібний return -- ми нічого з них не повертаємо. І крім властивостей, як в звичайному обєкті можна записати методи.

//Конструктори потрібні для створення нових однотипних обєктів (на практиці це нові користувачі сайтів, товари в магазинах, ролики на ютубі). І компоненти сайтів можуть створюватися так само. Н-ад, в нас є декілька слайдерів на одній сторінці, але слайдери різні, в одному 5 слайдів, в іншому 10. Один буде використовувати автопереключання, інший не буде. 

//Все, що вище це стандарт ES5
//В стандарті ES6 появилися класи. Це красива обгортка функціоналу, який є всередині.