class Game{
    Hoofdpersoon:headCharacter
    Dino1: dino1
    Kleding: kleding1

    constructor(){
        //Hoofdpersoon
        this.Hoofdpersoon = new headCharacter()
        this.Hoofdpersoon.Create()
        this.Hoofdpersoon.Opmaak()
        console.log("aangemaakt")

        //De Eerste dino.
        this.Dino1 = new dino1()
        this.Dino1.Create()
        this.Dino1.Opmaak()
        console.log("Evil is made, not born.")

            //De Eerste kleding.
            this.Kleding = new kleding1()
            this.Kleding.Create()
            this.Kleding.Opmaak()
            console.log("kleding.")

        this.gameloop()
    }

    private gameloop(){
        this.Hoofdpersoon.Update()
        this.Dino1.Update()
        this.Kleding.Update()
        requestAnimationFrame(() =>this.gameloop())
    }
}

window.addEventListener("load", () => new Game)