'use strict';

let eTextarea = document.getElementById('text1').textContent;
console.log(document.getElementById('text1'))

document.getElementById('save').addEventListener('click', () => {
  localStorage.setItem('savedText', eTextarea);
  document.getElementById('text1').innerText = '';
}); 

document.getElementById('load').addEventListener('click', () => {
  let newText = localStorage.getItem('savedText');
  document.getElementById('text1').innerText = newText;
}); 