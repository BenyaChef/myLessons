'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};



function rememberMyFylms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
            b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    
    }
}

// rememberMyFylms();



function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Вы просмотрели очень мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы класический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман!');
    } else {
        console.log('Ошибка');
    }
}

detectPersonalLevel();

function showNyDB() {
    if (!personalMovieDB.private) {
        console.log(personalMovieDB);
    }
}

showNyDB();
 
function writeYourGenres(){
    for( let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt (`Ваш любимы жанр под номером ${i + 1}.`);
    }
}

// console.log(personalMovieDB);


writeYourGenres();