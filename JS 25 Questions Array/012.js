/* 12. Use the Date object to do the following activities
    - What is the year today?
    - What is the month today as a number?
    - What is the date today?
    - What is the day today as a number?
    - What is the hours now?
    - What is the minutes now?
    - Find out the numbers of seconds elapsed from January 1, 1970 to now. */

let now = new Date();

console.log("What is the year today: " + now.getFullYear());
console.log("What is month today as a number: " + now.getMonth());
console.log("what is the date today: " + now.getDate());
console.log("what is the day today as number: " + now.getDay());
console.log("What is the hours now: " + now.getHours());
console.log("what is the minutes now: " + now.getMinutes());

const timeInSeconds = Math.round(Date.now() / 1000);
console.log("Seconds elapsed from January 1, 1970 to now are: " + timeInSeconds);
