class Ball {
    
    private div : HTMLElement
    private x : number
    private y : number

    //Vergroot de snelheid van bal
    private xspeed : number = 2
    private yspeed : number = 2
    
    //Code word hier alleen maar 1 keer afgespeeld
    constructor() {
        //Maakt 1 ball aan
        this.div = document.createElement("ball")
        document.body.appendChild(this.div)

        //Zorgt dat de bal op een random positie in het scherm zit (niet buiten)
        this.x = Math.random() * (window.innerWidth - 40)                           //Window.innerWidth vraagt breedte van scherm op
        this.y = Math.random() * (window.innerHeight - 40)

        //console.log("x = " + window.innerWidth)
        //console.log("y = " + window.innerHeight)
    
    }
    
    //Code hierin word gelooped
    public update() : void {
        //Bal positie beweegt naar rechts
        this.x = this.x + this.xspeed                                               //This.xspeed hoeveel snelheid erbij komt
        //console.log(this.x)

        //Bal positie beweegt naar beneden
        this.y = this.y + this.yspeed                                               //This.yspeed hoeveel snelheid erbij komt
        //console.log(this.y)

            //       Linkerkant-Scherm           RechterKant-scherm
            //if(this.x > window.innerWidth - 40 || this.x< 0 ){                                   
                 //Verander richting van Xspeed
                 //this.xspeed *= -1
            //}

            //      Onderkant-wand                Bovenkant-wand
            if(this.y > window.innerHeight - 40 || this.y < 0){                     
                //Verander richting van Yspeed
                this.yspeed *= -1
                //console.log("Bovenwand/onderwand" + this.yspeed)
            }
        //Positie van de bal bepaling & verandering
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`
    }

    //Linker Paddle - Ball draaiing
    //Functie die gebruikt word in game.ts file en alleen werkt wanneer de paddle & ball collision hebben.
    public ChangeR(){
        this.xspeed = (this.xspeed * -2) - 1                                        //De plus 1 zorgt ervoor dat het elke keer dat de bal en paddle elkaar raken, de bal sneller beweegt.
        console.log("Dit is de speed: " + this.xspeed)
    }

    public ChangeL(){
        this.xspeed = (this.xspeed * -2) + 1                                        //De plus 1 zorgt ervoor dat het elke keer dat de bal en paddle elkaar raken, de bal sneller beweegt.
        console.log("Dit is de speed: " + this.xspeed)
    }
    //Zegt dat object een rechthoek is
    public getRectangle() {
        //Stopt getBoudningClientRect in html
        return this.div.getBoundingClientRect()
    }
}