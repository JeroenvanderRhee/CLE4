





















/// <reference path="Users/joriam/node_modules/excalibur/dist/excalibur.d.ts" />
>>>>>>> 7b0a43b350d95a2fdd4a1f2bc13e2af0adb9eaff



/// <reference path="C:\Users\me\node_modules\excalibur\dist\excalibur.d.ts" />
<<<<<<< HEAD
/// <reference path="hoofdpersoon.ts"/>

var game = new ex.Engine();

    var paddle = new ex.Actor(150, game.drawHeight - 40, 200, 20);

    // move the player
    paddle.vel.x = 5;
    
    // add player to the current scene

    paddle.color = ex.Color.Chartreuse;
    
    
    game.add(paddle)

    game.start();


    