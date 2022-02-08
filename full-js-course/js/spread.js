'use strict';

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; // Передаём не структуру объекта мы передаём ссылку на объет!

// copy.a = 10;

// console.log(copy);
// console.log(obj);

//как же создавать копии объектов ?

function copy(mainObj) { //создаём поверхностную копию объекта 
    let objCopy = {}; //создаём копию объкта!

    let key; // переменную key можно создавать и вне такой перебирающей конструкции
    for (key in mainObj) { //у нас есть ключи в нутри объкта mainObj
        objCopy[key] = mainObj[key]; // создём копию, берем objCopy внутри создаём новое совойство[key]
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};

const newNumbers = copy(numbers); // совершили клонированние объекта! 

newNumbers.a = 10;
newNumbers.c.x = 10; // x изменилось в изначальном объкте как и в копии! Когда мы клонируем объект, есть два очень
                     // очень важных понятия это глубокие и поверхнстные копии объкта


// console.log(newNumbers);
// console.log(numbers);  


const add = {
    d: 17,
    e: 20
}; 

//Сейчас мы хотим соеденить add с объектом numbers 
// для этого мы воспользуемся Object.assing(аргумент)

const clone = Object.assign({}, add); // создали поверхностную копию предедущего объекта 

clone.d = 20;

// console.log(add);
// console.log(clone);

const oldArray = ['a', 'b', 'c']; 
const newArray = oldArray.slice(); // копировали массив

newArray[1] = 'lalala'; // поменяли значение индекса 1 
// console.log(newArray);
// console.log(oldArray);

//Новые стандарты ES6-ES8 


const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet =[...video, ...blogs, 'vk', 'fb']; // применили оператор разворота (...)

console.log(internet);

function log(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num); //массив разложется, с помощью оператора (...), на отдельные сущности 

const array = ['a', 'b'];
const newNArray = [...array];// создали поверхностную копию массива! 

const objSpread = {
    one: 1,
    two: 2,
    three: 3
};

const newObjSpread = {...objSpread};// создали поверхностную копию объкта ! 