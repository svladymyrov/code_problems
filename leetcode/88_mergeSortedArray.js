/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

/**
 * Stats:
 * minutes - 31
 * attempts - 4
 */

function merge(nums1, m, nums2, n) {
  if(n > 0) {
    for(let i = 0; i < n; i++) {
      nums1[m + i] = nums2[i];
    }
  
    nums1.sort((a, b) => a - b);        
  }
};
