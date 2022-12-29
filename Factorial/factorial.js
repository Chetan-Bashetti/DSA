function getFacto(n) {
	var facto = 1;
	if (n > 0) {
		for (var i = n; i > 0; i--) {
			facto = facto * i;
		}
	}
	return facto;
}

let result = getFacto(0);
console.log(result, 'Factorial');

// Big-O is O(n) because the for loop runs only once - Liner
