console.log("app running");

/*
var button = document.getElementsByClassName("button");
button.addEventListener('click', function() {

	var faded = function(button) {
		var fadeOut = 10;
		var fadeSetting = fadeOut / 10;
		button.style.opacity = fadeSetting;
		fadeOut--;
			if (fadeOut === 0) {
				button.style.opacity = 0;
				button.style.display = "none";
				clearTimeout(loopTimer);
				fadeOut = 10;
				return false;
			}
		var loopTimer = setTimeout(function() {
			faded(button);
		}, 50);
	};

});
*/
$(document).ready(function() {

	var $button = $(".button");
	$button.on('click', function() {
		$(".overlay").fadeOut(1000);
	});

});