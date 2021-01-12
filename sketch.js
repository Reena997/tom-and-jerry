var back,gardenImage;
var tom,jerry;
function preload() {
    //load the images here
    gardenImage = loadImage("images/garden.png");
    tomNormal = loadAnimation("images/tomOne.png");
    tom2  = loadAnimation("images/tomTwo.png","images/tomThree.png");
    tom4 = loadAnimation("images/tomFour.png");
    jerryNormal = loadAnimation("images/jerryOne.png");
    jerry2  = loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerry4 = loadAnimation("images/jerryFour.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom = createSprite(870,600,20,20);
    jerry = createSprite(200,600,20,20);

    jerry.addAnimation("jerryStanding",jerryNormal);
    jerry.scale = 0.1;
    
    tom.addAnimation("tomSleeping",tomNormal);
    tom.scale = 0.1;
    if(keyDown("Left_Arrow")){
        keyPressed();
    }

}

function draw() {

    background(gardenImage);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x < tom.width/2+jerry.width/2 &&
        jerry.x-tom.x<jerry.width/2+tom.width/2 &&
        tom.y-jerry.y < tom.height/2+jerry.height/2 &&
        jerry.y-tom.y<jerry.height/2+tom.height/2 ){
            tom.addAnimation("tomstop",tom4);
            tom.changeAnimation("tomstop");
            jerry.addAnimation("stop",jerry4);
            jerry.changeAnimation("stop"); 
            tom.velocityX = 0;  
        }
    drawSprites();
}


function keyPressed(){
  tom.addAnimation("tomRunning",tom2);
  tom.changeAnimation("tomRunning");
  jerry.addAnimation("teasing",jerry2);
  jerry.changeAnimation("teasing");
  tom.velocityX = -2;

  
  //For moving and changing animation write code here


}
