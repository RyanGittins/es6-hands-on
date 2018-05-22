const people = [
    {id: 1, name: {first: "Alice", last: "Anderson"}, age: 25},
    {id: 2, name: {first: "Bob", last: "Robertson"}, age: 33},
    {id: 3, name: {first: "Charlie", last: "Charlieson"}, age: 51},
];

const findById = function (id) {
    return people.find(function (person) {
        return person.id === id;
    });
}

const person = findById(1);

console.log(person);
