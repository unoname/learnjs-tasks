Function.prototype.defer = function (ms) {
  let currentThis = this;
  return function wrapper(...args) {
    setTimeout(currentThis.bind(null, ...args), ms);
  };
};
function f(a, b) {
  console.log(a + b);
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду
