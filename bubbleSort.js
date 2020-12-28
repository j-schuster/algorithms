/*
  SORTS AN ARRAY 
  BIG O = WORSTE CASE: O(N2), BEST CASE: O(2N)
*/

const bubbleSort = (arr = []) => {

  if (!Array.isArray(arr)) throw 'argument arr must be an array!';

  let noSwaps; // IF NO SWAPS THEN WE'RE DONE

  for (let i = arr.length; i >= 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}


console.log(sort([8, 1, -2, 10, 3, 11, 2, 34]));
