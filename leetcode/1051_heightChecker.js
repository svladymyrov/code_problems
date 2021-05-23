/**
 * @param {number[]} heights
 * @return {number}
 */

/**
 * Stats:
 * minutes - 32
 * attempts - 2
 */

function heightChecker(heights) {
  const expected = [...heights];
  expected.sort((a,b) => a - b);
  
  let count = 0;
  
  for(let i = 0; i < heights.length; i++) {
      if(expected[i] !== heights[i]) count += 1;
  }

  return count;
};
