"use strict";

const cookies = document.cookie;

// =============================== Example 1 =============================
// Buttons example 1
const outputareaEx1 = document.getElementById("outputarea");
let showCookieButton = document.getElementById("showCookies");
let clearCookieButton = document.getElementById("clearCookies");

// Eventlistener for the various buttons
// Show cookies
showCookieButton.addEventListener("click", showCookies);

// Clear cookies output
clearCookieButton.addEventListener("click", clearOutputCookies);


/**
 * Function to display the Cookies on the website
 */
function showCookies() {
  // Creating the cookies as given in the Examples from https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
  // slightly altered (removed SameSite=None and Secured settings)
  document.cookie = "name=oeshger";
  document.cookie = "favorite_food=tripe";
  outputareaEx1.innerHTML = document.cookie;
}

/**
 * Function used to clear the Cookie output on the website
 */
function clearOutputCookies() {
  outputareaEx1.innerHTML = "";
}

// =============================== Example 2 =============================
// Buttons example 2
const outputareaEx2 = document.getElementById("outputareaEx2");
let showCookieButtonEx2 = document.getElementById("showCookiesEx2");
let clearCookieButtonEx2 = document.getElementById("clearCookiesEx2");

// Eventlistener for the various buttons
// Show cookies
showCookieButtonEx2.addEventListener("click", showCookieEx2);

// Clear cookies output
clearCookieButtonEx2.addEventListener("click", clearCookieEx2);

/**
 * Function to display the Cookies on the website
 */
function showCookieEx2() {
  document.cookie = "test1=Hello";
  document.cookie = "test2=World";
  let cookieValue = document.cookie.split("; ").find((row) => row.startsWith('test2='))?.split('=')[1];
  outputareaEx2.innerHTML = cookieValue;
}

/**
 * Function used to clear the Cookie output on the website
 */
function clearCookieEx2() {
  outputareaEx2.innerHTML = "";
}

// =============================== Example 3 & Example 4 =============================
// Buttons example 3/4
const outputareaEx3 = document.getElementById("outputareaEx3");
let showCookieButtonEx3 = document.getElementById("showCookiesEx3");
let clearCookieButtonEx3 = document.getElementById("clearCookiesEx3");
let resetCookieButtonEx3 = document.getElementById("resetCookiesEx3");

// Eventlistener for the various buttons
// Show cookies
showCookieButtonEx3.addEventListener("click", showCookieEx3)
// Clear cookies output
clearCookieButtonEx3.addEventListener("click", clearCookieEx3);
// Reset the Cookie
resetCookieButtonEx3.addEventListener("click", resetCookieEx3);

/**
 * Function to once display the example 3 Cookie on the website
 * 
 * After hitting the clear Button, it wont work again until the reset button is clicked
 */
function showCookieEx3() {
  if(!document.cookie.split('; ').find((row) => row.startsWith('doSomethingOnlyOnce'))) {
    document.cookie = "doSomethingOnlyOnce=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    outputareaEx3.innerHTML = "Only Once";
  }
}

/**
 * Function used to clear the Cookie output on the website
 */
function clearCookieEx3() {
  outputareaEx3.innerHTML = "";
}

/**
 * Reset the cookie so it can be created again
 */
function resetCookieEx3() {
  document.cookie = "doSomethingOnlyOnce=true; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  outputareaEx3.innerHTML = "Reset";
}

// =============================== Example 5 =============================
// Buttons example 5
const outputareaEx5 = document.getElementById("outputareaEx5");
let showCookieButtonEx5 = document.getElementById("showCookiesEx5");
let clearCookieButtonEx5 = document.getElementById("clearCookiesEx5");

// Eventlistener for the various buttons
// Show cookies
showCookieButtonEx5.addEventListener("click", showCookieEx5)
// Clear cookies output
clearCookieButtonEx5.addEventListener("click", clearCookieEx5);

/**
 * Function to check if a cookie exists and display it on the website
 */
 function showCookieEx5() {
  document.cookie = "reader=1";
  if(document.cookie.split(';').some((item) => item.trim().startsWith('reader='))) {
    outputareaEx5.innerHTML = "The Cookie 'reader' exists";
  }
}

/**
 * Function used to clear the Cookie output on the website
 */
function clearCookieEx5() {
  outputareaEx5.innerHTML = "";
}

// =============================== Example 6 =============================
// Buttons example 6
const outputareaEx6 = document.getElementById("outputareaEx6");
let showCookieButtonEx6 = document.getElementById("showCookiesEx6");
let clearCookieButtonEx6 = document.getElementById("clearCookiesEx6");

// Eventlistener for the various buttons
// Show cookies
showCookieButtonEx6.addEventListener("click", showCookieEx6)
// Clear cookies output
clearCookieButtonEx6.addEventListener("click", clearCookieEx6);

/**
 * Function to check if a cookie exists and display it on the website
 */
 function showCookieEx6() {
  if(document.cookie.split(';').some((item) => item.includes('reader=1'))) {
    outputareaEx6.innerHTML = "The Cookie 'reader' has a value of 1";
  }
}

/**
 * Function used to clear the Cookie output on the website
 */
function clearCookieEx6() {
  outputareaEx6.innerHTML = "";
}