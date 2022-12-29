// Problem statement
// Give 2 arrays array1 and array2
// check if the the arrays1's i's square is present in the array2

function checkSquare(list1: number[], list2: number[]) {
	let squareStatus: boolean[] = [];
	for (let i = 0; i < list1.length; i++) {
		let tempSquare: boolean = false;
		for (let j = 0; j < list2.length; j++) {
			if (list1[i] * list1[i] === list2[j]) tempSquare = true;
		}
		squareStatus.push(tempSquare);
	}
	return squareStatus;
}

const squareResult = checkSquare([1, 2, 3, 4], [1, 16, 9, 4]);
console.log(squareResult);
