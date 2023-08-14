// 7. Write a function to find the maximum sum of 2 consecutive elements in the array.
// Input: (array)
// Output: number
// Ex: ([1, 2, 3, 4, 5, 6, 7]) => 13
// Ex: ([1, 2, 3, 7, 5, 6, 4]) => 12

function maximumSumOfConsecutive(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    let sum = arr[i] + arr[i + 1];
    if (sum > result) {
      result = sum;
    }
  }
  return result;
}

console.log(maximumSumOfConsecutive([1, 2, 3, 7, 5, 6, 4]));
