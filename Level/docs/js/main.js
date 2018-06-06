"use strict";
var kleding = (function () {
    function kleding(x, y) {
        this.elementpath = document.createElement("kleding");
        this.name = "shirt";
        this.width = 93;
        this.height = 167;
        this.positionX = x;
        this.positionY = y - this.height - 56;
        this.Create();
        this.Opmaak();
    }
    kleding.prototype.getRectangle = function () {
        return this.elementpath.getBoundingClientRect();
    };
    kleding.prototype.Create = function () {
        var childElement = document.body;
        var element = this.elementpath;
        childElement.appendChild(element);
        element.innerHTML = " ";
    };
    kleding.prototype.Opmaak = function () {
        console.log("Opmaak werkt");
        var element = this.elementpath;
        element.style.position = "absolute";
        element.style.width = this.width + "px";
        element.style.height = this.height + "px";
        element.innerHTML = "";
        element.style.transform = "translate(" + this.positionX + "px," + this.positionY + "px)";
    };
    kleding.prototype.getvalues = function () {
        var xbegin;
        var xeind;
        var y;
        var height;
        var width;
        var bar;
        return {
            xbegin: this.positionX,
            xeind: this.positionX + this.width,
            y: this.positionY,
            height: this.height,
            width: this.width
        };
    };
    return kleding;
}());
var Dino = (function () {
    function Dino(Xbegin) {
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
        this.positionX = Xbegin;
        this.positionY = window.innerHeight - this.height - 56;
        this.leftkeycode = 65;
        this.rightkeycode = 68;
        this.upkeycode = 87;
        this.downkeycode = 83;
        this.spacekeycode = 73;
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
    }
    Dino.prototype.onKeyDown = function (e) {
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
    Dino.prototype.onKeyUp = function (e) {
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
    Dino.prototype.Create = function () {
        var childElement = document.body;
        var element = this.dino;
        childElement.appendChild(element);
        element.innerHTML = " ";
    };
    Dino.prototype.Opmaak = function () {
        var element = this.dino;
        element.style.position = "absolute";
        element.style.width = this.width + "px";
        element.style.height = this.height + "px";
        element.innerHTML = "";
        element.style.transform = "translate(" + this.positionX + "px," + this.positionY + "px)";
    };
    Dino.prototype.Update = function (positionxbegin, positionxeinde) {
        var element = this.dino;
        this.positionX += this.velocity;
        if (this.positionX <= positionxbegin) {
            this.velocity *= -1;
        }
        if (this.positionX >= positionxeinde - this.width) {
            this.velocity *= -1;
        }
        element.style.transform = "translate(" + this.positionX + "px," + this.positionY + "px)";
    };
    Dino.prototype.getvalues = function () {
        var xbegin;
        var xeind;
        var ymax;
        var ymin;
        var height;
        var width;
        return {
            xbegin: this.positionX,
            xeind: this.positionX + this.width,
            ymax: this.positionY + this.height,
            ymin: this.positionY,
            height: this.height,
            width: this.width
        };
    };
    Dino.prototype.getRectangle = function () {
        return this.dino.getBoundingClientRect();
    };
    return Dino;
}());
var Fire = (function () {
    function Fire(Xbegin, Xeind) {
        this.spacePress = 0;
        this.elementpath = document.createElement("fireball");
        this.name = "Fire ball";
        this.img = "../img/Fire.png";
        this.width = 60;
        this.height = 80;
        this.velocity = 1.8;
        this.positionX = Xbegin;
        this.positionXbegin = Xbegin;
        this.positionXeind = Xeind;
        this.positionY = window.innerHeight - this.height - 60;
        this.create();
        this.Opmaak();
    }
    Fire.prototype.create = function () {
        var childElement = document.body;
        var element = this.elementpath;
        childElement.appendChild(element);
        element.innerHTML = " ";
    };
    Fire.prototype.Opmaak = function () {
        var element = this.elementpath;
        element.style.position = "absolute";
        element.style.width = this.width + "px";
        element.style.height = this.height + "px";
        element.innerHTML = "";
        element.style.transform = "translate(" + this.positionX + "px," + this.positionY + "px)";
    };
    Fire.prototype.update = function () {
        var element = this.elementpath;
        var speed = this.velocity;
        this.positionX += speed;
        if (this.positionX <= this.positionXbegin) {
            this.velocity *= -1;
        }
        if (this.positionX >= this.positionXeind - this.width) {
            this.velocity *= -1;
        }
        element.style.transform = "translate(" + (this.positionX) + "px," + this.positionY + "px)";
    };
    return Fire;
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
        var childElement = document.getElementById("bars");
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
        this.Check = [];
        this.score = 0;
        this.Hoofdpersoon = new headCharacter();
        this.Fireball = new Fire(1380, 1700);
        this.Dino = new Dino(3000);
        this.Dino.Create();
        this.Dino.Opmaak();
        this.Hoofdpersoon.Create();
        this.Hoofdpersoon.Opmaak();
        this.createbars();
        this.creategaps();
        this.Kleding = new kleding(300, window.innerHeight);
        this.createcheck(3);
    }
    Game.prototype.checkCollision = function (a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    };
    Game.prototype.createcheck = function (hoeveelheid) {
        for (var i = 1; i <= hoeveelheid; i++) {
            this.Check.push(new State(i));
        }
    };
    Game.prototype.createbars = function () {
        this.Bar.push(new Ground(800, window.innerHeight, 0));
        this.Bar.push(new Ground(400, window.innerHeight, 900));
        this.Bar.push(new Ground(320, window.innerHeight, 1380));
        this.Bar.push(new Ground(400, window.innerHeight, 1800));
        this.Bar.push(new Ground(920, window.innerHeight, 1980));
        this.Bar.push(new Ground(700, window.innerHeight, 3000));
        this.Bar.push(new Ground(530, window.innerHeight, 3770));
        this.Bar.push(new Ground(530, window.innerHeight - 400, 600));
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
        console.log("Bar");
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
                    _this.Hoofdpersoon.gravity(0, 5);
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
            if (barhit == true) {
                alert("Je bent dood door een Dino");
                console.log("hit by the dino");
            }
        }
    };
    Game.prototype.checkCollisionKleding = function () {
        var barhit;
        var positionkleding = this.Kleding.getvalues();
        var positioncharacter = this.Hoofdpersoon.getvalues();
        if ((positioncharacter.xeind >= positionkleding.xbegin) && (positioncharacter.xeind <= positionkleding.xeind)) {
            barhit = this.checkCollision(this.Kleding.getRectangle(), this.Hoofdpersoon.getRectangle());
            if (barhit == true) {
                console.log("hit by de kleding");
                this.Kleding.elementpath.style.display = "none";
                this.Check[this.score].imagagepath.style.display = "block";
                this.score++;
            }
        }
    };
    Game.prototype.gameloop = function () {
        this.Dino.Update(3000, 3700);
        this.Fireball.update();
        this.Hoofdpersoon.Update();
        this.checkCollisionBar();
        this.checkCollisionGap();
        this.checkColisionDino();
        this.checkCollisionKleding();
    };
    return Game;
}());
var Ground = (function () {
    function Ground(width, positiony, positionx) {
        this.elementpath = document.createElement("bar");
        this.width = width;
        this.height = 56;
        this.positionx = positionx;
        this.positiony = positiony - this.height;
    }
    Ground.prototype.Create = function () {
        var childElement = document.getElementById("bars");
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
        if (this.upPress == 1) {
            this.positionY -= 210;
            this.positionX += snelheid + 5;
            this.upPress = 0;
        }
        if (this.leftPress == 1 && this.positionX == 0) {
            this.leftPress = 0;
        }
        if (this.rightPress == 1 && this.positionX == 4000) {
            console.log("Muur Rechts");
            this.rightPress = 0;
        }
        if (this.rightPress == 1) {
            this.positionX += snelheid;
        }
        if (this.leftPress == 1) {
            this.positionX -= snelheid;
        }
        console.log(this.positionX);
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
var Startscherm = (function () {
    function Startscherm() {
        var _this = this;
        this.elementpath = document.createElement("startscherm");
        this.width = 100;
        this.height = 100;
        this.spacekey = 32;
        this.spacepressed = 0;
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        this.Game = new Game();
        this.create();
        this.Opmaak();
        this.gameloop();
    }
    Startscherm.prototype.create = function () {
        var childElement = document.body;
        var element = this.elementpath;
        childElement.appendChild(element);
        element.innerHTML = "Klik op de spatie toets om te beginnen";
    };
    Startscherm.prototype.Opmaak = function () {
        var element = this.elementpath;
        element.style.position = "absolute";
        element.style.width = this.width + "%";
        element.style.height = this.height + "%";
        element.innerHTML = "";
    };
    Startscherm.prototype.onKeyDown = function (e) {
        console.log(e.keyCode);
        switch (e.keyCode) {
            case this.spacekey:
                this.spacepressed = 0;
                break;
        }
    };
    Startscherm.prototype.onKeyUp = function (e) {
        console.log(e.keyCode);
        switch (e.keyCode) {
            case this.spacekey:
                this.spacepressed = 1;
                break;
        }
    };
    Startscherm.prototype.gameloop = function () {
        var _this = this;
        if (this.spacepressed == 1) {
            this.elementpath.style.display = "none";
        }
        this.Game.gameloop();
        requestAnimationFrame(function () { return _this.gameloop(); });
    };
    return Startscherm;
}());
window.addEventListener("load", function () { return new Startscherm; });
var State = (function () {
    function State(hoeveelheid) {
        this.elementpath = document.createElement("status");
        this.imagagepath = document.createElement("img");
        this.height_vakje = 50;
        this.width_vakje = 50;
        this.positionX = 20 + ((this.width_vakje + 2) * hoeveelheid);
        this.positionY = 20;
        this.hoeveelheid = hoeveelheid;
        this.setup();
    }
    State.prototype.setup = function () {
        var childElement = document.body;
        var element = this.elementpath;
        childElement.appendChild(element);
        element.innerHTML = " ";
        element.style.position = "absolute";
        element.style.width = this.width_vakje + "px";
        element.style.height = this.height_vakje + "px";
        element.innerHTML = "";
        element.style.transform = "translate(" + this.positionX + "px," + this.positionY + "px)";
        element.style.border = "2px solid gray";
        this.arrow();
    };
    State.prototype.arrow = function () {
        var element = this.imagagepath;
        var childElement = document.getElementsByTagName("status")[0 + this.hoeveelheid - 1];
        childElement.appendChild(element);
        element.setAttribute("src", "../docs/img/Check.png");
        element.style.display = "none";
    };
    return State;
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