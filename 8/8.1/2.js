let hamster = {
  stomach: [],

  eat(food) {
    this.stomach.push(food);
  },
};

let speedy = {
  stomach: [], // добавлено
  __proto__: hamster,
};

let lazy = {
  stomach: [], // добавлено
  __proto__: hamster,
};

// Этот хомяк нашёл еду
speedy.eat('apple');
alert(speedy.stomach); // apple

// У этого хомяка тоже есть еда. Почему? Исправьте
alert(lazy.stomach); // apple
