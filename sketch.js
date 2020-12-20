
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var survivalTime=0
var ground
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
   createCanvas(600,400);
  
  monkey = createSprite(50,220,20,50);
  
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.12;
  
  ground=createSprite(10,260,600,10);
   ground.x = ground.width /2;
  ground.velocityX = -6

 bananaGroup=new Group();
  obstacleGroup= new Group();

}


function draw() {
background("white")
 
 if (ground.x < 0){
      ground.x = ground.width/2;
    }
  


  if(keyDown("space") && monkey.y >= 100) {
      monkey.velocityY = -10;
  }
  
    monkey.velocityY = monkey.velocityY + 0.8
  
  
   monkey.collide(ground)
 
  banana();
  obstacle();
  drawSprites();
stroke("black")
  textSize(20);
  fill("red")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+survivalTime,100,60)
  
}

function banana(){

if (frameCount % 170 === 0) {
var  banana=createSprite(300,40,20,30)
    banana.y = Math.round(random(30,170));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -(3+ 10*survivalTime/100);
    
     //assign lifetime to the variable
    banana.lifetime = 80;

bananaGroup.add(banana)
}
  
}

function obstacle(){
  if (frameCount % 180 === 0) {
  var  obstacle=createSprite(300,240,20,30)
    obstacle.x = Math.round(random(130,260));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -(4+ 20*survivalTime/100);
  obstacle.lifetime=100
    obstacleGroup.add(obstacle);
}

}

