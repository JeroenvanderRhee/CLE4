class kleding1 {
    private name:string
    private width:number
    private height:number
    private positionX:number
    private positionY:number
    private elementpath:HTMLElement = document.createElement("kleding1")

    
    constructor(){
        this.elementpath = document.createElement("kleding1")
        document.body.appendChild(this.elementpath)
        this.name = "shirt"
        this.width = 200                                        //Zichtbare breedte kleding
        this.height = 200                                       //Hoogte positie kleding
        this.positionX = 240        
        this.positionY = 400                                  //Begin positie X kleding

    }
    public getRectangle() {
        return this.elementpath.getBoundingClientRect()
    }
    
    
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

    //Update kleding stuk positie
    public Update(){
        
        let element = this.elementpath
        element.style.transform = "translate(" + this.positionX + "px," + this.positionY + "px)"
}



}