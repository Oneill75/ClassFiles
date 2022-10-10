'use strict';

// Store all HTML elements in an array
let elements = document.getElementsByTagName('*');

// Add changeBackGround as a click listener
for (let element of elements) {
	// capture false by default
	element.addEventListener('click', changeBackGround, true);
}

function changeBackGround(ev) {
	console.log('event.srcElement.localName:', ev.srcElement.localName);
	console.log('event.bubbles:', ev.bubbles);
	console.log('event.eventPhase:', ev.eventPhase); // capturing (1), target (2) and bubbling (3) phases
	console.log('this.tagName:', this.tagName);
	// Always true
	// console.log(this === ev.currentTarget);
	// true when currentTarget and target are the same object
	// console.log(this === ev.target);
	let test = this;
	colorChange(test);
}


/*
 *
 * Die betroffenen Elemente werden nicht einzeln (nacheinander) farblich verändert.
 * Kann man dies für den schrittweisen Farbwechsel nutzen?
 * 
 */

let delay = time => new Promise(response => setTimeout(response, time));

async function colorChange(test){
	let elementsNew = document.body.querySelectorAll('*');
	for (let element of elementsNew) {
		await delay(1000);
		element.style.cssText = 'animation-name: changeBackGround; animation-duration: 1s; animation-fill-mode: forwards;';
		//document.body.style.backgroundColor = 'red';
	}
	return;
};