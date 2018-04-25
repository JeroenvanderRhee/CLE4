// A reference to the canvas in index.html. We need this reference to draw on the canvas.
var canvas = document.getElementById('game').getContext("2d");

// A reference to the flappy image in index.html. We need this reference to draw flappy on the canvas.
var flappy = document.getElementById('flappy');

// A reference to the fly sound in index.html. We need this refence to play the sound.
var flySound = document.getElementById('flySound');

// Width and height of flappy in pixels.
var width = 75;
var height = 56;

// Coordinates of flappy on the canvas.
var positionX = 400;
var positionY = 50;

// Speed of flappy on the y-axis.
var speedY = 3;

// We set a limit on the y-speed. Otherwise flappy can jump too high.
var maxSpeedY = -10;

// This number is the gravity on the y-axis.
var gravity = 0.25;

// This is our gameloop. The code in the function(){} will run (1000 / 60) times per second. Thats every 16.6 milliseconds. It's the same as 60 frames per second.
setInterval(function(){

    // Each frame the y-speed gets bigger. This is because each frame the gravity (0.25) gets added to the y-speed.
    speedY += gravity;

    // Here we recalculate the y-position by adding the y-speed to it.
    positionY += speedY;

    // When flappy's position goes below the floor.
    if (positionY > 600 - height) {

        // Flip y-speed so we get a bounce effect.
        speedY *= -0.6;

        // We need to make sure y-position is not below the floor.
        positionY = 600 - height;
    }

    // This function clears everything from the canvas.
    canvas.clearRect(0, 0, 800, 600);

    // This function draws a black square (with a size of: width and height) at the given x and y-position 
    // canvas.fillRect(positionX, positionY, width, height);

    // Here we draw our flappy image at the given x and y-position.
    canvas.drawImage(flappy, positionX, positionY);
}, 1000 / 60);

// With this keydown-function we can run a function everytime the user presses a key on the keyboard. More info at: https://api.jquery.com/keydown/
$(document).keydown(function(e){

    // Log the keycode to the console. Each key has it's unique keycode which we can use to perform certain actions on each key.
    console.log(e.keyCode);

    // This code will run when the user presses the spacebar. This is because the spacebar's unique keycode is: 32
    if (e.keyCode == 32) {

        // We subtract 10 of the y-speed. This will make flappy jump in the air.
        speedY -= 10;

        // We also need to check flappy's y-speed isn't too big. If we don't do this flappy can get a infinite y-speed.
        if (speedY < maxSpeedY) {
            speedY = maxSpeedY;
        }

        // Reset the playback time of the fly-sound. If we don't do this the fly-sound wont play correctly if we rapidly press the spacebar.
        flySound.currentTime = 0;

        // Play the fly-sound.
        flySound.play();
    }    
});