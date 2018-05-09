// var blokSpecificaties = {
// 	Snelheid: 10,
// 	Width: 200,
// 	Height:200,
// 	BeginPositionY: 0,
// 	BeginPositionX: 0,
// 	currentLocationX:0,
// 	currentLocationY: 0
// }

// //Declare the window
// var windowWidth = window.screen.availWidth
// var windowHeight = window.screen.availHeight

// //Replace the head element to the left bottom to start.
// function setHeadElementToBegin(){	
// 	//declare the start position
// 	let startPositionX = 0
// 	let startPositionY = windowHeight - blokSpecificaties.Height

// 	//Declare the element and give it the start postition
// 	let element = document.getElementsByTagName("blok")
// 	element[0].style.left = startPositionX + "px"
// 	element[0].style.top = startPositionY + "px"

// 	//Give the current location back to the blok object
// 	blokSpecificaties.currentLocationX = startPositionX
// 	blokSpecificaties.currentLocationY = startPositionY
// }

// function readListenerOut(event){
// 	//declare the position of the mouse
// 	let mouseClickX = event.clientX
// 	let mouseClickY = event.clientY
	
// 	//declare the headelement
// 	let element = document.getElementsByTagName("blok")

// 	//get the currentposition of the element
// 	let currentPositionX = blokSpecificaties.currentLocationX
// 	let currentPositionY = blokSpecificaties.currentLocationY

// 	//when mouse click x is bigger than current position
// 	if(mouseClickX >= currentPositionX){
// 		//Replace the block with 20 px
// 		currentPositionX +=20
// 		element[0].style.left = currentPositionX + "px"

// 		//Give the current location back to the blok object
// 		blokSpecificaties.currentLocationX = currentPositionX
// 	}

// 	//when mouse click x is smaller than current position
// 	if(mouseClickX <= currentPositionX){
// 		//Replace the block with 20 px
// 		currentPositionX -=20
// 		element[0].style.left = currentPositionX + "px"

// 		//Give the current location back to the blok object
// 		blokSpecificaties.currentLocationX = currentPositionX
// 	}
	
// }

// setHeadElementToBegin()

// document.addEventListener("click", readListenerOut)

"use strict";
var Blok = /** @class */ (function () {
    function Blok() {
        this.speed = 10;
        this.width = 200;
        this.height = 200;
        this.BeginPositionX = 0;
        this.BeginPositionY = 0;
        this.currentLocationX = 0;
        this.currentLocationY = 0;
        console.log("gelukt");
    }
    return Blok;
}());
