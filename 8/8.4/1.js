let dictionary = Object.create(null, {
  toString: {
    keys: () => {
      return Object.keys(this).join();
    },
  },
});

// добавляем немного данных
dictionary.apple = 'Apple';
dictionary.__proto__ = 'test'; // здесь __proto__ -- это обычный ключ

// только apple и __proto__ выведены в цикле
for (let key in dictionary) {
  console.log(key); // "apple", затем "__proto__"
}

// ваш метод toString в действии
// alert(dictionary); // "apple,__proto__"
console.log(dictionary); // [Object: null prototype] { apple: 'Apple', ['__proto__']: 'test' }
