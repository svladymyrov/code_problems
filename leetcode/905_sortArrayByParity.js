/**
 * @param {number[]} nums
 * @return {number[]}
 */

/**
 * Stats:
 * minutes - 24
 * attempts - 2
 */

function sortArrayByParity(nums) {
  let p = 0;
  for(let i = 0; i < nums.length; i++) {
      const num = nums[i];
      if(num % 2 === 0) {
          nums[i] = nums[p];
          nums[p] = num;
          p += 1;
      }
  }
  return nums;
};
