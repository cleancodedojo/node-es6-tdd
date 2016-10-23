class Grid {
    constructor(width, height) {
        this.matrix = new Array(width);
        for(let index = 0; index < width; index += 1) {
            this.matrix[index] = new Array(height);
        }

        for(let x = 0; x < width; x += 1) {
            for (let y = 0; y < height; y += 1){
                this.matrix[x][y] = 0;
            }
        }
    }

    getWidth() {
        return this.matrix.length;
    }

    getHeight() {
        return this.matrix[this.matrix.length - 1].length;
    }

    createLivingCell(x, y) {
        this.matrix[x][y] = 1;
    }

    getCell(x, y) {
        return this.matrix[x][y];
    }

    getNeighbors(x, y) {
        let neighborCount = 0;

        neighborCount += this.matrix[x - 1][y + 1];
        neighborCount += this.matrix[x][y + 1];
        neighborCount += this.matrix[x + 1][y + 1];
        neighborCount += this.matrix[x - 1][y];
        neighborCount += this.matrix[x + 1][y];
        neighborCount += this.matrix[x - 1][y - 1];
        neighborCount += this.matrix[x][y - 1];
        neighborCount += this.matrix[x + 1][y - 1];

        return neighborCount;
    }

    iterate(x, y) {
        if(this.getNeighbors(x, y) < 2) {
            this.matrix[x][y] = 0;
        }
    }
}

export default Grid;