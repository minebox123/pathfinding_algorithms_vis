class Main {
  public grid: Grid;

  constructor() {
    this.grid = new Grid();
  }

  start(): void {
    // draw grid
    this.grid.createGrid();
    this.grid.startedCells();
    this.grid.createWall()
  }
}


const main = new Main();
main.start();
