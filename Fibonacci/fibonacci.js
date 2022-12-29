function getFibbo(n) {
	var fibonacciArr = [];

	for (var i = 0; i < n; i++) {
		if (fibonacciArr.length <= 1) {
			fibonacciArr.push(i);
		} else {
			fibonacciArr.push(
				fibonacciArr[fibonacciArr.length - 1] +
					fibonacciArr[fibonacciArr.length - 2]
			);
		}
	}
	return fibonacciArr;
}

let result = getFibbo(7);
console.log(result);

// Big-O is O(n) because it contains only 1 loop - Liner
