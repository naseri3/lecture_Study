// 문제1. setTimeout을 이용해서
// “3초 뒤에 ‘공부 시작!’” 이라는 문구 출력
setTimeout(() => {
    console.log("공부 시작!");
}, 3000);

// 문제2. Promise로
// “1초 뒤 성공, 2초 뒤 실패” 두 가지 버전 만들어보기
// 1초 뒤 성공
const successPromise = new Promise((resolve) => {
    setTimeout(() => resolve("✅ 1초 뒤 성공!"), 1000);
  });
  successPromise.then(msg => console.log(msg));
  
  // 2초 뒤 실패
  const failPromise = new Promise((_, reject) => {
    setTimeout(() => reject("❌ 2초 뒤 실패!"), 2000);
  });
  failPromise.catch(err => console.error(err));
  /*
🧠 포인트
    resolve → 성공 시 실행
    reject → 실패 시 실행
    setTimeout을 넣어서 “나중에 일어날 일”을 흉내냄
  */
  

// 문제3. fetch()로
// https://jsonplaceholder.typicode.com/todos/3 데이터를 가져와
// console.log("제목:", title) 출력하기
async function getTodo() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/todos/3");
      if (!response.ok) throw new Error("HTTP 오류 발생");
  
      const data = await response.json();
      console.log("제목:", data.title);
    } catch (error) {
      console.error("에러:", error.message);
    }
  }
  
  getTodo();
/*
    수정 포인트
    URL 마지막에 공백 " "이 들어가 있어서 제거해야 해 → .../todos/3
    title 변수명은 실제 데이터가 아니라 response.json()의 결과(data)에 있음
    try/catch 추가로 에러 처리 시 안전

    참고
    fetch()는 기본적으로 비동기 함수이기 때문에 await을 반드시 써야 결과를 받을 수 있어.
    그렇지 않으면 Promise 자체가 반환됨.
*/
  