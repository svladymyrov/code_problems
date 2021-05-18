/**
 * @param {number[]} arr
 * @return {number[]}
 */


/**
 * Stats:
 * minutes - 24
 * attempts - 1
 */

function replaceElements(arr) {
  if(arr.length < 2) {
    arr[0] = -1;
  }

  for(let i = 0; i < arr.length; i++) {
    if(arr.length - 1 === i) {
      arr[i] = -1;
      break;
    }

    let num = 0;

    for(let j = i + 1; j < arr.length; j++) {
      if(arr[j] > num) {
          num = arr[j];
      }
    }

    arr[i] = num;
  }
     
  return arr;
};
