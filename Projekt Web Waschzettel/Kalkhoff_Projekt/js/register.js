// =============================== Register a new User ===============================

const usernameField = document.getElementById("Username");
const passwordField = document.getElementById("Password");
const loginBox = document.getElementById("loginbox");
const emailField = document.createElement("input"); // Field to enter the E-Mail Address
const fnameField = document.createElement("input"); // Field to enter the first name
const lnameField = document.createElement("input"); // Field to enter the last name
const register = document.createElement("button"); // Button to register a new User

newUserButton = document.getElementById("newUser");
loginButton = document.getElementById("login");

newUserButton.addEventListener("click", () => {
  passwordField.required = true;

  usernameField.readOnly = true;
  usernameField.value = "vorname.nachname";
  
   
  // Setting the attributes for and adding the E-Mail field to the Website
  emailField.setAttribute("type","text");
  emailField.setAttribute("name","Email");
  emailField.setAttribute("placeholder","E-Mail Addresse");
  emailField.required = true;

  usernameField.insertAdjacentElement("afterend", emailField)  

  // Setting the attributes for and adding the last name field to the Website
  lnameField.setAttribute("type","text");
  lnameField.setAttribute("name","Lastname");
  lnameField.setAttribute("placeholder","Nachname");
  lnameField.required = true;

  usernameField.insertAdjacentElement("afterend", lnameField);   

  // Setting the attributes for and adding the first name field to the Website
  fnameField.setAttribute("type","text");
  fnameField.setAttribute("name","Firstname");
  fnameField.setAttribute("placeholder","Vorname");
  fnameField.required = true;

  usernameField.insertAdjacentElement("afterend", fnameField);
  
  // Setting the attributes for and adding the registerbutton to the Website
  register.setAttribute("type","submit");
  register.setAttribute("id","register");
  register.setAttribute("formmethod","post");
  register.innerHTML = "Registrieren";
  passwordField.insertAdjacentElement("afterend", register);

  newUserButton.remove();
  loginButton.remove();
})

// replaces vorname before the dot in username with the input
fnameField.addEventListener("input", () => {
  test = usernameField.value;
  replaced = test.replace(/^.+\./,fnameField.value+".");
  usernameField.value = replaced;
  console.log(replaced);
});

// replaces nachname after the dot in username with the input
lnameField.addEventListener("input", () => {
  test = usernameField.value;
  replaced = test.replace(/\..*/,"."+lnameField.value);
  usernameField.value = replaced;
});

register.addEventListener("click", () => {
  verifyPassword(passwordField.value);
  // loginBox.setAttribute("action", "php/db_connect.php");
});

// ================================================================= Functions =================================================================


/** Checks if the Password meets all requirements.
 * 
 * Checks if the given password contains at least 1 uppercase letter, 1 numeral and 1 special character.
 * 
 * @param {String} password contains the password as a string.
 */
function verifyPassword(password) {
  str = password;
  pattern1 = /(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{12,}).*$/g;
  console.log(str);
  if (pattern1.test(str)){
    console.log("password cool");
  } else {
    console.log("password not cool");
  }
}