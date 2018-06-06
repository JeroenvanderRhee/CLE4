class State{
    private width_vakje:number
    private height_vakje:number
    public elementpath:HTMLElement = document.createElement("status")
    public imagagepath:HTMLElement = document.createElement("img")
    private positionX:number
    private positionY:number
    private hoeveelheid:number

    constructor(hoeveelheid:number){
        this.height_vakje = 50
        this.width_vakje = 50
        this.positionX = 20 + ((this.width_vakje + 2) * hoeveelheid)
        this.positionY = 20
        this.hoeveelheid = hoeveelheid
        this.setup()
    }

    private setup(){
    //let childElement:HTMLElement = document.getElementById("game")
    let childElement:HTMLElement = document.body
    let element = this.elementpath
    childElement.appendChild(element)
    element.innerHTML = " "
    element.style.position = "absolute"
    element.style.width = this.width_vakje + "px"
    element.style.height = this.height_vakje + "px"
    element.innerHTML = ""
    element.style.transform = "translate(" + this.positionX + "px," + this.positionY + "px)"
    element.style.border = "2px solid gray"
    this.arrow()
    }

    private arrow(){
        let element = this.imagagepath
        let childElement = document.getElementsByTagName("status")[0 + this.hoeveelheid - 1]
        childElement.appendChild(element)
        element.setAttribute("src", "../docs/img/Check.png")
        element.style.display = "none"
    }
}



