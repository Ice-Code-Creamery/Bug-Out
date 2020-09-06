const { makeyourown } = require('./makeyourown');

describe('makeyourown functionality', () => {
  it('adds numbers', () => {
    expect(makeyourown(1,1)).toEqual(2);
  });
});
