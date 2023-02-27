function copySorted(arr) {
  return arr.slice(0).sort();
}
let arr = ['HTML', 'JavaScript', 'CSS'];

let sorted = copySorted(arr);

console.log(sorted);
