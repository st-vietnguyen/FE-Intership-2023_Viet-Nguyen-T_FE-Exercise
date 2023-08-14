// 8. Write a function to find the new time after a specified time from the given time.
// Input: (givenTime string, period number(s))
// Output: newTime string
// Ex: ('12:30:29', 600) => '12:40:29'
// Ex: ('23:30:29', 6000) => '01:10:29'

/**
 * Returns the new time after a specified time from the give time.
 *
 * @param {string} time The string
 * @param {number} secondsInput The seconds
 * @return {number} the new time after a specified time from the give time.
 */

function findNewTime(time, secondsInput) {
  return (new Date((Date.parse(`08/04/2023 ${time}`) / 1000 + secondsInput) * 1000)).toLocaleTimeString('vi-VN')
}

console.log(findNewTime("23:30:29", 6000));
