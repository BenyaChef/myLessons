var input1El = document.getElementById('input1');
var input2El = document.getElementById('input2');
var input3El = document.getElementById('input3');
var myHeadEl = document.getElementById('myHead');
var aboutMeEl = document.getElementById('aboutMe');

/*
input1El.className = 'error';
input2El.className = 'error';
input3El.className = 'error';

/*
input1El = newValue;
input2El = newValue;
input3El = newValue;
*/

function setMyNameToAllInputs() {
    var newValue = 'Max';
    input1El.value = newValue;
    input2El.value = newValue;
    input3El.value = newValue;
}

function setMyLastNameToAllInputs() {
    var newValue = 'Bineckiy';
    input1El.value = newValue;
    input2El.value = newValue;
    input3El.value = newValue;

}


function changeValue(newValue) {

    input1El.value = newValue;
    input2El.value = newValue;
    input3El.value = newValue;
}

function setError(elemetParameter) {
    var elem = document.getElementById(elemetParameter);
    elem = elemetParameter;
    elem.className = 'error';
}

function timeOutError() {
    setError(aboutMeEl);
    setError(input1El);
}

function getSumm(x, y) {
    var summ = +x + +y;
    console.log(summ);
}

getSumm('23', '23');


//changeValue('Hello my dear friends');//

/*setError(input1El);
setError(myHeadEl);
setError(aboutMeEl);*/

//setTimeout(timeOutError, 4000,);//

/*function myName(){
    alert('Maxim');
}

setTimeout(myName, 3000);
*/
function hideElement(elementParametr) {
    var elem = document.getElementById(elementParametr);
    elem = elementParametr;
    elem.className = 'hide';
}

function showElement(elementParametr) {
    var elem = document.getElementById(elementParametr);
    elem = elementParametr;
    elem.className = 'show';
}

function intervalTimer() {
    var elem = document.getElementById('input1');
    elem.value = Number(elem.value) + 1;
}

hideElement(input2El);

showElement(input2El);

setInterval(intervalTimer, 1000);

function deletElement(elemetParameter) {
    var element = document.getElementById(elemetParameter);
    element = elemetParameter;
    if (element != null) {
        element.remove();
    }

}

//deletElement(aboutMeEl);

function changeClassName(id, className) {
    var element = document.getElementById(id);
    if (element !== null && element !== undefined) {
        element.className = className;
    }
}

var idElemetHTML = 'aboutMe';
changeClassName(idElemetHTML, 'hide-element');

var arrayFinde = [input1El, input2El, input3El, myHeadEl, aboutMeEl];

function elementRemove(valueForDelete) {

    for (var i = 0; i < arrayFinde.length; i++) {
        if (arrayFinde[i].value === valueForDelete) {
            arrayFinde[i].remove();
        } else if (arrayFinde[i].value === valueForDelete) {
            arrayFinde[i].remove();
        }

    }
}

function elementClassRemove() {
    for (var i = 0; i < arrayFinde.length; i++) {
        if (arrayFinde[i].className === "hey") {
            arrayFinde[i].remove();
        }
    }

}


elementRemove("");
//elementClassRemove();

function hasClassHey(tagName) {
    var el = document.getElementsByTagName(tagName);
    for (var i = 0; i < el.length; i++) {
        if (el[i].className === "hey") {
            console.log("true");
        } else {
            console.log("false");
        }
    }
}

hasClassHey();








let predicat = (el) => el === 'hey';

function removeElementIfConditionsTrue(arr, callback) {
    let el = document.querySelectorAll(arr);
    for (let i = 0; i < el.length; i++) {
        if (callback(el[i].className)) {
            el[i].remove();
        }
    }
}
var elements = ['input', 'div', 'textarea'];
removeElementIfConditionsTrue(elements, predicat);
