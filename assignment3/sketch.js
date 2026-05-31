const sketch3 = (p) => {
  p.setup = () => {
    let myCanvas = p.createCanvas(600, 400);
    myCanvas.parent("canvas-assignment3"); 
  };

  p.draw = () => {
    p.background(255);

    // 1. 뒷머리
    p.noStroke();
    p.fill(25, 25, 25);
    p.ellipse(200, 220, 260, 280); 
    p.rect(70, 200, 260, 260, 80, 80, 0, 0);

    // 2. 얼굴 윤곽 
    p.fill(255, 228, 209);
    p.ellipse(200, 240, 210, 240);

    // 3. 앞머리
    p.fill(25, 25, 25);
    p.arc(200, 160, 220, 120, p.radians(165), p.radians(330));
    p.arc(280, 120, 220, 120, p.radians(55), p.radians(200));

    // 4. 귀
    p.fill(255, 228, 209);
    p.ellipse(90, 240, 30, 45); 
    p.ellipse(310, 240, 30, 45); 

    // 5. 눈 (마우스 클릭 인터랙션 구현)
    if (p.mouseIsPressed) {
      // 마우스 클릭 시 눈을 감음 (선으로 표현)
      p.stroke(30);
      p.strokeWeight(3);
      p.noFill();
      p.line(135, 220, 175, 220); // 왼쪽 감은 눈
      p.line(225, 220, 265, 220); // 오른쪽 감은 눈
    } else {
      // 평소에는 눈을 뜨고 있음
      p.fill(255);
      p.ellipse(155, 220, 50, 40); 
      p.ellipse(245, 220, 50, 40); 
      p.fill(30);
      p.ellipse(155, 220, 20, 20); // 눈동자
      p.ellipse(245, 220, 20, 20); 
    }
  };
};
new p5(sketch3);
