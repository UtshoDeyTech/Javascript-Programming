let marks = [10, 20, 30, 40, 50];
let students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 72 },
    { name: "Charlie", score: 90 },
    { name: "David", score: 65 },
    { name: "Eve", score: 88 }
];

console.log("Using map to create a new array:");
const doubledMarks = marks.map(mark => mark * 2);
console.log(doubledMarks); // [20, 40, 60, 80, 100]

console.log("\nUsing filter to create a subset array:");
const highMarks = marks.filter(mark => mark > 30);
console.log(highMarks); // [40, 50]

console.log("\nUsing every to check if all elements meet a condition:");
const allPassing = marks.every(mark => mark >= 10);
console.log(`All marks 10 or above? ${allPassing}`); // true

console.log("\nUsing some to check if any element meets a condition:");
const anyExcellent = marks.some(mark => mark >= 50);
console.log(`Any mark 50 or above? ${anyExcellent}`); // true

console.log("\nUsing find to get the first element that meets a condition:");
const firstHighMark = marks.find(mark => mark > 30);
console.log(`First mark above 30: ${firstHighMark}`); // 40

console.log("\nUsing findIndex to get the index of the first element that meets a condition:");
const firstHighMarkIndex = marks.findIndex(mark => mark > 30);
console.log(`Index of first mark above 30: ${firstHighMarkIndex}`); // 3

console.log("\nChaining array methods (functional programming):");
const sumOfDoubledHighMarks = marks
    .filter(mark => mark > 20) // Filter marks > 20
    .map(mark => mark * 2)     // Double each mark
    .reduce((sum, mark) => sum + mark, 0); // Sum them up
console.log(`Sum of doubled high marks: ${sumOfDoubledHighMarks}`); // (30+40+50)*2 = 240

console.log("\nWorking with array of objects:");
console.log("Students with scores above 80:");
students.forEach(student => {
    if (student.score > 80) {
        console.log(`${student.name}: ${student.score}`);
    }
});

console.log("\nSorting array of objects:");
students.sort((a, b) => b.score - a.score); // Sort by score (descending)
console.log("Students sorted by score (highest first):");
students.forEach(student => {
    console.log(`${student.name}: ${student.score}`);
});

console.log("\nUsing flatMap (combining map and flat):");
const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flattened = nestedArray.flatMap(arr => arr);
console.log(flattened); // [1, 2, 3, 4, 5, 6]

console.log("\nUsing Array.from to create a sequence:");
const sequence = Array.from({ length: 5 }, (_, i) => i + 1);
console.log(sequence); // [1, 2, 3, 4, 5]

console.log("\nUsing for await...of (for async operations):");
async function processAsyncData() {
    const asyncItems = [
        Promise.resolve("Data 1"),
        Promise.resolve("Data 2"),
        Promise.resolve("Data 3")
    ];
    
    console.log("Processing async data:");
    for await (const item of asyncItems) {
        console.log(item);
    }
}
// Uncomment to run: 
// processAsyncData();