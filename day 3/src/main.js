const arr = [1, 2, 3];

console.log(arr);

// push -> adding element in the end of the array

arr.push(5);
arr.push(7);
arr.push(9);
arr.push(12);
console.log(arr);

// pop -> remove element from end of the array
const popped = arr.pop();

console.log("Popped ELement is: " + popped);

console.log("Before: ", arr);

// shift -> remove element from the front of the array
const shifhtedElement = arr.shift();
console.log(shifhtedElement);
console.log("After: ", arr);

// unshift -> add element in the front of the array
const unshiftElement = arr.unshift(5);
console.log(arr);

