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
