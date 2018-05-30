"use strict";
var Resource = {
    Poppetje: new ex.Texture('../img/poppetje.png'),
};
var game = new ex.Engine({
    width: 0,
    height: 0,
    canvasElementId: 'game',
    displayMode: ex.DisplayMode.FullScreen
});
game.setAntialiasing(false);
game.backgroundColor = ex.Color.Chartreuse.clone();
var poppetje = new Hoofdpersoon;
game.start();
var Hoofdpersoon = (function () {
    function Hoofdpersoon() {
        this.name = "Aap";
    }
    return Hoofdpersoon;
}());
//# sourceMappingURL=main.js.map