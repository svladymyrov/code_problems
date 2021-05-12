/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
*/

/**
 * Stats:
 * minutes - 35
 * attempts - 3
 */

function duplicateZeros(arr) {
  const arrLength = arr.length;

  for(let i = 0; i < arrLength; i++) {
      if(arr[i] === 0) {
          arr.splice(i+1, 0, 0);
          arr.splice(arrLength);
          i += 1;
      }
  }
};
