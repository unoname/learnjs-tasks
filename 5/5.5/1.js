function camelize(str) {
  return str.split('-').reduce((prev, cur, i) => {
    if (str[0] === '-') {
      if (cur[0]) prev += cur[0].toUpperCase() + cur.slice(1);
    } else {
      if (i == 0) {
        prev += cur;
      } else {
        if (cur[0]) prev += cur[0].toUpperCase() + cur.slice(1);
      }
    }
    return prev;
  }, '');
}

console.log(camelize('background-color')); // == 'backgroundColor';
console.log(camelize('list-style-image')); // == 'listStyleImage';
console.log(camelize('-webkit-transition')); // == 'WebkitTransition';
