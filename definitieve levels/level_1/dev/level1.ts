class Game {
    private character:headCharacter[]
    constructor(){
        console.log("new game created")
this.character = []

        for(let i = 0;i<1; i++){
            let c = new headCharacter()
            this.character.push(c)
            c.create()
    
        }
        this.gameLoop()
    }
    gameLoop(){
        for(let c of this.character){
            c.create()
        }
        requestAnimationFrame(() =>this.gameLoop())
    }
}

window.addEventListener("load", () => new Game())

