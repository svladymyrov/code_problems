/**
 * @param {number[]} nums
 * @return {number}
 */

const findMaxConsecutiveOnes = function(nums) {
  if (nums.length < 1) {
      return 0;
  }

  let prevCounts = {};
  let count = 0;

  for(let i = 0; i < nums.length; i++) {
      const num = nums[i];
      if(num > 0) {
          count += 1;
      } else {
          prevCounts[i] = count;
          count = 0;
      }
  }
  
  let max = 0;
  
  for(key in prevCounts) {
      const value = prevCounts[key]
      if(value > max) {
          max = value;
      }
  }

  return count > max ? count : max;
};
