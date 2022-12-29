function findLargest(list, num) {
	var sum = 0;
	if (num > list.length) {
		throw new Error('Given num is grater than list');
	} else {
		for (var i = 0; i < list.length - num + 1; i++) {
			var temp = 0;
			for (var j = 0; j < num; j++) {
				temp += list[j + i];
			}
			if (temp > sum) sum = temp;
		}
	}
	return sum;
}
var result = findLargest([5, 6, 7, 9, 1, 2, 3, 4, 3], 5);
console.log(result, 'Sum of all');
