function mergeSort(arr: number[]) {
	if (arr.length < 2) {
		return arr;
	}
	let midIndex = arr.length / 2;
	let left = arr.slice(0, midIndex);
	let right = arr.slice(midIndex);

	return merge(mergeSort(left), mergeSort(right));
}

function merge(left: number[], right: number[]) {
	let sortedArry: number[] = [];
	while (left.length && right.length) {
		if (left[0] < right[0]) {
			sortedArry.push(left.shift());
		} else {
			sortedArry.push(right.shift());
		}
	}
	return [...sortedArry, ...left, ...right];
}

let sortResult = mergeSort([2, -2, 12, 3, 4, -5]);
console.log(sortResult, 'sortResult');
