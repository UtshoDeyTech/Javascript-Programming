let marks = [10, 20, 30, 40, 50];

console.log("Accessing first element (index 0):");
console.log(marks[0]); // 10

console.log("Accessing second element (index 1):");
console.log(marks[1]); // 20

console.log("Accessing third element (index 2):");
console.log(marks[2]); // 30

console.log("Accessing fourth element (index 3):");
console.log(marks[3]); // 40

console.log("Accessing fifth element (index 4):");
console.log(marks[4]); // 50

console.log("Printing entire array:");
console.log(marks); // [10, 20, 30, 40, 50]

console.log("Length of the array:");
console.log(marks.length); // 5

console.log("Accessing last element using length-1:");
console.log(marks[marks.length - 1]); // 50

console.log("Accessing second-to-last element using length-2:");
console.log(marks[marks.length - 2]); // 40

console.log("Accessing third-to-last element using length-3:");
console.log(marks[marks.length - 3]); // 30

console.log("Accessing fourth-to-last element using length-4:");
console.log(marks[marks.length - 4]); // 20

console.log("Accessing fifth-to-last element using length-5:");
console.log(marks[marks.length - 5]); // 10

console.log("Accessing element at length (out of bounds):");
console.log(marks[marks.length]); // undefined

console.log("Accessing element beyond length (out of bounds):");
console.log(marks[marks.length + 1]); // undefined

// Extended features
console.log("\nCreating array using Array constructor:");
let array1 = new Array(5); // Creates array with 5 empty slots
console.log(array1); // [ <5 empty items> ]
console.log(array1.length); // 5

console.log("\nCreating array with initial values using Array constructor:");
let array2 = new Array(1, 2, 3, 4, 5);
console.log(array2); // [1, 2, 3, 4, 5]

console.log("\nCreating array using Array.of():");
let array3 = Array.of(5); // Creates array with one element: 5
console.log(array3); // [5]

console.log("\nCreating array using Array.from():");
let array4 = Array.from("hello"); // Creates array from string
console.log(array4); // ['h', 'e', 'l', 'l', 'o']

console.log("\nCreating array using spread operator:");
let array5 = [...marks, 60, 70]; // Creates copy of marks with additional elements
console.log(array5); // [10, 20, 30, 40, 50, 60, 70]

console.log("\nAccessing elements using destructuring:");
let [first, second, ...rest] = marks;
console.log(first); // 10
console.log(second); // 20
console.log(rest); // [30, 40, 50]

console.log("\nCreating multi-dimensional array:");
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[1][1]); // 5 (Row 1, Column 1)

console.log("\nIterating over array with entries():");
let iterator = marks.entries();
for (let entry of iterator) {
    console.log(entry); // [0, 10], [1, 20], etc.
}

console.log("\nChecking if object is an array:");
console.log(Array.isArray(marks)); // true
console.log(Array.isArray("hello")); // false