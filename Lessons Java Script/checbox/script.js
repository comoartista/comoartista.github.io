
/* ================================================
     ПЕРЕВІРКА СТАНУ CHECKBOX
   ================================================ */

// function fun1() {
//     let checkbox;
//     checkbox = document.getElementById('one');

//     if (checkbox.checked) {
//         alert('Вибраний');
//     }

//     else {
//         alert('Не вибраний');
//     }
// }

/* ================================================
     ПЕРЕВІРКА СТАНУ RADIOBUTTON 
   ================================================ */

function fun1() {
    let radio = document.getElementsByName('r1');
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            alert('Вибраний ' +i+ ' елемент');
        }

        // else {
        //     alert('Не вибраний');
        // }
    }
}