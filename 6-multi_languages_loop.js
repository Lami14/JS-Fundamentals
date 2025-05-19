#!/usr/bin/node

const lines = [
  "C is fun",
  "Python is cool",
  "JavaScript is amazing"
];

let i = 0;
let output = "";

do {
  output += lines[i] + (i < lines.length - 1 ? "\n" : "");
  i++;
} while (i < lines.length);

console.log(output);


