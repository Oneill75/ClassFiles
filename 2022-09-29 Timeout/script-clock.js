'use strict';

let changer = 1;
let interval;
// document.querySelector('button[id="stopClockButton"]').addEventListener('click',uhrStoppen);

uhrStarten();

function uhrzeit() {
  let jetzt = new Date(),
    d = jetzt.getDate(),
    mo = jetzt.getMonth() + 1,
    y = jetzt.getFullYear(),
    h = jetzt.getHours(),
    m = jetzt.getMinutes(),
    s = jetzt.getSeconds();
	d = fuehrendeNull(d);	
	mo = fuehrendeNull(mo);
	m = fuehrendeNull(m);
  s = fuehrendeNull(s);
  let clockString = d + '.' + mo + '.' + y + ', ' + h + ':' + m + ':' + s;
  document.getElementById('textClock').innerText = '<b>' + clockString + '</b>';
  document.getElementById('htmlClock').innerHTML = '<b>' + clockString + '</b>';
}
  
function fuehrendeNull(zahl) {
	zahl = (zahl < 10 ? '0' : '' ) + zahl;  
	return zahl;
}

function uhrStarten(){
  document.querySelector('#stopClockButton').innerHTML = "Stoppe die Uhr!"
  document.querySelector('button[id="stopClockButton"]').addEventListener('click',uhrStoppen, {once: true}); 
  interval = setInterval(uhrzeit, 1000);
}

function uhrStoppen(){
  clearInterval(interval);
  document.querySelector('#stopClockButton').innerHTML = "Uhr starten!"
  document.querySelector('button[id="stopClockButton"]').addEventListener('click',uhrStarten, {once: true});
}


