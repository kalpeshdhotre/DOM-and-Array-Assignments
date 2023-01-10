// Write a program which tells the number of days in a month, now consider leap year.

let year = 2024;
let month = 2;
let daysInMonth = new Date(year, month, 0).getDate();

console.log(`Total days in ${month} month of year ${year} are ${daysInMonth}`);