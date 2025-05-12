// Initialize an array of vegetables
let veggies = ["carrot", "broccoli", "spinach"];

// Initialize an array of fruits
let fruits = ["apple", "banana", "orange"];

// push() - Adds one or more elements to the end of an array and returns the new length
veggies.push("cabbage");
console.log(veggies); // ["carrot", "broccoli", "spinach", "cabbage"]
console.log(veggies.length); // 4 - Now contains 4 elements

// push() can add multiple elements at once
fruits.push("grape", "kiwi");
console.log(fruits); // ["apple", "banana", "orange", "grape", "kiwi"]
console.log(fruits.length); // 5 - Now contains 5 elements

// pop() - Removes the last element from an array and returns that element
let delItem = fruits.pop();
console.log(delItem); // "kiwi" - The removed element
console.log(fruits); // ["apple", "banana", "orange", "grape"] - The array is now shorter
console.log(fruits.length); // 4 - Length decreased by 1

// toString() - Converts array to a string with commas between elements
console.log(fruits.toString()); // "apple,banana,orange,grape"

// join() - Similar to toString() but allows custom separators
console.log(fruits.join()); // "apple,banana,orange,grape" - Default is comma (same as toString())
console.log(fruits.join(" ")); // "apple banana orange grape" - Space separator
console.log(fruits.join("-")); // "apple-banana-orange-grape" - Hyphen separator
console.log(fruits.join("")); // "applebananaorangegrape" - No separator (elements combined directly)

// concat() - Combines two or more arrays into a new array without modifying the original arrays
let concatedArray = veggies.concat(fruits);
console.log(concatedArray); // ["carrot", "broccoli", "spinach", "cabbage", "apple", "banana", "orange", "grape"]
// Note that original arrays (veggies and fruits) remain unchanged

// unshift() - Adds one or more elements to the beginning of an array and returns the new length
fruits.unshift("mango");
console.log(fruits); // ["mango", "apple", "banana", "orange", "grape"]
console.log(fruits.length); // 5 - Now contains 5 elements

// shift() - Removes the first element from an array and returns that element
veggies.shift(); // Removes "carrot" and returns it (though we're not storing the return value here)
console.log(veggies); // ["broccoli", "spinach", "cabbage"]
console.log(veggies.length); // 3 - Length decreased by 1

// indexOf() - Returns the first index at which a given element is found, or -1 if not found
console.log(veggies.indexOf("spinach")); // 1 - Found at index 1
console.log(veggies.indexOf("carrot")); // -1 - Not found (we removed it with shift())

// lastIndexOf() - Returns the last index at which a given element is found, or -1 if not found
// (Most useful when the array might contain duplicate elements)
console.log(veggies.lastIndexOf("spinach")); // 1 - Only appears once, so same as indexOf
console.log(veggies.lastIndexOf("carrot")); // -1 - Not found

// includes() - Determines whether an array includes a certain element, returning true or false
console.log(veggies.includes("spinach")); // true - "spinach" is in the array
console.log(veggies.includes("carrot")); // false - "carrot" is not in the array

// slice() - Returns a shallow copy of a portion of an array into a new array
// slice(start, end) - start is inclusive, end is exclusive
console.log(veggies.slice(1)); // ["spinach", "cabbage"] - From index 1 to the end
console.log(veggies.slice(1, 2)); // ["spinach"] - From index 1 up to (but not including) index 2

// slice() with negative indices - Counts from the end of the array
console.log(veggies.slice(-1)); // ["cabbage"] - Just the last element
console.log(veggies.slice(-2)); // ["spinach", "cabbage"] - Last two elements
console.log(veggies.slice(1, -1)); // ["spinach"] - From index 1 to the second-to-last element