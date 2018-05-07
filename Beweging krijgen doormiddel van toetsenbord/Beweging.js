let blokSpecificaties = {
	Snelheid: 10,
	BeginPositionY: 200,
	BeginPositionX: 500
}



var Blok = document.getElementsByTagName(Blok)
//Blok[1].Style.transform = "translate("+ blokSpecificaties.BeginPositionX + "px," +blokSpecificaties.BeginPositionY+ "px)"
var BlokStyle = Blok[0].style.transform

console.log(BlokStyle)

var EventListener = document.body.addEventListener 
