class dino1 {
    private name:string
    private width:number
    private height:number
    private velocity:number
    private positionX:number
    private positionY:number
    private elementpath:HTMLElement = document.createElement("dino1")
    private leftkeycode:number
    private rightkeycode:number
    private spacekeycode:number
    private leftPress: number = 0
    private rightPress: number = 0
    private spacePress:number = 0
    
    constructor(){
        this.name = "Skelet"
        this.width = 200                                        //Zichtbare breedte Dino
        this.height = 200                                       //Hoogte positie Dino
        this.velocity = 2
        this.positionX = 20                                     //Begin positie X dino
        this.positionY = window.innerHeight - this.height - 56  //Veranderende Y positie Dino

        //toetsenbord besturing
        this.leftkeycode = 65                                   //A = 65 = naar links
        this.rightkeycode = 68                                  //D = 68 = naar rechts 
        this.spacekeycode = 73                                  //I =   = Schieten       

        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
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
            case this.spacekeycode:
                this.spacePress = 0
                break
        }
    }
    
    public Create(){
        let childElement:HTMLElement = document.body
        //let element = document.createElement("dino1")
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
        element.style.transform = "translate(" + this.positionX + "px," + this.positionY + "px)"
    }

    //Update gezette stappen doormiddel van key's klikken;
    public Update(){
        let element = this.elementpath
        if(this.rightPress == 1){
            this.positionX += 5;
        }

        if(this.leftPress == 1){
            this.positionX -= 5;
        }

        if(this.spacePress == 1){
            this.positionY -= 5;
            this.spacePress = 0
        }

        element.style.transform = "translate(" + this.positionX + "px," + this.positionY + "px)"
    }
}



