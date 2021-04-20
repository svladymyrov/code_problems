/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function twoSum(nums, target) {
  for(let i = 0; i < nums.length; i++) {
    for(let j = i + 2; j < nums.length; j+=2) {
      if(nums[i] + nums[j] === target) { return [i, j]; }
    }
  }
};
