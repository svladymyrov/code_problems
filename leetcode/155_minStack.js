/**
  Runtime: 851 ms
  Memory Usage: 56.6 MB
*/

class MinStack {
  constructor() {
    this.stack = [];
    this.minValue = undefined;
  }

  push(item) {
    this.stack.push(item);
    this.minValue = this.stack.slice().sort((a, b) => a - b)[0];
  }

  pop() {
    if (this.stack.pop() === this.minValue) {
      this.minValue = this.stack.slice().sort((a, b) => a - b)[0];
    }
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minValue;
  }
};

module.exports = MinStack;
