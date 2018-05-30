
class headCharacter {
    private name:string
    private width:number
    private height:number
    private velocity:number
    private positionX:number
    private positionY:number
    private elementpath1:HTMLElement = document.createElement("headcharacter")
    private leftkeycode:number
    private rightkeycode:number
    private spacekeycode:number
    private leftPress: number = 0
    private rightPress: number = 0
    private spacePress:number = 0
    
    constructor(){
        this.elementpath1 = document.createElement("headcharacter")
        document.body.appendChild(this.elementpath1)
        this.name = "Skelet"
        this.width = 40
        this.height = 200
        this.velocity = 2
        this.positionX = 20
        this.positionY = window.innerHeight - this.height - 56

        //toetsenbord besturing
        this.leftkeycode = 37
        this.rightkeycode = 39
        this.spacekeycode = 32        
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
    }
    public getRectangle() {
        return this.elementpath1.getBoundingClientRect()
    }

    //Acties wanneer key DOWN
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
        //let element = document.createElement("headcharacter")
        let element = this.elementpath1
        childElement.appendChild(element)
        element.innerHTML = " "
    }

    //Opmaak scherm
    public Opmaak(){
        let element = this.elementpath1
        element.style.position = "absolute"
        element.style.width = this.width + "px"
        element.style.height = this.height + "px"
        element.innerHTML = ""
        element.style.transform = "translate(" + this.positionX + "px," + this.positionY + "px)"
    }

    //Update gezette stappen doormiddel van key's klikken;
    public Update(){
        let element = this.elementpath1
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



