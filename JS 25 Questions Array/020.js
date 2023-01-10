/* 20. Write a code which can give grades to students according to theirs scores:
- 80-100, A
- 70-89, B
- 60-69, C
- 50-59, D
- 0-49, F */

// const prompt = require("prompt-sync")({ sigint: true });
// let grade = prompt("Enter your marks: ");

let grade=67;

if (grade <= 49) {
    console.log("Fail");
} else if (grade <= 100 && grade >= 90) {
    console.log("A Grade");
} else if (grade <= 89 && grade >= 70) {
    console.log("B Grade");
} else if (grade <= 69 && grade >= 60) {
    console.log("C Grade");
} else if (grade <= 59 && grade >= 50) {
    console.log("D Grade");
}
