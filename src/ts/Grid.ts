class Grid {
  private rows: number;
  private cols: number;
  private width: number;
  private height: number;

  constructor() {
    this.rows;
    this.cols;
  }

  static createGrid(): void {
    let gridDiv: HTMLDivElement = document.querySelector(".grid");
    let width = gridDiv.clientWidth;
    let height = gridDiv.clientHeight;

    // let cell = document.createElement("div");
    // cell.classList.add("cell");
    // cell.style.width = "30px";
    // cell.style.height = "30px";

    for (let i = 0; i < Math.floor(width / 30); i++) {
      let cell = document.createElement("div");
      cell.classList.add("cell");
      cell.style.width = "30px";
      cell.style.height = "30px";
      gridDiv.append(cell);
      for (let j = 0; j < Math.floor(height / 30); j++) {
        let cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = "30px";
        cell.style.height = "30px";
        gridDiv.append(cell);
      }
    }
  }
}
