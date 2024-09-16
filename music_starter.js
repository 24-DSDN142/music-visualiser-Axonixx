let imgCircle1;
let imgCircle2;
let imgGradient;
let imgGradient2;
let imgBoombox;
let imgBoomboxL;
let imgBoomboxR;
let imgBeatcircle;
let imgBeatcircle2;

let firstRun = true;


// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  colorMode(HSB, 100);
  background(10);
  rectMode(CENTER);
  strokeWeight(1);
  stroke(100);
  fill (0);
  angleMode(DEGREES);

  if (firstRun){
    imgCircle1 = loadImage('142 circle.png');
    imgGradient = loadImage('gradient 1.png');
    imgGradient2 = loadImage('gradient 2.png');
    imgCircle2 = loadImage('circle.png');
    imgBoombox = loadImage('boombox.png');
    imgBoomboxL = loadImage('boomboxL.png');
    imgBoomboxR = loadImage('boomboxR.png');
    imgBeatcircle = loadImage('beatcircle.png');
    imgBeatcircle2 = loadImage('beatcircle2.png');
   firstRun = false;
  }
  

  let bassMap1 = map(bass, 0, 100, 1, 2);
  let bassMap2 = map(bass, 0, 100, 1, 1.5);
  let drumMap = map(drum, 0, 100, 370, 900);
  let otherMap = map(other, 0, 100, 1, 1.1);
  let vocalMap = map(vocal, 0, 100, 0, 30);
  let vocalMap2 = map(vocal, 0, 100, 0.5, 0.55);
  

  let c = color((other + 50 > 100) ? other - 50 : other + 50, 
  80, 80, 80);


  push();
  tint(255, 50);
  translate(width/2, height/2);
  rotate(vocalMap);
  scale(vocalMap2);
  image(imgCircle1, -1310.5, -1310.5);

  pop();

  push();
  tint(255, 10);
  translate(width/2, height/2);
  rotate(vocalMap*1.5);
  scale(vocalMap2);
  image(imgCircle2, -1318.5, -1318.5);

  pop();

  push();
  tint(255, 30);
  scale(0.5);
  image(imgGradient, 0, 0);
  pop();

  push();
  translate(-30, 0)
  tint(255, 30);
  scale(0.5);
  image(imgGradient2, 0, 0);
  pop();


  //Lights left
  noStroke();
  fill(c);
  
  triangle(width/2-130, height/2+90, 350+drum, height/2-drumMap, 200+drum, height/2-drumMap);
  triangle(width/2 -130, height/2+90, 150+drum, height/2-drumMap, 0+drum, height/2-drumMap);
  triangle(width/2 -130, height/2+90, -250+drum, height/2-drumMap, -50+drum, height/2-drumMap);

  c = color((other + 50 > 100) ? other - 50 : other + 50, 
  10, 90, 50)
  fill(c);

  triangle(width/2-130, height/2+90, 310+drum, height/2-drumMap, 240+drum, height/2-drumMap);
  triangle(width/2 -130, height/2+90, 110+drum, height/2-drumMap, 40+drum, height/2-drumMap);
  triangle(width/2 -130, height/2+90, -200+drum, height/2-drumMap, -100+drum, height/2-drumMap);

  //Lights Right
  c = color(other, 80, 80, 70);
  fill(c);

  triangle(width/2 +130, height/2+90, width-350-drum, height/2-drumMap, width-200-drum, height/2-drumMap);
  triangle(width/2 +130, height/2+90, width-150-drum, height/2-drumMap, width-drum, height/2-drumMap);
  triangle(width/2 +130, height/2+90, width+250-drum, height/2-drumMap, width+50-drum, height/2-drumMap);
 
  c = color(other, 10, 90, 50)
  fill(c);

  triangle(width/2 +130, height/2+90, width-310-drum, height/2-drumMap, width-240-drum, height/2-drumMap);
  triangle(width/2 +130, height/2+90, width-110-drum, height/2-drumMap, width-40-drum, height/2-drumMap);
  triangle(width/2 +130, height/2+90, width+200-drum, height/2-drumMap, width+100-drum, height/2-drumMap);
 

  strokeWeight(3);
  stroke(
    (other + 50 > 100) ? other - 50 : other + 50, 
    10, 90
  );


  //////////////////////////////////////////////////////////////////////////

  //Boombox box
  //left
  push();
  translate(width/2-310, height/2+170);
  scale(0.3);
  scale(otherMap)
  image(imgBoomboxL, -587, -575);
  pop();

  push();
  translate(width/2+310, height/2+170);
  scale(0.3);
  scale(otherMap)
  image(imgBoomboxR, -587, -575);
  pop();

  //main
  push();

  translate(width/2, height/2+150);
  scale(0.3);
  scale(otherMap);
  image(imgBoombox, -753, -645);

  pop();
 
  //glow circles
  //smol
  push();

  tint(225, 80);
  translate(width/2-87, height/2+256);
  scale(0.06 * bassMap2);
  image(imgBeatcircle2, -425, -425);

  pop();
  
  //beeg
  push();

  tint(225, 80);
  translate(width/2-90, height/2+260);
  scale(0.075 * bassMap1);
  image(imgBeatcircle2, -425, -425);

  pop();

  push();

  //circle bold smol
  noFill();
  c = color((other + 50 > 100) ? other - 50 : other + 50, 
  30, 90)
  stroke(c);
  translate(width/2-87, height/2+256);
  scale(bassMap2);
  ellipse(0, 0, 40, 40);

  pop();

  push();
  //beeg circle
  noFill();
  translate(width/2-90, height/2+260);
  scale(bassMap1);

  strokeWeight(2);
  stroke(
    (other + 50 > 100) ? other - 50 : other + 50, 
    30, 90);
  ellipse(0, 0, 50, 50)

  pop();

  //////////////////////////////////////////////////////////////////

  //glow circles
  //smol
  push();

  tint(225, 80);
  translate(width/2+87, height/2+256);
  scale(0.06 * bassMap2);
  image(imgBeatcircle2, -425, -425);

  pop();
  
  //beeg
  push();

  tint(225, 80);
  translate(width/2+90, height/2+260);
  scale(0.075 * bassMap1);
  image(imgBeatcircle2, -425, -425);

  pop();

  push();

  //circle bold smol
  noFill();
  c = color(other, 30, 90)
  stroke(c);
  translate(width/2+87, height/2+256);
  scale(bassMap2);
  ellipse(0, 0, 40, 40);

  pop();

  push();
  //beeg circle
  noFill();
  translate(width/2+90, height/2+260);
  scale(bassMap1);

  strokeWeight(2);
  c = color(other, 30, 90)
  stroke(c);
  ellipse(0, 0, 50, 50)

  pop();

  //////////////////////////////////////////////////////////////////

  //glow circles
  //smol
  push();

  tint(225, 80);
  translate(width/2-117, height/2+69);
  scale(0.06 * bassMap2);
  scale(1.2);
  image(imgBeatcircle2, -425, -425);

  pop();
  
  //beeg
  push();

  tint(225, 80);
  translate(width/2-120, height/2+65);
  scale(0.075 * bassMap1);
  scale(1.2);
  image(imgBeatcircle2, -425, -425);

  pop();

  push();

  //circle bold smol
  noFill();
  c = color((other + 50 > 100) ? other - 50 : other + 50, 
  30, 90)
  stroke(c);
  translate(width/2-117, height/2+69);
  scale(bassMap2);
  scale(1.2);
  ellipse(0, 0, 40, 40);

  pop();

  push();
  //beeg circle
  noFill();
  translate(width/2-120, height/2+65);
  scale(bassMap1);
  scale(1.2);

  strokeWeight(2);
  stroke(
    (other + 50 > 100) ? other - 50 : other + 50, 
    30, 90);
  ellipse(0, 0, 50, 50)

  pop();

  //////////////////////////////////////////////////////////////////

  //glow circles
  //smol
  push();

  tint(225, 80);
  translate(width/2+117, height/2+69);
  scale(0.06 * bassMap2);
  scale(1.2);
  image(imgBeatcircle2, -425, -425);

  pop();
  
  //beeg
  push();

  tint(225, 80);
  translate(width/2+120, height/2+65);
  scale(0.075 * bassMap1);
  scale(1.2);
  image(imgBeatcircle2, -425, -425);

  pop();

  push();

  //circle bold smol
  noFill();
  c = color(other, 30, 90)
  stroke(c);
  translate(width/2+117, height/2+69);
  scale(bassMap2);
  scale(1.2);
  ellipse(0, 0, 40, 40);

  pop();

  push();
  //beeg circle
  noFill();
  translate(width/2+120, height/2+65);
  scale(bassMap1);
  scale(1.2);

  strokeWeight(2);
  c = color(other, 30, 90)
  stroke(c);
  ellipse(0, 0, 50, 50)

  pop();

  //////////////////////////////////////////////////////////////////
  
  //glow circles
  //smol
  push();

  tint(225, 80);
  translate(width/2+370, height/2+159);
  scale(0.06 * bassMap2);
  scale(1.5);
  image(imgBeatcircle2, -425, -425);

  pop();
  
  //beeg
  push();

  tint(225, 80);
  translate(width/2+375, height/2+158);
  scale(0.075 * bassMap1);
  scale(1.5);
  image(imgBeatcircle2, -425, -425);

  pop();

  push();

  //circle bold smol
  noFill();
  c = color(other, 30, 90)
  stroke(c);
  translate(width/2+370, height/2+159);
  scale(bassMap2);
  scale(1.5);
  ellipse(0, 0, 40, 40);

  pop();

  push();
  //beeg circle
  noFill();
  translate(width/2+375, height/2+158);
  scale(bassMap1);
  scale(1.5);

  strokeWeight(2);
  c = color(other, 30, 90)
  stroke(c);
  ellipse(0, 0, 50, 50)

  pop();

  //////////////////////////////////////////////////////////////////
  
  //glow circles
  //smol
  push();

  tint(225, 80);
  translate(width/2-370, height/2+159);
  scale(0.06 * bassMap2);
  scale(1.5);
  image(imgBeatcircle2, -425, -425);

  pop();
  
  //beeg
  push();

  tint(225, 80);
  translate(width/2-375, height/2+158);
  scale(0.075 * bassMap1);
  scale(1.5);
  image(imgBeatcircle2, -425, -425);

  pop();

  push();

  //circle bold smol
  noFill();
  c = color((other + 50 > 100) ? other - 50 : other + 50, 
  30, 90)
  stroke(c);
  translate(width/2-370, height/2+159);
  scale(bassMap2);
  scale(1.5);
  ellipse(0, 0, 40, 40);

  pop();

  push();
  //beeg circle
  noFill();
  translate(width/2-375, height/2+158);
  scale(bassMap1);
  scale(1.5);

  strokeWeight(2);
  c = color((other + 50 > 100) ? other - 50 : other + 50, 
  30, 90)
  stroke(c);
  ellipse(0, 0, 50, 50)

  pop();

  //////////////////////////////////////////////////////////////////
  

  push();

  noStroke();
  fill(100);
  translate(width/2 -130, height/2+90);
  scale(0.5);
  //rect(0, 0, 10, 10);
  //Drawing the sparkle
  //triangle(-5, -5, 5, -5, 0, -25);
  //triangle(-5, -5, -5, 5, -25, 0);
  //triangle(-5, 5, 5, 5, 0, 25);
  //triangle(5, -5, 5, 5, 25, 0);
  
  //triangle(5, -5, -5, 5, -15, -15);
  //triangle(5, 5, -5, -5, -15, 15);
  //triangle(-5, 5, 5, -5, 15, 15);
  //triangle(-5, -5, 5, 5, 15, -15);

  pop();


}

