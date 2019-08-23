const getRandomDocs = require('../utils');

test('make large arrays smaller', () => {
  const arr = [1, 2, 3, 4];
  expect(getRandomDocs(arr, 2).length).toBeLessThan(arr.length);
});

test('return an array with length equal to second argument', () => {
  const arr = [1, 2, 3, 4, 5, 6];
  expect(getRandomDocs(arr, 3).length).toBe(3);
});

test('choose random elements for the new array', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  expect(getRandomDocs(arr, 5)).not.toEqual(arr.slice(0, 5));
});

test('original array contains all elements of new array', () => {
  const arr = [1, 2, 3, 4, 5, 6, 7];
  expect(arr).toEqual(expect.arrayContaining(getRandomDocs(arr, 4)));
});