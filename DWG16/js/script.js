
const MEIN_FORMULAR = document.querySelector('form');

MEIN_FORMULAR.firstElementChild.value = '';

MEIN_FORMULAR.addEventListener('submit', (ev) => {
	
	ev.preventDefault();

	const FORM_DATA = new FormData(MEIN_FORMULAR);

	FORM_DATA.append("benutzername", "Musterfrau");
	FORM_DATA.append("mitarbeiterkennzahl", 1234567);
	
	/*
	 * Fügen Sie Ihren Code zur Verwendung der fetch-API
	 * nach diesem Kommentar ein:
	 *
	 */
	const empfangeneDaten = () => fetch ( 
		"php/formular-auswerten.php", 
		{method: "POST", body: FORM_DATA}
	) 
		.then (response => response.json())
		.then (data => {
			erstelleListeAusObjektdaten(data);
		})
				
	empfangeneDaten ()
		//.then (console.log)

	/*
	 * Kommentieren Sie alle folgenden Anweisungen
	 * bis inklusive XHR.send(FORM_DATA); zum Schluss aus.
	 */
	/* const XHR = new XMLHttpRequest();
	XHR.open("POST", "php/formular-auswerten.php");
	XHR.onreadystatechange = function() {
		if(XHR.readyState == 4 && XHR.status == "200") {
			let empfangeneDaten = XHR.responseText;
			console.clear();
			console.log(empfangeneDaten, typeof empfangeneDaten);
			let objectDaten = JSON.parse(empfangeneDaten);
			erstelleListeAusObjektdaten(objectDaten);
			console.log(objectDaten, typeof objectDaten);
		}
	};
	XHR.send(FORM_DATA); 
	*/
});

function erstelleListeAusObjektdaten(objectDaten) {
	// Daten aus einem Objekt in einem <ul>-Element ausgeben
	let neueListe = document.createElement('ul');
	for (let schluessel in objectDaten) {
		let neuesListenElement = document.createElement('li');
		/*
		 * let neuesListenElementInhalt = document.createTextNode(schluessel + ': ' + objectDaten[schluessel]);
		 * neuesListenElement.appendChild(neuesListenElementInhalt);
		 *
		 * ... in diesem Falle leichter zu organisieren mit:
		 *
		 */
		neuesListenElement.innerHTML = schluessel + ': ' + objectDaten[schluessel];
		neueListe.appendChild(neuesListenElement);
	}
	document.body.appendChild(neueListe);
}


/* Ein Promise ist ein Objekt, dass die Antwort auf eine Anfrage repräsentiert.
		Es kann die Zustände 'pending', 'fulfilled' und 'rejected' erhalten.
		Ein Promise wird nur abgelehnt(rejected), wenn ein Netzwerkfehler besteht.

		Wenn keine Fehler bestehen, also das Promise als Erfüllt(fulfilled) gilt, dann werden die Funktionen innerhalb von .then ausgeführt.
		Bevor ein Promise abgelehnt oder erfüllt wird, befindet es sich im Wartezustand(pending).
*/		