/*
 *
 * alert() bitte nie mehr verwenden!
 *
 */

// alert("Hallo JavaScript!");

passwordhelp.addEventListener("click",function(){
	var x = document.getElementById("info");
	x.innerHTML = "<i>Passwortlänge mindestens 12 Zeichen.</i>";
	x.hidden = false;
	setTimeout(function(){x.hidden = true},5000);
});