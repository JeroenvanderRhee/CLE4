"use strict";
var translate = 0;
var Camera = (function () {
    function Camera(eindecanvas) {
        var _this = this;
        this.leftPress = 0;
        this.rightPress = 0;
        this.upPress = 0;
        this.spacePress = 0;
        this.positionXcam = 0;
        this.positionYcam = 0;
        this.positionXchar = positiehoofdpersoon;
        this.elementpathcam = document.getElementById("assets");
        this.translatecam = 0;
        this.positionYend = eindecanvas;
        this.leftkeycode = 65;
        this.rightkeycode = 68;
        this.upkeycode = 99;
        this.spacekeycode = 32;
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
            case this.spacekeycode:
                this.upPress = 0;
                break;
            case this.spacekeycode:
                this.spacePress = 0;
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
            case this.upkeycode:
                this.upPress = 1;
                break;
            case this.spacekeycode:
                this.spacePress = 1;
                break;
        }
    };
    Camera.prototype.update = function () {
        var element = this.elementpathcam;
        var snelheid = 5;
        if ((this.leftPress == 1) && (this.positionXcam == (0 - translate))) {
            this.leftPress = 0;
        }
        if (this.rightPress == 1) {
            translate -= snelheid;
            this.positionXcam -= snelheid;
        }
        if (this.leftPress == 1) {
            this.positionXcam += snelheid;
            translate += snelheid;
        }
        element.style.transform = "translate(" + this.positionXcam + "px," + this.positionYcam + "px)";
    };
    Camera.prototype.opmaakheadcharacter = function () {
    };
    return Camera;
}());
var Heks = (function () {
    function Heks(Xbegin) {
        this.heks = document.createElement("heks");
        this.width = 200;
        this.height = 230;
        this.velocity = 2;
        this.positionX = Xbegin;
        this.positionY = window.innerHeight - this.height - 56;
    }
    Heks.prototype.Create = function () {
        var childElement = document.getElementById("assets");
        var element = this.heks;
        childElement.appendChild(element);
        element.innerHTML = " ";
    };
    Heks.prototype.Opmaak = function () {
        var element = this.heks;
        element.style.position = "absolute";
        element.style.width = this.width + "px";
        element.style.height = this.height + "px";
        element.innerHTML = "";
        element.style.transform = "translate(" + this.positionX + "px," + this.positionY + "px)";
    };
    Heks.prototype.Update = function (positionxbegin, positionxeinde) {
        var element = this.heks;
        this.positionX += this.velocity;
        if (this.positionX <= positionxbegin) {
            this.velocity *= -1;
        }
        if (this.positionX >= positionxeinde - this.width) {
            this.velocity *= -1;
        }
        element.style.transform = "translate(" + this.positionX + "px," + this.positionY + "px)";
    };
    Heks.prototype.getvalues = function () {
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
    Heks.prototype.getRectangle = function () {
        return this.heks.getBoundingClientRect();
    };
    return Heks;
}());
var kleding = (function () {
    function kleding(x, y, width, height, source) {
        this.elementpath = document.createElement("kleding");
        this.name = "shirt";
        this.width = width;
        this.height = height;
        this.positionX = x;
        this.positionY = y - this.height - 56;
        this.sourceImage = source;
        this.Create();
        this.Opmaak();
    }
    kleding.prototype.getRectangle = function () {
        return this.elementpath.getBoundingClientRect();
    };
    kleding.prototype.Create = function () {
        var childElement = document.getElementById("assets");
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
        element.style.background = "url(" + this.sourceImage + ")";
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
var Fire = (function () {
    function Fire(Xbegin, Xeind) {
        this.spacePress = 0;
        this.elementpath = document.createElement("fireball");
        this.name = "Fire ball";
        this.img = "../img/Fire.png";
        this.width = 150;
        this.height = 340;
        this.velocity = 1.8;
        this.positionX = Xbegin;
        this.positionXbegin = Xbegin;
        this.positionXeind = Xeind;
        this.positionY = window.innerHeight - this.height - 60;
        this.create();
        this.Opmaak();
    }
    Fire.prototype.create = function () {
        var childElement = document.getElementById("assets");
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
    Fire.prototype.getRectangle = function () {
        return this.elementpath.getBoundingClientRect();
    };
    Fire.prototype.getvalues = function () {
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
var positiehoofdpersoon = 0;
var Game = (function () {
    function Game() {
        this.Bar = [];
        this.Gap = [];
        this.Heks = [];
        this.Kleding = [];
        this.Check = [];
        this.score = 0;
        this.Hoofdpersoon = new headCharacter();
        this.Hoofdpersoon.Create();
        this.Hoofdpersoon.Opmaak();
        this.Camera = new Camera(4200);
        this.Fireball = new Fire(1100, 1500);
        this.createbars();
        this.creategaps();
        this.createclothes();
        this.createcheck(5);
        this.createWitches();
    }
    Game.prototype.checkCollision = function (a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    };
    Game.prototype.createWitches = function () {
        this.Heks.push(new Heks(2000));
        this.Heks.push(new Heks(3000));
        this.Heks.forEach(function (ReadOut) {
            ReadOut.Create();
            ReadOut.Opmaak();
        });
    };
    Game.prototype.createcheck = function (hoeveelheid) {
        for (var i = 1; i <= hoeveelheid; i++) {
            this.Check.push(new State(i));
        }
    };
    Game.prototype.createclothes = function () {
        this.Kleding.push(new kleding(100, 400, 150, 230, "img/Middeleeuwen/dress.png"));
        this.Kleding.push(new kleding(880, window.innerHeight, 50, 280, "img/Middeleeuwen/zwaard.png"));
        this.Kleding.push(new kleding(800, window.innerHeight, 240, 150, "img/Middeleeuwen/stone.png"));
        this.Kleding.push(new kleding(3000, window.innerHeight, 90, 120, "img/Middeleeuwen/helm.png"));
        this.Kleding.push(new kleding(2600, window.innerHeight, 100, 89, "img/Middeleeuwen/schild.png"));
        this.Kleding.push(new kleding(4000, window.innerHeight, 400, 350, "img/Middeleeuwen/tijdmachine.png"));
    };
    Game.prototype.createbars = function () {
        this.Bar.push(new Ground(1920, window.innerHeight, 0));
        this.Bar.push(new Ground(920, window.innerHeight, 1980));
        this.Bar.push(new Ground(100, window.innerHeight, 2800));
        this.Bar.push(new Ground(920, 200, 1980));
        this.Bar.push(new Ground(400, 350, 2800));
        this.Bar.push(new Ground(700, window.innerHeight, 3000));
        this.Bar.push(new Ground(530, window.innerHeight, 3770));
        this.Bar.forEach(function (ReadOut) {
            ReadOut.Create();
            ReadOut.Opmaak();
        });
    };
    Game.prototype.creategaps = function () {
        this.Gap.push(new Gap(100, window.innerHeight, 1700));
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
            if (((positioncharacter.xeind - translate) >= positionbar.xbegin) && ((positioncharacter.xeind - translate) <= positionbar.xeind)) {
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
            if (((positioncharacter.xeind - translate) >= positionbar.xbegin) && ((positioncharacter.xeind - translate) <= positionbar.xeind)) {
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
    Game.prototype.checkColisionHeks = function () {
        var _this = this;
        var barhit;
        this.Heks.forEach(function (ReadOut) {
            var positionheks = ReadOut.getvalues();
            var positioncharacter = _this.Hoofdpersoon.getvalues();
            if (((positioncharacter.xeind - translate) >= positionheks.xbegin) && ((positioncharacter.xeind - translate) <= positionheks.xeind)) {
                barhit = _this.checkCollision(ReadOut.getRectangle(), _this.Hoofdpersoon.getRectangle());
                if (barhit == true) {
                    alert("Je bent dood door een heks");
                    console.log("hit by the heks");
                }
            }
        });
    };
    Game.prototype.checkCollisionKleding = function () {
        var _this = this;
        var barhit;
        var positionbar;
        var positioncharacter;
        this.Kleding.forEach(function (ReadOut) {
            positioncharacter = _this.Hoofdpersoon.getvalues();
            positionbar = ReadOut.getvalues();
            if (((positioncharacter.xeind - translate) >= positionbar.xbegin) && ((positioncharacter.xeind - translate) <= positionbar.xeind)) {
                barhit = _this.checkCollision(ReadOut.getRectangle(), _this.Hoofdpersoon.getRectangle());
                if (barhit == true) {
                    console.log("hit by de kleding");
                    ReadOut.elementpath.style.display = "none";
                    _this.Check[_this.score].imagagepath.style.display = "block";
                    _this.score++;
                }
            }
        });
    };
    Game.prototype.checkCollisionFire = function () {
        var barhit;
        var positionfire = this.Fireball.getvalues();
        var positioncharacter = this.Hoofdpersoon.getvalues();
        if (((positioncharacter.xeind - translate) >= positionfire.xbegin) && ((positioncharacter.xeind - translate) <= positionfire.xeind)) {
            barhit = this.checkCollision(this.Fireball.getRectangle(), this.Hoofdpersoon.getRectangle());
            if (barhit == true) {
                alert("Je bent dood door een fireball");
                console.log("hit by a fireball");
            }
        }
    };
    Game.prototype.gameloop = function () {
        this.Camera.update();
        this.Heks[0].Update(2000, 2700);
        this.Heks[1].Update(3000, 3700);
        this.Fireball.update();
        this.Hoofdpersoon.Update(window.innerHeight);
        this.checkCollisionBar();
        this.checkCollisionGap();
        this.checkColisionHeks();
        this.checkCollisionKleding();
        this.checkCollisionFire();
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
        this.width = 30;
        this.height = 150;
        this.velocity = 2;
        this.positionX = 60;
        this.positionY = window.innerHeight - this.height - 56;
        console.log(this.positionY);
        this.leftkeycode = 65;
        this.rightkeycode = 68;
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
                this.upPress = 1;
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
    headCharacter.prototype.Update = function (positionY) {
        positiehoofdpersoon = this.positionX;
        var element = this.elementpath;
        if (this.upPress == 1 && (this.positionY >= (positionY - this.height - 60)) && (this.positionY <= (positionY - 20))) {
            this.positionY -= 210;
            this.upPress = 0;
        }
        if (this.rightPress == 1) {
            var source = "img/Animatie_vooruit.gif";
            this.elementpath.style.background = "url(" + source + ") no-repeat center top";
            this.width = 84;
            this.elementpath.style.width = this.width + "px";
        }
        if (this.leftPress == 1) {
            var source = "img/Animatie_achteruit.gif";
            this.elementpath.style.background = "url(" + source + ") no-repeat center top";
            this.width = 84;
            this.elementpath.style.width = this.width + "px";
        }
        if ((this.rightPress == 0) && (this.leftPress == 0)) {
            var source = "img/Poppetje.png";
            this.elementpath.style.background = "url(" + source + ") no-repeat center top";
            this.width = 30;
            this.elementpath.style.width = this.width + "px";
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
//# sourceMappingURL=main.js.map