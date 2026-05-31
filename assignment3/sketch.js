function setup() {
  createCanvas(600, 400);
  // 실행 후 7초 동안의 동작을 'myArtwork.gif'로 저장합니다.
  saveGif('myArtwork', 7);
}

function draw() {
  background(255);

  // 1. 뒷머리
  noStroke();
  fill(25, 25, 25);
  ellipse(200, 220, 260, 280); //뒷통수
  rect(70, 200, 260, 260, 80, 80, 0, 0);

  // 2. 얼굴 윤곽 
  fill(255, 228, 209);
  ellipse(200, 240, 210, 240);

  // 3. 앞머리
  fill(25, 25, 25);
  arc(200, 160, 220, 120, radians(165), radians(330));
  arc(280, 120, 220, 120, radians(55), radians(200));

  // 4. 귀
  fill(255, 228, 209);
  ellipse(90, 240, 30, 45); // 왼쪽 귀
  ellipse(310, 240, 30, 45); // 오른쪽 귀

  // 5. 눈 (인터랙션: 마우스 클릭 시 눈을 감음)
  if (mouseIsPressed) {
    // 눈을 감은 모습 (선으로 표현)
    stroke(30);
    strokeWeight(3);
    noFill();
    arc(155, 225, 50, 20, radians(10), radians(170));
    arc(245, 225, 50, 20, radians(10), radians(170));
  } else {
    // 기본 눈 상태
    noStroke();
    fill(255); // 눈 흰자
    ellipse(155, 220, 50, 40);
    ellipse(245, 220, 50, 40);

    fill(30); // 눈동자
    ellipse(155, 220, 32, 32);
    ellipse(245, 220, 32, 32);

    fill(255); // 눈 하이라이트
    ellipse(163, 212, 10, 10);
    ellipse(150, 228, 5, 5);
    ellipse(253, 212, 10, 10);
    ellipse(240, 228, 5, 5);
  }

  // 눈썹
  stroke(150, 100, 100);
  strokeWeight(3);
  noFill();
  arc(155, 195, 55, 15, radians(190), radians(350));
  arc(245, 195, 55, 15, radians(190), radians(350));

  // 8. 코 
  noStroke();
  fill(200, 160, 140);
  ellipse(200, 275, 7, 10);

  // 9. 입 (인터랙션: 스페이스바 누르면 입이 벌어짐)
  fill(230, 110, 110);
  if (keyIsPressed && key === ' ') {
    // 스페이스바를 누를 때: 입을 동그랗게 벌림
    ellipse(200, 315, 20, 30);
  } else {
    // 평소 상태: 미소 짓는 입
    arc(200, 310, 30, 15, radians(-20), radians(200));
  }

  // 10. 볼터치 
  noStroke();
  fill(255, 180, 180, 150);
  ellipse(140, 270, 35, 20);
  ellipse(260, 270, 35, 20);

  // 11. 목
  fill(255, 228, 209);
  rect(180, 340, 40, 40);

  // 12. 옷 
  fill(170, 170, 185);
  rect(80, 380, 240, 120, 60, 60, 0, 0);
  stroke(140);
  strokeWeight(5);
  line(140, 381.5, 200, 400);
  line(260, 381.5, 200, 400);

  // 13. 머리띠
  stroke(255, 200, 200);
  strokeWeight(12);
  noFill();
  arc(200, 230, 230, 230, radians(215), radians(325));
}