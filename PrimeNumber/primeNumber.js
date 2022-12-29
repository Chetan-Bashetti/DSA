function isPrime(n) {
	var prime = {};
	if (n < 2) {
		return false;
	}
	for (var i = 0; i <= n; i++) {
		for (var j = 0; j <= n; j++) {
			if (i * j === n) {
				if (!prime[n]) {
					prime[n] = 0;
				}
				prime[n]++;
			}
		}
	}
	return Object.values(prime)[0] > 2 ? false : true;
}

let primeResult1 = isPrime(48);
let primeResult2 = isPrime(97);
let primeResult3 = isPrime(5);
let primeResult4 = isPrime(1);

console.log(primeResult1);
console.log(primeResult2);
console.log(primeResult3);
console.log(primeResult4);

// Big-O is O(n^2) because we have 2 loops here - Quederatic

// Optimal soluation

function getPrime(n) {
	if (n < 2) {
		return false;
	}

	for (let i = 2; i < n; i++) {
		if (n % i === 0) {
			return false;
		}
	}
	return true;
}

let isPrimeResult1 = getPrime(48);
let isPrimeResult2 = getPrime(97);
let isPrimeResult3 = getPrime(5);
let isPrimeResult4 = getPrime(1);

console.log(isPrimeResult1, 'Optimal');
console.log(isPrimeResult2, 'Optimal');
console.log(isPrimeResult3, 'Optimal');
console.log(isPrimeResult4, 'Optimal');

// Big-O is O(n) because we have 1 loop  here - Liner
