// 2. Write a JavaScript function to count the occurrence of a substring in a string.
// Input: (string, substring)
// Output: the occurrence of a substring in a string
// Ex: ("The quick brown fox jumps over the lazy dog", 'the') => 2
// Ex: ("The quick brown fox jumps over the lazy dog", 'fox') => 1


/**
 * Returns number of occurrences of substring in string.
 *
 * @param {string} str The string
 * @param {string} subStr The sub string to search for
 * @return {number} number of occurrences of substring in string.
 */



function countOccurrenceSubstring(str, subStr) {
  let count = str.split(subStr).length - 1;
  return count;
}

console.log(countOccurrenceSubstring("The quick brown fox jumps over the lazy dog", "lazy dog"));
