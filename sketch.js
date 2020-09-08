const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperBody, ball;
var bin, binIMG;
var ground;
var body, position;
var image;

function preload()
{
	binIMG=loadImage("dustbingreen.png");
}

function setup() {
	
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;
	
	ball = new Paper(180,240,70);
	ball.scale=0.2;
	
	bin=createSprite(600,575,200,20);
	bin.addImage(binIMG);
	bin.scale=0.7;
	
	ground = new Ground(600,700,1200,20)

	paperBody = Bodies.circle(200, 200, 200);
	paperBody.shapeColor="green";
	World.add(world, paperBody); 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(220);
  
  ball.display();
  ground.display();
  drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Body.applyForce(ball.body,ball.body.position,{x:115,y:-225});
	}

}

