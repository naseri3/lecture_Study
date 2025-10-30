// 1. 랜덤번호 지정
// 2. 유저가 번호를 입력한다. 그리고 go라는 버튼을 누름
// 3. 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다.
// 4. 랜덤번호가 < 유저번호 Down
// 5. 랜덤번호가 > 유저번호 Up
// 6. reset 버튼을 누르면 게임이 리셋된다.
// 7. 5번의 기회를 다 쓰면 게임이 끝난다 (더이상 추측 불가, 버튼이 disable)
// 8. 유저가 1 ~ 100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깍지 않는다.
// 9. 유저가 이미 입력한 숫자를 또 입력하면, 알려준다. 기회를 깍지 않는다.


let computerNum = 0;
// 랜덤으로 변화하는 숫자는 상수를 사용하지 않는다.
// 램덤으로 가지고 올 숫자 초기화 변수

// html에 있는 버튼 값 가져오기
let playBut = document.getElementById("playBtn");

// user 입력한 값 가져오기
let userInput = document.getElementById("userInput");

// 결과 출력 변수
let resultArea = document.getElementById("result-area");

// 리셋 버튼
let resetBtn = document.getElementById("resetBtn");

// 남은 기회 변수
let chances =  5;

// 게임 오버 변수
let gameOver = false;

// 찬스값 출력 
let chanceArea = document.getElementById("chance-area");

// playBtn에 이벤트 추가
// addEventListener("불러올 이벤트", 실행할 함수)
// play를 변수로써 활용 => 함수도 매개변수로 넘길 수 있다.
playBut.addEventListener("click", play);
// reset 클릭 이벤트
resetBtn.addEventListener("click", reset);

// 번호 생성 함수
function pickRandomNum() {
    computerNum = Math.floor(Math.random() * 100)+1;
    // Math.floor() : 소수점 버림 함수
    // Math.random() : 숫자 랜덤 함수
    console.log("정답 : ", computerNum);
}

function play() {
    let userValue = userInput.value;
    // 찬스 값 출력
    chances -- ;
    chanceArea.textContent = `남은 기회 : ${chances}번`; 
    console.log("chances : ", chances)
    if(userValue < computerNum) {
        resultArea.textContent = "UP!!!"
    } else if(userValue > computerNum) {
        resultArea.textContent = "DOWN!!!"
    } else {
        resultArea.textContent = "맞췄습니다!!"
    }

    if(chances < 1) {
        gameOver = true;
    }
    if(gameOver == true) {
        playBut.disabled = true;
    }
}

// 리셋 함수
function reset() {
    // user input창에 깨끗하게 정리되고
    userInput.value = "";
    // 새로운 번호가 생성되고
    pickRandomNum();
    resultArea.textContent = "결과값이 여기 나옵니다!";
}
pickRandomNum();

