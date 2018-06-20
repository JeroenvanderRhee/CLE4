class headCharacter{
    private name:string
    private width:number
    private height:number
    private velocity:number
    public positionX:number
    private positionY:number
    private elementpath:HTMLElement = document.createElement("headcharacter")
    private leftkeycode:number
    private rightkeycode:number
    private spacekeycode:number
    private leftPress: number = 0
    private rightPress: number = 0
    private upPress: number = 0
    private spacePress:number = 0
    
    constructor(){
        this.name = "Skelet"
        this.width = 30
        this.height = 150
        this.velocity = 2
        this.positionX = 60
        this.positionY = window.innerHeight - this.height - 56
        console.log(this.positionY)

        //toetsenbord besturing arrows
        // this.leftkeycode = 37
        // this.rightkeycode = 39
        // this.upkeycode = 38
        // this.spacekeycode = 32  
        
        //toetsenbord besturing WSAD
        this.leftkeycode = 65
        this.rightkeycode = 68
        this.spacekeycode = 32 

        //event listeners voor toetsenbord
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
    }

    //wanneer er een toets is ingedrukt
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
                this.upPress = 0
                break
        }
    }

    //Wanneer een toets weer omhoog is gekomen
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
                this.upPress = 1
                break
        }
    }

    //De aanmaak functie
    public Create(){
        //let childElement:HTMLElement = document.getElementById("game")
        let childElement:HTMLElement = document.body
        //let element = document.createElement("headcharacter")
        let element = this.elementpath
        childElement.appendChild(element)
        element.innerHTML = " "
    }

    //de opmaak functie    
    public Opmaak(){
        let element = this.elementpath
        element.style.position = "absolute"
        element.style.width = this.width + "px"
        element.style.height = this.height + "px"
        element.innerHTML = ""
        element.style.transform = "translate(" + this.positionX + "px," + this.positionY + "px)"
    }

    //De loop functie
    public Update(positionY:number){
        positiehoofdpersoon = this.positionX
        //console.log(positiehoofdpersoon)
        let element = this.elementpath

        if(this.upPress == 1 && (this.positionY >= (positionY - this.height - 60)) && (this.positionY <= (positionY - 20))) {
            this.positionY -= 210;
            this.upPress = 0
        }

        if (this.rightPress == 1){
            let source = "img/Animatie_vooruit.gif"
            this.elementpath.style.background = "url("+ source +") no-repeat center top"
            this.width = 84
            this.elementpath.style.width = this.width + "px"
        }

        if (this.leftPress == 1){
            let source = "img/Animatie_achteruit.gif"
            this.elementpath.style.background = "url("+ source +") no-repeat center top"
            this.width = 84
            this.elementpath.style.width = this.width + "px"
        }

        if ((this.rightPress == 0) && (this.leftPress == 0)){
            let source = "img/Poppetje.png"
            this.elementpath.style.background = "url("+ source +") no-repeat center top"
            this.width = 30
            this.elementpath.style.width = this.width + "px"
        }

        element.style.transform = "translate(" + this.positionX + "px," + this.positionY + "px)"
    }

    //Geeft waardes terug voor de collision
    public getRectangle() {
        return this.elementpath.getBoundingClientRect()
    }

    // geeft nog meer waardes terug voor de collision
    public getvalues(){
        let xbegin : number
        let xeind : number
        let y :number
        let height:number
        let width:number
        let bar : HTMLElement
        return {
            element : this.elementpath,
            xbegin : this.positionX,
            xeind : this.positionX + this.width,
            y : this.positionY,
            height : this.height,
            width : this.width
        }
    }

    // De zwaarte kracht
    public gravity (strengthx:number, strengthy:number){
        let element = this.elementpath
        this.positionY += strengthy
        this.positionX += strengthx
        element.style.transform = "translate(" + this.positionX + "px," + this.positionY + "px)"
    }
}



