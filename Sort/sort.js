function sort(list) {
    var _a;
    for (var i = 0; i < list.length; i++) {
        for (var j = 0; j < list.length; j++) {
            if (list[j + 1] < list[j]) {
                _a = [list[j], list[j + 1]], list[j + 1] = _a[0], list[j] = _a[1];
            }
        }
    }
    console.log(list);
}
var sortResult = sort([4, 2, 1, 5, 9, 7, 5, 2, 10, 0, -1]);
