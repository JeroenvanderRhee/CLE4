class kleding1 {
    private name:string
    private width:number
    private height:number
    private velocity:number
    private positionX:number
    private positionY:number
    private elementpath:HTMLElement = document.createElement("dino1")

    
    constructor(){
        this.name = "shirt"
        this.width = 200                                        //Zichtbare breedte Dino
        this.height = 200                                       //Hoogte positie Dino
        this.velocity = 2
        this.positionX = 20    
        this.positionY = 20                                  //Begin positie X dino

    }

    //Acties wanneer keys DOWN
    
    
    public Create(){
        let childElement:HTMLElement = document.body
        let element = this.elementpath
        childElement.appendChild(element)
        element.innerHTML = " "
    }

    //Opmaak scherm
    public Opmaak(){
        console.log("Opmaak werkt")
        let element = this.elementpath
        element.style.position = "absolute"
        element.style.width = this.width + "px"
        element.style.height = this.height + "px"
        element.innerHTML = ""
    }

    //Update gezette stappen doormiddel van key's klikken;
    public Update(){
        let element = this.elementpath
       
}



}
