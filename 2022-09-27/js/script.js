'use strict'

const MEIN_FORMULAR = document.querySelector('form');

MEIN_FORMULAR.firstElementChild.value = "";

MEIN_FORMULAR.addEventListener('submit', (ev) => {
  const FORM_DATA = new FormData(document.querySelector('form'));
  
  ev.preventDefault();
  
  // <input type="text" name="benutzername" value="Musterfrau"></input>
  FORM_DATA.append("benutzername","Musterfrau");
  FORM_DATA.append("mitarbeiterkennzahl",1234567);

  const XHR = new XMLHttpRequest();
  XHR.open("POST", "php/formular-auswerten.php");
  XHR.onreadystatechange = function() {
		if(XHR.readyState == 4 && XHR.status == "200") {
      let textResponse = XHR.responseText 
			console.clear();
			console.log(textResponse);
      let objectDaten = JSON.parse(textResponse);
      listeAnHtml(objectDaten);
      console.log(objectDaten, typeof objectDaten);
		}
	};
  XHR.send(FORM_DATA);
});


function listeAnHtml(objectDaten) {
  let neueListe = document.createElement('ul');
  for (let key in objectDaten) {
    let neuerEintrag = document.createElement('li');
    // let neuesElement = document.createTextNode(key + ": " + objectDaten[key]);
    // neuerEintrag.appendChild(neuesElement);
    neuerEintrag.innerHTML = key + ": " + objectDaten[key];
    neueListe.appendChild(neuerEintrag);
  }
  document.body.appendChild(neueListe);
}