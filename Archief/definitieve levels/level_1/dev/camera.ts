/// <reference path="/Users/joriam/Downloads/package/dist/excalibur.d.ts" />

class Camera{
    private headcharacter:headCharacter[]
    constructor(){
    this.headcharacter = []
    
var game = new ex.Engine({
    width: 800,
    height: 600
});

game.currentScene.camera.strategy.lockToActorAxis(Actor, ex.Axis.X);
}}