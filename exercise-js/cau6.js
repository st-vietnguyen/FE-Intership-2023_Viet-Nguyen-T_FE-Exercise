// 6. Write a function that calculates the sum of the ordered elements that are divisible by a specified number in the array.
// Input: (array, number)
// Output: number
// Ex: ([1, 2, 3, 4, 5, 6, 7], 2) => 12
// Ex: ([1, 2, 3, 4, 5, 6, 7], 3) => 9

function sumOfNumber(arr, num) {
  let arrValid = arr.filter((n) => n % num === 0);
  let result = arrValid.reduce((acc, cur) => acc + cur, 0);
  return result;
}

console.log(sumOfNumber([2, 3, 3], 2));
