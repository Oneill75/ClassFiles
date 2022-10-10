'use strict';

let textArea = document.getElementById('textArea');
localStorage.setItem('textAreaValueJSON', '');
let localStorageJSON = [];
let elemSelect = document.getElementById('textversions');

document.getElementById('store').addEventListener('click', saveToLocalStorage);
document.getElementById('load').addEventListener('click', loadFromLocalStorage);
document.getElementById('clear').addEventListener('click', clearLocalStorage);

function saveToLocalStorage() {
	// Ergänzen Sie hier den Code zum Erweitern des JSON-Elements im Local Storage. 
	localStorage.setItem('textAreaValue' + (localStorage.length + 1), textArea.value);
	localStorageJSON.push(textArea.value);
	localStorage.setItem('textAreaValueJSON', JSON.stringify(localStorageJSON));
	showLocalStorage(); // Sieh unten.
	let newOpt = document.createElement('option');
	fillSelection(newOpt);
}

function fillSelection(newOpt) {
	for (let i = 0; i < localStorageJSON.length; i++){
		newOpt.value = i + 1;
		newOpt.innerHTML = localStorageJSON[i];
		console.log(newOpt);
		elemSelect.appendChild(newOpt);
	}
}

function loadFromLocalStorage() {
	// Ergänzen Sie hier den Code zum Auslesen des JSON-Elements im Local Storage.
    // Füllen Sie zunächst die <select>-Liste und lassen sie das daraus ausgewählte
	// Element in die <textarea> kopieren.
	let index = elemSelect.selectedIndex;
	console.log(localStorageJSON[index]);
	textArea.innerHTML = localStorageJSON[index];
	textArea.value = localStorageJSON[index];
		
}

function clearLocalStorage() {
	localStorage.clear();
}

function showLocalStorage() {
	console.clear();
	// Ergänzen Sie hier den Code zur Ausgabe der JSON-Objekte in der Browser-Konsole.
	console.log(localStorageJSON);
}
