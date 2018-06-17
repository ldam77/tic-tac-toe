// business logic
function Player (player) {
  this.name = player;
  this.pieceLocations = [];
};

var playerOne = new Player("Player ONE");
var playerTwo = new Player("Player TWO");
var counter = 0;
const imgX = 'img/x.png';
const imgO = 'img/1.png';
const winningImg = 'img/dancing.gif';
const winCondition = [["1a", "1b", "1c"], ["2a", "2b", "2c"], ["3a", "3b", "3c"], ["1a", "2a", "3a"], ["1b", "2b", "3b"], ["1c", "2c", "3c"], ["1a", "2b", "3c"], ["1c", "2b", "3a"]];
var playArea = ['1a', '2a', '3a', '1b', '2b', '3b', '1c', '2c', '3c'];
var gameOver = false;

function changeImage(id, img){
  var location = id+"pic";
  document.getElementById(location).src = img;
};

function flashScreen(){
  $('.row').fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn(200).fadeOut(200).fadeIn();
};

function playGame(id) {

  if(playArea.indexOf(id) >= 0){
    playArea.splice(playArea.indexOf(id), 1);

    // if(playerTwo.name === "Computer"){
    //   playerTwoTurn(id);
    // }
    if (counter%2){
      playerOneTurn(id);
      } else {
      playerTwoTurn(id);
    };
    checkWinCondition();
    counter += 1;
    if(playerTwo.name === "Computer" && counter%2 === 0){
      computerAI();
    };
  };
};

function playerOneTurn(id) {
  changeImage(id,imgX);
  playerOne.pieceLocations.push(id);
  $("#winner").text(playerTwo.name + " Turn");
};

function playerTwoTurn(id) {
  changeImage(id,imgO);
  playerTwo.pieceLocations.push(id);
  $("#winner").text(playerOne.name + " Turn");
};

function computerAI() {
  var id = playArea[getRandomInt(playArea.length)-1];
  playGame(id);
};

function checkWinCondition() {
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
      $("#winner").text(playerOne.name + " Won!!!");
      gameOver = true;
      flashScreen();
      changeImage('winning-', winningImg);
      $('html, body').animate({scrollTop:$(document).height()}, 'fast');
    } else if (p2Count === 3){
      $("#winner").text(playerTwo.name + " Won!!!");
      gameOver = true;
      flashScreen();
      changeImage('winning-', winningImg);
      $('html, body').animate({scrollTop:$(document).height()}, 'fast');
    };
  });

  if(!gameOver && playArea.length === 0){
    $("#winner").text("DRAW");
  };
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max)+1);
};

function firstTurn() {
  counter = getRandomInt(2);
  if(counter === 1){
    $("#winner").text(playerOne.name + " Turn");
  } else {
    $("#winner").text(playerTwo.name + " Turn");
    if(playerTwo.name === "Computer"){
      computerAI();
    };
  };
}

// user interface
$(document).ready(function(){
  $("#game-mode").submit(function(event){
    event.preventDefault;
    var gameMode = $("input:radio[name=mode]:checked").val();
    if(gameMode === "pvc"){
      playerTwo.name = "Computer";
    };
    firstTurn();
    return false; // to prevent resetting document after submit so the turn message stay
  });
});
