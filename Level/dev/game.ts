class Game{
    Hoofdpersoon:headCharacter
    Bar:Ground[] = []
    Gap:Gap[] = []
    Dino:dino1

    constructor(){
        this.Hoofdpersoon = new headCharacter()
        this.Dino = new dino1()
        this.Dino.Create()
        this.Dino.Opmaak()
        this.Hoofdpersoon.Create()
        this.Hoofdpersoon.Opmaak()
        console.log("aangemaakt")
        this.createbars()
        this.creategaps()
        this.gameloop()
    }

    private checkCollision(a: ClientRect, b: ClientRect) {
        return (a.left <= b.right &&
            b.left <= a.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
     }

    private createbars(){
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

    private creategaps(){
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
                    this.Hoofdpersoon.gravity(2,5)
                }
            }
        })
        
    }

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


    private checkColisionDino(){
        let barhit
        let positiondino = this.Dino.getvalues()
        let positioncharacter = this.Hoofdpersoon.getvalues()
        if((positioncharacter.xeind >= positiondino.xbegin) && (positioncharacter.xbegin <= positiondino.xeind)){
            barhit = this.checkCollision(this.Dino.getRectangle(), this.Hoofdpersoon.getRectangle())
            if (barhit != true){
                alert("Je bent dood door een Dino")
            }
        }
    }

    private checkCollisionScreen(){
        let positioncharacter = this.Hoofdpersoon.getvalues()
        positioncharacter.xbegin += 100
        if(window.innerWidth <= positioncharacter.xbegin){
            console.log("hit the muur")
        }
    }

    
    private gameloop(){
        this.Dino.Update()
        this.Hoofdpersoon.Update()
        this.checkCollisionBar()
        this.checkCollisionGap()
        this.checkColisionDino()
        this.checkCollisionScreen()
        requestAnimationFrame(() =>this.gameloop())
    }
}

window.addEventListener("load", () => new Game)