function extractCurrencyValue(str) {
  return parseInt(str.slice(1), 10);
}
console.log(extractCurrencyValue('$120') === 120);
