var Field;
(function (Field) {
    class Node {
        constructor() {
            this.width = 30;
            this.height = 30;
        }
        createNode() {
            let div = document.createElement("div");
            div.style.width = `${this.width}px`;
            div.style.height = `${this.height}px`;
            div.classList.add("cell");
            return div;
        }
    }
    class Grid {
        constructor() {
            this.node = new Node();
        }
        createNode() {
            let gridDiv = document.querySelector(".grid");
            let gridWidth = gridDiv.clientWidth;
            let gridHeight = gridDiv.clientHeight;
            for (let i = 2; i <= gridHeight / this.node.height; i++) {
                gridDiv.append(this.node.createNode());
                for (let j = 2; j <= gridWidth / this.node.width; j++) {
                    gridDiv.append(this.node.createNode());
                }
            }
        }
        startedNodes() {
            let nodes = Array.from(document.querySelectorAll(".cell"));
            nodes[nodes.length / 2 - 8].classList.add("startedCell");
            nodes[nodes.length / 2 + 8].classList.add("startedCell");
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
    Field.Grid = Grid;
})(Field || (Field = {}));
//# sourceMappingURL=Grid.js.map