
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

// function fun1() {
//     let radio = document.getElementsByName('r1');
//     for (let i = 0; i < radio.length; i++) {
//         if (radio[i].checked) {
//             alert('Вибраний ' +i+ ' елемент');
//         }
//     }
// }

/* ================================================
     ПЕРЕВІРКА СТАНУ SELECT
   ================================================ */
//    function fun1() {
//     let sel = document.getElementById('mySelect').selectedIndex;
//     let options = document.getElementById('mySelect').options;
//     alert('Вибрана опція ' +options[sel].text);
//    }

/* ================================================
     ПЕРЕВІРКА СТАНУ RANGE
   ================================================ */
//    function fun1() {
//        let rng = document.getElementById('r1');
//        let p = document.getElementById('one');
//        p.innerHTML = rng.value;
//    }

/* ================================================
     Вивід Range в Input 
   ================================================ */
// function fun1() {
//     let rng = document.getElementById('r1');
//     let i1 = document.getElementById('i1');
//     i1.value = rng.value;
// }

/* ================================================
     Зміна ширини Input
   ================================================ */
//    function fun1() {
//     let rng = document.getElementById('r1');
//     let div = document.getElementById('test');
//     div.style.width = rng.value + 'px';
// }

/* ================================================
     CSS генератор
   ================================================ */
//    function fun1() {
//        let rtl = document.getElementById('rtl').value;
//        let rtr = document.getElementById('rtr').value;
//        let rbr = document.getElementById('rbr').value;
//        let rbl = document.getElementById('rbl').value;
//        let ttl = document.getElementById('ttl');
//        let ttr = document.getElementById('ttr');
//        let tbr = document.getElementById('tbr');
//        let tbl = document.getElementById('tbl');

//        let block = document.getElementById('block');

//        ttl.value = rtl;
//        ttr.value = rtr;
//        tbr.value = rbr;
//        tbl.value = rbl;

//        block.style.borderRadius = rtl+ 'px ' +rtr +'px ' +rbr +'px ' +rbl +'px ';
//    }