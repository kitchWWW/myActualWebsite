function setStatus(status){
  console.log(status);
  var stat = document.getElementById("myStatusBar");
  stat.innerHTML = status
}

function httpGetAsync(theUrl, callback) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = function() {
    if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
      callback(xmlHttp.responseText);
  }
  xmlHttp.open("GET", theUrl, true); // true for asynchronous 
  xmlHttp.send(null);
}



function refresh() {
  setStatus("about to do refresh...");
  httpGetAsync("./allThoughts.txt", function(x) {
    var myWholeArea = document.getElementById("myWholeArea");
    myWholeArea.value = x
    console.log("did the refresh!")
    setStatus("refreshed at "+(new Date()).toTimeString())
  })
}

refresh()

function save() {
  setStatus("about to save status...")
  var myWholeArea = document.getElementById("myWholeArea");
  fetch("/NMDCAdminUpload", {
    method: "POST",
    body: myWholeArea.value,
  }).then(
    response => response.text() // .json(), etc.
  ).then(
    html => setStatus("saved at "+(new Date()).toTimeString())
  );

}