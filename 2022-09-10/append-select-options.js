// Jedem vorhandenen HTML-Element können neue Elemente untergeordnet werden.
// Die folgenden Schritte können dafür gegangen werden,
// hier exemplarisch für eine <option>-Liste eines <select>-Elements-
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select
// https://www.w3schools.com/tags/tag_select.asp
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option
// https://www.w3schools.com/tags/tag_option.asp

// 1. Das neue HTML-Element erzeugen:
// Der Variablenname opt für <option>-Element.
//let opt = document.createElement("option");

// 2. Das neue Element erweitern.
// ... das <option>-Element mit dem value-Attribut ...
//opt.value = "Value#1";
// ... und mit dem Text zwischen <option ...></option> ...
//opt.innerText = "Etwas zum Auswählen Nr. 1";

// 3. Das neue Element an das ELtern-Element hängen ...
// ... hier das <option>-Element an das <select>-Element.
//document.getElementById("user").appendChild(opt);

// Das Erzeugen der Elemente und deren Erweiterung
// kann (und sollte hier) in einer Schleife passieren.
// Können Sie empfangene JSON-Daten in einer forEach-Schleife nutzen?


function AJAXRequestPOST() {
	const xhttp = new XMLHttpRequest();
	xhttp.onload = function()
	{
    const obj = this.responseText;
    const this_array = JSON.parse(obj);
	console.log(this_array);

	for (var key in this_array) {
		var value = this_array[key];
		console.log(value["id"]);
		console.log(value["email"]);
		let opt = document.createElement("option");
		opt.value = value["id"];
		opt.innerText = value["email"];
		document.getElementById("user").appendChild(opt);
	};
	};
	xhttp.open("POST", "db_login.php");
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send();
}

AJAXRequestPOST();