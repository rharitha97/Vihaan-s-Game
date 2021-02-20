var gamestateObj, formObj, playerObj, database;
var gameState = 0;
var playerCount;
function setup() {
  createCanvas(800,400);
  database = firebase.database();
  gameObj = new Gamestate();
  gameObj.getState();
  gameObj.start();
}

function draw() {
  background(255);
  drawSprites();
}