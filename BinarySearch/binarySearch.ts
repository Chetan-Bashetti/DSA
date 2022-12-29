function binarySearchAlgo(list: number[], num: number) {
	let min: number = 0;
	let max: number = list.length - 1;
	while (min <= max) {
		let midIndex = Math.floor((min + max) / 2);
		if (list[midIndex] < num) {
			min = midIndex + 1;
		} else if (list[midIndex] > num) {
			max = midIndex - 1;
		} else {
			return midIndex;
		}
	}
	return -1;
}

let searchresult = binarySearchAlgo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 9);
console.log(searchresult, 'searchresult');
