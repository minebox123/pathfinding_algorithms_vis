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
      div.classList.add("node");
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

      let twoDimArr = [];
      for (let i = 0; i < gridHeight / this.node.height; i++) {
        twoDimArr.push([]);
        for (let j = 0; j < gridWidth / this.node.width; j++) {
          twoDimArr[i].push(this.node.createNode());
        }
      }

      for (let i = 0; i < twoDimArr.length; i++) {
        for (let j = 0; j < twoDimArr[i].length; j++) {
          gridDiv.append(twoDimArr[i][j]);
        }
      }


      // for (let i = 2; i <= gridHeight / this.node.height; i++) {
      //   gridDiv.append(this.node.createNode());
      //   for (let j = 2; j <= gridWidth / this.node.width; j++) {
      //     gridDiv.append(this.node.createNode());
      //   }
      // }
    };

    nodesSetup(): object {
      let nodes = Array.from(document.querySelectorAll(".node"));
      let currentNode: Element = nodes[nodes.length / 2 - 8];
      currentNode.classList.add("currentNode")
      let targetNode: Element = nodes[nodes.length / 2 + 8];
      targetNode.classList.add("targetNode");
      let unvisitedSet = new Set();
      nodes.map(node => {
        if (node.className !== "node currentNode") {
          node.setAttribute("distance", "infinity")
        } else {
          node.setAttribute("distance", "0")
        };

        unvisitedSet.add(node);
      });

      const obj: object = {
        currentNode,
        targetNode,
        unvisitedSet
      }
      return obj;
    };

    targetSearch() {
      interface Elements {
        currentNode?: Element,
        targetNode?: Element,
        unvisitedSet?: Set<Element>
      };
      let { currentNode, targetNode, unvisitedSet }: Elements = this.nodesSetup()

      let set = Array.from(unvisitedSet);
      let startingPointIndex = set.indexOf(currentNode);


      for (let i = 0; i < set.length; i++) {
        if (set[startingPointIndex + i].getAttribute("distance") === "infinity") {
          if (set[startingPointIndex + i].className === "node targetNode") {
            set[startingPointIndex + i].classList.add("found");
            break;
          }
          set[startingPointIndex + i].setAttribute("distance", "checked");
        };
      };
    };

    createWall(): void {
      let nodes = Array.from(document.querySelectorAll(".node"));
      nodes.map(node => {
        node.addEventListener("click", () => {
          if (!node.className.includes("currentNode") && !node.className.includes("targetNode")) {
            node.classList.add("wall");
          }
        });
      });
    };
  }

}
