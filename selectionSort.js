/*
    SELECTION SORT

    SORTS AN ARRAY ALMOST LIKE BUBBLE SORT (COMPARING NEIGHBORING ITEMS AND PERFORMING A SWAP)
    SELECTIONSORT THOUGH CHECKS FOR THE LOWEST NUMBER IN EACH ITERATION, CAMPARES IT TO THE CURRENT LOWEST AND PERFORMS A SWAP IF MATCHED
    THE PRFORMAANCE OPTIMIZATION PREVENTS REDUNDANT SWAPS
    
    BIG O = 0(N2)
*/

const selectionSort = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i + 1; j < arr.length; j++) {
            console.log(i, j);
            if (arr[j] < arr[lowest]) {
                lowest = j;
            }
        }

        if (i !== lowest) {
            [arr[i], arr[lowest]] = [arr[lowest], arr[i]]
        }
    }
    return arr;
}

console.log(selectionSort([9, 8, 7, 6, 5, 4, 3, 2, 1]));