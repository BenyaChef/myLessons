'use strict';

const arr = [2, 4, 13, 14, 25, 8];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b; // метод быстрой сортировки!
}

// arr.pop();
// arr.push(10);

// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }


// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`)
// });

// const str = prompt('', ''); 
// const products = str.split(', ');
// products.sort();
// console.log(products.join('; '));