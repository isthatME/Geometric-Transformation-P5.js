let img;
let angle = 0;

let x = 142;
let y = 96;

function preload() {
  img = loadImage('a.png');
}

function setup() {
  createCanvas(350, 350);
  angleMode(CENTER);
}

function translateX(){
  if(x > 94){
    x -= 0.2
  } 

  
}

function rotateNegative(){
  if(x <= 142){
    x += 0.2;
  }

  if(angle < 180){
    angle += 1;
  }
  
}

function draw() {
  background(220);
  
  fill(0,0,0);
  ellipse(175,175,5,5);
  line(175,-200,175,350);
  line(-200,175,350,175);
  
  rotate(angle);
  
  image(img, x,y,100,120);
  angle += 0,1;
  //translateX(); 
  
}
setup();
draw();