//Методи, які дають можливість отримувати елементи з DOM, відщтовхуючись від батьківського елементу
// console.log(document.head); //head
// console.log(document.documentElement); //html
console.log(document.body.childNodes); //вузли, які є дітьми body. отримуєм псевдомас
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);
// console.log(document.body.lasttElementChild);


//відштовхуючись від любого елементу
// console.log(document.querySelector('#current').parentNode);
// console.log(document.querySelector('#current').parentNode.parentNode);
// console.log(document.querySelector('#current').parentElement);//ЕЛЕМЕНТ


//Data atribute
// console.log(document.querySelector('[data-current="3"]').nextSibling);
// console.log(document.querySelector('[data-current="3"]').previousSibling);
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);//Не ноду, а елемент!

//Перебрати всіх childNodes в body і позбутися від текстових нод
for(let node of document.body.childNodes) {
    if(node.nodeName == '#text') {
        continue;
    }

    console.log(node);
} 