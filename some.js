function everyMethod(callback, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
}

function callback(item, index, arr) {
  return item % 3 === 0;
}

const arr = [1, 3, 5, 2];
console.log(everyMethod(callback, arr));
