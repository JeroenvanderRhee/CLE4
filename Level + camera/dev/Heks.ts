class Heks {
    //Dino Afbeelding
    private width:number            //Breedte Dino afbeelding
    private height:number
    private velocity:number
    private positionX:number
    private positionY:number
    private heks:HTMLElement = document.createElement("heks")
    private assets:HTMLElement
    
    constructor(Xbegin:number, assets:HTMLElement){
        this.assets = assets
        this.width = 181                                        //Zichtbare breedte Dino afbeelding
        this.height = 170                                       //Hoogte positie Dino
        this.velocity = 2
        this.positionX = Xbegin                                     //Begin positie X dino
        this.positionY = window.innerHeight - this.height - 56  //Veranderende Y positie Dino
    }

    //Creatie Dino in HTML Body
    public Create(){
        let element = this.heks
        this.assets.appendChild(element)
        element.innerHTML = " "
    }

    //Opmaak scherm, variabelen bij Constructor worden in werking gezet.
    public Opmaak(){
        //console.log("Opmaak werkt")
        let element = this.heks
        element.style.position = "absolute"
        element.style.width = this.width + "px"                                                     //Dino-breedte word in scherm geplaatst.
        element.style.height = this.height + "px"                                                   //Dino- hoogte word in scherm geplaatst. 
        element.innerHTML = ""
        element.style.transform = "translate(" + this.positionX + "px," + this.positionY + "px)"    //Dino's positie is aanpasbaar
    }

    //Update gezette stappen doormiddel van xbegin en xeind
    public Update(positionxbegin:number, positionxeinde:number){
        let element = this.heks
        this.positionX += this.velocity
        if(this.positionX <= positionxbegin){
            this.velocity *=-1;
        }

        if (this.positionX >= positionxeinde - this.width) {
            this.velocity *= -1;
        }

        element.style.transform = "translate(" + this.positionX + "px," + this.positionY + "px)"
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
            xbegin : this.positionX,
            xeind : this.positionX + this.width,
            ymax : this.positionY + this.height,
            ymin : this.positionY,
            height : this.height,
            width : this.width
        }
    }

    //Formule voor data voor collision
    public getRectangle() {
        return this.heks.getBoundingClientRect()
    }
 }