'use strict';

// ===============================================================================================
// Funktionsaufrufe via Eventlistener
// ===============================================================================================

document.getElementById('newlist').addEventListener('click', addNewUl, {once: true});


document.getElementById('fillthegap').addEventListener('click', () => {
	addListItemText('Dies ist ein eingefügter Text.');
}, {once: true});

document.getElementById('newfirstlistitem').addEventListener('click', addNewFirstListItem, {once: true});

document.getElementById('removelastlistitem').addEventListener('click', removeLastListItem, {once: true});

addEventListener('DOMContentLoaded', () => {
	document.getElementById('obtainlistitem').addEventListener('click', stealFromIframe, {once: true});
});

// ===============================================================================================
// Funktionen
// ===============================================================================================
// Funktion für addNewUl()
// ===============================================================================================

function addNewUl() {
	let newUl = document.createElement('ul');
	newUl.innerHTML = '<li>Item #1</li><li>Item #2</li><li>Item #2</li>';
	for (let i = 0; i < 3; i++) {
		
		let newLi = document.createElement('li');
		newLi.innerText = 'Item #' + (i + 4);
		newUl.appendChild(newLi);
	
	}
	
	document.getElementById('ulwrap').appendChild(newUl);
}

// ===============================================================================================
// Funktion für addListItemText()
// ===============================================================================================

function addListItemText(newText) {
	
	document.getElementById('myLe').innerHTML = newText;
	
}

// ===============================================================================================
// Funktion für addNewFirstListItem()
// ===============================================================================================

function addNewFirstListItem() {
	let parent = document.getElementById('fruits');
	let newFirst = document.createElement('li');
	let firstElement = parent.firstElementChild;
	newFirst.innerText = 'Ananas';
	parent.insertBefore(newFirst, firstElement);
}

// ===============================================================================================
// Funktion für removeLastListItem()
// ===============================================================================================

function removeLastListItem() {
	let parent = document.getElementById('languages');
	parent.removeChild(parent.lastElementChild);
}

// ===============================================================================================
// Funktion für stealFromIframe()
// ===============================================================================================

function stealFromIframe() {
	let iframe = document.querySelector('iframe').contentDocument;
	let iframeText = iframe.getElementsByClassName('ul_no_list_style')[0].lastElementChild;
	let textIntoList = document.getElementsByClassName('ul_no_list_style')[0];

	textIntoList.appendChild(document.adoptNode(iframeText));
}