class Person {
    constructor(name, options = {}) {
        this.name    = name;
        this.age     = options.age;
        this.hobbies = options.hobbies;
    }

    introduceSelf() {
        console.log(`Hello, my name is ${this.name}.`);
    }

    listHobbies() {
        if (!this.hobbies) {
            return console.log("I'm boring.");
        }

        const hobbies = this.hobbies.join(" and ");

        console.log(`I am interested in ${hobbies}.`);
    }
}

const bill = new Person("Bill", {
    age: 35,
    hobbies: ["biking", "woodworking"],
});

bill.introduceSelf();
bill.listHobbies();
