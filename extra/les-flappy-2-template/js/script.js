var canvas = document.getElementById('game').getContext("2d");
var flappy = document.getElementById('flappy');
var pipe = document.getElementById('pipe');
var background = document.getElementById('background');
var flySound = document.getElementById('fly-sound');
var dieSound = document.getElementById('die-sound');

// FLAPPY VARIABLES
var flappyPositionX = 400;
var flappyPositionY = 50;
var flappyWidth = 75;
var flappyHeight = 56;
var flappySpeedY = 3;
var flappyMaxSpeedY = -10;
var flappyGravity = 0.25;
var flappyIsDead = false;

// PIPE VARIABLES

var pipePositionX = 600;
var pipePositionY = 0;
var pipeWidth = 80;
var pipeHeight = 250;
var pipeSpeed = 2;

var score = 0
var hasScoredThisRound = false;

setInterval(function(){
    flappySpeedY += flappyGravity;
    flappyPositionY += flappySpeedY;

    // When flappy is below floor.
    if (flappyPositionY > 600 - flappyHeight) {
        flappySpeedY *= -0.4;
        flappyPositionY = 600 - flappyHeight;

        die();

    }

    if (flappyPositionY < 0) {
       flappyPositionY = 0;
       flappySpeedY = 0;

        die();
    }

    if (flappyPositionX > pipePositionX + pipeWidth && hasScoredThisRound == false && flappyIsDead == false){
      score++;
      hasScoredThisRound = true;
    }

    if(flappyIsDead == false){
      pipePositionX -= pipeSpeed;
    }

    if(pipePositionX + pipeWidth < 0){
      pipePositionX = 800;
      pipePositionY = Math.random() * 300;
      hasScoredThisRound = false;
    }

    if(flappyPositionX + flappyWidth > pipePositionX
      && flappyPositionY < pipePositionY + pipeHeight
      && flappyPositionX < pipePositionX + pipeWidth
      && flappyPositionY + flappyHeight > pipePositionY){
      die();
    }

    canvas.clearRect(0, 0, 800, 600);

    canvas.drawImage(background, 0, 0)

  //  canvas.fillRect(pipePositionX, pipePositionY, pipeWidth, pipeHeight
    canvas.font = "50px FlappyFont"
    canvas.fillText(score, 400, 200);
    canvas.drawImage(pipe, pipePositionX, pipePositionY);
    canvas.drawImage(flappy, flappyPositionX, flappyPositionY);

}, 1000 / 60);

$(document).keydown(function(e){
    // console.log(e.keyCode);

    if (e.keyCode == 32 && flappyIsDead == false) {
        flappySpeedY -= 10;

        if (flappySpeedY < flappyMaxSpeedY) {
            flappySpeedY = flappyMaxSpeedY;
        }

        flySound.currentTime = 0;
        flySound.play();
    }
});

function die(){

  if(flappyIsDead == false){
    dieSound.play();
    flappy = document.getElementById('flappy-dead');
    flappyIsDead = true;

}}
