'use strict';

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
};

let end = new Date();

console.log(`Цикл відпрацював за ${end - start} мілісекунд`)