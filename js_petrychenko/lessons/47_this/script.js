'use strict'
//Контекст виклику (this). Це те, що оточує функцію, і як вона викликається

//Фунція може викликатися 4 способами:
// 1) Виклик функції showThis(); 
//Звичайна функція: this = window, але якщо стоїть use strict - тоді undefined

// function showThis() {
//     console.log(this);
// }
// showThis();


//Задача на співбесіді
function showThis(a, b) {
    console.log(this);
    function sum () {        
        console.log(this); //1) Що код виведе тут? Виведе undefined
        return this.a + this.b; //2) Працюватиме ця комбінація? Як виправити? Зробити замикання функції, видалити this
    }
    console.log(sum());
}
showThis(4,5); 

//Рішення
function showThis(a, b) {
    console.log(this);
    function sum () {        
        console.log(this); //1) Що код виведе тут? Виведе undefined
        return a + b; //2) Працюватиме ця комбінація? Як виправити? Зробити замикання функції, видалити this
    }
    console.log(sum());
}
showThis(4,5); 


// 2) Виклик обєктами