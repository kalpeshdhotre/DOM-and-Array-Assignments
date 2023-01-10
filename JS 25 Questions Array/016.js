// 16. Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

const pi = 3.14;
/* const prompt = require("prompt-sync")({ sigint: true });
let circleRadius = prompt("Enter the radius of circle :"); */

let circleRadius=5;

let circleArea = pi * circleRadius * circleRadius;
let circleCircumference = 2 * pi * circleRadius;

console.log(`Area of circle having radius ${circleRadius} is ${circleArea} and it's circumference is ${circleCircumference}`);
