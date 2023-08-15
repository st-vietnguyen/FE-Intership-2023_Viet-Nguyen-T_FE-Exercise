// 5. Write a function to generate a random hexa color code.
// Input: ()
// Output: string
// Ex: () => #1A7B9D

/**
 * Returns the string random hexa color code.
 *
 * @return {string} the string random hexa color code.
 */

function generateRandomHexColor() {
  return `#${Math.random().toString(16).slice(9)}`;
}

console.log(generateRandomHexColor());
