/* 21. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
- September, October or November, the season is Autumn.
- December, January or February, the season is Winter.
- March, April or May, the season is Spring
- June, July or August, the season is Summer */

let userInput = "May";

let autumn = ["September", "October", "November"];
let winter = ["December", "January", "February"];
let spring = ["March", "April", "May"];
let summer = ["June", "July", "August"];

console.log(userInput);

if (autumn.includes(userInput) == true) {
    console.log("Season is Autumn");
} else if (winter.includes(userInput) == true) {
    console.log("season is winter");
} else if (spring.includes(userInput) == true) {
    console.log("season is spring");
} else if (summer.includes(userInput) == true) {
    console.log("season is summer");
} else {
    console.log("check input");
}
