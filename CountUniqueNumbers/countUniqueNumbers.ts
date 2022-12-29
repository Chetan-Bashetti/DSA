function countUnique(list: number[]) {
	let obj = {};
	for (let i = 0; i < list.length; i++) {
		if (!obj[list[i]]) {
			obj[list[i]] = 0;
		} else obj[list[i]] = 1;
	}
	return Object.keys(obj).length;
}

const uniqueSet = countUnique([
	1, 1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8, 9, 9, 9, 10
]);
console.log(uniqueSet, 'uniqueSet');
