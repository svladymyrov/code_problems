/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/**
 * Stats:
 * minutes - 23
 * attempts - 2
 */

 function moveZeroes(nums) {
  let writeP = 0;
  for(let i = 0; i < nums.length; i++) {
    const elem = nums[i];
    if(elem !== 0) {
      nums[writeP] = nums[i];
        
      if(writeP !== i) {
        nums[i] = 0;                
      }

      writeP += 1;
    }
  }
};
