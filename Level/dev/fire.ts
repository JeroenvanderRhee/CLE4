class Fire{
    private name:string
    private img:string
    private width:number
    private height:number
    private velocity:number
    private spacekeycode:number
    private spacePress:number = 0
    private elementpath :HTMLElement = document.createElement("fireball")
    private positionX :number
    private positionXbegin:number
    private positionXeind:number
    private positionY:number

    constructor(Xbegin:number, Xeind:number){
        this.name = "Fire ball"
        this.img = "../img/Fire.png"
        this.width = 60
        this.height = 80
        this.velocity = 1.8
        this.positionX = Xbegin
        this.positionXbegin = Xbegin
        this.positionXeind = Xeind
        this.positionY = window.innerHeight - this.height - 60

        this.spacekeycode = 32 
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e))
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e))

        this.create()
        this.Opmaak()
    }

    private create(){
        let childElement:HTMLElement = document.body
        let element = this.elementpath
        childElement.appendChild(element)
        element.innerHTML = " "
    }

    private Opmaak(){
        let element = this.elementpath
        element.style.position = "absolute"
        element.style.width = this.width + "px"
        element.style.height = this.height + "px"
        element.innerHTML = ""
        element.style.transform = "translate(" + this.positionX + "px," + this.positionY + "px)"
    }

    private onKeyDown(e: KeyboardEvent): void {
        console.log(e.keyCode)
        switch (e.keyCode) {
            case this.spacekeycode:
                this.spacePress = 0
                break
        }
    }

    private onKeyUp(e: KeyboardEvent): void {
        console.log(e.keyCode)
        switch (e.keyCode) {
            case this.spacekeycode:
                this.spacePress = 1
                break
        }
    }

    public update(){
        let element =  this.elementpath
        let speed:number = this.velocity
        this.positionX += speed


        if(this.positionX <= this.positionXbegin){
            this.velocity *=-1;
        }

        if (this.positionX >= this.positionXeind - this.width) {
            this.velocity *= -1;
        }


        
        element.style.transform = "translate(" + (this.positionX) + "px," + this.positionY + "px)"
    }  
} 	
