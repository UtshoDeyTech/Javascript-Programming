// conditional statements
// if statement
// if (condition) {
//   // code to be executed if condition is true
// }
// if else statement
// if (condition) {
//   // code to be executed if condition is true
// } else {
//   // code to be executed if condition is false
// }
// if else if statement
// if (condition1) {
//   // code to be executed if condition1 is true
// } else if (condition2) {
//   // code to be executed if condition2 is true
// } else {
//   // code to be executed if condition1 and condition2 are false
// }
// if statement
let age = 18;
if (age >= 18) {
  console.log("You are an adult.");
}
else {
  console.log("You are a minor.");
}
// if else statement
let age2 = 16;
if (age2 >= 18) {
  console.log("You are an adult.");
}
else {
  console.log("You are a minor.");
}
// if else if statement    
let mode = "dark";
let color;

if (mode === "dark") {
  color = "black";
}   
else if (mode === "light") {
  color = "white";
} else {
  color = "gray";
}
console.log("Color is: ", color); // Color is:  black


// ternary operator
// condition ? expression1 : expression2
console.log(age >= 18 ? "You are an adult." : "You are a minor."); // You are an adult.

// switch statement
// switch (expression) {
//   case value1:
//     // code to be executed if expression === value1
//     break;
//   case value2:
    // code to be executed if expression === value2
//     break;
//   default:
//     // code to be executed if expression doesn't match any case
// }
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}
