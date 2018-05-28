class Ground{
    private width:number
    private height:number
    private positionx:number
    private positiony:number
    private elementpath:HTMLElement = document.createElement("bar")

    constructor(width:number, positiony:number, positionx:number){
        this.width = width
        this.height = 56
        this.positionx = positionx
        this.positiony = positiony - this.height
    }

    public Create(){
        let childElement:HTMLElement = document.body
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
        element.style.transform = "translate(" + this.positionx + "px," + this.positiony + "px)"
    }

    public getRectangle() {
        return this.elementpath.getBoundingClientRect()
    }

    public getvalues(){
        let xbegin : number
        let xeind : number
        let y :number
        let height:number
        let width:number
        let bar : HTMLElement
        return {
            element : this.elementpath,
            xbegin : this.positionx,
            xeind : this.positionx + this.width,
            y : this.positiony,
            height : this.height,
            width : this.width
        }
    }

}