/*
	To implement this algorithm it's helpful to implement the pivot helper first
	Given an array this function should designate an element as the pivot 
	It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot
	The order of the right and left does not matter
	It should mutate the array instead of creating a new one
	When done the function should return the index of the pivot

	PICKING A PIVOT 

	The runtime of quick sort can depend on the pivot is selected. Ideally we should choose the median value in the set. But for simplicity we caan starat at 0
*/

const pivot = (arr = [], start = 0, end = arr.length - 1) => {
	let pivot = arr[start];
	let swapIdx = start;

	const swap = (arr, idx1, idx2) => {
		[arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
	};

	for (let i = start + 1; i < arr.length; i++) {
		if (pivot > arr[i]) {
			swapIdx++;

			swap(arr, swapIdx, i);
		}
	}

	swap(arr, start, swapIdx);

	return swapIdx;
}

const quickSort = (arr, left = 0, right = arr.length - 1) => {
	if (left < right) {
		let pivotIndex = pivot(arr, left, right);
		// left
		quickSort(arr, left, pivotIndex - 1);
		// right
		quickSort(arr, pivotIndex + 1, right);
	}
	return arr;
}

quickSort([4, 6, 9, 1, 2, 5]);