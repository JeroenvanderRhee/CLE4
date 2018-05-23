class Game{
    Hoofdpersoon:headCharacter
    private downkeycode: number
    private upkeycode: number

    constructor(){
        this.downkeycode = 40
        this.upkeycode = 38
        this.Hoofdpersoon = new headCharacter(this.upkeycode, this.downkeycode)
        this.Hoofdpersoon.Create()
        this.Hoofdpersoon.Opmaak()
        console.log("aangemaakt")
    }

    gameloop(){
        requestAnimationFrame(() =>this.gameloop())
    }
}

window.addEventListener("load", () => new Game)