'use strict';

console.clear();

let erikamusterfrau = new User('Musterfrau', 'Erika');
let maxmustermann = new User('Mustermann', 'Max');
let johndoe = new User('Doe', 'Jane');

// Objekte werden mit privaten Eigenschaften angezeigt
console.log(erikamusterfrau);
console.log(maxmustermann);
console.log(johndoe);

// undefined
console.log(erikamusterfrau._lastname);

// Uncaught SyntaxError: reference to undeclared private field or method #_lastname
// console.log(erikamusterfrau.#_lastname);

// public property
console.log(erikamusterfrau._category);

// Get mit Methodenaufruf ohne ()
console.log(erikamusterfrau.lastname);
console.log(maxmustermann.lastname);
console.log(johndoe.lastname);

// Set mit Zuweisung (Gleichheitszeichen)
console.log(johndoe.firstname = 'John');


//
addEventListener('DOMContentLoaded', () => {
  let newElementButton = document.createElement('button');
  let newElementOption = document.createElement('option');
  let selectArea = document.getElementById('username');
  let addTo = document.getElementsByTagName('form')[0];
  let lastname = document.getElementById('lastname');
  let firstname = document.getElementById('firstname');
  let fullName = document.getElementById('fullname');

  newElementButton.setAttribute('type', 'button');
  newElementButton.setAttribute('id', 'change');
  newElementButton.innerHTML = 'Ändern';
  addTo.appendChild(newElementButton);
  let newButton = document.getElementById('change');


  newButton.addEventListener('click', () => {
    let selection = eval(selectArea.value);

    lastname.value = selection.lastname;
    firstname.value = selection.firstname;
    fullName.value = selection.fullName;

  });

  let subButton = document.querySelector('[type="submit"]');
  subButton.addEventListener('click', () => {
    subButton.setAttribute('type', 'button');
    let createUser = lastname.value + firstname.value;
    createUser = createUser.toLowerCase();
    newElementOption.setAttribute('value', createUser);
    newElementOption.innerHTML = createUser;
    selectArea.appendChild(newElementOption);
    let username = createUser = new User(lastname.value,firstname.value);

    
    lastname.value = username.lastname;
    firstname.value = username.firstname;
    fullName.value = username.fullName;

  });


  // Template
  let templateButton = document.createElement('button');
  let bodyElement = document.getElementsByTagName('body')[0];

  templateButton.innerHTML = "Show template";
  templateButton.setAttribute('id', 'template-button');
  bodyElement.appendChild(templateButton);

  let templateButtonEvent = document.getElementById('template-button');
  templateButtonEvent.addEventListener('click', showContent);

});

function showContent(){
  let temp = document.getElementsByTagName('template')[0];
  let clon = temp.content.cloneNode(true);
  document.body.appendChild(clon);
}