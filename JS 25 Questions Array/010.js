/* 10. Boolean value is either true or false.
    - Write three JavaScript statement which provide truthy value.
    - Write three JavaScript statement which provide falsy value. */

// Statement generate truthy Value
// console.log("Expression 100 > 9 is :" + Boolean(100 > 9));
console.log("Expression 100 > 9 is :" + (100 > 9));

console.log("Expression 1+2=3 is :" + (1 + 2 == 3));

console.log("22 is even number, this expression is :" + (88 % 2 == 0));

// Satement generate Falsy value

console.log("checking length of string is even or odd for - `Hello World` output is :" + ("Hello World".length % 2 == 0));

let fName1 = "kalpesh";
let fName2 = "kalpita kirale";
console.log("Checking length of two strings, gives output :" + (fName1.length == fName2.length));

const day = new Date();
console.log("Check if today is Saturday, result is :" + (day.getDay() == 6));
