
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Ground,Paper,dustbin1,d2,d3,dustbinobj
function preload()
{
	dustbinimage=loadImage("sprites/dustbingreen.png")
	
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Ground = new ground(500,670,2500,20)
	Paper = new paper(50,600,10)
	
	 dustbin1 = new dustbin(700,620,20,90)
	 d2=new dustbin(870,620,20,90)
	 d3=new dustbin(785,660,168,20)

	 dustbinobj=createSprite(785,590,180,90)
	 dustbinobj.addImage(dustbinimage)
	 dustbinobj.scale=0.6
	 
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  
  Ground.display();
  Paper.display();
  dustbin1.display()
  d2.display()
  d3.display()

  drawSprites()
  
  
  
}

function keyPressed(){
	if(keyCode ===UP_ARROW){
		Matter.Body.applyForce(Paper.body,Paper.body.position,{x:9,y:-11})
	}

}



