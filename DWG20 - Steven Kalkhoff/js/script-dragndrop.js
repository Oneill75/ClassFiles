'use strict';

let idBaum = document.getElementById('baum');
let idWurzel = document.getElementById('wurzel');
let tree = document.getElementById('dropZone');

idBaum.draggable = true;  
idWurzel.draggable = true;  

// Eventlistener

idBaum.addEventListener('dragstart', ev => evDragStart(ev));
idWurzel.addEventListener('dragstart', ev => evDragStart(ev));
tree.addEventListener('dragover', ev => evDragOver(ev));
tree.addEventListener('drop', ev => evDrop(ev));


// Functions

function evDragStart(ev) {
	ev.dataTransfer.setData("text", ev.target.id);
}

function evDragOver(ev) {
	ev.preventDefault();
}

function evDrop(ev) {
	ev.preventDefault();
	let data = ev.dataTransfer.getData("text");
	ev.target.appendChild(document.getElementById(data));
  console.log(tree.innerText)
  if(tree.innerText.match('der Baum') && tree.innerText.match('die Wurzel')) {
    tree.style.background = 'url(img/Tree_drawing.png) no-repeat center';
    tree.style.backgroundSize = '25% 100%';
  } else {
    tree.style.background = 'url(img/No_sign.svg) no-repeat center';
    tree.style.backgroundSize = '25% 100%';
  }
}