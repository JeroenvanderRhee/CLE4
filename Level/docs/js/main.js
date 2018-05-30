"use strict";
var Gap = (function () {
    function Gap(width, positiony, positionx) {
        this.elementpath = document.createElement("gap");
        this.width = width;
        this.height = 56;
        this.positionx = positionx;
        this.positiony = positiony - this.height;
    }
    Gap.prototype.Create = function () {
        var childElement = document.getElementById("camera");
        var element = this.elementpath;
        childElement.appendChild(element);
        element.innerHTML = " ";
    };
    Gap.prototype.Opmaak = function () {
        var element = this.elementpath;
        element.style.position = "absolute";
        element.style.width = this.width + "px";
        element.style.height = this.height + "px";
        element.innerHTML = "";
        element.style.transform = "translate(" + this.positionx + "px," + this.positiony + "px)";
    };
    Gap.prototype.getRectangle = function () {
        return this.elementpath.getBoundingClientRect();
    };
    Gap.prototype.getvalues = function () {
        var xbegin;
        var xeind;
        var y;
        var height;
        var width;
        var bar;
        return {
            element: this.elementpath,
            xbegin: this.positionx,
            xeind: this.positionx + this.width,
            y: this.positiony,
            height: this.height,
            width: this.width
        };
    };
    return Gap;
}());
var Game = (function () {
    function Game() {
        this.Bar = [];
        this.Gap = [];
        this.Hoofdpersoon = new headCharacter();
        this.Hoofdpersoon.Create();
        this.Hoofdpersoon.Opmaak();
        console.log("aangemaakt");
        this.createbars();
        this.creategaps();
        this.gameloop();
    }
    Game.prototype.checkCollision = function (a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    };
    Game.prototype.createbars = function () {
        this.Bar.push(new Ground(800, window.innerHeight, 0));
        this.Bar.push(new Ground(400, window.innerHeight, 900));
        this.Bar.push(new Ground(350, window.innerHeight, 1380));
        this.Bar.forEach(function (ReadOut) {
            ReadOut.Create();
            ReadOut.Opmaak();
        });
    };
    Game.prototype.creategaps = function () {
        this.Gap.push(new Gap(300, window.innerHeight, 800));
        this.Gap.push(new Gap(80, window.innerHeight, 1300));
        this.Gap.forEach(function (ReadOut) {
            ReadOut.Create();
            ReadOut.Opmaak();
        });
    };
    Game.prototype.checkCollisionBar = function () {
        var _this = this;
        var barhit;
        var positionbar;
        var positioncharacter;
        this.Bar.forEach(function (ReadOut) {
            positioncharacter = _this.Hoofdpersoon.getvalues();
            positionbar = ReadOut.getvalues();
            if ((positioncharacter.xbegin >= positionbar.xbegin) && (positioncharacter.xeind <= positionbar.xeind)) {
                barhit = _this.checkCollision(ReadOut.getRectangle(), _this.Hoofdpersoon.getRectangle());
                if (barhit != true) {
                    console.log("hit");
                    _this.Hoofdpersoon.gravity(2, 5);
                }
            }
        });
    };
    Game.prototype.checkCollisionGap = function () {
        var _this = this;
        var barhit;
        var positionbar;
        var positioncharacter;
        this.Gap.forEach(function (ReadOut) {
            positioncharacter = _this.Hoofdpersoon.getvalues();
            positionbar = ReadOut.getvalues();
            if ((positioncharacter.xbegin >= positionbar.xbegin) && (positioncharacter.xeind <= positionbar.xeind)) {
                barhit = _this.checkCollision(ReadOut.getRectangle(), _this.Hoofdpersoon.getRectangle());
                if (barhit != true) {
                    console.log("hit");
                    _this.Hoofdpersoon.gravity(2, 5);
                }
                if (barhit == true) {
                    _this.Hoofdpersoon.gravity(1, 10);
                    if (positioncharacter.y >= window.innerHeight - 10) {
                        alert("je bent af");
                    }
                }
            }
        });
    };
    Game.prototype.checkCollisionScreen = function () {
        var positioncharacter = this.Hoofdpersoon.getvalues();
        positioncharacter.xbegin += 100;
        if (window.innerWidth <= positioncharacter.xbegin) {
            console.log("hit the muur");
        }
    };
    Game.prototype.gameloop = function () {
        var _this = this;
        this.Hoofdpersoon.Update();
        this.checkCollisionBar();
        this.checkCollisionGap();
        this.checkCollisionScreen();
        requestAnimationFrame(function () { return _this.gameloop(); });
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game; });
var Ground = (function () {
    function Ground(width, positiony, positionx) {
        this.elementpath = document.createElement("bar");
        this.width = width;
        this.height = 56;
        this.positionx = positionx;
        this.positiony = positiony - this.height;
    }
    Ground.prototype.Create = function () {
        var childElement = document.getElementById("camera");
        var element = this.elementpath;
        childElement.appendChild(element);
        element.innerHTML = " ";
    };
    Ground.prototype.Opmaak = function () {
        var element = this.elementpath;
        element.style.position = "absolute";
        element.style.width = this.width + "px";
        element.style.height = this.height + "px";
        element.innerHTML = "";
        element.style.transform = "translate(" + this.positionx + "px," + this.positiony + "px)";
    };
    Ground.prototype.getRectangle = function () {
        return this.elementpath.getBoundingClientRect();
    };
    Ground.prototype.getvalues = function () {
        var xbegin;
        var xeind;
        var y;
        var height;
        var width;
        var bar;
        return {
            element: this.elementpath,
            xbegin: this.positionx,
            xeind: this.positionx + this.width,
            y: this.positiony,
            height: this.height,
            width: this.width
        };
    };
    return Ground;
}());
var headCharacter = (function () {
    function headCharacter() {
        var _this = this;
        this.elementpath = document.createElement("headcharacter");
        this.leftPress = 0;
        this.rightPress = 0;
        this.upPress = 0;
        this.spacePress = 0;
        this.name = "Skelet";
        this.width = 40;
        this.height = 200;
        this.velocity = 2;
        this.positionX = 20;
        this.positionY = window.innerHeight - this.height - 56;
        console.log(this.positionY);
        this.leftkeycode = 37;
        this.rightkeycode = 39;
        this.upkeycode = 38;
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
                this.upPress = 0;
                break;
            case this.spacekeycode:
                this.spacePress = 0;
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
            case this.upkeycode:
                this.upPress = 1;
                break;
            case this.spacekeycode:
                this.spacePress = 1;
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
        var snelheid = 5;
        if (this.rightPress == 1) {
            this.positionX += snelheid;
        }
        if (this.leftPress == 1) {
            this.positionX -= snelheid;
        }
        if (this.upPress == 1) {
            this.positionY -= 210;
            this.positionX += snelheid + 5;
            this.upPress = 0;
        }
        element.style.transform = "translate(" + this.positionX + "px," + this.positionY + "px)";
    };
    headCharacter.prototype.getRectangle = function () {
        return this.elementpath.getBoundingClientRect();
    };
    headCharacter.prototype.getvalues = function () {
        var xbegin;
        var xeind;
        var y;
        var height;
        var width;
        var bar;
        return {
            element: this.elementpath,
            xbegin: this.positionX,
            xeind: this.positionX + this.width,
            y: this.positionY,
            height: this.height,
            width: this.width
        };
    };
    headCharacter.prototype.gravity = function (strengthx, strengthy) {
        var element = this.elementpath;
        this.positionY += strengthy;
        this.positionX += strengthx;
        element.style.transform = "translate(" + this.positionX + "px," + this.positionY + "px)";
    };
    return headCharacter;
}());
var Camera = (function () {
    function Camera(event) {
        var _this = this;
        this.translation = 0;
        this.speed = event;
        this.rightPress = 0;
        this.leftPress = 0;
        this.positionX = 0;
        this.leftkeycode = 37;
        this.rightkeycode = 39;
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
    }
    Camera.prototype.onKeyDown = function (e) {
        console.log(e.keyCode);
        switch (e.keyCode) {
            case this.leftkeycode:
                this.leftPress = 1;
                break;
            case this.rightkeycode:
                this.rightPress = 1;
                break;
        }
    };
    Camera.prototype.onKeyUp = function (e) {
        console.log(e.keyCode);
        switch (e.keyCode) {
            case this.leftkeycode:
                this.leftPress = 0;
                break;
            case this.rightkeycode:
                this.rightPress = 0;
                break;
        }
    };
    Camera.prototype.Update = function () {
        var element = document.getElementById("camera");
        if (this.rightPress == 1) {
            this.positionX -= this.speed;
            this.translation -= this.speed;
        }
        if (this.leftPress == 1) {
            this.positionX += this.speed;
            this.translation += this.speed;
        }
        element.style.transform = "translateX(" + this.positionX + "px)";
    };
    return Camera;
}());
//# sourceMappingURL=main.js.map