const value = {};
function A() {
  return value;
}
function B() {
  return value;
}

let a = new A();
let b = new B();
console.log(a == b); // true
