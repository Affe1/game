let bgImg;
let paddelSprite;
let ballSprite;
let brickSprite;
let clack;


function preload() {
  bgImg = loadImage('Images/space.jpg');
  paddelSprite=loadImage('Images/paddel.png');
  ballSprite=loadImage('Images/ball.png');
  brickSprite=loadImage('Images/brick.png');
  clack = loadSound('clack.wav');
}
class Paddel {
  
  constructor() {
    this.x = width/2-paddelSprite.width/2;
    this.y = 580;
    this.icon = paddelSprite;
    this.vx = 3;
    this.vy = 3;
  }
  show() {
    image(this.icon, this.x, this.y, this.width, this.height);
  }
  update() {
    if(keyIsPressed){
     
      
        if(keyCode==39){
          if(this.x +5+paddelSprite.width>=800)
          {

          }
          else{
            this.x +=5;
          } 
        }
        if(keyCode==37){
          if(this.x -5<=0)
          {

          }
          else{
            this.x -=5;
          } 
        
        }
       
      
      
     
    }
  }
  
    
  
}


class Ball {
  constructor() {
    this.x = floor(random() * width/2);
    this.y = floor(random() * height/2);
    this.icon = ballSprite;
    this.vx = 3;
    this.vy = 3;
  }
  show() {
    image(this.icon, this.x, this.y, this.width, this.height);
  }
  update() {
  
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
  }
   
  checkCollision(object){
    if(this.x + this.vx+ballSprite.width>=800)
    {
      this.vx=-3;
    }
    if(this.x + this.vx+ballSprite.width/2<=0)
    {
      this.vx=3;
    }
    if(this.y + this.vy+ballSprite.height/2<=0)
    {
      this.vy=3;
    }
     if(this.x + ballSprite.width > object.x && this.x < object.x + paddelSprite.width && this.y + ballSprite.height > object.y && this.y < object.y + paddelSprite.height)
     {
      
      this.vy=-3;
     }
  }
  

}
    





function setup() {
  let canvas = createCanvas(800, 600);
  canvas.position(20, 20);
  ball = new Ball();
  paddel = new Paddel();
}
 
function draw(){
  
  background(0);
  image(bgImg, 0, 0, width, height);
  
    ball.update();
   ball.show();
    ball.checkCollision(paddel);
   paddel.show();
   paddel.update();
  
  
}

