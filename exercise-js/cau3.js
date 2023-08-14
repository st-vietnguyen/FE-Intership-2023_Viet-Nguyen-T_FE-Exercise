// 3. Write a JavaScript function to truncate a string to a certain number of words.
// Input: (string, number)
// Output: new string

/**
 * Returns a string of n characters truncated from the original string
 *
 * @param {string} str The string
 * @param {number} num number of words of new string
 * @return {num} a string of n characters truncated from the original string
 */

function truncateStr(str, num = 0) {
  let arr = str.split(" ");
  let charEnd = str.indexOf(arr[num-1]) + arr[num-1].length;
  return str.substring(0,charEnd);
}

console.log(truncateStr("The quick brown fox jumps over the lazy dog", 4));
