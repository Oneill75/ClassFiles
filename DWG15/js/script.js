"use strict";

window.addEventListener("load", addZahl);           // Befehl zum Laden des Scripts, nachdem alle anderen Ressourcen des HTML-Dokuments geladen wurden (Als Alternative für defer)

function addZahl () {
  let lottozahlen = [];                             // Initialisieren des Arrays
  let anzahl = 0;                                   
  while(anzahl < 6) {                               // While-Schleife bei der "anzahl" bei jedem durchlauf, bei dem die zahl nicht mit einem element aus dem Array übereinstimmt, um 1 erhöht wird
    let zahl = Math.random() * (50 - 1) + 1 << 0;   // Variable zahl zum Initialisieren der Zufallszahl, 50-1 für die Reichweite von 0 bis 49
    if(!lottozahlen.includes(zahl)){                // Überprüfen ob die Zufallszahl bereits in dem Array vorhanden ist
      lottozahlen.push(zahl);                       // Ist dies nicht der Fall, wird die Zahl zum Arrayende hinzugefügt
      anzahl++;     
    }
  }
  lottozahlen.sort(function(a, b){return a-b});     // Sortieren der Arrayelemente aufsteigend mithilfe der function
  lottozahlen.forEach(element => {                  // Abrufen der Einzelnen Arrayelemente
    document.getElementById('zahlenausgabe').innerHTML += element + " ";    // und Ausgabe des jeweiligen Elements über die HTML-Seite im Format "Zahl Zahl Zahl Zahl Zahl Zahl"
  });
}

// ========================================================================================================================== //
// Font-Size Changer

// Vergeben eines Klassennamens über JavaScript für das HTML-Element mit der ID "sizechanger"
document.getElementById('sizechanger').className = "rangeSlider";

// Einstellen der Font-Size via JavaScript, beseht bereits in der CSS-Datei, wird hiermit jedoch überschrieben
document.getElementById('test').style.fontSize = "18px";

// Angeben und Initialisieren von Variablen für die HTML-Elementaufrufe (Optional, einfach für mehr Komfort und Übersicht)
let rangeNew = document.getElementById('sizechanger').value + "px";
let htmlDocument = document.getElementById('test');

// Anzeigen der beim Seitenaufruf eingestellten Font-Size unterhalb des Range-Sliders
document.getElementById('wert').innerHTML = rangeNew.toString();

// Funktion zum ändern der Font-Size bei verschieben des Reglers auf der HTML-Seite
document.getElementsByClassName('rangeSlider')[0].addEventListener('change', () => {
  rangeNew = document.getElementById('sizechanger').value + "px";
  htmlDocument.style.fontSize = rangeNew;
  document.getElementById('wert').innerHTML = rangeNew.toString();
});