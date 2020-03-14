var Grid = /** @class */ (function () {
    function Grid() {
        this.rows;
        this.cols;
    }
    Grid.createGrid = function () {
        var gridDiv = document.querySelector(".grid");
        var width = gridDiv.clientWidth;
        var height = gridDiv.clientHeight;
        // let cell = document.createElement("div");
        // cell.classList.add("cell");
        // cell.style.width = "30px";
        // cell.style.height = "30px";
        for (var i = 0; i < Math.floor(width / 30); i++) {
            var cell = document.createElement("div");
            cell.classList.add("cell");
            cell.style.width = "30px";
            cell.style.height = "30px";
            gridDiv.append(cell);
            for (var j = 0; j < Math.floor(height / 30); j++) {
                var cell_1 = document.createElement("div");
                cell_1.classList.add("cell");
                cell_1.style.width = "30px";
                cell_1.style.height = "30px";
                gridDiv.append(cell_1);
            }
        }
    };
    return Grid;
}());
//# sourceMappingURL=Grid.js.map