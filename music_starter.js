let imgCircle1;
let imgCircle2;
let imgGradient;
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
    imgCircle2 = loadImage('circle.png');
   firstRun = false;
  }
  


  let bassMap1 = map(bass, 0, 100, 1, 2);
  let bassMap2 = map(bass, 0, 100, 1, 1.5)
  let drumMap = map(drum, 0, 100, 0, 900);
  let vocalMap = map(vocal, 0, 100, 0, 30);
  let vocalMap2 = map(vocal, 0, 100, 0.5, 0.55);
  

  


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
  rotate(vocalMap);
  scale(vocalMap2);
  image(imgCircle2, -1318.5, -1318.5);

  pop();

  push();
  tint(255, 30);
  scale(0.5);
  image(imgGradient, 0, 0);
  pop();


  stroke(
    (other + 50 > 100) ? other - 50 : other + 50, 
    80, 80
  );
  fill((other + 50 > 100) ? other - 50 : other + 50, 
  80, 80)


  strokeWeight(15);
  line(width/2 -130, height/2+90, 200+drum, height/2-drumMap);
  line(width/2 -130, height/2+90, 100, height/2-drumMap);
  line(width/2 -130, height/2+90, 0-drum, height/2-drumMap);

  stroke(other, 80, 80);

  line(width/2 +90, height/2+90, width-200-drum, height/2-drumMap);
  line(width/2 +90, height/2+90, width -100, height/2-drumMap);
  line(width/2 +90, height/2+90, width+drum, height/2-drumMap);

  strokeWeight(5);
  stroke(
    (other + 50 > 100) ? other - 50 : other + 50, 
    10, 90
  );

  line(width/2 -130, height/2+90, 200+drum, height/2-drumMap);
  line(width/2 -130, height/2+90, 100, height/2-drumMap);
  line(width/2 -130, height/2+90, 0-drum, height/2-drumMap);

  stroke(drum, 10, 90);
  line(width/2 +90, height/2+90, width-200-drum, height/2-drumMap);
  line(width/2 +90, height/2+90, width -100, height/2-drumMap);
  line(width/2 +90, height/2+90, width+drum, height/2-drumMap);

  strokeWeight(1);
  stroke(100);
  fill (0);

  //box
  stroke(100);
  rect(width/2, height/2+190, 250, 300);


  push();

  //smol circle
  translate(width/2-62, height/2+104);
  scale(bassMap2);
  ellipse(0, 0, 40, 40);

  pop();
  push();

  //beeg circle
  noFill();
  translate(width/2-65, height/2+100);
  scale(bassMap1);

  strokeWeight();
  stroke(
    (other + 50 > 100) ? other - 50 : other + 50, 
    50, 90
  );
  ellipse(0, 0, 50, 50)

  stroke(100);
  strokeWeight(1);
  ellipse(0, 0, 50, 50);

  pop();
  

  push();

  noStroke();
  fill(100);
  translate(width/2 -130, height/2+90);
  scale(0.5);
  rect(0, 0, 10, 10);
  triangle(-5, -5, 5, -5, 0, -25);
  triangle(-5, -5, -5, 5, -25, 0);
  triangle(-5, 5, 5, 5, 0, 25);
  triangle(5, -5, 5, 5, 25, 0);
  
  triangle(5, -5, -5, 5, -15, -15);
  triangle(5, 5, -5, -5, -15, 15);
  triangle(-5, 5, 5, -5, 15, 15);
  triangle(-5, -5, 5, 5, 15, -15);

  pop();


}

