'use strict';

function learnJS (lang, callback) {
    console.log(`Я учу ${lang}`);
    callback();
}

function done() {
    console.log('Я прошёл этот урок!');
}

learnJS('JavaScript', done);