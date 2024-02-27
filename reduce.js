function reduceMethod(callback, arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = callback(sum, arr[i], i, arr);
  }
  return sum;
}

function callback(acc, item, index, arr) {
  return acc + item;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(reduceMethod(callback, arr));
