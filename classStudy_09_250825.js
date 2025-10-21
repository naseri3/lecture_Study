// 문제 1
// 주어진 문자열에서 가장 많이 등장하는 문자를 반환하는 함수 mostFrequentChar(str) 작성하기.
// 예시: "banana" → "a"
function mostFrequentChar(str) {
    return str.split('').reduce((acc, cur) => acc.length < cur.length ? acc : cur);
}
console.log(mostFrequentChar("banana"));


// 문제 2
// 숫자 배열에서 중복된 값들을 제거한 새 배열을 반환하는 함수 uniqueArray(arr) 작성하기.
// 예시: [1,2,2,3,4,4,5] → [1,2,3,4,5]
function uniqueArray(arr) {
    return [...new Set(arr)];
}
console.log(uniqueArray([1,2,2,3,4,4,5]))


// 문제 3
// 주어진 배열에서 가장 많이 등장하는 숫자를 찾는 함수 mostFrequentNumber(arr) 작성하기.
// 예시: [1,2,2,3,3,3,4] → 3
function mostFrequentNumber(arr) {
    let countMap = new Map();
    // countMap → 숫자를 key로, 등장 횟수를 value로 저장하는 Map

    // 1) 숫자별 빈도수 세기
    for (let num of arr) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
        // (countMap.get(num) || 0) + 1
        // countMap.get(num) → num이 이미 Map에 있으면 현재 count 반환
        // 없으면 undefined → || 0로 0 처리
        // +1 → 현재 등장 횟수 증가
    }

    // 2) 가장 많이 나온 숫자 찾기
    let maxNum = arr[0];                // maxNum → 가장 많이 나온 숫자 저장
    let maxCount = 0;                   // maxCount → 등장 횟수 최대값 저장
    for (let [num, count] of countMap) {
        if (count > maxCount) {
            maxCount = count;
            maxNum = num;
            // for...of countMap → Map의 [key, value] 쌍 순회
            // if (count > maxCount) → 현재 숫자의 count가 최대보다 크면 갱신
            // 예시:
            // num=1, count=1 → maxCount=1, maxNum=1
            // num=2, count=2 → maxCount=2, maxNum=2
            // num=3, count=3 → maxCount=3, maxNum=3
            // num=4, count=1 → maxCount=3, maxNum=3 유지
        }
    }
    return maxNum;
}
console.log(mostFrequentNumber([1,2,2,3,3,3,4])); // 3


// 문제 4
// 문자열 배열에서 길이가 가장 짧은 문자열을 반환하는 함수 shortestString(arr) 작성하기.
// 예시: ["apple", "kiwi", "banana", "pear"] → "kiwi"
function shortestString(arr) {
    return arr.reduce((acc, cur) => acc.length <= cur.length ? acc : cur);
    // acc 길이가 cur보다 작거나 같으면 acc 유지
    // acc 길이가 cur보다 길면 cur 선택
}
console.log(shortestString(["apple", "kiwi", "banana", "pear"])); // "kiwi"




// 문제 5
// 객체 배열에서 특정 key의 합계를 구하는 함수 sumByKey(arr, key) 작성하기.
// 예시: [{a:1}, {a:2}, {a:3}] , key="a" → 6
function sumByKey(arr, key) {
    return arr.reduce((acc, cur) => acc + (cur[key] || 0), 0);
}

console.log(sumByKey([{a:1}, {a:2}, {a:3}], "a")); // 6
    // 1️⃣ reduce 사용
    // arr.reduce(callback, 초기값)
    // callback(acc, cur) → 배열 요소를 순회하며 누적(acc)
    // 초기값 = 0 → 합계를 처음에는 0으로 시작

    // 2️⃣ (cur[key] || 0)
    // 각 객체 cur에서 key 값 가져오기
    // 만약 해당 key가 없으면 undefined → || 0 로 0 처리
    // 예시: {a:1}[“a”] → 1
    // 예시: {b:5}[“a”] → undefined → 0

    // 3️⃣ acc + (cur[key] || 0)
    // 이전까지의 합계(acc)에 현재 객체의 key 값 더함