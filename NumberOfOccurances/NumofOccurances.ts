function countNumberOfOccurances(str: string) {
	let result: unknown[] = [];
	for (let i = 0; i < str.length; i++) {
		let counter: number = 1;
		while (i < str.length && str[i] === str[i + 1]) {
			counter++;
			i++;
		}
		result.push(`${str[i]}${counter}`);
	}
	return result.join('');
}

const occuranceResult = countNumberOfOccurances('aaabbcccddee');
console.log(occuranceResult, 'occuranceResult');
