// Part 1: Fizz Buzz
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("Fizz Buzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}


//part 2
let n = 4; // Change this value to test with different numbers

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

while (true) {
    if (isPrime(n)) {
        console.log(n);
        break;
    }
    n++;
}



//Part 3: Feeling Loopy

const csvData = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
const rows = csvData.split("\n");

for (const row of rows) {
    const cells = row.split(",");
    console.log(cells[0], cells[1], cells[2], cells[3]);
}

