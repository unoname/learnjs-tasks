function delay(f, ms) {
  return function () {
    setTimeout(() => {
      return f.applay(this, arguments);
    }, ms);
  };
}
