function sqrt(x) {
  function is_good_enough(guess) {
    return Math.abs(guess * guess - x) < 0.001;
  }

  function average(x, y) {
    return (x + y) / 2;
  }

  function improve(guess) {
    return average(guess, x / guess);
  }

  function sqrt_iter(guess) {
    return is_good_enough(guess) ? guess : sqrt_iter(improve(guess));
  }

  return sqrt_iter(1);
}

console.log(sqrt(2));
console.log(sqrt(9));
