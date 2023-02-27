function Calculator() {
  (this.read = function () {
    this.x = +prompt('x:');
    this.y = +prompt('y:');
  }),
    (this.sum = function () {
      return this.x + this.y;
    });
  this.mul = function () {
    return this.x * this.y;
  };
}
let calculator = new Calculator();
calculator.read();

console.log('Sum=' + calculator.sum());
console.log('Mul=' + calculator.mul());
