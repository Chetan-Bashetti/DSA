// Set in javaascript id data structue introduced in ES-2015

let set = new Set();
console.log(set, 'set');

set.add(1);
set.add(2);
set.add(3);
console.log(set, 'set');
set.delete(3);
console.log(set.size, 'set size');
console.log(set.has(3), 'set has');
console.log(set, 'set');
console.log(set.entries(), 'set entries');
