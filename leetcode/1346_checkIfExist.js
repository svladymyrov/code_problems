/**
 * @param {number[]} arr
 * @return {boolean}
 */

/**
 * Stats:
 * minutes - 21
 * attempts - 3
 */

function checkIfExist(arr) {
  for(let i = 0; i < arr.length; i++) {
      for(let j = i + 1; j < arr.length; j++) {   
          if(arr[i] === arr[j] * 2 || arr[j] === arr[i] * 2) return true;
      }
  }

  return false;
};
