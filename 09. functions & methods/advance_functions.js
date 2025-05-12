const arrowSum = (a, b) => {
    return a + b;
}
console.log(arrowSum(5, 3)); // 8

const arrowMultiply = (a, b) => {
    return a * b;
}
console.log(arrowMultiply(5, 3)); // 15

const arrowDivide = (a, b) => {
    if (b === 0) {
        console.log("Cannot divide by zero");
        return null;
    }
    return a / b;
}
console.log(arrowDivide(10, 2)); // 5

const arrowSubtract = (a, b) => {
    return a - b;
}
console.log(arrowSubtract(10, 5)); // 5
console.log(arrowSubtract(5, 10)); // -5

const arrowGreet = (name) => {
    console.log("Hello, " + name + "!");
}
arrowGreet("Alice"); // Hello, Alice!

const arrowHello = () => {
    console.log("Hello, World!");
}
arrowHello(); // Hello, World!

function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Hello, World!")); // 3

// Concise arrow function syntax (implicit return)
const square = x => x * x;
console.log(square(5)); // 25

// Arrow function with multiple parameters
const calculateArea = (width, height) => width * height;
console.log(calculateArea(5, 10)); // 50

// Arrow function with no parameters
const getRandomNumber = () => Math.random();
console.log(getRandomNumber()); // Random number between 0 and 1

// Arrow function with default parameters
const greet2 = (name = "Guest") => `Hello, ${name}!`;
console.log(greet2()); // Hello, Guest!
console.log(greet2("John")); // Hello, John!

// Arrow function with rest parameters
const sumAll = (...numbers) => numbers.reduce((total, num) => total + num, 0);
console.log(sumAll(1, 2, 3, 4, 5)); // 15

// Lexical this in arrow functions
function Person() {
    this.age = 0;
    
    // Arrow function keeps 'this' from the Person context
    this.growOld = () => {
        this.age++;
        console.log(this.age);
    };
    
    // Regular function creates its own 'this' context
    this.growOldRegular = function() {
        this.age++;
        console.log(this.age);
    };
}

const person = new Person();
person.growOld(); // 1
setTimeout(person.growOld, 10); // 2 (after timeout)

// This would lose 'this' context in a regular function
// setTimeout(person.growOldRegular, 10); // NaN or error

// Immediately Invoked Arrow Function Expression (IIAFE)
(() => {
    console.log("This arrow function runs immediately!");
})(); // This arrow function runs immediately!

// Higher-order arrow functions
const processArray = (arr, callback) => {
    return arr.map(callback);
};

const double = x => x * 2;
const numbers = [1, 2, 3, 4, 5];
console.log(processArray(numbers, double)); // [2, 4, 6, 8, 10]

// Currying with arrow functions
const multiply = a => b => a * b;
const multiplyBy2 = multiply(2);
const multiplyBy3 = multiply(3);
console.log(multiplyBy2(5)); // 10
console.log(multiplyBy3(5)); // 15

// Arrow function with object destructuring
const printPersonInfo = ({ name, age, city = "Unknown" }) => {
    console.log(`${name} is ${age} years old and lives in ${city}.`);
};

printPersonInfo({ name: "Alice", age: 30, city: "New York" }); // Alice is 30 years old and lives in New York.

// Arrow functions and array methods
const fruits = ["apple", "banana", "cherry"];
console.log(fruits.map(fruit => fruit.toUpperCase())); // ["APPLE", "BANANA", "CHERRY"]
console.log(fruits.filter(fruit => fruit.length > 5)); // ["banana", "cherry"]
console.log(fruits.find(fruit => fruit.startsWith("a"))); // "apple"
console.log(fruits.every(fruit => fruit.length > 3)); // true
console.log(fruits.some(fruit => fruit.includes("a"))); // true
console.log(fruits.reduce((output, fruit) => output + fruit[0], "")); // "abc"

// Arrow function with async/await
const fetchData = async (id) => {
    // Simulating async operation
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id, name: `Item ${id}` });
        }, 100);
    });
};

// Using the async arrow function
fetchData(123).then(data => console.log("Fetched:", data));

// Arrow function limitations - no arguments object
const noArguments = () => {
    // console.log(arguments); // ReferenceError: arguments is not defined
    // Use rest parameters instead
    console.log("Use rest parameters instead of arguments object");
};
noArguments(1, 2, 3);

// Arrow function with rest parameters as alternative to arguments
const withRestParams = (...args) => {
    console.log(args); // [1, 2, 3]
};
withRestParams(1, 2, 3);

// Arrow functions can't be used as constructors
// const ArrowConstructor = () => {
//     this.value = 42;
// };
// const instance = new ArrowConstructor(); // TypeError: ArrowConstructor is not a constructor

// Arrow functions don't have their own 'this' binding
const obj = {
    value: 42,
    getValue: () => {
        // 'this' refers to the enclosing context, not the object
        return this.value; // undefined or refers to global/window object
    },
    getValueRegular: function() {
        // 'this' refers to the object
        return this.value; // 42
    }
};
console.log("Arrow function value:", obj.getValue()); // undefined in strict mode, or global value
console.log("Regular function value:", obj.getValueRegular()); // 42 