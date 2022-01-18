var allSmoothedValues = {}
function customsmooth(value, mapKey) {
  if (allSmoothedValues[mapKey] == undefined) {
    allSmoothedValues[mapKey] = [value]
    return value
  }
  if (allSmoothedValues[mapKey].length > 10) {
    allSmoothedValues[mapKey].shift()
  }
  allSmoothedValues[mapKey].push(value)
  var total = 0;
  for (var i = 0; i < allSmoothedValues[mapKey].length; i++) {
    total += allSmoothedValues[mapKey][i];
  }
  var avg = total / allSmoothedValues[mapKey].length;
  console.log(avg)
  return avg;
}



// Copyright (c) 2019 ml5
//
// This software is released under the MIT License.
// https://opensource.org/licenses/MIT

/* ===
ml5 Example
PoseNet using p5.js
=== */
/* eslint-disable */

// Grab elements, create settings, etc.
var video = document.getElementById("video");

// The detected positions will be inside an array
let poses = [];

// Create a webcam capture
if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
    video.srcObject = stream;
    video.play();
  });
}

// A function to draw the video and poses into the canvas.
// This function is independent of the result of posenet
// This way the video will not seem slow if poseNet
// is not detecting a position
function drawCameraIntoCanvas() {
  // Draw the video element into the canvas
  drawKeypoints();
  window.requestAnimationFrame(drawCameraIntoCanvas);
}
window.setInterval(removeOldRW, 1000);

// Loop over the drawCameraIntoCanvas function
drawCameraIntoCanvas();

// Create a new poseNet method with a single detection
const poseNet = ml5.poseNet(video, modelReady);
poseNet.on("pose", gotPoses);

// A function that gets called every time there's an update from the model
function gotPoses(results) {
  poses = results;
}

function modelReady() {
  console.log("model ready");
  poseNet.multiPose(video);
}

allRW = []

function removeOldRW(){
  var timestamp = Date.now()
  for(var i = 0; i<allRW.length; i++){
    if(timestamp - allRW[i][2] > 3000){
      allRW.splice(i,1)
      i--
    }
  }
}

// A function to draw ellipses over the detected keypoints
function drawKeypoints() {
  var timestamp = Date.now()
  // Loop through all the poses detected
  for (let i = 0; i < poses.length; i += 1) {
    // For each pose detected, loop through all the keypoints
    rw = poses[i].pose.rightWrist
    if(rw.confidence > .02 && poses[i].pose.score > .02){
      if(i>=allRW.length){
        allRW.push([])
      }
      var myX = 1-Math.min(1,rw.x / 640)
      var mySmoothX = customsmooth(myX,"x")
      var myY = Math.min(1, rw.y/ 480)
      var mySmoothY = customsmooth(myY,"y")
      allRW[i] = [mySmoothX,mySmoothY , timestamp]
    }
  }
}











let sound, amplitude;

function preload(){
  sound = loadSound('./res/InstallationAudio.mp3');
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
"A time after now when we can look back to. Hopefully when I can comfortably be who I am",
"Something distant from us that we have the power to shape and create",
"I wish and hope we can connect and be present more with each other and with ourselves",
"Holding hands together with strangers",
"Overcoming our divisions",
"By understanding we are all alike",
"I fear that the pandemic is only the beginning to many other problems the world will face",
"Reaching out to one another, without judgement and with an open heart",
"Collaboration, trust, understand, and embrace",
"A space to listen to one another",
"Pandemic free",
"The future is a canvas where goodwill can make a difference",
"Future could be mine to adjust, to create a world where we can all play together",
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
    this.gravPointIndex = Math.floor(Math.random() * 9000)
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

  gravx(){
    return gravTargetPoints[this.gravPointIndex % gravTargetPoints.length][0]
  }
  gravy(){
    return gravTargetPoints[this.gravPointIndex % gravTargetPoints.length][1]
  }

  move() {
    var angle = ang(this.x, this.y, this.gravx(), this.gravy())
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
    fill(255, ((255 * (windowHeight - this.y) / windowHeight) + (255 - fillRatio)) * .5, ((255 * (windowWidth - this.x) / windowWidth) + (255 - fillRatio)) * .5, fillRatio);
    // fill(255,255,255, fillRatio)
    if (this.stringContents == "") {
      circle(this.x, this.y, this.radius);
    } else {
      textSize(30);
      text(this.stringContents, this.x, this.y)
    }
  }
}

var gravTargetPoints = [[30, 30]]
var airfriction = .999
var speedFactor = .01
// Clicking in the box toggles fullscreen on and off.
gravPoints = [];

function setup() {
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
  if(allRW.length == 0){
    targetPointx = curvePoint(curvePoints[0][0], curvePoints[1][0], curvePoints[2][0], curvePoints[3][0], t);
    targetPointy = curvePoint(curvePoints[0][1], curvePoints[1][1], curvePoints[2][1], curvePoints[3][1], t);
    t += tstep
    gravTargetPoints = [[targetPointx, targetPointy]]
    if (t > 1) {
      t = 0
      curvePoints.shift()
      curvePoints.push([randomWithin(windowWidth, .2), randomWithin(windowHeight, .2)])
    }
  }else{
    gravTargetPoints = [];
    for(var i = 0; i < allRW.length; i++){
      var newPoint = [allRW[i][0] * windowWidth, allRW[i][1] * windowHeight]
      gravTargetPoints.push(newPoint)

    }
  }
  // console.log(allRW);
  // console.log(gravTargetPoints)
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

function draw() {
  //gravTargetPoints = [[windowWidth / 2, windowHeight / 2]]
  animateCurve()
  timeDelay = deltaTime
  background(0);

  let soundLevel = amplitude.getLevel();
  if(drawDebug){
    // volume donut
    fill(255)
    let size = map(soundLevel, 0, 1, 0, 400);
    ellipse(width/2, height/2, size, size);

    // stroke thing
    stroke(255)
    noFill();
    curve(curvePoints[0][0], curvePoints[0][1], curvePoints[1][0], curvePoints[1][1], curvePoints[2][0], curvePoints[2][1], curvePoints[3][0], curvePoints[3][1],)
    fill(255,0,0) 
    circle(gravTargetPoints[0][0], gravTargetPoints[0][1], 50);    
  }
  

  speedFactor = .1 * soundLevel

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
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  gravTargetPoints = [[windowWidth / 2, windowHeight / 2]]
}

httpGetAsync("./allThoughts.txt", function(x) {
  console.log(x)
  var newThoughts = x.split("\n")
  allThoughts = allVerifiedThoughts.concat(newThoughts)
})