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
        this.elementpath = document.createElement("headcharacter");
    }
    headCharacter.prototype.create = function () {
        var childElement = document.getElementsByTagName("canvas");
        var element = this.elementpath;
        childElement[0].appendChild(element);
    };
    headCharacter.prototype.opmaak = function () {
        this.elementpath.style.backgroundImage;
    };
    return headCharacter;
}());
//# sourceMappingURL=main.js.map