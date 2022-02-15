'use strict';

const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function() {
//     alert('click');
// };

// btn.onclick = function() {
//     alert('second click');         // если мы используем такое свойство то оно заменяет первое свойство данной функции!
// };

// let i = 0;
const deleteElement = (e) => {
    console.log(e.currentTarget); //высплытие элементов, это когда оброботчик срабатывает сначало на самом вложеном элементе, а потом поднимается выше и выше по ирархии ! 
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {
    btn.addEventListener('click', deleteElement, {once: true}); // назначили обработчик событий на все кнопки с помощью цикла forEach
});

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();     //отменяет дефолтные функции браузера!
    console.log(event.target);
});


// btn.addEventListener('click', () => {   // события в js выполнеяются в порядке очереди! 
//     alert('second click');
// }); 