function sort(list: number[]) {
	for (let i = 0; i < list.length; i++) {
		for (let j = 0; j < list.length; j++) {
			if (list[j + 1] < list[j]) {
				[list[j + 1], list[j]] = [list[j], list[j + 1]];
			}
		}
	}
	console.log(list);
}

const sortResult = sort([4, 2, 1, 5, 9, 7, 5, 2, 10, 0, -1]);
