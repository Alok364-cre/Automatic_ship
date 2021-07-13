var sea ,invisble_ground,seaImage;
var ship,ship_running,edges;
function preload(){
ship_running=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
seaImage=loadImage("sea.png");
}

function setup(){
  createCanvas(500,400);
  sea=createSprite(200,200,0,40,20);
  sea.addImage("sea",seaImage);
  sea.x=sea.width/2;

//creating ship
ship=createSprite(50,300,40,70);
ship.addAnimation("running",ship_running);
edges=createEdgeSprites();

//adding scale and position to ship
ship.scale=0.2;
ship.x=120;
}

function draw() {
  //set background color
  background("blue");
  sea.velocityX=-3;
  console.log(sea.x);
  if(sea.x<0){
   sea.x=sea.width/2;
  }
 

 drawSprites();
}