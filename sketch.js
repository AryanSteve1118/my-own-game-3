const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world; 

var canvas, backgroundImage;
var bgImg;
var carsAtEnd = 0
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var ball;
var form, player, game;



var ballImg,basketImg,basket

function preload(){
  ballImg = loadImage("images/ball.png")
  basketImg = loadImage("images/basket.png")
  bgImg = loadImage("../images/backgForm.jpg")

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  engine = Engine.create();
    world = engine.world;

  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  ball = new Ball(displayWidth/2, displayHeight-100, 40);
}


function draw(){
  Engine.update(engine);
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
    
  }
  if(gameState === 2){
    game.end();
  }
}
