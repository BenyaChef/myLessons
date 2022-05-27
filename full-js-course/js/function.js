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

function calculateVolumeAndArea(facet) {
    if (typeof(facet) !== 'number' || facet < 0 || !Number.isInteger(facet)) {
        return console.log('При вычисление произошла ошибка!');
    }
    const V = facet * facet * facet;
    const S = 6 * (facet * facet);
    console.log(`объём куба: ${V}, плащадь всей поверхности: ${S}`);
    
}

calculateVolumeAndArea(10);


function getCoupeNumber(number) {
    if (typeof(number) !== 'number' || number < 0 || !Number.isInteger(number)) {
        console.log('Ошибка. Проверьте правильность введёного номера!');
    }

    if (number === 0 || number > 36) {
        console.log('Таких мест в вагоне не существует!');
    }

    for (let i = 0; i <= 36; i = i + 4) {
        if ( number <= i) {
            console.log(Math.ceil(i / 4));
        }
    }

}

getCoupeNumber(24);

function getTimeFromMinutes(minutesTotal) {
    if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
        return 'Ошибка, проверьте данные';
    }

    const hours = Math.floor(minutesTotal / 60);
    const minutes = minutesTotal % 60;

    let hoursStr = '';

    switch (hours) {
        case 0:
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;  
        case 2:     
        case 3:     
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';    

    }

    console.log(`Это ${hours} ${hoursStr} и ${minutes} минут`);
}

getTimeFromMinutes('');

function findMaxNumber(a, b, c, d) {
    if (typeof(a) !== 'number' ||
        typeof(b) !== 'number' ||
        typeof(c) !== 'number' ||
        typeof(d) !== 'number' ) {
        return 0;
    } else {
        console.log (Math.max(a, b, c, d));
    }
}

findMaxNumber(56, 75, 37, 57);


function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }

    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
            // Без пробела в конце
        } else {
            result += `${first} `;
        }

        let third = first + second;
        first = second;
        second = third;
    }

    console.log(result);
}

fib(10);