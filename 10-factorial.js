#!/usr/bin/node

function factorial(n) {
  if (n === 0n || n === 1n) {
    return 1n;
  }
  let result = 1n;
  for (let i = 2n; i <= n; i++) {
    result *= i;
  }
  return result;
}

const arg = process.argv[2];
if (!arg) {
  console.log("1");
  process.exit(0);
}

let num;
try {
  num = BigInt(arg);
} catch {
  console.log("1");
  process.exit(0);
}

if (num < 0n) {
  console.log("1");
  process.exit(0);
}

const fact = factorial(num);

const factNum = Number(fact);
if (factNum === Infinity) {
  // Number too big to represent, print full BigInt string
  console.log(fact.toString());
} else {
  // print scientific notation for numbers that fit in Number
  console.log(factNum.toExponential());
}
