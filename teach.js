console.log('While loops');

//First While loop

let i = 1;
while (i <= 10) {
  console.log(i);
  i++;
}

//2.

let x = 30;
while (x > 0) {
  x /= 2;
  x--;
  // if we don't have a whole number
  if (x % 1 != 0) {
    break;
  }

  console.log(x);
}

let a = 1;
while (a < 10) {
  console.log(a);
  a += 2;
}

let b = 1;
while (b < 7) {
  if (b % 2 === 0) {
    console.log(`${b} is even`);
  } else {
    console.log(`${b} is odd`);
  }
  b++;
}

/**
 *
 * Exercise
 *
 */

// Count down to 0 from a given number.
let c = 100;
while (c > 0) {
  console.log(c);
  c--;
}

// Log integers in multiples of 3 as long as they are less than 35.
let d = 0;
while (d < 35) {
  if (d % 3 === 0) {
    console.log(d);
  }
  d++;
}

// Print integers in multiples of 5 as long as they are less than 100.
let e = 0;
while (e < 100) {
  if (e % 5 === 0) {
    console.log(e);
  }
  e++;
}

// Print integers between 0 and 20 with the following conditions:

// All numbers divisible by 2 should be multiplied by 3 before they are output.

// All other integers should not be output.
let f = 0;

while (f < 20) {
  if (f % 2 === 0) {
    const product = f * 3;
    console.log(product);
  }
  f++;
}

// Bonus Logical Question
// Romeo went to the vending machine to buy himself a cookie, which costs $4. He paid with a $10 bill, and the vending machine gave him his change in quarters.

// Write a loop that outputs how many quarters Romeo received.

let bill = 10;
let cost = 4;
let changeInQuarters = 0;

while (bill > cost) {
  bill -= 0.25;
  changeInQuarters++;
}

console.log(changeInQuarters);