const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint =Matter.Constraint;

var engine, world;

var ground,ball,slingshot;


function setup() {
  createCanvas(100,400);
  engine = Engine.create();
  world = engine.world;

  ground1=new Ground(380,300,270.10);
  ground2=new Ground(700,200,200,10);

  block1=new Block(280,275,30,40);
  block2=new Block(310,270,30,40);
  block3=new Block(340,275,30,40);
  block4=new Block(370,275,30,40);
  block5=new Block(400,275,30,40);
  block6=new Block(430,275,30,40);
  block7=new Block(460,275,30,40);
  block8=new Block(490,275,30,40);

  block9=new Block(280,275,30,40);


}

function draw() {
  background(255,255,255);  
  drawSprites();
}