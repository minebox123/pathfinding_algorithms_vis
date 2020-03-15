class Main {
  public grid: Field.Grid;

  constructor() {
    this.grid = new Field.Grid();
  }

  start(): void {
    // draw grid
    this.grid.createNode();
    this.grid.nodesSetup();
    document.querySelector("button").addEventListener("click", () => this.grid.targetSearch())
    // this.grid.targetSearch()
    this.grid.createWall()
  }
}


const main = new Main();
main.start();
