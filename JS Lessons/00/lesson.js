var shamEl = document.getElementById('sham3d');
var imageEl = document.getElementById('image');
var hobbyEl = document.getElementById('hobby');
var cityListEl = document.getElementById("city-list");
var lastNameEl = document.getElementById('last-name');
var adressEl = document.getElementById('adress');
var firstNameEl = document.getElementById('first-name');
var numberList = document.getElementById(listId);
var listId = 'list';

function alertValue() {
console.log(shamEl.alt);
console.log(shamEl.src);
console.log(imageEl.innerHTML);
console.log(hobbyEl.value);
console.log(lastNameEl.value);
console.log(adressEl.value);
console.log(cityListEl.value);
console.log(firstNameEl.value);
}

lastNameEl.value = 'Benya';
cityListEl.value = 'Kiev';
alertValue();
//window.alert(lastNameEl.className);

lastNameEl.className = 'last-name-input error-input';

shamEl.src = 'https://c.ua/image/cache/catalog/PosokhovRoman/sonyPS/microsoft-xbox-series-x-1tb-500x500.jpg';
shamEl.title = 'xbox';

hobbyEl.value = 'Hello my dear friends';
imageEl.innerHTML = '<ul id="list"><li>1</li><li>2</li></ul>';


     //window.alert(numberList.innerHTML);