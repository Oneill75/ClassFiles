class User {
	
	#_lastname
	#_firstname
	 _category = 'user';
		
	constructor(lastname, firstname) {
		this.#_lastname = lastname;
		this.#_firstname = firstname;
	}
	
	get lastname() {
		return this.#_lastname;
	}

	get firstname() {
		return this.#_firstname;
	}

	get fullname() {
		return `${this.#_lastname}, ${this.#_firstname}`;
	}
	
 	set lastname(ln) { // ln for lastname
		this.#_lastname = ln;
	}
 
	set firstname(fn) { // fn for firstname
		this.#_firstname =fn;
	}
}

export {User};
