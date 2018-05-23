"use strict";
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
var game = new ex.Engine();
var paddle = new ex.Actor(150, game.drawHeight - 40, 200, 20);
paddle.vel.x = 5;
paddle.color = ex.Color.Chartreuse;
game.add(paddle);
game.start();
//# sourceMappingURL=main.js.map