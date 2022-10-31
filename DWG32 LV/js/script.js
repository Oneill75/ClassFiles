'use strict';

let url = 'php/response.php';
let loginform = document.getElementById('loginform');
let infoparagraph = document.getElementById('info');

loginform.addEventListener('submit', (ev) => {
	ev.preventDefault();
	queryDatabase(ev.target.lastElementChild.value);
});

/** Function to send a request to the response.php.
 * 
 * First it will print the formSubmitValue into the console.
 * If the formSubmitValue is "Login", it will send form data from login.html on login only.
 * If the formSubmitValue is "Logout", an empty form will be sent.
 * 
 * Sends a async request to the response.php with POST-method.
 * 
 * @param formSubmitValue String value for the IF-Statement to compare with 'Login'
 */
function queryDatabase(formSubmitValue) {
	
	console.log(formSubmitValue);
	
	let formTransmitted; // typeof formTransmitted === 'undefined'
	if(formSubmitValue == 'Login') { 
		formTransmitted = loginform;
	}

	let formData = new FormData(formTransmitted);
	formData.append('submit', loginform.lastElementChild.value);
	
	fetch(url, {
		method: 'POST',
		body: formData,
	}).then(async response => {
			let responseJSON = await response.json(); // must wait for response!
			console.log(responseJSON);
			infoparagraph.innerText = JSON.stringify(responseJSON);
			if(responseJSON['submit'] == 'Login') {
				loginform.lastElementChild.value = 'Logout';
			} else {
				loginform.lastElementChild.value = 'Login';
			}
	}).catch(console.error);
	
}
