// Anagram basically check for similir length of the string and bot string are similar or not

function checkAnagram(string1: string, string2: string): boolean {
	let anagramResult: boolean = false;
	if (string1.length === string2.length) {
		string1 = string1
			.split('')
			.sort((a, b) => (a > b ? 1 : -1))
			.join('');
		string2 = string2
			.split('')
			.sort((a, b) => (a > b ? 1 : -1))
			.join('');
		if (string1 === string2) {
			anagramResult = true;
		}
	} else {
		anagramResult = false;
	}
	console.log(string1);
	console.log(string2);
	return anagramResult;
}

const isAnagram = checkAnagram('hello', 'llloh');
console.log(isAnagram, 'isAnagram');
