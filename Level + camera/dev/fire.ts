// class Fire{
//     private name:string
//     private img:string
//     private width:number
//     private height:number
//     private velocity:number
//     private spacePress:number = 0
//     private elementpath :HTMLElement = document.createElement("fireball")
//     private positionX :number
//     private positionXbegin:number
//     private positionXeind:number
//     private positionY:number

//     //Hierworden de variabelen ingevuld
//     constructor(Xbegin:number, Xeind:number){
//         this.name = "Fire ball"
//         this.img = "../img/Fire.png"
//         this.width = 150
//         this.height = 340
//         this.velocity = 1.8
//         this.positionX = Xbegin
//         this.positionXbegin = Xbegin
//         this.positionXeind = Xeind
//         this.positionY = window.innerHeight - this.height - 60

//         this.create()
//         this.Opmaak()
//     }

//     //Deze functie word gebruikt om het object aan te maken
//     private create(){
//         let childElement = document.getElementById("assets")
//         let element = this.elementpath
//         childElement.appendChild(element)
//         element.innerHTML = " "
//     }

//     //Deze functie word gebruikt om een object aan te maken.
//     private Opmaak(){
//         let element = this.elementpath
//         element.style.position = "absolute"
//         element.style.width = this.width + "px"
//         element.style.height = this.height + "px"
//         element.innerHTML = ""
//         element.style.transform = "translate(" + this.positionX + "px," + this.positionY + "px)"
//     }



//     //De update functie om de vlam heen en weer te laten gaan
//     public update(){
//         let element =  this.elementpath
//         let speed:number = this.velocity
//         this.positionX += speed


//         if(this.positionX <= this.positionXbegin){
//             this.velocity *=-1;
//         }

//         if (this.positionX >= this.positionXeind - this.width) {
//             this.velocity *= -1;
//         }      
//         element.style.transform = "translate(" + (this.positionX) + "px," + this.positionY + "px)"
//     }  

    
//     //Formule voor data voor collision
//     public getRectangle() {
//         return this.elementpath.getBoundingClientRect()
//     }

//      //Algemene functie voor waardes (voor evt. collision)
//      public getvalues(){
//         let xbegin : number
//         let xeind : number
//         let ymax : number
//         let ymin :number
//         let height: number
//         let width: number
//         return {
//             xbegin : this.positionX,
//             xeind : this.positionX + this.width,
//             ymax : this.positionY + this.height,
//             ymin : this.positionY,
//             height : this.height,
//             width : this.width
//         }
//     }
// } 	


class Fire{
    private name:string
    private img:string
    private width:number
    private height:number
    private velocity:number
    private spacePress:number = 0
    private elementpath :HTMLElement = document.createElement("fireball")
    private positionX :number
    private positionXbegin:number
    private positionXeind:number
    private positionY:number
    private child:HTMLElement

    //Hierworden de variabelen ingevuld
    constructor(Xbegin:number, Xeind:number, assets:HTMLElement){
        this.child = assets
        this.name = "Fire ball"
        this.img = "../img/Fire.png"
        this.width = 54
        this.height = 76
        this.velocity = 1.8
        this.positionX = Xbegin
        this.positionXbegin = Xbegin
        this.positionXeind = Xeind
        this.positionY = window.innerHeight - this.height - 60

        this.create()
        this.Opmaak()
    }

    //Deze functie word gebruikt om het object aan te maken
    private create(){
        let element = this.elementpath
        this.child.appendChild(element)
        element.innerHTML = " "
    }

    //Deze functie word gebruikt om een object aan te maken.
    private Opmaak(){
        let element = this.elementpath
        element.style.position = "absolute"
        element.style.width = this.width + "px"
        element.style.height = this.height + "px"
        element.innerHTML = ""
        element.style.transform = "translate(" + this.positionX + "px," + this.positionY + "px)"
    }



    //De update functie om de vlam heen en weer te laten gaan
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

    
    //Formule voor data voor collision
    public getRectangle() {
        return this.elementpath.getBoundingClientRect()
    }

     //Algemene functie voor waardes (voor evt. collision)
     public getvalues(){
        let xbegin : number
        let xeind : number
        let ymax : number
        let ymin :number
        let height: number
        let width: number
        return {
            xbegin : this.positionX,
            xeind : this.positionX + this.width,
            ymax : this.positionY + this.height,
            ymin : this.positionY,
            height : this.height,
            width : this.width
        }
    }
} 	