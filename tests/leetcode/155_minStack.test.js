const MinStack = require('../../leetcode/155_minStack');

describe('[leetcode] 155_minStack', () => {
  test('getMin', () => {
    const stack = new MinStack();
    stack.push(5);
    stack.push(2);
    stack.push(4);
    stack.push(3);
    stack.push(-1);
    stack.pop();
    stack.pop();

    expect(stack.getMin()).toBe(2);
  });
});
