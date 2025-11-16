let name1 = "na seul";
let age = 20;

let person = {name1, age};
// 이 변수의 이름을 가지고 키값을 자동으로 만들어서 값을 넣어준다.
console.log(person);            // 변수가 키값일 경우에만 사용
// { name: 'na seul', age: 20 }

// 키값이랑 변수 이름이 같지 않을 경우
let person1 = {nameValue:name1, ageValue:age};



// 객체를 분해하는 과정
let seventeen = {
    name : "세븐틴",
    memberNum : 13,
}

let groupName = seventeen.name;
let num = seventeen.memberNum;
console.log(groupName, num);            // 세븐틴 13

let {name, memberNum} = seventeen;
console.log(seventeen);
// { name: '세븐틴', memberNum: 13 }



console.log(`이름은 ${name1}이고 나이는 ${age}`);



// 배열에 적용되는 문법
let array = [1, 2, 3];

// 옛날방식
// let a = array[0];
// let b = array[1];
// let c = array[2];
// console.log(a,b,c);

// let [a,b,c] = array;
// console.log(a,b,c);             // 1 2 3

// ... 연산자
// rest 내가 뽑고 싶은거 딱 하나만 빼고 출력
let [a, ...rest] = array;           //  변수 그대로 사용 가능
console.log(rest);                  // [ 2, 3 ]



let people = {
    name2 : "naseuri",
    age : 21,
    cute : true
}

let {name2, ...restInfo} = people;
console.log(name2, restInfo);           // naseuri { age: 21, cute: true }

let a1 = [1, 2];
let b1 = [3, 4];
let c1 = [5, 6];

let result = a1.concat(b1,c1);
console.log(result);
// [ 1, 2, 3, 4, 5, 6 ]
let result1 = [...a1, ...b1, ...c1];
console.log(result1);
// [ 1, 2, 3, 4, 5, 6 ]


// 함수 선언 방식
// 화살표 함수 : this 사용할 수 없다
let foo = () => {
    // 문장이 여러개이면 {} 사용
    console.log("hello");
}
// return 생략가능
let full = () => "hello word";
console.log(foo());
console.log(full());

// this : 지역변수 불러오는 값 (나 자신 값을 가져오는 것)
// 지역변수와 전역변수를 구별하기 위해 사용
let age1 = 17;
let person2 = {
    name:"hana",
    age:20,
    getInfo: function() {
        console.log(this.age);
        // this는 객체를 불러온다.
        // person2에 속해 있는 this를 불러온다
    }
}

person2.getInfo();          // 20
// 화살표함수의 치명적인 단점 : 화살표 함수는 this를 불러올 수 없다
// this를 써야하는 순간은 일반 function(){}을 사용한다.


// 화살표 함수는 자신만의 `this` 바인딩을 만들지 않습니다. 
// 대신 함수가 '어디에' 정의되었는지에 따라 그 주변 스코프의 `this` 값을 가져와 사용하죠.