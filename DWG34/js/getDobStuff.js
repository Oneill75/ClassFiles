'use strict';

let url = 'php/response.php';
let dobForm = document.getElementById('dobForm');
let infoparagraph = document.getElementById('info');

dobForm.addEventListener("submit", (ev) => {
    ev.preventDefault();
    getDobStuff();
});

function getDobStuff(){
    let formdata = new FormData(dobForm);
    fetch(url, {
		method: 'POST',
		body: formdata
	}).then(async response => {
		let responseJSON = await response.json();
		console.log(responseJSON);
		infoparagraph.innerText = JSON.stringify(responseJSON);
    });
}

module.exports = {getDobStuff};