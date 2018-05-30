var myGamePiece;
var myBackground;

function startGame() {
    var Height = outerHeight;
    var Width = outerWidth;
    var myBackground = new component(2300, 1300, "Achtergrond.jpg", 10, 120, "image");
    myGameArea.start();
    myGamePiece = new component(400, 500, "red", 300, 120);
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        var Height = outerHeight;
        var Width = outerWidth;
        this.canvas.width = 4500;
        this.canvas.height = 900;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20);
        window.addEventListener('keydown', function (e) {
            myGameArea.key = e.keyCode;
        })
        window.addEventListener('keyup', function (e) {
            myGameArea.key = false;
        })
    }, 
    clear : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
}

function component(width, height, color, x, y, type) {
    this.type = type;
    if (type == "image" || type == "background"){
        this.image = new Image();
        this.image.src = color;
    }
    this.gamearea = myGameArea;
    this.width = width;
    this.height = height;
    this.speedX = 0;
    this.speedY = 0;    
    this.x = x;
    this.y = y;    
    this.update = function() {
        ctx = myGameArea.context;
        if (type == "image"){
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        }
        if (type == "background") {
            ctx.drawImage(this.image, this.x + this.width, this.y, this.width, this.height);
        }
        else {
            ctx.fillStyle = color;
            ctx.fillRect(this.x, this.y, this.width, this.height);
        }
    }
    this.newPos = function() {
        this.x += this.speedX;
        this.y += this.speedY;  
        if (this.type == "background") {
            if (this.x == -(this.width)) {
                this.x = 0;
            }
        }      
    }
}

function updateGameArea() {
    myGameArea.clear();
    myGamePiece.speedX = 0;
    myGamePiece.speedY = 0;  
    if (myGameArea.key && myGameArea.key == 37) {myGamePiece.speedX = 3; }
    if (myGameArea.key && myGameArea.key == 39) {myGamePiece.speedX = -3; }
    // if (myGameArea.key && myGameArea.key == 38) {myGamePiece.speedY = -1; }
    // if (myGameArea.key && myGameArea.key == 40) {myGamePiece.speedY = 1; }
    myBackground.x += -1;  
    myBackground.newPos();
    myBackground.update();
    myGamePiece.newPos();    
    myGamePiece.update();
}