// business logic
function Player (player) {
  this.name = player;
  this.pieceLocations = [];
}

var playerOne = new Player("player1");
var playerTwo = new Player("player2");
var playerCpu = new Player("playerCpu");


function changeImage(id){
  debugger;
  var location = id+"pic";
  document.getElementById(location).src = 'img/x.png';
}

function getId(id) {
  var myId = id;
  changeImage(id);
}




// user interface
$(document).ready(function(){
  $("#game-mode").submit(function(event){
    event.preventDefault;
    var gameMode = $("input:radio[name=mode]:checked").val();


  });



});
