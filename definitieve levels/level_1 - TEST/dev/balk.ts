class Balk{
    private width:number
    private height:number
    private positionX:number
    private positionY:number
    private color:string
    private elementpath:HTMLElement = document.createElement("balk")

    constructor(){
        this.width = 2000
        this.height = 60
        this.color = "gray"
        this.positionX = 0
        this.positionY = innerHeight - 60
    }

    Create(){
        let childElement:HTMLElement = document.body
        let element = this.elementpath
        childElement.appendChild(element)
        element.innerHTML = " "
    }

    Opmaak(){
        let element = this.elementpath
        element.style.height = this.height + "px"
        element.style.width = this.width + "px"
        element.style.backgroundColor = this.color
        element.style.transform = "translate(" + this.positionX + "px," + this.positionY + "px)"
    }
}

let loopplank = new Balk()
loopplank.Create()
loopplank.Opmaak()