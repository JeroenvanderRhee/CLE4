class dino1 {
    //Dino Afbeelding
    private width:number            //Breedte Dino afbeelding
    private height:number
    private velocity:number
    private positionX:number
    private positionY:number
    private dino:HTMLElement = document.createElement("dino1")

    //KeyCodes
    private leftkeycode:number      //A
    private rightkeycode:number     //D
    private spacekeycode:number     //I
    private upkeycode: number       //W
    private downkeycode: number     //S

    private leftPress: number = 0
    private rightPress: number = 0
    private upPress: number = 0
    private downPress: number = 0
    private spacePress:number = 0
    
    constructor(){
        this.width = 200                                        //Zichtbare breedte Dino afbeelding
        this.height = 200                                       //Hoogte positie Dino
        this.velocity = 2
        this.positionX = 3000                                     //Begin positie X dino
        this.positionY = window.innerHeight - this.height - 56  //Veranderende Y positie Dino

        //toetsenbord besturing
        this.leftkeycode = 65                                   //A = 65 = naar links
        this.rightkeycode = 68                                  //D = 68 = naar rechts
        this.upkeycode = 87                                     //W = 87 = naar boven
        this.downkeycode = 83                                   //S = 83 = naar beneden 
        this.spacekeycode = 73                                  //I = 73 = Schieten       

        //Event Listener voor NIET ingedrukt
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
        
        //Event Listener voor WEL ingedrukt
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
    }

    //Acties wanneer keys DOWN
    private onKeyDown(e: KeyboardEvent): void {
        console.log(e.keyCode)
        switch (e.keyCode) {
            case this.leftkeycode:
                this.leftPress = 1
                break
            case this.rightkeycode:
                this.rightPress = 1
                break
            case this.upkeycode:
                this.upPress = 1
                break
            case this.downkeycode:
                this.downPress = 1;
                break
            case this.spacekeycode:
                this.spacePress = 1
                break
        }
    }

    //Acties wanneer key UP
    private onKeyUp(e: KeyboardEvent): void {
        console.log(e.keyCode)
        switch (e.keyCode) {
            case this.leftkeycode:
                this.leftPress = 0
                break
            case this.rightkeycode:
                this.rightPress = 0
                break
            case this.upkeycode:
                this.upPress = 0
                break
            case this.downkeycode:
                this.downPress = 0
                break
            case this.spacekeycode:
                this.spacePress = 0
                break
        }
    }
    
    //Creatie Dino in HTML Body
    public Create(){
        let childElement:HTMLElement = document.body
        //let element = document.createElement("dino1")
        let element = this.dino
        childElement.appendChild(element)
        element.innerHTML = " "
    }

    //Opmaak scherm, variabelen bij Constructor worden in werking gezet.
    public Opmaak(){
        //console.log("Opmaak werkt")
        let element = this.dino
        element.style.position = "absolute"
        element.style.width = this.width + "px"                                                     //Dino-breedte word in scherm geplaatst.
        element.style.height = this.height + "px"                                                   //Dino- hoogte word in scherm geplaatst. 
        element.innerHTML = ""
        element.style.transform = "translate(" + this.positionX + "px," + this.positionY + "px)"    //Dino's positie is aanpasbaar
    }

    //Update gezette stappen doormiddel van key's klikken;
    public Update(){
        let element = this.dino
        this.positionX += this.velocity
        if(this.positionX <= 3000){
            this.velocity *=-1;
        }

        if (this.positionX >= 3500) {
            this.velocity *= -1;
        }

        element.style.transform = "translate(" + this.positionX + "px," + this.positionY + "px)"
     }


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

    public getRectangle() {
        return this.dino.getBoundingClientRect()
    }
 }