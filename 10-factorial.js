function factorial(n) {
  if (isNaN(n) || n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

const arg = process.argv[2];
const num = parseInt(arg, 10);

console.log(factorial(isNaN(num) ? 1 : num));
