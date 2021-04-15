/**
 * @param {number[]} nums
 * @return {number[]}
 */

function sortedSquares(nums) {
  const square = num => num * num;
  
  for(let i = 0; i < nums.length; i++) {
    nums[i] = square(nums[i]);
  }
  
  nums.sort((a, b) => a - b);
  
  return nums;
};

// TODO: implement "Two pointer" approach
