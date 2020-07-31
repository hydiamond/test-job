const resoleArr = require('./resoleArray');

test('test resoleArr number', () => {
  expect(resoleArr([1, 2], [3, 4], [5, 6, 7], [8, 9])).toEqual([[1, 3, 5, 8], [2, 4, 6, 9]]);
});


test('test resoleArr number 2', () => {
    expect(resoleArr([1, 2], [3, 4, 5], [6, 7, 8, 9])).toEqual([[1, 3, 6], [2, 4, 7]]);
  });