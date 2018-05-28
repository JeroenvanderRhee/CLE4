class Game{
    Hoofdpersoon:headCharacter
    Bar:Ground[] = []

    constructor(){
        this.Hoofdpersoon = new headCharacter()
        this.Hoofdpersoon.Create()
        this.Hoofdpersoon.Opmaak()
        console.log("aangemaakt")
        this.createbars()
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
        this.Bar.push(new Ground(400, window.innerHeight, 1000))

        this.Bar.forEach(ReadOut => {
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
            
            if((positioncharacter.xbegin >= positionbar.xbegin) && (positioncharacter.xeind <= positionbar.xeind)){
                barhit = this.checkCollision(ReadOut.getRectangle(), this.Hoofdpersoon.getRectangle())
                if (barhit != true){
                    this.Hoofdpersoon.gravity(2,5)
                }
            //console.log(positionbar)
            }
            
        })
        
    }

    
    private gameloop(){
        this.Hoofdpersoon.Update()
        this.checkCollisionBar()
        requestAnimationFrame(() =>this.gameloop())
    }
}

window.addEventListener("load", () => new Game)