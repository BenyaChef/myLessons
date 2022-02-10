'use strict';

// To string
// 1)

console.log(typeof(String(null))); // преобразуем null в сторку 

// 2) конкротенация 

console.log(typeof(5 + '')); // при сложении со строкой у нас получится строка

const num = 5;

console.log('http://vk.com/catalog/' + num);

const fontSize = 26 + 'px';


// To Number

// 1)

console.log(typeof(Number('4'))); // Number  типизирует строку в число

// 2)
console.log(typeof(+'4'));

// 3)
console.log(typeof(parseInt('15px', 10)));

// To boolean

// 0, '',  null, undefined, NaN; это всё будет false

// 1)
let switcher = null;

if (switcher) {
    console.log('working...');
}

switcher = 1;

if (switcher) {
    console.log('working...');
}

// 2)

console.log(typeof(Boolean('4')));

// 3)

console.log(typeof(!!'4444'));

