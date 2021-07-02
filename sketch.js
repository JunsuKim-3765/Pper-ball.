
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
 var g1, g2, g3;

function setup() {
	createCanvas(1200, 500);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball = Bodies.circle(50, 150, 15,{restitution:0.3,density:1.2});
	World.add(world, ball);
	rectMode(CENTER);
	ellipseMode(RADIUS);

	g1=new Ground(600, 490, 1200, 20);
	g2=new Ground(1000, 455, 20, 49);
	g3=new Ground(1150, 455, 20, 49);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("#fdb9c8");
  
  
  g1.show();
  fill("#ffa6c9")
  g2.show();
  fill("#c7ea46");
  g3.show();
  fill("#73c2fb");
  ellipse(ball.position.x, ball.position.y, 15);

  Engine.update(engine);
  drawSprites();
 
}

function keyPressed()
{
  if(keyCode==UP_ARROW)
    {
      Matter.Body.applyForce(ball,{x:0,y:0},{x:29,y:-5});
    }
}

