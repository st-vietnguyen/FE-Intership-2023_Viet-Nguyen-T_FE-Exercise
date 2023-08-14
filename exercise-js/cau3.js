// 3. Write a JavaScript function to truncate a string to a certain number of words.
// Input: (string, number)
// Output: new string

function truncate(string, number = 0) {
  let arr = string.split(" ");
  let result = "";
  let subResult = [];
  for (let i = 0; i < number; i++) {
    subResult.push(arr[i]);
  }
  result = subResult.join(" ");
  return result;
}

console.log(truncate("The quick brown fox jumps over the lazy dog", 4));
