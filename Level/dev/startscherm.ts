//Begin Scherm- Start the Game!
class StartScreen {

    private div: HTMLElement
    private Game : Game 
    screen: any

    constructor(g:Game) {
        //this.game = g
        this.Game = new Game()
        //Splash element is opgehaald van style.css & verwerkt in index.html
        this.div = document.createElement("splash")
        document.body.appendChild(this.div)

        //Als je klikt word slashClicked functie uitgevoerd.
        this.div.addEventListener("click", ()=>this.showPlayScreen())
        this.div.innerHTML = "START THE GAME"
    }
    

    //Update functie
    public update(){
        
    }

    public showPlayScreen(){

        //Dit maakt de body van html leeg, zodat je alleen het achergrond ziet.
        document.body.innerHTML = ""

        //"This" is een instance. De variabele this.screen verwijst naar playscreen.ts
        this.screen =this.game.gameloop()

    }
}