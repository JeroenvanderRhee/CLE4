var positiehoofdpersoon:number = 0;
class Game{
    Hoofdpersoon:headCharacter
    Bar:Ground[] = []
    Gap:Gap[] = []
    Dino:Dino
    Fireball:Fire
    Kleding :kleding[] = []
    Check : State[] = []
    Camera : Camera
    private score = 0;

    //Hier worden de functies gedeclareerd.
    constructor(){
        this.Hoofdpersoon = new headCharacter()
        this.Camera = new Camera(4200)
        this.Fireball = new Fire(1380 ,1700)
        this.Dino = new Dino(3000)
        this.Dino.Create()
        this.Dino.Opmaak()
        this.Hoofdpersoon.Create()
        this.Hoofdpersoon.Opmaak()
        console.log("aangemaakt")
        this.createbars()
        this.creategaps()
        this.createclothes()
        this.createcheck(3)
    }

    //Algemene functie collision
    private checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
     }

    //Checks aanmaken
    private createcheck(hoeveelheid:number){
        for(let i = 1; i <= hoeveelheid; i++){
            this.Check.push(new State(i))
        }
    }

    //Array waarin we nieuwe kleding stukken pushen.
    private createclothes(){
        //Kleding heeft 5 parameters(1 = x positie, 2 = y positie, 3 = breedte van de img, 4 = hoogte van de img, 5 is de bron van de img)
        this.Kleding.push(new kleding(300, window.innerHeight, 56, 100, "img/Tshirt.png"))
        this.Kleding.push(new kleding(1000, window.innerHeight, 76, 100, "img/Jurk.png"))
        this.Kleding.push(new kleding(3000, window.innerHeight, 100, 89, "img/Knuppel.png"))
    }


    //Array waarin de nieuwe loopplanken worden gedeclareerd
    private createbars(){
        //Array waarin de nieuwe loopplanken worden gedeclareerd
        this.Bar.push(new Ground(800, window.innerHeight, 0))
        this.Bar.push(new Ground(400, window.innerHeight, 900))
       
        this.Bar.push(new Ground(320, window.innerHeight, 1380))
        this.Bar.push(new Ground(400, window.innerHeight, 1800))
        this.Bar.push(new Ground(920, window.innerHeight, 1980))
        this.Bar.push(new Ground(700, window.innerHeight, 3000))
        this.Bar.push(new Ground(530, window.innerHeight, 3770))

        this.Bar.push(new Ground(600, window.innerHeight - 230, 500))

        this.Bar.forEach(ReadOut => {
            ReadOut.Create()
            ReadOut.Opmaak()
        });
    }
    //Array waarin de nieuwe gaten worden gedeclareerd
    private creategaps(){
        //volgorde : Lengte, Yas, Xas
        this.Gap.push(new Gap(100, window.innerHeight, 800))
        this.Gap.push(new Gap(80, window.innerHeight, 1300))
        this.Gap.push(new Gap(100, window.innerHeight, 1700))
        this.Gap.push(new Gap(80, window.innerHeight, 1900))
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
    private checkColisionDino(){
        let barhit
        let positiondino = this.Dino.getvalues()
        let positioncharacter = this.Hoofdpersoon.getvalues()
        if(((positioncharacter.xeind - translate) >= positiondino.xbegin) && ((positioncharacter.xeind - translate) <= positiondino.xeind)){
            barhit = this.checkCollision(this.Dino.getRectangle(), this.Hoofdpersoon.getRectangle())
            if (barhit == true){
                alert("Je bent dood door een Dino")
                console.log("hit by the dino")
                
            }
        }
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
        this.Dino.Update(3000,3700)
        this.Fireball.update()
        this.Hoofdpersoon.Update(window.innerHeight)
        this.checkCollisionBar()
        this.checkCollisionGap()
        this.checkColisionDino()
        this.checkCollisionKleding()
        this.checkCollisionFire()
        //requestAnimationFrame(() =>this.gameloop())
    }
}
