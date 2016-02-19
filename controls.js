/**
 * 
 */

function play() {
	
	if(vid.paused === true) {
		document.getElementById("btPlay").value = "Pause";
		vid.play();
	}
	
	else {
		document.getElementById("btPlay").value = "Play";
		vid.pause();
		document.getElementById("timeVideo").innerHTML = "";
	}
}

function toggleControlsVideo() {
	
	if( vid.controls === false) {
		vid.controls = true;
		document.getElementById("btVideoControls").value = "Masquer contrôles vidéo";
	} else {
		vid.controls = false;
		document.getElementById("btVideoControls").value = "Afficher contrôles vidéo";
	}
}

function showTimeElaspsVideo() {
	
	document.getElementById("timeVideo").innerHTML = "Temps joué = " + vid.currentTime;
}

var vid = document.getElementById("vid");

window.setInterval(showTimeElaspsVideo, 100 );