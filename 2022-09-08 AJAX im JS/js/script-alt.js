/*
 * Diesen Befehl nie mehr verwenden
 * alert("Hallo JavaScript");
 */
"use strict";

let hb = document.getElementById("hilfebutton");
let idiv = document.getElementById("info")


hilfebutton.addEventListener("click",function(){
	if(idiv.style.visibility == "visible"){
		idiv.style.visibility = "hidden";
		idiv.innerHTML = "";
	}
	else{
		idiv.style.visibility = "visible";
		idiv.innerHTML = "<i>Passwortlänge mindestens 12 Zeichen</i>";
	}
});


/* let hb = document.getElementById("hilfebutton");
 * let zum vereinbaren von Variablen, hilft eventuellen Fehlern entgegen.
 */
 
 /*
  * hilfebutton.addEventListener("click",functionname);
  *
  * function functionname(){ code block};
  */



  
 /*
	let newP = document.createElement("p");
	newP.innerHTML = "<em>Wichtig!</em>";
	document.body.appendChild(newP);
	
	document.body.appendChild(document.createElement("p")); 
	document.body.lastChild.innerHTML = "<strong>wichtig</strong>";
 
	function log (node) {
		console.log (node.nodeName)
	}

	function domWalker (node, func) {
		func(node);
		node = node.firstElementChild;
		while(node) {
			domWalker (node, func);
			node = node.nextElementSibling;
		}
	}
	domWalker (document.querySelector("BODY"), log);
*/