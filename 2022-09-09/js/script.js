function AJAXRequestPOST() {
	const XHR = new XMLHttpRequest();
	// let bname = document.getElementById("benutzername").value;
	// let pw = document.getElementById("passwort").value;
	XHR.open("POST", "json-answer.php");
	XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	XHR.onreadystatechange = function() {
		if(XHR.readyState == 4 && XHR.status == "200") {
			let resp = XHR.responseText;
			let jsn = JSON.parse(resp);
            console.clear();
			console.log("===", "POST", "===")
			console.log(resp);
			document.getElementById("info").innerText = resp;
			document.getElementById("info2").innerText = jsn;
			jsn.forEach(element => {
				myFunction
			});
		}
	};
	XHR.send();
}

function myFunction(item, element){
	sum += item;
	test = document.getElementById("info2");
	test.innerText = + element;
}

AJAXRequestPOST();