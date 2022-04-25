"use strict";

if (4 == 5) {
    console.log('Ok');
} else {
    console.log('Error');
}

const num = 50;

if (num < 49) {
    console.log('Error');
} else if (num > 100) {
    console.log('Much');
} else {
    console.log('Ок!');
}

//Conditional (ternary) operator
(num === 50) ? console.log('Ок!') : console.log('Error');


//Switch
const num2 = 50;

switch (num2) {
    case 49: 
        console.log('Error');
        break;
    case 100: 
        console.log('Error');
        break;
    case 51: 
        console.log('True');
        break;
    default:
        console.log('Not this time');
        break;
}