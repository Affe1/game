let bgImg;
let paddelSprite;
let ballSprite;
let brickSprite;



function preload() {
  bgImg = loadImage('Images/space.jpg');
  paddelSprite=loadImage('Images/paddel.png');
  ballSprite=loadImage('Images/ball.png');
  brickSprite=loadImage('Images/brick.png');
}

class Ball {
  constructor() {
    this.x = floor(random() * width);
    this.y = floor(random() * height);
    this.width = 30;
    this.height = 30;
    this.vx = 1;
    this.vy = 1;
  }
  show() {
    fill(250, 250, 0);
    ellipse(this.x, this.y, 30, 30);
  }
  update() {
    this.x = this.x + this.vx;
    this.y = this.y + this.vy;
  }
}

function setup() {
  let canvas = createCanvas(800, 600);
  canvas.position(20, 20);
  ball = new Ball();
}
 
function draw(){
  background(0);
  image(bgImg, 0, 0, width, height);
  image(paddelSprite, 400-paddelSprite.width/2,580 );
  //image(ballSprite, 400-ballSprite.width/2, 300-ballSprite.height/2);
  image(brickSprite, 400-brickSprite.width/2,20);
  ball.update();
   ball.show();
}

