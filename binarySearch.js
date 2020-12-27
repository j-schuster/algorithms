// Binary Search 

/*
    DIVIDE AND CONQUER BY CHUNKING AN ARRAY INTO SMALLER PIECES
    ARRAY MUST BE SORTED

    BIG O: BEST CASE = O(1), WORST CASE O(LOG N)
 */

const binarySearch = (arr, num) => {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);

    while (arr[middle] !== num && start <= end) {
        if (num > arr[middle]) start = middle + 1;
        else end = middle - 1;
        middle = Math.floor((start + end) / 2);
    }
    return arr[middle] === num ? middle : -1;
}

console.log(binarySearch([1, 2, 4, 7, 9, 12, 14, 23, 25, 26, 27, 38, 45], 26));