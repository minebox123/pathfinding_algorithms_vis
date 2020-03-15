namespace Field {
  class Node {
    public width: number;
    public height: number;

    constructor() {
      this.width = 30;
      this.height = 30;
    }

    createNode(): HTMLDivElement {
      let div = document.createElement("div");
      div.style.width = `${this.width}px`;
      div.style.height = `${this.height}px`;
      div.classList.add("cell");
      return div;
    }
  }

  export class Grid {
    private node: Node;

    constructor() {
      this.node = new Node();
    }

    createNode(): void {
      let gridDiv: HTMLDivElement = document.querySelector(".grid");
      let gridWidth = gridDiv.clientWidth;
      let gridHeight = gridDiv.clientHeight;



      for (let i = 2; i <= gridHeight / this.node.height; i++) {
        gridDiv.append(this.node.createNode());
        for (let j = 2; j <= gridWidth / this.node.width; j++) {
          gridDiv.append(this.node.createNode());
        }
      }
    }

    startedNodes(): void {
      let nodes = Array.from(document.querySelectorAll(".cell"));
      nodes[nodes.length / 2 - 8].classList.add("startedCell");
      nodes[nodes.length / 2 + 8].classList.add("startedCell");
    }

    createWall(): void {
      let cells = Array.from(document.querySelectorAll(".cell"));
      cells.map(cell => {
        cell.addEventListener("click", () => {
          cell.classList.add("wall");
        });
      });
    }
  }

}
