async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
    // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return await response.json(); // parses JSON response into native JavaScript objects
}

var answer1 = "hofjajfieaw"
var answer2 = "fdsfewawea"
var email = "the peep's email"
var audio;

var question1 = Math.random() > .5 ? "What is keeping you where you are?" : "Why are you choosing to stay?"
var question2 = Math.random() > .5 ? "Why are you nervous about it? (you know, the thing you are nervous about)" : "What is something happening in the next seven days you are excited about?"


function random_bg_color() {
  var x = Math.floor(200 + (Math.random() * 56));
  var y = Math.floor(200 + (Math.random() * 56));
  var z = Math.floor(200 + (Math.random() * 56));
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  console.log(bgColor);
  document.body.style.backgroundColor = bgColor;
}

random_bg_color();
setInterval(function() {
  random_bg_color();
}, 30000);


var superi = 0;
var i = 0;
var txt = [
  'Thank you for taking part in this shared experience with us.',
  "We're going to ask you a few questions, if you'd be ok with it. These answers will be used by Brian Ellis and the Playground Ensemble in the Mixed Reality Web Installation 'stay; ho(me)', and may be seen by others experiencing the installation.",
  'Thank you for being here, and wishing you all the best.',
  'brian'
]
var speed = 25; /* The speed/duration of the effect in milliseconds */
var firstWait = 300

function typeWriterIntro() {
  if (superi < txt.length) {
    if (i < txt[superi].length) {
      document.getElementById("demo" + superi).innerHTML += txt[superi].charAt(i);
      i++;
    } else {
      i = 0;
      superi++;
    }
    setTimeout(typeWriterIntro, speed);
  } else {
    document.getElementById("continue").style.display = "block";
  }
}

setTimeout(typeWriterIntro, firstWait)



function typeWriterFirstQ() {
  if (superi < txt.length) {
    if (i < txt[superi].length) {
      document.getElementById("firstQ" + superi).innerHTML += txt[superi].charAt(i);
      i++;
    } else {
      i = 0;
      superi++;
    }
    setTimeout(typeWriterFirstQ, speed);
  } else {
    document.getElementById("delayFirstQ").style.display = "block";
  }
}

firstContinue = function() {

  audio = new Audio('http://go.brianellissound.com/res/PlaygroundPrelude2.mp3');
  audio.play();
  audio.volume = .2;

  document.getElementById("intro").style.display = "none";
  document.getElementById("firstQ").style.display = "block";
  superi = 0;
  i = 0;
  txt = [
    question1,
  ]
  setTimeout(typeWriterFirstQ, firstWait)
  return false;
}





function typeWriterSecondQ() {
  if (superi < txt.length) {
    if (i < txt[superi].length) {
      document.getElementById("secondQ" + superi).innerHTML += txt[superi].charAt(i);
      i++;
    } else {
      i = 0;
      superi++;
    }
    setTimeout(typeWriterSecondQ, speed);
  } else {
    document.getElementById("delaySecondQ").style.display = "block";
  }
}

secondContinue = function() {
  document.getElementById("firstQ").style.display = "none";
  document.getElementById("secondQ").style.display = "block";
  superi = 0;
  i = 0;
  txt = [
    question2,
  ]
  setTimeout(typeWriterSecondQ, firstWait)
  return false;
}




function typeWriterEmail() {
  if (superi < txt.length) {
    if (i < txt[superi].length) {
      document.getElementById("emailQ" + superi).innerHTML += txt[superi].charAt(i);
      i++;
    } else {
      i = 0;
      superi++;
    }
    setTimeout(typeWriterEmail, speed);
  } else {
    document.getElementById("delayEmail").style.display = "block";
  }
}

emailContinue = function() {
  document.getElementById("secondQ").style.display = "none";
  document.getElementById("emailQ").style.display = "block";
  superi = 0;
  i = 0;
  txt = [
    "Thank you for trusting us with your words.",
    "Click below to enter the installation."
  ]
  // Your code here
  setTimeout(typeWriterEmail, firstWait)
  return false;
}



function typeWriterFinal() {
  if (superi < txt.length) {
    if (i < txt[superi].length) {
      document.getElementById("finalS" + superi).innerHTML += txt[superi].charAt(i);
      i++;
    } else {
      i = 0;
      superi++;
    }
    setTimeout(typeWriterFinal, speed);
  } else {
    // pass
  }
}

function fadeOutAudio() {
  audio.volume = .99 * audio.volume
  if (audio.volume < .004) {
    audio.pause()
  }
  setTimeout(fadeOutAudio, 10)
}

finalContinue = function() {
  document.getElementById("emailQ").style.display = "none";
  document.getElementById("finalScreen").style.display = "block";

  setTimeout(fadeOutAudio, 8000)

  // do the emailing stuff
  var answer1 = document.getElementById("paragraph_text1").value;
  var answer2 = document.getElementById("paragraph_text2").value;
  // var answer3 = document.getElementById("paragraph_text3").value;

  postData("/playgroundEmailSubmit", {
    "question1": question1,
    "question2": question2,
    "answer1": answer1,
    "answer2": answer2,
  // "senderEmail":answer3
  })


  superi = 0;
  i = 0;
  txt = [
    "for being here",
    "&",
    "and for being you"
  ]
  // Your code here
  setTimeout(typeWriterFinal, firstWait * 2)
  return true;
}












