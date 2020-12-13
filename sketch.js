  var monkey , monkey_running;
  var banana ,bananaImage, obstacle,obstacleImage;
  var FoodGroup, obstacleGroup;
  var score,survivalTime; 

  function preload(){


    monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

    bananaImage = loadImage("banana.png");
    obstacleImage = loadImage("obstacle.png");

  }

  function setup() {
  createCanvas(600,600); 
    
  FoodGroup=new Group();
  obstacleGroup=new Group();  

  var survivalTime=0;  
  var score=0;

  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;

  ground=createSprite(400,350,900,10); 
  ground.velocityX=-4;
  ground.x=ground.width/2;

  }
  function draw() {
  background("white");
  

  spawnObstacles();
  spawnBananas();


  console.log(ground.x);
  if(ground.x<150){
     ground.x=ground.width/2;
  }
    
  if(keyDown("space")){
     monkey.velocityY=-12;
  }   
  monkey.velocityY=monkey.velocityY+0.8;
    
  monkey.collide(ground);
  
  if(obstacleGroup.isTouching(monkey)){
     ground.velocityX=0;
     monkey.velocityY=0;
     monkey.velocityX=0;
     FoodGroup.setVelocityXEach(0);
     obstacleGroup.setVelocityXEach(0);
     obstacleGroup.setLifetimeEach(-1);
     FoodGroup.setLifetimeEach(-1);
   
    }
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+score, 500,50);

  stroke("black");
  textSize(20);
  fill("black");
  text("Survival Time:" +survivalTime,300,50); 
  survivalTime=Math.ceil(frameCount/frameRate())

  drawSprites();  
  }

  function spawnObstacles(){
  if(frameCount %300===0){
     obstacle=createSprite(580,315,20,20);
     obstacle.addAnimation("boulder",obstacleImage);
     obstacle.scale=0.15;
     obstacle.velocityX=-4;
     obstacleGroup.add(obstacle);
     monkey.depth=obstacle.depth;
     monkey.depth=obstacle.depth+1;
     obstacle.lifetime=300;
  } 

  }

  function spawnBananas(){
  if(frameCount %200===0){
     banana=createSprite(580,100,10,10);
     banana.addAnimation("Food",bananaImage);
     banana.scale=0.1
     banana.velocityX=-4;
     FoodGroup.add(banana);
     monkey.depth=banana.depth;
     monkey.depth=banana.depth+1;
     banana.lifetime=300;
  } 
  }




