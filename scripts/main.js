let myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';

// let iceCream = 'chocolate';
// if (iceCream === 'chocolate') {
//     alert('I love chocolate icecream');
// } else {
//     alert('But I love chocolate for the most');
// }

function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}

// document.querySelector('html').onclick = function(){
//     alert('clicked html');
// }
// let myHtml = document.querySelector('html');
// myHtml.onclick = function () {
//     alert('html clicked');
// }

let myImg = document.querySelector('img');
myImg.onclick = function () {
    let mySrc = myImg.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        myImg.setAttribute('src', 'images/firefox2.png');
    } else {
        myImg.setAttribute('src', 'images/firefox-icon.png');
    }
}

let myButton = document.querySelector('button');

function setUserName() {
    if (!localStorage.getItem('name')) {
        let myName = prompt('plz input your name');
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Welcome user' + myName;
    } else {
        let storedName = localStorage.getItem('name');
        myHeading.textContent = 'Welcome user' + storedName;
    }
}

myButton.onclick = function () {
    setUserName();
}