// 문제 1
// 정수 배열에서 음수만 절댓값으로 바꾼 새로운 배열을 반환하는 함수 convertNegativesToPositive(arr) 작성하기.
// 예시 : convertNegativesToPositive([1, -3, 5, -7, -9]) 
// → [1, 3, 5, 7, 9]
function convertNegativesToPositive(arr) {
    return arr.map(num => Math.abs(num));
}
console.log(convertNegativesToPositive([1, -3, 5, -7, -9]));


// 문제 2
// 문자열 배열에서 첫 글자가 대문자인 문자열만 뽑아내는 함수 filterCapitalized(arr) 작성하기.
// 예시 : filterCapitalized(["Apple","banana","Kiwi","cherry"]) 
// → ["Apple", "Kiwi"]
function filterCapitalized(arr) {
    return arr.filter(str => /^[A-Z]/.test(str));
    // 정규식 /^[A-Z]/ → 문자열의 첫 글자가 대문자인지 검사
}
console.log(filterCapitalized(["Apple","banana","Kiwi","cherry"]));



// 문제 3
// 배열의 모든 숫자 합을 구해서 짝수면 true, 홀수면 false를 반환하는 함수 isSumEven(arr) 작성하기.
// 예시 : isSumEven([1,2,3,4]) // → true (합계 10)
// isSumEven([1,2,5])   // → false (합계 8)
function isSumEven(arr) {
    let sum = arr.reduce((acc, cur) => acc + cur, 0);
    return sum % 2 === 0;
}
console.log(isSumEven([1,2,4]));



// 문제 4
// 문자열을 입력받아, 모든 모음을 제거한 문자열을 반환하는 함수 removeVowels(str) 작성하기.
// (모음: a, e, i, o, u 대소문자 모두)
// 예시 : removeVowels("JavaScript") 
// → "JvScrpt"
function removeVowels(str) {
    return str.replace(/[aeiouAEIOU]/g, "");
}
console.log(removeVowels("JavaScript"));
// 정규식 [aeiouAEIOU] → 모음 문자들을 지정
// g 플래그 → 문자열 전체에서 일치하는 모든 모음을 찾음



// 문제 5
// 정수 배열에서 최댓값과 최솟값 차이를 반환하는 함수 maxMinDifference(arr) 작성하기
// 예시 : maxMinDifference([3,10,6,1,8]) 
// → 9  (최댓값 10 - 최솟값 1)
function maxMinDifference(arr) {
    return Math.max(...arr) - Math.min(...arr);
}
console.log(maxMinDifference([3,10,6,1,8]));
