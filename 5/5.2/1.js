function readNumber() {
  do {
    num = +prompt('Введите число');
  } while (!isFinite(num));
  return num === null || num === '' ? null : +num;
}
