class Main {
  public grid: Grid;

  constructor() {
    this.grid = new Grid();
  }

  start(): void {
    // draw grid
    this.grid.createGrid();
  }
}


const main = new Main();
main.start();
