'use strict';

let anzahlH2;
let anzahlNAV;
let anzahlP;

let anzahlClassFooter, anzahlIdImportant;

console.clear(); // See https://developer.mozilla.org/en-US/docs/Web/API/console

console.groupCollapsed('%cAnzahl aller ...', 'color: red; font-weight: 900; text-decoration: underline;');



// Anzahl aller <h2>-Elemente
console.log('\n%c<h2>%c-Elemente\n===================================================', 'font-weight: 900;', '');

anzahlH2 = document.getElementsByTagName('h2').length;
console.log("document.getElementsByTagName('h2').length:", anzahlH2);

anzahlH2 = document.querySelectorAll('h2').length;
console.log("document.querySelectorAll('h2').length:", anzahlH2);



// Anzahl aller <nav>-Elemente
console.log('\n<nav>-Elemente\n===================================================');

anzahlNAV = document.getElementsByTagName('nav').length;
console.log("document.getElementsByTagName('nav').length:", anzahlNAV);

anzahlNAV = document.querySelectorAll('nav').length;
console.log("document.querySelectorAll('nav').length:", anzahlNAV);



// Anzahl aller <p>-Elemente
console.log('\n<p>-Elemente\n===================================================');

anzahlP = document.getElementsByTagName('p').length;
console.log("document.getElementsByTagName('p').length:", anzahlP);

anzahlP = document.querySelectorAll('p').length;
console.log("document.querySelectorAll('p').length:", anzahlP);



// Anzahl aller Elemente mit class='footer'
console.log('\nElemente mit class="footer"\n===================================================');

anzahlClassFooter = document.getElementsByClassName('footer').length;
console.log("document.getElementsByClassName('footer').length:", anzahlClassFooter);

anzahlClassFooter = document.querySelectorAll('.footer').length;
console.log("document.querySelectorAll('.footer').length:", anzahlClassFooter);



// Anzahl aller Elemente mit id='important'
console.log('\nElemente mit id="important"\n===================================================');

anzahlIdImportant = document.querySelectorAll('#important').length;
console.log("document.querySelectorAll('.#important').length:", anzahlIdImportant);



// Anzahl aller Elemente mit class-Attribut
console.log('\nElemente mit class-Attribut\n===================================================');
console.log("document.querySelectorAll('*[class]').length:", document.querySelectorAll('*[class]').length);



// Anzahl aller Elemente mit id-Attribut
console.log('\nElemente mit id-Attribut\n===================================================');
console.log("document.querySelectorAll('*[id]').length:", document.querySelectorAll('*[id]').length);

console.groupEnd();



console.groupCollapsed('%cLists und Collections', 'color: red; font-weight: 900; text-decoration: underline;');

console.groupCollapsed('%cAlle HTML-Elemente', 'color: blue; font-weight: 900; text-decoration: dashed underline;');
console.log(document.querySelectorAll('*'));
console.log(document.getElementsByTagName('*'));
console.groupEnd();

console.groupCollapsed('%cAlle HTML-Elemente innerhalb %c<body>', 'color: blue; font-weight: 900; text-decoration: dashed underline;', 'background: yellow; text-decoration: dashed underline blue');
console.log(document.body.querySelectorAll('*'));
console.log(document.body.getElementsByTagName('*'));
console.groupEnd();

console.groupEnd();



let listeAllerHtmlElemente = document.querySelectorAll('*');
let anzahlAllerHtmlElemente = listeAllerHtmlElemente.length;

console.groupCollapsed('%cAlle HTML Elemente per Zählerschleife', 'color: red; font-weight: 900; text-decoration: underline;');
for(let i = 0; i < anzahlAllerHtmlElemente; i++) {
    console.log(listeAllerHtmlElemente[i].tagName);
}
console.groupEnd();

console.groupCollapsed('%cAlle HTML Elemente aus forEach()', 'color: red; font-weight: 900; text-decoration: underline;');
listeAllerHtmlElemente.forEach(listenElement => {
    console.log(listenElement.tagName);
});
console.groupEnd();



//innerHTML ersetzen
document.getElementsByTagName('p')[1].innerHTML = '<strong><em><code>innerHTML</code> ersetzt.</em></strong>';
// oder
// document.querySelectorAll('p')[1].innerHTML = '<strong><em><code>innerHTML</code> ersetzt.</em></strong>';
document.querySelectorAll('p.footer')[0].innerHTML = '<strong><em><code>innerHTML</code> ersetzt.</em></strong>';



//innerHTML ergänzen
document.getElementsByTagName('li')[2].innerHTML += ' ' + '<strong><em><code>innerHTML</code> erweitert.</em></strong>';
// oder
// document.querySelectorAll('li')[2].innerHTML += ' <strong><em><code>innerHTML</code> erweitert.</em></strong>';
document.querySelectorAll('p.footer')[1].innerHTML += ' <strong><em><code>innerHTML</code> erweitert.</em></strong>';
