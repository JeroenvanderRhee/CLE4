var canvas = document.getElementById('game').getContext("2d");

var background = document.getElementById('background');

var flappy = document.getElementById('flappy');

var flysound = document.getElementById('flySound');

var positionX = 300;

var positionY = 100;

var positionYMax = 56;

var speedY = 3;

var gravity = 0.25;



setInterval(function(){
    // console.log('hallo');


    speedY += gravity;
    positionY += speedY;



    if(positionY > 600 - 56) {
        speedY *= -0.6;
        positionY = 600 - 56;
    }

    if(positionYMax > 56) {
        speedY = 0;
    }



    // console.log('y position' + positionY);

    canvas.clearRect(0, 0, 800, 600);

    canvas.drawImage(background, 0, 0,);

    // canvas.fillRect(300, positionY, 50, 50);
    canvas.drawImage(flappy, positionX, positionY);


}, 1000 / 60);

$(document).keydown(function(e){
    console.log(e.keyCode);

    if(e.keyCode == 32){
        // console.log('spatiebalk gedrukt');
        speedY += -10;
        flySound.currentTime = 0;
        flySound.play();
        Rotate: angle(45);

        
    }
});