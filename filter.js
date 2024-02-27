function filterMethod(callback, arr) {
  const arr1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      arr1.push(arr[i]);
    }
  }
  return arr1;
}

function callback(item, index, arr) {
  return item % 2;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterMethod(callback, arr));
