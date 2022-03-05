"use strict";

//Loops while
let num = 50;

while (num < 55) {
    console.log(num);
    num++;
}

//Loops do
let num2 = 50;

do {
    console.log(num2);
    num2++;
}
while (num2 <= 55);

//Loops for
let num3 = 50;

for (let i = 1; i < 8; i++) {
    console.log(num3);
    num3++;
}


for (let i = 1; i < 8; i++) {
    if (i === 6) {
        break; //дозволяє перервати цикл 
    }

    console.log(i);
}


for (let i = 1; i < 10; i++) {
    if (i === 6) {
        continue; //дозволяє пропустити крок, який не потрібний, не перериваючи цикл
    }

    console.log(i);
}
