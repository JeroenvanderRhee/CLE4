class Game{
    private Screen:any

    constructor(){
        this.Screen = new Startscherm(this)
        // this.Screen = new Winnaarsscherm(this)
        this.gameloop()
    }

    private gameloop(){
        this.Screen.loop()
        requestAnimationFrame(() =>this.gameloop())
    }

    public showStartscherm(){
        this.Screen = new Startscherm(this)
    }

    public startNewGame(){
        let body:HTMLElement = document.body
        body.innerHTML = ""
        this.Screen = new Level1(this)
        // this.Screen = new Level2(this)
    }

    public startLevel2(){
        let body:HTMLElement = document.body
        body.innerHTML = ""
        this.Screen = new Level2(this)
    }

    public endGame(){
        let body:HTMLElement = document.body
        body.innerHTML = ""
       this.Screen = new Eindscherm(this)
    }

    public YouWon(){
        let body:HTMLElement = document.body
        body.innerHTML = ""
       this.Screen = new Eindscherm(this)
    }
}
window.addEventListener("load", () => new Game)