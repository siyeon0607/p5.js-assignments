// 1. 4번 과제 전용 독립 울타리 이름을 sketch4로 정확히 지정합니다.
const sketch4 = (p) => {

  p.setup = () => {
    let myCanvas = p.createCanvas(600, 400);
    // 2. 타겟 방 이름을 4번(canvas-assignment4)으로 정확하게 매칭합니다.
    myCanvas.parent("canvas-assignment4"); 
  };

  p.draw = () => {
    // 3. 원래 본인의 4번 과제 드로잉 코드가 들어가는 곳입니다.
    // (예시로 기본 배경과 원을 배치해 두었습니다. 본인 코드로 자유롭게 변경하세요!)
    p.background(50); 
    p.fill(255, 200, 100);
    p.noStroke();
    p.ellipse(300, 200, 150, 150); 
    
  };

}; // 4. 울타리를 닫아줍니다.

// 5. 4번 전용 독립 인스턴스를 실행합니다.
new p5(sketch4);
