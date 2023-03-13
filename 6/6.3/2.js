function inBetween(a, b) {
  return function (num) {
    return num >= a && x <= b;
  };
}
function inArray(array) {
  return function (elem) {
    return array.includes(elem);
  };
}
