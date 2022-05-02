'use strict';

let num = 20;

// while (num <= 55) { //условие!
//     console.log(num);// пока условие не выполнено выполняй такие действия!
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

for (let i = 1; i <= 11; i++) {
    if (num === 13) {
        break;
    }
    console.log(num);
    num--;
}

for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let i = 2;
while ( i <= 16) {
    if (i % 2 === 0) {
    } else {
        console.log(i);
    }
    i++;
}

function fifthTask() {
    const arrayOfNumbers = [];

    for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i - 5] = i;
    }

    console.log(arrayOfNumbers);
    return arrayOfNumbers;
}