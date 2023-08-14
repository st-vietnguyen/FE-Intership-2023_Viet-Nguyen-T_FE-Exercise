// 3. Write a JavaScript function to truncate a string to a certain number of words.
// Input: (string, number)
// Output: new string

/**
 * Returns a string of n characters truncated from the original string
 *
 * @param {string} str The string
 * @param {number} number length of new string
 * @return {number} a string of n characters truncated from the original string
 */

function truncateString(string, number = 0) {
  let arr = string.split(" ");
  let result = "";
  let subResult = [];
  for (let i = 0; i < number; i++) {
    subResult.push(arr[i]);
  }
  result = subResult.join(" ");
  return result;
}

console.log(truncateString("The quick brown fox jumps over the lazy dog", 4));
