function checkIsPalindrome(str) {
    var string = str.toLowerCase();
    var start = 0;
    var end = string.length - 1;
    for (var i = 0; i < str.length; i++) {
        if (start === end) {
            return true;
        }
        else if (string[start] === string[end]) {
            start = start + 1;
            end = end - 1;
        }
        else {
            return false;
        }
    }
}
var palindromeResult = checkIsPalindrome('12121');
console.log(palindromeResult);
