var startTime = new Date(1998, 5, 2, 0, 0);
var stopTime = new Date(1998, 5, 2, 0, 0);
var move = false;
var seconds = 0;

function start() {
  startTime = new Date();
  move = true;
}

function stop() {
  stopTime = new Date();
  move = false;
}

function cli() {
  if (move) {
    stop();
  } else {
    start();
  }
}

function moveTime() {
  var now = new Date();
  seconds = (now.getTime() - startTime.getTime()) / 1000;
}

function stayTime() {
  seconds = (stopTime.getTime() - startTime.getTime()) / 1000;
}

function updateParagraph() {
  if (move) {
    moveTime();
  } else {
    stayTime();
  }
  document.getElementById("timer").innerText = seconds;
}
setInterval(updateParagraph, 1);
