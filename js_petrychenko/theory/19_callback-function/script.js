"use strict";

function first() {
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

//Callback
function learnJS(lang, callback) {
    console.log(`I learn: ${lang}`);
    callback();
}

function done() {
    console.log('I gone this class');
}

learnJS('JavaScript', done);