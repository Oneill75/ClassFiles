'use strict';

let dropZone = document.getElementById('dropZone');
let image = document.getElementById('image');
let fileDropZone = document.getElementById('fileDropZone');

// EventListener Drag & Drop
image.addEventListener('dragstart',(ev) => evDragStart(ev));
image.addEventListener('drag',(ev) => evDrag(ev));
dropZone.addEventListener('dragenter', (ev) => evDragEnter(ev));
dropZone.addEventListener('dragleave',(ev) => evDragLeave(ev))
dropZone.addEventListener('dragover',(ev) => evDragOver(ev));
dropZone.addEventListener('dragend',(ev) => evDragEnd(ev));
dropZone.addEventListener('drop',(ev) => evDrop(ev));

// EventListener File Drop
fileDropZone.addEventListener('dragover',(ev) => evDragOver(ev));
fileDropZone.addEventListener('drop',(ev) => handleFileDrop(ev));

// Functions Drag&Drop 
function evDragStart(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
  console.log(ev);
}

function evDrag(ev) {
  console.log(ev);
}

function evDragOver(ev) {
  ev.preventDefault();
  console.log(ev);
}

function evDragEnter(ev) {
  ev.preventDefault();
  // dropZone.style.backgroundColor = 'pink';
  ev.currentTarget.style.backgroundColor = 'pink';
  console.log(ev);
}
function evDragLeave(ev) {
  ev.preventDefault();
  ev.currentTarget.style.backgroundColor = 'initial';
  console.log(ev);
}

function evDragEnd(ev) {
  ev.preventDefault();
  //ev.currentTarget.style.backgroundColor = 'initial';
  console.log(ev);
}

function evDrop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
  ev.currentTarget.style.backgroundColor = 'initial';
  image.draggable = false;
  console.log(ev);
}

// Files Drop

function handleFileDrop(ev){
  ev.preventDefault();
  if(ev.dataTransfer.items) {
    console.log('Items Data');
    // ... steht für den Strat-Operator
    [...ev.dataTransfer.items].forEach((item,i) => {
      if(item.kind === 'file') {
        let file = item.getAsFile();
        console.log(`file[${i}].name = ${file.name}`);
      };
    });
  } else {
    console.log('Files Data');
    [...ev.dataTransfer.files].forEach((file,i) => {
      console.log(`file[${i}].name = ${file.name}`);
    });
  };
};