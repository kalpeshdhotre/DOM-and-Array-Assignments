// 28. Use for loop to iterate from 0 to 100 and print only prime numbers

let isPrime = 1; // 1 value if number is prime

for (var l = 2; l < 100; l++) {
    for (var i = 2; i < l; i++) {
        if (l % i != 0) {
            // console.log(`${l} is prime number and flag is set to yes`);
            isPrime = 1;
        } else {
            isPrime = 0;
            break;
        }
    }
    if (isPrime == 0) {
        
    } else {
        console.log(l);
        isPrime = null;
    }
}
