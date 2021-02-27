var m_w = 123456789;
var m_z = 987654321;
var mask = 0xffffffff;

let cleanchords = []
var finalSpaces = []

// Takes any integer
function seed(i) {
    m_w = (123456789 + i) & mask;
    m_z = (987654321 - i) & mask;
}

// Returns number between 0 (inclusive) and 1.0 (exclusive),
// just like Math.random().
function random()
{
    m_z = (36969 * (m_z & 65535) + (m_z >> 16)) & mask;
    m_w = (18000 * (m_w & 65535) + (m_w >> 16)) & mask;
    var result = ((m_z << 16) + (m_w & 65535)) >>> 0;
    result /= 4294967296;
    return result;
}

function shuffle(array) {
	seed(urlVars['timestamp'])
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function print(thing){
	console.log(thing)
}

console.log("hello world!");

function getUrlVars() {
	var vars = {}
	var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
		vars[key] = value;
	});
	return vars;
}

var urlVars = getUrlVars()
console.log(urlVars)

document.getElementById("sound1Name").innerHTML = urlVars["name1"];
document.getElementById("sound2Name").innerHTML = urlVars["name2"];
document.getElementById("sound3Name").innerHTML = urlVars["name3"];


fetch('/engines/ThreeNotes-master/out/'+urlVars['timestamp']+'/ThreeNotesScore.ly')
  .then(response => response.text())
  .then((data) => {
    var lines = data.split(/\r?\n/)
    var score = ""
    for(var i = 0; i < lines.length; i++){
    	if(lines[i].includes("<")){
    		score = lines[i]
    	}
    }
    var dirtychords = score.split(">")
    for(var i =0;i<dirtychords.length;i++){
    	var chord = dirtychords[i].replace("<","").replace("~","").replace("1","")
    	var notes = chord.split(" ")
    	var realNotes = notes.filter(function (el) {
		  return el != "";
		});
    	print(realNotes)
    	cleanchords.push(realNotes)
    }
    doScore()
  })

function displayChord(note1,note2,note3,chord){
	if(chord.includes(note1)){
		document.getElementById("sound1On").innerHTML = 'on'
	    document.getElementById("magenta").style.background="#eee";
	}else{
	    document.getElementById("magenta").style.background="#fff";
		document.getElementById("sound1On").innerHTML = 'off'
	}

	if(chord.includes(note2)){
		document.getElementById("sound2On").innerHTML = 'on'
	    document.getElementById("green").style.background="#eee";
	}else{
	    document.getElementById("green").style.background="#fff";
		document.getElementById("sound2On").innerHTML = 'off'
	}

	if(chord.includes(note3)){
		document.getElementById("sound3On").innerHTML = 'on'
	    document.getElementById("bluebird").style.background="#eee";
	}else{
	    document.getElementById("bluebird").style.background="#fff";
		document.getElementById("sound3On").innerHTML = 'off'
	}
}
displayChord("a","b","c",[])

var currentTimeout = "yolo";
function showChord(chordIndex){
	if(chordIndex >= cleanchords.length-1){
		document.getElementById("instructions").innerHTML = "we're done :)"
		return;
	}
	var note1 = cleanchords[0][0]
	var note2 = cleanchords[0][1]
	var note3 = cleanchords[0][2]
	displayChord(note1,note2,note3,cleanchords[chordIndex])
	currentTimeout = setTimeout(function(){
		showChord(chordIndex+1)
	},finalSpaces[chordIndex]*1000)
}

function doScore(){
	var howMany = cleanchords.length
	var totalLength = urlVars['length']
	var initalIntervals = []
	var runningTotal = 0
	for(var i = 0; i<howMany;i++){
		initalIntervals.push(3+i)
		runningTotal+=3+i
	}
	var multFactor = parseInt(totalLength) / (runningTotal+0.0)
	for(var i = 0; i<howMany;i++){
		finalSpaces.push(initalIntervals[i] * multFactor)
	}
	console.log(initalIntervals)
	console.log(runningTotal)
	console.log(finalSpaces)
	shuffle(finalSpaces);
	console.log(finalSpaces)
}

function countDown(numbToShow){
	if(numbToShow > 0){
		document.getElementById("instructions").innerHTML = 'starting in '+numbToShow
		currentTimeout = setTimeout(function(){
			countDown(numbToShow-1)
		},1000)
	}if(numbToShow == 0){
		document.getElementById("instructions").innerHTML = 'lets go!'
		showChord(0)
		setTimeout(function(){
			countDown(numbToShow-1)
		},1000)
	}if(numbToShow < 0){
		document.getElementById("instructions").innerHTML = ''
	}
}

function startover(){
	displayChord("a","b","c",[])
	if(currentTimeout!="yolo"){
	  clearTimeout(currentTimeout);		
	}
	countDown(5)
}






















