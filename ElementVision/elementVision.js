function getVision(a) {
	console.clear();
	let sumofall = [];

	for (var i = 0; i < a.length; i++) {
		var obj = {};
		var left = 0;
		var right = 0;
		for (var j = 1; j < a[i + 1]; j++) {
			if (a[i + j] !== undefined) {
				if (!obj[a[i]]) {
					obj[a[i]] = 0;
				}
				obj[a[i]] += a[i + j];
				right += a[i + j];
			}
		}
		for (var k = a[i] - 1; k > 0; k--) {
			if (!obj[a[i]]) {
				obj[a[i]] = 0;
			}
			obj[a[i]] += a[i - k];
			left += a[i - k];
		}
		console.log(
			'I=>',
			a[i],
			'LEFT',
			left,
			'RIGHT',
			right,
			'TOTAL',
			left + right
		);
		sumofall.push(obj);
	}
	console.log(sumofall);
}

const result = getVision([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(result);
