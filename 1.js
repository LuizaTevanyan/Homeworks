// Given a number. Write a recursive function that reverse the number. Return the new
// number.

// function reverseNumber(n) {
//   if (n >= 0 && n < 10) {
//     return n;
//   } else {
//     let numStr = n.toString();
//     let reversedStr =
//       numStr[numStr.length - 1] + reverseNumber(Math.floor(n / 10));

//     return Number(reversedStr);
//   }
// }

// console.log(reverseNumber(34678945));

// Given a number and an array. Find the second occurrence of the number in the array.
// Consider that the occurrence of each element in the array is at least two. (recursive)

// function findOccurenceOfNumber(num, arr, index = 0, count = 0) {
//   if (index === num.length) {
//     return 0;
//   }
//   if (arr[index] === num) {
//     count += 1;
//     if (count === 2) {
//       return index;
//     }
//   }
//   return findOccurenceOfNumber(num, arr, index + 1, count);
// }

// console.log(findOccurenceOfNumber(5, [0, -1, 0, 5, 6, 6, 5, -1, 0, 5, 6]));

// Given a substring and a string. Find how many times the substring occurred in the string.

// function countStrOccurence(subStr, str, count = 0) {
//   if (str.length < subStr.length) {
//     return count;
//   }
//   let subString = str.substring(0, subStr.length);
//   if (subStr === subString) {
//     count += 1;
//   }
//   return countStrOccurence(subStr, str.substring(1), count);
// }

// console.log(countStrOccurence("ook", "facebook looks odd "));

// Given an array of nested arrays. Write a recursive function that flattens it. (Hint creat function that concats arrays).
// works only for first example :)

// function oneArr(arr, index1 = 0, index2 = 0) {
//   if (index1 >= arr.length) {
//     return [];
//   }
//   const arr1 = [];
//   if (Array.isArray(arr[index1])) {
//     arr1.push(arr[index1][index2], arr[index1][index2 + 1]);
//   } else {
//     arr1.push(arr[index1]);
//   }
//   return arr1.concat(oneArr(arr, index1 + 1, index2));
// }
// console.log(oneArr([1, 2, [3, 4], 5]));

// Given a number. Write a function that calculates its sum of the digits and if that sum has
// more than 1 digit find the sum of digits of that number. Repeat that process if needed
// and return the result. (recursive)

// function sumOfDigits(num) {
//   let sum = 0;
//   let num2 = 0;
//   if (num > 0 && num < 10) {
//     return num;
//   } else {
//     while (num > 0) {
//       sum = num % 10;
//       num = Math.floor(num / 10);
//     }
//     return sumOfDigits(sum);
//   }
// }
// console.log(sumOfDigits(99));
