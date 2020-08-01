var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var redBox1, redBox2, redBox3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	

	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	redBox1 = Bodies.rectangle(320, 600, 20,200 , {isStatic:true} );
	 World.add(world,redBox1);
	 
	 redBox2 = Bodies.rectangle(480, 600, 20,200 , {isStatic:true} );
	 World.add(world,redBox2);

	 redBox3 = Bodies.rectangle(440, 650, 500,40 , {isStatic:true} );
	 World.add(world,redBox3);
	 
	 
	


	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);



  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y;


	ellipse(packageBody.position.x,packageBody.position.y,50,50);
	rect(ground.position.x,ground.position.y, 800,20);
	rect(redBox1.position.x, redBox1.position.y,20,120);
	rect(redBox2.position.x, redBox2.position.y,20,120);
	//rect(redBox3.position.x, redBox3.position.y,300,120);
	
	

	 

  

  

  drawSprites();
 
}

function keyPressed(){
 if (keyCode === DOWN_ARROW) {

	Matter.Body.setStatic(packageBody, false);
	 
	}
}
   




