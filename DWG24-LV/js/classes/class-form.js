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
		this.#_input.id = inp.name;
		this.#_input.name = inp.name;
		this.#_input.value = inp.value;
	}
 
	get getInput() {
		return this.#_input;
	}
	
	createFormElement() {
		let formElement = document.createElement(this.#_tagname);
		formElement.id = this.#_id;
		formElement.method = this.#_method;
		return formElement;
	}

} // end class Form

export {Form};
