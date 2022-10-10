	"use strict";
	
    let canvas,ctx; 
    let mouseX, mouseY, mouseDown = 0;
    let touchX, touchY;

    function drawDot(ctx,x,y,size) {
        const r=0; 
        const g=0; 
        const b=0; 
        const a=255;
        ctx.fillStyle = "74bdf7";

        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI*2, true); 
        ctx.closePath();
        ctx.fill();
    } 

    function clearCanvas(canvas,ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function sketch_mouseDown() {
        mouseDown=1;
        drawDot(ctx,mouseX,mouseY,6);
    }

    function sketch_mouseUp() {
        mouseDown=0;
    }

    function sketch_mouseMove(e) { 
        getMousePos(e);

        if (mouseDown==1) {
            drawDot(ctx,mouseX,mouseY,6);
        }
    }

    function getMousePos(e) {
        if (!e) {
            let e = event;
        }

        if (e.offsetX) {
            mouseX = e.offsetX;
            mouseY = e.offsetY;
        }
        else if (e.layerX) {
            mouseX = e.layerX;
            mouseY = e.layerY;
        }
     }

    function sketchpad_touchStart() {
        getTouchPos();
        drawDot(ctx,touchX,touchY,6);
        event.preventDefault();
    }

    function sketchpad_touchMove(e) { 
        getTouchPos(e);
        drawDot(ctx,touchX,touchY,6); 
        event.preventDefault();
    }

    function getTouchPos(e) {
        if (!e) {
            let e = event;
        }

        if(e.touches) {
            if (e.touches.length == 1) { // Only deal with one finger
                var touch = e.touches[0]; // Get the information for finger #1
                touchX=touch.pageX-touch.target.offsetLeft;
                touchY=touch.pageY-touch.target.offsetTop;
            }
        }
    }
    
let sketchpad = document.querySelector ('#sketchpad');
let mql = window.matchMedia("(min-width:600px)");

responsiveCanvas(mql);

// Spezieller Event Listener für MediaQueryList
mql.addListener(responsiveCanvas);

function responsiveCanvas(mql) {
    if (mql.matches) {
        sketchpad.setAttribute('width','400');
    } else {
        sketchpad.setAttribute('width','280');
    }
}

function init() {
	canvas = document.getElementById('sketchpad');
	if (canvas.getContext)
		ctx = canvas.getContext('2d');
	if (ctx) {
		canvas.addEventListener('mousedown', sketch_mouseDown);
		canvas.addEventListener('mousemove', sketch_mouseMove);
		window.addEventListener('mouseup', sketch_mouseUp);

		canvas.addEventListener('touchstart', sketchpad_touchStart);
		canvas.addEventListener('touchmove', sketchpad_touchMove);
	}

	ctx.beginPath();
	ctx.arc(100, 120, 90, 0, 2 * Math.PI);
	ctx.stroke();
}

init();

// Canvas zu PNG
// Quelle: http://stackoverflow.com/questions/10673122/how-to-save-canvas-as-an-image-with-canvas-todataurl



// Bild über HTML Formular mit einem hidden field (save_remote_data) an Server senden.
// canvas-to-png.php ist ein PHP-Script auf dem Server
// Quelle: http://stackoverflow.com/questions/13198131/how-to-save-a-html5-canvas-as-image-on-a-server

document.querySelector("#savepng").addEventListener("click", function () {
	var image_data = canvas.toDataURL("image/png");
	console.log (image_data);
	let img = document.createElement ("img");
	img.src = image_data;
	img.width = document.querySelector("#sketchpad").width;
	img.height = document.querySelector("#sketchpad").height;
	img.style = "border:1px solid silver";
	document.querySelector('.canvaspng').append(img) // Place the image data into the form
});