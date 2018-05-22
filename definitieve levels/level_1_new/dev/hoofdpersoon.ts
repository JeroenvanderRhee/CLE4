class headCharacter {
    private name:string
    private width:number
    private height:number
    private velocity:number
    private positionX:number
    private positionY:number
    private elementpath:HTMLElement = document.createElement("headcharacter")
    
    constructor(){
        this.name = "Aap"
        this.width = 31
        this.height = 141
        this.velocity = 2
        this.positionX = 20
        this.positionY = window.innerHeight - this.height - 56
    }

  public Create(){
        let childElement:HTMLElement = document.body
        //let element = document.createElement("headcharacter")
        let element = this.elementpath
        childElement.appendChild(element)
        element.innerHTML = " "
  }
  public Opmaak(){
    let element = this.elementpath
    element.style.position = "absolute"
    element.style.width = this.width + "px"
    element.style.height = this.height + "px"
    element.innerHTML = ""
    element.style.transform = "translate(" + this.positionX + "px," + this.positionY + "px)"
}
}