"use strict";

// Aufgabe 1
console.log("Anzahl an <h2> Elementen: ", document.getElementsByTagName("h2").length);
console.log("Anzahl an <nav> Elementen: ", document.getElementsByTagName("nav").length);
console.log("Anzahl an <p> Elementen: ", document.getElementsByTagName("p").length);
console.log("Anzahl an footer Klassen: ", document.getElementsByClassName("footer").length);
console.log("Anzahl an Elementen mit id 'important' ", document.querySelectorAll("[id^='important']").length);

// Aufgabe 2
document.getElementsByTagName("p")[1].innerHTML = "<strong><em><code>innerHTML</code> ersetzt. </em></strong>";
document.querySelectorAll(["p[class='footer'"])[0].innerHTML = "<strong><code>innerHTML</code> ersetzt. </em></strong>";

// Aufgabe 3
document.getElementsByTagName("li")[2].innerHTML += "<strong><em><code>innerHTML</code> erweitert. </em></strong>";
document.querySelectorAll(["p[class='footer'"])[1].innerHTML += "<strong><code>innerHTML</code> erweitert. </em></strong>";

// Zusatzaufgabe
console.log(document.getElementsByTagName("*"))