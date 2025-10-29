try {
    // 오류가 발생할 가능성이 있는 코드
    const result = JSON.parse('{"name":"나슬"');
    console.log(result.name);
} catch(error) {
    // 오류가 발생했을 때 실행될 코드
    console.error("JSON 파싱 실패 : ", error.message);
} finally {
    // 오류 발생 여부와 관계없이 항상 실행되는 코드
    console.log("실행 완료");
}

// 포인트
// 1. try 블록 안에서 오류가 발생하면 즉시 catch로 이동
// 2. finally는 성공, 실패 관계없이 반드시 실행됨.
// 3. 네트워크 요청이나 JSON 파싱, 형변환 등에서 자주 사용됨

function squareInput(value) {
    try {
        const num = Number(value);
        if(isNaN(num)) throw new Error("숫자를 입력하세요!");
        return num ** 2;
    } catch (err) {
        console.log(err.message);
    }
}

console.log(squareInput("3"));
console.log(squareInput("abc"));


/* 
문제1. 안전한 데이터 가져오기
: 비동기 함수 안에서 네트워크 요청(fetch)을 수행하고, 오류를 안정하게 처리하시오.

요구사항
1. 아래 URL에서 데이터를 가져오되, 일부러 잘못된 주소를 넣어 에러가 발생하도록 설정한다.
https://jsonplaceholder.typicode.come/users ← (오타 intentionally)
2. 오류 발생 시 catch 블록에서
"서버 연결 실패: 다시 시도해주세요." 메시지를 alert()으로 띄운다.
3. 요청 성공 시 콘솔에 첫 번째 사용자의 이름을 출력한다.
*/
async function loadUsers() {
    try {
        const res = await fetch("URL");
        if(!res.ok) throw new Error("HTTP 오류 발생");
        const data = await res.json();
        console.log(date[0].name);
    } catch (error) {
        alert("서버 연결 실패 : 다시 시도해주세요.");
    }
}

/*
문제2. 사용자 입력 검중 + 예외 발생
: 사용자가 입력한 나이를 기반으로 메시지를 출력하는 프로그램을 작성하시오.
  숫자가 아닌 값이 들어오면 throw를 사용하여 예외를 직접 발생시키세요.

요구사항
1. 사용자 입력을 prompt()로 받는다.
2. 입력값이 숫자가 아니면 throw new Error("숫자를 입력하세요.") 발생.
3. 입력값이 0보다 작으면 throw new Error("음수는 입력할 수 없습니다.") 발생.
4. 정상적인 경우 "당신의 나이는 XX살입니다." 출력.
*/
try {
    const input = prompt("나이를 입력하세요 : ");
    const age = Number(input);
    if(isNaN(age)) throw new Error("숫자를 입력하세요.");
    if(age < 0) throw new Error("음수는 입력할 수 없습니다.");
    console.log(`당신의 나이는 ${age}살입니다.`)
} catch (error) {
    // alert(err.message);
}

// 1단계 — 비동기의 기본 개념
// 비동기 함수 async 안에서는 "기다리는 동안 다른 일"을 할 수 있다.
console.log("1. 시장");
setTimeout(() => {
    console.log("2. 2초 후 실행");
}, 2000);

console.log("3. 종료");
// setTimeout은 기다리는 동안 다른 코드가 먼저 실행됨 = "비동기"

// 2단계 — Promise 기본형
// 나중에 완료될 일을 약속(Promise)하는 객체
const promise = new Promise((resolve, reject) => {
    const success = true;
    if(success) resolve("성공");
    else reject("실패");
});

promise
    .then(result => console.log(result))
    .catch(error => console.error(error));
// 성공


// 3단계 — async / await 문법
// Promise를 좀 더 "동기처럼" 보이게 만들어주는 문법
async function getData() {
    console.log("데이터 요청 중 ....");
    const data = await new Promise(resolve =>
        setTimeout(() => resolve("서버에서 데이터 도착"), 2000)
    );
    console.log(data);
}
getData();
console.log("다른 코드 실행 중....")
// await 은 기다리지만, 함수 밖의 코드는 계속 진행된다


// 4단계 — fetch 예제 (가짜 API 불러오기)
// 진짜 서버 요청처럼 연습하기
async function loadUser() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await response.json();
    console.log("이름 : ", user.name);
}
loadUser();
// 이름 :  Leanne Graham


// 5단계 — 예외 처리와 함께 쓰기
try {
    const res = await fetch("https://wrong.url/posts");
    if(!res.ok) throw new Error("HTTP 오류 발생");
    const data = await res.json();
    console.log(data);
} catch (err) {
    console.error("에러 : ", err.message);
} finally {
    console.log("요청완료");
}

getPost();
// 에러: Failed to fetch
// 요청 완료 ✅