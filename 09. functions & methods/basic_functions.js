function hello() {
    console.log("Hello, World!");
}
hello(); // Hello, World!

function greet(name) {
    console.log("Hello, " + name + "!");
}
greet("Alice"); // Hello, Alice!

function add(a, b) {
    return a + b;
}     
console.log(add(5, 3)); // 8

function multiply(a, b) {
    return a * b;
}
console.log(multiply(5, 3)); // 15

function divide(a, b) {
    if (b === 0) {
        console.log("Cannot divide by zero");
        return null;
    }
    return a / b;
}
console.log(divide(10, 2)); // 5
console.log(divide(10, 0)); // Cannot divide by zero

function subtract(a, b) {
    return a - b;
}
console.log(subtract(10, 5)); // 5
console.log(subtract(5, 10)); // -5

// Function with default parameters
function greetWithDefault(name = "Guest") {
    console.log("Hello, " + name + "!");
}
greetWithDefault(); // Hello, Guest!
greetWithDefault("John"); // Hello, John!

// Function with rest parameters
function sum(...numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}
console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum(10, 20)); // 30

// Function expressions
const square = function(x) {
    return x * x;
};
console.log(square(5)); // 25

// Self-invoking function expressions (IIFE)
(function() {
    console.log("This function runs immediately!");
})(); // This function runs immediately!

// Functions as arguments (callback functions)
function processArray(arr, callback) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

function double(x) {
    return x * 2;
}

const numbers = [1, 2, 3, 4, 5];
console.log(processArray(numbers, double)); // [2, 4, 6, 8, 10]

// Functions returning functions (closures)
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double2 = createMultiplier(2);
const triple = createMultiplier(3);
console.log(double2(5)); // 10
console.log(triple(5)); // 15

// Function with named parameters (using object destructuring)
function printPersonInfo({ name, age, city = "Unknown" }) {
    console.log(`${name} is ${age} years old and lives in ${city}.`);
}

printPersonInfo({ name: "Alice", age: 30, city: "New York" }); // Alice is 30 years old and lives in New York.
printPersonInfo({ name: "Bob", age: 25 }); // Bob is 25 years old and lives in Unknown.

// Generator functions
function* countUpTo(max) {
    let count = 1;
    while (count <= max) {
        yield count++;
    }
}

const counter = countUpTo(3);
console.log(counter.next().value); // 1
console.log(counter.next().value); // 2
console.log(counter.next().value); // 3
console.log(counter.next().value); // undefined

// Recursive functions
function factorial(n) {
    if (n <= 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5)); // 120 (5*4*3*2*1)

// Function with callback pattern (synchronous)
function fetchData(id, callback) {
    // Simulating data fetching
    const data = { id: id, name: "Item " + id };
    callback(data);
}

fetchData(123, function(data) {
    console.log("Received data:", data);
});

// Asynchronous function using Promise
function fetchDataAsync(id) {
    return new Promise((resolve, reject) => {
        // Simulating async data fetching
        setTimeout(() => {
            if (id > 0) {
                resolve({ id: id, name: "Item " + id });
            } else {
                reject("Invalid ID");
            }
        }, 100);
    });
}

// Usage of async function
fetchDataAsync(456)
    .then(data => console.log("Async data:", data))
    .catch(error => console.error("Error:", error));