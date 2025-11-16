let names = [
    "Steven Paul Jobs",
    "Bill Gates",
    "Mark Elliot Zuckerberg",
    "Elon Musk",
    "jeff Bezos",
    "Warren Edward Buffett",
    "Larry Page",
    "Larry Ellison",
    "Tim Cook",
    "Lloyd Blankfein"
]

// for Each
names.forEach((item) => {console.log(item)});
names.forEach((item, idx) => {console.log(item, idx)});

// map : 배열로 다시 반환 (반드시 배욜로 리턴을 한다.)
// map은 꼭 return으로 반환해줘야한다.
// 
let data = names.map((item, idx) => {
    return item;
    // return item + "추가";          <= 내가 추가한 값까지 포함되서 다 리턴이 된다.
});
console.log(data);

let ceoList = [
    {name:"Larry Page", age:23, ceo:true},
    {name: "Tim Cook", age:40, ceo:true},
    {name:"Elon Musk", age:55, ceo:false}
]
// 특정값 만 불러서 사용하게 된다.
let ceoData = ceoList.map((item) => {
    return item.name;
});
console.log(ceoData);

// filter : 조건의 true인 값만 출력
let filterData = ceoList.filter((item) => {
    return item.age == 23;      // 조건을 넣을 수 있다
});
console.log(filterData);

let spellingL = names.filter((item) => {
    return item.startsWith("L");
});
console.log(spellingL);

// some : 하나라도 맞는 값이 있는 지 true, false로 반환 (있냐? 없냐?)
// `some` 함수는 배열을 순회하며 조건을 만족하는 요소를 찾으면 즉시 `true`를 반환하고 검색을 멈춥니다. 모든 요소가 조건을 만족하지 않으면 `false`를 반환하죠.
let spellingL1 = names.some((item) => {
    return item.startsWith("L");
});
console.log(spellingL1);

// every : 조건에 맞는 것이 시작되는가
let spellingL2 = names.every((item) => {
    return item.startsWith("L");        // 모든 이름이 A로 시작하는 가?
});
console.log(spellingL1);

// find : 찾아주는 가? (찾고 싶은 것이 있을 때 사용)
let spellingL3 = names.find((item) => {
    return item == "L";
});
console.log(spellingL1);

// findIndex : 인덱스로 반환
let spellingL4 = names.findIndex((item) => {
    return item == "Larry Page";
});
console.log(spellingL1);
