let img;
let angle = 0;
let scale = 1;

let centerX = 175;
let centerY = 175;
let x = 14;
let y = -13;

function preload() {
  img = loadImage('a.png');
}

function setup() {
  createCanvas(350, 350);
  angleMode(DEGREES);
}


function rotateAndTranslateImg(){
  if (x > 0) {
    x += -0.07;
    y += 0.07;
  
  } else {
    if (angle != 180) {
      angle += 5;
    }
  }
  if (angle == 180) {
    if (y > -10) {
      y += -0.2
    }
    if (x < 10) {
      x += 0.5;
    }
  
  }  
}

function scaleImg(){
  let auxX = x;
  let auxY = y;
  if (x >= 2 && scale == 1) {
    x -= 0.09;
    y += 0.09;  
  }else{
    if(scale < 2){
      scale += 0.02
    }   
  }if(x < 24 && scale > 2){
    y -= 0.11;
    x += 0.11;
    console.log(x)
  }
  
}

function draw() {
  background(220);

  fill(0, 0, 0);

  line(175, -200, 175, 350);
  line(-200, 175, 350, 175);

  //TRANSLADA A ORIGEM PARA O MEIO DO CANVAS
  translate(centerX, centerY);
  //PONTINHO REFERENCIAL NO EIXO (0,0);
  ellipse(0, 0, 5, 5);



  imageMode(CENTER)
  
  //questão 1
  // rotate(angle);
  // image(img, x, y, 70, 80);
  // rotateAndTranslateImg();


  //questão 2
  rotate(180);
  image(img, x, y, scale*70, scale*80);
  scaleImg();
    




}
draw();
setup();