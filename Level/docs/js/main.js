"use strict";
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
var dino1 = (function () {
    function dino1() {
        var _this = this;
        this.dino = document.createElement("dino1");
        this.leftPress = 0;
        this.rightPress = 0;
        this.upPress = 0;
        this.downPress = 0;
        this.spacePress = 0;
        this.width = 200;
        this.height = 200;
        this.velocity = 2;
        this.positionX = 3000;
        this.positionY = window.innerHeight - this.height - 56;
        this.leftkeycode = 65;
        this.rightkeycode = 68;
        this.upkeycode = 87;
        this.downkeycode = 83;
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
            case this.upkeycode:
                this.upPress = 1;
                break;
            case this.downkeycode:
                this.downPress = 1;
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
            case this.upkeycode:
                this.upPress = 0;
                break;
            case this.downkeycode:
                this.downPress = 0;
                break;
            case this.spacekeycode:
                this.spacePress = 0;
                break;
        }
    };
    dino1.prototype.Create = function () {
        var childElement = document.body;
        var element = this.dino;
        childElement.appendChild(element);
        element.innerHTML = " ";
    };
    dino1.prototype.Opmaak = function () {
        var element = this.dino;
        element.style.position = "absolute";
        element.style.width = this.width + "px";
        element.style.height = this.height + "px";
        element.innerHTML = "";
        element.style.transform = "translate(" + this.positionX + "px," + this.positionY + "px)";
    };
    dino1.prototype.Update = function () {
        var element = this.dino;
        this.positionX += this.velocity;
        if (this.positionX <= 3000) {
            this.velocity *= -1;
        }
        if (this.positionX >= 3500) {
            this.velocity *= -1;
        }
        element.style.transform = "translate(" + this.positionX + "px," + this.positionY + "px)";
    };
    dino1.prototype.getvalues = function () {
        var xbegin;
        var xeind;
        var y;
        var height;
        var width;
        return {
            xbegin: this.positionX,
            xeind: this.positionX + this.width,
            y: this.positionY,
            height: this.height,
            width: this.width
        };
    };
    dino1.prototype.getRectangle = function () {
        return this.dino.getBoundingClientRect();
    };
    return dino1;
}());
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
        this.Dino = new dino1();
        this.Dino.Create();
        this.Dino.Opmaak();
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
        this.Bar.push(new Ground(320, window.innerHeight, 1380));
        this.Bar.push(new Ground(400, window.innerHeight, 1800));
        this.Bar.push(new Ground(920, window.innerHeight, 1980));
        this.Bar.push(new Ground(700, window.innerHeight, 3000));
        this.Bar.push(new Ground(530, window.innerHeight, 3770));
        this.Bar.forEach(function (ReadOut) {
            ReadOut.Create();
            ReadOut.Opmaak();
        });
    };
    Game.prototype.creategaps = function () {
        this.Gap.push(new Gap(100, window.innerHeight, 800));
        this.Gap.push(new Gap(80, window.innerHeight, 1300));
        this.Gap.push(new Gap(100, window.innerHeight, 1700));
        this.Gap.push(new Gap(80, window.innerHeight, 1900));
        this.Gap.push(new Gap(100, window.innerHeight, 2900));
        this.Gap.push(new Gap(70, window.innerHeight, 3700));
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
            if ((positioncharacter.xeind >= positionbar.xbegin) && (positioncharacter.xeind <= positionbar.xeind)) {
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
            if ((positioncharacter.xeind >= positionbar.xbegin) && (positioncharacter.xbegin <= positionbar.xeind)) {
                barhit = _this.checkCollision(ReadOut.getRectangle(), _this.Hoofdpersoon.getRectangle());
                if (barhit != true) {
                    console.log("hit");
                    _this.Hoofdpersoon.gravity(2, 5);
                }
                if (barhit == true) {
                    _this.Hoofdpersoon.gravity(1, 10);
                    if (positioncharacter.y >= window.innerHeight - 10) {
                        alert("Je bent af");
                    }
                }
            }
        });
    };
    Game.prototype.checkColisionDino = function () {
        var barhit;
        var positiondino = this.Dino.getvalues();
        var positioncharacter = this.Hoofdpersoon.getvalues();
        if ((positioncharacter.xeind >= positiondino.xbegin) && (positioncharacter.xeind <= positiondino.xeind)) {
            barhit = this.checkCollision(this.Dino.getRectangle(), this.Hoofdpersoon.getRectangle());
            if (barhit != true) {
                alert("Je bent dood door een Dino");
                console.log("hit by the dino");
            }
        }
    };
    Game.prototype.gameloop = function () {
        var _this = this;
        this.Dino.Update();
        this.Hoofdpersoon.Update();
        this.checkCollisionBar();
        this.checkCollisionGap();
        this.checkColisionDino();
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
        this.leftkeycode = 65;
        this.rightkeycode = 68;
        this.upkeycode = 87;
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
var Ball = (function () {
    function Ball() {
        this.xspeed = 2;
        this.yspeed = 2;
        this.div = document.createElement("ball");
        document.body.appendChild(this.div);
        this.x = Math.random() * (window.innerWidth - 40);
        this.y = Math.random() * (window.innerHeight - 40);
    }
    Ball.prototype.update = function () {
        this.x = this.x + this.xspeed;
        this.y = this.y + this.yspeed;
        if (this.y > window.innerHeight - 40 || this.y < 0) {
            this.yspeed *= -1;
        }
        this.div.style.transform = "translate(" + this.x + "px, " + this.y + "px)";
    };
    Ball.prototype.ChangeR = function () {
        this.xspeed = (this.xspeed * -2) - 1;
        console.log("Dit is de speed: " + this.xspeed);
    };
    Ball.prototype.ChangeL = function () {
        this.xspeed = (this.xspeed * -2) + 1;
        console.log("Dit is de speed: " + this.xspeed);
    };
    Ball.prototype.getRectangle = function () {
        return this.div.getBoundingClientRect();
    };
    return Ball;
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