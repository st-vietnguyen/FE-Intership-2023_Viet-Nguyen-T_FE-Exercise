// 7. Write a function to find the maximum sum of 2 consecutive elements in the array.
// Input: (array)
// Output: number
// Ex: ([1, 2, 3, 4, 5, 6, 7]) => 13
// Ex: ([1, 2, 3, 7, 5, 6, 4]) => 12

/**
 * Returns maximum sum of 2 consecutive elements in the array.
 *
 * @param {array} str The array
 * @return {number} maximum sum of 2 consecutive elements in the array.
 */

function maximumSumOfConsecutive(arr) {
  let result = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    result  = Math.max(arr[i] + arr[i + 1],result);
  }
  return result;
}

console.log(maximumSumOfConsecutive([1, 2, 3, 7, 5, 6, 4]));
