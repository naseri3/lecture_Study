// 예제 1. setTimeout vs setInterval
// "한 번만 실행" vs "주기적으로 반복 실행"의 차이를 익히는 기본 예제

// 1. setTimeout : 일정 시간 후 1회  실행
setTimeout(() => {
    console.log("2초 후 실행됩니다.");
}, 2000);

// 2. setInterval : 일정 간격으로 반복 실행
let count = 0;
const timer = setInterval(() => {
    count++;
    console.log(`${count}초마다 반복 중....`);
    if(count === 3) {
        clearInterval(timer);           // 3회 반복 후 종료
        console.log("반복 종료!");
    }
}, 1000);

/*
포인트
- setTimeout(fn, ms) : 일정 시간(ms) 후 1회 실행
- setIntervak(fn, ms) : 일정 시간마다 반복
- clearInterval() : 반복 종료
*/

// 예제 2. Promise의 기본 구조
// 비동기 작업을 순서대로 제어하는 기초 - "약속"이 이행될 때 실행됨
function orderCoffee() {
    return new Promise((resolve, reject) => {
        console.log("커피 주문 중 ....");
        setTimeout(() => {
            const success = true;           // false로 바꾸면 실패 시뮬레이션 가능
            if(success) resolve("커피 준비 완료!");
            else reject("커피 머신 고장!");
        }, 1500);
    });
}

// Promise 실행
orderCoffee()
    .then(msg => console.log("성공 : ", msg))
    .catch(err => console.error("실패 : ", err))
    .finally(() => console.log("주문 종료!"));

/*
포인트
- resolve() : 성공 시 호출
- reject() : 실패 시 호출
- .then() : 성공 후 동작
- .catch() : 실패 처리
- .finally() : 성공/실패 상관없이 항상 실행
*/

async function getUser() {
    console.log("사용자 데이터 요청 중...");

    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data = await res.json();
        console.log("사용자 이름 : ", data.name);
        console.log("주소 : ", data.address.city);
    } catch (error) {
        console.error("데이터 요청  실패 : ", error);
    } finally {
        console.log("요청 종료");
    }
}
getUser();
/*
포인트
- await은 비동기 결과가 올 때까지 기다림
- try...catch로 네트워크 에러도 안전하게 처리
- 실제 API 테스트용으로 jsonplaceholder 을 자주 사용
*/

// 문제 1. setTimeout 실행 순서
console.log("A");
setTimeout(() => {
    console.log("B");
}, 0);
setTimeout(() => {
    console.log("c");
}, 500);
setTimeout(() => {
    console.log("D");
}, 1000);
setTimeout(() => {
    console.log("E");
}, 1500);

// 문제 2. Promise의 순서
console.log("1");
Promise.resolve().then(() => console.log("2"));
console.log("3");
setTimeout(() => console.log("4"), 0);
console.log("5");
// 1
// 2
// 3
// 4
// 5

// 문제 3. async/await 흐름
async function run() {
    console.log("🍀 start");
    const step1 = await Promise.resolve("✅ step1 완료");
    console.log(step1);
    const step2 = await new Promise(resolve =>
      setTimeout(() => resolve("✅ step2 완료"), 1000)
    );
    console.log(step2);
    console.log("🌙 end");
  }
  run();
  console.log("🚀 실행 중...");
//   🍀 start
// 🚀 실행 중...
// ✅ step1 완료
// ✅ step2 완료
// 🌙 end


// 보너스 문제 (심화 느낌)
// “에러 처리”를 넣어서 try-catch가 작동하는 흐름을 파악하는 문제
async function fetchData() {
    try {
      const res = await fetch("https://wrong-url-test.com/data");
      const data = await res.json();
      console.log("데이터:", data);
    } catch (error) {
      console.error("🚨 에러 발생!");
    } finally {
      console.log("작업 종료!");
    }
  }
  fetchData();
  console.log("요청 보냄!");
//   요청 보냄!
// 🚨 에러 발생!
// 작업 종료!
