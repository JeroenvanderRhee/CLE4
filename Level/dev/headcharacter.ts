
class headCharacter {
    private name:string
    private width:number
    private height:number
    private velocity:number
    private positionX:number
    private positionY:number
    private elementpath:HTMLElement = document.createElement("headcharacter")
    private leftkeycode:number
    private rightkeycode:number
    private upkeycode:number
    private spacekeycode:number
    private leftPress: number = 0
    private rightPress: number = 0
    private upPress: number = 0
    private spacePress:number = 0
    
    constructor(){
        this.name = "Skelet"
        this.width = 40
        this.height = 200
        this.velocity = 2
        this.positionX = 20
        this.positionY = window.innerHeight - this.height - 56
        console.log(this.positionY)

        //toetsenbord besturing
        this.leftkeycode = 37
        this.rightkeycode = 39
        this.upkeycode = 38
        this.spacekeycode = 32        
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))
    }

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
            case this.spacekeycode:
                this.spacePress = 0
                break
        }
    }

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
                this.upPress = 1
                break
            case this.spacekeycode:
                this.spacePress = 1
                break
        }
    }
    
    public Create(){
        let childElement:HTMLElement = document.body
        //let element = document.createElement("headcharacter")
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
        element.style.transform = "translate(" + this.positionX + "px," + this.positionY + "px)"
    }

    public Update(){
        let element = this.elementpath
        let snelheid:number = 5;
        if(this.rightPress == 1){
            this.positionX += snelheid;
        }

        if(this.leftPress == 1){
            this.positionX -= snelheid;
        }

        if(this.upPress == 1){
            this.positionY -= 210;
            this.positionX += snelheid + 5;
            this.upPress = 0
        }

        element.style.transform = "translate(" + this.positionX + "px," + this.positionY + "px)"
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
            xbegin : this.positionX,
            xeind : this.positionX + this.width,
            y : this.positionY,
            height : this.height,
            width : this.width
        }
    }

    public gravity (strengthx:number, strengthy:number){
        let element = this.elementpath
        this.positionY += strengthy
        this.positionX += strengthx
        element.style.transform = "translate(" + this.positionX + "px," + this.positionY + "px)"
    }
}



