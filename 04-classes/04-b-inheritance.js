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

class Employee extends Person {
    constructor(id, name, options = {}) {
        super(name, options);

        this.id = id;
    }

    sayId() {
        console.log(`My id is ${this.id}.`);
    }

    introduceSelf() {
        console.log(`My name is ${this.name} and my id is ${this.id}.`);
    }
}

const bill = new Employee(7, "Bill");

bill.introduceSelf();
