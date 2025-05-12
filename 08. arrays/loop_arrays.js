let marks = [10, 20, 30, 40, 50];

console.log("Using basic for loop with index:");
for (let i = 0; i < marks.length; i++) {
    console.log(`Element at index ${i}: ${marks[i]}`);
}

console.log("\nUsing forEach with arrow function and index:");
marks.forEach((mark, index) => {
    console.log(`Element at index ${index}: ${mark}`);
});

console.log("\nUsing for...of loop (values only):");
for (const mark of marks) {
    console.log(`Element: ${mark}`);
}

console.log("\nUsing for...in loop (not recommended for arrays):");
for (const index in marks) {
    console.log(`Element at index ${index}: ${marks[index]}`);
}

console.log("\nUsing forEach with arrow function:");
marks.forEach((mark, index) => {
    console.log(`Element at index ${index}: ${mark}`);
});

console.log("\nUsing forEach with regular function:");
marks.forEach(function(mark, index) {
    console.log(`Element at index ${index}: ${mark}`);
});

console.log("\nUsing forEach with named callback function:");
function printElement(mark, index) {
    console.log(`Element at index ${index}: ${mark}`);
}
marks.forEach(printElement);

console.log("\nUsing forEach with anonymous function:");
marks.forEach(function(mark, index) {
    console.log(`Element at index ${index}: ${mark}`);
});

console.log("\nUsing forEach with arrow function (value only):");
marks.forEach(mark => {
    console.log(`Element: ${mark}`);
});

console.log("\nUsing forEach with no parameters:");
marks.forEach(() => {
    console.log("Element: No parameter");
});

console.log("\nUsing forEach with single parameter:");
marks.forEach(mark => {
    console.log(`Element: ${mark}`);
});

console.log("\nUsing reduce to calculate sum:");
const result = marks.reduce((sum, mark) => {
    console.log(mark); // If you still want to log each mark
    return sum + mark;
}, 0);
console.log(`Sum of elements: ${result}`); // This will be 150
