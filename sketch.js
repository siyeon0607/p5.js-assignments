// 녹화 상태를 화면에 표시하기 위한 변수
let isRecording = false;
let recordStartTime = 0;
let durationSeconds = 3; // 녹화할 시간 (3초)

function setup() {
  createCanvas(600, 400);
  colorMode(RGB, 255); 
}

function draw() {
  background(40, 40, 50);
  
  // 1. 시간에 따른 변수 계산 (frameCount, millis, sin, cos 활용)
  let time = millis() * 0.002;
  let wave = sin(time);
  let cosWave = cos(time);
  let pulse = 1 + sin(frameCount * 0.05) * 0.1; 

  // 2. 하얀 직선 애니메이션
  push();
  colorMode(HSB, 360, 100, 100);
  let lineColor = color((frameCount * 0.5) % 360, 60, 80); 
  stroke(lineColor);
  strokeWeight(1.5);
  
  let lineOffset = wave * 5; 
  let lines = [50, 60, 70, 85, 90, 95, 100, 110, 120, 550, 540, 535, 530, 520, 510, 505, 490, 495];
  for (let l of lines) {
    line(l + lineOffset, 0, l + lineOffset, 400);
  }
  pop();
  
  // 3. 상단 원형 시스템 애니메이션
  push();
  let centerX = 300 + cosWave * 15;
  let centerY = 130 + wave * 10;
  
  strokeWeight(15);
  let strokeColor = lerpColor(color('#ffccff'), color('#ccffff'), (wave + 1) / 2);
  stroke(strokeColor);
  fill('#e0ffe0');
  ellipse(centerX, centerY, 200 * pulse, 200 * pulse); 

  let goldColorA = color(230, 200, 100);
  let goldColorB = color(255, 140, 0);
  let dynamicGold = lerpColor(goldColorA, goldColorB, (cosWave + 1) / 2); 
  noStroke();
  fill(dynamicGold);
  ellipse(centerX, centerY, 150 * pulse, 150 * pulse);

  stroke(230, 200, 100);
  strokeWeight(2);
  translate(centerX, centerY);
  rotate(frameCount * 0.01); 
  
  line(0, -90, 0, 90);
  line(-90, 0, 90, 0);
  line(-65, -65, 65, 65);
  line(-65, 65, 65, -65);
  pop();

  // 4. 하단 피라미드 애니메이션
  let pyramidLayers = [
    { h1: 390, h2: 360, wStart: 150, wEnd: 450, offset: 15 },
    { h1: 360, h2: 330, wStart: 165, wEnd: 435, offset: 15 },
    { h1: 330, h2: 300, wStart: 180, wEnd: 420, offset: 15 },
    { h1: 300, h2: 275, wStart: 195, wEnd: 405, offset: 15 },
    { h1: 275, h2: 250, wStart: 210, wEnd: 390, offset: 15 },
    { h1: 250, h2: 225, wStart: 225, wEnd: 375, offset: 15 },
    { h1: 225, h2: 200, wStart: 240, wEnd: 360, offset: 15 },
    { h1: 200, h2: 180, wStart: 255, wEnd: 345, offset: 15 },
    { h1: 180, h2: 160, wStart: 270, wEnd: 330, offset: 15 }
  ];

  let leftColors = [
    color(160, 30, 30), color(180, 60, 40), color(200, 90, 50),
    color(220, 120, 60), color(235, 150, 70), color(245, 180, 85),
    color(255, 210, 110), color(255, 230, 140), color(255, 245, 180)
  ];
  let rightColors = [
    color(20, 30, 110), color(35, 55, 135), color(50, 85, 160),
    color(70, 110, 185), color(90, 140, 210), color(110, 170, 230),
    color(135, 195, 245), color(160, 215, 255), color(190, 235, 255)
  ];

  noStroke();
  for (let i = 0; i < pyramidLayers.length; i++) {
    let layer = pyramidLayers[i];
    let swing = sin(time + i * 0.3) * 20; 

    let currentLeft = lerpColor(leftColors[i], rightColors[i], (wave + 1) / 4);
    fill(currentLeft);
    quad(layer.wStart + swing, layer.h1, 300 + swing, layer.h1, 300 + swing, layer.h2, (layer.wStart + layer.offset) + swing, layer.h2);
    
    let currentRight = lerpColor(rightColors[i], leftColors[i], (wave + 1) / 4);
    fill(currentRight);
    quad(300 + swing, layer.h1, layer.wEnd + swing, layer.h1, (layer.wEnd - layer.offset) + swing, layer.h2, 300 + swing, layer.h2);
  }

  let topSwing = sin(time + 9 * 0.3) * 20;
  fill('#e0ffe0');
  push();
  translate(300 + topSwing, 160);
  scale(pulse); 
  triangle(-15, 0, 15, 0, 0, -25);
  pop();

  // 5. 녹화 중임을 알리는 화면 UI 안내 (선택 사항)
  if (isRecording) {
    if (millis() - recordStartTime < durationSeconds * 1000) {
      push();
      fill(255, 0, 0);
      ellipse(25, 25, 15, 15); // 좌측 상단 빨간색 녹화 불빛
      fill(255);
      textSize(12);
      text("REC...", 40, 29);
      pop();
    } else {
      isRecording = false; // 녹화 시간 종료 시 상태 해제
    }
  }
}

// 키보드 입력을 감지하는 p5.js 내장 함수
function keyPressed() {
  // 's' 또는 'S' 키를 누르면 녹화 시작
  if (key === 's' || key === 'S') {
    if (!isRecording) {
      isRecording = true;
      recordStartTime = millis();
      
      // saveGif('파일명', 지속시간_초, {옵션})
      // 600x400 크기의 캔버스 영역 전체를 지정된 초 동안 녹화하여 'my_animation.gif'로 저장합니다.
      saveGif('my_animation', durationSeconds, { delay: 0, units: 'seconds' });
    }
  }
}