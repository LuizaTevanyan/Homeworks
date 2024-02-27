function findMethod(callback, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return arr[i];
    }
  }
}

function callback(item, index, arr) {
  return item === 2;
}

const arr = [1, 2, 3, 4];
console.log(findMethod(callback, arr));
