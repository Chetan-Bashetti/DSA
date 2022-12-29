function getMaxString(str: string) {
	let map = {};
	let max = 0;
	let char = str[0];
	for (let i = 0; i < str.length; i++) {
		if (str[i] !== ' ') {
			if (!map[str[i]]) map[str[i]] = 0;
			map[str[i]]++;
		}
	}

	for (let j of Object.keys(map)) {
		if (map[j] > max) {
			max = map[j];
			char = j;
		}
	}
	return char;
}

const strResult = getMaxString('hello worldddd     ');
console.log(strResult);
