'use strict';

let infojs = document.getElementById("infojs");
let myButton = document.getElementById("clearcookies");
let cookieinfo = document.cookie;

document.cookie = "name=jscookie;";

infojs.innerHTML = document.cookie;

myButton.addEventListener("click", () => {
  document.cookie = "name=jscookie; expires=Thu, 01 Jan 1970 00:00:00 GMT;";
  document.cookie = "phpcookie='irgendwas von irgendwo'; expires=Thu, 01 Jan 1970 00:00:00 GMT;";
  infojs.innerHTML = document.cookie;
})

