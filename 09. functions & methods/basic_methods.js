let arr = [1, 2, 3, 4, 5];

function printVal(val){
    console.log(val);
}

arr.forEach(printVal); // 1 2 3 4 5
arr.forEach(function(val){
    console.log(val);
}); // 1 2 3 4 5


arr.forEach((val) => {
    console.log(val);
});


let cities = ["New York", "Los Angeles", "Chicago"];
cities.forEach((city) => {
    console.log(city.toUpperCase());
}); // NEW YORK LOS ANGELES CHICAGO

cities.forEach((city, idx, cities) => {
    console.log(city.toUpperCase(), idx, cities);
});

// Extended content below

// Array.map() - creates a new array with the results of calling a function for every array element
console.log("\n--- Array.map() examples ---");
let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

let cityLengths = cities.map((city) => {
    return { city: city, length: city.length };
});
console.log(cityLengths); // [{city: "New York", length: 8}, {city: "Los Angeles", length: 11}, {city: "Chicago", length: 7}]

// Array.filter() - creates a new array with elements that pass the test
console.log("\n--- Array.filter() examples ---");
let evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

let longCities = cities.filter((city) => city.length > 8);
console.log(longCities); // ["New York", "Los Angeles"]

// Array.find() - returns the first element that passes the test
console.log("\n--- Array.find() examples ---");
let firstEven = numbers.find((num) => num % 2 === 0);
console.log(firstEven); // 2

let cityWithA = cities.find((city) => city.includes("A"));
console.log(cityWithA); // "Los Angeles"

// Array.findIndex() - returns the index of the first element that passes the test
console.log("\n--- Array.findIndex() examples ---");
let firstEvenIndex = numbers.findIndex((num) => num % 2 === 0);
console.log(firstEvenIndex); // 1

let cityWithAIndex = cities.findIndex((city) => city.includes("A"));
console.log(cityWithAIndex); // 1

// Array.some() - tests whether at least one element passes the test
console.log("\n--- Array.some() examples ---");
let hasEven = numbers.some((num) => num % 2 === 0);
console.log(hasEven); // true

let hasCityWithZ = cities.some((city) => city.includes("Z"));
console.log(hasCityWithZ); // false

// Array.every() - tests whether all elements pass the test
console.log("\n--- Array.every() examples ---");
let allEven = numbers.every((num) => num % 2 === 0);
console.log(allEven); // false

let allCitiesHaveSpace = cities.every((city) => city.includes(" "));
console.log(allCitiesHaveSpace); // true (all cities have a space)

// Array.reduce() - reduces the array to a single value
console.log("\n--- Array.reduce() examples ---");
let sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15

let citiesString = cities.reduce((result, city, index) => {
    if (index === 0) return city;
    return result + ", " + city;
}, "");
console.log(citiesString); // "New York, Los Angeles, Chicago"

// String methods
console.log("\n--- String methods examples ---");
let str = "Hello World";

// String.charAt() - returns the character at the specified index
console.log(str.charAt(0)); // "H"

// String.concat() - joins two or more strings
console.log(str.concat("!")); // "Hello World!"

// String.includes() - checks if a string contains the specified string/characters
console.log(str.includes("World")); // true

// String.indexOf() - returns the position of the first occurrence of a specified value
console.log(str.indexOf("o")); // 4

// String.lastIndexOf() - returns the position of the last occurrence of a specified value
console.log(str.lastIndexOf("o")); // 7

// String.match() - searches a string for a match against a regular expression
console.log(str.match(/[A-Z]/g)); // ["H", "W"]

// String.replace() - searches a string for a value and returns a new string with the values replaced
console.log(str.replace("World", "JavaScript")); // "Hello JavaScript"

// String.slice() - extracts a part of a string and returns a new string
console.log(str.slice(0, 5)); // "Hello"

// String.split() - splits a string into an array of substrings
console.log(str.split(" ")); // ["Hello", "World"]

// String.toLowerCase() - converts a string to lowercase letters
console.log(str.toLowerCase()); // "hello world"

// String.toUpperCase() - converts a string to uppercase letters
console.log(str.toUpperCase()); // "HELLO WORLD"

// String.trim() - removes whitespace from both ends of a string
let paddedStr = "   Trimmed   ";
console.log(paddedStr.trim()); // "Trimmed"

// Number methods
console.log("\n--- Number methods examples ---");
let num = 123.456;

// Number.toFixed() - formats a number with a specific number of decimals
console.log(num.toFixed(2)); // "123.46"

// Number.toPrecision() - formats a number to a specified length
console.log(num.toPrecision(4)); // "123.5"

// Number.toString() - converts a number to a string
console.log(num.toString()); // "123.456"
console.log(num.toString(2)); // binary representation

// Math methods
console.log("\n--- Math methods examples ---");

// Math.abs() - returns the absolute value of a number
console.log(Math.abs(-5)); // 5

// Math.ceil() - rounds a number upward to the nearest integer
console.log(Math.ceil(4.3)); // 5

// Math.floor() - rounds a number downward to the nearest integer
console.log(Math.floor(4.7)); // 4

// Math.round() - rounds a number to the nearest integer
console.log(Math.round(4.7)); // 5

// Math.max() - returns the number with the highest value
console.log(Math.max(5, 10, 15)); // 15

// Math.min() - returns the number with the lowest value
console.log(Math.min(5, 10, 15)); // 5

// Math.random() - returns a random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random());

// Date methods
console.log("\n--- Date methods examples ---");
let now = new Date();

// Date.getDate() - returns the day of the month (1-31)
console.log(now.getDate());

// Date.getMonth() - returns the month (0-11)
console.log(now.getMonth()); // Note: January is 0

// Date.getFullYear() - returns the year
console.log(now.getFullYear());

// Date.getHours() - returns the hour (0-23)
console.log(now.getHours());

// Date.getMinutes() - returns the minutes (0-59)
console.log(now.getMinutes());

// Date.getSeconds() - returns the seconds (0-59)
console.log(now.getSeconds());

// Date.toDateString() - converts the date portion to a readable string
console.log(now.toDateString());

// Date.toTimeString() - converts the time portion to a readable string
console.log(now.toTimeString());