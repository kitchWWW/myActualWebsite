function validate(feels) {
	return true
}

function sendAndReset() {
	console.log("yaya!");
	var feels = document.getElementById("feels").value
	document.getElementById("feels").value = "";
	if (validate(feels)) {
		var xhr = new XMLHttpRequest();
		xhr.open("POST", "/goldenArrowsSubmit", true);
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.send(JSON.stringify({
			feels: feels
		}));
	}
}