let bgImg;
let paddelSprite;
let ballSprite;
let brickSprite;
let clack;
var bricks=[];
var eins = true;

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

class Brick {
  constructor(x,y) {
    this.x = x;
    this.y = y;
    this.icon = brickSprite;
    this.width = brickSprite.width;
    this.height = brickSprite.height;  
  }
  show() {
     
    image(this.icon, this.x, this.y, this.width, this.height);
  } 
}


class Ball {
  constructor() {
    this.x = floor(random() * width);
    this.y = floor(random() * height/3)+brickSprite.height;
    this.icon = ballSprite;
    this.vx = 3 * this.vorzeichen();
    this.vy = 3;
  }
  vorzeichen(){
    var eins =  floor(random() *10);
    var wert;
    if(eins>=5)
    {
      wert = -1;
    }
    if(eins<5)
    {
      wert = 1;
    }
    return wert;
  }
  show() {
    image(this.icon, this.x, this.y, this.width, this.height);
  }
  update() {
  
    if(this.x + this.vx+ballSprite.width>=800)
    {
      this.vx=-3;
    }
    if(this.x + this.vx<=0)
    {
      this.vx=3;
    }
    if(this.y + this.vy<=0)
    {
      this.vy=3;
    }
    if(this.y + this.vy+ballSprite.height>=600)
    {
      eins = false;
    }
    
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
  }
   
  checkCollision(object){
   
     if(this.x + ballSprite.width > object.x && this.x < object.x + paddelSprite.width && this.y + ballSprite.height > object.y && this.y < object.y + paddelSprite.height)
     {
     
      this.vy=-3;
     }
  }
  baum(object,i)
  {
    if(this.x + brickSprite.width > object.x && this.x < object.x + brickSprite.width && this.y + brickSprite.height > object.y && this.y < object.y + brickSprite.height)
    {
    
      this.vy=3;
      bricks.splice(i,1);
     
    }
  }
  

}
    





function setup() {
  textSize(100);
  let canvas = createCanvas(800, 600);
  canvas.position(20, 20);
  let y = 0;
  let x = 0;
    while (x < width) {
      bricks.push(new Brick(x, y));
      x += brickSprite.width;//hier steht die Breite des Ziegels
    }
  ball = new Ball();
  paddel = new Paddel();
}
 
function draw(){
  
  background(0);
  image(bgImg, 0, 0, width, height);
  for (let i = 0; i < bricks.length; i++) {
    bricks[i].show();
  }
  for (let i = 0; i < bricks.length; i++) {
    ball.baum(bricks[i],i)
      
}
    ball.update();
   ball.show();
    ball.checkCollision(paddel);
   paddel.show();
   paddel.update();
   
 
  
}
function keyReleased(){
     
    if(eins == false)  
    {
     if(keyCode==32){
     ball = new Ball();
       eins = true;
    }
  }
return false;


}

