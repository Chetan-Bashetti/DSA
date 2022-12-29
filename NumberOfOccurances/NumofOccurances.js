function countNumberOfOccurances(str) {
    var result = [];
    for (var i = 0; i < str.length; i++) {
        var counter = 1;
        while (i < str.length && str[i] === str[i + 1]) {
            counter++;
            i++;
        }
        result.push("" + str[i] + counter);
    }
    return result.join('');
}
var occuranceResult = countNumberOfOccurances('aaabbcccddee');
console.log(occuranceResult, 'occuranceResult');
