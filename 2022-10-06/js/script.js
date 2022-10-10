'use strict';

let uploadForm = document.getElementById('uploadForm');
let url = 'php/response.php';
let fileDropZone = document.getElementById('fileDropZone');



fileDropZone.addEventListener('dragover',(ev) => evDragOver(ev));
fileDropZone.addEventListener('drop',(ev) => handleFileDrop(ev));

uploadForm.addEventListener('submit', (ev) => {
  ev.preventDefault();
  let filesForUpload = document.querySelector('[type="file"]').files;
  uploadFiles(filesForUpload);
});


function uploadFiles(filesForUpload){
  let formData = new FormData();

  for (let i = 0; i < filesForUpload.length; i++) {
    let file = filesForUpload[i];
    formData.append('files[]',file);
    
  }

  fetch(url,{
    method: 'POST',
    body: formData
    //, headers: {'Content-Type': 'multipart/form-data'}  als alternative, z.B. zum Limitieren vpn hochladbaren Dateiendungen.
  })
  .then (response => {
    if(response.status === 200){
      console.log('status OK');
    };
  });
}

function evDragOver(ev) {
  ev.preventDefault();
}

function handleFileDrop(ev){
  ev.preventDefault();
  if(ev.dataTransfer.items) {
    console.log('Items Data');
    uploadFiles([...ev.dataTransfer.files]);
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