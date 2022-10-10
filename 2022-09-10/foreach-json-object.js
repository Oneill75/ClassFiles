console.clear();
console.log("===== 1 =====");
// Für Übungzwecke wird ein JSON-String (wie er von PHP käme*) hier einer Variable zugewiesen.
// Beachte die eckigen und geschweiften Klammern!
// *https://www.php.net/manual/de/function.json-encode.php
let json_string = '[{"id":1,"username":"erikamusterfrau","email":"erika.musterfrau@example.com","active":1,"role":"member"},{"id":2,"username":"ernamischke","email":"erna.mischke@example.com","active":0,"role":"member"},{"id":3,"username":"hanswurst","email":"hans.wurst@example.com","active":1,"role":"admin"}]';
console.log(json_string);

console.log("===== 2 =====");
// JSON.parse() wandelt den String in ein Array mit Objekten als Elemente (elements or items):
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
let json_array = JSON.parse(json_string);
console.log(json_array);

console.log("===== 3 =====");
// JavaScript kennt die auf Arrays anwendbare forEach-Methode
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// Beispiele, der Variablenname o für Objekt:
json_array.forEach((o) => {
	console.log(o);
});

console.log("===== 4 =====");
// Beachte die Punkt-Schreibweise o.id, o.email usw.!
json_array.forEach((o, i) => {
	console.log("id:", o.id);
	console.log("username:", o.username);
	console.log("email:", o.email);
});

console.log("===== 5 =====");
// Die anonyme Funktion kann auch so kodiert werden:
json_array.forEach(function(o, i) {
	console.log("id:", o.id);
	console.log("username:", o.username);
	console.log("email:", o.email);
});

console.log("===== 6 =====");
// Anstelle einer anonymen Funktion wird hier der Aufruf einer Call-back-Funktion verwendet:
json_array.forEach(aCallBackFunction, this);

function aCallBackFunction(o, i) {
	console.log("id:", o.id);
	console.log("username:", o.username);
	console.log("email:", o.email);
}
