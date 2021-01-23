/*
    Sorts data in a different and can only be performed on a list of numbers
    It does not make comparisons
    It orgninizes numbers by looking at the amount of numbers in the number
    Thus, any three number digit will be more than any 2 digit number
    We sort these into 10 buckets (base 10) according to the last number on the right

    BigO = o(nk)

    not ideal if numbers are very large 
 */


function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

function radixSort(nums) {
  let maxDigitCount = mostDigits(nums);
  
  for(k = 0; k < maxDigitCount; k++){
    const buckets = Array.from({ length: 10 }, () => []);
    for(let i = 0; i < nums.length; i++){
      const digit = getDigit(nums[i], k);
      buckets[digit].push(nums[i]);
    }
    nums = [].concat(...buckets);
  }
  return nums;
}

console.log(radixSort([311,43462,54, 3, 19, 29475, 78, 4,2425245]));