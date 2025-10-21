// 문제 1
// 문자열 배열에서 중복된 문자열을 제거한 새로운 배열을 반환하는 함수 uniqueStrings(arr) 작성하기.
// 예시: ["apple", "banana", "apple", "cherry"] → ["apple", "banana", "cherry"]
function uniqueStrings(arr) {
    return [...new Set(arr)];
}
console.log(uniqueStrings(["apple", "banana", "apple", "cherry"]));


// 문제 2
// 주어진 객체 배열에서 특정 key의 최대값을 가진 객체를 반환하는 함수 maxByKey(arr, key) 작성하기.
// 예시: [{name:"a", score:30}, {name:"b", score:50}, {name:"c", score:40}], key="score"
// → {name:"b", score:50}
function maxByKey(arr, key) {
    return arr.reduce((acc, cur) => cur[key] > acc[key] ? cur : acc);
}

const data = [{name:"a", score:30}, {name:"b", score:50}, {name:"c", score:40}];
console.log(maxByKey(data, "score")); 
// {name:"b", score:50}



// 문제 3
// 숫자 배열에서 연속된 숫자들의 합 중 최대값을 반환하는 함수 maxSubArraySum(arr) 작성하기.
// (힌트: Kadane’s Algorithm 활용 가능)
function maxSubArraySum(arr) {
    let maxSum = arr[0];
    let currentSum = arr[0];

    for (let i = 1; i < arr.length; i++) {
        // 현재 원소를 새로 시작할지, 누적할지 결정
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}

console.log(maxSubArraySum([-2,1,-3,4,-1,2,1,-5,4])); 
// 6 ([4, -1, 2, 1])


// 문제 4
// 문자열을 입력받아 각 문자의 등장 횟수를 객체로 반환하는 함수 charCount(str) 작성하기.
// 예시: "hello" → {h:1, e:1, l:2, o:1}
function charCount(str) {
    return str.split("").reduce((acc, cur) => {
        acc[cur] = (acc[cur] || 0) + 1;
        return acc;
    }, {});
}
console.log(charCount("hello")); 
// {h:1, e:1, l:2, o:1}


// 문제 5
// 숫자 배열을 받아 가장 가까운 두 수의 차이를 반환하는 함수 minDifference(arr) 작성하기.
// 예시: [10, 3, 20, 15] → 2 (15와 13의 차이)
function minDifference(arr) {
    arr.sort((a, b) => a - b); // 오름차순 정렬
    let minDiff = Infinity;

    for (let i = 0; i < arr.length - 1; i++) {
        let diff = arr[i + 1] - arr[i];
        minDiff = Math.min(minDiff, diff);
    }

    return minDiff;
}
console.log(minDifference([10, 3, 20, 15])); 
// 2
