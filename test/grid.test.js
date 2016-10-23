"use strict";

import {expect} from "chai";
import Grid from "../src/grid.js";

describe("Grid", () => {
    it("shall exist", () => {
        let grid = new Grid();

        expect(grid).to.be.defined;
    });

    it("will return an array of cells", () => {
        const grid = new Grid(10, 10);

        expect(grid.getWidth()).to.equal(10);
        expect(grid.getHeight()).to.equal(10);
    });

    it("shall have the ability to create living cells based on x, y coordinates", () => {
        const grid = new Grid(10, 10);

        grid.createLivingCell(5, 5);

        expect(grid.getCell(5, 5)).to.equal(1);
    });

    it("can check life of neighbors", () => {
        const grid = new Grid(10, 10);

        grid.createLivingCell(5, 5);

        expect(grid.getNeighbors(5, 5)).to.equal(0);
    });

    describe("underpopulation", () => {
        const grid = new Grid(10, 10);

        it("the living cell will die when neighbors < 2", () => {
            grid.createLivingCell(5, 5);
            grid.createLivingCell(6, 5);

            expect(grid.getCell(5, 5)).to.equal(1);

            grid.iterate(5, 5);

            expect(grid.getCell(5, 5)).to.equal(0);
        });
    });
});
