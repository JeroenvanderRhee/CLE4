class Timemachine{
    private height:number
    private width:number
    private positionx:number
    private positiony:number
    private element:HTMLElement
    private child:HTMLElement
    constructor(positionx:number, assets:HTMLElement){
        this.child = assets
        this.width = 137
        this.height = 150
        this.positiony = window.innerHeight - 56 - this.height
        this.positionx = positionx
        this.element = document.createElement("tijdmachine")
        this.create()
    }

    private create(){
        let childElement = document.getElementById("assets")
        this.child.appendChild(this.element)
        this.element.innerHTML = " "
        this.opmaak()
    }
    
    private opmaak(){
        this.element.style.position = "absolute"
        this.element.style.width = this.width + "px"
        this.element.style.height = this.height + "px"
        this.element.style.transform = "translate(" + this.positionx + "px," +this.positiony+"px)"
    }   

         //Algemene functie voor waardes (voor evt. collision)
         public getvalues(){
            let xbegin : number
            let xeind : number
            let ymax : number
            let ymin :number
            let height: number
            let width: number
            return {
                xbegin : this.positionx,
                xeind : this.positionx + this.width,
                ymax : this.positiony + this.height,
                ymin : this.positiony,
                height : this.height,
                width : this.width
            }
        }
    
        //Formule voor data voor collision
        public getRectangle() {
            return this.element.getBoundingClientRect()
        }
}