/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

/**
 * Stats:
 * minutes - 42
 * attempts - 1
 */

 function removeElement(nums, val) {
  const length = nums.length;
  let count = 0;

  for(let i = 0; i < length; i++) {
      const el = nums[i];

      if(el === val) {
          count += 1;
      } else {
          nums[i - count] = el;
      }
  }
  
  return length - count; 
};
