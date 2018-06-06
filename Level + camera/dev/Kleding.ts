class kleding {
    private name:string
    private width:number
    private height:number
    private positionX:number
    private positionY:number
    public elementpath:HTMLElement = document.createElement("kleding")

    
    constructor(x:number, y:number){
        //this.elementpath = document.createElement("kleding")
        this.name = "shirt"
        this.width = 93                                        //Zichtbare breedte kleding
        this.height = 167                                       //Hoogte positie kleding
        this.positionX = x        
        this.positionY = y - this.height - 56                       //Begin positie X kleding

        this.Create()
        this.Opmaak()
    }
    public getRectangle() {
        return this.elementpath.getBoundingClientRect()
    }
    
    
    private Create(){
        //document.body.appendChild(this.elementpath)
        let childElement = document.getElementById("assets")
        let element = this.elementpath
        childElement.appendChild(element)
        element.innerHTML = " "
    }

    //Opmaak scherm
    private Opmaak(){
        console.log("Opmaak werkt")
        let element = this.elementpath
        element.style.position = "absolute"
        element.style.width = this.width + "px"
        element.style.height = this.height + "px"
        element.innerHTML = ""
        element.style.transform = "translate(" + this.positionX + "px," +this.positionY + "px)"
    }

    public getvalues(){
        let xbegin : number
        let xeind : number
        let y :number
        let height:number
        let width:number
        let bar : HTMLElement
        return {
            //element : this.elementpath,
            xbegin : this.positionX,
            xeind : this.positionX + this.width,
            y : this.positionY,
            height : this.height,
            width : this.width
        }
    }
}