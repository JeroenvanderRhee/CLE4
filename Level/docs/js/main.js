"use strict";
var dino1 = (function () {
    function dino1() {
        var _this = this;
        this.elementpath = document.createElement("dino1");
        this.leftPress = 0;
        this.rightPress = 0;
        this.spacePress = 0;
        this.name = "Skelet";
        this.width = 200;
        this.height = 200;
        this.velocity = 2;
        this.positionX = 20;
        this.positionY = window.innerHeight - this.height - 56;
        this.leftkeycode = 65;
        this.rightkeycode = 68;
        this.spacekeycode = 73;
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
    }
    dino1.prototype.onKeyDown = function (e) {
        console.log(e.keyCode);
        switch (e.keyCode) {
            case this.leftkeycode:
                this.leftPress = 1;
                break;
            case this.rightkeycode:
                this.rightPress = 1;
                break;
            case this.spacekeycode:
                this.spacePress = 1;
                break;
        }
    };
    dino1.prototype.onKeyUp = function (e) {
        console.log(e.keyCode);
        switch (e.keyCode) {
            case this.leftkeycode:
                this.leftPress = 0;
                break;
            case this.rightkeycode:
                this.rightPress = 0;
                break;
            case this.spacekeycode:
                this.spacePress = 0;
                break;
        }
    };
    dino1.prototype.Create = function () {
        var childElement = document.body;
        var element = this.elementpath;
        childElement.appendChild(element);
        element.innerHTML = " ";
    };
    dino1.prototype.Opmaak = function () {
        console.log("Opmaak werkt");
        var element = this.elementpath;
        element.style.position = "absolute";
        element.style.width = this.width + "px";
        element.style.height = this.height + "px";
        element.innerHTML = "";
        element.style.transform = "translate(" + this.positionX + "px," + this.positionY + "px)";
    };
    dino1.prototype.Update = function () {
        var element = this.elementpath;
        if (this.rightPress == 1) {
            this.positionX += 5;
        }
        if (this.leftPress == 1) {
            this.positionX -= 5;
        }
        if (this.spacePress == 1) {
            this.positionY -= 5;
            this.spacePress = 0;
        }
        element.style.transform = "translate(" + this.positionX + "px," + this.positionY + "px)";
    };
    return dino1;
}());
var kleding1 = (function () {
    function kleding1() {
        this.elementpath = document.createElement("dino1");
        this.name = "shirt";
        this.width = 200;
        this.height = 200;
        this.velocity = 2;
        this.positionX = 20;
        this.positionY = 20;
    }
    kleding1.prototype.Create = function () {
        var childElement = document.body;
        var element = this.elementpath;
        childElement.appendChild(element);
        element.innerHTML = " ";
    };
    kleding1.prototype.Opmaak = function () {
        console.log("Opmaak werkt");
        var element = this.elementpath;
        element.style.position = "absolute";
        element.style.width = this.width + "px";
        element.style.height = this.height + "px";
        element.innerHTML = "";
    };
    kleding1.prototype.Update = function () {
        var element = this.elementpath;
    };
    return kleding1;
}());
var Game = (function () {
    function Game() {
        this.Hoofdpersoon = new headCharacter();
        this.Hoofdpersoon.Create();
        this.Hoofdpersoon.Opmaak();
        console.log("aangemaakt");
        this.Dino1 = new dino1();
        this.Dino1.Create();
        this.Dino1.Opmaak();
        console.log("Evil is made, not born.");
        this.gameloop();
    }
    Game.prototype.gameloop = function () {
        var _this = this;
        this.Hoofdpersoon.Update();
        this.Dino1.Update();
        requestAnimationFrame(function () { return _this.gameloop(); });
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game; });
var headCharacter = (function () {
    function headCharacter() {
        var _this = this;
        this.elementpath = document.createElement("headcharacter");
        this.leftPress = 0;
        this.rightPress = 0;
        this.spacePress = 0;
        this.name = "Skelet";
        this.width = 40;
        this.height = 200;
        this.velocity = 2;
        this.positionX = 20;
        this.positionY = window.innerHeight - this.height - 56;
        this.leftkeycode = 37;
        this.rightkeycode = 39;
        this.spacekeycode = 32;
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
    }
    headCharacter.prototype.onKeyDown = function (e) {
        console.log(e.keyCode);
        switch (e.keyCode) {
            case this.leftkeycode:
                this.leftPress = 1;
                break;
            case this.rightkeycode:
                this.rightPress = 1;
                break;
            case this.spacekeycode:
                this.spacePress = 1;
                break;
        }
    };
    headCharacter.prototype.onKeyUp = function (e) {
        console.log(e.keyCode);
        switch (e.keyCode) {
            case this.leftkeycode:
                this.leftPress = 0;
                break;
            case this.rightkeycode:
                this.rightPress = 0;
                break;
            case this.spacekeycode:
                this.spacePress = 0;
                break;
        }
    };
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
    headCharacter.prototype.Update = function () {
        var element = this.elementpath;
        if (this.rightPress == 1) {
            this.positionX += 5;
        }
        if (this.leftPress == 1) {
            this.positionX -= 5;
        }
        if (this.spacePress == 1) {
            this.positionY -= 5;
            this.spacePress = 0;
        }
        element.style.transform = "translate(" + this.positionX + "px," + this.positionY + "px)";
    };
    return headCharacter;
}());
//# sourceMappingURL=main.js.map