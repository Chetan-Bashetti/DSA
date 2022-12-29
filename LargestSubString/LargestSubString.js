// Problem statement - There is given string s = 'abcabcbb'
// where you have to find out the largest sub string without repetation of any char
function getLargestSubString(str) {
    var start = 0;
    var end = 0;
    var maxLength = 0;
    var uniqueCharSet = new Set();
    while (end < str.length) {
        if (!uniqueCharSet.has(str[end])) {
            uniqueCharSet.add(str[end]);
            end++;
            maxLength = Math.max(maxLength, uniqueCharSet.size);
        }
        else {
            uniqueCharSet["delete"](str[end]);
            start++;
        }
    }
    return maxLength;
}
var subStringResult = getLargestSubString('abcabcbb');
console.log(subStringResult, 'maxLength');
