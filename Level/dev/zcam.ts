class Camera{
    private speed:number
    private rightPress:number
    private positionX:number
    private leftPress:number
    //private positionY :number
    private leftkeycode :number
    private rightkeycode:number
    private translation:number = 0

    constructor(event:number){
        this.speed = event
        this.rightPress = 0;
        this.leftPress = 0
        this.positionX = 0
        //this.positionY = window.innerHeight
        //toetsenbord besturing
        this.leftkeycode = 37
        this.rightkeycode = 39
       
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
        }
    }

    public Update(){
        let element:HTMLElement = document.getElementById("camera")
        if(this.rightPress == 1){
            this.positionX -= this.speed;
            this.translation -= this.speed
        }

        if(this.leftPress == 1){
            this.positionX += this.speed;
            this.translation += this.speed
        }


        element.style.transform = "translateX(" + this.positionX +"px)"
    }

}