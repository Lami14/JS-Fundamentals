#!/usr/bin/node

const arg = process.argv[2];
const num = parseInt(arg);

if (!isNaN(num) && num > 0) {
  for (let i = 0; i < num; i++) {
    console.log("C is fun");
  }
}
// no else block, so no output if invalid or missing
