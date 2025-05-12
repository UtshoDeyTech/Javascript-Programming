// Initialize sample arrays
let numbers = [1, 2, 3, 4, 5];
let words = ["apple", "banana", "cherry", "date", "fig"];
let mixed = [10, "hello", true, null, { name: "object" }, [1, 2]];
let nestedArray = [[1, 2], [3, 4], [5, 6, [7, 8]]];

// Advanced array methods

// flat() - Creates a new array with all sub-array elements concatenated recursively
console.log("Using flat() with default depth (1):");
console.log(nestedArray.flat()); // [1, 2, 3, 4, 5, 6, [7, 8]]

console.log("\nUsing flat() with depth 2:");
console.log(nestedArray.flat(2)); // [1, 2, 3, 4, 5, 6, 7, 8]

console.log("\nUsing flat() with Infinity depth:");
let deeplyNested = [1, [2, [3, [4, [5]]]]];
console.log(deeplyNested.flat(Infinity)); // [1, 2, 3, 4, 5]

// flatMap() - Combination of map() followed by flat() of depth 1
console.log("\nUsing flatMap():");
let sentences = ["Hello world", "How are you"];
let words2 = sentences.flatMap(sentence => sentence.split(' '));
console.log(words2); // ["Hello", "world", "How", "are", "you"]

// from() - Creates a new array from an array-like or iterable object
console.log("\nUsing Array.from() with mapping function:");
let mappedArray = Array.from([1, 2, 3], x => x * 2);
console.log(mappedArray); // [2, 4, 6]

console.log("\nUsing Array.from() to create array from Set (removes duplicates):");
let uniqueArray = Array.from(new Set([1, 2, 2, 3, 1, 4]));
console.log(uniqueArray); // [1, 2, 3, 4]

// keys(), values(), entries() - Returns array iterator objects
console.log("\nUsing keys(), values(), and entries():");
let fruits = ["apple", "banana", "cherry"];

// Convert iterator to array with Array.from for easier logging
console.log("keys():", Array.from(fruits.keys())); // [0, 1, 2]
console.log("values():", Array.from(fruits.values())); // ["apple", "banana", "cherry"]
console.log("entries():", Array.from(fruits.entries())); // [[0, "apple"], [1, "banana"], [2, "cherry"]]

// at() - Returns the element at the specified index (supports negative indices)
console.log("\nUsing at():");
console.log(fruits.at(1)); // "banana"
console.log(fruits.at(-1)); // "cherry" (last element)
console.log(fruits.at(-2)); // "banana" (second-to-last element)

// Group operations (ES2023+)
// Note: If your environment doesn't support these yet, comment them out
/*
console.log("\nUsing groupBy() (ES2023+):");
const inventory = [
  { name: "apple", type: "fruit", quantity: 5 },
  { name: "banana", type: "fruit", quantity: 10 },
  { name: "carrot", type: "vegetable", quantity: 3 },
  { name: "spinach", type: "vegetable", quantity: 12 }
];

const groupedByType = inventory.groupBy(item => item.type);
console.log(groupedByType);
// {
//   fruit: [
//     { name: "apple", type: "fruit", quantity: 5 },
//     { name: "banana", type: "fruit", quantity: 10 }
//   ],
//   vegetable: [
//     { name: "carrot", type: "vegetable", quantity: 3 },
//     { name: "spinach", type: "vegetable", quantity: 12 }
//   ]
// }
*/

// Advanced array manipulation using functional programming

// Composing multiple operations
console.log("\nComposing multiple array operations:");
let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let result = data
  .filter(n => n % 2 === 0)     // Keep even numbers: [2, 4, 6, 8, 10]
  .map(n => n * n)              // Square each number: [4, 16, 36, 64, 100]
  .reduce((sum, n) => sum + n, 0); // Sum them up: 220

console.log("Result of chained operations:", result); // 220

// Using reduce for complex transformations
console.log("\nUsing reduce for array transformations:");

// Transform array to object
let arrayToObject = ["a", "b", "c"].reduce((obj, item, index) => {
  obj[item] = index;
  return obj;
}, {});
console.log("Array to object:", arrayToObject); // { a: 0, b: 1, c: 2 }

// Grouping data
let people = [
  {name: "Alice", age: 25, city: "New York"},
  {name: "Bob", age: 30, city: "Chicago"},
  {name: "Charlie", age: 35, city: "New York"},
  {name: "Diana", age: 40, city: "Chicago"}
];

let groupedByCity = people.reduce((groups, person) => {
  const { city } = person;
  groups[city] = groups[city] || [];
  groups[city].push(person);
  return groups;
}, {});

console.log("Grouped by city:", groupedByCity);
// {
//   "New York": [
//     { name: "Alice", age: 25, city: "New York" },
//     { name: "Charlie", age: 35, city: "New York" }
//   ],
//   "Chicago": [
//     { name: "Bob", age: 30, city: "Chicago" },
//     { name: "Diana", age: 40, city: "Chicago" }
//   ]
// }

// Advanced sorting
console.log("\nAdvanced sorting examples:");

// Sort by multiple criteria
let users = [
  { name: "Alice", age: 30, role: "admin" },
  { name: "Bob", age: 25, role: "user" },
  { name: "Charlie", age: 30, role: "user" },
  { name: "Diana", age: 25, role: "admin" }
];

// Sort by role first, then by age (ascending)
users.sort((a, b) => {
  if (a.role !== b.role) {
    return a.role.localeCompare(b.role); // Sort by role alphabetically
  }
  return a.age - b.age; // If same role, sort by age
});

console.log("Sorted by role then age:", users);

// Custom array iteration with performance optimization
console.log("\nOptimized array iteration:");

// Cached length for better performance in large arrays
const largeArray = Array.from({ length: 1000 }, (_, i) => i);
console.log("Iterating with cached length:");
const len = largeArray.length; // Cache the length
for (let i = 0; i < len; i++) {
  // In a real scenario, we would do something with largeArray[i]
  if (i === 0) console.log("First element:", largeArray[i]);
  if (i === len - 1) console.log("Last element:", largeArray[i]);
}

// Array polyfills for older environments
console.log("\nExample of array polyfill (for demonstration):");
console.log("This is how you might implement your own version of map:");

// Example of how to implement map() if it didn't exist
if (!Array.prototype.myMap) {
  Array.prototype.myMap = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i], i, this));
    }
    return result;
  };
}

console.log([1, 2, 3].myMap(x => x * 2)); // [2, 4, 6]

// TypedArray demonstration
console.log("\nUsing TypedArrays for efficient memory usage:");
const int32Array = new Int32Array([1, 2, 3, 4, 5]);
console.log("Int32Array:", int32Array);
console.log("Byte length:", int32Array.byteLength); // 20 bytes (5 elements * 4 bytes per Int32)

// Array buffers and views
const buffer = new ArrayBuffer(16); // 16 bytes of memory
const view1 = new Int32Array(buffer); // Viewed as 4 Int32 elements
const view2 = new Uint8Array(buffer); // Same buffer viewed as 16 Uint8 elements

view1[0] = 42;
console.log("After setting view1[0] = 42:");
console.log("view1:", Array.from(view1)); // [42, 0, 0, 0]
console.log("view2 (first 4 bytes):", Array.from(view2.slice(0, 4))); // [42, 0, 0, 0] (in little-endian)