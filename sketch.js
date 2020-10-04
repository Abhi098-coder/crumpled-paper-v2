
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bin, binIMG;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	bin = createSprite(400,615,100,10);
	binIMG = loadImage("can.png");
	bin.addImage(binIMG);
	bin.scale = 0.5;
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new circle(200,695,10);
	ground = new box(400,700,800,10);
	boxBottom = new box(400,690,100,10);
	boxLeft = new box(350,675,10,75);
	boxRight = new box(450,675,10,75);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
  boxBottom.display(240,230,140);
  boxLeft.display(240,230,140);
  boxRight.display(240,230,140);
  ground.display(178,34,34);
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}

