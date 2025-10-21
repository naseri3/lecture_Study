let arr = [1, 2, 3, 4, 5];

// push, pop
arr.push(6);
console.log(arr);
arr.pop();
console.log(arr);

// unshift, shift
arr.unshift(0);
console.log(arr);
arr.shift();
console.log(arr);

// map
let doubled = arr.map(num => num * 2);
console.log(doubled);

// filter
let even = arr.filter(num => num % 2 === 0);
console.log(even);

// reduce
let sum = arr.reduce((acc, cur) => acc + cur, 0);
console.log(sum);

// includes
console.log(arr.includes(3));