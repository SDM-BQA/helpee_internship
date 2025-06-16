// JavaScript Promises
// handle asynchronous operation
// provide a structured way to handle asynchronous code

// States
// -> Pending
// -> Fulfilled
// -> Rejected

// eg - 1

function display() {
  console.log("display Something");
}

let myPromise = new Promise((myResolve, myReject) => {
  let x = 0;

  if (x == 0) myResolve("OK");
  else myReject("Error");
});

myPromise.then(
  (value) => display(value),
  (error) => display(error)
);
