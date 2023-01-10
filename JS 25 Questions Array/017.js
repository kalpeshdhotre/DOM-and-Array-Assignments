/* Create a human readable time format using the Date time object
    - YYYY-MM-DD HH:mm
    - DD-MM-YYYY HH:mm
    - DD/MM/YYYY HH:mm */

let now = new Date();

console.log(`${now.getFullYear()}-${now.getMonth()}-${now.getDay()} ${now.getHours()}:${now.getMinutes()}`);
console.log(`${now.getDay()}-${now.getMonth()}-${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`);
console.log(`${now.getDay()}/${now.getMonth()}/${now.getFullYear()} ${now.getHours()}:${now.getMinutes()}`);
