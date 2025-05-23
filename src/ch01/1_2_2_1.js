function fib(n) {
  return fib_iter(1, 0, n);
}

function fib_iter(a, b, count) {
  return count === 0 ? b : fib_iter(a + b, a, count - 1);
}

console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
