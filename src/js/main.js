var Main = /** @class */ (function () {
    function Main() {
        this.grid = new Grid();
    }
    Main.prototype.start = function () {
        // draw grid
        this.grid.createGrid();
    };
    return Main;
}());
var main = new Main();
main.start();
//# sourceMappingURL=main.js.map