var bananaimg;
var jungle,jungleimg;
var monkey,monkeyimg;
var ground,score;
var jungle,jungleimg;
var obstacleGroup,bananaGroup,obstacleimg;

function preload(){
bananaimg = loadImage("Bananas.png");
  monkeyimg = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  jungleimg = loadImage("jungle2.jpg")
  obstacleimg = loadImage("stone.png");
}
function setup(){
jungle = createSprite(0,0,400,400);
jungle.addImage(jungleimg);
  
  //jungle.velocityX = -4;
  jungle.scale = 1.6;
  ground = createSprite(200,380,2000,30)
  ground.visible = false;
  monkey = createSprite(30,340,200,200);
  monkey.addAnimation("m1",monkeyimg);
  monkey.scale = 0.1;
  bananaGroup = createGroup();
  obstacleGroup = createGroup();
  score = 0;
    camera.position.x=camera.position.x+10;
}

function draw(){
  createCanvas(800,400);

    background("white");
  if(keyDown("space")&&monkey.y>320){
  monkey.velocityY = -15;
  }
monkey.velocityY = monkey.velocityY + 0.8
  console.log(monkey.y);

  monkey.collide(ground);
  if(jungle.x<0){
  jungle.x = jungle.width/2;
  }
if(monkey.isTouching(bananaGroup)){
score=score+2;
  bananaGroup.destroyEach();
  monkey.scale = 0.2;
  }
  
  if(monkey.isTouching(obstacleGroup)){
  monkey.scale=0.08;
  }
  
 spawnBananas(); 
  spawnObstacles();

drawSprites();
  textSize(20);
  text("Score:"+score,615,40);
  
}


function spawnBananas() {
  
  if (camera.position.x%500===0) {
    var banana = createSprite(800,120,40,10);
    banana.y = Math.round(random(120,250));
    banana.addImage(bananaimg);
    banana.scale = 0.03;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 400;
    
    //adjust the depth
    banana.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    //add each banana to the group
    bananaGroup.add(banana)
    
    //banana.velocityX = - (6 + 3*score/100);
  }
  
}
function spawnObstacles() {

  if (camera.position.x% 450 === 0) {
    var obstacle = createSprite(800,320,40,10);

    obstacle.addImage(obstacleimg);
   obstacle.scale = 0.25;
    //obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 800;
    
    //adjust the depth
    obstacle.depth = monkey.depth;
    monkey.depth = monkey.depth + 1;
    
    obstacleGroup.add(obstacle);
    
    obstacle.velocityX = - (6 + 3*score/100);
  }
  
}


