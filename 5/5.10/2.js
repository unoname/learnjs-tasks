function topSalary(salaries) {
  if (Object.keys(salaries).length) {
    let [[max]] = Object.entries(salaries).sort((a, b) => b[1] - a[1]);
    return max;
  }
  return null;
}
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
console.log(topSalary({}));
console.log(topSalary(salaries));
