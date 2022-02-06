const makeTree = require('../q_problem');

const INPUT = [
  { id: 1, parent: null },
  { id: 2, parent: 1 },
  { id: 3, parent: null },
  { id: 4, parent: 5 },
  { id: 5, parent: 1 },
]
const OUTPUT = {
  '1': {
    '2': {},
    '5': { '4': {} }
  },
  '3': {}
}

describe('Q problem', () => {
  test('positive', () => {
    expect(makeTree()).toEqual(OUTPUT);
  });
});