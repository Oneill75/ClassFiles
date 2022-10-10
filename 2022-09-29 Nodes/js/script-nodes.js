'use strict';

document.getElementById("newlist").addEventListener('click', () => {
  let createUl = document.createElement("ul");
  //createUl.innerHTML = '<li>test1</li><li>test1</li><li>test1</li>';
  //let createLi = document.createElement("li");
  for (let i = 0; i <= 2; i++){
    let newLi = document.createElement("ul");
    newLi.innerHTML = '<li>test ' + i + '</li>';
    createUl.appendChild(newLi);
  }
  document.getElementById('ulwrap').appendChild(createUl);

})

document.getElementById('fillthegap').addEventListener('click', addListItemText);

function addListItemText() {
  document.getElementById('myLe').innerHTML = "Lorem Ipsum";
}