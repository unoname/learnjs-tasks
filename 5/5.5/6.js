function Calculator() {
  this.methods = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  };
  this.calculate = str => {
    let arr = str.split(' ');
    let a = +arr[0],
      b = +arr[2],
      operator = arr[1];
    if (!this.methods[operetor] || isNaN(a) || isNaN(b)) {
      return NaN;
    }
    return this.methods[operator](a, b);
  };
  this.addMethod = (name, fn) => {
    this.methods[name] = fn;
  };
}
let powerCalc = new Calculator();
powerCalc.addMethod('*', (a, b) => a * b);
powerCalc.addMethod('/', (a, b) => a / b);
powerCalc.addMethod('**', (a, b) => a ** b);

let result = powerCalc.calculate('2 ** 3');
alert(result); // 8
