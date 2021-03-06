/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * Stats:
 * minutes - 15
 * attempts - 1
 */

function findNumbers(nums) {
  let count = 0;

  for(let i = 0; i < nums.length; i++) {
    const stringifiedNum = nums[i] + '';
    if(stringifiedNum.length % 2 === 0) {
      count += 1;
    }
  }
  
  return count;
};
