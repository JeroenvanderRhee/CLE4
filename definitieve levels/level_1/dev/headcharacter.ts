class headCharacter {
    private name:string
    private width:number
    private height:number
    private velocity:number
    private positionX:number
    private positionY:number
    private image:string
    
    constructor(){
        this.name = "Aap"
        this.width = 100
        this.height = 300
        this.velocity = 2
        this.positionX = 0
        this.positionY = window.innerHeight
        this.image = "red"
        console.log("character created")
    }

    public create(){
        let element = document.createElement("headcharacter")
        element.appendChild("body")
    }
}

var head = new headCharacter()
