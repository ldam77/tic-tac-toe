// business logic
function Player (player) {
  this.name = player;
  this.pieceLocations = [];
}









// user interface
$(document).ready(function(){
  $("#game-mode").submit(event(){
    event.preventDefault;
    var gameMode = $("input:radio[name=mode]:checked").val();
    var playerOne = new Player("player1");
    var playerTwo = new Player("player2");
    var playerCpu = new Player("playerCpu");

  });



});
