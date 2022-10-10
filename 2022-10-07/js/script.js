'use strict';

let newForm = new UserForm(['id', 'email', 'password', 'nickname', 'country']);
let newRegisterForm = new RegisterForm(['id', 'email', 'password', 'nickname', 'country'],['username','validatepassword']);

newForm.createHtmlElements(newForm._fieldlist);
newRegisterForm.createHtmlElements(newRegisterForm._fieldlist);