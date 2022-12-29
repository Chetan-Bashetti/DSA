function getMaxString(str) {
    var map = {};
    var max = 0;
    var char = str[0];
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            if (!map[str[i]])
                map[str[i]] = 0;
            map[str[i]]++;
        }
    }
    for (var _i = 0, _a = Object.keys(map); _i < _a.length; _i++) {
        var j = _a[_i];
        if (map[j] > max) {
            max = map[j];
            char = j;
        }
    }
    return char;
}
var strResult = getMaxString('hello worldddd     ');
console.log(strResult);
