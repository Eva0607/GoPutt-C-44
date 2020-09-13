const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var golfer;



function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  
  golfer = new Golfer(150, 200);
  


  
}

function draw() {
  background(0);
  
  golfer.display();

  


 
}