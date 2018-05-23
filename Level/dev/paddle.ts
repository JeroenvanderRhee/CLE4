class Paddle {

    private div: HTMLElement
    private x: number
    private y: number

    private downkey: number
    private upkey: number

    private downSpeed: number = 0
    private upSpeed: number = 0

    constructor() {
        this.div = document.createElement("paddle")
        document.body.appendChild(this.div)

        //this.upkey = 87
        this.upkey = 38
        //this.downkey = 83
        this.downkey = 40

        this.x = 0
        this.y = 200

        window.addEventListener("keyleft", this.keyEvents)
    }

    public getRectangle() {
        return this.div.getBoundingClientRect()
    }

    private keyEvents(event:KeyboardEvent){
        if(event.keyCode == 37){
            console.log("left")
        }

        if(event.keyCode == 39){
            console.log("right")
        }
    }
    
    public Update() {
        let newY = this.y - this.upSpeed + this.downSpeed

        // check of de paddle binnen beeld blijft
        if (newY > 0 && newY + 100 < window.innerHeight) this.y = newY

        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

}