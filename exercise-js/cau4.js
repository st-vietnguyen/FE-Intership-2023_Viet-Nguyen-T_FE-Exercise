// 4. Write a function to get a unique random array number in the specified range.
// Input: (array length, min, max)
// Output: new array
// Ex: (4, 1, 10) => [3, 6, 1, 9]

/**
 * Returns new array get a unique random array number in the specified range.
 *
 * @param {string} str The string
 * @param {number} subStr The sub string to search for
 * @return {number} new array get a unique random array number in the specified range.
 */

function getRandom(length, min, max) {
  let result = [],
    temp,
    flag;
  for (let i = 0; i < length; i++) {
    do {
      flag = 1;
      temp = Math.floor(Math.random() * (max - min) + min);
      for (let j = 0; j < result.length; j++) {
        if (result[j] === temp) {
          flag = 0;
        }
      }
    } while (!flag);
    result.push(temp);
  }
  return result;
}

console.log(getRandom(4, 1, 10));
