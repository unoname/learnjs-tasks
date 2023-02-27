let styles = ['Джаз', 'Блюз'];
styles.push('Рок-н-Ролл');
let index = Math.floor((styles.length - 1) / 2);
styles[index] = 'Классика';
let firstShift = styles.shift();
console.log(firstShift);
styles.unshift('Рэп', 'Рэгги');
