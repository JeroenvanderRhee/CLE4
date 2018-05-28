class Game{
    Hoofdpersoon:headCharacter
    Dino1: evil

    constructor(){
        //Hoofdpersoon
        this.Hoofdpersoon = new headCharacter()
        this.Hoofdpersoon.Create()
        this.Hoofdpersoon.Opmaak()
        console.log("aangemaakt")

        //De Eerste dino.
        this.Dino1 = new evil()
        this.Dino1.Create()
        this.Dino1.Opmaak()
        console.log("Evil is made, not born.")
        this.gameloop()
    }

    private gameloop(){
        this.Hoofdpersoon.Update()
        requestAnimationFrame(() =>this.gameloop())
    }
}

window.addEventListener("load", () => new Game)