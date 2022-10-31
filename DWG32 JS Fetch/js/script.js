'use strict';

let url = 'php/response.php';
let loginform = document.getElementById('loginform');
let loginbutton = document.getElementsByName('submit')[0];
let infopart = document.getElementById('info');

loginform.addEventListener('submit', (ev) => {
	ev.preventDefault();
	queryDatabase();
});

// loginform.addEventListener('submit', (ev) => {
// 	ev.preventDefault();
// 	queryDatabase();
// });

function queryDatabase() {
	
	let formData = new FormData(loginform);
	
	fetch(url, {
		method: 'POST',
		body: formData,
		// headers: {'content-type': 'application/json'}
	}).then(response => {
		if (response.ok) {
			loginbutton.setAttribute('value', 'Logout');
			loginbutton.setAttribute('id', 'Logout')
			console.log(JSON.stringify(response));				// Daten werden nicht korrekt übertragen?!
			infopart.innerHTML = "Bitte die Kommentare am Ende der script.js lesen.";
		}
	})
}

// Das Array ist leer?! 
// Login funktioniert soweit (es wird der Username und das Passwort geprüft), allerdings werden die Daten im erstellten Array nicht in der Response übertragen.
// mit JSON.parse kommt die Fehlermeldung "JSON.parse: unexpected character at line 1 column 2 of the JSON data"
// mit JSON.stringify bleibt das angezeigte Object leer {} (in der Konsole zu sehen)