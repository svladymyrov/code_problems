const isValid = require('../../leetcode/20_validParentheses');

describe('[leetcode] 20 validParentheses', () => {
  test('positive (), [], {}', () => {
    expect(isValid('()[]{}')).toBe(true);
  });

  test('negative (())}', () => {
    expect(isValid('(())}')).toBe(false);
  });

  test('negative ][', () => {
    expect(isValid('][')).toBe(false);
  });

  test('negative [(){}]', () => {
    expect(isValid('[(){}]')).toBe(true);
  });

  test('negative [', () => {
    expect(isValid('[')).toBe(false);
  });
});
