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
