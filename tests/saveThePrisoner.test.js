const saveThePrisoner = require('../hackerrank/saveThePrisoner');

test('4,6,2 = 3', () => {
  expect(saveThePrisoner(4,6,2)).toBe(3);
});

test('5,2,1 = 2', () => {
  expect(saveThePrisoner(5,2,1)).toBe(2);
});

test('5,2,2 = 3', () => {
  expect(saveThePrisoner(5,2,2)).toBe(3);
});

test('7,19,2 = 6', () => {
  expect(saveThePrisoner(7, 19, 2)).toBe(6);
});

test('3,7,3 = 3', () => {
  expect(saveThePrisoner(3,7,3)).toBe(3);
});

test('1,1,1 = 1', () => {
  expect(saveThePrisoner(1,1,1)).toBe(1);
});

test('4,4,2 = 1', () => {
  expect(saveThePrisoner(4,4,2)).toBe(1);
});

test('4,4,1 = 4', () => {
  expect(saveThePrisoner(4,4,1)).toBe(4);
});

test('1,2,1 = 1', () => {
  expect(saveThePrisoner(1,2,1)).toBe(1);
});

test('2,1,1 = 1', () => {
  expect(saveThePrisoner(2,1,1)).toBe(1);
});

test('2,1,2 = 2', () => {
  expect(saveThePrisoner(2,1,2)).toBe(2);
});

test('7,5,6 = 3', () => {
  expect(saveThePrisoner(7,5,6)).toBe(3);
});

test('7,2,2 = 3', () => {
  expect(saveThePrisoner(7,2,2)).toBe(3);
});

