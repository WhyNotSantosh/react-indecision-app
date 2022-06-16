class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hello ${this.name} `;
    }
    getDescription() {
        return `age is ${this.age} `
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        if (this.hasMajor()) {
            return super.getDescription() + ` ${this.major}`
        }
        return super.getDescription()
    }
}

class Traveller extends Person {
    constructor(name, age, location) {
        super(name, age);
        this.location = location;
    }
    getGreeting() {
        return this.location ? super.getGreeting() + ` from ${this.location} ` : super.getGreeting();
    }
}

const me = new Traveller('Santosh', 50, "Hyderabad");
console.log(me.getGreeting() + me.getDescription());

const me2 = new Traveller();
console.log(me2.getGreeting() + me2.getDescription());