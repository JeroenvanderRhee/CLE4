"use strict";
var translate = 0;
var Camera = (function () {
    function Camera(eindecanvas, assets, speed) {
        var _this = this;
        this.leftPress = 0;
        this.rightPress = 0;
        this.upPress = 0;
        this.spacePress = 0;
        this.speed = speed;
        this.child = assets;
        this.positionXcam = 0;
        this.positionYcam = 0;
        this.positionXchar = positiehoofdpersoon;
        this.elementpathcam = this.child;
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
        var snelheid = this.speed;
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
        this.speed = 5;
    };
    Camera.prototype.terugTeleporteren = function () {
        var element = this.elementpathcam;
        translate += 5;
        this.positionXcam += 5;
        element.style.transform = "translate(" + this.positionXcam + "px," + this.positionYcam + "px)";
    };
    return Camera;
}());
var Eindscherm = (function () {
    function Eindscherm(g) {
        var _this = this;
        var body = document.body;
        body.innerHTML = "";
        this.Game = g;
        this.element = document.createElement("eindscherm");
        this.click = false;
        window.addEventListener("click", function () { return _this.checkClick(); });
        this.create();
    }
    Eindscherm.prototype.loop = function () {
        if (this.click == true) {
            window.location.reload();
        }
    };
    Eindscherm.prototype.create = function () {
        var childelement = document.body;
        childelement.appendChild(this.element);
        var textElement = document.createElement("h1");
        var buttonElement = document.createElement("button");
        this.element.appendChild(textElement);
        this.element.appendChild(buttonElement);
        textElement.innerHTML = "Game over...";
        buttonElement.innerHTML = "Klik hier om naar het start scherm te gaan!";
    };
    Eindscherm.prototype.checkClick = function () {
        this.click = true;
    };
    return Eindscherm;
}());
var Fire = (function () {
    function Fire(Xbegin, Xeind, assets) {
        this.spacePress = 0;
        this.elementpath = document.createElement("fireball");
        this.child = assets;
        this.name = "Fire ball";
        this.img = "../img/Fire.png";
        this.width = 54;
        this.height = 76;
        this.velocity = 1.8;
        this.positionX = Xbegin;
        this.positionXbegin = Xbegin;
        this.positionXeind = Xeind;
        this.positionY = window.innerHeight - this.height - 60;
        this.create();
        this.Opmaak();
    }
    Fire.prototype.create = function () {
        var element = this.elementpath;
        this.child.appendChild(element);
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
var Frollo = (function () {
    function Frollo(Xbegin, Xeind, assets) {
        this.spacePress = 0;
        this.elementpath = document.createElement("gekkeman");
        this.child = assets;
        this.width = 79;
        this.height = 170;
        this.velocity = 1.8;
        this.positionX = Xbegin;
        this.positionXbegin = Xbegin;
        this.positionXeind = Xeind;
        this.positionY = window.innerHeight - this.height - 56;
        this.create();
        this.Opmaak();
    }
    Frollo.prototype.create = function () {
        var childElement = document.getElementById("assets");
        var element = this.elementpath;
        this.child.appendChild(element);
        element.innerHTML = " ";
    };
    Frollo.prototype.Opmaak = function () {
        var element = this.elementpath;
        element.style.position = "absolute";
        element.style.width = this.width + "px";
        element.style.height = this.height + "px";
        element.innerHTML = "";
        element.style.transform = "translate(" + this.positionX + "px," + this.positionY + "px)";
    };
    Frollo.prototype.update = function () {
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
    Frollo.prototype.getRectangle = function () {
        return this.elementpath.getBoundingClientRect();
    };
    Frollo.prototype.getvalues = function () {
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
    return Frollo;
}());
var Heks = (function () {
    function Heks(Xbegin, assets) {
        this.heks = document.createElement("heks");
        this.assets = assets;
        this.width = 181;
        this.height = 170;
        this.velocity = 2;
        this.positionX = Xbegin;
        this.positionY = window.innerHeight - this.height - 56;
    }
    Heks.prototype.Create = function () {
        var element = this.heks;
        this.assets.appendChild(element);
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
    function kleding(x, y, width, height, source, assets) {
        this.elementpath = document.createElement("kleding");
        this.assets = assets;
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
        var element = this.elementpath;
        this.assets.appendChild(element);
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
var positiehoofdpersoon = 0;
var Level1 = (function () {
    function Level1(game) {
        this.Bar = [];
        this.Gap = [];
        this.Kleding = [];
        this.Check = [];
        this.score = 0;
        var assetsDiv = document.createElement("div");
        var childBody = document.body;
        childBody.appendChild(assetsDiv);
        assetsDiv.id = "assets";
        this.assets = assetsDiv;
        var barDiv = document.createElement("div");
        this.assets.appendChild(barDiv);
        barDiv.id = "bars";
        this.barasset = barDiv;
        document.body.style.background = "url(img/Background.jpg)";
        this.Game = game;
        this.Hoofdpersoon = new headCharacter();
        this.Camera = new Camera(4200, this.assets, 5);
        this.Fireball = new Fire(1380, 1700, this.assets);
        this.createbars();
        this.creategaps();
        this.createclothes();
        this.Dino = new Dino(3000, this.assets);
        this.Dino.Create();
        this.Dino.Opmaak();
        this.Hoofdpersoon.Create();
        this.Hoofdpersoon.Opmaak();
        this.Tijdmachine = new Timemachine(3950, this.assets);
        this.createcheck(3);
    }
    Level1.prototype.checkCollision = function (a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    };
    Level1.prototype.createcheck = function (hoeveelheid) {
        for (var i = 1; i <= hoeveelheid; i++) {
            this.Check.push(new State(i));
        }
    };
    Level1.prototype.createclothes = function () {
        this.Kleding.push(new kleding(300, window.innerHeight, 56, 100, "img/Tshirt.png", this.assets));
        this.Kleding.push(new kleding(1000, window.innerHeight, 76, 100, "img/Jurk.png", this.assets));
        this.Kleding.push(new kleding(3000, window.innerHeight, 100, 89, "img/Knuppel.png", this.assets));
    };
    Level1.prototype.createbars = function () {
        this.Bar.push(new Ground(800, window.innerHeight, 0, this.barasset));
        this.Bar.push(new Ground(400, window.innerHeight, 900, this.barasset));
        this.Bar.push(new Ground(320, window.innerHeight, 1380, this.barasset));
        this.Bar.push(new Ground(400, window.innerHeight, 1800, this.barasset));
        this.Bar.push(new Ground(920, window.innerHeight, 1980, this.barasset));
        this.Bar.push(new Ground(700, window.innerHeight, 3000, this.barasset));
        this.Bar.push(new Ground(1530, window.innerHeight, 3770, this.barasset));
        this.Bar.forEach(function (ReadOut) {
            ReadOut.Create();
            ReadOut.Opmaak();
        });
    };
    Level1.prototype.creategaps = function () {
        this.Gap.push(new Gap(100, window.innerHeight, 800, this.barasset));
        this.Gap.push(new Gap(80, window.innerHeight, 1300, this.barasset));
        this.Gap.push(new Gap(100, window.innerHeight, 1700, this.barasset));
        this.Gap.push(new Gap(80, window.innerHeight, 1900, this.barasset));
        this.Gap.push(new Gap(100, window.innerHeight, 2900, this.barasset));
        this.Gap.push(new Gap(70, window.innerHeight, 3700, this.barasset));
        this.Gap.forEach(function (ReadOut) {
            ReadOut.Create();
            ReadOut.Opmaak();
        });
    };
    Level1.prototype.checkCollisionBar = function () {
        var _this = this;
        var barhit;
        var positionbar;
        var positioncharacter;
        var check = 0;
        this.Bar.forEach(function (ReadOut) {
            positioncharacter = _this.Hoofdpersoon.getvalues();
            positionbar = ReadOut.getvalues();
            if ((((positioncharacter.xbegin - translate) >= positionbar.xbegin) && ((positioncharacter.xbegin - translate) <= positionbar.xeind))) {
                barhit = _this.checkCollision(ReadOut.getRectangle(), _this.Hoofdpersoon.getRectangle());
                if (barhit == true) {
                    check = 1;
                }
                if ((barhit != true) && (check == 0)) {
                    console.log("hit");
                    _this.Hoofdpersoon.gravity(0, 5);
                }
            }
        });
    };
    Level1.prototype.checkCollisionGap = function () {
        var _this = this;
        var barhit;
        var positionbar;
        var positioncharacter;
        this.Gap.forEach(function (ReadOut) {
            positioncharacter = _this.Hoofdpersoon.getvalues();
            positionbar = ReadOut.getvalues();
            var check = 0;
            if (((positioncharacter.xeind - translate) >= positionbar.xbegin) && ((positioncharacter.xbegin - translate) <= positionbar.xeind)) {
                barhit = _this.checkCollision(ReadOut.getRectangle(), _this.Hoofdpersoon.getRectangle());
                if (barhit == true) {
                    check = 1;
                    _this.Game.endGame();
                }
                if ((barhit != true) && (check == 0)) {
                    console.log("hit");
                    _this.Hoofdpersoon.gravity(0, 5);
                }
            }
        });
    };
    Level1.prototype.checkColisionDino = function () {
        var barhit;
        var positiondino = this.Dino.getvalues();
        var positioncharacter = this.Hoofdpersoon.getvalues();
        if (((positioncharacter.xeind - translate) >= positiondino.xbegin) && ((positioncharacter.xeind - translate) <= positiondino.xeind)) {
            barhit = this.checkCollision(this.Dino.getRectangle(), this.Hoofdpersoon.getRectangle());
            if (barhit == true) {
                this.Game.endGame();
            }
        }
    };
    Level1.prototype.checkColisionTijdmachine = function () {
        var positionTijdmachine = this.Tijdmachine.getvalues();
        var positioncharacter = this.Hoofdpersoon.getvalues();
        if (((positioncharacter.xeind - translate) >= positionTijdmachine.xbegin) && (this.score == 3)) {
            this.Game.startLevel2();
        }
        if (((positioncharacter.xeind - translate) >= positionTijdmachine.xbegin) && (!(this.score == 3))) {
            this.Camera.terugTeleporteren();
        }
    };
    Level1.prototype.checkCollisionKleding = function () {
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
    Level1.prototype.checkCollisionFire = function () {
        var barhit;
        var positionfire = this.Fireball.getvalues();
        var positioncharacter = this.Hoofdpersoon.getvalues();
        if (((positioncharacter.xeind - translate) >= positionfire.xbegin) && ((positioncharacter.xeind - translate) <= positionfire.xeind)) {
            barhit = this.checkCollision(this.Fireball.getRectangle(), this.Hoofdpersoon.getRectangle());
            if (barhit == true) {
                this.Game.endGame();
            }
        }
    };
    Level1.prototype.loop = function () {
        this.Camera.update();
        this.Dino.Update(3000, 3700);
        this.Fireball.update();
        this.Hoofdpersoon.Update(window.innerHeight);
        this.checkCollisionBar();
        this.checkCollisionGap();
        this.checkColisionDino();
        this.checkCollisionKleding();
        this.checkCollisionFire();
        this.checkColisionTijdmachine();
    };
    return Level1;
}());
var positiehoofdpersoon = 0;
var Level2 = (function () {
    function Level2(game) {
        this.Bar = [];
        this.Gap = [];
        this.Heks = [];
        this.Kleding = [];
        this.Check = [];
        this.score = 0;
        var assetsDiv = document.createElement("div");
        var childBody = document.body;
        childBody.appendChild(assetsDiv);
        assetsDiv.id = "assets";
        this.assets = assetsDiv;
        var barDiv = document.createElement("div");
        this.assets.appendChild(barDiv);
        barDiv.id = "bars";
        this.barasset = barDiv;
        document.body.style.background = "url(img/Background.jpg)";
        this.Game = game;
        this.Hoofdpersoon = new headCharacter();
        this.Hoofdpersoon.Create();
        this.Hoofdpersoon.Opmaak();
        document.body.style.background = "url(img/Middeleeuwen.jpg)";
        this.Camera = new Camera(4200, this.assets, 5);
        this.Tijdmachine = new Timemachine(3900, this.assets);
        this.Frollo = new Frollo(1100, 1500, this.assets);
        this.createbars();
        this.creategaps();
        this.createclothes();
        this.createcheck(4);
        this.createWitches();
    }
    Level2.prototype.checkCollision = function (a, b) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    };
    Level2.prototype.createWitches = function () {
        this.Heks.push(new Heks(2000, this.assets));
        this.Heks.push(new Heks(3000, this.assets));
        this.Heks.forEach(function (ReadOut) {
            ReadOut.Create();
            ReadOut.Opmaak();
        });
    };
    Level2.prototype.createcheck = function (hoeveelheid) {
        for (var i = 1; i <= hoeveelheid; i++) {
            this.Check.push(new State(i));
        }
    };
    Level2.prototype.createclothes = function () {
        this.Kleding.push(new kleding(700, window.innerHeight, 114, 170, "img/dress.png", this.assets));
        this.Kleding.push(new kleding(1880, window.innerHeight, 16, 120, "img/zwaard.png", this.assets));
        this.Kleding.push(new kleding(3000, window.innerHeight, 96, 120, "img/helm.png", this.assets));
        this.Kleding.push(new kleding(2600, window.innerHeight, 56, 120, "img/schild.png", this.assets));
    };
    Level2.prototype.createbars = function () {
        this.Bar.push(new Ground(1920, window.innerHeight, 0, this.barasset));
        this.Bar.push(new Ground(920, window.innerHeight, 1980, this.barasset));
        this.Bar.push(new Ground(100, window.innerHeight, 2800, this.barasset));
        this.Bar.push(new Ground(700, window.innerHeight, 3000, this.barasset));
        this.Bar.push(new Ground(530, window.innerHeight, 3770, this.barasset));
        this.Bar.forEach(function (ReadOut) {
            ReadOut.Create();
            ReadOut.Opmaak();
        });
    };
    Level2.prototype.creategaps = function () {
        this.Gap.push(new Gap(100, window.innerHeight, 1700, this.barasset));
        this.Gap.push(new Gap(100, window.innerHeight, 2900, this.barasset));
        this.Gap.push(new Gap(70, window.innerHeight, 3700, this.barasset));
        this.Gap.forEach(function (ReadOut) {
            ReadOut.Create();
            ReadOut.Opmaak();
        });
    };
    Level2.prototype.checkCollisionBar = function () {
        var _this = this;
        var barhit;
        var positionbar;
        var positioncharacter;
        var check = 0;
        this.Bar.forEach(function (ReadOut) {
            positioncharacter = _this.Hoofdpersoon.getvalues();
            positionbar = ReadOut.getvalues();
            if ((((positioncharacter.xbegin - translate) >= positionbar.xbegin) && ((positioncharacter.xbegin - translate) <= positionbar.xeind))) {
                barhit = _this.checkCollision(ReadOut.getRectangle(), _this.Hoofdpersoon.getRectangle());
                if (barhit == true) {
                    check = 1;
                }
                if ((barhit != true) && (check == 0)) {
                    console.log("hit");
                    _this.Hoofdpersoon.gravity(0, 5);
                }
            }
        });
    };
    Level2.prototype.checkCollisionGap = function () {
        var _this = this;
        var barhit;
        var positionbar;
        var positioncharacter;
        this.Gap.forEach(function (ReadOut) {
            positioncharacter = _this.Hoofdpersoon.getvalues();
            positionbar = ReadOut.getvalues();
            if (((positioncharacter.xbegin - translate) >= positionbar.xbegin) && ((positioncharacter.xbegin - translate) <= positionbar.xeind)) {
                barhit = _this.checkCollision(ReadOut.getRectangle(), _this.Hoofdpersoon.getRectangle());
                if (barhit != true) {
                    console.log("hit");
                    _this.Hoofdpersoon.gravity(0, 10);
                }
                if (barhit == true) {
                    _this.Hoofdpersoon.gravity(1, 10);
                    if (positioncharacter.y >= (window.innerHeight - 70)) {
                        _this.Game.endGame();
                    }
                }
            }
        });
    };
    Level2.prototype.checkColisionHeks = function () {
        var _this = this;
        var barhit;
        this.Heks.forEach(function (ReadOut) {
            var positionheks = ReadOut.getvalues();
            var positioncharacter = _this.Hoofdpersoon.getvalues();
            if (((positioncharacter.xeind - translate) >= positionheks.xbegin) && ((positioncharacter.xeind - translate) <= positionheks.xeind)) {
                barhit = _this.checkCollision(ReadOut.getRectangle(), _this.Hoofdpersoon.getRectangle());
                if (barhit == true) {
                    _this.Game.endGame();
                }
            }
        });
    };
    Level2.prototype.checkCollisionKleding = function () {
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
    Level2.prototype.checkCollisionFire = function () {
        var barhit;
        var positionfire = this.Frollo.getvalues();
        var positioncharacter = this.Hoofdpersoon.getvalues();
        if (((positioncharacter.xeind - translate) >= positionfire.xbegin) && ((positioncharacter.xeind - translate) <= positionfire.xeind)) {
            barhit = this.checkCollision(this.Frollo.getRectangle(), this.Hoofdpersoon.getRectangle());
            if (barhit == true) {
                this.Game.endGame();
            }
        }
    };
    Level2.prototype.checkColisionTijdmachine = function () {
        var positionTijdmachine = this.Tijdmachine.getvalues();
        var positioncharacter = this.Hoofdpersoon.getvalues();
        if (((positioncharacter.xeind - translate) >= positionTijdmachine.xbegin) && (this.score == 4)) {
            this.Game.YouWon();
        }
        if (((positioncharacter.xeind - translate) >= positionTijdmachine.xbegin) && (!(this.score == 4))) {
            this.Camera.terugTeleporteren();
        }
    };
    Level2.prototype.loop = function () {
        this.Camera.update();
        this.Heks[0].Update(2000, 2700);
        this.Heks[1].Update(3000, 3700);
        this.Frollo.update();
        this.Hoofdpersoon.Update(window.innerHeight);
        this.checkCollisionBar();
        this.checkCollisionGap();
        this.checkColisionHeks();
        this.checkCollisionKleding();
        this.checkCollisionFire();
        this.checkColisionTijdmachine();
    };
    return Level2;
}());
var Timemachine = (function () {
    function Timemachine(positionx, assets) {
        this.child = assets;
        this.width = 137;
        this.height = 150;
        this.positiony = window.innerHeight - 56 - this.height;
        this.positionx = positionx;
        this.element = document.createElement("tijdmachine");
        this.create();
    }
    Timemachine.prototype.create = function () {
        var childElement = document.getElementById("assets");
        this.child.appendChild(this.element);
        this.element.innerHTML = " ";
        this.opmaak();
    };
    Timemachine.prototype.opmaak = function () {
        this.element.style.position = "absolute";
        this.element.style.width = this.width + "px";
        this.element.style.height = this.height + "px";
        this.element.style.transform = "translate(" + this.positionx + "px," + this.positiony + "px)";
    };
    Timemachine.prototype.getvalues = function () {
        var xbegin;
        var xeind;
        var ymax;
        var ymin;
        var height;
        var width;
        return {
            xbegin: this.positionx,
            xeind: this.positionx + this.width,
            ymax: this.positiony + this.height,
            ymin: this.positiony,
            height: this.height,
            width: this.width
        };
    };
    Timemachine.prototype.getRectangle = function () {
        return this.element.getBoundingClientRect();
    };
    return Timemachine;
}());
var Winnaarsscherm = (function () {
    function Winnaarsscherm(g) {
        var _this = this;
        var body = document.body;
        body.innerHTML = "";
        this.Game = g;
        this.element = document.createElement("youwon");
        this.click = false;
        window.addEventListener("click", function () { return _this.checkClick(); });
        this.create();
    }
    Winnaarsscherm.prototype.loop = function () {
        if (this.click == true) {
            window.location.reload();
        }
    };
    Winnaarsscherm.prototype.create = function () {
        var childelement = document.body;
        childelement.appendChild(this.element);
        var textElement = document.createElement("h1");
        var buttonElement = document.createElement("button");
        this.element.appendChild(textElement);
        this.element.appendChild(buttonElement);
        textElement.innerHTML = "Je hebt gewonnen!";
        buttonElement.innerHTML = "Klik hier om naar het start scherm te gaan!";
    };
    Winnaarsscherm.prototype.checkClick = function () {
        this.click = true;
    };
    return Winnaarsscherm;
}());
var Dino = (function () {
    function Dino(Xbegin, assets) {
        this.dino = document.createElement("dino1");
        this.child = assets;
        this.width = 96;
        this.height = 120;
        this.velocity = 2;
        this.positionX = Xbegin;
        this.positionY = window.innerHeight - this.height - 56;
    }
    Dino.prototype.Create = function () {
        var element = this.dino;
        this.child.appendChild(element);
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
var Gap = (function () {
    function Gap(width, positiony, positionx, childAsset) {
        this.elementpath = document.createElement("gap");
        this.child = childAsset;
        this.width = width;
        this.height = 56;
        this.positionx = positionx;
        this.positiony = positiony - this.height;
    }
    Gap.prototype.Create = function () {
        var element = this.elementpath;
        this.child.appendChild(element);
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
        this.Screen = new Startscherm(this);
        this.gameloop();
    }
    Game.prototype.gameloop = function () {
        var _this = this;
        this.Screen.loop();
        requestAnimationFrame(function () { return _this.gameloop(); });
    };
    Game.prototype.showStartscherm = function () {
        this.Screen = new Startscherm(this);
    };
    Game.prototype.startNewGame = function () {
        var body = document.body;
        body.innerHTML = "";
        this.Screen = new Level1(this);
    };
    Game.prototype.startLevel2 = function () {
        var body = document.body;
        body.innerHTML = "";
        this.Screen = new Level2(this);
    };
    Game.prototype.endGame = function () {
        var body = document.body;
        body.innerHTML = "";
        this.Screen = new Eindscherm(this);
    };
    Game.prototype.YouWon = function () {
        var body = document.body;
        body.innerHTML = "";
        this.Screen = new Winnaarsscherm(this);
    };
    return Game;
}());
window.addEventListener("load", function () { return new Game; });
var Ground = (function () {
    function Ground(width, positiony, positionx, asset) {
        this.elementpath = document.createElement("bar");
        this.child = asset;
        this.width = width;
        this.height = 56;
        this.positionx = positionx;
        this.positiony = positiony - this.height;
    }
    Ground.prototype.Create = function () {
        var element = this.elementpath;
        this.child.appendChild(element);
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
        if (this.upPress == 1 && (this.positionY >= (positionY - this.height - 56)) && (this.positionY <= (positionY - 80))) {
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
        this.width = 30;
        var xbegin;
        var xeind;
        var y;
        var height;
        var width;
        var bar;
        return {
            element: this.elementpath,
            xbegin: this.positionX,
            xeind: this.positionX + 30,
            y: this.positionY,
            height: this.height,
            width: 30
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
    function Startscherm(game) {
        var _this = this;
        this.elementpath = document.createElement("startscherm");
        this.width = 100;
        this.height = 100;
        this.spacekey = 32;
        this.spacepressed = 0;
        window.addEventListener("keyup", function (e) { return _this.onKeyUp(e); });
        window.addEventListener("keydown", function (e) { return _this.onKeyDown(e); });
        this.Game = game;
        this.create();
        this.Opmaak();
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
    Startscherm.prototype.loop = function () {
        if (this.spacepressed == 1) {
            this.elementpath.style.display = "none";
            this.Game.startNewGame();
        }
    };
    return Startscherm;
}());
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