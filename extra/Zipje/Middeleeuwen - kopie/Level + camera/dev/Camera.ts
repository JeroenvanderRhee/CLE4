var translate = 0
class Camera{
    private positionXcam:number
    private positionYcam:number
    private positionXchar:number
    private positionYend:number
    private elementpathcam:HTMLDivElement
    public translatecam:number
    private leftkeycode:number
    private rightkeycode:number
    private upkeycode:number
    private spacekeycode:number
    private leftPress: number = 0
    private rightPress: number = 0
    private upPress: number = 0
    private spacePress:number = 0

    constructor(eindecanvas:number){
        this.positionXcam = 0
        this.positionYcam = 0
        this.positionXchar = positiehoofdpersoon
        this.elementpathcam = document.getElementById("assets")
        this.translatecam = 0
        this.positionYend = eindecanvas

         //toetsenbord besturing WSAD
         this.leftkeycode = 65
         this.rightkeycode = 68
         this.upkeycode = 99// 87
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
            case this.spacekeycode:
                this.spacePress = 0
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
            case this.upkeycode:
                this.upPress = 1
                break
            case this.spacekeycode:
                this.spacePress = 1
                break
        }
    }

    public update(){
        let element = this.elementpathcam
        let snelheid:number = 5;

        if((this.leftPress == 1) && (this.positionXcam == (0 - translate))){
            this.leftPress = 0
        }

        // if((this.leftPress == 1) && (this.positionXcam == ((this.positionYend + window.innerHeight) - translate))){
        //     this.leftPress = 0
        // }

        if(this.rightPress == 1){
            translate -= snelheid
            this.positionXcam -= snelheid;
        }

        if(this.leftPress == 1){
            this.positionXcam += snelheid;
            translate += snelheid
        }

        // && this.positionY == (window.innerHeight - this.height - 56)

        element.style.transform = "translate(" + this.positionXcam + "px," + this.positionYcam + "px)"
    }
    
    //Maak de hoofdpersoon op met de juiste gif
    private opmaakheadcharacter(){

    }

}

