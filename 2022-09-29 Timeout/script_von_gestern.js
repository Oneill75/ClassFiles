'use strict';

//document.addEventListener('DOMContentLoaded', () => {
document.getElementById('button1').addEventListener('click', () => {
	
	let infoElement = document.getElementById('info');

	let url = 'data/benutzer.json'; // https://en.wikipedia.org/wiki/List_of_placeholder_names_by_language

	/***/
	
	let response = fetch(url);
	console.log(response);
	console.log(response.status);
	console.log(response.statusText);
	
	response = fetch(url)
		.then(response => response.text())
			.then((daten) => {console.log(daten); infoElement.innerText = daten;});
	
	/*
	response
		.then(response => response.text())
		.then((daten) => {console.log(daten); infoElement.innerText = daten;});
	*/
	
});

async function fetchText(url) {
	let response = await fetch(url);
	console.log(response.status);
	console.log(response.statusText);
	
	if (response.status === 200) {
		let daten = await response.text();
		console.log('aus async function:', daten);
	}
}

fetchText('data/benutzer.json');


document.querySelector('button[id="stopClockButton"]').addEventListener('click',uhrStoppen);
let timeOut;


function uhrzeit() {
    let jetzt = new Date(),
		d = jetzt.getDate(),
		mo = jetzt.getMonth() + 1,
		y = jetzt.getFullYear(),
		h = jetzt.getHours(),
		m = jetzt.getMinutes(),
		s = jetzt.getSeconds();
	d = fuehrendeNull(d);	
	mo = fuehrendeNull(mo),
	m = fuehrendeNull(m);
    s = fuehrendeNull(s);
    let clockString = d + '.' + mo + '.' + y + ', ' + h + ':' + m + ':' + s;
    document.getElementById('uhr').innerText = '<b>' + clockString + '</b>';
    document.getElementById('uhr').innerHTML = '<b>' + clockString + '</b>';
    timeOut = setTimeout(uhrzeit, 500);
  }
  
function fuehrendeNull(zahl) {
	zahl = (zahl < 10 ? '0' : '' ) + zahl;  
	return zahl;
}

function uhrStoppen(){
  clearTimeout(timeOut);
}

uhrzeit();
