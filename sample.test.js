import {
  arrayLength,
  arrayPush,
  indexOf,
  shift,
  some,
  map,
  filter,
  find,
  includes,
} from './sample.js';

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
  test('it should return 3 when array is [5,6] and element is 7', () => {
    const x = [5, 6];
    const y = 7;
    const expected = 3;
    const r = arrayPush(x, y);
    expect(r).toBe(expected);
  });

  test('it should return 6 when array is [13,25,32,54,76] and element is 43', () => {
    const x = [13, 25, 32, 54, 76];
    const y = 43;
    const expected = 6;
    const r = arrayPush(x, y);
    expect(r).toBe(expected);
  });

  test('it should return 3 when array is ["perro","gato"] and element is "elefante"', () => {
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

  test('it should return 2 when array is ["perro","gato","elefante"] and element is "elefante"', () => {
    const x = ['perro', 'gato', 'elefante'];
    const y = 'elefante';
    const expected = 2;
    const r = indexOf(x, y);
    expect(r).toBe(expected);
  });
});

describe('shift', () => {
  test('should return undefined when used a empty array', () => {
    const x = [];
    const expected = undefined;
    const r = shift(x);
    expect(r).toBe(expected);
  });
  test('should return "coche" when the argument is ["coche", "moto", "avion"]', () => {
    const x = ['coche', 'moto', 'avion'];
    const expected = 'coche';
    const r = shift(x);
    expect(r).toBe(expected);
  });
  test('should return undefined when the argument is [undefined, undefined, undefined]', () => {
    const x = [undefined, undefined, undefined];
    const expected = undefined;
    const r = shift(x);
    expect(r).toBe(expected);
  });
});

describe('some', () => {
  test('should return true when arguments are [3, 5, 8, 1] and (element) => element % 2 === 0', () => {
    const x = [3, 5, 8, 1];
    const y = (element) => element % 2 === 0;
    const expected = true;
    const r = some(x, y);
    expect(r).toBe(expected);
  });
});

describe('map', () => {
  test('it should return [4, 6, 8, 10] when array is [2, 3, 4, 5] and func is (x) => x * 2', () => {
    const x = [2, 3, 4, 5];
    const y = (x) => x * 2;
    const expected = [4, 6, 8, 10];
    const result = map(x, y);
    expect(result).toStrictEqual(expected);
  });
  test('it should return [10, 12, 18, 20] when array is [5, 6, 9, 10] and func is (x) => x * 2', () => {
    const x = [5, 6, 9, 10];
    const y = (x) => x * 2;
    const expected = [10, 12, 18, 20];
    const result = map(x, y);
    expect(result).toStrictEqual(expected);
  });
});

describe('find', () => {
  test('it should return 12 when array is [5, 12, 8, 130, 44] and func is (element) => element > 10)', () => {
    const x = [5, 12, 8, 130, 44];
    const y = (element) => element > 10;
    const expected = 12;
    const result = find(x, y);
    expect(result).toStrictEqual(expected);
  });
});

describe('filter', () => {
  test('it should return ["caballo", "rinoceronte", "jirafa"] when array is ["caballo", "rinoceronte", "pez", "jirafa", "boa"] and function is (word) => word.length > 3)', () => {
    const x = ['caballo', 'rinoceronte', 'pez', 'jirafa', 'boa'];
    const y = (word) => word.length > 3;
    const expected = ['caballo', 'rinoceronte', 'jirafa'];
    const result = filter(x, y);
    expect(result).toStrictEqual(expected);
  });
});

describe('includes', () => {});
