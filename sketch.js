
var paper
var ground

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	paper = new Paper(100, 400)
	ground = createSprite(100, 650, 1800, 20)

	Engine.run(engine);

}


function draw() {
	rectMode(CENTER);
	background(0);

	paper.display()
	ground.display()



	


	drawSprites();

}

function keyPressed() {

	if(keyCode === UP_ARROW) {

Matter.Body.applyForce(paperObject.body.paperObject.body.position , { x:85 , y:-85})


	}


}



