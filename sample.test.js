import { arrayLength, arrayPush, indexOf } from './sample.js';

describe('arrayLength', () => {
  test('should be 0 when argument is []', () => {
    const x = [];
    const expected = 0;
    const r = arrayLength(x);
    expect(r).toBe(expected);
  });

  test('should be 1 when argument is [6]', () => {
    const x = [6];
    const expected = 1;
    const r = arrayLength(x);
    expect(r).toBe(expected);
  });

  test('should be 1 when argument is [6, 6, 6]', () => {
    const x = [6, 6, 6];
    const expected = 3;
    const r = arrayLength(x);
    expect(r).toBe(expected);
  });
});

describe('arrayPush', () => {
  test('it should return [5,6,7] when array is [5,6] and element is 7', () => {
    const x = [5, 6];
    const y = 7;
    const expected = 3;
    const r = arrayPush(x, y);
    expect(r).toBe(expected);
  });

  test('it should return [13,25,32,54,76,43] when array is [13,25,32,54,76] and element is 43', () => {
    const x = [13, 25, 32, 54, 76];
    const y = 43;
    const expected = 6;
    const r = arrayPush(x, y);
    expect(r).toBe(expected);
  });

  test('it should return ["perro","gato","elefante"] when array is ["perro","gato"] and element is "elefante"', () => {
    const x = ['perro', 'gato'];
    const y = 'elefante';
    const expected = 3;
    const r = arrayPush(x, y);
    expect(r).toBe(expected);
  });
});

describe('indexOf', () => {
  test('it should return 0 when array is ["perro","gato"] and element is perro', () => {
    const x = ['perro', 'gato'];
    const y = 'perro';
    const expected = 0;
    const r = indexOf(x, y);
    expect(r).toBe(expected);
  });

  test('it should return 3 when array is [13,25,32,54,76] and element is 54', () => {
    const x = [13, 25, 32, 54, 76];
    const y = 54;
    const expected = 3;
    const r = indexOf(x, y);
    expect(r).toBe(expected);
  });

  test('it should return ["perro","gato","elefante"] when array is ["perro","gato"] and element is "elefante"', () => {
    const x = ['perro', 'gato', 'elefante'];
    const y = 'elefante';
    const expected = 2;
    const r = indexOf(x, y);
    expect(r).toBe(expected);
  });
});
