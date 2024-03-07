export function arrayLength(array) {
  let i = 0;
  for (const item of array) {
    i++;
  }

  return i;
}

export function arrayPush(array, ...elements) {
  /* Array[arrayLength(newArray)] = element
  return arrayLength(array); */
  const elementLength = elements.length;
  for (let i = 0; i < elementLength; i++) {
    array[arrayLength(array)] = elements[i];
  }

  return arrayLength(array);
}

export function indexOf(arr, element) {
  let elementIndex = -1;
  for (let i = 0; i < arrayLength(arr); i++) {
    if (element === arr[i]) {
      elementIndex = i;
    }
  }

  return elementIndex;
}

export function shift(arr) {
  if (arr.length === 0) return undefined;

  const removedElement = arr[0];
  for (let i = 0; i < arr.length - 1; i++) {
    arr[i] = arr[i + 1];
  }

  arr.length--;

  return removedElement;
}

export function some(arr, callbackFunction) {
  for (const element of arr) {
    if (callbackFunction(element)) return true;
  }

  return false;
}

export function map(arr, callbackFunction) {
  const newArr = [];
  for (const element of arr) {
    arrayPush(newArr, callbackFunction(element));
  }

  return newArr;
}

export function includes(element) {
  const compareArray = ['pikachu', 'charmeleon', 'charmander'];

  for (const arrayElement of compareArray) {
    if (arrayElement === element) {
      return true;
    } else {
      return false;
    }
  }
}

export const filter = (arr, conditionFunc) => {
  let newArray = [];
  for (const element of arr) {
    if (conditionFunc(element)) {
      arrayPush(newArray, element);
    }
  }
  return newArray;
};

export const find = (arr, conditionFunc) => {
  let firstSuit;
  for (const element of arr) {
    if (conditionFunc(element)) {
      firstSuit = element;
      break;
    }
  }
  return firstSuit;
};
