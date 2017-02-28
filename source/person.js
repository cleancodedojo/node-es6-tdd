class Person {
    constructor() {
        this.canTalk = true;
    }

    greet() {
        if (this.canTalk) {
            console.log('Hi, I am ' + this.name);
        }
    }
    
}

export default Person;