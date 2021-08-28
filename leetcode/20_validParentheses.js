function isValid(string) {
  const stack = [];
  const map = { '(' : ')', '[': ']', '{': '}' };
  const isOpening = s => '([{'.includes(s);


  for (let i = 0; i < string.length; i++) {
    const element = string[i];
    const top = stack[stack.length - 1];

    if (isOpening(element)) {
      stack.push(element);
    } else {
      if (map[top] !== element) return false;
      stack.pop();
    }
  }

  return !stack.length;
}

module.exports = isValid;
