class Cell {
  public width: number;
  public height: number;

  constructor() {
    this.width = 30;
    this.height = 30;
  }

  createCell(): HTMLDivElement {
    let div = document.createElement("div");
    div.style.width = `${this.width}px`;
    div.style.height = `${this.height}px`;
    div.classList.add("cell");
    return div;
  }
}

class Grid {
  private cell: Cell;

  constructor() {
    this.cell = new Cell();
  }

  createGrid(): void {
    let gridDiv: HTMLDivElement = document.querySelector(".grid");
    let gridWidth = gridDiv.clientWidth;
    let gridHeight = gridDiv.clientHeight;



    for (let i = 2; i <= gridHeight / this.cell.height; i++) {
      gridDiv.append(this.cell.createCell());
      for (let j = 2; j <= gridWidth / this.cell.width; j++) {
        gridDiv.append(this.cell.createCell());
      }
    }
  }
}
