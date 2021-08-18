class MinStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(item) {
    this.stack.push(item);

    if (!this.minStack.length || this.getMin() >= item) {
      this.minStack.push(item);
    }
  }

  pop() {
    if (this.stack.pop() === this.getMin()) {
      this.minStack.pop();
    }
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.minStack[this.minStack.length - 1];
  }
};

module.exports = MinStack;
