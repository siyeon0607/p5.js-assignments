// 1. 맨 윗줄에 assignment3 전용 독립 울타리를 생성합니다.
const sketch3 = (p) => {

  // 2. 기존 function setup() 대신 p.setup = () => { 구조로 변경합니다.
  p.setup = () => {
    let myCanvas = p.createCanvas(600, 400);
    myCanvas.parent("canvas-assignment3"); 
    
    // 실행 후 7초 동안의 동작을 'myArtwork.gif'로 저장합니다.
    p.saveGif('myArtwork', 7);
  };

  // 3. 기존 function draw() 대신 p.draw = () => { 구조로 변경하고, 내부 내장 변수와 함수에 p.을 붙여줍니다.
  p.draw = () => {
    p.background(255);

    // 1. 뒷머리
    p.noStroke();
    p.fill(25, 25, 25);
    p.ellipse(200, 220, 260, 280); //뒷통수
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
    p.ellipse(90, 240, 30, 45); // 왼쪽 귀
    p.ellipse(310, 240, 30, 45); // 오른쪽 귀

    // 5. 눈 (인터랙션: 마우스 클릭 시 눈을 감음)
    // 상호작용 관련 마우스 변수 앞에도 p.을 반드시 붙여야 작동합니다.
    if (p.mouseIsPressed) {
      // 눈을 감은 모습 (선으로 표현)
      p.stroke(30);
      p.strokeWeight(3);
      p.noFill();
      // 아래에 눈 감았을 때의 드로잉 코드가 더 있다면 동일하게 p.을 붙여서 이어서 작성하시면 됩니다.
    }
  };

}; // 4. 울타리를 닫아줍니다.

// 5. 최종 독립 인스턴스를 실행합니다. (3번 방 지정)
new p5(sketch3);
