/*
    SORTS AN ARRAY BY UPDATING THE POSITION OF AN INDEX BY FINDING AND INSERTING IT
*/

const insertionSort = (arr = []) => {
    for (var i = 0; i < arr.length; i++) {
        const currentValue = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
            console.log(currentValue, arr[i], arr[j])
            arr[j + 1] = arr[j];
        }

        arr[j + 1] = currentValue;
        console.log(arr, currentValue);
    }
    return arr;
}

console.log(insertionSort([3, 2, 1, 0]))