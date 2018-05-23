
class headCharacter {
    private name:string
    private width:number
    private height:number
    private velocity:number
    private positionX:number
    private positionY:number
    private elementpath:HTMLElement = document.createElement("headcharacter")
    private leftkeycode:number
    private rightkeycode:number
    
    constructor(upkey:number, downkey:number){
        this.leftkeycode = downkey
        this.rightkeycode = upkey
        
        this.name = "Skelet"
        this.width = 40
        this.height = 200
        this.velocity = 2
        this.positionX = 20
        this.positionY = window.innerHeight - this.height - 56

        window.addEventListener("keyleft", keyEvents(event:KeyboardEvent))
        //(event: KeyboardEvent) => 
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

function keyEvents(event:KeyboardEvent){
    if(event.keyCode == 37){
        console.log("left")
    }

    if(event.keyCode == 39){
        console.log("right")
    }
}

