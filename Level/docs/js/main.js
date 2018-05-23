"use strict";
var Game = (function () {
    function Game() {
        this.downkeycode = 40;
        this.upkeycode = 38;
        this.Hoofdpersoon = new headCharacter(this.upkeycode, this.downkeycode);
        this.Hoofdpersoon.Create();
        this.Hoofdpersoon.Opmaak();
        console.log("aangemaakt");
    }
    Game.prototype.gameloop = function () {
        var _this = this;
        requestAnimationFrame(function () { return _this.gameloop(); });
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game; });
var headCharacter = (function () {
    function headCharacter(upkey, downkey) {
        this.elementpath = document.createElement("headcharacter");
        this.leftkeycode = downkey;
        this.rightkeycode = upkey;
        this.name = "Skelet";
        this.width = 40;
        this.height = 200;
        this.velocity = 2;
        this.positionX = 20;
        this.positionY = window.innerHeight - this.height - 56;
        window.addEventListener("keyleft", keyEvents(event, KeyboardEvent));
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
function keyEvents(event) {
    if (event.keyCode == 37) {
        console.log("left");
    }
    if (event.keyCode == 39) {
        console.log("right");
    }
}
var Paddle = (function () {
    function Paddle() {
        this.downSpeed = 0;
        this.upSpeed = 0;
        this.div = document.createElement("paddle");
        document.body.appendChild(this.div);
        this.upkey = 38;
        this.downkey = 40;
        this.x = 0;
        this.y = 200;
        window.addEventListener("keyleft", this.keyEvents);
    }
    Paddle.prototype.getRectangle = function () {
        return this.div.getBoundingClientRect();
    };
    Paddle.prototype.keyEvents = function (event) {
        if (event.keyCode == 37) {
            console.log("left");
        }
        if (event.keyCode == 39) {
            console.log("right");
        }
    };
    Paddle.prototype.Update = function () {
        var newY = this.y - this.upSpeed + this.downSpeed;
        if (newY > 0 && newY + 100 < window.innerHeight)
            this.y = newY;
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    return Paddle;
}());
//# sourceMappingURL=main.js.map