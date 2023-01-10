// 29. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let sumOfEven = 0;
let sumOfOdd = 0;

for (var i = 1; i <= 100; i++) {
    if (i % 2 != 0) {
        sumOfOdd = sumOfOdd + i;
    } else {
        sumOfEven = sumOfEven + i;
    }
}

console.log(`Sum of all Odd numbers is ${sumOfOdd}`);
console.log(`Sum of all even numbers is ${sumOfEven}`);
