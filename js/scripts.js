// business logic
function Player (player) {
  this.name = player;
  this.pieceLocations = [];
}

var playerOne = new Player("Player ONE");
var playerTwo = new Player("Player TWO");
var playerCpu = new Player("Computer");
var counter = 0;
var imgX = 'img/x.png';
var imgO = 'img/check.png';
var winCondition = [["1a", "1b", "1c"], ["2a", "2b", "2c"], ["3a", "3b", "3c"], ["1a", "2a", "3a"], ["1b", "2b", "3b"], ["1c", "2c", "3c"], ["1a", "2b", "3c"], ["1c", "2b", "3a"]];

function changeImage(id, img){
  var location = id+"pic";
  document.getElementById(location).src = img;
}

function playGame(id) {
  counter +=1;
  if (counter%2){
    changeImage(id,imgX);
    playerOne.pieceLocations.push(id);
  } else {
    changeImage(id,imgO);
    playerTwo.pieceLocations.push(id);
  };

  var p1Count = 0;
  var p2Count = 0;
  winCondition.forEach(function(winningArray){
    p1Count = 0;
    p2Count = 0;
    winningArray.forEach(function(location){
      if (playerOne.pieceLocations.indexOf(location) > -1){
        p1Count += 1;
      };
      if (playerTwo.pieceLocations.indexOf(location) > -1){
        p2Count += 1;
      };
    });
    if(p1Count === 3){
      $("#winner").text(playerOne.name);
    } else if (p2Count === 3){
      $("#winner").text(playerTwo.name);
    };
  });

}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)+1);
}

// Player.prototype.playGame = function (){
  // var imgX = 'img/x.png';
  // var imgO = 'img/check.png';
//   for (i=1, 1 < 10, i++) {
//
//   }
// };

// user interface
$(document).ready(function(){
  $("#game-mode").submit(function(event){
    event.preventDefault;
    var gameMode = $("input:radio[name=mode]:checked").val();


  });
});
