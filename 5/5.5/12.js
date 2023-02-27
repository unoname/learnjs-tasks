function unique(arr) {
  let uniqueArr = [];
  arr.map(elem => {
    if (!uniqueArr.includes(elem)) uniqueArr.push(elem);
  });
  return uniqueArr;
}
let strings = [
  'кришна',
  'кришна',
  'харе',
  'харе',
  'харе',
  'харе',
  'кришна',
  'кришна',
  ':-O',
];
console.log(unique(strings));
