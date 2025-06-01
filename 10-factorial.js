function factorial(n) {
  if (isNaN(n) || n === 0 || n === 1) {
    return 1;
  } else if (n < 0) {
    return 'Error: Factorial is not defined for negative numbers';
  } else {
    return n * factorial(n - 1);
  }
}

const input = parseInt(process.argv[2]);
console.log(factorial(input));
