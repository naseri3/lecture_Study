// 예외(Exception)란?
// - 프로그램 실행 중 발생하는 에러 상황을 말함
// - 예를 들어, 존재하지 않는 변수 호출, 네트워크 실패, JSON 파싱 오류 등이 예외다
// console.log(user.name)
// ReferenceError : user is not defined


// try... catch 기본 구조
try {
    // 에러가 발생할 수 있는 코드
    const result = JSON.parse('{"name" : "나슬"}');
    console.log(result.name);
} catch (error) {
    // 에러 발생 시 실행되는 코드
    console.log("JSON 파싱 중 오류 발생 : ", error.message);
}
/*
- try 블록 : 정상적으로 실행될 코드를 작성
- catch 블록 : 오류가 발생했을 때 처리할 로직 작성
- error.message : 에러의 간단한 설명을 확인 가능
*/


// finally 블록(선택)
try {
    console.log("파일 읽기 시작");
    throw new Error("파일을 찾을 수 없습니다!");
} catch (error) {
    console.error("에러 발생:", err.message);
} finally {
    console.log("파일 닫기");
}


// 예외를 발생시키기(throw)
// : 상황에 따라 개발자가 직접 에러를 던질 수도 있음
function divide(a, b) {
    if(b === 0) throw new Error("0으로 나눌 수 없습니다!");
    return a / b;
}

try {
    console.log(divide(10, 0));
} catch (error) {
    console.error("에러 : " , err.message);
}

// 비동기 함수 안에서의 예외 처리
// async / await에서 발생하는 예외는 try-catch로 감싸야 안전하게 처리됨
async function fetchDate() {
    try {
        const res = await fetch("https://api.example.com/data");
        const data = await res.json();
        console.log("데이터 : ", data);
    } catch (error) {
        console.error("데이터 요청 중 오류 발생 : ", error);
    }
}


/*
    예외 처리의 핵심 요약  
    - 에러가 발생할 수 있는 코드 : try 블록
    - 에러 발생 시 대체 처리 : catch 블록
    - 무조건 실행해야 하는 마무리 작업 : finally
    - 개발자가 직접 에러 발생 : throw new Error()
    - async/await 내부 예외 처리 : try...catch로 감싸기
*/


// 문제 1. try...catch 기본 동작 익히기
// 아래 코드에서 catch 블록이 실행되도록 수정해보세요.
try {
    // 여기에 오류가 나게끔 코드를 작성
    console.log("시작!");
    // 예 : 존재하지 않는 변수 사용
    throw new Error("오류가 발생했습니다.");
    console.log("끝!!");
} catch (error) {
    console.log("에러 발생 : ", error.message);
}
/*
해설
- throw new Error() 구문을 만나면, 그 즉시 catch블록으로 제어가 이동
- throw 아래의 코드는 실행되지 않아 (console.log("끝!!")문 무시됨)
- error.message로 에러 내용만 출력 가능

*/

// TIP : throw는 단순한 문법 오류가 아니라, 의도적으로 예외 상황을 발생시킬 때 사용 함
if(!userName) throw new Error("이름을 입력해야 합니다.");



// 문제 2. async/await와 예외 처리
// 아래 코드는 의도적으로 잘못된 주소를 fetch하려고 합니다.
// try...catch를 이용해 **"데이터 요청 실패"**라는 문구를 출력하도록 수정하세요.
async function getData() {
    // 여기에 try-catch로 감싸서 예외를 처리
    try {
        const res = await fetch("https://wrong-url-for-test.com/data");
        const data = await res.json();
        console.log("데이터 : ", data);
    } catch (error) {
        console.error("데이터 요청 실패");
    }
}
getData();
/*
해설 
- fetch()가 잘못된 주소로 요청되어 네트워크 오류 발생
- await에서 오류가 던져지면 자동으로 catch로 넘어감
- catch 블록에서 사용자 친화적인 문구로 처리함
*/
// TIP : 실제 개발에서는 아래처럼 res.ok를 확인해서 API상태를 점검하기도 함
const res = await fetch(url);
if(!res.ok) throw new Error("서버 응답 오류");