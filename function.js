// High order fucntion -> A function which takes a function as an argument and can return a fucntion
function fun() {
  console.log("Hello World");
}

function calling(fun) {
  fun();
  fun();
}

calling(fun);

// map -> to apply some operation for all the element in an collection

const arr = [5, 6, 7, 8, 9, 10];

const sq = arr.map((n) => n * n);

console.log(sq);

// fillter -> to fillter out data from a collection

const even = arr.filter((n) => n % 2 === 0);

console.log(even);

// reduce -> reduce function accumulates array element in a single value

const add = arr.reduce((acc, curr) => acc + curr, 0);
const mul = arr.reduce((acc, curr) => acc * curr, 1);

console.log(add);
console.log(mul);

// forEach -> worls like map but does not return any array like map()

arr.forEach((n) => console.log(`Cube of ${n} is ${n * n * n}`));

// find -> it find the first element that satisfy the condition

const nums = [-1, -2, -9, 0, 5, 6, 8, 10];
const firstNegNo = nums.find((n) => n < 0);
console.log(firstNegNo);

// some -> return boolean value if for atleast one element the condition is satisfied

const atleastOneNegNo = nums.some((n) => n < 0);
console.log(atleastOneNegNo);

// every -> return boolean value if for elements the condition is satisfied

const posNo = [1, 2, 3, 4, 5];
const allPos = posNo.every((n) => n > 0);
console.log(allPos);

// returning function from a function

function multi(factor) {
  return function (num) {
    return num * factor;
  };
}

const mul2 = multi(5);
console.log(mul2(5));

// returning a formatted number
const padZeros = (num, totalLens) => {
  let numStr = num.toString();
  const numZeros = totalLens - numStr.length;

  for (let i = 0; i < numZeros; i++) numStr = `0${numStr}`;

  return numStr;
};

let result1 = padZeros(42, 4);
console.log(result1);
let result2 = padZeros(42, 5);
console.log(result2);
let result3 = padZeros(42, 2);
console.log(result3);
