'use strict';

class Form {
	
	#_method;
	#_id;
	#_input;
	#_tagname = 'FORM';
		
	constructor(method, id) {
		this.#_method = method;
		this.#_id = id;
	}
	
	get method() {
		return this.#_method;
	}

	get id() {
		return this.#_id;
	}

	get tagname() {
		return this.#_tagname;
	}

 	set setInput(inp) {
		this.#_input = document.createElement('input');
		this.#_input.type = inp.type;
		this.#_input.name = inp.name;
		this.#_input.value = inp.value;
	}

	get input() {
		return this.#_input;
	}
 
/*	set setButton(type, name = '', value = '', innertext = '') {
		this.appendChild('button');
	} */
}

export {Form};
