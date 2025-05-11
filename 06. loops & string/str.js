// string operations
let str = "hello world";
for (let i = 0; i < str.length; i++) {
  console.log(str[i]);
}
// string operations with for of loop
for (let char of str) {
  console.log(char);
}
// string operations with forEach loop
str.split("").forEach((char) => {
  console.log(char);
});
// string operations with forEach loop and arrow function
str.split("").forEach((char) => {
  console.log(char);
});
// string operations with forEach loop and arrow function and destructuring
str.split("").forEach(({ char }) => {
  console.log(char);
});
// string operations with forEach loop and arrow function and destructuring and rest operator
str.split("").forEach(({ char, ...rest }) => {
  console.log(...rest, ": " + char);
});
// string operations with forEach loop and arrow function and destructuring and rest operator and spread operator
str.split("").forEach(({ char, ...rest }) => {
  console.log(...rest, ": " + char);
});
// string operations with forEach loop and arrow function and destructuring and rest operator and spread operator and default parameter
str.split("").forEach(({ char, ...rest } = { char: " " }) => {
  console.log(...rest, ": " + char);
});
