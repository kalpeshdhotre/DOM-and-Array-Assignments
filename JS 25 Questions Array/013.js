// 13. Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

// const ps = require("prompt-sync");
// prompt = ps();

/* const prompt = require("prompt-sync")({ sigint: true });
let baseTriangle = prompt("Please enter base of traingle: ");
let heightTriangle = prompt("Please enter height of triangle: "); */

let baseTriangle=3;
let heightTriangle=4;
let triangleArea = 0.5 * baseTriangle * heightTriangle;
console.log(`Area of triangle with base ${baseTriangle} and height ${heightTriangle} is : ${triangleArea}`);
