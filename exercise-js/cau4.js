// 4. Write a function to get a unique random array number in the specified range.
// Input: (array length, min, max)
// Output: new array
// Ex: (4, 1, 10) => [3, 6, 1, 9]

function getRandom(length, min, max) {
  let result = [];
  for (let i = 0; i < length; i++) {
    let temp = Math.floor(Math.random() * (max - min) + min);
    while (result.includes(temp)) {
      temp = Math.floor(Math.random() * (max - min) + min);
    }
    result.push(temp);
  }
  return result;
}

console.log(getRandom(3, 1, 10));
