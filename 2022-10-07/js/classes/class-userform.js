'use strict';

// See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
class UserForm {
	
	//field declarations
	_allowedfields = ['email', 'password'];
	_mandatorybuttons = ['cancel', 'reset', 'submit'];
	_fieldlist;
		
	constructor(fieldlist) {
		this._fieldlist = this.validateFieldlist(fieldlist);
		console.log('this._fieldlist', this._fieldlist);
		//this.createHtmlEements(this._fieldlist)
	}

	validateFieldlist(fl) { // fl for fieldlist
		console.log('this._allowedfields:', this._allowedfields);
		console.log('fl:', fl);
		let tempfieldlist = [];
		fl.forEach((el, i) => {
			// Logical NOT - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT
			// Array.includes() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
			// Array.splice() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
			// Array.filter() - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
			// Conditional (ternary) operator - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
			console.log(el);
			if (!this._allowedfields.includes(el)) {
				console.log('Fehler -- Name:', el, ', Index:', i);
				fl.splice(i, 1, null);
				tempfieldlist = [...fl.filter( (el) => { return el != null; })]
				console.log(tempfieldlist, tempfieldlist.length); 
			}
		});
		return (tempfieldlist.length > 0 ? tempfieldlist : fl);
	}
	
	createHtmlElements(fl) { // fl for fieldlist

		console.log('Creating HTML Elements ...');
		
		document.addEventListener('DOMContentLoaded', () => {
		
			// Bauen Sie hier alle HTML-Elemente für ein Formular mit zwei Eingabefeldern für
			// E-Mail-Adresse und Passwort sowie mit den drei Schaltflächen „Abbrechen“,
			// „Zurücksetzen“ und „Senden“ zusammen und geben Sie sie aus.
			// document.createElement(...) usw.

			let formelement = document.createElement('form');
			let inputelement = [];
			let buttonelement = [];

			document.body.appendChild(formelement);
			
			fl.forEach((el, i) => {
				inputelement[i] = document.createElement('input');
				inputelement[i].id = el;
				inputelement[i].name = el;
				inputelement[i].type = el;
				formelement.appendChild(inputelement[i]);
			});
			
			this._mandatorybuttons.forEach((el, i) => {
				buttonelement[i] = document.createElement('button');
				buttonelement[i].type = 'button';
				buttonelement[i].id = el;
				buttonelement[i].name = el;
				buttonelement[i].innerHTML = el;
				formelement.appendChild(buttonelement[i]);
			});
			
			// Wie würden Sie vorher die drei Standard-Schaltflächen für
			// Abbrechen, Zurücksetzen und Senden vereinbaren?
			/* Siehe oben - private field #_mandatorybuttons */
			
			// Wie können Sie diese Methode aufrufen?
			/* Siehe oben im Constructor - this.createHtmlEements(this._fieldlist) */

		});
	}
}

