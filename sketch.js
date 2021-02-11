
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var mango2;
var mango3;
var mango4;
var mango5;
var mango6;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
	
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;
mango1=new mango(1100,100,30);
    mango2=new mango(1070,87,30);
	mango3=new mango(1050,79,30);
	mango4=new mango(1060,69,30);
	mango5=new mango(1040,60,30);
	mango6=new mango(1010,50,30);


	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}
function detectollision(){
  detectCollision(stoneObj,mango1)
  detectCollision(stoneObj,mango2)
  detectCollision(stoneObj,mango3)
  detectCollision(stoneObj,mango4)
  detectCollision(stoneObj,mango5)
  detectCollision(stoneObj,mango6)

  function keyPresed() {
    if (keyCode ===32) {
      Matter.Body.setPosition(stone.body,{x:235,y:420})
      launcherObject.attack(stoneObj.body);


    }
  }

 }



function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  groundObject.display();
}
