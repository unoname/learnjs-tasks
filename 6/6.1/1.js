// with for
function sumTo(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  return result;
}

// with recursive
function sumTo(n) {
  if (n == 1) return 1;
  return n + sumTo(n - 1);
}

// with arithmetic progression
function sumTo(n) {
  return (n * (n + 1)) / 2;
}
