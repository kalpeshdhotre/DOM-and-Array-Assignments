// 30. Write a script which generates a random hexadecimal number.

let randomNumber = Math.random();
// console.log(randomNumber);

let decNumber = Math.floor(randomNumber * 10000000 );
console.log(`Radom Decimal Number is ${decNumber}`);

//convert decimal number to hexadecimal
const hexNumber = [];

/* 
1. Divide the decimal number by 16.
2. Write the remainder in hexadecimal form.
3. Divide the result by 16.
4. Repeat steps 2 and 3 until the result is 0. 
*/

while (decNumber / 16 != 0) {
    hexNumber.unshift(decNumber % 16);
    decNumber = Math.floor(decNumber / 16);
    // console.log(decNumber);
}

// console.log(`Hexa Decimal number is in array : ${hexNumber}`);

//print convert Hexadecimal digit for 10 to 15
function printHexNumbers(x) {
    let hexDigit = "";

    switch (x) {
        case 10:
            // console.log("A");
            hexDigit = "A";
            break;
        case 11:
            // console.log("B");
            hexDigit = "B";
            break;
        case 12:
            // console.log("C");
            hexDigit = "C";
            break;
        case 13:
            // console.log("D");
            hexDigit = "D";
            break;
        case 14:
            // console.log("E");
            hexDigit = "E";
            break;
        case 15:
            // console.log("F");
            hexDigit = "F";
            break;
    }
    return hexDigit;
}

let hexString = ""; // Stores final Hexadecimal string

hexNumber.forEach((element) => {
    if (element >= 10) {
        let hexElement = printHexNumbers(element);
        hexString = hexString + hexElement;
        // hexString += printHexNumbers(element);
    } else {
        hexString = hexString + element;
    }
});

console.log(`Converted String in hexadecimal is : ${hexString}`);
