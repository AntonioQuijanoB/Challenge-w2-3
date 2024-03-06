import { arrayLength, evenOrOdd } from './make_test.js';

test('I give it parameter 2 so that it returns even', () => {
  const x = 2;
  const expected = 'Even [Par]';
  const r = evenOrOdd(x);
  expect(r).toBe(expected);
});

test('I give it parameter 3 so that it returns Odd', () => {
  const x = 3;
  const expected = 'Odd [Impar]';
  const r = evenOrOdd(x);
  expect(r).toBe(expected);
});

test('I give it parameter 50 so that it returns even', () => {
  const x = 50;
  const expected = 'Even [Par]';
  const r = evenOrOdd(x);
  expect(r).toBe(expected);
});

describe.only('arrayLength', () => {
  test('should be 0 when argument is []', () => {
    const x = [];
    const expected = 0;
    const r = arrayLength(x);
    expect(r).toBe(expected);
  });
});

describe.only('arrayLength', () => {
  test('should be 1 when argument is [6]', () => {
    const x = [6];
    const expected = 1;
    const r = arrayLength(x);
    expect(r).toBe(expected);
  });
});

describe.only('arrayLength', () => {
  test('should be 1 when argument is [6, 6, 6]', () => {
    const x = [6, 6, 6];
    const expected = 3;
    const r = arrayLength(x);
    expect(r).toBe(expected);
  });
});
