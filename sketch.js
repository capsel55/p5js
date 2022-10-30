var   background, redB, pinkB, greenB ,blueB ;
var  green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;
var ff, ffImage
var freeSound;
var jai,jaiImage;
var kla,klaImage;
var wolf,wolfImage;
var ground;
function preload(){
  
  backgroundImage = loadImage("background0.png");
  red_balloonImage = loadImage("DJ.PNG");
  green_balloonImage = loadImage("K.PNG");
  pink_balloonImage = loadImage("hayato.PNG");
  blue_balloonImage = loadImage("moco.PNG");
  ffImage = loadImage("ff.PNG");
  freeSound = loadSound("FREE FIRE.mp3");
  klaImage = loadImage("kla.PNG");
  jaiImage = loadImage("jai.PNG");
  wolfImage = loadImage("wolf.PNG");
}



function setup() {
  createCanvas(1200, 500);
   

   
  //creating background
  background = createSprite(600,250,1200,500);
  background.addImage(ffImage);
  background.scale = 2
 
   score = 0  
  redB= new Group();
  greenB= new Group();
   blueB= new Group();
  pinkB= new Group();

  
}

function draw() {
  
 if(keyDown("r")) {
        freeSound.play();
    }
  
  // moving ground
    background.velocityX = 0      

    if (background.x < 0){
      background.x = background.width/2;
    }
  
 
           
  
  //creating continous enemies
  var select_balloon = Math.round(random(1,7));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else if (select_balloon == 4) {
      pinkBalloon();
    }else if (select_balloon == 5){
      jai();
    }else if (select_balloon == 6) {
      kla();
    }else if (select_balloon == 7) {
    wolf();
  }
  }

  
  drawSprites();
    
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(green_balloonImage);
  red.velocityX = 7;
  red.lifetime = 1000;
  red.scale = 1;
  redB.add(red);
  
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 7;
  blue.lifetime = 1000;
  blue.scale = 1.5;
  blueB.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(red_balloonImage);
  green.velocityX = 7;
  green.lifetime = 1000;
  green.scale = 1;
  greenB.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 7;
  pink.lifetime = 1000;
  pink.scale = 1
  pinkB.add(pink);
}

function jai() {
  var jai = createSprite(0,Math.round(random(20, 370)), 10, 10);
  jai.addImage(jaiImage);
  jai.velocityX = 7;
  jai.lifetime = 1000;
  jai.scale = 1;
}

function kla() {
  var kla = createSprite(0,Math.round(random(20, 370)), 10, 10);
  kla.addImage(klaImage);
  kla.velocityX = 7;
  kla.lifetime = 1000;
  kla.scale = 1;
  
  
}
function wolf() {
  var wolf = createSprite(0,Math.round(random(20, 370)), 10, 10);
  wolf.addImage(wolfImage);
  wolf.velocityX = 7;
  wolf.lifetime = 1000;
  wolf.scale = 1.3;
  
  
}