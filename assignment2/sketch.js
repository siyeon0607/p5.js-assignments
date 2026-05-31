// 1. 맨 윗줄에 assignment2 전용 독립 울타리를 생성합니다.
const sketch2 = (p) => {

  // 2. 기존 function setup() 대신 p.setup = () => { 구조로 변경합니다.
  p.setup = () => {
    let myCanvas = p.createCanvas(600, 400);
    myCanvas.parent("canvas-assignment2"); 
  };

  // 3. 기존 function draw() 대신 p.draw = () => { 구조로 변경하고, 내부 p5.js 명령어들에 p.을 붙여줍니다.
  p.draw = () => {
    p.background(255);
    
    // 1. 뒷머리
    p.noStroke();
    p.fill(25, 25, 25); 
    p.ellipse(200, 220, 260, 280); //뒷통수
    p.rect(70, 200, 260, 260, 80, 80, 0, 0); //

    // 2. 얼굴 윤곽 
    p.fill(255, 228, 209); 
    p.ellipse(200, 240, 210, 240); 

    // 3. 앞머리
    p.fill(25, 25, 25);
    // 가르마
    p.arc(200, 160, 220, 120, p.radians(165), p.radians(330)); 
    p.arc(280, 120, 220, 120, p.radians(55), p.radians(200)); 
    
    // 4. 귀
    p.fill(255, 228, 209);
    p.ellipse(90, 240, 30, 45); // 왼쪽 귀
    p.ellipse(310, 240, 30, 45); // 오른쪽 귀

    // 5. 눈 
    p.fill(255); // 눈 흰자
    p.ellipse(155, 220, 50, 40); // 왼쪽 눈 흰자
    p.ellipse(245, 220, 50, 40); // 오른쪽 눈 흰자
    p.stroke(150, 100, 100); // 눈썹
    p.strokeWeight(3);      
  };

}; // 4. 울타리를 닫아줍니다.

// 5. 최종 독립 인스턴스를 실행합니다. (2번 방 지정)
new p5(sketch2);
