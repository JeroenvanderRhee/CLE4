class Ground{
    private width:number
    private height:number
    private positionx:number
    private positiony:number
    private elementpath:HTMLElement = document.createElement("bar")

    //Geef bij het declareren het volgende mee Lengte, positie y en x
    constructor(width:number, positiony:number, positionx:number){
        this.width = width
        this.height = 56
        this.positionx = positionx
        this.positiony = positiony - this.height
    }

    //Aanmaak functie
    public Create(){
        let childElement = document.getElementById("camera")
        //let childElement = document.body.camera
        let element = this.elementpath
        //childElement.appendChild(element)
        childElement.appendChild(element)
        element.innerHTML = " "
    }

    //Opmaak functie
    public Opmaak(){
        let element = this.elementpath
        element.style.position = "absolute"
        element.style.width = this.width + "px"
        element.style.height = this.height + "px"
        element.innerHTML = ""
        element.style.transform = "translate(" + this.positionx + "px," + this.positiony + "px)"
    }

    //Geef waardes terug voor Collision
    public getRectangle() {
        return this.elementpath.getBoundingClientRect()
    }

    //geef nog meer waardes terug voor collision
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