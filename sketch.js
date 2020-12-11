var hypnoticBall, database;
var position;

var gameState=0;
var playerCount;
var form, player, game;


function setup(){
  database = firebase.database();

  game=new GameState();
  game.getState();
  game.start();
}

function draw(){
  background("white");

    drawSprites();
  
}
