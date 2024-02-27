function everyMethod(callback, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i, arr)) {
      return false;
    }
  }
  return true;
}

function callback(item, index, arr) {
  return item % 2;
}

const arr = [1, 3, 5, 7];
console.log(everyMethod(callback, arr));
