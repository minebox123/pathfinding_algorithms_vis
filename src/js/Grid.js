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
            // div.classList.add("node");
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
            let twoDimArr = [];
            for (let i = 0; i < gridHeight / this.node.height; i++) {
                twoDimArr.push([]);
                for (let j = 0; j < gridWidth / this.node.width; j++) {
                    twoDimArr[i].push(this.node.createNode());
                    twoDimArr[i][j].id = `${i}-${j}`;
                    gridDiv.append(twoDimArr[i][j]);
                }
            }
            // Dijkstra's algorithm
            // for (let i = 0; i < twoDimArr.length; i++) {
            //   for (let j = 0; j < twoDimArr[i].length; j++) {
            //     // set source and target nodes
            //     if (i === twoDimArr.length / 2 && j === twoDimArr.length / 3) {
            //       twoDimArr[i][j].classList.add("source");
            //     } else if (i === twoDimArr.length / 2 && j === twoDimArr.length) {
            //       twoDimArr[i][j].classList.add("target");
            //     } else {
            //       twoDimArr[i][j].classList.add("infinity"); // set all other nodes to infinite value
            //     }
            //     twoDimArr[i][j].id = `${i}-${j}`;
            //     gridDiv.append(twoDimArr[i][j]);
            //   }
            // }
            const INF = Number.MAX_SAFE_INTEGER;
            function minDistance(dist, visited) {
                let min = INF;
                let minIndex = -1;
                for (let v = 0; v < dist.length; v++) {
                    if (visited[v] === false && dist[v] <= min) {
                        min = dist[v];
                        minIndex = v;
                    }
                }
                return minIndex;
            }
            function dijkstra(graph, src) {
                const dist = [];
                const visited = [];
                const length = graph.length;
                for (let i = 0; i < length; i++) {
                    dist[i] = INF;
                    visited[i] = false;
                }
                dist[12] = 0;
                for (let i = 0; i < length - 1; i++) {
                    const u = minDistance(dist, visited);
                    visited[u] = true;
                    for (let v = 0; v < length; v++) {
                        if (!visited[v] && graph[u][v] !== 0 && dist[u] !== INF && dist[u] + graph[u][v] < dist[v]) {
                            dist[v] = dist[u] + graph[u][v];
                        }
                    }
                }
                return dist;
            }
            const a = dijkstra(twoDimArr, 12);
            console.log(a);
            // for (let i = 2; i <= gridHeight / this.node.height; i++) {
            //   gridDiv.append(this.node.createNode());
            //   for (let j = 2; j <= gridWidth / this.node.width; j++) {
            //     gridDiv.append(this.node.createNode());
            //   }
            // }
        }
        ;
        nodesSetup() {
            let nodes = Array.from(document.querySelectorAll(".node"));
            let currentNode = nodes[nodes.length / 2 - 8];
            currentNode.classList.add("currentNode");
            let targetNode = nodes[nodes.length / 2 + 8];
            targetNode.classList.add("targetNode");
            let unvisitedSet = new Set();
            // nodes.map(node => {
            //   if (node.className !== "node currentNode") {
            //     node.setAttribute("distance", "infinity")
            //   } else if (node.className === "node targetNode") {
            //     node.setAttribute("distance", "target")
            //   } else {
            //     node.setAttribute("distance", "0")
            //   };
            //   unvisitedSet.add(node);
            // });
            const obj = {
                currentNode,
                targetNode,
                unvisitedSet
            };
            return obj;
        }
        ;
        targetSearch() {
            ;
            let { currentNode, targetNode, unvisitedSet } = this.nodesSetup();
            let set = Array.from(unvisitedSet);
            let startingPointIndex = set.indexOf(currentNode);
            for (let i = 0; i < set.length; i++) {
                if (set[startingPointIndex + i].getAttribute("distance") === "infinity") {
                    if (set[startingPointIndex + i].className === "node targetNode") {
                        set[startingPointIndex + i].classList.add("found");
                        break;
                    }
                    set[startingPointIndex + i].setAttribute("distance", "checked");
                }
                ;
            }
            ;
        }
        ;
        createWall() {
            let nodes = Array.from(document.querySelectorAll(".node"));
            nodes.map(node => {
                node.addEventListener("click", () => {
                    if (!node.className.includes("currentNode") && !node.className.includes("targetNode")) {
                        node.classList.add("wall");
                    }
                });
            });
        }
        ;
    }
    Field.Grid = Grid;
})(Field || (Field = {}));
//# sourceMappingURL=Grid.js.map