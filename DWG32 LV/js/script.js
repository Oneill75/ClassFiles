'use strict';

let url = 'php/response.php';
let loginform = document.getElementById('loginform');
let infoparagraph = document.getElementById('info');

loginform.addEventListener('submit', (ev) => {
	ev.preventDefault();
	queryDatabase(ev.target.lastElementChild.value);
});

function queryDatabase(formSubmitValue) {
	
	console.log(formSubmitValue);
	
	let formTransmitted; // typeof formTransmitted === 'undefined',
						 // this is to send form data from login.html on login only,
						 // on logout an empty form is to be sent
	if(formSubmitValue == 'Login') { 
		formTransmitted = loginform;
	}

	let formData = new FormData(formTransmitted);
	// FormData() does not capture this button, so it must be added manually:
	formData.append('submit', loginform.lastElementChild.value);
	
	fetch(url, {
		method: 'POST',
		body: formData,
	}).then(async response => {
		// if (response.ok) { // that seems to be unnecessary
			let responseJSON = await response.json(); // must wait for response!
			console.log(responseJSON);
			infoparagraph.innerText = JSON.stringify(responseJSON);
			if(responseJSON['submit'] == 'Login') {
				loginform.lastElementChild.value = 'Logout';
			} else {
				loginform.lastElementChild.value = 'Login';
			}
		// }
	}).catch(console.error);
	
}
