const stuff = {a: 1, b: 2};

const a = stuff.a ? stuff.a : 'default-a';
const b = stuff.b ? stuff.b : 'default-b';
const c = stuff.c ? stuff.c : 'default-c';

console.log("a:", a);
console.log("b:", b);
console.log("c:", c);
