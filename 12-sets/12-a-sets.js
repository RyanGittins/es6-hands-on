const colors = new Set(["purple", "orange", "orange"]);

colors.add("red").add("green").add("blue").add("blue");

console.log("Values:", colors.values());
console.log("Size:", colors.size);
console.log("Contains red:", colors.has("red"));

colors.delete("green");

console.log("Size after deleting green:", colors.size);
console.log("Contains green after delete:", colors.has("green"));
