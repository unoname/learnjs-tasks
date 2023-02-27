function sumInput() {
  const arr = [];
  let sum = 0;
  while (true) {
    let value = prompt('Введите значение');
    if (value === '' || value === null || !isFinite(value)) break;
    arr.push(+value);
    sum += +value;
  }
  return sum;
}

alert(sumInput());
