var h1 = document.querySelector("h1");
h1.style.color = "pink";

var body = document.querySelector("body");
var isBlue = false;
setInterval(function() {
	if(isBlue) {
		body.style.background = "white";
	}else {
		body.style.background = "rgb(100,100,255)";
	}
    isBlue = !isBlue;
}, 1000);