import Person from "./person";

class Mime extends Person {
    constructor(name) {
        super();
        this.name = name;
        this.canTalk = false;
    }
}

export default Mime;