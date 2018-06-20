class kleding {
    private name:string
    private width:number
    private height:number
    private positionX:number
    private positionY:number
    private sourceImage:string
    public elementpath:HTMLElement = document.createElement("kleding")
    private assets:HTMLElement

    
    constructor(x:number, y:number, width:number, height:number, source:string, assets:HTMLElement){
        //this.elementpath = document.createElement("kleding")
        this.assets = assets
        this.name = "shirt"
        this.width = width                                       //Zichtbare breedte kleding
        this.height = height                                      //Hoogte positie kleding
        this.positionX = x        
        this.positionY = y - this.height - 56                       //Begin positie X kleding
        this.sourceImage = source

        this.Create()
        this.Opmaak()
    }
    public getRectangle() {
        return this.elementpath.getBoundingClientRect()
    }
    
    
    private Create(){
        let element = this.elementpath
        this.assets.appendChild(element)
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
        element.style.background = "url("+this.sourceImage+")"// no-repeat center top"
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