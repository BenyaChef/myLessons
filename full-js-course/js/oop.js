'use strick';
 
let str = 'some';
let strObj = new String(str);

console.log(typeof(str));
console.log(typeof(strObj));

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello!');
    }
};

const jonh = Object.create(soldier); // мы создаём новый объект jonh кторый будет прототипно наследоваться от soldier


console.dir([1, 2, 3, 4]);

// const jonh = {
//     health: 100
// };

// //jonh.__proto__ = soldier; // делайем объект soldier прототипом объекта jonh 

// //Object.setPrototypeOf(jonh, soldier);// первый аргумент это наследник прототипа второго аргумента 

// // console.log(jonh.armor);

// jonh.sayHello();