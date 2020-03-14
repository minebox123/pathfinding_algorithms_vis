class Cell {
    constructor() {
        this.width = 30;
        this.height = 30;
    }
    createCell() {
        let div = document.createElement("div");
        div.style.width = `${this.width}px`;
        div.style.height = `${this.height}px`;
        div.classList.add("cell");
        return div;
    }
}
class Grid {
    constructor() {
        this.cell = new Cell();
    }
    createGrid() {
        let gridDiv = document.querySelector(".grid");
        let gridWidth = gridDiv.clientWidth;
        let gridHeight = gridDiv.clientHeight;
        for (let i = 2; i <= gridHeight / this.cell.height; i++) {
            gridDiv.append(this.cell.createCell());
            for (let j = 2; j <= gridWidth / this.cell.width; j++) {
                gridDiv.append(this.cell.createCell());
            }
        }
    }
    startedCells() {
        let cells = Array.from(document.querySelectorAll(".cell"));
        cells[cells.length / 2 - 8].classList.add("startedCell");
        cells[cells.length / 2 + 8].classList.add("startedCell");
    }
    createWall() {
        let cells = Array.from(document.querySelectorAll(".cell"));
        cells.map(cell => {
            cell.addEventListener("click", () => {
                cell.classList.add("wall");
            });
        });
    }
}
//# sourceMappingURL=Grid.js.map