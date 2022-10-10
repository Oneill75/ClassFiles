'use strict';

console.clear();

document.addEventListener('DOMContentLoaded', () => {
	
	let rangeObjekt = document.getElementById('reglerSchriftgroesse');
	rangeObjekt.min = parseInt(getComputedStyle(document.documentElement).fontSize);
	rangeObjekt.max = rangeObjekt.min * 3;
	rangeObjekt.step = 6;
	rangeObjekt.value = rangeObjekt.min;
	
	document.getElementById('reglerAusgabe').value = rangeObjekt.min + 'px';

	/*
	 * From somewhere on the Internet:
	 * The input event is raised during dragging of the slider.
	 * The change event is only raised when dragging is completed.
	 *
	 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/change_event
	 * "The change event is fired for <input>, <select>, and
	 * <textarea> elements when the user modifies the element's value.
	 * Unlike the input event, the change event is not necessarily fired
	 * for each alteration to an element's value."
	 */
	rangeObjekt.addEventListener('input', aendernSchriftgroesse);
	//rangeObjekt.addEventListener('change', aendernSchriftgroesse);
	
	let lottoZahlen = [];
	let anzahlLottozahlen = 6;
	
	/* 
	 * continue mit label
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/continue
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label
	 */
	lottoZahlenArrayErweitern: while (lottoZahlen.length < anzahlLottozahlen) {
		let zufallsZahl = getRandomIntInclusive(1, 49);
		if (lottoZahlen.length > 0) console.group('Vergleich:');
		for (let zahl of lottoZahlen) {
			console.log('Zahl im lottoZahlen-Array', zahl, 'vom Typ', typeof zahl,
						'und', 'Zufallszahl', zufallsZahl, 'vom Typ', typeof zufallsZahl);
			if (zahl == zufallsZahl) continue lottoZahlenArrayErweitern;
		}
		console.groupEnd();
		lottoZahlen.push(zufallsZahl);
	}
	/*
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
	 */
	// lottoZahlen.sort();
	/* 
	 * To compare numbers instead of strings,
	 * the compare function can subtract b from a.
	 * The following function will sort the array in ascending order 
	 * if it doesn't contain Infinity and NaN):
	 */
	lottoZahlen.sort(function(a, b){return a - b});
	document.getElementById("lottozahlen").innerText = lottoZahlen.toString();
});

function aendernSchriftgroesse (ev) {
	document.getElementById('reglerAusgabe').value = ev.target.value + 'px';
	//document.documentElement.style.fontSize = ev.target.value + 'px';
	document.getElementsByClassName('main')[0].style.fontSize = ev.target.value + 'px';
}

/*
 * Entnommen von
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
 * "What if you need the results to be inclusive at both the minimum and the maximum?
 * The getRandomIntInclusive() function below accomplishes that."
 */
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}
