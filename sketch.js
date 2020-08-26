
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	Engine.run(engine);

	ball= new Ball(150,250);
	ground= new Ground(400,400,800,20);
	dustbin= new Dbin(500,380,100,20);
	dustbin2= new Dbin(435,340,20,100);
	dustbin3= new Dbin(565,340,20,100);
}


function draw() {
  background(0);
  Engine.update(engine);

  ball.display();
  ground.display();
  dustbin.display();
  dustbin2.display();
  dustbin3.display();
  
  drawSprites();
 
}

function keyPressed(){
if(keyCode===UP_ARROW){
	Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
}
	
}


