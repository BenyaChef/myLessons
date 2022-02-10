'use strict';

const box = document.getElementById("box"),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    hearts = document.querySelectorAll('.heart'),
    oneHeart = document.querySelector('.heart'),
    wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = `background-color: blue; width: 500px`;

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

const div = document.createElement('div');
const text = document.createTextNode('Тут');

div.classList.add('black');

wrapper.append(div);

// wrapper.prepend(div);

// hearts[0].after(div);
// hearts[0].before(div);

// circles[0].remove();

// hearts[0].replaceWith(circles[0]);

div.innerHTML = '<h1>Hello world</h1>'; 

div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');