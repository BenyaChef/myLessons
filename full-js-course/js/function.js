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