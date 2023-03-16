function debounce(f, ms) {
  let isCalled = false;

  return function () {
    if (isCalled) return;

    f.apply(this, arguments);

    isCalled = true;

    setTimeout(() => (isCalled = false), ms);
  };
}
