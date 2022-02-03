'use strict';

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function (){
        console.log('Test');  //методы это действия которые умеет совершать наш объект!
    }             
};

options.makeTest();

const {border, bg} = options.colors;  //деструктуризация 

// console.log(options.colors);

// delete options.name;  //удаляет ключ: значение из объекта

// console.log(options);

// for (let key in options) {
//     console.log(`Свойства ${key} имеет значение ${options[key]}`); // перебираем объкт!
// }

// for (let key in options) { //перебираем объект внутри объкта!
//     if (typeof (options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойства ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойства ${key} имеет значение ${options[key]}`);
//     }

    
// }

//console.log(Object.keys(options).length); // посмотреть колличесво ключей объекта