class headCharacter {
    private name:string
    private width:number
    private height:number
    private velocity:number
    private positionX:number
    private positionY:number
    private image:string
    private elementpath:HTMLElement
    
    constructor(){
        this.name = "Aap"
        this.width = 100
        this.height = 300
        this.velocity = 2
        this.positionX = 0
        this.positionY = window.innerHeight
        this.image = "img/Poppetje.png"
        console.log("character created")
        this.elementpath = document.createElement("headcharacter")
    }

    public create(){
        let childElement = document.getElementsByTagName("body")
        let element = this.elementpath
        childElement[0].appendChild(element)
        element.innerHTML = "HOOOOIIII"
        element.style.backgroundColor = "red"
        element.style.width = this.width + "px"
        element.style.height = this.height + "px"
    }

}

let element = new headCharacter()
element.create()

