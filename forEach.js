function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
  return arr;
}

function callback(item, index, arr) {
  return item;
}

const arr = [1, 2, 3, 4];
forEach(arr, callback);
