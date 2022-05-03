'use strict';

// let num = 20;

// // while (num <= 55) { //условие!
// //     console.log(num);// пока условие не выполнено выполняй такие действия!
// //     num++;
// // }

// // do {
// //     console.log(num);
// //     num++;
// // }
// // while (num < 55);

// for (let i = 1; i <= 11; i++) {
//     if (num === 13) {
//         break;
//     }
//     console.log(num);
//     num--;
// }

// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(i);
//     }
// }

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let i = 2;
// while ( i <= 16) {
//     if (i % 2 === 0) {
//     } else {
//         console.log(i);
//     }
//     i++;
// }

// function fifthTask() {
//     const arrayOfNumbers = [];

//     for (let i = 5; i < 11; i++) {
//         arrayOfNumbers[i - 5] = i;
//     }

//     console.log(arrayOfNumbers);
//     return arrayOfNumbers;
// }

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
// }

// console.log(result);

// let data = [5, 10, 'Shopping', 20, 'Homework'];


// for (let i = 0; i <= data.length; i++) {
//     if(typeof(data[i]) === 'number') {
//         data[i] = data[i] * 2;
//     } else if (typeof(data[i]) === 'string') {
//         data[i] = `${data[i]} - done`;
//     } 
//     console.log(data);
// }


const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];

for (let i = 1; i <= data.length; i++) {
    result[i - 1] = data[data.length - i];
}

console.log(result);