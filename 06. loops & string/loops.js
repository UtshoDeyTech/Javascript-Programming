// Basic Loops

// while loops
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}

// do while loops
let j = 0;
do {
  console.log(j);
  j++;
} 
while (j < 5);

// for loops
for (let k = 0; k < 5; k++) {
  console.log(k);
}

// for in loops
let person = { 
    name: "John", 
    age: 30, 
    city: "New York" 
};
for (let key in person) {
  console.log(key + ": " + person[key]);
}

// for of loops
let arr = [1, 2, 3, 4, 5];
for (let value of arr) {
  console.log(value);
}

// forEach loops
arr.forEach(function(value, index) {
  console.log(index + ": " + value);
});

// forEach loops with arrow function
arr.forEach((value, index) => {
  console.log(index + ": " + value);
});

// forEach loops with arrow function and destructuring
arr.forEach(({ value, index }) => {
  console.log(index + ": " + value);
});

// forEach loops with arrow function and destructuring and rest operator
arr.forEach(({ value, ...rest }) => {
  console.log(rest.index + ": " + value);
});

// forEach loops with arrow function and destructuring and rest operator and spread operator
arr.forEach(({ value, ...rest }) => {
  console.log(...rest, ": " + value);
});

// forEach loops with arrow function and destructuring and rest operator and spread operator and default parameter
arr.forEach(({ value, ...rest } = { value: 0 }) => {
  console.log(...rest, ": " + value);
});

// Extended Loop Examples

// Nested loops
console.log("Nested for loops:");
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`Outer: ${i}, Inner: ${j}`);
  }
}

// Loop with break statement
console.log("Loop with break:");
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    console.log("Breaking at 5");
    break;
  }
  console.log(i);
}

// Loop with continue statement
console.log("Loop with continue:");
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log(i); // Only prints odd numbers
}

// While loop with multiple conditions
console.log("While loop with multiple conditions:");
let a = 0;
let b = 10;
while (a < 5 && b > 5) {
  console.log(`a: ${a}, b: ${b}`);
  a++;
  b--;
}

// Loop with labeled statements
console.log("Labeled loops:");
outerLoop: for (let i = 0; i < 3; i++) {
  innerLoop: for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      console.log("Breaking out of outer loop");
      break outerLoop; // Breaks out of the outer loop
    }
    console.log(`i: ${i}, j: ${j}`);
  }
}

// While loop with variable reassignment in condition
console.log("While loop with variable reassignment:");
let counter = 0;
let sum = 0;
while ((counter = getNextValue()) !== -1) {
  sum += counter;
  console.log(`Current value: ${counter}, Sum so far: ${sum}`);
}

// Helper function for the above example
function getNextValue() {
  if (Math.random() > 0.8) return -1; // 20% chance to terminate
  return Math.floor(Math.random() * 10); // Random number between 0-9
}

// For loop with multiple variables
console.log("For loop with multiple variables:");
for (let i = 0, j = 10; i < j; i++, j--) {
  console.log(`i: ${i}, j: ${j}`);
}

// Infinite loop with break condition
console.log("Controlled infinite loop:");
let count = 0;
for (;;) { // Infinite loop
  count++;
  console.log(`Count: ${count}`);
  if (count >= 5) {
    console.log("Breaking out of infinite loop");
    break;
  }
}

// Loop with conditional increment
console.log("Loop with conditional increment:");
for (let i = 0; i < 10;) {
  console.log(i);
  if (i < 5) {
    i++; // Increment by 1 if i < 5
  } else {
    i += 2; // Increment by 2 if i >= 5
  }
}

// Recursive function instead of loop
console.log("Recursive function instead of loop:");
function countDown(n) {
  console.log(n);
  if (n > 0) {
    countDown(n - 1);
  }
}
countDown(5);

// Using setTimeout for asynchronous loops
console.log("Asynchronous loop with setTimeout (won't see output immediately):");
function asyncLoop(i) {
  if (i >= 5) return;
  setTimeout(() => {
    console.log(`Async iteration: ${i}`);
    asyncLoop(i + 1);
  }, 100);
}
asyncLoop(0);

// Using a custom iterator in a for...of loop
console.log("Custom iterator in a for...of loop:");
const customIterable = {
  [Symbol.iterator]() {
    let i = 0;
    return {
      next() {
        if (i < 5) {
          return { value: i++, done: false };
        }
        return { done: true };
      }
    };
  }
};

for (const num of customIterable) {
  console.log(`Custom iterable value: ${num}`);
}

// Loop over generator function
console.log("Loop over generator function:");
function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}

for (const num of numberGenerator()) {
  console.log(`Generated value: ${num}`);
}

// While loop with flag
console.log("While loop with flag:");
let isDone = false;
let iteration = 0;

while (!isDone) {
  iteration++;
  console.log(`Iteration: ${iteration}`);
  
  if (iteration >= 5) {
    isDone = true;
    console.log("Loop complete");
  }
}

// Do-while loop with complex condition
console.log("Do-while with complex condition:");
let x = 0;
let y = 10;

do {
  console.log(`x: ${x}, y: ${y}`);
  x++;
  y--;
} while (x < 5 && y > 5 && x !== y);

// Using closure in a loop
console.log("Using closure in a loop:");
function createLoopWithClosure() {
  for (var i = 0; i < 3; i++) {
    // Using IIFE (Immediately Invoked Function Expression) to create closure
    (function(index) {
      setTimeout(function() {
        console.log(`Closure example: ${index}`);
      }, 100);
    })(i);
  }
}
createLoopWithClosure();

// Modern approach to closure in a loop with let
console.log("Modern closure in a loop with let:");
function createModernLoopWithClosure() {
  for (let i = 0; i < 3; i++) {
    setTimeout(function() {
      console.log(`Modern closure example: ${i}`);
    }, 200);
  }
}
createModernLoopWithClosure();