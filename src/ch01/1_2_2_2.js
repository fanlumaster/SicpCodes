function count_change(amount) {
  return cc(amount, 5);
}

function cc(amount, kinds_of_coins) {
  return amount === 0
    ? 1
    : amount < 0 || kinds_of_coins === 0
    ? 0
    : cc(amount, kinds_of_coins - 1) + // Do not use first denomination coin
      cc(amount - first_denonination(kinds_of_coins), kinds_of_coins); // Use at least one coin of first denomination
}

function first_denonination(kinds_of_conis) {
  return kinds_of_conis === 1
    ? 1
    : kinds_of_conis === 2
    ? 5
    : kinds_of_conis === 3
    ? 10
    : kinds_of_conis === 4
    ? 25
    : kinds_of_conis === 5
    ? 50
    : 0;
}

console.log(count_change(100)); // 292
