'use strict';

document.addEventListener('DOMContentLoaded', () => {
	
	let infoElement = document.getElementById('info');

	let url = 'data/benutzer.json'; // https://en.wikipedia.org/wiki/List_of_placeholder_names_by_language

	/***/
	
	let response = fetch(url);
	console.log(response);
	
	response = fetch(url)
		.then(response => response.text())
		.then(daten => {console.log(daten); infoElement.innerText += daten;});
	

  // weitere Möglichkeit
  /*
  response
		.then(response => response.text())
		.then(daten => {console.log(daten); infoElement.innerText += daten;});
  */

    url= 'data/text.txt';

    response = fetch(url)
		.then(response => response.text())
    .catch(error => console.log(error));    
});

async function fetchText(url) {
  let response = await fetch(url);
  console.log(response.status);
  console.log(response.statusText);
}

fetchText('data/benutzer.json');

function uhrzeit() {
  let jetzt = new Date(),
      h = jetzt.getHours(),
      m = jetzt.getMinutes(),
      s = jetzt.getSeconds(),
      d = jetzt.getDate(),
      mo = jetzt.getMonth(),
      y = jetzt.getFullYear();
  m = fuehrendeNull(m);
  s = fuehrendeNull(s);
  d = fuehrendeNull(d);
  mo = fuehrendeNull(mo);
  y = fuehrendeNull(y);
  document.getElementById('uhr').innerHTML = d + "." + mo + "." + y + " " + h + ':' + m + ':' + s;
  setTimeout(uhrzeit, 500);
}

function fuehrendeNull(zahl) {
  zahl = (zahl < 10 ? '0' : '' )+ zahl;  
  return zahl;
}

uhrzeit();