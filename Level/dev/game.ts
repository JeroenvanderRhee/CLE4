class Game{
    Hoofdpersoon:headCharacter

    constructor(){
        this.Hoofdpersoon = new headCharacter()
        this.Hoofdpersoon.Create()
        this.Hoofdpersoon.Opmaak()
        console.log("aangemaakt")
        this.gameloop()
    }

    private gameloop(){
        this.Hoofdpersoon.Update()
        requestAnimationFrame(() =>this.gameloop())
    }
}

window.addEventListener("load", () => new Game)