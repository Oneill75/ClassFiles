'use strict';

document.addEventListener('DOMContentLoaded', () => {

	document.getElementById('button1').addEventListener('click', () => {

		let url = 'php/response.php';
		let options = {method: 'POST'};
		fetchAsyncAwait(url, options);
		
	});
	document.getElementById('button2').addEventListener('click', () => {

		let url = 'data/benutzer.json';
		let options = {method: 'POST'};
		fetchAsyncAwait(url, options);
			
	});

});

async function fetchAsyncAwait(url, options) {
	let daten, jsonParsed;
	let response = await fetch(url, options);
	if (response.status === 200) {
		daten = await response.text();
		console.log('JSON-String-Datentyp:', typeof daten);
		document.getElementById('von_await_fetch').innerHTML = '<b>JSON-String:</b><br>' + daten;

		//JSON pars and stringify
		document.getElementById('von_await_fetch').innerHTML += '<br><br>' + '<b>JSON geparst:</b><br>';
		jsonParsed = JSON.parse(daten);
		console.log('JSON geparst von Text:');
		console.log('Datentyp:', typeof jsonParsed);
		for (let obj in jsonParsed) {
			console.log(jsonParsed[obj]);
			for (let key in jsonParsed[obj]) {
				document.getElementById('von_await_fetch').innerHTML += key + ': ' + jsonParsed[obj][key] + '<br>';
			}
		}
		document.getElementById('von_await_fetch').innerHTML += '<br>' + '<b>JSON \'stringified\':</b><br>';
		document.getElementById('von_await_fetch').innerHTML += JSON.stringify(jsonParsed);

	} else {
		daten = "Fehler";
	}
}


