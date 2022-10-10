'use strict';

// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
class UserForm {
	
	//field declarations
	#_allowedfields = ['email', 'password'];
	_fieldlist;
		
	constructor(fieldlist) {
		this._fieldlist = this.#validateFieldlist(fieldlist);
		console.log('this._fieldlist', this._fieldlist);
	}


	// =========================================================================
	//	Die Methode #validateFieldlist überprüft die übergebene Fieldlist auf die vorgebebenen Parameter
	// 	Im Beispiel werden in der class-userform 2 Parameter ('email', 'password') erwartet.
	//  Von der script.js werden allerdings 3 Parameter übergeben (['email', 'password', 'nickname']).
	//  Das Array wird durch die Schleife einzeln durchgegangen und beim 3. Parameter (oder 2. Index im Array)
	//	mit fl.splice abgeschnitten. Somit fällt 'nickname' aus dem Array und 
	//  die ursprünglich erwarteten Parameter ('email', 'password') bleiben übrig.
	// =========================================================================

	#validateFieldlist(fl) { // fl for fieldlist
		console.log('this.#_allowedfields:', this.#_allowedfields);
		console.log('fl:', fl);
		fl.forEach((el, i) => {
			// Logical NOT - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT
			// Array.includes() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
			// Array.splice() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
			if (!this.#_allowedfields.includes(el)) {
				console.log('Fehler -- Name:', el, ', Index:', i);
				fl.splice(i, 1);
			}
		});
		return fl;
	}
	
	createHtmlEements(fl) { // fl for fieldlist
		// Bauen Sie hier alle HTML-Elemente für ein Formular mit zwei Eingabefeldern für
		// E-Mail-Adresse und Passwort sowie mit den drei Schaltflächen „Abbrechen“,
		// „Zurücksetzen“ und „Senden“ zusammen und geben Sie sie aus.
		// document.createElement(...) usw.

		let formEle = document.createElement('form');
		let eMailField = document.createElement('input');
		let passwordField = document.createElement('input');
		let submit = document.createElement('button');
		let reset = document.createElement('button');
		let cancel = document.createElement('button');
		let p1 = document.createElement('p');
		let p2 = document.createElement('p');
		let pBlank = document.createElement('p');

		formEle.setAttribute('method', 'post');
		document.body.appendChild(formEle);

		p1.innerHTML = 'E-Mail Adresse: ';
		formEle.appendChild(p1);

		eMailField.setAttribute('type', 'text');
		eMailField.setAttribute('placeholder','E-Mail Adresse');
		formEle.appendChild(eMailField);

		p2.innerHTML = 'Passwort: ';
		formEle.appendChild(p2);

		passwordField.setAttribute('type', 'password');
		passwordField.setAttribute('placeholder', 'Passwort');
		formEle.appendChild(passwordField);

		pBlank.innerHTML = '<br>';
		formEle.appendChild(pBlank);

		submit.setAttribute('type', 'submit');
		submit.innerHTML = 'Senden';
		formEle.appendChild(submit);

		reset.setAttribute('type', 'reset');
		reset.innerHTML = 'Zurücksetzen';
		formEle.appendChild(reset);


		// for demonstration purpose, this button does the exact same like reset
		cancel.setAttribute('type', 'reset');
		cancel.innerHTML = 'Abbrechen';
		formEle.appendChild(cancel);



		//
		// Wie würden Sie vorher die drei Standard-Schaltflächen für
		// Abbrechen, Zurücksetzen und Senden vereinbaren?
		//
		//
		//&
		// Wie können Sie diese Methode aufrufen?
		/*
				Im script.js über newForm.methodenname();
		*/

	}
}

