function checkIsPalindrome(str: string) {
	let string = str.toLowerCase();
	let start = 0;
	let end = string.length - 1;

	for (let i = 0; i < str.length; i++) {
		if (start === end) {
			return true;
		} else if (string[start] === string[end]) {
			start = start + 1;
			end = end - 1;
		} else {
			return false;
		}
	}
}

const palindromeResult = checkIsPalindrome('12121');
console.log(palindromeResult);
