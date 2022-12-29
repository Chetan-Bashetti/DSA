function findLargest(list: number[], num: number): number {
	let sum: number = 0;
	if (num > list.length) {
		throw new Error('Given num is grater than list');
	} else {
		for (let i = 0; i < list.length - num + 1; i++) {
			let temp: number = 0;
			for (let j = 0; j < num; j++) {
				temp += list[j + i];
			}
			if (temp > sum) sum = temp;
		}
	}
	return sum;
}

let result = findLargest([5, 6, 7, 9, 1, 2, 3, 4, 3], 5);
console.log(result, 'Sum of all');
