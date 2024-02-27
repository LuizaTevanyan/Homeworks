function mapMethod(arr, callback) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(callback(arr[i]));
  }
  return newArr;
}

function callback(item, index, arr) {
  return item * item;
}

const arr = [1, 2, 3, 4];
console.log(mapMethod(arr, callback));
