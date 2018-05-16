"use strict";
var headCharacter = (function () {
    function headCharacter() {
        this.name = "Aap";
        this.width = 100;
        this.height = 300;
        this.velocity = 2;
        this.positionX = 0;
        this.positionY = window.innerHeight;
        this.image = "red";
        console.log("character created");
    }
    headCharacter.prototype.create = function () {
        var element = document.createElement("headcharacter");
        element.appendChild("body");
    };
    return headCharacter;
}());
d;
var head = new headCharacter();
var Game = (function () {
    function Game() {
        console.log("new game created");
        this.character = [];
        for (var i = 0; i < 1; i++) {
            var c = new headCharacter();
            this.character.push(c);
            c.create();
        }
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        for (var _i = 0, _a = this.character; _i < _a.length; _i++) {
            var c = _a[_i];
            c.create();
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
//# sourceMappingURL=main.js.map