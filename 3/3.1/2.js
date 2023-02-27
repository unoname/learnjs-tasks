describe('Возводит x в степень n', function () {
  it('Возводит 5 в степень 1', function () {
    assert.equal(pow(x, 1), 5);
  });

  it('Возводит 5 в степень 2', function () {
    assert.equal(pow(x, 2), 25);
  });

  it('Возводит 5 в степень 3', function () {
    assert.equal(pow(x, 3), 125);
  });
});
