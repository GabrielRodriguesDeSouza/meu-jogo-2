var canvas;
var backgroundImage;
var bgImg;

var form, player,game;
var gameState = 0

var romeu
var racao
var blocos
var blocoImage1,blocoImage2,blocoImage3
var romeuImg
var racaoImg
var chegada
var chegadaImg


function preload() {
  backgroundImage = loadImage("./assets/asdasd.png");
  blocoImage1 = loadImage("./assets/bloco.png")
  blocoImage2 = loadImage("./assets/bloco2.png")
  romeuImg = loadImage("./assets/romeu.png")
  racaoImg = loadImage("./assets/food.png")
  chegadaImg = loadImage("./assets/red.png")
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
  game = new Game();
  //game.getState()
  game.start();

}

function draw() {
  background(backgroundImage);
  game.play()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
