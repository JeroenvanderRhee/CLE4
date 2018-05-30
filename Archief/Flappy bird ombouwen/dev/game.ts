/// <reference path="C:\Users\me\node_modules\excalibur\dist\excalibur.d.ts" />
/// <reference path="C:\Users\me\node_modules\excalibur\dist\excalibur.amd.d.ts" />
/// <reference path="resources.ts" />

var game = new ex.Engine({
    width: 0,
    height: 0,
    canvasElementId: 'game',
    displayMode: ex.DisplayMode.FullScreen
});

//game.isDebug = true;
game.setAntialiasing(false);
game.backgroundColor = ex.Color.Chartreuse.clone();

// // Build and load resources
// var loader = new ex.Loader();
// for (let index in Resource){
//     loader.addResource(Resource[index])
// }


// var title = null;
// var instructions = null;
// var buildTitle = function(){
// 	 title = new ex.Actor(game.getWidth()/2, game.getHeight()/2, 100, 100);
// 	var titleSprite = Resource.Poppetje.asSprite();
// 	titleSprite.setScaleX(2.5);
// 	titleSprite.setScaleY(2.5);
// 	title.addDrawing("title", titleSprite);
// 	title.setCenterDrawing(true);
// 	title.scale.setTo(gameScale.x, gameScale.y);
// 	title.moveTo(title.x, title.y + 30, 50).moveTo(title.x, title.y, 50).repeatForever();
//     game.add(title);

//     instructions = new ex.Label("Klik om te beginnen", game.getWidth()/2, game.getHeight()-30, "20px 'Press Start 2P', cursive");
// 	instructions.color = ex.Color.Black;
// 	instructions.textAlign = ex.TextAlign.Center;
// 	instructions.scale.setTo(gameScale.x , gameScale.y);
// 	instructions.blink(300, 300).repeatForever();
// 	game.add(instructions);
// }

var poppetje = new Hoofdpersoon



game.start()