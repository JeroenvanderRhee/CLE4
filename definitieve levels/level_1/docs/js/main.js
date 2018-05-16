"use strict";
var headCharacter = (function () {
    function headCharacter() {
        this.name = "Aap";
        this.width = 100;
        this.height = 300;
        this.velocity = 2;
        this.positionX = 0;
        this.positionY = window.innerHeight;
        this.image = "img/Poppetje.png";
        console.log("character created");
        this.elementpath = document.createElement("headcharacter");
    }
    headCharacter.prototype.create = function () {
        var childElement = document.getElementsByTagName("body");
        var element = this.elementpath;
        childElement[0].appendChild(element);
        element.innerHTML = "HOOOOIIII";
        element.style.backgroundColor = "red";
        element.style.width = this.width + "px";
        element.style.height = this.height + "px";
    };
    return headCharacter;
}());
var element = new headCharacter();
element.create();
console.log("test");
//# sourceMappingURL=main.js.map