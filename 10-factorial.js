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

const num = BigInt(arg);

if (num < 0n) {
  console.log("1"); // factorial for negative is undefined, print 1 or handle differently
  process.exit(0);
}

console.log(factorial(num).toString());
