'use strict';

addEventListener("DOMContentLoaded", () => {
	document.getElementById('button1').addEventListener('click', () => {

		let url = "php/response.php";
		let options = {method:'POST'};

		fetchAsyncAwait(url, options);
		fetchAsyncThen(url, options);
		
	});

	document.getElementById('button2').addEventListener('click', () => {

		let url = "data/benutzer.json";
		let options = {method:'POST'};

		fetchAsyncAwait(url, options);
		fetchAsyncThen(url, options);
		
	});

	document.getElementById('button3').addEventListener('click', () => {

		let url = "docs/text.txt";
		let options = {method:'POST'};

		fetchAsyncAwait(url, options);
		fetchAsyncThen(url, options);
		
	});
});

// =============================================================================================
//	fetchAsyncAwait
// =============================================================================================

async function fetchAsyncAwait(url, options) {
	let response = await fetch(url, options);
	if (response.status === 200) {
		let daten = await response.text();
		if(typeof daten === 'string' || daten instanceof String) {
			document.getElementById('von_await_fetch').innerHTML = daten;
		} else {
			for (let schluessel in daten) {
				document.getElementById('von_await_fetch').innerHTML = schluessel + ': ' + daten[schluessel];
			};
		};
	};
};


// =============================================================================================
//  fetchAsyncThen	       // Not Working properly  // Wrong output
// =============================================================================================

function fetchAsyncThen(url, options) {
	let response = fetch(url, options)
	.then(response => response.text())
	.then(daten => { 
		document.getElementById('von_fetch_then').innerHTML = daten;
	});
};