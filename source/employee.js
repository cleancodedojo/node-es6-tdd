import Person from "./person";

class Employee extends Person {
    constructor(name, title) {
        super();
        this.name = name;
        this.title = title;
    }

    greet() {
        if (this.canTalk) {
            console.log('Hi, I am ' + this.name + ', the ' + this.title);
        }
    }
}

export default Employee;
