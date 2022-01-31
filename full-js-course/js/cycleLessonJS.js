'use strict';

let num = 50;

// while (num <= 55){
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num < 55);

for (let i = 1; i < 10; i++) {
    if (i === 6){
        // break; //прерывает цикл как только доходит до нашего значения [i].
        continue; //не прерывает цикл, пропкская наше значение [i].
    }
    console.log(i);
}