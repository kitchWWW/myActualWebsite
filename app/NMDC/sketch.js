
let sound, amplitude, garamond;
function preload(){
  sound = loadSound('./res/InstallationAudio.mp3');
  garamond = loadFont('./res/garamond.otf');
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
var allVerifiedThoughts = [
"Being kind under all circumstances",
"A time after now when we can look back to.",
"Hopefully when I can comfortably be who I am",
"Something distant that we shape and create",
"I hope we can connect and be present with each other",
"Holding hands together with strangers",
"Overcoming our divisions",
"By understanding we are all alike",
"I fear that the pandemic is only the beginning",
"Reaching out to one another with an open heart",
"Collaboration, trust, understand, and embrace",
"A space to listen to one another",
"Pandemic free",
"The future is a canvas",
"Future could be mine to adjust",
"With love, care, commitment and work"
]
var allThoughts = allVerifiedThoughts
function randomWithin(maxDim, margin) { // 5000, .1
  return (Math.random() * (maxDim - (maxDim * margin * 2))) + (maxDim * margin)
}

function ang(x1, y1, x2, y2) {
  return Math.atan2(y2 - y1, x2 - x1);
}



var startingTimeToLive = 500

class GravityPoint {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    var randomScale = .1
    this.vx = (Math.random() * randomScale) - (randomScale / 2);
    this.vy = (Math.random() * randomScale) - (randomScale / 2)
    this.radius = 20;
    this.timeTillDeath = startingTimeToLive
    this.stringContents = ""
    if (Math.random() < 0.003) {
      this.stringContents = allThoughts[Math.floor(Math.random() * allThoughts.length)];
    }
  }
  move() {
    var angle = ang(this.x, this.y, gravTargetPoints[0][0], gravTargetPoints[0][1])
    this.vx += Math.cos(angle) * speedFactor
    this.vy += Math.sin(angle) * speedFactor

    this.x += this.vx * timeDelay
    this.y += this.vy * timeDelay

    this.vx *= airfriction
    this.vy *= airfriction
    if (this.stringContents !== "") {
      this.vx *= airfriction * .99
      this.vy *= airfriction * .99
    }
    this.timeTillDeath -= 1
  }
  draw() {
    var fillRatio = this.timeTillDeath / (startingTimeToLive / 255)
    if (this.stringContents == "") {
      fill(255, ((255 * (windowHeight - this.y) / windowHeight) + (255 - fillRatio)) * .5, ((255 * (windowWidth - this.x) / windowWidth) + (255 - fillRatio)) * .5, fillRatio);
      circle(this.x, this.y, this.radius);
    } else {
      fill(255, ((255 * (windowHeight - this.y) / windowHeight) + (255 - fillRatio)) * .5, ((255 * (windowWidth - this.x) / windowWidth) + (255 - fillRatio)) * .5, fillRatio);
      textSize(70);
      text(this.stringContents, this.x - (20 * this.stringContents.length), this.y)
    }
  }
}

var gravTargetPoints = [[30, 30]]
var airfriction = .999
var speedFactor = .01
// Clicking in the box toggles fullscreen on and off.
gravPoints = [];

function setup() {
  textFont(garamond);
  amplitude = new p5.Amplitude();
  createCanvas(windowWidth, windowHeight);
  for (var i = 0; i < 1; i++) {
    newGravPoint()
  }
  gravTargetPoints = [[windowWidth / 2, windowHeight / 2]]
  for (var i = 0; i < 4; i++) {
    curvePoints.push([randomWithin(windowWidth, .2), randomWithin(windowHeight, .2)])
  }
}

let isFadingToBlack = false
let isFadingIn = false

function keyPressed() {
  console.log("keyCode")
  console.log(keyCode)
  if(keyCode == 79){
    // start applying the fade if we hit F
    isFadingToBlack = true
    isFadingIn = false
  }
  if(keyCode == 73) // fade in if hit i
  {
    isFadingIn = true
    isFadingToBlack = false
    isOut = false
  }
}



function mousePressed() {
  if (mouseX > 0 && mouseX < windowWidth && mouseY > 0 && mouseY < windowHeight) {
    let fs = fullscreen();
    fullscreen(!fs);
  }
  if (sound.isPlaying() ){
    sound.pause();
  } else {
    sound.loop();
    amplitude = new p5.Amplitude();
    amplitude.setInput(sound);
  }
}

var curvePoints = []

tstep = 0.01
t = 0
function animateCurve() {
  targetPointx = curvePoint(curvePoints[0][0], curvePoints[1][0], curvePoints[2][0], curvePoints[3][0], t);
  targetPointy = curvePoint(curvePoints[0][1], curvePoints[1][1], curvePoints[2][1], curvePoints[3][1], t);
  t += tstep
  gravTargetPoints = [[targetPointx, targetPointy]]
  if (t > 1) {
    t = 0
    curvePoints.shift()
    curvePoints.push([randomWithin(windowWidth, .2), randomWithin(windowHeight, .2)])
  }

}

function newGravPoint() {
  var whichToDo = Math.floor(Math.random() * 4)
  if (whichToDo == 0) {
    gravPoints.push(new GravityPoint(windowWidth / 2, -20))
  }
  if (whichToDo == 1) {
    gravPoints.push(new GravityPoint(windowWidth / 2, windowHeight + 20))
  }
  if (whichToDo == 2) {
    gravPoints.push(new GravityPoint(-20, windowHeight / 2))
  }
  if (whichToDo == 3) {
    gravPoints.push(new GravityPoint(windowWidth + 20, windowHeight / 2))
  }
}


var newPointCounter = 0

var drawDebug = false

var fadeCounter = 0
var isOut = false

function draw() {
  //gravTargetPoints = [[windowWidth / 2, windowHeight / 2]]
  animateCurve()
  timeDelay = deltaTime
  background(0);

  if(isOut){
    return;
  }

  let soundLevel = amplitude.getLevel();
  if(drawDebug){
    // volume donut
    fill(255)
    let size = map(soundLevel, 0, 1, 0, 400);
    ellipse(width/2, height/2, size, size);

    // stroke thing
    stroke(0)
    noFill();
    curve(curvePoints[0][0], curvePoints[0][1], curvePoints[1][0], curvePoints[1][1], curvePoints[2][0], curvePoints[2][1], curvePoints[3][0], curvePoints[3][1],)
    circle(gravTargetPoints[0][0], gravTargetPoints[0][1], 5);    
  }
  

  speedFactor = .2* soundLevel

  newPointCounter += 1
  if (newPointCounter > 0) {
    newPointCounter = 0
    newGravPoint()
  }

  noStroke();
  gravPoints.forEach(function(point) {
    point.move();
    point.draw();
  });
  for (var i = 0; i < gravPoints.length; i++) {
    if (gravPoints[i].timeTillDeath < 0) {
      gravPoints.splice(i, 1)
      i--;
    }
  }

  if(isFadingToBlack) {
    fadeCounter+=1
    fill(0,0,0,fadeCounter);
    rect(0,0,width,height);
    if(fadeCounter == 255){
      isOut = true
      isFadingToBlack = false
    }
  }
  if(isFadingIn) {
    fadeCounter-=1
    fill(0,0,0,fadeCounter);
    rect(0,0,width,height);
    if(fadeCounter == 0){
      isFadingIn = false
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  gravTargetPoints = [[windowWidth / 2, windowHeight / 2]]
}

window.setInterval(
function(){

   httpGetAsync("./allThoughts.txt", function(x) {
  console.log(x)
  var newThoughts = x.split("\n")
  allThoughts = allVerifiedThoughts.concat(newThoughts)
})
 },15000);