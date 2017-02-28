import { expect } from "chai";
import Person from "../source/person";
import Employee from "../source/employee";
import Customer from "../source/customer";
import Mime from "../source/mime";

describe("Person", () => {
    it("shall exist", () => {
        let person = new Person();

        let bob = new Employee('Bob', 'Builder');
        bob.greet();

        let joe = new Customer('Joe');
        joe.greet();

        let rg = new Employee('Red Green', 'Handyman');
        let mike = new Customer('Mike');
        let mime = new Mime('Mime');

        rg.greet();

        mike.greet();

        mime.greet();
    });
});