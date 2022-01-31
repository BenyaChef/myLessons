'use strict';

const num = 50;

if (num < 49){
    console.log('error');
} else if (num > 100){
    console.log('error');
} else {
    console.log('ok!');
}

// (num === 50) ? console.log('ok!') : console.log('error');

switch (num) {
    case 49:
        console.log('error');
        break;
    case 100:
        console.log('error');
        break;
    case 51:
        console.log('Wanderful');
        break;
    default:
        console.log('Not to day!');
        break;   
}