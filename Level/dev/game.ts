class Game{
    Hoofdpersoon:headCharacter
    Dino1: dino1
    Kleding: kleding1

    constructor(){
        //Hoofdpersoon
        //let Hoofdpersoon = new headCharacter()
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
           // let Kleding = new kleding1()
            this.Kleding = new kleding1()
            this.Kleding.Create()
            this.Kleding.Opmaak()
            console.log("kleding.")

            let hit = this.checkCollision(this.Hoofdpersoon.getRectangle(), this.Kleding.getRectangle())
            console.log("raakt kleding aan " + hit)

        this.gameloop()
    }

    checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
     }

    private gameloop(){
        this.Hoofdpersoon.Update()
        this.Dino1.Update()
        this.Kleding.Update()
        requestAnimationFrame(() =>this.gameloop())
    }
}

window.addEventListener("load", () => new Game)