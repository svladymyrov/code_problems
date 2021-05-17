/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * Stats:
 * minutes - 28
 * attempts - 1
 */

 function removeDuplicates(nums) {
  let pointer = 1;

  for(let i = 1; i < nums.length; i++) {
      const num = nums[i];

      if(nums[i - 1] !== num) {
          nums[pointer] = num
          pointer += 1;
      }
  }
  
  return pointer;
};
