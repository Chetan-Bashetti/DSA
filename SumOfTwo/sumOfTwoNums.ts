// Quederatic way
// Time complaxity O(n^2) n2 because we are iterating 2 time with for loop

function getSumOfTwoNum(list: number[]) {
	for (let i: number = 0; i < list.length; i++) {
		for (let j: number = 0; j < list.length; j++) {
			if (list[i] + list[j] === 0) {
				return [list[i], list[j]];
			}
		}
	}
}

let result = getSumOfTwoNum([-5, -4, -3, 2, 1, 2, 4]);
console.log('Result quaderatic', result);

// Liner way get the sum of 2 nums
// time compalixity O(n) because we are iterating only 1 loop
function getSumOfTwoNumByLiner(list: number[]) {
	let start = 0;
	let end = list.length - 1;
	while (start < end) {
		if (list[start] + list[end] === 0) {
			return [list[start], list[end]];
		} else if (list[start] + list[end] > 0) {
			end--;
		} else {
			start++;
		}
	}
}

let resultLiner = getSumOfTwoNumByLiner([-5, -4, -3, 2, 1, 2, 4]);
console.log('Result liner', resultLiner);
