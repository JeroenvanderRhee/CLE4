class Startscherm {
    private Game:Game
    private width :number
    private height :number
    private spacekey :number
    private spacepressed :number
    private elementpath:HTMLElement = document.createElement("startscherm")

    constructor(){
        this.width = 100
        this.height = 100
        this.spacekey =32
        this.spacepressed = 0

        //event listeners voor toetsenbord
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
        this.Game = new Game()
        this.create()
        this.Opmaak()
        this.gameloop()
    }

    //Maak het scherm aan
    private create(){
        let childElement:HTMLElement = document.body
        //let element = document.createElement("headcharacter")
        let element = this.elementpath
        childElement.appendChild(element)
        element.innerHTML = "Klik op de spatie toets om te beginnen"
    }

        //de opmaak functie    
        private Opmaak(){
            let element = this.elementpath
            element.style.position = "absolute"
            element.style.width = this.width + "%"
            element.style.height = this.height + "%"
            element.innerHTML = ""
        }

    //wanneer er een toets is ingedrukt
    private onKeyDown(e: KeyboardEvent): void {
        console.log(e.keyCode)
        switch (e.keyCode) {
            case this.spacekey:
                this.spacepressed = 0
                break
        }
    }

    //Wanneer een toets weer omhoog is gekomen
    private onKeyUp(e: KeyboardEvent): void {
        console.log(e.keyCode)
        switch (e.keyCode) {
            case this.spacekey:
                this.spacepressed = 1
                break
        }
    }

    //Dit is de gameloop. Hierin worden alle assets geupdate en word de collision bij gehouden
    public gameloop(){
        //Als er op de spatie toets word gedrukt gaat hij weg.
        if(this.spacepressed == 1){
            this.elementpath.style.display = "none"
        }

        this.Game.gameloop()

        requestAnimationFrame(() =>this.gameloop())
    }
}

window.addEventListener("load", () => new Startscherm)