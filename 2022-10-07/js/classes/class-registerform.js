'use strict';

class RegisterForm extends UserForm {

  _allowedextfields = ['username','validatepassword'];
  
  constructor(fieldlist, extfieldlist) {
		super(fieldlist);
    this._allowedfields = [...this._allowedextfields];
    this._extfieldlist = this.validateFieldlist(extfieldlist);
    this._fieldlist = [...this._fieldlist,...this._extfieldlist];
    console.log(this._fieldlist);
		//super.createHtmlEements(super._extfieldlist)
	}

}