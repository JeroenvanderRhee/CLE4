function loadTypeScriptJS (url){
   // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "js/main.js";
    // Fire the loading
    head.appendChild(script);
}


var game = new ex.Engine()
//call game.start, which is a Promise
game.start().then(function () {
    loadTypeScriptJS ("js/main.js")
});
