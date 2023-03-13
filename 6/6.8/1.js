// 1
function printNumbers(from, to) {
  const interval = setInterval(() => {
    console.log(from);
    if (from == to) clearInterval(interval);
    from++;
  }, 1000);
}

printNumbers(10, 15);

// 2
function printNumbers(from, to) {
  setTimeout(function showTimer() {
    console.log(from);
    if (from < to) {
      setTimeout(showTimer, 1000);
    }
    from++;
  }, 1000);
}
printNumbers(10, 15);
