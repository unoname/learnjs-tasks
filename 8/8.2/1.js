// правильный вариант
function Example() {
  this.test = 0;
}

let obj = new Example();
let obj2 = new obj.constructor();
console.log(obj2.test); // 0

// неправильный вариант

function Example() {
  this.test = 0;
}
Example.prototype = {};
let obj = new Example();
let obj2 = new obj.constructor();
console.log(obj2.test); // undefined
