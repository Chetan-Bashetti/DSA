// Map is default DS of javascript
// Map DS are iteriables we can use for of loop on map DS

let map = new Map([
	['a', 1],
	['b', 2]
]);

console.log(map.size, 'Size');
map.set('c', 3);
console.log(map, 'MAP');

for (let [key, value] of map) {
	console.log(`${key}:${value}`);
}

console.log(map.has('c'));
console.log(map.get('a'));
