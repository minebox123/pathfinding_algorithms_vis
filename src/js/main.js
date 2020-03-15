class Main {
    constructor() {
        this.grid = new Field.Grid();
    }
    start() {
        // draw grid
        this.grid.createNode();
        this.grid.nodesSetup();
        document.querySelector("button").addEventListener("click", () => this.grid.targetSearch());
        // this.grid.targetSearch()
        this.grid.createWall();
    }
}
const main = new Main();
main.start();
//# sourceMappingURL=main.js.map