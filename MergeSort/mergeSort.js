var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
function mergeSort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    var midIndex = arr.length / 2;
    var left = arr.slice(0, midIndex);
    var right = arr.slice(midIndex);
    return merge(mergeSort(left), mergeSort(right));
}
function merge(left, right) {
    var sortedArry = [];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArry.push(left.shift());
        }
        else {
            sortedArry.push(right.shift());
        }
    }
    return __spreadArray(__spreadArray(__spreadArray([], sortedArry), left), right);
}
var sortResult = mergeSort([2, -2, 12, 3, 4, -5]);
console.log(sortResult, 'sortResult');
