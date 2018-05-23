class Decor{
    private width:number
    private height:number
    private elementpath:HTMLElement = document.createElement("decor")
    constructor(){
        this.width = 2000
        this.height = window.innerHeight - 60
    }

    Create(){
        let childElement:HTMLElement = document.body
        let element = this.elementpath
        childElement.appendChild(element)
        element.innerHTML = " "
    }

    Opmaak(){
        let element = this.elementpath
        element.style.width = this.width + "px"
        element.style.height = this.height + "px"
    }
}

let background = new Decor()
background.Create()
background.Opmaak()