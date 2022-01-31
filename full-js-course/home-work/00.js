"use strict";
let numberOfFilms = prompt('Сколько фильмов вы уже посмотрели', '');

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

let lastWatchedMovieA = prompt('Один из последних просмотреных фильмов?', ''),
    filmScoreC = prompt('На сколько цените фильм', ''),
    lastWatchedMovieB = prompt('Один из последних просмотреных фильмов?', ''),
    filmScoreD = prompt('На сколько цените фильм', '');

personalMovieDB.movies[lastWatchedMovieA] = filmScoreC;
personalMovieDB.movies[lastWatchedMovieB] = filmScoreD;

console.log(personalMovieDB);