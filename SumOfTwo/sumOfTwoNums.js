// Quederatic way
// Time complaxity O(n^2) n2 because we are iterating 2 time with for loop
function getSumOfTwoNum(list) {
    for (var i = 0; i < list.length; i++) {
        for (var j = 0; j < list.length; j++) {
            if (list[i] + list[j] === 0) {
                return [list[i], list[j]];
            }
        }
    }
}
var result = getSumOfTwoNum([-5, -4, -3, 2, 1, 2, 4]);
console.log('Result quaderatic', result);
// Liner way get the sum of 2 nums
function getSumOfTwoNumByLiner(list) {
    var start = 0;
    var end = list.length - 1;
    while (start < end) {
        if (list[start] + list[end] === 0) {
            return [list[start], list[end]];
        }
        else if (list[start] + list[end] > 0) {
            end--;
        }
        else {
            start++;
        }
    }
}
var resultLiner = getSumOfTwoNumByLiner([-5, -4, -3, 2, 1, 2, 4]);
console.log('Result liner', resultLiner);
