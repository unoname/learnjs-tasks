let calculator = {
  read() {
    this.x = +prompt('x:');
    this.y = +prompt('y:');
  },
  sum() {
    return this.x + this.y;
  },
  mul() {
    return this.x * this.y;
  },
};
