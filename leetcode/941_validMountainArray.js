/**
 * @param {number[]} arr
 * @return {boolean}
 */

function validMountainArray(arr) {
  if(arr.length < 3) { return false; }
  
  let isUp = true;
  let prevVal;
  
  for(let i = 0; i < arr.length; i++) {
      const num = arr[i];
      if(prevVal === num) { return false; }
      
      if(isUp && prevVal > num) {
          if(i === 1) return false;
          isUp = false;
      }
      
      if(!isUp && prevVal < num) { return false; }

      prevVal = num;
  }
  
  return !isUp;
};
