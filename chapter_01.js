// 문제 1. 특정 값 제거하기
// 함수 removeValue(arr, value)를 작성하세요.
// 주어진 배열 arr에서 value와 같은 모든 요소를 제거한 새 배열을 반환하세요.
// 예시:
// removeValue([1,2,3,2,4], 2) → [1,3,4]
function removeValue(arr, value) {
    return arr.filter(item => item !== value);
}
console.log(removeValue([1,2,3,2,4], 2)); // [1,3,4]
// filter() 메서드는 조건을 통과하는 요소만 모아 새 배열로 반환.
// item !== value → 배열의 각 요소가 value와 다를 때만 포함.
// 하드코딩 대신 value를 매개변수로 받아서 다른 값도 제거 가능하게 수정.


// 문제 2. 나이 평균 구하기
// people 배열에서 모든 사람의 평균 나이를 구하세요.
// 예시:
const people = [
    { name: "Kim", age: 25 },
    { name: "Lee", age: 30 },
    { name: "Park", age: 28 }
  ];
  // 결과: 27.666...
const avgAge = people.reduce((sum, p) => sum + p.age, 0) / people.length;
console.log(avgAge); // 27.666...
// reduce()는 배열을 하나의 값으로 축약.
// sum + p.age로 모든 나이의 합을 구함.
// 마지막에 people.length로 나눠서 평균 계산.


// 문제 3. this 고정하기
// 객체 obj 안의 greet 메서드를 setTimeout으로 1초 후 실행하면
// this가 undefined가 됩니다.
// bind를 사용해 this가 항상 obj를 가리키도록 수정하세요.
const obj = {
    name: "JavaScript",
    greet: function() {
      console.log(`Hello, ${this.name}`);
    }
  };
const boundGreet = obj.greet.bind(obj);
setTimeout(boundGreet, 1000);
// setTimeout(obj.greet, 1000)처럼 쓰면 this가 전역 객체로 변경됨.
// bind(obj) → obj를 this로 고정한 새 함수를 반환.
// setTimeout에 전달하면 1초 뒤에도 this.name이 "JavaScript"로 유지됨.


// 문제 4. 배열의 모든 값 곱하기
// multiplyAll(arr, num)를 작성하세요.
// arr의 모든 요소를 num과 곱한 새 배열을 반환하세요.
// 예시:
// multiplyAll([1,2,3], 3) → [3,6,9]
function multiplyAll(arr, num) {
    return arr.map(x => x * num);
}
console.log(multiplyAll([1,2,3], 3)); // [3,6,9]
// map()은 배열 각 요소를 변환해 새 배열 반환.
// x * num → 요소를 입력받은 숫자(num)로 곱함.
// 하드코딩(* 3) 대신 num을 매개변수로 받아 재사용 가능하게 수정.


// 문제 5. 가장 긴 문자열 찾기
// getLongestString(arr)를 작성하세요.
// 문자열 배열 arr에서 가장 긴 문자열을 찾아 반환하세요.
// 예시:
// getLongestString(["apple", "banana", "kiwi"]) → "banana"
function getLongestString(arr) {
    return arr.reduce((longest, current) =>
        current.length > longest.length ? current : longest
    , "");
}
console.log(getLongestString(["apple", "banana", "kiwi"])); // "banana"
// reduce()로 배열을 돌며 현재까지의 최장 문자열과 비교.
// current.length > longest.length → 현재 문자열이 더 길면 갱신.
// 초기값 ""(빈 문자열)로 시작.
