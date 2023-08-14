// 1. Write a JavaScript function to repeat a string a specified times.
// Input: (string, repeat times)
// Output: the new string
// Ex: ("FE", 4) => 'FEFEFEFE'

/**
 * Returns string repeat a specified times.
 *
 * @param {string} str the string.
 * @param {number} num The specified times
 * @return {string} str repeat to the num
 */



function repeatString(str, num) {
  return str.repeat(num);
}

console.log(repeatString("FE", 4));
