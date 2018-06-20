var positiehoofdpersoon:number = 0;
class Game{
    Hoofdpersoon:headCharacter
    Bar:Ground[] = []
    Gap:Gap[] = []
    Heks:Heks[] = []
    Fireball:Fire
    Kleding :kleding[] = []
    Check : State[] = []
    Camera : Camera
    private score = 0;

    //Hier worden de functies gedeclareerd.
    constructor(){
        this.Hoofdpersoon = new headCharacter()
        this.Hoofdpersoon.Create()
        this.Hoofdpersoon.Opmaak()

        this.Camera = new Camera(4200)

        //Kerk-man
        this.Fireball = new Fire(1100 ,1500) //Begin,Eind

        this.createbars()
        this.creategaps()
        this.createclothes()
        this.createcheck(5)
        this.createWitches()
    }

    //Algemene functie collision
    private checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
     }

     private createWitches(){
         this.Heks.push(new Heks(2000))
         this.Heks.push(new Heks(3000))
         
         this.Heks.forEach(ReadOut => {
            ReadOut.Create()
            ReadOut.Opmaak()
        }); 
     }

    //Checks aanmaken
    private createcheck(hoeveelheid:number){
        for(let i = 1; i <= hoeveelheid; i++){
            this.Check.push(new State(i))
        }
    }

    //Kleding aanmaak
    private createclothes(){
        //Kleding heeft 5 parameters(1 = x positie, 2 = y positie, 3 = breedte van de img, 4 = hoogte van de img, 5 is de bron van de img)
        this.Kleding.push(new kleding(100, 400, 150, 230, "img/Middeleeuwen/dress.png"))

        this.Kleding.push(new kleding(880, window.innerHeight, 50, 280, "img/Middeleeuwen/zwaard.png"))
        this.Kleding.push(new kleding(800, window.innerHeight, 240, 150, "img/Middeleeuwen/stone.png"))


        //this.Kleding.push(new kleding(1000, window.innerHeight, 90, 120, "img/Middeleeuwen/harnas.png"))
        this.Kleding.push(new kleding(3000, window.innerHeight, 90, 120, "img/Middeleeuwen/helm.png"))
        this.Kleding.push(new kleding(2600, window.innerHeight, 100, 89, "img/Middeleeuwen/schild.png"))

        this.Kleding.push(new kleding(4000, window.innerHeight, 400, 350, "img/Middeleeuwen/tijdmachine.png"))


    }


    //Loopplank aanmaak
    private createbars(){
        //Array waarin de nieuwe loopplanken worden gedeclareerd
        //hoogte breedte, posy, posx
        this.Bar.push(new Ground(1920, window.innerHeight, 0))

        this.Bar.push(new Ground(920, window.innerHeight, 1980))
        
        //Omhoog-paal
        this.Bar.push(new Ground(100, window.innerHeight, 2800))
        //Lucht-Plank
        this.Bar.push(new Ground(920, 200, 1980))
        //Staan-plank
        this.Bar.push(new Ground(400, 350, 2800))

        this.Bar.push(new Ground(700, window.innerHeight, 3000))
        this.Bar.push(new Ground(530, window.innerHeight, 3770))


        this.Bar.forEach(ReadOut => {
            ReadOut.Create()
            ReadOut.Opmaak()
        });
    }
    //Array waarin de nieuwe gaten worden gedeclareerd
    private creategaps(){
        //volgorde : Lengte, Yas, Xas
        //this.Gap.push(new Gap(100, window.innerHeight, 800))
        //this.Gap.push(new Gap(80, window.innerHeight, 1300))
        this.Gap.push(new Gap(100, window.innerHeight, 1700))
        //this.Gap.push(new Gap(80, window.innerHeight, 1900))
        this.Gap.push(new Gap(100, window.innerHeight, 2900))
        this.Gap.push(new Gap(70, window.innerHeight, 3700))

        this.Gap.forEach(ReadOut => {
            ReadOut.Create()
            ReadOut.Opmaak()
        });
    }

    //Check de collision van een loopbalk
    private checkCollisionBar(){
        let barhit
        let positionbar
        let positioncharacter
        
        this.Bar.forEach(ReadOut =>{
            positioncharacter = this.Hoofdpersoon.getvalues()
            positionbar = ReadOut.getvalues()
            
            if(((positioncharacter.xeind - translate) >= positionbar.xbegin) && ((positioncharacter.xeind - translate) <= positionbar.xeind)){
                barhit = this.checkCollision(ReadOut.getRectangle(), this.Hoofdpersoon.getRectangle())
                if (barhit != true){
                    console.log("hit")
                    this.Hoofdpersoon.gravity(0,5)
                }
            }
        })
        
    }

    //Check de collision van een Gat
    private checkCollisionGap(){
        let barhit
        let positionbar
        let positioncharacter
        
        this.Gap.forEach(ReadOut =>{
            positioncharacter = this.Hoofdpersoon.getvalues()
            positionbar = ReadOut.getvalues()
            
            if(((positioncharacter.xeind - translate) >= positionbar.xbegin) && ((positioncharacter.xeind - translate) <= positionbar.xeind)) {
                barhit = this.checkCollision(ReadOut.getRectangle(), this.Hoofdpersoon.getRectangle())
                if (barhit != true){
                    console.log("hit")
                    this.Hoofdpersoon.gravity(2,5)
                }
                if(barhit == true){
                  this.Hoofdpersoon.gravity(1,10)
                  if (positioncharacter.y >= window.innerHeight - 10){
                      alert("Je bent af")
                  }
                }
            }
        })
        
    }

    //Check de collision van de Dino
    private checkColisionHeks(){
        let barhit
        this.Heks.forEach(ReadOut =>{
        let positionheks = ReadOut.getvalues()
        let positioncharacter = this.Hoofdpersoon.getvalues()
        if(((positioncharacter.xeind - translate) >= positionheks.xbegin) && ((positioncharacter.xeind - translate) <= positionheks.xeind)){
            barhit = this.checkCollision(ReadOut.getRectangle(), this.Hoofdpersoon.getRectangle())
            if (barhit == true){
                alert("Je bent dood door een heks")
                console.log("hit by the heks")
                
            }
        }
        })
    }

    //Check de collision van kledingstukken
    private checkCollisionKleding(){
        let barhit
        let positionbar
        let positioncharacter
            
        this.Kleding.forEach(ReadOut =>{
            positioncharacter = this.Hoofdpersoon.getvalues()
            positionbar = ReadOut.getvalues()
                
            if(((positioncharacter.xeind - translate) >= positionbar.xbegin) && ((positioncharacter.xeind - translate) <= positionbar.xeind)) {
                barhit = this.checkCollision(ReadOut.getRectangle(), this.Hoofdpersoon.getRectangle())
                if(barhit == true){
                    console.log("hit by de kleding")
                    ReadOut.elementpath.style.display = "none"
                    this.Check[this.score].imagagepath.style.display = "block"
                    this.score ++
                }
            }
        })            
    }

    //Collision met de vuur
    private checkCollisionFire(){
        let barhit
        let positionfire = this.Fireball.getvalues()
        let positioncharacter = this.Hoofdpersoon.getvalues()

        if(((positioncharacter.xeind - translate) >= positionfire.xbegin) && ((positioncharacter.xeind - translate) <= positionfire.xeind)){
            barhit = this.checkCollision(this.Fireball.getRectangle(), this.Hoofdpersoon.getRectangle())
            if (barhit == true){
                alert("Je bent dood door een fireball")
                console.log("hit by a fireball")    
            }
        }
    }
    
    //Dit is de gameloop. Hierin worden alle assets geupdate en word de collision bij gehouden. Deze gameloop word aangeroepen in de echte gameloop
    public gameloop(){
        this.Camera.update()
        this.Heks[0].Update(2000,2700)
        this.Heks[1].Update(3000,3700)
        this.Fireball.update()
        this.Hoofdpersoon.Update(window.innerHeight)
        this.checkCollisionBar()
        this.checkCollisionGap()
        this.checkColisionHeks()
        this.checkCollisionKleding()
        this.checkCollisionFire()
        //requestAnimationFrame(() =>this.gameloop())
    }
}
