class Person {
    constructor(name) {
        this.name = name;
    }

    introduceSelf() {
        console.log(`Hello, my name is ${this.getName()}.`);
    }

    getName() {
        return `Mr. ${this.name}`;
    }

    setName(name) {
        if ( /\d/.test(name)) {
            console.log("Name must not contain a digit!");
        } else {
            this.name = name;
        }
    }
}

const bill = new Person("Bill");

bill.setName("William");

bill.introduceSelf();
