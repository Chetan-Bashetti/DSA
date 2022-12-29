// Problem statement
// Give 2 arrays array1 and array2
// check if the the arrays1's i's square is present in the array2
function checkSquare(list1, list2) {
    var squareStatus = [];
    for (var i = 0; i < list1.length; i++) {
        var tempSquare = false;
        for (var j = 0; j < list2.length; j++) {
            if (list1[i] * list1[i] === list2[j])
                tempSquare = true;
        }
        squareStatus.push(tempSquare);
    }
    return squareStatus;
}
var squareResult = checkSquare([1, 2, 3, 7], [1, 16, 9, 4]);
console.log(squareResult);
