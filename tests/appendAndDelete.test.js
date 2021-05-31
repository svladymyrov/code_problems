const appendAndDelete = require('../hackerrank/appendAndDelete');

describe('Exact', () => {
  test('[abc, abc, 6] = Yes', () => {
    expect(appendAndDelete('abc', 'abc', 6)).toBe('Yes');
  });
});

describe('Different', () => {
  test('[cd, fg, 5] = Yes', () => {
    expect(appendAndDelete('cd', 'fg', 5)).toBe('Yes');
  });
  test('[cd, fg, 3] = No', () => {
    expect(appendAndDelete('cd', 'fg', 3)).toBe('No');
  });
});

describe('Common left', () => {
  test('[ash, ashley, 3] = Yes', () => {
    expect(appendAndDelete('ash', 'ashley', 3)).toBe('Yes');
  });
  test('[ash, ashley, 2] = No', () => {
    expect(appendAndDelete('ash', 'ashley', 2)).toBe('No');
  });
  test('[ash, ashley, 4] = No', () => {
    expect(appendAndDelete('ash', 'ashley', 4)).toBe('No');
  });

  test('[hackerhappy, hackerrank, 9] = Yes', () => {
    expect(appendAndDelete('hackerhappy', 'hackerrank', 9)).toBe('Yes');
  });


  test('[aaa, aa, 3] = Yes', () => {
    expect(appendAndDelete('aaa', 'aa', 3)).toBe('Yes');
  });

  test('[ashleyz, ashs, 3] = No', () => {
    expect(appendAndDelete('ashleyz', 'ashs', 3)).toBe('No');
  });

  test('[asdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv, asdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv] = Yes', () => {
    expect(appendAndDelete('asdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv', 'asdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv', 20)).toBe('Yes');
  });
});

