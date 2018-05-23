"use strict";
var Balk = (function () {
    function Balk() {
        this.elementpath = document.createElement("balk");
        this.width = 2000;
        this.height = 60;
        this.color = "gray";
        this.positionX = 0;
        this.positionY = innerHeight - 60;
    }
    Balk.prototype.Create = function () {
        var childElement = document.body;
        var element = this.elementpath;
        childElement.appendChild(element);
        element.innerHTML = " ";
    };
    Balk.prototype.Opmaak = function () {
        var element = this.elementpath;
        element.style.height = this.height + "px";
        element.style.width = this.width + "px";
        element.style.backgroundColor = this.color;
        element.style.transform = "translate(" + this.positionX + "px," + this.positionY + "px)";
    };
    return Balk;
}());
var loopplank = new Balk();
loopplank.Create();
loopplank.Opmaak();
var Decor = (function () {
    function Decor() {
        this.elementpath = document.createElement("decor");
        this.width = 2000;
        this.height = window.innerHeight - 60;
    }
    Decor.prototype.Create = function () {
        var childElement = document.body;
        var element = this.elementpath;
        childElement.appendChild(element);
        element.innerHTML = " ";
    };
    Decor.prototype.Opmaak = function () {
        var element = this.elementpath;
        element.style.width = this.width + "px";
        element.style.height = this.height + "px";
    };
    return Decor;
}());
var background = new Decor();
background.Create();
background.Opmaak();
var headCharacter = (function () {
    function headCharacter() {
        this.elementpath = document.createElement("headcharacter");
        this.name = "Aap";
        this.width = 31;
        this.height = 141;
        this.velocity = 2;
        this.positionX = 20;
        this.positionY = window.innerHeight - this.height - 56;
    }
    headCharacter.prototype.Create = function () {
        var childElement = document.body;
        var element = this.elementpath;
        childElement.appendChild(element);
        element.innerHTML = " ";
    };
    headCharacter.prototype.Opmaak = function () {
        var element = this.elementpath;
        element.style.position = "absolute";
        element.style.width = this.width + "px";
        element.style.height = this.height + "px";
        element.innerHTML = "";
        element.style.transform = "translate(" + this.positionX + "px," + this.positionY + "px)";
    };
    return headCharacter;
}());
var element = new headCharacter();
element.Create();
element.Opmaak();
var Game = (function () {
    function Game() {
        console.log("new game created");
        this.character = [];
        for (var i = 0; i < 1; i++) {
            var c = new headCharacter();
            this.character.push(c);
        }
        this.gameLoop();
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        for (var _i = 0, _a = this.character; _i < _a.length; _i++) {
            var c = _a[_i];
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game(); });
//# sourceMappingURL=main.js.map