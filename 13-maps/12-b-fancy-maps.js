const crazy = new Map();

crazy.set("foo", 53);
crazy.set({ a : "b"}, (n) => n + 1);

console.log("Keys:", crazy.keys());
console.log("Values:", crazy.values());

const array = new Array();
crazy.set(array, new Date());

console.log("Has by value:", crazy.has(new Array()));
console.log("Has by reference:", crazy.has(array));
