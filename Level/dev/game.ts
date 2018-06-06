class Game{
    Hoofdpersoon:headCharacter
    Bar:Ground[] = []
    Gap:Gap[] = []
    Dino:Dino
    Fireball:Fire
    Kleding :kleding
    Check : State[] = []
    private score = 0;

    //Hierworden de functies gedeclareerd.
    constructor(){
        this.Hoofdpersoon = new headCharacter()
        this.Fireball = new Fire(1380,1700)
        this.Dino = new Dino(3000)
        this.Dino.Create()
        this.Dino.Opmaak()
        this.Hoofdpersoon.Create()
        this.Hoofdpersoon.Opmaak()
        console.log("aangemaakt")
        this.createbars()
        this.creategaps()
        this.Kleding = new kleding(300, window.innerHeight)
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
            
            if((positioncharacter.xeind >= positionbar.xbegin) && (positioncharacter.xeind <= positionbar.xeind)){
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
            
            if((positioncharacter.xeind >= positionbar.xbegin) && (positioncharacter.xbegin <= positionbar.xeind)){
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
        if((positioncharacter.xeind >= positiondino.xbegin) && (positioncharacter.xeind <= positiondino.xeind)){
            barhit = this.checkCollision(this.Dino.getRectangle(), this.Hoofdpersoon.getRectangle())
            if (barhit == true){
                alert("Je bent dood door een Dino")
                console.log("hit by the dino")
                
            }
        }
    }

    //Collision met de kleding
    private checkCollisionKleding(){
        let barhit
        let positionkleding = this.Kleding.getvalues()
        let positioncharacter = this.Hoofdpersoon.getvalues()

        if((positioncharacter.xeind >= positionkleding.xbegin) && (positioncharacter.xeind <= positionkleding.xeind)){
            barhit = this.checkCollision(this.Kleding.getRectangle(), this.Hoofdpersoon.getRectangle())
            if (barhit == true){
                console.log("hit by de kleding")
                this.Kleding.elementpath.style.display = "none"
                this.Check[this.score].imagagepath.style.display = "block"
                this.score ++
            }
        }
    }
    
    //Dit is de gameloop. Hierin worden alle assets geupdate en word de collision bij gehouden. Deze gameloop word aangeroepen in de echte gameloop
    public gameloop(){
        this.Dino.Update(3000,3700)
        this.Fireball.update()
        this.Hoofdpersoon.Update()
        this.checkCollisionBar()
        this.checkCollisionGap()
        this.checkColisionDino()
        this.checkCollisionKleding()
        //requestAnimationFrame(() =>this.gameloop())
    }
}
