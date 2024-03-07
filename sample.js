export function arrayLength(array) {
  let i = 0;
  for (const item of array) {
    i++;
  }

  return i;
}

export function arrayPush(array, ...elements) {
  /*array[arrayLength(newArray)] = element
  return arrayLength(array);*/
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
