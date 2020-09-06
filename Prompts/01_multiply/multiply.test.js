const { multiply } = require('./multiply');

describe('multiply testing', () => {
  test('it should ensure it receives two numbers', () => {
    // test some values that should fail

    expect(() => multiply('hello',3)).toBe('input is not a number');

    expect(() => multiply(4,'2')).toBe('input is not a number');
  });

  test('it returns the product of two numbers', () => {
    // test the type of the returned value
    expect(multiply(2,3)).toBe(6);

    // test that the returned value is correct
    expect(multiply(9,9)).toBe(81);

    // test some other values
    expect(multiply(15,15)).toBe(225);
  });

  test('it is not hardcoded (hint: use random numbers)', () => {
    a = Math.random()
    b = Math.random()
    expect(multiply(a,b)).toBe(a*b);
  });
});
