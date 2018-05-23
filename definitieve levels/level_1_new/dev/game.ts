
























/// <reference path="C:\Users\me\node_modules\excalibur\dist\excalibur.d.ts" />
/// <reference path="hoofdpersoon.ts"/>

var game = new ex.Engine();

    var paddle = new ex.Actor(150, game.drawHeight - 40, 200, 20);

    // move the player
    paddle.vel.x = 5;
    
    // add player to the current scene

    paddle.color = ex.Color.Chartreuse;
    
    
    game.add(paddle)

    game.start();


    