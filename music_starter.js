
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  colorMode(HSB, 100);
  background(10);
  rectMode(CENTER);
  strokeWeight(1);
  stroke(100);
  fill (0);
  angleMode(DEGREES);

  let bassMap1 = map(bass, 0, 100, 1, 2);
  let bassMap2 = map(bass, 0, 100, 1, 1.5)
  let drumMap = map(drum, 0, 100, 0, 900);





  stroke(
    (drum + 50 > 100) ? drum - 50 : drum + 50, 
    80, 80
  );
  fill((drum + 50 > 100) ? drum - 50 : drum + 50, 
  80, 80)


  strokeWeight(15);
  line(width/2 -90, height/2+90, 200+drum, height/2-drumMap);
  line(width/2 -90, height/2+90, 100, height/2-drumMap);
  line(width/2 -90, height/2+90, 0-drum, height/2-drumMap);

  stroke(drum, 80, 80);
  line(width/2 +90, height/2+90, width-200-drum, height/2-drumMap);
  line(width/2 +90, height/2+90, width -100, height/2-drumMap);
  line(width/2 +90, height/2+90, width+drum, height/2-drumMap);

  strokeWeight(5);
  stroke(
    (drum + 50 > 100) ? drum - 50 : drum + 50, 
    10, 90
  );

  line(width/2 -90, height/2+90, 200+drum, height/2-drumMap);
  line(width/2 -90, height/2+90, 100, height/2-drumMap);
  line(width/2 -90, height/2+90, 0-drum, height/2-drumMap);

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
  ellipse(0, 0, 50, 50);
 
  pop();
  

}

