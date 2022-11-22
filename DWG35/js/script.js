'use strict';

let date = new Date();
let turnoftheyear = null;

let day = date.toLocaleString('de-de', {  day: 'numeric' });
let weekday = date.toLocaleString('de-de', {  weekday: 'long' });
let month = date.toLocaleString('de-de', {  month: 'long' });
let year = date.toLocaleString('de-de', {  year: 'numeric' }); // date.getFullYear();

let hours = date.getHours(); // date.toLocaleString('de-de', {  hour: '2-digit' });
console.log(typeof hours);
console.log(hours.toString().length);
let minutes = date. getMinutes(); // date.toLocaleString('de-de', {  minute: '2-digit' });

let currentdate = weekday + ', ' + day + '. ' + month + ' ' + year;
let scriptstart = (hours.toString().length == 1 ? '0' : '') + hours + ':' + minutes;
let millisecondselapsed = date.getTime();
let secondselapsed = Math.floor(Date.now() / 1000);
let timeuntilnewyearseve = null;

let currentdatespan = document.querySelector('#currentdate');
let scriptstartspan = document.querySelector('#scriptstart');
let millisecondselapsedspan = document.querySelector('#millisecondselapsed');
let secondselapsedspan = document.querySelector('#secondselapsed');
let timeuntilnewyearsevespan = document.querySelector('#timeuntilnewyearseve');

currentdatespan.innerHTML = currentdate;
scriptstartspan.innerHTML = scriptstart;
millisecondselapsedspan.innerHTML = millisecondselapsed;
secondselapsedspan.innerHTML = secondselapsed;
timeuntilnewyearsevespan.innerHTML = timeuntilnewyearseve;
