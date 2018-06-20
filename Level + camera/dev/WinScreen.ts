class Winnaarsscherm{
    private element:HTMLElement
    private Game : Game
    private click:boolean

    constructor(g:Game){
        let body = document.body
        body.innerHTML = ""

        this.Game = g
        this.element = document.createElement("youwon")
        this.click = false
        window.addEventListener("click", () => this.checkClick())
        this.create()
    }

    public loop():void{
        if(this.click == true){
            window.location.reload()
        }
    }

    private create():void{
        let childelement:HTMLElement = document.body
        childelement.appendChild(this.element)
        let textElement:HTMLElement = document.createElement("h1")
        let buttonElement:HTMLElement = document.createElement("button")
        this.element.appendChild(textElement)
        this.element.appendChild(buttonElement)
        textElement.innerHTML = "Je hebt gewonnen!"
        buttonElement.innerHTML = "Klik hier om naar het start scherm te gaan!"
    }


    private checkClick():void{
        this.click = true
    }
}
