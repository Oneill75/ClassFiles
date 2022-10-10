'use strict';

let summand1 = 13;
let summand2 = 5;
let summe = summand1 + summand2;

document.getElementsByTagName("p")[0].innerHTML = summand1 + " + " + summand2 + " = " + summe;

function addieren(zahl1,zahl2) {
  let sum = zahl1 + zahl2;
  console.log(sum);
  for (let index = 0; index <= sum; index++) {
    if (index == 0) {
      var neueZahl = 0;  
    }
    neueZahl += 10;
    console.log(neueZahl);
    

  }
}

addieren(summand1,summand2);

if (typeof i === 'undefined') {
  console.log("'i' is not defined");
} else {
  console.log(i);
}

try {
  console.log(neueZahl);
} catch (error) {
  console.log(error);
}

if (typeof i !== 'undefined') {
  console.log(i);
} else {
  console.log("'i' is not defined");
}