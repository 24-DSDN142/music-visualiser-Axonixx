
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  colorMode(HSB, 100);
  background(10);
  rectMode(CENTER);
  strokeWeight(4);
  stroke(100-drum, 80, 80);

  let drumMap = parseInt(map(drum, 0, 100, 10, 90));
  let lenghtOfLine = 300;
  let lineStart = 100;
  let lineEnd = lineStart+lenghtOfLine;


  for (let i =1; i <= drumMap; i++){
    let lineStep = i*5;
    line(lineStart, lineStep, lineEnd, lineStep);
  }


}