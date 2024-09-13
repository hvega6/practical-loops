let countdownStart = 10; // Change this number as needed
while (countdownStart >= 0) {
    console.log(countdownStart);
    countdownStart--;
}

let multipleOf3 = 0;
while (multipleOf3 < 35) {
    console.log(multipleOf3);
    multipleOf3 += 3;
}

let multipleOf5 = 0;
while (multipleOf5 < 100) {
    console.log(multipleOf5);
    multipleOf5 += 5;
}

let num = 0;
while (num <= 20) {
    if (num % 2 === 0) {
        console.log(num * 3); // Multiply by 3 if divisible by 2
    }
    num++;
}

let primeCandidate = 2; // Start checking from the first prime number
while (primeCandidate <= 20) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(primeCandidate); i++) {
        if (primeCandidate % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(primeCandidate);
    }
    primeCandidate++;
}

let cost = 4;
let payment = 10;
let change = payment - cost;
let quarters = 0;

while (change >= 0.25) {
    change -= 0.25;
    quarters++;
}

console.log(`Quarters received: ${quarters}`);