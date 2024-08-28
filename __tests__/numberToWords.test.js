// numberToWords.test.js

const numberToWords = require('../script');

test('converts 0 to zero', () => {
  expect(numberToWords(0)).toBe('zero');
});

test('converts 15 to fifteen', () => {
  expect(numberToWords(15)).toBe('fifteen');
});

test('converts 35 to thirty five', () => {
  expect(numberToWords(35)).toBe('thirty-five');
});

test('converts 146 to one hundred and fourty six', () => {
  expect(numberToWords(146)).toBe('one hundred and fourty-six');
});

test('converts 1000 to one thousand', () => {
  expect(numberToWords(1000)).toBe('one thousand');
});

test('converts 10000 to ten thousand', () => {
  expect(numberToWords(10000)).toBe('ten thousand');
});

test('converts 10500 to ten thousand', () => {
  expect(numberToWords(10000)).toBe('ten thousand five hundred');
});

test('returns error message for numbers out of range or invalid input', () => {
  expect(numberToWords(2500000)).toBe('Enter a number between 1 and 100,000');
  expect(numberToWords('abc')).toBe('Enter a number between 1 and 100,000');
});
