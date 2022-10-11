/* modules use strict mode automatically */
import {User} from './classes/class-user.js';
import {Form} from './classes/class-form.js';

console.clear();

function Users() {
	this.erikamusterfrau = new User('Musterfrau', 'Erika');
	this.maxmustermann = new User('Mustermann', 'Max');
	this.johndoe = new User('Doe', 'John');
	// console.log(this);
}

const U = new Users();
const F = new Form('post', 'form01');

let newform = F.createFormElement();
console.log(newform);
F.setInput = {'type': 'text', 'name':'textinput', 'value':'ein Vorgabewert'};
newform.appendChild(F.getInput);

document.addEventListener('DOMContentLoaded', () => {
		
	document.forms[0].reset();
	
	F.setInput = {'type': 'range', 'name':'range', 'value':'0'};
	document.forms[0].insertBefore(F.getInput, document.forms[0].lastElementChild);

	document.body.appendChild(newform);
	
	let elementUsername = document.querySelector('#username');
	let elementLastname = document.querySelector('#lastname');
	let elementFirstname = document.querySelector('#firstname');
	let elementFullname = document.querySelector('#fullname');
	
	elementUsername.addEventListener('change', (ev) => {
		if (typeof ev.target.value != 'undefined') {
			let currentuser = U[ev.target.value];
			console.log('typeof currentuser:', typeof currentuser);
			console.log('Current user:', currentuser);
			elementLastname.value = currentuser.lastname;
			elementFirstname.value = currentuser.firstname;
			elementFullname.value = currentuser.fullname;
			
		}
	});
	
});

let consolelog = true;

if (consolelog) {

	console.log('Objekte werden mit privaten Eigenschaften angezeigt:');
	console.log(U['erikamusterfrau']);
	console.log(U['maxmustermann']);
	console.log(U['johndoe']);

	console.log('undefined: objekt._lastname');
	console.log(U['erikamusterfrau']._lastname);

	// Uncaught SyntaxError: reference to undeclared private field or method #_lastname
	// console.log(U['erikamusterfrau'].#_lastname);

	console.log('public property: _category');
	console.log(U['erikamusterfrau']._category);

	console.log('Get mit Methodenaufruf ohne (): objekt.lastname');
	console.log(U['erikamusterfrau'].lastname);
	console.log(U['maxmustermann'].lastname);
	console.log(U['johndoe'].lastname);

	console.log('Set mit Zuweisung (Gleichheitszeichen): objekt.firstname = \'String\':');
	console.log(U['johndoe'].firstname = 'Heinrich');

}
