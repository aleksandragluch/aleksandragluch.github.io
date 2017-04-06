function Scroll() {
	var top = document.getElementById("nav");
	var(ypos) = window.pageYOffset;
	
	if(ypos > 587) {
		top.style.height="150px";
	}
	else {
		top.style.height="300px";
	}
	
}

	window.addEventListener("scroll", Scroll);