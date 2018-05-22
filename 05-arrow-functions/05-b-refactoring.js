const people = [
    {id: 1, name: {first: "Alice", last: "Anderson"}, age: 25},
    {id: 2, name: {first: "Bob", last: "Robertson"}, age: 33},
    {id: 3, name: {first: "Charlie", last: "Charlieson"}, age: 51},
];

const getFirstNames = function (people) {
    let firstNames = [];

    for (var i=0; i<people.length; i++) {
        var person = people[i];
        firstNames.push(person.name.first);
    }

    return firstNames;
}

const firstNames = getFirstNames(people);

console.log(firstNames);
