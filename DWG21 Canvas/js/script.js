'use strict';

// ==============================================================================================================
// AddEventListener

document.getElementById('drawRectangle').addEventListener('click', drawRectangle);
document.getElementById('drawLine').addEventListener('click', drawLine);
document.getElementById('drawCircle').addEventListener('click', drawCircle);
document.getElementById('drawTextFilled').addEventListener('click', drawTextFilled);
document.getElementById('drawText').addEventListener('click', drawText);
document.getElementById('drawLinearGradient').addEventListener('click', drawLinearGradient);
document.getElementById('drawCircularGradient').addEventListener('click', drawCircularGradient);

// ==============================================================================================================
// "global" Variables

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');


// ==============================================================================================================
// Create Gradients

// Linear
let grdLine = ctx.createLinearGradient(0, 0, 200, 0);
grdLine.addColorStop(0,"red");
grdLine.addColorStop(1,"blue");

// Circular
let grdCirc = ctx.createLinearGradient(50, 50, 30, 100, 100, 70);
grdCirc.addColorStop(0,"red");
grdCirc.addColorStop(1,"blue");

// ==============================================================================================================
// Functions

function clearCanvas() {ctx.clearRect(0, 0, canvas.width, canvas.height);}

function drawRectangle() {
	clearCanvas();
	ctx.fillStyle = 'blue';
	ctx.fillRect(5,5,60,150);
}

function drawLine() {
	clearCanvas();
	ctx.beginPath();
	ctx.moveTo(0, 0);
	ctx.lineTo(200, 100);
	ctx.closePath();
	ctx.stroke();
}

function drawCircle() {
	clearCanvas();
	ctx.fillStyle = 'blue';
	ctx.beginPath();
  ctx.arc(200, 75, 50, 0, 2 * Math.PI);
  ctx.fill();
	ctx.closePath();
	console.log(ctx.width, ctx.height);
}

function drawTextFilled() {
	clearCanvas();
	ctx.fillStyle = 'blue';
  ctx.font = '20px Roboto';
  ctx.fillText('This is a filled Text', 100, 100);
}

function drawText() {
	clearCanvas();
  ctx.font = '20px Roboto';
  ctx.strokeText('This is a unfilled Text', 50, 100);
}

function drawLinearGradient() {
	clearCanvas();
	ctx.fillStyle = grdLine;
	ctx.fillRect(5,5,60,150);
}

function drawCircularGradient(){
	clearCanvas();
	ctx.fillStyle = grdCirc;
	ctx.fillRect(5,5,60,150);
}