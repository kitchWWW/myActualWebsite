function validate(feels) {
	return true
}

function sendAndReset() {
	console.log("yaya!");
	var feels = document.getElementById("feels").value
	document.getElementById("feels").value = "";
	document.getElementById("submitButton").innerHTML = "submitted!"
	setTimeout(function(){ 
		document.getElementById("submitButton").innerHTML = "submit"
	 }, 2000);
	if (validate(feels)) {
		var xhr = new XMLHttpRequest();
		xhr.open("POST", "/NMDCAudienceSumbit", true);
		xhr.setRequestHeader('Content-Type', 'application/json');
		xhr.send(JSON.stringify({
			feels: feels
		}));
	}
}