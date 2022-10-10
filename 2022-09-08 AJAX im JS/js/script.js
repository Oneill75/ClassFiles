document.getElementById("sendDataGET").addEventListener("click", AJAXRequestGET);
document.getElementById("sendDataPOST").addEventListener("click", AJAXRequestPOST);

function AJAXRequestGET() {
	const XHR = new XMLHttpRequest();
	let bname = document.getElementById("benutzername").value;
	let pw = document.getElementById("passwort").value;
	XHR.open("GET", "formular-auswerten.php?benutzername=" + bname + "&passwort=" + pw);
	XHR.onreadystatechange = function() {
		if(XHR.readyState == 4 && XHR.status == "200") {
			console.clear();
			console.log("===", "GET", "===")
			console.log(XHR.responseText);
		}
	};
	XHR.send();
}

function AJAXRequestPOST() {
	const XHR = new XMLHttpRequest();
	let bname = document.getElementById("benutzername").value;
	let pw = document.getElementById("passwort").value;
	XHR.open("POST", "formular-auswerten.php");
	XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	XHR.onreadystatechange = function() {
		if(XHR.readyState == 4 && XHR.status == "200") {
			console.clear();
			console.log("===", "POST", "===")
			console.log(XHR.responseText);
		}
	};
	XHR.send("benutzername=" + bname + "&passwort=" + pw);
}
