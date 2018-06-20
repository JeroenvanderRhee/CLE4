var positiehoofdpersoon:number = 0;
class Level1{
    public assets:HTMLElement
    public barasset:HTMLElement
    Game:Game
    Hoofdpersoon:headCharacter
    Bar:Ground[] = []
    Gap:Gap[] = []
    Dino:Dino
    Fireball:Fire
    Kleding :kleding[] = []
    Check : State[] = []
    Camera : Camera
    private score = 0;
    Tijdmachine:Timemachine

    //Hier worden de functies gedeclareerd.
    constructor(game:Game){
        //Important
        let assetsDiv = document.createElement("div")
        let childBody = document.body
        childBody.appendChild(assetsDiv)
        assetsDiv.id = "assets"
        this.assets = assetsDiv
        let barDiv = document.createElement("div")
        this.assets.appendChild(barDiv)
        barDiv.id = "bars"
        this.barasset = barDiv
        document.body.style.background = "url(img/Background.jpg)"

        this.Game = game
        this.Hoofdpersoon = new headCharacter()
        this.Camera = new Camera(4200, this.assets, 5)
        this.Fireball = new Fire(1380 ,1700, this.assets)
        console.log("aangemaakt")
        this.createbars()
        this.creategaps()
        this.createclothes()
        this.Dino = new Dino(3000, this.assets)
        this.Dino.Create()
        this.Dino.Opmaak()
        this.Hoofdpersoon.Create()
        this.Hoofdpersoon.Opmaak()
        this.Tijdmachine = new Timemachine(3950, this.assets)
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
        this.Kleding.push(new kleding(300, window.innerHeight, 56, 100, "img/Tshirt.png", this.assets))
        this.Kleding.push(new kleding(1000, window.innerHeight, 76, 100, "img/Jurk.png", this.assets))
        this.Kleding.push(new kleding(3000, window.innerHeight, 100, 89, "img/Knuppel.png", this.assets))
    }


    //Array waarin de nieuwe loopplanken worden gedeclareerd
    private createbars(){
        //Array waarin de nieuwe loopplanken worden gedeclareerd
        this.Bar.push(new Ground(800, window.innerHeight, 0, this.barasset))
        //this.Bar.push(new Ground(600, window.innerHeight - 230, 500))
        this.Bar.push(new Ground(400, window.innerHeight, 900, this.barasset))
       
        this.Bar.push(new Ground(320, window.innerHeight, 1380, this.barasset))
        this.Bar.push(new Ground(400, window.innerHeight, 1800, this.barasset))
        this.Bar.push(new Ground(920, window.innerHeight, 1980, this.barasset))
        this.Bar.push(new Ground(700, window.innerHeight, 3000, this.barasset))
        this.Bar.push(new Ground(1530, window.innerHeight, 3770, this.barasset))


        this.Bar.forEach(ReadOut => {
            ReadOut.Create()
            ReadOut.Opmaak()
        });
    }
    //Array waarin de nieuwe gaten worden gedeclareerd
    private creategaps(){
        //volgorde : Lengte, Yas, Xas
        this.Gap.push(new Gap(100, window.innerHeight, 800, this.barasset))
        this.Gap.push(new Gap(80, window.innerHeight, 1300, this.barasset))
        this.Gap.push(new Gap(100, window.innerHeight, 1700, this.barasset))
        this.Gap.push(new Gap(80, window.innerHeight, 1900, this.barasset))
        this.Gap.push(new Gap(100, window.innerHeight, 2900, this.barasset))
        this.Gap.push(new Gap(70, window.innerHeight, 3700, this.barasset))

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
        let check = 0
        this.Bar.forEach(ReadOut =>{
            positioncharacter = this.Hoofdpersoon.getvalues()
            positionbar = ReadOut.getvalues()
            
            if((((positioncharacter.xbegin - translate) >= positionbar.xbegin) && ((positioncharacter.xbegin - translate) <= positionbar.xeind))){
                barhit = this.checkCollision(ReadOut.getRectangle(), this.Hoofdpersoon.getRectangle())
                if(barhit == true){
                    check = 1
                }
                
                if ((barhit != true) && (check == 0)){
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
            
            if(((positioncharacter.xbegin - translate) >= positionbar.xbegin) && ((positioncharacter.xbegin - translate) <= positionbar.xeind)) {
                barhit = this.checkCollision(ReadOut.getRectangle(), this.Hoofdpersoon.getRectangle())
                if (barhit != true){
                    console.log("hit")
                    this.Hoofdpersoon.gravity(0,10)
                }
                if(barhit == true){
                  this.Hoofdpersoon.gravity(1,10)
                  if (positioncharacter.y >= (window.innerHeight - 70)){
                      this.Game.endGame()
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
                this.Game.endGame()
                
            }
        }
    }

    //Check de collision van de Tijdmachine
    private checkColisionTijdmachine(){
        //let barhit
        let positionTijdmachine = this.Tijdmachine.getvalues()
        let positioncharacter = this.Hoofdpersoon.getvalues()
        if(((positioncharacter.xeind - translate) >= positionTijdmachine.xbegin) && (this.score == 3)){
                this.Game.endGame()
        }
        if(((positioncharacter.xeind - translate) >= positionTijdmachine.xbegin) && (!(this.score == 3))){
           this.Camera.terugTeleporteren()


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
                this.Game.endGame()
            }
        }
    }
    
    //Dit is de gameloop. Hierin worden alle assets geupdate en word de collision bij gehouden. Deze gameloop word aangeroepen in de echte gameloop
    public loop(){
        this.Camera.update()
        this.Dino.Update(3000,3700)
        this.Fireball.update()
        this.Hoofdpersoon.Update(window.innerHeight)
        this.checkCollisionBar()
        this.checkCollisionGap()
        this.checkColisionDino()
        this.checkCollisionKleding()
        this.checkCollisionFire()
        this.checkColisionTijdmachine()
        //requestAnimationFrame(() =>this.gameloop())
    }
}
