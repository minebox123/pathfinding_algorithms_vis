var Cell = /** @class */ (function () {
    function Cell() {
        this.width = 30;
        this.height = 30;
    }
    Cell.prototype.createCell = function () {
        var div = document.createElement("div");
        div.style.width = this.width + "px";
        div.style.height = this.height + "px";
        div.classList.add("cell");
        return div;
    };
    return Cell;
}());
var Grid = /** @class */ (function () {
    function Grid() {
        this.cell = new Cell();
    }
    Grid.prototype.createGrid = function () {
        var gridDiv = document.querySelector(".grid");
        var gridWidth = gridDiv.clientWidth;
        var gridHeight = gridDiv.clientHeight;
        for (var i = 2; i <= gridHeight / this.cell.height; i++) {
            gridDiv.append(this.cell.createCell());
            for (var j = 2; j <= gridWidth / this.cell.width; j++) {
                gridDiv.append(this.cell.createCell());
            }
        }
    };
    return Grid;
}());
//# sourceMappingURL=Grid.js.map