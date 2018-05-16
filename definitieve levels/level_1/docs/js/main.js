"use strict";
<<<<<<< HEAD
console.log("test");
=======
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
    }
    headCharacter.prototype.create = function () {
        var element = document.createElement("headcharacter");
        element.appendChild("body");
    };
    return headCharacter;
}());
var head = new headCharacter();
>>>>>>> ad3511aa55ad46933ab7ee804b3ff74f76bbfbf9
//# sourceMappingURL=main.js.map