/*
 * Quelle: https://javascript.info/bubbling-and-capturing
 *
 */

// Beachten Sie bitte die Verwendung von ` (backtick) und ${}!
// Siehe https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
// und https://developer.mozilla.org/en-US/docs/Web/API/console

for(let elem of document.querySelectorAll('*')) {
	elem.addEventListener('click', e => { e.currentTarget.style.backgroundColor = 'red'; alert(`Capturing: ${elem.tagName}`); }, true); // capture
	elem.addEventListener('click', e => { e.currentTarget.style.backgroundColor = 'white'; alert(`Bubbling: ${elem.tagName}`); }); // bubble
	
}
