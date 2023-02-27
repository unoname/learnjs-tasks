let n = 100;
for (let i = 2; i <= n; i++) {
  simple: for (let j = 2; j <= i; j++) {
    if (i % j === 0) {
      if (j === i) {
        console.log(i); // alert(i)
      }
    } else {
      continue;
    }
    break simple;
  }
}
