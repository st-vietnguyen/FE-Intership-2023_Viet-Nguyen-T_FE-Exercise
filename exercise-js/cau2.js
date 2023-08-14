// 2. Write a JavaScript function to count the occurrence of a substring in a string.
// Input: (string, substring)
// Output: the occurrence of a substring in a string
// Ex: ("The quick brown fox jumps over the lazy dog", 'the') => 2
// Ex: ("The quick brown fox jumps over the lazy dog", 'fox') => 1

function countOccurrenceSubstring(string, substring) {
  let arr = string.split(" ");
  let count = 0;
  arr.forEach((element) => {
    if (element.toLowerCase() === substring.toLowerCase()) {
      count++;
    }
  });
  return count;
}

console.log(
  countOccurrenceSubstring("The quick brown fox jumps over the lazy dog", "fox")
);
