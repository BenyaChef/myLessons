'use strict';

const usdCurs = 35;
const eurCurs = 40;
const discount = 0.9;

function convert (amount, curs) {

    return curs * amount;
}

function promotion(result) {
    console.log(result * discount);
}

convert(500, usdCurs);
convert(500, eurCurs);

const res = convert(500, usdCurs);

promotion(res);

function test() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
        if (i === 3) {
            return
        }
        
    }
    console.log('done');
}

test();

function sayHello (name) {
    return `Привет, ${name}!`;
}

sayHello('Максим');


function returnNeighboringNumbers(num) {
    return [num -1, num, num + 1];
}

returnNeighboringNumbers(4);

function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}

getMathResult(10, 5);