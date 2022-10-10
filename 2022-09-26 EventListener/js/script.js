"use strict";

window.addEventListener('load', () => {
// window.onload = () => {

  document.querySelectorAll("input[type='submit']")[0].addEventListener('click', (ev) => {
    ev.preventDefault();
    console.log(ev.target);
    console.log("Der Button funktioniert.");
  });

  document.querySelectorAll("input[type='range']")[0].addEventListener('change', regeln);
})

function regeln(rv){
  //rv.preventDefault();
  console.log(rv.target);
  console.log("Regeln");
  document.querySelector('output').value = rv.target.valueAsNumber;
}