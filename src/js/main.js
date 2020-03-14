class Main {
    constructor() {
        this.grid = new Grid();
    }
    start() {
        // draw grid
        this.grid.createGrid();
        this.grid.startedCells();
        this.grid.createWall();
    }
}
const main = new Main();
main.start();
//# sourceMappingURL=main.js.map